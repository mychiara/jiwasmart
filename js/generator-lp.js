/**
 * ASKEP JIWA SMART - Generator LP
 */

window.initLPGenerator = function () {
  const lpSelect = document.getElementById("lp-select");
  if (!lpSelect) return;

  // Populate LP Dropdown
  DATASET.lp.forEach((item) => {
    const opt = document.createElement("option");
    opt.value = item.id;
    opt.textContent = item.nama;
    lpSelect.appendChild(opt);
  });

  document.getElementById("generate-lp-btn").addEventListener("click", () => {
    const selectedId = lpSelect.value;
    const mhsNama = escapeHTML(document.getElementById("lp-mhs-nama").value);
    const mhsNim = escapeHTML(document.getElementById("lp-mhs-nim").value);
    const mhsKampus = escapeHTML(
      document.getElementById("lp-mhs-kampus").value,
    );

    if (!selectedId || !mhsNama || !mhsNim || !mhsKampus) {
      Swal.fire(
        "Peringatan",
        "Silakan isi data mahasiswa dan pilih kasus terlebih dahulu!",
        "warning",
      );
      return;
    }

    showLoader();
    const lp = DATASET.lp.find((l) => l.id === selectedId);

    setTimeout(() => {
      const outputArea = document.getElementById("lp-output-area");
      const resultDiv = document.getElementById("lp-result");

      outputArea.style.display = "block";
      resultDiv.innerHTML = `
                <div class="report-header" style="text-align: center; border-bottom: 2px solid #333; padding-bottom: 1rem; margin-bottom: 2rem;">
                    <div style="font-size: 1.5rem; font-weight: 800; letter-spacing: 1px;">LAPORAN PENDAHULUAN (LP)</div>
                    <div style="font-size: 1.2rem; font-weight: 700; color: var(--primary); margin-top: 0.5rem; text-transform: uppercase;">${lp.nama}</div>
                    <div style="margin-top: 1.5rem; display: grid; grid-template-columns: 1fr 1fr; text-align: left; font-size: 0.9rem; border: 1px solid #ddd; padding: 1rem; border-radius: 8px; background: #fff;">
                        <div>
                            <p><strong>Nama Mahasiswa:</strong> ${mhsNama}</p>
                            <p><strong>NIM:</strong> ${mhsNim}</p>
                        </div>
                        <div style="text-align: right;">
                            <p><strong>Institusi:</strong> ${mhsKampus}</p>
                            <p><strong>Tanggal:</strong> ${new Date().toLocaleDateString("id-ID")}</p>
                        </div>
                    </div>
                </div>

                <div class="report-section"><h4>I. Definisi</h4><div class="clinical-content">${formatClinicalText(lp.definisi)}</div></div>
                <div class="report-section"><h4>II. Etiologi</h4><div class="clinical-content">${formatClinicalText(lp.etiologi)}</div></div>
                <div class="report-section"><h4>III. Manifestasi Klinis</h4><div class="clinical-content">${formatClinicalText(lp.manifestasi_klinis)}</div></div>
                <div class="report-section"><h4>IV. Patofisiologi (Psikopatologi)</h4><div class="clinical-content">${formatClinicalText(lp.patofisiologi)}</div></div>
                <div class="report-section"><h4>V. Tanda dan Gejala</h4><div class="clinical-content">${formatClinicalText(lp.tanda_gejala)}</div></div>
                <div class="report-section"><h4>VI. Pemeriksaan Penunjang</h4><div class="clinical-content">${formatClinicalText(lp.pemeriksaan_penunjang)}</div></div>
                <div class="report-section"><h4>VII. Penatalaksanaan Medis</h4><div class="clinical-content">${formatClinicalText(lp.penatalaksanaan_medis)}</div></div>

                <div class="report-section">
                    <h4>VIII. Pathway</h4>
                    <div class="pathway-diagram" style="margin: 1.5rem 0; padding: 1.5rem; background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;">
                       ${
                         lp.pathway_diagram
                           ? lp.pathway_diagram
                               .map(
                                 (step, idx) => `
                        <div style="display:flex; flex-direction:column; align-items:center;">
                            <div style="padding:0.75rem 1.25rem; background:white; border:2px solid var(--primary); border-radius:8px; font-weight:600; font-size:0.9rem; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">${step.from}</div>
                            ${idx < lp.pathway_diagram.length - 1 || step.to ? `<div style="height:20px; width:2px; background:var(--primary-soft); margin:4px 0;"></div>` : ""}
                            ${idx === lp.pathway_diagram.length - 1 && step.to ? `<div style="padding:0.75rem 1.25rem; background:var(--primary); color:white; border-radius:8px; font-weight:600; font-size:0.9rem;">${step.to}</div>` : ""}
                        </div>
                       `,
                               )
                               .join("")
                           : "<p>" + lp.pathway + "</p>"
                       }
                    </div>
                </div>

                <div class="report-section"><h4>IX. Fokus Pengkajian Keperawatan</h4><div class="clinical-content">${formatClinicalText(lp.fokus_pengkajian)}</div></div>
                <div class="report-section"><h4>X. Rentang Respon</h4><div class="clinical-content">${formatClinicalText(lp.rentang_respon)}</div></div>
                <div class="report-section"><h4>XI. Mekanisme Koping</h4><div class="clinical-content">${formatClinicalText(lp.mekanisme_koping)}</div></div>

                <div class="report-section">
                    <h4>XII. Pohon Masalah (Visualisasi Hierarchy)</h4>
                    <div style="background: #f1f5f9; padding: 1.5rem; border-radius: 12px; border: 1px dashed #cbd5e1; text-align: center; font-weight: 700;">
                        ${
                          lp.pohon_masalah
                            ? lp.pohon_masalah
                                .split("<-")
                                .map(
                                  (item, i) => `
                            <div style="padding: 0.75rem; background: ${i === 1 ? "var(--primary)" : "white"}; color: ${i === 1 ? "white" : "black"}; border-radius: 8px; display: inline-block; min-width: 150px; border: 1px solid #ddd; margin: 0.5rem 0;">${item.trim()}</div>
                            ${i < lp.pohon_masalah.split("<-").length - 1 ? '<div style="font-size: 1.5rem; color: var(--primary);">↑</div>' : ""}
                        `,
                                )
                                .join("")
                            : "Data tidak tersedia"
                        }
                    </div>
                </div>

                <div class="report-section"><h4>XIII. Daftar Masalah Keperawatan</h4><ul style="padding-left: 1.5rem;">${lp.masalah_keperawatan ? lp.masalah_keperawatan.map((m) => `<li>${m}</li>`).join("") : "<li>-</li>"}</ul></div>
                <div class="report-section"><h4>XIV. Strategi Pelaksanaan (SP) Pasien</h4><div style="background: #f8fafc; padding: 1.25rem; border-radius: 12px; border-left: 4px solid var(--primary);"><div class="clinical-content" style="line-height:1.6;">${formatClinicalText(lp.sp_pasien)}</div></div></div>
                <div class="report-section"><h4>XV. Strategi Pelaksanaan (SP) Keluarga</h4><div style="background: #f8fafc; padding: 1.25rem; border-radius: 12px; border-left: 4px solid var(--accent);"><div class="clinical-content" style="line-height:1.6;">${formatClinicalText(lp.sp_keluarga)}</div></div></div>
                <div class="report-section"><h4>XVI. Discharge Planning</h4><ul style="padding-left: 1.5rem; line-height:1.7;">${(
                  lp.discharge_planning || "-"
                )
                  .split(". ")
                  .map((item) => (item ? `<li>${item}</li>` : ""))
                  .join("")}</ul></div>
                <div class="report-section"><h4>XVII. Intervensi Edukasi Keluarga</h4><div class="clinical-content">${formatClinicalText(lp.edukasi_keluarga)}</div></div>

                <div class="report-section">
                    <h4>XVIII. Referensi Psikofarmaka</h4>
                    <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap:1rem;">
                        ${(lp.obat_rekomendasi || [])
                          .map((drugName) => {
                            const drug = DATASET.obat.find(
                              (o) => o.nama === drugName,
                            );
                            return drug
                              ? `
                                <div style="border: 1px solid #e2e8f0; padding: 1rem; border-radius: 12px; background:white;">
                                    <div style="color:var(--primary); font-weight:700; margin-bottom:0.25rem;">${drug.nama}</div>
                                    <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.5rem;">${drug.jenis} | ${drug.dosis}</div>
                                    <p style="margin:0; font-size:0.8rem;">${drug.indikasi}</p>
                                </div>`
                              : "";
                          })
                          .join("")}
                    </div>
                </div>

                <div class="report-section" style="margin-top: 2rem; border-top: 1px solid #eee; padding-top: 1rem;">
                    <h4 style="font-size: 0.9rem; color: var(--text-muted);"><i data-lucide="book-open" style="width:14px; height:14px; vertical-align:middle;"></i> Referensi Pustaka</h4>
                    <ul style="font-size: 0.8rem; color: var(--text-muted); padding-left: 1.2rem; line-height: 1.6;">
                        ${(lp.referensi || ["PPNI (2016). Standar Diagnosis Keperawatan Indonesia", "Stuart, G.W. (2013). Keperawatan Jiwa"]).map((ref) => `<li>${ref}</li>`).join("")}
                    </ul>
                </div>
                <div style="margin-top: 3rem; text-align: right; font-style: italic; color: #94a3b8; font-size: 0.85rem;">Dibuat secara otomatis oleh ASKep Jiwa Smart - ${new Date().toLocaleDateString("id-ID")}</div>
            `;
      outputArea.style.display = "block";
      hideLoader();
      if (typeof lucide !== "undefined") lucide.createIcons();
      resultDiv.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  });
};
