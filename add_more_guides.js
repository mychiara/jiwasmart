const fs = require("fs");
let html = fs.readFileSync("index.html", "utf8");

const guides = [
  {
    // LP - Identitas Mahasiswa
    regex: /(<h4 class="section-badge">IDENTITAS MAHASISWA<\/h4>)/g,
    color: "#3b82f6", // blue
    text: "Isi data diri Anda sebagai perawat/mahasiswa. Data ini akan tercetak sebagai pembuat Laporan Pendahuluan di dokumen PDF.",
  },
  {
    // LP - Kasus / Diagnosis
    regex:
      /(<h4 class="section-badge" style="margin-top: 1.5rem;">KASUS \/ DIAGNOSIS KEPERAWATAN<\/h4>)/g,
    color: "#3b82f6", // blue
    text: "Pilih kasus penyakit kejiwaan (kode SDKI) yang ditugaskan. Mesin akan mengekstrak Laporan Pendahuluan komprehensif dari database standar nasional.",
  },
  {
    // ASKEP - Identitas
    regex:
      /(<div style="font-weight: 600; color: var\(--secondary\); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">\s*<i data-lucide="user" style="width: 20px;"><\/i> 1. Identitas Pasien \(Auto-fill\)\s*<\/div>)/g,
    color: "#22c55e", // green
    text: "Identitas ini otomatis terisi jika Anda sudah mengerjakan Pengkajian Awal. Pastikan data tidak kosong sebelum merender ASKEP.",
  },
  {
    // ASKEP - Pengkajian
    regex:
      /(<div style="font-weight: 600; color: var\(--secondary\); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">\s*<i data-lucide="form-input" style="width: 20px;"><\/i> 2. Pengkajian Keperawatan Jiwa\s*<\/div>)/g,
    color: "#22c55e", // green
    text: "Centang setiap keluhan (DS/DO) yang relevan dengan kondisi pasien. Diagnosis akhir akan ditentukan oleh algoritma pembobotan otomatis (Triage Score) berdasarkan gejala terbanyak & paling gawat.",
  },
  {
    // ASKEP - TTV
    regex:
      /(<div style="font-weight: 600; color: var\(--secondary\); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem; margin-top: 2rem;">\s*<i data-lucide="activity" style="width: 20px;"><\/i> 3. Observasi Tanda Vital\s*<\/div>)/g,
    color: "#22c55e", // green
    text: "Input hasil pemeriksaan TTV terakhir. Ini akan dimasukkan ke dalam sub-bab Observasi Obyektif pada dokumen cetak PDF.",
  },
  {
    // SAD PERSONS
    regex:
      /(<h2 class="text-gradient">Risiko Bunuh Diri \(SAD PERSONS\)<\/h2>\s*<p class="description">Instrumen pengkajian cepat untuk mengukur tingkat risiko bunuh diri pada pasien. Centang kriteria yang ditemukan pada pasien.<\/p>)/g,
    color: "#ef4444", // red
    text: "PANDUAN KLINIS: Skala ini digunakan saat triase psikiatri atau saat pasien menunjukkan ide bunuh diri. Skor 0-2 = Pulang dengan tindak lanjut, 3-4 = Rawat jalan ketat, 5-6 = Pertimbangkan rawat inap, 7-10 = Wajib rawat inap darurat.",
  },
  {
    // STATUS MENTAL
    regex:
      /(<h2 class="text-gradient">Mini Mental State Exam \(MMSE\)<\/h2>\s*<p class="description">Instrumen pengkajian cepat untuk menilai fungsi kognitif dan status mental.<\/p>)/g,
    color: "#f59e0b", // orange
    text: "PANDUAN KLINIS: Gunakan MMSE untuk mendeteksi gangguan kognitif organik (seperti Demensia atau Delirium). Tanyakan setiap pertanyaan secara verbal dan nilai respon pasien dengan seksama.",
  },
  {
    // HARS
    regex:
      /(<h2 class="text-gradient">Hamilton Anxiety Rating Scale \(HARS\)<\/h2>\s*<p class="description">Instrumen standar untuk mengukur tingkat kecemasan pada klien.<\/p>)/g,
    color: "#8b5cf6", // purple
    text: "PANDUAN KLINIS: HARS mengukur keparahan kecemasan somatik dan psikis. 0 = Tidak Ada, 1 = Ringan, 2 = Sedang, 3 = Berat, 4 = Sangat Berat. Total skor >14 menandakan kecemasan bermakna secara klinis.",
  },
];

for (const g of guides) {
  const helperHtml = `\n              <div style="background: #f8fafc; border-left: 3px solid ${g.color}; padding: 8px 12px; font-size: 0.8rem; color: #475569; margin-top: 0.5rem; margin-bottom: 1.25rem; font-style: italic; border-radius: 4px;">\n                <i data-lucide="info" style="width:14px; height:14px; display:inline; margin-right:4px; vertical-align:middle;"></i>${g.text}\n              </div>`;
  html = html.replace(g.regex, `$1${helperHtml}`);
}

fs.writeFileSync("index.html", html, "utf8");
console.log("Panduan menu lainnya berhasil ditambahkan.");
