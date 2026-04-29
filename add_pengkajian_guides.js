const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const guides = {
  "I. IDENTITAS KLIEN": "Isi data demografi dasar pasien secara akurat. Data ini akan otomatis tersinkronisasi ke laporan ASKEP.",
  "II. ALASAN MASUK": "Catat kutipan langsung keluhan utama secara subjektif (apa yang dikatakan pasien/keluarga) yang mendasari admisi/perawatan ke rumah sakit.",
  "III. FAKTOR PREDISPOSISI": "Evaluasi riwayat gangguan sebelumnya, trauma psikologis, pengobatan masa lalu, atau faktor genetik yang menjadi akar kerentanan pasien.",
  "IV. FISIK": "Dokumentasikan tanda-tanda vital (TTV) dan keluhan somatik. Angka TTV akan ditarik otomatis ke lembar observasi objektif pada menu ASKEP.",
  "V. PSIKOSOSIAL": "Kaji komponen konsep diri (citra tubuh, identitas, peran), kualitas interaksi sosial, serta aspek spiritual sebagai sistem pendukung pasien.",
  "VI. STATUS MENTAL": "Lakukan observasi klinis secara menyeluruh terkait penampilan visual, gaya bicara, afek/mood, hingga gangguan proses pikir (waham/halusinasi) saat ini.",
  "VII. KEBUTUHAN PERSIAPAN PULANG": "Evaluasi dan centang tingkat kemandirian pasien dalam melakukan Aktivitas Kehidupan Sehari-hari (ADL) untuk menentukan rencana discharge planning.",
  "VIII. MEKANISME KOPING": "Identifikasi respons kognitif dan perilaku pasien saat menghadapi stresor, untuk membedakan penggunaan koping adaptif (konstruktif) atau maladaptif (destruktif)."
};

for (const [title, guide] of Object.entries(guides)) {
  const regex = new RegExp(`(<h4 class="section-badge">${title}<\/h4>)`, 'g');
  const helperHtml = `\n                  <div style="background: #f8fafc; border-left: 3px solid #8b5cf6; padding: 8px 12px; font-size: 0.8rem; color: #475569; margin-bottom: 1.25rem; font-style: italic; border-radius: 4px;">\n                    <i data-lucide="info" style="width:14px; height:14px; display:inline; margin-right:4px; vertical-align:middle;"></i>${guide}\n                  </div>`;
  html = html.replace(regex, `$1${helperHtml}`);
}

fs.writeFileSync('index.html', html, 'utf8');
console.log("Panduan Pengkajian Awal berhasil ditambahkan.");
