/**
 * ASKEP JIWA SMART - Navigation & UI Core
 */

window.initNavigation = function () {
  const sections = document.querySelectorAll(".view-section");
  const navLinks = document.querySelectorAll(".nav-link");
  const currentTitle = document.getElementById("current-title");
  const themeBtn = document.getElementById("theme-btn");
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  const privacyBtn = document.getElementById("privacy-toggle");

  // === Landing Page Logic ===
  const landingScreen = document.getElementById("landing-screen");
  const enterAppBtn = document.getElementById("enter-app-btn");
  const appContainer = document.querySelector(".app-container");

  if (enterAppBtn && landingScreen) {
    enterAppBtn.addEventListener("click", () => {
      landingScreen.classList.add("hidden");

      // After landing page hides, show license screen
      // (showLicenseScreen will auto-skip if already licensed)
      setTimeout(() => {
        if (typeof showLicenseScreen === "function") {
          showLicenseScreen();
        } else {
          // Fallback if license module not loaded
          if (appContainer) appContainer.classList.remove("blur");
        }
      }, 400);
    });
  }

  // Keep app blurred while landing is visible
  if (
    appContainer &&
    landingScreen &&
    !landingScreen.classList.contains("hidden")
  ) {
    appContainer.classList.add("blur");
    // Hide mobile header while on landing/license
    const mhdr = document.querySelector(".mobile-header");
    if (mhdr) mhdr.style.visibility = "hidden";
  }

  // === Mobile Menu Logic ===
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      overlay.classList.toggle("active");
    });
  }

  if (overlay) {
    overlay.addEventListener("click", () => {
      sidebar.classList.remove("open");
      overlay.classList.remove("active");
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 640) {
        sidebar.classList.remove("open");
        overlay.classList.remove("active");
      }
    });
  });

  // === Sidebar Scrolling Logic ===
  const navLinksContainer = document.querySelector(".nav-links");
  const sidebarFooter = document.getElementById("sidebar-footer");
  const scrollDownBtn = document.getElementById("sidebar-scroll-down");

  if (navLinksContainer && sidebarFooter && scrollDownBtn) {
    const updateScrollButtonVisibility = () => {
      // Check if the container is actually scrollable
      if (navLinksContainer.scrollHeight > navLinksContainer.clientHeight) {
        sidebarFooter.style.display = "flex";
        // Check if we are already at the bottom
        const isAtBottom =
          navLinksContainer.scrollHeight - navLinksContainer.scrollTop <=
          navLinksContainer.clientHeight + 10;

        if (isAtBottom) {
          scrollDownBtn.innerHTML =
            '<i class="lucide-chevron-up"></i><span>Scroll ke Atas</span>';
          if (typeof lucide !== "undefined") {
            scrollDownBtn.innerHTML =
              '<i data-lucide="chevron-up" style="width: 14px;"></i><span>Scroll ke Atas</span>';
            lucide.createIcons();
          }
          scrollDownBtn.onclick = () => {
            navLinksContainer.scrollTo({ top: 0, behavior: "smooth" });
          };
        } else {
          scrollDownBtn.innerHTML =
            '<i class="lucide-chevron-down"></i><span>Scroll ke Bawah</span>';
          if (typeof lucide !== "undefined") {
            scrollDownBtn.innerHTML =
              '<i data-lucide="chevron-down" style="width: 14px;"></i><span>Scroll ke Bawah</span>';
            lucide.createIcons();
          }
          scrollDownBtn.onclick = () => {
            navLinksContainer.scrollTo({
              top: navLinksContainer.scrollHeight,
              behavior: "smooth",
            });
          };
        }
      } else {
        sidebarFooter.style.display = "none";
      }
    };

    // Initial check
    setTimeout(updateScrollButtonVisibility, 100);

    // Check on scroll
    navLinksContainer.addEventListener("scroll", updateScrollButtonVisibility);

    // Check on resize window
    window.addEventListener("resize", updateScrollButtonVisibility);
  }

  // === Privacy Toggle ===
  if (privacyBtn) {
    const updatePrivacyIcon = () => {
      privacyBtn.innerHTML = isPrivacyMode
        ? '<i data-lucide="eye"></i>'
        : '<i data-lucide="eye-off"></i>';
      if (typeof lucide !== "undefined") lucide.createIcons();
      privacyBtn.style.color = isPrivacyMode ? "var(--success)" : "inherit";
    };

    updatePrivacyIcon();

    privacyBtn.addEventListener("click", () => {
      window.isPrivacyMode = !window.isPrivacyMode;
      localStorage.setItem("privacy_mode", window.isPrivacyMode);
      updatePrivacyIcon();
      Swal.fire({
        title: isPrivacyMode ? "Mode Privasi Aktif" : "Mode Privasi Nonaktif",
        text: isPrivacyMode
          ? "Nama pasien akan otomatis disingkat (anonymized)."
          : "Nama pasien akan ditampilkan penuh.",
        icon: "info",
        timer: 1500,
        showConfirmButton: false,
      });
    });
  }

  // === Theme Toggle ===
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const currentTheme = document.body.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      document.body.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      themeBtn.innerHTML =
        newTheme === "dark"
          ? '<i data-lucide="moon"></i>'
          : '<i data-lucide="sun"></i>';
      if (typeof lucide !== "undefined") lucide.createIcons();
    });

    if (localStorage.getItem("theme") === "dark") {
      document.body.setAttribute("data-theme", "dark");
      themeBtn.innerHTML = '<i data-lucide="moon"></i>';
      if (typeof lucide !== "undefined") lucide.createIcons();
    }
  }

  // === Global showView Function ===
  window.showView = function (viewId) {
    sections.forEach((sec) => sec.classList.remove("active"));
    navLinks.forEach((link) => link.classList.remove("active"));
    document
      .querySelectorAll(".header-nav-item")
      .forEach((i) => i.classList.remove("active"));
    document
      .querySelectorAll(".bottom-nav-item")
      .forEach((bl) => bl.classList.remove("active"));

    const target = document.getElementById(viewId);
    if (target) {
      target.classList.add("active");

      const link = document.querySelector(`.nav-link[data-view="${viewId}"]`);
      const hLink = document.querySelector(
        `.header-nav-item[data-view="${viewId}"]`,
      );
      const bottomLink = document.querySelector(
        `.bottom-nav-item[data-view="${viewId}"]`,
      );

      if (link) {
        link.classList.add("active");
        currentTitle.textContent = link.querySelector("span").textContent;
      }
      if (hLink) hLink.classList.add("active");
      if (bottomLink) bottomLink.classList.add("active");

      window.location.hash = viewId;

      // Stop quiz timer if leaving quiz view
      if (viewId !== "latihan-soal") {
        if (typeof stopTimer === "function") stopTimer();
      }

      // Autofill ASKEP data
      if (viewId === "generator-askep") {
        if (typeof autofillASKEP === "function") autofillASKEP();
      }
    }
  };

  // Hash routing
  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.replace("#", "") || "dashboard";
    showView(hash);
  });

  // Initial View
  const startHash = window.location.hash.replace("#", "") || "dashboard";
  showView(startHash);

  // Click listeners
  const allNavItems = document.querySelectorAll(
    ".nav-link, .bottom-nav-item, .header-nav-item",
  );
  allNavItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const view = e.currentTarget.getAttribute("data-view");
      if (view) showView(view);
    });
  });
};
