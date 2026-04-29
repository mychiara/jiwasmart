/**
 * ASKEP JIWA SMART - Generator ASKEP
 */

window.initASKEPGenerator = function () {
  let currentAnalysis = null;

  window.autofillASKEP = function () {
    // 1. Autofill Identitas Mahasiswa/Perawat dari LP
    const lpNama = document.getElementById("lp-mhs-nama")?.value;
    const lpNim = document.getElementById("lp-mhs-nim")?.value;
    const lpKampus = document.getElementById("lp-mhs-kampus")?.value;

    if (lpNama) document.getElementById("askep-mhs-nama").value = lpNama;
    if (lpNim) document.getElementById("askep-mhs-nim").value = lpNim;
    if (lpKampus)
      document.getElementById("askep-mhs-institusi").value = lpKampus;

    // 2. Autofill Identitas Pasien dari Pengkajian
    const asNama = document.getElementById("as-nama")?.value;
    const asNorm = document.getElementById("as-norm")?.value;
    const asUmur = document.getElementById("as-umur")?.value;
    const asJk = document.getElementById("as-jk")?.value;
    const asMedis = document.getElementById("as-medis")?.value;

    if (asNama) document.getElementById("px-nama").value = asNama;
    if (asNorm) document.getElementById("px-norm").value = asNorm;
    if (asUmur) document.getElementById("px-umur").value = asUmur;
    if (asJk) document.getElementById("px-jk").value = asJk;
    if (asMedis) document.getElementById("px-medis").value = asMedis;
  };

  // Symptoms List Initial Render
  const symptomsList = document.getElementById("symptoms-list");
  if (symptomsList) {
    symptomsList.style.display = "block";
    symptomsList.innerHTML = "";
    const categories = [...new Set(DATASET.gejala.map((g) => g.tipe))];
    categories.forEach((cat) => {
      const catGroup = document.createElement("div");
      catGroup.style.marginBottom = "1.5rem";
      catGroup.innerHTML = `<h4 style="margin-bottom:0.75rem; color:var(--primary); font-size:0.9rem; border-bottom:1px solid #e2e8f0; padding-bottom:4px;">${cat}</h4>`;
      const grid = document.createElement("div");
      grid.style.display = "grid";
      grid.style.gridTemplateColumns = "repeat(auto-fill, minmax(280px, 1fr))";
      grid.style.gap = "0.5rem";
      DATASET.gejala
        .filter((g) => g.tipe === cat)
        .forEach((gjt) => {
          const item = document.createElement("label");
          item.className = "checkbox-item";
          item.style.padding = "0.5rem";
          item.innerHTML = `
                    <input type="checkbox" name="symptoms" value="${gjt.diagnosa}" data-teks="${gjt.teks}">
                    <span style="font-size:0.85rem;">${gjt.teks}</span>
                `;
          grid.appendChild(item);
        });
      catGroup.appendChild(grid);
      symptomsList.appendChild(catGroup);
    });
  }

  // Phase 1: Analyze
  document.getElementById("analyze-dx-btn").addEventListener("click", () => {
    const selectedCheckboxes = document.querySelectorAll(
      'input[name="symptoms"]:checked',
    );
    if (selectedCheckboxes.length === 0) {
      Swal.fire(
        "Peringatan",
        "Silakan pilih gejala yang ditemukan pada pasien!",
        "warning",
      );
      return;
    }

    showLoader();

    // Sistem Bobot Berdasarkan Urgensi Klinis
    const weights = {
      "D.0135": 5.0, // Risiko Bunuh Diri
      "D.0146": 4.5, // Risiko Perilaku Kekerasan
      "D.0105": 3.5, // Waham
      "D.0085": 3.5, // Halusinasi
      "D.0121": 2.5, // Isolasi Sosial
      "D.0087": 2.0, // HDR Kronik
      "D.0109": 1.5, // DPD
      "D.0080": 1.2, // Ansietas
      "D.0123": 0.5, // Sehat
    };

    const diagnosaScores = {};
    selectedCheckboxes.forEach((cb) => {
      const dKode = cb.value;
      const weight = weights[dKode] || 1.0;
      diagnosaScores[dKode] = (diagnosaScores[dKode] || 0) + weight;
    });

    // Ambil semua diagnosa yang skornya > 0, urutkan dari yang tertinggi
    const detectedDiagnoses = Object.entries(diagnosaScores)
      .sort(([, a], [, b]) => b - a)
      .map(([kode, score]) => {
        const data = (
          EXTERNAL_SDKI.length > 0 ? EXTERNAL_SDKI : DATASET.sdki
        ).find((s) => (s.Kode || s.kode) === kode);
        return { kode, score, data };
      })
      .filter((item) => item.data);

    setTimeout(() => {
      hideLoader();
      const inputsSection = document.getElementById("askep-clinical-inputs");
      inputsSection.style.display = "block";
      document.getElementById("generate-askep-btn").style.display =
        "inline-flex";
      document.getElementById("analyze-dx-btn").style.display = "none";

      // Tambahkan area pemilihan diagnosa ke UI
      const dxContainer = document.createElement("div");
      dxContainer.id = "selected-dx-list";
      dxContainer.className = "report-section";
      dxContainer.innerHTML = `
          <h4 style="margin-bottom:0.5rem; color:var(--primary);"><i data-lucide="check-square"></i> Pilih Diagnosa untuk ASKEP:</h4>
          <p style="font-size:0.75rem; color:#666; margin-bottom:1rem;">(Sistem mendeteksi diagnosa berikut berdasarkan gejala, Anda bisa memilih lebih dari satu)</p>
          <div id="dx-selection-grid" style="display:grid; gap:0.5rem;"></div>
      `;

      inputsSection.insertBefore(dxContainer, inputsSection.firstChild);

      const dxGrid = document.getElementById("dx-selection-grid");
      detectedDiagnoses.forEach((item, idx) => {
        const div = document.createElement("div");
        div.className = "checkbox-item";
        // Pre-check hanya jika itu skor tertinggi atau skornya signifikan (misal > 3)
        const isChecked = idx === 0 || item.score > 3;
        div.innerHTML = `
              <input type="checkbox" name="selected-sdki" id="dx-${item.kode}" value="${item.kode}" ${isChecked ? "checked" : ""} data-nama="${item.data.Nama || item.data.nama}">
              <label for="dx-${item.kode}"><b>${item.kode}</b>: ${item.data.Nama || item.data.nama} (Skor: ${item.score.toFixed(1)})</label>
          `;
        dxGrid.appendChild(div);
      });

      // Fungsi untuk mengupdate SIKI berdasarkan semua diagnosa terpilih
      const updateSikiOptions = () => {
        const selectedDks = Array.from(
          document.querySelectorAll('input[name="selected-sdki"]:checked'),
        ).map((cb) => cb.value);
        const sikiContainer = document.getElementById("siki-checkboxes");
        sikiContainer.innerHTML = "";

        if (selectedDks.length === 0) {
          sikiContainer.innerHTML =
            "<p style='color:red;'>Pilih minimal satu diagnosa di atas!</p>";
          return;
        }

        selectedDks.forEach((kode) => {
          let siki = EXTERNAL_SIKI.find((s) =>
            (s["Tautan Diagnosa"] || "").includes(kode),
          );
          if (!siki && DATASET.siki)
            siki = DATASET.siki.find((s) => s.id === kode) || DATASET.siki[0];

          if (siki) {
            const header = document.createElement("div");
            header.innerHTML = `<p style="font-weight:700; margin-top:1rem; border-left:3px solid var(--secondary); padding-left:8px; color:var(--secondary);">Intervensi untuk ${kode}:</p>`;
            sikiContainer.appendChild(header);

            ["Observasi", "Terapeutik", "Edukasi", "Kolaborasi"].forEach(
              (cat) => {
                const raw =
                  siki[cat] ||
                  (siki.tindakan ? siki.tindakan[cat.toLowerCase()] : "");
                if (raw && raw !== "-") {
                  raw.split(";").forEach((act, i) => {
                    if (act.trim()) {
                      const div = document.createElement("div");
                      div.className = "checkbox-item";
                      div.innerHTML = `<input type="checkbox" name="siki-choice" id="siki-${kode}-${cat}-${i}" value="[${kode}] ${cat}: ${act.trim()}" checked><label for="siki-${kode}-${cat}-${i}">[${cat}] ${act.trim()}</label>`;
                      sikiContainer.appendChild(div);
                    }
                  });
                }
              },
            );
          }
        });
        currentAnalysis = { selectedDKodes: selectedDks, selectedCheckboxes };
        if (window.lucide) lucide.createIcons();
      };

      // Listen perubahan pilihan diagnosa
      document.querySelectorAll('input[name="selected-sdki"]').forEach((cb) => {
        cb.addEventListener("change", updateSikiOptions);
      });

      updateSikiOptions();

      Swal.fire({
        title: "Analisis Multiselect",
        text: `Ditemukan ${detectedDiagnoses.length} kemungkinan diagnosa. Silakan pilih hasil yang akan dicetak.`,
        icon: "success",
        timer: 2000,
      });
      if (window.lucide) lucide.createIcons();
    }, 1000);
  });

  // Phase 2: Generate
  document
    .getElementById("generate-askep-btn")
    .addEventListener("click", () => {
      if (!currentAnalysis || !currentAnalysis.selectedDKodes) return;
      const { selectedDKodes, selectedCheckboxes } = currentAnalysis;

      const rawNama =
        escapeHTML(document.getElementById("px-nama").value) || "Tanpa Nama";
      const nama = maskName(rawNama);
      const umur = escapeHTML(document.getElementById("px-umur").value) || "-";
      const jk = escapeHTML(document.getElementById("px-jk").value);
      const medis =
        escapeHTML(document.getElementById("px-medis").value) || "-";

      const soap = {
        s: escapeHTML(document.getElementById("soap-s").value) || "......",
        o: escapeHTML(document.getElementById("soap-o").value) || "......",
        a: escapeHTML(document.getElementById("soap-a").value) || "......",
        p: escapeHTML(document.getElementById("soap-p").value) || "......",
      };

      const selectedSiki = Array.from(
        document.querySelectorAll('input[name="siki-choice"]:checked'),
      ).map((cb) => escapeHTML(cb.value));

      const askepMhsNama = escapeHTML(
        document.getElementById("askep-mhs-nama").value,
      );
      const askepMhsNim = escapeHTML(
        document.getElementById("askep-mhs-nim").value,
      );
      const askepMhsInstitusi = escapeHTML(
        document.getElementById("askep-mhs-institusi").value,
      );

      if (!askepMhsNama || !askepMhsNim || !askepMhsInstitusi) {
        Swal.fire(
          "Peringatan",
          "Silakan isi data mahasiswa/perawat terlebih dahulu!",
          "warning",
        );
        return;
      }

      showLoader();
      setTimeout(() => {
        const resultDiv = document.getElementById("askep-result");

        // Data TTV
        const ttv = {
          td: document.getElementById("px-td").value || "-",
          nadi: document.getElementById("px-nadi").value || "-",
          rr: document.getElementById("px-rr").value || "-",
          suhu: document.getElementById("px-suhu").value || "-",
          spo2: document.getElementById("px-spo2").value || "-",
          gcs: document.getElementById("px-gcs").value || "15 (E4V5M6)",
        };

        // CLINICAL KNOWLEDGE ENGINE (Narasi Akademik - Terhubung Langsung ke Laporan Pendahuluan / DATASET.lp)
        const getClinicalNarrative = (kode) => {
          if (DATASET && DATASET.lp) {
            const lpData = DATASET.lp.find(
              (l) => String(l.sdki).includes(kode) || String(l.kode) === kode,
            );
            if (lpData) {
              return {
                definisi: lpData.definisi || "-",
                etiologi: lpData.etiologi || lpData.etiology || "-",
                gejala: lpData.manifestasi_klinis || lpData.tanda_gejala || "-",
                patofisiologi: lpData.patofisiologi || lpData.pathway || "-",
                medis:
                  (lpData.pemeriksaan_penunjang
                    ? lpData.pemeriksaan_penunjang + "<br><br>"
                    : "") + (lpData.penatalaksanaan_medis || ""),
                discharge: lpData.discharge_planning || "-",
              };
            }
          }

          return {
            definisi:
              "Kondisi patologis sistemik yang dikategorikan dalam gangguan fisiologis/psikologis berat. Memerlukan pendekatan asuhan keperawatan yang presisi dan berkelanjutan sesuai standar dokumentasi klinis nasional.",
            etiologi:
              "Bersifat multifaktoral, mencakup disfungsi seluler primer, pengaruh pajanan lingkungan kronis, hingga faktor predisposisi genetik yang memperburuk ambang batas fungsional organ.",
            gejala:
              "Ditunjukkan dengan adanya penyimpangan signifikan pada tanda-tanda vital serta kemunculan kluster keluhan subjektif yang konsisten dengan terminologi klinis gangguan sistem tersebut.",
            patofisiologi:
              "Gangguan pada level mikrosirkulasi atau jaringan yang memicu kegagalan organ dalam menjalankan peran homeostatik akibat kerusakan struktural atau gangguan biokimiawi pada tingkat seluler.",
            medis:
              "Pemeriksaan Fisik triase terstruktur, uji laboratorium rutin, dan penatalaksanaan farmakologis integratif sesuai standar emas observasi medis.",
            discharge:
              "Edukasi pasca-rawat dititikberatkan pada kemandirian perawatan di rumah, kepatuhan jadwal obat, asupan nutrisi seimbang, dan instruksi segera ke Unit Gawat Darurat jika terjadi penurunan kondisi mendadak.",
          };
        };

        const firstDx = selectedDKodes[0];
        const clinic = getClinicalNarrative(firstDx);

        let finalHtml = `
            <div id="print-area" class="font-['Inter'] p-5 bg-white text-slate-800">
                <style>
                    /* Fallback basic styles if Tailwind isn't fully loaded */
                    .font-black { font-weight: 900; }
                    .tracking-widest { letter-spacing: 0.1em; }
                    .shadow-md { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
                    .border-slate-300 { border-color: #cbd5e1; }
                </style>
                <div class="text-center mb-8 pb-4 border-b-2 border-slate-800">
                    <h2 class="text-2xl font-bold uppercase tracking-wider text-slate-800">Dokumentasi Asuhan Keperawatan</h2>
                    <p class="text-sm text-slate-500 font-medium mt-1">Departemen: Keperawatan Jiwa | Tanggal Pengkajian: ${new Date().toLocaleDateString("id-ID")}</p>
                </div>
                
                <!-- TAHAP 1: PENGKAJIAN -->
                <div class="mb-8">
                    <div class="bg-blue-800 text-white font-bold px-4 py-2 mb-4 uppercase inline-block font-black text-sm rounded shadow-sm">1. Pengkajian Keperawatan</div>
                    
                    <h4 class="font-bold text-slate-800 border-b-2 border-slate-200 pb-1 mb-3 mt-4 text-sm uppercase tracking-wide">A. Identitas Pasien</h4>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 text-sm text-slate-700 mb-6 bg-slate-50 p-4 rounded border border-slate-200">
                        <div><span class="font-semibold text-slate-500 text-[11px] uppercase block">Nama Pasien:</span> <span class="capitalize font-bold text-slate-800">${nama}</span></div>
                        <div><span class="font-semibold text-slate-500 text-[11px] uppercase block">Usia:</span> <span class="font-bold text-slate-800">${umur}</span></div>
                        <div><span class="font-semibold text-slate-500 text-[11px] uppercase block">No. Rekam Medis:</span> <span class="font-bold text-slate-800">${escapeHTML(document.getElementById("px-norm").value) || "-"}</span></div>
                        <div class="col-span-2 md:col-span-3 mt-2 pt-3 border-t border-slate-200 flex flex-wrap gap-x-6 gap-y-2">
                            <div class="bg-blue-50 px-2 py-1 rounded text-blue-800 font-bold border border-blue-100"><span class="text-blue-500 text-[10px] uppercase font-semibold">TD:</span> ${ttv.td} mmHg</div>
                            <div class="bg-blue-50 px-2 py-1 rounded text-blue-800 font-bold border border-blue-100"><span class="text-blue-500 text-[10px] uppercase font-semibold">Nadi:</span> ${ttv.nadi} x/m</div>
                            <div class="bg-blue-50 px-2 py-1 rounded text-blue-800 font-bold border border-blue-100"><span class="text-blue-500 text-[10px] uppercase font-semibold">RR:</span> ${ttv.rr} x/m</div>
                            <div class="bg-blue-50 px-2 py-1 rounded text-blue-800 font-bold border border-blue-100"><span class="text-blue-500 text-[10px] uppercase font-semibold">Suhu:</span> ${ttv.suhu} °C</div>
                            <div class="bg-blue-50 px-2 py-1 rounded text-blue-800 font-bold border border-blue-100"><span class="text-blue-500 text-[10px] uppercase font-semibold">SpO2:</span> ${ttv.spo2} %</div>
                            <div class="bg-blue-50 px-2 py-1 rounded text-blue-800 font-bold border border-blue-100"><span class="text-blue-500 text-[10px] uppercase font-semibold">GCS:</span> ${ttv.gcs}</div>
                        </div>
                    </div>

                    <h4 class="font-bold text-slate-800 border-b-2 border-slate-200 pb-1 mb-3 text-sm uppercase tracking-wide">B. Kondisi Klinis & Patologis</h4>
                    <div class="space-y-4 mb-6">
                        <div class="bg-slate-50 p-4 rounded-lg border border-slate-200 shadow-sm border-l-4 border-l-blue-500">
                            <h5 class="font-black text-blue-800 text-xs mb-1 uppercase tracking-wider">1. Definisi Klinis</h5>
                            <div class="text-xs text-slate-700 leading-relaxed font-medium">${clinic.definisi || "-"}</div>
                        </div>
                        <div class="bg-slate-50 p-4 rounded-lg border border-slate-200 shadow-sm border-l-4 border-l-indigo-500">
                            <h5 class="font-black text-indigo-800 text-xs mb-1 uppercase tracking-wider">2. Faktor Risiko & Etiologi</h5>
                            <div class="text-xs text-slate-700 leading-relaxed font-medium">${clinic.etiologi || "-"}</div>
                        </div>
                        <div class="bg-slate-50 p-4 rounded-lg border border-slate-200 shadow-sm border-l-4 border-l-amber-500">
                            <h5 class="font-black text-amber-800 text-xs mb-1 uppercase tracking-wider">3. Manifestasi Klinis / Gejala</h5>
                            <div class="text-xs text-slate-700 leading-relaxed font-medium">${clinic.gejala || "-"}</div>
                        </div>
                    </div>

                    <h4 class="font-bold text-slate-800 border-b-2 border-slate-200 pb-1 mb-3 text-sm uppercase tracking-wide">C. Patofisiologi Dasar</h4>
                    <div class="text-xs text-slate-700 mb-6 bg-slate-50 p-4 rounded-lg border border-slate-200 leading-relaxed shadow-inner">
                        ${clinic.patofisiologi || "-"}
                    </div>

                    <h4 class="font-bold text-slate-800 border-b-2 border-slate-200 pb-1 mb-3 text-sm uppercase tracking-wide">D. Manajemen Medis Terkait</h4>
                    <div class="space-y-4 mb-8">
                        <div class="bg-emerald-50 border-l-4 border-emerald-500 p-4 text-xs text-slate-700 rounded shadow-sm">
                            <p class="font-black text-emerald-900 mb-1 uppercase tracking-wider text-[10px]">Pemeriksaan Fisik & Penatalaksanaan:</p>
                            <div class="font-medium">${clinic.medis || "-"}</div>
                        </div>
                        <div class="bg-rose-50 border-l-4 border-rose-500 p-4 text-xs text-slate-700 rounded shadow-sm">
                            <p class="font-black text-rose-900 mb-1 uppercase tracking-wider text-[10px]">Discharge Planning (Rencana Pulang):</p>
                            <div class="font-medium">${clinic.discharge || "-"}</div>
                        </div>
                    </div>
                </div>
        `;

        const allSdkiNames = [];
        selectedDKodes.forEach((kode, index) => {
          const sdki = (
            EXTERNAL_SDKI.length > 0 ? EXTERNAL_SDKI : DATASET.sdki
          ).find((s) => (s.Kode || s.kode) === kode);
          let slki = EXTERNAL_SLKI.find((s) =>
            (s["Tautan Diagnosa"] || "").includes(kode),
          );
          if (!slki && DATASET.slki)
            slki = DATASET.slki.find((s) => s.id === kode) || DATASET.slki[0];

          if (sdki) allSdkiNames.push(sdki.Nama || sdki.nama);

          const isSubjective = (t) => {
            const text = t.toLowerCase();
            return (
              text.includes("merasa") ||
              text.includes("mengaku") ||
              text.includes("mengatakan") ||
              text.includes("mendengar") ||
              text.includes("melihat") ||
              text.includes("ingin") ||
              text.includes("pikiran") ||
              text.includes("keluhan")
            );
          };
          const dsList = [];
          const doList = [];
          Array.from(selectedCheckboxes).forEach((cb) => {
            const teks = cb.dataset.teks;
            if (teks && isSubjective(teks)) {
              dsList.push("<li>" + teks + "</li>");
            } else if (teks) {
              doList.push("<li>" + teks + "</li>");
            }
          });

          // TAHAP 2: DIAGNOSA SDKI
          finalHtml += `
                <div class="mb-12 border-2 border-slate-800 rounded-xl overflow-hidden shadow-xl bg-white mt-8">
                    <div class="bg-slate-800 text-white p-5 border-b-4 border-blue-500">
                        <div class="flex justify-between items-start mb-3">
                            <div>
                                <div class="uppercase text-[10px] font-black text-blue-300 tracking-[0.2em] mb-1">Diagnosa Keperawatan ${index + 1}</div>
                                <h3 class="text-xl font-black leading-tight">[${kode}] ${sdki ? sdki.Nama || sdki.nama : "Diagnosa"}</h3>
                            </div>
                            <div class="bg-blue-600 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider shadow-sm">SDKI Standar PPNI</div>
                        </div>
                        
                        <div class="bg-slate-900/80 p-4 rounded-lg border border-slate-700 shadow-inner">
                            <div class="mb-4">
                                <h5 class="text-xs font-black text-blue-400 uppercase mb-2">Analisa Data (DS & DO)</h5>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div class="bg-white/10 p-3 rounded border border-white/20 shadow">
                                        <span class="text-[10px] font-black text-amber-400 block mb-1 uppercase tracking-widest">Data Subjektif (DS)</span>
                                        <ul class="list-disc pl-4 text-xs text-slate-200 space-y-1 font-medium">
                                            ${dsList.join("")}
                                            ${soap.s !== "......" ? "<li>" + soap.s + "</li>" : dsList.length === 0 ? "<li class='italic opacity-50 text-[10px]'>Data subjektif tidak tersedia</li>" : ""}
                                        </ul>
                                    </div>
                                    <div class="bg-white/10 p-3 rounded border border-white/20 shadow">
                                        <span class="text-[10px] font-black text-emerald-400 block mb-1 uppercase tracking-widest">Data Objektif (DO)</span>
                                        <ul class="list-disc pl-4 text-xs text-slate-200 space-y-1 font-medium">
                                            ${doList.join("")}
                                            ${soap.o !== "......" ? "<li>" + soap.o + "</li>" : doList.length === 0 ? "<li class='italic opacity-50 text-[10px]'>Data objektif tidak tersedia</li>" : ""}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <p class="text-xs text-slate-300 leading-relaxed font-medium"><span class="font-bold text-blue-300 uppercase">Definisi SDKI:</span> ${sdki ? sdki.Definisi || sdki.definisi : "-"}</p>
                        </div>
                    </div>

                    <!-- TAHAP 3: PERENCANAAN -->
                    <div class="bg-slate-100 px-4 py-3 border-b border-slate-300 font-bold uppercase text-xs text-slate-700 tracking-widest flex justify-between items-center shadow-inner">
                        <span class="flex items-center"><svg class="w-4 h-4 mr-2 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg> Perencanaan Keperawatan</span>
                        <span class="text-[10px] bg-slate-200 text-slate-600 px-2 py-1 rounded">Intervensi Berbasis 3S PPNI</span>
                    </div>
                    <div class="p-5 grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white text-sm">
                        
                        <!-- SLKI -->
                        <div class="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm">
                            <h4 class="font-black text-slate-800 mb-4 border-b-2 border-blue-600 pb-2 flex items-center justify-between">
                                <span class="flex items-center text-sm uppercase tracking-wide">
                                    <span class="bg-blue-800 text-white w-6 h-6 rounded inline-flex items-center justify-center text-[10px] mr-2 shadow-sm font-bold">SLKI</span>
                                    Kriteria Hasil
                                </span>
                                <span class="text-[9px] text-blue-700 bg-blue-100 px-2 py-1 rounded-full border border-blue-200 font-bold uppercase">Target 3x24 Jam</span>
                            </h4>
                            <p class="mb-4 italic text-slate-600 font-medium text-xs bg-white p-3 rounded border border-slate-200 shadow-sm leading-relaxed">
                                Setelah dilakukan asuhan keperawatan selama 3 x 24 jam, diharapkan masalah ${sdki ? sdki.Nama || sdki.nama : ""} dapat teratasi sepenuhnya.
                            </p>
                            <div class="bg-white border-l-4 border-blue-500 rounded border border-slate-200 shadow-sm p-4">
                                <h5 class="font-black text-blue-900 text-xs mb-3 uppercase flex justify-between items-center group bg-blue-50 p-2 rounded">
                                    <span>[${slki ? slki.Kode || slki.id : "L.000"}] ${slki ? slki.Nama || slki.nama : "Kesehatan Jiwa"}</span>
                                </h5>
                                <div class="space-y-2">
                                    ${
                                      slki && slki["Kriteria Hasil"]
                                        ? slki["Kriteria Hasil"]
                                            .split(";")
                                            .map(
                                              (k) => `
                                        <div class="flex justify-between items-center text-[11px] border-b border-slate-100 pb-2 mb-1">
                                            <span class="text-slate-700 font-medium">${k.trim()}</span>
                                            <div class="flex gap-1 ml-4 shrink-0">
                                                <span class="w-7 h-5 bg-slate-100 rounded text-[9px] flex items-center justify-center font-bold text-slate-500 border border-slate-200">A:2</span>
                                                <svg class="w-3 h-3 text-slate-300 my-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                                                <span class="w-7 h-5 bg-blue-600 rounded text-[9px] flex items-center justify-center font-bold text-white shadow-sm ring-1 ring-blue-700">T:5</span>
                                            </div>
                                        </div>
                                    `,
                                            )
                                            .join("")
                                        : '<div class="text-xs text-slate-500 italic">Standar kriteria hasil diterapkan.</div>'
                                    }
                                </div>
                            </div>
                        </div>

                        <!-- SIKI -->
                        <div class="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm">
                            <h4 class="font-black text-slate-800 mb-4 border-b-2 border-emerald-600 pb-2 flex items-center text-sm uppercase tracking-wide">
                                <span class="bg-emerald-800 text-white w-6 h-6 rounded inline-flex items-center justify-center text-[10px] mr-2 shadow-sm font-bold">SIKI</span>
                                Intervensi Prioritas
                            </h4>
                            <div class="bg-white border-l-4 border-emerald-500 border border-slate-200 rounded shadow-sm p-4">
                                <h5 class="font-black text-emerald-900 text-xs mb-3 uppercase bg-emerald-50 p-2 rounded">[I.00000] Manajemen Terpadu</h5>
                                <div class="space-y-4">
                                    ${(() => {
                                      const sikiCategorized = {
                                        Observasi: [],
                                        Terapeutik: [],
                                        Edukasi: [],
                                        Kolaborasi: [],
                                      };
                                      selectedSiki.forEach((val) => {
                                        const parts = val.split(": ");
                                        const catMatch = parts[0].match(
                                          /]\s*(Observasi|Terapeutik|Edukasi|Kolaborasi)/i,
                                        );
                                        const cat = catMatch
                                          ? catMatch[1]
                                          : "Terapeutik";
                                        sikiCategorized[cat].push(
                                          parts[1] || val,
                                        );
                                      });
                                      const colors = {
                                        Observasi: "blue",
                                        Terapeutik: "emerald",
                                        Edukasi: "amber",
                                        Kolaborasi: "rose",
                                      };
                                      return Object.entries(sikiCategorized)
                                        .map(([cat, acts]) =>
                                          acts.length > 0
                                            ? `
                                            <div class="space-y-1.5">
                                                <span class="text-[10px] font-black text-${colors[cat]}-700 uppercase tracking-widest block border-b border-${colors[cat]}-100 pb-1">${cat}</span>
                                                <ul class="list-disc pl-4 space-y-1 text-slate-700 font-medium text-[11px]">
                                                    ${acts.map((a) => "<li>" + a + "</li>").join("")}
                                                </ul>
                                            </div>
                                        `
                                            : "",
                                        )
                                        .join("");
                                    })()}
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- TAHAP 4: IMPLEMENTASI -->
                    <div class="bg-slate-100 px-5 py-3 border-t border-b border-slate-300 font-bold uppercase text-[11px] text-slate-700 tracking-widest shadow-inner">Tahap Implementasi Keperawatan</div>
                    <div class="overflow-x-auto bg-white p-5">
                        <table class="w-full border-collapse border border-slate-300 text-xs shadow-sm rounded-lg overflow-hidden">
                            <thead class="bg-slate-800 text-white">
                                <tr>
                                    <th class="border border-slate-600 p-3 w-28 text-[10px] uppercase font-bold tracking-wider">Waktu (WIB)</th>
                                    <th class="border border-slate-600 p-3 text-[10px] uppercase font-bold tracking-wider text-left">Implementasi Tindakan & Respon Klinis</th>
                                    <th class="border border-slate-600 p-3 w-36 text-[10px] uppercase font-bold tracking-wider">Nama & Paraf</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="hover:bg-slate-50 transition-colors group">
                                    <td class="border border-slate-200 p-3 text-center font-black text-blue-700 font-mono text-[11px]">08.45 WIB</td>
                                    <td class="border border-slate-200 p-4">
                                        <div class="font-bold mb-2 text-slate-800 text-[11px]"><span class="text-blue-600 font-mono bg-blue-50 px-1 py-0.5 rounded mr-1 border border-blue-100">[SIKI-01]</span> Melaksanakan seluruh intervensi prioritas sesuai SOP.</div>
                                        <div class="text-[11px] border-l-4 border-emerald-400 pl-3 mt-2 bg-emerald-50/50 p-2.5 rounded font-medium text-slate-700">
                                            <span class="font-black text-emerald-700 uppercase tracking-tight mr-1 text-[9px] bg-emerald-100 px-1.5 py-0.5 rounded">Evaluasi Respon:</span> Pasien kooperatif, TTV stabil. Data objektif sesuai dengan rencana observasi.
                                        </div>
                                    </td>
                                    <td class="border border-slate-200 p-4 text-center align-bottom border-dashed bg-slate-50/50">
                                        <div class="h-12 border-b-2 border-slate-300 mb-2 border-dashed mx-4"></div>
                                        <div class="text-[9px] text-slate-500 font-black uppercase tracking-widest">${askepMhsNama || "Perawat Penanggung Jawab"}</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- TAHAP 5: EVALUASI SOAP -->
                    <div class="bg-slate-100 px-5 py-3 border-t border-b border-slate-300 font-bold uppercase text-[11px] text-slate-700 tracking-widest shadow-inner">Evaluasi Keperawatan (CPPT / SOAP)</div>
                    <div class="p-6 bg-amber-50/30">
                        <table class="w-full text-sm font-medium text-slate-800 border-separate border-spacing-y-4">
                            <tr>
                                <td class="w-14 h-14 align-middle bg-amber-600 text-white text-center font-black text-2xl rounded-l-xl shadow-lg border-r border-amber-700/50">S</td>
                                <td class="p-4 align-top bg-white border border-amber-200 rounded-r-xl shadow-md"><span class="text-amber-700 font-black uppercase text-[10px] block mb-1.5 tracking-wider">Data Subjektif Akhir:</span> ${soap.s}</td>
                            </tr>
                            <tr>
                                <td class="w-14 h-14 align-middle bg-amber-500 text-white text-center font-black text-2xl rounded-l-xl shadow-lg border-r border-amber-600/50">O</td>
                                <td class="p-4 align-top bg-white border border-amber-200 rounded-r-xl shadow-md"><span class="text-amber-600 font-black uppercase text-[10px] block mb-1.5 tracking-wider">Data Objektif Akhir:</span> Kondisi klinis stabil. TD: ${ttv.td}, N: ${ttv.nadi}. Gejala teratasi sebagian.</td>
                            </tr>
                            <tr>
                                <td class="w-14 h-14 align-middle bg-amber-700 text-white text-center font-black text-2xl rounded-l-xl shadow-lg border-r border-amber-800/50">A</td>
                                <td class="p-4 align-top bg-white border border-amber-200 rounded-r-xl shadow-md"><span class="text-amber-800 font-black uppercase text-[10px] block mb-1.5 tracking-wider">Assesmen Masalah:</span> ${soap.a || "Analisis Klinis menunjukkan progresivitas positif (Teratasi Sebagian)."}</td>
                            </tr>
                            <tr>
                                <td class="w-14 h-14 align-middle bg-slate-800 text-white text-center font-black text-2xl rounded-l-xl shadow-lg">P</td>
                                <td class="p-4 align-top bg-white border border-slate-300 rounded-r-xl shadow-md"><span class="text-slate-900 font-black uppercase text-[10px] block mb-1.5 tracking-wider">Planning Lanjutan:</span> ${soap.p || "Lanjutkan seluruh rencana intervensi prioritas. Pertahankan kondisi stabil."}</td>
                            </tr>
                        </table>
                    </div>
                    
                    <!-- TAHAP 6: ISBAR HANDOVER -->
                    <div class="bg-slate-800 text-white px-5 py-3 border-t border-slate-900 font-bold uppercase text-[11px] tracking-widest mt-8 flex justify-between items-center">
                        <span>Laporan Timbang Terima (ISBAR Handover)</span>
                        <i data-lucide="share-2" class="w-3 h-3"></i>
                    </div>
                    <div class="p-6 bg-slate-50 border-b border-x border-slate-300 rounded-b-xl shadow-sm mb-4">
                        <table class="w-full text-sm font-medium text-slate-800 border-collapse bg-white shadow-sm border border-slate-200">
                            <tbody>
                                <tr class="border-b border-slate-200">
                                    <td class="w-10 text-center bg-indigo-600 text-white font-black text-lg border-r border-slate-200">I</td>
                                    <td class="p-3 text-[12px]"><span class="font-bold text-indigo-800 uppercase tracking-wider text-[10px] block mb-1">Introduction (Pengenalan)</span>
                                        <strong>Pasien:</strong> ${askepPxNama} (${askepPxUmur} Tahun). <strong>Perawat:</strong> ${askepMhsNama || "Perawat Jaga"}. Ruangan: ${document.getElementById("px-ruangan").value || "-"} 
                                    </td>
                                </tr>
                                <tr class="border-b border-slate-200">
                                    <td class="w-10 text-center bg-blue-600 text-white font-black text-lg border-r border-slate-200">S</td>
                                    <td class="p-3 text-[12px]"><span class="font-bold text-blue-800 uppercase tracking-wider text-[10px] block mb-1">Situation (Situasi Saat Ini)</span>
                                        <strong>Diagnosa Keperawatan Utama:</strong> ${allSdkiNames[0] || "-"}.<br><strong>Masalah Klinis:</strong> ${soap.s}.
                                    </td>
                                </tr>
                                <tr class="border-b border-slate-200">
                                    <td class="w-10 text-center bg-teal-600 text-white font-black text-lg border-r border-slate-200">B</td>
                                    <td class="p-3 text-[12px]"><span class="font-bold text-teal-800 uppercase tracking-wider text-[10px] block mb-1">Background (Latar Belakang Klinis)</span>
                                        Vital Sign terakhir menunjukan TD: <strong>${ttv.td}</strong>, Nadi: <strong>${ttv.nadi}</strong>, Suhu: <strong>${ttv.suhu}</strong>, RR: <strong>${ttv.rr}</strong>, GCS: <strong>${ttv.gcs}</strong>.<br>Pasien saat ini menjalani intervensi (SP) standar pengontrolan gejala.
                                    </td>
                                </tr>
                                <tr class="border-b border-slate-200">
                                    <td class="w-10 text-center bg-amber-600 text-white font-black text-lg border-r border-slate-200">A</td>
                                    <td class="p-3 text-[12px]"><span class="font-bold text-amber-800 uppercase tracking-wider text-[10px] block mb-1">Assessment (Penilaian Klinis)</span>
                                        ${soap.a || "Kondisi stabil, namun masalah belum teratasi sepenuhnya. Membutuhkan observasi lanjutan."}
                                    </td>
                                </tr>
                                <tr>
                                    <td class="w-10 text-center bg-rose-600 text-white font-black text-lg border-r border-slate-200">R</td>
                                    <td class="p-3 text-[12px]"><span class="font-bold text-rose-800 uppercase tracking-wider text-[10px] block mb-1">Recommendation (Tindak Lanjut)</span>
                                        ${soap.p || "Mohon lanjutkan monitoring intervensi keperawatan primer dan observasi efek samping psikofarmaka."}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        });

        finalHtml += `
            <div class="mt-16 text-right print:mt-12 mr-12 mb-8">
                <p class="text-[13px] text-slate-500 font-bold mb-16 uppercase tracking-widest">Perawat Penanggung Jawab,</p>
                <p class="text-sm font-black text-slate-800 uppercase underline decoration-2 decoration-slate-300 underline-offset-8">(${askepMhsNama || "................................................"})</p>
                <p class="text-[10px] text-slate-500 mt-3 font-bold tracking-widest">${askepMhsNim ? "NIP/NIM: " + askepMhsNim : "NIP/NIM."}</p>
            </div>
        </div>`;

        resultDiv.innerHTML = finalHtml;
        resultDiv.setAttribute("data-all-sdki", allSdkiNames.join(", "));

        saveToHistory({
          id: Date.now(),
          nama: rawNama,
          diagnosa: allSdkiNames.join(", "),
          tanggal: new Date().toLocaleDateString("id-ID"),
          html: finalHtml,
          formData: {
            pxNama: rawNama,
            pxNorm: document.getElementById("px-norm").value,
            pxUmur: umur,
            pxJk: jk,
            pxMedis: medis,
            soapS: document.getElementById("soap-s").value,
            soapO: document.getElementById("soap-o").value,
            soapA: document.getElementById("soap-a").value,
            soapP: document.getElementById("soap-p").value,
            askepMhsNama,
            askepMhsNim,
            askepMhsInstitusi,
            symptoms: Array.from(selectedCheckboxes).map(
              (cb) => cb.dataset.teks,
            ),
            selectedDKodes,
            ttv,
          },
        });

        document.getElementById("askep-output-area").style.display = "block";
        const editIndicator = document.getElementById(
          "askep-edit-mode-indicator",
        );
        if (editIndicator) editIndicator.style.display = "none";

        hideLoader();
        resultDiv.scrollIntoView({ behavior: "smooth" });
        document.getElementById("analyze-dx-btn").style.display = "inline-flex";
        document.getElementById("generate-askep-btn").style.display = "none";
        document.getElementById("askep-clinical-inputs").style.display = "none";

        if (window.lucide) lucide.createIcons();
        Swal.fire({
          title: "Premium ASKEP Ready!",
          text: "Laporan akademik detail dengan narasi panjang telah disusun.",
          icon: "success",
          confirmButtonColor: "#1e40af",
        });
      }, 1500);
    });

  window.resetAskepForm = function () {
    const inputs = document.querySelectorAll(
      '#generator-askep input[type="text"], #generator-askep input[type="number"], #generator-askep textarea',
    );
    inputs.forEach((input) => (input.value = ""));
    const checkboxes = document.querySelectorAll(
      '#generator-askep input[type="checkbox"]',
    );
    checkboxes.forEach((cb) => (cb.checked = false));

    document.getElementById("askep-clinical-inputs").style.display = "none";
    document.getElementById("generate-askep-btn").style.display = "none";
    document.getElementById("analyze-dx-btn").style.display = "inline-flex";
    document.getElementById("askep-output-area").style.display = "none";

    window.editingHistoryIndex = -1;
    const editIndicator = document.getElementById("askep-edit-mode-indicator");
    if (editIndicator) editIndicator.style.display = "none";

    Swal.fire({
      title: "Reset Berhasil",
      text: "Formulir telah dikosongkan.",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  window.cancelEditHistory = function () {
    window.editingHistoryIndex = -1;
    const editIndicator = document.getElementById("askep-edit-mode-indicator");
    if (editIndicator) editIndicator.style.display = "none";
    Swal.fire({
      title: "Edit Dibatalkan",
      text: "Anda keluar dari mode edit. Data baru akan disimpan sebagai entri baru.",
      icon: "info",
      timer: 2000,
    });
  };
};
