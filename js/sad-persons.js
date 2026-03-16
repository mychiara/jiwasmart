/**
 * ASKEP JIWA SMART - SAD PERSONS Scale Logic
 */

window.calculateSADPERSONS = function () {
  const items = document.querySelectorAll(".sad-item");
  let score = 0;

  items.forEach((item) => {
    if (item.checked) score++;
  });

  const resultContainer = document.getElementById("sad-result-container");
  const scoreEl = document.getElementById("sad-score");
  const labelEl = document.getElementById("sad-label");
  const recEl = document.getElementById("sad-recommendation");

  if (!resultContainer || !scoreEl || !labelEl || !recEl) return;

  resultContainer.style.display = "block";
  scoreEl.innerText = score;

  let label = "";
  let recommendation = "";
  let color = "";

  if (score >= 0 && score <= 2) {
    label = "Risiko Rendah";
    recommendation =
      "Pasien dapat dipulangkan dengan jadwal kontrol rutin. Pastikan ada keluarga yang mengawasi di rumah.";
    color = "#10b981"; // Success Green
  } else if (score >= 3 && score <= 4) {
    label = "Risiko Sedang";
    recommendation =
      "Lakukan pengawasan ketat secara berkala. Pertimbangkan untuk rawat inap jika dukungan keluarga kurang memadai.";
    color = "#f59e0b"; // Warning Orange
  } else if (score >= 5 && score <= 6) {
    label = "Risiko Tinggi";
    recommendation =
      "Sangat direkomendasikan untuk rawat inap (hospitalisasi). Lakukan observasi ketat setiap 15-30 menit.";
    color = "#f97316"; // Deep Orange
  } else {
    label = "Risiko Sangat Tinggi / Gawat Darurat";
    recommendation =
      "WAJIB RAWAT INAP (Hospitalize). Lakukan pengawasan 24 jam penuh (one-on-one observation). Amankan lingkungan dari benda berbahaya.";
    color = "#ef4444"; // Danger Red
  }

  labelEl.innerText = label;
  labelEl.style.color = color;
  scoreEl.style.color = color;

  // Scroll to results
  resultContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
};

window.resetSADPERSONS = function () {
  const items = document.querySelectorAll(".sad-item");
  items.forEach((item) => (item.checked = false));

  const resultContainer = document.getElementById("sad-result-container");
  if (resultContainer) resultContainer.style.display = "none";
};
