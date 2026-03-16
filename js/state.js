/**
 * ASKEP JIWA SMART - State Management & Data Loading
 */

window.EXTERNAL_SDKI = [];
window.EXTERNAL_SLKI = [];
window.EXTERNAL_SIKI = [];
window.EXTERNAL_SPO = {};
window.EXTERNAL_TAK = {};
window.EXTERNAL_JIWA = [];
window.editingHistoryIndex = -1;

window.loadData = async function () {
  showLoader();
  console.log("Starting data load...");

  const datasets = [
    { key: "EXTERNAL_SDKI", path: "data/sdki.json" },
    { key: "EXTERNAL_SLKI", path: "data/slki.json" },
    { key: "EXTERNAL_SIKI", path: "data/siki.json" },
    { key: "EXTERNAL_SPO", path: "data/spo.json" },
    { key: "EXTERNAL_TAK", path: "data/tak.json" },
    { key: "EXTERNAL_JIWA", path: "data/jiwa.json" },
  ];

  for (const ds of datasets) {
    try {
      const resp = await fetch(ds.path);
      if (resp.ok) {
        window[ds.key] = await resp.json();
      } else {
        console.warn(`Failed to load ${ds.path}: ${resp.status}`);
      }
    } catch (err) {
      console.error(`Error processing ${ds.path}:`, err);
    }
  }

  console.log("Data Load Metrics:", {
    SDKI: window.EXTERNAL_SDKI ? window.EXTERNAL_SDKI.length : 0,
    SLKI: window.EXTERNAL_SLKI ? window.EXTERNAL_SLKI.length : 0,
    SIKI: window.EXTERNAL_SIKI ? window.EXTERNAL_SIKI.length : 0,
    SPO: window.EXTERNAL_SPO ? Object.keys(window.EXTERNAL_SPO).length : 0,
    TAK: window.EXTERNAL_TAK ? Object.keys(window.EXTERNAL_TAK).length : 0,
    JIWA: window.EXTERNAL_JIWA ? window.EXTERNAL_JIWA.length : 0,
  });

  // Call UI Initializers
  try {
    if (typeof renderTAKButtons === "function") renderTAKButtons();
    if (typeof filterSPOCategory === "function") filterSPOCategory("A");

    // Initial Rendering of tables
    if (typeof renderSDKITable === "function") renderSDKITable();
    if (typeof renderSLKITable === "function") renderSLKITable();
    if (typeof renderSIKITable === "function") renderSIKITable();

    // Initialize Dashboard Charts
    if (typeof updateDashboardStats === "function") updateDashboardStats();
  } catch (uiErr) {
    console.error("Error in UI Initializers:", uiErr);
  }

  hideLoader();
};
