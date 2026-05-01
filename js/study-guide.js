/* LC Study Portal — Study Guide Renderer */

const StudyGuide = {
  render(data, containerId) {
    const container = document.getElementById(containerId);
    if (!container || !data || data.length === 0) {
      if (container) container.innerHTML = '<div class="empty">Study guide loading...</div>';
      return;
    }

    let html = '<div class="sg-search"><input type="text" id="sgSearch" placeholder="Search topics, terms, concepts..." oninput="StudyGuide.filter()"></div>';
    html += '<div id="sgTopics">';

    for (let ti = 0; ti < data.length; ti++) {
      const topic = data[ti];
      html += '<div class="sg-topic" data-idx="' + ti + '">';
      html += '<div class="sg-topic-head" onclick="StudyGuide.toggle(' + ti + ')">';
      html += '<span class="sg-icon">' + (topic.icon || '') + '</span>';
      html += '<span class="sg-topic-title">' + this.esc(topic.topic) + '</span>';
      html += '<span class="sg-count">' + topic.subtopics.length + ' concepts</span>';
      html += '<span class="sg-arrow" id="sgArrow' + ti + '">+</span>';
      html += '</div>';

      html += '<div class="sg-subtopics" id="sgSub' + ti + '" style="display:none">';
      for (const sub of topic.subtopics) {
        html += '<div class="sg-card">';
        html += '<h4 class="sg-sub-title">' + this.esc(sub.title) + '</h4>';
        html += '<div class="sg-content">' + this.formatContent(sub.content) + '</div>';

        if (sub.keyTerms && sub.keyTerms.length > 0) {
          html += '<div class="sg-terms">';
          sub.keyTerms.forEach(t => { html += '<span class="sg-term">' + this.esc(t) + '</span>'; });
          html += '</div>';
        }

        if (sub.formula) {
          html += '<div class="sg-formula">' + this.esc(sub.formula) + '</div>';
        }

        if (sub.examTip) {
          html += '<div class="sg-tip"><strong>Exam Tip:</strong> ' + this.esc(sub.examTip) + '</div>';
        }

        html += '</div>';
      }
      html += '</div></div>';
    }

    html += '</div>';
    container.innerHTML = html;
  },

  toggle(idx) {
    const sub = document.getElementById('sgSub' + idx);
    const arrow = document.getElementById('sgArrow' + idx);
    if (sub.style.display === 'none') {
      sub.style.display = 'block';
      arrow.textContent = '−';
    } else {
      sub.style.display = 'none';
      arrow.textContent = '+';
    }
  },

  expandAll() {
    document.querySelectorAll('.sg-subtopics').forEach(el => { el.style.display = 'block'; });
    document.querySelectorAll('.sg-arrow').forEach(el => { el.textContent = '−'; });
  },

  collapseAll() {
    document.querySelectorAll('.sg-subtopics').forEach(el => { el.style.display = 'none'; });
    document.querySelectorAll('.sg-arrow').forEach(el => { el.textContent = '+'; });
  },

  filter() {
    const term = document.getElementById('sgSearch').value.toLowerCase();
    document.querySelectorAll('.sg-topic').forEach(topic => {
      const cards = topic.querySelectorAll('.sg-card');
      let anyMatch = false;
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        const match = !term || text.includes(term);
        card.style.display = match ? 'block' : 'none';
        if (match) anyMatch = true;
      });
      topic.style.display = anyMatch ? 'block' : 'none';
      if (term && anyMatch) {
        topic.querySelector('.sg-subtopics').style.display = 'block';
        topic.querySelector('.sg-arrow').textContent = '−';
      }
    });
  },

  formatContent(text) {
    return text.replace(/\\n/g, '\n').split('\n').map(line => {
      const t = line.trim();
      if (!t) return '<br>';
      if (/^[-•]/.test(t)) return '<div class="sg-bullet">' + this.esc(t) + '</div>';
      return '<p>' + this.esc(t) + '</p>';
    }).join('');
  },

  esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
};
