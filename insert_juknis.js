const fs = require("fs");
let html = fs.readFileSync("index.html", "utf8");

const lpJuknis = `
            <!-- JUKNIS BOX -->
            <div style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 1rem; border-radius: 6px; margin: 1.5rem 0;">
              <p style="margin: 0; font-size: 0.85rem; color: #1e3a8a; line-height: 1.5;">
                <strong><i data-lucide="info" style="width:16px; display:inline; vertical-align:middle;"></i> PETUNJUK TEKNIS (JUKNIS) - LAPORAN PENDAHULUAN (LP):</strong><br>
                Menu ini khusus digunakan untuk menyusun <strong>kerangka teori medis (tugas akademik) sebelum observasi pasien</strong>. Berisi Konsep Dasar Penyakit, Clinical Pathway, dan Rencana Teori. <em>Harap TIDAK menginput keluhan nyata / Tanda Vital spesifik pasien di menu ini.</em>
              </p>
            </div>
`;

const askepJuknis = `
            <!-- JUKNIS BOX -->
            <div style="background: #fdf4ff; border-left: 4px solid #d946ef; padding: 1rem; border-radius: 6px; margin-bottom: 2rem;">
              <p style="margin: 0; font-size: 0.85rem; color: #701a75; line-height: 1.5;">
                <strong><i data-lucide="info" style="width:16px; display:inline; vertical-align:middle;"></i> PETUNJUK TEKNIS (JUKNIS) - PENGKAJIAN AWAL:</strong><br>
                Gunakan menu ini sebagai <strong>Tahap Pertama (Observasi Nyata)</strong> saat Anda berhadapan langsung dengan pasien di bangsal. Input identitas asli, Anamnesa (Keluhan Utama), dan Tanda Vital. Seluruh data pasien akan disimpan otomatis dan terhubung (autofill) ke menu ASKEP.
              </p>
            </div>
`;

const askepGeneratorJuknis = `
            <!-- JUKNIS BOX -->
            <div style="background: #f0fdf4; border-left: 4px solid #22c55e; padding: 1rem; border-radius: 6px; margin-bottom: 2rem;">
              <p style="margin: 0; font-size: 0.85rem; color: #14532d; line-height: 1.5;">
                <strong><i data-lucide="info" style="width:16px; display:inline; vertical-align:middle;"></i> PETUNJUK TEKNIS (JUKNIS) - ASKEP (ASUHAN KEPERAWATAN):</strong><br>
                Menu ini merupakan <strong>Tahap Akhir</strong> untuk merumuskan intervensi klinis dan mencetak (Print PDF). Pastikan Anda telah mengisi data dari menu 'Pengkajian Awal' agar identitas pasien otomatis terisi. Centang gejala (DS/DO) secara seksama agar algoritma menghasilkan diagnosa dan rencana SIKI/SLKI yang akurat.
              </p>
            </div>
`;

// Insert LP Juknis
html = html.replace(
  /<section id="generator-lp"[^>]*>[\s\S]*?<h2 class="card-title">[\s\S]*?<\/h2>/m,
  (match) => {
    if (match.includes("PETUNJUK TEKNIS")) return match;
    return match + lpJuknis;
  },
);

// Insert Pengkajian Juknis
html = html.replace(
  /<section id="assessment-digital"[^>]*>[\s\S]*?<div class="badge"[^>]*>Format Standar Nasional<\/div>\s*<\/div>\s*<\/div>/m,
  (match) => {
    if (match.includes("PETUNJUK TEKNIS")) return match;
    return match + askepJuknis;
  },
);

// Insert ASKEP Juknis
html = html.replace(
  /<section id="generator-askep"[^>]*>[\s\S]*?<div class="card">/m,
  (match) => {
    if (match.includes("PETUNJUK TEKNIS")) return match;
    return match + askepGeneratorJuknis;
  },
);

fs.writeFileSync("index.html", html, "utf8");
console.log("JUKNIS berhasil ditambahkan.");
