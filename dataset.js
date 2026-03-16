// Dataset for ASKep Jiwa Smart - PROFESSIONAL CLINICAL VERSION (ULTRA DETAIL)
// Berisi data LP 8 Masalah Utama + Bonus Diagnosa Medis Lainnya
// Konten disesuaikan dengan standar penulisan Laporan Pendahuluan akademik (Scribd/Keliat/Stuart)

const DATASET = {
  lp: [
    {
      id: "halusinasi",
      sdki: "D.0085",
      nama: "Gangguan Persepsi Sensori: Halusinasi (Lengkap & Akademik)",
      definisi:
        "Halusinasi adalah salah satu gejala gangguan jiwa berat (psikosis) di mana individu mengalami perubahan dalam pemrosesan sensori persepsi yang menghasilkan persepsi palsu berupa suara, penglihatan, pengecapan, perabaan, atau penciuman tanpa adanya stimulus eksternal yang nyata. Halusinasi merupakan distorsi kognitif yang dianggap nyata oleh individu tersebut, seringkali menjadi sangat mengganggu, menakutkan, dan mendominasi kesadaran individu secara total sehingga mengarahkan pada perilaku yang tidak terkendali, maladaptif, dan berisiko bagi keselamatan diri maupun orang lain.",
      etiologi:
        "1. Faktor Predisposisi (Contributing Factors): \na. Faktor Biologis: Adanya riwayat genetik keluarga dengan gangguan spektrum skizofrenia yang meningkatkan kerentanan biologis. Terjadi disregulasi neurotransmitter, terutama hiperaktivitas dopaminergic di jalur mesolimbik dan hipofungsi glutamat. Kelainan struktur otak seperti pembesaran ventrikel juga sering ditemukan. \nb. Faktor Psikologis: Adanya trauma masa kecil yang mendalam, kegagalan dalam mencapai tahap perkembangan (terutama fase trust vs mistrust), adanya riwayat penganiayaan fisik, seksual, atau penolakan lingkungan yang ekstrem secara kronis. \nc. Faktor Sosial Budaya: Kondisi isolasi sosial yang berkepanjangan, kemiskinan sistemik, diskriminasi, serta kurangnya sistem pendukung sosial yang adekuat. \n2. Faktor Presipitasi (Trigger Factors): \na. Stresor Biologis: Adanya infeksi sistemik atau gangguan metabolik, penyalahgunaan zat psikoaktif (NAPZA) terutama stimulan atau halusinogen, serta kelelahan fisik yang ekstrem yang menurunkan ambang toleransi stres. \nb. Stresor Psikososial: Kejadian hidup yang penuh stres seperti kehilangan orang tercinta, kegagalan tuntutan hidup (ekonomi/karier), konflik interpersonal yang intens, serta kegagalan mekanisme koping individu dalam menghadapi kecemasan yang meningkat tajam.",
      manifestasi_klinis:
        "Klien menunjukkan perilaku yang sangat khas seperti: berbicara atau tertawa sendiri seolah-olah sedang berdiskusi dengan individu lain yang tidak tampak (talking to someone else), mengarahkan telinga ke satu arah tertentu secara intens (listening attitude), atau tiba-tiba berhenti bicara secara tiba-tiba di tengah kalimat (thought blocking) seolah-olah sedang mendengarkan instruksi. Adanya gerakan mata yang sangat aktif (scanning) mencari objek yang tidak ada, menunjukkan ekspresi ketakutan, amarah, atau kegembiraan yang tidak sesuai konteks (inappropriate affect), serta menarik diri dari interaksi sosial nyata karena terlalu fokus pada dunia internalnya. Pada tahap berat, klien dapat melakukan tindakan berbahaya atas perintah suara yang didengarnya (command hallucination).",
      patofisiologi:
        "Secara psikopatologi, halusinasi terjadi akibat kegagalan neurobiologis dalam mekanisme pemantauan diri (self-monitoring). Pada individu sehat, otak dapat membedakan antara pikiran internal (inner speech) dengan rangsangan eksternal melalui proses 'corollary discharge' atau sinyal saraf yang memberitahu otak bahwa stimulus berasal dari diri sendiri. Namun, pada individu dengan halusinasi, terjadi kegagalan transmisi sinyal ini, sehingga pikiran internal atau memori auditif yang tersimpan dipersepsikan sebagai suara yang berasal dari luar kepala (eksternalisasi pikiran). Secara fungsional, terdapat peningkatan aktivitas spontan di area auditif (area Wernicke) tanpa disertai aktivitas di area prefrontal yang seharusnya melakukan verifikasi realitas. Hal ini menyebabkan individu kehilangan kemampuan untuk menguji realitas (testing reality) dan menganggap persepsi internal tersebut sebagai kebenaran objektif.",
      tanda_gejala:
        "1. Tanda Mayor: \na. Subjektif: Mengungkapkan mendengar suara-suara bisikan atau kegaduhan, melihat bayangan, merasakan sesuatu di permukaan kulit, atau mencium bau-bauan tertentu yang tidak dirasakan orang lain. \nb. Objektif: Bicara sendiri, tertawa sendiri, memiringkan kepala seolah mendengar, mondar-mandir tanpa tujuan, serta menunjukkan perilaku agresif atau ketakutan tanpa stimulus nyata. \n2. Tanda Minor: \na. Subjektif: Mengeluh sulit konsentrasi, merasa bingung, merasa tidak tenang (gelisah), dan merasa tidak berdaya. \nb. Objektif: Respon tidak sesuai (afek inappropriate), konsentrasi buruk, ekspresi wajah melamun, serta adanya disorientasi waktu, tempat, atau orang dalam fase lanjut.",
      pemeriksaan_penunjang:
        "1. Pengkajian Status Mental (MSE): Evaluasi mendalam terhadap arus pikir, isi pikir (waham penyerta), dan fungsi kognitif (IQ/Daya ingat). \n2. Instrumen Klinis: Menggunakan skala PANSS (Positive and Negative Syndrome Scale) untuk menilai keparahan gejala psikotik secara objektif. \n3. Pemeriksaan Neurologis: Untuk menyingkirkan kemungkinan epilepsi lobus temporal atau massa tumor otak. \n4. Radiologi: MRI atau fMRI untuk melihat area hiperaktif di otak selama episode halusinasi berlangsung. \n5. Laboratorium: Tes toksikologi urin untuk mengidentifikasi adanya zat halusinogen atau amfetamin.",
      penatalaksanaan_medis:
        "1. Farmakoterapi: \na. Antipsikotik Generasi Pertama (Typical): Haloperidol 2-5 mg (2-3 kali sehari) atau Chlorpromazine 100 mg. \nb. Antipsikotik Generasi Kedua (Atypical): Risperidone 2-4 mg, Olanzapine 5-10 mg, atau Clozapine (pada kasus resisten). \n2. Terapi Somatik: Electroconvulsive Therapy (ECT) jika pasien tidak merespon obat atau memiliki risiko bunuh diri/agresivitas yang sangat tinggi. \n3. Terapi Psikososial: Terapi Aktivitas Kelompok (TAK) stimulasi persepsi, Terapi Okupasi, dan Milieu Therapy (Terapi Lingkungan).",
      pathway_teks:
        "Faktor Genetik/Biologis + Trauma Psikososial -> Kerentanan Neurologis (Dopamin Meningkat) -> Kegagalan Mekanisme Koping (Projection) -> Menarik Diri & Isolasi Sosial -> Penurunan Stimulus Riil Eksternal -> Kompensasi Otak Menciptakan Stimulus Internal -> Kegagalan Reality Testing -> Halusinasi (Pendengaran/Penglihatan) -> Kecemasan Berat/Panik -> Risiko Perilaku Kekerasan.",
      pathway_diagram: [
        {
          from: "Faktor Predisposisi (Genetik/Trauma Masa Lalu)",
          to: "Kerentanan Neurobiologis (Dopamin Unbalance)",
        },
        {
          from: "Kerentanan Neurobiologis (Dopamin Unbalance)",
          to: "Koping Individu Tidak Efektif (Penyangkalan)",
        },
        {
          from: "Koping Individu Tidak Efektif (Penyangkalan)",
          to: "Menarik Diri dari Lingkungan Sosial",
        },
        { from: "Menarik Diri dari Lingkungan Sosial", to: "Isolasi Sosial" },
        { from: "Isolasi Sosial", to: "Penurunan Stimulus Eksternal Nyata" },
        {
          from: "Penurunan Stimulus Eksternal Nyata",
          to: "Aktivitas Spontan di Cortex Auditif/Visual",
        },
        {
          from: "Aktivitas Spontan di Cortex Auditif/Visual",
          to: "Kegagalan Reality Testing (Kognitif)",
        },
        {
          from: "Kegagalan Reality Testing (Kognitif)",
          to: "Munculnya Persepsi Palsu (Halusinasi)",
        },
        {
          from: "Munculnya Persepsi Palsu (Halusinasi)",
          to: "Ketakutan / Kebingungan Hebat",
        },
        {
          from: "Ketakutan / Kebingungan Hebat",
          to: "Agitasi & Risiko Perilaku Kekerasan",
        },
      ],
      rentang_respon:
        "Adaptif (Pikiran Logis, Persepsi Akurat, Emosi Konsisten) -> Antara (Distorsi Pikiran, Ilusi, Menarik Diri) -> Maladaptif (Halusinasi, Waham, Isolasi Sosial, Perilaku Kekerasan).",
      mekanisme_koping:
        "1. Konstruktif: Bicara dengan orang lain, aktivitas olahraga, mendengarkan musik lembut. 2. Destruktif: Melamun berlebih, penyalahgunaan zat, mencederai diri, menyerang orang lain.",
      pohon_masalah:
        "Risiko Perilaku Kekerasan (Akibat) <- Halusinasi (Masalah Utama) <- Isolasi Sosial (Penyebab).",
      masalah_keperawatan: [
        "Halusinasi",
        "Isolasi Sosial",
        "Risiko Perilaku Kekerasan",
        "Harga Diri Rendah",
      ],
      fokus_pengkajian:
        "1. ISI HALUSINASI: Mengidentifikasi materi halusinasi (misal: menghina, menyuruh melakukan kejahatan, atau memuji). \n2. JENIS: Apakah pendengaran, penglihatan, perabaan, dll. \n3. WAKTU MUNCUL: Kapan halusinasi sering terjadi (pagi, sore, atau malam). \n4. FREKUENSI: Berapa kali muncul dalam sehari (terus-menerus atau intermiten). \n5. SITUASI PENCETUS: Saat apa muncul (misal: saat melamun, sendirian, atau stres). \n6. RESPON KLIEN: Apa yang dilakukan klien (takut, senang, menuruti, atau melawan).",
      sp_pasien:
        "SP 1: Membina hubungan saling percaya, membantu pasien mengenal halusinasi (jenis, isi, waktu, frekuensi, situasi, respon), dan melatih cara mengontrol halusinasi dengan metode MENGHARDIK. \nSP 2: Mengontrol halusinasi dengan cara meminum OBAT secara teratur sesuai prinsip 6 benar (Pasien, Obat, Dosis, Cara, Waktu, Dokumentasi). \nSP 3: Mengontrol halusinasi dengan cara BERCAKAP-CAKAP dengan orang lain untuk mengalihkan fokus kognitif. \nSP 4: Mengontrol halusinasi dengan melakukan AKTIVITAS TERJADWAL secara mandiri agar tidak ada waktu kosong melamun.",
      sp_keluarga:
        "SP 1: Menjelaskan masalah halusinasi, penyebab, tanda dan gejala, serta proses terjadinya pada keluarga. \nSP 2: Melatih keluarga cara merawat pasien (mendemonstrasikan cara membimbing pasien menghardik). \nSP 3: Melatih keluarga cara membimbing pasien minum obat dan bercakap-cakap. \nSP 4: Melatih keluarga menciptakan lingkungan yang kondusif di rumah dan menjelaskan tanda kekambuhan/rujukan.",
      discharge_planning:
        "1. Kepatuhan minum obat adalah prioritas utama (mencegah relaps). \n2. Keluarga harus menyiapkan lingkungan rumah yang tenang dan aman. \n3. Pasien harus memiliki jadwal kegiatan yang tetap di rumah. \n4. Kontrol rutin ke Poli Jiwa atau Puskesmas setempat. \n5. Mengetahui tanda bahaya (seperti bicara sendiri kembali) untuk segera diobati.",
      edukasi_keluarga:
        "Jangan membantah halusinasinya namun jangan mendukungnya. Katakan: 'Saya percaya Bapak mendengar suara itu, tetapi saya sendiri tidak mendengarnya.' Hal ini membantu pasien tetap terorientasi pada realitas tanpa merasa dipersalahkan.",
      obat_rekomendasi: [
        "Haloperidol",
        "Risperidone",
        "Clozapine",
        "Olanzapine",
      ],
      referensi: [
        "PPNI (2016). Standar Diagnosis Keperawatan Indonesia, Jakarta: DPP PPNI.",
        "Keliat, B.A. (2014). Keperawatan Jiwa: Strategi Pelaksanaan Tindakan, Jakarta: EGC.",
        "Stuart, G.W. (2013). Principles and Practice of Psychiatric Nursing, Elsevier.",
        "Townsend, M.C. (2015). Psychiatric Mental Health Nursing.",
      ],
    },
    {
      id: "perilaku-kekerasan",
      sdki: "D.0132",
      nama: "Risiko Perilaku Kekerasan (Professional Detail)",
      definisi:
        "Perilaku kekerasan merupakan suatu bentuk respon emosional yang maladaptif di mana individu melakukan tindakan fisik yang nyata untuk mencederai, melukai, atau merusak, baik yang ditujukan pada diri sendiri, orang lain, maupun lingkungan sekitar. Perilaku ini terjadi akibat kemarahan yang tidak terkendali (loss of control) yang memicu ledakan agresi destruktif.",
      etiologi:
        "1. Faktor Biologis: Kelainan fungsi pada sistem limbik (amygdala), penurunan kadar serotonin, riwayat trauma kepala, atau epilepsi lobus temporal. \n2. Faktor Psikologis: Memiliki riwayat masa kecil dipukuli atau terpapar kekerasan rumah tangga (Social Learning Theory) di mana kekerasan dipandang sebagai cara penyelesaian masalah yang valid. \n3. Faktor Sosial: Lingkungan yang penuh konflik, paparan konten agresif di media massa, serta rendahnya pendidikan dan status ekonomi.",
      manifestasi_klinis:
        "Wajah tampak sangat tegang, mata melotot dengan pandangan tajam/menantang, tangan mengepal kuat, bicara dengan nada tinggi dan kasar, mengancam secara verbal, jalan mondar-mandir (pacing), serta melakukan tindakan merusak barang atau memukul orang lain di sekitarnya.",
      patofisiologi:
        "Respon marah diawali dengan stresor yang memicu Amygdala melepaskan hormon adrenalin dan noradrenalin. Pada klien gangguan jiwa, fungsi Prefrontal Cortex (pusat kontrol impuls) mengalami kelemahan fungsional. Akibatnya, dorongan agresi dari sistem limbik langsung diterjemahkan menjadi tindakan fisik agresif tanpa adanya filter rasionalitas atau pertimbangan moralitas.",
      tanda_gejala:
        "1. Tanda Mayor Objektif: Menyerang, melukai, merusak benda. Subjektif: Mengaku jengkel, ingin memukul, atau merasa dendam. \n2. Tanda Minor: Mata merah, suara tinggi, tekanan darah naik, napas cepat, dan otot tampak tegang (rigid).",
      pemeriksaan_penunjang:
        "1. Skala Agresi Overt (OAS) untuk menilai tingkat keparahan. 2. EEG untuk mendeteksi adanya fokus epilepsi. 3. Penilaian status mental mendalam pada aspek kontrol impuls.",
      penatalaksanaan_medis:
        "1. Emergency Management: Injeksi Haloperidol & Diazepam untuk pasien amuk. 2. Antipsikotik Maintenance. 3. Physical Restraint (Pengikatan diri) jika pasien tetap membahayakan nyawa meski sudah diberikan sedatif.",
      pathway_teks:
        "Stresor -> Frustrasi Berlebih -> Kemarahan Maladaptif -> Aktivasi Amygdala -> Hilangnya Kontrol Diri -> Perilaku Kekerasan Verbal -> Perilaku Kekerasan Fisik -> Risiko Cedera Diri/Orang Lain.",
      pathway_diagram: [
        {
          from: "Stresor (Kegagalan/Konflik)",
          to: "Perasaan Frustrasi & Tidak Berdaya",
        },
        {
          from: "Perasaan Frustrasi & Tidak Berdaya",
          to: "Peningkatan Ketegangan Psikologis (Marah)",
        },
        {
          from: "Peningkatan Ketegangan Psikologis (Marah)",
          to: "Aktivasi Sistem Saraf Simpatis",
        },
        {
          from: "Aktivasi Sistem Saraf Simpatis",
          to: "Kegagalan Kontrol Impuls (Prefrontal Cortex)",
        },
        {
          from: "Kegagalan Kontrol Impuls (Prefrontal Cortex)",
          to: "Ekspresi Agresi (Perilaku Kekerasan)",
        },
      ],
      rentang_respon:
        "Adaptif (Asertif, Marah terkendali) -> Antara (Frustrasi, Pasif) -> Maladaptif (Agresif, Amuk, Perilaku Kekerasan).",
      mekanisme_koping:
        "1. Konstruktif: Olahraga, teknik relaksasi, ekspresi asertif. 2. Destruktif: Merusak benda, memukul, menghina orang lain.",
      pohon_masalah:
        "Risiko Cedera (Akibat) <- Risiko Perilaku Kekerasan (Masalah Utama) <- Gangguan Konsep Diri: Harga Diri Rendah (Penyebab).",
      masalah_keperawatan: [
        "Risiko Perilaku Kekerasan",
        "Harga Diri Rendah",
        "Risiko Cedera",
        "Gangguan Komunikasi Verbal",
      ],
      fokus_pengkajian:
        "1. PENYEBAB MARAH: Apa yang memicu amarah (misal: dihina). \n2. TANDA FISIK: Mata melotot, tangan mengepal. \n3. RIWAYAT PK: Pernah memukul atau merusak sebelumnya. \n4. AKIBAT PK: Luka fisik atau kerusakan properti. \n5. KOPING: Bagaimana klien biasanya meredakan marahnya.",
      sp_pasien:
        "SP 1: Membina hubungan, identifikasi penyebab marah; latih kontrol fisik 1 (Napas dalam). \nSP 2: Latih kontrol fisik 2 (Pukul bantal/kasur) sebagai kanal agresi aman. \nSP 3: Latih kontrol secara verbal (Meminta/Menolak dengan asertif dan sopan). \nSP 4: Latih kontrol secara spiritual (Berdoa/Zikir/Wudhu). \nSP 5: Latih kepatuhan minum OBAT untuk meredam impuls agresi.",
      sp_keluarga:
        "SP 1: Penjelasan PK & cara merawat fisik. SP 2: Mendemonstrasikan cara melatih pasien asertif. SP 3: Membantu keluarga memonitor obat. SP 4: Rencana tindakan darurat/rujukan.",
      discharge_planning:
        "Singkirkan benda tajam dan racun serangga dari jangkauan. Pastikan pasien memiliki saluran ekspresi emosi yang sehat. Kontrol rutin ke dokter spesialis jiwa.",
      edukasi_keluarga:
        "Jangan membentak atau menantang mata pasien saat ia sedang marah. Berikan ruang gerak (safe distance). Bantu pasien menyalurkan energinya ke aktivitas produktif.",
      obat_rekomendasi: [
        "Haloperidol",
        "Chlorpromazine",
        "Diazepam",
        "Karbamazepin",
      ],
      referensi: ["PPNI (2016)", "Keliat, B.A. (2010)", "Townsend (2015)"],
    },
    {
      id: "isolasi-sosial",
      sdki: "D.0121",
      nama: "Isolasi Sosial (Professional Detail)",
      definisi:
        "Isolasi sosial adalah pengalaman kesendirian yang dialami oleh individu dan dirasakan sebagai sesuatu yang negatif atau mengancam, disebabkan oleh ketidakmampuan untuk membina hubungan yang erat, hangat, terbuka, dan interdependen dengan orang lain. Hal ini sering dikaitkan dengan harga diri yang rendah dan ketakutan akan penolakan.",
      etiologi:
        "1. Predisposisi: Kegagalan fase Trust vs Mistrust (Erikson), kehilangan orang dicintai di usia dini, riwayat penolakan lingkungan. \n2. Presipitasi: Stresor sosial (putus cinta, kehilangan pekerjaan), stigma penyakit jiwa, dan kurangnya keterampilan sosial (social skills deficit).",
      manifestasi_klinis:
        "Klien cenderung mengurung diri di kamar, tidak mau berbicara (mutisme atau irit bicara), kontak mata sangat minim (sering menunduk), ekspresi wajah datar atau sedih (afek tumpul), serta tidak memiliki minat dalam aktivitas sosial maupun hobi lama.",
      patofisiologi:
        "Isolasi sosial bermula dari rendahnya harga diri (negative self-evaluation). Individu memandang dirinya tidak berharga dan mengantisipasi penolakan dari orang lain. Sebagai mekanisme pertahanan diri untuk menghindari rasa sakit akibat penolakan, individu memilih untuk menarik diri (withdrawal). Semakin lama menarik diri, keterampilan interaksi sosial akan mengalami atrofi, sehingga kecemasan sosial semakin meningkat saat mencoba kembali berinteraksi.",
      tanda_gejala:
        "1. Tanda Mayor Objektif: Menarik diri, tidak ada kontak mata, tidak mau bicara. Subjektif: Merasa sepi, merasa ditolak, merasa tidak punya tujuan hidup. \n2. Tanda Minor: Melamun, afek tumpul, postur membungkuk, tidak melakukan aktivitas harian mandiri.",
      pemeriksaan_penunjang:
        "Genogram keluarga untuk melihat pola interaksi, Skala Pengukuran Isolasi Sosial, Penilaian Keterampilan Sosial.",
      penatalaksanaan_medis:
        "Terapi Aktivitas Kelompok Sosialisasi (TAKS), Antidepresan (SSRI), Terapi Keluarga (Family Therapy).",
      pathway_teks:
        "Kegagalan Tahap Perkembangan -> Harga Diri Rendah -> Ketakutan Penolakan -> Menarik Diri -> Isolasi Sosial -> Penurunan Stimulus -> Risiko Halusinasi.",
      pathway_diagram: [
        { from: "Trauma Penolakan Masa Lalu", to: "Harga Diri Rendah Kronis" },
        {
          from: "Harga Diri Rendah Kronis",
          to: "Mekanisme Koping Menarik Diri",
        },
        {
          from: "Mekanisme Koping Menarik Diri",
          to: "Kehilangan Kontak Sosial (Isolasi)",
        },
      ],
      fokus_pengkajian:
        "1. Identifikasi orang terdekat. 2. Hambatan bersosialisasi. 3. Keuntungan berinteraksi dengan orang lain.",
      sp_pasien:
        "SP 1: Identifikasi penyebab, latih cara berkenalan dengan satu orang (perawat). \nSP 2: Latih berkenalan dengan dua orang atau lebih (teman sekamar). \nSP 3: Latih interaksi sosial dalam kegiatan harian secara bertahap. \nSP 4: Latih berinteraksi dalam kelompok (TAK).",
      sp_keluarga:
        "SP 1: Menjelaskan masalah isolasi sosial & cara merawat. SP 2: Melatih keluarga membimbing pasien berkenalan. SP 3: Melatih keluarga mendukung sosialisasi di rumah.",
      discharge_planning:
        "Libatkan pasien dalam kegiatan keagamaan atau RT, dorong pasien menyapa orang di rumah setiap pagi, evaluasi kontak mata.",
      edukasi_keluarga:
        "Jangan membiarkan pasien sendirian di kamar terlalu lama. Ajak makan bersama, nonton TV bersama, dan berikan pujian jika pasien mau merespon pembicaraan.",
      obat_rekomendasi: ["Fluoxetine", "Sertraline", "Risperidone"],
      referensi: ["PPNI (2016)", "Keliat, B.A. (2014)"],
    },
    {
      id: "harga-diri-rendah",
      sdki: "D.0087",
      nama: "Harga Diri Rendah Kronis (Professional Detail)",
      definisi:
        "Harga diri rendah kronis adalah evaluasi diri atau perasaan negatif terhadap diri sendiri atau kemampuan diri (seperti merasa tidak berharga, tidak berdaya, tidak kompeten, tidak dicintai) yang berlangsung secara terus-menerus dan menghambat produktivitas individu.",
      etiologi:
        "1. Predisposisi: Kurangnya apresiasi orang tua, kegagalan berulang, riwayat bullying. \n2. Presipitasi: Kehilangan fungsi tubuh (amputasi/penyakit), kehilangan pekerjaan, kritik tajam di hadapan publik.",
      manifestasi_klinis:
        "Klien sering mengatakan 'saya tidak bisa', merasa malu, merendahkan diri sendiri, kontak mata kurang, bicara pelan/ragu, pasif dalam kegiatan kelompok, serta menolak pujian dari orang lain.",
      patofisiologi:
        "Terbentuk dari gap yang lebar antara Ideal Diri (harapan) dan Citra Diri (kenyataan). Individu yang terus menerus gagal mencapai ideal dirinya mengalami krisis konsep diri. Pola pikir kognitif distorsi fokus pada kekurangan diri (negative filtering) dan mengabaikan sisi positif.",
      tanda_gejala:
        "Objektif: Menunduk, pasif, menolak interaksi. Subjektif: 'Saya gagal', 'Saya malu', 'Saya sampah'.",
      pemeriksaan_penunjang:
        "Skala Harga Diri Rosenberg, Daftar Inventaris Aset Positif.",
      penatalaksanaan_medis:
        "Cognitive Behavioral Therapy (CBT), Terapi Okupasi, Antidepresan.",
      pathway_teks:
        "Kegagalan Berulang -> Evaluasi Diri Negatif -> Harga Diri Rendah -> Isolasi Sosial.",
      pathway_diagram: [
        { from: "Kritik Berlebih/Kegagalan", to: "Kesenjangan Konsep Diri" },
        { from: "Kesenjangan Konsep Diri", to: "Harga Diri Rendah" },
      ],
      fokus_pengkajian:
        "Aset positif yang masih dimiliki, kemampuan yang masih bisa dilakukan (merapikan kasur, mencuci piring).",
      sp_pasien:
        "SP 1: Identifikasi aspek positif diri, latih 1 kemampuan positif yang dipilih. \nSP 2: Latih kemampuan positif kedua yang dipilih. \nSP 3: Latih kemampuan positif ketiga. \nSP 4: Menyusun jadwal harian untuk semua kemampuan yang telah dilatih.",
      sp_keluarga:
        "SP 1: Cara memberikan pujian yang tepat. SP 2: Melatih keluarga memfasilitasi kemampuan pasien di rumah. SP 3: Rencana kemandirian.",
      discharge_planning:
        "Libatkan dalam tugas rumah tangga ringan, berikan apresiasi atas keberhasilan sekecil apapun.",
      edukasi_keluarga:
        "Jangan membandingkan pasien dengan orang lain. Fokus pada kemajuan diri pasien sendiri.",
      obat_rekomendasi: ["Amitriptyline", "Fluoxetine"],
      referensi: ["PPNI (2016)", "Stuart (2013)"],
    },
    {
      id: "defisit-perawatan-diri",
      sdki: "D.0109",
      nama: "Defisit Perawatan Diri (Professional Detail)",
      definisi:
        "Gangguan kemampuan individu untuk melakukan atau menyelesaikan aktivitas perawatan diri (mandi, berhias, makan, eliminasi) secara mandiri.",
      etiologi:
        "Penurunan motivasi (avolition), ansietas berat, depresi mendalam, atau gangguan neurobiologis pada lobus frontal.",
      manifestasi_klinis:
        "Penampilan kotor, bau badan menyengat, rambut acak-acakan, kuku panjang hitam, gigi kuning, tidak mampu berpakaian rapi.",
      patofisiologi:
        "Pada skizofrenia, terjadi regresi perilaku ke fase ketergantungan (dependence). Pasien kehilangan inisiatif internal untuk memulai tugas perawatan diri meskipun secara fisik mampu melakukannya.",
      tanda_gejala:
        "Objektif: Tubuh kotor, makan berantakan, BAB/BAK sembarangan. Subjektif: Malas mandi, tidak tahu cara sikat gigi.",
      pemeriksaan_penunjang: "Indeks Barthel (Activity of Daily Living).",
      penatalaksanaan_medis: "Behavior Therapy, Terapi Okupasi, Antipsikotik.",
      pathway_teks:
        "Gangguan Proses Pikir -> Penurunan Motivasi -> Defisit Perawatan Diri.",
      pathway_diagram: [
        {
          from: "Avolition (Kurang Motivasi)",
          to: "Pengabaian Perawatan Diri",
        },
      ],
      fokus_pengkajian: "Kemampuan mandi, berhias, makan, eliminasi.",
      sp_pasien:
        "SP 1: Latih Kebersihan Diri (Mandi & Keramas). \nSP 2: Latih Berdandan (Baju rapi & Sisiran). \nSP 3: Latih Makan & Minum secara benar. \nSP 4: Latih Eliminasi (BAB/BAK) yang bersih.",
      sp_keluarga:
        "SP 1: Informasi DPD. SP 2: Melatih keluarga menyiapkan alat & membimbing pasien. SP 3: Jadwal kebersihan harian.",
      discharge_planning:
        "Siapkan perlengkapan mandi lengkap, tempel jadwal mandi di pintu.",
      edukasi_keluarga:
        "Bimbing pasien (jangan dimandikan), dorong kemandirian bertahap.",
      obat_rekomendasi: ["Haloperidol", "Trihexyphenidyl"],
      referensi: ["PPNI (2016)"],
    },
    {
      id: "ansietas",
      sdki: "D.0080",
      nama: "Ansietas / Kecemasan (Professional Detail)",
      definisi:
        "Perasaan tidak nyaman yang samar disertai respon otonom (sumber sering tidak spesifik) akibat antisipasi terhadap bahaya.",
      etiologi:
        "Ancaman integritas fisik (sakit), ancaman sistem diri (kehilangan harga diri), stresor situasional.",
      manifestasi_klinis:
        "Gelisah, jantung berdebar, napas pendek, keringat dingin, tremor, sulit konsentrasi.",
      patofisiologi:
        "Aktivasi Amygdala memicu aksis HPA melepaskan kortisol. Gagalnya neurotransmitter GABA menekan impuls ini menyebabkan kondisi waspada berlebih (hyperarousal).",
      tanda_gejala:
        "Objektif: Tekanan darah naik, gelisah. Subjektif: 'Saya takut', 'Perasaan saya tidak enak'.",
      pemeriksaan_penunjang: "Skala HARS (Hamilton Anxiety Rating Scale).",
      penatalaksanaan_medis:
        "Ansiolitik (Benzodiazepine), Psikoterapi Relaksasi.",
      pathway_teks: "Stresor -> Amygdala Aktif -> Gejala Otonom -> Ansietas.",
      pathway_diagram: [
        { from: "Ancaman/Stresor", to: "Aktivasi Saraf Simpatis" },
        { from: "Aktivasi Saraf Simpatis", to: "Ansietas" },
      ],
      fokus_pengkajian: "Tingkat cemas (Ringan, Sedang, Berat, Panik).",
      sp_pasien:
        "SP 1: Latih Napas Dalam. SP 2: Latih Distraksi. SP 3: Latih Hipnotis 5 Jari. SP 4: Latih Spiritual/Zikir.",
      sp_keluarga:
        "SP 1: Mengenali tanda cemas pasien. SP 2: Membantu pasien relaksasi. SP 3: Menciptakan ketenangan rumah.",
      discharge_planning:
        "Lakukan relaksasi harian, hindari kafein, atur waktu istirahat.",
      edukasi_keluarga:
        "Berikan ketenangan, jangan menularkan kecemasan kepada pasien.",
      obat_rekomendasi: ["Diazepam", "Alprazolam"],
      referensi: ["PPNI (2016)"],
    },
    {
      id: "kehilangan-berduka",
      sdki: "D.0081",
      nama: "Kehilangan dan Berduka (Professional Detail)",
      definisi:
        "Respon psikologis normal namun menyakitkan terhadap kehilangan (orang, benda, fungsi, status).",
      etiologi: "Kematian, amputasi, perceraian, kehilangan jabatan.",
      manifestasi_klinis:
        "Menangis, merasa hampa, marah kepada Tuhan/keadaan, menyalahkan diri, sulit tidur.",
      patofisiologi:
        "Melalui 5 fase (Kubler-Ross): Denial, Anger, Bargaining, Depression, Acceptance. Kegagalan adaptasi menyebabkan duka berkepanjangan (maladaptive grieving).",
      tanda_gejala:
        "Subjektif: 'Kenapa saya?', 'Saya gagal'. Objektif: Menangis, lesu, menarik diri.",
      pemeriksaan_penunjang: "Status mental, penilaian fase duka.",
      penatalaksanaan_medis: "Grief Counseling, Antidepresan.",
      pathway_teks: "Kehilangan -> Shock -> Marah -> Sedih -> Terima.",
      pathway_diagram: [{ from: "Kehilangan", to: "Respon Berduka" }],
      fokus_pengkajian: "Makna kehilangan, fase duka yang sedang dijalani.",
      sp_pasien:
        "SP 1: Bina hubungan, identifikasi fase duka. SP 2: Ekspresi perasaan duka. SP 3: Penguatan spiritual. SP 4: Rencana masa depan.",
      sp_keluarga:
        "SP 1: Informasi fase duka. SP 2: Menjadi pendengar aktif. SP 3: Dukungan logistik.",
      discharge_planning:
        "Kunjungi makam/mengenang secara sehat, ikuti kegiatan sosial.",
      edukasi_keluarga:
        "Berikan waktu untuk menangis, jangan melarang ekspresi sedih selama tidak membahayakan.",
      obat_rekomendasi: ["Amitriptyline"],
      referensi: ["PPNI (2016)"],
    },
    {
      id: "gangguan-citra-tubuh",
      sdki: "D.0083",
      nama: "Gangguan Citra Tubuh (Professional Detail)",
      definisi:
        "Kebingungan dalam membangun gambaran mental diri akibat perubahan struktur, fungsi, atau bentuk tubuh.",
      etiologi: "Amputasi, luka bakar, bekas operasi, obesitas, jerawat parah.",
      manifestasi_klinis:
        "Menghindari melihat bagian tubuh yang rusak, menyembunyikan bagian tubuh, menolak menyentuh, merasa minder.",
      patofisiologi:
        "Citra tubuh adalah bagian dari konsep diri. Perubahan fisik yang mendadak menyebabkan ego gagal mengintegrasikan bentuk baru tersebut ke dalam identitas diri, memicu perasaan malu dan jijik terhadap diri sendiri.",
      tanda_gejala:
        "Subjektif: 'Saya buruk rupa'. Objektif: Menghindari cermin, menutupi wajah/tubuh.",
      pemeriksaan_penunjang: "Draw A Person Test, Skala Citra Tubuh.",
      penatalaksanaan_medis: "CBT Fokus pada tubuh, Terapi Supportif.",
      pathway_teks:
        "Perubahan Fisik -> Kegagalan Integrasi Konseptual -> Gangguan Citra Tubuh.",
      pathway_diagram: [
        { from: "Perubahan Struktur Tubuh", to: "Gangguan Citra Tubuh" },
      ],
      fokus_pengkajian:
        "Bagian tubuh yang disukai & tidak disukai, makna organ tersebut bagi pasien.",
      sp_pasien:
        "SP 1: Identifikasi bagian tubuh yang positif. SP 2: Latih berinteraksi dengan bagian tubuh yang berubah. SP 3: Latih menggunakan alat bantu rehabilitasi.",
      sp_keluarga:
        "SP 1: Cara menerima perubahan fisik orang terdekat. SP 2: Melatih keluarga memberikan dukungan pujian pada sisa aset tubuh.",
      discharge_planning:
        "Gunakan pakaian yang nyaman & meningkatkan percaya diri, gunakan make-up/alat bantu.",
      edukasi_keluarga:
        "Terima kondisi fisik pasien apa adanya, jangan mengejek atau menatap aneh pada bagian tubuh yang rusak.",
      obat_rekomendasi: ["Fluoxetine (untuk mood)"],
      referensi: ["PPNI (2016)"],
    },
    {
      id: "waham",
      sdki: "D.0105",
      nama: "Gangguan Proses Pikir: Waham (Lengkap & Akademik)",
      definisi:
        "Waham adalah suatu keyakinan yang salah, kokoh, dan tidak dapat digoyahkan meskipun disajikan bukti objektif yang bertentangan secara nyata, serta keyakinan tersebut tidak sesuai dengan tingkat intelektual dan latar belakang budaya/agama individu. Waham merupakan gangguan isi pikir yang mencerminkan ketidakmampuan individu untuk membedakan antara realitas subjektif dengan realitas objektif lingkungan.",
      etiologi:
        "1. Faktor Predisposisi: \na. Biologis: Peningkatan aktivitas dopamin pada jalur mesolimbik. Riwayat keluarga dengan psikosis. \nb. Psikologis: Mekanisme pertahanan diri 'Proyeksi' (membuang perasaan internal yang tidak nyaman ke objek eksternal). Kegagalan perkembangan kepercayaan dasar (mis. lingkungan masa kecil yang sangat mengancam). \n2. Faktor Presipitasi: \na. Stresor sosial yang ekstrem (isolasi, kegagalan besar, atau ancaman terhadap integritas diri). b. Penyalahgunaan zat stimulan yang memicu paranoia.",
      manifestasi_klinis:
        "Bicara berbelit-belit namun isinya tetap pada keyakinan yang sama, bersikap curiga atau waspada berlebihan, menunjukkan perilaku yang sesuai dengan isi wahamnya (mis. bertingkah laku seperti raja), permusuhan jika wahamnya dibantah, serta adanya penurunan fungsi sosial dan okupasional karena terlalu asyik dengan dunia pikirannya.",
      patofisiologi:
        "Waham berkembang dari upaya ego untuk mengatasi kecemasan yang luar biasa. Individu menciptakan realitas baru sebagai proteksi terhadap ancaman internal yang tidak tertahankan. Secara neurobiologis, terjadi 'salience attribution' yang salah, di mana otak memberikan makna atau kepentingan yang berlebihan pada stimulus yang sebenarnya tidak relevan, yang kemudian dikonsolidasikan menjadi keyakinan waham melalui distorsi kognitif.",
      tanda_gejala:
        "1. Tanda Mayor: \na. Subjektif: Meyakini hal yang mustahil (mis. merasa dikejar intel, merasa punya kekuatan gaib). b. Objektif: Isi pembicaraan tidak realistis, emosi labil, perilaku aneh. \n2. Tanda Minor: Melamun, sulit konsentrasi, curiga pada orang asing, merasa tidak aman.",
      pemeriksaan_penunjang:
        "Wawancara klinis mendalam, evaluasi status mental (fokus pada arus dan isi pikir), tes MMPI.",
      penatalaksanaan_medis:
        "1. Farmakoterapi: Antipsikotik (Risperidone, Olanzapine). \n2. Psikoterapi: Cognitive Enhancement Therapy, Terapi Orientasi Realitas. \n3. Lingkungan: Milieu Therapy (menciptakan suasana aman).",
      pathway_teks:
        "Ancaman Diri -> Kecemasan Berat -> Koping Maladaptif (Projection) -> Kegagalan Reality Testing -> Waham.",
      pathway_diagram: [
        {
          from: "Ancaman terhadap Integritas Diri",
          to: "Kecemasan Meningkat Tajam",
        },
        {
          from: "Kecemasan Meningkat Tajam",
          to: "Mekanisme Pertahanan Proyeksi",
        },
        {
          from: "Mekanisme Pertahanan Proyeksi",
          to: "Wahamanan (False Belief)",
        },
      ],
      fokus_pengkajian:
        "Jenis waham (Kebesaran, Curiga, Somatik, dll), derajat keyakinan, pengaruh waham terhadap perilaku.",
      sp_pasien:
        "SP 1: Membina hubungan saling percaya, orientasi realitas (tanpa membantah atau mendukung waham), identifikasi kebutuhan yang belum terpenuhi. \nSP 2: Melatih cara memenuhi kebutuhan yang realistis. \nSP 3: Melatih kemampuan positif yang masih dimiliki. \nSP 4: Melatih kepatuhan minum obat.",
      sp_keluarga:
        "SP 1: Menjelaskan masalah waham pada keluarga. SP 2: Melatih keluarga cara berkomunikasi (jangan membantah/mendukung). SP 3: Melatih keluarga menciptakan lingkungan aman di rumah.",
      discharge_planning:
        "Rencana kontrol rutin, jadwal aktivitas harian yang konkret (fisik), kepatuhan obat.",
      edukasi_keluarga:
        "Fokus pada perasaan pasien, bukan pada isi wahamnya. Misalnya: 'Saya mengerti Anda merasa takut (perasaan), tapi menurut saya situasi ini aman (realitas).'",
      obat_rekomendasi: ["Risperidone", "Olanzapine", "Haloperidol"],
      referensi: ["PPNI (2016)", "Keliat (2010)", "Stuart (2013)"],
    },
    {
      id: "risiko-bunuh-diri",
      sdki: "D.0135",
      nama: "Risiko Bunuh Diri (Lengkap & Akademik)",
      definisi:
        "Risiko bunuh diri adalah kerentanan terhadap upaya menyakiti diri sendiri secara sengaja yang berpotensi menyebabkan kematian. Ini merupakan kegawatdaruratan psikiatri yang membutuhkan intervensi segera dan pengawasan ketat untuk menjaga keselamatan jiwa pasien.",
      etiologi:
        "1. Faktor Predisposisi: \na. Biologis: Rendahnya kadar 5-HIAA (metabolit serotonin) di cairan otak. b. Psikologis: Keputusasaan (Hopelessness), ketidakberdayaan, depresi berat, impulsivitas tinggi. c. Sosial: Isolasi sosial, riwayat keluarga bunuh diri. \n2. Presipitasi: Kehilangan yang mendadak (orang, harta, status), diagnosa penyakit terminal, kegagalan berat.",
      manifestasi_klinis:
        "Isyarat verbal ('saya tidak akan merepotkan lagi'), menulis surat wasiat, memberikan barang berharga, rencana yang matang (metode, alat, waktu), serta perubahan mood yang drastis (dari sangat sedih menjadi tiba-tiba sangat tenang/bahagia).",
      patofisiologi:
        "Terjadi fenomena 'psychache' (sakit psikologis yang luar biasa) di mana individu merasa bahwa kematian adalah satu-satunya cara untuk menghentikan penderitaan. Ambivalensi antara keinginan untuk hidup dan mati sering muncul, namun dorongan impulsif akibat rendahnya serotonin mengalahkan insting bertahan hidup.",
      tanda_gejala:
        "1. Tanda Mayor: \na. Subjektif: Ide ingin mati, rencana bunuh diri. b. Objektif: Upaya bunuh diri, mencari alat (tali/pisau/racun). \n2. Tanda Minor: Sedih mendalam, putus asa, rasa bersalah berlebih.",
      pemeriksaan_penunjang:
        "SAD PERSONS Scale, Beck Hopelessness Scale, Observasi perilaku 24 jam.",
      penatalaksanaan_medis:
        "1. Rescue: Penanganan luka fisik atau bilas lambung jika sudah mencoba. \n2. Medikasi: Antidepresan, Lithium (mood stabilizer), Sedatif ringan. \n3. Tindakan: ECT (Electroconvulsive Therapy) untuk kasus risiko tinggi.",
      pathway_teks:
        "Depresi/Trauma -> Putus Asa -> Psychache -> Ide Bunuh Diri -> Percobaan Bunuh Diri.",
      pathway_diagram: [
        {
          from: "Keputusasaan (Hopelessness)",
          to: "Psychache (Sakit Psikologis)",
        },
        { from: "Psychache (Sakit Psikologis)", to: "Ambivalensi Hidup/Mati" },
        {
          from: "Ambivalensi Hidup/Mati",
          to: "Tindakan Destruktif (Bunuh Diri)",
        },
      ],
      fokus_pengkajian:
        "Pikirkan (Ide), Rencanakan (Plan), Lakukan (Attempt). Kehadiran alat di sekitar.",
      sp_pasien:
        "SP 1: Mengidentifikasi benda berbahaya dan mengamankannya; latihan kontrak aman (kontrak untuk tidak bunuh diri). \nSP 2: Mengidentifikasi aspek positif diri (alasan untuk tetap hidup). \nSP 3: Melatih koping adaptif saat ide muncul (distraksi/panggil bantuan). \nSP 4: Menyusun rencana masa depan.",
      sp_keluarga:
        "SP 1: Menjelaskan risiko bunuh diri dan instruksi pengawasan ketat. SP 2: Melatih keluarga cara mengamankan lingkungan rumah. SP 3: Menjelaskan tanda bahaya dan rujukan darurat.",
      discharge_planning:
        "Lingkungan bebas senjata/tali/obat, pendampingan 24 jam oleh keluarga, nomor kontak darurat rumah sakit.",
      edukasi_keluarga:
        "Setiap ancaman bunuh diri HARUS dianggap serius. Jangan pernah meninggalkan pasien sendirian sampai risiko dinyatakan hilang oleh tim medis.",
      obat_rekomendasi: ["Amitriptyline", "Lithium", "Fluoxetine"],
      referensi: ["PPNI (2016)", "Townsend (2015)", "Stuart (2013)"],
    },
  ],
  sdki: [
    {
      kode: "D.0085",
      nama: "Gangguan Persepsi Sensori",
      definisi:
        "Perubahan persepsi terhadap stimulus baik internal maupun eksternal...",
      penyebab: "Gangguan pendengaran, penyalahgunaan zat, isolasi sosial.",
      tanda_mayor: "Mendengar suara, melihat bayangan, bicara sendiri.",
      tanda_minor: "Gelisah, konsentrasi buruk.",
      kondisi_terkait: "Skizofrenia.",
    },
  ],
  slki: [
    {
      id: "L.09083",
      nama: "Persepsi Sensori",
      ekspektasi: "Membaik",
      indikator: [
        { nama: "Verbalisasi mendengar bisikan", skala: "5 (Menurun)" },
        { nama: "Perilaku halusinasi", skala: "5 (Menurun)" },
      ],
    },
  ],
  siki: [
    {
      id: "I.09288",
      nama: "Manajemen Halusinasi",
      tindakan: {
        observasi: "Monitor perilaku halusinasi.",
        terapeutik: "Lingkungan aman, menghardik.",
        edukasi: "Ajarkan minum obat.",
        kolaborasi: "Antipsikotik.",
      },
      rasional: "Membantu kontrol persepsi.",
    },
  ],
  gejala: [
    // Halusinasi (D.0085)
    {
      id: 1,
      teks: "Mendengar bisikan atau suara-suara",
      diagnosa: "D.0085",
      tipe: "Halusinasi",
    },
    {
      id: 2,
      teks: "Melihat bayangan atau sosok yang tidak ada",
      diagnosa: "D.0085",
      tipe: "Halusinasi",
    },
    {
      id: 3,
      teks: "Mengecap rasa aneh di lidah",
      diagnosa: "D.0085",
      tipe: "Halusinasi",
    },
    {
      id: 4,
      teks: "Mencium bau-bauan yang tidak sedap",
      diagnosa: "D.0085",
      tipe: "Halusinasi",
    },
    {
      id: 5,
      teks: "Merasakan sesuatu merambat di kulit",
      diagnosa: "D.0085",
      tipe: "Halusinasi",
    },
    {
      id: 6,
      teks: "Bicara atau tertawa sendiri",
      diagnosa: "D.0085",
      tipe: "Halusinasi",
    },

    // Isolasi Sosial (D.0121)
    {
      id: 7,
      teks: "Merasa sendirian atau kesepian",
      diagnosa: "D.0121",
      tipe: "Isolasi Sosial",
    },
    {
      id: 8,
      teks: "Tidak mau berkomunikasi atau menarik diri",
      diagnosa: "D.0121",
      tipe: "Isolasi Sosial",
    },
    {
      id: 9,
      teks: "Menghindari kontak mata saat diajak bicara",
      diagnosa: "D.0121",
      tipe: "Isolasi Sosial",
    },
    {
      id: 10,
      teks: "Merasa tidak aman di tempat umum",
      diagnosa: "D.0121",
      tipe: "Isolasi Sosial",
    },
    {
      id: 11,
      teks: "Lebih suka mengurung diri di kamar",
      diagnosa: "D.0121",
      tipe: "Isolasi Sosial",
    },

    // Harga Diri Rendah (D.0087)
    {
      id: 12,
      teks: "Menilai diri negatif (mis. tidak berguna, tidak berharga)",
      diagnosa: "D.0087",
      tipe: "Harga Diri Rendah",
    },
    {
      id: 13,
      teks: "Merasa gagal dalam mencapai harapan",
      diagnosa: "D.0087",
      tipe: "Harga Diri Rendah",
    },
    {
      id: 14,
      teks: "Selalu merendahkan martabat sendiri",
      diagnosa: "D.0087",
      tipe: "Harga Diri Rendah",
    },
    {
      id: 15,
      teks: "Berjalan menunduk atau postur lunglai",
      diagnosa: "D.0087",
      tipe: "Harga Diri Rendah",
    },
    {
      id: 16,
      teks: "Enggan mencoba hal baru",
      diagnosa: "D.0087",
      tipe: "Harga Diri Rendah",
    },

    // Risiko Perilaku Kekerasan (D.0132 / D.0129)
    {
      id: 17,
      teks: "Nada bicara tinggi atau berteriak",
      diagnosa: "D.0132",
      tipe: "Perilaku Kekerasan",
    },
    {
      id: 18,
      teks: "Pandangan mata tajam atau melotot",
      diagnosa: "D.0132",
      tipe: "Perilaku Kekerasan",
    },
    {
      id: 19,
      teks: "Mengepalkan tangan saat sedang bicara",
      diagnosa: "D.0132",
      tipe: "Perilaku Kekerasan",
    },
    {
      id: 20,
      teks: "Merusak barang atau lingkungan sekitar",
      diagnosa: "D.0132",
      tipe: "Perilaku Kekerasan",
    },
    {
      id: 21,
      teks: "Verbalisasi ancaman atau caci maki",
      diagnosa: "D.0132",
      tipe: "Perilaku Kekerasan",
    },

    // Defisit Perawatan Diri (D.0109)
    {
      id: 22,
      teks: "Penampilan kotor atau tidak rapi",
      diagnosa: "D.0109",
      tipe: "Defisit Perawatan Diri",
    },
    {
      id: 23,
      teks: "Bau badan menyengat (tidak mau mandi)",
      diagnosa: "D.0109",
      tipe: "Defisit Perawatan Diri",
    },
    {
      id: 24,
      teks: "Kuku panjang dan kotor",
      diagnosa: "D.0109",
      tipe: "Defisit Perawatan Diri",
    },
    {
      id: 25,
      teks: "Rambut gimbal, kotor, atau acak-acakan",
      diagnosa: "D.0109",
      tipe: "Defisit Perawatan Diri",
    },
    {
      id: 26,
      teks: "BAB atau BAK di sembarang tempat",
      diagnosa: "D.0109",
      tipe: "Defisit Perawatan Diri",
    },

    // Risiko Bunuh Diri (D.0135)
    {
      id: 27,
      teks: "Mengutarakan keinginan ingin mati",
      diagnosa: "D.0135",
      tipe: "Risiko Bunuh Diri",
    },
    {
      id: 28,
      teks: "Pernah mencoba menyakiti diri sendiri",
      diagnosa: "D.0135",
      tipe: "Risiko Bunuh Diri",
    },
    {
      id: 29,
      teks: "Isyarat pamitan kepada keluarga/teman",
      diagnosa: "D.0135",
      tipe: "Risiko Bunuh Diri",
    },
    {
      id: 30,
      teks: "Membagi-bagikan barang berharga tiba-tiba",
      diagnosa: "D.0135",
      tipe: "Risiko Bunuh Diri",
    },
    {
      id: 31,
      teks: "Merasa putus asa atau tidak ada jalan keluar",
      diagnosa: "D.0135",
      tipe: "Risiko Bunuh Diri",
    },

    // Waham (D.0105)
    {
      id: 32,
      teks: "Merasa diri memiliki kekuatan atau jabatan tinggi",
      diagnosa: "D.0105",
      tipe: "Waham",
    },
    {
      id: 33,
      teks: "Merasa selalu diikuti atau diincar bahaya",
      diagnosa: "D.0105",
      tipe: "Waham",
    },
    {
      id: 34,
      teks: "Merasa bagian tubuhnya membusuk atau hilang",
      diagnosa: "D.0105",
      tipe: "Waham",
    },
    {
      id: 35,
      teks: "Isi pembicaraan terus-menerus tentang hal mustahil",
      diagnosa: "D.0105",
      tipe: "Waham",
    },
    {
      id: 36,
      teks: "Warna kulit pucat atau mata melotot curiga",
      diagnosa: "D.0105",
      tipe: "Waham",
    },

    // Ansietas / Kecemasan (D.0080)
    {
      id: 37,
      teks: "Merasa khawatir dengan akibat dari kondisi yang dihadapi",
      diagnosa: "D.0080",
      tipe: "Ansietas",
    },
    {
      id: 38,
      teks: "Sulit tidur atau istirahat tidak tenang",
      diagnosa: "D.0080",
      tipe: "Ansietas",
    },
    {
      id: 39,
      teks: "Frekuensi nadi dan tekanan darah meningkat",
      diagnosa: "D.0080",
      tipe: "Ansietas",
    },
    {
      id: 40,
      teks: "Tampak gelisah dan tremor (gemetar)",
      diagnosa: "D.0080",
      tipe: "Ansietas",
    },
    {
      id: 41,
      teks: "Sering berkeringat dingin",
      diagnosa: "D.0080",
      tipe: "Ansietas",
    },

    // Berduka / Kehilangan (D.0081)
    {
      id: 42,
      teks: "Merasa sedih yang mendalam (Menangis)",
      diagnosa: "D.0081",
      tipe: "Berduka",
    },
    {
      id: 43,
      teks: "Merasa bersalah atau menyalahkan diri sendiri",
      diagnosa: "D.0081",
      tipe: "Berduka",
    },
    {
      id: 44,
      teks: "Tidak menerima kehilangan yang terjadi",
      diagnosa: "D.0081",
      tipe: "Berduka",
    },
    {
      id: 45,
      teks: "Putus asa dan tidak berdaya",
      diagnosa: "D.0081",
      tipe: "Berduka",
    },

    // Gangguan Citra Tubuh (D.0083)
    {
      id: 46,
      teks: "Verbalisasi perasaan negatif tentang perubahan tubuh",
      diagnosa: "D.0083",
      tipe: "Gangguan Citra Tubuh",
    },
    {
      id: 47,
      teks: "Enggan menyentuh atau melihat bagian tubuh tertentu",
      diagnosa: "D.0083",
      tipe: "Gangguan Citra Tubuh",
    },
    {
      id: 48,
      teks: "Menyembunyikan bagian tubuh secara berlebihan",
      diagnosa: "D.0083",
      tipe: "Gangguan Citra Tubuh",
    },
    {
      id: 49,
      teks: "Fokus berlebih pada penampilan atau cacat fisik",
      diagnosa: "D.0083",
      tipe: "Gangguan Citra Tubuh",
    },
  ],
  obat: [
    {
      nama: "Haloperidol",
      jenis: "Antipsikotik Tipikal (APG I)",
      dosis: "2-5 mg (2-3x sehari)",
      indikasi: "Gejala positif skizofrenia, halusinasi, waham, agitasi akut.",
      efek: "EPS (Ekstrapiramidal), distonia, akatisia, sedasi.",
    },
    {
      nama: "Chlorpromazine (CPZ)",
      jenis: "Antipsikotik Tipikal (APG I)",
      dosis: "100 mg (malam)",
      indikasi: "Psikosis, ansietas berat, kontrol cegukan persisten.",
      efek: "Hipotensi ortostatik, fotosensitivitas, mulut kering.",
    },
    {
      nama: "Risperidone",
      jenis: "Antipsikotik Atipikal (APG II)",
      dosis: "1-3 mg (2x sehari)",
      indikasi: "Skizofrenia akut/kronis, gejala positif & negatif.",
      efek: "Peningkatan berat badan, hiperprolaktinemia, pusing.",
    },
    {
      nama: "Olanzapine",
      jenis: "Antipsikotik Atipikal (APG II)",
      dosis: "5-10 mg (malam)",
      indikasi: "Psikosis, episode manik berat, pencegahan relaps bipolar.",
      efek: "Sedasi kuat, peningkatan nafsu makan ekstrem, sindrom metabolik.",
    },
    {
      nama: "Clozapine",
      jenis: "Antipsikotik Atipikal (APG II)",
      dosis: "25-100 mg (malam)",
      indikasi: "Skizofrenia refrakter (resisten terhadap obat lain).",
      efek: "Risiko agranulositosis (pantau leukosit), hipersalivasi, kejang.",
    },
    {
      nama: "Quetiapine",
      jenis: "Antipsikotik Atipikal (APG II)",
      dosis: "25-300 mg",
      indikasi: "Bipolar disorder, depresi berat, skizofrenia.",
      efek: "Mengantuk, pusing saat berdiri, mulut kering.",
    },
    {
      nama: "Fluoxetine",
      jenis: "Antidepresan (SSRI)",
      dosis: "20 mg (pagi)",
      indikasi: "Depresi major, OCD, bulimia nervosa, isolasi sosial.",
      efek: "Insomnia, mual, sakit kepala, penurunan libido.",
    },
    {
      nama: "Sertraline",
      jenis: "Antidepresan (SSRI)",
      dosis: "50 mg (pagi)",
      indikasi: "Depresi, gangguan panik, PTSD (trauma).",
      efek: "Diare, mengantuk, berkeringat, mulut kering.",
    },
    {
      nama: "Amitriptyline",
      jenis: "Antidepresan (Trisiklik)",
      dosis: "25-50 mg (malam)",
      indikasi: "Depresi dengan gangguan tidur, nyeri neuropatik.",
      efek: "Retensi urin, konstipasi, pandangan kabur.",
    },
    {
      nama: "Diazepam",
      jenis: "Anti-ansietas (Benzodiazepine)",
      dosis: "2-5 mg",
      indikasi:
        "Kecemasan, spasme otot, status epileptikus, gejala putus alkohol.",
      efek: "Dependensi (ketergantungan), mengantuk, ataksia.",
    },
    {
      nama: "Alprazolam",
      jenis: "Anti-ansietas (Benzodiazepine)",
      dosis: "0.25 - 0.5 mg",
      indikasi: "Gangguan kecemasan umum, serangan panik.",
      efek: "Sedasi berat, amnesia anterograd, risiko penyalahgunaan.",
    },
    {
      nama: "Lithium Carbonate",
      jenis: "Mood Stabilizer",
      dosis: "200-400 mg (2-3x sehari)",
      indikasi: "Gangguan Bipolar (Fase Manik).",
      efek: "Tremor halus, poliuria, haus, risiko toksisitas (pantau kadar darah).",
    },
    {
      nama: "Karbamazepin",
      jenis: "Mood Stabilizer / Antikonvulsan",
      dosis: "200 mg (2x sehari)",
      indikasi: "Episode manik akut, neuralgia trigeminal.",
      efek: "Diplopia, mual, ruam kulit, leukopenia.",
    },
    {
      nama: "Trihexyphenidyl (THP)",
      jenis: "Antikolinergik (Anti-EPS)",
      dosis: "2 mg (2x sehari)",
      indikasi: "Mengatasi efek samping obat antipsikotik (EPS/kaku otot).",
      efek: "Mulut kering, pandangan kabur, konstipasi, takikardia.",
    },
  ],
  scales: [
    {
      id: "hars",
      nama: "HARS (Hamilton Anxiety Rating Scale)",
      items: [
        "Perasaan Cemas",
        "Ketegangan",
        "Ketakutan",
        "Gangguan Tidur",
        "Gangguan Kecerdasan",
        "Perasaan Depresi",
        "Gejala Somatik (Otot)",
        "Gejala Somatik (Sensorik)",
        "Gejala Kardiovaskular",
        "Gejala Respiratori",
        "Gejala Gastrointestinal",
        "Gejala Genitourinaria",
        "Gejala Otonom",
        "Perilaku Sewaktu Wawancara",
      ],
      options: ["Tidak ada", "Ringan", "Sedang", "Berat", "Sangat Berat"],
    },
    {
      id: "ham-d",
      nama: "Hamilton Depression Rating Scale (HAM-D)",
      items: [
        "Perasaan Depresi",
        "Perasaan Bersalah",
        "Bunuh Diri",
        "Insomnia Early",
        "Insomnia Middle",
        "Insomnia Late",
        "Kerja dan Aktivitas",
        "Retardasi",
        "Agitasi",
        "Ansietas Psikis",
        "Ansietas Somatik",
        "Gejala Somatik Gastointestinal",
        "Gejala Somatik Umum",
        "Gejala Genital",
        "Hipokondriasis",
        "Kehilangan Berat Badan",
        "Insight",
      ],
      options: ["0", "1", "2", "3", "4"],
    },
    {
      id: "beck",
      nama: "Beck Anxiety Inventory (BAI)",
      items: [
        "Mati rasa/kesemutan",
        "Merasa panas",
        "Goyah di kaki",
        "Tidak dapat rileks",
        "Takut hal terburuk terjadi",
        "Pusing/sakit kepala ringan",
        "Jantung berdebar",
        "Tidak stabil",
        "Ketakutan",
        "Gugup",
        "Perasaan tercekik",
        "Tangan gemetar",
        "Gemetar",
        "Takut kehilangan kendali",
        "Sulit bernapas",
        "Takut mati",
        "Takut",
        "Gangguan pencernaan",
        "Pingsan",
        "Wajah memerah",
        "Keringat (bukan karena panas)",
      ],
      options: [
        "Sama sekali tidak",
        "Ringan (tidak terlalu mengganggu)",
        "Sedang (sangat tidak menyenangkan)",
        "Berat (sangat mengganggu)",
      ],
    },
    {
      id: "gaf",
      nama: "GAF (Global Assessment of Functioning) Scale",
      items: ["Pilih rentang fungsi psikologis, sosial dan okupasional"],
      options: [
        "91-100: Gejala tidak ada, berfungsi maksimal",
        "81-90: Gejala minimal, berfungsi baik",
        "71-80: Gejala sementara & dapat diatasi",
        "61-70: Beberapa gejala ringan (mis. cemas ringan)",
        "51-60: Gejala sedang (mis. afek datar)",
        "41-50: Gejala berat (mis. ide bunuh diri)",
        "31-40: Beberapa gangguan dalam realitas & komunikasi",
        "21-30: Waham/Halusinasi jelas ATAU gangguan berat dlm fungsi",
        "11-20: Bahaya mencederai diri/orang lain",
        "1-10: Bahaya bunuh diri persisten/tindakan kekerasan",
      ],
    },
  ],
  tak: {
    orientasi: {
      judul: "TAK Orientasi Realita",
      image: "tak_orientasi_realita_1773190582268.png",
      definisi:
        "Terapi aktivitas kelompok untuk membantu klien dalam mengenal waktu, tempat, dan orang di sekitarnya guna memperbaiki gangguan orientasi realitas.",
      sesi: [
        {
          nama: "Sesi 1: Pengenalan Orang",
          tujuan:
            "Klien mampu mengenal identitas diri dan orang lain (nama panggilan, hobi) dalam kelompok.",
          persiapan: "Setting meja lingkaran, name tag, bola tenis, musik.",
          tindakan:
            "<b>Fase Orientasi:</b> Ucapkan salam, sampaikan tujuan.<br><b>Fase Kerja:</b> 1. Putar musik dan edarkan bola tenis. 2. Saat musik berhenti, yang pegang bola memperkenalkan diri (Nama, Panggilan, Hobi). 3. Beri pujian/reinforcement positif.<br><b>Fase Terminasi:</b> Evaluasi perasaan, kontrak waktu sesi berikut.",
        },
        {
          nama: "Sesi 2: Pengenalan Tempat",
          tujuan:
            "Klien mampu menyebutkan lokasi rumah sakit, nama ruangan, dan tanda-tanda khusus di lingkungan.",
          persiapan: "Papan tulis, spidol, denah ruangan.",
          tindakan:
            "1. Tanya jawab nama RS dan ruangan. 2. Ajak klien berkeliling ruangan secara berkelompok. 3. Minta klien menyebutkan 3 fasilitas penting di ruangan (km mandi, nurse station, ruang makan).",
        },
        {
          nama: "Sesi 3: Pengenalan Waktu",
          tujuan:
            "Klien mampu mengenal hari, tanggal, jam, dan jadwal aktivitas harian.",
          persiapan: "Kalender besar, jam dinding asli/mainan.",
          tindakan:
            "1. Tunjukkan kalender dan jam. 2. Minta klien menyebutkan hari ini. 3. Hubungkan jam dengan aktivitas rutin (mis. jam 11 = makan siang).",
        },
      ],
    },
    sosialisasi: {
      judul: "TAK Sosialisasi (TAKS)",
      image: "tak_sosialisasi_1773190597079.png",
      definisi:
        "Serangkaian kegiatan kelompok untuk meningkatkan kemampuan klien dalam bersosialisasi dan berinteraksi dengan orang lain secara bertahap.",
      sesi: [
        {
          nama: "Sesi 1: Menyebutkan Jati Diri",
          tujuan:
            "Klien mampu menyebutkan nama lengkap, nama panggilan, asal, dan hobi.",
          persiapan: "Tape recorder, kaset musik, bola.",
          tindakan:
            "Sama dengan orientasi realita sesi 1, namun fokus pada detail asal dan hobi untuk bahan interaksi sesi selanjutnya.",
        },
        {
          nama: "Sesi 2: Menanyakan Jati Diri Teman",
          tujuan:
            "Klien mampu bertanya balik identitas lawan bicara dalam kelompok.",
          persiapan: "Setting berpasangan.",
          tindakan:
            "1. Terapis memberi contoh cara bertanya. 2. Klien diminta bertanya ke teman sebelahnya. 3. Klien mempresentasikan hasil wawancara teman ke seluruh kelompok.",
        },
        {
          nama: "Sesi 3: Bercakap-cakap / Topik Tertentu",
          tujuan:
            "Klien mampu memulai pembicaraan dengan topik yang disepakati.",
          persiapan:
            "Kertas berisi daftar topik (mis. Pekerjaan, Keluarga, Cita-cita).",
          tindakan:
            "Setiap klien memilih satu kartu topik dan mulai menceritakannya, lalu meminta respon dari salah satu teman.",
        },
      ],
    },
    stimulasi_persepsi: {
      judul: "TAK Stimulasi Persepsi",
      image: "tak_orientasi_realita_1773190582268.png",
      definisi:
        "Terapi untuk meningkatkan kemampuan klien dalam merespon stimulus (internal/eksternal) dan mengontrol halusinasi melalui edukasi dan latihan.",
      sesi: [
        {
          nama: "Sesi 1: Mengenal Halusinasi",
          tujuan:
            "Klien mampu menyebutkan isi, waktu, frekuensi, dan respon terhadap halusinasi.",
          persiapan: "Kertas dan pulpen.",
          tindakan:
            "1. Minta klien menuliskan APA yang didengar/dilihat. 2. Berapa kali sehari muncul. 3. Apa yang dilakukan saat itu muncul. 4. Diskusikan cara menghardik sebagai langkah awal.",
        },
        {
          nama: "Sesi 2: Menghardik Halusinasi",
          tujuan:
            "Klien mampu mempraktikkan cara menghardik untuk mengontrol suara-suara sumbang.",
          persiapan: "Ruang tenang.",
          tindakan:
            "1. Peragakan cara menghardik (tutup telinga, katakan 'Pergi kamu suara palsu!'). 2. Minta klien mencoba sampai fasih. 3. Masukkan ke dalam jadwal harian.",
        },
        {
          nama: "Sesi 3: Patuh Obat",
          tujuan:
            "Klien memahami 5 B (Benar Pasien, Obat, Dosis, Waktu, Cara) dan manfaat obat.",
          persiapan: "Contoh obat (kosong), poster 5 Benar.",
          tindakan:
            "1. Jelaskan warna dan fungsi masing-masing obat. 2. Diskusikan efek jika tidak minum obat. 3. Latih cara cek label obat sendiri.",
        },
      ],
    },
    sosialisasi_lanjut: {
      judul: "TAK Sosialisasi",
      image: "tak_sosialisasi_1773190597079.png",
      definisi:
        "Terapi untuk meningkatkan kemampuan berinteraksi sosial pada klien yang mengalami isolasi sosial.",
      sesi: [
        {
          nama: "Sesi 1: Kemampuan Memperkenalkan Diri",
          tujuan:
            "Klien mampu menyebutkan nama lengkap, panggilan, hobi, dan asal.",
          persiapan: "Bola tenis, pemutar musik, papan nama.",
          tindakan:
            "Oper bola saat musik berputar. Saat berhenti, yang memegang bola melakukan perkenalan diri secara asertif.",
        },
        {
          nama: "Sesi 2: Kemampuan Berkenalan",
          tujuan:
            "Klien mampu mengajak kenalan anggota lain (tanya nama, hobi, asal).",
          persiapan: "Setting meja melingkar.",
          tindakan:
            "Latih klien berpasangan untuk saling bertanya identitas lawan bicara dan mendengarkan jawaban.",
        },
      ],
    },
    stimulasi_persepsi_lanjut: {
      judul: "TAK Stimulasi Persepsi",
      image: null,
      definisi:
        "Terapi untuk melatih klien mempersepsikan stimulus yang dipaparkan atau yang dialami secara adekuat.",
      sesi: [
        {
          nama: "Sesi 1: Mengenal Halusinasi",
          tujuan:
            "Klien mampu mengidentifikasi isi, waktu, frekuensi, dan respon halusinasi.",
          persiapan: "Format pengkajian halusinasi.",
          tindakan:
            "Diskusikan pengalaman masing-masing anggota tentang halusinasinya dan bagaimana perasaan mereka.",
        },
        {
          nama: "Sesi 2: Menghardik Halusinasi",
          tujuan: "Klien mampu mendemonstrasikan teknik menghardik.",
          persiapan: "Peraga teknik menghardik.",
          tindakan:
            "Latih bersama-sama menutup telinga dan meneriakkan kata-kata pengusiran halusinasi.",
        },
      ],
    },
  },
  spo: {},
};
