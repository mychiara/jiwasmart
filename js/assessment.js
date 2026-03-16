/**
 * ASKEP JIWA SMART - Digital Assessment & Clinical Scales
 */

window.toggleFamilyHistoryDetails = function () {
  const select = document.getElementById("as-predis-keluarga");
  const details = document.getElementById("as-fam-history-details");
  if (select && details) {
    details.style.display = select.value === "Ya" ? "block" : "none";
  }
};

window.initAssessment = function () {
  // Digital Assessment Checklist
  const asChecklist = document.getElementById("as-checklist-container");
  if (asChecklist) {
    asChecklist.style.display = "block";
    asChecklist.innerHTML = "";
    const colors = [
      { bg: "rgba(139, 92, 246, 0.05)", border: "#8b5cf6", text: "#6d28d9" },
      { bg: "rgba(59, 130, 246, 0.05)", border: "#3b82f6", text: "#1d4ed8" },
      { bg: "rgba(16, 185, 129, 0.05)", border: "#10b981", text: "#047857" },
      { bg: "rgba(245, 158, 11, 0.05)", border: "#f59e0b", text: "#b45309" },
      { bg: "rgba(244, 63, 94, 0.05)", border: "#f43f5e", text: "#be123c" },
    ];

    const categories = [...new Set(DATASET.gejala.map((g) => g.tipe))];
    categories.forEach((cat, cIdx) => {
      const catGroup = document.createElement("div");
      catGroup.style.marginBottom = "1rem";
      catGroup.innerHTML = `<h5 style="margin-bottom:0.8rem; color:var(--secondary); font-size:0.9rem; font-weight:700; display:flex; align-items:center; gap:8px;">
                <span style="width:8px; height:8px; border-radius:50%; background:${colors[cIdx % colors.length].border};"></span>
                ${cat}
            </h5>`;
      const grid = document.createElement("div");
      grid.style.display = "grid";
      grid.style.gridTemplateColumns = "repeat(auto-fill, minmax(280px, 1fr))";
      grid.style.gap = "0.75rem";

      const catColor = colors[cIdx % colors.length];

      DATASET.gejala
        .filter((g) => g.tipe === cat)
        .forEach((gjt) => {
          const item = document.createElement("label");
          item.className = "checkbox-item";
          item.style.cssText = `
                    font-size: 0.85rem; 
                    padding: 0.75rem; 
                    background: ${catColor.bg}; 
                    border: 1px solid transparent;
                    border-left: 3px solid ${catColor.border};
                    border-radius: 8px;
                    transition: all 0.2s ease;
                `;
          item.innerHTML = `
                    <input type="checkbox" name="as-symptoms" value="${gjt.diagnosa}" data-teks="${gjt.teks}">
                    <span style="color: var(--text-main); font-weight:500;">${gjt.teks}</span>
                `;

          const input = item.querySelector("input");
          input.onchange = () => {
            if (input.checked) {
              item.style.border = `1px solid ${catColor.border}`;
              item.style.borderLeft = `3px solid ${catColor.border}`;
              item.style.background = "white";
              item.style.boxShadow = `0 2px 8px ${catColor.bg}`;
            } else {
              item.style.border = "1px solid transparent";
              item.style.borderLeft = `3px solid ${catColor.border}`;
              item.style.background = catColor.bg;
              item.style.boxShadow = "none";
            }
          };

          grid.appendChild(item);
        });
      catGroup.appendChild(grid);
      asChecklist.appendChild(catGroup);
    });
  }

  // Scales Initial Render
  const scaleSelect = document.getElementById("scale-select");
  if (scaleSelect) {
    DATASET.scales.forEach((s) => {
      scaleSelect.innerHTML += `<option value="${s.id}">${s.nama}</option>`;
    });
    scaleSelect.addEventListener("change", (e) => {
      renderScale(e.target.value);
    });
  }
};

window.processDigitalAssessment = function () {
  const checkboxes = document.querySelectorAll(
    'input[name="as-symptoms"]:checked',
  );

  const counts = {};

  // 1. Data dari Checklist Status Mental (Dynamic)
  checkboxes.forEach((cb) => {
    counts[cb.value] = (counts[cb.value] || 0) + 2; // Gejala fisik/mental bobot tinggi
  });

  // 2. Data dari Konsep Diri (Mapping manual)
  const konsepMap = {
    "Harga Diri": "D.0087", // Harga Diri Rendah Situasional
    "Citra Tubuh": "D.0083", // Gangguan Citra Tubuh
    Identitas: "D.0084", // Gangguan Identitas Diri
    Peran: "D.0125", // Penampilan Peran Tidak Efektif
  };
  document.querySelectorAll('input[name="as-konsep"]:checked').forEach((cb) => {
    const code = konsepMap[cb.value];
    if (code) counts[code] = (counts[code] || 0) + 1.5;
  });

  // 3. Data dari Hubungan Sosial
  const sosialMap = {
    Isolasi: "D.0121",
    "Menarik Diri": "D.0121",
  };
  document.querySelectorAll('input[name="as-sosial"]:checked').forEach((cb) => {
    const code = sosialMap[cb.value];
    if (code) counts[code] = (counts[code] || 0) + 2.5;
  });

  // 4. Mekanisme Koping & Masalah Lain
  if (
    document.querySelectorAll(
      'input[name="as-koping-ma"][value="Mencederai"]:checked',
    ).length > 0
  ) {
    counts["D.0134"] = (counts["D.0134"] || 0) + 3; // Risiko Bunuh Diri
  }

  if (Object.keys(counts).length === 0) {
    Swal.fire(
      "Peringatan",
      "Pilih minimal satu tanda/gejala atau isi data psikososial untuk diagnosa.",
      "warning",
    );
    return;
  }

  showLoader();
  const sortedCodes = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
  const resultsArea = document.getElementById("assessment-result-area");
  const resultsList = document.getElementById("recommended-diagnoses-list");

  setTimeout(() => {
    resultsList.innerHTML = "";
    sortedCodes.forEach((code, index) => {
      let diag = (EXTERNAL_SDKI.length > 0 ? EXTERNAL_SDKI : DATASET.sdki).find(
        (s) => (s.kode || s.Kode) === code,
      );
      if (!diag) {
        const lpMatch = DATASET.lp.find(
          (l) => l.sdki === code || l.id === code,
        );
        if (lpMatch) {
          diag = {
            kode: lpMatch.sdki || lpMatch.id,
            nama: lpMatch.nama,
            definisi: lpMatch.definisi,
            tanda_mayor: lpMatch.tanda_gejala
              ? lpMatch.tanda_gejala.substring(0, 100) + "..."
              : "-",
          };
        }
      }
      if (!diag) return;

      const priorityLabel =
        index === 0
          ? '<span class="badge" style="background:#10B981; color:white;">Prioritas Utama</span>'
          : '<span class="badge">Diferensial</span>';
      const card = document.createElement("div");
      card.className = "card";
      card.style.borderLeft =
        index === 0 ? "5px solid #10B981" : "3px solid #CBD5E1";
      card.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <h3 style="margin:0; font-size:1.1rem;">${diag.kode || diag.Kode}: ${diag.nama || diag.Nama}</h3>
                    ${priorityLabel}
                </div>
                <p style="font-size:0.85rem; color:var(--text-muted); margin:0.5rem 0 1rem;">${diag.definisi || diag.Definisi}</p>
                <div style="background:#f8fafc; padding:0.75rem; border-radius:8px;">
                    <p style="font-size:0.8rem; margin:0;"><strong>Tanda Mayor:</strong> ${diag.tanda_mayor || diag.TandaMayor || "-"}</p>
                </div>
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:0.5rem; margin-top:1rem;">
                    <button class="btn btn-primary" onclick="createAskepWithDiagnosis('${diag.kode || diag.Kode}')"><i data-lucide="file-check"></i> Buat ASKEP</button>
                    <button class="btn btn-ghost" onclick="goToMSEFromAssessment('${diag.kode || diag.Kode}')"><i data-lucide="user-check"></i> Lanjut MSE</button>
                </div>
            `;
      resultsList.appendChild(card);
    });
    resultsArea.style.display = "block";
    hideLoader();
    if (typeof lucide !== "undefined") lucide.createIcons();
    resultsArea.scrollIntoView({ behavior: "smooth" });
  }, 1000);
};

window.printAssessmentReport = function () {
  const getChecked = (name) =>
    Array.from(document.querySelectorAll(`input[name="${name}"]:checked`))
      .map((cb) => cb.value || cb.dataset.teks)
      .join(", ") || "-";

  const data = {
    nama: document.getElementById("as-nama").value || "-",
    umur: document.getElementById("as-umur").value || "-",
    jk: document.getElementById("as-jk").value,
    norm: document.getElementById("as-norm").value || "-",
    tgl: document.getElementById("as-tgl-pengkajian").value || "-",
    informan: document.getElementById("as-informan").value || "-",
    alasan: document.getElementById("as-alasan").value || "-",
    predis: {
      riwayat: document.getElementById("as-predis-riwayat").value,
      obat: document.getElementById("as-predis-obat").value,
      trauma: getChecked("as-trauma"),
      keluarga: document.getElementById("as-predis-keluarga").value,
      keluargaDetail:
        document.getElementById("as-predis-keluarga").value === "Ya"
          ? {
              hubungan: document.getElementById("as-fam-relation").value || "-",
              gejala: document.getElementById("as-fam-gejala").value || "-",
              perawatan: document.getElementById("as-fam-obat").value || "-",
            }
          : null,
      unpleasant: document.getElementById("as-predis-unpleasant").value || "-",
    },
    fisik: {
      td: document.getElementById("as-td").value || "-",
      n: document.getElementById("as-nadi").value || "-",
      s: document.getElementById("as-suhu").value || "-",
      p: document.getElementById("as-rr").value || "-",
      bb: document.getElementById("as-bb").value || "-",
      tb: document.getElementById("as-tb").value || "-",
      keluhan: document.getElementById("as-fisik-keluhan").value || "-",
    },
    psikososial: {
      konsep: getChecked("as-konsep"),
      sosial: getChecked("as-sosial"),
      spiritual: document.getElementById("as-spiritual").value || "-",
    },
    statusMental: getChecked("as-symptoms"),
    pulang: {
      makan: document.getElementById("as-pulang-makan").value,
      eliminasi: document.getElementById("as-pulang-eliminasi").value,
      mandi: document.getElementById("as-pulang-mandi").value,
      berhias: document.getElementById("as-pulang-berhias").value,
      istirahat: document.getElementById("as-pulang-istirahat").value,
      obat: document.getElementById("as-pulang-obat").value,
    },
    koping: {
      adaptif: getChecked("as-koping-ad"),
      maladaptif: getChecked("as-koping-ma"),
    },
    masalah: document.getElementById("as-masalah-lain").value || "-",
    medis: document.getElementById("as-medis").value || "-",
    obat: document.getElementById("as-obat-skrg").value || "-",
  };

  const reportHtml = `
    <div id="print-area" style="padding: 40px; font-family: 'Times New Roman', Times, serif; color: #000; line-height: 1.4; font-size: 11pt;">
      <div style="text-align: center; border-bottom: 2px solid #000; padding-bottom: 5px; margin-bottom: 20px;">
        <h2 style="margin: 0; text-transform: uppercase; font-size: 14pt;">FORMULIR PENGKAJIAN KEPERAWATAN KESEHATAN JIWA</h2>
        <p style="margin: 5px 0; font-size: 10pt;">Klinik / Rumah Sakit Jiwa Pratama JiwaCare</p>
      </div>

      <div style="margin-bottom: 10px;">
        <strong>I. IDENTITAS KLIEN</strong>
        <table style="width: 100%; margin-top: 5px;">
            <tr><td style="width: 25%;">Nama Inisial</td><td>: ${data.nama}</td><td style="width: 20%;">Informan</td><td>: ${data.informan}</td></tr>
            <tr><td>Umur</td><td>: ${data.umur} Tahun</td><td>No. RM</td><td>: ${data.norm}</td></tr>
            <tr><td>Jenis Kelamin</td><td>: ${data.jk}</td><td>Tgl Pengkajian</td><td>: ${data.tgl}</td></tr>
        </table>
      </div>

      <div style="margin-bottom: 15px;">
        <strong>II. ALASAN MASUK / KELUHAN UTAMA</strong>
        <div style="border: 0.5px solid #000; padding: 5px; margin-top: 5px; min-height: 40px;">${data.alasan}</div>
      </div>

      <div style="margin-bottom: 15px;">
        <strong>III. FAKTOR PREDISPOSISI</strong>
        <table style="width: 100%; border-collapse: collapse; margin-top: 5px;">
            <tr><td style="border: 0.5px solid #000; padding: 3px;">1. Riwayat Ggn Jiwa</td><td style="border: 0.5px solid #000; padding: 3px;">: ${data.predis.riwayat}</td></tr>
            <tr><td style="border: 0.5px solid #000; padding: 3px;">2. Pengobatan</td><td style="border: 0.5px solid #000; padding: 3px;">: ${data.predis.obat}</td></tr>
            <tr><td style="border: 0.5px solid #000; padding: 3px;">3. Riwayat Aniaya/Trauma</td><td style="border: 0.5px solid #000; padding: 3px;">: ${data.predis.trauma}</td></tr>
            <tr><td style="border: 0.5px solid #000; padding: 3px;">4. Ggn Jiwa Keluarga</td><td style="border: 0.5px solid #000; padding: 3px;">: ${data.predis.keluarga} ${data.predis.keluargaDetail ? `<br><small>(Hubungan: ${data.predis.keluargaDetail.hubungan}, Gejala: ${data.predis.keluargaDetail.gejala}, Perawatan: ${data.predis.keluargaDetail.perawatan})</small>` : ""}</td></tr>
            <tr><td style="border: 0.5px solid #000; padding: 3px;">5. Masalah Masa Lalu</td><td style="border: 0.5px solid #000; padding: 3px;">: ${data.predis.unpleasant}</td></tr>
        </table>
      </div>

      <div style="margin-bottom: 15px;">
        <strong>IV. PEMERIKSAAN FISIK</strong>
        <table style="width: 100%; border-collapse: collapse; margin-top: 5px; text-align: center;">
            <tr>
                <td style="border: 0.5px solid #000;">TD</td><td style="border: 0.5px solid #000;">Nadi</td><td style="border: 0.5px solid #000;">Suhu</td><td style="border: 0.5px solid #000;">RR</td><td style="border: 0.5px solid #000;">BB</td><td style="border: 0.5px solid #000;">TB</td>
            </tr>
            <tr>
                <td style="border: 0.5px solid #000;">${data.fisik.td}</td><td style="border: 0.5px solid #000;">${data.fisik.n}</td><td style="border: 0.5px solid #000;">${data.fisik.s}</td><td style="border: 0.5px solid #000;">${data.fisik.p}</td><td style="border: 0.5px solid #000;">${data.fisik.bb}</td><td style="border: 0.5px solid #000;">${data.fisik.tb}</td>
            </tr>
        </table>
        <div style="font-size: 9pt; margin-top: 3px;">Keluhan Fisik: ${data.fisik.keluhan}</div>
      </div>

      <div style="margin-bottom: 15px;">
        <strong>V. PSIKOSOSIAL</strong>
        <div style="margin-left: 10px;">
            <div>1. Konsep Diri: ${data.psikososial.konsep}</div>
            <div>2. Hubungan Sosial: ${data.psikososial.sosial}</div>
            <div>3. Spiritual: ${data.psikososial.spiritual}</div>
        </div>
      </div>

      <div style="margin-bottom: 15px;">
        <strong>VI. STATUS MENTAL (MASALAH DITEMUKAN)</strong>
        <div style="border: 0.5px solid #000; padding: 5px; margin-top: 5px; min-height: 60px;">${data.statusMental}</div>
      </div>

      <div style="margin-bottom: 15px;">
        <strong>VII. KEBUTUHAN PERSIAPAN PULANG</strong>
        <table style="width: 100%; font-size: 9pt; border-collapse: collapse; margin-top: 5px;">
            <tr><td style="border: 0.5px solid #000; padding: 2px;">Makan: ${data.pulang.makan}</td><td style="border: 0.5px solid #000; padding: 2px;">BAK/BAB: ${data.pulang.eliminasi}</td></tr>
            <tr><td style="border: 0.5px solid #000; padding: 2px;">Mandi: ${data.pulang.mandi}</td><td style="border: 0.5px solid #000; padding: 2px;">Berpakaian: ${data.pulang.berhias}</td></tr>
            <tr><td style="border: 0.5px solid #000; padding: 2px;">Istirahat: ${data.pulang.istirahat}</td><td style="border: 0.5px solid #000; padding: 2px;">Obat: ${data.pulang.obat}</td></tr>
        </table>
      </div>

      <div style="margin-bottom: 15px;">
        <strong>VIII. MEKANISME KOPING</strong>
        <div style="margin-left: 10px;">
            <div>Adaptif: ${data.koping.adaptif}</div>
            <div>Maladaptif: ${data.koping.maladaptif}</div>
        </div>
      </div>

      <div style="margin-bottom: 15px;">
        <strong>IX. MASALAH PSIKOSOSIAL & LINGKUNGAN</strong>
        <div style="border: 0.5px solid #000; padding: 5px; margin-top: 5px;">${data.masalah}</div>
      </div>

      <div style="margin-bottom: 20px;">
        <strong>X. ASPEK MEDIK</strong>
        <div style="border: 1px solid #000; padding: 8px;">
            <div><b>Diagnosa Medis:</b> ${data.medis}</div>
            <div style="margin-top: 5px;"><b>Terapi Medik:</b> ${data.obat}</div>
        </div>
      </div>

      <div style="margin-top: 40px; display: flex; justify-content: space-around; text-align: center;">
        <div>Pasien / Keluarga<br><br><br><br>( ________________ )</div>
        <div>Perawat Pengkaji<br><br><br><br>( ________________ )</div>
      </div>
    </div>
  `;

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = reportHtml;
  tempDiv.style.position = "absolute";
  tempDiv.style.left = "-9999px";
  document.body.appendChild(tempDiv);

  Swal.fire({
    title: "Konfirmasi Cetak",
    text: "Pilih format output laporan pengkajian.",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Ekspor PDF (Sangat Rekomendatif)",
    cancelButtonText: "Batal",
    showDenyButton: true,
    denyButtonText: "Print Langsung",
  }).then((result) => {
    if (result.isConfirmed) {
      exportPDF(tempDiv.firstChild.id, `Pengkajian_Jiwa_${data.nama}`);
    } else if (result.isDenied) {
      exportPrint(tempDiv.firstChild.id);
    }
    document.body.removeChild(tempDiv);
  });
};

window.createAskepWithDiagnosis = function (kode) {
  // Autofill will be handled by navigation showView calling autofillASKEP()
  const selectedSymptoms = document.querySelectorAll(
    'input[name="as-symptoms"]:checked',
  );
  const standardSymptoms = document.querySelectorAll('input[name="symptoms"]');

  standardSymptoms.forEach((s) => (s.checked = false));
  selectedSymptoms.forEach((asSymptom) => {
    standardSymptoms.forEach((stdSymptom) => {
      if (stdSymptom.dataset.teks === asSymptom.dataset.teks)
        stdSymptom.checked = true;
    });
  });

  showView("generator-askep");
  setTimeout(() => {
    document.getElementById("analyze-dx-btn").click();
  }, 300);
};

window.resetAssessmentForm = function () {
  const ids = [
    "as-nama",
    "as-umur",
    "as-norm",
    "as-tgl-pengkajian",
    "as-informan",
    "as-alasan",
    "as-predis-unpleasant",
    "as-td",
    "as-nadi",
    "as-suhu",
    "as-rr",
    "as-bb",
    "as-tb",
    "as-fisik-keluhan",
    "as-spiritual",
    "as-masalah-lain",
    "as-medis",
    "as-obat-skrg",
    "as-fam-relation",
    "as-fam-gejala",
    "as-fam-obat",
  ];
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });

  const selects = [
    "as-jk",
    "as-predis-riwayat",
    "as-predis-obat",
    "as-predis-keluarga",
    "as-pulang-makan",
    "as-pulang-eliminasi",
    "as-pulang-mandi",
    "as-pulang-berhias",
    "as-pulang-istirahat",
    "as-pulang-obat",
  ];
  selects.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.selectedIndex = 0;
  });

  const checkGroups = [
    "as-trauma",
    "as-konsep",
    "as-sosial",
    "as-koping-ad",
    "as-koping-ma",
    "as-symptoms",
  ];
  checkGroups.forEach((name) => {
    document
      .querySelectorAll(`input[name="${name}"]`)
      .forEach((cb) => (cb.checked = false));
  });

  const resultArea = document.getElementById("assessment-result-area");
  if (resultArea) resultArea.style.display = "none";

  const details = document.getElementById("as-fam-history-details");
  if (details) details.style.display = "none";

  Swal.fire({
    title: "Form Dibersihkan",
    text: "Seluruh data pengkajian telah dikosongkan.",
    icon: "success",
    timer: 1500,
    showConfirmButton: false,
  });
};

window.renderScale = function (scaleId) {
  const container = document.getElementById("scale-container");
  const itemsDiv = document.getElementById("scale-items");
  const scale = DATASET.scales.find((s) => s.id === scaleId);

  if (!scale) {
    container.style.display = "none";
    return;
  }
  container.style.display = "block";
  itemsDiv.innerHTML = `<h4>${scale.nama}</h4><p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:1rem;">${scale.deskripsi || ""}</p>`;

  const options = scale.options ? scale.options : [0, 1, 2, 3, 4];
  scale.items.forEach((item, idx) => {
    itemsDiv.innerHTML += `
            <div style="margin-bottom:1.25rem; border-bottom:1px solid var(--border); padding-bottom:0.75rem;">
                <p style="font-size:0.95rem; font-weight:600; margin-bottom:0.75rem;">${idx + 1}. ${item}</p>
                <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap:0.75rem;">
                    ${options
                      .map((opt, sIdx) => {
                        const score = scale.options
                          ? scale.id === "gaf"
                            ? parseInt(opt.split("-")[0])
                            : sIdx
                          : sIdx;
                        return `<label style="font-size:0.8rem; display:flex; align-items:start; gap:8px; cursor:pointer; background:var(--bg-soft); padding:8px; border-radius:6px;"><input type="radio" name="item_${idx}" value="${score}" onchange="calculateScore()" ${sIdx === 0 ? "checked" : ""}><span>${opt}</span></label>`;
                      })
                      .join("")}
                </div>
            </div>
        `;
  });
  calculateScore();
};

window.calculateScore = function () {
  const radios = document.querySelectorAll(
    '#scale-items input[type="radio"]:checked',
  );
  let total = 0;
  radios.forEach((r) => (total += parseInt(r.value)));
  document.getElementById("scale-total").innerText = total;

  const scaleId = document.getElementById("scale-select").value;
  let interp = "Status Normal / Ringan";
  if (scaleId === "gaf") {
    interp =
      total >= 91
        ? "Fungsi Maksimal"
        : total >= 71
          ? "Gejala Ringan/Sementara"
          : total >= 51
            ? "Gejala Sedang"
            : total >= 31
              ? "Gangguan Berat"
              : "Bahaya/Sangat Berat";
  } else if (total > 28) interp = "Sangat Berat";
  else if (total > 14) interp = "Berat";
  else if (total > 7) interp = "Sedang";
  document.getElementById("scale-interpretation").innerText =
    `Interpretasi: ${interp}`;
};

window.showAssessmentGuide = function () {
  Swal.fire({
    title: "Panduan Pengisian Pengkajian Jiwa",
    html: `
            <div style="text-align: left; font-size: 0.9rem; max-height: 500px; overflow-y: auto; padding: 15px; line-height: 1.6; background: #f8fafc; border-radius: 8px;">
                <h4 style="color: var(--primary); border-bottom: 2px solid var(--primary-soft); padding-bottom: 5px;">I. IDENTITAS KLIEN</h4>
                <p>Isi inisial nama pasien (untuk privasi), No. RM yang valid, dan tanggal mulai dilakukan pengkajian.</p>

                <h4 style="color: var(--primary); border-bottom: 2px solid var(--primary-soft); padding-bottom: 5px; margin-top: 15px;">II. ALASAN MASUK</h4>
                <p>Tuliskan apa yang menyebabkan pasien/keluarga membawa ke rumah sakit. Fokus pada keluhan utama saat ini dan perubahan perilaku yang paling menonjol.</p>

                <h4 style="color: var(--primary); border-bottom: 2px solid var(--primary-soft); padding-bottom: 5px; margin-top: 15px;">III. FAKTOR PREDISPOSISI</h4>
                <p>Gali riwayat masa lalu (minimal 6 bulan terakhir). Tanyakan apakah pernah mengalami gangguan jiwa sebelumnya, riwayat trauma (aniaya, penolakan), dan apakah ada anggota keluarga inti yang memiliki riwayat serupa (genetik).</p>

                <h4 style="color: var(--primary); border-bottom: 2px solid var(--primary-soft); padding-bottom: 5px; margin-top: 15px;">IV. PEMERIKSAAN FISIK</h4>
                <p>Lakukan pengukuran objektif TTV. Berikan perhatian khusus pada keluhan fisik (seperti keluhan somatis) yang sering menyertai gangguan kecemasan atau depresi.</p>

                <h4 style="color: var(--primary); border-bottom: 2px solid var(--primary-soft); padding-bottom: 5px; margin-top: 15px;">V. PSIKOSOSIAL</h4>
                <p><b>Konsep Diri:</b> Observasi cara pandang pasien terhadap dirinya sendiri.<br>
                   <b>Hubungan Sosial:</b> Identifikasi orang terdekat (support system) dan bagaimana pasien berinteraksi di lingkungannya.<br>
                   <b>Spiritual:</b> Tanyakan keyakinan dan apakah gangguan ini menghambat ibadahnya.</p>

                <h4 style="color: var(--primary); border-bottom: 2px solid var(--primary-soft); padding-bottom: 5px; margin-top: 15px;">VI. STATUS MENTAL (PENTING)</h4>
                <p><b>Penampilan:</b> Observasi kebersihan dan cara berpakaian.<br>
                   <b>Pembicaraan:</b> Apakah cepat, keras, gagap, atau membisu.<br>
                   <b>Persepsi:</b> Identifikasi adanya Halusinasi (Denar, Lihat, Raba, dll).<br>
                   <b>Proses Pikir:</b> Observasi arus pikir (koheren/incoherent) dan isi pikir (ada waham/phobia?).<br>
                   <b>Insight:</b> Apakah pasien sadar dirinya sedang sakit?</p>

                <h4 style="color: var(--primary); border-bottom: 2px solid var(--primary-soft); padding-bottom: 5px; margin-top: 15px;">VII. PERSIAPAN PULANG</h4>
                <p>Evaluasi kemampuan ADL (Activities of Daily Living). Apakah pasien mampu mandi, makan, dan membersihkan diri secara mandiri jika kembali ke rumah.</p>

                <h4 style="color: var(--primary); border-bottom: 2px solid var(--primary-soft); padding-bottom: 5px; margin-top: 15px;">VIII. MEKANISME KOPING</h4>
                <p>Tanyakan bagaimana cara pasien menghadapi stres. Bedakan antara koping adaptif (bicara dengan orang lain, olahraga) dan maladaptif (mencederai diri, konsumsi zat).</p>

                <h4 style="color: var(--primary); border-bottom: 2px solid var(--primary-soft); padding-bottom: 5px; margin-top: 15px;">IX. ASPEK MEDIK</h4>
                <p>Tuliskan diagnosa medis dari dokter dan daftar obat psikofarmaka yang sedang dikonsumsi beserta dosisnya.</p>
            </div>
        `,
    width: "650px",
    confirmButtonText: "Saya Mengerti",
    confirmButtonColor: "#6366f1",
    icon: "info",
  });
};
