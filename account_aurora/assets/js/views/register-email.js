/* Account view: register-email.html. The persistent shell owns the background. */
window.AccountApp.register("/register/email", {
  title: "邮箱注册 · Studio",
  authenticated: false,
  styles: ``,
  markup: `    <section class="welcome-modal" role="dialog" aria-labelledby="login-title" tabindex="-1">
      <header class="modal-header password-header">
        <a class="modal-back" href="#/register" aria-label="返回选择注册方式"><svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <g id="arrow-left">
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
  </g>
</svg>
</a>
        <h2 class="modal-title" id="login-title">邮箱注册</h2>
      </header>
      <div class="modal-body">
        <form class="password-form" novalidate><div class="login-field"><label class="field-label" for="email">邮箱</label><input class="login-input" id="email" name="email" type="email" placeholder="请输入邮箱" autocomplete="email" aria-describedby="email-error" required /><p class="field-error" id="email-error" hidden></p></div><div class="login-field"><label class="field-label" for="password">密码</label><div class="password-input-wrap"><input class="login-input" id="password" name="password" type="password" placeholder="请输入密码" autocomplete="new-password" aria-describedby="password-hints" required /><button class="password-visibility" type="button" aria-label="显示密码" aria-controls="password" title="显示密码"><svg class="password-icon visibility" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M607.5-372.5Q660-425 660-500t-52.5-127.5Q555-680 480-680t-127.5 52.5Q300-575 300-500t52.5 127.5Q405-320 480-320t127.5-52.5Zm-204-51Q372-455 372-500t31.5-76.5Q435-608 480-608t76.5 31.5Q588-545 588-500t-31.5 76.5Q525-392 480-392t-76.5-31.5ZM235.5-272Q125-344 61-462q-5-9-7.5-18.5T51-500q0-10 2.5-19.5T61-538q64-118 174.5-190T480-800q134 0 244.5 72T899-538q5 9 7.5 18.5T909-500q0 10-2.5 19.5T899-462q-64 118-174.5 190T480-200q-134 0-244.5-72ZM480-500Zm207.5 160.5Q782-399 832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q113 0 207.5-59.5Z"/></svg><svg class="password-icon visibility_off" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M607-627q29 29 42.5 66t9.5 76q0 15-11 25.5T622-449q-15 0-25.5-10.5T586-485q5-26-3-50t-25-41q-17-17-41-26t-51-4q-15 0-25.5-11T430-643q0-15 10.5-25.5T466-679q38-4 75 9.5t66 42.5Zm-127-93q-19 0-37 1.5t-36 5.5q-17 3-30.5-5T358-742q-5-16 3.5-31t24.5-18q23-5 46.5-7t47.5-2q137 0 250.5 72T904-534q4 8 6 16.5t2 17.5q0 9-1.5 17.5T905-466q-18 40-44.5 75T802-327q-12 11-28 9t-26-16q-10-14-8.5-30.5T753-392q24-23 44-50t35-58q-50-101-144.5-160.5T480-720Zm0 520q-134 0-245-72.5T60-463q-5-8-7.5-17.5T50-500q0-10 2-19t7-18q20-40 46.5-76.5T166-680l-83-84q-11-12-10.5-28.5T84-820q11-11 28-11t28 11l680 680q11 11 11.5 27.5T820-84q-11 11-28 11t-28-11L624-222q-35 11-71 16.5t-73 5.5ZM222-624q-29 26-53 57t-41 67q50 101 144.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/></svg></button></div><div class="password-hints" id="password-hints"><p data-password-rule="length">8–20 个字符</p><p data-password-rule="categories">至少包含字母、数字、标点中的两种</p></div></div><div class="login-field"><label class="field-label" for="confirm">确认密码</label><div class="password-input-wrap"><input class="login-input" id="confirm" name="confirm" type="password" placeholder="请再次输入密码" autocomplete="new-password" aria-describedby="confirm-error" required /><button class="password-visibility" type="button" aria-label="显示密码" aria-controls="confirm" title="显示密码"><svg class="password-icon visibility" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M607.5-372.5Q660-425 660-500t-52.5-127.5Q555-680 480-680t-127.5 52.5Q300-575 300-500t52.5 127.5Q405-320 480-320t127.5-52.5Zm-204-51Q372-455 372-500t31.5-76.5Q435-608 480-608t76.5 31.5Q588-545 588-500t-31.5 76.5Q525-392 480-392t-76.5-31.5ZM235.5-272Q125-344 61-462q-5-9-7.5-18.5T51-500q0-10 2.5-19.5T61-538q64-118 174.5-190T480-800q134 0 244.5 72T899-538q5 9 7.5 18.5T909-500q0 10-2.5 19.5T899-462q-64 118-174.5 190T480-200q-134 0-244.5-72ZM480-500Zm207.5 160.5Q782-399 832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q113 0 207.5-59.5Z"/></svg><svg class="password-icon visibility_off" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M607-627q29 29 42.5 66t9.5 76q0 15-11 25.5T622-449q-15 0-25.5-10.5T586-485q5-26-3-50t-25-41q-17-17-41-26t-51-4q-15 0-25.5-11T430-643q0-15 10.5-25.5T466-679q38-4 75 9.5t66 42.5Zm-127-93q-19 0-37 1.5t-36 5.5q-17 3-30.5-5T358-742q-5-16 3.5-31t24.5-18q23-5 46.5-7t47.5-2q137 0 250.5 72T904-534q4 8 6 16.5t2 17.5q0 9-1.5 17.5T905-466q-18 40-44.5 75T802-327q-12 11-28 9t-26-16q-10-14-8.5-30.5T753-392q24-23 44-50t35-58q-50-101-144.5-160.5T480-720Zm0 520q-134 0-245-72.5T60-463q-5-8-7.5-17.5T50-500q0-10 2-19t7-18q20-40 46.5-76.5T166-680l-83-84q-11-12-10.5-28.5T84-820q11-11 28-11t28 11l680 680q11 11 11.5 27.5T820-84q-11 11-28 11t-28-11L624-222q-35 11-71 16.5t-73 5.5ZM222-624q-29 26-53 57t-41 67q50 101 144.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/></svg></button></div><p class="field-error" id="confirm-error" hidden></p></div><fieldset class="login-field birthday-field"><legend class="field-label">出生日期</legend><div class="birthday-controls"><div class="birthday-select"><select name="year" hidden aria-hidden="true" tabindex="-1"><option value="">YYYY</option></select><button class="spec-select select-control" type="button" data-birthday="year" aria-label="出生年份" aria-haspopup="listbox" aria-expanded="false" aria-controls="birthday-year-options" aria-describedby="birthday-error"><span class="select-value placeholder">YYYY</span><span class="select-chevron" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></span></button><div class="select-dropdown birthday-dropdown" hidden><ul class="select-option-list" id="birthday-year-options" role="listbox" aria-label="出生年份"></ul></div></div><div class="birthday-select"><select name="month" hidden aria-hidden="true" tabindex="-1"><option value="">MM</option></select><button class="spec-select select-control" type="button" data-birthday="month" aria-label="出生月份" aria-haspopup="listbox" aria-expanded="false" aria-controls="birthday-month-options" aria-describedby="birthday-error"><span class="select-value placeholder">MM</span><span class="select-chevron" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></span></button><div class="select-dropdown birthday-dropdown" hidden><ul class="select-option-list" id="birthday-month-options" role="listbox" aria-label="出生月份"></ul></div></div><div class="birthday-select"><select name="day" hidden aria-hidden="true" tabindex="-1"><option value="">DD</option></select><button class="spec-select select-control" type="button" data-birthday="day" aria-label="出生日期" aria-haspopup="listbox" aria-expanded="false" aria-controls="birthday-day-options" aria-describedby="birthday-error"><span class="select-value placeholder">DD</span><span class="select-chevron" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></span></button><div class="select-dropdown birthday-dropdown" hidden><ul class="select-option-list" id="birthday-day-options" role="listbox" aria-label="出生日期"></ul></div></div></div><p class="field-error" id="birthday-error" hidden></p></fieldset><button class="spec-btn primary large password-submit" type="submit">注册</button><p class="login-status" role="status" hidden></p></form>
        <div class="login-support">
          <p class="register-copy">已有账号？<a class="action-link" href="#/login">登录</a></p>
        </div>
      </div>
    </section>`,
  mount(scope) {
(() => {
  const form = document.querySelector('.password-form');
  const { email, password, confirm, year, month, day } = form.elements;
  const status = form.querySelector('[role="status"]');
  const today = new Date();
  const birthdayControls = new Map();
  [year, month, day].forEach(select => {
    const trigger = form.querySelector(`[data-birthday="${select.name}"]`);
    const dropdown = trigger.nextElementSibling;
    const list = dropdown.querySelector('.select-option-list');
    scope.portal(dropdown);
    function close(restoreFocus = false) {
      dropdown.hidden = true;
      trigger.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
      if (restoreFocus) trigger.focus();
    }
    function position() {
      if (dropdown.hidden) return;
      const rect = trigger.getBoundingClientRect();
      const below = window.innerHeight - rect.bottom - 16;
      const above = rect.top - 16;
      const upwards = below < 180 && above > below;
      dropdown.style.width = `${rect.width}px`;
      list.style.maxHeight = `${Math.max(32, Math.min(240, (upwards ? above : below) - 22))}px`;
      dropdown.style.left = `${Math.max(8, Math.min(rect.left, window.innerWidth - rect.width - 8))}px`;
      dropdown.style.top = `${upwards ? Math.max(8, rect.top - dropdown.offsetHeight - 8) : rect.bottom + 8}px`;
    }
    function sync() {
      const value = trigger.querySelector('.select-value');
      value.textContent = select.selectedOptions[0]?.textContent || select.options[0].textContent;
      value.classList.toggle('placeholder', !select.value);
      list.replaceChildren();
      [...select.options].slice(1).forEach(option => {
        const item = document.createElement('li');
        item.className = 'select-option';
        item.tabIndex = -1;
        item.setAttribute('role', 'option');
        const selected = option.value === select.value;
        item.classList.toggle('active', selected);
        item.setAttribute('aria-selected', String(selected));
        const label = document.createElement('span');
        label.textContent = option.textContent;
        const check = document.createElement('span');
        check.className = 'select-option-check';
        check.setAttribute('aria-hidden', 'true');
        check.style.visibility = selected ? 'visible' : 'hidden';
        item.append(label, check);
        item.addEventListener('click', () => {
          select.value = option.value;
          select.dispatchEvent(new Event('change', { bubbles: true }));
          close(true);
        });
        list.append(item);
      });
      position();
    }
    function open() {
      birthdayControls.forEach(control => control.close());
      dropdown.hidden = false;
      trigger.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
      position();
      const selected = list.querySelector('[aria-selected="true"]') || list.firstElementChild;
      selected?.focus({ preventScroll: true });
      selected?.scrollIntoView({ block: 'nearest' });
    }
    trigger.addEventListener('click', () => dropdown.hidden ? open() : close());
    trigger.addEventListener('keydown', event => {
      if (['ArrowDown', 'ArrowUp'].includes(event.key)) { event.preventDefault(); open(); }
    });
    list.addEventListener('keydown', event => {
      const items = [...list.children];
      const index = items.indexOf(document.activeElement);
      let next;
      if (event.key === 'ArrowDown') next = (index + 1) % items.length;
      if (event.key === 'ArrowUp') next = (index - 1 + items.length) % items.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = items.length - 1;
      if (next !== undefined) { event.preventDefault(); items[next]?.focus(); }
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); items[index]?.click(); }
      if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); close(true); }
      if (event.key === 'Tab') close(true);
    });
    for (const type of ['pointerdown', 'focusin']) scope.listen(document, type, event => {
      if (!dropdown.contains(event.target) && !trigger.contains(event.target)) close();
    });
    scope.listen(window, 'resize', position);
    scope.listen(document, 'scroll', position, true);
    select.addEventListener('change', sync);
    birthdayControls.set(select, { trigger, sync, close });
  });
  function fill(select, values) {
    const previous = select.value;
    select.length = 1;
    values.forEach(value => select.add(new Option(select === year ? String(value) : String(value).padStart(2, '0'), value)));
    select.value = values.map(String).includes(previous) ? previous : '';
    birthdayControls.get(select).sync();
  }
  fill(year, Array.from({length: today.getFullYear() - 1899}, (_, i) => today.getFullYear() - i));
  function updateDates() {
    const currentYear = Number(year.value) === today.getFullYear();
    fill(month, Array.from({length: currentYear ? today.getMonth() + 1 : 12}, (_, i) => i + 1));
    const count = month.value ? new Date(Number(year.value) || 2000, Number(month.value), 0).getDate() : 31;
    const max = currentYear && Number(month.value) === today.getMonth() + 1 ? today.getDate() : count;
    fill(day, Array.from({length: max}, (_, i) => i + 1));
  }
  updateDates();
  [year, month].forEach(select => select.addEventListener('change', updateDates));
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
  function error(input, message) {
    if (input === password) return;
    const node = document.getElementById(input.name + '-error');
    node.textContent = message;
    node.hidden = !message;
    input.setAttribute('aria-invalid', String(!!message));
  }
  form.addEventListener('input', event => {
    status.hidden = true;
    if (event.target === password) validatePassword();
    if ([email, confirm].includes(event.target)) error(event.target, '');
  });
  [year, month, day].forEach(select => select.addEventListener('change', () => {
    status.hidden = true;
    document.getElementById('birthday-error').hidden = true;
    birthdayControls.forEach(({ trigger }) => {
      trigger.removeAttribute('aria-invalid');
      trigger.classList.remove('error');
    });
  }));
  form.addEventListener('submit', event => {
    event.preventDefault();
    status.hidden = true;
    const value = password.value;
    const passwordValid = validatePassword();
    const errors = [
      [email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()) ? '' : '请输入有效的邮箱地址'],
      [password, passwordValid ? '' : 'invalid'],
      [confirm, confirm.value && confirm.value === value ? '' : '两次输入的密码不一致']
    ];
    errors.forEach(([input, message]) => error(input, message));
    const missing = [year, month, day].filter(input => !input.value);
    const birthdayError = document.getElementById('birthday-error');
    birthdayError.textContent = '请选择完整的出生日期';
    birthdayError.hidden = !missing.length;
    birthdayControls.forEach(({ trigger }, input) => {
      trigger.setAttribute('aria-invalid', String(!input.value));
      trigger.classList.toggle('error', !input.value);
    });
    const invalid = errors.find(([, message]) => message);
    if (invalid || missing.length) { (invalid ? invalid[0] : birthdayControls.get(missing[0]).trigger).focus(); return; }
    scope.navigate('../StudioDemo/content.html?registered=1&accountEntry=1');
  });
})();

  }
});
