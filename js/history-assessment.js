/**
 * ASKEP JIWA SMART - Assessment History Management
 */

window.editingAsHistoryIndex = -1;

window.saveAssessmentToHistory = function () {
    const getVal = (id) => document.getElementById(id)?.value || "";
    const getChecked = (name) => Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(cb => cb.value);
    
    const nama = getVal("as-nama");
    if (!nama) {
        Swal.fire("Peringatan", "Nama pasien harus diisi untuk menyimpan riwayat!", "warning");
        return;
    }

    const data = {
        id: Date.now(),
        tanggal: new Date().toLocaleString('id-ID'),
        nama: nama,
        norm: getVal("as-norm"),
        umur: getVal("as-umur"),
        jk: getVal("as-jk"),
        ruang: getVal("as-ruang"),
        tglRawat: getVal("as-tgl-rawat"),
        tglPengkajian: getVal("as-tgl-pengkajian"),
        informan: getVal("as-informan"),
        
        // Alasan & Predisposisi
        alasan: getVal("as-alasan"),
        alasanKeluarga: getVal("as-alasan-keluarga"),
        alasanHasil: getVal("as-alasan-hasil"),
        predisRiwayat: getVal("as-predis-riwayat"),
        predisObat: getVal("as-predis-obat"),
        predisKeluarga: getVal("as-predis-keluarga"),
        predisKeluargaDetail: {
            hubungan: getVal("as-fam-relation"),
            gejala: getVal("as-fam-gejala"),
            obat: getVal("as-fam-obat")
        },
        predisTrauma: Array.from(document.querySelectorAll('input[name^="as-trauma"]:checked')).map(cb => cb.value),
        predisUnpleasant: getVal("as-predis-unpleasant"),
        
        // Fisik / TTV
        ttv: {
            td: getVal("as-td"),
            nadi: getVal("as-nadi"),
            suhu: getVal("as-suhu"),
            rr: getVal("as-rr"),
            bb: getVal("as-bb"),
            tb: getVal("as-tb"),
            keluhan: getVal("as-fisik-keluhan")
        },

        // Psikososial
        psikososial: {
            genogram: getVal("as-genogram"),
            konsep: {
                gambaran: getVal("as-konsep-gambaran"),
                ideal: getVal("as-konsep-ideal"),
                harga: getVal("as-konsep-harga"),
                identitas: getVal("as-konsep-identitas"),
                peran: getVal("as-konsep-peran")
            },
            sosial: {
                orang: getVal("as-sosial-orang"),
                peran: getVal("as-sosial-peran"),
                hambatan: getVal("as-sosial-hambatan")
            },
            spiritual: {
                nilai: getVal("as-spiritual-nilai"),
                ibadah: getVal("as-spiritual-ibadah")
            }
        },

        // MSE & Gejala
        symptoms: Array.from(document.querySelectorAll('input[name="as-symptoms"]:checked')).map(cb => cb.dataset.teks),
        mse: {},
        mseKet: {},

        // Persiapan Pulang (ADL)
        pulang: {
            makan: getVal("as-pulang-makan"),
            eliminasi: getVal("as-pulang-eliminasi"),
            mandi: getVal("as-pulang-mandi"),
            berhias: getVal("as-pulang-berhias"),
            istirahat: getVal("as-pulang-istirahat"),
            obat: getVal("as-pulang-obat"),
            sehat: getVal("as-pulang-sehat"),
            dalam: getVal("as-pulang-dalam"),
            luar: getVal("as-pulang-luar")
        },

        // Koping
        koping: {
            adaptif: getChecked("as-koping-ad"),
            maladaptif: getChecked("as-koping-ma")
        },

        // Masalah Psikososial
        masalah: {
            kelompok: getVal("as-masalah-kelompok"),
            lingkungan: getVal("as-masalah-lingkungan"),
            pendidikan: getVal("as-masalah-pendidikan"),
            pekerjaan: getVal("as-masalah-pekerjaan"),
            ekonomi: getVal("as-masalah-ekonomi"),
            kes: getVal("as-masalah-kes"),
            lain: getVal("as-masalah-lain")
        },
        
        // Pengetahuan & Medik
        pengetahuan: getChecked("as-tahu"),
        medis: getVal("as-medis"),
        obatSkrg: getVal("as-obat-skrg")
    };

    // Capture MSE values & Keterangan
    const mseNames = [
        "as-sm-penampilan", "as-sm-bicara", "as-sm-motorik", "as-sm-alam",
        "as-sm-afek", "as-sm-interaksi", "as-sm-persepsi", "as-sm-proses",
        "as-sm-isi", "as-sm-waham", "as-sm-sadar", "as-sm-disorient",
        "as-sm-memori", "as-sm-hitung", "as-sm-nilai", "as-sm-tilik"
    ];
    mseNames.forEach(name => {
        data.mse[name] = getChecked(name);
        const ketEl = document.getElementById(name + "-ket");
        if (ketEl) data.mseKet[name] = ketEl.value;
    });

    let history = JSON.parse(localStorage.getItem("assessment_history") || "[]");
    
    if (window.editingAsHistoryIndex !== -1) {
        data.id = history[window.editingAsHistoryIndex].id; // Keep original ID
        data.tanggal = history[window.editingAsHistoryIndex].tanggal; // Keep original date or update? User might want to know when it was edited
        data.lastEdit = new Date().toLocaleString('id-ID');
        history[window.editingAsHistoryIndex] = data;
        window.editingAsHistoryIndex = -1;
        document.getElementById("as-edit-mode-indicator").style.display = "none";
        document.getElementById("as-save-btn").innerHTML = '<i data-lucide="save"></i> Simpan Data';
        if (window.lucide) lucide.createIcons();
    } else {
        history.unshift(data);
    }

    localStorage.setItem("assessment_history", JSON.stringify(history));
    
    Swal.fire({
        title: "Berhasil!",
        text: "Data pengkajian telah disimpan ke riwayat.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
    });

    renderAssessmentHistory();
};

window.renderAssessmentHistory = function (filter = "") {
    const list = document.getElementById("history-as-list");
    if (!list) return;
    
    const history = JSON.parse(localStorage.getItem("assessment_history") || "[]");
    list.innerHTML = "";

    const filtered = history.filter(item => {
        const searchStr = (item.nama + " " + (item.medis || "") + " " + item.tanggal).toLowerCase();
        return searchStr.includes(filter.toLowerCase());
    });

    if (filtered.length === 0) {
        list.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem 1rem; background: var(--bg-soft); border-radius: 12px; border: 2px dashed var(--border);">
                <i data-lucide="search-x" style="width: 48px; height: 48px; margin-bottom: 1rem; opacity: 0.5;"></i>
                <p>Belum ada riwayat pengkajian yang tersimpan.</p>
            </div>`;
        if (window.lucide) lucide.createIcons();
        return;
    }

    filtered.forEach((item, index) => {
        const originalIndex = history.findIndex(h => (h.id || 0) === (item.id || 0) && h.tanggal === item.tanggal);
        
        const card = document.createElement("div");
        card.className = "card";
        card.style.cssText = "padding: 1.25rem; border: 1px solid var(--border); transition: all 0.2s ease;";
        
        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom: 1rem;">
                <div>
                    <h4 style="color:var(--primary); margin:0; font-weight:700;">${item.nama}</h4>
                    <p style="font-size:0.75rem; color:var(--text-muted); margin:4px 0 0;">No. RM: ${item.norm || '-'}</p>
                </div>
                <div style="text-align:right;">
                    <div style="font-size:0.65rem; color:var(--text-muted); background:var(--bg-light); padding:2px 8px; border-radius:12px;">${item.tanggal}</div>
                    ${item.lastEdit ? `<div style="font-size:0.6rem; color:var(--success); margin-top:4px;">Edited: ${item.lastEdit}</div>` : ''}
                </div>
            </div>
            <div style="margin-bottom:1.25rem;">
                <p style="font-size:0.8rem; margin:0; color:var(--text-main);"><b>Diagnosa Medis:</b> ${item.medis || '-'}</p>
            </div>
            <div style="display:flex; gap:0.5rem; border-top: 1px solid var(--bg-light); padding-top: 1rem;">
                <button class="btn btn-primary" style="padding:6px 12px; font-size:0.75rem; flex:1;" onclick="editAsHistoryItem(${originalIndex})">
                    <i data-lucide="edit-3" style="width:14px; height:14px;"></i> Edit
                </button>
                <button class="btn btn-ghost" style="padding:6px 12px; font-size:0.75rem; color:var(--accent); border:1px solid var(--accent-soft);" onclick="deleteAsHistoryItem(${originalIndex})">
                    <i data-lucide="trash-2" style="width:14px; height:14px;"></i>
                </button>
            </div>
        `;
        list.appendChild(card);
    });
    if (window.lucide) lucide.createIcons();
};

window.editAsHistoryItem = function (index) {
    const history = JSON.parse(localStorage.getItem("assessment_history") || "[]");
    const item = history[index];
    
    window.editingAsHistoryIndex = index;
    showView("assessment-digital");
    
    // Show Edit Mode Indicator
    document.getElementById("as-edit-mode-indicator").style.display = "flex";
    document.getElementById("as-save-btn").innerHTML = '<i data-lucide="save"></i> Simpan Perubahan';
    if (window.lucide) lucide.createIcons();

    // Populate Identitas
    const setVal = (id, val) => { if(document.getElementById(id)) document.getElementById(id).value = val || ""; };
    setVal("as-nama", item.nama);
    setVal("as-norm", item.norm);
    setVal("as-umur", item.umur);
    setVal("as-jk", item.jk);
    setVal("as-ruang", item.ruang);
    setVal("as-tgl-rawat", item.tglRawat);
    setVal("as-tgl-pengkajian", item.tglPengkajian);
    setVal("as-informan", item.informan);
    
    // Alasan & Predisposisi
    setVal("as-alasan", item.alasan);
    setVal("as-alasan-keluarga", item.alasanKeluarga);
    setVal("as-alasan-hasil", item.alasanHasil);
    setVal("as-predis-riwayat", item.predisRiwayat);
    setVal("as-predis-obat", item.predisObat);
    setVal("as-predis-keluarga", item.predisKeluarga);
    setVal("as-predis-unpleasant", item.predisUnpleasant);
    if (item.predisKeluargaDetail) {
        setVal("as-fam-relation", item.predisKeluargaDetail.hubungan);
        setVal("as-fam-gejala", item.predisKeluargaDetail.gejala);
        setVal("as-fam-obat", item.predisKeluargaDetail.obat);
    }
    
    // TTV
    if (item.ttv) {
        setVal("as-td", item.ttv.td);
        setVal("as-nadi", item.ttv.nadi);
        setVal("as-suhu", item.ttv.suhu);
        setVal("as-rr", item.ttv.rr);
        setVal("as-bb", item.ttv.bb);
        setVal("as-tb", item.ttv.tb);
        setVal("as-fisik-keluhan", item.ttv.keluhan);
    }

    // Psikososial
    if (item.psikososial) {
        setVal("as-genogram", item.psikososial.genogram);
        if (item.psikososial.konsep) {
            setVal("as-konsep-gambaran", item.psikososial.konsep.gambaran);
            setVal("as-konsep-ideal", item.psikososial.konsep.ideal);
            setVal("as-konsep-harga", item.psikososial.konsep.harga);
            setVal("as-konsep-identitas", item.psikososial.konsep.identitas);
            setVal("as-konsep-peran", item.psikososial.konsep.peran);
        }
        if (item.psikososial.sosial) {
            setVal("as-sosial-orang", item.psikososial.sosial.orang);
            setVal("as-sosial-peran", item.psikososial.sosial.peran);
            setVal("as-sosial-hambatan", item.psikososial.sosial.hambatan);
        }
        if (item.psikososial.spiritual) {
            setVal("as-spiritual-nilai", item.psikososial.spiritual.nilai);
            setVal("as-spiritual-ibadah", item.psikososial.spiritual.ibadah);
        }
    }
    
    // Predisposisi details toggle
    if (typeof toggleFamilyHistoryDetails === "function") toggleFamilyHistoryDetails();

    // Trauma
    const traumaCbs = document.querySelectorAll('input[name^="as-trauma"]');
    traumaCbs.forEach(cb => cb.checked = (item.predisTrauma || []).includes(cb.value));

    // symptoms
    const sympCbs = document.querySelectorAll('input[name="as-symptoms"]');
    sympCbs.forEach(cb => {
        cb.checked = (item.symptoms || []).includes(cb.dataset.teks);
        if (cb.onchange) cb.onchange();
    });

    // MSE
    Object.keys(item.mse || {}).forEach(name => {
        const cbs = document.querySelectorAll(`input[name="${name}"]`);
        const values = item.mse[name] || [];
        cbs.forEach(cb => cb.checked = values.includes(cb.value));
        
        // Restore Keterangan
        const ketEl = document.getElementById(name + "-ket");
        if (ketEl && item.mseKet && item.mseKet[name]) ketEl.value = item.mseKet[name];
    });

    // Persiapan Pulang
    if (item.pulang) {
        setVal("as-pulang-makan", item.pulang.makan);
        setVal("as-pulang-eliminasi", item.pulang.eliminasi);
        setVal("as-pulang-mandi", item.pulang.mandi);
        setVal("as-pulang-berhias", item.pulang.berhias);
        setVal("as-pulang-istirahat", item.pulang.istirahat);
        setVal("as-pulang-obat", item.pulang.obat);
        setVal("as-pulang-sehat", item.pulang.sehat);
        setVal("as-pulang-dalam", item.pulang.dalam);
        setVal("as-pulang-luar", item.pulang.luar);
    }

    // Koping
    if (item.koping) {
        const adCbs = document.querySelectorAll('input[name="as-koping-ad"]');
        adCbs.forEach(cb => cb.checked = (item.koping.adaptif || []).includes(cb.value));
        const maCbs = document.querySelectorAll('input[name="as-koping-ma"]');
        maCbs.forEach(cb => cb.checked = (item.koping.maladaptif || []).includes(cb.value));
    }

    // Masalah Psikososial (Expanded)
    if (item.masalah) {
        setVal("as-masalah-kelompok", item.masalah.kelompok);
        setVal("as-masalah-lingkungan", item.masalah.lingkungan);
        setVal("as-masalah-pendidikan", item.masalah.pendidikan);
        setVal("as-masalah-pekerjaan", item.masalah.pekerjaan);
        setVal("as-masalah-ekonomi", item.masalah.ekonomi);
        setVal("as-masalah-kes", item.masalah.kes);
        setVal("as-masalah-lain", item.masalah.lain);
    }

    // Pengetahuan & Medik
    const tahuCbs = document.querySelectorAll('input[name="as-tahu"]');
    tahuCbs.forEach(cb => cb.checked = (item.pengetahuan || []).includes(cb.value));
    setVal("as-medis", item.medis);
    setVal("as-obat-skrg", item.obatSkrg);

    Swal.fire({
        title: "Data Dimuat",
        text: "Anda sekarang dalam mode edit. Silakan ubah data dan klik 'Simpan Perubahan'.",
        icon: "info",
        confirmButtonColor: "var(--primary)"
    });
};

window.deleteAsHistoryItem = function (index) {
    Swal.fire({
        title: "Hapus Riwayat?",
        text: "Data pengkajian ini akan dihapus permanen.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#F43F5E",
        confirmButtonText: "Ya, Hapus"
    }).then((result) => {
        if (result.isConfirmed) {
            let history = JSON.parse(localStorage.getItem("assessment_history") || "[]");
            history.splice(index, 1);
            localStorage.setItem("assessment_history", JSON.stringify(history));
            renderAssessmentHistory();
        }
    });
};
