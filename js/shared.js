/* LC Study Portal - Shared JavaScript Engine */

// ============================================
// PROGRESS & STREAK TRACKING
// ============================================
const LCS = {
  getProgress(subject) {
    return JSON.parse(localStorage.getItem('lcs_' + subject + '_progress') || '{}');
  },
  saveProgress(subject, data) {
    localStorage.setItem('lcs_' + subject + '_progress', JSON.stringify(data));
  },
  trackView(subject, key) {
    const p = this.getProgress(subject);
    p[key] = (p[key] || 0) + 1;
    p[key + '_last'] = new Date().toLocaleDateString();
    this.saveProgress(subject, p);
    this.recordStudyDay();
  },
  getQuizHistory(subject) {
    return JSON.parse(localStorage.getItem('lcs_' + subject + '_quizzes') || '[]');
  },
  saveQuizResult(subject, score, total) {
    const h = this.getQuizHistory(subject);
    h.push({
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      score, total,
      pct: Math.round(score / total * 100)
    });
    localStorage.setItem('lcs_' + subject + '_quizzes', JSON.stringify(h));
  },
  getOverallStats() {
    const subjects = ['accounting', 'maths', 'english', 'spanish', 'biology', 'chemistry', 'economics'];
    let totalQuizzes = 0, totalScore = 0, totalPossible = 0;
    const perSubject = {};
    subjects.forEach(s => {
      const quizzes = this.getQuizHistory(s);
      const progress = this.getProgress(s);
      perSubject[s] = {
        quizCount: quizzes.length,
        avgScore: quizzes.length > 0 ? Math.round(quizzes.reduce((a, q) => a + q.pct, 0) / quizzes.length) : 0,
        lastStudied: null,
        topicsViewed: 0
      };
      // Count topics viewed
      Object.keys(progress).forEach(k => {
        if (k.startsWith('studied_') && !k.endsWith('_last')) perSubject[s].topicsViewed++;
        if (k.endsWith('_last') && (!perSubject[s].lastStudied || new Date(progress[k]) > new Date(perSubject[s].lastStudied))) {
          perSubject[s].lastStudied = progress[k];
        }
      });
      totalQuizzes += quizzes.length;
      quizzes.forEach(q => { totalScore += q.score; totalPossible += q.total; });
    });
    return { perSubject, totalQuizzes, avgScore: totalPossible > 0 ? Math.round(totalScore / totalPossible * 100) : 0 };
  },

  // Study streak
  recordStudyDay() {
    const today = new Date().toISOString().split('T')[0];
    let days = JSON.parse(localStorage.getItem('lcs_study_days') || '[]');
    if (!days.includes(today)) {
      days.push(today);
      localStorage.setItem('lcs_study_days', JSON.stringify(days));
    }
  },
  getStreak() {
    const days = JSON.parse(localStorage.getItem('lcs_study_days') || '[]').sort().reverse();
    if (days.length === 0) return 0;
    let streak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    for (let i = 0; i < days.length; i++) {
      const expected = new Date(today);
      expected.setDate(expected.getDate() - i);
      const expStr = expected.toISOString().split('T')[0];
      if (days.includes(expStr)) {
        streak++;
      } else {
        break;
      }
    }
    return streak;
  },
  getTotalDays() {
    return JSON.parse(localStorage.getItem('lcs_study_days') || '[]').length;
  }
};

// ============================================
// EXAM COUNTDOWN
// ============================================
function renderCountdown(targetDate, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  function update() {
    const now = new Date();
    const target = new Date(targetDate);
    const diff = target - now;

    if (diff <= 0) {
      container.innerHTML = '<p style="font-size:1.5rem;font-weight:700;color:var(--primary)">Exam time! You\'ve got this!</p>';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const weeks = Math.floor(days / 7);
    const remainDays = days % 7;

    container.innerHTML = `
      <div class="countdown-unit"><div class="number">${weeks}</div><div class="label">Weeks</div></div>
      <div class="countdown-unit"><div class="number">${remainDays}</div><div class="label">Days</div></div>
      <div class="countdown-unit"><div class="number">${hours}</div><div class="label">Hours</div></div>
      <div class="countdown-unit"><div class="number">${mins}</div><div class="label">Minutes</div></div>
    `;
  }
  update();
  setInterval(update, 60000);
}

// ============================================
// FLASHCARD ENGINE
// ============================================
class FlashcardEngine {
  constructor(cards, containerId, controlsId, counterId, filterId) {
    this.allCards = cards;
    this.currentCards = cards.slice();
    this.index = 0;
    this.isFlipped = false;
    this.containerId = containerId;
    this.controlsId = controlsId;
    this.counterId = counterId;
    this.filterId = filterId;
    this.render();
  }

  render() {
    if (this.currentCards.length === 0) {
      document.querySelector(`#${this.containerId} .flashcard-front h3`).textContent = 'No cards';
      document.querySelector(`#${this.containerId} .flashcard-front p`).textContent = 'Select a topic';
      document.querySelector(`#${this.containerId} .flashcard-back p`).textContent = '';
      document.getElementById(this.counterId).textContent = '0 / 0';
      return;
    }
    const c = this.currentCards[this.index];
    document.querySelector(`#${this.containerId} .flashcard-front h3`).textContent = c.cat.replace(/-/g, ' ').toUpperCase();
    document.querySelector(`#${this.containerId} .flashcard-front p`).textContent = c.q;
    document.querySelector(`#${this.containerId} .flashcard-back p`).textContent = c.a;
    document.getElementById(this.counterId).textContent = (this.index + 1) + ' / ' + this.currentCards.length;
    const card = document.querySelector(`#${this.containerId} .flashcard`);
    if (this.isFlipped) { card.classList.remove('flipped'); this.isFlipped = false; }
  }

  flip() {
    document.querySelector(`#${this.containerId} .flashcard`).classList.toggle('flipped');
    this.isFlipped = !this.isFlipped;
  }

  next() { this.index = (this.index + 1) % this.currentCards.length; this.render(); }
  prev() { this.index = (this.index - 1 + this.currentCards.length) % this.currentCards.length; this.render(); }

  shuffle() {
    for (let i = this.currentCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.currentCards[i], this.currentCards[j]] = [this.currentCards[j], this.currentCards[i]];
    }
    this.index = 0;
    this.render();
  }

  filter(topic) {
    this.currentCards = topic === 'all' ? this.allCards.slice() : this.allCards.filter(c => c.cat === topic);
    this.index = 0;
    this.render();
    if (this.filterId) {
      document.querySelectorAll(`#${this.filterId} button`).forEach(b => b.classList.remove('active'));
      if (event && event.target) event.target.classList.add('active');
    }
  }
}

// ============================================
// QUIZ ENGINE
// ============================================
class QuizEngine {
  constructor(questions, areaId, scoreId, subject) {
    this.allQuestions = questions;
    this.current = [];
    this.answered = [];
    this.score = 0;
    this.areaId = areaId;
    this.scoreId = scoreId;
    this.subject = subject;
  }

  start(topic, maxQuestions = 10) {
    this.current = topic === 'all' ? this.allQuestions.slice() : this.allQuestions.filter(q => q.topic === topic);
    // Shuffle
    for (let i = this.current.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.current[i], this.current[j]] = [this.current[j], this.current[i]];
    }
    this.current = this.current.slice(0, maxQuestions);
    this.answered = new Array(this.current.length).fill(false);
    this.score = 0;
    document.getElementById(this.scoreId).style.display = 'none';
    this.render();
  }

  render() {
    const area = document.getElementById(this.areaId);
    let html = '';
    this.current.forEach((q, i) => {
      html += `<div class="quiz-question" id="qq${i}"><h4>Question ${i + 1} of ${this.current.length}</h4><p><strong>${q.q}</strong></p><div class="quiz-options" id="qo${i}">`;
      q.options.forEach((opt, j) => {
        html += `<label id="ql${i}_${j}"><input type="radio" name="q${i}" value="${j}" onchange="quiz.check(${i},${j})"> ${opt}</label>`;
      });
      html += `</div><div class="quiz-feedback" id="qf${i}"></div></div>`;
    });
    area.innerHTML = html;
  }

  check(qi, ai) {
    if (this.answered[qi]) return;
    this.answered[qi] = true;
    const q = this.current[qi];
    const fb = document.getElementById('qf' + qi);
    document.querySelectorAll('#qo' + qi + ' label').forEach(l => l.style.pointerEvents = 'none');

    if (ai === q.correct) {
      this.score++;
      document.getElementById('ql' + qi + '_' + ai).classList.add('correct');
      fb.className = 'quiz-feedback show correct';
      fb.innerHTML = '<strong>Correct!</strong> ' + q.explain;
    } else {
      document.getElementById('ql' + qi + '_' + ai).classList.add('incorrect');
      document.getElementById('ql' + qi + '_' + q.correct).classList.add('correct');
      fb.className = 'quiz-feedback show incorrect';
      fb.innerHTML = '<strong>Not quite.</strong> ' + q.explain;
    }

    if (this.answered.every(a => a)) {
      setTimeout(() => {
        const scoreDiv = document.getElementById(this.scoreId);
        scoreDiv.style.display = 'block';
        scoreDiv.querySelector('#quizResult').innerHTML =
          `You scored <span class="stat">${this.score}/${this.current.length}</span> (${Math.round(this.score / this.current.length * 100)}%)`;
        LCS.saveQuizResult(this.subject, this.score, this.current.length);
      }, 500);
    }
  }
}

// ============================================
// TAB NAVIGATION (shared)
// ============================================
function showTab(tabId, subject) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tabId).classList.add('active');
  if (event && event.target) event.target.classList.add('active');
  if (subject) LCS.trackView(subject, 'viewed_' + tabId);
  if (tabId === 'progress' && typeof renderSubjectProgress === 'function') renderSubjectProgress();
}

function showQuestion(qId, subject) {
  document.querySelectorAll('.q-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.question-nav button').forEach(b => b.classList.remove('active'));
  document.getElementById('q-' + qId).classList.add('active');
  if (event && event.target) event.target.classList.add('active');
  if (subject) LCS.trackView(subject, 'studied_' + qId);
}

// Glossary filter
function filterGlossary() {
  const term = document.getElementById('glossarySearch').value.toLowerCase();
  document.querySelectorAll('.glossary-item').forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(term) ? 'block' : 'none';
  });
}
