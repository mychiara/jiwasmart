/**
 * Dataset for NurseJiwa - ULTIMATE CLINICAL EDITION
 * Berisi Diagnosis Keperawatan Jiwa Lengkap (Sehat, Risiko, Gangguan)
 * Sinkron dengan SDKI, SLKI, dan SIKI PPNI
 */

const DATASET = {
  lp: [
    // === ASKEP JIWA DIAGNOSIS SEHAT ===
    {
      id: "sehat-ibu-hamil",
      kategori: "ASKEP JIWA DIAGNOSIS SEHAT",
      nama: "1. Kesiapan Peningkatan Perkembangan Ibu Hamil",
      sdki: "D.0123",
      definisi:
        "Kesiapan ibu hamil untuk meningkatkan kesehatan fisik, status nutrisi, dan kesejahteraan psikologis guna mendukung pertumbuhan janin yang optimal serta mempersiapkan transisi peran menjadi orang tua yang kompeten. Fokus intervensi adalah pada penguatan koping adaptif menghadapi perubahan hormonal dan citra tubuh selama kehamilan.",
      etiologi:
        "**1. Faktor Predisposisi:**\nRiwayat kehamilan yang direncanakan, dukungan sosial yang kuat dari suami dan keluarga, serta tingkat pendidikan yang memadai tentang kesehatan reproduksi.\n\n**2. Faktor Presipitasi:**\nKehamilan saat ini yang sehat (tanpa komplikasi mayor), perasaan bahagia menyambut anggota keluarga baru, dan kesadaran akan pentingnya asupan nutrisi dan pemeriksaan prenatal harian.",
      manifestasi_klinis:
        "**Gambaran perilaku adaptif:**\n1. Menunjukkan ketertarikan tinggi pada informasi tentang perkembangan janin mingguan.\n2. Secara konsisten menjaga pola makan bergizi seimbang (Tinggi Protein, Asam Folat, dan Zat Besi).\n3. Mendiskusikan dengan antusias rencana persalinan dan pemberian ASI eksklusif.\n4. Menunjukkan emosi yang stabil dan menerima perubahan bentuk tubuh secara positif (menerima pembesaran perut/payudara).",
      patofisiologi:
        "Transisi menjadi ibu merupakan 'Maturational Crisis' yang normal. Peningkatan hormon estrogen dan progesteron memicu perubahan fisik dan emosional. Pada ibu dengan kesiapan tinggi, perubahan ini diterima sebagai bagian dari proses pencapaian tugas perkembangan. Kesiapan ini memicu aktivasi koping proaktif yang mengoptimalkan fungsi plasenta melalui penurunan hormon stress (kortisol), sehingga mendukung neuroperkembangan janin di dalam rahim.",
      tanda_gejala:
        "DS (Subjektif):\n- 'Saya ingin tahu lebih banyak tentang jenis stimulasi yang bagus untuk bayi di dalam perut.'\n- 'Saya merasa lebih bahagia dan sudah tidak sabar menunggu kelahiran anak pertama kami.'\n- 'Saya rutin jalan pagi setiap hari agar tubuh tetap bugar dan persalinan lancar.'\n\nDO (Objektif):\n- Ibu rutin melakukan Antenatal Care (ANC) minimal sebulan sekali.\n- Kenaikan berat badan ibu sesuai dengan usia kehamilan (IMT).\n- Hasil pemeriksaan USG menunjukkan janin dalam kondisi presentasi dan detak jantung yang normal.\n- Ibu mampu mendemonstrasikan teknik stimulasi janin (elusan dan suara).",
      pemeriksaan_penunjang:
        "1. Ultrasonografi (USG) rutin untuk memantau biometri janin dan air ketuban.\n2. Pemeriksaan Laboratorium: Hb (deteksi anemia), Glukosa Darah, dan Golongan Darah/Rhesus.\n3. Skrining Kesehatan Mental Maternal (misal: EPDS) untuk memastikan kestabilan emosi.",
      penatalaksanaan_medis:
        "1. Pemberian suplementasi mikronutrien (Asam Folat 400mcg, Tablet Fe, Kalsium).\n2. Kelas Senam Hamil untuk mengelola ketegangan otot panggul dan pinggang.\n3. Edukasi gizi seimbang oleh ahli diet untuk mencegah stunting sejak dalam kandungan.",
      pathway:
        "Stimulus Kehamilan -> Adaptasi Hormonal -> Kesadaran Peran Orang Tua -> Kesiapan Belajar -> Kesiapan Peningkatan Perkembangan Maternal.",
      fokus_pengkajian:
        "1. Pengetahuan ibu tentang tanda bahaya kehamilan.\n2. Kelengkapan persiapan logistik persalinan (Tabulin, pakaian bayi).\n3. Kualitas dukungan suami sebagai pendamping utama.",
      rentang_respon:
        "Adaptif (Kesiapan Peningkatan) <--> Antara (Kecemasan Ringan) <--> Maladaptif (Depresi Prenatal).",
      mekanisme_koping:
        "1. Mencari dukungan sosial (berbagi cerita dengan ibu lain).\n2. Membaca literatur pengasuhan dan kesehatan janin.\n3. Melakukan teknik relaksasi mandiri.",
      masalah_keperawatan: [
        "Kesiapan Peningkatan Perkembangan Maternal",
        "Kesiapan Peningkatan Menjadi Orang Tua",
        "Kesiapan Peningkatan Pengetahuan",
      ],
      sp_pasien:
        "SP 1: Diskusikan perubahan fisik dan psikologis selama trimester 1, 2, dan 3 serta cara beradaptasi dengannya.\nSP 2: Latih stimulasi janin melalui metode suara (bercerita/musik) dan sentuhan ringan pada dinding perut.\nSP 3: Diskusikan rencana persalinan (lokasi, biaya, pendamping) dan komitmen pemberian ASI Eksklusif 6 bulan.",
      sp_keluarga:
        "SP 1: Edukasi suami tentang peran penting dukungan emosional untuk menurunkan risiko stress pada ibu.\nSP 2: Latih keluarga menyiapkan perlengkapan persalinan dan transportasi darurat jika tanda-tanda lahir muncul.\nSP 3: Motivasi keluarga untuk ikut serta dalam memantau asupan gizi dan kepatuhan minum vitamin ibu hamil.",
      discharge_planning:
        "1. Ibu mampu mengenali tanda-tanda awal persalinan (kontraksi teratur).\n2. Mengetahui tempat rujukan atau puskesmas terdekat.\n3. Memiliki rencana pasca melahirkan (perawatan bayi dan nutrisi busui).",
      edukasi_keluarga:
        "Dukungan psikologis dari suami adalah kunci utama kesejahteraan mental ibu dan perkembangan kognitif bayi di masa depan.",
      pohon_masalah:
        "Kesejahteraan Janin <- Kesiapan Peningkatan Ibu Hamil <- Dukungan Keluarga",
      obat_rekomendasi: [],
      referensi: ["PPNI (2016). SDKI", "PPNI (2018). SIKI", "Bobak (2005)"],
    },
    {
      id: "sehat-bayi",
      kategori: "ASKEP JIWA DIAGNOSIS SEHAT",
      nama: "2. Kesiapan Peningkatan Perkembangan Bayi",
      sdki: "D.0123",
      definisi:
        "Kesiapan orang tua atau pengasuh untuk meningkatkan stimulasi yang sesuai dengan tahapan usia guna mencapai perkembangan bayi yang optimal (Rentang usia 0-18 bulan). Fokus utama pada tahap ini adalah pembentukan 'Basic Trust' (Rasa Percaya Dasar) melalui pemberian kasih sayang dan pemenuhan kebutuhan dasar yang konsisten.",
      etiologi:
        "**1. Faktor Perkembangan:**\nTahap Psikososial Erikson: Trust vs Mistrust. Kebutuhan mutlak akan figur pengasuh yang responsif.\n\n**2. Faktor Lingkungan:**\nAdanya lingkungan yang menstimulasi (suara, warna, sentuhan) dan pemenuhan kebutuhan fisiologis yang tepat waktu (makan, minum, tidur, kenyamanan).",
      manifestasi_klinis:
        "**Indikator perkembangan bayi sehat:**\n1. Bayi tampak tenang dan jarang menangis berkepanjangan jika kebutuhannya terpenuhi.\n2. Menunjukkan respon senyum sosial (Social smile) saat diajak berinteraksi (>2 bulan).\n3. Kontak mata yang baik saat disusui atau diajak bicara.\n4. Mampu tenang kembali setelah ditenangkan oleh figur pengasuh utama.",
      patofisiologi:
        "Pada masa bayi, otak mengalami perkembangan sinaptik yang sangat pesat. Pengalaman positif (disusui, dipeluk, diajak bicara) merangsang pelepasan oksitosin dan dopamin yang memperkuat ikatan emosional (bonding). Jika kebutuhan bayi dipenuhi secara konsisten dan hangat, bayi akan mempersepsikan dunia sebagai tempat yang aman dan orang lain sebagai pihak yang dapat dipercaya (Basic Trust).",
      tanda_gejala:
        "DS (Subjektif) - Dari Orang Tua:\n- 'Saya ingin belajar cara menstimulasi motorik bayi saya agar cepat merangkak.'\n- 'Saya memberikan ASI sesuka bayi (On Demand) dan selalu memeluknya saat dia menangis.'\n- 'Anak saya tampak senang sekali jika diajak nyanyi bersama.'\n\nDO (Objektif):\n- Pertumbuhan fisik (Berat Badan, Tinggi Badan, Lingkar Kepala) berada di jalur hijau KMS.\n- Bayi menunjukkan respon terkejut (Moro) atau menoleh saat dipanggil namanya.\n- Skor KPSP (Kuesioner Pra-Skrining Perkembangan) sesuai dengan usia kronologis.\n- Interaksi ibu-bayi tampak hangat (Eye contact dan sentuhan konsisten).",
      pemeriksaan_penunjang:
        "1. Kartu Menuju Sehat (KMS) untuk monitoring pertumbuhan fisik.\n2. Skrining KPSP atau Denver II untuk monitoring pencapaian Milestone (Motorik, Bahasa, Sosial).\n3. Skrining Pendengaran dan Penglihatan dasar.",
      penatalaksanaan_medis:
        "1. Imunisasi Dasar Lengkap (Hepatitis, BCG, Polio, DPT-HiB, Campak/MR).\n2. Pemberian Vitamin A dosis tinggi setiap 6 bulan (sesuai jadwal Posyandu).\n3. Pemberian ASI Eksklusif (0-6 bulan) dilanjutkan MP-ASI bergizi seimbang.",
      pathway:
        "Kebutuhan Dasar Terpenuhi -> Rasa Aman -> Konsistensi Pengasuhan -> Terbentuk Rasa Percaya -> Kesiapan Peningkatan Perkembangan Bayi.",
      fokus_pengkajian:
        "1. Pola tidur bayi (apakah teratur dan cukup dimalam hari).\n2. Respon bayi terhadap orang asing (Stranger Anxiety yang normal).\n3. Kesiapan ibu dalam memberikan stimulasi harian.",
      rentang_respon:
        "Adaptif (Basic Trust) <--> Antara (Kecemasan saat berpisah) <--> Maladaptif (Basic Mistrust/Menarik Diri).",
      mekanisme_koping:
        "1. Menangis untuk memanggil bantuan (koping komunikasi).\n2. Mengisap jempol atau dot untuk menenangkan diri (Self-soothing).",
      masalah_keperawatan: [
        "Kesiapan Peningkatan Perkembangan Bayi",
        "Kesiapan Peningkatan Menjadi Orang Tua",
        "Risiko Keterlambatan Perkembangan",
      ],
      sp_pasien:
        "*(Untuk Orang Tua)*\nSP 1: Latih stimulasi sensorik-motorik (Tummy time, mengenalkan warna, bunyi gurauan).\nSP 2: Edukasi pemberian MP-ASI yang bergizi (Tinggi Lemak dan Protein Hewani) mulai usia 6 bulan.\nSP 3: Latih teknik 'Bonding Attachment' yang benar melalui kontak kulit ke kulit (Skin to skin) dan komunikasi verbal intens.",
      sp_keluarga:
        "SP 1: Edukasi ayah untuk ikut berperan aktif dalam pengasuhan (misal: memandikan atau mengganti popok).\nSP 2: Diskusikan pentingnya menjaga kebersihan lingkungan bayi untuk mencegah infeksi.\nSP 3: Motivasi keluarga untuk rutin membawa bayi ke Posyandu untuk pemantauan tumbuh kembang.",
      discharge_planning:
        "1. Bayi memiliki jadwal rutinitas harian yang stabil (Makan, Tidur, Bermain).\n2. Orang tua memahami jadwal imunisasi lanjutan.\n3. Pertumbuhan berat badan naik minimal 500-800 gr per bulan (di awal usia).",
      edukasi_keluarga:
        "Berikan respon segera saat bayi menangis. Hal ini bukan memanjakan, melainkan cara membangun rasa aman dan kepercayaan anak pada dunia.",
      pohon_masalah:
        "Rasa Percaya Dasar (Trust) <- Peningkatan Perkembangan Bayi <- Stimulasi Dini",
      obat_rekomendasi: [],
      referensi: ["PPNI (2016). SDKI", "PPNI (2018). SIKI", "Wong (2009)"],
    },
    {
      id: "sehat-kanak",
      kategori: "ASKEP JIWA DIAGNOSIS SEHAT",
      nama: "3. Kesiapan Peningkatan Perkembangan Kanak-Kanak",
      sdki: "D.0123",
      definisi:
        "Kesiapan meningkatkan kemandirian (Otonomi) pada masa kanak-kanak awal (Toddler, usia 1.5 - 3 tahun). Pada fase ini, fokus utama adalah memberikan kesempatan pada anak untuk mengeksplorasi lingkungan dan melakukan tugas-tugas perawatan diri sederhana secara mandiri tanpa rasa takut atau malu berlebih.",
      etiologi:
        "**1. Faktor Psikososial:**\nTahap Erikson: Autonomy vs Shame & Doubt. Munculnya kemampuan mengontrol otot sfinkter (BAB/BAK) dan koordinasi motorik kasar.\n\n**2. Faktor Maturasi:**\nPematangan area motorik di otak yang mendukung aktivitas fisik seperti berjalan, berlari, dan memegang benda.",
      manifestasi_klinis:
        "**Gambaran perilaku otonomi:**\n1. Anak sering menggunakan kata 'Tidak' atau 'Ingin sendiri' sebagai bentuk penegasan diri.\n2. Antusias dalam mencoba kegiatan baru (misal: memakai baju sendiri, makan menggunakan sendok).\n3. Mampu menjauh sesaat dari ibu untuk mengeksplorasi benda-benda baru.\n4. Mulai menunjukkan minat pada 'Toilet Training' (melaporkan jika popok basah).",
      patofisiologi:
        "Seiring dengan pematangan sistem saraf, anak mulai menyadari bahwa dia memiliki kehendak sendiri yang terpisah dari orang tuanya. Pengalaman berhasil mengontrol fungsi tubuh (seperti menahan BAK) atau berhasil memanjat kursi memberikan perasaan 'Mastery' (penguasaan diri). Dukungan orang tua yang memfasilitasi kemandirian tanpa mengkritik kegagalan akan membentuk karakter percaya diri (Otonomi). Jika orang tua terlalu membatasi, anak akan merasa ragu-ragu dan malu (Shame & Doubt).",
      tanda_gejala:
        "DS (Subjektif) - Dari Orang Tua:\n- 'Anak saya sekarang keras kepala, dia ingin pakai sepatu sendiri meskipun terbalik.'\n- 'Saya ingin tahu teknik toilet training yang efektif agar anak tidak ngompol lagi.'\n- 'Anak saya sangat aktif dan berani bertanya apa saja.'\n\nDO (Objektif):\n- Anak mampu berjalan tegak dan berlari tanpa jatuh.\n- Anak mampu menumpuk 3-4 balok mainan secara mandiri.\n- Anak menunjukkan ekspresi bangga saat berhasil melakukan sesuatu.\n- Kemampuan bicara minimal berupa frase dua kata (misal: 'Mau makan').",
      pemeriksaan_penunjang:
        "1. Denver Developmental Screening Test II (Denver II) untuk menilai motorik, bahasa, dan sosial.\n2. Antropometri harian (Berat & Tinggi Badan).\n3. KPSP (Kuesioner Pra-Skrining Perkembangan) tahap usia 18-36 bulan.",
      penatalaksanaan_medis:
        "1. Diet Gizi Seimbang (Hindari asupan gula berlebih untuk mencegah karies gigi).\n2. Vaksinasi lanjutan (DPT, MR Booster).\n3. Suplemen Vitamin A dan Zinc (sesuai indikasi klinis).",
      pathway:
        "Pematangan Neuro-muskuler -> Kontrol Sfinkter & Lokomosi -> Keinginan Mandiri -> Dukungan Orang Tua -> Otonomi.",
      fokus_pengkajian:
        "1. Tingkat kemandirian dalam aktivitas ADL (Makan, Berpakaian, Mandi).\n2. Keamanan lingkungan bermain (mencegah risiko jatuh atau tersedak).\n3. Pola interaksi orang tua (apakah terlalu mendikte atau membebaskan).",
      rentang_respon:
        "Adaptif (Otonomi/Mandiri) <--> Antara (Ragu-ragu) <--> Maladaptif (Malu/Pasif).",
      mekanisme_koping:
        "1. Negativisme (berkata 'Gak mau!') untuk mengetes batasan otonomi.\n2. Temper Tantrum ringan saat keinginannya tidak tercapai (ekspresi frustrasi).",
      masalah_keperawatan: [
        "Kesiapan Peningkatan Perkembangan Kanak-kanak",
        "Kesiapan Peningkatan Koping Keluarga",
        "Kesiapan Peningkatan Manajemen Kesehatan",
      ],
      sp_pasien:
        "*(Melalui Orang Tua)*\nSP 1: Latih kemandirian ringan dalam ADL (Makan sendiri, merapikan mainan, memilih pakaian).\nSP 2: Latih program 'Toilet Training' (Membiasakan ke kamar mandi setiap pagi/sebelum tidur).\nSP 3: Fasilitasi 'Parallel Play' (bermain berdampingan dengan teman sebaya) untuk melatih sosialisasi.",
      sp_keluarga:
        "SP 1: Edukasi orang tua untuk menghindari penggunaan kata-kata kasar atau menertawakan jika anak gagal (mencegah rasa malu).\nSP 2: Ajarkan keluarga cara menciptakan 'Safe Environment' (menutup colokan listrik, menjauhkan benda tajam) agar anak bebas berekplorasi.\nSP 3: Diskusikan cara memberikan pujian yang tulus (Reinforcement positif) atas setiap upaya mandiri anak.",
      discharge_planning:
        "1. Anak mampu makan sendiri dengan minimal sisa di luar piring.\n2. Anak mulai bisa melaporkan keinginan BAB/BAK.\n3. Pertumbuhan berat badan tetap stabil di kurva pertumbuhan normal.",
      edukasi_keluarga:
        "Berikan pilihan terbatas pada anak (misal: 'Mau pakai baju merah atau biru?') untuk melatih pengambilan keputusan tanpa membuat anak merasa kewalahan.",
      pohon_masalah:
        "Otonomi Diri <- Kesiapan Kemandirian <- Stimulasi Bermain",
      referensi: [
        "PPNI (2016). SDKI",
        "Erikson, E.H. (1963)",
        "Muscari (2005)",
      ],
    },
    {
      id: "sehat-prasekolah",
      kategori: "ASKEP JIWA DIAGNOSIS SEHAT",
      nama: "4. Kesiapan Peningkatan Perkembangan Anak Pra-Sekolah",
      sdki: "D.0123",
      definisi:
        "Kesiapan meningkatkan daya inisiatif, kreativitas, dan interaksi sosial yang lebih luas pada anak usia 3-6 tahun. Fokus pada tahap ini adalah memberikan kebebasan pada anak untuk mencoba peran baru melalui permainan imajinatif dan menjawab rasa ingin tahunya yang besar tanpa membuat anak merasa bersalah.",
      etiologi:
        "**1. Tahap Psikososial:**\nErikson: Initiative vs Guilt. Anak mulai memiliki tujuan (Purpose) dan kemampuan merencanakan aktivitas.\n\n**2. Faktor Kognitif:**\nTahap Pra-operasional Piaget: Munculnya kemampuan simbolik, penggunaan bahasa yang makin kompleks, dan rasa ingin tahu yang tinggi.",
      manifestasi_klinis:
        "**Gambaran perilaku inisiatif:**\n1. Anak sering bertanya 'Mengapa?' atau 'Bagaimana?' terhadap segala sesuatu.\n2. Senang bermain peran (Role Play) atau permainan pura-pura (misal: jadi dokter atau guru).\n3. Mulai menunjukkan empati dan kesediaan berbagi mainan dengan teman.\n4. Mampu mengikuti aturan sederhana dalam permainan kelompok.",
      patofisiologi:
        "Pada usia ini, anak mulai belajar mengarahkan kekuasaan dan kendali mereka atas dunia melalui permainan dan interaksi sosial lainnya. Jika anak diberi kesempatan untuk berinisiatif, mereka akan mengembangkan perasaan mampu dan sanggup memimpin orang lain. Jika anak sering dibatasi, dilarang bertanya, atau dihukum secara berlebihan, mereka akan mengembangkan rasa bersalah (Guilt) yang dapat menghambat kreativitas di masa depan.",
      tanda_gejala:
        "DS (Subjektif) - Dari Anak & Orang Tua:\n- Anak: 'Ibu, lihat aku bisa membuat gedung tinggi dari balok ini!'\n- Orang tua: 'Dia banyak sekali bertanya tentang isi bumi dan langit.'\n- 'Anak saya mulai senang berteman dan tidak lagi malu jika diajak ke pesta ulang tahun.'\n\nDO (Objektif):\n- Anak mampu memakai baju sendiri dengan benar (termasuk kancing).\n- Anak menunjukkan ekspresi wajah yang ceria dan aktif bergerak.\n- Mampu menyebutkan nama lengkap, umur, dan jenis kelamin.\n- Gambar yang dibuat anak mulai terlihat memiliki bentuk yang dapat dikenali.",
      pemeriksaan_penunjang:
        "1. Skrining perkembangan KPSP tahap usia 3-6 tahun.\n2. Tes daya dengar (TDD) dan tes daya lihat (TDL) prasekolah.\n3. Penilaian kesiapan masuk sekolah (School Readiness).",
      penatalaksanaan_medis:
        "1. Pemberian Obat Cacing rutin setiap 6 bulan.\n2. Lanjutan Imunisasi dasar (jika ada yang tertunda).\n3. Vitamin daya tahan tubuh (Vitamin A, C, dan Zinc).",
      pathway:
        "Kemampuan Bahasa Meningkat -> Imaginasi Menurunkan Ego -> Interaksi Sosial -> Inisiatif Bertindak -> Kesiapan Peningkatan Perkembangan.",
      fokus_pengkajian:
        "1. Jenis kreativitas yang paling menonjol (Gambar, Menyanyi, Bercerita).\n2. Hubungan dengan teman sebaya (apakah ada perilaku agresif atau menarik diri).\n3. Kebiasaan makan (Picky eater) dan pola tidur (Mimpi buruk/Night terrors).",
      rentang_respon:
        "Adaptif (Inisiatif/Kreatif) <--> Antara (Gelisah/Ragu) <--> Maladaptif (Rasa Bersalah/Pasif).",
      mekanisme_koping:
        "1. Imitasi: Meniru perilaku tokoh idola atau orang tua.\n2. Fantasi: Menggunakan teman imajinasi untuk mengatasi rasa bosan atau takut.",
      masalah_keperawatan: [
        "Kesiapan Peningkatan Perkembangan Prasekolah",
        "Kesiapan Peningkatan Proses Keluarga",
        "Kesiapan Peningkatan Pengetahuan",
      ],
      sp_pasien:
        "*(Melalui Orang Tua)*\nSP 1: Latih inisiatif melalui bermain peran (Role play) yang melibatkan skenario kerja sama.\nSP 2: Ajarkan anak mengenal konsep berbagi dan antre dalam kelompok.\nSP 3: Fasilitasi kreativitas dengan memberikan media gambar, balok, atau plastisin (Playdough).",
      sp_keluarga:
        "SP 1: Ajarkan orang tua teknik menjawab pertanyaan kritis anak secara jujur dan sederhana.\nSP 2: Edukasi keluarga untuk menghindari memotong pembicaraan anak atau menyalahkan ide kreatifnya.\nSP 3: Latih keluarga memberikan tugas rumah tangga ringan (misal: menyiram bunga) untuk melatih rasa tanggung jawab.",
      discharge_planning:
        "1. Anak menunjukkan rasa percaya diri saat memasuki lingkungan baru (TK).\n2. Berat badan naik sesuai grafik usia prasekolah.\n3. Anak mampu bercerita tentang aktivitasnya sepanjang hari secara runtut.",
      edukasi_keluarga:
        "Fase 'Mengapa' adalah tanda kecerdasan yang sedang berkembang. Jangan membungkam rasa ingin tahu anak dengan jawaban 'Sudah, jangan tanya terus'.",
      pohon_masalah:
        "Kreativitas & Inisiatif <- Peningkatan Perkembangan <- Bermain Peran",
      referensi: [
        "PPNI (2016). SDKI",
        "PPNI (2018). SIKI",
        "Hockenberry (2007)",
      ],
    },
    {
      id: "sehat-anaksekolah",
      kategori: "ASKEP JIWA DIAGNOSIS SEHAT",
      nama: "5. Kesiapan Peningkatan Perkembangan Anak Sekolah",
      sdki: "D.0123",
      definisi:
        "Kesiapan untuk meningkatkan produktivitas, rasa kompeten, dan penguasaan tugas-tugas akademik serta sosial pada anak usia 6-12 tahun. Pada tahap ini, anak belajar untuk merasa mampu (Industri) melalui penguasaan keterampilan baru dan mendapatkan pengakuan dari teman sebaya maupun otoritas (Guru/Orang Tua).",
      etiologi:
        "**1. Tahap Psikososial:**\nErikson: Industry vs Inferiority. Fokus pada pencapaian hasil kerja dan penguasaan alat/teknologi sederhana.\n\n**2. Faktor Kognitif:**\nOperasional Konkret Piaget: Kemampuan berpikir logis tentang benda nyata, klasifikasi, dan pemecahan masalah sederhana.",
      manifestasi_klinis:
        "**Gambaran perilaku kompeten:**\n1. Menunjukkan kebanggaan saat memperlihatkan hasil karya atau nilai sekolah yang bagus.\n2. Senang mengerjakan tugas secara mandiri dan bertanggung jawab (misal: PR, piket kelas).\n3. Memiliki hobi atau minat khusus (misal: menyusun puzzle, olahraga, atau koleksi kartu).\n4. Mementingkan interaksi dengan kelompok teman sebaya (Peer group) dan mulai memahami konsep kerjasama tim.",
      patofisiologi:
        "Dunia anak sekolah meluas dari lingkungan keluarga ke lingkungan sekolah. Di sini, anak dinilai berdasarkan kinerjanya. Jika anak mendapatkan dukungan untuk mencoba hal baru dan pujian atas usahanya (bukan hanya hasilnya), mereka akan mengembangkan rasa Industry (rajin/kompeten). Namun, jika anak sering dibandingkan secara negatif atau selalu gagal memenuhi ekspektasi, mereka akan mengembangkan perasaan rendah diri (Inferiority) yang dapat menghambat motivasi belajarnya.",
      tanda_gejala:
        "DS (Subjektif):\n- 'Ibu, tadi aku dapat nilai seratus di tes matematika dan dipuji guru!'\n- 'Saya ingin belajar cara mengatur waktu agar bisa bermain bola setelah mengerjakan PR.'\n- 'Saya sangat senang berkumpul dengan teman-teman di grup pramuka.'\n\nDO (Objektif):\n- Anak menunjukkan buku tugas atau rapor yang tertata rapi.\n- Anak mampu mendeskripsikan aturan dalam permainan kelompok secara jelas.\n- Mampu mempertahankan fokus dalam mengerjakan tugas minimal 30-45 menit.\n- Menunjukkan interaksi sosial yang kooperatif dengan teman sebaya.",
      pemeriksaan_penunjang:
        "1. Tes Inteligensi (IQ) atau Tes Bakat Minat (jika diperlukan untuk pengarahan akademik).\n2. Skrining kesehatan anak sekolah (Penjaringan kesehatan gigi, mata, dan telinga).\n3. Penilaian status gizi berdasarkan IMT/U (Indeks Massa Tubuh menurut Usia).",
      penatalaksanaan_medis:
        "1. Suplementasi Zat Besi dan nutrisi otak (Omega-3) untuk mendukung konsentrasi belajar.\n2. Pemberian Imunisasi DT (Difteria Tetanus) dan Td pada program BIAS.\n3. Skrining kesehatan mata secara periodik akibat peningkatan paparan layar (Gawai).",
      pathway:
        "Pematangan Kognitif Konkret -> Pengakuan Sosial -> Penguasaan Keterampilan -> Rasa Kompeten -> Keberhasilan Tugas -> Industri.",
      fokus_pengkajian:
        "1. Prestasi akademik dan faktor-faktor yang menghambat konsentrasi belajar.\n2. Kualitas pertemanan (Apakah ada tanda-tanda Bullying/Perundungan).\n3. Penggunaan teknologi dan media sosial (Durasi Screen Time).",
      rentang_respon:
        "Adaptif (Industri/Kompeten) <--> Antara (Kurang Percaya Diri) <--> Maladaptif (Inferioritas/Rendah Diri).",
      mekanisme_koping:
        "1. Kompetisi yang sehat dalam meraih prestasi.\n2. Sublimasi: Menyalurkan energi stress ke dalam kegiatan seni atau olahraga.",
      masalah_keperawatan: [
        "Kesiapan Peningkatan Perkembangan Anak Sekolah",
        "Kesiapan Peningkatan Konsep Diri",
        "Kesiapan Peningkatan Manajemen Kesehatan",
      ],
      sp_pasien:
        "SP 1: Latih keterampilan industri melalui pembuatan kerajinan tangan atau proyek kreatif sederhana.\nSP 2: Latih teknik manajemen waktu belajar (Metode Pomodoro atau jadwal harian bergambar).\nSP 3: Diskusikan cara menjaga kesehatan fisik (Cuci tangan, pilih jajanan sehat, dan waktu tidur cukup).",
      sp_keluarga:
        "SP 1: Edukasi orang tua untuk memberikan pujian yang berbasis pada 'Usaha' anak, bukan hanya pada 'Nilai' akhir.\nSP 2: Latih keluarga untuk menciptakan suasana rumah yang tenang dan mendukung proses belajar.\nSP 3: Diskusikan peran keluarga sebagai pendengar yang baik saat anak menceritakan masalah dengan temannya.",
      discharge_planning:
        "1. Anak menunjukkan motivasi belajar yang konsisten.\n2. Memiliki setidaknya satu hobi atau keterampilan yang dikuasai dengan baik.\n3. Keluarga tidak lagi membanding-bandingkan anak dengan saudara atau orang lain.",
      edukasi_keluarga:
        "Jangan hanya menanyakan 'Nilainya berapa?', tapi tanyakanlah 'Hal seru apa yang kamu pelajari hari ini?'. Hal ini membangun orientasi pada proses dan rasa ingin tahu.",
      pohon_masalah:
        "Kreativitas & Kompetensi <- Peningkatan Perkembangan Anak Sekolah <- Dukungan Guru & Orang Tua",
      referensi: ["PPNI (2016). SDKI", "PPNI (2018). SIKI", "Wong (2009)"],
    },
    {
      id: "sehat-remaja",
      kategori: "ASKEP JIWA DIAGNOSIS SEHAT",
      nama: "6. Kesiapan Peningkatan Perkembangan Remaja",
      sdki: "D.0123",
      definisi:
        "Kesiapan remaja (usia 12-18 tahun) untuk meningkatkan pembentukan identitas diri yang stabil, mandiri, dan integrasi peran dalam masyarakat. Fokus pada tahap ini adalah eksplorasi nilai-nilai pribadi, pemilihan karir/citra masa depan, serta kemampuan menjalin hubungan interpersonal yang mendalam tanpa kehilangan jati diri (Erikson: Identity vs Role Confusion).",
      etiologi:
        "**1. Tahap Psikososial:**\nPerpindahan dari masa anak-anak menuju dewasa yang ditandai dengan pencarian 'Siapa saya?'.\n\n**2. Faktor Fisiologis:**\nPubertas dan lonjakan hormonal yang memicu perubahan citra tubuh dan kematangan seksual.\n\n**3. Faktor Kognitif:**\nOperasional Formal Piaget: Kemampuan berpikir abstrak, idealistik, dan mempertanyakan otoritas.",
      manifestasi_klinis:
        "**Gambaran perilaku identitas diri:**\n1. Menunjukkan minat pada aktivitas kelompok sebaya yang memiliki nilai atau hobi serupa.\n2. Mulai mendiskusikan rencana masa depan (kuliah/kerja) secara lebih realistis.\n3. Berani mengekspresikan pendapat pribadi yang berbeda dari orang tua secara asertif.\n4. Mampu berempati dan memahami sudut pandang orang lain dalam konflik sosial.\n5. Menjaga citra tubuh yang sehat (berpakaian rapi, menjaga kebersihan diri).",
      patofisiologi:
        "Lonjakan hormon seks (Estrogen/Testosteron) merangsang perkembangan otak (khususnya Amigdala dan Prefrontal Cortex). Remaja yang didukung untuk mengeksplorasi minatnya dan memiliki role model yang positif akan mencapai 'Identity Achievement'. Sebaliknya, jika remaja terlalu ditekan untuk menjadi apa yang diinginkan orang tua atau mengalami penolakan sosial, mereka akan terjebak dalam 'Role Confusion' (Ketidakpastian peran).",
      tanda_gejala:
        "DS (Subjektif):\n- 'Saya ingin mulai menabung untuk biaya masuk universitas pilihan saya.'\n- 'Saya senang ikut organisasi di sekolah karena merasa lebih berguna bagi orang lain.'\n- 'Meskipun teman-teman saya merokok, saya memilih untuk tidak ikut karena saya tahu itu merusak kesehatan.'\n\nDO (Objektif):\n- Penampilan fisik bersih dan terawat sesuai dengan identitas gendernya.\n- Terlibat aktif dalam minimal satu kegiatan ekstrakurikuler atau komunitas.\n- Hubungan dengan orang tua tampak terbuka (diskusi dua arah).\n- Nilai akademik stabil dan menunjukkan motivasi internal.",
      pemeriksaan_penunjang:
        "1. Skrining Identitas dan Konsep Diri (misal: Skala Rosenberg).\n2. Inventori Minat dan Bakat untuk perencanaan karir.\n3. Pemeriksaan kesehatan fisik terkait pertumbuhan (TB/BB) dan kesehatan reproduksi.",
      penatalaksanaan_medis:
        "1. Edukasi Pencegahan Penyakit Menular Seksual dan Bahaya Narkoba/NAPZA.\n2. Suplementasi Zat Besi (terutama untuk remaja putri guna mencegah anemia).\n3. Konsultasi Psikologi jika terdapat tanda-tanda depresi atau krisis identitas berat.",
      pathway:
        "Pubertas -> Eksplorasi Peran -> Integrasi Nilai-Nilai Pribadi -> Identitas Diri Mantap -> Kesiapan Masuk Masa Dewasa.",
      fokus_pengkajian:
        "1. Persepsi remaja terhadap citra tubuh dan perubahan fisiknya.\n2. Pengaruh peer group (teman sebaya) terhadap pengambilan keputusan.\n3. Kemampuan manajemen stress dalam menghadapi tugas sekolah.",
      rentang_respon:
        "Adaptif (Identitas Mantap) <--> Antara (Krisis Pencarian Diri) <--> Maladaptif (Kebingungan Peran/Kenakalan Remaja).",
      mekanisme_koping:
        "1. Identifikasi dengan tokoh idola yang positif.\n2. Afiliasi: Mencari kekuatan dalam persahabatan kelompok.",
      masalah_keperawatan: [
        "Kesiapan Peningkatan Perkembangan Remaja",
        "Kesiapan Peningkatan Konsep Diri",
        "Kesiapan Peningkatan Manajemen Kesehatan",
      ],
      sp_pasien:
        "SP 1: Bantu remaja mengidentifikasi kekuatan diri, bakat, dan nilai-nilai unik yang dimilikinya.\nSP 2: Latih teknik pengambilan keputusan yang bertanggung jawab (menimbang konsekuensi positif-negatif).\nSP 3: Diskusikan perencanaan masa depan secara bertahap (cita-cita, pendidikan, dan langkah nyata pencapaiannya).",
      sp_keluarga:
        "SP 1: Latih orang tua untuk menjadi 'Pendengar Aktif' tanpa menghakimi perasaan remaja.\nSP 2: Ajarkan keluarga memberikan ruang otonomi (privasi) yang bertanggung jawab sesuai usia remaja.\nSP 3: Diskusikan peran orang tua sebagai pendamping, bukan pendikte, dalam pemilihan minat bakat anak.",
      discharge_planning:
        "1. Remaja mampu menyebutkan 3 kelebihan dirinya dan rencana hidup 5 tahun ke depan.\n2. Terhindar dari perilaku berisiko (Seks bebas, Narkoba, Tawuran).\n3. Orang tua melaporkan berkurangnya konflik negatif dengan anak.",
      edukasi_keluarga:
        "Jadilah 'Sahabat' bagi remaja agar mereka memiliki tempat berlabuh yang aman saat menghadapi tekanan dari dunia luar.",
      pohon_masalah:
        "Kematangan Jati Diri <- Peningkatan Perkembangan Remaja <- Komunikasi Terbuka Keluarga",
      referensi: ["PPNI (2016). SDKI", "Erikson, E.H. (1968)", "Wong (2009)"],
    },
    {
      id: "sehat-dewasamuda",
      kategori: "ASKEP JIWA DIAGNOSIS SEHAT",
      nama: "7. Kesiapan Peningkatan Perkembangan Dewasa Muda",
      sdki: "D.0123",
      definisi:
        "Kesiapan individu (usia 18-35 tahun) untuk membangun hubungan intim secara mendalam (Intimacy), berkomitmen dalam karier, serta memikul tanggung jawab sosial dan keluarga. Fokus utamanya adalah kemampuan berbagi jati diri dengan orang lain dalam hubungan cinta, persahabatan, maupun profesional (Erikson: Intimacy vs Isolation).",
      etiologi:
        "**1. Tahap Psikososial:**\nKebutuhan akan kedekatan emosional dan seksual dengan pasangan serta kemandirian ekonomi.\n\n**2. Faktor Maturasi:**\nPematangan fungsi kognitif penuh dan kestabilan emosional yang mendukung komitmen jangka panjang.",
      manifestasi_klinis:
        "**Gambaran perilaku dewasa matang:**\n1. Memiliki setidaknya satu hubungan pertemanan atau percintaan yang berlandaskan saling percaya.\n2. Fokus pada pembangunan karier atau produktivitas kerja yang bertujuan pada kemandirian.\n3. Mampu menyeimbangkan antara waktu pribadi, waktu dengan pasangan, dan waktu sosial.\n4. Menunjukkan tanggung jawab atas keputusan hidup yang diambil (misal: finansial dan gaya hidup).",
      patofisiologi:
        "Setelah identitas diri terbentuk di masa remaja, individu dewasa muda kini merasa aman untuk menggabungkan identitasnya dengan orang lain tanpa takut kehilangan jati diri. Keberhasilan membangun 'Intimacy' memberikan perasaan dicintai dan berarti. Sebaliknya, ketakutan akan penolakan atau luka emosional dapat menyebabkan individu menarik diri dan mengalami 'Isolasi' sosial yang kronis.",
      tanda_gejala:
        "DS (Subjektif):\n- 'Saya merasa siap untuk melangkah ke jenjang pernikahan dan menata masa depan bersama.'\n- 'Saya merasa puas dengan pekerjaan saya saat ini dan ingin terus meningkatkan kompetensi saya.'\n- 'Saya menikmati waktu berkualitas bersama sahabat-sahabat saya yang selalu mendukung.'\n\nDO (Objektif):\n- Terlibat dalam kontrak kerja tetap atau usaha mandiri yang produktif.\n- Menunjukkan kedewasaan dalam mengelola konflik interpersonal (berdiskusi, bukan lari dari masalah).\n- Penampilan diri yang menunjukkan profesionalisme dan kesiapan sosial.\n- Partisipasi aktif dalam kegiatan komunitas atau hobi produktif harian.",
      pemeriksaan_penunjang:
        "1. Skrining Kesiapan Pranikah (Premarital screening).\n2. Penilaian Kepuasan Hidup dan Kesejahteraan Psikologis (PWS scale).\n3. Pemeriksaan kesehatan tahunan (General check-up) terkait gaya hidup.",
      penatalaksanaan_medis:
        "1. Manajemen stress kerja melalui teknik relaksasi atau konseling.\n2. Edukasi nutrisi dewasa produktif dan pencegahan penyakit gaya hidup (Obesitas, Diabetes).\n3. Konseling gizi dan program perencanaan kehamilan sehat (bagi yang berencana).",
      pathway:
        "Kemandirian Ekonomi/Hukum -> Pencarian Keintiman -> Penguatan Komitmen -> Intimasi Mantap -> Kesiapan Generativitas.",
      fokus_pengkajian:
        "1. Kepuasan dalam pekerjaan dan hubungan percintaan.\n2. Kualitas lingkungan sosial (Support System).\n3. Gaya hidup (Merokok, pola makan, olahraga) yang mempengaruhi kesehatan masa depan.",
      rentang_respon:
        "Adaptif (Intimasi/Berbagi) <--> Antara (Kecanggapan Sosial) <--> Maladaptif (Isolasi/Kesepian Berat).",
      mekanisme_koping:
        "1. Afiliasi: Bergabung dengan rekan sejawat yang sevisi.\n2. Humor dan Penekanan (Suppression): Mengelola emosi negatif secara dewasa.",
      masalah_keperawatan: [
        "Kesiapan Peningkatan Perkembangan Dewasa Muda",
        "Kesiapan Peningkatan Hubungan Interpersonal",
        "Kesiapan Peningkatan Peran Orang Tua",
      ],
      sp_pasien:
        "SP 1: Latih komunikasi asertif dalam menyampaikan kebutuhan emosional pada pasangan/rekan kerja.\nSP 2: Diskusikan strategi manajemen waktu (Work-Life Balance) untuk mencegah burnout.\nSP 3: Diskusikan perencanaan masa depan jangka menengah (misal: memiliki hunian, tabungan pensiun, atau membangun keluarga).",
      sp_keluarga:
        "SP 1: Edukasi orang tua untuk menghargai kemandirian dan privasi dewasa muda tanpa terlalu mencampuri urusan pribadinya.\nSP 2: Berikan dukungan moral sebagai 'Safe Space' bagi dewasa muda saat mereka menghadapi kegagalan karier atau asmara.\nSP 3: Diskusikan transisi peran orang tua dari pengasuh menjadi pendamping dewasa sepadan.",
      discharge_planning:
        "1. Individu memiliki rencana hidup yang terstruktur dan realistis.\n2. Mampu membina hubungan interpersonal yang sehat tanpa ketergantungan patologis.\n3. Kondisi fisik yang bugar didukung oleh pola hidup sehat mandiri.",
      edukasi_keluarga:
        "Dewasa muda butuh kepercayaan, bukan instruksi. Berikan kebebasan mereka untuk berproses menjadi pribadi yang bertanggung jawab.",
      pohon_masalah:
        "Keintiman Diri <- Peningkatan Perkembangan Dewasa Muda <- Hubungan Sehat",
      referensi: [
        "PPNI (2016). SDKI",
        "Erikson, E.H. (1963)",
        "Potter & Perry (2013)",
      ],
    },
    {
      id: "sehat-dewasatua",
      kategori: "ASKEP JIWA DIAGNOSIS SEHAT",
      nama: "8. Kesiapan Peningkatan Perkembangan Dewasa Tua",
      sdki: "D.0123",
      definisi:
        "Kesiapan individu (usia 35-65 tahun) untuk berkontribusi pada kemajuan generasi berikutnya dan produktivitas sosial secara berkelanjutan. Fokus utamanya adalah membimbing kaum muda, mewariskan keahlian, dan merasa bermanfaat bagi lingkungan yang lebih luas (Erikson: Generativity vs Stagnation).",
      etiologi:
        "**1. Tahap Psikososial:**\nPerluasan rasa kepedulian dari diri sendiri/pasangan menuju komunitas dan keturunan.\n\n**2. Faktor Sosial:**\nMenduduki peran puncak dalam karier atau memiliki peran otoritas di keluarga/masyarakat.",
      manifestasi_klinis:
        "**Gambaran perilaku generatif:**\n1. Aktif dalam membimbing anak/cucu atau menjadi mentor bagi junior di tempat kerja.\n2. Terlibat dalam kegiatan sosial, keagaaman, atau pengabdian masyarakat secara sukarela.\n3. Menunjukkan minat dalam melestarikan budaya atau nilai-nilai moral untuk masa depan.\n4. Merasa bangga atas pencapaian generasi muda yang dibantunya.",
      patofisiologi:
        "Dewasa tua yang mencapai kematangan emosi akan merasakan dorongan internal untuk 'Memberi Kembali' (Giving Back) kepada masyarakat. Keberhasilan dalam tugas ini akan membentuk kebajikan 'Kepedulian' (Care). Sebaliknya, jika individu hanya fokus pada kenyamanan diri sendiri secara egois, mereka akan merasa hidupnya hambar, tidak berguna, dan mengalami 'Stagnasi' (Mandek).",
      tanda_gejala:
        "DS (Subjektif):\n- 'Saya ingin membagikan pengalaman hidup saya agar anak muda tidak jatuh ke lubang yang sama.'\n- 'Saya merasa sangat senang bisa membantu renovasi taman desa ini demi cucu-cucu kita nanti.'\n- 'Meskipun sudah senior, saya ingin terus belajar teknologi agar tetap relevan dengan zaman anak-anak saya.'\n\nDO (Objektif):\n- Aktif mengikuti kegiatan organisasi profesi atau kepengurusan lingkungan (RT/RW/Takmir).\n- Menunjukkan kedekatan yang hangat dengan anggota keluarga lintas generasi.\n- Melakukan hobi produktif yang bermanfaat bagi orang lain (misal: berkebun, menulis buku).\n- Kondisi tekanan darah dan gula darah terkontrol (Manajemen kesehatan proaktif).",
      pemeriksaan_penunjang:
        "1. Penilaian Skala Generativitas (Loyola Generativity Scale).\n2. Skrining risiko penyakit degeneratif (Diabetes, Hipertensi, Asam Urat).\n3. Evaluasi kepuasan hidup di masa paruh baya.",
      penatalaksanaan_medis:
        "1. Pemeriksaan kesehatan berkala (General check-up) setiap 6-12 bulan.\n2. Terapi hormon (jika diperlukan pada masa menopause/andropause).\n3. Latihan fisik low-impact (Senam jantung, jalan cepat) secara rutin.",
      pathway:
        "Pencapaian Karier/Keluarga -> Perasaan Mampu -> Keinginan Berbagi -> Bimbingan Generasi -> Generativitas.",
      fokus_pengkajian:
        "1. Pencapaian yang dirasakan paling bermakna dalam hidup saat ini.\n2. Tingkat keterlibatan dalam keluarga besar (Extended family).\n3. Persiapan mental menghadapi masa pensiun (Empty nest syndrome).",
      rentang_respon:
        "Adaptif (Generativitas/Bermanfaat) <--> Antara (Kerapuhan/Krisis Paruh Baya) <--> Maladaptif (Stagnasi/Egois).",
      mekanisme_koping:
        "1. Altruisme: Mencari kebahagiaan dengan menolong orang lain.\n2. Antisispasi: Mempersiapkan masa pensiun sejak dini secara finansial dan mental.",
      masalah_keperawatan: [
        "Kesiapan Peningkatan Perkembangan Dewasa Tua",
        "Kesiapan Peningkatan Menjadi Orang Tua/Kakek-Nenek",
        "Kesiapan Peningkatan Manajemen Kesehatan",
      ],
      sp_pasien:
        "SP 1: Eksplorasi makna hidup dan kontribusi apa yang ingin ditinggalkan (Legacy) bagi lingkungan sekitar.\nSP 2: Latih strategi bimbingan (Coaching/Mentoring) yang efektif bagi anak-anak atau rekan kerja junior.\nSP 3: Diskusikan perencanaan aktivitas bermakna untuk masa pensiun agar tetap produktif dan sehat.",
      sp_keluarga:
        "SP 1: Edukasi anggota keluarga untuk menghargai pengalaman dan nasihat dewasa tua tanpa merasa terbebani.\nSP 2: Libatkan dewasa tua dalam musyawarah penting keluarga besar agar mereka merasa tetap memiliki peran.\nSP 3: Diskusikan cara menjaga kedekatan emosional antar generasi (cucu-kakek/nenek).",
      discharge_planning:
        "1. Individu memiliki setidaknya satu peran sosial yang membahagiakan.\n2. Memahami perubahan fisik normal akibat penuaan dan cara mengelolanya.\n3. Memiliki jadwal rutin untuk pengabdian masyarakat atau hobi produktif.",
      edukasi_keluarga:
        "Apresiasi atas keberadaan mereka adalah bahan bakar semangat untuk terus berkontribusi bagi masa depan keluarga.",
      pohon_masalah:
        "Kemanfaatan Hidup <- Peningkatan Perkembangan Dewasa Tua <- Bimbingan Generasi",
      referensi: [
        "PPNI (2016). SDKI",
        "Erikson, E.H. (1982)",
        "Smeltzer & Bare (2010)",
      ],
    },
    {
      id: "sehat-lansia",
      kategori: "ASKEP JIWA DIAGNOSIS SEHAT",
      nama: "9. Kesiapan Peningkatan Perkembangan Lansia",
      sdki: "D.0123",
      definisi:
        "Kesiapan lansia (usia >65 tahun) untuk meningkatkan integritas diri melalui penerimaan menyeluruh atas perjalanan hidupnya, prestasi yang diraih, dan kegagalan yang pernah dialami sebagai satu kesatuan yang bermakna. Pada tahap ini, lansia berusaha mencapai kedamaian batin dan kebijaksanaan (Erikson: Ego Integrity vs Despair).",
      etiologi:
        "**1. Tahap Psikososial:**\nRefleksi akhir kehidupan atas segala upaya dan peran yang telah dijalani.\n\n**2. Faktor Fisiologis:**\nPenurunan fungsi organ secara degeneratif (Vaskular, Saraf, Muskuloskeletal).\n\n**3. Krisis Transisi:**\nMasa pensiun, kehilangan pasangan atau teman sebaya, dan adaptasi terhadap ketergantungan fisik.",
      manifestasi_klinis:
        "**Gambaran integritas diri:**\n1. Sering menceritakan kisah hidupnya dengan nada positif dan penuh hikmah (Reminiscence).\n2. Menunjukkan ketenangan dalam menghadapi kematian dan kedalaman dalam spiritualitas.\n3. Mampu beradaptasi dengan keterbatasan mobilitas tanpa mengeluh berlebihan.\n4. Merasa bahagia melihat kesuksesan anak dan cucunya sebagai bagian dari warisan hidupnya.",
      patofisiologi:
        "Lansia yang berhasil melakukan 'Life Review' (peninjauan hidup) secara objektif dan memaafkan kegagalan masa lalu akan mencapai 'Integritas'. Mereka merasa utuh dan bijaksana. Sebaliknya, lansia yang terjebak pada penyesalan atas peluang yang hilang, kebencian, atau ketakutan akan kematian yang mendekat akan jatuh ke dalam 'Keputusasaan' (Despair), yang sering bermanifestasi sebagai depresi lansia.",
      tanda_gejala:
        "DS (Subjektif):\n- 'Hidup saya sudah sangat lengkap, saya bersyukur atas segalanya, baik senang maupun susah.'\n- 'Saya menikmati waktu saya sekarang dengan banyak beribadah dan bermain bersama cucu.'\n- 'Saya tidak takut lagi dengan apa yang akan terjadi nanti, yang penting saya berbuat baik hari ini.'\n\nDO (Objektif):\n- Wajah tampak damai dan murah senyum saat berinteraksi.\n- Skor Geriatric Depression Scale (GDS) berada pada rentang rendah (Normal).\n- Pasien kooperatif dalam kontrol penyakit kronisnya (misal: patuh minum obat HT).\n- Menunjukkan interaksi yang harmonis dengan keluarga dan pendamping.",
      pemeriksaan_penunjang:
        "1. Mini Mental State Examination (MMSE) untuk menilai fungsi kognitif dan daya ingat.\n2. Skala Geriatric Depression Scale (GDS) untuk skining depresi pada lansia.\n3. Penilaian aktivitas kehidupan harian (Activities of Daily Living - Barthel Index).",
      penatalaksanaan_medis:
        "1. Manajemen penyakit degeneratif kronis (Diet rendah garam/gula, Olahraga ringan).\n2. Suplementasi kalsium, vitamin D3, dan B12 untuk mencegah osteoporosis dan neuro-degenerasi.\n3. Terapi okupasi atau kegiatan kelompok lansia (Brain gym) untuk mencegah demensia.",
      pathway:
        "Penurunan Fungsi Fisik -> Evaluasi Perjalanan Hidup -> Life Review -> Penerimaan & Pemaafan -> Integritas Diri -> Kebijaksanaan.",
      fokus_pengkajian:
        "1. Kualitas hubungan emosional dengan anak, cucu, dan pengasuh.\n2. Tingkat kepuasaan spiritual dan religiusitas di masa senja.\n3. Keamanan lingkungan rumah (Pencegahan risiko jatuh/Home safety).",
      rentang_respon:
        "Adaptif (Integritas Diri) <--> Antara (Gelisah/Sering Menyesal) <--> Maladaptif (Keputusasaan/Keinginan Mati).",
      mekanisme_koping:
        "1. Spiritualitas Tinggi: Berserah diri pada Tuhan.\n2. Bercerita (Storytelling): Mengurangi beban pikiran melalui peninjauan hidup positif.",
      masalah_keperawatan: [
        "Kesiapan Peningkatan Perkembangan Lansia",
        "Kesiapan Peningkatan Koping",
        "Kesiapan Peningkatan Spiritualitas",
      ],
      sp_pasien:
        "SP 1: Latih Peninjauan Hidup Positif (Life Review): Diskusikan 3 peristiwa paling membahagiakan di masa lalu dan hikmahnya.\nSP 2: Fasilitasi aktivitas spiritual yang menenangkan (misal: mengaji, mendengarkan ceramah, atau meditasi).\nSP 3: Ajarkan senam lansia ringan atau latihan pernapasan untuk menjaga kebugaran fisik dan ketenangan pikiran.",
      sp_keluarga:
        "SP 1: Edukasi keluarga untuk mendampingi lansia dengan sabar, mendengar cerita mereka tanpa menyela.\nSP 2: Bantu lansia tetap merasa berdaya dengan melibatkan mereka dalam kegiatan keluarga yang ringan.\nSP 3: Edukasi keluarga mengenai modifikasi lingkungan rumah (Lantai tidak licin, pegangan dikamar mandi) demi keselamatan lansia.",
      discharge_planning:
        "1. Lansia merasa diterima dan dihormati dalam lingkup keluarganya.\n2. Mampu mengekspresikan rasa syukur secara rutin.\n3. Tidak ada tanda-tanda depresi atau penarikan diri sosial.",
      edukasi_keluarga:
        "Lansia tidak butuh banyak hal materi, mereka hanya butuh waktu kita untuk mendengar cerita mereka yang berulang.",
      pohon_masalah:
        "Kebijaksanaan Lansia <- Peningkatan Perkembangan Lansia <- Evaluasi Hidup & Kasih Sayang Keluarga",
      referensi: [
        "PPNI (2016). SDKI",
        "PPNI (2018). SIKI",
        "Stanley, M (2006)",
      ],
    },
    {
      id: "sehat-defisiensi-pengetahuan",
      kategori: "ASKEP JIWA DIAGNOSIS SEHAT",
      nama: "10. Defisiensi Pengetahuan",
      sdki: "D.0111",
      definisi:
        "Kesiapan untuk meningkatkan akumulasi informasi kognitif yang berkaitan dengan topik kesehatan tertentu untuk meningkatkan pemahaman dan kemandirian dalam perawatan diri. Kondisi ini mencerminkan sikap proaktif individu untuk mencari literasi kesehatan yang akurat guna mengubah perilaku kesehatan menjadi lebih baik.",
      etiologi:
        "**1. Kesenjangan Informasi (Gap):**\nKurangnya paparan terhadap sumber informasi yang valid atau kebingungan akibat informasi yang saling bertentangan (misal: mitos vs fakta).\n\n**2. Faktor Proaktif:**\nKeinginan untuk mengelola penyakit kronis secara mandiri atau mempersiapkan diri menghadapi prosedur medis tertentu.\n\n**3. Keterbatasan Literasi:**\nKesulitan dalam memahami istilah medis atau kompleksitas instruksi perawatan sebelumnya.",
      manifestasi_klinis:
        "**Karakteristik kesiapan belajar:**\n1. Secara aktif menanyakan tentang diagnosis, terapi, atau cara perawatan di rumah.\n2. Mengungkapkan minat yang besar untuk mengikuti penyuluhan atau membaca materi edukasi.\n3. Mampu menjelaskan kembali informasi kesehatan yang baru saja diterima secara proporsional.\n4. Menunjukkan perilaku proaktif dalam mencari referensi kesehatan (cek label obat, bertanya efek samping).",
      patofisiologi:
        "Individu menyadari adanya ketidakpastian (Uncertainty) dalam pengelolaan kesehatannya. Kesadaran ini memicu dorongan internal untuk belajar (Motivation to learn). Melalui proses asimilasi (masuknya info baru) dan akomodasi (perubahan struktur pikir lama), individu membangun pengetahuan baru yang lebih akurat. Pengetahuan ini menjadi dasar bagi perubahan perilaku (Behavioral change) yang mendukung pemulihan dan pencegahan kekambuhan.",
      tanda_gejala:
        "DS (Subjektif):\n- 'Bisa tolong jelaskan sekali lagi bagaimana cara kerja obat ini bagi proses penyembuhan saya?'\n- 'Saya ingin tahu jenis diet yang paling tepat untuk kondisi saya agar tidak cepat kambuh.'\n- 'Saya siap belajar teknik relaksasi mandiri yang perawat ajarkan tadi.'\n\nDO (Objektif):\n- Pasien tampak antusias mendengarkan penjelasan dan mencatat poin-poin penting.\n- Mampu mendemonstrasikan teknik perawatan (misal: cuci tangan/napas dalam) dengan benar 1x latihan.\n- Skor Pre-test pengetahuan meningkat signifikan setelah sesi edukasi.\n- Pasien menunjukkan ketertarikan pada alat peraga atau leaflet yang disediakan.",
      pemeriksaan_penunjang:
        "1. Kuesioner Pengetahuan Kesehatan (Pre-test dan Post-test).\n2. Penilaian Tingkat Literasi Kesehatan (Health Literacy Assessment).\n3. Evaluasi Kebutuhan Belajar yang dipersonalisasi sesuai gaya belajar (Visual/Auditori/Kinestetik).",
      penatalaksanaan_medis:
        "1. Program Pendidikan Kesehatan Terstruktur (Unit Health Education).\n2. Kolaborasi dengan apoteker terkait edukasi medikasi (konseling obat).\n3. Penyediaan sumber literasi kesehatan digital atau cetak (Leaflet/Poster/Video).",
      pathway:
        "Ketidaktahuan/Gap Info -> Keinginan Tahu -> Proses Belajar -> Peningkatan Kognitif -> Kemandirian Perawatan Diri -> Kesejahteraan.",
      fokus_pengkajian:
        "1. Tingkat pendidikan terakhir dan hambat bahasa yang mungkin ada.\n2. Kesiapan fisik (apakah pasien sedang nyeri/sesak?) yang dapat menghambat konsentrasi belajar.\n3. Pengalaman masa lalu terkait penyakit yang seringkali dikaitkan dengan mitos tertentu.",
      rentang_respon:
        "Adaptif (Paham & Mandiri) <--> Antara (Bingung/Bertanya) <--> Maladaptif (Penolakan terhadap Informasi/Mitos).",
      mekanisme_koping:
        "1. Pencarian Info: Mencari referensi dari tenaga profesional.\n2. Reframing: Mengubah konsep pikir lama yang salah dengan fakta baru.",
      masalah_keperawatan: [
        "Defisit Pengetahuan (Kesiapan Peningkatan)",
        "Manajemen Kesehatan Tidak Efektif (Risiko)",
        "Ganguan Komunikasi Verbal (Jika ada hambatan bahasa)",
      ],
      sp_pasien:
        "SP 1: Identifikasi kebutuhan informasi yang paling mendesak bagi pasien saat ini (Prioritas belajar).\nSP 2: Berikan edukasi kesehatan menggunakan bahasa yang sederhana, alat peraga visual, dan berikan waktu untuk diskusi tanya-jawab.\nSP 3: Evaluasi pemahaman pasien melalui metode 'Teach-Back' (Pasien diminta menjelaskan kembali rencana perawatan).",
      sp_keluarga:
        "SP 1: Libatkan keluarga sebagai pendamping belajar agar dapat menjadi pengingat bagi pasien di rumah.\nSP 2: Latih keluarga cara mencari informasi kesehatan yang valid dan menghindari berita bohong (Hoax).\nSP 3: Diskusikan peran keluarga dalam menciptakan lingkungan yang kondusif bagi perubahan perilaku sehat pasien di rumah.",
      discharge_planning:
        "1. Pasien mampu menjelaskan diagnosis, regimen obat, dan jadwal kontrol secara mandiri.\n2. Mampu meragakan teknik perawatan diri minimal 80% benar.\n3. Keluarga menyatakan siap mendampingi proses perawatan pasien di rumah secara konsisten.",
      edukasi_keluarga:
        "Pengetahuan adalah kekuatan. Pasien yang paham dengan kondisinya cenderung memiliki tingkat kepatuhan (Compliance) yang jauh lebih tinggi.",
      pohon_masalah:
        "Kepatuhan Terapi <- Peningkatan Pengetahuan <- Edukasi Terstruktur",
      referensi: ["PPNI (2016). SDKI", "PPNI (2018). SIKI", "Nursalam (2011)"],
    },

    // === ASKEP JIWA DIAGNOSIS RISIKO â€“ DIAGNOSIS FISIK ===
    {
      id: "risiko-fisik-nyeri",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO â€“ DIAGNOSIS FISIK",
      nama: "1. Nyeri Akut",
      sdki: "D.0077",
      definisi:
        "Pengalaman sensorik atau emosional yang tidak menyenangkan yang berkaitan dengan kerusakan jaringan aktual atau potensial, dengan onset mendadak atau lambat dan berintensitas ringan hingga berat yang berlangsung kurang dari 3 bulan. Nyeri akut berfungsi sebagai tanda peringatan fisiologis adanya cedera tubuh.",
      etiologi:
        "**1. Agen Pencedera Fisiologis:**\nInflamasi, iskemia, atau neoplasma.\n\n**2. Agen Pencedera Kimiawi:**\nTerbakar bahan kimia, iritasi cairan tubuh (misal asam lambung).\n\n**3. Agen Pencedera Fisik:**\nTrauma, tindakan pembedahan, prosedur medis, atau suhu ekstrem.",
      manifestasi_klinis:
        "**Karakteristik perilaku nyeri:**\n1. Mengeluh nyeri secara verbal atau menggunakan skala nyeri.\n2. Tampak meringis (facial grimace).\n3. Bersikap protektif (menjauhi area nyeri dari sentuhan).\n4. Gelisah dan sulit tidur (insomnia).\n5. Peningkatan frekuensi nadi, tekanan darah, dan pernapasan (Respon otonom).",
      patofisiologi:
        "Kerusakan jaringan memicu pelepasan mediator kimia (bradikinin, histamin, prostaglandin) yang merangsang ujung saraf bebas (nosiseptor). Sinyal nyeri diteruskan melalui serabut saraf A-delta dan serabut C menuju kornu dorsalis medula spinalis, lalu naik ke talamus dan korteks serebri untuk dipersepsikan sebagai rasa nyeri. Respon emosional muncul melalui sistem limbik, menyebabkan kecemasan atau penderitaan psikologis.",
      tanda_gejala:
        "DS (Subjektif) - PQRST:\n- P (Provoking): 'Nyeri muncul saat saya bergerak miring.'\n- Q (Quality): 'Rasanya seperti ditusuk-tusuk benda tajam.'\n- R (Region): 'Nyeri terpusat di perut kanan bawah.'\n- S (Severity): 'Skala nyeri 7 dari 10.'\n- T (Time): 'Nyeri timbul tenggelam setiap 15 menit.'\n\nDO (Objektif):\n- Pasien tampak memegang area perut dengan kaku.\n- Wajah tampak meringis saat ditekan pada area luka.\n- Nadi 110 x/menit, TD 140/90 mmHg.\n- Pasien tampak berfokus pada diri sendiri dan enggan berinteraksi.",
      pemeriksaan_penunjang:
        "1. Pengukuran intensitas nyeri menggunakan VAS (Visual Analog Scale) atau NRS (Numeric Rating Scale).\n2. Pemeriksaan radiologi (Rontgen/CT Scan/USG) untuk mencari sumber kerusakan jaringan.\n3. Laboratorium: Penanda inflamasi (Leukosit, CRP).",
      penatalaksanaan_medis:
        "1. Analgetik NSAID (Asam Mefenamat, Ketorolac) untuk nyeri ringan-sedang.\n2. Analgetik Opioid (Morphine, Pethidine) untuk nyeri berat (sesuai indikasi).\n3. Prosedur bedah (jika nyeri akibat obstruksi atau fraktur).",
      pathway:
        "Stimulus Pencedera -> Pelepasan Mediator Kimia -> Sensitisasi Nosiseptor -> Transmisi Impuls -> Persepsi Nyeri -> Nyeri Akut -> Gangguan Pola Tidur.",
      fokus_pengkajian:
        "1. Lokasi nyeri yang paling intens dan penyebarannya.\n2. Durasi nyeri dan faktor-factors yang memperberat nyeri.\n3. Respon psikologis pasien terhadap keberadaan nyeri tersebut.",
      rentang_respon:
        "Adaptif (Toleransi Nyeri Tinggi) <--> Antara (Gelisah - Merintis) <--> Maladaptif (Syok Neurogenik).",
      mekanisme_koping:
        "1. Menangis atau mengerang sebagai bentuk ventilasi fisik.\n2. Teknik relaksasi distraksi spontan (memeluk bantal).\n3. Menarik diri dari keramaian.",
      masalah_keperawatan: [
        "Nyeri Akut",
        "Gangguan Pola Tidur",
        "Intoleransi Aktivitas",
      ],
      sp_pasien:
        "SP 1: Latih Teknik Relaksasi Napas Dalam untuk menurunkan ketegangan otot dan saraf.\nSP 2: Latih Teknik Distraksi (Mendengarkan musik, menonton, atau bincang-bincang santai).\nSP 3: Edukasi penggunaan analgetik secara mandiri dan pelaporan efek sampingnya.",
      sp_keluarga:
        "SP 1: Edukasi keluarga cara melakukan kompres (hangat/dingin) sesuai jenis pencedera.\nSP 2: Latih keluarga memberikan lingkungan yang tenang (rendah cahaya/suara) saat nyeri memuncak.\nSP 3: Diskusikan peran keluarga dalam memonitor tanda-tanda nyeri pasien saat di rumah.",
      discharge_planning:
        "1. Pasien mampu melaporkan penurunan skala nyeri menjadi <3.\n2. Pasien mampu tidur minimal 6 jam sehari tanpa terbangun nyeri.\n3. Keluarga memahami dosis dan waktu pemberian obat analgetik oral.",
      edukasi_keluarga:
        "Keluarga harus memberikan dukungan moral karena rasa nyeri seringkali bertambah parah jika pasien merasa kesepian atau terabaikan.",
      pohon_masalah: "Hambatan Mobilisasi <- Nyeri Akut <- Cedera Jaringan",
      referensi: ["PPNI (2016). SDKI", "Potter & Perry (2013)"],
    },
    {
      id: "risiko-fisik-jatuh",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO â€“ DIAGNOSIS FISIK",
      nama: "2. Risiko Jatuh",
      sdki: "D.0143",
      definisi:
        "Beresiko mengalami kejadian yang menyebabkan individu mendarat di lantai secara tidak sengaja, yang mungkin mengakibatkan cedera fisik. Risiko ini meningkat pada populasi lansia, pasien dengan gangguan neuromuskular, atau pasien dengan gangguan orientasi realitas.",
      etiologi:
        "**1. Faktor Intrinsik:**\na. Usia (>65 tahun atau <5 tahun).\nb. Penyakit: Stroke, Parkinson, Vertigo, atau Hipotensi Ortostatik.\nc. Masalah kognitif: Delirium, Demensia, atau Psikosis (Bingung).\n\n**2. Faktor Ekstrinsik:**\na. Lingkungan: Pencahayaan kurang, lantai licin, tidak ada pegangan di kamar mandi (Handrail).\nb. Farmakologi: Efek samping obat penenang (Sedatif), diuretik, atau antipsikotik.",
      manifestasi_klinis:
        "**Tanda-tanda risiko tinggi:**\n1. Jalan tidak stabil atau sempoyongan.\n2. Riwayat jatuh dalam 3-6 bulan terakhir.\n3. Menggunakan alat bantu jalan (tongkat/kursi roda).\n4. Penurunan tajam penglihatan atau pendengaran.\n5. Kondisi fisik lemah (Hipotensi/Anemia).",
      patofisiologi:
        "Gangguan pada sistem kontrol keseimbangan (Vestibular, Visual, dan Somatosensorik) menyebabkan kegagalan individu dalam mempertahankan posisi tegak saat bergerak atau berdiam diri. Penurunan kekuatan otot rangka (muskuloskletal) atau keterlambatan transmisi saraf motorik mengakibatkan respon korektif tubuh saat tergelincir menjadi tidak efektif, sehingga terjadilah jatuh.",
      tanda_gejala:
        "DS (Subjektif):\n- 'Kepala saya terasa pusing seperti berputar saat berdiri.'\n- 'Kaki saya terasa sangat lemas dan tidak kuat menahan beban.'\n- 'Pandangan saya agak kabur dan gelap.'\n\nDO (Objektif):\n- Skor Morse Fall Scale (Dewasa) atau Humpty Dumpty (Anak) berada pada level risiko tinggi.\n- Pasien tampak memegang dinding saat berjalan.\n- Cara jalan kaku (bradikinesia) atau ataksia.\n- Menggunakan lebih dari 3 jenis obat sedatif/psikotropika.",
      pemeriksaan_penunjang:
        "1. Penilaian risiko jatuh harian menggunakan skala standar rumah sakit (Morse/Get up and go).\n2. Cek kadar Elektrolit darah (Kalsium, Kalium) & Kadar Hb (Anemia).\n3. Pengukuran tekanan darah posisi tidur vs berdiri (uji ortostatik).",
      penatalaksanaan_medis:
        "1. Pemasangan penanda risiko jatuh (Gelang Kuning).\n2. Fisioterapi untuk latihan keseimbangan dan penguatan massa otot.\n3. Peninjauan ulang (re-evaluasi) terapi obat yang menyebabkan pusing/sedasi.",
      pathway:
        "Penuaan/Penyakit -> Penurunan Fungsi Neuromuskuler -> Instabilitas Keseimbangan -> Risiko Jatuh -> Risiko Cedera.",
      fokus_pengkajian:
        "1. Kondisi lingkungan sekitar kamar pasien (apakah aman?).\n2. Kepatuhan pasien dalam memanggil bantuan sebelum turun dari bed.\n3. Status nutrisi dan hidrasi (yang mempengaruhi kekuatan otot).",
      rentang_respon:
        "Adaptif (Berjalan Mandiri - Stabil) <--> Antara (Goyah - Perlu Bantuan) <--> Maladaptif (Imobilisasi/Jatuh Berulang).",
      mekanisme_koping:
        "1. Membatasi pergerakan (takut jatuh/koping pasif).\n2. Meminta bantuan pendampingan terus menerus.",
      masalah_keperawatan: [
        "Risiko Jatuh",
        "Risiko Cedera",
        "Defisit Perawatan Diri",
      ],
      sp_pasien:
        "SP 1: Edukasi keamanan lingkungan (Lantai kering, lampu terang, pagar tempat tidur terpasang).\nSP 2: Latih cara berpindah dari tempat tidur ke kursi secara aman (Bertahap: miring, duduk, baru berdiri).\nSP 3: Ajarkan penggunaan alat bantu jalan yang benar dan pastikan rem kursi roda berfungsi.",
      sp_keluarga:
        "SP 1: Libatkan keluarga untuk selalu berada di samping pasien saat ingin ke kamar mandi.\nSP 2: Edukasi keluarga cara melakukan modifikasi lingkungan rumah (Pasang karpet anti licin).\nSP 3: Diskusikan tanda-tanda kelemahan fisik pasien yang harus dilaporkan segera ke perawat.",
      discharge_planning:
        "1. Rumah bebas dari hambatan benda kecil di lantai.\n2. Pasien menggunakan alas kaki yang tidak licin.\n3. Keluarga memahami prosedur 'Call Bell' atau panggilan bantuan.",
      edukasi_keluarga:
        "Keluarga dilarang meninggalkan pasien sendirian jika pagar tempat tidur dalam kondisi terbuka.",
      pohon_masalah: "Cedera Fisik <- Risiko Jatuh <- Kelemahan Otot",
      referensi: ["PPNI (2016). SDKI", "Morse, J.M. (2009)"],
    },
    {
      id: "risiko-fisik-hipertermia",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO â€“ DIAGNOSIS FISIK",
      nama: "3. Hipertermia",
      sdki: "D.0130",
      definisi:
        "Kondisi di mana suhu tubuh meningkat di atas rentang normal tubuh karena kegagalan atau ketidakmampuan mekanisme termoregulasi tubuh untuk mengatasi beban panas berlebih. Biasanya didefinisikan jika suhu inti tubuh >37,5 C (aksila) atau >38 C (rektal).",
      etiologi:
        "**1. Proses Penyakit:**\nInfeksi bakteri, virus, atau parasit (Sepsis, Thypoid, Malaria).\n\n**2. Faktor Lingkungan:**\nPaparan panas ekstrem jangka panjang (Heat stroke), aktivitas fisik berat di cuaca panas.\n\n**3. Kondisi Medis Lain:**\nDehidrasi (kekurangan cairan untuk keringat), hipertiroidisme, atau efek samping obat-obatan tertentu.",
      manifestasi_klinis:
        "**Tanda klinis hipertermia:**\n1. Suhu tubuh di atas nilai normal (>37,5 C).\n2. Kulit tampak merah dan terasa hangat saat disentuh.\n3. Takikardia (Frekuensi nadi meningkat).\n4. Takipnea (Frekuensi napas meningkat).\n5. Kejang (sering terjadi pada anak/balita).\n6. Penurunan kesadaran atau gelisah berlebih.",
      patofisiologi:
        "Adanya antigen (pirogen) merangsang makrofag melepaskan sitokin (interleukin). Zat ini memicu produksi prostaglandin di hipotalamus anterior, yang mengakibatkan 'set point' termostat tubuh naik. Akibatnya, tubuh menganggap suhu normal sebagai suhu yang dingin, sehingga memicu mekanisme peningkatan panas (menggigil) dan menghambat pembuangan panas (vasokonstriksi), menyebabkan suhu tubuh melonjak drastis.",
      tanda_gejala:
        "DS (Subjektif):\n- 'Badan saya terasa sangat panas dan kepala saya pening.'\n- 'Saya merasa haus sekali dan tenggorokan kering.'\n- 'Saya merasa kedinginan di dalam tapi kulit saya panas.'\n\nDO (Objektif):\n- Termometer menunjukkan angka 38,5 - 40 C.\n- Kulit tampak kering, bibir pecah-pecah.\n- Nadi cepat dan kuat (bounding pulse).\n- Adanya tanda tremor atau kejang (jika suhu sangat tinggi).",
      pemeriksaan_penunjang:
        "1. Darah Lengkap: Pantau peningkatan sel darah putih (Leukositosis/Shift to the left).\n2. Cek Elektrolit: Pantau adanya ketidakseimbangan akibat penguapan cairan (evaporasi).\n3. Kultur darah/Urin: Mencari agen penyebab infeksi.",
      penatalaksanaan_medis:
        "1. Pemberian Antipiretik (Paracetamol, Ibuprofen) secara oral atau IV.\n2. Pemberian Cairan Intravena (Infus) untuk mencegah dehidrasi.\n3. Terapi Antibiotik/Antivirus jika disebabkan oleh agen infeksi spesifik.",
      pathway:
        "Agen Infeksi -> Pirogen Eksogen -> Reaksi Hipotalamus -> Peningkatan Set Point -> Hipertermia -> Risiko Hipovolemia.",
      fokus_pengkajian:
        "1. Pola suhu tubuh (kontinu, remiten, atau intermiten).\n2. Asupan cairan (intake) dan pengeluaran urin (output).\n3. Tanda-tanda dehidrasi (turgor kulit, mukosa mulut).",
      rentang_respon:
        "Adaptif (Normotermi) <--> Antara (Febris) <--> Maladaptif (Kejang Demam/Kejadian Fatal).",
      mekanisme_koping:
        "1. Mengurangi lapisan pakaian.\n2. Banyak minum secara spontan.\n3. Membatasi pergerakan.",
      masalah_keperawatan: [
        "Hipertermia",
        "Risiko Hipovolemia",
        "Risiko Ketidakseimbangan Elektrolit",
      ],
      sp_pasien:
        "SP 1: Latih cara kompres hangat pada lipat paha dan ketiak (Area pembuluh darah besar untuk konduksi panas).\nSP 2: Edukasi pentingnya asupan cairan minimal 2-2,5 liter/hari jika tidak ada kontraindikasi.\nSP 3: Edukasi pemakaian pakaian tipis yang menyerap keringat dan hindari selimut tebal.",
      sp_keluarga:
        "SP 1: Latih keluarga memonitor suhu tubuh menggunakan termometer secara benar 4 jam sekali.\nSP 2: Ajarkan keluarga menyiapkan minuman manis atau jus untuk mengganti energi yang hilang saat demam.\nSP 3: Diskusikan tanda bahaya (seperti kejang atau penurunan kesadaran) yang mengharuskan segera lapor medis.",
      discharge_planning:
        "1. Suhu tubuh stabil di kisaran 36,5 - 37,2 C.\n2. Pasien tidak mengalami kejang atau komplikasi dehidrasi.\n3. Keluarga memahami dosis obat penurun panas dan interval pemberiannya.",
      edukasi_keluarga:
        "Hindari penggunaan air es/dingin untuk kompres karena dapat memicu menggigil dan justru menaikkan suhu tubuh lebih tinggi (Vasokonstriksi).",
      pohon_masalah: "Kejang Demam <- Hipertermia <- Respon Peradangan",
      referensi: ["PPNI (2016). SDKI", "Guyton & Hall (2012)"],
    },
    {
      id: "risiko-fisik-cairan",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO â€“ DIAGNOSIS FISIK",
      nama: "4. Defisit Volume Cairan",
      sdki: "D.0023",
      definisi:
        "Penurunan volume cairan intravaskular, interstisial, dan/atau intraselular. Ini merujuk pada dehidrasi, yang merupakan kehilangan cairan saja tanpa perubahan kadar natrium, atau hipovolemia, yaitu hilangnya air dan elektrolit dalam jumlah proporsional.",
      etiologi:
        "**1. Kehilangan Cairan Aktif:**\nDiare, muntah, perdarahan hebat, luka bakar luas.\n\n**2. Kegagalan Mekanisme Regulasi:**\nGangguan hormon ADH (Diabetes Insipidus), penyakit ginjal kronis.\n\n**3. Peningkatan Kebutuhan:**\nDemam tinggi (penguapan melalui kulit/paru), aktivitas fisik berlebihan tanpa rehidrasi.",
      manifestasi_klinis:
        "**Tanda dan gejala klinis:**\n1. Penurunan turgor kulit dan elastisitas.\n2. Membran mukosa bibir dan mulut tampak kering.\n3. Nadi teraba lemah dan frekuensi meningkat (Takikardia).\n4. Produksi urin menurun (Oliguria) dan warna pekat.\n5. Mata tampak cekung (Sunken eyes).\n6. Hipotensi ortostatik (Tekanan darah turun saat berdiri).",
      patofisiologi:
        "Kehilangan cairan yang masif menyebabkan penurunan volume sirkulasi darah (pre-load jantung turun). Tubuh merespon dengan mengaktifkan sistem Renin-Angiotensin-Aldosteron untuk menahan air dan garam. Namun, jika kehilangan terus berlanjut, tekanan osmotik di luar sel meningkat, menarik air keluar dari dalam sel (Dehidrasi seluler), menyebabkan gangguan fungsi organ vital dan risiko syok hipovolemik.",
      tanda_gejala:
        "DS (Subjektif):\n- 'Saya merasa sangat haus seharian ini.'\n- 'Badan saya terasa sangat lemas dan mulut terasa pahit/kering.'\n- 'Saya pusing jika mencoba untuk duduk atau berdiri.'\n\nDO (Objektif):\n- Turgor kulit kembali lambat (>2 detik).\n- Mukosa bibir kering dan pecah-pecah.\n- Produksi urin <0,5 ml/kgBB/jam.\n- Nadi 105 x/menit, Tekanan Darah 90/60 mmHg (lemah).",
      pemeriksaan_penunjang:
        "1. Pemeriksaan Elektrolit Serum (Natrium, Kalium, Klorida).\n2. Kadar Hematokrit (meningkat jika terjadi hemokonsentrasi).\n3. Berat Jenis Urin (meningkat menunjukkan urin pekat).",
      penatalaksanaan_medis:
        "1. Rehidrasi Oral menggunakan cairan elektrolit (Oralit) untuk dehidrasi ringan.\n2. Rehidrasi Intravena (Infus RL/Asering) untuk dehidrasi sedang-berat.\n3. Medikamentosa: Antiemetik (anti mual) atau Antidiare jika diperlukan.",
      pathway:
        "Output Berlebih/Input Kurang -> Volume Intravaskuler Turun -> Penurunan Curah Jantung -> Defisit Volume Cairan -> Risiko Syok.",
      fokus_pengkajian:
        "1. Monitoring ketat Intake dan Output cairan dalam 24 jam.\n2. Pengukuran berat badan harian pada waktu yang sama.\n3. Tanda-tanda vital (Fokus pada penurunan TD dan kenaikan HR).",
      rentang_respon:
        "Adaptif (Normovolemia) <--> Antara (Dehidrasi Ringan) <--> Maladaptif (Syok Hipovolemik).",
      mekanisme_koping:
        "1. Rasa haus yang meningkat sebagai sinyal kebutuhan air.\n2. Mengurangi aktivitas berbicara/berakvititas fisik.",
      masalah_keperawatan: [
        "Defisit Volume Cairan (Hipovolemia)",
        "Risiko Ketidakseimbangan Cairan",
        "Risiko Syok",
      ],
      sp_pasien:
        "SP 1: Latih cara menghitung jumlah minum harian secara sederhana agar mencapai target cairan.\nSP 2: Latih cara mengatasi mual ringan (Minum sedikit demi sedikit tapi sering).\nSP 3: Edukasi tanda-tanda dehidrasi yang harus dilaporkan segera (Pusing/Lemas).",
      sp_keluarga:
        "SP 1: Bantu keluarga menyiapkan larutan gula-garam atau oralit jika terjadi diare/muntah di rumah.\nSP 2: Latih keluarga memonitor turgor kulit dan warna urin pasien secara periodik.\nSP 3: Diskusikan peran keluarga dalam memotivasi pasien untuk minum meskipun tidak haus (pada lansia).",
      discharge_planning:
        "1. Turgor kulit baik, elastisitas kembali cepat.\n2. Tanda-tanda vital dalam batas normal (TD stabil).\n3. Urin output minimal 1.500 ml/24 jam dan berwarna jernih.",
      edukasi_keluarga:
        "Tanda bahaya yang harus segera dibawa ke RS: Tangan kaki dingin, napas cepat, nadi tak teraba, atau pasien sulit dibangunkan.",
      pohon_masalah: "Gagal Ginjal Akut <- Defisit Cairan <- Output Berlebih",
      referensi: ["PPNI (2016). SDKI", "Horne & Swearingen (2000)"],
    },
    {
      id: "risiko-fisik-nutrisi",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO â€“ DIAGNOSIS FISIK",
      nama: "5. Ketidakseimbangan Nutrisi Kurang",
      sdki: "D.0019",
      definisi:
        "Ketidakcukupan asupan nutrisi untuk memenuhi kebutuhan metabolik tubuh, yang mengakibatkan penurunan berat badan atau gangguan fungsi tubuh. Kondisi ini sering terjadi pada pasien dengan gangguan menelan, hilang nafsu makan (anoreksia), atau malabsorbsi zat gizi.",
      etiologi:
        "**1. Faktor Fisiologis:**\nHambatan menelan (disfagia), gangguan pencernaan, atau peningkatan kebutuhan metabolik (infeksi kronis/kanker).\n\n**2. Faktor Psikologis:**\nKeengganan untuk makan akibat depresi, kecemasan, atau gangguan citra tubuh (anoreksia nervosa).\n\n**3. Faktor Ekonomi:**\nKeterbatasan ketersediaan pangan bergizi atau ketidaktahuan tentang standar gizi seimbang.",
      manifestasi_klinis:
        "**Gambaran malnutrisi:**\n1. Berat badan menurun secara signifikan (>10% dalam 1 bulan).\n2. Adanya sariawan atau stomatitis di rongga mulut.\n3. Rambut tampak kusam, kemerahan, dan mudah tercabut.\n4. Konjungtiva mata tampak pucat (anemia).\n5. Adanya edema pada tungkai (akibat hipoalbuminemia).\n6. Bising usus yang berlebihan atau justru sangat lemah.",
      patofisiologi:
        "Kurangnya asupan karbohidrat dan lemak memaksa tubuh melakukan proses katabolisme cadangan glikogen dan protein di jaringan otot (gluconeogenesis). Hal ini menyebabkan atrofi otot, penurunan daya tahan tubuh terhadap infeksi, dan gangguan pada proses penyembuhan luka. Jika berlanjut, kadar protein plasma (albumin) akan turun, menyebabkan perpindahan cairan ke jaringan interstisial (edema).",
      tanda_gejala:
        "DS (Subjektif):\n- 'Saya tidak nafsu makan sama sekali, rasanya mual jika melihat makanan.'\n- 'Makanan terasa hambar di mulut saya.'\n- 'Saya merasa cepat kenyang meskipun baru makan sedikit.'\n\nDO (Objektif):\n- Berat badan di bawah ambang batas IMT normal (<18.5).\n- Lingkar Lengan Atas (LILA) kurang dari standar harian.\n- Serum Albumin < 3,5 g/dL.\n- Otot tampak mengecil dan tonus otot menurun.",
      pemeriksaan_penunjang:
        "1. Penilaian status gizi ABCD (Antropometri, Biokimia, Clinical, Diet history).\n2. Laboratorium: Darah Lengkap (Hb), Albumin, Pre-albumin, dan Transferin.\n3. Skining Gizi: MNA (Mini Nutritional Assessment) atau MUST.",
      penatalaksanaan_medis:
        "1. Terapi Diet: Pemberian makanan tinggi kalori dan tinggi protein (TKTP).\n2. Suplementasi: Vitamin penambah nafsu makan dan suplemen mineral.\n3. Pemasangan NGT (Nasogastric Tube) jika pasien tidak mampu menelan secara mandiri.",
      pathway:
        "Intake Kurang -> Defisit Energi -> Penggunaan Cadangan Protein -> Massa Otot Turun -> Defisit Nutrisi -> Risiko Infeksi.",
      fokus_pengkajian:
        "1. Riwayat alergi makanan dan pantangan budaya tertentu.\n2. Tingkat kesulitan mengunyah atau menelan makanan padat.\n3. Porsi makanan yang dihabiskan dalam setiap kali jadwal makan.",
      rentang_respon:
        "Adaptif (Status Gizi Seimbang) <--> Antara (Gizi Kurang) <--> Maladaptif (Kakeksia/Kwashiorkor).",
      mekanisme_koping:
        "1. Menolak makan secara terang-terangan (Self-starvation).\n2. Menyembunyikan makanan supaya dikira sudah dimakan.",
      masalah_keperawatan: ["Defisit Nutrisi", "Risiko Infeksi", "Keletihan"],
      sp_pasien:
        "SP 1: Latih cara meningkatkan nafsu makan (Sajikan makanan hangat, kelola mual, dan berikan oral hygiene sebelum makan).\nSP 2: Edukasi pemilihan jenis makanan bergizi tinggi kalori (seperti telur, kacang-kacangan) yang mudah dikonsumsi.\nSP 3: Latih pasien makan porsi kecil tapi sering (misal: 6 kali sehari) untuk mengurangi rasa begah di perut.",
      sp_keluarga:
        "SP 1: Edukasi keluarga cara menyajikan makanan secara menarik untuk menambah minat makan pasien.\nSP 2: Latih keluarga memonitor berat badan pasien minimal seminggu sekali di rumah.\nSP 3: Diskusikan peran keluarga dalam menciptakan suasana makan yang menyenangkan tanpa tekanan batin bagi pasien.",
      discharge_planning:
        "1. Berat badan stabil atau meningkat minimal 0,5 kg per minggu.\n2. Kadar Albumin kembali ke rentang normal.\n3. Porsi makanan yang disajikan habis minimal 80%.",
      edukasi_keluarga:
        "Keluarga harus sabar dan tidak memaksa pasien makan dengan nada marah, karena stress dapat menurunkan hormon gastrin yang memicu nafsu makan.",
      pohon_masalah:
        "Kelemahan Umum <- Defisit Nutrisi <- Ketidakmampuan Makan Kesulitan",
      referensi: ["PPNI (2016). SDKI", "Almatsier, S. (2009)"],
    },
    {
      id: "risiko-fisik-bersihan",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO â€“ DIAGNOSIS FISIK",
      nama: "6. Ketidakefektifan Bersihan Jalan Napas",
      sdki: "D.0001",
      definisi:
        "Ketidakmampuan membersihkan sekresi atau obstruksi dari saluran napas untuk menjaga jalan napas tetap paten. Kondisi ini sering disebabkan oleh produksi sputum yang berlebih, batuk yang tidak efektif, atau adanya benda asing pada jalan napas.",
      etiologi:
        "**1. Faktor Fisiologis:**\nSpasme jalan napas, hipersekresi jalan napas, adanya benda asing, disfungsi neuromuskular (misal pada stroke).\n\n**2. Faktor Lingkungan:**\nPaparan asap rokok, polusi udara tingkat tinggi, alergen hirupan.\n\n**3. Faktor Sekunder:**\nInfeksi paru (Pneumonia/TBC), asma bronchial, atau trauma toraks.",
      manifestasi_klinis:
        "**Tanda dan gejala mayor:**\n1. Batuk tidak efektif (tidak mampu mengeluarkan dahak).\n2. Tidak mampu batuk secara mandiri.\n3. Suara napas tambahan (Wheezing, Ronkhi kering/basah).\n4. Produksi sputum dalam jumlah yang banyak dan kental.\n5. Sianosis (kebiruan pada kuku/bibir) akibat hipoksia.",
      patofisiologi:
        "Iritasi pada mukosa bronkus memicu peningkatan produksi mukus (lendir) oleh sel piala. Lendir yang berlebihan dan kental menyebabkan penyempitan lumen saluran napas (obstruksi). Jika refleks batuk terganggu atau daya dorong udara berkurang, lendir akan menumpuk (akumulasi), menyumbat bronkiolus, dan mengganggu pertukaran gas total.",
      tanda_gejala:
        "DS (Subjektif):\n- 'Dada saya terasa sangat sesak dan penuh dengan riak.'\n- 'Saya merasa sulit mengeluarkan dahak meskipun sudah batuk sekuat tenaga.'\n- 'Napas saya terasa berat dan berbunyi mengi.'\n\nDO (Objektif):\n- Auskultasi paru: Terdengar suara Ronkhi kasar di lobus basal atau Wheezing.\n- Ritme pernapasan cepat (Takipnea) >24 x/menit.\n- Adanya sekret kental berwarna putih/kuning/hijau yang sulit dikeluarkan.\n- Penggunaan otot bantu napas (Retraksi dada).",
      pemeriksaan_penunjang:
        "1. Analisa Gas Darah (AGD) untuk menilai tingkat asidosis/alkalosis respiratorik.\n2. Foto Polos Thorax: Menilai adanya infiltrat atau atelektasis.\n3. Kultur Sputum: Mengidentifikasi agen infeksi penyebab sekret.",
      penatalaksanaan_medis:
        "1. Nebulisasi menggunakan Bronkodilator atau Mukolitik (pengencer dahak).\n2. Pemberian Oksigenasi via kanul atau masker sesuai kebutuhan.\n3. Tindakan Suctioning (penghisapan lendir) jika pasien tidak sadar.",
      pathway:
        "Iritasi Jalan Napas -> Hipersekresi Mukosa -> Obstruksi Lumen -> Penumpukan Sekret -> Bersihan Jalan Napas Tidak Efektif -> Gagal Napas.",
      fokus_pengkajian:
        "1. Bunyi napas tambahan dan lokasi sumbatan yang paling dominan.\n2. Konsistensi, warna, dan bau dari sputum yang keluar.\n3. Tingkat kesadaran pasien (mempengaruhi kemampuan refleks batuk).",
      rentang_respon:
        "Adaptif (Paten - Nafas Lega) <--> Antara (Takipnea - Sesak) <--> Maladaptif (Sumbatan Total/Apnea).",
      mekanisme_koping:
        "1. Memilih posisi duduk tegak/Tripod.\n2. Mengurangi aktivitas berbicara untuk menjaga energi pernapasan.",
      masalah_keperawatan: [
        "Bersihan Jalan Napas Tidak Efektif",
        "Risiko Aspirasi",
        "Gangguan Pertukaran Gas",
      ],
      sp_pasien:
        "SP 1: Latih Teknik Batuk Efektif (Ambil napas dalam 2x, hembuskan, ambil napas ke-3 tahan 3 detik dan batukkan kuat).\nSP 2: Latih Fisioterapi Dada (Clapping dan Vibrasi) untuk merontokkan lendir di dinding paru.\nSP 3: Edukasi minum air hangat minimal 2 liter/hari untuk membantu pengenceran dahak secara alami.",
      sp_keluarga:
        "SP 1: Latih keluarga memberikan posisi Semi-Fowler (30-45 derajat) untuk membantu ekspansi paru.\nSP 2: Edukasi keluarga cara melakukan perkusi punggung (menempuk membentuk mangkuk) secara mandiri.\nSP 3: Diskusikan tanda-tanda gawat napas yang mengharuskan keluarga segera memanggil perawat/dokter.",
      discharge_planning:
        "1. Pasien mampu mendemonstrasikan batuk efektif mandiri.\n2. Suara napas bersih (Vesikuler) tanpa ronkhi.\n3. Saturasi oksigen (SpO2) stabil >95% tanpa oksigen tambahan.",
      edukasi_keluarga:
        "Hindari paparan asap rokok atau debu di rumah yang dapat memperburuk produksi dahak pasien.",
      pohon_masalah: "Hipoksia <- Sumbatan Jalan Nafas <- Hipersekresi Mukosa",
      referensi: ["PPNI (2016). SDKI", "Smeltzer & Bare (2010)"],
    },
    {
      id: "risiko-fisik-pola",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO â€“ DIAGNOSIS FISIK",
      nama: "7. Ketidakefektifan Pola Napas",
      sdki: "D.0005",
      definisi:
        "Inspirasi dan/atau ekspirasi yang tidak memberikan ventilasi adekuat. Hal ini berkaitan dengan perubahan frekuensi, kedalaman, dan ritme pernapasan yang dipengaruhi oleh kelemahan otot napas atau depresi pusat pernapasan.",
      etiologi:
        "**1. Gangguan Neurologis:**\nCedera kepala, stroke, atau depresi pusat pernapasan akibat obat sedatif/opioid.\n\n**2. Gangguan Muskuloskeletal:**\nKelemahan otot diafragma (misal pada Guillain-Barre Syndrome) atau deformitas dinding dada.\n\n**3. Kondisi Psikologis:**\nSerangan panik (Hyperventilation syndrome) atau kecemasan berat.",
      manifestasi_klinis:
        "**Gambaran perilaku napas:**\n1. Penggunaan otot bantu pernapasan (sternokleidomastoid).\n2. Pola napas abnormal (Takipnea, Bradipnea, Kussmaul, atau Cheyne-stokes).\n3. Fase ekspirasi yang memanjang secara nyata.\n4. Pernapasan cuping hidung.\n5. Orthopnea (hanya bisa bernapas nyaman saat duduk tegak).",
      patofisiologi:
        "Adanya gangguan pada sinyal saraf dari otak atau hambatan elastisitas paru menyebabkan volume udara yang masuk ke paru berkurang (hipoventilasi). Tubuh merespon dengan meningkatkan frekuensi napas secara dangkal (kompensasi) untuk mencukupi kebutuhan oksigen seluler, namun hal ini justru menyebabkan kelelahan otot pernapasan (fatigue) dan risiko gagal napas.",
      tanda_gejala:
        "DS (Subjektif):\n- 'Saya merasa kempis-kempis atau megap-megap saat bernapas.'\n- 'Napas saya terasa pendek-pendek dan tidak sampai ke dalam dada.'\n- 'Saya merasa sesak jika berbaring lurus (tanpa bantal).'\n\nDO (Objektif):\n- Frekuensi napas >28 x/menit atau <12 x/menit.\n- Tampak retraksi interkostal (dinding dada tertarik ke dalam saat inspirasi).\n- Kapasitas vital paru menurun saat dilakukan spirometri.\n- Pasien tampak gelisah dan bicara terputus-putus.",
      pemeriksaan_penunjang:
        "1. Pemantauan Saturasi Oksigen (SpO2) secara kontinu.\n2. Spirometri untuk mengukur kapasitas vital dan volume tidal paru.\n3. Analisa Gas Darah untuk mendeteksi tanda-tanda hiperkapnia (kelebihan CO2).",
      penatalaksanaan_medis:
        "1. Pemberian bantuan ventilasi non-invasif (seperti CPAP/BiPAP).\n2. Pemberian Oksigen dosis tinggi jika saturasi <90%.\n3. Posisi High-Fowler (90 derajat) untuk memaksimalkan ekspansi diafragma.",
      pathway:
        "Gangguan Pusat Nafas -> Penurunan Ventilasi -> Kompensasi Frekuensi -> Pola Nafas Tidak Efektif -> Gagal Nafas.",
      fokus_pengkajian:
        "1. Kedalaman pernapasan (dangkal atau dalam) dan durasi fase ekspirasi.\n2. Keluhan nyeri dada yang mungkin membatasi pengembangan paru.\n3. Penggunaan obat-obatan penenang yang baru dikonsumsi.",
      rentang_respon:
        "Adaptif (Eupnea) <--> Antara (Dispnea) <--> Maladaptif (Apnea/Berhenti Napas).",
      mekanisme_koping:
        "1. Mengadopsi posisi duduk membungkuk ke depan.\n2. Bernapas melalui bibir yang dirapatkan (Pursed-lip breathing).",
      masalah_keperawatan: [
        "Pola Napas Tidak Efektif",
        "Intoleransi Aktivitas",
        "Risiko Gangguan Pertukaran Gas",
      ],
      sp_pasien:
        "SP 1: Latih Posisi High-Fowler atau Semi-Fowler untuk mengurangi tekanan organ perut ke diafragma.\nSP 2: Latih Teknik Pursed-Lip Breathing (Bernapas lewat hidung - hembuskan lewat mulut seperti bersiul) untuk memperpanjang ekspirasi.\nSP 3: Edukasi pasien untuk menghindari aktivitas fisik berat selama pola napas belum stabil.",
      sp_keluarga:
        "SP 1: Edukasi keluarga untuk menyangga punggung pasien dengan 2-3 bantal saat tidur (Posisi miring).\nSP 2: Latih keluarga mengenali tanda 'megap-megap' (Air hunger) sebagai tanda gawat darurat.\nSP 3: Diskusikan cara menjaga ketenangan psikologis pasien karena kecemasan dapat memperburuk sesak napas.",
      discharge_planning:
        "1. Frekuensi napas stabil (16-20 x/menit).\n2. Pasien mampu melakukan aktivitas ringan tanpa bantuan oksigen.\n3. Otot bantu napas tidak lagi digunakan (dada rileks).",
      edukasi_keluarga:
        "Pastikan sirkulasi udara di kamar pasien lancar dan hindari penggunaan kipas angin yang langsung mengarah ke wajah pasien.",
      pohon_masalah:
        "Gagal Nafas <- Pola Nafas Tidak Efektif <- Kelemahan Otot Diafragma",
      referensi: ["PPNI (2016). SDKI", "Morton, P.G. (2012)"],
    },
    {
      id: "risiko-fisik-perfusi",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO â€“ DIAGNOSIS FISIK",
      nama: "8. Risiko Ketidakefektifan Perfusi Jaringan Seksual",
      sdki: "D.0017",
      definisi:
        "Beresiko mengalami penurunan sirkulasi darah ke area organ seksual yang dapat mengakibatkan disfungsi seksual. Kondisi ini seringkali merupakan komplikasi dari penyakit vaskular kronis seperti Diabetes Melitus atau Hipertensi yang merusak pembuluh darah kecil (mikroangiopati).",
      etiologi:
        "**1. Riwayat Penyakit Metabolik:**\nDiabetes Melitus yang tidak terkontrol (kadar gula darah tinggi merusak endotel vaskular).\n\n**2. Gangguan Kardiovaskular:**\nHipertensi kronis, aterosklerosis (penyempitan pembuluh darah), atau penyakit jantung koroner.\n\n**3. Gaya Hidup & Obat:**\nMerokok (vasokonstriksi), konsumsi alkohol berlebih, atau efek samping obat antihipertensi tertentu (Beta-blocker).",
      manifestasi_klinis:
        "**Indikator risiko:**\n1. Mengeluh adanya penurunan sensasi/perasaan di area genital.\n2. Kesulitan mencapai atau mempertahankan ereksi (pada pria).\n3. Penurunan lubrikasi vagina atau nyeri saat berhubungan (pada wanita).\n4. Riwayat penyakit vaskular yang sudah menyerang organ lain (misal: retinopati atau nefropati DM).",
      patofisiologi:
        "Kadar glukosa darah yang tinggi atau tekanan darah tinggi yang persisten menyebabkan kerusakan pada lapisan dalam pembuluh darah (endotel). Hal ini memicu penumpukan plak dan penurunan produksi oksida nitrat (vasodilator alami). Akibatnya, saat ada stimulasi seksual, aliran darah ke organ genital tidak mencukupi untuk memicu respon fisiologis fungsional, menyebabkan kegagalan kepuasan seksual individu.",
      tanda_gejala:
        "DS (Subjektif):\n- 'Saya merasa fungsi seksual saya menurun sejak saya didiagnosis kencing manis.'\n- 'Saya khawatir hubungan saya dengan pasangan terganggu karena masalah fisik ini.'\n- 'Saya merasa kurang bergairah dan area pribadi saya terasa agak kebas.'\n\nDO (Objektif):\n- Hasil Gula Darah Sewaktu (GDS) >200 mg/dL atau HbA1c tinggi (>7%).\n- Tekanan Darah menetap di atas 140/90 mmHg.\n- Hasil USG Doppler menunjukkan adanya penurunan indeks aliran darah perifer.",
      pemeriksaan_penunjang:
        "1. Pemeriksaan profil lipid (Kolesterol/Trigliserida) dan gula darah.\n2. Konsultasi spesialis urologi atau andrologi.\n3. Skining fungsi seksual (misal: IIEF-5 untuk pria).",
      penatalaksanaan_medis:
        "1. Kontrol ketat penyakit dasar (Manajemen Gula Darah/Tekanan Darah).\n2. Terapi obat vasodilator (hanya atas petunjuk dokter spesialis).\n3. Konseling psikologi untuk memisahkan hambatan fisik dengan hambatan mental.",
      pathway:
        "Penyakit Vaskular -> Mikroangiopati -> Hambatan Aliran Darah -> Risiko Perfusi Jaringan Seksual -> Disfungsi Seksual.",
      fokus_pengkajian:
        "1. Riwayat durasi menderita DM atau Hipertensi.\n2. Tingkat kecemasan pasien terkait peran seksualnya dalam keluarga.\n3. Kebiasaan merokok dan penggunaan obat-obatan jangka panjang.",
      rentang_respon:
        "Adaptif (Fungsi Normal) <--> Antara (Disfungsi Ringan) <--> Maladaptif (Impotensi Total/Disfungsi Menetap).",
      mekanisme_koping:
        "1. Menghindari topik seksual sama sekali (Denial).\n2. Marah atau menyalahkan kondisi penyakit fisiknya.",
      masalah_keperawatan: [
        "Risiko Ketidakefektifan Perfusi Jaringan Seksual",
        "Disfungsi Seksual",
        "Ansietas",
      ],
      sp_pasien:
        "SP 1: Edukasi kaitan antara kepatuhan minum obat DM/HT dengan kualitas fungsi seksual.\nSP 2: Latih manajemen pola hidup sehat (pola makan rendah lemak, berhenti merokok) untuk memperbaiki kualitas vaskular.\nSP 3: Edukasi teknik intimasi non-genital (komunikasi kasih sayang) untuk menjaga kedekatan dengan pasangan.",
      sp_keluarga:
        "SP 1: Edukasi pasangan untuk tetap sabar dan memberikan dukungan psikologis tanpa menuntut.\nSP 2: Bantu pasangan memahami bahwa masalah ini adalah murni kondisi medis/vaskular, bukan sengaja menghindari tugas seksual.\nSP 3: Diskusikan cara menjaga keharmonisan rumah tangga meskipun terjadi kendala fisik seksual sementara.",
      discharge_planning:
        "1. Pasien patuh minum obat penyakit dasar.\n2. Pasien menunjukkan pemahaman tentang faktor risiko vaskular.\n3. Pasangan menyatakan saling mendukung dalam proses pemulihan.",
      edukasi_keluarga:
        "Masalah seksual pada pasien penyakit kronis adalah isu sensitif yang membutuhkan empati tinggi dan keterbukaan komunikasi antar pasangan.",
      pohon_masalah:
        "Disfungsi Seksual <- Risiko Gangguan Perfusi <- Komplikasi Mikroangiopati",
      referensi: ["PPNI (2016). SDKI", "Brunner & Suddarth (2014)"],
    },
    {
      id: "risiko-fisik-intoleran",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO â€“ DIAGNOSIS FISIK",
      nama: "9. Intoleran Aktivitas",
      sdki: "D.0056",
      definisi:
        "Ketidakcukupan energi psikologis atau fisiologis untuk memulai, mempertahankan, atau menyelesaikan aktivitas harian yang ingin atau harus dilakukan. Hal ini merupakan kondisi lelah yang luar biasa yang muncul saat melakukan aktivitas ringan sekalipun.",
      etiologi:
        "**1. Ketidakseimbangan Oksigen:**\nSuplai oksigen ke jaringan kurang (Anemia, Gagal Jantung, PPOK).\n\n**2. Kondisi Fisik:**\nTirah baring lama (bedrest), kelemahan umum, atau malnutrisi energi protein.\n\n**3. Faktor Psikologis:**\nDepresi berat (yang menyebabkan kelelahan mental) atau kecemasan yang menguras energi tubuh.",
      manifestasi_klinis:
        "**Kriteria intoleransi:**\n1. Mengeluh merasa lelah dan lemah saat beraktivitas.\n2. Frekuensi jantung meningkat >20% di atas nilai istirahat.\n3. Adanya perubahan warna kulit (pucat/sianosis) saat bergerak.\n4. Munculnya sesak napas (dyspnea) saat atau setelah beraktivitas.\n5. Pasien menyatakan 'tidak sanggup' melanjutkan kegiatan harian mandiri.",
      patofisiologi:
        "Kurangnya kadar hemoglobin atau penurunan curah jantung menyebabkan pengiriman oksigen dan nutrisi ke sel otot rangka tidak adekuat. Akibatnya, sel beralih ke metabolisme anaerob yang menghasilkan sedikit ATP (energi) dan menumpuk asam laktat. Akumulasi asam laktat memicu rasa nyeri dan lelah yang hebat, sehingga individu tidak mampu mempertahankan kontraksi otot untuk beraktivitas.",
      tanda_gejala:
        "DS (Subjektif):\n- 'Saya merasa sangat cepat lelah meskipun baru jalan ke kamar mandi.'\n- 'Badan saya gemetar dan napas saya terengah-engah saat ganti baju.'\n- 'Saya merasa pusing dan ingin pingsan jika terlalu lama berdiri.'\n\nDO (Objektif):\n- Nadi istirahat 80, saat jalan 5 meter naik menjadi 115 x/menit.\n- Hasil Cek Darah: Kadar Hemoglobin (Hb) rendah (Anemia).\n- Pasien tampak pucat dan berkeringat dingin setelah beraktivitas.\n- Tekanan darah berubah drastis (Naik/Turun >20 mmHg) setelah aktivitas.",
      pemeriksaan_penunjang:
        "1. Pemeriksaan EKG untuk memonitor adanya perubahan segmen ST saat beraktivitas.\n2. Tes Toleransi Aktivitas (6 Minute Walk Test).\n3. Laboratorium: Darah Lengkap (fokus pada Hb dan Hematokrit).",
      penatalaksanaan_medis:
        "1. Terapi Oksigen selama periode aktivitas fisik.\n2. Koreksi penyakit penyerta (misal: Transfusi darah jika anemia berat).\n3. Kolaborasi fisioterapis untuk program rehabilitasi jantung atau paru.",
      pathway:
        "Suplai O2 Turun -> Metabolisme Anaerob -> Penumpukan Asam Laktat -> Kelemahan Otot -> Intoleran Aktivitas -> Defisit Perawatan Diri.",
      fokus_pengkajian:
        "1. Pemantauan Tanda-Tanda Vital (Nadi/TD) sebelum, selama, dan segera setelah aktivitas.\n2. Identifikasi aktivitas mana yang paling banyak menguras energi pasien.\n3. Tingkat kemandirian (Skala Barthel Index).",
      rentang_respon:
        "Adaptif (Aktif - Mandiri) <--> Antara (Perlu Istirahat Sering) <--> Maladaptif (Total Bedrest).",
      mekanisme_koping:
        "1. Membatasi ruang gerak (Imobilisasi sukarela).\n2. Melakukan aktivitas dengan sangat lambat.",
      masalah_keperawatan: [
        "Intoleransi Aktivitas",
        "Risiko Intoleransi Aktivitas",
        "Defisit Perawatan Diri",
      ],
      sp_pasien:
        "SP 1: Latih rentang gerak (ROM) aktif di tempat tidur untuk mencegah kekakuan otot.\nSP 2: Latih mobilitas bertahap (Duduk di tepi bed 5 menit, lalu berdiri 2 menit, lalu jalan perlahan).\nSP 3: Ajarkan teknik konservasi energi (memprioritaskan aktivitas penting saja dan beristirahat di sela aktivitas).",
      sp_keluarga:
        "SP 1: Edukasi keluarga untuk membantu aktivitas pasien secara bertahap tanpa mengambil alih semua kemandirian pasien.\nSP 2: Latih keluarga menyusun jadwal harian yang menyeimbangkan antara waktu tidur dan waktu gerak.\nSP 3: Diskusikan cara menjaga asupan nutrisi tinggi energi (Karbohidrat Kompleks) bagi pasien.",
      discharge_planning:
        "1. Pasien mampu berjalan minimal 10 meter tanpa sesak berarti.\n2. Nadi kembali ke nilai baseline dalam waktu <3 menit setelah beristirahat.\n3. Pasien mampu mandi/makan sendiri dengan posisi duduk.",
      edukasi_keluarga:
        "Keluarga harus memberikan pijatan ringan pada otot kaki pasien setelah beraktivitas untuk membantu sirkulasi darah.",
      pohon_masalah:
        "Defisit Perawatan Diri <- Intoleransi Aktivitas <- Kelemahan Fisik",
      referensi: ["PPNI (2016). SDKI", "Potter & Perry (2013)"],
    },
    {
      id: "risiko-fisik-mobilitas",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO â€“ DIAGNOSIS FISIK",
      nama: "10. Hambatan Mobilitas Fisik",
      sdki: "D.0054",
      definisi:
        "Keterbatasan dalam gerakan fisik mandiri dan terarah pada satu atau lebih ekstremitas atau seluruh tubuh secara aktif. Kondisi ini sering disebabkan oleh kerusakan integritas struktur tulang, gangguan neuromuskular (misal pada stroke atau cedera medula spinalis), atau nyeri hebat yang membatasi pergerakan.",
      etiologi:
        "**1. Gangguan Muskuloskeletal:**\nFraktur tulang, osteoporosis berat, kontraktur sendi, atau atrofi otot.\n\n**2. Gangguan Neuromuskular:**\nStroke, cedera syaraf tulang belakang, Parkinson, atau tumor otak.\n\n**3. Faktor Penghambat Lain:**\nNyeri akut yang sangat parah, program tirah baring (bedrest), keengganan beraktivitas (depresi berat).",
      manifestasi_klinis:
        "**Gambaran keterbatasan gerak:**\n1. Mengeluh sulit menggerakkan tangan atau kaki (Ekstremitas).\n2. Kekuatan otot menurun (Skala 0-4).\n3. Rentang gerak sendi (ROM) yang sangat terbatas.\n4. Gerakan tidak terkoordinasi atau goyah saat mencoba berdiri.\n5. Sendi tampak kaku atau adanya pemendekan otot (kontraktur).",
      patofisiologi:
        "Adanya lesi pada sistem saraf pusat atau perifer menyebabkan terputusnya aliran sinyal perintah dari otak ke motor unit di otot rangka. Hal ini mengakibatkan hilangnya kemampuan otot untuk berkontraksi secara volunter. Jika sendi tidak digerakkan dalam waktu lama, cairan sinovial akan mengental dan serat kolagen akan memendek secara permanen (kontraktur), menyebabkan hambatan mobilitas yang menetap.",
      tanda_gejala:
        "DS (Subjektif):\n- 'Tangan kiri saya terasa berat sekali dan mati rasa, tidak bisa diangkat.'\n- 'Kaki saya sangat kaku dan sulit dilipat untuk duduk.'\n- 'Saya takut bergerak karena rasa sakit di punggung saya.'\n\nDO (Objektif):\n- Pemeriksaan kekuatan otot: Nilai 2 (Hanya mampu geser di bed, tidak mampu lawan gravitasi).\n- Sendi siku/lutut tampak kaku dan sulit diluruskan (ROM terbatas).\n- Pasien tampak tergantung total pada perawat dalam pemenuhan ADL.\n- Muncul tanda kemerahan di area tulang yang menonjol (tanda awal dekubitus).",
      pemeriksaan_penunjang:
        "1. Radiologi: Foto Polos Tulang (X-Ray) atau MRI Saraf untuk melihat lokasi lesi.\n2. Penilaian Skala Kekuatan Otot (0-5).\n3. Skala Risiko Luka Tekan (Skala Norton atau Braden) akibat imobilitas.",
      penatalaksanaan_medis:
        "1. Prosedur bedah (Internal Fiksasi) jika disebabkan oleh fraktur.\n2. Pemberian obat pelemas otot (Muscle relaxant) jika terjadi spastisitas.\n3. Kolaborasi fisioterapi intensif untuk pemulihan motorik.",
      pathway:
        "Lesi Saraf/Tulang -> Gangguan Transmisi Sinyal Gerak -> Penurunan Kontraksi Otot -> Hambatan Mobilitas Fisik -> Risiko Luka Tekan (Dekubitus).",
      fokus_pengkajian:
        "1. Kaji kekuatan otot pada keempat ekstremitas secara rutin.\n2. Kaji integritas kulit pada area tumit, bokong, dan siku akibat penekanan lama.\n3. Kaji motivasi pasien untuk sembuh dan berpartisipasi dalam latihan ROM.",
      rentang_respon:
        "Adaptif (Aktif-Bebas) <--> Antara (Goyah - Perlu Bantuan Alat) <--> Maladaptif (Lumpuh/Imobilitas Total).",
      mekanisme_koping:
        "1. Membatasi diri (Immobilization behavior).\n2. Meminta bantuan total pada orang lain.",
      masalah_keperawatan: [
        "Gangguan Mobilitas Fisik",
        "Risiko Gangguan Integritas Kulit",
        "Ketidakberdayaan",
      ],
      sp_pasien:
        "SP 1: Latih Rentang Gerak (ROM) Pasif (Perawat menggerakkan sendi pasien) untuk menjaga fleksibilitas.\nSP 2: Latih Perubahan Posisi miring kanan/kiri setiap 2 jam (Mika-Miki) untuk mencegah luka tekan.\nSP 3: Latih pasien melakukan mobilitas mandiri (belajar berpindah ke kursi roda) menggunakan sisi tubuh yang sehat.",
      sp_keluarga:
        "SP 1: Edukasi keluarga untuk selalu menjaga kebersihan kulit pasien agar tidak lembab saat tirah baring.\nSP 2: Latih keluarga melakukan pemijatan ringan pada area punggung (Massage) untuk merangsang sirkulasi.\nSP 3: Diskusikan cara menjaga posisi tubuh (body alignment) pasien yang benar saat duduk atau berbaring.",
      discharge_planning:
        "1. Pasien mampu melakukan ROM aktif pada ekstremitas yang sehat.\n2. Tidak ada tanda kemerahan di area penekanan tulang (Kulit utuh).\n3. Keluarga mampu melakukan prosedur miring-kanan miring-kiri secara mandiri.",
      edukasi_keluarga:
        "Gunakan alas tidur yang empuk (kasur dekubitus) dan pastikan sprei tetap kering dan tidak berkerut.",
      pohon_masalah:
        "Luka Tekan (Dekubitus) <- Hambatan Mobilitas <- Kerusakan Struktur Saraf",
      referensi: ["PPNI (2016). SDKI", "Nursalam (2011)"],
    },

    // === ASKEP JIWA DIAGNOSIS RISIKO â€“ DIAGNOSIS RISIKO ===
    {
      id: "ansietas",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO â€“ DIAGNOSIS RISIKO",
      nama: "1. Ansietas",
      sdki: "D.0080",
      definisi:
        "Kondisi emosi dan pengalaman subjektif individu terhadap objek yang tidak jelas dan tidak spesifik akibat antisipasi bahaya yang memungkinkan individu mengambil tindakan untuk menghadapi ancaman. Kecemasan merupakan sinyal peringatan tentang bahaya yang akan datang dan memungkinkan individu untuk bersiap menghadapi ancaman tersebut.",
      etiologi:
        "**1. Faktor Predisposisi:**\na. Biologis: Adanya riwayat keluarga dengan gangguan kecemasan (genetik) dan ketidakseimbangan neurotransmiter GABA di otak.\nb. Psikologis: Teori Psikoanalitik (konflik antara Id dan Ego), Teori Interpersonal (ketakutan akan penolakan dalam hubungan).\nc. Sosio-kultural: Perubahan status sosial, ancaman terhadap sistem nilai, dan tekanan ekonomi.\n\n**2. Faktor Presipitasi:**\na. Ancaman terhadap integritas fisik (sakit, kecelakaan, penuaan).\nb. Ancaman terhadap sistem diri (kehilangan orang dicintai, perubahan peran, kegagalan karir).",
      manifestasi_klinis:
        "**Dapat diidentifikasi melalui empat tingkat kecemasan:**\n1. Ringan: Perhatian meningkat, waspada, namun masih mampu memecahkan masalah.\n2. Sedang: Fokus menyempit pada hal penting saja, namun masih bisa diarahkan.\n3. Berat: Perhatian sangat terbatas, tidak mampu fokus pada hal lain meskipun sudah diarahkan.\n4. Panik: Kehilangan kendali diri, perilaku tidak teratur, dan tidak mampu berkomunikasi.",
      patofisiologi:
        "Paparan terhadap stressor memicu aktivasi sistem saraf simpatik (poros HPA). Hipotalamus mengirimkan sinyal ke kelenjar adrenal untuk melepaskan epinefrin dan norepinefrin (respon fight or flight). Secara kognitif, individu memersepsikan situasi sebagai ancaman yang melampaui sumber dayanya, sehingga muncul gejala fisik seperti jantung berdebar dan gejala psikis seperti rasa takut yang mendalam.",
      tanda_gejala:
        "DS (Subjektif):\n- 'Saya merasa sangat tidak tenang dan gelisah tanpa alasan jelas.'\n- 'Saya merasa ada sesuatu yang buruk akan terjadi pada saya.'\n- 'Saya sulit tidur karena pikiran saya terus berputar.'\n\nDO (Objektif):\n- Jantung berdebar (Takikardia) dan tekanan darah meningkat.\n- Tampak tremor (gemetar) pada ujung jari tangan.\n- Suara bergetar saat bicara dan sering berkeringat dingin.\n- Konsentrasi buruk (sulit menerima arahan sederhana).",
      pemeriksaan_penunjang:
        "1. Pengukuran tingkat kecemasan dengan skala HARS (Hamilton Anxiety Rating Scale).\n2. Pemeriksaan Tanda-Tanda Vital (Fisik) untuk melihat respon otonom.\n3. Skala Cemas Zung (Zung Self-rating Anxiety Scale).",
      penatalaksanaan_medis:
        "1. Farmakoterapi: Golongan Benzodiazepin (Alprazolam, Diazepam) atau Non-Benzodiazepin (Buspirone).\n2. Psikoterapi: CBT (Cognitive Behavioral Therapy) untuk restrukturisasi pola pikir.\n3. Terapi Relaksasi: Biofeedback dan latihan napas dalam.",
      pathway:
        "Stressor -> Ancaman Konsep Diri -> Aktivasi Saraf Simpatis -> Kecemasan (Ansietas) -> Ketidakefektifan Koping.",
      fokus_pengkajian:
        "1. Tingkat kecemasan pasien (Ringan, Sedang, Berat, atau Panik).\n2. Respon fisik yang paling dominan dirasakan.\n3. Upaya yang biasa dilakukan pasien untuk menenangkan diri.",
      rentang_respon:
        "Adaptif (Antisipasi - Ringan) <--> Antara (Sedang - Berat) <--> Maladaptif (Panik).",
      mekanisme_koping:
        "1. Reaksi Orientasi Tugas: Menyerang, Menarik diri, atau Kompromi.\n2. Mekanisme Pertahanan Ego: Kompensasi, Denial, Displacement, dan Rasionalisasi.",
      masalah_keperawatan: [
        "Ansietas",
        "Gangguan Pola Tidur",
        "Ketidakefektifan Koping Individu",
      ],
      sp_pasien:
        "SP 1: Latih Relaksasi Napas Dalam (Teknik fisik paling dasar untuk menurunkan ketegangan otonom).\nSP 2: Latih Teknik Distraksi dengan bercakap-cakap (Mengalihkan fokus dari pemicu cemas).\nSP 3: Latih Teknik Hipnotis 5 Jari (Relaksasi imajinasi terbimbing).\nSP 4: Latih Relaksasi Spiritual sesuai keyakinan (Zikir, Berdoa, Meditasi).",
      sp_keluarga:
        "SP 1: Edukasi keluarga tentang tanda-tanda kecemasan pasien dan cara memberikan rasa aman.\nSP 2: Latih keluarga cara membimbing pasien melakukan teknik relaksasi saat di rumah.\nSP 3: Diskusikan peran keluarga dalam menciptakan lingkungan rumah yang bebas dari stressor pemicu.",
      discharge_planning:
        "1. Pasien mampu mendemonstrasikan teknik napas dalam secara mandiri.\n2. Pasien tidur minimal 6-7 jam sehari tanpa gangguan.\n3. Keluarga memahami kapan harus membawa pasien ke puskesmas jika cemas memburuk.",
      edukasi_keluarga:
        "Keluarga harus bersabar dan tidak ikut panik saat pasien sedang cemas, karena kecemasan dapat bersifat menular (emulation).",
      pohon_masalah:
        "Koping Individu Inefektif <- Ansietas <- Stressor Situasional",
      obat_rekomendasi: ["Diazepam", "Alprazolam", "Lorazepam"],
      referensi: [
        "PPNI (2016). SDKI",
        "PPNI (2018). SIKI",
        "Stuart, G.W. (2013)",
      ],
    },
    {
      id: "gangguan-citra-tubuh",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO â€“ DIAGNOSIS RISIKO",
      nama: "2. Gangguan Citra Tubuh",
      sdki: "D.0083",
      definisi:
        "Kebingungan dalam membentuk gambaran mental tentang diri fisik akibat perubahan struktur, fungsi, atau bentuk tubuh. Perubahan ini dapat berupa kehilangan bagian tubuh, fungsi organ, atau penampilan yang dirasakan pasien sebagai sesuatu yang memalukan atau tidak dapat diterima.",
      etiologi:
        "**1. Faktor Predisposisi:**\na. Biologis: Penyakit fisik (stroke, luka bakar), amputasi, atau prosedur bedah yang mengubah penampilan.\nb. Psikologis: Harapan yang terlalu tinggi terhadap diri sendiri (Ideal diri tidak realistis).\nc. Sosial: Norma sosial yang sangat mementingkan kecantikan atau fisik sempurna.\n\n**2. Faktor Presipitasi:**\na. Kehilangan mendadak fungsi tubuh (misal akibat kecelakaan).\nb. Komentar negatif dari orang lain tentang perubahan penampilan.\nc. Perubahan fisiologis normal (pubertas atau penuaan) yang sulit diterima.",
      manifestasi_klinis:
        "**Perilaku yang sering muncul:**\n1. Menghindari menyentuh atau melihat bagian tubuh yang berubah.\n2. Secara verbal mengungkapkan perasaan negatif tentang tubuhnya.\n3. Menyembunyikan bagian tubuh dengan pakaian atau posisi tertentu.\n4. Menghindari interaksi sosial karena merasa malu atau rendah diri.\n5. Tidak mau berpartisipasi dalam perawatan bagian tubuh yang sakit.",
      patofisiologi:
        "Kehilangan atau perubahan bagian tubuh mengganggu integritas diri individu. Pesan tubuh yang berubah dikirim ke otak, namun individu mengalami kesulitan untuk mengintegrasikan perubahan tersebut ke dalam konsep dirinya. Akibatnya, muncul kecemasan dan perasaan kehilangan yang mendalam terhadap 'diri yang lama', yang jika tidak teratasi akan berkembang menjadi rasa rendah diri yang menetap.",
      tanda_gejala:
        "DS (Subjektif):\n- 'Saya merasa cacat dan tidak ada yang mau melihat saya lagi.'\n- 'Saya benci melihat cermin karena saya tampak berbeda.'\n- 'Saya merasa separuh dari diri saya sudah hilang.'\n\nDO (Objektif):\n- Pasien tampak menutupi bagian tubuh yang berubah (misal dengan selimut).\n- Menghindari kontak mata saat area tubuh tersebut dibahas.\n- Adanya perubahan nyata pada struktur tubuh (amputasi, bekas luka).\n- Kurangnya partisipasi dalam aktivitas sosial yang melibatkan paparan fisik.",
      pemeriksaan_penunjang:
        "1. Pengkajian Konsep Diri khususnya pada aspek Citra Tubuh.\n2. Observasi respon pasien saat perawat melakukan perawatan luka atau memegang bagian tubuh yang berubah.\n3. Skala Gambaran Diri (Body Image Scale).",
      penatalaksanaan_medis:
        "1. Konseling Rehabilitasi untuk penyesuaian fungsional.\n2. Psikoterapi kelompok (sharing dengan orang yang mengalami kondisi serupa).\n3. Penggunaan alat bantu/protesa untuk meningkatkan kepercayaan diri fisik.",
      pathway:
        "Perubahan Fisik -> Gangguan Gambaran Mental -> Ansietas -> Gangguan Citra Tubuh -> Harga Diri Rendah Situasional.",
      fokus_pengkajian:
        "1. Pandangan pribadi pasien terhadap perubahan tubuhnya.\n2. Dukungan dari orang terdekat terhadap kondisi fisiknya.\n3. Bagian tubuh mana yang dianggap paling bermakna bagi pasien.",
      rentang_respon:
        "Adaptif (Aktualisasi Diri - Penerimaan) <--> Antara (Gelisah - Merasa Berbeda) <--> Maladaptif (Depersonalisasi).",
      mekanisme_koping:
        "1. Kompensasi: Menonjolkan kelebihan lain untuk menutupi kekurangan fisik.\n2. Denial: Berpura-pura perubahan itu tidak pernah terjadi.\n3. Menarik Diri: Menghindari orang lain agar tidak dilihat.",
      masalah_keperawatan: [
        "Gangguan Citra Tubuh",
        "Harga Diri Rendah Situasional",
        "Risiko Isolasi Sosial",
      ],
      sp_pasien:
        "SP 1: Identifikasi bagian tubuh yang masih utuh & fungsinya yang masih ada (Apresiasi diri).\nSP 2: Latih cara meningkatkan penampilan diri meskipun ada kekurangan (Misal memakai aksesoris, merapikan rambut).\nSP 3: Latih pasien melakukan aktivitas sosial secara bertahap (Mulai dari teman sekamar).\nSP 4: Diskusikan pemakaian alat bantu (protesa/makeup) jika diperlukan untuk meningkatkan rasa percaya diri.",
      sp_keluarga:
        "SP 1: Edukasi keluarga untuk menerima kondisi fisik pasien tanpa menunjukkan rasa kasihan yang berlebih.\nSP 2: Latih keluarga memberikan pujian jika pasien berani tampil di depan umum.\nSP 3: Diskusikan peran keluarga dalam membantu perawatan bagian tubuh yang berubah dengan tetap menjaga privasi pasien.",
      discharge_planning:
        "1. Pasien berani melihat dan menyentuh bagian tubuhnya.\n2. Pasien terlibat aktif dalam kegiatan rekreasi.\n3. Keluarga mampu mendukung adaptasi fungsional pasien di rumah.",
      edukasi_keluarga:
        "Dukungan tanpa menghakimi adalah kunci utama pemulihan citra tubuh pasien.",
      pohon_masalah:
        "Harga Diri Rendah <- Gangguan Citra Tubuh <- Perubahan Struktur Tubuh",
      referensi: ["PPNI (2016). SDKI", "Potter & Perry (2013)"],
    },
    {
      id: "risiko-hdr-situasional",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO â€“ DIAGNOSIS RISIKO",
      nama: "3. Harga Diri Rendah Situasional",
      sdki: "D.0094",
      definisi:
        "Perasaan negatif terhadap evaluasi diri atau kemampuan diri yang berkembang sebagai respon terhadap situasi atau peristiwa tertentu yang menantang (seperti kehilangan pekerjaan, sakit, atau perceraian). Berbeda dengan HDR kronik, kondisi ini biasanya bersifat sementara jika ditangani secara efektif.",
      etiologi:
        "**1. Faktor Predisposisi:**\na. Pola asuh yang kurang suportif namun tidak ekstrem.\nb. Riwayat kegagalan di masa lalu yang belum terselesaikan secara total.\n\n**2. Faktor Presipitasi:**\na. Kehilangan peran (pensiun, PHK).\nb. Perubahan status kesehatan (didiagnosis penyakit berat).\nc. Mengalami musibah atau bencana alam.\nd. Kegagalan mencapai target prestasi akademik atau pekerjaan.",
      manifestasi_klinis:
        "**Gambaran perilaku pasien:**\n1. Menilai diri secara negatif akibat krisis saat ini.\n2. Adanya perasaan malu, bersalah, atau tidak adekuat.\n3. Penurunan intensitas bicara dan sering mendesah atau melamun.\n4. Merasa tidak mampu mengatasi masalah yang sedang dihadapi.\n5. Menarik diri sementara dari aktivitas sosial yang biasa dilakukan.",
      patofisiologi:
        "Adanya peristiwa krisis menyebabkan runtuhnya pilar-pilar kepercayaan diri individu. Individu membandingkan diri idealnya dengan realitas kegagalan saat ini, sehingga muncul gap yang besar. Perasaan gagal ini menyebabkan penurunan aktivitas neurotransmiter yang berhubungan dengan penghargaan diri (reward system), sehingga individu merasa lesu, tidak berdaya, dan memandang diri sendiri sebagai beban.",
      tanda_gejala:
        "DS (Subjektif):\n- 'Saya merasa malu karena sekarang saya hanya menjadi pengangguran.'\n- 'Saya tidak berguna sejak saya sakit seperti ini.'\n- 'Saya merasa masa depan saya sudah tertutup.'\n\nDO (Objektif):\n- Kontak mata minimal saat diajak bicara.\n- Tampak lesu dan kurang bersemangat.\n- Pembicaraan seringkali berfokus pada penyesalan atau kegagalannya.\n- Sering menunduk saat membicarakan status dirinya saat ini.",
      pemeriksaan_penunjang:
        "1. Pengkajian Harga Diri (Self-Esteem) menggunakan skala Rosenberg.\n2. Penilaian tingkat koping menggunakan Stress-Coping Questionnaire.\n3. MSE pada aspek Alam Perasaan (Afek Depresi).",
      penatalaksanaan_medis:
        "1. Psikoterapi Interpersonal untuk memperbaiki hubungan sosial pasca krisis.\n2. Manajemen Stress dan Konseling Karir (jika terkait pekerjaan).\n3. Terapi Kognitif singkat untuk memperbaiki distorsi pikiran tentang kegagalan.",
      pathway:
        "Krisis Situasional -> Persepsi Gagal -> Penilaian Diri Negatif -> HDR Situasional -> Ketidakberdayaan.",
      fokus_pengkajian:
        "1. Kelebihan unik yang masih tetap dimiliki meskipun sedang mengalami krisis.\n2. Keberhasilan-keberhasilan kecil di masa lalu sebagai sumber kekuatan.\n3. Dukungan sosial (keluarga/teman) yang masih aktif.",
      rentang_respon:
        "Adaptif (Keyakinan Diri - Kemandirian) <--> Antara (HDR Situasional) <--> Maladaptif (Kekacauan Identitas).",
      mekanisme_koping:
        "1. Mencari Informasi: Mempelajari cara mengatasi masalah baru.\n2. Regresi: Menjadi sangat tergantung pada dukungan orang lain.\n3. Berbagi Perasaan: Mencurahkan kesedihan pada orang yang dipercaya.",
      masalah_keperawatan: [
        "Harga Diri Rendah Situasional",
        "Ketidakberdayaan",
        "Ansietas",
      ],
      sp_pasien:
        "SP 1: Identifikasi semua kemampuan positif yang masih dimiliki pasca-krisis & Latih 1 kemampuan terbaik.\nSP 2: Latih kemampuan positif ke-2 (untuk membuktikan efikasi diri).\nSP 3: Susun jadwal kegiatan positif harian agar pasien merasa kembali produktif.\nSP 4: Diskusikan rencana masa depan (Rencana A, B, C) untuk mengatasi krisis situasional.",
      sp_keluarga:
        "SP 1: Edukasi keluarga untuk menjadi pendengar yang aktif dan tidak menghakimi kegagalan pasien.\nSP 2: Latih keluarga memberikan tugas rumah tangga ringan yang bisa dikelola pasien dengan sukses (Quick Wins).\nSP 3: Diskusikan cara menjaga motivasi pasien agar terus gigih dalam melewati masa krisis.",
      discharge_planning:
        "1. Pasien menyebutkan minimal 3 hal positif tentang dirinya.\n2. Pasien terlibat dalam aktivitas keluarga seperti biasa.\n3. Keluarga memberikan afirmasi positif rutin setiap hari.",
      edukasi_keluarga:
        "Keluarga harus membantu pasien melihat bahwa kegagalan saat ini adalah sebuah peristiwa, bukan identitas diri pasien selamanya.",
      pohon_masalah:
        "Ketidakberdayaan <- HDR Situasional <- Krisis Situasional",
      referensi: ["PPNI (2016). SDKI", "Keliat, B.A. (2014)"],
    },
    {
      id: "risiko-ketidakberdayaan",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO â€“ DIAGNOSIS RISIKO",
      nama: "4. Ketidakberdayaan",
      sdki: "D.0092",
      definisi:
        "Persepsi bahwa tindakan seseorang tidak akan mempengaruhi hasil secara signifikan; suatu perasaan kurang pengendalian terhadap situasi saat ini atau peristiwa yang akan datang. Individu merasa bahwa ia tidak memiliki kekuatan untuk merubah keadaan yang menimpanya.",
      etiologi:
        "**1. Faktor Predisposisi:**\na. Biologis: Penyakit kronis (seperti gagal ginjal, kanker) yang membatasi mobilitas dan kemandirian.\nb. Psikologis: Riwayat pola asuh yang terlalu mengekang atau memanjakan (Overprotective) sehingga tidak melatih kemandirian.\nc. Lingkungan: Hidup dalam institusi yang sangat mengontrol (seperti penjara atau rumah sakit jangka panjang).\n\n**2. Faktor Presipitasi:**\na. Perburukan kondisi kesehatan secara tiba-tiba.\nb. Kegagalan berulang dalam upaya pengobatan atau pemulihan.\nc. Kehilangan sumber daya finansial yang drastis.",
      manifestasi_klinis:
        "**Dapat diamati melalui perilaku:**\n1. Pengungkapan kata-kata ketidakmampuan (misal: 'Terserah saja').\n2. Ketergantungan yang berlebihan pada bantuan orang lain untuk hal-hal kecil.\n3. Kurangnya partisipasi dalam proses pengambilan keputusan perawatan diri.\n4. Apatis dan ekspresi wajah yang tampak murung atau pasrah.\n5. Kurang inisiatif untuk mencari informasi tentang penyakitnya.",
      patofisiologi:
        "Paparan terus-menerus terhadap situasi yang tidak dapat dikendalikan memicu fenomena 'Learned Helplessness' (Ketidakberdayaan yang dipelajari). Secara neurobiologis, terjadi penurunan aktivitas pada sirkuit reward di otak (striatum) yang mengakibatkan hilangnya motivasi untuk melakukan tindakan adaptif. Individu berhenti mencoba karena otaknya telah menyimpulkan bahwa usaha apa pun akan sia-sia.",
      tanda_gejala:
        "DS (Subjektif):\n- 'Apa pun yang saya lakukan, keadaan saya tidak akan berubah.'\n- 'Saya tidak punya pilihan lain selain mengikuti apa yang dikatakan orang.'\n- 'Saya merasa tidak berdaya menghadapi hidup ini.'\n\nDO (Objektif):\n- Pasif saat diajak diskusi tentang rencana tindakan.\n- Enggan membuat keputusan sederhana (pilihan menu makanan).\n- Respon emosional yang datar terhadap masalah yang serius.\n- Tampak menyerahkan semua urusan perawatan diri sepenuhnya pada orang lain.",
      pemeriksaan_penunjang:
        "1. Pengkajian Locus of Control (Eksternal vs Internal).\n2. Observasi tingkat partisipasi dalam aktivitas harian.\n3. Skala Ketidakberdayaan (Powerlessness Scale).",
      penatalaksanaan_medis:
        "1. Konseling eksistensial untuk menemukan kembali makna kontrol diri.\n2. Psikoterapi kognitif untuk menantang pikiran 'learned helplessness'.\n3. Optimasi terapi penyakit fisik yang mendasari untuk meningkatkan rasa kompeten fisik.",
      pathway:
        "Penyakit Kronis -> Hambatan Fisik -> Kurangnya Kontrol -> Ketidakberdayaan -> Keputusasaan.",
      fokus_pengkajian:
        "1. Area kehidupan mana yang masih bisa dikontrol oleh pasien (mandi, ganti baju, dll).\n2. Nilai-nilai pribadi yang membuat pasien merasa berharga.\n3. Hambatan paling besar yang dirasakan pasien dalam mengambil keputusan.",
      rentang_respon:
        "Adaptif (Harapan - Penentuan Nasib Sendiri) <--> Antara (Pasrah - Terdesak) <--> Maladaptif (Ketidakberdayaan Total).",
      mekanisme_koping:
        "1. Pasrah (Resignation): Berhenti berjuang.\n2. Intelektualisasi: Menganalisa situasi secara berlebih tanpa melakukan tindakan nyata.",
      masalah_keperawatan: [
        "Ketidakberdayaan",
        "Ansietas",
        "Harga Diri Rendah Situasional",
      ],
      sp_pasien:
        "SP 1: Bantu pasien mengidentifikasi area kehidupan yang masih bisa dikontrol (Beri pilihan kecil).\nSP 2: Diskusikan perasaan kehilangan kontrol dan dampaknya pada motivasi pasien.\nSP 3: Latih pasien melakukan pengambilan keputusan sederhana secara mandiri dan apresiasi hasilnya.\nSP 4: Latih teknik penyelesaian masalah (Problem Solving) untuk masalah harian yang spesifik.",
      sp_keluarga:
        "SP 1: Edukasi keluarga untuk tidak terlalu memanjakan pasien (Over-supporting) & beri ruang kemandirian.\nSP 2: Latih keluarga memberikan pilihan-pilihan kepada pasien dalam urusan rumah tangga.\nSP 3: Diskusikan cara memberikan dukungan yang memberdayakan (Empowering Support) bukan menidurkan motivasi.",
      discharge_planning:
        "1. Pasien mampu mengambil keputusan sederhana secara mandiri.\n2. Pasien terlibat aktif dalam menyusun jadwal harian.\n3. Keluarga tidak lagi melakukan tugas yang seharusnya bisa dilakukan pasien sendiri.",
      edukasi_keluarga:
        "Keluarga harus menyadari bahwa memberikan kontrol kembali kepada pasien adalah bentuk cinta yang lebih baik daripada melakukan segalanya untuk pasien.",
      pohon_masalah: "Keputusasaan <- Ketidakberdayaan <- Penyakit Kronis",
      referensi: ["PPNI (2016). SDKI", "Keliat, B.A. (2014)"],
    },
    {
      id: "risiko-keputusasaan",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO â€“ DIAGNOSIS RISIKO",
      nama: "5. Keputusasaan",
      sdki: "D.0088",
      definisi:
        "Keadaan subjektif ketika seorang individu melihat keterbatasan atau tidak adanya alternatif atau pilihan pribadi yang tersedia dan tidak dapat memobilisasi energi demi kepentingan sendiri. Ini merupakan perasaan bahwa hidup sudah tidak memiliki makna atau tujuan lagi.",
      etiologi:
        "**1. Faktor Predisposisi:**\na. Riwayat depresi atau gangguan afektif.\nb. Penyakit terminal atau penyakit fisik yang memburuk secara progresif.\nc. Kurangnya sistem pendukung sosial atau isolasi emosional jangka panjang.\n\n**2. Faktor Presipitasi:**\na. Kehilangan yang bermakna (orang dicintai, pekerjaan, harta).\nb. Kegagalan mencapai tujuan hidup yang dianggap sangat penting.\nc. Kelelahan psikologis akibat stressor kronis yang tidak kunjung selesai.",
      manifestasi_klinis:
        "**Tanda-tanda keputusasaan:**\n1. Kurangnya kontak mata dan tatapan mata yang cenderung kosong.\n2. Afek datar atau tampak sangat sedih dan murung.\n3. Penurunan nafsu makan (anoreksia) dan gangguan pola tidur yang berat.\n4. Ungkapan pesimis terhadap masa depan (misal: 'Tidak ada gunanya mencoba').\n5. Penurunan tingkat energi yang nyata (tampak lesu dan lambat).",
      patofisiologi:
        "Keputusasaan seringkali merupakan kelanjutan dari ketidakberdayaan. Ketika individu merasa tidak memiliki kontrol, otak mulai menghentikan produksi neurotransmiter yang memicu harapan dan motivasi (seperti dopamin dan serotonin). Secara kognitif, individu terjebak dalam skema negatif total terhadap diri sendiri, dunia, dan masa depan (Beck's Cognitive Triad). Hal ini menciptakan siklus penderitaan mental yang jika tidak diintervensi dapat memicu ide bunuh diri.",
      tanda_gejala:
        "DS (Subjektif):\n- 'Saya tidak melihat ada alasan untuk bangun di pagi hari.'\n- 'Masa depan saya gelap dan tidak ada harapan bagi saya.'\n- 'Tidak ada yang bisa menolong saya keluar dari situasi ini.'\n\nDO (Objektif):\n- Kurang inisiatif dalam melakukan aktivitas perawatan diri.\n- Respon verbal lambat dan suara lemah.\n- Tampak tidak antusias terhadap rencana pengobatan atau pemulihan.\n- Menghindari interaksi sosial dan lebih banyak diam.",
      pemeriksaan_penunjang:
        "1. Pengukuran tingkat keputusasaan dengan Beck Hopelessness Scale (BHS).\n2. Skala Depresi Hamilton (HAM-D).\n3. Pengkajian mendalam terhadap risiko bunuh diri.",
      penatalaksanaan_medis:
        "1. Farmakoterapi: Antidepresan golongan SSRI (Fluoxetine, Sertraline).\n2. Logoterapi: Terapi berorientasi makna hidup untuk membantu pasien menemukan kembali tujuan hidupnya.\n3. Terapi Kognitif Perilaku (CBT) untuk memutus rantai pikiran pesimistis.",
      pathway:
        "Stressor Berat -> Ketidakberdayaan -> Hilangnya Harapan -> Keputusasaan -> Risiko Bunuh Diri.",
      fokus_pengkajian:
        "1. Makna hidup atau sumber kekuatan spiritual bagi pasien.\n2. Adanya keinginan atau ide untuk mengakhiri hidup (bunuh diri).\n3. Orang atau benda yang masih memiliki nilai emosional bagi pasien.",
      rentang_respon:
        "Adaptif (Optimis - Harapan) <--> Antara (Gelisah - Sedih) <--> Maladaptif (Putus Asa - Bunuh Diri).",
      mekanisme_koping:
        "1. Menarik Diri secara total dari realitas.\n2. Regresi pada tahap perkembangan sebelumnya.\n3. Pasif-Agresif.",
      masalah_keperawatan: [
        "Keputusasaan",
        "Risiko Bunuh Diri",
        "Harga Diri Rendah Situasional",
      ],
      sp_pasien:
        "SP 1: Identifikasi harapan hidup yang masih ada (meskipun kecil, misal: anak, orang tua, atau hewan piaraan).\nSP 2: Diskusikan masa depan positif yang realistis dan langkah-langkah kecil untuk mencapainya.\nSP 3: Latih teknik afirmasi positif diri untuk melawan pikiran-pikiran pesimis harian.",
      sp_keluarga:
        "SP 1: Edukasi keluarga untuk menjadi pendamping yang sabar, empati, dan tidak memaksakan 'keceriaan' pada pasien.\nSP 2: Latih keluarga cara mengingatkan pasien akan keberhasilan masa lalu sebagai bukti kemampuan dirinya.\nSP 3: Ajarkan keluarga mengenali tanda bahaya keputusasaan yang berubah menjadi risiko bunuh diri.",
      discharge_planning:
        "1. Pasien menyebutkan minimal satu alasan konkret untuk melanjutkan hidup.\n2. Pasien terlibat dalam satu aktivitas harian dengan motivasi internal.\n3. Keluarga mampu memberikan dukungan moral yang kontinyu di rumah.",
      edukasi_keluarga:
        "Keluarga harus menyadari bahwa keputusasaan adalah 'kanker' emosional yang membutuhkan kehadiran dan dukungan penuh kehadiran secara fisik dan batin.",
      pohon_masalah:
        "Risiko Bunuh Diri <- Keputusasaan <- Stressor Tak Teratasi",
      referensi: ["PPNI (2016). SDKI", "Stuart, G.W. (2013)"],
    },
    {
      id: "risiko-koping",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO â€“ DIAGNOSIS RISIKO",
      nama: "6. Koping Individu Inefektif",
      sdki: "D.0096",
      definisi:
        "Ketidakmampuan individu dalam membentuk penilaian yang valid terhadap pemicu stress (stressor), ketidakmampuan menggunakan sumber daya yang tersedia secara efektif, dan/atau kegagalan dalam merespon situasi sulit dengan strategi yang adaptif. Hal ini menyebabkan individu terjebak dalam perilaku yang merugikan diri sendiri atau menghambat pemecahan masalah.",
      etiologi:
        "**1. Kurangnya Sumber Daya:**\nKeterbatasan dukungan sosial, ekonomi, atau kurangnya pengalaman masa lalu dalam menghadapi krisis serupa.\n\n**2. Gangguan Penilaian Kognitif:**\nAdanya distorsi pikiran (seperti menganggap masalah terlalu besar), tingkat kecemasan yang melumpuhkan, atau kepercayaan diri yang rendah.\n\n**3. Pola Adaptasi Maladaptif:**\nRiwayat penggunaan mekanisme pertahanan ego yang destruktif (seperti penyangkalan/denial atau proyeksi) secara terus-menerus.",
      manifestasi_klinis:
        "**Gambaran koping yang gagal:**\n1. Menggunakan mekanisme pelarian yang merugikan (misal: merokok berlebih, konsumsi alkohol, atau judi).\n2. Tidak mampu memenuhi komitmen peran (bolos kerja/sekolah) akibat tekanan pikiran.\n3. Perilaku agresif yang tidak terarah atau justru penarikan diri sosial yang ekstrem.\n4. Munculnya berbagai keluhan fisik (psikosomatik) tanpa dasar penyakit organik yang jelas.\n5. Kegagalan dalam mencari bantuan profesional meskipun masalah sudah sangat berat.",
      patofisiologi:
        "Stressor yang datang terus menerus tanpa adanya katarsis emosional yang sehat menyebabkan beban alostatik pada sistem saraf pusat. Korteks prefrontal (pusat logika) kehilangan kendali atas sistem limbik (pusat emosi), sehingga individu merespon stress with insting primitif (fight/flight/freeze) yang tidak relevan dengan pemecahan masalah modern. Hal ini menciptakan lingkaran setan di mana masalah yang tidak selesai justru memicu stressor baru.",
      tanda_gejala:
        "DS (Subjektif):\n- 'Saya merasa buntu dan tidak tahu harus berbuat apa lagi untuk menyelesaikan masalah ini.'\n- 'Saya lebih baik tidur sepanjang hari daripada harus menghadapi kenyataan di luar.'\n- 'Semua orang menyalahkan saya, padahal ini bukan kesalahan saya (proyeksi).'\n\nDO (Objektif):\n- Pasien tampak gelisah, tidak mampu melakukan tugas harian yang biasa dilakukan.\n- Adanya tanda-tanda penggunaan zat atau perilaku makan yang menyimpang (berlebih/kurang).\n- Konsentrasi menurun drastis saat diajak berdiskusi tentang solusi.\n- Tingkat ketergantungan pada orang lain meningkat secara tidak wajar.",
      pemeriksaan_penunjang:
        "1. Kuesioner Strategi Koping (Ways of Coping Questionnaire).\n2. Skala Stress Kehidupan (Life Events Scale).\n3. Penilaian mekanisme pertahanan ego melalui wawancara klinis mendalam.",
      penatalaksanaan_medis:
        "1. Konseling Krisis (Crisis Intervention) untuk stabilitas emosi awal.\n2. Psikoterapi Kognitif (CBT) untuk memperbaiki pola penilaian terhadap stressor.\n3. Pelatihan Manajemen Stress (Relaxation Training & Time Management).",
      pathway:
        "Stressor Berat -> Penilaian Salah (Appraisal) -> Ketegangan Psikis -> Strategi Koping Maladaptif -> Masalah Tak Teratasi -> Koping Inefektif.",
      fokus_pengkajian:
        "1. Kekuatan internal pasien yang pernah berhasil digunakan di masa lalu.\n2. Hambatan utama (spiritual/ekonomi/fisik) yang membuat koping saat ini gagal.\n3. Adanya risiko perilaku mencederai diri akibat frustasi yang menumpuk.",
      rentang_respon:
        "Adaptif (Koping Konstruktif - Solutif) <--> Antara (Koping Menghindar) <--> Maladaptif (Koping Destruktif - Fatalistik).",
      mekanisme_koping:
        "1. Adaptif: Berbagi perasaan (Ventilasi), olahraga, menetapkan prioritas.\n2. Maladaptif: Marah-marah, menyalahkan orang lain, menggunakan obat-obatan terlarang.",
      masalah_keperawatan: [
        "Koping Individu Inefektif",
        "Ansietas",
        "Gangguan Pola Tidur",
      ],
      sp_pasien:
        "SP 1: Identifikasi koping yang biasa dilakukan & Analisis mana yang merugikan dan mana yang membantu.\nSP 2: Latih strategi koping baru yang konstruktif (misal: teknik pernapasan saat kesal atau menulis jurnal).\nSP 3: Latih cara pemecahan masalah (Problem Solving) secara sistematis: Analisis masalah, buat daftar solusi, dan pilih satu untuk dicoba.",
      sp_keluarga:
        "SP 1: Edukasi keluarga untuk tidak menghakimi kegagalan koping pasien, melainkan menjadi pendengar yang aman.\nSP 2: Latih keluarga memberikan umpan balik positif (reinforcement) saat pasien mencoba strategi koping yang sehat.\nSP 3: Diskusikan cara mengurangi beban stressor di rumah agar kondisi emosi pasien lebih stabil.",
      discharge_planning:
        "1. Pasien mampu menyebutkan minimal 2 strategi koping baru yang sehat.\n2. Pasien mulai mampu menjalankan tanggung jawab perannya kembali secara bertahap.\n3. Memiliki daftar kontak orang yang bisa dihubungi saat merasa tertekan.",
      edukasi_keluarga:
        "Berikan ruang bagi pasien untuk berproses, karena mengubah kebiasaan koping yang lama membutuhkan waktu dan kesabaran ekstra.",
      pohon_masalah:
        "Krisis Identitas <- Koping Inefektif <- Kurangnya Dukungan Sosial",
      referensi: [
        "PPNI (2016). SDKI",
        "Lazarus & Folkman (1984)",
        "Stuart, G.W. (2013)",
      ],
    },
    {
      id: "risiko-dukacita",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO â€“ DIAGNOSIS RISIKO",
      nama: "7. Dukacita",
      sdki: "D.0081",
      definisi:
        "Proses psikologis, sosial, dan fisik yang normal dialami individu sebagai respon terhadap kehilangan (orang, benda, fungsi, atau peran) yang bermakna. Dukacita mencakup aspek kognitif, afektif, dan perilaku menuju pada adaptasi terhadap realitas baru tanpa hal yang hilang tersebut.",
      etiologi:
        "**1. Faktor Predisposisi:**\na. Kedekatan hubungan emosional dengan hal yang hilang.\nb. Riwayat kehilangan sebelumnya yang belum terselesaikan (Unresolved grief).\nc. Tingkat kematangan emosional dan spiritual individu.\n\n**2. Faktor Presipitasi:**\na. Kematian mendadak dari orang yang sangat dicintai.\nb. Kehilangan fungsi tubuh atau diagnosis penyakit terminal.\nc. Kegagalan besar dalam karir atau hubungan (perceraian).",
      manifestasi_klinis:
        "**Tahapan berduka (Kubler-Ross):**\n1. Penolakan (Denial): Merasa kehilangan tersebut tidak nyata.\n2. Marah (Anger): Marah pada situasi, orang lain, atau Tuhan.\n3. Tawar-menawar (Bargaining): Berjanji melakukan hal tertentu jika kehilangan tersebut bisa dibatalkan.\n4. Depresi: Perasaan sedih mendalam dan putus asa.\n5. Penerimaan (Acceptance): Menerima realitas kehilangan dan mulai merencanakan masa depan.",
      patofisiologi:
        "Kehilangan memicu distres emosional yang hebat yang mengganggu homeostasis psikologis. Tubuh bereaksi dengan peningkatan hormon stress. Secara psikologis, individu kehilangan objek yang selama ini memberikan rasa aman atau identitas, sehingga terjadi kekosongan dalam konsep dirinya. Proses berduka bertujuan untuk melepaskan ikatan emosional dengan objek yang hilang dan membentuk ikatan baru yang lebih sehat.",
      tanda_gejala:
        "DS (Subjektif):\n- 'Saya merasa hidup saya hampa setelah dia pergi.'\n- 'Saya tidak percaya ini terjadi pada saya.'\n- 'Saya merasa sangat bersalah karena tidak ada di sana saat itu.'\n\nDO (Objektif):\n- Menangis secara spontan atau menetap.\n- Perilaku mencari (seolah-olah hal yang hilang masih ada).\n- Gangguan pola makan dan tidur (sulit memejamkan mata).\n- Tampak lesu dan sulit berkonsentrasi pada hal lain di luar kehilangan.",
      pemeriksaan_penunjang:
        "1. Penilaian fase berduka menggunakan kuesioner Kubler-Ross.\n2. Pengkajian sistem pendukung keluarga.\n3. Evaluasi risiko depresi klinis jika berduka berkepanjangan.",
      penatalaksanaan_medis:
        "1. Pendampingan Dukacita (Grief Counseling).\n2. Terapi Kelompok Pendukung (Support Group) untuk berbagi kesedihan.\n3. Terapi Farmakologi jangka pendek (Sedatif) jika terjadi insomnia berat.",
      pathway:
        "Kehilangan Nyata -> Syok -> Penolakan -> Instabilitas Emosional -> Dukacita -> Penerimaan.",
      fokus_pengkajian:
        "1. Tahap berduka mana yang paling lama dialami oleh pasien.\n2. Adanya perasaan bersalah (Guilt) yang ekstrem terhadap kehilangan.\n3. Sumber kekuatan batin (agama/keluarga) yang bisa membantu pemulihan.",
      rentang_respon:
        "Adaptif (Penerimaan) <--> Antara (Dukacita Berkepanjangan) <--> Maladaptif (Dukacita yang tidak sehat).",
      mekanisme_koping:
        "1. Ventilasi Perasaan: Menangis, bercerita, berdoa.\n2. Supresi: Memendam kesedihan (tidak sehat).\n3. Ritualisme: Melakukan peringatan untuk mengenang yang hilang.",
      masalah_keperawatan: ["Dukacita", "Ansietas", "Risiko Isolasi Sosial"],
      sp_pasien:
        "SP 1: Identifikasi tahap berduka & Bantu pasien mengekspresikan sedihnya secara verbal.\nSP 2: Latih cara mengekspresikan sedih yang sehat (Menulis jurnal, berdoa, atau kegiatan ritual kematian).\nSP 3: Diskusikan cara menghadapi realitas baru dan menyusun rencana kegiatan tanpa objek yang hilang.",
      sp_keluarga:
        "SP 1: Edukasi keluarga bahwa menangis adalah proses normal dan jangan melarang pasien sedih.\nSP 2: Latih keluarga memberikan dukungan fisik (pelukan) dan moral bagi pasien.\nSP 3: Diskusikan peran keluarga dalam membantu pasien melewati fase depresi menuju penerimaan.",
      discharge_planning:
        "1. Pasien mampu membicarakan kehilangan tanpa menangis ekstrem.\n2. Pasien mulai terlibat dalam kegiatan harian kembali.\n3. Keluarga memahami tanda-tanda berduka patologis (Grief patologis).",
      edukasi_keluarga:
        "Keluarga dilarang meminta pasien 'cepat-cepat melupakan' karena berduka membutuhkan waktu yang berbeda-beda bagi setiap individu.",
      pohon_masalah: "Depresi <- Dukacita <- Kehilangan Nyata",
      referensi: ["PPNI (2016). SDKI", "Kubler-Ross, E. (1969)"],
    },
    {
      id: "risiko-manajemen",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO â€“ DIAGNOSIS RISIKO",
      nama: "8. Ketidakefektifan Manajemen Kesehatan",
      sdki: "D.0116",
      definisi:
        "Pola pengaturan dan pengintegrasian ke dalam kehidupan sehari-hari suatu program terapi untuk penyakit dan konsekuensinya yang tidak memuaskan untuk mencapai tujuan kesehatan yang spesifik. Hal ini mencerminkan ketidakpatuhan atau ketidakmampuan untuk menjalankan regimen pengobatan secara mandiri.",
      etiologi:
        "**1. Faktor Predisposisi:**\na. Kurangnya tingkat pendidikan dan literasi kesehatan.\nb. Kurangnya motivasi internal karena merasa penyakit tidak mengancam.\nc. Hambatan ekonomi dalam mengakses fasilitas kesehatan atau membeli obat.\n\n**2. Faktor Presipitasi:**\na. Kompleksitas regimen terapi (minum banyak obat dengan jadwal berbeda).\nb. Efek samping obat yang mengganggu aktivitas harian.\nc. Kurangnya dukungan dari Pengawas Minum Obat (PMO) di rumah.",
      manifestasi_klinis:
        "**Indikator ketidakefektifan:**\n1. Secara verbal mengakui jarang atau lupa minum obat.\n2. Adanya kegagalan untuk melakukan tindakan pencegahan kekambuhan.\n3. Jumlah obat yang tersisa tidak sesuai dengan jadwal yang seharusnya (pill-count salah).\n4. Penyakit sering mengalami eksaserbasi akut atau kekambuhan mendadak.\n5. Tidak datang kontrol ke poli rawat jalan sesuai jadwal yang ditentukan.",
      patofisiologi:
        "Kurangnya pengetahuan atau motivasi menyebabkan individu tidak menganggap regimen terapi sebagai prioritas. Hal ini menyebabkan fluktuasi kadar obat dalam darah yang memicu ketidakseimbangan neurotransmiter kembali (relapse). Secara psikologis, ini seringkali terkait dengan denial terhadap kondisi penyakit kronis yang membutuhkan perawatan jangka panjang.",
      tanda_gejala:
        "DS (Subjektif):\n- 'Saya sering lupa minum obat karena jadwalnya terlalu banyak.'\n- 'Saya merasa sudah sehat, jadi saya berhenti minum obat sendiri.'\n- 'Saya tidak mengerti kegunaan obat yang diberikan dokter.'\n\nDO (Objektif):\n- Obat tampak masih utuh di rumah pasien atau tanggal kontrol terlewati.\n- Adanya gejala awal kekambuhan (gelisah, halusinasi muncul kembali).\n- Pasien tidak mampu menyebutkan nama dan kegunaan obatnya.\n- Kondisi klinis yang memburuk meskipun sudah dalam program terapi.",
      pemeriksaan_penunjang:
        "1. Review kepatuhan (Complience Review) menggunakan Pill Count.\n2. Kuesioner literasi kesehatan (Health Literacy Questionnaire).\n3. Pengamatan cara pasien atau keluarga menyiapkan obat.",
      penatalaksanaan_medis:
        "1. Penyederhanaan regimen dosis (dosis sekali sehari jika memungkinkan).\n2. Penggunaan alarm digital atau kotak obat (pill-box) harian.\n3. Edukasi Psikoedukasi Keluarga tentang patuh obat.",
      pathway:
        "Kompleksitas Terapi -> Kurang Pengetahuan -> Ketidakpatuhan -> Eksaserbasi Gejala -> Manajemen Kesehatan Inefektif -> Risiko Kekambuhan.",
      fokus_pengkajian:
        "1. Hambatan utama yang dirasakan saat ingin menjalankan terapi harian.\n2. Siapa yang bertanggung jawab menyiapkan obat di rumah.\n3. Kapan waktu yang paling sering terlupa untuk melakukan pengobatan.",
      rentang_respon:
        "Adaptif (Sangat Patuh) <--> Antara (Kadang Lupa - Perlu Diingatkan) <--> Maladaptif (Total Lalai - Penolakan Terapi).",
      mekanisme_koping:
        "1. Rasionalisasi: Mencari alasan logis untuk tidak minum obat.\n2. Prokrastinasi: Menunda-nunda waktu kontrol.",
      masalah_keperawatan: [
        "Ketidakefektifan Manajemen Kesehatan",
        "Defisit Pengetahuan",
        "Risiko Kekambuhan",
      ],
      sp_pasien:
        "SP 1: Diskusikan pentingnya pengobatan bagi masa depan dan risiko jika terapi terhenti.\nSP 2: Buat jadwal minum obat kreatif (bergambar/alarm/kartu kendali).\nSP 3: Latih cara bertanya pada petugas kesehatan tentang efek samping obat secara mandiri.",
      sp_keluarga:
        "SP 1: Edukasi keluarga sebagai Pengawas Minum Obat (PMO) yang suportif bukan memaksa.\nSP 2: Latih keluarga cara menyiapkan obat harian menggunakan kotak obat (Pill-Box).\nSP 3: Diskusikan peran keluarga dalam menyediakan transportasi dan biaya untuk kontrol rutin.",
      discharge_planning:
        "1. Pasien menyebutkan jadwal minum obat dengan 8 benar.\n2. Pasien memiliki kalender kontrol yang sudah diparaf keluarga.\n3. Keluarga memahami tanda-tanda pasien mulai tidak patuh obat.",
      edukasi_keluarga:
        "Dukungan keluarga tanpa omelan secara verbal lebih efektif meningkatkan kepatuhan pasien daripada terus-menerus memarahi pasien.",
      pohon_masalah:
        "Kekambuhan <- Manajemen Kesehatan Tak Efektif <- Kurang Motivasi",
      referensi: ["PPNI (2016). SDKI", "NANDA-I (2018)"],
    },
    {
      id: "risiko-distres",
      kategori: "ASKES JIWA DIAGNOSIS RISIKO â€“ DIAGNOSIS RISIKO",
      nama: "9. Distres Spiritual",
      sdki: "D.0082",
      definisi:
        "Suatu keadaan gangguan pada kemampuan individu untuk mengalami dan mengintegrasikan makna dan tujuan hidup melalui hubungan dengan diri sendiri, orang lain, seni, musik, literatur, alam, dan/atau kekuatan yang melampaui diri sendiri (Tuhan). Pasien mungkin merasa kehilangan iman atau mempertanyakan keberadaan Tuhan akibat penderitaan yang dialami.",
      etiologi:
        "**1. Faktor Predisposisi:**\na. Pola asuh keluarga yang kurang menekankan nilai spiritual.\nb. Peristiwa masa lalu yang membuat individu meragukan kasih sayang Tuhan.\nc. Keanggotaan dalam kelompok agama yang sangat kaku dan menekan.\n\n**2. Faktor Presipitasi:**\na. Penyakit fisik kronis yang sangat penderita (Nyeri kronis/Kanker).\nb. Kematian mendadak dari orang yang dianggap sangat sholeh/baik.\nc. Merasa tindakan medis bertentangan dengan keyakinan agamanya.",
      manifestasi_klinis:
        "**Gambaran distres spiritual:**\n1. Mengungkapkan kemarahan atau keraguan pada Tuhan.\n2. Menolak melakukan aktivitas keagamaan yang biasa dilakukan.\n3. Secara verbal menyatakan kehilangan makna dan tujuan hidup.\n4. Merasa bahwa sakitnya adalah hukuman dari Tuhan yang tidak adekuat.\n5. Gelisah secara batin dan merasa sepi meskipun di tengah keramaian.",
      patofisiologi:
        "Penderitaan berat yang tidak teratasi oleh koping logis memicu krisis eksistensial. Individu mulai mempertanyakan nilai-nilai yang selama ini dipercayainya. Kegagalan menemukan 'makna' di balik penderitaan menyebabkan luka spiritual (Soul Wound) yang menurunkan semangat hidup dan memperlambat proses penyembuhan fisik melalui mekanisme psikoneuroimunologi.",
      tanda_gejala:
        "DS (Subjektif):\n- 'Mengapa Tuhan sangat tidak adil pada saya padahal saya selalu beribadah?'\n- 'Saya merasa Tuhan sudah meninggalkan saya dalam sakit ini.'\n- 'Ibadah tidak lagi memberikan saya ketenangan.'\n\nDO (Objektif):\n- Menjauhkan barang-barang suci (Alkitab/Al-Quran/Sajadah).\n- Marah-marah atau menangis saat membicarakan masalah keagamaan.\n- Menolak kehadiran rohaniawan.\n- Tampak hampa, tatapan sedih, dan tidak bergairah hidup.",
      pemeriksaan_penunjang:
        "1. Pengkajian SPIRIT (S-Spiritual belief system, P-Personal spirituality, I-Integration, R-Ritualized practices, I-Implication, T-Terminal events).\n2. Skala Kesejahteraan Spiritual (Spiritual Well-Being Scale).\n3. Evaluasi terhadap koherensi makna hidup.",
      penatalaksanaan_medis:
        "1. Terapi Mindfulness Berbasis Spiritualitas.\n2. Pendampingan rohaniawan yang moderat dan empati.\n3. Terapi musik atau seni religi yang menenangkan.",
      pathway:
        "Penderitaan Kronis -> Krisis Keyakinan -> Hilangnya Makna Hidup -> Distres Spiritual -> Keputusasaan.",
      fokus_pengkajian:
        "1. Keyakinan dasar yang paling tergoncang saat ini.\n2. Sumber-sumber kedamaian yang biasanya membantu pasien.\n3. Ketidakcocokan antara tindakan medis dengan aturan iman pasien.",
      rentang_respon:
        "Adaptif (Damai Spiritual) <--> Antara (Keraguan) <--> Maladaptif (Krisis Keyakinan total).",
      mekanisme_koping:
        "1. Mencari Makna (Meaning-making): Berusaha menemukan hikmah.\n2. Angered at God: Menumpahkan amarah secara verbal pada kekuatan tertinggi (tahap transisi).",
      masalah_keperawatan: ["Distres Spiritual", "Keputusasaan", "Ansietas"],
      sp_pasien:
        "SP 1: Identifikasi keyakinan spiritual & Fasilitasi alat ibadah yang dibutuhkan (Mukena/Sajadah/Alkitab).\nSP 2: Diskusikan hambatan ibadah selama sakit dan cari solusinya (Tayamum/Shalat duduk).\nSP 3: Diskusikan hikmah dan makna penderitaan serta hadirkan rohaniawan untuk bimbingan spiritual mendalam.",
      sp_keluarga:
        "SP 1: Edukasi keluarga untuk tidak menghakimi keraguan iman pasien.\nSP 2: Latih keluarga cara bersama-sama mendoakan pasien dengan kata-kata yang menyejukkan.\nSP 3: Diskusikan cara membantu pasien menjalankan ibadah secara rutin di rumah pasca pulang.",
      discharge_planning:
        "1. Pasien melakukan ibadah minimal 1x sehari dengan tenang.\n2. Pasien mampu mengungkapkan satu hikmah positif dari penyakitnya.\n3. Keluarga mampu mendukung religiusitas pasien di rumah.",
      edukasi_keluarga:
        "Dukungan spiritual dari keluarga adalah obat batin yang paling ampuh di samping obat-obatan kimia.",
      pohon_masalah: "Keputusasaan <- Distres Spiritual <- Penderitaan Kronis",
      referensi: ["PPNI (2016). SDKI", "Potter & Perry (2013)"],
    },

    // === ASKEP JIWA DIAGNOSIS GANGGUAN JIWA ===
    {
      id: "halusinasi",
      kategori: "ASKEP JIWA DIAGNOSIS GANGGUAN JIWA",
      nama: "1. Gangguan Persepsi Sensori: Halusinasi",
      sdki: "D.0085",
      definisi:
        "Halusinasi merupakan salah satu gejala klinis utama dari gangguan spektrum skizofrenia dan gangguan psikotik lainnya yang ditandai dengan adanya persepsi sensori yang terjadi tanpa adanya rangsangan eksternal yang nyata. Fenomena ini melibatkan interpretasi salah oleh otak terhadap informasi sensorik internal yang kemudian diproyeksikan seolah-olah berasal dari lingkungan luar. Secara klinis, halusinasi harus dibedakan dari ilusi, di mana stimulus nyata ada tetapi disalahartikan, dan dari delusi, yang merupakan gangguan pada isi pikir bukan persepsi.\n\nDalam konteks keperawatan jiwa profesional, halusinasi dipandang sebagai respons maladaptif dalam rentang respons neurobiologis individu terhadap stresor yang melampaui ambang batas kopingnya. Hal ini mencerminkan kegagalan fungsi integratif ego dalam memproses realitas dan mempertahankan batas-batas diri (ego boundaries). Sebagai pakar, kita melihat halusinasi bukan hanya sebagai 'suara' atau 'bayangan', melainkan sebagai manifestasi dari disintegrasi psikis yang memerlukan stabilisasi biologis melalui farmakoterapi dan penguatan psikososial melalui terapi modalitas.\n\nDalam berbagai literatur akademik terkemuka seperti Stuart (2013) dan Townsend (2015), halusinasi dideskripsikan sebagai pengalaman subjektif yang sangat meyakinkan bagi individu yang mengalaminya. Meskipun tidak ada stimulus objektif, aktivitas neural pada korteks sensorik yang bersesuaian (misalnya area Wernicke untuk halusinasi pendengaran) menunjukkan peningkatan metabolisme yang nyata. Hal ini menjelaskan mengapa pasien seringkali sangat defensif atau patuh terhadap pesan yang disampaikan oleh halusinasinya, karena bagi sistem syaraf mereka, stimulus tersebut bersifat absolut dan nyata.",
      etiologi:
        "Etiologi halusinasi bersifat multifaktorial dan dapat dijelaskan melalui pendekatan model biopsikososial. Dari faktor biologis (predisposisi), komponen genetik memegang peranan signifikan; individu dengan riwayat keluarga tingkat pertama yang menderita skizofrenia memiliki risiko yang jauh lebih tinggi. Selain itu, 'Dopamin Hypothesis' menjelaskan bahwa hiperaktivitas neurotransmiter dopamin pada jalur mesolimbik otak secara langsung berkaitan dengan munculnya gejala-gejala positif seperti halusinasi. Ketidakseimbangan neurotransmiter lain seperti serotonin, glutamat, dan GABA juga turut berkontribusi dalam mengganggu sirkuit saraf yang mengatur persepsi.\n\nSecara psikologis, faktor predisposisi mencakup kegagalan dalam mencapai tahap perkembangan psikososial yang optimal, khususnya pada tahap 'Basic Trust vs Mistrust' menurut Erikson. Pengalaman trauma masa kecil, pola asuh yang penuh penolakan, atau paparan kronis terhadap 'Double-Bind Communication' di dalam keluarga dapat menciptakan kerapuhan struktur ego. Ketika individu menghadapi stresor di masa dewasa, ego yang lemah ini akan menggunakan mekanisme disosiasi atau proyeksi sebagai upaya pertahanan diri, yang pada akhirnya bermanifestasi sebagai halusinasi untuk menghindari realitas yang menyakitkan.\n\nFaktor sosial dan lingkungan juga berperan sebagai pemicu (presipitasi). Lingkungan yang tinggi akan 'Expressed Emotion' (EE), isolasi sosial yang berkepanjangan, kemiskinan, serta stigma sosial yang berat dapat memperburuk kondisi individu yang rentan secara biologis. Faktor presipitasi lainnya meliputi stressor biologis (seperti kurang tidur, malnutrisi, atau infeksi sistem saraf), stresor situasional (kehilangan pekerjaan, kegagalan akademik), dan stresor emosional (putus cinta, kematian orang terdekat). Interaksi antara kerentanan genetik dan stresor lingkungan ini (Diathesis-Stress Model) menjelaskan mengapa gejala halusinasi dapat muncul secara episodik atau kronis pada setiap individu.",
      manifestasi_klinis:
        "Manifestasi klinis halusinasi berkembang secara progresif melalui empat fase intensitas yang mencerminkan tingkat penurunan fungsi penilaian realitas pasien. Fase I (Comforting) ditandai dengan kecemasan tingkat sedang di mana halusinasi mulai muncul sebagai sarana untuk menghindari ketidaknyamanan lingkungan. Pada tahap ini, pasien mungkin masih memiliki sedikit kesadaran bahwa pengalaman tersebut tidak nyata, tetapi mereka mulai merasa 'nyaman' dengan kehadiran stimulus internal tersebut sebagai pengalih perhatian dari stresor.\n\nFase II (Condemning) terjadi ketika kecemasan meningkat ke tingkat berat. Isi halusinasi mulai berubah menjadi menjijikkan, menakutkan, atau merendahkan harga diri pasien. Pasien mulai kehilangan kontrol terhadap halusinasinya dan mulai menarik diri dari interaksi sosial karena seluruh energinya terserap untuk menghadapi pengalaman internalnya. Secara objektif, perawat dapat mengamati pasien mulai berbicara sendiri, tertawa tanpa alasan, atau menunjukkan sikap waspada yang tidak wajar terhadap lingkungan sekitarnya.\n\nPada Fase III (Controlling) dan Fase IV (Conquering), halusinasi menjadi sangat dominan dan mengendalikan perilaku pasien sepenuhnya. Pasien berada pada tingkat konsentrasi yang sangat rendah terhadap dunia luar dan seringkali berada dalam kondisi panik. Halusinasi pendengaran mungkin memberikan perintah yang berbahaya (command hallucinations), dan pasien merasa tidak berdaya untuk menolak atau membantah suara tersebut. Manifestasi klinis pada tahap ini meliputi perilaku agresif, agitasi hebat, ketidakmampuan total dalam merawat diri (ADL), serta risiko tinggi untuk mencederai diri sendiri, orang lain, atau merusak lingkungan sekitar.",
      patofisiologi:
        "Psikopatologi atau patofisiologi terjadinya halusinasi berkaitan erat dengan kegagalan fungsi sensorik gating di tingkat talamus dan sirkuit kortikal. Di bawah kondisi normal, otak memiliki kemampuan untuk menyaring informasi sensorik internal dan membedakan antara pikiran pribadi dan rangsangan eksternal. Namun, pada pasien halusinasi, terdapat defisit pada 'internal monitoring' sirkuit yang menghubungkan area bicara motorik (area Broca) dengan area proses persepsi pendengaran (area Wernicke), yang menyebabkan pikiran internal pasien dipersepsikan sebagai suara dari luar.\n\nDari perspektif neurokimiawi, regulasi dopamin yang abnormal di jalur mesolimbik memicu peningkatan 'salience' atau makna berlebihan terhadap stimulus internal yang seharusnya tidak penting. Hal ini menyebabkan neuron-neuron di korteks sensorik teraktivasi tanpa input aferen yang nyata dari organ indera. Secara struktural, penelitian MRI fungsional menunjukkan aktivitas yang intens pada lobus temporal dan parietal selama episode halusinasi, yang memvalidasi bahwa pengalaman tersebut memiliki basis biologis yang kuat bagi sistem saraf pusat pasien.\n\nSelain itu, defek pada sistem glutamatergic dan hipofungsi reseptor NMDA di area prefrontal menyebabkan ketidakmampuan otak untuk melakukan kritik realitas yang logis terhadap persepsi yang menyimpang tersebut. Hal ini menciptakan sebuah sirkuit tertutup di mana emosi yang kacau (limbik) memicu persepsi sensorik, sementara kontrol kognitif (prefrontal) tidak mampu meredamnya. Hasil akhirnya adalah suatu kondisi di mana individu hidup dalam dua dunia: dunia nyata yang kabur dan dunia halusinasi yang sangat dominan.",
      tanda_gejala:
        "Tanda dan gejala halusinasi dikategorikan secara sitematis menjadi Data Subjektif (DS) dan Data Objektif (DO) yang harus dikumpulkan melalui teknik wawancara dan observasi yang teliti. Data Subjektif mencakup laporan langsung pasien mengenai jenis persepsi halusinasinya. Pada halusinasi pendengaran, pasien mungkin melaporkan mendengar bisikan, suara yang memaki, atau perintah untuk melakukan sesuatu (command). Pada halusinasi penglihatan, pasien melaporkan melihat bayangan, sosok orang, atau kilatan cahaya yang tidak terlihat oleh orang lain.\n\nGejala subjektif lainnya meliputi adanya perasaan aneh pada tubuh (somatik), bau-bauan yang tidak lazim (penciuman), atau rasa pahit/logam di lidah (pengecapan) tanpa adanya stimulus makanan. Pasien seringkali mengungkapkan perasaan takut, cemas, atau justru merasa aman dengan suara tersebut tergantung pada fase halusinasinya. Kedalaman narasi pasien mengenai isi halusinasi sangat penting untuk dikaji guna menentukan tingkat risiko keselamatan diri pasien dan lingkungan.\n\nData Objektif meliputi temuan perawat melalui pengamatan perilaku non-verbal pasien. Tanda yang paling umum adalah sikap 'listening attitude' (berhenti sejenak seolah-olah mendengarkan sesuatu), 'muttering' (bicara atau komat-kamit sendiri), atau tertawa secara tiba-tiba tanpa ada pemicu sosial (inappropriate affect). Perilaku motorik pasien seperti menoleh secara tiba-tiba ke arah yang kosong, menunjuk ke udara, atau menutup telinga rapat-rapat dengan tangan juga merupakan indikator kuat adanya halusinasi aktif.\n\nSelain itu, tanda objektif dapat berupa peningkatan ketegangan otot, gelisah (agitasi), pandangan mata yang tidak fokus atau berpindah-pindah dengan cepat, serta ketidakmampuan untuk mengikuti instruksi verbal yang sederhana karena teralihkan oleh stimulus internal. Pada tahap yang lebih lanjut, pasien mungkin menunjukkan perilaku bertahan (defensif) atau menyerang (agresif) sebagai respons terhadap isi halusinasinya yang bersifat mengancam.",
      pemeriksaan_penunjang:
        "Pemeriksaan penunjang untuk pasien dengan halusinasi meliputi evaluasi psikologis mendalam, tes performa kognitif, serta pemeriksaan medis secara menyeluruh untuk menyingkirkan etiologi organik. Instrumen Mental Status Examination (MSE) adalah alat utama pemantauan harian untuk menilai aspek persepsi, proses pikir, dan kontrol impuls. Selain itu, skala penilaian klinis seperti Positive and Negative Syndrome Scale (PANSS) atau Brief Psychiatric Rating Scale (BPRS) digunakan untuk mengukur tingkat keparahan gejala psikotik secara kuantitatif serta memantau efektivitas terapi obat.\n\nDalam konteks medis, pemeriksaan laboratorium lengkap termasuk fungsi ginjal, fungsi hati, profil elektrolit, dan kadar glukosa darah sangat penting untuk menyingkirkan adanya kondisi medis umum (misalnya asidosis metabolik atau uremia) yang dapat memicu delirium dan halusinasi. Skrining toksikologi urin juga wajib dilakukan untuk mengidentifikasi apakah gejala dipicu oleh penggunaan zat psikotropika (seperti ganja, amfetamin, atau LSD) yang dapat menyerupai gejala skizofrenia primer.\n\nEvaluasi neurologis yang lebih lanjut seperti Electroencephalography (EEG) dapat dilakukan untuk menyingkirkan adanya epilepsi lobus temporal, sementara pencitraan otak (CT-Scan atau MRI) diindikasikan jika terdapat kecurigaan adanya lesi massa, stroke, atau kondisi neurologis destruktif lainnya. Pemeriksaan penunjang ini dilakukan secara kolaboratif antara tim multidisiplin (Psikiater, Perawat Spesialis, Psikolog, dan Radiolog) untuk memastikan bahwa diagnosis yang diasuh adalah murni gangguan psikiatri primer dan bukan sekunder akibat gangguan fisik.",
      penatalaksanaan_medis:
        "Penatalaksanaan medis utama untuk halusinasi berfokus pada terapi psikofarmaka menggunakan agen antipsikotik untuk menstabilkan neurotransmisi di otak. Obat golongan First Generation Antipsychotics (FGA) seperti Haloperidol bekerja efektif pada reseptor D2 untuk menekan gejala positif namun memiliki risiko efek samping ekstrapiramidal (EPS) yang signifikan. Oleh karena itu, penggunaan Second Generation Antipsychotics (SGA) seperti Risperidone, Olanzapine, Quetiapine, atau Clozapine lebih diutamakan karena kemampuannya dalam meregulasi dopamin dan serotonin dengan profil efek samping yang lebih aman bagi pasien.\n\nSelain farmakoterapi konvensional, penatalaksanaan medis juga mencakup intervensi biologis lainnya seperti Terapi Kejang Listrik (Electroconvulsive Therapy/ECT) pada kasus-kasus pasien psikotik yang resisten terhadap obat, menunjukkan kecenderungan bunuh diri yang ekstrim, atau dalam kondisi katatonik. ECT bekerja dengan cara menyeimbangkan secara cepat aktivitas listrik dan neurokimia di seluruh area otak untuk meredakan gejala psikotik yang parah dan mengembalikan fungsionalitas kognitif pasien.\n\nStrategi medis jangka pendek juga meliputi manajemen krisis di unit perawatan akut untuk menjaga keselamatan pasien melalui pembatasan lingkungan atau isolasi sementara jika terjadi agresi ekstrem. Kerjasama tim medis dalam melakukan penyesuaian dosis obat dan pemantauan efek samping metabolik (seperti peningkatan berat badan atau profil lipid darah) sangat krusial dalam keberhasilan terapi jangka panjang. Tujuan akhir dari penatalaksanaan medis adalah remisi gejala klinis sehingga pasien dapat melanjutkan ke fase rehabilitasi psikososial.",
      pathway:
        "Faktor Biologis/Genetika + Stressor Psikososial -> Koping Maladaptif -> Isolasi Sosial -> Penarikan Diri -> Stimulus Internal Dominan -> Gangguan Persepsi Sensori: Halusinasi -> Risiko Perilaku Kekerasan.",
      fokus_pengkajian:
        "Fokus pengkajian keperawatan pada pasien halusinasi harus dilakukan secara sistematis mulai dari identifikasi karakteristik halusinasi hingga respon yang dimunculkan pasien. Perawat perlu menanyakan secara detail mengenai jenis halusinasi (pendengaran, dll), isi halusinasi (pesan yang didengar/dilihat), frekuensi kemunculannya (berapa kali dalam sehari), durasi (berapa lama berlangsung), serta waktu-waktu kritis di mana halusinasi tersebut muncul (misal: saat sendirian atau saat malam hari).\n\nAspek selanjutnya adalah pengkajian terhadap situasi pemicu (stresor) yang meningkatkan intensitas halusinasi, seperti perasaan kesepian, marah, atau sedih. Perawat juga harus mengkaji respons emosional pasien saat halusinasi datang (marah, takut, atau senang) serta apa yang biasanya dilakukan pasien untuk menghentikannya (mekanisme koping individu). Validasi data dengan keluarga atau catatan medis sebelumnya sangat diperlukan untuk mengidentifikasi pola kekambuhan di masa lalu.\n\nSelain persepsi, pengkajian fisik secara teliti juga dilakukan untuk mendeteksi tanda-tanda kelelahan akibat kurang tidur atau tanda-tanda malnutrisi karena pasien takut makan akibat halusinasinya. Pengkajian status mental meliputi penampilan, perilaku, afek, dan orientasi pasien terhadap realita (Waktu, Tempat, Orang). Data yang dikumpulkan melalui pengkajian ini akan menjadi dasar utama dalam menentukan prioritas diagnosa keperawatan dan menyusun intervensi Strategi Pelaksanaan (SP) yang tepat bagi pasien.",
      rentang_respon:
        "Rentang respons neurobiologis merupakan konsep fundamental dalam keperawatan jiwa yang menempatkan halusinasi sebagai bagian dari respons maladaptif individu. Di ujung spektrum Respons Adaptif, individu mampu berpikir logis, memiliki persepsi yang akurat terhadap lingkungan, emosi yang konsisten dengan pengalaman, serta perilaku sosial yang sesuai dengan norma. Pada tahap ini, ego mampu mengelola stresor dengan cara yang konstruktif dan membedakan antara realitas internal dan eksternal secara tegas.\n\nDi area tengah atau Respons Antara, individu mulai menunjukkan distorsi persepsi ringan seperti ilusi, pikiran yang kadang-kadang menyimpang (misal: curiga ringan), menarik diri sementara dari interaksi, serta emosi yang tidak stabil. Jika stresor terus berlanjut tanpa koping yang adekuat, individu akan bergeser ke arah Respons Maladaptif, yang ditandai dengan gangguan pikiran (waham), gangguan persepsi sensori (halusinasi), isolasi sosial yang berat, serta perilaku yang tidak teroganisir dan membahayakan.\n\nHalusinasi menempati posisi maladaptif karena menunjukkan kegagalan total dari sistem neurobiologis untuk menghargai realitas. Memahami rentang respons ini membantu perawat untuk menentukan posisi klinis pasien saat ini dan merencanakan intervensi untuk 'menggerakkan' pasien kembali ke arah respons yang adaptif. Setiap kemajuan kecil dalam interaksi sosial atau pengenalan realitas dianggap sebagai pergeseran positif dalam rentang respons neurobiologis ini.",
      mekanisme_koping:
        "Mekanisme koping pada pasien halusinasi seringkali tidak efektif dan bersifat regresif dalam upaya melindungi diri dari kecemasan yang luar biasa. Contoh koping maladaptif yang sering digunakan meliputi Denial (mengingkari adanya penyakit), Proyeksi (melemparkan perasaan internal yang negatif ke dunia luar dalam bentuk halusinasi), serta Withdrawal (menarik diri secara total dari interaksi untuk menghindari keharusan membedakan realitas). Pola koping ini, meskipun memberikan perlindungan sementara, justru semakin memperparah isolasi pasien dan mengukuhkan pengalaman halusinasinya.\n\nTujuan utama asuhan keperawatan adalah membantu pasien mengembangkan mekanisme koping yang lebih adaptif dan konstruktif. Hal ini dimulai dengan pengenalan diri (insight) bahwa apa yang dialami adalah suatu bentuk gejala penyakit yang bisa dikontrol. Koping adaptif meliputi penggunaan teknik distraksi aktif (seperti bercakap-cakap dengan orang lain), teknik konfrontasi sadar (menghardik halusinasi), serta keterlibatan aktif dalam rutinitas kegiatan harian yang terstruktur untuk menjatuhkan dominasi pikiran internal.\n\nSelain koping mandiri, pemanfaatan sistem pendukung (social support) seperti keluarga dan teman sebaya juga merupakan bentuk koping eksternal yang vital. Kemampuan pasien untuk mengekspresikan perasaannya secara verbal kepada perawat daripada menindaklanjuti bisikan halusinasinya merupakan indikator keberhasilan pengembangan mekanisme koping yang baru. Perawat berperan sebagai agen perubahan (change agent) yang membimbing pasien untuk beralih dari koping yang merusak diri sendiri menuju koping yang mempromosikan pemulihan dan resiliensi.",
      masalah_keperawatan: [
        "Gangguan Persepsi Sensori: Halusinasi",
        "Isolasi Sosial",
        "Risiko Perilaku Kekerasan",
        "Harga Diri Rendah Kronik",
      ],
      sp_pasien:
        "Strategi Pelaksanaan (SP) untuk pasien dengan halusinasi disusun secara sistematis dan bertahap untuk membangun kemampuan koping mandiri dalam mengontrol gejala.\n\n**SP 1: Mengenal halusinasi dan latihan menghardik.** Langkah klinisnya meliputi membantu pasien mengidentifikasi jenis, isi, waktu, frekuensi, situasi pemicu, dan respons pasien terhadap halusinasi. Setelah itu, perawat mengajarkan dan melatih teknik menghardik, yaitu upaya sengaja untuk menghentikan halusinasi dengan menutup telinga dan berteriak dalam hati (atau secara lisan jika aman): 'Pergi kamu suara palsu, saya tidak mau dengar!' hingga halusinasi menghilang.\n\n**SP 2: Mengontrol halusinasi dengan penggunaan obat secara teratur.** Perawat memberikan edukasi mendalam mengenai prinsip 8 benar obat (Benar Pasien, Obat, Dosis, Waktu, Rute, Dokumentasi, Manfaat, dan Verifikasi). Pasien dilatih untuk memahami manfaat obat dalam menstabilkan neurotransmiter dan cara mengatasi efek samping ringan seperti mulut kering atau mengantuk agar tidak terjadi putus obat.\n\n**SP 3: Mengontrol halusinasi dengan bercakap-cakap.** Pasien dilatih untuk aktif mencari orang lain (perawat, teman sebaya, atau keluarga) saat halusinasi mulai muncul untuk mengalihkan fokus dari stimulus internal ke interaksi interpersonal yang nyata di dunia luar. Ini melatih kemampuan sosialisasi dan validasi realitas pasien secara bersamaan.\n\n**SP 4: Mengontrol halusinasi dengan melakukan aktivitas terjadwal.** Perawat membantu pasien menyusun jadwal aktivitas harian mulai dari bangun pagi hingga tidur malam. Dengan melakukan aktivitas yang terarah dan bermakna (seperti merapikan tempat tidur, senam, atau rekreasi), ruang kosong bagi otak untuk melamun dan memancing halusinasi dapat diminimalisir secara signifikan.",
      sp_keluarga:
        "Strategi Pelaksanaan (SP) keluarga bertujuan untuk memberdayakan sistem pendukung utama pasien dalam mempertahankan pemulihan di lingkungan rumah.\n\n**SP 1: Edukasi mengenai masalah halusinasi dan cara merawat.** Keluarga diajarkan untuk mengenali tanda awal kekambuhan dan gejala aktif halusinasi pada anggota keluarganya. Keluarga dilarang untuk mendebat isi halusinasi tetapi juga tidak boleh membenarkannya, melainkan harus membujuk pasien untuk menggunakan teknik kontrol yang telah dipelajari.\n\n**SP 2: Melatih keluarga cara merawat pasien secara langsung.** Perawat membimbing keluarga dalam mempraktikkan cara berbicara yang tenang namun tegas saat pasien halusinasi, serta cara memberikan pujian (reinforcement positif) saat pasien berhasil menggunakan teknik menghardik atau bercakap-cakap.\n\n**SP 3: Membuat rencana tindak lanjut (discharge planning) dan pengawasan obat.** Keluarga dibantu untuk merinci jadwal pemberian obat di rumah, cara mendapatkan bantuan medis darurat jika pasien menjadi agresif, serta pentingnya rutin membawa pasien kontrol ke poliklinik atau puskesmas terdekat untuk mencegah kekambuhan jangka panjang.",
      discharge_planning:
        "1. Pasien mampu mengenali tanda-tanda awal kembalinya halusinasi.\n2. Pasien mahir melakukan minimal dua teknik mengontrol halusinasi secara mandiri.\n3. Pasien mematuhi jadwal minum obat dengan pengawasan keluarga.\n4. Keluarga memiliki pengetahuan dan kesiapan fisik untuk mendampingi pasien di rumah.\n5. Tersedianya lingkungan rumah yang aman, tenang, dan minim stresor bagi pasien.\n6. Adanya jadwal kontrol rutin ke fasilitas pelayanan kesehatan jiwa terdekat.",
      edukasi_keluarga:
        "Edukasi keluarga menekankan pada pentingnya kesabaran dan dukungan tanpa menghakimi. Jelaskan bahwa halusinasi adalah gejala biologis dari penyakit dan bukan kemauan pasien. Keluarga disarankan untuk rutin mengajak pasien berinteraksi sosial secara bertahap dan memastikan pasien tidak menghabiskan waktu sendirian di kamar dalam waktu yang lama. Dukungan keluarga yang stabil adalah faktor protektif terpenting untuk mencegah rawat inap ulang (readmission).",
      pohon_masalah:
        "Risiko Perilaku Kekerasan <- Halusinasi <- Isolasi Sosial <- Harga Diri Rendah",
      obat_rekomendasi: [
        "Haloperidol (Haldol/Govotil)",
        "Risperidone (Risperdal/Persidal)",
        "Chlorpromazine (Largactil/CPZ)",
        "Clozapine (Clozril/Sizoril)",
      ],
      referensi: [
        "PPNI (2016). Standar Diagnosis Keperawatan Indonesia (SDKI). Jakarta: DPP PPNI.",
        "PPNI (2018). Standar Intervensi Keperawatan Indonesia (SIKI). Jakarta: DPP PPNI.",
        "PPNI (2019). Standar Luaran Keperawatan Indonesia (SLKI). Jakarta: DPP PPNI.",
        "Stuart, G.W. (2013). Principles and Practice of Psychiatric Nursing. 10th Ed. Elsevier.",
        "Townsend, M.C. (2015). Psychiatric Mental Health Nursing. 8th Ed. F.A. Davis Company.",
      ],
    },
    {
      id: "waham",
      kategori: "ASKEP JIWA DIAGNOSIS GANGGUAN JIWA",
      nama: "2. Gangguan Proses Pikir: Waham",
      sdki: "D.0105",
      definisi:
        "Waham atau delusi merupakan suatu keyakinan yang salah, bersifat kokoh (fixed), dan tidak dapat dikoreksi meskipun telah diberikan bukti nyata yang bertentangan atau alasan yang logis. Secara akademik, waham dipahami sebagai kegagalan dalam fungsi penilaian realitas (reality testing) dan integrasi informasi kognitif di dalam otak. Keyakinan ini biasanya tidak sesuai dengan latar belakang budaya, pendidikan, atau lingkungan sosial pasien.\n\nDalam praktik keperawatan jiwa profesional, waham mencerminkan upaya ego individu untuk mempertahankan diri dari rasa takut, rendah diri, atau keputusasaan yang ekstrem dengan menciptakan realitas baru yang memberikan perasaan aman atau superior. Menurut Stuart (2013), waham adalah gangguan isi pikir yang sering ditemukan pada skizofrenia paranois dan gangguan mood dengan fitur psikotik. Keyakinan tersebut merasuki seluruh kehidupan pasien, sehingga memengaruhi emosi, perilaku interaksi, dan fungsionalitas sosial mereka secara keseluruhan.\n\nKlasifikasi waham sangat beragam, meliputi waham kebesaran (magnificence), waham curiga (paranoia), waham agama, waham somatik, hingga waham nihilistik. Penting bagi perawat untuk memahami bahwa bagi pasien, pengalaman waham ini terasa sangat nyata dan mendalam, sehingga setiap upaya kasar dalam mengoreksi atau mendebat waham tersebut justru akan merusak hubungan terapeutik antara perawat dan pasien. Sebagai pakar, kita melihat waham bukan hanya sebagai error kognitif, melainkan sebagai mekanisme pertahanan diri yang sangat kompleks guna menjaga sisa integritas psikis individu yang rapuh.",
      etiologi:
        "Etiologi waham bersifat kompleks dan melibatkan komponen genetik, biologis, serta lingkungan psikososial. Secara biologis, kegagalan neurokognitif dalam memproses informasi di korteks prefrontal dikombinasikan dengan deregulasi dopamin di jalur mesokortikal menjadi dasar terjadinya distorsi isi pikir. Penelitian neuroimaging menunjukkan adanya penurunan volume otak dan anomali metabolisme glukosa pada area otak yang bertanggung jawab atas logika dan pengambilan keputusan.\n\nFaktor psikologis memegang peranan kunci sebagai pemicu munculnya waham. Keberadaan mekanisme pertahanan diri 'proyeksi' yang berlebihan memungkinkan pasien untuk mengatribusikan ketidakpuasan internal atau rasa bersalah mereka kepada pihak luar. Misalnya, pada waham kebesaran, individu mungkin mencoba menutupi rasa rendah diri yang mendalam dengan menciptakan identitas sebagai tokoh penting. Sebaliknya, pada waham curiga, perasaan tidak aman diubah menjadi keyakinan bahwa orang lain sedang merencanakan kejahatan terhadap dirinya.\n\nStresor lingkungan (faktor presipitasi) seperti kegagalan hidup yang berulang, isolasi sosial, migrasi ke tempat asing, atau paparan kronis terhadap situasi trauma juga berkontribusi besar. Ketidakmampuan individu untuk menoleransi ambiguitas dan kebutuhan mendesak akan 'penjelasan' atas perasaan internal yang kacau menyebabkan otak 'terkunci' pada satu keyakinan tunggal yang kaku (waham) sebagai cara untuk menyusun kembali dunia mereka yang berantakan. Interaksi antara kerentanan biologis dan beban stres yang tinggi menciptakan kondisi di mana batas antara fantasi internal dan fakta eksternal menjadi hilang.",
      manifestasi_klinis:
        "Manifestasi klinis waham sangat bergantung pada jenis waham yang dialami namun secara umum ditandai dengan perubahan pola komunikasi dan perilaku yang tampak janggal. Pada pasien dengan waham kebesaran, mereka mungkin berbicara dengan nada sombong, mengklaim memiliki kekayaan luar biasa, atau memiliki hubungan istimewa dengan Tuhan atau tokoh politik terkenal. Sebaliknya, pasien dengan waham curiga tampak terus-menerus waspada, sering melirik ke arah pintu atau jendela, menolak makanan karena takut diracun, dan bersikap bermusuhan terhadap orang asing.\n\nPerilaku objektif yang umum meliputi ketidakmampuan untuk fokus pada topik pembicaraan lain di luar isi wahamnya (tangensialitas). Pasien mungkin tampak sangat emosional saat mempertahankan keyakinannya dan menjadi agresif jika merasa wahamnya terancam. Dalam jangka panjang, manifestasi klinis ini menyebabkan disrupsi total dalam pekerjaan, hubungan keluarga, dan perawatan diri, karena seluruh energi kognitif pasien terserap untuk mempertahankan dan bertindak berdasarkan keyakinan delusi tersebut.\n\nKondisi fisik pasien sering kali terabaikan, terutama pada waham somatik di mana pasien mungkin melakukan tindakan medis yang tidak perlu atau justru mengabaikan kebutuhan dasar karena keyakinan tubuhnya telah hancur. Progresivitas waham dapat memicu kecemasan tingkat panik dan penarikan diri sosial yang total, menciptakan hambatan komunikasi yang sangat sulit untuk dipulihkan tanpa intervensi farmakologis dan psikososial yang intensif. Secara akademis, manifestasi ini adalah ekspresi dari kegagalan fungsi adaptasi ego yang kronis.",
      patofisiologi:
        "Patofisiologi waham melibatkan gangguan pada sirkuit saraf yang mengatur fungsi 'belief formation' dan 'reality monitoring'. Di level seluler, terjadi disfungsi pada transmisi sinyal glutamat dan dopamin yang menyebabkan kegagalan otak dalam mengevaluasi kesalahan prediksi (prediction error). Secara normal, ketika kita menerima informasi yang bertentangan dengan keyakinan kita, otak akan memperbarui model realitasnya. Namun, pada pasien waham, mekanisme pembaruan ini 'rusak', sehingga informasi baru yang logis diabaikan atau justru diintegrasikan ke dalam waham yang sudah ada (confirmation bias).\n\nArea otak yang paling terlibat adalah Lateral Prefrontal Cortex (LPFC) dan Anterior Cingulate Cortex (ACC). LPFC bertanggung jawab atas penalaran logis dan pengendalian impuls, sementara ACC berfungsi mendeteksi konflik antara ekspektasi dan kenyataan. Penurunan aktivitas di area ini menyebabkan pasien kehilangan 'rem' kognitif untuk menghentikan pikiran-pikiran yang tidak rasional. Akibatnya, pikiran yang muncul secara acak atau emosional langsung diterima sebagai kebenaran absolut tanpa melalui tahap verifikasi logis.\n\nSecara psikodinamika, waham berfungsi sebagai tameng pelindung (buffer) terhadap fragmentasi ego. Ketika stresor melebihi kapasitas adaptasi individu, integritas kepribadian mulai pecah. Waham muncul sebagai upaya penyembuhan diri sendiri (self-healing attempt) dari otak untuk menciptakan makna di tengah kekacauan internal. Meskipun waham tersebut tidak adaptif secara sosial, bagi struktur psikis pasien, waham tersebut memberikan koordinat atau pijakan untuk tetap 'berdiri' meskipun dalam realita yang terdistorsi secara parah. Pola ini mengukuhkan dominasi proses sekunder pikiran (irrational process) atas proses primer yang logis.",
      tanda_gejala:
        "Tanda dan gejala waham dikelompokkan menjadi subjektif dan objektif untuk menentukan jenis dan intensitas gangguan isi pikir tersebut. Gejala Subjektif meliputi pernyataan pasien yang secara konsisten mempertahankan keyakinan yang tidak realistis, seperti merasa dikejar-kejar oleh intelijen (curiga), merasa memiliki kekuasaan gaib (kebesaran), merasa organ tubuhnya tidak berfungsi (somatik), atau merasa dirinya sudah mati (nihilistik). Pasien seringkali mengungkapkan ketakutan, amarah, atau rasa sombong yang mendalam terkait dengan isi keyakinannya tersebut.\n\nTanda Objektif meliputi perilaku defensif atau sangat waspada, sikap curiga terhadap perawat dan lingkungan, ketidakkonsistenan antara ucapan dan kenyataan (misal: mengaku kaya tapi berpakaian lusuh), serta pembicaraan yang berputar-putar (sirkumstansial) atau berpindah-pindah topik namun selalu kembali ke isi wahamnya. Pasien mungkin menunjukkan reaksi emosional yang tidak stabil, seperti tiba-tiba menangis atau berteriak jika wahamnya dibantah. Selain itu, sering ditemukan adanya hambatan dalam interaksi sosial dan ketidakmampuan dalam mengambil keputusan sehari-hari.\n\nPerawat juga harus mengamati adanya tanda-tanda yang menyertai gangguan isi pikir tersebut, seperti kesulitan tidur karena ketakutan (pada waham curiga), penurunan nafsu makan (takut racun), atau pengabaian higiene diri. Dokumentasi yang rinci mengenai stabilitas waham dari hari ke hari sangat penting, karena kemunculan keraguan (doubt) terhadap waham merupakan tanda awal kemajuan terapeutik yang positif. Perawat ahli harus mampu menilai derajat keterikatan pasien terhadap wahamnya (conviction) dan dampaknya terhadap pengendalian impuls.",
      pemeriksaan_penunjang:
        "Pemeriksaan penunjang pada pasien waham difokuskan pada penilaian gangguan proses pikir dan pengesampingan faktor delirium atau organik. Instrumen kognitif standar seperti Mental Status Examination (MSE) yang komprehensif mendokumentasikan penampilan, perilaku, afek, dan khususnya proses pikir serta isi pikir secara sistematis. Evaluasi psikiatri yang mendalam menggunakan skala PANSS (Positive and Negative Syndrome Scale) tetap menjadi standar utama untuk mengklasifikasikan waham sebagai bagian dari gejala psikotik positif dan membedakannya dari gangguan delusional menetap.\n\nPemeriksaan neurologis (CT-scan atau MRI) sangat direkomendasikan jika waham muncul secara mendadak pada usia lanjut atau disertai dengan gejala fisik neurologis lain, guna memastikan tidak ada tumor otak, stroke, atau demensia vaskuler. Pemeriksaan laboratorium darah, termasuk profil elektrolit, fungsi ginjal dan hati, serta tes skrining zat narkoba (drug testing), wajib dilakukan untuk menyingkirkan kemungkinan waham yang dipicu oleh toksisitas atau gangguan metabolik yang memengaruhi fungsi kognitif otak secara akut.\n\nSelain itu, tes psikologis proyektif atau objektif (seperti MMPI-2) terkadang digunakan oleh psikolog klinis untuk memahami profil kepribadian dan dinamika pertahanan ego yang mendasari isi waham tersebut. Hasil dari seluruh pemeriksaan ini diintegrasikan ke dalam diagnosis medis yang komprehensif, membantu tim medis membedakan antara gangguan waham, skizofrenia, atau gangguan mood dengan ciri psikotik, sehingga rencana asuhan dapat dilakukan secara presisi.",
      penatalaksanaan_medis:
        "Penatalaksanaan medis utama untuk waham adalah pemberian obat antipsikotik, khususnya golongan atipikal generasi kedua seperti Risperidone, Olanzapine, atau Quetiapine. Obat-obat ini bekerja dengan menyeimbangkan neurotransmisi dopamin pada jalur mesokortikal dan serotonin, yang membantu 'melunakkan' kekakuan kognitif pasien sehingga mereka dapat secara bertahap mempertanyakan kembali keyakinan wahamnya. Pada kasus waham curiga yang disertai agitasi hebat, pemberian antipsikotik dosis sedang hingga tinggi melalui sediaan injeksi jangka pendek mungkin diperlukan untuk stabilisasi emosional.\n\nPsikoterapi kognitif-perilaku (CBT) untuk psikosis mulai banyak diterapkan sebagai terapi tambahan yang efektif. Melalui CBT, pasien diajari teknik 'distancing' dan evaluasi bukti secara perlahan tanpa konfrontasi langsung yang bersifat menyerang terhadap isi waham. Terapi non-farmakologis penting lainnya meliputi Terapi Aktivitas Kelompok (TAK) yang berfokus pada orientasi realitas, di mana pasien diajak untuk berinteraksi dengan lingkungan nyata dalam setting sosial yang terkontrol dan suportif.\n\nPerawatan rawat inap (inpatient care) diperlukan pada fase akut guna memastikan kepatuhan minum obat dan pemantauan efek samping metabolik atau ekstrapiramidal. Pengaturan lingkungan yang tenang dan meminimalkan stimulasi yang ambigu (seperti bisikan liar atau berita media yang provokatif) sangat krusial untuk mencegah eskalasi waham curiga. Dukungan tim multidisiplin memastikan bahwa intervensi medis berjalan selaras dengan pendekatan keperawatan komprehensif guna mencapai pemulihan kognitif dan fungsional yang optimal.",
      pathway:
        "Gagalnya Reality Testing -> Distorsi Isi Pikir -> Mekanisme Proyeksi yang Masif -> Keyakinan Salah yang Kokoh & Invariant -> Gangguan Proses Pikir: Waham -> Kerusakan Komunikasi Verbal -> Isolasi Sosial.",
      fokus_pengkajian:
        "Fokus pengkajian pada pasien waham adalah pada eksplorasi isi pikiran tanpa melakukan konfrontasi langsung yang dapat memicu resistensi. Perawat harus mengidentifikasi jenis waham, kapan waham tersebut mulai muncul, stresor apa yang mendahuluinya, serta sejauh mana waham tersebut mendikte perilaku harian pasien. Pengkajian harus dilakukan dengan sikap empati untuk membangun aliansi terapeutik, karena pasien waham seringkali merasa terancam dan tidak dipercaya oleh lingkungannya.\n\nAspek status mental yang krusial untuk dikaji meliputi arus pikir (apakah ada flight of ideas, neologisme, atau blocking), isi pikir (ide bunuh diri, obsesi, atau fobia), serta daya nilai diri (insight) pasien terhadap kondisinya. Perawat juga wajib mengkaji aspek keamanan: Apakah isi waham tersebut mendorong pasien untuk mencederai diri sendiri atau orang lain? Sejauh mana dukungan keluarga yang tersedia dan apakah keluarga cenderung memfasilitasi atau justru membantah waham pasien secara destruktif?\n\nKondisi fisik juga memerlukan perhatian ekstra, terutama pemenuhan nutrisi dan eliminasi jika pasien takut makan/minum karena waham racun. Observasi saksama terhadap respon non-verbal pasien saat mengartikulasikan wahamnya (peningkatan ketegangan otot, dilatasi pupil, atau perubahan nada suara) memberikan data objektif mengenai intensitas afek yang menyertai distorsi pikir tersebut. Seluruh rangkaian pengkajian ini menjadi dasar kokoh dalam perumusan intervensi keperawatan primer.",
      rentang_respon:
        "Dalam rentang respons neurobiologis keperawatan jiwa, waham berada pada titik maladaptif yang mencerminkan gangguan proses pikir yang signifikan. Spektrum ini dimulai dari Respons Adaptif (pikiran logis, persepsi akurat, hubungan interpersonal harmonis), berlanjut ke Respons Antara (distorsi pikiran ringan, ilusi, dan menarik diri sementara dari stresor), hingga mencapai Respons Maladaptif (waham, halusinasi, dan perilaku autistik/tidak terorganisir).\n\nWaham menunjukkan kegagalan total dari fungsi ego untuk menengahi konflik antara dorongan internal dan sensor data dari dunia luar. Pasien tidak lagi mampu menggunakan logika formal sebagai cara utama dalam memproses informasi, melainkan menggantinya dengan logika delusif yang regresif. Pemahaman perawat tentang posisi pasien dalam rentang ini penting bukan hanya untuk penatalaksanaan klinis, tetapi juga untuk memberikan edukasi yang realistis kepada keluarga mengenai tingkat pemulihan yang diharapkan.\n\nIntervensi keperawatan bertujuan untuk membantu pasien bergeser secara bertahap dari respons maladaptif menuju respons yang lebih adaptif dengan cara memperkuat mekanisme orientasi realitas dan kemampuan sosial. Meskipun waham menetap mungkin tidak hilang secara instan, kemampuan pasien untuk mengelola kecemasan dan tetap berinteraksi secara fungsional merupakan indikator kunci dari pergerakan positif dalam rentang respons neurobiologis ini.",
      mekanisme_koping:
        "Mekanisme koping yang dominan pada pasien waham adalah proyeksi, simbolisasi, dan formasi reaksi. Proyeksi memungkinkan pasien untuk mengalihkan konflik internal atau rasa rendah diri yang tak tertahankan ke sumber eksternal, sehingga mereka merasa bukan diri mereka yang bermasalah, melainkan dunia luar yang menjadi ancaman. Simbolisasi digunakan untuk memberikan makna khusus pada benda atau kejadian biasa guna mendukung struktur wahamnya. Formasi reaksi digunakan untuk menutupi perasaan takut yang dalam dengan menunjukkan sikap superioritas melalui waham kebesaran.\n\nTujuan asuhan keperawatan adalah melatih mekanisme koping adaptif yang baru untuk menggantikan pola yang defensif tadi. Pasien diajari untuk mengenali gejala kecemasan somatik yang mendahului eskalasi pikiran waham dan segera melakukan teknik manajemen stres untuk menenangkannya. Pasien juga didorong untuk meningkatkan 'Social Seeking Behavior' â€“ mencari validasi dari staf atau keluarga yang dipercayainya mengenai interpretasi suatu kejadian sebelum menerimanya sebagai fakta.\n\nKepatuhan terhadap rejimen psikofarmaka juga merupakan bentuk koping fisik yang harus ditekankan secara konsisten. Kemampuan pasien untuk tetap melakukan ADL secara mandiri dan berpartisipasi dalam terapi aktivitas menunjukkan bahwa mereka mulai menggunakan koping yang lebih fungsional untuk mengontrol diri dan lingkungan. Dukungan emosional yang konsisten dari perawat jiwa berperan sebagai 'jembatan' bagi pasien untuk berani melepaskan koping maladaptif waham mereka dan kembali ke realitas.",
      masalah_keperawatan: [
        "Gangguan Proses Pikir: Waham",
        "Gangguan Komunikasi Verbal",
        "Risiko Perilaku Kekerasan",
        "Harga Diri Rendah Kronik",
        "Isolasi Sosial",
      ],
      sp_pasien:
        "Strategi Pelaksanaan (SP) untuk pasien waham difokuskan pada pemenuhan kebutuhan dasar, penguatan orientasi realitas, dan latihan kemampuan positif.\n\n**SP 1: Memenuhi kebutuhan dasar dan melatih orientasi realitas.** Perawat memvalidasi kebutuhan fisik pasien (makan, minum, keamanan) tanpa mendukung atau membantah isi wahamnya. Perawat menggunakan teknik pengalihan ke realitas dengan membicarakan topik-topik nyata di sekitar (waktu, orang, tempat) secara konsisten namun lembut.\n\n**SP 2: Mengidentifikasi dan melatih kemampuan positif yang dimiliki.** Perawat menggali bakat atau keterampilan yang masih dikuasai pasien (seperti menulis, merapikan ruangan, atau kerajinan tangan). Melatih kemampuan ini memberikan rasa keberdayaan (empowerment) pada pasien, sehingga kebutuhan ego akan pengakuan tidak lagi harus dipenuhi melalui waham kebesaran.\n\n**SP 3: Melatih cara memilih dan mengikuti jadwal kegiatan harian.** Pasien dibimbing untuk menyusun rencana aktivitas rutin dari pagi hingga malam. Keterlibatan dalam rutinitas yang terstruktur menjaga pikiran tetap terfokus pada tugas-tugas nyata dan mengurangi durasi waktu yang tersedia bagi pengolahan proses pikir delusif.\n\n**SP 4: Melatih kepatuhan minum obat dengan prinsip 8 benar.** Edukasi mendalam mengenai peran obat dalam membantu menjernihkan pikiran (menurunkan kecemasan) agar pasien bisa lebih produktif melakukan hobinya. Penekanan pada pengenalan manfaat hasil jangka panjang dan mitigasi efek samping obat secara kolaboratif.",
      sp_keluarga:
        "Intervensi keluarga bertujuan untuk memberdayakan sistem pendukung utama dalam mengomunikasikan realitas secara aman di rumah.\n\n**SP 1: Edukasi mengenai waham dan cara menghadapinya.** Keluarga diajarkan untuk tidak menentang waham pasien secara agresif (yang akan merusak hubungan) namun juga tidak boleh menyetujui isi waham tersebut. Keluarga dilatih untuk menunjukkan empati terhadap perasaan pasien namun tetap berdiri di atas fakta realitas.\n\n**SP 2: Melatih keterampilan cara mendukung pasien di rumah.** Keluarga dibantu untuk mempraktikkan cara memotivasi pasien melakukan kemampuannya dan memberikan pujian tulus atas setiap perilaku yang berbasis realitas. Perawat mengajarkan cara mengalihkan pembicaraan pasien yang mulai delusif ke topik keluarga yang netral dan menyenangkan.\n\n**SP 3: Menyusun rencana tindak lanjut dan pencegahan kekambuhan.** Edukasi mengenai tanda-tanda awal eskalasi waham, pentingnya lingkungan rumah yang tenang, serta pengawasan minum obat yang ketat. Keluarga didorong untuk rutin membawa pasien kontrol ke fasilitas kesehatan dan menjaga komunikasi terbuka dengan tim medis.",
      discharge_planning:
        "1. Pasien mampu membedakan pikiran internal (waham) dengan fakta eksternal (realitas).\n2. Pasien terlibat aktif dalam kegiatan unit rawat inap dan ADL mandiri.\n3. Keluarga memahami dan mahir dalam melakukan komunikasi terapeutik yang tidak konfrontatif terhadap pasien waham di rumah.\n4. Tersedianya jadwal pengobatan rutin dan kontrol berkala yang jelas bagi pasien.\n5. Pasien mampu menggunakan teknik relaksasi saat kecemasan memicu pikiran waham muncul.",
      edukasi_keluarga:
        "Keluarga harus konsisten memberikan penguatan positif terhadap setiap pernyataan pasien yang logis dan nyata. Hindari perdebatan sengit mengenai keyakinan pasien karena hal tersebut hanya akan mengukuhkan wahamnya. Jelaskan kepada anggota keluarga lain bahwa waham adalah manifestasi dari gangguan otak yang membutuhkan perawatan medis dan psikososial secara berkesinambungan.",
      pohon_masalah:
        "Risiko Perilaku Kekerasan <- Waham <- Harga Diri Rendah Kronis <- Kerusakan Komunikasi Verbal",
      obat_rekomendasi: [
        "Risperidone (Persidal/Risperdal)",
        "Olanzapine (Zyprexa/Onzapin)",
        "Quetiapine (Seroquel)",
        "Haloperidol (Govotil/Haldol)",
      ],
      referensi: [
        "PPNI (2016). Standar Diagnosis Keperawatan Indonesia (SDKI). Jakarta: DPP PPNI.",
        "PPNI (2018). Standar Intervensi Keperawatan Indonesia (SIKI). Jakarta: DPP PPNI.",
        "PPNI (2019). Standar Luaran Keperawatan Indonesia (SLKI). Jakarta: DPP PPNI.",
        "Stuart, G.W. (2013). Principles and Practice of Psychiatric Nursing. 10th Ed. Elsevier.",
        "Townsend, M.C. (2015). Psychiatric Mental Health Nursing. 8th Ed. F.A. Davis Company.",
      ],
    },
    {
      id: "hdr-kronik",
      kategori: "ASKEP JIWA DIAGNOSIS GANGGUAN JIWA",
      nama: "3. Harga Diri Rendah Kronik",
      sdki: "D.0087",
      definisi:
        "Harga Diri Rendah Kronik (Chronic Low Self-Esteem) merupakan evaluasi diri negatif yang menetap dan perasaan tidak berdaya yang berlangsung dalam jangka waktu lama (minimal 3-6 bulan). Secara akademik, kondisi ini didefinisikan sebagai gangguan pada konsep diri di mana individu gagal mengintegrasikan aspek positif dari kepribadiannya ke dalam kesadaran diri, sehingga yang muncul adalah perasaan tidak berharga, tidak bermakna, dan penampikan diri sendiri secara total.\n\nDalam perspektif keperawatan jiwa profesional, HDR kronik bukan sekadar perasaan sedih biasa, melainkan hasil dari akumulasi pengalaman negatif yang terinternalisasi secara mendalam. Menurut Stuart (2013), harga diri rendah adalah pusat dari hampir seluruh gangguan jiwa maladaptif. Pasien dengan HDR kronik seringkali memiliki 'internal critic' yang sangat kejam, yang secara konstan merusak motivasi mereka untuk berinteraksi atau mencoba hal baru dalam hidup.\n\nManifestasi dari HDR kronik seringkali bersifat sistemik, memengaruhi aspek kognitif (pesimisme), afektif (kesedihan mendalam), perilaku (menghindar), dan fisiologis (letargi). Perawat spesialis harus memahami bahwa HDR kronik sering menjadi faktor predisposisi bagi munculnya masalah lain yang lebih berat, seperti isolasi sosial dan halusinasi, karena individu yang tidak menghargai dirinya sendiri cenderung menarik diri dari realitas untuk menghindari penilaian dari orang lain. Sebagai pakar, kita melihat HDR kronik sebagai retaknya hubungan individu dengan esensi diri mereka sendiri.",
      etiologi:
        "Etiologi HDR kronik bersifat multifaktorial, melibatkan interaksi antara faktor predisposisi genetik-biologis dan trauma psikososial yang berkepanjangan. Secara biologis, terdapat kaitan antara penurunan kadar serotonin dan dopamin di otak dengan rendahnya motivasi dan perasaan tidak berharga. Selain itu, kelainan pada sistem limbik yang mengatur emosi dan regulasi diri sering ditemukan pada individu yang memiliki riwayat depresi kronis atau gangguan kepribadian yang mendasari HDR.\n\nFaktor psikologis memegang peranan paling signifikan sebagai pemicu utama. Pola asuh yang penuh penolakan (parental rejection), kritik yang berlebihan di masa kecil, pengabdian (neglect), atau trauma fisik dan seksual dapat membentuk fondasi skema diri yang negatif. Individu yang tidak pernah mendapatkan umpan balik positif secara konsisten gagal mengembangkan rasa keberhasilan (sense of mastery) dan sebaliknya menginternalisasi suara-suara negatif dari figur otoritas sebagai identitas asli mereka.\n\nStresor lingkungan (faktor presipitasi) seperti kegagalan akademik yang berulang, pengucilan sosial (bullying), kegagalan dalam hubungan asmara (Relationship failure), atau kehilangan status pekerjaan (PHK) dapat memicu aktivasi skema diri negatif tersebut menjadi HDR kronik. Dalam konteks sosial yang kompetitif, individu yang merasa tidak mampu memenuhi standar eksternal akan semakin mengukuhkan keyakinannya bahwa mereka adalah pribadi yang gagal. Interaksi antara kerentanan masa kecil dan tekanan masa dewasa inilah yang menyebabkan HDR menjadi kondisi yang menetap dan sulit dipatahkan tanpa intervensi yang tepat.",
      manifestasi_klinis:
        "Manifestasi klinis HDR kronik sangat khas dan dapat dideteksi melalui pengamatan mendalam terhadap pola pikir, emosi, dan perilaku motorik pasien. Secara kognitif, pasien menunjukkan pola pikir dikotomis (hitam-putih) di mana mereka melihat setiap kesalahan kecil sebagai bukti kegagalan total. Mereka sering mengungkapkan kalimat-kalimat menyalahkan diri sendiri (self-blame), ketidakyakinan akan masa depan, dan keraguan untuk mengambil keputusan yang paling sederhana sekalipun.\n\nSecara afektif, pasien tampak menunjukkan emosi yang datar atau sedih (afek sempit), mudah tersinggung namun lebih sering menarik diri, serta perasaan malu yang mendalam saat berhadapan dengan orang lain. Manifestasi perilaku objektif meliputi postur tubuh yang membungkuk (slumped posture), jarang melakukan kontak mata, berbicara dengan volume suara sangat rendah (monoton), serta gerakan motorik yang lambat (retardasi psikomotor). Pasien seringkali mengabaikan kebersihan diri karena merasa dirinya tidak layak untuk dirawat (Self-neglect).\n\nManifestasi klinis yang lebih parah mencakup perilaku destruktif pasif, seperti menolak pengobatan atau menolak bantuan rehabilitasi karena merasa tidak akan ada gunanya. Pasien dengan HDR kronik juga sering menunjukkan ketergantungan yang berlebihan pada orang tertentu atau sebaliknya menunjukkan fobia sosial yang ekstrem. Evaluasi klinis yang teliti menunjukkan bahwa manifestasi ini bukan hanya gejala, melainkan sebuah 'perisai' untuk melindungi ego pasien dari rasa sakit akibat penilaian negatif yang mereka bayangkan dari dunia luar.",
      patofisiologi:
        "Patofisiologi atau psikopatologi HDR kronik berkaitan erat dengan pembentukan Skema Kognitif Maladaptif yang menetap di sistem saraf pusat. Ketika individu terpapar stresor kronis tanpa dukungan emosional, terjadi perubahan pada plastisitas sirkuit neural di Hipokampus dan Korteks Prefrontal. Hal ini menyebabkan otak menjadi sangat sensitif terhadap kegagalan dan kurang responsif terhadap keberhasilan (Reward system dysfunction). Pikiran negatif menjadi 'default mode' operasional otak pasien.\n\nDari perspektif psikodinamika, terjadi ketidakseimbangan yang ekstrem antara Ideal Diri (apa yang ingin dicapai) dan Realita Diri (apa yang dirasakan). Kesenjangan yang lebar ini memicu ketegangan ego yang dirasakan sebagai perasaan tidak berharga. Mekanisme pertahanan diri yang biasanya digunakan adalah Introyeksi (mengambil nilai negatif luar ke dalam diri) dan Regresi (berperilaku seperti anak kecil untuk menghindari tanggung jawab). Ketidakmampuan ego untuk beradaptasi menyebabkan disintegrasi konsep diri yang semakin parah.\n\nSecara fungsional, HDR kronik menciptakan siklus umpan balik negatif (Negative Feedback Loop). Perasaan tidak berharga memicu penarikan diri (withdrawal), penarikan diri menyebabkan hilangnya kesempatan untuk mendapatkan pengalaman sukses (success experience), dan ketiadaan pengalaman sukses semakin memperkuat keyakinan awal bahwa individu tersebut tidak kompeten. Psikopatologi ini menjelaskan mengapa perubahan pada pasien HDR kronik memerlukan intervensi bertahap yang fokus pada restrukturisasi kognitif dan pembuktian realitas melalui latihan kemampuan mandiri.",
      tanda_gejala:
        "Tanda dan gejala HDR kronik diklasifikasikan menjadi Data Subjektif (DS) dan Data Objektif (DO) guna merumuskan asuhan keperawatan yang presisi. Data Subjektif mencakup ungkapan verbal pasien yang mencirikan penolakan diri. Pasien sering mengatakan: 'Saya adalah orang yang gagal,' 'Tidak ada gunanya saya mencoba lagi,' 'Semua orang lebih baik dariku,' atau 'Saya merasa tidak punya kelebihan apapun.' Pasien juga melaporkan perasaan tidak berdaya untuk mengubah nasibnya serta ketakutan yang besar akan kegagalan di masa depan.\n\nData Objektif meliputi temuan fisik dan perilaku yang dapat diobservasi langsung. Karakteristik yang paling menonjol adalah minimnya kontak mata (pandangan menunduk), berbicara pelan atau gagap, serta ekspresi wajah yang murung. Pasien tampak pasif dalam berinteraksi, lebih banyak menghabiskan waktu sendirian, atau duduk dengan bahu terkulai. Ketidakmampuan untuk melakukan tugas sederhana karena merasa 'tidak bisa' juga merupakan tanda objektif yang signifikan pada pasien dengan HDR kronik.\n\nTanda tambahan meliputi keterlambatan dalam merespon pembicaraan (low response latency), perilaku menghindar (avoidance behavior), serta pengabaian terhadap higinitas fisik (pakaian kotor, rambut acak-acakan). Pada tingkat yang kronis, gejala dapat berkembang menjadi keputusasaan yang bermanifestasi sebagai ide atau percobaan bunuh diri, karena pasien merasa keberadaan dirinya hanya menjadi beban bagi orang lain. Pengumpulan data ini harus dilakukan dengan pendekatan yang sangat sabar dan suportif agar pasien tidak merasa sedang 'dihakimi' oleh perawat.",
      pemeriksaan_penunjang:
        "Pemeriksaan penunjang untuk pasien dengan HDR kronik difokuskan pada penilaian status mental dan penggunaan skala numerik untuk mengukur derajat harga diri secara objektif. Instrumen utama yang digunakan adalah Rosenberg Self-Esteem Scale (RSES) atau Coopersmith Self-Esteem Inventory. Selain itu, Mental Status Examination (MSE) secara mendalam pada aspek Konsep Diri (Ideal Diri, Gambaran Diri, Identitas, Peran, dan Harga Diri) sangat wajib dilakukan untuk mengidentifikasi area kerusakan psikis yang paling parah.\n\nEvaluasi kognitif dan afektif tambahan meliputi penggunaan Beck Depression Inventory (BDI) atau Hamilton Depression Rating Scale (HAM-D) untuk menilai apakah HDR merupakan bagian dari sindrom depresi mayor yang mendasari. Pemeriksaan laboratorium darah rutin (seperti fungsi tiroid dan profil nutrisi) tetap diperlukan untuk menyingkirkan adanya kondisi medis (seperti hipotiroidisme) yang dapat menyebabkan kelesuan fisik dan afek depresi yang menyerupai HDR.\n\nDalam beberapa kasus, tes psikologis proyektif (seperti Draw-A-Person atau House-Tree-Person Test) dapat membantu perawat spesialis atau psikolog untuk mendapatkan gambaran mengenai konflik bawah sadar pasien terkait dengan citra tubuh dan identitas diri. Hasil pemeriksaan penunjang ini dikolaborasikan oleh tim kesehatan jiwa untuk menentukan apakah pasien memerlukan terapi kognitif intensif atau dukungan medikasi antidepresan sebagai penunjang dalam proses pemulihan harga diri.",
      penatalaksanaan_medis:
        "Penatalaksanaan medis utama untuk pasien HDR kronik umumnya bersifat suportif dan kolaboratif, namun dapat melibatkan terapi farmakologi jika kondisi tersebut disertai dengan gangguan mood atau kecemasan yang berat. Obat golongan SSRI (Selective Serotonin Reuptake Inhibitors) seperti Fluoxetine, Sertraline, atau Escitalopram sering diresepkan untuk membantu meningkatkan kadar serotonin di sinaps, yang secara klinis dapat meningkatkan energi pasien dan menurunkan intensitas pikiran obsesif negatif mengenai diri sendiri.\n\nIntervensi medis non-farmakologis yang paling efektif adalah Cognitive Behavioral Therapy (CBT) yang dilakukan oleh psikiater atau psikolog klinis. Fokus CBT adalah mengidentifikasi pikiran otomatis negatif (Automatic Negative Thoughts) dan menggantinya dengan evaluasi kognitif yang lebih realistis dan seimbang. Terapi kelompok suportif juga sangat dianjurkan, di mana pasien dapat berbagi pengalaman dengan orang lain yang memiliki masalah serupa, sehingga mengurangi perasaan isolasi dan stigma diri (Self-stigma).\n\nSelain itu, penatalaksanaan medis dapat mencakup Terapi Okupasi (Occupational Therapy) yang bertujuan melatih keterampilan vokasional atau hobi tertentu untuk membangun rasa keberhasilan (sense of accomplishment) secara nyata. Dalam kondisi di mana HDR berkembang menjadi depresi berat dengan risiko bunuh diri, rawat inap intensif dan penggunaan obat penstabil suasana hati (Mood stabilizers) mungkin diperlukan. Tujuan dari seluruh rangkaian penatalaksanaan medis ini adalah menstabilkan neurokimiawi otak sehingga intervensi keperawatan jiwa dapat berjalan lebih efektif.",
      pathway:
        "Stressor Kronis/Trauma Masa Kecil -> Kegagalan Koping -> Introyeksi Negatif -> Konsep Diri Negatif -> Harga Diri Rendah Kronik -> Isolasi Sosial -> Penurunan ADL -> Risiko Keputusasaan -> Risiko Bunuh Diri.",
      fokus_pengkajian:
        "Fokus pengkajian keperawatan pada pasien HDR kronik harus diarahkan pada eksplorasi aspek positif yang masih dimiliki pasien namun tertimbun oleh evaluasi negatif. Perawat perlu mengkaji riwayat perkembangan pasien, terutama kegagalan di masa lalu yang masih diratapi. Pengkajian mendalam terhadap lima komponen konsep diri wajib dilakukan: Apa gambaran diri yang pasien tidak sukai? Sejauh mana peran pasien di keluarga yang hilang? Bagaimana identitas diri pasien saat ini? Dan apa tuntutan ideal diri yang membuat pasien merasa gagal?\n\nAspek selanjutnya adalah pengkajian kekuatan atau kemampuan yang masih dimiliki (Positive assets identification). Perawat harus secara jeli mencari kemampuan sekecil apapun, seperti kemampuan merapikan tempat tidur, kemampuan menulis, seni, atau bakat memasak. Pengkajian terhadap sistem pendukung (sosial support) juga krusial: Adakah anggota keluarga yang selalu mengkritik? Atau adakah orang yang masih dipercayai pasien? Hal ini akan menentukan desain intervensi Strategi Pelaksanaan (SP) yang akan diberikan.\n\nTerakhir, perawat mengkaji dampak HDR terhadap fungsi harian dan risiko keselamatan. Apakah perasaan tidak berharga ini memicu keinginan untuk mengakhiri hidup? Bagaimana pola makan dan tidur pasien akhir-akhir ini? Validasi data objektif (seperti kontak mata dan volume suara) selama proses pengkajian memberikan gambaran real-time mengenai kemajuan terapi dari satu pertemuan ke pertemuan berikutnya.",
      rentang_respon:
        "Rentang respons konsep diri dalam keperawatan jiwa menempatkan HDR kronik sebagai respons maladaptif yang berada di tengah menuju spektrum yang lebih parah. Di ujung Respons Adaptif, individu memiliki aktualisasi diri (mampu mencapai potensi penuh) dan konsep diri positif (menghargai diri secara proporsional). Pada tahap ini, kegagalan dianggap sebagai pelajaran hidup, bukan sebagai bukti ketidakaahlian diri secara total.\n\nBergeser ke arah Respons Maladaptif, terdapat Harga Diri Rendah Situasional (karena kejadian spesifik) dan Harga Diri Rendah Kronik (yang menetap). Jika HDR tidak diintervensi, individu akan bergeser lebih jauh ke arah respons yang sangat maladaptif seperti Kekacauan Identitas (tidak tahu siapa dirinya) dan Depersonalisasi (merasa dirinya aneh atau bukan manusia lagi). Di tahap depersonalisasi, individu kehilangan koneksi total dengan realitas diri mereka.\n\nPeran perawat jiwa adalah membantu pasien mendongkrak posisinya dalam rentang respons ini. Dimulai dari pengenalan perasaan (emotional awareness), kemudian latihan kemampuan diri, hingga akhirnya pasien mampu mencapai aktualisasi diri kembali sesuai dengan kapasitas yang mereka miliki. Setiap keberhasilan kecil dalam tugas harian adalah langkah nyata untuk menjauhkan pasien dari jurang depersonalisasi dan mengukuhkan kembali identitas diri mereka secara positif.",
      mekanisme_koping:
        "Mekanisme koping pada pasien HDR kronik biasanya bersifat destruktif dan berorientasi pada penghindaran (Avoidance coping). Bentuk koping maladaptif yang sering ditemukan adalah Regresi (perilaku kekanak-kanakan agar diperhatikan), Proyeksi (menyalahkan orang lain atas kegagalannya), serta Dissociation (memisahkan diri dari kenyataan yang menyakitkan). Pasien seringkali menggunakan koping pasif-agresif atau menunda-nunda pekerjaan (prokrastinasi) karena rasa takut yang berlebihan akan kegagalan (Fear of failure).\n\nIntervensi keperawatan bertujuan untuk memberdayakan koping adaptif yang berorientasi pada pemecahan masalah (Problem-focused coping). Pasien dilatih untuk melakukan eksplorasi diri (Self-exploration) guna menemukan potensi-potensi tersembunyi. Koping adaptif lainnya termasuk manajemen stres, berpartisipasi dalam kegiatan sosial (Social participation), serta penggunaan afirmasi diri yang positif untuk melawan suara internal kritis. Kemauan pasien untuk menerima umpan balik positif dari perawat tanpa rasa curiga adalah tanda awal perbaikan mekanisme koping.\n\nSelain koping jangka panjang berbasis spiritual atau nilai hidup juga dikembangkan. Pasien dibantu untuk menemukan makna di balik penderitaannya sehingga harga diri tidak hanya digantungkan pada prestasi duniawi melainkan pada kebermaknaan eksistensinya. Dukungan keluarga sebagai koping eksternal sangat krusial; keluarga dilatih untuk menjadi 'safety net' bagi harga diri pasien, di mana pasien merasa diterima tanpa syarat (unconditional positive regard) meskipun mereka belum mampu berprestasi maksimal.",
      masalah_keperawatan: [
        "Harga Diri Rendah Kronik",
        "Isolasi Sosial",
        "Ketidakberdayaan",
        "Risiko Bunuh Diri",
        "Keputusasaan",
      ],
      sp_pasien:
        "Strategi Pelaksanaan (SP) untuk pasien HDR kronik dirancang untuk membangun rasa keberhasilan (self-efficacy) secara bertahap melalui latihan kemampuan nyata.\n\n**SP 1: Identifikasi aspek positif dan melatih kemampuan ke-1.** Perawat membantu pasien menemukan daftar kelebihannya (biarpun pasien merasa tidak punya). Bantu pasien memilih satu kegiatan yang paling mudah dilakukan (misal: menyapu, mencuci piring, atau membuat prakarya). Setelah itu, perawat membimbing pasien melakukan kegiatan tersebut dan memberikan pujian tulus atas keberhasilannya.\n\n**SP 2: Melatih kemampuan positif ke-2.** Setelah pasien merasa 'bisa' pada tugas pertama, perawat memperkenalkan tugas kedua yang sedikit lebih kompleks. Hal ini bertujuan memperluas rasa kompetensi diri pasien. Perawat fokus pada proses pasien melakukan kegiatan tersebut, bukan hanya pada hasil akhirnya.\n\n**SP 3: Melatih kemampuan positif ke-3.** Menambah satu lagi keterampilan yang bisa dilakukan secara mandiri. Perawat mendorong pasien untuk melakukan kegiatan tersebut tanpa bantuan penuh dari staf. Keberhasilan pada tahap ini mulai mengikis skema 'tidak berdaya' yang selama ini menghantui pasien.\n\n**SP 4: Menyusun jadwal harian untuk latihan kemampuan.** Perawat bersama pasien menyusun jadwal kegiatan rutin yang mencakup semua kemampuan yang telah dilatih. Tujuannya adalah agar pasien tetap sibuk dengan aktivitas positif yang membuktikan bahwa mereka berharga dan kompeten setiap harinya.",
      sp_keluarga:
        "Strategi Pelaksanaan (SP) keluarga bertujuan untuk mengubah lingkungan keluarga menjadi lingkungan yang suportif terhadap harga diri pasien.\n\n**SP 1: Edukasi mengenai HDR kronik dan cara merawat.** Keluarga dijelaskan bahwa HDR adalah penyakit yang membutuhkan dukungan motivasi besar, bukan kritikan atau sindiran. Keluarga diajarkan cara memberikan pujian yang tulus (bukan basa-basi) atas kemajuan sekecil apapun yang ditunjukkan oleh pasien.\n\n**SP 2: Memfasilitasi latihan kemampuan pasien di rumah.** Keluarga dilatih untuk menyiapkan alat-alat yang dibutuhkan bagi pasien untuk melatih hobinya di rumah. Keluarga juga dibimbing cara mengingatkan pasien akan jadwal latihannya tanpa kesan memerintah.\n\n**SP 3: Membuat rencana tindak lanjut (discharge planning).** Perawat dan keluarga mendiskusikan cara menjaga stabilitas harga diri pasien setelah pulang, pentingnya melibatkan pasien dalam pengambilan keputusan keluarga yang sederhana, serta jadwal kontrol rutin ke faskes jiwa untuk pemantauan koping jangka panjang.",
      discharge_planning:
        "1. Pasien mampu menyebutkan dan mendemonstrasikan minimal 3 kemampuan positif secara mandiri.\n2. Pasien menunjukkan harga diri yang meningkat (kontak mata lebih baik, suara lebih keras).\n3. Keluarga memahami peran mereka sebagai sistem pendukung motivasi utama.\n4. Pasien memiliki jadwal aktivitas harian yang mencakup kegiatan produktif.\n5. Pasien mengetahui cara menangani pikiran negatif yang tiba-tiba muncul di rumah.\n6. Keluarga mengetahui tanda-tanda pasien mulai menarik diri sebagai indikator awal penurunan harga diri.",
      edukasi_keluarga:
        "Keluarga dilarang membandingkan pasien dengan anggota keluarga lain yang 'lebih sukses' karena akan memperburuk kondisi HDR kronik.",
      pohon_masalah:
        "Risiko Bunuh Diri <- Harga Diri Rendah Kronik <- Kegagalan Masa Lalu <- Pola Asuh Maladaptif",
      referensi: [
        "PPNI (2016). Standar Diagnosis Keperawatan Indonesia (SDKI). Jakarta: DPP PPNI.",
        "PPNI (2018). Standar Intervensi Keperawatan Indonesia (SIKI). Jakarta: DPP PPNI.",
        "PPNI (2019). Standar Luaran Keperawatan Indonesia (SLKI). Jakarta: DPP PPNI.",
        "Stuart, G.W. (2013). Principles and Practice of Psychiatric Nursing. 10th Ed. Elsevier.",
        "Townsend, M.C. (2015). Psychiatric Mental Health Nursing. 8th Ed. F.A. Davis Company.",
      ],
    },

    {
      id: "isolasi-sosial",
      kategori: "ASKEP JIWA DIAGNOSIS GANGGUAN JIWA",
      nama: "4. Isolasi Sosial",
      sdki: "D.0121",
      definisi:
        "Isolasi Sosial merupakan kegagalan individu dalam membina hubungan yang berarti, hangat, dan terbuka dengan orang lain, yang ditandai dengan penarikan diri dari lingkungan sosial secara fisik maupun emosional. Secara akademik, isolasi sosial didefinisikan sebagai suatu gangguan pada domain interaksi sosial di mana individu merasa ditolak, kesepian, dan tidak mampu berpartisipasi dalam aktivitas interpersonal yang umum. Hal ini seringkali bukan merupakan pilihan sadar, melainkan mekanisme pertahanan diri maladaptif terhadap kecemasan yang luar biasa.\n\nDalam perspektif keperawatan jiwa profesional, isolasi sosial mencerminkan terputusnya jembatan komunikasi antara dunia internal pasien dan realitas eksternal. Menurut Stuart (2013), isolasi sosial dapat menjadi penyebab sekaligus akibat dari gangguan jiwa berat lainnya seperti skizofrenia. Pasien yang mengisolasi diri kehilangan stimulus sensorik dan sosial yang diperlukan untuk mempertahankan fungsi kognitif yang sehat, sehingga risiko terjadinya distorsi persepsi (halusinasi) menjadi sangat tinggi.\n\nKondisi ini berbeda dengan kesendirian yang sehat (solitude), di mana individu memilih untuk menyendiri untuk tujuan refleksi diri tanpa merasa tertekan. Pada isolasi sosial, individu merasa 'terjebak' dalam kesendiriannya dan memiliki ketidakmampuan mendasar untuk memulai atau mempertahankan interaksi. Perawat ahli memandang isolasi sosial sebagai hambatan utama dalam proses rehabilitasi, karena kesembuhan jiwa sangat bergantung pada kualitas hubungan interpersonal dan dukungan sosial yang diterima pasien.",
      etiologi:
        "Etiologi isolasi sosial bersifat multifaktorial, melibatkan kerentanan biologis, trauma perkembangan psikologis, dan tekanan sistem sosial. Secara biologis, abnormalitas pada jalur neurotransmisi dopamin di korteks prefrontal menghambat kemampuan otak untuk memproses informasi sosial dan memahami isyarat (cues) dari orang lain. Selain itu, adanya kerusakan pada sirkuit saraf di amigdala dapat menyebabkan individu merasa dunia luar adalah tempat yang sangat mengancam dan penuh permusuhan (hostile environment).\n\nFaktor psikologis seringkali berakar pada kegagalan dalam tugas perkembangan tahap awal (Erikson), khususnya pada fase 'Trust vs Mistrust'. Individu yang mengalami penolakan (rejection) atau kehilangan figur pengganti yang konsisten di masa kecil gagal mengembangkan rasa aman dasar. Pengalaman bullying, pengkhianatan dalam hubungan asmara, atau trauma interpersonal yang berulang di masa dewasa berfungsi sebagai stresor presipitasi yang memicu individu untuk 'menutup diri' guna menghindari luka emosional lebih lanjut.\n\nFaktor sosial-budaya juga berperan besar, termasuk stigma negatif terhadap penderita gangguan jiwa, kemiskinan sistemik, atau perubahan struktur keluarga yang menyebabkan individu kehilangan penyangga sosial (social buffer). Ketidakmampuan individu untuk menoleransi ambiguitas dalam interaksi sosial menyebabkan mereka lebih memilih kepastian dalam kesendirian yang pasif. Interaksi antara rasa tidak percaya diri yang mendalam dan lingkungan yang tidak responsif menciptakan kondisi isolasi yang kronis dan sulit dipatahkan tanpa intervensi yang sistematis.",
      manifestasi_klinis:
        "Manifestasi klinis isolasi sosial sangat khas dan dapat dideteksi melalui pengamatan perilaku motorik, pola komunikasi, dan afek pasien. Gejala objektif yang paling menonjol adalah penghindaran kontak mata secara konsisten (pandangan menunduk) dan kecenderungan untuk membelakangi orang lain saat diajak bicara. Pasien menunjukkan perilaku 'asociality', seperti mengurung diri di rumah atau kamar, menjauh dari meja makan bersama, dan tidak berinisiatif memulai percakapan.\n\nSecara verbal, manifestasi klinis tampak pada durasi bicara yang sangat singkat (monosilabik), nada suara yang rendah dan datar, serta seringnya jeda atau blocking saat pembicaraan mulai menyentuh aspek emosional. Pasien tampak menunjukkan afek tumpul (blunted affect) di mana ekspresi wajahnya tidak berubah meskipun sedang membicarakan hal yang sedih atau gembira. Selain itu, kebersihan diri pasien seringkali menurun (Self-neglect) karena hilangnya motivasi untuk tampil pantas di hadapan orang lain.\n\nManifestasi klinis yang lebih dalam mencakup perasaan kosong, hampa, dan kehilangan tujuan hidup yang hanya terungkap setelah hubungan terapeutik terbentuk. Pasien mungkin menunjukkan perilaku 'autistik' di mana mereka lebih asyik dengan dunia fantasinya sendiri atau bicara dengan diri sendiri sebagai kompensasi atas ketiadaan kawan bicara nyata. Perawat spesialis harus jeli membedakan antara gejala negatif skizofrenia (apathy/avolition) dengan perilaku isolasi yang didasari oleh kecemasan sosial atau depresi berat guna menentukan strategi pendekatan yang tepat.",
      patofisiologi:
        "Patofisiologi isolasi sosial terkait erat dengan disfungsi pada sirkuit saraf 'Social Brain' yang meliputi Korteks Prefrontal Media, Sulkus Temporalis Superior, dan Amigdala. Pada kondisi isolasi kronis, terjadi penurunan plastisitas sinaptik dan atrofi pada serabut saraf yang menghubungkan area-area tersebut. Hal ini menyebabkan pasien kehilangan 'teori pikiran' (Theory of Mind) â€“ kemampuan untuk memahami niat dan perasaan orang lain, sehingga interaksi sosial terasa sangat melelahkan dan membingungkan bagi mereka.\n\nSecara psikodinamika, isolasi sosial merupakan bentuk regresi ego ke tingkat yang primitif untuk menghindari konflik yang tak terpecahkan. Ketika realitas dirasa terlalu menyakitkan (karena penolakan atau kegagalan), ego akan menarik investasinya dari dunia luar (objects) dan memindahkannya ke dalam diri sendiri (narcissism). Mekanisme ini memberikan rasa aman semu namun mengakibatkan pemisahan bertahap dari realitas yang sehat. Semakin lama individu terisolasi, semakin sulit bagi mereka untuk menguji kebenaran isi pikirannya (Reality Testing).\n\nSecara fungsional, isolasi menciptakan kondisi hipostimulasi otak yang memperburuk gejala kognitif. Ketiadaan umpan balik dari lingkungan sekitar menyebabkan pikiran-pikiran yang salah (waham) atau gangguan persepsi (halusinasi) berkembang tanpa hambatan. Siklus ini bersifat merusak: isolasi memicu gejala psikotik, dan gejala psikotik membuat individu semakin dijauhi oleh lingkungan sosialnya. Psikopatologi ini menjelaskan mengapa latihan sosialisasi bertahap harus dilakukan secara simultan dengan terapi farmakologis untuk memulihkan konektivitas saraf dan sosial pasien.",
      tanda_gejala:
        "Tanda dan gejala isolasi sosial dikategorikan menjadi Data Subjektif (DS) dan Data Objektif (DO) untuk memvalidasi diagnosis secara akurat. Data Subjektif mencakup ungkapan pasien mengenai perasaan kesepian, merasa tidak berarti, merasa ditolak oleh lingkungan, atau merasa 'berbeda' dari orang lain. Pasien sering mengatakan: 'Saya lebih suka sendiri,' 'Orang lain tidak mau bicara denganku,' atau 'Saya merasa hampa dan tidak punya siapa-siapa.' Rasa takut akan kegagalan atau penolakan sosial juga sering diungkapkan secara lisan.\n\nData Objektif meliputi temuan observasi yang nyata, seperti kontak mata yang buruk, sikap tubuh yang tertutup (membungkuk atau menyilangkan tangan), serta penghindaran terhadap interaksi kelompok. Pasien tampak tidak melakukan percakapan spontan, menjawab pertanyaan dengan singkat, dan lebih banyak diam di tempat tidur atau pojok ruangan. Afek tampak datar atau tumpul, dan ekspresi wajah jarang berubah meskipun diberikan stimulus sosial yang menyenangkan.\n\nTanda tambahan meliputi pengabaian terhadap penampilan fisik, kurangnya inisiatif dalam melakukan aktivitas harian (ADL), serta perilaku mundar-mandir (pacing) atau duduk terpaku (stupor) pada kasus yang berat. Dokumentasi mengenai seberapa sering pasien keluar kamar dan intensitas interaksinya dengan pasien lain atau staf sangat krusial dalam menentukan progresivitas penyakit. Sebagai pakar, perawat harus mampu menangkap 'sinyal halus' penarikan diri sebelum pasien benar-benar menutup diri secara total dari lingkungan sekitarnya.",
      pemeriksaan_penunjang:
        "Pemeriksaan penunjang pada pasien isolasi sosial difokuskan pada penilaian kedalaman gangguan interaksi dan identifikasi faktor genogram keluarga. Instrumen yang sering digunakan adalah Skala Isolasi Sosial (Social Isolation Scale) atau UCLA Loneliness Scale. Selain itu, Mental Status Examination (MSE) secara sistematis digunakan untuk mengidentifikasi keberadaan gejala menyerta seperti afek datar, arus pikir lambat, serta gangguan isi pikir (waham) yang mungkin memicu penarikan diri tersebut.\n\nGenogram (minimal 3 generasi) sangat penting untuk memetakan pola hubungan interpersonal keluarga di masa lalu dan mengidentifikasi adanya riwayat gangguan jiwa yang sama atau pola asuh yang 'dingin' (emotional coldness). Pemeriksaan fungsional sosial lainnya meliputi penilaian terhadap Social Skills Readiness â€“ kemampuan pasien dalam memulai perkenalan, memperkenalkan diri, dan mempertahankan topik pembicaraan ringan. Dokumentasi terhadap respon otonom pasien saat diajak bicara (seperti gemetar, berkeringat, atau takikardia) dapat memberikan data tambahan mengenai kecemasan sosial yang dialami.\n\nDalam setting klinis yang lebih canggih, tes psikologis seperti MMPI-2 atau tes proyektif (Rorschach Inkblot Test) dapat membantu psikiater dan perawat spesialis memahami dinamika koping internal pasien dan profil kepribadian yang cenderung menghindar (Avoidant personality). Seluruh hasil pemeriksaan ini dikompilasi menjadi rencana asuhan yang komprehensif, menentukan apakah pasien memerlukan terapi aktivitas kelompok (TAK) atau pendekatan individual (One-on-one therapy) terlebih dahulu.",
      penatalaksanaan_medis:
        "Penatalaksanaan medis untuk pasien isolasi sosial bersifat kolaboratif, menggabungkan farmakoterapi dengan terapi psikososial yang intensif. Obat-obatan antipsikotik golongan atipikal (seperti Risperidone atau Aripiprazole) sering diberikan bukan hanya untuk menghilangkan halusinasi, tetapi juga untuk memperbaiki 'gejala negatif' skizofrenia yang mencakup penarikan sosial dan afek datar. Pada pasien dengan komponen kecemasan sosial yang menonjol, penggunaan obat golongan antidepresan SSRI atau antiansietas dosis rendah dapat membantu mempermudah pasien untuk 'merasa aman' saat memulai interaksi.\n\nIntervensi non-farmakologis yang paling utama adalah Terapi Aktivitas Kelompok (TAK) Sosialisasi. Lewat TAK, pasien dilatih secara bertahap mulai dari latihan perkenalan diri, latihan bercakap-cakap mengenai topik ringan, hingga latihan melakukan kegiatan kelompok (seperti olahraga atau permainan). Terapi Lingkungan (Milieu Therapy) juga diciptakan sedemikian rupa agar mendukung interaksi sosial yang aman (safe and predictable environment), di mana setiap upaya sosialisasi pasien mendapatkan penguatan positif segera dari staf.\n\nSelain itu, Social Skills Training (SST) digunakan untuk mengajarkan keterampilan komunikasi dasar yang mungkin telah 'hilang' karena isolasi yang lama, seperti cara menggunakan nada suara yang tepat, menjaga jarak fisik saat bicara, dan melakukan kontak mata. Keluarga juga dilibatkan dalam Family Therapy untuk memperbaiki sistem komunikasi di rumah agar tidak lagi menjadi sumber stresor. Sinergi antara stabilisasi kimiawi otak dan pelatihan keterampilan sosial merupakan kunci keberhasilan dalam mengintegrasikan kembali pasien ke masyarakat.",
      pathway:
        "Trauma Interpersonal -> Harga Diri Rendah Kronik -> Ketakutan akan Penolakan -> Mekanisme Koping Avoidance -> Penarikan Diri -> Isolasi Sosial -> Penurunan Stimulus Kognitif -> Risiko Halusinasi.",
      fokus_pengkajian:
        "Fokus pengkajian keperawatan pada pasien isolasi sosial harus diarahkan pada identifikasi penyebab mendasar dari penarikan diri tersebut. Perawat perlu menggali: Siapa orang yang paling dekat dengan pasien sebelum sakit? Apa yang dirasakan pasien saat berada di tengah keramaian? Adakah pengalaman memalukan atau menyakitkan yang membuat pasien takut bicara dengan orang lain? Pengkajian harus dilakukan secara bertahap, dimulai dengan observasi dari jarak jauh sebelum melakukan pendekatan langsung.\n\nAspek pengkajian selanjutnya adalah kemampuan sosialisasi yang masih dimiliki (Positive residual social skills). Perawat menilai apakah pasien masih bisa menyapa, memperkenalkan diri, atau sekadar membalas salam. Fokus juga diarahkan pada pengkajian 'pola asuh' dan 'dukungan keluarga': Apakah keluarga selama ini membiarkan pasien mengurung diri? Adakah konflik terbuka yang memicu pasien untuk menyepi? Jawaban dari pertanyaan-pertanyaan ini akan menjadi dasar penentuan SP yang tepat bagi keluarga.\n\nTerakhir, perawat mengkaji dampak isolasi terhadap ADL dan status mental. Pasien yang terisolasi seringkali mengalami penurunan perawatan diri yang drastis dan peningkatan gejala psikotik karena otaknya kekurangan stimulasi realitas. Pengkajian respon verbal and non-verbal selama interaksi (seperti waktu respon pembicaraan atau keberanian melakukan kontak mata) memberikan data objektif untuk mengevaluasi efektivitas intervensi dari waktu ke waktu. Sebagai pakar, kita melihat pengkajian bukan hanya pengumpulan data, melainkan langkah pertama dari intervensi itu sendiri (membangun Trust).",
      rentang_respon:
        "Rentang respons sosial dalam keperawatan jiwa menempatkan isolasi sosial sebagai bentuk respons maladaptif yang berada pada spektrum penolakan hubungan interpersonal. Di ujung Respons Adaptif, individu menunjukkan hubungan soliter (mampu menyendiri secara sehat) and hubungan interdependen (mampu memberi and menerima dalam hubungan sosial). Di tahap ini, individu tetap memiliki identitas diri yang kuat meskipun sedang berinteraksi dengan orang lain.\n\nBergeser ke arah maladaptif, terdapat kesepian (loneliness), penarikan diri (withdrawal), and menarik diri sementara (solitude-seeking due to stress). Puncak dari respons maladaptif adalah Isolasi Sosial (menghindar secara menetap) and Manipulasi (memanfaatkan orang lain secara tidak jujur). Jika kondisi ini terus dibiarkan, pasien dapat jatuh ke dalam kondisi 'Narcissism' atau 'Autism' di mana mereka sepenuhnya kehilangan batas antara dunia internal dan realitas eksternal.\n\nTujuan asuhan keperawatan adalah membantu pasien bergeser dari respons maladaptif menuju respons yang lebih adaptif. Langkah awal adalah transisi dari isolasi sosial menuju penarikan diri yang terkontrol, kemudian menuju interaksi yang bergantung pada dukungan (dependent interaction), hingga akhirnya mencapai interaksi sosial yang mandiri and harmonis. Pemahaman perawat tentang rentang ini sangat penting untuk menetapkan target pemulihan yang realistis bersama pasien.",
      mekanisme_koping:
        "Mekanisme koping yang digunakan oleh pasien isolasi sosial didominasi oleh penghindaran (Avoidance) and kompensasi internal melalui dunia fantasi. Bentuk koping maladaptif lainnya mencakup Regresi (berperilaku mundur ke tahap perkembangan sebelumnya untuk mendapatkan perlindungan) and Disosiasi (memisahkan diri dari perasaan emosional yang menyakitkan). Pasien seringkali menggunakan pikiran autistik sebagai pengganti interaksi nyata, di mana segala kebutuhan ego mereka dipenuhi sendiri lewat khayalan.\n\nIntervensi keperawatan bertujuan untuk mengganti mekanisme koping tersebut dengan koping adaptif yang berorientasi pada pemecahan masalah sosial. Pasien dilatih untuk menggunakan teknik relaksasi saat kecemasan sosial muncul, sehingga mereka tidak langsung melarikan diri dari situasi sosial. Koping adaptif lainnya termasuk partisipasi aktif dalam terapi kelompok, penggunaan afirmasi positif untuk melawan rasa minder, and mencari bantuan (Seeking support) dari staf atau keluarga saat merasa terancam secara psikis.\n\nKepatuhan minum obat juga dipandang sebagai koping fisik untuk menekan gejala-gejala yang menghambat interaksi (seperti rasa curiga berlebih). Perawat juga melatih pasien untuk menggunakan teknik 'Social Validations' â€“ bertanya kepada orang lain mengenai kebenaran dugaannya tentang penilaian orang lain. Keberhasilan pasien dalam melepaskan dunia fantasinya and mulai 'hadir' sepenuhnya dalam percakapan nyata adalah bukti kematangan mekanisme koping yang baru dikembangkan.",
      masalah_keperawatan: [
        "Isolasi Sosial",
        "Harga Diri Rendah Kronik",
        "Gangguan Persepsi Sensori: Halusinasi",
        "Defisit Perawatan Diri",
        "Risiko Perilaku Kekerasan (akibat rasa curiga)",
      ],
      sp_pasien:
        "Strategi Pelaksanaan (SP) untuk pasien isolasi sosial dirancang secara sistematis untuk melatih keterampilan interaksi mulai dari individu hingga kelompok.\n\n**SP 1: Identifikasi penyebab isolasi dan melatih cara berkenalan.** Perawat membantu pasien mengenali alasan mereka menarik diri (misal: rasa malu atau takut). Perawat melatih pasien teknik perkenalan yang benar (kontak mata, salam, menyebutkan nama, hobi, dan alamat) dan mempraktikkannya berulang kali dalam suasana yang mendukung.\n\n**SP 2: Melatih berinteraksi secara bertahap dengan dua orang.** Setelah sukses berkenalan dengan perawat, pasien didorong untuk mempraktikkan keterampilan tersebut kepada pasien lain (teman sekamar) didampingi oleh perawat. Fokusnya adalah pada keberanian memulai percakapan dan mendengarkan respon teman bicara.\n\n**SP 3: Melatih berinteraksi dalam kelompok kecil.** Pasien diajak untuk berpartisipasi dalam aktivitas bersama (seperti makan bersama atau bermain kartu) dengan 3-4 orang. Tujuannya adalah untuk melatih pasien menoleransi keberadaan orang banyak and belajar bergiliran dalam berbicara.\n\n**SP 4: Melatih interaksi sosial dalam kegiatan harian terjadwal.** Memasukkan kegiatan sosialisasi ke dalam jadwal rutin (misal: menyapa staf di pagi hari atau ikut serta dalam forum komunitas unit). Hal ini bertujuan untuk menjadikan interaksi sebagai bagian normal dari kehidupan harian pasien.",
      sp_keluarga:
        "Strategi Pelaksanaan (SP) keluarga bertujuan untuk membekali keluarga agar mampu menjadi agen sosialisasi bagi pasien di lingkungan rumah.\n\n**SP 1: Edukasi mengenai isolasi sosial and cara merawat.** Keluarga dijelaskan bahwa menarik diri adalah bagian dari gejala penyakit, bukan karena pasien malas atau sombong. Keluarga diajarkan cara pendekatan yang tidak memaksa namun tetap mengajak pasien berinteraksi secara konsisten.\n\n**SP 2: Melatih keluarga cara mengajak pasien berbicara.** Keluarga dipandu untuk mempraktikkan cara melibatkan pasien dalam obrolan keluarga di meja makan atau saat menonton TV. Perawat menekankan pentingnya memberikan pujian setiap kali pasien mau keluar dari kamarnya atau memberikan respon verbal.\n\n**SP 3: Menyusun rencana tindak lanjut and pendampingan sosial.** Diskusi mengenai pemanfaatan fasilitas komunitas (seperti kader kesehatan atau puskesmas) untuk memantau kemajuan sosialisasi pasien pasca pulang. Keluarga didorong untuk membantu pasien mempertahankan jadwal kegiatannya agar isolasi tidak berulang di rumah.",
      discharge_planning:
        "1. Pasien mampu memulai and mempertahankan percakapan singkat secara mandiri.\n2. Pasien terlibat aktif dalam kegiatan kelompok di ruangan.\n3. Keluarga memahami and mampu mendemonstrasikan cara memotivasi pasien bersosialisasi di rumah.\n4. Pasien memiliki jadwal interaksi harian yang terstruktur.\n5. Pasien mengetahui cara mengatasi rasa cemas saat berada di lingkungan baru atau bertemu orang asing.",
      edukasi_keluarga:
        "Keluarga harus bersikap sabar and tidak memaksakan interaksi yang berat di awal kepulangan pasien. Berikan dukungan emosional yang hangat and pastikan lingkungan rumah tidak terlalu bising atau penuh tekanan (High Expressed Emotion). Jelaskan bahwa keterlibatan pasien dalam tugas rumah tangga sederhana adalah cara terbaik untuk melatih kembali keterampilan sosialnya secara natural.",
      pohon_masalah:
        "Halusinasi <- Isolasi Sosial <- Harga Diri Rendah Kronik <- Kegagalan Interaksi Masa Lalu",
      obat_rekomendasi: [
        "Risperidone (Persidal/Risperdal)",
        "Aripiprazole (Abilify/Arinia)",
        "Clozapine (Sizoril/Clozaril - untuk kasus resisten)",
        "Fluoxetine (jika disertai anhedonia berat)",
      ],
      referensi: [
        "PPNI (2016). Standar Diagnosis Keperawatan Indonesia (SDKI). Jakarta: DPP PPNI.",
        "PPNI (2018). Standar Intervensi Keperawatan Indonesia (SIKI). Jakarta: DPP PPNI.",
        "PPNI (2019). Standar Luaran Keperawatan Indonesia (SLKI). Jakarta: DPP PPNI.",
        "Stuart, G.W. (2013). Principles and Practice of Psychiatric Nursing. 10th Ed. Elsevier.",
        "Townsend, M.C. (2015). Psychiatric Mental Health Nursing. 8th Ed. F.A. Davis Company.",
      ],
    },

    {
      id: "dpd",
      kategori: "ASKEP JIWA DIAGNOSIS GANGGUAN JIWA",
      nama: "5. Defisit Perawatan Diri",
      sdki: "D.0109",
      definisi:
        "Defisit Perawatan Diri (DPD) merupakan suatu kondisi klinis di mana individu mengalami kegagalan dalam melakukan atau menyelesaikan aktivitas fungsional dasar untuk dirinya sendiri, yang meliputi mandi, berpakaian (berhias/berdandan), makan (mengkonsumsi nutrisi), serta eliminasi (defekasi/urinasi) secara mandiri. Secara akademik, DPD dalam keperawatan jiwa bukan sekadar masalah higinitas, melainkan manifestasi dari disregulasi motivasi yang parah atau kemunduran fungsi eksekutif otak.\n\nDalam perspektif perawat spesialis jiwa, DPD seringkali menjadi indikator objektif dari tingkat keparahan 'gejala negatif' pada skizofrenia (avolisi dan anhedonia). Pasien yang mengalami DPD kehilangan 'drive' atau dorongan internal untuk merawat tubuhnya sebagai entitas yang berharga, yang seringkali berkaitan dengan rusaknya konsep diri. Jika tidak ditangani, DPD akan memicu komplikasi fisik yang serius seperti infeksi kulit, infestasi kutu, masalah gigi geligi, hingga penolakan sosial yang semakin memperparah isolasi pasien.\n\nSebagai pakar, kita memandang pemulihan kemampuan perawatan diri sebagai 'pintu masuk' utama dalam proses kemandirian pasien. Keberhasilan pasien dalam mandi secara teratur atau berpakaian rapi memberikan penguatan positif yang instan terhadap harga diri mereka (Self-esteem) and menjadi landasan bagi intervensi psikososial yang lebih kompleks. DPD diatasi bukan hanya untuk kebersihan fisik, melainkan untuk mengembalikan martabat (dignity) manusiawi pasien di hadapan lingkungan sosialnya.",
      etiologi:
        "Etiologi DPD bersifat multifaktorial, melibatkan disfungsi biologis pada sistem saraf pusat, hambatan psikologis, and faktor lingkungan yang tidak mendukung. Secara biologis, kerusakan pada lobus frontal and gyrus cingulate anterior menyebabkan gangguan pada fungsi motivasi and perencanaan motorik. Penurunan aktivitas dopaminergik di jalur mesokortikal dikaitkan dengan hilangnya inisiatif (avolisi) yang membuat pasien merasa 'terpaku' and tidak mampu memulai tugas sederhana sekalipun.\n\nFaktor psikologis memegang peranan penting melalui mekanisme regresi, di mana pasien secara tidak sadar kembali ke tahap perkembangan bayi yang bergantung sepenuhnya pada orang lain untuk memenuhi kebutuhan dasarnya. Selain itu, adanya halusinasi atau waham seringkali menjadi penghambat langsung; misalnya, pasien merasa air mandi mengandung racun atau suara-suara halusinasi melarang pasien untuk menyisir rambut. Rasa tidak berdaya yang kronis juga menyebabkan pasien mengabaikan tubuhnya sebagai bentuk 'hukuman diri' (Self-punishment).\n\nFaktor lingkungan mencakup minimnya fasilitas pendukung di keluarga atau perawatan di rumah sakit yang terlalu memanjakan (overprotective) sehingga pasien tidak diberi kesempatan untuk mencoba mandiri. Sebaliknya, lingkungan yang sangat mengabaikan (neglectful) juga dapat memperparah DPD. Kurangnya edukasi keluarga mengenai cara memotivasi pasien tanpa menciptakan konflik (High Expressed Emotion) juga menjadi faktor presipitasi yang signifikan. Interaksi antara kemunduran biologis and kurangnya stimulasi lingkungan inilah yang menyebabkan status perawatan diri pasien menurun secara progresif.",
      manifestasi_klinis:
        "Manifestasi klinis DPD sangat nyata and dapat diidentifikasi melalui pemeriksaan fisik and observasi perilaku harian secara seksama. Pada domain Mandi/Kebersihan Diri, pasien tampak dengan kulit berdaki, badan berbau tidak sedap, gigi kuning berkarang (halitosis), and kuku tangan/kaki yang panjang serta kotor. Rambut tampak kusam, acak-acakan, atau bahkan gimbal (matting) karena tidak pernah disisir atau dicuci dalam waktu lama.\n\nManifestasi pada domain Berpakaian/Berhias tampak dari penggunaan pakaian secara serampangan â€“ kotor, tidak disetrika, tidak serasi, atau bahkan terbalik. Pasien pria mungkin memiliki kumis and jenggot yang sangat panjang and tidak terawat, sedangkan pasien wanita tampak kusam tanpa riasan dasar. Pada domain Makan, pasien menunjukkan perilaku makan yang berantakan, tidak mencuci tangan sebelum makan, atau makan langsung menggunakan tangan meskipun tersedia alat makan yang bersih.\n\nManifestasi pada domain Eliminasi mencakup ketidakmampuan membersihkan diri (vulva hygiene/perianal hygiene) setelah BAB/BAK, atau bahkan melakukan eliminasi tidak pada tempatnya (incontinent-like behavior) karena malas atau bingung mencari toilet. Secara psikologis, manifestasi ini disertai dengan afek yang datar and kurangnya rasa malu (loss of shame) meskipun dalam kondisi kotor di hadapan orang lain. Perawat spesialis harus mendokumentasikan setiap temuan ini sebagai data dasar (baseline) untuk mengukur kemajuan latihan ADL pasien di hari-hari berikutnya.",
      patofisiologi:
        "Patofisiologi DPD berkaitan erat dengan hipoaktivitas di Korteks Prefrontal Dorsolateral (DLPFC) yang bertanggung jawab atas 'Executive Functioning' (perencanaan, organisasi, and inisiasi tugas). Pada pasien dengan gangguan jiwa kronis, terjadi atrofi pada area ini yang mengakibatkan terputusnya rantai kognitif dari 'niat' menjadi 'tindakan'. Akibatnya, meskipun pasien tahu mereka perlu mandi, sinyal saraf untuk memulai gerakan tersebut tidak pernah sampai ke sistem motorik secara efektif.\n\nDari sudut pandang psikopatologi, DPD merupakan bentuk dari 'Self-Objectification Deficit'. Karena distorsi pada konsep diri, pasien tidak lagi melihat tubuhnya sebagai bagian dari identitas yang harus dilindungi, melainkan sebagai objek asing yang tidak bermakna. Mekanisme pertahanan diri 'Denial' sering digunakan, di mana pasien merasa dirinya sudah bersih meskipun kenyataannya sangat kotor. Pengabaian diri ini juga sering menjadi cara pasien untuk mengomunikasikan keputusasaan yang tidak terkatakan.\n\nSecara fungsional, DPD menciptakan lingkaran setan (vicious cycle). Ketidakpedulian terhadap kebersihan menyebabkan munculnya masalah kesehatan fisik (seperti scabies atau infeksi jamur), yang kemudian memicu rasa tidak nyaman and rasa sakit. Rasa sakit ini justru membuat pasien semakin enggan bergerak atau berinteraksi, yang pada akhirnya memperdalam kondisi HDR and isolasi sosial. Pemahaman psikopatologi ini menekankan bahwa intervensi DPD harus dimulai dengan pendekatan motivasi (Motivational Interviewing) sebelum berlanjut ke pelatihan fisik.",
      tanda_gejala:
        "Tanda dan gejala DPD diklasifikasikan menjadi Data Subjektif (DS) dan Data Objektif (DO) guna merumuskan asuhan keperawatan yang komprehensif. Data Subjektif mencakup pernyataan pasien yang mencerminkan hilangnya motivasi. Pasien sering mengatakan: 'Saya malas mandi, airnya terlalu dingin,' 'Tidak ada gunanya dandan, saya tetap buruk rupa,' 'Nanti saja mandinya kalau sudah mengantuk,' atau 'Saya lupa cara menggunakan sikat gigi ini.' Keluhan mengenai ketergantungan pada orang lain untuk membantu aktivitas dasar juga sering muncul.\n\nData Objektif meliputi temuan fisiologis and perilaku yang sangat nyata. Badan pasien tampak kotor, berdaki, and tercium aroma yang tidak sedap. Rambut acak-acakan, gigi tidak terawat, and kuku hitam panjang. Pakaian yang dikenakan tampak lusuh, kotor, and seringkali tidak pantas. Selama makan, pasien tidak memperhatikan tata krama and kebersihan dasar. Di kamar mandi, pasien tampak bingung menggunakan peralatan mandi atau bahkan takut terhadap percikan air (hydrophobia akibat trauma atau waham).\n\nTanda tambahan meliputi adanya luka lecet atau jamur pada area lipatan kulit (axilla, inguinal) akibat kurangnya higinitas. Pengamatan terhadap frekuensi mandi (kurang dari 1x sehari) and kemampuan menggunakan alat (misal: tidak bisa memakai kancing baju sendiri) memberikan data kuantitatif mengenai derajat ketergantungan pasien. Sebagai pakar, perawat harus melakukan 'Head-to-toe inspection' secara sitematis namun tetap menjaga privasi and harga diri pasien selama proses validasi tanda gejala.",
      pemeriksaan_penunjang:
        "Pemeriksaan penunjang pada pasien DPD difokuskan pada penilaian tingkat kemandirian fungsional and identifikasi masalah kesehatan fisik akibat kurangnya perawatan diri. Instrumen utama yang digunakan adalah Barthel Index atau Indeks Katz untuk mengukur derajat ketergantungan pasien dalam aktivitas harian (mandi, makan, berpakaian, eliminasi, transfer). Skor dari instrumen ini akan menentukan apakah pasien memiliki 'Ketergantungan Total', 'Ketergantungan Sebagian', atau 'Mandiri'.\n\nEvaluasi status nutrisi melalui pemeriksaan laboratorium (Albumin, Laju Endap Darah) and pengukuran Antropometri (Lingkar Lengan Atas, Berat Badan) sangat penting jika pasien memiliki DPD pada domain makan. Selain itu, pemeriksaan fisik spesifik pada area integritas kulit and membran mukosa mulut (Dental screening) dilakukan untuk mencari adanya tanda-tanda infeksi sekunder seperti scabies, karies gigi berat, atau dermatitis seboroik.\n\nPenggunaan skala kognitif seperti MMSE (Mini Mental State Examination) juga relevan untuk menilai apakah DPD disebabkan oleh kemunduran intelektual (demensia) atau murni karena gejala negatif psikosis. Dokumentasi perilaku selama observasi 'Toilet Training' atau simulasi ADL memberikan data kualitatif mengenai bagian mana dari prosedur perawatan diri yang paling sulit dilakukan oleh pasien. Hasil pemeriksaan kolaboratif ini dilaporkan kepada tim medis untuk kemungkinan pemberian vitamin neurotropik atau salep topikal jika ditemukan penyakit kulit.",
      penatalaksanaan_medis:
        "Penatalaksanaan medis untuk pasien DPD bersifat suportif and kolaboratif, dengan fokus utama pada pemulihan fungsi neurofisiologis yang mendukung motivasi. Obat antipsikotik golongan atipikal (seperti Risperidone atau Clozapine) menjadi pilihan utama karena kemampuannya yang lebih baik dalam memperbaiki 'gejala negatif' (avolisi) dibandingkan antipsikotik tipikal. Dalam kondisi tertentu, pemberian suplemen vitamin B-kompleks dosis tinggi atau obat golongan antidepresan dapat membantu meningkatkan level energi and 'mood' pasien sehingga mereka lebih mudah dimotivasi.\n\nIntervensi non-farmakologis yang paling krusial adalah Terapi Okupasi and Social Skill Training (SST) khusus untuk ADL. Melalui terapi okupasi, pasien dilatih kembali menggunakan motorik halusnya untuk kegiatan seperti mengancingkan baju, menggunakan sendok, atau memegang gunting kuku. Terapi Lingkungan (Milieu Therapy) juga sangat berperan; ruangan harus bersih, alat mandi harus tersedia and mudah dijangkau, serta suasana yang mendorong kemandirian (bukan memanjakan).\n\nSelain itu, penanganan medis terhadap komplikasi fisik wajib dilakukan secara paralel, seperti pemberian obat anti-jamur (antifungal), prosedur pembersihan karang gigi (scaling), atau penanganan infestasi kutu rambut (pediculosis). Kolaborasi dengan ahli gizi diperlukan jika DPD pada domain makan telah menyebabkan defisiensi nutrisi. Seluruh rangkaian penatalaksanaan ini bertujuan untuk menstabilkan kondisi fisik and psikis pasien sehingga mereka siap menerima pelatihan kemandirian secara bertahap dari perawat jiwa.",
      pathway:
        "Gangguan Motivasi (Avolisi) -> Pengabaian Perawatan Diri -> Defisit Perawatan Diri -> Akumulasi Kuman & Kotoran -> Kerusakan Integritas Kulit -> Penolakan Sosial -> Penurunan Harga Diri.",
      fokus_pengkajian:
        "Fokus pengkajian keperawatan pada pasien DPD harus dilakukan secara mendalam pada setiap domain perawatan diri. Perawat perlu menanyakan: Berapa kali pasien mandi dalam sehari? Apakah pasien menggunakan sabun and shampo? Bagaimanakah cara pasien merapikan penampilannya? Apa hambatan yang dirasakan saat ingin membersihkan diri? Pengkajian harus meliputi aspek pengetahuan (tahu cara mandi) and aspek kemampuan (bisa memegang alat mandi).\n\nAspek selanjutnya adalah pengkajian terhadap ketersediaan fasilitas and dukungan sosial. Apakah keluarga menyiapkan perlengkapan hygiene? Adakah anggota keluarga yang secara telaten mengingatkan pasien untuk mandi? Perawat juga harus mengkaji adanya waham atau halusinasi yang mungkin menghambat ADL (misal: suara yang melarang makan atau takut air). Fokus juga diarahkan pada integritas kulit di seluruh area tubuh, termasuk lipatan-lipatan yang sering terabaikan.\n\nTerakhir, perawat mengkaji dampak DPD terhadap hubungan sosial. Apakah bau badan membuat teman sekamar menjauhi pasien? Bagaimanakah perasaan pasien sendiri melihat penampilannya yang kotor? Validasi status mental (MSE) pada poin 'Penampilan' memberikan gambaran menyeluruh mengenai kesadaran diri pasien. Dokumentasi yang akurat mengenai jenis bantuan yang dibutuhkan (mandiri, dengan supervisi, atau bantuan total) adalah dasar untuk desain Strategi Pelaksanaan (SP) yang presisi. Sebagai perawat pakar, kita mencari 'latar belakang' dari perilaku kotor tersebut, bukan hanya melihat permukaannya saja.",
      rentang_respon:
        "Rentang respons perawatan diri mencerminkan tingkat adaptasi individu terhadap standar kesehatan fisik and norma sosial. Di ujung Respons Adaptif, individu menunjukkan perilaku Mandiri (mampu merawat diri secara total tanpa diingatkan) and Bersih-Rapi (menghargai estetika diri). Pada tahap ini, merawat diri adalah bagian dari rasa syukur and penghargaan terhadap tubuh sendiri.\n\nBergeser ke arah maladaptif, terdapat Perlu Bantuan Sebagian (mampu melakukannya tapi harus disiapkan alat atau diingatkan secara intens) and Pengabaian Diri (mulai jarang merawat diri karena stres). Puncak dari respons maladaptif adalah Defisit Perawatan Diri (ketergantungan total pada orang lain) and Keterlantaran Diri (self-neglect total). Di tahap ini, individu tidak lagi memiliki kepedulian fungsional terhadap kelangsungan hidup fisiknya.\n\nIntervensi keperawatan bertujuan mendorong pasien bergerak kembali ke sisi respons adaptif. Setiap kemajuan kecil, misalnya dari bantuan total menjadi hanya diingatkan, adalah sebuah pencapaian klinis yang besar. Pemahaman perawat tentang rentang ini memungkinkan penetapan target yang bertahap, mulai dari pengenalan alat, praktik terbimbing, hingga akhirnya kemandirian penuh dalam rutinitas harian pasien.",
      mekanisme_koping:
        "Mekanisme koping pada pasien DPD umumnya bersifat regresi and denial. Pasien menggunakan Regresi untuk menghindari beban tanggung jawab kedewasaan dengan memposisikan dirinya sebagai pihak yang harus dilayani. Mekanisme Denial digunakan untuk mematikan persepsi terhadap kuman atau kotoran di tubuhnya, sehingga pasien tidak merasa risih meskipun dalam kondisi tidak mandi berhari-hari. Selain itu, koping pasif-agresif mungkin muncul saat pasien dipaksa mandi oleh staf atau keluarga.\n\nIntervensi keperawatan diarahkan untuk mengembangkan koping adaptif yang berorientasi pada kemandirian. Pasien dilatih untuk melakukan Self-monitoring; belajar merasakan perbedaan antara tubuh yang bersih and tubuh yang kotor. Koping kognitif digunakan untuk melawan pikiran malas melalui afirmasi positif seperti 'Saya berharga and layak untuk tampil bersih'. Keterlibatan dalam terapi Aktivitas Kelompok juga berfungsi sebagai koping sosial di mana pasien mendapatkan umpan balik dari teman sebaya mengenai kerapiannya.\n\nKoping religius-spiritual juga dapat diintegrasikan, misalnya dengan menghubungkan kebersihan diri dengan integritas ibadah (Bersuci). Hal ini seringkali menjadi motivasi yang lebih kuat bagi pasien di Indonesia. Keberanian pasien untuk mengambil tanggung jawab atas kebutuhan dasarnya sendiri tanpa bantuan lagi adalah tanda transisi yang kuat dari mekanisme koping maladaptif menuju koping yang produktif and matur.",
      masalah_keperawatan: [
        "Defisit Perawatan Diri (Mandi, Berhias, Makan, Eliminasi)",
        "Gangguan Pemeliharaan Kesehatan",
        "Harga Diri Rendah Kronik",
        "Risiko Gangguan Integritas Kulit/Jaringan",
        "Isolasi Sosial",
      ],
      sp_pasien:
        "Strategi Pelaksanaan (SP) untuk pasien DPD dirancang untuk melatih empat domain utama kemandirian secara bertahap.\n\n**SP 1: Melatih Kebersihan Diri (Mandi & Sikat Gigi).** Perawat memberikan edukasi tentang manfaat kebersihan and mendemonstrasikan cara mandi yang benar (menggunakan sabun, shampo, and sikat gigi). Setelah itu, perawat membantu pasien menyiapkan alat and membimbing pasien mempraktikkannya. Berikan pujian atas kemauan pasien untuk bersih.\n\n**SP 2: Melatih Berhias/Berdandan.** Fokus pada kerapian setelah mandi. Meliputi cara berpakaian yang serasi, menyisir rambut dengan rapi, mencukur kumis bagi pria, or merias wajah ringan bagi wanita. Hal ini melatih rasa kebanggaan diri melalui penampilan yang menarik.\n\n**SP 3: Melatih Kemampuan Makan & Minum secara mandiri.** Perawat melatih pasien tata cara makan yang benar: mencuci tangan, menggunakan alat makan, berdoa, memperhatikan porsi, and membersihkan peralatan makan sendiri setelah selesai. Fokus pada higinitas and kemandirian nutrisi.\n\n**SP 4: Melatih BAB & BAK (Eliminasi) yang benar.** Meliputi pengenalan tempat eliminasi (toilet), cara membersihkan diri yang benar secara tuntas (cebok), serta cara membersihkan kembali toilet setelah digunakan. Hal ini sangat krusial untuk mencegah penularan penyakit and menjaga sanitasi lingkungan.",
      sp_keluarga:
        "Strategi Pelaksanaan (SP) keluarga bertujuan untuk membekali keluarga agar mampu mendampingi pasien dalam mempertahankan kebersihan di rumah.\n\n**SP 1: Edukasi mengenai pentingnya perawatan diri and cara merawat.** Keluarga diajarkan bahwa DPD adalah gejala penyakit jiwa and bukan sifat pemalas. Keluarga dibekali pengetahuan cara memotivasi pasien tanpa menciptakan konflik.\n\n**SP 2: Melatih keluarga membimbing latihan ADL di rumah.** Keluarga dipandu cara menyiapkan peralatan yang dibutuhkan and cara memberikan instruksi yang singkat and jelas kepada pasien. Tekankan pentingnya memberikan pujian setiap kali pasien melakukan ADL secara mandiri.\n\n**SP 3: Menyusun jadwal harian and tindak lanjut.** Perawat and keluarga menyusun jadwal kegiatan perawatan diri yang terstruktur dari bangun tidur hingga tidur kembali. Diskusikan rencana kontrol rutin untuk memastikan kebersihan diri pasien tetap terjaga long-term.",
      discharge_planning:
        "1. Pasien mandi and sikat gigi mandiri 2x sehari tanpa harus dipaksa.\n2. Pasien mampu berpakaian rapi, menyisir rambut, and memotong kuku secara rutin.\n3. Pasien makan and eliminasi di tempatnya and membersihkannya sendiri.\n4. Keluarga mendemonstrasikan cara memberikan dukungan motivasi yang tepat.\n5. Pasien menunjukkan ekspresi bangga and segar setelah melakukan perawatan diri.\n6. Jadwal harian perawatan diri telah terpatri dalam rutinitas pasien.",
      edukasi_keluarga:
        "Keluarga dianjurkan untuk tidak langsung memarahi pasien jika sesekali lupa mandi, melainkan segera memberikan 'positive reinforcement' (hadiah/pujian) yang tulus saat pasien ingat and mau merawat dirinya sendiri. Pastikan stok sabun, sikat gigi, and pakaian bersih selalu tersedia and mudah ditemukan oleh pasien di rumah.",
      pohon_masalah:
        "Risiko Infeksi Kulit <- Defisit Perawatan Diri <- Penurunan Motivasi (Avolisi) <- Harga Diri Rendah Kronik",
      obat_rekomendasi: [
        "Risperidone (Antipsikotik atipikal untuk gejala negatif)",
        "Olanzapine (untuk meningkatkan nafsu makan and motivasi)",
        "Antidepresan (Sertraline) jika ada gejala penyerta depresi",
        "Vitamin Neurotropik (B1, B6, B12)",
      ],
      referensi: [
        "PPNI (2016). Standar Diagnosis Keperawatan Indonesia (SDKI). Jakarta: DPP PPNI.",
        "PPNI (2018). Standar Intervensi Keperawatan Indonesia (SIKI). Jakarta: DPP PPNI.",
        "PPNI (2019). Standar Luaran Keperawatan Indonesia (SLKI). Jakarta: DPP PPNI.",
        "Stuart, G.W. (2013). Principles and Practice of Psychiatric Nursing. 10th Ed. Elsevier.",
        "Townsend, M.C. (2015). Psychiatric Mental Health Nursing. 8th Ed. F.A. Davis Company.",
      ],
    },

    {
      id: "risiko-pk",
      kategori: "ASKEP JIWA DIAGNOSIS GANGGUAN JIWA",
      nama: "6. Risiko Perilaku Kekerasan",
      sdki: "D.0146",
      definisi:
        "Risiko Perilaku Kekerasan (RPK) merupakan suatu kondisi di mana individu menunjukkan rentang respons maladaptif terhadap kemarahan yang berisiko mencederai diri sendiri, orang lain, maupun lingkungan secara fisik, emosional, atau verbal. Secara akademik, RPK dipandang sebagai kegagalan mekanisme regulasi emosi and koping destruktif terhadap stresor yang dirasa mengancam keselamatan ego atau integritas fisik.\n\nDalam perspektif keperawatan jiwa profesional, perilaku kekerasan seringkali merupakan bentuk komunikasi yang menyimpang dari pasien yang merasa tidak berdaya, terancam, atau sedang mengalami distorsi realitas (seperti halusinasi perintah). Perawat spesialis memahami bahwa di balik kemarahan yang meledak-ledak, terdapat perasaan takut, rendah diri, and kebutuhan akan kendali yang sangat besar. Fokus asuhan bukan hanya untuk menanggulangi ledakan amarah, melainkan membantu pasien mengenali tanda-tanda awal kemarahan and melatih koping konstruktif untuk mengekspresikannya secara sehat.\n\nSebagai pakar, kita melihat RPK bukan sebagai sifat jahat, melainkan sebagai krisis maladaptif yang memerlukan intervensi keamanan (safety measures) yang ketat sekaligus pendekatan terapeutik yang empatik. Keberhasilan dalam menangani RPK ditentukan oleh kemampuan pasien dalam mempraktikkan teknik relaksasi and asertivitas sebelum kemarahan mencapai titik puncak (crisis state), sehingga mencederai orang lain dapat dicegah sepenuhnya.",
      etiology:
        "Etiologi RPK bersifat multifaktorial, melibatkan ketidakseimbangan neurokimiawi, riwayat trauma, and pola pembelajaran sosial yang maladaptif. Secara biologis, hiperaktivitas pada sistem dopaminergik di jalur mesolimbik and rendahnya kadar serotonin di korteks prefrontal dikaitkan dengan peningkatan impulsivitas and agresi. Selain itu, adanya lesi atau disfungsi pada amigdala (pusat emosi) and hipotalamus dapat menyebabkan ambang batas kemarahan pasien menjadi sangat rendah.\n\nFaktor psikologis seringkali berakar pada pengalaman masa lalu yang penuh dengan kekerasan (siklus kekerasan), penolakan, atau kurangnya kasih sayang dari figur otoritas. Individu yang tumbuh dalam lingkungan di mana agresi dianggap sebagai cara dominan untuk menyelesaikan masalah akan menginternalisasi perilaku tersebut sebagai koping utama. Secara psikodinamika, perilaku kekerasan merupakan mekanisme pertahanan diri terhadap perasaan rendah diri yang ekstrem (Low Self-Esteem) â€“ pasien menyerang sebelum merasa diserang.\n\nFaktor presipitasi dapat berupa stresor lingkungan seperti dihina, merasa dikucilkan, kegagalan dalam berinteraksi sosial, atau adanya halusinasi perintah (Command Hallucinations) yang sangat kuat. Penggunaan zat adiktif (NAPZA) juga seringkali menjadi pemicu hilangnya kontrol diri. Interaksi antara kerentanan neurobiologis and lingkungan yang penuh tekanan tanpa dukungan mekanisme koping yang sehat mengakibatkan individu terjebak dalam pola perilaku kekerasan yang berulang.",
      manifestasi_klinis:
        "Manifestasi klinis RPK sangat dinamis and dapat dideteksi melalui pengamatan terhadap tanda-tanda fisik, emosional, and perilaku yang meningkat secara progresif. Gejala fisik yang menonjol meliputi muka merah, pandangan mata tajam or melotot, tangan mengepal, rahang mengatup kuat, serta peningkatan frekuensi napas and denyut nadi (aktivasi saraf simpatis). Pasien tampak tegang and postur tubuhnya condong ke depan seolah siap menyerang.\n\nManifestasi verbal mencakup suara yang keras and tinggi, nada mengancam, mengeluarkan kata-kata kotor or kasar, serta sering memotong pembicaraan orang lain secara agresif. Secara afektif, pasien menunjukkan emosi yang labil, mudah marah, jengkel, and tampak penuh kecurigaan (paranoia). Pasien mungkin juga mengeluhkan rasa pusing or sesak dada saat kemarahan mulai meningkat. Pengamatan terhadap perilaku motorik menunjukkan gerakan yang tidak bertujuan (agitation), mondar-mandir (pacing), or bahkan tindakan merusak barang di sekitar.\n\nManifestasi yang paling kritis adalah adanya ancaman fisik yang spesifik or tindakan percobaan serangan. Perawat spesialis harus mampu menggunakan pengkajian 'BVC' (BrÃ¸set Violence Checklist) untuk memprediksi risiko kekerasan dalam 24 jam ke depan berdasarkan tanda-tanda tersebut. Dokumentasi yang akurat mengenai pemicu kemarahan and frekuensi ledakan amarah sangat penting untuk mengevaluasi efektivitas terapi kognitif and farmakologis yang diberikan.",
      patofisiologi:
        "Patofisiologi RPK berkaitan erat dengan kegagalan Korteks Prefrontal Media dalam menghambat respon impulsif dari Amigdala. Pada kondisi stresor tinggi, amigdala mengirimkan sinyal bahaya yang memicu pelepasan mendadak hormon stres (Kortisol and Epinefrin). Pada individu sehat, korteks prefrontal akan mengevaluasi ancaman tersebut secara rasional; namun pada pasien RPK, fungsi evaluasi ini gagal, sehingga respon 'Fight' (serang) langsung teraktivasi tanpa filter.\n\nSecara psikopatologi, perilaku kekerasan merupakan manifestasi dari ketidakberdayaan ego dalam menoleransi frustrasi. Ketika mekanisme koping yang biasa (seperti bicara atau menghindar) gagal, pasien menggunakan agresi sebagai cara terakhir untuk mengembalikan rasa kontrol atau kekuasaan atas lingkungannya. Hal ini seringkali diperburuk oleh adanya waham kejar or halusinasi yang membuat pasien merasa hidupnya terancam, sehingga serangan dianggap sebagai bentuk pertahanan diri yang sah (Self-defense delusion).\n\nSecara fungsional, terjadi gangguan pada sistem 'Social Engagement' di otak, di mana pasien kehilangan empati and ketrampilan asertif. Setiap rangsangan netral dari lingkungan sering dinterpretasikan sebagai ancaman atau penghinaan (Hostile Attribution Bias). Psikopatologi ini menjelaskan mengapa penanganan RPK memerlukan kombinasi antara stabilisasi emosi melalui obat and restrukturisasi kognitif untuk mengajarkan cara berpikir yang lebih fleksibel and damai dalam menghadapi konflik.",
      tanda_gejala:
        "Tanda dan gejala RPK diklasifikasikan menjadi Data Subjektif (DS) dan Data Objektif (DO) guna merumuskan asuhan keperawatan yang aman and efektif. Data Subjektif mencakup pernyataan pasien mengenai kemarahannya. Pasien sering mengatakan: 'Saya merasa sangat kesal karena dihina,' 'Saya ingin memukul orang itu,' 'Hati saya terasa panas,' atau 'Suara-suara di telinga saya menyuruh saya menghancurkan barang ini.' Pasien juga mungkin melaporkan riwayat melakukan kekerasan di masa lalu.\n\nData Objektif meliputi temuan fisik and perilaku yang sangat nyata. Muka tampak merah berseri (flushing), mata melotot, and tangan mengepal. Suara terdengar keras, nada bicara menantang, and pasien tampak mondar-mandir dengan gelisah (agitasi motorik). Pasien mungkin menunjukkan tindakan merusak lingkungan (misal: membanting pintu atau melempar bantal) atau melakukan serangan fisik secara langsung terhadap orang lain.\n\nTanda tambahan meliputi peningkatan tekanan darah, nadi yang cepat, and nada suara yang semakin meninggi saat menceritakan pemicu amarahnya. Pengamatan terhadap respon pasien saat diberikan batasan (limit setting) oleh perawat juga memberikan data objektif mengenai kemampuan kontrol diri. Fokus pengkajian harus dilakukan dengan menjaga jarak aman (minimal 2-3 langkah) and memastikan tidak ada barang tajam di sekitar pasien saat proses validasi tanda gejala berlangsung. Sebagai pakar, perawat harus tetap tenang and tidak bersifat konfrontatif.",
      pemeriksaan_penunjang:
        "Pemeriksaan penunjang pada pasien RPK difokuskan pada penilaian risiko kekerasan secara berkala and identifikasi pemicu neurobiologis. Instrumen utama yang digunakan adalah BrÃ¸set Violence Checklist (BVC) or Positive and Negative Syndrome Scale - Excited Component (PANSS-EC) untuk mengukur derajat agitasi and risiko serangan fisik secara objektif. Skor tinggi pada instrumen ini merupakan indikasi perlunya intervensi farmakologis segera or isolasi sementara (seclusion).\n\nMental Status Examination (MSE) secara mendalam pada aspek Afek/Emosi, Isi Pikir (mencari waham kejar), and Persepsi (mencari halusinasi perintah) sangat wajib dilakukan. Selain itu, pemeriksaan laboratorium untuk menyingkirkan kemungkinan intoksikasi zat (Urinalysis for drugs) or gangguan metabolik yang dapat memicu agresi (seperti hipoglikemia) perlu dipertimbangkan. Pengamatan terhadap pola tidur juga penting, karena kurang tidur kronis diketahui dapat menurunkan ambang batas kesabaran and meningkatkan risiko agresi.\n\nDalam beberapa kasus, pemeriksaan genogram keluarga dapat membantu mengidentifikasi siklus kekerasan lintas generasi yang mungkin memengaruhi pola koping pasien. Hasil pemeriksaan penunjang ini dikolaborasikan oleh tim kesehatan jiwa untuk menentukan dosis obat penenang (Tranquilizer) yang sesuai and jadwal terapi kelompok manajemen amarah yang tepat bagi pasien.",
      penatalaksanaan_medis:
        "Penatalaksanaan medis untuk pasien RPK bersifat komprehensif, menggabungkan stabilisasi psikofarmakologi dengan terapi psikososial. Obat antipsikotik golongan tipikal dosis tinggi seperti Haloperidol yang dikombinasikan dengan antiansietas golongan Benzodiazepin (misal: Diazepam atau Lorazepam) seringkali diberikan secara injeksi (intramuskular) saat pasien berada dalam fase krisis untuk menenangkan agitasi motorik secara cepat. Untuk maintenance, antipsikotik atipikal seperti Olanzapine atau Risperidone lebih disukai karena efek samping ekstrapiramidalnya yang lebih minimal.\n\nIntervensi non-farmakologis yang paling utama adalah Manajemen Amarah (Anger Management Training) yang dilakukan melalui sesi terapi kognitif-perilaku (CBT). Pasien dilatih untuk mengenali 'pemicu' (triggers), merasakan sensasi fisik saat marah muncul, and menggunakan teknik koping konstruktif (seperti teknik napas dalam atau memukul bantal) sebelum kehilangan kontrol. Pasien juga mungkin memerlukan terapi kejang listrik (ECT) jika perilaku kekerasan tersebut resisten terhadap obat and sangat membahayakan.\n\nSelain itu, jika pasien sangat tidak terkendali, penatalaksanaan medis mencakup tindakan 'Seclusion' (pengasingan di kamar khusus) atau 'Restraint' (pengikatan fisik secara manusiawi) sesuai dengan protokol hukum and etik keperawatan jiwa. Tindakan ini hanya boleh dilakukan sebagai pilihan terakhir untuk menjamin keselamatan pasien and lingkungan. Sinergi antara ketepatan dosis obat and latihan pengendalian diri yang konsisten merupakan kunci agar pasien tidak lagi bergantung pada agresi sebagai cara penyelesaian masalah.",
      pathway:
        "Stresor/Hinaan -> Perasaan Terancam -> Gagal Koping Konstruktif -> Peningkatan Adrenalin -> Perilaku Kekerasan -> Penyesalan/Penjara -> Penurunan Harga Diri.",
      fokus_pengkajian:
        "Fokus pengkajian keperawatan pada pasien RPK harus diarahkan pada deteksi dini tanda-tanda kemarahan sebelum terjadi ledakan fisik. Perawat perlu menggali: Apa hal yang paling sering membuat pasien marah? Bagaimana perasaan pasien saat marah itu muncul? Pernahkah pasien melukai orang lain sebelumnya? Pengkajian harus tetap memprioritaskan keselamatan perawat, dilakukan di tempat terbuka, and memiliki akses keluar yang mudah.\n\nAspek pengkajian selanjutnya adalah identifikasi pola koping yang biasanya digunakan. Apakah pasien cenderung memendam kemarahan (anger-in) atau langsung meledakkannya (anger-out)? Perawat juga mengkaji kemampuan pasien dalam mengendalikan diri: Bisakah pasien mengikuti instruksi untuk duduk tenang saat emosi meningkat? Fokus juga diarahkan pada pengkajian 'pemicu internal' seperti adanya halusinasi perintah yang menyuruh pasien menyerang seseorang.\n\nTerakhir, perawat mengkaji dampak perilaku kekerasan terhadap fungsi sosial and kepatuhan pengobatan. Apakah pasien merasa menyesal setelah marah? Bagaimanakah respon keluarga terhadap kemarahan pasien? Validasi terhadap data objektif (seperti tatapan mata, nada suara, and ketegangan otot) selama interaksi memberikan gambaran real-time mengenai tingkat risiko kekerasan saat itu. Sebagai pakar, perawat harus mampu menjadi 'cermin' yang tenang bagi pasien, menunjukkan bahwa kemarahan dapat dikelola tanpa merusak.",
      rentang_respon:
        "Rentang respons kemarahan dalam keperawatan jiwa menempatkan perilaku kekerasan sebagai respon yang paling maladaptif and destruktif. Di ujung Respons Adaptif, individu menunjukkan perilaku Asertif (mampu mengungkapkan kemarahan secara jujur tanpa melukai) and Frustrasi (merasa kesal namun tetap terkendali). Pada tahap ini, energi kemarahan digunakan sebagai pendorong untuk perubahan positif.\n\nBergeser ke arah maladaptif, terdapat Pasif (memendam rasa marah yang berisiko meledak nanti) and Agresif (melukai perasaan orang lain secara verbal). Puncak dari respons maladaptif adalah Perilaku Kekerasan atau Amuk (serangan fisik secara langsung). Pada tahap amuk, individu sepenuhnya kehilangan fungsi kontrol ego and bertindak berdasarkan impuls purba yang membahayakan.\n\nIntervensi keperawatan bertujuan membantu pasien bergeser dari respons PK kembali menuju respon asertif. Langkah awal adalah transisi dari amuk menuju kemampuan mengendalikan fisik (PK terkontrol), kemudian menuju pengekspresian verbal yang sopan, hingga akhirnya mencapai kematangan asertivitas. Pemahaman perawat tentang rentang ini sangat penting untuk memberikan intervensi yang sesuai dengan level kemarahan pasien saat itu.",
      mekanisme_koping:
        "Mekanisme koping yang digunakan oleh pasien RPK umumnya bersifat destruktif directed toward others or environment. Bentuk koping maladaptif yang sering ditemukan adalah 'Displacement' (membuat kemarahan kepada sasaran yang lebih lemah) and 'Acting Out' (mengekspresikan konflik internal langsung melalui tindakan fisik tanpa proses pikir). Pasien seringkali menganggap kekerasan sebagai satu-satunya cara untuk membela diri (Self-defense koping).\n\nIntervensi keperawatan bertujuan memberdayakan koping adaptif yang berorientasi pada penyaluran energi kemarahan secara fisik and verbal yang aman. Koping fisik adaptif meliputi teknik napas dalam, melakukan olahraga berat, atau memukul benda yang empuk (pukulan katarsis yang terkontrol). Koping verbal adaptif meliputi penggunaan 'I-Message' (Contoh: 'Saya merasa kesal kalau kamu bicara begitu') untuk menyatakan kebutuhan tanpa menyerang orang lain.\n\nKoping spiritual (seperti berdzikir, berdoa, atau bermeditasi) juga diajarkan untuk membantu menenangkan sistem saraf pusat secara mandiri. Keberhasilan pasien dalam mengenali rasa marahnya and secara sadar memilih untuk melakukan koping adaptif (misal: menarik diri sejenak untuk menenangkan diri) adalah bukti kematangan kontrol diri yang baru dikembangkan. Dukungan keluarga untuk tidak memberikan respon provokatif juga menjadi koping eksternal yang sangat krusial bagi pasien di rumah.",
      masalah_keperawatan: [
        "Risiko Perilaku Kekerasan",
        "Perilaku Kekerasan (Amuk)",
        "Gangguan Persepsi Sensori: Halusinasi",
        "Harga Diri Rendah Kronik",
        "Koping Individu Tidak Efektif",
      ],
      sp_pasien:
        "Strategi Pelaksanaan (SP) untuk pasien RPK dirancang untuk melatih empat cara mengontrol kemarahan secara bertahap.\n\n**SP 1: Latihan mengontrol PK secara Fisik (Tarik napas dalam & Pukul bantal).** Perawat melatih pasien mengenali tanda marah and mengajarkan teknik napas dalam untuk merilekskan otot yang tegang. Pasien juga diajarkan menyalurkan energi kemarahan melalui aktivitas fisik yang tidak merusak (seperti memukul bantal/kasur) jika napas dalam belum cukup.\n\n**SP 2: Latihan mengontrol PK secara Verbal (Asertif).** Perawat melatih pasien mengungkapkan kemarahannya dengan cara yang baik, yaitu: Meminta dengan baik seseuatu yang diinginkan, Menolak dengan baik ajakan yang tidak disukai, and Mengungkapkan perasaan kesal secara jujur tanpa kata kotor.\n\n**SP 3: Latihan mengontrol PK secara Spiritual.** Perawat membantu pasien menentukan kegiatan ibadah yang bisa menenangkan hati (seperti sholat, berdzikir, or berdoa). Ibadah dipandang sebagai cara untuk menyerahkan masalah kepada Tuhan and mendapatkan ketenangan batin.\n\n**SP 4: Latihan mengontrol PK dengan Kepatuhan Obat.** Perawat memberikan edukasi tentang manfaat obat and kerugian jika putus obat. Pasien dilatih prinsip 5 Benar minum obat agar level emosinya tetap stabil secara kimiawi di otak.",
      sp_keluarga:
        "Strategi Pelaksanaan (SP) keluarga bertujuan untuk menciptakan lingkungan rumah yang aman and kondusif bagi stabilitas emosi pasien.\n\n**SP 1: Edukasi mengenai RPK and pencegahan kegawatan.** Keluarga diajarkan cara mengenali tanda-tanda pasien akan marah (muka merah, suara meninggi) and cara menghadapinya dengan tenang (tidak memarahi balik). Keluarga dibekali pengetahuan kapan harus mencari bantuan medis jika pasien mengamuk.\n\n**SP 2: Melatih keluarga cara memfasilitasi latihan kontrol pasien.** Keluarga bimbing untuk mengingatkan jadwal latihan napas dalam and ibadah pasien di rumah. Keluarga juga dilatih memberikan pujian atas keberhasilan pasien meredam emosinya.\n\n**SP 3: Menyiapkan rencana tindak lanjut and manajemen obat.** Keluarga dilatih cara memantau kepatuhan minum obat pasien and memastikan lingkungan rumah bebas dari benda-benda tajam yang bisa disalahgunakan saat pasien emosi.",
      discharge_planning:
        "1. Pasien mampu mendemonstrasikan minimal 2 teknik kontrol PK secara mandiri saat marah muncul.\n2. Pasien menunjukkan ekspresi yang lebih tenang and mampu bicara tanpa nada tinggi.\n3. Keluarga memahami and mampu melakukan tindakan pengamanan awal jika pasien agitasi.\n4. Pasien memiliki jadwal kontrol rutin and stok obat yang cukup untuk di rumah.\n5. Pasien mampu mengenali 'Trigger' kemarahannya and cara menghindarinya secara sehat.",
      edukasi_keluarga:
        "Sangat dilarang bagi keluarga untuk mengejek, menghina, atau memberikan tekanan emosional yang tinggi (kritik pedas) kepada pasien, karena hal tersebut merupakan pemicu utama (trigger) kambuhnya perilaku kekerasan.",
      pohon_masalah:
        "Risiko Mencederai Diri/Orang Lain <- Risiko Perilaku Kekerasan <- Halusinasi Perintah <- Harga Diri Rendah Kronik",
      obat_rekomendasi: [
        "Haloperidol (Haldol/Govotil - Injeksi or Tablet)",
        "Diazepam (Valium - sebagai antiansietas sedatif)",
        "Chlorpromazine (CPZ - untuk efek sedasi malam hari)",
        "Risperidone (untuk kontrol emosi jangka panjang)",
      ],
      referensi: [
        "PPNI (2016). Standar Diagnosis Keperawatan Indonesia (SDKI). Jakarta: DPP PPNI.",
        "PPNI (2018). Standar Intervensi Keperawatan Indonesia (SIKI). Jakarta: DPP PPNI.",
        "PPNI (2019). Standar Luaran Keperawatan Indonesia (SLKI). Jakarta: DPP PPNI.",
        "Stuart, G.W. (2013). Principles and Practice of Psychiatric Nursing. 10th Ed. Elsevier.",
        "Townsend, M.C. (2015). Psychiatric Mental Health Nursing. 8th Ed. F.A. Davis Company.",
      ],
    },

    {
      id: "risiko-bunuh-diri",
      kategori: "ASKEP JIWA DIAGNOSIS GANGGUAN JIWA",
      nama: "7. Risiko Bunuh Diri",
      sdki: "D.0135",
      definisi:
        "Risiko Bunuh Diri (RBD) merupakan suatu kondisi di mana individu memiliki kerentanan untuk melakukan upaya mencederai diri sendiri dengan tujuan mengakhiri hidup. Secara akademik, perilaku bunuh diri dipandang sebagai rentang respons maladaptif konsep diri yang paling ekstrem, yang muncul akibat akumulasi keputusasaan (hopelessness), ketidakberdayaan (helplessness), and perasaan tidak berharga (worthlessness) yang tak tertahankan.\n\nDalam perspektif keperawatan jiwa profesional, bunuh diri bukanlah sebuah diagnosis medis tetapi merupakan kedaruratan psikiatri yang memerlukan intervensi segera and pengawasan ketat. Perawat spesialis memahami bahwa dorongan bunuh diri seringkali disertai dengan ambivalensi â€“ keinginan untuk mati sekaligus keinginan untuk diselamatkan. Oleh karena itu, kehadiran perawat sebagai 'penyangga harapan' (hope-bearer) sangat krusial untuk membantu pasien melewati fase krisis kognitif di mana mereka tidak mampu melihat solusi lain selain kematian.\n\nSebagai pakar, kita melihat RBD sebagai manifestasi dari 'penderitaan mental yang luar biasa' (psychache). Keberhasilan intervensi ditentukan oleh kemampuan perawat dalam membangun aliansi terapeutik yang kuat, menciptakan lingkungan yang aman secara fisik, and membantu pasien mengeksplorasi kembali makna hidup serta alasan-alasan untuk bertahan hidup (reasons for living). RBD adalah kondisi yang bisa dicegah sepenuhnya dengan deteksi dini yang tepat and manajemen risiko yang sitematis.",
      etiology:
        "Etiologi RBD bersifat multifaktorial, melibatkan interaksi antara kerentanan neurobiologis, trauma psikologis, and faktor sosiokultural. Secara biologis, telah dibuktikan adanya penurunan signifikan kadar metabolit serotonin (5-HIAA) di otak and cairan serebrospinal pada individu dengan perilaku bunuh diri impulsif. Selain itu, disregulasi pada aksis HPA (Hypothalamic-Pituitary-Adrenal) menyebabkan individu memiliki ambang toleransi stres yang sangat rendah, sehingga masalah kecil terasa sangat membebani.\n\nFaktor psikologis memegang peranan sentral, terutama adanya riwayat depresi mayor, gangguan bipolar, atau gangguan kepribadian ambang (BPD). Teori Interpersonal Bunuh Diri (Joiner) menyatakan bahwa keinginan bunuh diri muncul saat individu merasa menjadi beban bagi orang lain (perceived burdensomeness) and merasa tidak lagi memiliki keterikatan sosial (thwarted belongingness). Trauma masa kecil seperti pelecehan seksual or fisik, serta kehilangan orang yang dicintai secara mendadak, membentuk skema kognitif 'dunia tidak aman' and 'diri tidak layak hidup'.\n\nFaktor lingkungan (faktor presipitasi) mencakup kerugian finansial yang besar, penyakit terminal yang kronis and menyakitkan, isolasi sosial (terutama pada lansia or janda/duda), serta stigma masyarakat yang menghalangi individu mencari bantuan. Ketersediaan akses terhadap alat bunuh diri (seperti senjata, obat-obatan, or tali) juga meningkatkan kemungkinan eksekusi ide menjadi tindakan nyata. Interaksi antara rasa sakit psikis yang mendalam and ketersediaan cara untuk mengakhirinya menciptakan kondisi kegawatdaruratan RBD.",
      manifestasi_klinis:
        "Manifestasi klinis RBD dapat bersifat laten (tersembunyi) or paten (nyata) and harus dipantau melalui indikator verbal and non-verbal yang sitematis. Gejala verbal yang paling kritis adalah pengungkapan langsung keinginan untuk mati, seperti: 'Saya ingin mengakhiri semua ini,' 'Besok saya sudah tidak ada,' or 'Terima kasih atas semuanya, titip anak-anak saya.' Pasien juga mungkin bicara secara tidak langsung mengenai kematian sebagai solusi atas masalahnya.\n\nManifestasi perilaku (gejala non-verbal) mencakup tindakan persiapan (preparatory acts), seperti menulis surat wasiat, memberikan barang-barang paling berharga kepada orang lain, membereskan masalah finansial secara tiba-tiba, serta mencari informasi mengenai metode bunuh diri di internet. Perubahan mood yang drastis â€“ dari sangat depresi menjadi tiba-tiba sangat tenang and damai â€“ seringkali merupakan tanda bahaya besar karena menunjukkan pasien telah mengambil keputusan final untuk melakukan tindakan bunuh diri (the calm before the storm).\n\nManifestasi fisik meliputi adanya tanda-tanda percobaan bunuh diri di masa lalu (seperti bekas luka sayatan di pergelangan tangan or leher), gangguan tidur yang ekstrim (insomnia/hipersomnia), and penelantaran diri total. Pada pemeriksaan status mental, ditemukan afek yang sangat sedih, putus asa, pandangan masa depan yang gelap (negative cognitive triad), and penurunan kontrol impuls. Deteksi tanda-tanda 'Warning Signs' ini dalam 24-72 jam pertama sangat menentukan keselamatan nyawa pasien.",
      patofisiologi:
        "Patofisiologi RBD melibatkan disfungsi pada Korteks Prefrontal Ventromedial (VMPFC) yang mengatur pengambilan keputusan basis nilai and kontrol impuls emosional. Pada individu dengan risiko bunuh diri tinggi, terjadi 'penyempitan kognitif' (cognitive constriction) â€“ otak kehilangan kemampuan untuk berpikir fleksibel and hanya melihat satu solusi dikotomis (hidup menderita vs mati tenang). Hal ini disebabkan oleh penurunan transmisi serotonergik yang seharusnya berfungsi sebagai rem bagi perilaku impulsif.\n\nSecara psikopatologi, bunuh diri merupakan serangan agresif terhadap 'introject' (objek internal yang menyakitkan di dalam diri). Karena ego tidak mampu mengekspresikan kemarahan kepada orang lain secara asertif, kemarahan tersebut diputarbalikkan ke dalam diri sendiri (aggression turned inward). Kematian dianggap sebagai cara untuk membunuh penderitaan, bukan sekadar membunuh diri fisik. Distorsi kognitif seperti 'generalisasi berlebihan' (semua hal selalu salah) memperkuat keyakinan bahwa masa depan tidak akan pernah membaik.\n\nSecara fungsional, terjadi gangguan pada sistem 'Belongingness' di otak, di mana individu tidak lagi merasakan manfaat dari dukungan sosial. Otak mempersepsikan isolasi sebagai rasa sakit fisik yang nyata. Psikopatologi ini menjelaskan mengapa pendekatan empati and pemulihan koneksi sosial merupakan intervensi biologis and psikologis yang sama pentingnya untuk menyeimbangkan kembali neurokimiawi otak guna menurunkan dorongan bunuh diri.",
      tanda_gejala:
        "Tanda dan gejala RBD dikategorikan menjadi Data Subjektif (DS) dan Data Objektif (DO) untuk menentukan level risiko (rendah, sedang, tinggi). Data Subjektif mencakup ungkapan keputusasaan yang mendalam. Pasien mengatakan: 'Tidak ada harapan lagi buat saya,' 'Saya ingin tidur selamanya,' 'Saya merasa menjadi beban bagi keluarga,' atau 'Saya sudah tidak sanggup lagi menahan rasa sakit ini.' Adanya rencana spesifik mengenai waktu, tempat, and cara bunuh diri adalah tanda subjektif level tinggi.\n\nData Objektif meliputi temuan observasi yang nyata and riwayat medis. Karakteristik paling menonjol adalah adanya bekas luka sayatan, memar pada leher, or bekas percobaan gantung diri yang masih baru. Pasien tampak murung, bicara lambat, kontak mata minim, and menunjukkan agitasi psikomotor (gelisah berlebih). Penemuan barang-barang berbahaya (tali, pisau, or botol obat yang dikumpulkan) di bawah bantal or dalam tas pasien adalah data objektif yang sangat krusial.\n\nTanda tambahan meliputi penolakan total terhadap makanan, perubahan drastis pada pola tidur (sering terbangun tengah malam dengan kecemasan tinggi), and penarikan diri dari seluruh aktivitas kelompok. Penggunaan skala SAD PERSONS memberikan skor objektif yang membantu perawat menentukan frekuensi observasi (misal: pengawasan 15 menit sekali or 1-to-1 observation). Sebagai pakar, perawat harus memvalidasi setiap tanda dengan sikap tenang, jujur, and tidak menghakimi agar pasien mau terbuka mengenai rahasia kegelapannya.",
      pemeriksaan_penunjang:
        "Pemeriksaan penunjang pada pasien RBD difokuskan pada penilaian derajat risiko and stabilitas emosi. Instrumen yang wajib digunakan adalah Skala SAD PERSONS (Sex, Age, Depression, Previous attempt, Ethanol, Rational thinking loss, Social supports lacking, Organized plan, No spouse, Sickness) untuk mengklasifikasikan risiko bunuh diri. Selain itu, Beck Hopelessness Scale (BHS) digunakan untuk mengukur tingkat keputusasaan sebagai prediktor terkuat keinginan bunuh diri di masa depan.\n\nMental Status Examination (MSE) secara komprehensif pada aspek Isi Pikir (ide bunuh diri) and Pengendalian Impuls harus dilakukan secara rutin setiap pergantian shift. Pemeriksaan laboratorium darah (seperti kadar elektrolit, fungsi ginjal, and skrining toksikologi) diperlukan terutama pada pasien pasca percobaan bunuh diri dengan cara menelan zat racun or overdosis obat. Fungsi jantung (EKG) juga dipantau jika pasien menggunakan obat antidepresan golongan trisiklik yang memiliki efek samping kardioselektor.\n\nDalam setting darurat, penggeledahan lingkungan (Environmental safety check) dilakukan secara sitematis untuk memastikan tidak ada celah bagi pasien untuk mencederai diri. Dokumentasi mengenai 'alasan untuk hidup' (Reasons for Living Inventory) dapat memberikan data tambahan mengenai faktor protektif yang masih bisa diperkuat selama proses terapi. Hasil seluruh pemeriksaan penyunjang ini bersifat sangat rahasia (confidential) namun harus diketahui oleh seluruh tim kesehatan yang menangani pasien.",
      penatalaksanaan_medis:
        "Penatalaksanaan medis untuk pasien RBD memprioritaskan keamanan nyawa and stabilisasi mood. Pada fase akut (risiko tinggi), rawat inap isolasi (Seclusion area) dengan pengawasan 24 jam penuh (One-to-one observation) adalah standar medis utama. Farmakoterapi meliputi pemberian obat lini pertama seperti SSRI (Sertraline or Escitalopram) untuk meningkatkan kadar serotonin, namun harus dipantau ketat karena pada awal pengobatan obat ini dapat meningkatkan energi pasien untuk mengeksekusi rencana bunuh diri sebelum mood-nya membaik.\n\nLithium karbonat sering digunakan sebagai 'obat anti-bunuh diri' spesifik pada pasien gangguan bipolar karena efektivitasnya dalam menurunkan agresivitas and impulsivitas. Jika risiko bunuh diri sangat tinggi and pasien menolak makan or minum, Terapi Kejang Listrik (ECT) merupakan intervensi penyelamat nyawa (life-saving) yang paling efektif and bekerja cepat dalam menurunkan ide bunuh diri yang resisten terhadap obat. Psikoterapi khusus seperti Dialectical Behavior Therapy (DBT) or Cognitive Behavioral Therapy for Suicide Prevention (CBT-SP) diberikan untuk melatih pasien mengelola emosi yang intens.\n\nPenangan medis juga mencakup stabilisasi fisik jika pasien datang dalam kondisi pasca percobaan (misal: bilas lambung/gastric lavage pada kasus keracunan). Setelah fase krisis terlewati, penatalaksanaan medis bergeser ke arah pemantauan efek samping obat and persiapan reintegrasi ke masyarakat. Sinergi antara keamanan lingkungan yang ketat, ketepatan medikasi, and psikoterapi yang suportif adalah satu-satunya cara untuk menjamin keselamatan pasien dari dorongan destruktif diri sendiri.",
      pathway:
        "Keputusasaan Amorf -> Perasaan Tidak Berharga -> Ambivalensi Kematian -> Ide Bunuh Diri -> Perencanaan Spontan/Sitematis -> Upaya Bunuh Diri -> Kegagalan Organ/Kematian.",
      fokus_pengkajian:
        "Fokus pengkajian keperawatan pada pasien RBD harus sangat spesifik and tajam. Perawat wajib bertanya secara langsung (Direct Inquiry) namun empatik: 'Apakah Anda pernah terpikir untuk mengakhiri hidup?', 'Apakah saat ini Anda sudah punya rencana bagaimana caranya?', and 'Apakah alat untuk melakukannya sudah tersedia?'. Bertanya tentang bunuh diri tidak akan memberikan ide baru bagi pasien, justru memberikan kesempatan bagi pasien untuk menumpahkan penderitaannya.\n\nAspek selanjutnya adalah pengkajian terhadap riwayat masa lalu and faktor risiko. 'Pernahkah Anda mencoba melakukannya sebelumnya?' (karena riwayat percobaan sebelumnya adalah prediktor terbaik). Perawat juga harus mengkaji 'faktor protektif' (harapan) yang masih ada, seperti: 'Siapa atau apa yang membuat Anda masih bertahan hingga hari ini?'. Fokus juga diarahkan pada dukungan sosial and ketersediaan senjata or obat-obatan di rumah pasien.\n\nTerakhir, perawat mengkaji 'Kontrak Aman' (Safety Contract) â€“ kesediaan pasien untuk berjanji secara lisan or tulisan bahwa mereka akan memanggil perawat jika dorongan bunuh diri itu muncul kembali. Validasi data objektif (seperti perilaku impulsif and tanda-tanda persiapan perpisahan) harus didokumentasikan dengan sangat teliti. Sebagai pakar, perawat harus mampu membedakan antara 'Isyarat Bunuh Diri' (tidak langsung), 'Ancaman Bunuh Diri' (verbal), and 'Percobaan Bunuh Diri' (tindakan), karena tingkatan ini menentukan intensitas pengawasan.",
      rentang_respon:
        "Rentang respons perlindungan diri dalam keperawatan jiwa menempatkan bunuh diri sebagai respon maladaptif yang paling terminal. Di ujung Respons Adaptif, individu menunjukkan perilaku Peningkatan Diri (Self-enhancement) and Pertumbuhan Diri (mampu mengatasi stresor sebagai pelajaran hidup). Pada tahap ini, individu memiliki resiliensi yang kuat and menghargai hidup sebagai karunia yang suci.\n\nBergeser ke arah maladaptif, terdapat Pencederaan Diri (Self-harm/Self-mutilation tanpa tujuan mati), Isyarat Bunuh Diri (ungkapan verbal samar), and Ancaman Bunuh Diri (ungkapan verbal jelas). Puncak dari respons maladaptif adalah Percobaan Bunuh Diri (Suicide attempt) yang berujung pada kematian nyata. Spektrum ini menunjukkan bahwa setiap bentuk pencederaan diri, meskipun kecil, harus dianggap sebagai alarm serius sebelum berkembang menjadi tindakan yang fatal.\n\nIntervensi keperawatan bertujuan menarik pasien kembali dari tebing kematian menuju area perlindungan diri yang adaptif. Langkah awal adalah menjamin keamanan fisik (Safety first), diikuti dengan pemulihan harapan (Hope restoration), and diakhiri dengan pelatihan koping yang tangguh. Pemahaman tentang rentang ini mencegah perawat memberikan penilaian yang meremehkan terhadap pasien yang sering melakukan self-harm (seeking attention label), karena setiap perilaku di rentang maladaptif memiliki risiko kematian yang nyata.",
      mekanisme_koping:
        "Mekanisme koping pada pasien RBD umumnya bersifat destruktif directed toward self. Bentuk koping maladaptif yang sering ditemukan adalah 'Represi' (menekan perasaan sedih berlebih hingga meledak dalam bentuk dorongan mati), 'Denial' terhadap masalah yang ada, and 'Isolasi' total untuk menghindari bantuan. Pasien melihat bunuh diri sebagai satu-satunya koping penyelesaian masalah (The ultimate coping mechanism) untuk menghentikan rasa sakit emosional.\n\nIntervensi keperawatan bertujuan untuk memperkenalkan koping adaptif yang berorientasi pada pertahanan hidup and ventilasi emosi. Pasien dilatih untuk mencari dukungan sosial (Seeking social support) secara aktif saat merasa hampa. Koping kognitif digunakan untuk mengidentifikasi 'Pikiran Otomatis Negatif' and menggantinya dengan daftar 'Alasan untuk Hidup'. Teknik ventilasi perasaan melalui menulis jurnal or seni juga dapat membantu menurunkan tekanan psikis.\n\nKoping spiritual menjadi fondasi yang sangat kuat, di mana pasien dibantu untuk menemukan makna di balik penderitaannya (Logoterapi). Perasaan bahwa mereka dicintai oleh Tuhan and memiliki misi hidup yang belum selesai dapat menjadi penghalang kognitif yang kuat terhadap dorongan bunuh diri. Keberanian pasien untuk menghancurkan rencana bunuh dirinya and membuat kontrak keamanan yang jujur adalah bukti awal pemulihan mekanisme koping yang sehat.",
      masalah_keperawatan: [
        "Risiko Bunuh Diri",
        "Keputusasaan (Hopelessness)",
        "Ketidakberdayaan",
        "Harga Diri Rendah Kronik",
        "Risiko Pencederaan Diri",
        "Dukacita Terdisfungsi",
      ],
      sp_pasien:
        "Strategi Pelaksanaan (SP) untuk pasien RBD difokuskan pada pengamanan and pemulihan harapan secara bertahap.\n\n**SP 1: Menjamin Keamanan Lingkungan & Kontrak Aman.** Perawat mengidentifikasi benda-benda berbahaya and menjauhkannya. Pasien diajak membuat kontrak keamanan: 'Saya berjanji jika ada dorongan untuk mati, saya akan segera memberitahu perawat'. Latih cara mengusir pikiran negatif tersebut dengan teknik pengalihan perhatian.\n\n**SP 2: Mengidentifikasi Aspek Positif & Kemampuan Diri.** Membantu pasien menemukan kembali kelebihan and prestasi yang pernah diraih di masa lalu. Hal ini bertujuan untuk mengikis perasaan tidak berharga and membangun kembali keyakinan bahwa pasien masih memiliki kapasitas untuk melakukan sesuatu yang baik.\n\n**SP 3: Mengidentifikasi Harapan Masa Depan & Alasan Hidup.** Perawat membantu pasien merenungkan alasan-alasan kuat untuk tetap hidup (anak, tuhan, atau hobi). Pasien diminta menuliskan daftar tersebut and membacanya setiap kali dorongan bunuh diri muncul. Fokus pada 'Hope' sebagai obat utama RBD.\n\n**SP 4: Menyusun Rencana Masa Depan & Latihan Koping.** Membantu pasien membuat rencana kegiatan harian yang produktif and menetapkan tujuan jangka pendek yang realistis. Latih pasien cara meminta tolong kepada orang lain jika masalah hidup dirasa terlalu berat, sehingga bunuh diri bukan lagi menjadi pilihan solusi.",
      sp_keluarga:
        "Strategi Pelaksanaan (SP) keluarga bertujuan untuk menciptakan 'sistem pengawasan ketat' yang penuh kasih sayang di rumah.\n\n**SP 1: Edukasi Mengenai Tanda Bahaya & Pencegahan Sekunder.** Keluarga diajarkan cara mengenali tanda-tanda pasien mulai menyiapkan rencana bunuh diri. Tekankan pentingnya pengawasan 24 jam (jangan tinggalkan pasien sendirian, bahkan ke toilet pun harus dipantau jika risiko tinggi).\n\n**SP 2: Mengamankan Lingkungan Rumah.** Melatih keluarga cara menyimpan alat-alat berbahaya (pisau, tali, pestisida, deterjen, obat-obatan keras) di tempat yang terkunci and tidak diketahui oleh pasien. Berikan pemahaman bahwa keamanan adalah prioritas nomor satu.\n\n**SP 3: Memberikan Dukungan Emosional & Harapan.** Mengajarkan keluarga cara menjadi pendengar yang baik bagi keluhan pasien tanpa menghakimi. Bantu keluarga menyusun rencana tindak lanjut and jadwal kontrol agar penanganan RBD berkelanjutan.",
      discharge_planning:
        "1. Pasien mampu menyatakan secara konsisten keinginan untuk tetap hidup.\n2. Pasien memiliki kontrak keamanan yang masih berlaku and dipahami.\n3. Keluarga mampu menjelaskan and mendemonstrasikan cara modifikasi lingkungan rumah yang aman.\n4. Pasien memiliki nomor kontak darurat (Crisis Hotline or Perawat) yang selalu dibawa.\n5. Pasien sudah mendapatkan dosis obat penstabil mood yang adekuat.\n6. Rencana kegiatan harian setelah pulang sudah disusun and disetujui pasien.",
      edukasi_keluarga:
        "Keluarga harus waspada terhadap fase 'Calm after the storm' â€“ saat pasien yang tadinya sangat sedih tiba-tiba tampak ceria or tenang. Ini seringkali bukan tanda sembuh, melainkan tanda pasien sudah menemukan cara and waktu yang tepat untuk bunuh diri. Segera hubungi tenaga profesional jika hal ini terjadi.",
      pohon_masalah:
        "Kematian <- Risiko Bunuh Diri <- Keputusasaan <- Stressor Hidup Kronis <- Kurangnya Dukungan Sosial",
      obat_rekomendasi: [
        "Antidepresan SSRI (Sertraline/Fluoxetine)",
        "Lithium Karbonat (untuk menurunkan impulsivitas)",
        "Antipsikotik Atipikal (Clozapine - terbukti menurunkan risiko bunuh diri)",
        "Injeksi Diazepam (saat krisis agitasi bunuh diri)",
      ],
      referensi: [
        "PPNI (2016). Standar Diagnosis Keperawatan Indonesia (SDKI). Jakarta: DPP PPNI.",
        "PPNI (2018). Standar Intervensi Keperawatan Indonesia (SIKI). Jakarta: DPP PPNI.",
        "PPNI (2019). Standar Luaran Keperawatan Indonesia (SLKI). Jakarta: DPP PPNI.",
        "Stuart, G.W. (2013). Principles and Practice of Psychiatric Nursing. 10th Ed. Elsevier.",
        "Townsend, M.C. (2015). Psychiatric Mental Health Nursing. 8th Ed. F.A. Davis Company.",
      ],
    },

  ],
  gejala: [
    {
      id: 1,
      teks: "Mendengar bisikan/suara gaib",
      diagnosa: "D.0085",
      tipe: "Diagnosis Gangguan",
    },
    {
      id: 2,
      teks: "Melihat bayangan tidak nyata",
      diagnosa: "D.0085",
      tipe: "Diagnosis Gangguan",
    },
    {
      id: 3,
      teks: "Menarik diri/Menyendiri",
      diagnosa: "D.0121",
      tipe: "Diagnosis Gangguan",
    },
    {
      id: 4,
      teks: "Tidak mau bicara/Apatis",
      diagnosa: "D.0121",
      tipe: "Diagnosis Gangguan",
    },
    {
      id: 5,
      teks: "Mengatakan merasa tidak berguna",
      diagnosa: "D.0087",
      tipe: "Diagnosis Gangguan",
    },
    {
      id: 6,
      teks: "Mengevaluasi diri negatif",
      diagnosa: "D.0087",
      tipe: "Diagnosis Gangguan",
    },
    {
      id: 7,
      teks: "Marah-marah tanpa sebab",
      diagnosa: "D.0146",
      tipe: "Diagnosis Gangguan",
    },
    {
      id: 8,
      teks: "Mata melotot & pandangan tajam",
      diagnosa: "D.0146",
      tipe: "Diagnosis Gangguan",
    },
    {
      id: 9,
      teks: "Mengancam secara verbal/fisik",
      diagnosa: "D.0146",
      tipe: "Diagnosis Gangguan",
    },
    {
      id: 10,
      teks: "Penampilan kotor/bau badan",
      diagnosa: "D.0109",
      tipe: "Diagnosis Gangguan",
    },
    {
      id: 11,
      teks: "Tidak mau mandi/berhias",
      diagnosa: "D.0109",
      tipe: "Diagnosis Gangguan",
    },
    {
      id: 12,
      teks: "Merasa cemas & jantung berdebar",
      diagnosa: "D.0080",
      tipe: "Diagnosis Risiko",
    },
    {
      id: 13,
      teks: "Sulit konsentrasi/Gelisah",
      diagnosa: "D.0080",
      tipe: "Diagnosis Risiko",
    },
    {
      id: 14,
      teks: "Keyakinan memiliki kekuatan gaib",
      diagnosa: "D.0105",
      tipe: "Diagnosis Gangguan",
    },
    {
      id: 15,
      teks: "Merasa diintai/dimusuhi (Waham Curiga)",
      diagnosa: "D.0105",
      tipe: "Diagnosis Gangguan",
    },
    {
      id: 16,
      teks: "Ibu hamil ingin meningkatkan kesehatan janin",
      diagnosa: "D.0123",
      tipe: "Diagnosis Sehat",
    },
    {
      id: 17,
      teks: "Lansia ingin mengisi waktu luang bermakna",
      diagnosa: "D.0123",
      tipe: "Diagnosis Sehat",
    },
    {
      id: 18,
      teks: "Mengatakan ingin mengakhiri hidup",
      diagnosa: "D.0135",
      tipe: "Diagnosis Gangguan",
    },
    {
      id: 19,
      teks: "Menyimpan benda tajam/tali secara sembunyi",
      diagnosa: "D.0135",
      tipe: "Diagnosis Gangguan",
    },
    {
      id: 20,
      teks: "Mengatakan merasa tidak berdaya",
      diagnosa: "D.0092",
      tipe: "Diagnosis Risiko",
    },
    {
      id: 21,
      teks: "Wajah tegang & sering mengerutkan dahi",
      diagnosa: "D.0080",
      tipe: "Diagnosis Risiko",
    },
    {
      id: 22,
      teks: "Susah tidur (Insomnia)",
      diagnosa: "D.0080",
      tipe: "Diagnosis Risiko",
    },
    {
      id: 23,
      teks: "Menutup diri dari lingkungan",
      diagnosa: "D.0121",
      tipe: "Diagnosis Gangguan",
    },
    {
      id: 24,
      teks: "Tidak ada kontak mata",
      diagnosa: "D.0121",
      tipe: "Diagnosis Gangguan",
    },
    {
      id: 25,
      teks: "Berbicara pelan & tidak jelas",
      diagnosa: "D.0087",
      tipe: "Diagnosis Gangguan",
    },
    {
      id: 26,
      teks: "Postur tubuh membungkuk",
      diagnosa: "D.0087",
      tipe: "Diagnosis Gangguan",
    },
    {
      id: 27,
      teks: "Bicara kacau (Inkoheren)",
      diagnosa: "D.0105",
      tipe: "Diagnosis Gangguan",
    },
    {
      id: 28,
      teks: "Sikap curiga yang berlebihan",
      diagnosa: "D.0105",
      tipe: "Diagnosis Gangguan",
    },
    {
      id: 29,
      teks: "Badan bau & kusam",
      diagnosa: "D.0109",
      tipe: "Diagnosis Gangguan",
    },
    {
      id: 30,
      teks: "Makan berceceran & tidak rapi",
      diagnosa: "D.0109",
      tipe: "Diagnosis Gangguan",
    },
    {
      id: 31,
      teks: "Wajah merah & tangan mengepal",
      diagnosa: "D.0146",
      tipe: "Diagnosis Gangguan",
    },
    {
      id: 32,
      teks: "Merusak properti/benda",
      diagnosa: "D.0146",
      tipe: "Diagnosis Gangguan",
    },
    {
      id: 33,
      teks: "Mengatakan hidup tidak berguna",
      diagnosa: "D.0135",
      tipe: "Diagnosis Gangguan",
    },
    {
      id: 34,
      teks: "Ada bekas luka di nadi/leher",
      diagnosa: "D.0135",
      tipe: "Diagnosis Gangguan",
    },
    {
      id: 35,
      teks: "Perasaan hampa & sepi",
      diagnosa: "D.0121",
      tipe: "Diagnosis Gangguan",
    },
    {
      id: 36,
      teks: "Ketakutan berlebih pada objek/situasi",
      diagnosa: "D.0080",
      tipe: "Diagnosis Risiko",
    },
    {
      id: 37,
      teks: "Keinginan meningkatkan kualitas hidup",
      diagnosa: "D.0123",
      tipe: "Diagnosis Sehat",
    },
    {
      id: 38,
      teks: "Bertanya hal yang sama berulang kali",
      diagnosa: "D.0111",
      tipe: "Diagnosis Sehat",
    },
    {
      id: 40,
      teks: "Sering melamun sendirian",
      diagnosa: "D.0121",
      tipe: "Diagnosis Gangguan",
    },
  ],
  scales: [
    {
      id: "mmse",
      nama: "MMSE (Mini-Mental State Examination)",
      items: [
        "Orientasi Waktu (Tahun, Musim, Tgl, Hari, Bulan)",
        "Orientasi Tempat (Negara, Provinsi, Kota, RS, Lantai)",
        "Registrasi (Sebutkan 3 objek & minta pasien ulangi)",
        "Atensi & Kalkulasi (Hitung mundur 100-7 atau eja W-A-H-Y-U terbalik)",
        "Recall (Minta ulangi 3 objek tadi)",
        "Bahasa: Menamai Benda (Tunjukkan pensil & jam tangan)",
        "Bahasa: Mengulangi kata (Namun, tanpa, dan jika)",
        "Bahasa: Perintah 3 langkah",
        "Bahasa: Membaca & Melaksanakan (Pejamkan mata Anda)",
        "Bahasa: Menulis kalimat lengkap",
        "Bahasa: Menyalin Gambar (Pentagon tumpang tindih)",
      ],
      options: ["0 (Salah/Tidak Mampu)", "1 (Benar/Mampu)"],
    },
    {
      id: "gaf",
      nama: "Global Assessment of Functioning (GAF)",
      items: ["Kondisi Global (Psikologis, Sosial, Pekerjaan)"],
      options: [
        "91-100: Fungsi Maksimal",
        "81-90: Gejala Minimal",
        "71-80: Gejala Ringan",
        "61-70: Gejala Sedang",
        "51-60: Gejala Cukup Berat",
        "41-50: Gejala Berat",
        "31-40: Beberapa Gangguan dalam Realita",
        "21-30: Waham/Halusinasi Jelas",
        "11-20: Bahaya Mencederai Diri/Orang Lain",
        "01-10: Bahaya Maut/Usaha Bunuh Diri Parah",
      ],
    },
    {
      id: "hdr-scale",
      nama: "Skala Harga Diri Rosenberg",
      items: [
        "Saya merasa bahwa saya adalah orang yang berharga.",
        "Saya merasa bahwa saya memiliki sejumlah kualitas yang baik.",
        "Semua dalam diri saya cenderung merasa bahwa saya adalah seorang yang gagal.",
        "Saya mampu melakukan hal-hal sebaik yang dilakukan orang lain.",
        "Saya merasa tidak banyak hal yang bisa saya banggakan.",
        "Saya memiliki sikap positif terhadap diri saya sendiri.",
        "Secara keseluruhan, saya merasa puas dengan diri saya sendiri.",
        "Saya berharap saya bisa lebih menghargai diri saya sendiri.",
        "Saya kadang-kadang merasa benar-benar tidak berguna.",
        "Kadang saya berpikir saya sama sekali tidak baik.",
      ],
      options: [
        "Sangat Tidak Setuju",
        "Tidak Setuju",
        "Setuju",
        "Sangat Setuju",
      ],
    },
    {
      id: "panss-ec",
      nama: "PANSS-EC (Excitement Component)",
      items: [
        "Agitasi / Excitement",
        "Hostility (Permusuhan)",
        "Tension (Ketegangan)",
        "Uncooperativeness",
        "Impulse Control",
      ],
      options: [
        "1 (Tidak Ada)",
        "2 (Sangat Ringan)",
        "3 (Ringan)",
        "4 (Sedang)",
        "5 (Agak Berat)",
        "6 (Berat)",
        "7 (Sangat Berat)",
      ],
    },
  ],
  obat: [
    // ðŸ§  1. ANTIPSIKOTIK (Neuroleptik)
    // A. Antipsikotik Tipikal (Generasi 1)
    {
      nama: "Haloperidol (Haldol/Govotil)",
      jenis: "Antipsikotik Tipikal (Generasi 1)",
      dosis: "2-5 mg (setiap 8-12 jam)",
      indikasi: "Skizofrenia, halusinasi, waham, agitasi.",
      efek: "Efek samping utama: EPS (Distonia akut, Akathisia, Parkinsonisme), Tardive dyskinesia.",
    },
    {
      nama: "Chlorpromazine (CPZ/Largactil)",
      jenis: "Antipsikotik Tipikal (Generasi 1)",
      dosis: "100-200 mg (malam hari)",
      indikasi: "Gaduh gelisah, cegah muntah, psikotik akut.",
      efek: "Sedasi kuat, hipotensi ortostatik, EPS.",
    },
    {
      nama: "Trifluoperazine (Stelazine)",
      jenis: "Antipsikotik Tipikal (Generasi 1)",
      dosis: "5-10 mg (1-2 kali sehari)",
      indikasi: "Psikosis kronis, ansietas berat.",
      efek: "EPS, penglihatan kabur, mulut kering.",
    },
    {
      nama: "Fluphenazine (Anatensol)",
      jenis: "Antipsikotik Tipikal (Generasi 1)",
      dosis: "2.5-10 mg/hari",
      indikasi: "Skizofrenia kronis, psikosis.",
      efek: "EPS signifikan, fotosensitifitas.",
    },
    {
      nama: "Perphenazine (Trilafon)",
      jenis: "Antipsikotik Tipikal (Generasi 1)",
      dosis: "4-8 mg (3 kali sehari)",
      indikasi: "Psikosis berat, mual muntah hebat.",
      efek: "Tremor, kaku kuduk, gangguan akomodasi.",
    },

    // B. Antipsikotik Atipikal (Generasi 2)
    {
      nama: "Risperidone (Risperdal/Persidal)",
      jenis: "Antipsikotik Atipikal (Generasi 2)",
      dosis: "2-4 mg (1-2 kali sehari)",
      indikasi: "Skizofrenia, gejala positif & negatif, Bipolar manik.",
      efek: "Lebih aman EPS, risiko metabolik: pusing, peningkat BB.",
    },
    {
      nama: "Clozapine (Clozaril/Sizoril)",
      jenis: "Antipsikotik Atipikal (Generasi 2)",
      dosis: "25-100 mg (malam hari)",
      indikasi: "Skizofrenia resisten pengobatan.",
      efek: "RISIKO AGRANULOSITOSIS (Wajib cek darah rutin), sedasi, hipersalivasi.",
    },
    {
      nama: "Olanzapine (Zyprexa)",
      jenis: "Antipsikotik Atipikal (Generasi 2)",
      dosis: "5-20 mg (malam hari)",
      indikasi: "Skizofrenia, episode manik, stabilisasi mood.",
      efek: "Kenaikan BB signifikan, Risiko Diabetes, Sedasi.",
    },
    {
      nama: "Quetiapine (Seroquel)",
      jenis: "Antipsikotik Atipikal (Generasi 2)",
      dosis: "300-400 mg (malam hari)",
      indikasi: "Skizofrenia, depresi bipolar, episode manik, gangguan tidur.",
      efek: "Sedasi sangat kuat, mulut kering, peningkatan nafsu makan.",
    },
    {
      nama: "Aripiprazole (Abilify)",
      jenis: "Antipsikotik Atipikal (Generasi 2)",
      dosis: "10-15 mg (sekali sehari)",
      indikasi: "Skizofrenia, stabilizer mood tambahan.",
      efek: "Akatisia ringan, insomnia, minimal efek metabolik.",
    },
    {
      nama: "Ziprasidone (Geodon)",
      jenis: "Antipsikotik Atipikal (Generasi 2)",
      dosis: "40-80 mg (2 kali sehari)",
      indikasi: "Skizofrenia, episode manik/campuran Bipolar.",
      efek: "Perpanjangan interval QT (Jantung), pusing, mengantuk.",
    },

    // ðŸ˜Ÿ 2. ANTIANSIETAS (Anxiolytic)
    {
      nama: "Diazepam (Valium)",
      jenis: "Antiansietas (Benzodiazepin)",
      dosis: "2-5 mg (setiap 8-12 jam)",
      indikasi: "Ansietas, panik, kejang, spasm otot.",
      efek: "Ketergantungan, Sedasi, Depresi napas.",
    },
    {
      nama: "Lorazepam (Ativan)",
      jenis: "Antiansietas (Benzodiazepin)",
      dosis: "0.5-2 mg (malam hari)",
      indikasi: "Ansietas, insomnia karena cemas, status epileptikus.",
      efek: "Mengantuk berat, ketergantungan.",
    },
    {
      nama: "Alprazolam (Xanax)",
      jenis: "Antiansietas (Benzodiazepin)",
      dosis: "0.25-0.5 mg (saat cemas)",
      indikasi: "Gangguan panik, ansietas menyeluruh (GAD).",
      efek: "Ketergantungan tinggi, sedasi cepat.",
    },
    {
      nama: "Clonazepam (Rivotril)",
      jenis: "Antiansietas (Benzodiazepin)",
      dosis: "0.5-2 mg (malam hari)",
      indikasi: "Gangguan panik, kejang, akatisia.",
      efek: "Kelelahan, koordinasi terganggu.",
    },
    {
      nama: "Buspirone",
      jenis: "Antiansietas (Non-Benzodiazepin)",
      dosis: "5-10 mg (2-3 kali sehari)",
      indikasi: "Ansietas kronis (Lebih aman, tidak adiktif).",
      efek: "Onset lambat (1-2 minggu), pusing, mual.",
    },

    // ðŸ˜” 3. ANTIDEPRESAN
    {
      nama: "Fluoxetine (Prozac)",
      jenis: "Antidepresan (SSRI)",
      dosis: "20 mg (pagi)",
      indikasi: "Depresi mayor, OCD, Bulimia.",
      efek: "Mual, disfungsi seksual, insomnia.",
    },
    {
      nama: "Sertraline (Zoloft)",
      jenis: "Antidepresan (SSRI)",
      dosis: "50 mg (setelah makan)",
      indikasi: "Depresi, PTSD, kecemasan sosial.",
      efek: "Diare, tremor, pusing.",
    },
    {
      nama: "Citalopram (Celexa)",
      jenis: "Antidepresan (SSRI)",
      dosis: "20 mg/hari",
      indikasi: "Depresi berat, gangguan panik.",
      efek: "Mulut kering, berkeringat.",
    },
    {
      nama: "Escitalopram (Cipralex)",
      jenis: "Antidepresan (SSRI)",
      dosis: "10 mg/hari",
      indikasi: "Depresi, GAD.",
      efek: "Letih, gangguan ejakulasi.",
    },
    {
      nama: "Paroxetine (Seroxat)",
      jenis: "Antidepresan (SSRI)",
      dosis: "20 mg/hari",
      indikasi: "Depresi, Gangguan panik, OCD.",
      efek: "Sedasi, sembelit, kenaikan BB.",
    },
    {
      nama: "Venlafaxine (Efexor)",
      jenis: "Antidepresan (SNRI)",
      dosis: "75 mg/hari",
      indikasi: "Depresi berat, ansietas menyeluruh.",
      efek: "Peningkatan TD, mual.",
    },
    {
      nama: "Duloxetine (Cymbalta)",
      jenis: "Antidepresan (SNRI)",
      dosis: "40-60 mg/hari",
      indikasi: "Depresi, nyeri neuropatik.",
      efek: "Nafsu makan turun, mengantuk.",
    },
    {
      nama: "Amitriptyline",
      jenis: "Antidepresan (TCA)",
      dosis: "25-75 mg (malam)",
      indikasi: "Depresi, nyeri kronis.",
      efek: "Overdosis berbahaya, Antikolinergik, Sedasi.",
    },
    {
      nama: "Imipramine (Tofranil)",
      jenis: "Antidepresan (TCA)",
      dosis: "75-150 mg/hari",
      indikasi: "Depresi, enuresis pada anak.",
      efek: "Pandangan kabur, jantung berdebar.",
    },
    {
      nama: "Clomipramine (Anafranil)",
      jenis: "Antidepresan (TCA)",
      dosis: "25-100 mg/hari",
      indikasi: "OCD berat.",
      efek: "Mulut kering, konstipasi.",
    },
    {
      nama: "Phenelzine (Nardil)",
      jenis: "Antidepresan (MAOI)",
      dosis: "15-60 mg/hari",
      indikasi: "Depresi resisten.",
      efek: "Hindari makanan tinggi tiramin (Krisis hipertensi).",
    },
    {
      nama: "Isocarboxazid (Marplan)",
      jenis: "Antidepresan (MAOI)",
      dosis: "20-60 mg/hari",
      indikasi: "Depresi resisten.",
      efek: "Pusing, mulut kering.",
    },

    // ðŸ˜µ 4. MOOD STABILIZER
    {
      nama: "Lithium Carbonate",
      jenis: "Mood Stabilizer",
      dosis: "600-900 mg (titrasi)",
      indikasi: "Gangguan Bipolar.",
      efek: "Toksik lithium (monitor kadar darah), tremor, ggn ginjal/tiroid.",
    },
    {
      nama: "Asam Valproat (Depakote)",
      jenis: "Mood Stabilizer",
      dosis: "500-1000 mg/hari",
      indikasi: "Manik akut, Bipolar.",
      efek: "Mual, rambut rontok, hepatotoksik.",
    },
    {
      nama: "Carbamazepine (Tegretol)",
      jenis: "Mood Stabilizer",
      dosis: "200-400 mg (2 kali sehari)",
      indikasi: "Episode manik campuran.",
      efek: "Ruam kulit, pusing, diplopia.",
    },
    {
      nama: "Lamotrigine (Lamictal)",
      jenis: "Mood Stabilizer",
      dosis: "100-200 mg/hari",
      indikasi: "Maintenance Bipolar depresi.",
      efek: "Risiko Sindrom Stevens-Johnson.",
    },

    // ðŸ˜´ 5. HIPNOTIK & SEDATIF
    {
      nama: "Zolpidem (Stilnox)",
      jenis: "Hipnotik & Sedatif",
      dosis: "5-10 mg (sebelum tidur)",
      indikasi: "Insomnia jangka pendek.",
      efek: "Sakit kepala, amnesia jangka pendek.",
    },
    {
      nama: "Zopiclone (Imovane)",
      jenis: "Hipnotik & Sedatif",
      dosis: "7.5 mg (malam)",
      indikasi: "Kesulitan tidur.",
      efek: "Rasa pahit di mulut, pusing.",
    },
    {
      nama: "Eszopiclone (Lunesta)",
      jenis: "Hipnotik & Sedatif",
      dosis: "1-3 mg (malam)",
      indikasi: "Insomnia kronis.",
      efek: "Sakit kepala, mulut kering.",
    },

    {
      nama: "Trihexyphenidyl (THP/Arkine)",
      jenis: "Antiparkinson (Antikolinergik)",
      dosis: "2 mg (2-3 kali sehari)",
      indikasi:
        "Mengatasi efek samping Ekstrapiramidal (EPS) akibat antipsikotik.",
      efek: "Mulut kering, pandangan kabur, retensi urin, bingung.",
    },
    {
      nama: "Benztropine (Cogentin)",
      jenis: "Antiparkinson (Antikolinergik)",
      dosis: "1-2 mg (1-2 kali sehari)",
      indikasi: "Distonia akut, Parkinsonisme.",
      efek: "Sedasi, konstipasi, mulut kering.",
    },
    {
      nama: "Biperiden (Akineton)",
      jenis: "Antiparkinson (Antikolinergik)",
      dosis: "2 mg (1-3 kali sehari)",
      indikasi: "Gangguan motorik akibat obat antipsikotik.",
      efek: "Pusing, kantuk, kecemasan.",
    },
    {
      nama: "Diphenhydramine (Benadryl)",
      jenis: "Antihistamin (dengan efek Antikolinergik)",
      dosis: "25-50 mg (IM/Oral)",
      indikasi: "Distonia akut (Emergency).",
      efek: "Mengantuk hebat, pusing.",
    },
    {
      nama: "Propranolol (Inderal)",
      jenis: "Beta-Blocker (Adjunct)",
      dosis: "10-40 mg (2-3 kali sehari)",
      indikasi: "Akathisia (gelisah motorik), ansietas fisik.",
      efek: "Bradikardia, hipotensi, sesak napas.",
    },
  ],
  sdki: [
    {
      kode: "D.0085",
      nama: "Gangguan Persepsi Sensori",
      definisi:
        "Perubahan persepsi terhadap stimulus baik internal maupun eksternal.",
      penyebab: "Gangguan psikologis, penggunaan zat, stres berlebih.",
    },
    {
      kode: "D.0121",
      nama: "Isolasi Sosial",
      nama_alt: "Menarik Diri",
      definisi:
        "Ketidakmampuan untuk membina hubungan yang erat dengan orang lain.",
      penyebab: "Perubahan status mental, koping tidak efektif.",
    },
    {
      kode: "D.0146",
      nama: "Risiko Perilaku Kekerasan",
      definisi:
        "Beresiko mencederai diri sendiri, orang lain, atau lingkungan secara fisik.",
      penyebab: "Halusinasi, waham curiga, depresi.",
    },
    {
      kode: "D.0087",
      nama: "Harga Diri Rendah Kronik",
      definisi:
        "Evaluasi diri negatif yang bertahan lama terhadap diri sendiri.",
      penyebab: "Kegagalan berulang, terpapar trauma.",
    },
    {
      kode: "D.0135",
      nama: "Risiko Bunuh Diri",
      definisi:
        "Beresiko mencederai diri sendiri secara sengaja yang dapat mengancam jiwa.",
      penyebab: "Keputusasaan, gangguan mood, isolasi sosial.",
    },
    {
      kode: "D.0080",
      nama: "Ansietas",
      definisi:
        "Kondisi emosi yang tidak menyenangkan terhadap ancaman yang tidak jelas.",
      penyebab: "Krisis situasional, kebutuhan tidak terpenuhi.",
    },
    {
      kode: "D.0109",
      nama: "Defisit Perawatan Diri",
      definisi:
        "Hambatan dalam melakukan aktivitas perawatan diri secara mandiri.",
      penyebab: "Penurunan motivasi, gangguan kognitif.",
    },
    {
      kode: "D.0105",
      nama: "Waham",
      definisi:
        "Keyakinan salah dan kokoh yang dipertahankan meski ada bukti nyata.",
      penyebab: "Gangguan biokimia otak, stresor psikososial.",
    },
  ],
  slki: [
    {
      id: "D.0085",
      nama: "Persepsi Sensori",
      ekspektasi: "Membaik",
      "Kriteria Hasil":
        "Verbalisasi mendengar bisikan menurun; Perilaku halusinasi menurun; Melamun menurun; Konsentrasi membaik.",
    },
    {
      id: "D.0121",
      nama: "Keterlibatan Sosial",
      ekspektasi: "Meningkat",
      "Kriteria Hasil":
        "Minat interaksi meningkat; Kontak mata meningkat; Perilaku menarik diri menurun.",
    },
    {
      id: "D.0146",
      nama: "Kontrol Diri",
      ekspektasi: "Meningkat",
      "Kriteria Hasil":
        "Perilaku menyerang menurun; Suara keras menurun; Mata melotot menurun; Verbalisasi ancaman menurun.",
    },
  ],
  siki: [
    {
      id: "D.0085",
      nama: "Manajemen Halusinasi",
      rasional:
        "Membantu pasien menguasai cara mengontrol persepsi yang salah.",
      tindakan: {
        observasi: "Monitor frekuensi & isi halusinasi; Identifikasi pemicu.",
        terapeutik: "Ciptakan lingkungan aman; Pertahankan kontak mata.",
        edukasi: "Latih teknik menghardik; Latih bercakap-cakap.",
        kolaborasi: "Pemberian antipsikotik sesuai advise.",
      },
    },
    {
      id: "D.0146",
      nama: "Manajemen Perilaku Kekerasan",
      rasional: "Mencegah terjadinya cedera pada pasien atau orang lain.",
      tindakan: {
        observasi: "Monitor tanda gejala marah.",
        terapeutik: "Ciptakan lingkungan yang tenang.",
        edukasi:
          "Latih teknik relaksasi fisik (napas dalam/pukul bantal); Latih asertif verbal.",
        kolaborasi: "Pemberian obat penenang di bawah protokol.",
      },
    },
  ],
  spo: {
    A: [
      {
        id: "a1",
        judul: "SPO Pengkajian Awal Keperawatan Jiwa",
        narasi:
          "<b>Langkah:</b> 1. Bina Hubungan Saling Percaya (BHSP) dengan salam hangat. 2. Kaji Keluhan Utama pasien. 3. Observasi penampilan dan perilaku motorik. 4. Lakukan penilaian 11 bagian standar pengkajian jiwa.",
      },
      {
        id: "a2",
        judul: "SPO MSE (Mental Status Examination)",
        narasi:
          "<b>Langkah:</b> Dokumentasikan penampilan, pembicaraan (koheren/tidak), aktivitas motorik, interaksi selama wawancara, alam perasaan (mood), afek, persepsi (halusinasi), isi pikir (waham), arus pikir, memori, tingkat konsentrasi, dan daya nilai (insight).",
      },
    ],
    B: [
      {
        id: "b1",
        judul: "SPO Latihan Menghardik Halusinasi",
        narasi:
          "<b>Langkah:</b> 1. Jelaskan cara menghardik. 2. Contohkan menutup telinga rapat. 3. Teriak dalam hati: 'Pergi kamu suara palsu, saya tidak mau dengar!'. 4. Minta pasien mempraktikkan. 5. Masukkan dalam jadwal harian.",
      },
      {
        id: "b2",
        judul: "SPO Teknik Relaksasi Fisik 1 (Napas Dalam)",
        narasi:
          "<b>Langkah:</b> 1. Pasien duduk tegak. 2. Tarik napas lewat hidung dalam 3 detik. 3. Tahan 2 detik. 4. Hembuskan pelan lewat mulut sempit selama 5 detik. Ulangi 3-5 kali.",
      },
    ],
    C: [
      {
        id: "c1",
        judul: "SPO Penanganan Agitasi & Gaduh Gelisah",
        narasi:
          "<b>Langkah:</b> 1. Amankan alat tajam. 2. Panggil tim bantuan. 3. Beri jarak aman (1 lengan). 4. Gunakan nada bicara rendah & tenang. 5. Siapkan pengobatan emergensi sesuai instruksi medis.",
      },
    ],
    D: [
      {
        id: "d1",
        judul: "SPO Pemberian Obat Psikofarmaka",
        narasi:
          "<b>Langkah:</b> Verifikasi 7 Benar (Pasien, Obat, Dosis, Rute, Waktu, Dokumentasi, Manfaat). Observasi efek samping segera setelah pemberian.",
      },
    ],
    E: [
      {
        id: "e1",
        judul: "SPO Memfasilitasi TAK (Terapi Aktivitas Kelompok)",
        narasi:
          "<b>Langkah:</b> Persiapkan ruangan lingkaran, pimpin sesi sesuai fase (Orientasi, Kerja, Terminasi). Beri reinforcement positif pada keaktifan peserta.",
      },
    ],
    F: [
      {
        id: "f1",
        judul: "SPO Discharge Planning",
        narasi:
          "<b>Langkah:</b> Bekali keluarga dengan jadwal obat, kontrol rutin, dan teknik perawatan mandiri sebelum pasien pulang.",
      },
    ],
    G: [
      {
        id: "g1",
        judul: "SPO Rujukan Internal/Eksternal",
        narasi:
          "<b>Langkah:</b> Susun resume keperawatan lengkap, pastikan kondisi pasien stabil selama transportasi.",
      },
    ],
  },
  tak: {
    orientasi: {
      judul: "TAK Orientasi Realita",
      definisi: "Melatih pasien mengenali realitas di sekitarnya.",
      sesi: [
        {
          nama: "Sesi 1: Pengenalan Orang",
          tujuan: "Mengenal identitas diri dan teman sekelompok.",
          persiapan: "Name tag, bola, musik.",
          tahapan: {
            orientasi: "BHSP & Kontrak.",
            kerja: "Saling memperkenalkan diri.",
            terminasi: "Kesimpulan & RTL.",
          },
        },
        {
          nama: "Sesi 2: Pengenalan Tempat",
          tujuan: "Mengenal ruangan dan letak fasilitas.",
          persiapan: "Denah sederhana.",
          tahapan: {
            orientasi: "Review sesi 1.",
            kerja: "Keliling ruangan bersama.",
            terminasi: "Validasi lokasi.",
          },
        },
      ],
    },
    sosialisasi: {
      judul: "TAK Sosialisasi",
      definisi: "Melatih kemampuan interaksi sosial yang adaptif.",
      sesi: [
        {
          nama: "Sesi 1: Perkenalkan Diri",
          tujuan: "Mampu menyebutkan identitas di depan umum.",
          persiapan: "Speaker.",
          tahapan: {
            orientasi: "BHSP.",
            kerja: "Latihan bicara depan forum.",
            terminasi: "Reward.",
          },
        },
        {
          nama: "Sesi 2: Berkenalan",
          tujuan: "Mampu menyapa dan mengajak bicara orang lain.",
          persiapan: "Topik obrolan.",
          tahapan: {
            orientasi: "Review.",
            kerja: "Simulasi interaksi 2 arah.",
            terminasi: "RTL.",
          },
        },
      ],
    },
    halusinasi: {
      judul: "TAK Stimulasi Persepsi: Halusinasi",
      definisi: "Mengontrol halusinasi dengan stimulasi persepsi.",
      sesi: [
        {
          nama: "Sesi 1: Mengenal Halusinasi",
          tujuan: "Mengidentifikasi tanda & gejala halusinasi.",
          persiapan: "Papan tulis.",
          tahapan: {
            orientasi: "BHSP.",
            kerja: "Diskusi isi halusinasi.",
            terminasi: "Kontrak Sesi 2.",
          },
        },
        {
          nama: "Sesi 2: Menghardik",
          tujuan: "Mempraktikkan cara menghardik berkelompok.",
          persiapan: "Contoh perawat.",
          tahapan: {
            orientasi: "Review.",
            kerja: "Latihan menghardik bersama.",
            terminasi: "RTL.",
          },
        },
      ],
    },
  },
};

// Export properly for browser environment
if (typeof window !== "undefined") {
  window.DATASET = DATASET;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = DATASET;
}
