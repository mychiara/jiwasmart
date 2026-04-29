/**
 * ASKEP JIWA SMART - Main Entry Point
 * Author: Antigravity AI
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Lucide Icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // 2. Initialize License Module
  if (typeof initLicense === "function") {
    initLicense();
  }

  // 3. Initialize Navigation & UI Base
  if (typeof initNavigation === "function") {
    initNavigation();
  }

  // 3. Initialize Domain Specific Modules
  if (typeof initLPGenerator === "function") {
    initLPGenerator();
  }
  if (typeof initASKEPGenerator === "function") {
    initASKEPGenerator();
  }
  if (typeof initAssessment === "function") {
    initAssessment();
  }
  if (typeof initDashboard === "function") {
    initDashboard();
  }

  // 4. Initialize dynamic content for TAK, SPO, and HARS
  if (typeof renderTAKButtons === "function") {
    renderTAKButtons();
  }
  if (typeof filterSPOCategory === "function") {
    filterSPOCategory("A");
  }
  if (typeof renderHARSItems === "function") {
    renderHARSItems();
  }

  // 5. Initialize New Core Modules (Clinical & Edu)
  if (typeof initEPsychoeducation === "function") {
    initEPsychoeducation();
  }

  // 6. Load External Data
  if (typeof loadData === "function") {
    loadData();
  }

  // 7. Populate License Info in Settings
  populateLicenseInfo();

  console.log("JiwaCare Application Initialized Successfully.");
});

/**
 * Populate the License Info card in Settings with data from localStorage.
 */
function populateLicenseInfo() {
  if (typeof getLicenseInfo !== "function") return;

  const info = getLicenseInfo();
  const nameEl = document.getElementById("license-info-name");
  const emailEl = document.getElementById("license-info-email");
  const expiryEl = document.getElementById("license-info-expiry");

  if (nameEl) nameEl.textContent = info.name || "-";
  if (emailEl) emailEl.textContent = info.email || "-";

  if (expiryEl) {
    if (info.expiry) {
      const d = new Date(info.expiry);
      const now = new Date();
      const isExpired = now > d;
      const formatted = d.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      if (isExpired) {
        expiryEl.textContent = "Kadaluarsa pada " + formatted;
        expiryEl.style.color = "var(--accent, #ef4444)";
      } else {
        // Calculate remaining days
        const diffMs = d - now;
        const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
        expiryEl.textContent =
          "Hingga " + formatted + " (" + diffDays + " hari lagi)";
        expiryEl.style.color = "var(--success, #22c55e)";
      }
    } else {
      expiryEl.textContent = "Selamanya (tanpa batas waktu)";
    }
  }
}
