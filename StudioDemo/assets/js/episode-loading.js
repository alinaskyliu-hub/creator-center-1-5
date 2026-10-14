(() => {
        const delay = 1500;
        function showMainLoading() {
          const shell = document.querySelector(".shell");
          shell?.classList.add("is-loading");
          window.setTimeout(() => {
            shell?.classList.remove("is-loading");
          }, delay);
        }

        window.setTimeout(() => {
          document.querySelector(".shell")?.classList.remove("is-loading");
        }, delay);

        window.addEventListener("pageshow", (event) => {
          if (event.persisted) {
            showMainLoading();
          }
        });
      })();
    
