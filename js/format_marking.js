/**
 * Formats raw marking scheme text into styled HTML matching the 2025 format.
 * Parses Question/sub-question/answer patterns and applies card styling.
 */
function formatMarkingScheme(rawText, year) {
  if (!rawText) return '<p>No data available.</p>';
  
  var lines = rawText.split('\n');
  var html = '';
  var inQuestion = false;
  var currentQ = '';
  var currentSub = '';
  var answerLines = [];
  
  function flushAnswer() {
    if (answerLines.length > 0) {
      var answer = answerLines.join(' ').trim();
      if (answer) {
        html += '<div class="working"><strong>Answer:</strong> ' + answer + '</div>\n';
      }
      answerLines = [];
    }
  }
  
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim();
    if (!line) continue;
    
    // Skip page headers/footers
    if (line.match(/^Leaving Certificate \d{4}/i)) continue;
    if (line.match(/^Biology|^Mathematics|^English|^Spanish/i) && line.match(/Higher Level/i)) continue;
    if (line.match(/^Marking Scheme\s*$/i)) continue;
    if (line.match(/^\d+\s*$/)) continue; // page numbers
    
    // Section headers: "Section A Best 5 100" or "Section B" or "Section C"
    var sectionMatch = line.match(/^(Section\s+[A-C])\b(.*)/i);
    if (sectionMatch) {
      flushAnswer();
      html += '<div class="card"><h2>' + sectionMatch[1] + '</h2>';
      if (sectionMatch[2].trim()) {
        html += '<p style="color:var(--text-light);">' + sectionMatch[2].trim() + '</p>';
      }
      html += '</div>\n';
      continue;
    }
    
    // Question headers: "Question 1", "Question 2 6(3) + 2"
    var qMatch = line.match(/^(?:Question|Q)\s*(\d+)\b(.*)/i);
    if (qMatch) {
      flushAnswer();
      var qNum = qMatch[1];
      var qMeta = qMatch[2].trim();
      var marks = '';
      var marksMatch = qMeta.match(/(\d+\(\d+\)|\d+\s*marks?)/i);
      if (marksMatch) marks = marksMatch[1];
      
      html += '<div class="card">\n';
      html += '<h2 style="color:var(--primary);">Q' + qNum + ': ' + year;
      if (marks) html += ' <span class="marks-badge">' + marks + '</span>';
      html += '</h2>\n';
      if (qMeta && !marks) html += '<p style="color:var(--text-light);font-size:0.85rem;">' + qMeta + '</p>\n';
      inQuestion = true;
      currentQ = qNum;
      continue;
    }
    
    // Sub-question: "(a) question text" or "(b)(i) text"
    var subMatch = line.match(/^\(([a-z])\)\s*(?:\((?:i+v?|vi*)\)\s*)?(.*)/i);
    if (subMatch) {
      flushAnswer();
      var subLetter = subMatch[1];
      var subText = subMatch[2].trim();
      
      // Check if it ends with a colon (question) or not (answer)
      if (subText.endsWith(':') || subText.endsWith('?') || subText.length > 20) {
        html += '<h3 style="margin-top:1rem;">(' + subLetter + ') ' + subText + '</h3>\n';
      } else if (subText) {
        html += '<h3 style="margin-top:1rem;">(' + subLetter + ')</h3>\n';
        answerLines.push(subText);
      }
      continue;
    }
    
    // Mark allocation lines: "Q1 (a) - (f) Number of correct responses..."
    // or "Mark 4 8 12 16 20 20"
    if (line.match(/^Q\d+\s*\(a\)\s*-\s*\([a-z]\)\s*Number/i) || line.match(/^Mark\s+\d+/)) {
      flushAnswer();
      html += '<div class="mark-info">' + line + '</div>\n';
      // Close the question card
      if (inQuestion) {
        html += '</div>\n';
        inQuestion = false;
      }
      continue;
    }
    
    // Roman numeral sub-parts: "(i)", "(ii)", "(iii)"
    var romanMatch = line.match(/^\((i+v?|vi*)\)\s*(.*)/i);
    if (romanMatch) {
      flushAnswer();
      html += '<p style="margin-left:1.5rem;"><strong>(' + romanMatch[1] + ')</strong> ' + romanMatch[2] + '</p>\n';
      continue;
    }
    
    // "or" on its own line — alternative answer
    if (line === 'or' || line === 'Or') {
      answerLines.push('<em>or</em>');
      continue;
    }
    
    // Answer lines (indented or following a question)
    // Answers often start with a capital letter or specific patterns
    if (line.match(/^[A-Z]:|^\s*[A-Z][a-z]/) || answerLines.length > 0 || (inQuestion && !line.match(/^[A-Z]{2,}/))) {
      answerLines.push(line);
    } else {
      flushAnswer();
      html += '<p>' + line + '</p>\n';
    }
  }
  
  flushAnswer();
  if (inQuestion) html += '</div>\n';
  
  return html;
}
