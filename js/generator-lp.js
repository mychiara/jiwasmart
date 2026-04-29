/**
 * ASKEP JIWA SMART - Generator LP
 */

window.initLPGenerator = function () {
  const lpSelect = document.getElementById("lp-select");
  if (!lpSelect) return;

  // Populate LP Dropdown with Categories
  const categories = [...new Set(DATASET.lp.map((item) => item.kategori))];

  categories.forEach((cat) => {
    const group = document.createElement("optgroup");
    group.label = cat || "Lainnya";

    DATASET.lp
      .filter((item) => item.kategori === cat)
      .forEach((item) => {
        const opt = document.createElement("option");
        opt.value = item.id;
        opt.textContent = item.nama;
        group.appendChild(opt);
      });

    lpSelect.appendChild(group);
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
                <div id="print-area-lp" class="font-['Inter'] p-8 bg-white text-slate-800 shadow-xl mx-auto rounded-xl border border-slate-200">
                    <!-- HEADER -->
                    <div class="text-center mb-8 pb-6 border-b-4 border-slate-800">
                        <h2 class="text-3xl font-black uppercase tracking-widest text-slate-900 mb-1">LAPORAN PENDAHULUAN (LP)</h2>
                        <h3 class="text-xl font-bold text-blue-700 mt-2 uppercase tracking-widest px-4 py-1 bg-blue-50 inline-block rounded-full">${lp.nama}</h3>
                    </div>

                    <!-- IDENTITAS MAHASISWA -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
                        <div>
                            <p class="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-1">Nama Mahasiswa</p>
                            <p class="text-lg font-black text-slate-800 capitalize">${mhsNama}</p>
                            <p class="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-4 mb-1">Nomor Induk Mahasiswa (NIM)</p>
                            <p class="text-lg font-black text-slate-800 uppercase">${mhsNim}</p>
                        </div>
                        <div class="md:text-right">
                            <p class="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-1">Institusi Pendidikan</p>
                            <p class="text-lg font-black text-slate-800 uppercase">${mhsKampus}</p>
                            <p class="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-4 mb-1">Tanggal Penyusunan</p>
                            <p class="text-lg font-black text-slate-800">${new Date().toLocaleDateString("id-ID")}</p>
                        </div>
                    </div>

                    <!-- KONSEP MEDIS -->
                    <div class="mb-10">
                        <div class="bg-blue-800 text-white font-bold px-5 py-2.5 mb-6 uppercase inline-block font-black text-sm rounded shadow-md tracking-widest">A. Konsep Dasar Medis</div>
                        
                        <div class="space-y-5">
                            <div class="bg-white p-5 rounded-lg border border-slate-200 shadow-sm border-l-4 border-l-blue-500">
                                <h5 class="font-black text-blue-800 text-sm mb-3 uppercase tracking-wider flex items-center gap-2">I. Definisi Klinis</h5>
                                <div class="text-sm text-slate-700 leading-relaxed font-medium text-justify">${formatClinicalText(lp.definisi)}</div>
                            </div>
                            
                            <div class="bg-white p-5 rounded-lg border border-slate-200 shadow-sm border-l-4 border-l-indigo-500">
                                <h5 class="font-black text-indigo-800 text-sm mb-3 uppercase tracking-wider">II. Etiologi & Faktor Predisposisi</h5>
                                <div class="text-sm text-slate-700 leading-relaxed font-medium text-justify">${formatClinicalText(lp.etiologi || lp.etiology)}</div>
                            </div>
                            
                            <div class="bg-white p-5 rounded-lg border border-slate-200 shadow-sm border-l-4 border-l-amber-500">
                                <h5 class="font-black text-amber-800 text-sm mb-3 uppercase tracking-wider">III. Manifestasi Klinis</h5>
                                <div class="text-sm text-slate-700 leading-relaxed font-medium text-justify">${formatClinicalText(lp.manifestasi_klinis)}</div>
                            </div>
                            
                            <div class="bg-white p-5 rounded-lg border border-slate-200 shadow-sm border-l-4 border-l-red-500">
                                <h5 class="font-black text-red-800 text-sm mb-3 uppercase tracking-wider">IV. Patofisiologi Dasar</h5>
                                <div class="text-sm text-slate-700 leading-relaxed font-medium text-justify">${formatClinicalText(lp.patofisiologi)}</div>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div class="bg-white p-5 rounded-lg border border-slate-200 shadow-sm border-l-4 border-l-teal-500">
                                    <h5 class="font-black text-teal-800 text-sm mb-3 uppercase tracking-wider">V. Pemeriksaan Penunjang</h5>
                                    <div class="text-sm text-slate-700 leading-relaxed font-medium">${formatClinicalText(lp.pemeriksaan_penunjang)}</div>
                                </div>
                                <div class="bg-white p-5 rounded-lg border border-slate-200 shadow-sm border-l-4 border-l-emerald-500">
                                    <h5 class="font-black text-emerald-800 text-sm mb-3 uppercase tracking-wider">VI. Penatalaksanaan Medis</h5>
                                    <div class="text-sm text-slate-700 leading-relaxed font-medium">${formatClinicalText(lp.penatalaksanaan_medis)}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- CLINICAL PATHWAY -->
                    <div class="mb-10">
                        <div class="bg-slate-800 text-white font-bold px-5 py-2.5 mb-6 uppercase inline-block font-black text-sm rounded shadow-md tracking-widest">B. Clinical Pathway</div>
                        <div class="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-inner flex flex-col items-center">
                            ${
                              lp.pathway_diagram
                                ? lp.pathway_diagram
                                    .map(
                                      (step, idx) => `
                                    <div class="flex flex-col items-center">
                                        <div class="px-6 py-3 bg-white border-2 border-blue-500 rounded-lg font-bold text-slate-800 text-sm shadow text-center max-w-md">${step.from}</div>
                                        ${idx < lp.pathway_diagram.length - 1 || step.to ? `<div class="h-6 w-1 bg-blue-300 my-1"></div><div class="text-blue-400 text-xs mb-1">▼</div>` : ""}
                                        ${idx === lp.pathway_diagram.length - 1 && step.to ? `<div class="px-6 py-3 bg-blue-600 border border-blue-700 text-white rounded-lg font-bold text-sm shadow text-center max-w-md">${step.to}</div>` : ""}
                                    </div>
                                `,
                                    )
                                    .join("")
                                : lp.pathway && lp.pathway.includes("->")
                                  ? lp.pathway
                                      .split("->")
                                      .map(
                                        (step, idx, arr) => `
                                    <div class="flex flex-col items-center">
                                        <div class="px-5 py-2.5 bg-white border border-slate-300 rounded-md font-semibold text-slate-700 text-[13px] text-center max-w-sm shadow-sm md:w-80">${step.trim()}</div>
                                        ${idx < arr.length - 1 ? `<div class="h-5 w-0.5 bg-slate-300 my-1"></div><div class="text-slate-400 text-[10px] mb-1">▼</div>` : ""}
                                    </div>
                                `,
                                      )
                                      .join("")
                                  : `<p class="text-sm text-slate-600 font-medium italic">${lp.pathway || "Data pathway tidak tersedia"}</p>`
                            }
                        </div>
                    </div>

                    <!-- ASKEP CORE -->
                    <div class="mb-10">
                        <div class="bg-indigo-800 text-white font-bold px-5 py-2.5 mb-6 uppercase inline-block font-black text-sm rounded shadow-md tracking-widest">C. Konsep Asuhan Keperawatan</div>
                        
                        <div class="space-y-5">
                            <div class="bg-white p-5 rounded-lg border border-slate-200 shadow-sm border-l-4 border-l-indigo-500">
                                <h5 class="font-black text-indigo-800 text-sm mb-3 uppercase tracking-wider">I. Fokus Pengkajian & Tanda Gejala</h5>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h6 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1">Fokus Pengkajian</h6>
                                        <div class="text-sm text-slate-700 leading-relaxed font-medium">${formatClinicalText(lp.fokus_pengkajian)}</div>
                                    </div>
                                    <div>
                                        <h6 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1">Tanda & Gejala (DS & DO)</h6>
                                        <div class="text-sm text-slate-700 leading-relaxed font-medium">${formatClinicalText(lp.tanda_gejala)}</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="bg-white p-5 rounded-lg border border-slate-200 shadow-sm border-l-4 border-l-fuchsia-500">
                                <h5 class="font-black text-fuchsia-800 text-sm mb-3 uppercase tracking-wider">II. Rentang Respon & Mekanisme Koping</h5>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h6 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1">Rentang Respon</h6>
                                        <div class="text-sm text-slate-700 leading-relaxed font-medium">${formatClinicalText(lp.rentang_respon)}</div>
                                    </div>
                                    <div>
                                        <h6 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-200 pb-1">Mekanisme Koping</h6>
                                        <div class="text-sm text-slate-700 leading-relaxed font-medium">${formatClinicalText(lp.mekanisme_koping)}</div>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-white p-5 rounded-lg border border-slate-200 shadow-sm border-l-4 border-l-pink-500">
                                <h5 class="font-black text-pink-800 text-sm mb-3 uppercase tracking-wider flex items-center justify-between">
                                    <span>III. Pohon Masalah </span>
                                    <span class="bg-pink-100 text-pink-700 px-2 py-0.5 rounded text-[10px] tracking-normal">Hierarchy</span>
                                </h5>
                                <div class="bg-pink-50 p-4 rounded-xl border border-pink-200 text-center flex flex-col items-center justify-center">
                                    ${
                                      lp.pohon_masalah
                                        ? lp.pohon_masalah
                                            .split("<-")
                                            .map(
                                              (item, i) => `
                                            <div class="px-5 py-2.5 rounded-lg border ${i === 1 ? "bg-pink-600 text-white border-pink-700 font-bold shadow-md transform scale-105" : "bg-white text-slate-800 border-pink-200 font-semibold shadow-sm"} text-sm max-w-sm w-full md:w-auto">${item.trim()}</div>
                                            ${i < lp.pohon_masalah.split("<-").length - 1 ? `<div class="text-pink-400 text-lg my-1">↑</div>` : ""}
                                        `,
                                            )
                                            .join("")
                                        : "<span class='text-sm italic text-slate-500'>Data pohon masalah tidak tersedia</span>"
                                    }
                                </div>
                            </div>
                            
                            <div class="bg-white p-6 rounded-lg border border-slate-200 shadow-sm border-l-4 border-l-purple-500">
                                <h5 class="font-black text-purple-800 text-sm mb-3 uppercase tracking-wider">IV. Diagnosis & Rencana Tindakan (Strategi Pelaksanaan)</h5>
                                
                                <div class="mb-5">
                                    <h6 class="text-[11px] font-black text-slate-500 uppercase tracking-[0.15em] mb-2">Diagnosis Keperawatan Kemungkinan Muncul:</h6>
                                    <ul class="list-disc pl-5 text-[13px] font-bold text-slate-800 space-y-1">
                                        ${lp.masalah_keperawatan ? lp.masalah_keperawatan.map((m) => `<li>${m}</li>`).join("") : "<li>-</li>"}
                                    </ul>
                                </div>

                                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
                                    <div class="bg-purple-50 p-5 rounded-xl border border-purple-100 relative pt-8">
                                        <div class="absolute top-0 right-0 bg-purple-600 text-white text-[9px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-xl uppercase tracking-wider">Implementasi</div>
                                        <h6 class="text-xs font-black text-purple-800 uppercase tracking-widest mb-3 border-b-2 border-purple-200 pb-1 inline-block">SP Pasien</h6>
                                        <div class="text-[13px] text-slate-700 leading-relaxed font-medium">${formatClinicalText(lp.sp_pasien)}</div>
                                    </div>
                                    <div class="bg-violet-50 p-5 rounded-xl border border-violet-100 relative pt-8">
                                        <div class="absolute top-0 right-0 bg-violet-600 text-white text-[9px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-xl uppercase tracking-wider">Edukasi</div>
                                        <h6 class="text-xs font-black text-violet-800 uppercase tracking-widest mb-3 border-b-2 border-violet-200 pb-1 inline-block">SP Keluarga</h6>
                                        <div class="text-[13px] text-slate-700 leading-relaxed font-medium">${formatClinicalText(lp.sp_keluarga)}</div>
                                    </div>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div class="bg-white p-5 rounded-lg border border-slate-200 shadow-sm border-l-4 border-l-rose-500">
                                    <h5 class="font-black text-rose-800 text-sm mb-3 uppercase tracking-wider">V. Discharge Planning</h5>
                                    <ul class="list-disc pl-4 text-[13px] text-slate-700 font-medium space-y-2">
                                        ${(lp.discharge_planning || "-")
                                          .split(". ")
                                          .map((item) =>
                                            item
                                              ? `<li>${item.trim()}</li>`
                                              : "",
                                          )
                                          .join("")}
                                    </ul>
                                </div>
                                <div class="bg-white p-5 rounded-lg border border-slate-200 shadow-sm border-l-4 border-l-orange-500">
                                    <h5 class="font-black text-orange-800 text-sm mb-3 uppercase tracking-wider">VI. Edukasi Esensial Keluarga</h5>
                                    <div class="text-[13px] text-slate-700 leading-relaxed font-medium p-4 bg-orange-50 rounded-lg border border-orange-100">
                                        ${formatClinicalText(lp.edukasi_keluarga)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- PSIKOFARMAKA & REFERENSI -->
                    <div class="mb-4">
                        <div class="bg-slate-700 text-white font-bold px-4 py-2 mb-4 text-[11px] uppercase inline-block font-black rounded shadow tracking-widest">D. Lampiran Tambahan</div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
                            <div>
                                <h5 class="font-black text-slate-800 text-xs mb-3 uppercase tracking-widest flex items-center gap-2">
                                    <i data-lucide="pill" class="w-4 h-4 text-emerald-600"></i> Terapi Psikofarmaka
                                </h5>
                                <div class="space-y-3">
                                    ${
                                      (lp.obat_rekomendasi || []).length > 0
                                        ? (lp.obat_rekomendasi || [])
                                            .map((drugName) => {
                                              const drug = DATASET.obat
                                                ? DATASET.obat.find(
                                                    (o) => o.nama === drugName,
                                                  )
                                                : null;
                                              return drug
                                                ? `
                                            <div class="p-3 bg-white border border-emerald-100 rounded-lg shadow-sm border-l-2 border-l-emerald-500">
                                                <div class="font-bold text-emerald-700 text-xs">${drug.nama}</div>
                                                <div class="text-[10px] text-slate-500 font-semibold mb-1">${drug.jenis} | Dosis: ${drug.dosis}</div>
                                                <div class="text-[11px] text-slate-700 leading-snug">${drug.indikasi}</div>
                                            </div>
                                            `
                                                : `<div class="text-xs font-bold text-emerald-700"><i data-lucide="check" class="w-3 h-3 inline"></i> ${drugName}</div>`;
                                            })
                                            .join("")
                                        : "<p class='text-xs italic text-slate-500'>Tidak ada rekomendasi spesifik</p>"
                                    }
                                </div>
                            </div>

                            <div>
                                <h5 class="font-black text-slate-800 text-xs mb-3 uppercase tracking-widest flex items-center gap-2">
                                    <i data-lucide="book-open" class="w-4 h-4 text-amber-600"></i> Referensi Pustaka
                                </h5>
                                <ul class="list-decimal pl-5 text-[11px] text-slate-600 font-semibold space-y-1.5 marker:text-amber-500">
                                    ${(lp.referensi || ["PPNI (2016). Standar Diagnosis Keperawatan Indonesia", "Stuart, G.W. (2013). Keperawatan Jiwa"]).map((ref) => `<li>${ref}</li>`).join("")}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- FOOTER -->
                    <div class="mt-12 text-center text-xs font-semibold text-slate-400 uppercase tracking-widest border-t border-slate-200 pt-6">
                        Dibuat secara otomatis oleh NurseJiwa Clinical Engine
                    </div>
                </div>
            `;
      outputArea.style.display = "block";
      hideLoader();
      if (typeof lucide !== "undefined") lucide.createIcons();
      resultDiv.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  });
};
