/**
 * ASKEP JIWA SMART - TAK & SPO
 */

window.renderTAKButtons = function (filter = "") {
  console.log("Rendering TAK buttons with filter:", filter);
  const grid = document.getElementById("tak-buttons-grid");
  if (!grid) {
    console.warn("tak-buttons-grid not found");
    return;
  }
  grid.innerHTML = "";

  const takData =
    window.EXTERNAL_TAK && Object.keys(window.EXTERNAL_TAK).length > 0
      ? window.EXTERNAL_TAK
      : DATASET.tak;
  const colors = [
    { bg: "rgba(139, 92, 246, 0.1)", border: "#8b5cf6", text: "#6d28d9" }, // Purple
    { bg: "rgba(59, 130, 246, 0.1)", border: "#3b82f6", text: "#1d4ed8" }, // Blue
    { bg: "rgba(16, 185, 129, 0.1)", border: "#10b981", text: "#047857" }, // Emerald
    { bg: "rgba(245, 158, 11, 0.1)", border: "#f59e0b", text: "#b45309" }, // Orange
    { bg: "rgba(244, 63, 94, 0.1)", border: "#f43f5e", text: "#be123c" }, // Rose
    { bg: "rgba(6, 182, 212, 0.1)", border: "#06b6d4", text: "#0e7490" }, // Cyan
    { bg: "rgba(99, 102, 241, 0.1)", border: "#6366f1", text: "#4338ca" }, // Indigo
  ];

  const entries = Object.entries(takData);
  const filteredEntries = entries.filter(([key, data]) => {
    const searchStr = (data.judul + " " + (data.definisi || "")).toLowerCase();
    return searchStr.includes(filter.toLowerCase());
  });

  if (filteredEntries.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 2rem;">Tidak ada TAK yang cocok dengan pencarian.</p>`;
    return;
  }

  filteredEntries.forEach(([key, item], index) => {
    const color = colors[index % colors.length];
    const btn = document.createElement("button");
    btn.className = "btn btn-ghost";
    btn.style.cssText = `
        background: ${color.bg}; 
        border: 1px solid ${color.border}; 
        color: ${color.text};
        font-weight: 600;
        font-size: 0.85rem; 
        padding: 0.8rem; 
        height: auto; 
        min-height: 60px; 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        text-align: center;
        transition: all 0.2s ease;
    `;

    btn.onmouseover = () => {
      btn.style.transform = "translateY(-3px)";
      btn.style.boxShadow = `0 4px 12px ${color.bg}`;
    };
    btn.onmouseout = () => {
      btn.style.transform = "translateY(0)";
      btn.style.boxShadow = "none";
    };

    btn.innerHTML = `<span>${item.judul}</span>`;
    btn.onclick = () => renderTAK(key);
    grid.appendChild(btn);
  });
};

window.renderTAK = function (type) {
  const tak = EXTERNAL_TAK[type] || DATASET.tak[type];
  const contentDiv = document.getElementById("tak-content");
  if (!tak) return;

  contentDiv.innerHTML = `
        <div style="text-align:center; margin-bottom: 2rem;">
            ${tak.image ? `<img src="${tak.image}" alt="${tak.judul}" style="width:100%; object-fit:contain; border-radius:12px; margin-bottom:1.5rem; border:1px solid var(--border); background:#f8fafc;">` : ""}
            <h3 style="color:var(--primary); font-size:1.8rem; margin-bottom:0.5rem;">${tak.judul}</h3>
            <p style="font-style: italic; color:var(--text-muted); max-width: 600px; margin: 0 auto;">${tak.definisi}</p>
        </div>
        <div class="tak-sessions">
            ${tak.sesi
              .map(
                (s, idx) => `
                <div class="card" style="margin-bottom: 1.5rem; background: #fff; border: 1px solid var(--border);">
                    <div style="display:flex; align-items:center; gap:10px; margin-bottom:1rem; border-bottom:1px solid #f1f5f9; padding-bottom:0.75rem;">
                        <span style="background:var(--primary); color:white; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:0.8rem;">${idx + 1}</span>
                        <h4 style="margin:0; color:var(--secondary); font-size:1.1rem;">${s.nama}</h4>
                    </div>
                    <div class="grid" style="display:grid; grid-template-columns: 1fr 1fr; gap:1.5rem; margin-bottom:1rem;">
                        <div style="background:#f8fafc; padding:1rem; border-radius:8px;">
                            <h5 style="margin:0 0 0.5rem; font-size:0.85rem; color:var(--primary); display:flex; align-items:center; gap:5px;"><i data-lucide="target" style="width:14px;"></i> Tujuan</h5>
                            <p style="margin:0; font-size:0.85rem; line-height:1.4;">${s.tujuan}</p>
                        </div>
                        <div style="background:#fff7ed; padding:1rem; border-radius:8px;">
                            <h5 style="margin:0 0 0.5rem; font-size:0.85rem; color:#c2410c; display:flex; align-items:center; gap:5px;"><i data-lucide="package" style="width:14px;"></i> Persiapan Alat</h5>
                            <p style="margin:0; font-size:0.85rem; line-height:1.4;">${s.persiapan || "-"}</p>
                        </div>
                    </div>
                    <div style="background:#f0f9ff; padding:1rem; border-radius:8px; border-left:4px solid #0ea5e9;">
                        <h5 style="margin:0 0 0.75rem; font-size:0.85rem; color:#0369a1; display:flex; align-items:center; gap:5px;"><i data-lucide="play-circle" style="width:14px;"></i> Langkah Tindakan</h5>
                        <div class="clinical-content" style="font-size:0.85rem; line-height:1.6;">${formatClinicalText(s.tindakan)}</div>
                    </div>
                </div>`,
              )
              .join("")}
        </div>
        
        <!-- Checklist Observasi TAK -->
        <div class="card" style="margin-top: 2rem; border: 2px solid var(--primary-soft);">
            <h3 style="color:var(--primary); display:flex; align-items:center; gap:10px; margin-bottom:1rem;">
                <i data-lucide="clipboard-check"></i> Lembar Observasi Peserta TAK
            </h3>
            <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1.5rem;">
                Gunakan tabel ini untuk mencatat perkembangan setiap peserta selama sesi berlangsung.
            </p>
            <div style="overflow-x: auto;">
                <table id="tak-obs-table" style="width:100%; border-collapse: collapse; font-size: 0.85rem;">
                    <thead>
                        <tr style="background:var(--primary-soft); color:var(--primary);">
                            <th style="padding:10px; border:1px solid var(--border); width:50px;">No</th>
                            <th style="padding:10px; border:1px solid var(--border);">Nama Peserta</th>
                            <th style="padding:10px; border:1px solid var(--border); text-align:center;">Aktif</th>
                            <th style="padding:10px; border:1px solid var(--border); text-align:center;">Pasif</th>
                            <th style="padding:10px; border:1px solid var(--border); text-align:center;">Mengganggu</th>
                            <th style="padding:10px; border:1px solid var(--border);">Keterangan</th>
                        </tr>
                    </thead>
                    <tbody id="tak-obs-body">
                        <!-- Rows will be added here -->
                        <tr>
                            <td style="padding:10px; border:1px solid var(--border); text-align:center;">1</td>
                            <td style="padding:10px; border:1px solid var(--border);"><input type="text" placeholder="Inisial Pasien" style="width:100%; border:none; background:transparent; outline:none;"></td>
                            <td style="padding:10px; border:1px solid var(--border); text-align:center;"><input type="radio" name="obs-1"></td>
                            <td style="padding:10px; border:1px solid var(--border); text-align:center;"><input type="radio" name="obs-1"></td>
                            <td style="padding:10px; border:1px solid var(--border); text-align:center;"><input type="radio" name="obs-1"></td>
                            <td style="padding:10px; border:1px solid var(--border);"><input type="text" placeholder="..." style="width:100%; border:none; background:transparent; outline:none;"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div style="margin-top:1rem; display:flex; gap:1rem;">
                <button class="btn btn-ghost" onclick="addTAKRow()" style="font-size:0.8rem; border:1px solid var(--border);">
                    <i data-lucide="plus"></i> Tambah Peserta
                </button>
            </div>
        </div>

        <div style="margin-top: 3rem; text-align: center; display:flex; gap:1rem; justify-content:center;" class="no-print">
            <button class="btn btn-primary" onclick="window.print()"><i data-lucide="printer"></i> Cetak Panduan & Observasi</button>
        </div>
    `;
  contentDiv.style.display = "block";
  if (typeof lucide !== "undefined") lucide.createIcons();
  contentDiv.scrollIntoView({ behavior: "smooth" });
};

window.addTAKRow = function () {
  const tbody = document.getElementById("tak-obs-body");
  const nextNo = tbody.rows.length + 1;
  const row = document.createElement("tr");
  row.innerHTML = `
        <td style="padding:10px; border:1px solid var(--border); text-align:center;">${nextNo}</td>
        <td style="padding:10px; border:1px solid var(--border);"><input type="text" placeholder="Inisial Pasien" style="width:100%; border:none; background:transparent; outline:none;"></td>
        <td style="padding:10px; border:1px solid var(--border); text-align:center;"><input type="radio" name="obs-${nextNo}"></td>
        <td style="padding:10px; border:1px solid var(--border); text-align:center;"><input type="radio" name="obs-${nextNo}"></td>
        <td style="padding:10px; border:1px solid var(--border); text-align:center;"><input type="radio" name="obs-${nextNo}"></td>
        <td style="padding:10px; border:1px solid var(--border);"><input type="text" placeholder="..." style="width:100%; border:none; background:transparent; outline:none;"></td>
    `;
  tbody.appendChild(row);
};

window.filterSPOCategory = function (category, btn, filter = "") {
  window.activeSPOCategory = category;
  if (btn) {
    document
      .querySelectorAll("#spo-categories .btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  }
  console.log(`Filtering SPO category: ${category} with filter: ${filter}`);
  const grid = document.getElementById("spo-grid");
  if (!grid) {
    console.warn("spo-grid not found");
    return;
  }
  grid.innerHTML = "";

  const colors = [
    { bg: "rgba(14, 165, 233, 0.1)", border: "#0ea5e9", text: "#0369a1" }, // Sky
    { bg: "rgba(244, 63, 94, 0.1)", border: "#f43f5e", text: "#be123c" }, // Rose
    { bg: "rgba(16, 185, 129, 0.1)", border: "#10b981", text: "#047857" }, // Emerald
    { bg: "rgba(168, 85, 247, 0.1)", border: "#a855f7", text: "#7e22ce" }, // Purple
    { bg: "rgba(249, 115, 22, 0.1)", border: "#f97316", text: "#c2410c" }, // Orange
  ];

  const spoData =
    window.EXTERNAL_SPO && Object.keys(window.EXTERNAL_SPO).length > 0
      ? window.EXTERNAL_SPO
      : DATASET.spo;

  const items = spoData[category] || [];
  const filteredItems = items.filter((item) => {
    const searchStr = (
      item.judul +
      " " +
      (item.pengertian || "")
    ).toLowerCase();
    return searchStr.includes(filter.toLowerCase());
  });

  if (filteredItems.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 2rem;">Tidak ada SPO yang cocok dalam kategori ini.</p>`;
    return;
  }

  filteredItems.forEach((item, index) => {
    const color = colors[index % colors.length];
    const button = document.createElement("button");
    button.className = "btn btn-ghost";
    button.style.cssText = `
        background: ${color.bg}; 
        border: 1px solid ${color.border}; 
        color: ${color.text};
        font-weight: 600;
        justify-content: center; 
        text-align: center; 
        font-size: 0.85rem; 
        padding: 0.8rem; 
        height: auto; 
        min-height: 60px; 
        display: flex; 
        align-items: center;
        transition: all 0.2s ease;
    `;

    button.onmouseover = () => {
      button.style.transform = "scale(1.02)";
      button.style.boxShadow = `0 4px 12px ${color.bg}`;
    };
    button.onmouseout = () => {
      button.style.transform = "scale(1)";
      button.style.boxShadow = "none";
    };

    button.innerHTML = `<span>${item.judul}</span>`;
    button.onclick = () => renderSPO(item.id, category);
    grid.appendChild(button);
  });
};

window.renderSPO = function (id, category = null) {
  let spo =
    category && EXTERNAL_SPO[category]
      ? EXTERNAL_SPO[category].find((s) => s.id === id)
      : DATASET.spo[id];
  const contentDiv = document.getElementById("spo-content");
  if (!spo) return;

  contentDiv.innerHTML = `
        <div class="report-header" style="text-align:center; border-bottom:2px solid #333; padding-bottom:1rem; margin-bottom:2rem;">
            <div style="font-size:1.4rem; font-weight:800; color:var(--primary);">${spo.judul}</div>
            <div style="font-size:0.9rem; color:var(--text-muted); text-transform:uppercase;">Standar Operasional Prosedur Keperawatan Jiwa</div>
        </div>
        <div class="report-section">
            <h4 style="border-left:4px solid var(--primary); padding-left:10px; margin-bottom:1rem;">I. PENGERTIAN</h4>
            <div class="clinical-content" style="background:#f8fafc; padding:1rem; border-radius:8px;">${formatClinicalText(spo.pengertian)}</div>
        </div>
        <div class="report-section">
            <h4 style="border-left:4px solid var(--primary); padding-left:10px; margin-bottom:1rem;">II. TUJUAN</h4>
            <div class="clinical-content">${formatClinicalText(spo.tujuan)}</div>
        </div>
        <div class="grid" style="display:grid; grid-template-columns: 1fr 1fr; gap:1.5rem; margin-bottom:1.5rem;">
            <div class="report-section">
                <h4 style="border-left:4px solid var(--primary); padding-left:10px; margin-bottom:1rem;">III. INDIKASI</h4>
                <div class="clinical-content" style="font-size:0.9rem;">${formatClinicalText(spo.indikasi || spo.indikasikasi)}</div>
            </div>
            ${spo.kontraindikasi ? `<div class="report-section"><h4 style="border-left:4px solid var(--accent); padding-left:10px; margin-bottom:1rem;">IV. KONTRAINDIKASI</h4><div class="clinical-content" style="font-size:0.9rem;">${formatClinicalText(spo.kontraindikasi)}</div></div>` : ""}
        </div>
        <div class="report-section">
            <h4 style="border-left:4px solid var(--primary); padding-left:10px; margin-bottom:1rem;">V. PERSIAPAN ALAT & PETUGAS</h4>
            <div style="background:#fff7ed; padding:1rem; border-radius:8px; border:1px solid #ffedd5;">
                <p><strong>Petugas:</strong> ${spo.petugas || "-"}</p><p><strong>Alat:</strong> ${spo.alat || "-"}</p>
            </div>
        </div>
        <div class="report-section">
            <h4 style="border-left:4px solid var(--primary); padding-left:10px; margin-bottom:1rem;">VI. PROSEDUR TINDAKAN</h4>
            <div class="clinical-content" style="background:#f0f9ff; padding:1.5rem; border-radius:12px; border:1px solid #e0f2fe;">${formatClinicalText(spo.prosedur)}</div>
        </div>
        ${spo.dokumentasi ? `<div class="report-section"><h4 style="border-left:4px solid var(--primary); padding-left:10px; margin-bottom:1rem;">VII. DOKUMENTASI</h4><div class="clinical-content" style="font-size:0.9rem;">${formatClinicalText(spo.dokumentasi)}</div></div>` : ""}
        <div style="margin-top: 3rem; text-align: center;" class="no-print">
            <button class="btn btn-primary" onclick="window.print()"><i data-lucide="printer"></i> Cetak SPO Lengkap</button>
        </div>
    `;
  contentDiv.style.display = "block";
  if (typeof lucide !== "undefined") lucide.createIcons();
  contentDiv.scrollIntoView({ behavior: "smooth" });
};
