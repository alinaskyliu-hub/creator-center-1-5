const messages = {
        en: {
          studio: "Studio",
          languageTooltip: "Language",
          switchLanguage: "Switch language",
          switchToDarkMode: "Dark mode",
          switchToLightMode: "Light mode",
          accountTooltip: "Account",
          accountSetting: "Account Setting",
          signOut: "Sign Out",
          userName: "Mia Studio",
          iqId: "IQ ID: 1461926038",
          upload: "Upload",
          mainSiteAccount: "Main-site account",
          mainSiteAccountUnlinked: "Main-site account: Unlinked",
          mainSiteAccountLinked: "Main-site account: Linked",
          mainSiteAccountName: "User00260922",
          linkedStatus: "Linked",
          linkAccount: "Link Account",
          unlinkedStatus: "Unlinked",
          content: "Content Management",
          analytics: "Analytics",
          subtitles: "Subtitles",
          settings: "Settings",
          pageTitle: "Account Setting | Studio",
          dashboardTitle: "Welcome back to Studio",
          analyticsTitle: "Account Setting"
        },
        zh: {
          studio: "Studio",
          languageTooltip: "语言",
          switchLanguage: "切换语言",
          switchToDarkMode: "夜间模式",
          switchToLightMode: "浅色模式",
          accountTooltip: "账号",
          accountSetting: "账号设置",
          signOut: "退出登录",
          userName: "Mia Studio",
          iqId: "IQ ID：1461926038",
          upload: "上传",
          mainSiteAccount: "主站账户",
          mainSiteAccountUnlinked: "主站账户：未绑定",
          mainSiteAccountLinked: "主站账户：已绑定",
          mainSiteAccountName: "User00260922",
          linkedStatus: "已绑定",
          linkAccount: "去绑定",
          unlinkedStatus: "未绑定",
          content: "内容管理",
          analytics: "数据分析",
          subtitles: "字幕",
          settings: "设置",
          pageTitle: "Account Setting | Studio",
          dashboardTitle: "欢迎回到 Studio",
          analyticsTitle: "Account Setting"
        }
      };

      const trigger = document.querySelector(".language-trigger");
      const languageSwitch = document.querySelector(".language-switch");
      const themeSwitch = document.querySelector(".theme-switch");
      const menu = document.querySelector(".language-menu");
      const options = document.querySelectorAll(".language-option");
      const accountEntry = document.querySelector(".account-entry");
      const accountTrigger = document.querySelector(".account-trigger");
      const accountMenu = document.querySelector(".account-menu");
      const themeToggle = document.querySelector("[data-theme-toggle]");
      const themeTooltip = document.querySelector("[data-theme-tooltip]");
      let currentLanguage = "en";

      function t(key, ...args) {
        const message = messages[currentLanguage][key] ?? messages.en[key] ?? key;
        return typeof message === "function" ? message(...args) : message;
      }

      function setTheme(theme, persist = true) {
        const nextTheme = theme === "dark" ? "dark" : "light";
        document.documentElement.dataset.theme = nextTheme;
        document.documentElement.style.colorScheme = nextTheme;
        if (themeToggle) {
          const label = nextTheme === "dark" ? t("switchToLightMode") : t("switchToDarkMode");
          themeToggle.setAttribute("aria-label", label);
          if (themeTooltip) {
            themeTooltip.textContent = label;
          }
        }
        if (persist) {
          try {
            localStorage.setItem("studio-theme", nextTheme);
          } catch (error) {}
        }
      }

      function syncThemePreference() {
        const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
        setTheme(currentTheme, false);
      }

      themeToggle?.addEventListener("click", () => {
        themeSwitch?.classList.add("suppress-tooltip");
        if (themeSwitch) setActiveTooltipContainer(themeSwitch);
        const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
        themeToggle.blur();
      });

      function setLanguage(lang) {
        const nextLang = messages[lang] ? lang : "en";
        currentLanguage = nextLang;
        document.documentElement.lang = nextLang === "zh" ? "zh-CN" : "en";
        document.title = t("pageTitle");
        document.querySelectorAll("[data-i18n]").forEach((node) => {
          const key = node.dataset.i18n;
          node.textContent = t(key);
        });
        document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
          node.setAttribute("aria-label", t(node.dataset.i18nAriaLabel));
        });
        document.querySelectorAll("[data-i18n-title]").forEach((node) => {
          node.setAttribute("title", t(node.dataset.i18nTitle));
        });
        document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
          node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
        });
        options.forEach((option) => {
          option.setAttribute("aria-selected", String(option.dataset.lang === nextLang));
        });
        syncThemePreference();
        window.dispatchEvent(new CustomEvent("studio:languagechange", { detail: { language: nextLang } }));
        try {
          localStorage.setItem("studio-language", nextLang);
        } catch (error) {}
      }

      function suppressTooltipIfHidden(container, tooltipSelector) {
        const tooltip = container.querySelector(tooltipSelector);
        const tooltipOpacity = tooltip ? parseFloat(getComputedStyle(tooltip).opacity) : 0;
        if (tooltipOpacity < 0.95) {
          container.classList.add("suppress-tooltip");
        }
      }

      const tooltipContainers = [languageSwitch, themeSwitch, accountEntry].filter(Boolean);

      function setActiveTooltipContainer(activeContainer) {
        tooltipContainers.forEach((container) => {
          container.classList.toggle("tooltip-muted", container !== activeContainer);
        });
      }

      function clearTooltipContainerMutes() {
        tooltipContainers.forEach((container) => {
          container.classList.remove("tooltip-muted");
        });
      }

      tooltipContainers.forEach((container) => {
        container.addEventListener("pointerenter", () => {
          setActiveTooltipContainer(container);
        });
        container.addEventListener("focusin", () => {
          setActiveTooltipContainer(container);
        });
        container.addEventListener("pointerleave", () => {
          container.classList.remove("suppress-tooltip");
          if (!tooltipContainers.some((item) => item.matches(":hover"))) {
            clearTooltipContainerMutes();
          }
        });
        container.addEventListener("focusout", (event) => {
          if (!container.contains(event.relatedTarget)) {
            container.classList.remove("suppress-tooltip");
            if (!tooltipContainers.some((item) => item.contains(event.relatedTarget))) {
              clearTooltipContainerMutes();
            }
          }
        });
      });

      trigger.addEventListener("click", (event) => {
        event.stopPropagation();
        const isOpen = !menu.hidden;
        languageSwitch.classList.add("suppress-tooltip");
        setActiveTooltipContainer(languageSwitch);
        if (!isOpen) {
          suppressTooltipIfHidden(languageSwitch, ".language-tooltip");
        }
        menu.hidden = isOpen;
        languageSwitch.classList.toggle("is-open", !isOpen);
        trigger.setAttribute("aria-expanded", String(!isOpen));
        accountMenu.hidden = true;
        accountEntry.classList.remove("is-open");
        accountTrigger.setAttribute("aria-expanded", "false");
      });

      options.forEach((option) => {
        option.addEventListener("click", () => {
          languageSwitch.classList.add("suppress-tooltip");
          setLanguage(option.dataset.lang);
          menu.hidden = true;
          languageSwitch.classList.remove("is-open");
          trigger.setAttribute("aria-expanded", "false");
          trigger.blur();
          option.blur();
        });
      });

      document.addEventListener("click", (event) => {
        if (!event.target.closest(".language-switch")) {
          menu.hidden = true;
          languageSwitch.classList.remove("is-open");
          trigger.setAttribute("aria-expanded", "false");
        }
        if (!event.target.closest(".account-entry")) {
          accountMenu.hidden = true;
          accountEntry.classList.remove("is-open");
          accountTrigger.setAttribute("aria-expanded", "false");
        }
      });

      accountTrigger.addEventListener("click", (event) => {
        event.stopPropagation();
        const isOpen = !accountMenu.hidden;
        accountEntry.classList.add("suppress-tooltip");
        setActiveTooltipContainer(accountEntry);
        if (!isOpen) {
          suppressTooltipIfHidden(accountEntry, ".account-tooltip");
        }
        accountMenu.hidden = isOpen;
        accountEntry.classList.toggle("is-open", !isOpen);
        accountTrigger.setAttribute("aria-expanded", String(!isOpen));
        menu.hidden = true;
        languageSwitch.classList.remove("is-open");
        trigger.setAttribute("aria-expanded", "false");
      });

      let savedLanguage = "en";
      try { savedLanguage = localStorage.getItem("studio-language") || "en"; } catch (error) {}
      setLanguage(savedLanguage);
    