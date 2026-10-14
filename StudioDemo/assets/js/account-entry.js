// A one-time entrance for successful account_aurora handoffs, including file://.
(() => {
  const url = new URL(window.location.href);
  if (url.searchParams.get('accountEntry') !== '1') return;
  url.searchParams.delete('accountEntry');
  try { history.replaceState(history.state, '', url.href); } catch (_) {}
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const root = document.documentElement;
  const style = document.createElement('style');
  style.textContent = `
    html.studio-account-enter body {
      animation: studio-account-reveal 1000ms ease-in-out both;
    }
    @keyframes studio-account-reveal {
      from { opacity: 0; filter: blur(10px); }
      to { opacity: 1; filter: blur(0); }
    }
    @media (prefers-reduced-motion: reduce) {
      html.studio-account-enter body { animation: none; }
    }
  `;
  document.head.append(style);
  root.classList.add('studio-account-enter');

  function cleanup() {
    root.classList.remove('studio-account-enter');
    style.remove();
    document.removeEventListener('animationend', onEnd);
  }
  function onEnd(event) {
    if (event.target === document.body && event.animationName === 'studio-account-reveal') cleanup();
  }
  document.addEventListener('animationend', onEnd);
  // Also release the filter if animations are disabled or interrupted.
  window.addEventListener('pageshow', () => setTimeout(cleanup, 1100), { once: true });
})();
