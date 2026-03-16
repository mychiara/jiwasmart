/**
 * ASKEP JIWA SMART - History Management
 */

window.saveToHistory = function (data) {
  let history = JSON.parse(localStorage.getItem("askep_history") || "[]");
  if (window.editingHistoryIndex !== -1) {
    history[window.editingHistoryIndex] = data;
    window.editingHistoryIndex = -1; // Reset after update
  } else {
    history.unshift(data);
  }
  localStorage.setItem("askep_history", JSON.stringify(history));
  renderHistory();
  if (typeof window.updateDashboardStats === "function")
    window.updateDashboardStats();
};

window.renderHistory = function (filter = "") {
  const list = document.getElementById("history-list");
  if (!list) return;
  const history = JSON.parse(localStorage.getItem("askep_history") || "[]");
  list.innerHTML = "";

  const filteredHistory = history.filter((item) => {
    const searchStr = (item.nama + " " + item.diagnosa).toLowerCase();
    return searchStr.includes(filter.toLowerCase());
  });

  if (filteredHistory.length === 0) {
    list.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem 1rem; background: var(--bg-soft); border-radius: 12px; border: 2px dashed var(--border);">
        <i data-lucide="search-x" style="width: 48px; height: 48px; margin-bottom: 1rem; opacity: 0.5;"></i>
        <p>${filter ? "Tidak ada riwayat yang cocok dengan pencarian Anda." : "Belum ada riwayat laporan yang tersimpan."}</p>
      </div>`;
    if (typeof lucide !== "undefined") lucide.createIcons();
    return;
  }

  filteredHistory.forEach((item, index) => {
    // Find original index in full history for proper editing/deletion
    const originalIndex = history.findIndex((h) => h.id === item.id);

    const card = document.createElement("div");
    card.className = "card";
    card.style.padding = "1.25rem";
    card.style.transition = "transform 0.2s ease, box-shadow 0.2s ease";
    card.style.border = "1px solid var(--border)";
    card.onmouseover = () => {
      card.style.transform = "translateY(-4px)";
      card.style.boxShadow = "var(--shadow-md)";
    };
    card.onmouseout = () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "none";
    };

    card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom: 0.75rem;">
                <h4 style="color:var(--primary); margin:0; font-weight:700;">${maskName(item.nama)}</h4>
                <div style="font-size:0.7rem; color:var(--text-muted); background:var(--bg-light); padding:2px 8px; border-radius:12px;">${item.tanggal}</div>
            </div>
            <div style="display:flex; align-items:center; gap:6px; margin-bottom:1.25rem;">
                <i data-lucide="activity" style="width:14px; color:var(--accent);"></i>
                <p style="font-size:0.8rem; margin:0; color:var(--text-main); font-weight:600;">${item.diagnosa}</p>
            </div>
            <div style="display:flex; gap:0.5rem; border-top: 1px solid var(--bg-light); padding-top: 1rem;">
                <button class="btn btn-primary" style="padding:6px 12px; font-size:0.75rem; flex:1;" onclick="viewHistoryItem(${originalIndex})">
                    <i data-lucide="eye" style="width:14px; height:14px;"></i> Buka
                </button>
                <button class="btn btn-ghost" style="padding:6px 12px; font-size:0.75rem; color:var(--primary); border:1px solid var(--primary-soft);" onclick="editHistoryItem(${originalIndex})">
                    <i data-lucide="edit-3" style="width:14px; height:14px;"></i> Edit
                </button>
                <button class="btn btn-ghost" style="padding:6px 12px; font-size:0.75rem; color:var(--accent); border:1px solid var(--accent-soft);" onclick="deleteHistoryItem(${originalIndex})">
                    <i data-lucide="trash-2" style="width:14px; height:14px;"></i>
                </button>
            </div>
        `;
    list.appendChild(card);
  });
  if (typeof lucide !== "undefined") lucide.createIcons();
};

window.editHistoryItem = function (index) {
  const history = JSON.parse(localStorage.getItem("askep_history") || "[]");
  const item = history[index];

  if (!item.formData) {
    Swal.fire(
      "Informasi",
      "Laporan lama ini tidak mendukung fitur edit karena data mentah tidak tersimpan. Silakan gunakan fitur 'Buka' untuk melihat.",
      "info",
    );
    return;
  }

  window.editingHistoryIndex = index;
  const editIndicator = document.getElementById("askep-edit-mode-indicator");
  if (editIndicator) editIndicator.style.display = "flex";
  showView("generator-askep");

  // Populate basic info
  document.getElementById("px-nama").value = item.formData.pxNama || "";
  document.getElementById("px-norm").value = item.formData.pxNorm || "";
  document.getElementById("px-umur").value = item.formData.pxUmur || "";
  document.getElementById("px-jk").value = item.formData.pxJk || "";
  document.getElementById("px-medis").value = item.formData.pxMedis || "";

  // SOAP
  document.getElementById("soap-s").value = item.formData.soapS || "";
  document.getElementById("soap-o").value = item.formData.soapO || "";
  document.getElementById("soap-a").value = item.formData.soapA || "";
  document.getElementById("soap-p").value = item.formData.soapP || "";

  // Student info
  document.getElementById("askep-mhs-nama").value =
    item.formData.askepMhsNama || "";
  document.getElementById("askep-mhs-nim").value =
    item.formData.askepMhsNim || "";
  document.getElementById("askep-mhs-institusi").value =
    item.formData.askepMhsInstitusi || "";

  // Repopulate Symptoms
  const symptoms = item.formData.symptoms || [];
  const checkboxes = document.querySelectorAll('input[name="symptoms"]');
  checkboxes.forEach((cb) => {
    cb.checked = symptoms.includes(cb.dataset.teks);
  });

  Swal.fire(
    "Data Dimuat",
    "Data laporan telah dimuat kembali ke formulir. Silakan edit dan klik 'Analisis Diagnosa' lalu 'Generate ASKEP'.",
    "success",
  );
};

window.viewHistoryItem = function (index) {
  const history = JSON.parse(localStorage.getItem("askep_history") || "[]");
  const item = history[index];
  showView("generator-askep");
  document.getElementById("askep-output-area").style.display = "block";
  document.getElementById("askep-result").innerHTML = item.html;
  document
    .getElementById("askep-result")
    .scrollIntoView({ behavior: "smooth" });
};

window.deleteHistoryItem = function (index) {
  Swal.fire({
    title: "Hapus Riwayat?",
    text: "Laporan ini akan dihapus permanen.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#F43F5E",
    confirmButtonText: "Ya, Hapus",
  }).then((result) => {
    if (result.isConfirmed) {
      let history = JSON.parse(localStorage.getItem("askep_history") || "[]");
      history.splice(index, 1);
      localStorage.setItem("askep_history", JSON.stringify(history));
      renderHistory();
    }
  });
};

window.clearHistory = function () {
  Swal.fire({
    title: "Kosongkan Riwayat?",
    text: "Semua riwayat laporan akan hilang selamanya!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Ya, Bersihkan Semua",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("askep_history");
      renderHistory();
    }
  });
};

window.backupData = function () {
  const data = localStorage.getItem("askep_history") || "[]";
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Backup_JiwaSmart_${new Date().getTime()}.json`;
  a.click();
};

window.restoreData = function (event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const data = JSON.parse(e.target.result);
      if (Array.isArray(data)) {
        localStorage.setItem("askep_history", JSON.stringify(data));
        renderHistory();
        Swal.fire("Berhasil", "Data berhasil dipulihkan!", "success");
      } else {
        throw new Error("Format salah");
      }
    } catch (err) {
      Swal.fire("Error", "File cadangan tidak valid!", "error");
    }
  };
  reader.readAsText(file);
};
