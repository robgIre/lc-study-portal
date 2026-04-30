/* LC Practice Marking Engine — multi-layer text analysis */
const MarkingEngine = {
  normalize(t) {
    return t.toLowerCase().replace(/[''´`]/g,"'").replace(/[""]/g,'"')
      .replace(/[^\w\s'.€£$%+\-]/g,' ').replace(/\s+/g,' ').trim();
  },

  words(t) { return this.normalize(t).split(/\s+/); },

  hasAny(text, terms) {
    const n = this.normalize(text);
    return terms.some(t => {
      const lc = t.toLowerCase();
      if (lc.includes(' ')) return n.includes(lc);
      return new RegExp('\\b'+lc.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'(?:s|es|ed|ing|ly)?\\b').test(n);
    });
  },

  hasAll(text, terms) {
    return terms.every(t => this.hasAny(text, t.split('|')));
  },

  near(text, g1, g2, d) {
    const w = this.words(text);
    const a1 = g1.split('|').map(s => s.toLowerCase());
    const a2 = g2.split('|').map(s => s.toLowerCase());
    for (let i = 0; i < w.length; i++) {
      if (a1.some(a => w[i].includes(a))) {
        for (let j = Math.max(0, i - (d||8)); j < Math.min(w.length, i + (d||8) + 1); j++) {
          if (i !== j && a2.some(a => w[j].includes(a))) return true;
        }
      }
    }
    return false;
  },

  hasNum(text, nums) {
    const n = this.normalize(text);
    return nums.some(num => n.includes(String(num)));
  },

  hasConnector(t) {
    const c = ['because','therefore','thus','hence','as a result','this means',
      'this leads to','consequently','due to','leading to','resulting in',
      'which means','so that','in order to'];
    return c.some(x => this.normalize(t).includes(x));
  },

  hasExample(t) {
    const m = ['for example','e.g.','eg.','such as','for instance','an example'];
    return m.some(x => this.normalize(t).includes(x));
  },

  rateCriterion(answer, c) {
    let checks = 0, pass = 0;
    if (c.all) { checks++; if (this.hasAll(answer, c.all)) pass++; }
    if (c.any) {
      checks++;
      if (c.any.some(g => {
        const parts = g.split('+');
        return parts.length > 1 ? this.hasAll(answer, parts) : this.hasAny(answer, [g]);
      })) pass++;
    }
    if (c.near) {
      for (const [w1, w2, d] of c.near) {
        checks++; if (this.near(answer, w1, w2, d || 8)) pass++;
      }
    }
    if (c.num) { checks++; if (this.hasNum(answer, c.num)) pass++; }
    if (c.phrase) {
      checks++;
      const pp = Array.isArray(c.phrase) ? c.phrase : [c.phrase];
      if (pp.some(p => this.normalize(answer).includes(p.toLowerCase()))) pass++;
    }
    return checks > 0 ? pass / checks : 0;
  },

  scorePoint(answer, pt) {
    let bestRatio = 0;
    for (const c of (pt.accept || [])) {
      const ratio = this.rateCriterion(answer, c);
      if (ratio > bestRatio) bestRatio = ratio;
    }

    if (pt.requireConnector && bestRatio > 0.5 && !this.hasConnector(answer)) {
      bestRatio *= 0.7;
    }

    let marks = 0;
    if (bestRatio >= 0.7) marks = pt.marks;
    else if (bestRatio >= 0.4) marks = Math.ceil(pt.marks * 0.5);

    if (pt.bonus && this.hasExample(answer)) {
      marks += (typeof pt.bonus === 'number' ? pt.bonus : 1);
    }

    return {
      matched: bestRatio >= 0.4,
      confidence: bestRatio,
      marks, maxMarks: pt.marks,
      desc: pt.desc,
      feedback: bestRatio >= 0.4 ? (pt.hit || pt.desc) : (pt.miss || 'Missing: ' + pt.desc)
    };
  },

  mark(answer, qData) {
    if (!answer || !answer.trim()) {
      return {
        score: 0, max: qData.totalMarks, pct: 0,
        points: qData.points.map(p => ({
          matched: false, confidence: 0, marks: 0, maxMarks: p.marks,
          desc: p.desc, feedback: p.miss || 'Missing: ' + p.desc
        })),
        warning: 'No answer provided.'
      };
    }

    const groups = {};
    const results = new Array(qData.points.length);

    qData.points.forEach((p, idx) => {
      if (p.group) {
        if (!groups[p.group]) groups[p.group] = [];
        groups[p.group].push({ point: p, idx });
      } else {
        results[idx] = this.scorePoint(answer, p);
      }
    });

    for (const members of Object.values(groups)) {
      const usedAccept = new Set();

      for (const { point, idx } of members) {
        let bestRatio = 0, bestAi = -1;

        for (let ai = 0; ai < (point.accept || []).length; ai++) {
          if (usedAccept.has(ai)) continue;
          const ratio = this.rateCriterion(answer, point.accept[ai]);
          if (ratio > bestRatio) { bestRatio = ratio; bestAi = ai; }
        }

        if (bestAi >= 0 && bestRatio >= 0.4) usedAccept.add(bestAi);

        if (point.requireConnector && bestRatio > 0.5 && !this.hasConnector(answer)) {
          bestRatio *= 0.7;
        }

        let marks = 0;
        if (bestRatio >= 0.7) marks = point.marks;
        else if (bestRatio >= 0.4) marks = Math.ceil(point.marks * 0.5);

        results[idx] = {
          matched: bestRatio >= 0.4,
          confidence: bestRatio,
          marks, maxMarks: point.marks,
          desc: point.desc,
          feedback: bestRatio >= 0.4 ? (point.hit || point.desc) : (point.miss || 'Missing: ' + point.desc)
        };
      }
    }

    const total = Math.min(results.reduce((s, r) => s + r.marks, 0), qData.totalMarks);
    const wc = answer.trim().split(/\s+/).length;

    return {
      score: total, max: qData.totalMarks,
      pct: Math.round(total / qData.totalMarks * 100),
      points: results, wordCount: wc,
      warning: wc < qData.totalMarks * 1.5
        ? 'Short answer (' + wc + ' words) for a ' + qData.totalMarks + '-mark question. Consider adding more detail.'
        : null
    };
  },

  autoMark(answer, model, totalMarks) {
    if (!answer || !answer.trim()) return { score: 0, max: totalMarks, pct: 0, auto: true, feedback: 'No answer provided.' };

    const stop = new Set(['that','this','with','from','will','have','been','were','they','their',
      'which','when','what','would','could','should','about','there','these','those','than','then',
      'them','other','more','some','also','into','such','each','does','being','make','made','very',
      'much','most','only','over','after','before','between','through','under','above','both',
      'just','because','while','where','during','like','even','your','using','explain','outline',
      'discuss','state','answer','question','point','example','refers','however','following']);

    const nM = this.normalize(model);
    const nA = this.normalize(answer);
    const terms = [...new Set(nM.split(/\s+/).filter(w => w.length >= 4 && !stop.has(w)))];
    let hit = 0;
    terms.forEach(t => { if (nA.includes(t)) hit++; });
    const cov = terms.length > 0 ? hit / terms.length : 0;
    const score = Math.min(Math.round(cov * totalMarks * 0.85), totalMarks);

    return {
      score, max: totalMarks,
      pct: Math.round(score / totalMarks * 100),
      coverage: Math.round(cov * 100),
      auto: true,
      feedback: 'Coverage: ~' + Math.round(cov * 100) + '% of key concepts from the model answer.',
      missed: terms.filter(t => !nA.includes(t)).slice(0, 8)
    };
  }
};
