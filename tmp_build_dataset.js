const fs = require("fs");
const path = "c:/laragon/www/JiwaCare/dataset.js";

// Load initial structure
const ds = {
  lp: [
    // ... I'll use the ones I already wrote but with more detail where needed
  ],
  obat: [
    {
      nama: "Haloperidol",
      jenis: "Antipsikotik Tipikal (Potensi Tinggi)",
      dosis:
        "Oral: 2-5 mg (2-3x sehari). Injeksi IM: 5 mg (setiap 30-60 menit jika diperlukan, max 20mg/hari).",
      indikasi:
        "<b>UTAMA:</b> Mengontrol gejala positif psikotik (Halusinasi, Waham) dengan cepat. <b>KRISIS:</b> Kegawatdaruratan psikiatri (Gaduh gelisah, amuk, agresivitas ekstrem). <b>LAINNYA:</b> Sindrom Tourette, gangguan perilaku berat pada anak.",
      efek: "<b>TAJAM (E.P.S):</b> Risiko sangat tinggi Sindrom Ekstrapiramidal. 1. <i>Distonia Akut:</i> Kekakuan otot mendadak (leher terpelintir, lidah menjulur). 2. <i>Akatisia:</i> Kegelisahan motorik ekstrem (tidak bisa duduk tenang). 3. <i>Parkinsonisme:</i> Tangan gemetar, jalan menyeret. 4. <i>Tardive Dyskinesia:</i> Gerakan involunter lidah/wajah (penggunaan kronis). <b>VITAL:</b> Risiko Sindrom Neuroleptik Malignan (Demam tinggi, kaku otot seluruh tubuh) - SEGERA hentikan obat!",
    },
    {
      nama: "Chlorpromazine (CPZ)",
      jenis: "Antipsikotik Tipikal (Potensi Rendah)",
      dosis: "25-100 mg (Malam hari). Max 1000 mg/hari.",
      indikasi:
        "<b>SEDASI:</b> Pasien psikotik dengan agitasi psikomotor hebat yang tidak bisa tidur. <b>ANTI-EMETIK:</b> Mual muntah berat. <b>LAINNYA:</b> Cegukan persisten (Singultus) yang tidak kunjung berhenti.",
      efek: "<b>SEDASI BERAT:</b> Mengantuk sangat dalam. <b>OTONOM:</b> Hipotensi Ortostatik (pudar/pusing saat berdiri mendadak - RISIKO JATUH!), mulut kering, konstipasi, retensi urin (hati-hati pada BPH). <b>KULIT:</b> Fotosensitivitas (sensitif matahari).",
    },
    {
      nama: "Risperidone",
      jenis: "Antipsikotik Atipikal (Generasi II)",
      dosis: "1-4 mg (2x sehari). Max 16 mg/hari.",
      indikasi:
        "<b>GEJALA POSITIF & NEGATIF:</b> Efektif untuk halusinasi sekaligus memperbaiki afek datar/apatis (meningkatkan minat sosial). <b>AUTISME:</b> Agresivitas pada penderita autisme.",
      efek: "<b>HORMONAL:</b> Hiperprolaktinemia (Peningkatan hormon prolaktin -> Keluar ASI walau tidak hamil, payudara membesar pada pria, gangguan haid). <b>METABOLIK:</b> Kenaikan berat badan sedang, pusing, somnolen (ngantuk).",
    },
    {
      nama: "Olanzapine",
      jenis: "Antipsikotik Atipikal (Generasi II)",
      dosis: "5-10 mg (Malam). Max 20 mg/hari.",
      indikasi:
        "<b>BIPOLAR & PSIKOSIS:</b> Sangat kuat untuk episode manik akut dan skizofrenia yang membutuhkan stabilisasi mood cepat.",
      efek: "<b>METABOLIK EKSTREM:</b> Kenaikan berat badan signifikan (nafsu makan meningkat tajam), RISIKO TINGGI Diabetes Melitus tipe 2 (hiperglikemia), Hiperlipidemia. Sedasi sangat kuat.",
    },
    {
      nama: "Clozapine",
      jenis: "Antipsikotik Lini Terakhir (Gold Standard for Refractory)",
      dosis: "12.5 mg awal, titrasi bertahap hingga 300-600 mg/hari.",
      indikasi:
        "<b>RESISTENSI:</b> Khusus pasien yang gagal dengan minimal 2 jenis antipsikotik lain. <b>BUNUH DIRI:</b> Terbukti klinis menurunkan angka percobaan bunuh diri secara signifikan.",
      efek: "<b>HEMATOLOGI (VITAL):</b> Risiko Agranalusitosis (Sel darah putih turun drastis hingga nol) yang mematikan. WAJIB cek darah rutin (WBC/ANC) setiap minggu selama 6 bulan pertama. <b>LAINNYA:</b> Hipersalivasi (ileran hebat saat tidur), konstipasi parah (risiko ileus), kejang pada dosis tinggi, takikardia.",
    },
    {
      nama: "Quetiapine",
      jenis: "Antipsikotik Atipikal (Generasi II)",
      dosis: "25 mg (tidur) - 800 mg (psikosis).",
      indikasi:
        "<b>BIPOLAR & DEPRESI:</b> Episode depresi pada bipolar. Juga digunakan sebagai 'Sleep Aid' pada dosis kecil.",
      efek: "Sangat mengantuk (Somnolen), pusing, hipotensi, peningkatan berat badan moderat. Risiko katarak (perlu cek mata berkala).",
    },
    {
      nama: "Fluoxetine",
      jenis: "Antidepresan SSRI",
      dosis: "20 mg (Pagi hari).",
      indikasi: "Depresi Mayor, OCD, Bulimia, Gangguan Panik.",
      efek: "Insomnia, cemas di awal terapi, penurunan nafsu makan, disfungsi seksual. Risiko Sindrom Serotonin.",
    },
    {
      nama: "Lithium Carbonate",
      jenis: "Mood Stabilizer (Lini Pertama Bipolar)",
      dosis: "300 mg (2-3x sehari).",
      indikasi:
        "Manik akut dan pencegahan kekambuhan Bipolar. Menurunkan risiko bunuh diri.",
      efek: "<b>TOKSISITAS (VITAL):</b> Indeks terapi sangat sempit (batas antara dosis obat dan racun sangat tipis). Efek samping: Tremor halus tangan, haus berlebih (polidipsia), poliuria, diare, hipotiroid. WAJIB pantau kadar serum darah.",
    },
    {
      nama: "Trihexyphenidyl (THP)",
      jenis: "Agen Antikolinergik (Anti-EPS)",
      dosis: "2 mg (2x sehari).",
      indikasi:
        "MENGATASI EFEK SAMPING OBAT: Kekakuan otot, tremor, dan krisis okulogirik yang disebabkan oleh Haloperidol atau antipsikotik tipikal lainnya.",
      efek: "Mulut kering, pandangan kabur, konstipasi, denyut jantung cepat (takikardia), bingung (delirium) pada lansia.",
    },
  ],
  spo: {
    A: [
      // Pengkajian
      {
        id: "spo-a1",
        judul: "SPO Pengkajian Awal Keperawatan Jiwa",
        narasi:
          "<b>Tujuan:</b> Mendapatkan data dasar klien untuk diagnosis.<br><b>Prosedur:</b><br>1. Siapkan format pengkajian jiwa.<br>2. Lakukan wawancara dengan teknik <i>open-ended question</i>.<br>3. Observasi perilaku non-verbal.<br>4. Kaji keluhan utama dan riwayat penyakit.<br>5. Lakukan pemeriksaan tanda-vital.<br>6. Dokumentasikan hasil secara naratif dan sistematis.",
      },
      {
        id: "spo-a2",
        judul: "SPO Pemeriksaan Status Mental (MSE)",
        narasi:
          "<b>Tujuan:</b> Menilai fungsi mental saat ini secara objektif.<br><b>Prosedur:</b><br>1. Kaji Penampilan (kebersihan, pakaian).<br>2. Kaji Pembicaraan (cepat, lambat, koheren).<br>3. Kaji Aktivitas Motorik (agitasi, tremor).<br>4. Kaji Alam Perasaan (Mood & Afek).<br>5. Kaji Proses Pikir (Arus dan Isi pikir - Waham).<br>6. Kaji Persepsi (Halusinasi).<br>7. Kaji Kognitif (Orientasi, Memori).<br>8. Kaji Daya Nilai/Insight.",
      },
    ],
    B: [
      // Intervensi
      {
        id: "spo-b1",
        judul: "SPO Komunikasi Terapeutik",
        narasi:
          "<b>Langkah-langkah:</b><br>1. <b>Fase Pra-interaksi:</b> Eksplorasi perasaan perawat, analisis kelemahan/kekuatan diri, baca rekam medis.<br>2. <b>Fase Orientasi:</b> Salam terapeutik, validasi perasaan klien, kontrak (Topik, Waktu, Tempat).<br>3. <b>Fase Kerja:</b> Gunakan teknik mendengar aktif, refleksi, klarifikasi. Bantu klien pecahkan masalah.<br>4. <b>Fase Terminasi:</b> Evaluasi subjektif dan objektif, rencana tindak lanjut (tugas), kontrak pertemuan berikutnya.",
      },
      {
        id: "spo-b2",
        judul: "SPO Teknik Relaksasi Napas Dalam",
        narasi:
          "<b>Langkah-langkah:</b><br>1. Atur posisi nyaman (duduk/berbaring).<br>2. Letakkan tangan di perut.<br>3. Tarik nafas dalam melalui hidung (4 hitungan), rasakan perut mengembang.<br>4. Tahan nafas (2-3 hitungan).<br>5. Embuskan lewat mulut perlahan (6-8 hitungan) sampai paru kosong.<br>6. Ulangi 5-10 kali hingga rileks.",
      },
      {
        id: "spo-b3",
        judul: "SPO Latihan Menghardik Halusinasi",
        narasi:
          "<b>Prosedur:</b><br>1. Jelaskan tujuan menghardik (mengontrol suara/bayangan).<br>2. Peragakan cara menghardik: Tutup telinga, katakan dengan tegas 'Pergi kamu! Kamu suara palsu! Saya tidak mau dengar!'.<br>3. Minta klien mempraktikkan secara mandiri.<br>4. Beri reinforcement positif.<br>5. Masukkan dalam jadwal kegiatan harian.",
      },
    ],
    C: [
      // Krisis
      {
        id: "spo-c1",
        judul: "SPO Penanganan Pasien Amuk (Agitasi Ekstrem)",
        narasi:
          "<b>Prosedur:</b><br>1. Aktifkan Code Blue (jika ada) atau panggil bantuan (min 5 orang).<br>2. Pastikan keamanan lingkungan (singkirkan benda tajam).<br>3. Gunakan teknik <i>Show of Force</i> (tunjukkan kekuatan tapi tidak menyerang).<br>4. Lakukan de-eskalasi verbal (bicara tenang dan tegas).<br>5. Jika gagal, lakukan <i>holding technique</i> secara tim.<br>6. Kolaborasi pemberian obat penenang parenteral.<br>7. Lakukan restorasi keamanan pasien.",
      },
      {
        id: "spo-c2",
        judul: "SPO Pengikatan Fisik (Restraint)",
        narasi:
          "<b>Prosedur:</b><br>1. Jelaskan pada pasien/keluarga alasan pengikatan (keamanan).<br>2. Siapkan manset/tali lembut.<br>3. Ikat 4 titik (ekstremitas) pada tempat tidur. Pastikan ikatan tidak menghambat sirkulasi (jarak 2 jari).<br>4. Observasi vital sign dan sirkulasi setiap 30-60 menit.<br>5. Beri kesempatan pemenuhan ADL (makan/BAK).<br>6. Lepas segera jika kriteria tenang terpenuhi.",
      },
    ],
    D: [
      // Medis
      {
        id: "spo-d1",
        judul: "SPO Pemberian Obat Psikofarmaka",
        narasi:
          "<b>Prosedur:</b><br>1. Terapkan prinsip 7 Benar (Pasien, Obat, Dosis, Waktu, Cara, Dokumentasi, Edukasi).<br>2. Pastikan pasien benar-benar menelan obat (cek mulut/bawah lidah).<br>3. Monitor efek samping (EPS, sedasi berlebih).<br>4. Edukasi manfaat obat untuk mencegah kekambuhan.",
      },
    ],
    E: [
      // Rehab
      {
        id: "spo-e1",
        judul: "SPO Rehabilitasi Terapi Okupasi",
        narasi:
          "<b>Prosedur:</b> 1. Identifikasi minat dan bakat pasien. 2. Pilih kegiatan produktif (berkebun, membuat kerajinan). 3. Bimbing pasien melakukan aktivitas secara bertahap. 4. Evaluasi rasa percaya diri pasien setelah hasil karya jadi.",
      },
    ],
    F: [
      // Edukasi
      {
        id: "spo-f1",
        judul: "SPO Edukasi Keluarga (Psychoeducation)",
        narasi:
          "<b>Prosedur:</b> 1. Jelaskan penyakit pasien (penyebab, gejala). 2. Ajarkan cara merawat di rumah (SP Keluarga). 3. Jelaskan pentingnya kepatuhan obat. 4. Jelaskan tanda kekambuhan yang harus diwaspadai.",
      },
    ],
    G: [
      // Admin
      {
        id: "spo-g1",
        judul: "SPO Penerimaan Pasien Baru Jiwa",
        narasi:
          "<b>Prosedur:</b> 1. Serah terima pasien dari IGD/Keluarga. 2. Cek barang bawaan (singkirkan benda berbahaya). 3. Lakukan pengkajian awal kilat. 4. Orientasikan pasien pada lingkungan ruangan.",
      },
    ],
  },
};

// ... add existing LP data from categorized list ...
// I will just use the code to overwrite the file with the final content.
