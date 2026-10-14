/* Shared email / phone detection for login and password recovery. */
window.createAccountControls = function (scope, form, clearFeedback) {
  const account = form.elements.account;
      const controls = form.querySelector('.account-controls');
      const dialCodeWrap = controls.querySelector('.dial-code-wrap');
      const phoneControls = window.createPhoneControls(scope, {
        select: form.elements.region,
        trigger: document.getElementById('account-dial-code'),
        dropdown: controls.querySelector('.dial-code-dropdown'),
        clearFeedback
      });
      function isPhoneAccount() {
        // Email markers take precedence, including numeric email usernames.
        const value = account.value.trim();
        return /^[+\d]/.test(value) && !/[a-z@]/i.test(value);
      }
      function syncAccountMode() {
        const phoneMode = isPhoneAccount();
        controls.classList.toggle('phone-controls', phoneMode);
        dialCodeWrap.hidden = !phoneMode;
        form.elements.region.disabled = !phoneMode;
        account.placeholder = phoneMode ? '请输入手机号' : '请输入邮箱或手机号';
        // Keep a text keyboard so a numeric email prefix can still become an email.
        if (!phoneMode) phoneControls.close();
      }
      function accountErrorMessage() {
        const value = account.value.trim();
        if (!value) return '请输入邮箱或手机号';
        if (isPhoneAccount()) {
          return phoneControls.isValid(value.replace(/[\s()-]/g, '')) ? '' : '请输入有效的手机号';
        }
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : '请输入有效的邮箱地址';
      }
      account.addEventListener('input', syncAccountMode);
      account.addEventListener('change', syncAccountMode);
      scope.listen(window, 'pageshow', syncAccountMode);
      syncAccountMode();
      return {
        sync: syncAccountMode,
        errorMessage: accountErrorMessage,
        get type() { return isPhoneAccount() ? 'phone' : 'email'; },
        get identifier() {
          return isPhoneAccount()
            ? `+${phoneControls.code} ${account.value.trim().replace(/[\s()-]/g, '')}`
            : account.value.trim();
        },
        get maskedRecipient() {
          if (isPhoneAccount()) {
            const digits = account.value.trim().replace(/[\s()-]/g, '');
            const visible = digits.length > 8 ? 4 : 1;
            return `+${phoneControls.code} ${digits.slice(0, visible)}${'*'.repeat(digits.length - visible * 2)}${digits.slice(-visible)}`;
          }
          const [name, domain] = account.value.trim().split('@');
          return `${name.slice(0, 1)}***@${domain}`;
        }
      };
};
