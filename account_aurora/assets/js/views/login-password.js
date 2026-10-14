/* Account view: login-password.html. The persistent shell owns the background. */
window.AccountApp.register("/login/password", {
  title: "密码登录 · Studio",
  authenticated: false,
  styles: ``,
  markup: `    <section class="welcome-modal" role="dialog" aria-labelledby="login-title" tabindex="-1">
      <header class="modal-header password-header">
        <a class="modal-back" href="#/login" aria-label="返回选择登录方式"><svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <g id="arrow-left">
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
  </g>
</svg>
</a>
        <h2 class="modal-title" id="login-title">密码登录</h2>
      </header>
      <div class="modal-body">
        <form class="password-form" novalidate>
          <div class="login-field">
            <label class="field-label" for="login-account">邮箱或手机号</label>
            <div class="account-controls">
              <div class="dial-code-wrap" hidden>
                <input type="hidden" name="region" />
                <button class="spec-select select-control" id="account-dial-code" type="button" aria-label="国际区号" aria-haspopup="listbox" aria-expanded="false" aria-controls="account-dial-code-options"><span class="select-value"></span><span class="select-chevron" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6" /></svg></span></button>
                <div class="select-dropdown dial-code-dropdown" hidden>
                  <ul class="select-option-list" id="account-dial-code-options" role="listbox" aria-label="国际区号"></ul>
                </div>
              </div>
            <input class="login-input" id="login-account" name="account" type="text" placeholder="请输入邮箱或手机号" autocomplete="username" autocapitalize="none" spellcheck="false" aria-describedby="account-error" required />
            </div>
            <p class="field-error" id="account-error" hidden></p>
          </div>
          <div class="login-field">
            <label class="field-label" for="login-password">密码</label>
            <div class="password-input-wrap">
              <input class="login-input" id="login-password" name="password" type="password" placeholder="请输入密码" autocomplete="current-password" aria-describedby="password-error" required />
              <button class="password-visibility" type="button" aria-label="显示密码" aria-controls="login-password" title="显示密码"><svg class="password-icon visibility" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M607.5-372.5Q660-425 660-500t-52.5-127.5Q555-680 480-680t-127.5 52.5Q300-575 300-500t52.5 127.5Q405-320 480-320t127.5-52.5Zm-204-51Q372-455 372-500t31.5-76.5Q435-608 480-608t76.5 31.5Q588-545 588-500t-31.5 76.5Q525-392 480-392t-76.5-31.5ZM235.5-272Q125-344 61-462q-5-9-7.5-18.5T51-500q0-10 2.5-19.5T61-538q64-118 174.5-190T480-800q134 0 244.5 72T899-538q5 9 7.5 18.5T909-500q0 10-2.5 19.5T899-462q-64 118-174.5 190T480-200q-134 0-244.5-72ZM480-500Zm207.5 160.5Q782-399 832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q113 0 207.5-59.5Z"/></svg><svg class="password-icon visibility_off" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M607-627q29 29 42.5 66t9.5 76q0 15-11 25.5T622-449q-15 0-25.5-10.5T586-485q5-26-3-50t-25-41q-17-17-41-26t-51-4q-15 0-25.5-11T430-643q0-15 10.5-25.5T466-679q38-4 75 9.5t66 42.5Zm-127-93q-19 0-37 1.5t-36 5.5q-17 3-30.5-5T358-742q-5-16 3.5-31t24.5-18q23-5 46.5-7t47.5-2q137 0 250.5 72T904-534q4 8 6 16.5t2 17.5q0 9-1.5 17.5T905-466q-18 40-44.5 75T802-327q-12 11-28 9t-26-16q-10-14-8.5-30.5T753-392q24-23 44-50t35-58q-50-101-144.5-160.5T480-720Zm0 520q-134 0-245-72.5T60-463q-5-8-7.5-17.5T50-500q0-10 2-19t7-18q20-40 46.5-76.5T166-680l-83-84q-11-12-10.5-28.5T84-820q11-11 28-11t28 11l680 680q11 11 11.5 27.5T820-84q-11 11-28 11t-28-11L624-222q-35 11-71 16.5t-73 5.5ZM222-624q-29 26-53 57t-41 67q50 101 144.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/></svg></button>
            </div>
            <p class="field-error" id="password-error" hidden></p>
          </div>
          <button class="spec-btn primary large password-submit" type="submit">登录</button>
          <p class="login-status" role="status" hidden></p>
        </form>
        <div class="login-support">
          <p class="register-copy"><a class="action-link login-forgot" href="#/login/forgot">忘记密码</a></p>
          <span class="login-support-divider" aria-hidden="true"></span>
          <p class="register-copy">没有账号？<a class="action-link" href="#/register" data-link-target="register">注册</a></p>
        </div>
      </div>
    </section>`,
  mount(scope) {

    (() => {
      const form = document.querySelector('.password-form');
      const account = form.elements.account;
      const password = form.elements.password;
      const status = document.querySelector('.login-status');
      const visibilityToggle = document.querySelector('.password-visibility');
      visibilityToggle.addEventListener('click', () => {
        const showPassword = password.type === 'password';
        password.type = showPassword ? 'text' : 'password';
        visibilityToggle.classList.toggle('is-visible', showPassword);
        const label = showPassword ? '隐藏密码' : '显示密码';
        visibilityToggle.setAttribute('aria-label', label);
        visibilityToggle.title = label;
      });
      function setError(input, message) {
        const error = document.getElementById(input.getAttribute('aria-describedby'));
        input.setAttribute('aria-invalid', String(Boolean(message)));
        error.textContent = message;
        error.hidden = !message;
      }
      const accountControls = window.createAccountControls(scope, form, () => {
        setError(account, '');
        status.hidden = true;
      });
      [account, password].forEach((input) => input.addEventListener('input', () => {
        setError(input, '');
        status.hidden = true;
      }));
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        accountControls.sync();
        const accountError = accountControls.errorMessage();
        const passwordError = !password.value ? '请输入密码' : password.value === '000000' ? '' : '密码错误，请重新输入';
        setError(account, accountError);
        setError(password, passwordError);
        status.hidden = true;
        if (accountError || passwordError) {
          (accountError ? account : password).focus();
          return;
        }
        // Persist only the account identifier, never the entered password.
        try { localStorage.setItem('studio-login-identifier', accountControls.identifier); } catch (_) {}
        // Fixed demo password for the local prototype.
        scope.navigate('../StudioDemo/content.html?accountEntry=1#loggedIn=1');
      });
    })();
  
  }
});
