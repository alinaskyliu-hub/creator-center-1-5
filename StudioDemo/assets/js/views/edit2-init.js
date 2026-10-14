(() => {
        const params = new URLSearchParams(window.location.search);
        const contentId = params.get("contentId");
        const urlType = params.get("type");
        const item = videoItems.find((video) => video.id === contentId) || videoItems.find((video) => video.type === urlType) || videoItems[4];
        if (!item) return;
        const episodeCount = item.episodes || 1;
        let currentEpisodeNumber = Math.max(1, Math.min(episodeCount, Number(params.get("episode")) || 1));

        const editPageTitleNodes = document.querySelectorAll("[data-edit-page-title]");
        const episodeTabs = document.querySelector("[data-episode-tabs]");
        const titleInput = document.querySelector("[data-edit-title-input]");
        const descriptionInput = document.querySelector("[data-edit-description-input]");
        const previewTitle = document.querySelector("[data-edit-preview-title]");
        const previewCard = document.querySelector("[data-edit-preview-card]");
        const category = document.querySelector("[data-edit-category]");
        const contentIdNode = document.querySelector("[data-edit-content-id]");
        const durationNodes = document.querySelectorAll("[data-edit-duration], [data-edit-player-duration]");
        const formatNode = document.querySelector("[data-edit-format]");
        const publicationNode = document.querySelector("[data-edit-publication]");
        const videoLinkNode = document.querySelector("[data-edit-video-link]");
        const fileNameNode = document.querySelector("[data-edit-file-name]");
        const copyVideoLinkButton = document.querySelector("[data-copy-video-link]");
        const copyTooltip = document.querySelector("[data-copy-tooltip]");
        const subtitleAddOpen = document.querySelector("[data-subtitle-add-open]");
        const subtitleAddModal = document.querySelector("[data-subtitle-add-modal]");
        const subtitleAddClose = document.querySelector("[data-subtitle-add-close]");
        const subtitleLanguageList = document.querySelector("[data-subtitle-language-list]");
        const subtitleEditModal = document.querySelector("[data-subtitle-edit-modal]");
        const subtitleEditClose = document.querySelector("[data-subtitle-edit-close]");
        const subtitleEditLanguage = document.querySelector("[data-subtitle-edit-modal-language]");
        const subtitleVideo = document.querySelector("[data-subtitle-video]");
        const subtitlePreviewCaption = document.querySelector("[data-subtitle-preview-caption]");
        const subtitleVideoError = document.querySelector("[data-subtitle-video-error]");
        const subtitleEditorList = document.querySelector("[data-subtitle-editor-list]");
        const subtitleUploadInput = document.querySelector("[data-subtitle-upload-input]");
        const subtitleUploadList = document.querySelector("[data-subtitle-upload-list]");
        const episodesRow = document.querySelector("[data-edit-episodes-row]");
        const episodesNode = document.querySelector("[data-edit-episodes]");
        const updatedNode = document.querySelector("[data-edit-updated]");
        const episodeCard = document.querySelector("[data-edit-episode-card]");
        const episodeList = document.querySelector("[data-edit-episode-list]");
        const resetAction = document.querySelector("[data-reset-action]");
        const resetActionLabel = document.querySelector("[data-reset-action-label]");
        const saveAction = document.querySelector("[data-save-action]");
        const publishAction = document.querySelector("[data-publish-action]");
        const publishActionLabel = document.querySelector("[data-publish-action-label]");
        const translationModal = document.querySelector("[data-translation-modal]");
        const translationModalTitle = document.querySelector("[data-translation-modal-title]");
        const translationList = document.querySelector("[data-translation-list]");
        const translationClose = document.querySelector("[data-translation-close]");
        const translationOpenButtons = Array.from(document.querySelectorAll("[data-translation-open]"));
        const coverTranslationOpen = document.querySelector("[data-cover-translation-open]");
        const coverTranslationModal = document.querySelector("[data-cover-translation-modal]");
        const coverTranslationClose = document.querySelector("[data-cover-translation-close]");
        const coverTranslationList = document.querySelector("[data-cover-translation-list]");
        const titleCount = document.querySelector("[data-title-count]");
        const titleError = document.querySelector("[data-title-error]");
        const descriptionCount = document.querySelector("[data-description-count]");
        const descriptionError = document.querySelector("[data-description-error]");
        const ratingSelect = document.querySelector("[data-rating-select]");
        const ratingTrigger = document.querySelector("[data-rating-trigger]");
        const ratingMenu = document.querySelector("[data-rating-menu]");
        const ratingLabel = document.querySelector("[data-rating-label]");
        const ratingValue = document.querySelector("[data-rating-value]");
        const ratingError = document.querySelector("[data-rating-error]");
        const paidStatusGroup = document.querySelector("[data-paid-status-group]");
        const paidStatusError = document.querySelector("[data-paid-status-error]");
        const regionAll = document.querySelector("[data-region-all]");
        const regionOptions = Array.from(document.querySelectorAll("[data-region-option]"));
        const regionsGroup = document.querySelector("[data-regions-group]");
        const regionsError = document.querySelector("[data-regions-error]");
        const coverUploader = document.querySelector("[data-cover-uploader]");
        const coverError = document.querySelector("[data-cover-error]");
        const coverSlots = Array.from(document.querySelectorAll("[data-cover-slot]"));
        const coverMessage = document.querySelector("[data-cover-message]");
        const coverTitlePanel = document.querySelector("[data-cover-title-panel]");
        const coverTitlePanelTitle = document.querySelector("[data-cover-title-panel-title]");
        const coverTitlePanelInput = document.querySelector("[data-cover-title-panel-input]");
        const coverTitleCancel = document.querySelector("[data-cover-title-cancel]");
        const coverTitleRestore = document.querySelector("[data-cover-title-restore]");
        const coverTitleApplyAll = document.querySelector("[data-cover-title-apply-all]");
        const coverTitleApplyCurrent = document.querySelector("[data-cover-title-apply-current]");
        let activeCoverSlot = null;
        let activePosterItem = null;
        let coverTitleSnapshot = "";
        let posterTitleSnapshot = "";
        let coverMessageTimer = 0;
        let copyTooltipTimer = 0;
        let currentTranslationField = "title";
        let activeSubtitleEditorIndex = -1;
        let initialFormState = "";
        let initialFormSnapshot = null;
        let dynamicDirtyRevision = 0;
        let getTranslationState = () => [];
        let restoreTranslationState = () => {};
        const episodeFileNames = new Map();
        const subtitleLanguageOptions = [
          { id: "en", languageKey: "englishSubtitle", sourceKey: "platformGenerated" },
          { id: "zh", languageKey: "chineseSubtitle", sourceKey: "platformGenerated" },
          { id: "zhHant", languageKey: "traditionalChineseSubtitle", sourceKey: "selfWritten" },
          { id: "id", languageKey: "indonesianSubtitle", sourceKey: "selfWritten" },
          { id: "th", languageKey: "thaiSubtitle", sourceKey: "selfWritten" },
          { id: "vi", languageKey: "vietnameseSubtitle", sourceKey: "selfWritten" }
        ];
        const subtitleEditorEntries = [
          { start: 0, end: 2.8, en: "The preview begins with a quiet morning scene.", zh: "预览从安静的清晨画面开始。" },
          { start: 2.8, end: 5.6, en: "The camera follows the first movement in frame.", zh: "镜头跟随画面里的第一个动作。" },
          { start: 5.6, end: 8.4, en: "Light shifts across the subject for a softer mood.", zh: "光线掠过主体，氛围变得柔和。" },
          { start: 8.4, end: 11.2, en: "A small detail becomes the focus of the shot.", zh: "一个小细节成为这一镜的焦点。" },
          { start: 11.2, end: 14.2, en: "The sequence slows down before the next beat.", zh: "画面在下一个节奏前慢了下来。" },
          { start: 14.2, end: 17.1, en: "The final image holds long enough to read.", zh: "最后的画面停留得足够阅读字幕。" },
          { start: 17.1, end: 20, en: "The twenty-second sample ends on a clean cut.", zh: "这段二十秒案例以干净的切点结束。" }
        ];
        const fieldLimits = {
          title: {
            max: 20,
            labelKey: "title"
          },
          description: {
            max: 300,
            labelKey: "description"
          }
        };

        function getCharacterLength(value) {
          return Array.from(value).length;
        }

        function syncFieldLimit(input, countNode, errorNode, fieldKey) {
          const limit = fieldLimits[fieldKey];
          const length = getCharacterLength(input.value);
          countNode.textContent = `${length}/${limit.max}`;
          const isEmpty = !input.value.trim();
          const isTooLong = length > limit.max;
          const hasError = isEmpty || isTooLong;
          input.classList.toggle("is-invalid", hasError);
          input.setAttribute("aria-invalid", String(hasError));
          const label = t(limit.labelKey);
          errorNode.textContent = isEmpty ? t("requiredError", label) : isTooLong ? t("maxLengthError", label, limit.max) : "";
          errorNode.hidden = !hasError;
          return !hasError;
        }

        function setErrorState(errorNode, targetNode, message) {
          const hasError = Boolean(message);
          if (errorNode) {
            errorNode.textContent = message;
            errorNode.hidden = !hasError;
          }
          targetNode?.classList.toggle("is-invalid", hasError);
          targetNode?.setAttribute("aria-invalid", String(hasError));
          return !hasError;
        }

        function getSelectedPaidStatus() {
          return document.querySelector('input[name="paidStatus"]:checked')?.value || "";
        }

        function getCurrentFormSnapshot() {
          return {
            episode: currentEpisodeNumber,
            title: titleInput.value,
            description: descriptionInput.value,
            paidStatus: getSelectedPaidStatus(),
            rating: ratingValue?.value || "",
            regions: regionOptions.filter((input) => input.checked).map((input) => input.value),
            coverTitles: coverSlots.map((slot) => slot.dataset.coverTitleValue || ""),
            coverStyles: coverSlots.map((slot) => slot.querySelector(".cover-art")?.getAttribute("style") || ""),
            coverUploads: coverSlots.map((slot) => slot.dataset.coverUploaded === "true"),
            translations: getTranslationState(),
            subtitles: subtitleEditorEntries.map((entry) => ({ en: entry.en, zh: entry.zh })),
            dynamicDirtyRevision
          };
        }

        function getFormState() {
          return JSON.stringify(getCurrentFormSnapshot());
        }

        function isFormDirty() {
          return Boolean(initialFormState && getFormState() !== initialFormState);
        }

        function syncActionDirtyState() {
          const isDirty = isFormDirty();
          [resetAction, saveAction, publishAction].forEach((button) => {
            if (button) {
              button.disabled = !isDirty;
            }
          });
        }

        function markDynamicDirty() {
          dynamicDirtyRevision += 1;
          syncActionDirtyState();
        }

        function commitFormState() {
          initialFormSnapshot = getCurrentFormSnapshot();
          initialFormState = JSON.stringify(initialFormSnapshot);
          syncActionDirtyState();
        }

        function restoreInitialFormState() {
          if (!initialFormSnapshot) return;
          titleInput.value = initialFormSnapshot.title;
          descriptionInput.value = initialFormSnapshot.description;
          previewTitle.textContent = initialFormSnapshot.title;
          document.querySelectorAll('input[name="paidStatus"]').forEach((input) => {
            input.checked = input.value === initialFormSnapshot.paidStatus;
          });
          setRatingValue(initialFormSnapshot.rating);
          regionOptions.forEach((input) => {
            input.checked = initialFormSnapshot.regions.includes(input.value);
          });
          coverSlots.forEach((slot, index) => {
            slot.dataset.coverTitleValue = initialFormSnapshot.coverTitles[index] || titleInput.value || item.title;
            slot.dataset.coverUploaded = String(Boolean(initialFormSnapshot.coverUploads[index]));
            const coverArt = slot.querySelector(".cover-art");
            if (coverArt) {
              const styleValue = initialFormSnapshot.coverStyles[index] || "";
              if (styleValue) {
                coverArt.setAttribute("style", styleValue);
              } else {
                coverArt.removeAttribute("style");
              }
            }
            syncCoverSlotTitle(slot, slot.dataset.coverTitleValue);
          });
          restoreTranslationState(initialFormSnapshot.translations);
          initialFormSnapshot.subtitles.forEach((subtitle, index) => {
            if (!subtitleEditorEntries[index]) return;
            subtitleEditorEntries[index].en = subtitle.en;
            subtitleEditorEntries[index].zh = subtitle.zh;
          });
          if (subtitleEditModal && !subtitleEditModal.hidden) {
            renderSubtitleEditorList(subtitleEditLanguage?.dataset.subtitleLanguage || "en");
            syncSubtitlePreviewCaption();
          }
          closeCoverTitlePanel();
          syncFieldLimit(titleInput, titleCount, titleError, "title");
          syncFieldLimit(descriptionInput, descriptionCount, descriptionError, "description");
          validateCover();
          validatePaidStatus();
          validateRating();
          syncRegionAllState();
          validateRegions();
          syncActionDirtyState();
        }

        const coverObjectUrls = new WeakMap();

        function syncCoverSlotTitle(slot, value) {
          const titleNode = slot.querySelector("[data-cover-title-art]");
          if (titleNode) {
            titleNode.textContent = value || item.title;
          }
        }

        function syncCoverTitlesFromAlbumTitle() {
          coverSlots.forEach((slot) => {
            if (slot.dataset.coverTitleEdited === "true") return;
            slot.dataset.coverTitleValue = titleInput.value;
            syncCoverSlotTitle(slot, slot.dataset.coverTitleValue);
          });
          if (activeCoverSlot && activeCoverSlot.dataset.coverTitleEdited !== "true" && coverTitlePanelInput) {
            coverTitlePanelInput.value = titleInput.value;
          }
        }

        function setCoverTitleActionsEnabled(enabled) {
          if (coverTitleApplyAll) {
            coverTitleApplyAll.disabled = !enabled;
          }
          if (coverTitleApplyCurrent) {
            coverTitleApplyCurrent.disabled = !enabled;
          }
        }

        function syncCoverTitleActionState() {
          if (!coverTitlePanelInput) {
            setCoverTitleActionsEnabled(false);
            return;
          }
          setCoverTitleActionsEnabled(coverTitlePanelInput.value !== coverTitleSnapshot);
        }

        function showPageMessage(message = t("changeSuccess"), tone = "success") {
          if (!coverMessage) return;
          coverMessage.textContent = message;
          coverMessage.classList.toggle("danger", tone === "danger");
          coverMessage.hidden = false;
          window.clearTimeout(coverMessageTimer);
          coverMessageTimer = window.setTimeout(() => {
            coverMessage.hidden = true;
            coverMessage.classList.remove("danger");
          }, 2200);
        }

        function showCoverMessage() {
          showPageMessage(t("changeSuccess"));
        }

        function showCopyTooltip(message) {
          if (!copyTooltip) return;
          copyTooltip.textContent = message;
          copyTooltip.hidden = false;
          window.clearTimeout(copyTooltipTimer);
          copyTooltipTimer = window.setTimeout(() => {
            copyTooltip.hidden = true;
          }, 1800);
        }

        async function copyTextToClipboard(value) {
          if (navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(value);
            return;
          }

          const textarea = document.createElement("textarea");
          textarea.value = value;
          textarea.setAttribute("readonly", "");
          textarea.style.position = "fixed";
          textarea.style.top = "-999px";
          textarea.style.opacity = "0";
          document.body.appendChild(textarea);
          textarea.select();
          const didCopy = document.execCommand("copy");
          textarea.remove();
          if (!didCopy) throw new Error("Copy command failed");
        }

        async function copyVideoLink() {
          const value = videoLinkNode?.href || videoLinkNode?.textContent || "";
          try {
            if (!value) throw new Error("Missing video link");
            await copyTextToClipboard(value);
            showCopyTooltip(t("copySuccess"));
          } catch (error) {
            showCopyTooltip(t("copyFailed"));
          }
        }

        function getSubtitleFileIcon() {
          return `
            <svg viewBox="0 0 24 24">
              <path d="M14 3H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7z" />
              <path d="M14 3v4h4" />
              <path d="M9 13h6" />
              <path d="M9 17h4" />
            </svg>
          `;
        }

        function getSubtitleRemoveIcon() {
          return `
            <svg class="spec-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 6h18" />
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
              <path d="M10 11v6" />
              <path d="M14 11v6" />
            </svg>
          `;
        }

        function isSupportedSubtitleFile(file) {
          return /\.(srt|vtt|ass|ssa)$/i.test(file.name) && file.size <= 20 * 1024 * 1024;
        }

        function setSubtitleUploadStatus(item, status, text = "") {
          const icon = item.querySelector(".upload-file-icon");
          const statusNode = item.querySelector(".upload-file-status");
          const retryButton = item.querySelector("[data-retry-subtitle-upload]");
          if (!icon || !statusNode) return;
          statusNode.className = `upload-file-status ${status}`;
          retryButton?.toggleAttribute("hidden", status !== "error");

          if (status === "loading") {
            icon.innerHTML = '<span class="upload-loading-ring"></span>';
            statusNode.textContent = text || t("subtitleUploadProgress", "0%");
            statusNode.removeAttribute("aria-label");
            return;
          }

          icon.innerHTML = getSubtitleFileIcon();
          if (status === "success") {
            statusNode.textContent = "";
            statusNode.setAttribute("aria-label", t("subtitleUploadSuccess"));
            return;
          }

          statusNode.textContent = text || t("subtitleUploadFailed");
          statusNode.removeAttribute("aria-label");
        }

        function simulateSubtitleUpload(item, shouldSucceed) {
          setSubtitleUploadStatus(item, "loading", t("subtitleUploadProgress", "0%"));
          window.setTimeout(() => {
            if (!item.isConnected) return;
            setSubtitleUploadStatus(item, "loading", t("subtitleUploadProgress", "62%"));
          }, 360);
          window.setTimeout(() => {
            if (!item.isConnected) return;
            setSubtitleUploadStatus(item, shouldSucceed ? "success" : "error", shouldSucceed ? "" : t("subtitleUploadFailed"));
          }, 860);
        }

        function createSubtitleFileItem(file) {
          const item = document.createElement("li");
          item.className = "upload-file-item";
          item.dataset.subtitleUploadValid = String(isSupportedSubtitleFile(file));
          item.innerHTML = `
            <span class="upload-file-icon" aria-hidden="true">
              <span class="upload-loading-ring"></span>
            </span>
            <span class="upload-file-main">
              <span class="upload-file-name"></span>
            </span>
            <span class="upload-file-status loading">${t("subtitleUploadProgress", "0%")}</span>
            <button class="upload-file-retry" type="button" hidden data-retry-subtitle-upload>${t("retry")}</button>
            <button class="upload-file-remove" type="button" data-remove-subtitle-file>
              ${getSubtitleRemoveIcon()}
            </button>
          `;
          item.querySelector(".upload-file-name").textContent = file.name;
          item.querySelector("[data-remove-subtitle-file]").setAttribute("aria-label", t("deleteFile", file.name));
          simulateSubtitleUpload(item, item.dataset.subtitleUploadValid === "true");
          return item;
        }

        function syncSubtitleUploadListLanguage() {
          subtitleUploadList?.querySelectorAll(".upload-file-item").forEach((item) => {
            const statusNode = item.querySelector(".upload-file-status");
            const retryButton = item.querySelector("[data-retry-subtitle-upload]");
            const removeButton = item.querySelector("[data-remove-subtitle-file]");
            const fileName = item.querySelector(".upload-file-name")?.textContent || "";
            if (retryButton) {
              retryButton.textContent = t("retry");
            }
            if (removeButton) {
              removeButton.setAttribute("aria-label", t("deleteFile", fileName));
            }
            if (!statusNode) return;
            if (statusNode.classList.contains("loading")) {
              const progress = statusNode.textContent.match(/\d+%/)?.[0] || "0%";
              statusNode.textContent = t("subtitleUploadProgress", progress);
            } else if (statusNode.classList.contains("success")) {
              statusNode.setAttribute("aria-label", t("subtitleUploadSuccess"));
            } else if (statusNode.classList.contains("error")) {
              statusNode.textContent = t("subtitleUploadFailed");
            }
          });
        }

        function handleSubtitleUploadChange(event) {
          const files = Array.from(event.currentTarget.files || []);
          if (!files.length || !subtitleUploadList) return;
          files.forEach((file) => {
            subtitleUploadList.appendChild(createSubtitleFileItem(file));
          });
          event.currentTarget.value = "";
        }

        function handleSubtitleUploadListClick(event) {
          const removeButton = event.target.closest("[data-remove-subtitle-file]");
          if (removeButton) {
            removeButton.closest(".upload-file-item")?.remove();
            return;
          }

          const retryButton = event.target.closest("[data-retry-subtitle-upload]");
          if (!retryButton) return;
          const item = retryButton.closest(".upload-file-item");
          if (!item) return;
          simulateSubtitleUpload(item, item.dataset.subtitleUploadValid === "true");
        }

        function renderSubtitleLanguageList() {
          if (!subtitleLanguageList) return;
          const addedLanguages = new Set(
            Array.from(document.querySelectorAll("[data-subtitle-edit-open]")).map((node) => node.dataset.subtitleEditLanguage)
          );
          subtitleLanguageList.innerHTML = subtitleLanguageOptions
            .map((option) => {
              const isAdded = addedLanguages.has(option.id);
              return `
              <article class="subtitle-language-card${isAdded ? " is-added" : ""}">
                <span class="subtitle-language-copy">
                  <span class="subtitle-language-title">${t(option.languageKey)}</span>
                  <span class="subtitle-language-meta">${t(option.sourceKey)}</span>
                </span>
                <button class="edit-action subtitle-card-action" type="button" data-subtitle-language-add="${option.id}"${isAdded ? " disabled" : ""}>${isAdded ? t("added") : t("add")}</button>
              </article>
            `;
            })
            .join("");
        }

        function openSubtitleAddModal() {
          if (!subtitleAddModal) return;
          renderSubtitleLanguageList();
          subtitleAddModal.hidden = false;
          subtitleAddClose?.focus();
        }

        function closeSubtitleAddModal() {
          if (subtitleAddModal) {
            subtitleAddModal.hidden = true;
          }
        }

        function getSubtitleLanguageKey(language) {
          if (["en", "英文字幕", "English subtitles"].includes(language)) return "en";
          return "zh";
        }

        function getSubtitleLanguageLabel(language) {
          const key = getSubtitleLanguageKey(language);
          return key === "en" ? t("englishSubtitle") : t("chineseSubtitle");
        }

        function getSubtitleTextForLanguage(entry, language) {
          return getSubtitleLanguageKey(language) === "en" ? entry.en : entry.zh;
        }

        function formatSubtitleCueTime(seconds) {
          const safeSeconds = Math.max(0, Number(seconds) || 0);
          const wholeSeconds = Math.floor(safeSeconds);
          const hours = Math.floor(wholeSeconds / 3600);
          const minutes = Math.floor((wholeSeconds % 3600) / 60);
          const secondsPart = wholeSeconds % 60;
          return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secondsPart).padStart(2, "0")}`;
        }

        function getSubtitleCueLabel(entry) {
          return `${formatSubtitleCueTime(entry.start)} - ${formatSubtitleCueTime(entry.end)}`;
        }

        function syncSubtitlePreviewCaption() {
          if (!subtitleVideo || !subtitlePreviewCaption || !subtitleEditModal || subtitleEditModal.hidden) return;
          const currentTime = subtitleVideo.currentTime;
          const activeEntryIndex = subtitleEditorEntries.findIndex((entry) => currentTime >= entry.start && currentTime < entry.end);
          const activeEntry = activeEntryIndex >= 0 ? subtitleEditorEntries[activeEntryIndex] : null;
          const language = subtitleEditLanguage?.dataset.subtitleLanguage || "en";
          subtitlePreviewCaption.textContent = activeEntry ? getSubtitleTextForLanguage(activeEntry, language) : "";
          subtitleEditorList?.querySelectorAll("[data-subtitle-editor-index]").forEach((item) => {
            item.classList.toggle("is-active", Number(item.dataset.subtitleEditorIndex) === activeEntryIndex);
          });
          if (activeEntryIndex >= 0 && activeEntryIndex !== activeSubtitleEditorIndex) {
            subtitleEditorList
              ?.querySelector(`[data-subtitle-editor-index="${activeEntryIndex}"]`)
              ?.scrollIntoView({ block: "nearest", behavior: "smooth" });
          }
          activeSubtitleEditorIndex = activeEntryIndex;
        }

        function renderSubtitleEditorList(language) {
          if (!subtitleEditorList) return;
          subtitleEditorList.innerHTML = subtitleEditorEntries
            .map((entry, index) => {
              const text = getSubtitleTextForLanguage(entry, language);
              return `
                <li class="subtitle-editor-item" data-subtitle-editor-index="${index}">
                  <span class="subtitle-editor-time">${getSubtitleCueLabel(entry)}</span>
                  <p class="subtitle-editor-text" data-subtitle-editor-text>${text}</p>
                  <div class="subtitle-editor-edit" hidden data-subtitle-editor-edit>
                    <textarea class="subtitle-editor-input" rows="3" data-subtitle-editor-input>${text}</textarea>
                    <div class="subtitle-editor-actions">
                      <button class="edit-action" type="button" data-subtitle-edit-cancel>${t("cancel")}</button>
                      <button class="edit-action primary" type="button" data-subtitle-edit-confirm>${t("confirm")}</button>
                    </div>
                  </div>
                </li>
              `;
            })
            .join("");
        }

        function closeSubtitleEditorItem(item) {
          if (!item) return;
          item.classList.remove("is-editing");
          const edit = item.querySelector("[data-subtitle-editor-edit]");
          if (edit) edit.hidden = true;
        }

        function openSubtitleEditorItem(item) {
          if (!item || !subtitleEditorList) return;
          subtitleEditorList.querySelectorAll(".subtitle-editor-item").forEach((row) => {
            if (row !== item) closeSubtitleEditorItem(row);
          });
          const entry = subtitleEditorEntries[Number(item.dataset.subtitleEditorIndex)];
          if (subtitleVideo && entry) {
            subtitleVideo.currentTime = entry.start;
          }
          item.classList.add("is-editing");
          const edit = item.querySelector("[data-subtitle-editor-edit]");
          const input = item.querySelector("[data-subtitle-editor-input]");
          const text = item.querySelector("[data-subtitle-editor-text]")?.textContent || "";
          if (edit) edit.hidden = false;
          if (input) {
            input.value = text;
            input.focus();
          }
          syncSubtitlePreviewCaption();
        }

        function openSubtitleEditModal(language) {
          if (!subtitleEditModal) return;
          if (subtitleEditLanguage) {
            subtitleEditLanguage.dataset.subtitleLanguage = getSubtitleLanguageKey(language || "en");
            subtitleEditLanguage.textContent = getSubtitleLanguageLabel(language || "en");
          }
          renderSubtitleEditorList(getSubtitleLanguageKey(language || "en"));
          subtitleEditModal.hidden = false;
          if (subtitleVideoError) {
            subtitleVideoError.hidden = true;
          }
          activeSubtitleEditorIndex = -1;
          if (subtitleVideo) {
            subtitleVideo.currentTime = 0;
            subtitleVideo.load();
          }
          syncSubtitlePreviewCaption();
          subtitleEditClose?.focus();
        }

        function closeSubtitleEditModal() {
          if (subtitleVideo) {
            subtitleVideo.pause();
          }
          activeSubtitleEditorIndex = -1;
          if (subtitlePreviewCaption) {
            subtitlePreviewCaption.textContent = "";
          }
          if (subtitleEditModal) {
            subtitleEditModal.hidden = true;
          }
        }

        function openCoverTitlePanel(slot) {
          if (!coverTitlePanel || !coverTitlePanelInput || !coverTitlePanelTitle) return;
          const isSameOpen = activeCoverSlot === slot && !coverTitlePanel.hidden;
          coverSlots.forEach((item) => item.classList.remove("is-title-editing"));
          if (isSameOpen) {
            closeCoverTitlePanel();
            return;
          }
          activeCoverSlot = slot;
          slot.classList.add("is-title-editing");
          const label = slot.querySelector(".cover-label")?.textContent || t("cover");
          coverTitlePanelTitle.textContent = t("coverTitlePanelTitle", label);
          coverTitlePanelInput.value = slot.dataset.coverTitleValue || titleInput.value || item.title;
          coverTitleSnapshot = coverTitlePanelInput.value;
          syncCoverTitleActionState();
          coverTitlePanel.hidden = false;
          coverTitlePanelInput.focus();
          const cursorPosition = coverTitlePanelInput.value.length;
          coverTitlePanelInput.setSelectionRange(cursorPosition, cursorPosition);
        }

        function syncActiveCoverTitle(value, cursorPosition) {
          if (!activeCoverSlot || !coverTitlePanelInput) return;
          activeCoverSlot.dataset.coverTitleEdited = value === titleInput.value ? "false" : "true";
          activeCoverSlot.dataset.coverTitleValue = value;
          coverTitlePanelInput.value = value;
          syncCoverSlotTitle(activeCoverSlot, value);
          syncCoverTitleActionState();
          if (Number.isInteger(cursorPosition)) {
            coverTitlePanelInput.setSelectionRange(cursorPosition, cursorPosition);
          }
        }

        function applyCoverTitleToSlot(slot, value) {
          slot.dataset.coverTitleEdited = value === titleInput.value ? "false" : "true";
          slot.dataset.coverTitleValue = value;
          syncCoverSlotTitle(slot, value);
        }

        function applyCoverTitleToAll(value) {
          coverSlots.forEach((slot) => {
            applyCoverTitleToSlot(slot, value);
          });
        }

        function closeCoverTitlePanel() {
          coverSlots.forEach((slot) => slot.classList.remove("is-title-editing"));
          if (coverTitlePanel) {
            coverTitlePanel.hidden = true;
          }
          activeCoverSlot = null;
          coverTitleSnapshot = "";
          setCoverTitleActionsEnabled(false);
        }

        function cancelCoverTitleChange() {
          if (!activeCoverSlot) {
            closeCoverTitlePanel();
            return;
          }
          applyCoverTitleToSlot(activeCoverSlot, coverTitleSnapshot || titleInput.value || item.title);
          closeCoverTitlePanel();
        }

        function restoreDefaultCoverTitle() {
          if (!activeCoverSlot || !coverTitlePanelInput) return;
          const defaultValue = titleInput.value || item.title;
          syncActiveCoverTitle(defaultValue, defaultValue.length);
        }

        function removeLineBreaksInSelection(value, start, end) {
          const selectedValue = value.slice(start, end);
          const nextSelectedValue = selectedValue.replace(/\n/g, "");
          if (selectedValue === nextSelectedValue) return null;
          return {
            value: value.slice(0, start) + nextSelectedValue + value.slice(end),
            cursorPosition: start + nextSelectedValue.length
          };
        }

        function handleCoverTitleKeydown(event) {
          if (!activeCoverSlot || !coverTitlePanelInput) return;
          const allowedKeys = new Set([
            "ArrowLeft",
            "ArrowRight",
            "ArrowUp",
            "ArrowDown",
            "Home",
            "End",
            "PageUp",
            "PageDown",
            "Tab",
            "Escape",
            "Shift",
            "Control",
            "Meta",
            "Alt"
          ]);
          if ((event.metaKey || event.ctrlKey) && ["a", "c"].includes(event.key.toLowerCase())) {
            return;
          }
          if (allowedKeys.has(event.key)) return;

          const value = coverTitlePanelInput.value;
          const start = coverTitlePanelInput.selectionStart;
          const end = coverTitlePanelInput.selectionEnd;
          event.preventDefault();

          if (event.key === "Enter") {
            const nextValue = value.slice(0, start) + "\n" + value.slice(start);
            syncActiveCoverTitle(nextValue, start + 1);
            return;
          }

          if (event.key === "Backspace") {
            if (start !== end) {
              const next = removeLineBreaksInSelection(value, start, end);
              if (next) syncActiveCoverTitle(next.value, next.cursorPosition);
              return;
            }
            if (start > 0 && value[start - 1] === "\n") {
              syncActiveCoverTitle(value.slice(0, start - 1) + value.slice(start), start - 1);
            }
            return;
          }

          if (event.key === "Delete") {
            if (start !== end) {
              const next = removeLineBreaksInSelection(value, start, end);
              if (next) syncActiveCoverTitle(next.value, next.cursorPosition);
              return;
            }
            if (value[start] === "\n") {
              syncActiveCoverTitle(value.slice(0, start) + value.slice(start + 1), start);
            }
          }
        }

        function initCoverTools() {
          coverSlots.forEach((slot) => {
            const uploadButton = slot.querySelector("[data-cover-upload]");
            const titleToggle = slot.querySelector("[data-cover-title-toggle]");
            const fileInput = slot.querySelector("[data-cover-file]");
            const coverArt = slot.querySelector(".cover-art");
            if (!uploadButton || !titleToggle || !fileInput || !coverArt) return;

            slot.dataset.coverPresent = "true";
            slot.dataset.coverTitleValue = item.title;
            syncCoverSlotTitle(slot, slot.dataset.coverTitleValue);

            uploadButton.addEventListener("click", () => {
              fileInput.click();
            });

            fileInput.addEventListener("change", () => {
              const file = fileInput.files && fileInput.files[0];
              if (!file) return;
              const previousUrl = coverObjectUrls.get(coverArt);
              if (previousUrl) {
                URL.revokeObjectURL(previousUrl);
              }
              const nextUrl = URL.createObjectURL(file);
              coverObjectUrls.set(coverArt, nextUrl);
              slot.dataset.coverUploaded = "true";
              coverArt.style.backgroundImage = `url("${nextUrl}")`;
              coverArt.style.backgroundSize = "cover";
              coverArt.style.backgroundPosition = "center";
              validateCover();
              markDynamicDirty();
            });

            titleToggle.addEventListener("click", () => {
              openCoverTitlePanel(slot);
            });
          });

          coverTitlePanelInput?.addEventListener("keydown", handleCoverTitleKeydown);
          coverTitlePanelInput?.addEventListener("beforeinput", (event) => {
            event.preventDefault();
          });
          coverTitlePanelInput?.addEventListener("paste", (event) => {
            event.preventDefault();
          });
          coverTitlePanelInput?.addEventListener("cut", (event) => {
            event.preventDefault();
          });
          coverTitlePanelInput?.addEventListener("drop", (event) => {
            event.preventDefault();
          });
          coverTitlePanelInput?.addEventListener("input", () => {
            if (!activeCoverSlot || coverTitlePanelInput.value === activeCoverSlot.dataset.coverTitleValue) return;
            coverTitlePanelInput.value = activeCoverSlot.dataset.coverTitleValue || titleInput.value || item.title;
          });
          coverTitleCancel?.addEventListener("click", cancelCoverTitleChange);
          coverTitleRestore?.addEventListener("click", restoreDefaultCoverTitle);
          coverTitleApplyAll?.addEventListener("click", () => {
            if (!coverTitlePanelInput || coverTitleApplyAll.disabled) return;
            applyCoverTitleToAll(coverTitlePanelInput.value);
            closeCoverTitlePanel();
            showCoverMessage();
            syncActionDirtyState();
          });
          coverTitleApplyCurrent?.addEventListener("click", () => {
            if (!activeCoverSlot || !coverTitlePanelInput || coverTitleApplyCurrent.disabled) return;
            applyCoverTitleToSlot(activeCoverSlot, coverTitlePanelInput.value);
            closeCoverTitlePanel();
            showCoverMessage();
            syncActionDirtyState();
          });
        }

        function validateCover() {
          const hasCover = coverSlots.some((slot) => slot.dataset.coverPresent === "true" || slot.dataset.coverUploaded === "true");
          return setErrorState(coverError, coverUploader, hasCover ? "" : t("coverRequired"));
        }

        function validatePaidStatus() {
          const selected = document.querySelector('input[name="paidStatus"]:checked');
          return setErrorState(paidStatusError, paidStatusGroup, selected ? "" : t("paidStatusRequired"));
        }

        function validateRating() {
          const value = ratingValue?.value?.trim();
          return setErrorState(ratingError, ratingTrigger, value ? "" : t("ratingRequired"));
        }

        function validateRegions() {
          const hasRegion = regionOptions.some((input) => input.checked);
          return setErrorState(regionsError, regionsGroup, hasRegion ? "" : t("regionsRequired"));
        }

        function focusFirstInvalidField() {
          const target =
            titleInput.classList.contains("is-invalid") ? titleInput :
            descriptionInput.classList.contains("is-invalid") ? descriptionInput :
            coverUploader?.classList.contains("is-invalid") ? coverUploader :
            paidStatusGroup?.classList.contains("is-invalid") ? paidStatusGroup.querySelector("input") :
            ratingTrigger?.classList.contains("is-invalid") ? ratingTrigger :
            regionsGroup?.classList.contains("is-invalid") ? regionsGroup.querySelector("input") :
            null;

          target?.scrollIntoView({ block: "center", behavior: "smooth" });
          target?.focus?.({ preventScroll: true });
        }

        function validateRequiredForm(showDangerMessage = false) {
          const checks = [
            syncFieldLimit(titleInput, titleCount, titleError, "title"),
            syncFieldLimit(descriptionInput, descriptionCount, descriptionError, "description"),
            validateCover(),
            validatePaidStatus(),
            validateRating(),
            validateRegions()
          ];
          const isValid = checks.every(Boolean);
          if (!isValid && showDangerMessage) {
            showPageMessage(t("fixRequiredFields"), "danger");
            focusFirstInvalidField();
          }
          return isValid;
        }

        function handlePrimaryAction(message) {
          if (!isFormDirty()) return;
          if (!validateRequiredForm(true)) return;
          showPageMessage(message);
          commitFormState();
        }

        function getEpisodeNumberLabel(number) {
          return String(number).padStart(2, "0");
        }

        function getEpisodeLabel(number) {
          return t("episodeLabel", number);
        }

        function getEpisodeTitleValue(number) {
          return `Episode ${getEpisodeNumberLabel(number)}`;
        }

        function getEpisodeFileName(number) {
          if (!episodeFileNames.has(number)) {
            const fragments = ["lumen", "harbor", "orbit", "silver", "nova", "atlas", "ripple", "velvet"];
            const fragment = fragments[Math.floor(Math.random() * fragments.length)];
            const suffix = Math.random().toString(36).slice(2, 8);
            episodeFileNames.set(number, `${fragment}_ep${getEpisodeNumberLabel(number)}_${suffix}.mp4`);
          }
          return episodeFileNames.get(number);
        }

        function syncEpisodePageTitle() {
          const editPageTitle = t("editEpisodeTitle", currentEpisodeNumber);
          editPageTitleNodes.forEach((node) => {
            node.textContent = editPageTitle;
          });
          document.title = `${editPageTitle} - Studio`;
        }

        function syncEditCategoryTag() {
          if (!category) return;
          category.textContent = getTypeLabel(item.type);
          category.className = `edit-category-tag type-tag ${item.type}`;
        }

        function syncEditMeta() {
          syncPublicationNode(publicationNode, item.publicationStatus);
          if (updatedNode) {
            updatedNode.textContent = getUpdatedLabel(item.updated);
          }
        }

        function syncEpisodeTabs() {
          if (!episodeTabs) return;
          episodeTabs.querySelectorAll("[data-episode-tab]").forEach((tab) => {
            const isSelected = Number(tab.dataset.episodeTab) === currentEpisodeNumber;
            tab.setAttribute("aria-selected", String(isSelected));
            tab.tabIndex = isSelected ? 0 : -1;
          });
        }

        function syncEpisodePage(nextEpisodeNumber, options = {}) {
          currentEpisodeNumber = Math.max(1, Math.min(episodeCount, Number(nextEpisodeNumber) || 1));
          const episodeLabel = getEpisodeLabel(currentEpisodeNumber);
          syncEpisodePageTitle();
          titleInput.value = getEpisodeTitleValue(currentEpisodeNumber);
          previewTitle.textContent = episodeLabel;
          syncEditCategoryTag();
          if (videoLinkNode) {
            const videoLink = `https://www.iq.com/play/${encodeURIComponent(item.id)}?episode=${currentEpisodeNumber}`;
            videoLinkNode.textContent = videoLink;
            videoLinkNode.href = videoLink;
          }
          if (fileNameNode) {
            fileNameNode.textContent = getEpisodeFileName(currentEpisodeNumber);
          }
          syncFieldLimit(titleInput, titleCount, titleError, "title");
          syncEpisodeTabs();
          if (options.updateUrl) {
            const nextUrl = new URL(window.location.href);
            nextUrl.searchParams.set("episode", String(currentEpisodeNumber));
            window.history.pushState({ episode: currentEpisodeNumber }, "", nextUrl);
          }
          if (options.syncDerived) {
            syncCoverTitlesFromAlbumTitle();
            syncSourceTranslation("title");
          }
          if (initialFormState) {
            commitFormState();
          }
        }

        function renderEpisodeTabs() {
          if (!episodeTabs) return;
          episodeTabs.innerHTML = Array.from({ length: episodeCount }, (_, index) => {
            const episodeNumber = index + 1;
            return `<li><button class="content-menu-link" type="button" role="tab" data-episode-tab="${episodeNumber}" aria-selected="false">${getEpisodeLabel(episodeNumber)}</button></li>`;
          }).join("");
          syncEpisodeTabs();
        }

        episodeTabs?.addEventListener("click", (event) => {
          const tab = event.target.closest("[data-episode-tab]");
          if (!tab) return;
          syncEpisodePage(Number(tab.dataset.episodeTab), { updateUrl: true, syncDerived: true });
        });

        episodeTabs?.addEventListener("keydown", (event) => {
          const tab = event.target.closest("[data-episode-tab]");
          if (!tab) return;
          const direction = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
          if (!direction) return;
          event.preventDefault();
          const nextEpisodeNumber = ((Number(tab.dataset.episodeTab) - 1 + direction + episodeCount) % episodeCount) + 1;
          syncEpisodePage(nextEpisodeNumber, { updateUrl: true, syncDerived: true });
          episodeTabs.querySelector(`[data-episode-tab="${nextEpisodeNumber}"]`)?.focus();
        });

        window.addEventListener("popstate", () => {
          const nextParams = new URLSearchParams(window.location.search);
          syncEpisodePage(Number(nextParams.get("episode")) || 1, { syncDerived: true });
        });

        renderEpisodeTabs();
        syncEpisodePage(currentEpisodeNumber);

        if (contentIdNode) {
          contentIdNode.textContent = item.id;
        }
        durationNodes.forEach((node) => {
          node.textContent = item.duration;
        });
        formatNode.textContent = item.format || (item.type === "short" ? "1080 x 1920" : "1080p");
        syncEditMeta();
        const isMovie = item.type === "movie";
        if (episodesRow) {
          episodesRow.hidden = true;
        }
        if (episodeCard) {
          episodeCard.hidden = true;
        }
        if (episodesNode && !isMovie) {
          episodesNode.textContent = item.episodes ? t("episodesCount", item.episodes) : t("feature");
        }
        window.addEventListener("studio:languagechange", () => {
          syncEpisodePageTitle();
          renderEpisodeTabs();
          syncEditMeta();
          syncActionLabels();
          syncFieldLimit(titleInput, titleCount, titleError, "title");
          syncFieldLimit(descriptionInput, descriptionCount, descriptionError, "description");
          validateCover();
          validatePaidStatus();
          validateRating();
          validateRegions();
          setRatingValue(ratingValue?.value || "13+");
          if (episodesNode && !isMovie) {
            episodesNode.textContent = item.episodes ? t("episodesCount", item.episodes) : t("feature");
          }
          if (!subtitleAddModal.hidden) {
            renderSubtitleLanguageList();
          }
          syncSubtitleUploadListLanguage();
          if (!subtitleEditModal.hidden) {
            const language = subtitleEditLanguage?.dataset.subtitleLanguage || "en";
            if (subtitleEditLanguage) {
              subtitleEditLanguage.textContent = getSubtitleLanguageLabel(language);
            }
            renderSubtitleEditorList(language);
            syncSubtitlePreviewCaption();
          }
          if (!translationModal.hidden) {
            openTranslationModal(currentTranslationField);
          }
          if (!coverTranslationModal.hidden) {
            renderCoverTranslationList();
          }
          if (!coverTitlePanel.hidden && activeCoverSlot) {
            const label = activeCoverSlot.querySelector(".cover-label")?.textContent || t("cover");
            coverTitlePanelTitle.textContent = t("coverTitlePanelTitle", label);
          }
        });

        document.querySelectorAll('input[name="paidStatus"]').forEach((input) => {
          input.checked = input.value === item.freePaidStatus;
          input.addEventListener("change", () => {
            validatePaidStatus();
            syncActionDirtyState();
          });
        });
        const publicationStatusKey = getStatusKey(item.publicationStatus);
        const isPublished = publicationStatusKey === "online";
        const hidesSaveAction = ["online", "offline"].includes(publicationStatusKey);
        function syncActionLabels() {
          resetActionLabel.textContent = t("undoChanges");
          publishActionLabel.textContent = isPublished ? t("republish") : t("publish");
        }

        syncActionLabels();
        saveAction.hidden = hidesSaveAction;
        saveAction.style.display = hidesSaveAction ? "none" : "";

        if (false && !isMovie && episodeList) {
          const count = item.episodes || 1;
          const visibleEpisodes = Math.min(count, 6);
          episodeList.innerHTML = Array.from({ length: visibleEpisodes }, (_, index) => {
            const label = item.episodes ? t("episodeLabel", index + 1) : t("featureFilm");
            return `
              <div class="episode-list-item" data-edit-episode-item data-episode-index="${index}">
                <div class="episode-item">
                  <span>${label}</span>
                  <button class="episode-toggle" type="button" aria-expanded="false" data-episode-toggle>${t("expand")}</button>
                </div>
                <div class="episode-preview-slot" hidden data-edit-episode-preview-slot>
                  <div data-edit-preview-anchor></div>
                  <a class="episode-edit-action" href="edit2.html?${window.StudioAccount.linked ? 'linked=1&' : ''}contentId=${encodeURIComponent(item.id)}&type=${encodeURIComponent(item.type)}&episode=${index + 1}">${t("episodeEditLink")}</a>
                </div>
              </div>
            `;
          }).join("");

          function setExpandedEpisode(nextIndex) {
            const rows = Array.from(episodeList.querySelectorAll("[data-edit-episode-item]"));
            rows.forEach((row) => {
              const isExpanded = Number(row.dataset.episodeIndex) === nextIndex;
              const toggle = row.querySelector("[data-episode-toggle]");
              const slot = row.querySelector("[data-edit-episode-preview-slot]");
              const previewAnchor = row.querySelector("[data-edit-preview-anchor]");
              row.classList.toggle("is-expanded", isExpanded);
              toggle?.setAttribute("aria-expanded", String(isExpanded));
              if (toggle) {
                toggle.textContent = isExpanded ? t("collapse") : t("expand");
              }
              if (slot) {
                slot.hidden = !isExpanded;
              }
              if (isExpanded && previewCard && previewAnchor) {
                previewCard.hidden = false;
                previewAnchor.appendChild(previewCard);
              }
            });
            if (nextIndex < 0 && previewCard) {
              previewCard.hidden = true;
            }
          }

          episodeList.addEventListener("click", (event) => {
            const toggle = event.target.closest("[data-episode-toggle]");
            if (!toggle) return;
            const row = toggle.closest("[data-edit-episode-item]");
            if (!row) return;
            const nextIndex = toggle.getAttribute("aria-expanded") === "true" ? -1 : Number(row.dataset.episodeIndex);
            setExpandedEpisode(nextIndex);
          });

          setExpandedEpisode(0);
          if (count > visibleEpisodes) {
            episodeList.insertAdjacentHTML("beforeend", `<div class="episode-list-item"><div class="episode-item" aria-disabled="true"><span>${t("totalEpisodes", count)}</span><span>${t("moreEpisodes", count - visibleEpisodes)}</span></div></div>`);
          }
        }

        function setRatingMenuOpen(isOpen) {
          if (!ratingTrigger || !ratingMenu) return;
          ratingTrigger.setAttribute("aria-expanded", String(isOpen));
          ratingMenu.hidden = !isOpen;
        }

        function closeRatingMenu() {
          setRatingMenuOpen(false);
        }

        function getRatingDisplayLabel(value) {
          return value === "All ages" ? t("allAges") : value;
        }

        function setRatingValue(value) {
          if (ratingLabel) {
            ratingLabel.textContent = getRatingDisplayLabel(value);
          }
          if (ratingValue) {
            ratingValue.value = value;
          }
          ratingMenu?.querySelectorAll("[data-rating-option]").forEach((option) => {
            option.setAttribute("aria-selected", String(option.dataset.ratingOption === value));
          });
        }

        function initRatingSelect() {
          setRatingValue(ratingValue?.value || "13+");

          ratingTrigger?.addEventListener("click", (event) => {
            event.stopPropagation();
            setRatingMenuOpen(ratingMenu?.hidden ?? true);
          });

          ratingMenu?.addEventListener("click", (event) => {
            event.stopPropagation();
            const option = event.target.closest("[data-rating-option]");
            if (!option) return;
            setRatingValue(option.dataset.ratingOption);
            validateRating();
            syncActionDirtyState();
            closeRatingMenu();
            ratingTrigger?.focus();
          });

          document.addEventListener("click", (event) => {
            if (ratingSelect && !ratingSelect.contains(event.target)) {
              closeRatingMenu();
            }
          });

          document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
              closeRatingMenu();
            }
          });
        }

        function syncRegionAllState() {
          if (!regionAll || !regionOptions.length) return;
          const checkedCount = regionOptions.filter((input) => input.checked).length;
          regionAll.checked = checkedCount === regionOptions.length;
          regionAll.indeterminate = checkedCount > 0 && checkedCount < regionOptions.length;
        }

        function initRegionSelectAll() {
          syncRegionAllState();

          regionAll?.addEventListener("change", () => {
            regionAll.indeterminate = false;
            regionOptions.forEach((input) => {
              input.checked = regionAll.checked;
            });
            syncRegionAllState();
            validateRegions();
            syncActionDirtyState();
          });

          regionOptions.forEach((input) => {
            input.addEventListener("change", () => {
              syncRegionAllState();
              validateRegions();
              syncActionDirtyState();
            });
          });
        }

        syncFieldLimit(titleInput, titleCount, titleError, "title");
        syncFieldLimit(descriptionInput, descriptionCount, descriptionError, "description");
        initRatingSelect();
        initRegionSelectAll();
        initCoverTools();
        validateCover();
        validatePaidStatus();
        validateRating();
        validateRegions();
        copyVideoLinkButton?.addEventListener("click", copyVideoLink);
        saveAction?.addEventListener("click", () => handlePrimaryAction(t("saveSuccess")));
        publishAction?.addEventListener("click", () => handlePrimaryAction(t("publishSuccess")));
        resetAction?.addEventListener("click", () => {
          if (!isFormDirty()) return;
          restoreInitialFormState();
        });
        document.querySelectorAll("[data-subtitle-edit-open]").forEach((button) => {
          button.addEventListener("click", () => {
            openSubtitleEditModal(button.dataset.subtitleEditLanguage);
          });
        });
        subtitleAddOpen?.addEventListener("click", openSubtitleAddModal);
        subtitleAddClose?.addEventListener("click", closeSubtitleAddModal);
        subtitleAddModal?.addEventListener("click", (event) => {
          if (event.target === subtitleAddModal) {
            closeSubtitleAddModal();
          }
        });
        subtitleLanguageList?.addEventListener("click", (event) => {
          const addButton = event.target.closest("[data-subtitle-language-add]");
          if (!addButton) return;
          if (addButton.disabled) return;
          closeSubtitleAddModal();
          markDynamicDirty();
        });
        subtitleEditClose?.addEventListener("click", closeSubtitleEditModal);
        subtitleEditModal?.addEventListener("click", (event) => {
          if (event.target === subtitleEditModal) {
            closeSubtitleEditModal();
          }
        });
        subtitleEditorList?.addEventListener("click", (event) => {
          const item = event.target.closest("[data-subtitle-editor-index]");
          if (!item) return;

          const cancelButton = event.target.closest("[data-subtitle-edit-cancel]");
          if (cancelButton) {
            event.stopPropagation();
            closeSubtitleEditorItem(item);
            return;
          }

          const confirmButton = event.target.closest("[data-subtitle-edit-confirm]");
          if (confirmButton) {
            event.stopPropagation();
            const input = item.querySelector("[data-subtitle-editor-input]");
            const text = item.querySelector("[data-subtitle-editor-text]");
            if (input && text) {
              text.textContent = input.value;
              const entry = subtitleEditorEntries[Number(item.dataset.subtitleEditorIndex)];
              if (entry) {
                if (subtitleEditLanguage?.dataset.subtitleLanguage === "en") {
                  entry.en = input.value;
                } else {
                  entry.zh = input.value;
                }
              }
              syncSubtitlePreviewCaption();
              syncActionDirtyState();
            }
            closeSubtitleEditorItem(item);
            return;
          }

          if (event.target.closest("[data-subtitle-editor-input]")) {
            return;
          }

          openSubtitleEditorItem(item);
        });
        subtitleVideo?.addEventListener("timeupdate", syncSubtitlePreviewCaption);
        subtitleVideo?.addEventListener("seeking", syncSubtitlePreviewCaption);
        subtitleVideo?.addEventListener("loadedmetadata", syncSubtitlePreviewCaption);
        subtitleVideo?.addEventListener("canplay", () => {
          if (subtitleVideoError) {
            subtitleVideoError.hidden = true;
          }
        });
        subtitleVideo?.addEventListener("loadedmetadata", () => {
          if (subtitleVideoError && subtitleVideo.duration && subtitleVideo.duration < 19.5) {
            subtitleVideoError.textContent = t("videoTooShort");
            subtitleVideoError.hidden = false;
          }
        });
        subtitleVideo?.addEventListener("error", () => {
          if (subtitleVideoError) {
            subtitleVideoError.textContent = t("videoLoadFailed");
            subtitleVideoError.hidden = false;
          }
        });
        subtitleUploadInput?.addEventListener("change", (event) => {
          handleSubtitleUploadChange(event);
          markDynamicDirty();
        });
        subtitleUploadList?.addEventListener("click", handleSubtitleUploadListClick);

        titleInput.addEventListener("input", () => {
          syncFieldLimit(titleInput, titleCount, titleError, "title");
          syncCoverTitlesFromAlbumTitle();
          syncSourceTranslation("title");
          syncActionDirtyState();
        });

        descriptionInput.addEventListener("input", () => {
          syncFieldLimit(descriptionInput, descriptionCount, descriptionError, "description");
          syncSourceTranslation("description");
          syncActionDirtyState();
        });

        const translationEntries = [
          {
            language: "英文",
            title: item.title,
            description: descriptionInput.value
          },
          {
            language: "繁体中文",
            title: "月光小酒館",
            description: "一部深夜喜劇短劇，描繪第六集上線前的關鍵轉折。"
          },
          {
            language: "泰文",
            title: "มูนลิต บิสโทร",
            description: "ซีรีส์คอมเมดี้ยามดึกที่พาไปถึงจุดเปลี่ยนก่อนตอนที่หกเผยแพร่"
          },
          {
            language: "马来语",
            title: "Moonlit Bistro",
            description: "Drama komedi lewat malam tentang titik perubahan sebelum episod keenam disiarkan."
          },
          {
            language: "印尼语",
            title: "Moonlit Bistro",
            description: "Drama komedi larut malam tentang titik balik sebelum episode keenam tayang."
          },
          {
            language: "越南语",
            title: "Quan An Anh Trang",
            description: "Mot phim hai kich dem khuya ve buoc ngoat truoc khi tap sau len song."
          },
          {
            language: "韩语",
            title: "문릿 비스트로",
            description: "6화 공개 전 중요한 전환점을 그린 심야 코미디 드라마입니다."
          },
          {
            language: "日语",
            title: "ムーンリット・ビストロ",
            description: "第6話の配信前に訪れる転機を描く深夜のコメディドラマです。"
          },
          {
            language: "西班牙语",
            title: "Moonlit Bistro",
            description: "Una comedia dramatica nocturna sobre el giro clave antes del estreno del sexto episodio."
          }
        ];
        const generatedTranslationEntries = translationEntries.map((entry) => ({
          title: entry.title,
          description: entry.description
        }));
        getTranslationState = () => translationEntries.map((entry) => ({
          title: entry.title,
          description: entry.description
        }));
        restoreTranslationState = (entries = []) => {
          entries.forEach((entry, index) => {
            if (!translationEntries[index]) return;
            translationEntries[index].title = entry.title;
            translationEntries[index].description = entry.description;
          });
          if (!translationModal.hidden) {
            renderTranslations();
          }
        };

        function syncSourceTranslation(fieldKey) {
          const value = fieldKey === "description" ? descriptionInput.value : titleInput.value;
          translationEntries[0][fieldKey] = value;
          generatedTranslationEntries[0][fieldKey] = value;
          if (translationModal.hidden || currentTranslationField !== fieldKey) return;
          const editingRow = translationList.querySelector(".translation-row.is-editing");
          const editingIndex = editingRow ? Number(editingRow.dataset.translationIndex) : -1;
          renderTranslations(editingIndex);
        }

        function escapeHtml(value) {
          return String(value)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;");
        }

        function getTranslationLanguageLabel(language) {
          if (currentLanguage === "zh") return language;
          const labels = {
            "英文": "English",
            "繁体中文": "Traditional Chinese",
            "泰文": "Thai",
            "马来语": "Malay",
            "印尼语": "Indonesian",
            "越南语": "Vietnamese",
            "韩语": "Korean",
            "日语": "Japanese",
            "西班牙语": "Spanish"
          };
          return labels[language] || language;
        }

        function renderTranslations(editingIndex = -1) {
          const isTitleField = currentTranslationField === "title";
          const fieldKey = isTitleField ? "title" : "description";
          const limit = fieldLimits[fieldKey];
          translationList.innerHTML = translationEntries
            .map((entry, index) => {
              const isEditing = index === editingIndex;
              const value = entry[fieldKey];
              const isModified = value !== generatedTranslationEntries[index][fieldKey];
              const languageLabel = getTranslationLanguageLabel(entry.language);
              const length = getCharacterLength(value);
              return `
                <article class="translation-row single-field${isEditing ? " is-editing" : ""}${isTitleField ? "" : " is-description"}" data-translation-index="${index}">
                  <div class="translation-language">
                    <span>${languageLabel}</span>
                    <span class="translation-status">
                      <span class="generated-badge${isModified ? " modified" : ""}">${isModified ? t("modified") : t("platformGenerated")}</span>
                    </span>
                  </div>
                  <div class="translation-cell">
                    ${
                      isEditing
                        ? `<div class="limited-field">${
                            isTitleField
                              ? `<input class="translation-input" value="${escapeHtml(value)}" data-translation-value-input />`
                              : `<textarea class="translation-textarea" data-translation-value-input>${escapeHtml(value)}</textarea>`
                          }<div class="translation-meta"><span class="char-count" data-translation-count>${length}/${limit.max}</span></div></div><span class="translation-error limit-error" data-translation-error hidden></span>`
                        : `<button class="translation-value" type="button" data-translation-start-edit>${escapeHtml(value)}</button>`
                    }
                  </div>
                  ${
                    isEditing
                      ? `<button class="translation-edit" type="button" data-translation-edit>${t("complete")}</button>`
                      : isModified
                        ? `<button class="translation-reset" type="button" data-translation-reset>Reset</button>`
                        : `<span aria-hidden="true"></span>`
                  }
                </article>
              `;
            })
            .join("");

          if (editingIndex >= 0) {
            const editor = translationList.querySelector("[data-translation-value-input]");
            if (editor) {
              editor.focus();
              const cursorPosition = editor.value.length;
              editor.setSelectionRange(cursorPosition, cursorPosition);
              syncTranslationEditorLimit(editor);
            }
          }
        }

        function syncTranslationEditorLimit(editor) {
          const fieldKey = currentTranslationField === "description" ? "description" : "title";
          const limit = fieldLimits[fieldKey];
          const row = editor.closest("[data-translation-index]");
          const countNode = row.querySelector("[data-translation-count]");
          const errorNode = row.querySelector("[data-translation-error]");
          const completeButton = row.querySelector("[data-translation-edit]");
          const length = getCharacterLength(editor.value);
          const hasError = length > limit.max;
          countNode.textContent = `${length}/${limit.max}`;
          editor.classList.toggle("is-invalid", hasError);
          row.classList.toggle("has-error", hasError);
          errorNode.textContent = hasError ? t("maxLengthError", t(limit.labelKey), limit.max) : "";
          errorNode.hidden = !hasError;
          if (completeButton) {
            completeButton.disabled = hasError;
          }
          return !hasError;
        }

        function openTranslationModal(field) {
          currentTranslationField = field === "description" ? "description" : "title";
          translationModalTitle.textContent = field === "description" ? t("descriptionMultilingualTitle") : t("titleMultilingualTitle");
          syncSourceTranslation(currentTranslationField);
          renderTranslations();
          translationModal.hidden = false;
          translationClose.focus();
        }

        function closeTranslationModal() {
          translationModal.hidden = true;
        }

        function renderCoverTranslationList() {
          if (!coverTranslationList) return;
          coverTranslationList.innerHTML = translationEntries
            .map((entry) => {
              const languageLabel = getTranslationLanguageLabel(entry.language);
              return `
              <article class="poster-row">
                <div class="translation-language">
                  <span>${languageLabel}</span>
                  <span class="translation-status">
                    <span class="generated-badge">${t("platformGenerated")}</span>
                  </span>
                </div>
                <div class="poster-preview-set" aria-label="${languageLabel} poster previews">
                  <div class="poster-preview-item landscape" data-poster-item data-poster-title-value="${escapeHtml(entry.title)}" data-poster-default-title="${escapeHtml(entry.title)}">
                    <div class="poster-frame">
                      <span class="poster-art" aria-hidden="true">
                        <span class="poster-title-art" data-poster-title="${escapeHtml(entry.title)}">${escapeHtml(entry.title)}</span>
                      </span>
                      <div class="cover-overlay" aria-label="${languageLabel} 16:9 poster actions">
                        <button class="cover-hover-action" type="button" data-poster-upload>${t("reupload")}</button>
                        <button class="cover-hover-action" type="button" data-poster-title-toggle>${t("titleWrap")}</button>
                      </div>
                      <input class="cover-file-input" type="file" accept="image/*" data-poster-file />
                    </div>
                    <span class="poster-preview-label">${t("coverLandscape")}</span>
                  </div>
                  <div class="poster-preview-item portrait" data-poster-item data-poster-title-value="${escapeHtml(entry.title)}" data-poster-default-title="${escapeHtml(entry.title)}">
                    <div class="poster-frame">
                      <span class="poster-art" aria-hidden="true">
                        <span class="poster-title-art" data-poster-title="${escapeHtml(entry.title)}">${escapeHtml(entry.title)}</span>
                      </span>
                      <div class="cover-overlay" aria-label="${languageLabel} 3:4 poster actions">
                        <button class="cover-hover-action" type="button" data-poster-upload>${t("reupload")}</button>
                        <button class="cover-hover-action" type="button" data-poster-title-toggle>${t("titleWrap")}</button>
                      </div>
                      <input class="cover-file-input" type="file" accept="image/*" data-poster-file />
                    </div>
                    <span class="poster-preview-label">${t("coverPortrait")}</span>
                  </div>
                  <div class="poster-preview-item square" data-poster-item data-poster-title-value="${escapeHtml(entry.title)}" data-poster-default-title="${escapeHtml(entry.title)}">
                    <div class="poster-frame">
                      <span class="poster-art" aria-hidden="true">
                        <span class="poster-title-art" data-poster-title="${escapeHtml(entry.title)}">${escapeHtml(entry.title)}</span>
                      </span>
                      <div class="cover-overlay" aria-label="${languageLabel} 1:1 poster actions">
                        <button class="cover-hover-action" type="button" data-poster-upload>${t("reupload")}</button>
                        <button class="cover-hover-action" type="button" data-poster-title-toggle>${t("titleWrap")}</button>
                      </div>
                      <input class="cover-file-input" type="file" accept="image/*" data-poster-file />
                    </div>
                    <span class="poster-preview-label">${t("coverSquare")}</span>
                  </div>
                </div>
                <div class="cover-title-panel poster-title-panel" hidden data-poster-title-panel>
                  <div class="cover-title-panel-head">
                    <span class="cover-title-panel-title" data-poster-title-panel-title>${t("titleWrap")}</span>
                  </div>
                  <textarea class="cover-title-textarea" rows="3" spellcheck="false" data-poster-title-input></textarea>
                  <div class="cover-title-panel-actions">
                    <div class="cover-title-panel-actions-left">
                      <button class="edit-action" type="button" data-poster-title-cancel>${t("cancel")}</button>
                      <button class="edit-action" type="button" data-poster-title-restore>${t("restoreDefault")}</button>
                    </div>
                    <div class="cover-title-panel-actions-right">
                      <button class="edit-action" type="button" data-poster-title-apply-all>${t("applyAll")}</button>
                      <button class="edit-action primary" type="button" data-poster-title-apply-current>${t("applyCurrent")}</button>
                    </div>
                  </div>
                </div>
              </article>
            `;
            })
            .join("");
        }

        function openCoverTranslationModal() {
          if (!coverTranslationModal) return;
          activePosterItem = null;
          posterTitleSnapshot = "";
          renderCoverTranslationList();
          coverTranslationModal.hidden = false;
          coverTranslationClose?.focus();
        }

        function closeCoverTranslationModal() {
          coverTranslationList?.querySelectorAll(".poster-row").forEach((row) => closePosterTitlePanel(row));
          if (coverTranslationModal) {
            coverTranslationModal.hidden = true;
          }
        }

        function getPosterPanel(row) {
          return row?.querySelector("[data-poster-title-panel]");
        }

        function getPosterPanelInput(panel) {
          return panel?.querySelector("[data-poster-title-input]");
        }

        function setPosterPanelActionsEnabled(panel, enabled) {
          panel?.querySelector("[data-poster-title-apply-all]")?.toggleAttribute("disabled", !enabled);
          panel?.querySelector("[data-poster-title-apply-current]")?.toggleAttribute("disabled", !enabled);
        }

        function syncPosterPanelActionState(panel) {
          const input = getPosterPanelInput(panel);
          setPosterPanelActionsEnabled(panel, Boolean(input && input.value !== posterTitleSnapshot));
        }

        function syncPosterItemTitle(posterItem, value) {
          const titleNode = posterItem?.querySelector(".poster-title-art");
          if (titleNode) {
            titleNode.textContent = value || posterItem.dataset.posterDefaultTitle || "";
          }
        }

        function applyPosterTitleToItem(posterItem, value) {
          if (!posterItem) return;
          posterItem.dataset.posterTitleValue = value;
          syncPosterItemTitle(posterItem, value);
        }

        function applyPosterTitleToAll(row, value) {
          row?.querySelectorAll("[data-poster-item]").forEach((posterItem) => {
            applyPosterTitleToItem(posterItem, value);
          });
        }

        function closePosterTitlePanel(row) {
          row?.classList.remove("has-title-editor");
          row?.querySelectorAll("[data-poster-item]").forEach((posterItem) => posterItem.classList.remove("is-title-editing"));
          const panel = getPosterPanel(row);
          if (panel) {
            panel.hidden = true;
            setPosterPanelActionsEnabled(panel, false);
          }
          activePosterItem = null;
          posterTitleSnapshot = "";
        }

        function openPosterTitlePanel(posterItem) {
          const row = posterItem.closest(".poster-row");
          const panel = getPosterPanel(row);
          const input = getPosterPanelInput(panel);
          const title = panel?.querySelector("[data-poster-title-panel-title]");
          if (!row || !panel || !input || !title) return;
          const isSameOpen = activePosterItem === posterItem && !panel.hidden;
          coverTranslationList.querySelectorAll(".poster-row").forEach((item) => closePosterTitlePanel(item));
          if (isSameOpen) return;

          activePosterItem = posterItem;
          row.classList.add("has-title-editor");
          posterItem.classList.add("is-title-editing");
          const label = posterItem.querySelector(".poster-preview-label")?.textContent || t("cover");
          title.textContent = t("coverTitlePanelTitle", label);
          input.value = posterItem.dataset.posterTitleValue || posterItem.dataset.posterDefaultTitle || "";
          posterTitleSnapshot = input.value;
          syncPosterPanelActionState(panel);
          panel.hidden = false;
          input.focus();
          const cursorPosition = input.value.length;
          input.setSelectionRange(cursorPosition, cursorPosition);
        }

        function syncActivePosterTitle(value, cursorPosition) {
          if (!activePosterItem) return;
          const row = activePosterItem.closest(".poster-row");
          const panel = getPosterPanel(row);
          const input = getPosterPanelInput(panel);
          if (!input) return;
          input.value = value;
          applyPosterTitleToItem(activePosterItem, value);
          syncPosterPanelActionState(panel);
          if (Number.isInteger(cursorPosition)) {
            input.setSelectionRange(cursorPosition, cursorPosition);
          }
        }

        function restoreDefaultPosterTitle(panel) {
          if (!activePosterItem) return;
          const value = activePosterItem.dataset.posterDefaultTitle || "";
          syncActivePosterTitle(value, value.length);
        }

        function cancelPosterTitleChange(panel) {
          if (!activePosterItem) return;
          const row = activePosterItem.closest(".poster-row");
          applyPosterTitleToItem(activePosterItem, posterTitleSnapshot || activePosterItem.dataset.posterDefaultTitle || "");
          closePosterTitlePanel(row);
        }

        function handlePosterTitleKeydown(event) {
          if (!activePosterItem) return;
          const allowedKeys = new Set([
            "ArrowLeft",
            "ArrowRight",
            "ArrowUp",
            "ArrowDown",
            "Home",
            "End",
            "PageUp",
            "PageDown",
            "Tab",
            "Escape",
            "Shift",
            "Control",
            "Meta",
            "Alt"
          ]);
          if ((event.metaKey || event.ctrlKey) && ["a", "c"].includes(event.key.toLowerCase())) {
            return;
          }
          if (allowedKeys.has(event.key)) return;

          const input = event.target.closest("[data-poster-title-input]");
          if (!input) return;
          const value = input.value;
          const start = input.selectionStart;
          const end = input.selectionEnd;
          event.preventDefault();

          if (event.key === "Enter") {
            syncActivePosterTitle(value.slice(0, start) + "\n" + value.slice(start), start + 1);
            return;
          }

          if (event.key === "Backspace") {
            if (start !== end) {
              const next = removeLineBreaksInSelection(value, start, end);
              if (next) syncActivePosterTitle(next.value, next.cursorPosition);
              return;
            }
            if (start > 0 && value[start - 1] === "\n") {
              syncActivePosterTitle(value.slice(0, start - 1) + value.slice(start), start - 1);
            }
            return;
          }

          if (event.key === "Delete") {
            if (start !== end) {
              const next = removeLineBreaksInSelection(value, start, end);
              if (next) syncActivePosterTitle(next.value, next.cursorPosition);
              return;
            }
            if (value[start] === "\n") {
              syncActivePosterTitle(value.slice(0, start) + value.slice(start + 1), start);
            }
          }
        }

        coverTranslationList?.addEventListener("click", (event) => {
          const uploadButton = event.target.closest("[data-poster-upload]");
          if (uploadButton) {
            const frame = uploadButton.closest(".poster-frame");
            frame?.querySelector("[data-poster-file]")?.click();
            return;
          }

          const titleButton = event.target.closest("[data-poster-title-toggle]");
          if (titleButton) {
            const posterItem = titleButton.closest("[data-poster-item]");
            if (posterItem) {
              openPosterTitlePanel(posterItem);
            }
            return;
          }

          const cancelButton = event.target.closest("[data-poster-title-cancel]");
          if (cancelButton) {
            cancelPosterTitleChange(cancelButton.closest("[data-poster-title-panel]"));
            return;
          }

          const restoreButton = event.target.closest("[data-poster-title-restore]");
          if (restoreButton) {
            restoreDefaultPosterTitle(restoreButton.closest("[data-poster-title-panel]"));
            return;
          }

          const applyAllButton = event.target.closest("[data-poster-title-apply-all]");
          if (applyAllButton) {
            if (applyAllButton.disabled) return;
            const row = applyAllButton.closest(".poster-row");
            const panel = getPosterPanel(row);
            const input = getPosterPanelInput(panel);
            if (!input) return;
            applyPosterTitleToAll(row, input.value);
            closePosterTitlePanel(row);
            showCoverMessage();
            syncActionDirtyState();
            return;
          }

          const applyCurrentButton = event.target.closest("[data-poster-title-apply-current]");
          if (applyCurrentButton) {
            if (applyCurrentButton.disabled || !activePosterItem) return;
            const row = activePosterItem.closest(".poster-row");
            const panel = getPosterPanel(row);
            const input = getPosterPanelInput(panel);
            if (!input) return;
            applyPosterTitleToItem(activePosterItem, input.value);
            closePosterTitlePanel(row);
            showCoverMessage();
            syncActionDirtyState();
          }
        });

        coverTranslationList?.addEventListener("keydown", (event) => {
          if (event.target.closest("[data-poster-title-input]")) {
            handlePosterTitleKeydown(event);
          }
        });

        coverTranslationList?.addEventListener("beforeinput", (event) => {
          if (event.target.closest("[data-poster-title-input]")) {
            event.preventDefault();
          }
        });

        coverTranslationList?.addEventListener("paste", (event) => {
          if (event.target.closest("[data-poster-title-input]")) {
            event.preventDefault();
          }
        });

        coverTranslationList?.addEventListener("cut", (event) => {
          if (event.target.closest("[data-poster-title-input]")) {
            event.preventDefault();
          }
        });

        coverTranslationList?.addEventListener("drop", (event) => {
          if (event.target.closest("[data-poster-title-input]")) {
            event.preventDefault();
          }
        });

        coverTranslationList?.addEventListener("input", (event) => {
          const input = event.target.closest("[data-poster-title-input]");
          if (!input || !activePosterItem || input.value === activePosterItem.dataset.posterTitleValue) return;
          input.value = activePosterItem.dataset.posterTitleValue || activePosterItem.dataset.posterDefaultTitle || "";
        });

        coverTranslationList?.addEventListener("change", (event) => {
          const fileInput = event.target.closest("[data-poster-file]");
          if (!fileInput) return;
          const file = fileInput.files && fileInput.files[0];
          const posterArt = fileInput.closest(".poster-frame")?.querySelector(".poster-art");
          if (!file || !posterArt) return;
          const nextUrl = URL.createObjectURL(file);
          posterArt.style.backgroundImage = `url("${nextUrl}")`;
          posterArt.style.backgroundSize = "cover";
          posterArt.style.backgroundPosition = "center";
          markDynamicDirty();
        });

        translationOpenButtons.forEach((button) => {
          button.addEventListener("click", () => {
            openTranslationModal(button.dataset.translationField);
          });
        });

        coverTranslationOpen?.addEventListener("click", openCoverTranslationModal);
        coverTranslationClose?.addEventListener("click", closeCoverTranslationModal);
        coverTranslationModal?.addEventListener("click", (event) => {
          if (event.target === coverTranslationModal) {
            closeCoverTranslationModal();
          }
        });

        translationClose.addEventListener("click", closeTranslationModal);
        translationModal.addEventListener("click", (event) => {
          if (event.target === translationModal) {
            closeTranslationModal();
          }
        });

        translationList.addEventListener("click", (event) => {
          const resetButton = event.target.closest("[data-translation-reset]");
          if (resetButton) {
            const row = resetButton.closest("[data-translation-index]");
            const index = Number(row.dataset.translationIndex);
            const fieldKey = currentTranslationField === "description" ? "description" : "title";
            translationEntries[index][fieldKey] = generatedTranslationEntries[index][fieldKey];
            renderTranslations();
            syncActionDirtyState();
            return;
          }

          const valueButton = event.target.closest("[data-translation-start-edit]");
          if (valueButton) {
            const row = valueButton.closest("[data-translation-index]");
            renderTranslations(Number(row.dataset.translationIndex));
            return;
          }

          const editButton = event.target.closest("[data-translation-edit]");
          if (!editButton) return;
          if (editButton.disabled) return;
          const row = editButton.closest("[data-translation-index]");
          const index = Number(row.dataset.translationIndex);
          const valueEditor = row.querySelector("[data-translation-value-input]");
          if (valueEditor) {
            syncTranslationEditorLimit(valueEditor);
            const fieldKey = currentTranslationField === "description" ? "description" : "title";
            translationEntries[index][fieldKey] = valueEditor.value.trim() || translationEntries[index][fieldKey];
            renderTranslations();
            syncActionDirtyState();
            return;
          }
          renderTranslations(index);
        });

        translationList.addEventListener("input", (event) => {
          const editor = event.target.closest("[data-translation-value-input]");
          if (!editor) return;
          syncTranslationEditorLimit(editor);
          syncActionDirtyState();
        });

        document.addEventListener("keydown", (event) => {
          if (event.key === "Escape" && !translationModal.hidden) {
            closeTranslationModal();
          }
          if (event.key === "Escape" && coverTranslationModal && !coverTranslationModal.hidden) {
            closeCoverTranslationModal();
          }
          if (event.key === "Escape" && subtitleAddModal && !subtitleAddModal.hidden) {
            closeSubtitleAddModal();
          }
          if (event.key === "Escape" && subtitleEditModal && !subtitleEditModal.hidden) {
            closeSubtitleEditModal();
          }
        });
        commitFormState();
      })();
    