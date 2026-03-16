/**
 * ASKEP JIWA SMART - Bookmarks & Table Filters
 */

window.getBookmarks = function () {
  return JSON.parse(localStorage.getItem("askep_bookmarks") || "[]");
};

window.toggleBookmark = function (kode) {
  let bookmarks = getBookmarks();
  if (bookmarks.includes(kode)) {
    bookmarks = bookmarks.filter((b) => b !== kode);
  } else {
    bookmarks.push(kode);
  }
  localStorage.setItem("askep_bookmarks", JSON.stringify(bookmarks));
  if (typeof window.renderSDKITable === "function") {
    const searchVal = document.getElementById("search-sdki")
      ? document.getElementById("search-sdki").value
      : "";
    window.renderSDKITable(searchVal);
  }

  Swal.fire({
    title: bookmarks.includes(kode) ? "Ditandai" : "Dihapus",
    text: "Diagnosa berhasil diperbarui di bookmark.",
    icon: "success",
    timer: 1000,
    showConfirmButton: false,
  });
};

window.renderSDKITable = function (filter = "") {
  const tbody = document.getElementById("sdki-table-body");
  if (!tbody) return;
  tbody.innerHTML = "";
  const dataSource = EXTERNAL_SDKI.length > 0 ? EXTERNAL_SDKI : DATASET.sdki;
  const filtered = dataSource.filter(
    (d) =>
      (d.Nama || d.nama || "").toLowerCase().includes(filter.toLowerCase()) ||
      (d.Kode || d.kode || "").toLowerCase().includes(filter.toLowerCase()),
  );
  filtered.forEach((d) => {
    const kode = d.Kode || d.kode;
    const nama = d.Nama || d.nama;
    const definisi = d.Definisi || d.definisi;
    const isBookmarked = getBookmarks().includes(kode);
    tbody.innerHTML += `
        <tr>
            <td><b>${kode}</b></td>
            <td>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <b>${nama}</b>
                    <button class="btn-icon" onclick="toggleBookmark('${kode}')" style="color:${isBookmarked ? "var(--accent)" : "#cbd5e1"};">
                        <i data-lucide="${isBookmarked ? "bookmark-check" : "bookmark"}"></i>
                    </button>
                </div>
            </td>
            <td>${definisi}</td>
        </tr>`;
  });
  if (typeof lucide !== "undefined") lucide.createIcons();
};

window.renderSLKITable = function () {
  const slkiTable = document.getElementById("slki-table-body");
  if (!slkiTable) return;
  slkiTable.innerHTML = "";
  const dataSource = EXTERNAL_SLKI.length > 0 ? EXTERNAL_SLKI : DATASET.slki;
  dataSource.forEach((s) => {
    slkiTable.innerHTML += `<tr><td>${s.Kode || s.id}</td><td><b>${s.Nama || s.nama}</b></td><td>${s["Kriteria Hasil"] || s.kriteria || "-"}</td></tr>`;
  });
};

window.renderSIKITable = function () {
  const sikiTable = document.getElementById("siki-table-body");
  if (!sikiTable) return;
  sikiTable.innerHTML = "";
  const dataSource = EXTERNAL_SIKI.length > 0 ? EXTERNAL_SIKI : DATASET.siki;
  dataSource.forEach((s) => {
    const tindakan =
      s.intervensi ||
      `<b>Obs:</b> ${s.Observasi || "-"}<br><b>Tera:</b> ${s.Terapeutik || "-"}<br><b>Eduk:</b> ${s.Edukasi || "-"}<br><b>Kolab:</b> ${s.Kolaborasi || "-"}`;
    sikiTable.innerHTML += `<tr><td>${s.Kode || s.id}</td><td><b>${s.Nama || s.nama}</b></td><td>${tindakan}</td></tr>`;
  });
};
