/* Soft, short-lived light trails behind the page content and glass panel. */
(() => {
  const canvas = document.querySelector('.aurora-pointer-canvas');
  const context = canvas?.getContext('2d');
  if (!context) return;

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(any-pointer: fine)');
  const lifetime = 1500;
  const spacing = 16;
  const maxPoints = 64;
  const points = [];
  let previous = null;
  let frame = 0;
  let width = 0;
  let height = 0;

  // Pre-render the soft falloff once instead of rebuilding gradients each frame.
  const sprites = ['17, 247, 77', '0, 9, 255', '82, 39, 255'].map((color) => {
    const sprite = document.createElement('canvas');
    sprite.width = sprite.height = 192;
    const brush = sprite.getContext('2d');
    const gradient = brush.createRadialGradient(96, 96, 0, 96, 96, 96);
    gradient.addColorStop(0, `rgba(${color}, 0.2)`);
    gradient.addColorStop(0.28, `rgba(${color}, 0.12)`);
    gradient.addColorStop(0.65, `rgba(${color}, 0.035)`);
    gradient.addColorStop(1, `rgba(${color}, 0)`);
    brush.fillStyle = gradient;
    brush.fillRect(0, 0, 192, 192);
    return sprite;
  });

  function clear() {
    cancelAnimationFrame(frame);
    frame = 0;
    points.length = 0;
    previous = null;
    context.clearRect(0, 0, width, height);
  }

  function resize() {
    clear();
    const bounds = canvas.getBoundingClientRect();
    width = bounds.width;
    height = bounds.height;
    const ratio = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = Math.max(1, Math.round(width * ratio));
    canvas.height = Math.max(1, Math.round(height * ratio));
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function draw(now) {
    context.clearRect(0, 0, width, height);
    while (points.length && now - points[0].born >= lifetime) points.shift();
    context.globalCompositeOperation = 'lighter';
    for (const point of points) {
      const age = Math.max(0, (now - point.born) / lifetime);
      const radius = 76 + age * 44;
      const fadeIn = Math.min(1, (now - point.born) / 70);
      const opacity = fadeIn * Math.pow(1 - age, 2);
      const colorPosition = Math.max(0, Math.min(2, point.x / Math.max(width, 1) * 2));
      const colorIndex = Math.min(1, Math.floor(colorPosition));
      const blend = colorPosition - colorIndex;
      // A gentle upward drift keeps the fading tail airy rather than rigid.
      const y = point.y - age * 18;
      context.globalAlpha = opacity * (1 - blend);
      context.drawImage(sprites[colorIndex], point.x - radius, y - radius, radius * 2, radius * 2);
      context.globalAlpha = opacity * blend;
      context.drawImage(sprites[colorIndex + 1], point.x - radius, y - radius, radius * 2, radius * 2);
    }
    context.globalAlpha = 1;
    frame = points.length ? requestAnimationFrame(draw) : 0;
  }

  function move(event) {
    if (event.pointerType === 'touch' || reducedMotion.matches || !finePointer.matches || document.hidden) return;
    const now = performance.now();
    const current = { x: event.clientX, y: event.clientY, born: now };
    if (!previous || now - previous.born > 120) {
      points.push(current);
    } else {
      const distance = Math.hypot(current.x - previous.x, current.y - previous.y);
      if (distance < spacing) return;
      const count = Math.min(16, Math.floor(distance / spacing));
      for (let index = 1; index <= count; index++) {
        const fraction = index / count;
        points.push({
          x: previous.x + (current.x - previous.x) * fraction,
          y: previous.y + (current.y - previous.y) * fraction,
          born: now
        });
      }
    }
    previous = current;
    if (points.length > maxPoints) points.splice(0, points.length - maxPoints);
    if (!frame) frame = requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('pointermove', move, { passive: true });
  document.documentElement.addEventListener('pointerleave', () => { previous = null; });
  window.addEventListener('blur', clear);
  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('pagehide', clear);
  document.addEventListener('visibilitychange', clear);
  reducedMotion.addEventListener('change', clear);
  finePointer.addEventListener('change', clear);
})();
