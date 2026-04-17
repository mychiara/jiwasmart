/**
 * Hamilton Anxiety Rating Scale (HARS) Logic
 */

document.addEventListener("DOMContentLoaded", () => {
  renderHARSItems();
});

function renderHARSItems() {
  const container = document.getElementById("hars-form-items");
  if (!container) return;

  const items = [
    {
      id: "h1",
      name: "Cemas",
      desc: "Khawatir, firasat buruk, takut akan pikiran sendiri, mudah tersinggung.",
    },
    {
      id: "h2",
      name: "Ketegangan",
      desc: "Merasa tegang, lesu, tak bisa istirahat tenang, mudah terkejut, mudah menangis, gemetar.",
    },
    {
      id: "h3",
      name: "Ketakutan",
      desc: "Ketakutan pada gelap, pada orang asing, ditinggal sendiri, binatang besar dll.",
    },
    {
      id: "h4",
      name: "Gangguan Tidur",
      desc: "Sukar memulai tidur, terbangun malam hari, tidur tidak nyenyak, mimpi buruk.",
    },
    {
      id: "h5",
      name: "Gangguan Kecerdasan",
      desc: "Sukar konsentrasi, daya ingat buruk.",
    },
    {
      id: "h6",
      name: "Perasaan Depresi",
      desc: "Hilangnya minat, berkurangnya kesenangan pada hobi, sedih, bangun dini hari.",
    },
    {
      id: "h7",
      name: "Gejala Somatik (Otot)",
      desc: "Sakit dan nyeri di otot-otot, kaku, kedutan otot, gigi gemertak, suara tidak stabil.",
    },
    {
      id: "h8",
      name: "Gejala Somatik (Sensorik)",
      desc: "Telinga berdengung, penglihatan kabur, muka merah atau pucat, merasa lemas.",
    },
    {
      id: "h9",
      name: "Gejala Kardiovaskular",
      desc: "Denyut nadi cepat, berdebar-debar, nyeri dada, denyut nadi tidak teratur.",
    },
    {
      id: "h10",
      name: "Gejala Pernapasan",
      desc: "Rasa tertekan atau sempit di dada, perasaan tercekik, sering menarik napas, napas pendek.",
    },
    {
      id: "h11",
      name: "Gejala Gastrointestinal",
      desc: "Sulit menelan, perut mual, muntah, perut kembung, gangguan pencernaan.",
    },
    {
      id: "h12",
      name: "Gejala Perkemihan",
      desc: "Sering buang air kecil, tidak dapat menahan kencing.",
    },
    {
      id: "h13",
      name: "Gejala Autonom",
      desc: "Mulut kering, muka merah, mudah berkeringat, pusing, sakit kepala telapak tangan berkeringat.",
    },
    {
      id: "h14",
      name: "Tingkah Laku (Sikap)",
      desc: "Gelisah, tidak tenang, jari gemetar, mengerutkan dahi, muka tegang, napas pendek dan cepat.",
    },
  ];

  container.innerHTML = items
    .map(
      (item) => `
    <div class="hars-item" style="margin-bottom: 1.5rem; padding: 1.2rem; background: var(--bg-light); border-radius: 12px; border: 1px solid var(--border);">
      <div style="font-weight: 700; margin-bottom: 0.5rem; color: var(--primary);">${item.id.toUpperCase()}. ${item.name}</div>
      <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">${item.desc}</p>
      <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.5rem;">
        ${[0, 1, 2, 3, 4]
          .map(
            (val) => `
          <label style="display: flex; flex-direction: column; align-items: center; cursor: pointer; padding: 0.5rem; border-radius: 8px; border: 1px solid var(--border); background: white; transition: 0.2s;" class="hars-radio-label">
            <input type="radio" name="${item.id}" value="${val}" ${val === 0 ? "checked" : ""} style="margin-bottom: 0.3rem;">
            <span style="font-size: 0.75rem;">${val}</span>
          </label>
        `,
          )
          .join("")}
      </div>
    </div>
  `,
    )
    .join("");
}

window.calculateHARS = function () {
  const radios = document.querySelectorAll(
    '#hars-form-items input[type="radio"]:checked',
  );
  let totalScore = 0;
  radios.forEach((radio) => (totalScore += parseInt(radio.value)));

  const resultContainer = document.getElementById("hars-result-container");
  const scoreEl = document.getElementById("hars-score");
  const labelEl = document.getElementById("hars-label");
  const recEl = document.getElementById("hars-recommendation");

  scoreEl.innerText = totalScore;

  let label = "";
  let rec = "";
  let color = "";

  if (totalScore < 14) {
    label = "Tidak Ada Kecemasan";
    rec =
      "Pasien dalam kondisi stabil secara emosional. Pertahankan koping yang adaptif.";
    color = "var(--success)";
  } else if (totalScore >= 14 && totalScore <= 20) {
    label = "Kecemasan Ringan";
    rec =
      "Pasien menunjukkan gejala cemas ringan. Latih teknik relaksasi napas dalam dan edukasi manajemen stres.";
    color = "#0ea5e9";
  } else if (totalScore >= 21 && totalScore <= 27) {
    label = "Kecemasan Sedang";
    rec =
      "Pasien merasa terganggu oleh kecemasan. Kolaborasi pemberian obat anti-ansietas jika perlu, dan lakukan terapi kognitif.";
    color = "#f59e0b";
  } else if (totalScore >= 28 && totalScore <= 41) {
    label = "Kecemasan Berat";
    rec =
      "Tingkat kecemasan tinggi. Pasien memerlukan pendampingan ketat, terapi psikofarmaka, dan lingkungan yang tenang.";
    color = "#f97316";
  } else {
    label = "Kecemasan Sangat Berat (Panik)";
    rec =
      "KONDISI KRITIS. Pasien mungkin mengalami serangan panik. Lakukan tindakan segera untuk menenangkan pasien dan cegah cedera.";
    color = "#ef4444";
  }

  labelEl.innerText = label;
  labelEl.style.color = color;
  scoreEl.style.color = color;
  recEl.innerText = rec;

  resultContainer.style.display = "block";
  resultContainer.scrollIntoView({ behavior: "smooth" });
};

window.resetHARS = function () {
  const defaultRadios = document.querySelectorAll(
    '#hars-form-items input[type="radio"][value="0"]',
  );
  defaultRadios.forEach((r) => (r.checked = true));
  document.getElementById("hars-result-container").style.display = "none";
};
