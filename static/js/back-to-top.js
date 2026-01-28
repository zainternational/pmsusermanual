/**
 * Back-to-top button for long doc pages.
 * Shows after user scrolls down, scrolls to top on click.
 */
(function () {
  var scrollThreshold = 200;
  var btn = document.createElement('button');
  btn.setAttribute('type', 'button');
  btn.setAttribute('aria-label', 'Back to top');
  btn.setAttribute('title', 'Back to top');
  btn.className = 'pms-back-to-top';
  btn.innerHTML = '↑';
  btn.style.cssText = [
    'position:fixed',
    'bottom:1.5rem',
    'right:1.5rem',
    'width:2.5rem',
    'height:2.5rem',
    'border-radius:50%',
    'border:1px solid rgba(0,0,0,0.1)',
    'background:var(--ifm-color-primary,#3578e5)',
    'color:#fff',
    'font-size:1.25rem',
    'line-height:1',
    'cursor:pointer',
    'box-shadow:0 2px 8px rgba(0,0,0,0.15)',
    'z-index:999',
    'opacity:0',
    'visibility:hidden',
    'transition:opacity 0.2s, visibility 0.2s',
  ].join(';');

  document.body.appendChild(btn);

  function toggleVisibility() {
    if (window.scrollY > scrollThreshold) {
      btn.style.opacity = '1';
      btn.style.visibility = 'visible';
    } else {
      btn.style.opacity = '0';
      btn.style.visibility = 'hidden';
    }
  }

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', toggleVisibility, { passive: true });
  toggleVisibility();
})();
