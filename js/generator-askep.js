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
    const diagnosaCounts = {};
    selectedCheckboxes.forEach((cb) => {
      const dKode = cb.value;
      diagnosaCounts[dKode] = (diagnosaCounts[dKode] || 0) + 1;
    });

    const topDKode = Object.keys(diagnosaCounts).reduce((a, b) =>
      diagnosaCounts[a] > diagnosaCounts[b] ? a : b,
    );
    const sdki = (EXTERNAL_SDKI.length > 0 ? EXTERNAL_SDKI : DATASET.sdki).find(
      (s) => (s.Kode || s.kode) === topDKode,
    );
    let slki = EXTERNAL_SLKI.find((s) =>
      (s["Tautan Diagnosa"] || "").includes(topDKode),
    );
    let siki = EXTERNAL_SIKI.find((s) =>
      (s["Tautan Diagnosa"] || "").includes(topDKode),
    );

    if (!slki && DATASET.slki)
      slki = DATASET.slki.find((s) => s.id === topDKode) || DATASET.slki[0];
    if (!siki && DATASET.siki)
      siki = DATASET.siki.find((s) => s.id === topDKode) || DATASET.siki[0];

    currentAnalysis = { sdki, slki, siki, topDKode, selectedCheckboxes };

    setTimeout(() => {
      hideLoader();
      document.getElementById("askep-clinical-inputs").style.display = "block";
      document.getElementById("generate-askep-btn").style.display =
        "inline-flex";
      document.getElementById("analyze-dx-btn").style.display = "none";

      const sikiContainer = document.getElementById("siki-checkboxes");
      sikiContainer.innerHTML = "";
      const actions = [];
      if (siki) {
        ["Observasi", "Terapeutik", "Edukasi", "Kolaborasi"].forEach((cat) => {
          const raw =
            siki[cat] ||
            (siki.tindakan ? siki.tindakan[cat.toLowerCase()] : "");
          if (raw && raw !== "-") {
            raw.split(";").forEach((act) => {
              if (act.trim()) actions.push({ cat, text: act.trim() });
            });
          }
        });
      }

      if (actions.length === 0) {
        sikiContainer.innerHTML =
          "<p>Tidak ada intervensi spesifik ditemukan.</p>";
      } else {
        actions.forEach((a, i) => {
          const div = document.createElement("div");
          div.className = "checkbox-item";
          div.innerHTML = `<input type="checkbox" name="siki-choice" id="siki-${i}" value="${a.cat}: ${a.text}" checked><label for="siki-${i}">[${a.cat}] ${a.text}</label>`;
          sikiContainer.appendChild(div);
        });
      }
      Swal.fire({
        title: "Analisis Berhasil",
        text: `Diagnosa Terdeteksi: ${sdki.Nama || sdki.nama}. Silakan lengkapi data SOAP dan pilih intervensi.`,
        icon: "success",
        timer: 2000,
      });
    }, 1000);
  });

  // Phase 2: Generate
  document
    .getElementById("generate-askep-btn")
    .addEventListener("click", () => {
      if (!currentAnalysis) return;
      const { sdki, slki, siki, topDKode, selectedCheckboxes } =
        currentAnalysis;
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
        resultDiv.innerHTML = `
                <div class="report-header" style="text-align: center; border-bottom: 2px solid #333; padding-bottom: 1rem; margin-bottom: 2rem;">
                    <div style="font-size: 1.5rem; font-weight: 800;">ASUHAN KEPERAWATAN JIWA</div>
                    <div style="font-size: 1.1rem; font-weight: 600;">UNIT PELAYANAN KEPERAWATAN SMART</div>
                    <div style="margin-top: 1.5rem; display: grid; grid-template-columns: 1fr 1fr; text-align: left; font-size: 0.85rem; border: 1px solid #ddd; padding: 1rem; border-radius: 8px; background: #fff;">
                        <div><p><strong>Perawat:</strong> ${askepMhsNama}</p><p><strong>NIM/NIP:</strong> ${askepMhsNim}</p></div>
                        <div style="text-align: right;"><p><strong>Unit:</strong> ${askepMhsInstitusi}</p><p><strong>Tanggal:</strong> ${new Date().toLocaleDateString("id-ID")}</p></div>
                    </div>
                </div>
                <div class="report-section">
                    <h4>A. PENGKAJIAN DATA PASIEN</h4>
                    <table style="width: 100%; border: none;">
                        <tr style="border: none;"><td style="border: none; width: 150px;">Nama Pasien</td><td style="border: none;">: ${nama}</td></tr>
                        <tr style="border: none;"><td style="border: none;">No. RM</td><td style="border: none;">: ${escapeHTML(document.getElementById("px-norm").value) || "-"}</td></tr>
                        <tr style="border: none;"><td style="border: none;">Umur</td><td style="border: none;">: ${umur} Tahun</td></tr>
                        <tr style="border: none;"><td style="border: none;">Jenis Kelamin</td><td style="border: none;">: ${jk}</td></tr>
                        <tr style="border: none;"><td style="border: none;">Diagnosa Medis</td><td style="border: none;">: ${medis}</td></tr>
                    </table>
                    <p style="margin-top: 1rem;"><b>Gejala yang ditemukan:</b></p>
                    <ul style="padding-left: 1.5rem;">${Array.from(
                      selectedCheckboxes,
                    )
                      .map((cb) => `<li>${cb.dataset.teks}</li>`)
                      .join("")}</ul>
                </div>
                <div class="report-section"><h4>B. DIAGNOSA KEPERAWATAN (SDKI)</h4><p><strong>${escapeHTML(sdki.Kode || sdki.kode)} : ${escapeHTML(sdki.Nama || sdki.nama)}</strong></p><div class="clinical-content" style="font-style: italic; margin-bottom: 1rem;">Definisi: ${escapeHTML(sdki.Definisi || sdki.definisi)}</div>${sdki.Penyebab ? `<div><strong>Penyebab:</strong></div><div class="clinical-content">${formatClinicalText(escapeHTML(sdki.Penyebab))}</div>` : ""}</div>
                <div class="report-section"><h4>C. LUARAN KEPERAWATAN (SLKI)</h4>
                    <p><b>${slki ? escapeHTML(slki.Kode || slki.id) + " : " + escapeHTML(slki.Nama || slki.nama) : "Diharapkan Membaik"}</b></p>
                    <p><b>Ekspektasi:</b> ${slki ? escapeHTML(slki.Ekspektasi || slki.ekspektasi || "Membaik") : "Membaik"}</p>
                    <div style="margin-top:0.5rem;">
                        <table style="width:100%; border:1px solid #ddd; font-size:0.9rem; border-collapse: collapse;">
                            <tr style="background:#f1f5f9;">
                                <th style="border:1px solid #ddd; padding:8px;">Kriteria Hasil</th>
                                <th style="border:1px solid #ddd; padding:8px; text-align:center;">Target Pencapaian</th>
                            </tr>
                            ${
                              slki && slki["Kriteria Hasil"]
                                ? slki["Kriteria Hasil"]
                                    .split(";")
                                    .map(
                                      (k) =>
                                        `<tr><td style="border:1px solid #ddd; padding:8px;">${escapeHTML(k.trim())}</td><td style="border:1px solid #ddd; padding:8px; text-align:center; color:var(--success); font-weight:600;">${slki.ekspektasi === "Menurun" ? "Menurun" : "Meningkat"}</td></tr>`,
                                    )
                                    .join("")
                                : '<tr><td colspan="2" style="border:1px solid #ddd; padding:8px; text-align:center;">Data kriteria hasil standar diterapkan.</td></tr>'
                            }
                        </table>
                    </div>
                </div>
                <div class="report-section"><h4>D. INTERVENSI KEPERAWATAN (SIKI)</h4>
                    <p><b>${siki ? escapeHTML(siki.Kode || siki.id) + " : " + escapeHTML(siki.Nama || siki.nama) : "-"}</b></p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">
                        <div style="background:#f8fafc; padding:1rem; border-radius:8px; border:1px solid #e2e8f0;">
                            <h5 style="margin-top:0; color:var(--primary); font-size:0.85rem; border-bottom:1px solid #cbd5e1; padding-bottom:4px;">Tindakan Dipilih:</h5>
                            <ul style="font-size: 0.8rem; padding-left: 1.2rem; margin-bottom:0;">
                                ${selectedSiki.map((s) => `<li>${s}</li>`).join("")}
                            </ul>
                        </div>
                        <div style="background:#fff7ed; padding:1rem; border-radius:8px; border:1px solid #fed7aa;">
                            <h5 style="margin-top:0; color:#c2410c; font-size:0.85rem; border-bottom:1px solid #fdba74; padding-bottom:4px;">Rasional Ilmiah:</h5>
                            <p style="font-size:0.8rem; line-height:1.5; margin-bottom:0; color:#9a3412;">
                                ${escapeHTML(siki.rasional || "Intervensi ini dirancang untuk menstabilkan kondisi neurobiologis dan psikologis pasien melalui pendekatan terstandar SIKI.")}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="report-section">
                    <h4>E. REKOMENDASI PSIKOFARMAKA</h4>
                    <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap:1rem;">
                        ${(() => {
                          const lpMatch = DATASET.lp.find(
                            (l) => l.sdki === topDKode,
                          );
                          const obatNames = lpMatch
                            ? lpMatch.obat_rekomendasi
                            : ["Haloperidol", "Risperidone"];
                          return obatNames
                            .map((name) => {
                              const drug = DATASET.obat.find(
                                (o) =>
                                  o.nama.includes(name) ||
                                  name.includes(o.nama),
                              );
                              return drug
                                ? `
                                <div style="border: 1px solid #e2e8f0; padding: 0.75rem; border-radius: 8px; background:#f8fafc;">
                                    <div style="color:var(--primary); font-weight:700; font-size:0.85rem;">${drug.nama}</div>
                                    <div style="font-size:0.75rem; font-weight:600;">${drug.jenis}</div>
                                    <div style="font-size:0.75rem; color:#475569; margin-top:4px;"><b>Dosis:</b> ${drug.dosis}</div>
                                    <div style="font-size:0.75rem; color:#475569;"><b>Indikasi:</b> ${drug.indikasi}</div>
                                </div>`
                                : "";
                            })
                            .join("");
                        })()}
                    </div>
                </div>
                <div class="report-section">
                    <h4>F. IMPLEMENTASI & EVALUASI (SOAP)</h4>
                    <table style="width: 100%; border: 1px solid #ddd; padding:0" border="1" cellpadding="10" cellspacing="0">
                        <tr><th style="background:#eee; color:#333; width: 40%;">Implementasi</th><th style="background:#eee; color:#333;">Evaluasi (SOAP)</th></tr>
                        <tr><td>1. Membina hubungan saling percaya<br>2. Mengidentifikasi tanda dan gejala masalah<br>3. Melatih pasien cara mengontrol masalah (${siki.Nama || siki.nama})<br>4. Menganjurkan memasukkan ke dalam jadwal harian</td><td><b>S:</b> ${soap.s}<br><b>O:</b> ${soap.o}<br><b>A:</b> ${soap.a}<br><b>P:</b> ${soap.p}</td></tr>
                    </table>
                </div>
                <div style="margin-top: 3rem; text-align: right; font-style: italic; color: #94a3b8; font-size: 0.85rem;">Dicetak secara otomatis oleh ASKep Jiwa Smart - ${new Date().toLocaleDateString("id-ID")}</div>
            `;

        saveToHistory({
          id: Date.now(),
          nama: rawNama,
          diagnosa: sdki.Nama || sdki.nama,
          tanggal: new Date().toLocaleDateString("id-ID"),
          html: resultDiv.innerHTML,
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
