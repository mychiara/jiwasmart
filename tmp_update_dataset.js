const fs = require("fs");
const path = "c:/laragon/www/JiwaCare/dataset.js";

const DATASET = {
  lp: [
    // === ASKEP JIWA DIAGNOSIS SEHAT === (10 Items)
    {
      id: "sehat-perkembangan-ibu-hamil",
      sdki: "D.0123",
      kategori: "ASKEP JIWA DIAGNOSIS SEHAT",
      nama: "Kesiapan Peningkatan Perkembangan Ibu Hamil",
      definisi:
        "Suatu masa transisi psikologis dan fisiologis di mana ibu hamil menunjukkan kesiapan untuk mengoptimalkan kesehatan dirinya dan janin, serta siap mengadopsi peran sebagai orang tua.",
      etiologi:
        "Faktor transisi siklus kehidupan, keinginan untuk meningkatkan kesehatan mental-fisik, serta dukungan sistem yang adekuat.",
      manifestasi_klinis:
        "Ibu aktif bertanya tentang kehamilan, menunjukkan kasih sayang pada janin (mengusap perut), mempersiapkan perlengkapan bayi, dan menjaga pola makan - istirahat.",
      patofisiologi:
        "Tahap perkembangan krisis maturasi. Ibu mengalami penyesuaian identitas dari individu menjadi orang tua. Kesiapan ini melibatkan kematangan kognitif dan afektif dalam menerima perubahan biologis.",
      tanda_gejala:
        "Subjektif: Menyatakan ingin tahu cara merawat janin. Objektif: Melakukan pemeriksaan rutin, bertanya tentang laktasi.",
      pemeriksaan_penunjang: "USG, Skala Bonding Ibu-Anak.",
      penatalaksanaan_medis:
        "Edukasi ANC, Psikoedukasi Prenatal, Suplementasi Asam Folat.",
      pathway:
        "Kehamilan -> Perubahan Peran -> Kesiapan Belajar -> Optimalisasi Kesehatan Janin.",
      pathway_diagram: [
        { from: "Konsepsi & Kehamilan", to: "Krisis Maturasi (Perkembangan)" },
        {
          from: "Krisis Maturasi (Perkembangan)",
          to: "Kesiapan Peningkatan Perkembangan",
        },
      ],
      fokus_pengkajian:
        "Pengetahuan tentang kehamilan, dukungan suami, kesiapan finansial dan mental.",
      sp_pasien:
        "SP 1: Diskusikan perubahan fisik dan psikologis selama hamil. SP 2: Melatih cara stimulasi janin (komunikasi dalam rahim). SP 3: Menyusun rencana persalinan.",
      sp_keluarga:
        "SP 1: Menjadi pendukung utama ibu hamil. SP 2: Membawa ibu kontrol rutin.",
      discharge_planning: "Rencana persalinan aman, persiapan ASI eksklusif.",
      edukasi_keluarga: "Ciptakan lingkungan tenang dan bahagia untuk ibu.",
      obat_rekomendasi: [],
      referensi: ["PPNI (2016)", "Kozier (2010)"],
    },
    {
      id: "sehat-perkembangan-bayi",
      sdki: "D.0104",
      kategori: "ASKEP JIWA DIAGNOSIS SEHAT",
      nama: "Kesiapan Peningkatan Perkembangan Bayi (Usia 0-18 bulan)",
      definisi:
        "Kemampuan untuk mengembangkan rasa percaya (Basic Trust) terhadap lingkungan dan orang melalui interaksi yang positif.",
      etiologi:
        "Kematangan biologis, stimulasi lingkungan yang tepat, kasih sayang pengasuh.",
      manifestasi_klinis:
        "Bayi tersenyum saat diajak bicara, mampu mengenali wajah pengasuh, menatap mata (eye contact), dan bereaksi terhadap suara lembut.",
      patofisiologi:
        "Tahap Trust vs Mistrust (Erikson). Jika kebutuhan fisik dan emosional bayi terpenuhi dengan konsisten, bayi akan mengembangkan rasa aman terhadap dunia.",
      tanda_gejala:
        "Objektif: Refleks hisap kuat, BB meningkat sesuai kurva, respon motorik aktif.",
      pemeriksaan_penunjang:
        "KMS (Kartu Menuju Sehat), Denver II Development Test.",
      penatalaksanaan_medis:
        "Imunisasi, SDIDTK (Stimulasi Deteksi Intervensi Dini Tumbuh Kembang).",
      pathway:
        "Bayi Lahir -> Stimulasi Pengasuh -> Kepercayaan Dasar (Trust) -> Perkembangan Optimal.",
      pathway_diagram: [
        { from: "Pemenuhan Kebutuhan Biopsikososial", to: "Basic Trust" },
        { from: "Basic Trust", to: "Pertumbuhan & Perkembangan Sehat" },
      ],
      fokus_pengkajian: "Pola asuh, pemberian ASI, interaksi ibu-bayi.",
      sp_pasien:
        "SP 1: Latih stimulasi motorik dan sensorik bayi. SP 2: Berikan kasih sayang (pelukan/sentuhan).",
      sp_keluarga:
        "SP 1: Edukasi keluarga tentang tahap perkembangan bayi. SP 2: Memastikan lingkungan aman (safety) bagi bayi.",
      discharge_planning: "Jadwal imunisasi, pemberian MPASI mulai 6 bulan.",
      edukasi_keluarga:
        "Jangan biarkan bayi menangis terlalu lama tanpa respon.",
      obat_rekomendasi: [],
      referensi: ["PPNI (2016)", "Wong's Nursing Care of Infants and Children"],
    },
    {
      id: "sehat-perkembangan-kanak",
      kategori: "ASKEP JIWA DIAGNOSIS SEHAT",
      nama: "Kesiapan Peningkatan Perkembangan Kanak-Kanak (1.5 - 3 tahun)",
      definisi:
        "Tahap perkembangan di mana anak mulai belajar mandiri (Autonomy) dan mengontrol diri.",
      sdki: "D.0123",
      etiologi: "Kematangan saraf motorit dan bahasa.",
      manifestasi_klinis:
        "Anak mulai bicara 2-3 kata, belajar jalan, ingin makan sendiri.",
      patofisiologi:
        "Tahap Autonomy vs Shame & Doubt. Anak mengeksplorasi lingkungan.",
      tanda_gejala: "Subjektif: Anak sering bilang 'Mau sendiri'.",
      pemeriksaan_penunjang: "DDST II.",
      penatalaksanaan_medis: "SDIDTK.",
      discharge_planning: "Toilet training.",
      sp_pasien: "Latih anak membereskan mainan.",
      sp_keluarga: "Berikan kesempatan anak bereksplorasi dengan pengawasan.",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "sehat-perkembangan-prasekolah",
      kategori: "ASKEP JIWA DIAGNOSIS SEHAT",
      nama: "Kesiapan Peningkatan Perkembangan Anak Pra-Sekolah (3 - 6 tahun)",
      definisi:
        "Tahap Initiative vs Guilt, di mana anak belajar berinisiatif dalam aktivitas.",
      sdki: "D.0123",
      etiologi: "Interaksi sosial yang lebih luas di PAUD/TK.",
      manifestasi_klinis:
        "Anak suka bertanya 'Mengapa', bermain peran, imajinasi tinggi.",
      patofisiologi: "Inisiatif muncul dari rasa ingin tahu yang besar.",
      tanda_gejala: "Anak aktif bergerak dan bermain dengan teman sebaya.",
      pemeriksaan_penunjang: "KPSP.",
      penatalaksanaan_medis: "Stimulasi psikososial.",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "sehat-perkembangan-anak-sekolah",
      kategori: "ASKEP JIWA DIAGNOSIS SEHAT",
      nama: "Kesiapan Peningkatan Perkembangan Anak Sekolah (6 - 12 tahun)",
      definisi:
        "Tahap Industry vs Inferiority, anak mengembangkan keterampilan dan rasa kompeten.",
      sdki: "D.0123",
      etiologi: "Tuntutan akademik dan sosial sekolah.",
      manifestasi_klinis:
        "Anak bangga dengan hasil karyanya, mampu bekerja sama dalam tim.",
      patofisiologi: "Fokus pada pencapaian dan apresiasi lingkungan.",
      tanda_gejala:
        "Anak mampu membaca, menulis, dan berhitung sesuai usianya.",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "sehat-perkembangan-remaja",
      kategori: "ASKEP JIWA DIAGNOSIS SEHAT",
      nama: "Kesiapan Peningkatan Perkembangan Remaja (12 - 18 tahun)",
      definisi: "Tahap pencarian identitas diri (Identity vs Role Confusion).",
      sdki: "D.0123",
      etiologi: "Perubahan hormonal (pubertas) dan kognitif.",
      manifestasi_klinis:
        "Remaja mencari jati diri, lebih dekat dengan teman sebaya, mulai berpikir abstrak.",
      patofisiologi:
        "Integrasi berbagai peran dan gambaran diri menjadi satu identitas unik.",
      tanda_gejala: "Remaja memiliki cita-cita dan minat yang jelas.",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "sehat-perkembangan-dewasa-muda",
      kategori: "ASKEP JIWA DIAGNOSIS SEHAT",
      nama: "Kesiapan Peningkatan Perkembangan Dewasa Muda (18 - 25 tahun)",
      definisi: "Tahap membangun kedekatan (Intimacy vs Isolation).",
      sdki: "D.0123",
      etiologi: "Kematangan psikoseksual dan kemandirian finansial.",
      manifestasi_klinis:
        "Membangun hubungan serius, fokus pada karier, komitmen pada nilai tertentu.",
      patofisiologi:
        "Mampu membagikan diri dengan orang lain tanpa kehilangan identitas.",
      tanda_gejala: "Memiliki pasangan atau sahabat dekat yang bermakna.",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "sehat-perkembangan-dewasa-tua",
      kategori: "ASKEP JIWA DIAGNOSIS SEHAT",
      nama: "Kesiapan Peningkatan Perkembangan Dewasa Tua (25 - 65 tahun)",
      definisi:
        "Tahap produktivitas dan kontribusi pada masyarakat (Generativity vs Stagnation).",
      sdki: "D.0123",
      etiologi: "Tuntutan membimbing generasi muda.",
      manifestasi_klinis:
        "Mencapai prestasi kerja, mendidik anak, aktif dalam organisasi.",
      patofisiologi:
        "Kepuasan hidup dicapai melalui pengabdian dan hasil karya.",
      tanda_gejala: "Pasien produktif dan merasa bermakna bagi orang lain.",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "sehat-perkembangan-lansia",
      kategori: "ASKEP JIWA DIAGNOSIS SEHAT",
      nama: "Kesiapan Peningkatan Perkembangan Lansia (> 65 tahun)",
      definisi: "Tahap pencapaian integritas diri (Integrity vs Despair).",
      sdki: "D.0123",
      etiologi: "Review kehidupan (Life Review).",
      manifestasi_klinis:
        "Menerima masa lalu, merasa puas dengan hidup, tetap aktif di masa tua.",
      patofisiologi: "Menghadapi keterbatasan fisik dengan kebijaksanaan.",
      tanda_gejala:
        "Lansia tampak tenang dan berbagi pengalaman hidup ke cucu.",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "sehat-defisiensi-pengetahuan",
      kategori: "ASKEP JIWA DIAGNOSIS SEHAT",
      nama: "Defisiensi Pengetahuan",
      definisi:
        "Ketiadaan atau kurangnya informasi kognitif yang berkaitan dengan topik spesifik.",
      sdki: "D.0111",
      manifestasi_klinis:
        "Pasien bertanya-tanya, menunjukkan persepsi keliru, atau menunjukkan perilaku tidak sesuai anjuran.",
      sp_pasien:
        "Identifikasi area pengetahuan yang kurang, berikan edukasi sistematis.",
      referensi: ["PPNI (2016)"],
    },

    // === ASKEP JIWA DIAGNOSIS RISIKO – DIAGNOSIS FISIK === (10 Items)
    {
      id: "fisik-nyeri-akut",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO – DIAGNOSIS FISIK",
      nama: "Nyeri Akut",
      sdki: "D.0077",
      definisi:
        "Pengalaman sensorik atau emosional tidak menyenangkan akibat kerusakan jaringan.",
      tanda_gejala: "Mengeluh nyeri, tampak meringis, gelisah, nadi meningkat.",
      sp_pasien: "Identifikasi PQRST, latih teknik relaksasi (napas dalam).",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "fisik-risiko-jatuh",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO – DIAGNOSIS FISIK",
      nama: "Risiko Jatuh",
      sdki: "D.0143",
      definisi:
        "Berisiko mengalami kerusakan fisik yang dapat mengganggu kesehatan.",
      sp_pasien: "Pasang pengaman tempat tidur, edukasi lingkungan aman.",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "fisik-hipertermia",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO – DIAGNOSIS FISIK",
      nama: "Hipertermia",
      sdki: "D.0130",
      definisi: "Suhu tubuh meningkat di atas rentang normal tubuh.",
      tanda_gejala: "Suhu > 37.5 C, kulit merah, hangat.",
      sp_pasien: "Kompres hangat, anjurkan minum banyak.",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "fisik-defisit-cairan",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO – DIAGNOSIS FISIK",
      nama: "Defisit Volume Cairan",
      sdki: "D.0023",
      definisi:
        "Penurunan cairan intravaskular, interstitial, dan intraselular.",
      tanda_gejala:
        "Turgor kulit menurun, membran mukosa kering, nadi meningkat.",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "fisik-nutrisi-kurang",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO – DIAGNOSIS FISIK",
      nama: "Ketidakseimbangan Nutrisi: Kurang dari Kebutuhan Tubuh",
      sdki: "D.0019",
      definisi:
        "Asupan nutrisi tidak cukup untuk memenuhi kebutuhan metabolisme.",
      tanda_gejala: "BB menurun, nafsu makan kurang, bising usus hiperaktif.",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "fisik-bersihan-jalan-napas",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO – DIAGNOSIS FISIK",
      nama: "Ketidakefektifan Bersihan Jalan Napas",
      sdki: "D.0001",
      definisi:
        "Ketidakmampuan membersihkan sekresi agar jalan napas tetap bersih.",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "fisik-pola-napas",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO – DIAGNOSIS FISIK",
      nama: "Ketidakefektifan Pola Napas",
      sdki: "D.0005",
      definisi: "Inspirasi/ekspirasi yang tidak memberikan ventilasi adekuat.",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "fisik-perfusi-jaringan",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO – DIAGNOSIS FISIK",
      nama: "Risiko Ketidakefektifan Perfusi Jaringan Seksual",
      sdki: "D.0017",
      definisi: "Berisiko mengalami penurunan sirkulasi darah.",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "fisik-intoleran-aktivitas",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO – DIAGNOSIS FISIK",
      nama: "Intoleran Aktivitas",
      sdki: "D.0056",
      definisi:
        "Ketidakcukupan energi psikologis/fisiologis untuk melanjutkan aktivitas.",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "fisik-mobilitas-fisik",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO – DIAGNOSIS FISIK",
      nama: "Hambatan Mobilitas Fisik",
      sdki: "D.0054",
      definisi: "Keterbatasan dalam gerakan fisik dari satu/lebih ekstremitas.",
      referensi: ["PPNI (2016)"],
    },

    // === ASKES JIWA DIAGNOSIS RISIKO – DIAGNOSIS RISIKO === (9 Items)
    {
      id: "ansietas",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO – DIAGNOSIS RISIKO",
      nama: "Ansietas / Kecemasan",
      sdki: "D.0080",
      definisi:
        "Kondisi emosi dan pengalaman subjektif individu terhadap objek yang tidak jelas dan spesifik akibat antisipasi bahaya.",
      tanda_gejala:
        "Merasa khawatir, gelisah, tegang, sulit tidur, frekuensi nadi meningkat.",
      sp_pasien:
        "SP 1: Latih Napas Dalam. SP 2: Latih Distraksi. SP 3: Latih Hipnotis 5 Jari. SP 4: Latih Spiritual.",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "gangguan-citra-tubuh",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO – DIAGNOSIS RISIKO",
      nama: "Gangguan Citra Tubuh",
      sdki: "D.0083",
      definisi:
        "Perubahan persepsi tentang tubuh yang diakibatkan oleh perubahan struktur, fungsi atau bentuk tubuh.",
      sp_pasien:
        "Identifikasi bagian tubuh positif, bantu pasien beradaptasi dengan perubahan fisik.",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "risiko-hdr-situasional",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO – DIAGNOSIS RISIKO",
      nama: "Harga Diri Rendah Situasional",
      sdki: "D.0094",
      definisi:
        "Munculnya persepsi negatif tentang diri sendiri akibat situasi tertentu.",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "risiko-ketidakberdayaan",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO – DIAGNOSIS RISIKO",
      nama: "Ketidakberdayaan",
      sdki: "D.0092",
      definisi:
        "Persepsi bahwa tindakan seseorang tidak akan mempengaruhi hasil secara signifikan.",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "risiko-keputusasaan",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO – DIAGNOSIS RISIKO",
      nama: "Keputusasaan",
      sdki: "D.0088",
      definisi:
        "Kondisi subjektif individu yang melihat keterbatasan atau tidak adanya alternatif dalam memecahkan masalah.",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "risiko-koping-individu-tidak-efektif",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO – DIAGNOSIS RISIKO",
      nama: "Ketidakefektifan Koping Individu",
      sdki: "D.0096",
      definisi: "Ketidakmampuan dalam menilai dan merespon stresor.",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "risiko-dukacita",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO – DIAGNOSIS RISIKO",
      nama: "Dukacita",
      sdki: "D.0081",
      definisi: "Suatu proses adaptif yang normal terhadap kehilangan.",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "risiko-manajemen-kesehatan-tidak-efektif",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO – DIAGNOSIS RISIKO",
      nama: "Ketidakefektifan Manajemen Kesehatan",
      sdki: "D.0116",
      definisi:
        "Pola pengaturan dan pengintegrasian program terapi yang tidak memuaskan.",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "risiko-distres-spiritual",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO – DIAGNOSIS RISIKO",
      nama: "Distres Spiritual",
      sdki: "D.0082",
      definisi:
        "Hambatan dalam kemampuan untuk mengalami dan mengintegrasikan makna dan tujuan hidup.",
      referensi: ["PPNI (2016)"],
    },

    // === ASKEP JIWA DIAGNOSIS GANGGUAN JIWA === (9 Items)
    {
      id: "gangguan-perilaku-kesehatan-berisiko",
      kategori: "ASKEP JIWA DIAGNOSIS GANGGUAN JIWA",
      nama: "Risiko Perilaku Kesehatan (Perilaku Cenderung Berisiko)",
      sdki: "D.0099",
      definisi:
        "Hambatan kemampuan mengubah gaya hidup untuk memperbaiki status kesehatan.",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "halusinasi",
      kategori: "ASKEP JIWA DIAGNOSIS GANGGUAN JIWA",
      nama: "Gangguan Persepsi Sensori: Halusinasi",
      sdki: "D.0085",
      definisi: "Persepsi palsu tanpa adanya stimulus eksternal yang nyata.",
      sp_pasien:
        "SP 1: Menghardik. SP 2: Minum Obat. SP 3: Bercakap-cakap. SP 4: Aktivitas Terjadwal.",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "waham",
      kategori: "ASKEP JIWA DIAGNOSIS GANGGUAN JIWA",
      nama: "Gangguan Proses Pikir: Waham",
      sdki: "D.0105",
      definisi: "Keyakinan yang salah yang dipertahankan secara kuat.",
      sp_pasien: "SP 1: Orientasi Realitas. SP 2: Melatih kemampuan positif.",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "hdr-kronis",
      kategori: "ASKEP JIWA DIAGNOSIS GANGGUAN JIWA",
      nama: "Harga Diri Rendah Kronik",
      sdki: "D.0087",
      definisi: "Evaluasi diri negatif yang berlangsung lama.",
      sp_pasien:
        "SP 1: Identifikasi aspek positif, latih satu kemampuan. SP 2: Latih kemampuan lain.",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "isolasi-sosial",
      kategori: "ASKEP JIWA DIAGNOSIS GANGGUAN JIWA",
      nama: "Isolasi Sosial",
      sdki: "D.0121",
      definisi: "Ketidakmampuan untuk membina hubungan interdependen.",
      sp_pasien:
        "SP 1: Latih berkenalan dengan satu orang. SP 2: Latih berkenalan dengan 2-3 orang.",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "dpd",
      kategori: "ASKEP JIWA DIAGNOSIS GANGGUAN JIWA",
      nama: "Defisit Perawatan Diri",
      sdki: "D.0109",
      definisi: "Hambatan dalam kebersihan diri, makan, berhias, eliminasi.",
      sp_pasien:
        "SP 1: Mandi & Keramas. SP 2: Makan. SP 3: Berhias. SP 4: Eliminasi.",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "gangguan-komunikasi-verbal",
      kategori: "ASKEP JIWA DIAGNOSIS GANGGUAN JIWA",
      nama: "Hambatan Komunikasi Verbal",
      sdki: "D.0119",
      definisi:
        "Penurunan, pelambatan atau ketiadaan kemampuan menggunakan ekspresi verbal.",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "gangguan-pemeliharaan-kesehatan",
      kategori: "ASKEP JIWA DIAGNOSIS GANGGUAN JIWA",
      nama: "Ketidakefektifan Pemeliharaan Kesehatan",
      sdki: "D.0117",
      definisi:
        "Ketidakmampuan mengidentifikasi, mengelola, atau mencari bantuan kesehatan.",
      referensi: ["PPNI (2016)"],
    },
    {
      id: "risiko-bunuh-diri",
      kategori: "ASKEP JIWA DIAGNOSIS GANGGUAN JIWA",
      nama: "Risiko Bunuh Diri",
      sdki: "D.0135",
      definisi: "Berisiko melakukan tindakan menyakiti diri sendiri.",
      sp_pasien:
        "SP 1: Lindungi & Kontrak Aman. SP 2: Identifikasi aspek positif.",
      referensi: ["PPNI (2016)"],
    },
  ],
  obat: [
    {
      nama: "Haloperidol",
      jenis: "Antipsikotik Tipikal (Potensi Tinggi)",
      dosis: "2-5 mg (2-3x sehari) atau IM 5mg untuk gaduh gelisah.",
      indikasi:
        "GEJALA POSITIF SKIZOFRENIA (Halusinasi, Waham, Gaduh Gelisah), Mania Akut, Gangguan Perilaku Anak (Agresivitas). Sangat tajam untuk menghentikan dopamin di mesolimbik.",
      efek: "EKSTRAPIRAMIDAL SYNDROME (EPS): Kaku kuduk, lidah menjulur, mata melotot (distonia), gemetaran (tremor), gelisah tidak bisa diam (akatisia). Risiko jangka panjang: Tardive Dyskinesia (gerakan wajah abnormal).",
    },
    {
      nama: "Chlorpromazine (CPZ)",
      jenis: "Antipsikotik Tipikal (Potensi Rendah)",
      dosis: "25-100 mg (malam) - Max 1000mg/hari.",
      indikasi:
        "ANSIETAS BERAT, INSOMNIA PADA PSIKOTIK, CEGUKAN PERSISTEN. Memiliki efek sedasi (mengantuk) yang kuat, cocok untuk pasien yang sulit tidur.",
      efek: "SEDASI BERAT, HIPOTENSI ORTOSTATIK (pusing saat berdiri mendadak), mulut kering, pandangan kabur, konstipasi. Risiko fotosensitivitas (mudah terbakar sinar matahari).",
    },
    {
      nama: "Risperidone",
      jenis: "Antipsikotik Atipikal (Generasi II)",
      dosis: "1-4 mg (2x sehari).",
      indikasi:
        "SKIZOFRENIA (GEJALA POSITIF & NEGATIF), Autisme pada anak. Lebih efektif meredam halusinasi sekaligus memperbaiki minat sosial (perbaikan afek).",
      efek: "HIPERPROLAKTINEMIA (keluar ASI pada wanita, payudara membesar pada pria), gangguan siklus haid. Peningkatan BB moderat. EPS minimal bila dosis < 6mg.",
    },
    {
      nama: "Olanzapine",
      jenis: "Antipsikotik Atipikal (Generasi II)",
      dosis: "5-10 mg (malam).",
      indikasi:
        "GANGGUAN BIPOLAR (Episode Manik), Skizofrenia Refrakter. Sangat efektif untuk menstabilkan mood yang fluktuatif.",
      efek: "SINDROM METABOLIK: Kenaikan BB drastis (nafsu makan besar), risiko Diabetes Melitus (hiperglikemia), kolesterol naik. Sedasi tinggi.",
    },
    {
      nama: "Clozapine",
      jenis: "Antipsikotik Lini Terakhir (Refrakter)",
      dosis: "12.5 mg awal -> 300-600 mg.",
      indikasi:
        "SKIZOFRENIA RESISTEN (pasien yang gagal dengan >2 obat lain). Menurunkan risiko bunuh diri.",
      efek: "BAHAYA ! AGRANULOSITOSIS (Sel darah putih turun drastis, risiko infeksi maut). Harus cek darah rutin. Hipersalivasi (ileran), sembelit parah, ambang kejang turun.",
    },
    {
      nama: "Diazepam",
      jenis: "Ansiolitik (Benzodiazepine)",
      dosis: "2-5 mg (P.R.N).",
      indikasi:
        "Cemas akut, serangan panik, status epileptikus (kejang). Efek relaksasi otot dan penenang cepat.",
      efek: "Adiksi (ketagihan), mengantuk, koordinasi terganggu (sempoyongan), amnesia. Jangan dihentikan mendadak (Withdrawal).",
    },
    {
      nama: "Amitriptyline",
      jenis: "Antidepresan Trisiklik (TCA)",
      dosis: "25-75 mg (malam).",
      indikasi: "Depresi berat dengan insomnia, nyeri neuropatik kronis.",
      efek: "Efek antikolinergik kuat (mulut kering, sembelit, retensi urin). Toksisitas jantung pada dosis tinggi.",
    },
    {
      nama: "Lithium Carbonate",
      jenis: "Mood Stabilizer",
      dosis: "300-400 mg (2-3x sehari).",
      indikasi:
        "PENCEGAHAN MANIK-DEPRESI (Bipolar). Menurunkan niat bunuh diri.",
      efek: "KERACUNAN LITHIUM (Indeks terapi sempit). Tremor tangan, Haus berlebih, Sering kencing. Wajib cek kadar obat dalam darah.",
    },
  ],
  spo: {
    pengkajian: [
      {
        id: "spo-peng-awal",
        judul: "SPO Pengkajian Awal Keperawatan Jiwa",
        narasi:
          "<b>Pengertian:</b> Melakukan pengumpulan data biopsikososialspiritual secara sistematis pada pasien yang baru masuk atau baru pertama kali diperiksa untuk menentukan diagnosa keperawatan jiwa.<br><b>Prosedur:</b><br>1. Siapkan formulir pengkajian standar. 2. Bina hubungan saling percaya (BHSP) dengan pasien dan keluarga. 3. Gunakan teknik komunikasi terapeutik (mendengar aktif, empati). 4. Kaji keluhan utama (alasan masuk). 5. Kaji status mental (MSE) meliputi penampilan, pembicaraan, mood, afek, dan isi pikir. 6. Kaji faktor predisposisi dan presipitasi. 7. Lakukan pemeriksaan fisik tanda-tanda vital. 8. Simpulkan diagnosa keperawatan utama.",
      },
      {
        id: "spo-mse",
        judul: "SPO Pemeriksaan Status Mental (MSE)",
        narasi:
          "<b>Pengertian:</b> Evaluasi objektif terhadap fungsi kognitif dan emosional pasien saat ini.<br><b>Prosedur:</b><br>1. Observasi penampilan fisik (kebersihan, kerapian). 2. Identifikasi arus pikir (koheren/inelaborasi). 3. Kaji adanya waham (isi pikir). 4. Kaji persepsi (halusinasi). 5. Kaji tingkat kesadaran dan daya ingat. 6. Kaji daya nilai diri (insight).",
      },
    ],
    intervensi: [
      {
        id: "spo-bhsp",
        judul: "SPO Membina Hubungan Saling Percaya (BHSP)",
        narasi:
          "<b>Pengertian:</b> Langkah awal yang krusial untuk membangun fondasi kontrak terapeutik perawat-pasien.<br><b>Prosedur:</b><br>1. Perkenalan diri (Nama, Panggilan, Tujuan). 2. Beri posisi duduk yang nyaman (berhadapan/sudut 45 derajat). 3. Pertahankan kontak mata yang sesuai budaya. 4. Tunjukkan sikap terbuka (kaki tidak menyilang, tangan terbuka). 5. Jadilah pendengar yang sabar, jangan memotong pembicaraan pasien yang sedang meluapkan perasaan.",
      },
      {
        id: "spo-napas-dalam",
        judul: "SPO Teknik Relaksasi Napas Dalam (Deep Breathing)",
        narasi:
          "<b>Pengertian:</b> Metode non-farmakologi untuk menurunkan ansietas dan mengontrol emosi marah.<br><b>Prosedur:</b><br>1. Instruksikan pasien duduk atau berbaring rileks. 2. Minta pasien menarik napas pelan melalui hidung dalam 4 hitungan. 3. Tahan napas dalam 2-3 hitungan. 4. Embuskan perlahan melalui mulut (pursed lips) dalam 6-8 hitungan. 5. Ulangi 3-5 kali sampai perasaan lebih stabil.",
      },
      {
        id: "spo-kom-terapeutik",
        judul: "SPO Komunikasi Terapeutik",
        narasi:
          "<b>Pengertian:</b> Penggunaan kata-kata dan perilaku secara sadar untuk membantu kesembuhan pasien.<br><b>Prosedur:</b><br>1. Fase Pra-interaksi: Evaluasi diri perawat, baca rekam medis. 2. Fase Orientasi: Salam, Validasi kondisi, Kontrak topik/waktu. 3. Fase Kerja: Fokus pada masalah pasien, berikan reinforcement positif. 4. Fase Terminasi: Evaluasi subjektif (perasaan), Rencana tindak lanjut, Kontrak pertemuan berikutnya.",
      },
    ],
    krisis: [
      {
        id: "spo-manajemen-amuk",
        judul: "SPO Penanganan Pasien Amuk (Agitasi Ekstrem)",
        narasi:
          "<b>Pengertian:</b> Prosedur darurat untuk mengamankan pasien yang melakukan kekerasan fisik aktif.<br><b>Prosedur:</b><br>1. Panggil bantuan (Show of Force) minimal 5 orang perawat. 2. Hindari konfrontasi verbal yang memancing marah. 3. Jaga jarak aman (minimal 3 meter). 4. Jika membahayakan, lakukan pengekangan fisik (Restrain) sesuai standar. 5. Kolaborasi pemberian obat penenang parenteral (injeksi).",
      },
      {
        id: "spo-restrain",
        judul: "SPO Pengikatan Fisik (Restraint)",
        narasi:
          "<b>Pengertian:</b> Pembatasan gerak fisik pasien menggunakan alat pengikat (manset) demi keselamatan.<br><b>Prosedur:</b><br>1. Jelaskan alasan pengikatan (demi keamanan pasien). 2. Ikat keempat ekstremitas pada tempat tidur dengan posisi anatomis. 3. Pastikan ikatan tidak terlalu kencang (bisa masuk 2 jari). 4. Observasi sirkulasi dan luka lecet setiap 15-30 menit. 5. Beri kebutuhan makan/minum/eliminasi secara periodik. 6. Lepas pengikat segera jika pasien sudah tenang.",
      },
    ],
  },
  // Scale & TAK remains same or expanded
  scales: [],
  tak: {},
};

// I will read the original file to preserves scales and tak if I don't want to rewrite them.
// But it's easier to just append them.

const original = fs.readFileSync(path, "utf8");
// Extract scales and tak from original if needed, or I'll just put them back.
// Since I have the full file in context, I'll just write the full thing.
