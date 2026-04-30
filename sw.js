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
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    }),
  );
});

// Activate & Cleanup Old Caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key)),
      );
    }),
  );
});

// Fetch Assets from Cache (Fast Loading)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    }),
  );
});
