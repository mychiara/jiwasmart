/**
 * Clinical Screening Module for NurseJiwa
 * Supports SRQ-20, GAD-7, PHQ-9
 */

let currentClinInstr = null;
let clinQuestionIndex = 0;
let clinScore = 0;

function startClinicalScreening(id) {
  currentClinInstr = CLINICAL_INSTRUMENTS[id];
  clinQuestionIndex = 0;
  clinScore = 0;

  document.getElementById("clin-instr-title").innerText =
    currentClinInstr.title;
  document.getElementById("clin-screening-workflow").style.display = "block";
  document.getElementById("clin-result-display").style.display = "none";

  showClinQuestion();
}

function showClinQuestion() {
  const q = currentClinInstr.questions[clinQuestionIndex];
  document.getElementById("clin-progress-text").innerText =
    `${clinQuestionIndex + 1}/${currentClinInstr.questions.length}`;
  document.getElementById("clin-progress-bar").style.width =
    `${((clinQuestionIndex + 1) / currentClinInstr.questions.length) * 100}%`;
  document.getElementById("clin-question-box").innerText = q;

  const optionsContainer = document.getElementById("clin-options");
  optionsContainer.innerHTML = "";

  const opts = currentClinInstr.options || ["Tidak", "Ya"];
  opts.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline";
    btn.innerText = opt;
    btn.onclick = () => handleClinAnswer(idx);
    optionsContainer.appendChild(btn);
  });
}

function handleClinAnswer(val) {
  clinScore += val;
  clinQuestionIndex++;

  if (clinQuestionIndex < currentClinInstr.questions.length) {
    showClinQuestion();
  } else {
    finishClinScreening();
  }
}

function finishClinScreening() {
  document.getElementById("clin-screening-workflow").style.display = "none";
  document.getElementById("clin-result-display").style.display = "block";

  const result = currentClinInstr.interpretation(clinScore);
  document.getElementById("clin-final-score").innerText = clinScore;
  document.getElementById("clin-final-score").style.color = result.color;
  document.getElementById("clin-status-badge").innerText = result.status;
  document.getElementById("clin-status-badge").style.background = result.color;

  document.getElementById("clin-analysis-box").innerHTML = `
        <h4 style="margin-bottom: 0.5rem; color: ${result.color}">${result.msg}</h4>
        <p style="font-size: 0.85rem; line-height: 1.5; color: var(--text-muted);">
            Hasil skrining ini merupakan alat bantu deteksi awal. Validasi lebih lanjut diperlukan melalui wawancara klinis oleh perawat jiwa atau psikiater.
        </p>
    `;
}

function resetClinicalScreening() {
  document.getElementById("clin-screening-workflow").style.display = "none";
  document.getElementById("clin-result-display").style.display = "none";
}

function clinGenerateSBAR() {
  const status = document.getElementById("clin-status-badge").innerText;
  const score = document.getElementById("clin-final-score").innerText;

  // Get patient info from NurseJiwa state if available
  const patientName =
    document.getElementById("display-name")?.innerText || "Pasien X";

  const sbar = `
SITUATION: Pasien ${patientName} menunjukkan gejala ${status} pada pemeriksaan instrumen ${currentClinInstr.title}.
BACKGROUND: Dilakukan skrining digital mandiri. Skor total: ${score}.
ASSESSMENT: Hasil menunjukkan indikasi kondisi klinis yang memerlukan tindak lanjut.
RECOMMENDATION: Validasi hasil dengan wawancara klinis dan rencanakan asuhan keperawatan sesuai diagnosa yang relevan.
    `.trim();

  Swal.fire({
    title: "Laporan SBAR Klinis",
    html: `<pre style="text-align: left; padding: 1rem; background: #f1f5f9; border-radius: 8px; font-family: monospace; font-size: 0.8rem; white-space: pre-wrap;">${sbar}</pre>`,
    showCancelButton: true,
    confirmButtonText: "Salin Teks",
    confirmButtonColor: "#6366f1",
  }).then((res) => {
    if (res.isConfirmed) {
      navigator.clipboard.writeText(sbar);
      Swal.fire("Disalin!", "Teks laporan SBAR siap digunakan.", "success");
    }
  });
}

function bridgeToAskep() {
  const score = document.getElementById("clin-final-score").innerText;
  const status = document.getElementById("clin-status-badge").innerText;
  const instrument = currentClinInstr.title;

  // Persiapkan data klinis untuk ASKEP
  const clinicalNote = `Pasien menunjukkan skor ${score} (${status}) pada instrumen ${instrument}.`;

  // 1. Pindah View ke ASKEP
  if (typeof showView === "function") {
    showView("generator-askep");
  }

  // 2. Autofill Data Objektif (Mencari field yang umum di NurseJiwa)
  setTimeout(() => {
    const objField =
      document.getElementById("askep-objektif") ||
      document.querySelector('[name="data_objektif"]') ||
      document.querySelector('textarea[placeholder*="Objektif"]');

    if (objField) {
      objField.value = clinicalNote;
      objField.style.borderColor = "var(--accent)";

      Swal.fire({
        icon: "success",
        title: "Data Berhasil Dipindahkan",
        text: "Hasil skrining telah diisi otomatis ke dalam form ASKEP.",
        timer: 2000,
        showConfirmButton: false,
      });
    }

    // 3. Otomatis klik diagnosa jika memungkinkan
    let diagSearch = "";
    if (instrument.includes("GAD-7")) diagSearch = "Ansietas";
    if (instrument.includes("PHQ-9")) diagSearch = "Depresi";

    const diagSelect =
      document.getElementById("askep-diagnosa") ||
      document.querySelector('select[name="diagnosa"]');
    if (diagSelect && diagSearch) {
      Array.from(diagSelect.options).forEach((opt) => {
        if (opt.text.toLowerCase().includes(diagSearch.toLowerCase())) {
          diagSelect.value = opt.value;
          diagSelect.dispatchEvent(new Event("change"));
        }
      });
    }
  }, 500);
}
