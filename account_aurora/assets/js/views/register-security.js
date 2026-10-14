/* Internal account step: /register/security. The persistent shell owns the background. */
window.AccountApp.register("/register/security", {
  title: "安全验证 · Studio",
  authenticated: false,
  styles: ``,
  markup: `    <section class="welcome-modal" role="dialog" aria-labelledby="login-title" aria-describedby="security-description" tabindex="-1">
      <header class="modal-header password-header security-header">
        <a class="modal-back" href="#/register/sms" aria-label="返回短信注册"><svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <g id="arrow-left">
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
  </g>
</svg>
</a>
        <div class="modal-heading"><h2 class="modal-title" id="login-title">安全验证</h2><p class="modal-description" id="security-description">请拖动滑块完成拼图</p></div>
      </header>
      <div class="modal-body security-body">
        <div class="security-puzzle">
        <svg class="security-placeholder" viewBox="0 0 240 160" width="240" height="160" role="img" aria-label="拖动滑块，将左侧拼图块对准图片中的缺口">
          <defs>
            <path id="puzzle-shape" d="M6 6H18C18 14 30 14 30 6H42V18C50 18 50 30 42 30V42H30C30 34 18 34 18 42H6V30C-2 30-2 18 6 18Z" />
            <clipPath id="puzzle-clip"><use href="#puzzle-shape" /></clipPath>
          </defs>
          <image href="assets/images/security-landscape.png" width="240" height="160" preserveAspectRatio="xMidYMid slice" />
          <use class="security-puzzle-target" href="#puzzle-shape" />
          <g class="security-puzzle-piece">
            <g clip-path="url(#puzzle-clip)"><image class="security-puzzle-crop" href="assets/images/security-landscape.png" width="240" height="160" preserveAspectRatio="xMidYMid slice" /></g>
            <use class="security-puzzle-outline" href="#puzzle-shape" />
          </g>
        </svg>
        </div>
        <div class="security-slider">
          <div class="security-slider-fill" aria-hidden="true"></div>
          <span class="security-slider-label" aria-hidden="true">向右拖动滑块</span>
          <div class="security-slider-thumb" role="slider" tabindex="0" aria-label="安全验证滑块" aria-describedby="security-description" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>
          </div>
        </div>
        <button class="spec-btn text security-refresh" type="button">刷新</button>
      </div>
      <div class="security-message feedback-message error" role="alert" aria-atomic="true" hidden>
        <span class="message-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M9 9l6 6M15 9l-6 6" /></svg></span>
        <span class="security-message-text"></span>
      </div>
    </section>`,
  mount(scope) {

(() => {
  const track = document.querySelector('.security-slider');
  const thumb = document.querySelector('.security-slider-thumb');
  const fill = document.querySelector('.security-slider-fill');
  const refresh = document.querySelector('.security-refresh');
  const error = document.querySelector('.security-message');
  const errorText = document.querySelector('.security-message-text');
  let messageTimer;
  function hideError() {
    scope.clearTimeout(messageTimer);
    error.hidden = true;
  }
  function showError(message) {
    hideError();
    errorText.textContent = message;
    error.hidden = false;
    messageTimer = scope.setTimeout(hideError, 3000);
  }
  scope.listen(window, 'pagehide', hideError);
  const piece = document.querySelector('.security-puzzle-piece');
  const target = document.querySelector('.security-puzzle-target');
  const crop = document.querySelector('.security-puzzle-crop');
  const pieceStart = 8;
  const pieceTravel = 176;
  let targetX = 144;
  let targetY = 56;
  let progress = 0;
  let pointerId = null;
  let startX = 0;
  let startProgress = 0;
  let completed = false;
  const distance = () => Math.max(0, track.clientWidth - thumb.offsetWidth);
  function render(value) {
    progress = Math.max(0, Math.min(100, value));
    thumb.style.left = `${distance() * progress / 100}px`;
    fill.style.width = progress ? `${distance() * progress / 100 + thumb.offsetWidth}px` : '0';
    thumb.setAttribute('aria-valuenow', String(Math.round(progress)));
    piece.setAttribute('transform', `translate(${pieceStart + pieceTravel * progress / 100} ${targetY})`);
  }
  function reset() {
    const captured = pointerId;
    pointerId = null;
    if (captured !== null && thumb.hasPointerCapture(captured)) thumb.releasePointerCapture(captured);
    completed = false;
    track.classList.remove('is-dragging');
    hideError();
    render(0);
  }
  function complete() {
    if (completed) return;
    completed = true;
    try {
      const key = 'studio-register-sms-verification';
      let state;
      try { state = JSON.parse(sessionStorage.getItem(key)); } catch (_) {}
      if (!state || typeof state.phone !== 'string' || !/^\+\d{1,3} [\d*]+$/.test(state.phone)) {
        // Keep direct previews in the registration flow, matching the phone verification mock.
        state = { phone: '+86 1326***5332' };
      }
      // Prototype only: local puzzle alignment simulates a successful security check.
      state.resendAt = Date.now() + 60000;
      sessionStorage.setItem(key, JSON.stringify(state));
      // Keep the registration verification route separate from login.
      scope.navigate('#/register/verification');
    } catch (_) {
      reset();
      showError('请允许浏览器使用会话存储后重试');
    }
  }
  thumb.addEventListener('pointerdown', (event) => {
    if (completed || pointerId !== null || !event.isPrimary || event.button !== 0) return;
    event.preventDefault();
    hideError();
    thumb.focus();
    pointerId = event.pointerId;
    startX = event.clientX;
    startProgress = progress;
    thumb.setPointerCapture(pointerId);
    track.classList.add('is-dragging');
  });
  thumb.addEventListener('pointermove', (event) => {
    if (event.pointerId !== pointerId || completed || !distance()) return;
    render(startProgress + (event.clientX - startX) / distance() * 100);

  });
  function verify() {
    if (Math.abs(pieceStart + pieceTravel * progress / 100 - targetX) <= 4) {
      render((targetX - pieceStart) / pieceTravel * 100);
      complete();
    } else {
      reset();
      showError('未对准拼图，请重试');
    }
  }
  thumb.addEventListener('pointerup', (event) => {
    if (event.pointerId !== pointerId || completed) return;
    if (distance()) render(startProgress + (event.clientX - startX) / distance() * 100);
    const captured = pointerId;
    pointerId = null;
    if (thumb.hasPointerCapture(captured)) thumb.releasePointerCapture(captured);
    track.classList.remove('is-dragging');
    verify();
  });
  thumb.addEventListener('pointercancel', () => { if (!completed) reset(); });
  thumb.addEventListener('lostpointercapture', () => { if (pointerId !== null && !completed) reset(); });
  thumb.addEventListener('keydown', (event) => {
    if (completed || pointerId !== null) return;
    if (['Enter', ' '].includes(event.key)) { event.preventDefault(); verify(); return; }
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    hideError();
    render(event.key === 'End' ? 100 : event.key === 'Home' ? 0 : progress + (event.key === 'ArrowRight' ? 1 : -1));
  });
  function newPuzzle() {
    reset();
    targetX = 120 + Math.floor(Math.random() * 57);
    targetY = 32 + Math.floor(Math.random() * 57);
    target.setAttribute('transform', `translate(${targetX} ${targetY})`);
    crop.setAttribute('x', -targetX);
    crop.setAttribute('y', -targetY);
    render(0);
  }
  refresh.addEventListener('click', newPuzzle);
  scope.listen(window, 'resize', () => { if (!completed) reset(); });
  scope.listen(window, 'pageshow', reset);
  newPuzzle();
})();
  
  }
});
