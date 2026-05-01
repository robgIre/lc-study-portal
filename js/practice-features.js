/* LC Practice — Premium Features: Weak Topics, Spaced Repetition, Timed Mode, Side-by-Side, Surprise Me */

const PracticeFeatures = {

  // ─── 2. WEAK TOPICS ANALYSIS ──────────────────────
  analyseWeakTopics(history, entries) {
    const topicScores = {};

    for (const a of history.attempts) {
      const entry = this.findEntry(entries, a.year, a.num);
      if (!entry) continue;
      const topic = this.extractTopic(entry.label);
      if (!topicScores[topic]) topicScores[topic] = { total: 0, count: 0, questions: [] };
      topicScores[topic].total += a.pct;
      topicScores[topic].count++;
      if (!topicScores[topic].questions.find(q => q.key === a.key)) {
        topicScores[topic].questions.push({ key: a.key, year: a.year, num: a.num, label: entry.label });
      }
    }

    const results = [];
    for (const [topic, data] of Object.entries(topicScores)) {
      const avg = Math.round(data.total / data.count);
      results.push({ topic, avg, count: data.count, questions: data.questions });
    }

    results.sort((a, b) => a.avg - b.avg);
    return results;
  },

  renderWeakTopics(containerId, history, allEntries, startPracticeFn) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const analysis = this.analyseWeakTopics(history, allEntries);
    if (analysis.length === 0) {
      container.innerHTML = '<div class="wt-empty">Start practising to see your weak topics here.</div>';
      return;
    }

    const weak = analysis.filter(t => t.avg < 70);
    const strong = analysis.filter(t => t.avg >= 70);

    let html = '';

    if (weak.length > 0) {
      html += '<div class="wt-section"><h3 class="wt-head wt-head-weak">Topics to Improve</h3>';
      for (const t of weak.slice(0, 8)) {
        const barColor = t.avg < 40 ? 'var(--danger)' : 'var(--warning)';
        html += '<div class="wt-row" onclick="' + startPracticeFn + '(\'' + t.questions[0].year + '\',' + t.questions[0].num + ')">' +
          '<div class="wt-info"><span class="wt-topic">' + this.esc(t.topic) + '</span>' +
          '<span class="wt-meta">' + t.count + ' attempts</span></div>' +
          '<div class="wt-bar-wrap"><div class="wt-bar" style="width:' + t.avg + '%;background:' + barColor + '"></div></div>' +
          '<span class="wt-pct" style="color:' + barColor + '">' + t.avg + '%</span></div>';
      }
      html += '</div>';
    }

    if (strong.length > 0) {
      html += '<div class="wt-section"><h3 class="wt-head wt-head-strong">Strong Topics</h3>';
      for (const t of strong.slice(0, 5)) {
        html += '<div class="wt-row">' +
          '<div class="wt-info"><span class="wt-topic">' + this.esc(t.topic) + '</span>' +
          '<span class="wt-meta">' + t.count + ' attempts</span></div>' +
          '<div class="wt-bar-wrap"><div class="wt-bar" style="width:' + t.avg + '%;background:var(--success)"></div></div>' +
          '<span class="wt-pct" style="color:var(--success)">' + t.avg + '%</span></div>';
      }
      html += '</div>';
    }

    container.innerHTML = html;
  },

  // ─── 3. SPACED REPETITION — DAILY PRACTICE ───────
  getDailyPractice(history, allEntries, count) {
    count = count || 5;
    const candidates = [];

    for (const [year, entries] of Object.entries(allEntries)) {
      for (const entry of entries) {
        if (!entry.q || entry.q.startsWith('Key concepts')) continue;
        const key = year + '_' + entry.num;
        const best = history.best[key];
        const lastAttempts = history.attempts.filter(a => a.key === key);
        const lastDate = lastAttempts.length > 0 ? new Date(lastAttempts[0].date) : null;
        const daysSince = lastDate ? (Date.now() - lastDate.getTime()) / (1000 * 60 * 60 * 24) : 999;

        let priority = 50;
        if (!best) {
          priority = 80;
        } else if (best.pct < 40) {
          priority = 100 - best.pct + Math.min(daysSince * 2, 30);
        } else if (best.pct < 70) {
          priority = 70 - best.pct + Math.min(daysSince, 20);
        } else {
          priority = Math.min(daysSince * 0.5, 30);
        }

        priority += Math.random() * 10;

        candidates.push({ year, num: entry.num, entry, key, priority, bestPct: best ? best.pct : null, daysSince: Math.round(daysSince) });
      }
    }

    candidates.sort((a, b) => b.priority - a.priority);
    return candidates.slice(0, count);
  },

  renderDailyPractice(containerId, history, allEntries, startPracticeFn) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const daily = this.getDailyPractice(history, allEntries, 5);

    let html = '<div class="dp-header"><h3>Recommended Practice</h3><p>Questions selected based on your performance and what you haven\'t practised recently.</p></div>';

    for (const item of daily) {
      const topic = this.extractTopic(item.entry.label);
      let badge = '';
      if (item.bestPct === null) badge = '<span class="dp-badge dp-new">New</span>';
      else if (item.bestPct < 40) badge = '<span class="dp-badge dp-weak">Needs work (' + item.bestPct + '%)</span>';
      else if (item.bestPct < 70) badge = '<span class="dp-badge dp-ok">Improving (' + item.bestPct + '%)</span>';
      else badge = '<span class="dp-badge dp-review">Review (' + item.daysSince + 'd ago)</span>';

      html += '<div class="dp-card" onclick="' + startPracticeFn + '(\'' + item.year + '\',' + item.num + ')">' +
        '<div class="dp-top"><span class="dp-year">' + item.year + '</span><span class="dp-q">Q' + item.num + '</span>' + badge + '</div>' +
        '<div class="dp-topic">' + this.esc(topic) + '</div></div>';
    }

    container.innerHTML = html;
  },

  // ─── 4. TIMED EXAM MODE ──────────────────────────
  timedMode: {
    active: false,
    startTime: null,
    duration: 0,
    timerId: null,
    questions: [],
    currentIdx: 0,
    results: []
  },

  startTimedMode(allEntries, section, numQuestions, minutesPerQ, startPracticeFn, onCompleteFn) {
    const candidates = [];
    for (const [year, entries] of Object.entries(allEntries)) {
      for (const entry of entries) {
        if (!entry.q || entry.q.startsWith('Key concepts')) continue;
        candidates.push({ year, num: entry.num, entry });
      }
    }

    for (let i = candidates.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
    }

    const selected = candidates.slice(0, numQuestions || 6);
    this.timedMode.active = true;
    this.timedMode.questions = selected;
    this.timedMode.currentIdx = 0;
    this.timedMode.results = [];
    this.timedMode.duration = (minutesPerQ || 7) * selected.length * 60;
    this.timedMode.startTime = Date.now();
    this.timedMode.onComplete = onCompleteFn;
    this.timedMode.startPractice = startPracticeFn;

    this.startTimer();

    const first = selected[0];
    startPracticeFn(first.year, first.num);
  },

  startTimer() {
    const timerEl = document.getElementById('examTimer');
    if (!timerEl) return;
    timerEl.style.display = 'flex';

    if (this.timedMode.timerId) clearInterval(this.timedMode.timerId);
    this.timedMode.timerId = setInterval(() => {
      const elapsed = (Date.now() - this.timedMode.startTime) / 1000;
      const remaining = Math.max(0, this.timedMode.duration - elapsed);
      const mins = Math.floor(remaining / 60);
      const secs = Math.floor(remaining % 60);
      timerEl.querySelector('.timer-time').textContent = mins + ':' + (secs < 10 ? '0' : '') + secs;

      const qInfo = timerEl.querySelector('.timer-q');
      if (qInfo) qInfo.textContent = 'Q' + (this.timedMode.currentIdx + 1) + '/' + this.timedMode.questions.length;

      if (remaining <= 0) {
        clearInterval(this.timedMode.timerId);
        this.endTimedMode();
      }
    }, 1000);
  },

  nextTimedQuestion() {
    this.timedMode.currentIdx++;
    if (this.timedMode.currentIdx >= this.timedMode.questions.length) {
      this.endTimedMode();
      return;
    }
    const q = this.timedMode.questions[this.timedMode.currentIdx];
    this.timedMode.startPractice(q.year, q.num);
  },

  recordTimedResult(pct) {
    this.timedMode.results.push(pct);
  },

  endTimedMode() {
    this.timedMode.active = false;
    if (this.timedMode.timerId) clearInterval(this.timedMode.timerId);
    const timerEl = document.getElementById('examTimer');
    if (timerEl) timerEl.style.display = 'none';
    if (this.timedMode.onComplete) this.timedMode.onComplete(this.timedMode.results);
  },

  renderTimedResults(containerId, results) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const avg = results.length > 0 ? Math.round(results.reduce((s, r) => s + r, 0) / results.length) : 0;
    const pctCls = avg >= 70 ? 'score-good' : avg >= 40 ? 'score-ok' : 'score-low';

    let html = '<div class="results"><div class="score-block ' + pctCls + '">' +
      '<div class="score-pct">' + avg + '%</div>' +
      '<div class="score-marks">Mock Exam Average</div>' +
      '<div class="score-label">' + results.length + ' questions completed</div></div>';

    html += '<div class="timed-breakdown">';
    results.forEach((r, i) => {
      const cls = r >= 70 ? 'score-good' : r >= 40 ? 'score-ok' : 'score-low';
      html += '<div class="timed-q-result"><span>Q' + (i + 1) + '</span><span class="' + cls + '" style="font-weight:700">' + r + '%</span></div>';
    });
    html += '</div></div>';

    container.innerHTML = html;
  },

  // ─── 5. SIDE-BY-SIDE COMPARISON ──────────────────
  renderSideBySide(userAnswer, modelAnswer, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const userNorm = userAnswer.toLowerCase();
    const modelNorm = modelAnswer.replace(/\\n/g, '\n');

    const modelTerms = this.extractKeyTerms(modelNorm);
    const matched = modelTerms.filter(t => userNorm.includes(t.toLowerCase()));
    const missed = modelTerms.filter(t => !userNorm.includes(t.toLowerCase()));

    let html = '<div class="sbs-container">';

    html += '<div class="sbs-panel"><h4 class="sbs-head sbs-yours">Your Answer</h4><div class="sbs-text">';
    let highlightedUser = this.esc(userAnswer);
    matched.forEach(term => {
      const regex = new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
      highlightedUser = highlightedUser.replace(regex, '<mark class="sbs-hit">$1</mark>');
    });
    html += highlightedUser.replace(/\n/g, '<br>');
    html += '</div></div>';

    html += '<div class="sbs-panel"><h4 class="sbs-head sbs-model">Model Answer</h4><div class="sbs-text">';
    let highlightedModel = this.esc(modelNorm);
    matched.forEach(term => {
      const regex = new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
      highlightedModel = highlightedModel.replace(regex, '<mark class="sbs-hit">$1</mark>');
    });
    missed.forEach(term => {
      const regex = new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
      highlightedModel = highlightedModel.replace(regex, '<mark class="sbs-miss">$1</mark>');
    });
    html += highlightedModel.replace(/\n/g, '<br>');
    html += '</div></div>';

    if (missed.length > 0) {
      html += '<div class="sbs-missed"><strong>Key terms you missed:</strong> ' + missed.slice(0, 10).join(', ') + '</div>';
    }

    html += '</div>';
    container.innerHTML = html;
  },

  extractKeyTerms(text) {
    const stop = new Set(['that','this','with','from','will','have','been','were','they','their',
      'which','when','what','would','could','should','about','there','these','those','than','then',
      'them','other','more','some','also','into','such','each','does','being','make','made','very',
      'much','most','only','over','after','before','between','through','under','answer','explain',
      'outline','discuss','state','question']);

    const words = text.toLowerCase().split(/[\s,;:.!?()\[\]{}]+/).filter(w => w.length >= 4 && !stop.has(w));
    const freq = {};
    words.forEach(w => { freq[w] = (freq[w] || 0) + 1; });

    return [...new Set(words)].filter(w => freq[w] >= 1).slice(0, 30);
  },

  // ─── 6. SURPRISE ME ──────────────────────────────
  surpriseMe(allEntries, startPracticeFn) {
    const candidates = [];
    for (const [year, entries] of Object.entries(allEntries)) {
      for (const entry of entries) {
        if (!entry.q || entry.q.startsWith('Key concepts')) continue;
        candidates.push({ year, num: entry.num });
      }
    }
    if (candidates.length === 0) return;
    const pick = candidates[Math.floor(Math.random() * candidates.length)];
    startPracticeFn(pick.year, pick.num);
  },

  // ─── HELPERS ─────────────────────────────────────
  findEntry(allEntries, year, num) {
    const yearEntries = allEntries[year];
    if (!yearEntries) return null;
    return yearEntries.find(e => e.num === num) || null;
  },

  extractTopic(label) {
    return label.replace(/^Q\d+[A-Za-z]*:\s*/, '').replace(/\s*\(.*?\)\s*$/, '').trim() || 'General';
  },

  esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
};
