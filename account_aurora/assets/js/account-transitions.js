/* Animate layout height, so flex auto margins keep the whole group centered. */
(() => {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const duration = 500;
  const easing = 'ease-in-out';
  let animations = [];
  let restore = null;
  let pending = null;
  let generation = 0;

  function cancel() {
    generation++;
    pending = null;
    animations.forEach(animation => animation.cancel());
    animations = [];
    restore?.();
    restore = null;
  }

  function animate(element, keyframes, options) {
    const animation = element.animate(keyframes, options);
    // Cancellation rejects finished, including decorative animations with no waiter.
    animation.finished.catch(() => {});
    animations.push(animation);
    return animation;
  }

  function enter(previous) {
    const modal = document.querySelector('#account-view .welcome-modal');
    const group = document.querySelector('.welcome-content');
    const slogan = document.querySelector('.welcome-slogan');
    if (!modal || !modal.getBoundingClientRect().height) return;
    const targetHeight = modal.getBoundingClientRect().height;
    const token = generation;
    modal.classList.add('is-route-transitioning');
    restore = () => modal.classList.remove('is-route-transitioning');

    // Animate real height rather than scale: text and corner radii stay crisp.
    const heightAnimation = animate(modal, [
      { height: previous.height + 'px' },
      { height: targetHeight + 'px' }
    ], { duration, easing, fill: 'both' });

    // Auto margins handle recentering. Compensate only for a previous scroll
    // offset or a changed heading layout, then ease that offset back to zero.
    const offset = previous.top - slogan.getBoundingClientRect().top;
    if (Math.abs(offset) > 0.5) {
      animate(group, [{ transform: `translateY(${offset}px)` }, { transform: 'translateY(0)' }],
        { duration, easing, fill: 'both' });
    }
    for (const child of modal.children) {
      animate(child, [{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration, easing, fill: 'both' });
    }
    heightAnimation.finished.then(() => {
      if (token === generation) cancel();
    }).catch(() => {});
  }

  window.AccountTransitions = {
    cancel,
    run(commit) {
      const modal = document.querySelector('#account-view .welcome-modal');
      const slogan = document.querySelector('.welcome-slogan');
      // Capture the current animated geometry before cancelling a quick switch.
      const previous = modal && slogan ? {
        height: modal.getBoundingClientRect().height,
        top: slogan.getBoundingClientRect().top
      } : null;
      cancel();
      if (!previous?.height || reducedMotion.matches || !modal.animate) {
        commit();
        return;
      }

      const token = generation;
      const oldHeight = modal.style.height;
      const oldInert = modal.inert;
      modal.style.height = previous.height + 'px';
      modal.inert = true;
      restore = () => { modal.style.height = oldHeight; modal.inert = oldInert; };
      const exits = Array.from(modal.children, child => animate(child,
        [{ opacity: getComputedStyle(child).opacity }, { opacity: 0 }],
        { duration: 70, easing, fill: 'both' }));
      pending = (withMotion = true) => {
        cancel();
        commit();
        if (withMotion && !reducedMotion.matches) enter(previous);
      };
      Promise.all(exits.map(animation => animation.finished)).then(() => {
        if (token === generation) pending?.();
      }).catch(() => {});
    }
  };

  // Finish at natural size if the viewport or motion preference changes mid-flight.
  function settle() {
    if (pending) pending(false);
    else cancel();
  }
  window.addEventListener('resize', settle, { passive: true });
  window.addEventListener('pagehide', settle);
  reducedMotion.addEventListener('change', settle);
})();
