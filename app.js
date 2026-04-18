/**
 * ASKEP JIWA SMART - Main Entry Point
 * Author: Antigravity AI
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Lucide Icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // 2. Initialize Navigation & UI Base
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

  console.log("JiwaCare Application Initialized Successfully.");
});
