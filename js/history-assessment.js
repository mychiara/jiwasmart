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
        predisKeluargaDetail: getVal("as-predis-keluarga-detail"),
        predisTrauma: Array.from(document.querySelectorAll('input[name^="as-trauma"]:checked')).map(cb => cb.value),
        
        // MSE & Gejala
        symptoms: Array.from(document.querySelectorAll('input[name="as-symptoms"]:checked')).map(cb => cb.dataset.teks),
        mse: {},
        
        // Masalah Psikososial
        masalahKelompok: getVal("as-masalah-kelompok"),
        masalahLingkungan: getVal("as-masalah-lingkungan"),
        masalahPendidikan: getVal("as-masalah-pendidikan"),
        masalahPekerjaan: getVal("as-masalah-pekerjaan"),
        masalahEkonomi: getVal("as-masalah-ekonomi"),
        masalahKes: getVal("as-masalah-kes"),
        masalahLain: getVal("as-masalah-lain"),
        
        // Pengetahuan & Medik
        pengetahuan: getChecked("as-tahu"),
        medis: getVal("as-medis"),
        obatSkrg: getVal("as-obat-skrg")
    };

    // Capture MSE values
    const mseNames = [
        "as-sm-penampilan", "as-sm-bicara", "as-sm-motorik", "as-sm-interaksi",
        "as-sm-alamperasaan", "as-sm-afek", "as-sm-persepsi", "as-sm-prosespikir",
        "as-sm-isipikir", "as-sm-kesadaran", "as-sm-memori", "as-sm-hitung",
        "as-sm-nilai", "as-sm-tilik"
    ];
    mseNames.forEach(name => {
        data.mse[name] = getChecked(name);
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
        const originalIndex = history.findIndex(h => h.id === item.id);
        
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
    setVal("as-predis-keluarga-detail", item.predisKeluargaDetail);
    
    // Predisposisi details toggle
    if (typeof toggleFamilyHistoryDetails === "function") toggleFamilyHistoryDetails();

    // Trauma
    const traumaCbs = document.querySelectorAll('input[name^="as-trauma"]');
    traumaCbs.forEach(cb => cb.checked = (item.predisTrauma || []).includes(cb.value));

    // symptoms
    const sympCbs = document.querySelectorAll('input[name="as-symptoms"]');
    sympCbs.forEach(cb => {
        cb.checked = (item.symptoms || []).includes(cb.dataset.teks);
        // Trigger visual update if needed
        if (cb.onchange) cb.onchange();
    });

    // MSE
    Object.keys(item.mse || {}).forEach(name => {
        const cbs = document.querySelectorAll(`input[name="${name}"]`);
        const values = item.mse[name] || [];
        cbs.forEach(cb => cb.checked = values.includes(cb.value));
    });

    // Masalah Psikososial
    setVal("as-masalah-kelompok", item.masalahKelompok);
    setVal("as-masalah-lingkungan", item.masalahLingkungan);
    setVal("as-masalah-pendidikan", item.masalahPendidikan);
    setVal("as-masalah-pekerjaan", item.masalahPekerjaan);
    setVal("as-masalah-ekonomi", item.masalahEkonomi);
    setVal("as-masalah-kes", item.masalahKes);
    setVal("as-masalah-lain", item.masalahLain);

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
