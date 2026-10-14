(() => {
        const storageKey = "studio-theme";
        const root = document.documentElement;
        try {
          const savedTheme = localStorage.getItem(storageKey);
          const defaultTheme = "dark";
          const theme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : defaultTheme;
          root.dataset.theme = theme;
          root.style.colorScheme = theme;
        } catch (error) {
          root.dataset.theme = "dark";
          root.style.colorScheme = "dark";
        }
      })();
    