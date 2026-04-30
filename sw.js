const CACHE_NAME = "nursejiwa-v1";
const ASSETS = [
  "index.html",
  "style.css",
  "app.js",
  "dataset.js",
  "manifest.json",
  "icon.png",
  "js/utils.js",
  "js/state.js",
  "js/license.js",
  "js/navigation.js",
  "js/sad-persons.js",
  "js/utils-clinical.js",
  "js/history.js",
  "js/dashboard.js",
  "js/bookmarks.js",
  "js/generator-lp.js",
  "js/generator-askep.js",
  "js/mse.js",
  "js/assessment.js",
  "js/hars.js",
  "js/tak-spo.js",
  "js/quiz.js",
  "js/dataset-new-modules.js",
  "js/clinical-screening.js",
  "js/e-psikoedukasi.js",
  "js/history-assessment.js",
  "js/security.js",
  "data/sdki.json",
  "data/slki.json",
  "data/siki.json",
  "data/spo.json",
  "data/tak.json",
  "data/jiwa.json",
  "https://unpkg.com/lucide@latest",
  "https://cdn.jsdelivr.net/npm/sweetalert2@11",
  "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js",
  "https://cdn.jsdelivr.net/npm/chart.js"
];

// Install Service Worker
self.addEventListener("install", (event) => {
  self.skipWaiting(); // Force update
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      const localAssets = ASSETS.filter(a => !a.startsWith('http'));
      const externalAssets = ASSETS.filter(a => a.startsWith('http'));
      
      return cache.addAll(localAssets).then(() => {
        return Promise.all(
          externalAssets.map(url => 
            cache.add(url).catch(err => console.warn("Failed to cache:", url))
          )
        );
      });
    }),
  );
});

// Activate & Cleanup Old Caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      clients.claim(), // Take control of all pages immediately
      caches.keys().then((keys) => {
        return Promise.all(
          keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
        );
      })
    ])
  );
});

// Fetch Assets from Cache (Fast Loading)
self.addEventListener("fetch", (event) => {
  const url = event.request.url;

  // CRITICAL: Skip Google Apps Script and other external APIs
  if (url.includes("script.google.com") || url.includes("google.com")) {
    return; // Let the browser handle it directly
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      
      return fetch(event.request).catch(err => {
        console.warn("Fetch failed for:", url);
        // Fallback for failed fetches (optional)
      });
    }),
  );
});
