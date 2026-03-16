/**
 * ASKEP JIWA SMART - Dashboard & Charts
 */

window.diagnosaChart = null;
window.trendChart = null;

window.updateDashboardStats = function () {
  const history = JSON.parse(localStorage.getItem("askep_history") || "[]");

  const stats = {
    lp: DATASET.lp.length,
    sdki:
      window.EXTERNAL_SDKI && window.EXTERNAL_SDKI.length > 0
        ? window.EXTERNAL_SDKI.length
        : DATASET.sdki.length,
    jiwa:
      window.EXTERNAL_JIWA && window.EXTERNAL_JIWA.length > 0
        ? window.EXTERNAL_JIWA.length
        : 0,
    tak:
      window.EXTERNAL_TAK && Object.keys(window.EXTERNAL_TAK).length > 0
        ? Object.keys(window.EXTERNAL_TAK).length
        : Object.keys(DATASET.tak).length,
    spo: (() => {
      if (window.EXTERNAL_SPO && Object.keys(window.EXTERNAL_SPO).length > 0) {
        return Object.values(window.EXTERNAL_SPO).reduce(
          (acc, cat) => acc + (Array.isArray(cat) ? cat.length : 0),
          0,
        );
      }
      return Object.keys(DATASET.spo).length;
    })(),
    obat: DATASET.obat.length,
    instrumen: DATASET.scales.length + 2, // Scales + SAD PERSONS + MSE
  };

  // Update Counters in UI
  const mappings = {
    "stat-lp": stats.lp,
    "stat-sdki": stats.sdki,
    "stat-jiwa": stats.jiwa,
    "stat-tak": stats.tak,
    "stat-spo": stats.spo,
    "stat-obat": stats.obat,
    "stat-instrumen": stats.instrumen,
    "stat-history": history.length,
  };

  for (const [id, val] of Object.entries(mappings)) {
    const el = document.getElementById(id);
    if (el) el.innerText = val;
  }

  const counts = {
    Halusinasi: 0,
    "Isolasi Sosial": 0,
    HDR: 0,
    PK: 0,
    Waham: 0,
    Lainnya: 0,
  };

  const monthlyData = new Array(6).fill(0); // Last 6 slots for trend
  const monthLabels = [];
  const now = new Date();
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    monthLabels.push(d.toLocaleDateString("id-ID", { month: "short" }));
  }

  history.forEach((item) => {
    const dx = item.diagnosa || "";
    if (dx.includes("Halusinasi")) counts["Halusinasi"]++;
    else if (dx.includes("Isolasi Sosial")) counts["Isolasi Sosial"]++;
    else if (dx.includes("Harga Diri Rendah")) counts["HDR"]++;
    else if (dx.includes("Perilaku Kekerasan")) counts["PK"]++;
    else if (dx.includes("Waham")) counts["Waham"]++;
    else counts["Lainnya"]++;

    // Simple month trend matching
    const itemDate = new Date(item.tanggal.split("/").reverse().join("-"));
    const diff =
      (now.getFullYear() - itemDate.getFullYear()) * 12 +
      (now.getMonth() - itemDate.getMonth());
    if (diff >= 0 && diff < 6) {
      monthlyData[5 - diff]++;
    }
  });

  // Chart 1: Doughnut
  const ctxEl = document.getElementById("diagnosaChart");
  if (ctxEl) {
    const ctx = ctxEl.getContext("2d");
    if (
      window.diagnosaChart &&
      typeof window.diagnosaChart.destroy === "function"
    ) {
      window.diagnosaChart.destroy();
    }
    window.diagnosaChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: Object.keys(counts),
        datasets: [
          {
            data: Object.values(counts),
            backgroundColor: [
              "#6366f1",
              "#8b5cf6",
              "#ec4899",
              "#f43f5e",
              "#f59e0b",
              "#64748b",
            ],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "right",
            labels: { usePointStyle: true, font: { size: 10 } },
          },
        },
      },
    });
  }

  // Chart 2: Bar Trend
  const trendEl = document.getElementById("trendChart");
  if (trendEl) {
    const ctxTrend = trendEl.getContext("2d");
    if (window.trendChart && typeof window.trendChart.destroy === "function") {
      window.trendChart.destroy();
    }
    window.trendChart = new Chart(ctxTrend, {
      type: "bar",
      data: {
        labels: monthLabels,
        datasets: [
          {
            label: "Jumlah Laporan",
            data: monthlyData,
            backgroundColor: "rgba(99, 102, 241, 0.2)",
            borderColor: "#6366f1",
            borderWidth: 2,
            borderRadius: 5,
          },
        ],
      },
      options: {
        responsive: true,
        scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } },
        plugins: { legend: { display: false } },
      },
    });
  }
};

window.renderObatTable = function (filter = "") {
  const obatTable = document.getElementById("obat-table-body");
  if (!obatTable || !DATASET.obat) return;

  const filteredObat = DATASET.obat.filter((o) => {
    const searchStr = (o.nama + " " + o.jenis + " " + o.indikasi).toLowerCase();
    return searchStr.includes(filter.toLowerCase());
  });

  obatTable.innerHTML = "";
  if (filteredObat.length === 0) {
    obatTable.innerHTML =
      '<tr><td colspan="5" style="text-align:center; padding:2rem; color:var(--text-muted);">Tidak ada data obat yang cocok.</td></tr>';
    return;
  }

  filteredObat.forEach((o) => {
    obatTable.innerHTML += `
            <tr style="transition: background 0.2s ease;">
                <td><b style="color:var(--primary);">${o.nama}</b></td>
                <td><span style="background:var(--primary-soft); color:var(--primary); padding:4px 10px; border-radius:12px; font-size:0.75rem; font-weight:600;">${o.jenis}</span></td>
                <td><div style="font-size:0.85rem; font-weight:500;">${o.dosis}</div></td>
                <td><div style="font-size:0.85rem;">${o.indikasi}</div></td>
                <td><small style="color:var(--text-muted); line-height:1.4;">${o.efek}</small></td>
            </tr>`;
  });
};

window.initDashboard = function () {
  const now = new Date();
  const dateEl = document.getElementById("current-date");
  if (dateEl) {
    dateEl.innerText = now.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  // Initial Render
  if (typeof renderHistory === "function") renderHistory();
  updateDashboardStats();

  const sdkiSearch = document.getElementById("search-sdki");
  if (sdkiSearch) {
    sdkiSearch.addEventListener("input", (e) => {
      if (typeof renderSDKITable === "function")
        renderSDKITable(e.target.value);
    });
  }

  // Populate Obat Table
  renderObatTable();
};
