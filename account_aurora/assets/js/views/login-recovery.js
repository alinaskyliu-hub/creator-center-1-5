/* Password recovery shares the existing account, verification and password controls. */
(() => {
  const storageKey = 'studio-password-recovery';
  const phoneView = window.AccountApp.getView('/login/sms');
  const passwordView = window.AccountApp.getView('/login/password');
  const accountField = passwordView.markup.match(/<div class="login-field">[\s\S]*?(?=\n          <div class="login-field">)/)[0];
  const verificationView = window.AccountApp.getView('/login/verification');
  window.AccountApp.register('/login/forgot', {
    ...phoneView,
    title: '找回密码 · Studio',
    styles: '.recovery-modal .login-support { padding-top: 24px; }',
    markup: phoneView.markup
      .replace(/<div class="login-field">[\s\S]*?(?=\n          <button)/, accountField)
      .replace('class="welcome-modal"', 'class="welcome-modal recovery-modal"')
      .replace('class="modal-header password-header"', 'class="modal-header password-header qr-header"')
      .replace('aria-labelledby="login-title"', 'aria-labelledby="login-title" aria-describedby="recovery-description"')
      .replace('<h2 class="modal-title" id="login-title">短信登录</h2>', '<div class="modal-heading"><h2 class="modal-title" id="login-title">找回密码</h2><p class="modal-description" id="recovery-description">验证邮箱或手机号以重置密码</p></div>')
      .replace('没有账号？<a class="action-link" href="#/register" data-link-target="register">注册</a>', '<a class="action-link" href="#/login">使用其他账号登录</a>'),
    mount(scope) {
      const form = document.querySelector('.sms-form');
      const account = form.elements.account;
      const error = document.getElementById('account-error');
      function clearFeedback() {
        account.removeAttribute('aria-invalid');
        error.textContent = '';
        error.hidden = true;
      }
      const controls = window.createAccountControls(scope, form, clearFeedback);
      account.addEventListener('input', clearFeedback);
      form.addEventListener('submit', event => {
        event.preventDefault();
        clearFeedback();
        controls.sync();
        const message = controls.errorMessage();
        if (message) {
          error.textContent = message;
          error.hidden = false;
          account.setAttribute('aria-invalid', 'true');
          account.focus();
          return;
        }
        try {
          // Keep only a masked recipient in this local prototype's recovery state.
          sessionStorage.setItem(storageKey, JSON.stringify({
            type: controls.type,
            [controls.type]: controls.maskedRecipient,
            resendAt: Date.now() + 60000
          }));
          scope.navigate('#/login/recovery/verification');
        } catch (_) {
          error.textContent = '请允许浏览器使用会话存储后重试';
          error.hidden = false;
        }
      });
    }
  });
  function readState() {
    try { return JSON.parse(sessionStorage.getItem(storageKey)); } catch (_) { return null; }
  }
  window.AccountApp.register('/login/recovery/verification', {
    ...verificationView,
    title: '账号验证 · Studio',
    markup: verificationView.markup.replace('href="#/login/sms" aria-label="返回短信登录"', 'href="#/login/forgot" aria-label="返回找回密码"'),
    mount(scope) {
      const state = readState();
      if (!state || !Number.isFinite(state.resendAt) || !(state.type === 'email'
        ? typeof state.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)
        : typeof state.phone === 'string' && /^\+\d{1,3} [\d*]+$/.test(state.phone))) {
        scope.setTimeout(() => scope.navigate('#/login/forgot'), 0);
        return;
      }
      verificationView.mount(scope, {
        storageKey,
        allowEmail: true,
        next: '#/login/reset/password',
        onVerified(state) {
          sessionStorage.setItem(storageKey, JSON.stringify({ ...state, verifiedAt: Date.now() }));
        }
      });
    }
  });
  window.AccountApp.register('/login/reset/password', {
    title: '设置新密码 · Studio',
    authenticated: false,
    styles: '',
    markup: `<section class="welcome-modal" role="dialog" aria-labelledby="login-title" tabindex="-1">
      <header class="modal-header password-header">
        <a class="modal-back" href="#/login/recovery/verification" aria-label="返回账号验证"><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5" /><path d="m12 19-7-7 7-7" /></svg></a>
        <h2 class="modal-title" id="login-title">设置新密码</h2>
      </header>
      <div class="modal-body"><form class="password-form" novalidate><div class="login-field"><label class="field-label" for="password">密码</label><div class="password-input-wrap"><input class="login-input" id="password" name="password" type="password" placeholder="请输入密码" autocomplete="new-password" aria-describedby="password-hints" required /><button class="password-visibility" type="button" aria-label="显示密码" aria-controls="password" title="显示密码"><svg class="password-icon visibility" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M607.5-372.5Q660-425 660-500t-52.5-127.5Q555-680 480-680t-127.5 52.5Q300-575 300-500t52.5 127.5Q405-320 480-320t127.5-52.5Zm-204-51Q372-455 372-500t31.5-76.5Q435-608 480-608t76.5 31.5Q588-545 588-500t-31.5 76.5Q525-392 480-392t-76.5-31.5ZM235.5-272Q125-344 61-462q-5-9-7.5-18.5T51-500q0-10 2.5-19.5T61-538q64-118 174.5-190T480-800q134 0 244.5 72T899-538q5 9 7.5 18.5T909-500q0 10-2.5 19.5T899-462q-64 118-174.5 190T480-200q-134 0-244.5-72ZM480-500Zm207.5 160.5Q782-399 832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q113 0 207.5-59.5Z"/></svg><svg class="password-icon visibility_off" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M607-627q29 29 42.5 66t9.5 76q0 15-11 25.5T622-449q-15 0-25.5-10.5T586-485q5-26-3-50t-25-41q-17-17-41-26t-51-4q-15 0-25.5-11T430-643q0-15 10.5-25.5T466-679q38-4 75 9.5t66 42.5Zm-127-93q-19 0-37 1.5t-36 5.5q-17 3-30.5-5T358-742q-5-16 3.5-31t24.5-18q23-5 46.5-7t47.5-2q137 0 250.5 72T904-534q4 8 6 16.5t2 17.5q0 9-1.5 17.5T905-466q-18 40-44.5 75T802-327q-12 11-28 9t-26-16q-10-14-8.5-30.5T753-392q24-23 44-50t35-58q-50-101-144.5-160.5T480-720Zm0 520q-134 0-245-72.5T60-463q-5-8-7.5-17.5T50-500q0-10 2-19t7-18q20-40 46.5-76.5T166-680l-83-84q-11-12-10.5-28.5T84-820q11-11 28-11t28 11l680 680q11 11 11.5 27.5T820-84q-11 11-28 11t-28-11L624-222q-35 11-71 16.5t-73 5.5ZM222-624q-29 26-53 57t-41 67q50 101 144.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/></svg></button></div><div class="password-hints" id="password-hints"><p data-password-rule="length">8–20 个字符</p><p data-password-rule="categories">至少包含字母、数字、标点中的两种</p></div></div><div class="login-field"><label class="field-label" for="confirm">确认密码</label><div class="password-input-wrap"><input class="login-input" id="confirm" name="confirm" type="password" placeholder="请再次输入密码" autocomplete="new-password" aria-describedby="confirm-error" required /><button class="password-visibility" type="button" aria-label="显示密码" aria-controls="confirm" title="显示密码"><svg class="password-icon visibility" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M607.5-372.5Q660-425 660-500t-52.5-127.5Q555-680 480-680t-127.5 52.5Q300-575 300-500t52.5 127.5Q405-320 480-320t127.5-52.5Zm-204-51Q372-455 372-500t31.5-76.5Q435-608 480-608t76.5 31.5Q588-545 588-500t-31.5 76.5Q525-392 480-392t-76.5-31.5ZM235.5-272Q125-344 61-462q-5-9-7.5-18.5T51-500q0-10 2.5-19.5T61-538q64-118 174.5-190T480-800q134 0 244.5 72T899-538q5 9 7.5 18.5T909-500q0 10-2.5 19.5T899-462q-64 118-174.5 190T480-200q-134 0-244.5-72ZM480-500Zm207.5 160.5Q782-399 832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q113 0 207.5-59.5Z"/></svg><svg class="password-icon visibility_off" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M607-627q29 29 42.5 66t9.5 76q0 15-11 25.5T622-449q-15 0-25.5-10.5T586-485q5-26-3-50t-25-41q-17-17-41-26t-51-4q-15 0-25.5-11T430-643q0-15 10.5-25.5T466-679q38-4 75 9.5t66 42.5Zm-127-93q-19 0-37 1.5t-36 5.5q-17 3-30.5-5T358-742q-5-16 3.5-31t24.5-18q23-5 46.5-7t47.5-2q137 0 250.5 72T904-534q4 8 6 16.5t2 17.5q0 9-1.5 17.5T905-466q-18 40-44.5 75T802-327q-12 11-28 9t-26-16q-10-14-8.5-30.5T753-392q24-23 44-50t35-58q-50-101-144.5-160.5T480-720Zm0 520q-134 0-245-72.5T60-463q-5-8-7.5-17.5T50-500q0-10 2-19t7-18q20-40 46.5-76.5T166-680l-83-84q-11-12-10.5-28.5T84-820q11-11 28-11t28 11l680 680q11 11 11.5 27.5T820-84q-11 11-28 11t-28-11L624-222q-35 11-71 16.5t-73 5.5ZM222-624q-29 26-53 57t-41 67q50 101 144.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/></svg></button></div><p class="field-error" id="confirm-error" hidden></p></div><button class="spec-btn primary large password-submit" type="submit">确认</button><p class="login-status" role="status" hidden></p></form></div>
    </section>`,
    mount(scope) {
      const state = readState();
      // This is a prototype flow guard, not server-side identity verification.
      if (!state || !Number.isFinite(state.verifiedAt) || Date.now() - state.verifiedAt > 600000) {
        scope.setTimeout(() => scope.navigate('#/login/forgot'), 0);
        return;
      }
      const form = document.querySelector('.password-form');
      const { password, confirm } = form.elements;
      const confirmError = document.getElementById('confirm-error');
  form.querySelectorAll('.password-visibility').forEach(button => button.addEventListener('click', () => {
    const input = document.getElementById(button.getAttribute('aria-controls'));
    const visible = input.type === 'password';
    input.type = visible ? 'text' : 'password';
    button.classList.toggle('is-visible', visible);
    button.title = visible ? '隐藏密码' : '显示密码';
    button.setAttribute('aria-label', button.title);
  }));
  function validatePassword() {
    const value = password.value;
    const categories = [/[A-Za-z]/, /[0-9]/, /[!"#$%&'()*+,\-./:;<=>?@[\]\\^_`{|}~]/].filter(pattern => pattern.test(value)).length;
    const rules = { length: value.length >= 8 && value.length <= 20, categories: categories >= 2 };
    Object.entries(rules).forEach(([rule, valid]) => {
      form.querySelector(`[data-password-rule="${rule}"]`).dataset.valid = String(valid);
    });
    const valid = Object.values(rules).every(Boolean);
    password.setAttribute('aria-invalid', String(!valid));
    return valid;
  }

      function validateConfirm() {
        const valid = Boolean(confirm.value) && confirm.value === password.value;
        confirmError.textContent = confirm.value ? '两次输入的密码不一致' : '请再次输入密码';
        confirmError.hidden = valid;
        confirm.setAttribute('aria-invalid', String(!valid));
        return valid;
      }
      form.addEventListener('input', event => {
        if (event.target === password) validatePassword();
        if (event.target === confirm || confirm.value) validateConfirm();
      });
      form.addEventListener('submit', event => {
        event.preventDefault();
        const valid = validatePassword();
        const matches = validateConfirm();
        if (!valid || !matches) { (valid ? confirm : password).focus(); return; }
        // Like existing login/register pages, complete the local demo without persisting secrets.
        try { sessionStorage.removeItem(storageKey); } catch (_) {}
        password.value = '';
        confirm.value = '';
        scope.navigate('../StudioDemo/content.html?accountEntry=1#loggedIn=1');
      });
    }
  });
})();
