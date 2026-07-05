/* ============================================================
   YouTube India DPDP Consent Prototype — Main Logic
   ============================================================ */

/**
 * Navigate between screens inside the phone mockup.
 * Updates the step navigation pills and annotation card visibility.
 */
function go(id) {
  // Switch active screen
  document.querySelectorAll('.screen').forEach(function(s) {
    s.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');

  // Scroll to top inside the new screen
  var sc = document.querySelector('#' + id + ' .scroll');
  if (sc) sc.scrollTop = 0;

  // Update step navigation pills
  updateStepNav(id);

  // Update annotation card visibility
  updateAnnotations(id);
}

/**
 * Show a temporary success toast on the home feed screen.
 */
function toast() {
  var t = document.getElementById('toastMsg');
  t.style.display = 'block';
  setTimeout(function() {
    t.style.display = 'none';
  }, 3200);
}

/**
 * Handle a data-rights request action.
 * Populates the confirmation screen and navigates to it.
 */
function requestRight(title, body) {
  document.getElementById('rightsTitle').innerText = 'Request received';
  document.getElementById('rReqType').innerText = title;
  document.getElementById('rightsBody').innerText = body;
  go('rights');
}

/**
 * Update step navigation pills to reflect the active screen.
 */
function updateStepNav(activeId) {
  var pills = document.querySelectorAll('.step-pill');
  pills.forEach(function(pill) {
    var target = pill.getAttribute('data-target');
    if (target === activeId) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });
}

/**
 * Update annotation card visibility based on the active screen.
 * Only the annotation matching the current screen is highlighted.
 */
function updateAnnotations(activeId) {
  var cards = document.querySelectorAll('.anno-card');
  cards.forEach(function(card) {
    var screen = card.getAttribute('data-screen');
    if (screen === activeId) {
      card.classList.add('visible');
    } else {
      card.classList.remove('visible');
    }
  });
}

// Initialize annotations on page load
document.addEventListener('DOMContentLoaded', function() {
  updateAnnotations('consent');
});
