(() => {
        document.querySelectorAll("[data-bio-tabs]").forEach((group) => {
          const tabs = Array.from(group.querySelectorAll('[role="tab"]'));
          const panels = Array.from(group.querySelectorAll('[role="tabpanel"]'));
          const tabList = group.querySelector(".tabs-list");
          function syncIndicator() {
            const selected = tabs.find((tab) => tab.getAttribute("aria-selected") === "true");
            if (!selected) return;
            tabList.style.setProperty("--bio-tab-indicator-x", `${selected.offsetLeft}px`);
            tabList.style.setProperty("--bio-tab-indicator-width", `${selected.offsetWidth}px`);
          }
          new ResizeObserver(syncIndicator).observe(tabList);
          document.fonts.ready.then(syncIndicator);
          syncIndicator();
          function activateTab(tab) {
            tabs.forEach((item) => {
              const selected = item === tab;
              item.setAttribute("aria-selected", String(selected));
              item.tabIndex = selected ? 0 : -1;
            });
            panels.forEach((panel) => { panel.hidden = panel.id !== tab.getAttribute("aria-controls"); });
            syncIndicator();
            const list = tab.closest(".tabs-list");
            if (list.scrollWidth > list.clientWidth) {
              list.scrollTo({ left: tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2, behavior: "auto" });
            }
          }
          tabs.forEach((tab, index) => {
            tab.addEventListener("click", () => activateTab(tab));
            tab.addEventListener("keydown", (event) => {
              let nextIndex;
              if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
              else if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
              else if (event.key === "Home") nextIndex = 0;
              else if (event.key === "End") nextIndex = tabs.length - 1;
              else return;
              event.preventDefault();
              tabs[nextIndex].focus();
              activateTab(tabs[nextIndex]);
            });
          });
        });
      })();
    