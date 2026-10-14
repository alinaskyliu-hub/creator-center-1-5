/* Remembered-account presentation for the local prototype. Never persist a password. */
window.AccountApp.register('/login/return', {
  title: '欢迎回来 · Studio',
  authenticated: false,
  styles: `
    .returning-account { display: grid; justify-items: center; gap: 12px; margin-bottom: 24px; }
    .returning-avatar { width: 80px; height: 80px; border-radius: 50%; object-fit: cover; }
    .returning-email { margin: 0; max-width: 100%; overflow-wrap: anywhere; color: var(--color-text-primary); }
    .returning-modal .login-field { width: 100%; }
    .returning-modal .login-support { gap: 24px; }
    .returning-links { display: flex; align-items: center; justify-content: center; gap: 12px; }
    .returning-links .register-copy { white-space: nowrap; }
  `,
  markup: `<section class="welcome-modal returning-modal" role="dialog" aria-labelledby="login-title" tabindex="-1">
      <header class="modal-header"><h2 class="modal-title" id="login-title">欢迎回来</h2></header>
      <div class="modal-body">
        <div class="returning-account"><img class="returning-avatar" alt="账户头像" /><p class="returning-email"></p></div>
        <form class="password-form" novalidate>
          <input name="username" type="text" autocomplete="username" hidden />
          <div class="login-field">
            <label class="field-label" for="login-password">密码</label>
            <div class="password-input-wrap">
              <input class="login-input" id="login-password" name="password" type="password" placeholder="请输入密码" autocomplete="current-password" aria-describedby="password-error" required />
              <button class="password-visibility" type="button" aria-label="显示密码" aria-controls="login-password" title="显示密码"><svg class="password-icon visibility" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M607.5-372.5Q660-425 660-500t-52.5-127.5Q555-680 480-680t-127.5 52.5Q300-575 300-500t52.5 127.5Q405-320 480-320t127.5-52.5Zm-204-51Q372-455 372-500t31.5-76.5Q435-608 480-608t76.5 31.5Q588-545 588-500t-31.5 76.5Q525-392 480-392t-76.5-31.5ZM235.5-272Q125-344 61-462q-5-9-7.5-18.5T51-500q0-10 2.5-19.5T61-538q64-118 174.5-190T480-800q134 0 244.5 72T899-538q5 9 7.5 18.5T909-500q0 10-2.5 19.5T899-462q-64 118-174.5 190T480-200q-134 0-244.5-72ZM480-500Zm207.5 160.5Q782-399 832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q113 0 207.5-59.5Z"/></svg><svg class="password-icon visibility_off" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M607-627q29 29 42.5 66t9.5 76q0 15-11 25.5T622-449q-15 0-25.5-10.5T586-485q5-26-3-50t-25-41q-17-17-41-26t-51-4q-15 0-25.5-11T430-643q0-15 10.5-25.5T466-679q38-4 75 9.5t66 42.5Zm-127-93q-19 0-37 1.5t-36 5.5q-17 3-30.5-5T358-742q-5-16 3.5-31t24.5-18q23-5 46.5-7t47.5-2q137 0 250.5 72T904-534q4 8 6 16.5t2 17.5q0 9-1.5 17.5T905-466q-18 40-44.5 75T802-327q-12 11-28 9t-26-16q-10-14-8.5-30.5T753-392q24-23 44-50t35-58q-50-101-144.5-160.5T480-720Zm0 520q-134 0-245-72.5T60-463q-5-8-7.5-17.5T50-500q0-10 2-19t7-18q20-40 46.5-76.5T166-680l-83-84q-11-12-10.5-28.5T84-820q11-11 28-11t28 11l680 680q11 11 11.5 27.5T820-84q-11 11-28 11t-28-11L624-222q-35 11-71 16.5t-73 5.5ZM222-624q-29 26-53 57t-41 67q50 101 144.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/></svg></button>
            </div>
            <p class="field-error" id="password-error" hidden></p>
          </div>
          <button class="spec-btn primary large password-submit" type="submit">登录</button>
        </form>
        <div class="login-support">
          <div class="returning-links">
            <p class="register-copy"><a class="action-link login-forgot" href="#/login/forgot">忘记密码</a></p>
            <span class="login-support-divider" aria-hidden="true"></span>
            <p class="register-copy"><a class="action-link" href="#/login">使用其他账号登录</a></p>
          </div>
          <div class="login-consent">
            <div class="consent-tooltip" id="consent-error" role="alert" hidden>请先阅读并同意相关协议，并确认已满 18 周岁</div>
            <label class="spec-checkbox consent-checkbox">
              <input id="login-consent" type="checkbox" checked aria-labelledby="consent-copy" />
              <span class="login-legal" id="consent-copy">点击登录即表示你已阅读并同意 <a class="legal-link" href="#creator-agreement" data-link-target="creator-agreement">创作者服务协议</a> 和 <a class="legal-link" href="#privacy-policy" data-link-target="privacy-policy">隐私政策</a> ，并确认已满 18 周岁。</span>
            </label>
          </div>
        </div>
      </div>
    </section>`,
  mount(scope) {
    let saved = {};
    try { saved = JSON.parse(localStorage.getItem('studio-returning-account')) || {}; } catch (_) {}
    const email = typeof saved.email === 'string' ? saved.email : '1461926038@iqiyi.com';
    const avatar = document.querySelector('.returning-avatar');
    avatar.src = typeof saved.avatar === 'string' ? saved.avatar : 'assets/images/profile-default-avatar.png';
    avatar.addEventListener('error', () => { avatar.src = 'assets/images/profile-default-avatar.png'; }, { once: true });
    document.querySelector('.returning-email').textContent = email;
    const form = document.querySelector('.password-form');
    form.elements.username.value = email;
    const password = form.elements.password;
    // Matches existing prototype login semantics; this is not the user's saved secret.
    password.value = '000000';
    const error = document.getElementById('password-error');
    const consent = document.getElementById('login-consent');
    const consentError = document.getElementById('consent-error');
    const toggle = document.querySelector('.password-visibility');
    toggle.addEventListener('click', () => {
      const visible = password.type === 'password';
      password.type = visible ? 'text' : 'password';
      toggle.classList.toggle('is-visible', visible);
      toggle.title = visible ? '隐藏密码' : '显示密码';
      toggle.setAttribute('aria-label', toggle.title);
    });
    password.addEventListener('input', () => {
      error.hidden = true;
      password.removeAttribute('aria-invalid');
    });
    consent.addEventListener('change', () => {
      consentError.hidden = true;
      consent.removeAttribute('aria-invalid');
      consent.removeAttribute('aria-describedby');
    });
    form.addEventListener('submit', event => {
      event.preventDefault();
      const passwordError = !password.value ? '请输入密码' : password.value === '000000' ? '' : '密码错误，请重新输入';
      error.textContent = passwordError;
      error.hidden = !passwordError;
      password.setAttribute('aria-invalid', String(Boolean(passwordError)));
      if (passwordError) { password.focus(); return; }
      if (!consent.checked) {
        consentError.hidden = false;
        consent.setAttribute('aria-invalid', 'true');
        consent.setAttribute('aria-describedby', 'consent-error');
        consent.focus({ preventScroll: true });
        return;
      }
      scope.navigate('../StudioDemo/content.html?accountEntry=1#loggedIn=1');
    });
  }
});
