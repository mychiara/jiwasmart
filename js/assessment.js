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
  const symptomsCheckboxes = document.querySelectorAll('input[name="as-symptoms"]:checked');
  const counts = {};

  // 1. Map Main Symptoms Checklist (Highest Weight)
  symptomsCheckboxes.forEach(cb => {
    const code = cb.value;
    counts[code] = (counts[code] || 0) + 5; 
  });

  // 2. Status Mental Mapping (14 Categories)
  const mseCategories = [
    "as-sm-penampilan", "as-sm-bicara", "as-sm-motorik", "as-sm-alam", 
    "as-sm-afek", "as-sm-interaksi", "as-sm-persepsi", "as-sm-proses", 
    "as-sm-isi", "as-sm-waham", "as-sm-sadar", "as-sm-disorient", 
    "as-sm-memori", "as-sm-hitung", "as-sm-nilai", "as-sm-tilik"
  ];

  mseCategories.forEach(name => {
    document.querySelectorAll(`input[name="${name}"]:checked`).forEach(cb => {
      const val = cb.value.toLowerCase();
      
      // Clinical Mapping Logic - High Fidelity (Case Insensitive)
      if (val.includes("tidak rapi") || val.includes("pakaian tidak sesuai")) counts["D.0109"] = (counts["D.0109"] || 0) + 4; // DPD
      if (val.includes("inkoheren") || val.includes("flight of ideas") || val.includes("blocking")) counts["D.0105"] = (counts["D.0105"] || 0) + 3; // Waham (Process)
      if (val.includes("agitasi") || val.includes("bermusuhan") || val.includes("tersinggung") || val.includes("menyerang")) counts["D.0146"] = (counts["D.0146"] || 0) + 5; // RPK
      if (val.includes("sedih") || val.includes("putus asa") || val.includes("anhedonia")) counts["D.0135"] = (counts["D.0135"] || 0) + 3; // Map to suicide risk/depression
      if (val.includes("ketakutan") || val.includes("khawatir") || val.includes("tegang")) counts["D.0080"] = (counts["D.0080"] || 0) + 3; // Ansietas
      if (val.includes("halusinasi") || name === "as-sm-persepsi") counts["D.0085"] = (counts["D.0085"] || 0) + 5; // Halusinasi
      if (name === "as-sm-waham" || val.includes("waham")) counts["D.0105"] = (counts["D.0105"] || 0) + 6; // Waham (Content)
      if (val.includes("mengingkari") || val.includes("menyalahkan")) counts["D.0105"] = (counts["D.0105"] || 0) + 3; 
      if (val.includes("tidak kooperatif") || val.includes("kontak mata kurang") || val.includes("apatis")) counts["D.0121"] = (counts["D.0121"] || 0) + 4; // Isolasi Sosial
      if (val.includes("konfabulasi") || val.includes("daya ingat") || val.includes("disorientasi")) counts["D.0105"] = (counts["D.0105"] || 0) + 2; // Map to Waham/Confusion
      
      // Additional specific mappings
      if (val.includes("mencederai diri") || val.includes("ide bunuh diri") || val.includes("ingin mati")) counts["D.0135"] = (counts["D.0135"] || 0) + 7; // Risiko Bunuh Diri
      if (val.includes("tidak berharga") || val.includes("pesimis") || val.includes("minder")) counts["D.0087"] = (counts["D.0087"] || 0) + 4; // HDR Kronik
    });
  });

  // 3. Mekanisme Koping & Masalah Lain
  if (document.querySelectorAll('input[name="as-koping-ma"][value="Amuk"]:checked').length > 0) {
    counts["D.0146"] = (counts["D.0146"] || 0) + 6; // RPK (Very high weight for Amuk)
  }
  
  if (document.querySelectorAll('input[name="as-koping-ma"][value="Minum"]:checked').length > 0) {
    counts["D.0127"] = (counts["D.0127"] || 0) + 4; // Penyalahgunaan Zat
  }

  // SAD PERSONS Integration (High Fidelity Suicide Risk Assessment)
  const sadScore = parseInt(document.getElementById("sad-score")?.innerText || "0");
  if (sadScore >= 3) counts["D.0135"] = (counts["D.0135"] || 0) + (sadScore * 2);

  // 4. Validation
  if (Object.keys(counts).length === 0) {
    Swal.fire({
      title: "Data Tidak Lengkap",
      text: "Silakan pilih minimal satu tanda/gejala atau Status Mental untuk melakukan analisis diagnosa.",
      icon: "warning",
      confirmButtonColor: "var(--primary)"
    });
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
      card.style.position = "relative";
      card.style.borderLeft =
        index === 0 ? "5px solid #10B981" : "3px solid #CBD5E1";
      card.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div style="display:flex; align-items:center; gap:12px;">
                        <input type="checkbox" name="as-diag-select" value="${diag.kode || diag.Kode}" style="width:20px; height:20px; cursor:pointer;" ${index === 0 ? "checked" : ""}>
                        <h3 style="margin:0; font-size:1.1rem;">${diag.kode || diag.Kode}: ${diag.nama || diag.Nama}</h3>
                    </div>
                    ${priorityLabel}
                </div>
                <p style="font-size:0.85rem; color:var(--text-muted); margin:0.5rem 0 1rem; padding-left:32px;">${diag.definisi || diag.Definisi}</p>
                <div style="background:#f8fafc; padding:0.75rem; border-radius:8px; margin-left:32px;">
                    <p style="font-size:0.8rem; margin:0;"><strong>Tanda Mayor:</strong> ${diag.tanda_mayor || diag.TandaMayor || "-"}</p>
                </div>
                <div style="display:grid; grid-template-columns: 1fr; gap:0.5rem; margin-top:1rem; padding-left:32px;">
                    <button class="btn btn-ghost" style="font-size:0.75rem; padding:4px 8px;" onclick="goToMSEFromAssessment('${diag.kode || diag.Kode}')"><i data-lucide="user-check"></i> Lihat Panduan MSE</button>
                </div>
            `;
      resultsList.appendChild(card);
    });
    resultsArea.style.display = "block";
    document.getElementById("assessment-bulk-actions").style.display = "block";
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
    ruang: document.getElementById("as-ruang").value || "-",
    tglRawat: document.getElementById("as-tgl-rawat").value || "-",
    nama: document.getElementById("as-nama").value || "-",
    umur: document.getElementById("as-umur").value || "-",
    jk: document.getElementById("as-jk").value,
    norm: document.getElementById("as-norm").value || "-",
    tglPengkajian: document.getElementById("as-tgl-pengkajian").value || "-",
    informan: document.getElementById("as-informan").value || "-",
    alasan: {
        utama: document.getElementById("as-alasan").value || "-",
        keluarga: document.getElementById("as-alasan-keluarga").value || "-",
        hasil: document.getElementById("as-alasan-hasil").value || "-",
    },
    predis: {
      riwayat: document.getElementById("as-predis-riwayat").value,
      obat: document.getElementById("as-predis-obat").value,
      trauma: {
          fisik: Array.from(document.querySelectorAll('input[name^="as-trauma-f"]:checked')).map(cb => cb.value).join("/"),
          seksual: Array.from(document.querySelectorAll('input[name^="as-trauma-s"]:checked')).map(cb => cb.value).join("/"),
          penolakan: Array.from(document.querySelectorAll('input[name^="as-trauma-n"]:checked')).map(cb => cb.value).join("/"),
          kdrt: Array.from(document.querySelectorAll('input[name^="as-trauma-d"]:checked')).map(cb => cb.value).join("/"),
          kriminal: Array.from(document.querySelectorAll('input[name^="as-trauma-k"]:checked')).map(cb => cb.value).join("/"),
      },
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
      genogram: document.getElementById("as-genogram").value || "-",
      konsep: {
          gambaran: document.getElementById("as-konsep-gambaran").value || "-",
          ideal: document.getElementById("as-konsep-ideal").value || "-",
          harga: document.getElementById("as-konsep-harga").value || "-",
          identitas: document.getElementById("as-konsep-identitas").value || "-",
          peran: document.getElementById("as-konsep-peran").value || "-",
      },
      sosial: {
          orang: document.getElementById("as-sosial-orang").value || "-",
          peran: document.getElementById("as-sosial-peran").value || "-",
          hambatan: document.getElementById("as-sosial-hambatan").value || "-",
      },
      spiritual: {
          nilai: document.getElementById("as-spiritual-nilai").value || "-",
          ibadah: document.getElementById("as-spiritual-ibadah").value || "-",
      }
    },
    statusMental: {
        penampilan: getChecked("as-sm-penampilan") + " (" + document.getElementById("as-sm-penampilan-ket").value + ")",
        bicara: getChecked("as-sm-bicara") + " (" + document.getElementById("as-sm-bicara-ket").value + ")",
        motorik: getChecked("as-sm-motorik") + " (" + document.getElementById("as-sm-motorik-ket").value + ")",
        alam: getChecked("as-sm-alam") + " (" + document.getElementById("as-sm-alam-ket").value + ")",
        afek: getChecked("as-sm-afek") + " (" + document.getElementById("as-sm-afek-ket").value + ")",
        interaksi: getChecked("as-sm-interaksi") + " (" + document.getElementById("as-sm-interaksi-ket").value + ")",
        persepsi: getChecked("as-sm-persepsi") + " (" + document.getElementById("as-sm-persepsi-ket").value + ")",
        proses: getChecked("as-sm-proses") + " (" + document.getElementById("as-sm-proses-ket").value + ")",
        isi: getChecked("as-sm-isi") + " Waham: " + getChecked("as-sm-waham") + " (" + document.getElementById("as-sm-isi-ket").value + ")",
        sadar: getChecked("as-sm-sadar") + " Disorient: " + getChecked("as-sm-disorient") + " (" + document.getElementById("as-sm-sadar-ket").value + ")",
        memori: getChecked("as-sm-memori") + " (" + document.getElementById("as-sm-memori-ket").value + ")",
        konsentrasi: getChecked("as-sm-hitung") + " (" + document.getElementById("as-sm-hitung-ket").value + ")",
        penilaian: getChecked("as-sm-nilai") + " (" + document.getElementById("as-sm-nilai-ket").value + ")",
        insight: getChecked("as-sm-tilik") + " (" + document.getElementById("as-sm-tilik-ket").value + ")",
    },
    pulang: {
      makan: document.getElementById("as-pulang-makan").value,
      eliminasi: document.getElementById("as-pulang-eliminasi").value,
      mandi: document.getElementById("as-pulang-mandi").value,
      berhias: document.getElementById("as-pulang-berhias").value,
      istirahat: document.getElementById("as-pulang-istirahat").value,
      obat: document.getElementById("as-pulang-obat").value,
      sehat: document.getElementById("as-pulang-sehat").value,
      dalam: document.getElementById("as-pulang-dalam").value,
      luar: document.getElementById("as-pulang-luar").value,
    },
    koping: {
      adaptif: getChecked("as-koping-ad"),
      maladaptif: getChecked("as-koping-ma"),
    },
    masalah: {
        kelompok: document.getElementById("as-masalah-kelompok").value || "-",
        lingkungan: document.getElementById("as-masalah-lingkungan").value || "-",
        pendidikan: document.getElementById("as-masalah-pendidikan").value || "-",
        pekerjaan: document.getElementById("as-masalah-pekerjaan").value || "-",
        ekonomi: document.getElementById("as-masalah-ekonomi").value || "-",
        kes: document.getElementById("as-masalah-kes").value || "-",
        lain: document.getElementById("as-masalah-lain").value || "-",
    },
    tahu: getChecked("as-tahu"),
    medis: document.getElementById("as-medis").value || "-",
    obat: document.getElementById("as-obat-skrg").value || "-",
  };

  const reportHtml = `
    <div id="print-area" style="padding: 40px; font-family: Arial, sans-serif; color: #000; line-height: 1.5; font-size: 10pt; background: #fff;">
      <div style="text-align: center; border-bottom: 3px double #000; padding-bottom: 10px; margin-bottom: 20px;">
        <h2 style="margin: 0; text-transform: uppercase; font-size: 16pt; font-weight: bold;">PENGKAJIAN KEPERAWATAN KESEHATAN JIWA</h2>
        <p style="margin: 5px 0; font-size: 11pt;">FIK-UI Academic Standard Documentation - JiwaCare System</p>
      </div>

      <table style="width: 100%; margin-bottom: 20px; border: 1px solid #000; border-collapse: collapse;">
        <tr>
            <td style="padding: 5px; border: 1px solid #000; width: 15%; font-weight: bold;">RUANG RAWAT</td>
            <td style="padding: 5px; border: 1px solid #000; width: 35%;">${data.ruang}</td>
            <td style="padding: 5px; border: 1px solid #000; width: 20%; font-weight: bold;">TGL DIRAWAT</td>
            <td style="padding: 5px; border: 1px solid #000; width: 30%;">${data.tglRawat}</td>
        </tr>
      </table>

      <div style="margin-bottom: 15px;">
        <div style="background: #eee; padding: 5px; font-weight: bold; border: 1px solid #000;">I. IDENTITAS KLIEN</div>
        <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="width: 20%; padding: 3px;">Inisial Nama</td><td>: ${data.nama}</td><td style="width: 20%;">Informan</td><td>: ${data.informan}</td></tr>
            <tr><td style="padding: 3px;">Umur / No RM</td><td>: ${data.umur} Thn / ${data.norm}</td><td style="padding: 3px;">Tgl Pengkajian</td><td>: ${data.tglPengkajian}</td></tr>
            <tr><td style="padding: 3px;">Jenis Kelamin</td><td>: ${data.jk}</td><td></td><td></td></tr>
        </table>
      </div>

      <div style="margin-bottom: 15px;">
        <div style="background: #eee; padding: 5px; font-weight: bold; border: 1px solid #000;">II. ALASAN MASUK</div>
        <div style="padding: 5px; border: 1px solid #000; border-top: none;">
            <p><b>1. Keluhan Utama:</b> ${data.alasan.utama}</p>
            <p><b>2. Tindakan Keluarga:</b> ${data.alasan.keluarga}</p>
            <p><b>3. Hasil Tindakan:</b> ${data.alasan.hasil}</p>
        </div>
      </div>

      <div style="margin-bottom: 15px;">
        <div style="background: #eee; padding: 5px; font-weight: bold; border: 1px solid #000;">III. FAKTOR PREDISPOSISI</div>
        <div style="padding: 5px; border: 1px solid #000; border-top: none;">
            <p>1. Riwayat Ggn Jiwa: ${data.predis.riwayat} | Pengobatan: ${data.predis.obat}</p>
            <p>2. Riwayat Trauma: <br>
               - Fisik: ${data.predis.trauma.fisik || "Tidak ada"} <br>
               - Seksual: ${data.predis.trauma.seksual || "Tidak ada"} <br>
               - Penolakan: ${data.predis.trauma.penolakan || "Tidak ada"} <br>
               - KDRT: ${data.predis.trauma.kdrt || "Tidak ada"} <br>
               - Kriminal: ${data.predis.trauma.kriminal || "Tidak ada"}
            </p>
            <p>3. Keluarga Ggn Jiwa: ${data.predis.keluarga} ${data.predis.keluargaDetail ? `(${data.predis.keluargaDetail.hubungan}, Gejala: ${data.predis.keluargaDetail.gejala}, Obat: ${data.predis.keluargaDetail.perawatan})` : ""}</p>
            <p>4. Pengalaman tidak menyenangkan: ${data.predis.unpleasant}</p>
        </div>
      </div>

      <div style="margin-bottom: 15px;">
        <div style="background: #eee; padding: 5px; font-weight: bold; border: 1px solid #000;">IV. PEMERIKSAAN FISIK</div>
        <table style="width: 100%; border-collapse: collapse; text-align: center;">
            <tr style="font-weight: bold;">
                <td style="border: 1px solid #000; padding: 5px;">TD</td><td style="border: 1px solid #000; padding: 5px;">Nadi</td><td style="border: 1px solid #000; padding: 5px;">Suhu</td><td style="border: 1px solid #000; padding: 5px;">RR</td><td style="border: 1px solid #000; padding: 5px;">BB</td><td style="border: 1px solid #000; padding: 5px;">TB</td>
            </tr>
            <tr>
                <td style="border: 1px solid #000; padding: 5px;">${data.fisik.td} mmHg</td><td style="border: 1px solid #000; padding: 5px;">${data.fisik.n} x/m</td><td style="border: 1px solid #000; padding: 5px;">${data.fisik.s} C</td><td style="border: 1px solid #000; padding: 5px;">${data.fisik.p} x/m</td><td style="border: 1px solid #000; padding: 5px;">${data.fisik.bb} kg</td><td style="border: 1px solid #000; padding: 5px;">${data.fisik.tb} cm</td>
            </tr>
        </table>
        <div style="padding: 5px; border: 1px solid #000; border-top: none;">Keluhan Fisik: ${data.fisik.keluhan}</div>
      </div>

      <div style="page-break-before: always; height: 10px;"></div>

      <div style="margin-bottom: 15px;">
        <div style="background: #eee; padding: 5px; font-weight: bold; border: 1px solid #000;">V. PSIKOSOSIAL</div>
        <div style="padding: 5px; border: 1px solid #000; border-top: none;">
            <p><b>1. Genogram (3 Generasi):</b> ${data.psikososial.genogram}</p>
            <p><b>2. Konsep Diri:</b><br>
               - Gambaran Diri: ${data.psikososial.konsep.gambaran}<br>
               - Ideal Diri: ${data.psikososial.konsep.ideal}<br>
               - Harga Diri: ${data.psikososial.konsep.harga}<br>
               - Identitas: ${data.psikososial.konsep.identitas}<br>
               - Peran: ${data.psikososial.konsep.peran}
            </p>
            <p><b>3. Hubungan Sosial:</b><br>
               - Orang Berarti: ${data.psikososial.sosial.orang}<br>
               - Peran Kelompok: ${data.psikososial.sosial.peran}<br>
               - Hambatan: ${data.psikososial.sosial.hambatan}
            </p>
            <p><b>4. Spiritual:</b> Nilai: ${data.psikososial.spiritual.nilai} | Ibadah: ${data.psikososial.spiritual.ibadah}</p>
        </div>
      </div>

      <div style="margin-bottom: 15px;">
        <div style="background: #eee; padding: 5px; font-weight: bold; border: 1px solid #000;">VI. STATUS MENTAL</div>
        <table style="width: 100%; border-collapse: collapse; font-size: 9pt;">
            <tr><td style="border: 1px solid #000; padding: 3px; width: 30%;">1. Penampilan</td><td style="border: 1px solid #000; padding: 3px;">${data.statusMental.penampilan}</td></tr>
            <tr><td style="border: 1px solid #000; padding: 3px;">2. Pembicaraan</td><td style="border: 1px solid #000; padding: 3px;">${data.statusMental.bicara}</td></tr>
            <tr><td style="border: 1px solid #000; padding: 3px;">3. Aktivitas Motorik</td><td style="border: 1px solid #000; padding: 3px;">${data.statusMental.motorik}</td></tr>
            <tr><td style="border: 1px solid #000; padding: 3px;">4. Alam Perasaan</td><td style="border: 1px solid #000; padding: 3px;">${data.statusMental.alam}</td></tr>
            <tr><td style="border: 1px solid #000; padding: 3px;">5. Afek</td><td style="border: 1px solid #000; padding: 3px;">${data.statusMental.afek}</td></tr>
            <tr><td style="border: 1px solid #000; padding: 3px;">6. Interaksi Wawancara</td><td style="border: 1px solid #000; padding: 3px;">${data.statusMental.interaksi}</td></tr>
            <tr><td style="border: 1px solid #000; padding: 3px;">7. Persepsi</td><td style="border: 1px solid #000; padding: 3px;">${data.statusMental.persepsi}</td></tr>
            <tr><td style="border: 1px solid #000; padding: 3px;">8. Proses Pikir</td><td style="border: 1px solid #000; padding: 3px;">${data.statusMental.proses}</td></tr>
            <tr><td style="border: 1px solid #000; padding: 3px;">9. Isi Pikir</td><td style="border: 1px solid #000; padding: 3px;">${data.statusMental.isi}</td></tr>
            <tr><td style="border: 1px solid #000; padding: 3px;">10. Kesadaran</td><td style="border: 1px solid #000; padding: 3px;">${data.statusMental.sadar}</td></tr>
            <tr><td style="border: 1px solid #000; padding: 3px;">11. Memori</td><td style="border: 1px solid #000; padding: 3px;">${data.statusMental.memori}</td></tr>
            <tr><td style="border: 1px solid #000; padding: 3px;">12. Konsentrasi</td><td style="border: 1px solid #000; padding: 3px;">${data.statusMental.konsentrasi}</td></tr>
            <tr><td style="border: 1px solid #000; padding: 3px;">13. Penilaian</td><td style="border: 1px solid #000; padding: 3px;">${data.statusMental.penilaian}</td></tr>
            <tr><td style="border: 1px solid #000; padding: 3px;">14. Daya Tilik Diri</td><td style="border: 1px solid #000; padding: 3px;">${data.statusMental.insight}</td></tr>
        </table>
      </div>

      <div style="margin-bottom: 15px;">
        <div style="background: #eee; padding: 5px; font-weight: bold; border: 1px solid #000;">VII. KEBUTUHAN PERSIAPAN PULANG</div>
        <div style="padding: 5px; border: 1px solid #000; border-top: none;">
            <p>ADL Mandiri: Makan(${data.pulang.makan}), Eliminasi(${data.pulang.eliminasi}), Mandi(${data.pulang.mandi}), Berpakaian(${data.pulang.berhias}), Istirahat(${data.pulang.istirahat}), Obat(${data.pulang.obat})</p>
            <p>Persiapan lain: Sehat(${data.pulang.sehat}), Kegiatan Rumah(${data.pulang.dalam}), Kegiatan Luar(${data.pulang.luar})</p>
        </div>
      </div>

      <div style="margin-bottom: 15px;">
        <div style="background: #eee; padding: 5px; font-weight: bold; border: 1px solid #000;">VIII. MEKANISME KOPING</div>
        <div style="padding: 5px; border: 1px solid #000; border-top: none;">
            <p>Adaptif: ${data.koping.adaptif || "-"}</p>
            <p>Maladaptif: ${data.koping.maladaptif || "-"}</p>
        </div>
      </div>

      <div style="margin-bottom: 15px;">
        <div style="background: #eee; padding: 5px; font-weight: bold; border: 1px solid #000;">IX. MASALAH PSIKOSOSIAL & LINGKUNGAN</div>
        <div style="padding: 5px; border: 1px solid #000; border-top: none; font-size: 9pt;">
            <p>Dukungan Kelompok: ${data.masalah.kelompok} | Lingkungan: ${data.masalah.lingkungan}</p>
            <p>Pendidikan: ${data.masalah.pendidikan} | Pekerjaan: ${data.masalah.pekerjaan}</p>
            <p>Ekonomi: ${data.masalah.ekonomi} | Pelayanan Kes: ${data.masalah.kes}</p>
            <p>Lainnya: ${data.masalah.lain}</p>
        </div>
      </div>

      <div style="margin-bottom: 15px;">
        <div style="background: #eee; padding: 5px; font-weight: bold; border: 1px solid #000;">X. PENGETAHUAN KURANG TENTANG</div>
        <div style="padding: 5px; border: 1px solid #000; border-top: none;">${data.tahu || "-"}</div>
      </div>

      <div style="margin-bottom: 15px;">
        <div style="background: #eee; padding: 5px; font-weight: bold; border: 1px solid #000;">XI. ASPEK MEDIK</div>
        <div style="padding: 5px; border: 1px solid #000; border-top: none;">
            <p><b>Diagnosa Medis:</b> ${data.medis}</p>
            <p><b>Terapi:</b> ${data.obat}</p>
        </div>
      </div>

      <div style="margin-top: 30px; display: flex; justify-content: space-around; text-align: center;">
        <div style="width: 200px;">
            Klien / Keluarga<br><br><br><br>
            ( ___________________ )
        </div>
        <div style="width: 200px;">
            Jakarta, ${new Date().toLocaleDateString('id-ID')}<br>
            Perawat yang mengkaji<br><br><br><br>
            ( ___________________ )
        </div>
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

window.createAskepWithMultipleDiagnoses = function () {
  const selectedDx = Array.from(document.querySelectorAll('input[name="as-diag-select"]:checked')).map(cb => cb.value);
  
  if (selectedDx.length === 0) {
      Swal.fire("Peringatan", "Pilih minimal satu diagnosa untuk dilanjutkan ke ASKEP!", "warning");
      return;
  }

  const selectedSymptoms = document.querySelectorAll('input[name="as-symptoms"]:checked');
  const standardSymptoms = document.querySelectorAll('input[name="symptoms"]');

  // Sync symptoms
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
    
    // Auto-check requested diagnoses in ASKEP generator
    setTimeout(() => {
        selectedDx.forEach(kode => {
            const dxCb = document.getElementById(`dx-${kode}`);
            if (dxCb) dxCb.checked = true;
        });
        // Trigger SIKI update if the function exists (it's inside a closure in initASKEPGenerator, so we might need to trigger a change event)
        const firstDx = document.querySelector('input[name="selected-sdki"]');
        if (firstDx) {
            const event = new Event('change', { bubbles: true });
            firstDx.dispatchEvent(event);
        }
    }, 500);
  }, 300);
};

window.resetAssessmentForm = function () {
  // Clear Edit Mode State
  window.editingAsHistoryIndex = -1;
  const editIndicator = document.getElementById("as-edit-mode-indicator");
  if (editIndicator) editIndicator.style.display = "none";
  const saveBtn = document.getElementById("as-save-btn");
  if (saveBtn) saveBtn.innerHTML = '<i data-lucide="save"></i> Simpan Data';
  if (window.lucide) lucide.createIcons();

  const ids = [
    "as-ruang", "as-tgl-rawat", "as-nama", "as-umur", "as-norm", "as-tgl-pengkajian", "as-informan",
    "as-alasan", "as-alasan-keluarga", "as-alasan-hasil",
    "as-predis-unpleasant", "as-fam-relation", "as-fam-gejala", "as-fam-obat",
    "as-td", "as-nadi", "as-suhu", "as-rr", "as-bb", "as-tb", "as-fisik-keluhan",
    "as-genogram", "as-konsep-gambaran", "as-konsep-ideal", "as-konsep-harga", "as-konsep-identitas", "as-konsep-peran",
    "as-sosial-orang", "as-sosial-peran", "as-sosial-hambatan",
    "as-spiritual-nilai", "as-spiritual-ibadah",
    "as-sm-penampilan-ket", "as-sm-bicara-ket", "as-sm-motorik-ket", "as-sm-alam-ket", "as-sm-afek-ket", 
    "as-sm-interaksi-ket", "as-sm-persepsi-ket", "as-sm-proses-ket", "as-sm-isi-ket", "as-sm-sadar-ket",
    "as-sm-memori-ket", "as-sm-hitung-ket", "as-sm-nilai-ket", "as-sm-tilik-ket",
    "as-masalah-kelompok", "as-masalah-lingkungan", "as-masalah-pendidikan", "as-masalah-pekerjaan", "as-masalah-ekonomi", "as-masalah-kes", "as-masalah-lain",
    "as-medis", "as-obat-skrg"
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
    "as-pulang-sehat",
    "as-pulang-dalam",
    "as-pulang-luar"
  ];
  selects.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.selectedIndex = 0;
  });

  const checkGroups = [
    "as-trauma-f-p", "as-trauma-f-k", "as-trauma-f-s",
    "as-trauma-s-p", "as-trauma-s-k", "as-trauma-s-s",
    "as-trauma-n-p", "as-trauma-n-k", "as-trauma-n-s",
    "as-trauma-d-p", "as-trauma-d-k", "as-trauma-d-s",
    "as-trauma-k-p", "as-trauma-k-k", "as-trauma-k-s",
    "as-sm-penampilan", "as-sm-bicara", "as-sm-motorik", "as-sm-alam", "as-sm-afek", 
    "as-sm-interaksi", "as-sm-persepsi", "as-sm-proses", "as-sm-isi", "as-sm-waham",
    "as-sm-sadar", "as-sm-disorient", "as-sm-memori", "as-sm-hitung", "as-sm-nilai", "as-sm-tilik",
    "as-koping-ad", "as-koping-ma",
    "as-tahu", "as-symptoms"
  ];

  checkGroups.forEach(name => {
    document.querySelectorAll(`input[name="${name}"], input[name^="as-trauma"]`).forEach(cb => cb.checked = false);
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
  console.log("Panduan Pengisian clicked...");
  Swal.fire({
    title: "Panduan Teknis Pengkajian Jiwa (FIK-UI)",
    html: `
            <div style="text-align: left; font-size: 0.85rem; max-height: 600px; overflow-y: auto; padding: 25px; line-height: 1.8; background: #fff; color: #334155;">
                <div style="background: #f0f9ff; border: 1px solid #bae6fd; padding: 15px; border-radius: 8px; margin-bottom: 25px; border-left: 5px solid #0ea5e9;">
                    <strong style="color: #0369a1; display: block; margin-bottom: 5px;">PENGANTAR:</strong>
                    Setiap melakukan pengkajian, perawat wajib mencantumkan tempat klien dirawat dan tanggal dirawat secara presisi.
                </div>

                <h4 style="color: #0ea5e9; border-bottom: 2px solid #e0f2fe; padding-bottom: 8px; margin-top: 20px; font-weight: 800; text-transform: uppercase;">I. IDENTITAS KLIEN</h4>
                <p style="margin-top: 10px;">
                    1. Perawat yang merawat klien melakukan perkenalan dan kontrak dengan Klien tentang: nama perawat, nama klien, panggilan perawat, panggilan klien, tujuan, waktu, tempat pertemuan, topik yang akan dibicarakan.<br>
                    2. Usia dan No RM: Lihat pada Rekam Medis (RM).<br>
                    3. Mahasiswa/Perawat menuliskan sumber data yang didapat.
                </p>

                <h4 style="color: #0ea5e9; border-bottom: 2px solid #e0f2fe; padding-bottom: 8px; margin-top: 30px; font-weight: 800; text-transform: uppercase;">II. ALASAN MASUK</h4>
                <p style="margin-top: 10px;">
                    Tanyakan kepada klien / keluarga:<br>
                    1. Apa yang menyebabkan klien / keluarga datang ke Rumah Sakit saat ini?<br>
                    2. Apa yang sudah dilakukan oleh keluarga mengatasi masalah ini?<br>
                    3. Bagaimana hasilnya?
                </p>

                <h4 style="color: #0ea5e9; border-bottom: 2px solid #e0f2fe; padding-bottom: 8px; margin-top: 30px; font-weight: 800; text-transform: uppercase;">III. FAKTOR PREDISPOSISI</h4>
                <p style="margin-top: 10px;">
                    1. Pernah ggn jiwa masa lalu? Kaji hasil pengobatan: <b>Berhasil</b> (adaptasi tanpa gejala), <b>Kurang Berhasil</b> (adaptasi dengan gejala sisa), <b>Tidak Berhasil</b> (gejala menetap/bertambah).<br>
                    2. <b>Trauma:</b> Kaji apakah klien sebagai Pelaku, Korban, atau Saksi (Fisik, Seksual, Penolakan, KDRT, Kriminal). Isi usia saat kejadian. Beri penjelasan singkat kejadian.<br>
                    3. <b>Keluarga:</b> Jika ada ggn jiwa, tanyakan hubungan, gejala, serta riwayat pengobatan/perawatan.<br>
                    4. <b>Pengalaman Tidak Menyenangkan:</b> Kegagalan, kehilangan, perpisahan, kematian, atau trauma tumbuh kembang.
                </p>

                <h4 style="color: #0ea5e9; border-bottom: 2px solid #e0f2fe; padding-bottom: 8px; margin-top: 30px; font-weight: 800; text-transform: uppercase;">IV. FISIK</h4>
                <p style="margin-top: 10px;">
                    1. Ukur TTV: Tekanan darah, nadi, suhu, pernapasan.<br>
                    2. Ukur Tinggi Badan dan Berat Badan.<br>
                    3. Tanyakan keluhan fisik. Kaji lebih lanjut sistem organ dan jelaskan sesuai keluhan.
                </p>

                <h4 style="color: #0ea5e9; border-bottom: 2px solid #e0f2fe; padding-bottom: 8px; margin-top: 30px; font-weight: 800; text-transform: uppercase;">V. PSIKOSOSIAL</h4>
                <p style="margin-top: 10px;">
                    1. <b>Genogram:</b> Buat minimal 3 generasi. Jelaskan masalah komunikasi, pengambilan keputusan, dan pola asuh.<br>
                    2. <b>Konsep Diri:</b><br>
                       • Gambaran diri: Persepsi terhadap tubuh, bagian yang disukai/tidak.<br>
                       • Identitas: Kepuasan terhadap status/posisi (sekolah, kerja, gender).<br>
                       • Peran: Tugas/peran diemban & kemampuan melaksanakannya.<br>
                       • Ideal diri: Harapan thd tubuh, status, penyakit, & lingkungan.<br>
                       • Harga diri: Penilaian/penghargaan orang lain thd diri.<br>
                    3. <b>Hubungan Sosial:</b> Siapa orang berarti? Kelompok diikuti? Sejauh mana keterlibatan?<br>
                    4. <b>Spiritual:</b> Nilai/Keyakinan & Kegiatan ibadah (individu/kelompok).
                </p>

                <h4 style="color: #0ea5e9; border-bottom: 2px solid #e0f2fe; padding-bottom: 8px; margin-top: 30px; font-weight: 800; text-transform: uppercase;">VI. STATUS MENTAL</h4>
                <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; margin-top: 10px;">
                    <p><b>1. Penampilan:</b><br>
                    - <b>Tidak rapi:</b> Jika dari ujung rambut sampai kaki ada yang tidak rapi (rambut acak-acakan, kancing tidak tepat, resleting terbuka, baju terbalik, baju tidak diganti).<br>
                    - <b>Pakaian tidak sesuai:</b> Misal pakaian dalam dipakai di luar baju.<br>
                    - <b>Cara berpakaian tidak seperti biasa:</b> Penggunaan pakaian tidak tepat (waktu, tempat, identitas, situasi/kondisi).</p>

                    <p><b>2. Pembicaraan:</b><br>
                    - Amati: Apakah cepat, keras, gagap, membisu, apatis, dan atau lambat.<br>
                    - <b>Inkoheren:</b> Pembicaraan berpindah-pindah dari satu kalimat ke kalimat lain yang tak ada kaitannya.</p>

                    <p><b>3. Aktivitas Motorik:</b><br>
                    - <b>Agitasi:</b> Gerakan motorik yang menunjukkan kegelisahan.<br>
                    - <b>Tik:</b> Gerakan kecil pada otot muka yang tidak terkontrol.<br>
                    - <b>Grimasen:</b> Gerakan otot muka berubah-ubah tak dikontrol.<br>
                    - <b>Tremor:</b> Jari gemetar ketika klien menjulurkan tangan.<br>
                    - <b>Kompulsif:</b> Kegiatan berulang-ulang (cuci tangan, mandi, dll).</p>

                    <p><b>4. Alam Perasaan:</b><br>
                    - <b>Ketakutan:</b> Objek yang ditakuti sudah jelas.<br>
                    - <b>Khawatir:</b> Objeknya belum jelas.</p>

                    <p><b>5. Afek:</b><br>
                    - <b>Datar:</b> Tidak ada roman muka saat stimulus senang/sedih.<br>
                    - <b>Tumpul:</b> Hanya bereaksi bila ada stimulus emosi yang kuat.<br>
                    - <b>Labil:</b> Emosi yang cepat berubah-ubah.<br>
                    - <b>Tidak Sesuai:</b> Emosi bertentangan dengan stimulus.</p>

                    <p><b>6. Interaksi selama wawancara:</b><br>
                    - <b>Kontak mata kurang:</b> Tidak mau menatap lawan bicara.<br>
                    - <b>Defensif:</b> Berusaha mempertahankan pendapat dan kebenaran dirinya.<br>
                    - <b>Curiga:</b> Sikap/perasaan tidak percaya pada orang lain.</p>

                    <p><b>7. Persepsi:</b><br>
                    - Amati jenis halusinasi, isi, frekuensi, dan gejala yang tampak saat klien berhalusinasi.</p>

                    <p><b>8. Proses Pikir:</b><br>
                    - <b>Sirkumstansial:</b> Berbelit-belit tapi sampai pada tujuan.<br>
                    - <b>Tangensial:</b> Berbelit-belit tapi tidak sampai pada tujuan.<br>
                    - <b>Kehilangan Asosiasi:</b> Tak ada hubungan antar kalimat, klien tidak menyadari.<br>
                    - <b>Flight of ideas:</b> Topik meloncat-loncat, hubungan tidak logis.<br>
                    - <b>Blocking:</b> Terhenti tiba-tiba tanpa gangguan eksternal.<br>
                    - <b>Perseverasi:</b> Pembicaraan diulang berkali-kali.</p>

                    <p><b>9. Isi Pikir:</b><br>
                    - <b>Obsesi:</b> Pikiran selalu muncul walau berusaha dihilangkan.<br>
                    - <b>Phobia:</b> Ketakutan patologis/tidak logis.<br>
                    - <b>Hipokondria:</b> Keyakinan gangguan organ tubuh yang sebenarnya tidak ada.<br>
                    - <b>Depersonalisasi:</b> Perasaan asing terhadap diri sendiri/lingkungan.<br>
                    - <b>Ide Terkait:</b> Keyakinan kejadian lingkungan terkait pada dirinya.<br>
                    - <b>Pikiran Magis:</b> Keyakinan melakukan hal mustahil.<br>
                    - <b>Waham:</b> Agama, Somatik, Kebesaran, Curiga, Nihilistik.<br>
                    - <b>Waham Bizar:</b> Sisip Pikir, Siar Pikir, Kontrol Pikir.</p>

                    <p><b>10. Tingkat Kesadaran:</b><br>
                    - <b>Bingung:</b> Tampak bingung dan kacau.<br>
                    - <b>Sedasi:</b> Merasa melayang-layang antara sadar/tidak sadar.<br>
                    - <b>Stupor:</b> Kekakuan motorik, sikap canggung dipertahankan.<br>
                    - <b>Orientasi:</b> Waktu, tempat, orang.</p>

                    <p><b>11. Memori:</b><br>
                    - <b>Jangka Panjang:</b> Kejadian > 1 bulan.<br>
                    - <b>Jangka Pendek:</b> Kejadian 1 minggu terakhir.<br>
                    - <b>Saat ini:</b> Kejadian yang baru saja terjadi.<br>
                    - <b>Konfabulasi:</b> Memasukkan cerita tidak benar.</p>

                    <p><b>12. Konsentrasi & Berhitung:</b><br>
                    - <b>Mudah dialihkan:</b> Perhatian mudah berganti objek.<br>
                    - <b>Tidak mampu konsentrasi:</b> Minta pertanyaan diulang.<br>
                    - <b>Tidak mampu berhitung:</b> Tak bisa tambah/kurang benda nyata.</p>

                    <p><b>13. Kemampuan Penilaian:</b><br>
                    - <b>Ringan:</b> Bisa ambil keputusan sederhana dengan bantuan.<br>
                    - <b>Bermakna:</b> Tidak mampu mengambil keputusan walaupun dibantu.</p>

                    <p><b>14. Daya Tilik Diri (Insight):</b><br>
                    - <b>Mengingkari:</b> Tidak merasa sakit/butuh bantuan.<br>
                    - <b>Menyalahkan hal di luar dirinya:</b> Menyalahkan orang lain/lingkungan.</p>
                </div>

                <h4 style="color: #0ea5e9; border-bottom: 2px solid #e0f2fe; padding-bottom: 8px; margin-top: 30px; font-weight: 800; text-transform: uppercase;">VII. KEBUTUHAN PERSIAPAN PULANG</h4>
                <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; margin-top: 10px;">
                    <p>1. <b>Makan & BAB/BAK:</b> Mandiri menyiapkan, membersihkan alat, & kebersihan diri.<br>
                    2. <b>Mandi & Berpakaian:</b> Frekuensi, cara, kebersihan tubuh, memilih & mengenakan pakaian.<br>
                    3. <b>Istirahat/Tidur:</b> Lama tidur, persiapan (doa/cuci kaki), kegiatan sesudah tidur.<br>
                    4. <b>Obat:</b> Frekuensi, jenis, dosis, waktu, cara, & reaksi obat.<br>
                    5. <b>Pemeliharaan Kesehatan:</b> Perawatan lanjut & sistem pendukung.<br>
                    6. <b>Kegiatan Rumah:</b> Merencanakan makan, merapikan rumah, mencuci, biaya harian.<br>
                    7. <b>Kegiatan Luar:</b> Belanja, transportasi mandiri, bayar tagihan.</p>
                </div>

                <h4 style="color: #0ea5e9; border-bottom: 2px solid #e0f2fe; padding-bottom: 8px; margin-top: 30px; font-weight: 800; text-transform: uppercase;">VIII. MEKANISME KOPING</h4>
                <p style="margin-top: 10px;">Identifikasi koping Adaptif vs Maladaptif yang dimiliki klien/keluarga.</p>

                <h4 style="color: #0ea5e9; border-bottom: 2px solid #e0f2fe; padding-bottom: 8px; margin-top: 30px; font-weight: 800; text-transform: uppercase;">IX. MASALAH PSIKOSOSIAL & LINGKUNGAN</h4>
                <p style="margin-top: 10px;">Uraikan masalah secara spesifik, singkat, dan jelas pada tiap item yang dimiliki klien.</p>

                <h4 style="color: #0ea5e9; border-bottom: 2px solid #e0f2fe; padding-bottom: 8px; margin-top: 30px; font-weight: 800; text-transform: uppercase;">X. PENGETAHUAN</h4>
                <p style="margin-top: 10px;">Simpulkan tingkat pengetahuan klien terhadap penyakit, obat, dan perawatan jiwa.</p>

                <h4 style="color: #0ea5e9; border-bottom: 2px solid #e0f2fe; padding-bottom: 8px; margin-top: 30px; font-weight: 800; text-transform: uppercase;">XI. ASPEK MEDIK</h4>
                <p style="margin-top: 10px;">Cantumkan Diagnosa Medis (Axis I-V) dan daftar psikofarmaka serta terapi fisik lainnya.</p>
            </div>
        `,
    width: "700px",
    confirmButtonText: "Saya Mengerti",
    confirmButtonColor: "#0ea5e9",
    icon: "info",
  });
};
