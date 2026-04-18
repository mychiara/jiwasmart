const CLINICAL_INSTRUMENTS = {
  srq20: {
    title: "SRQ-20 (WHO)",
    desc: "Self Reporting Questionnaire untuk mendeteksi gejala mental emosional umum.",
    questions: [
      "Apakah Anda sering menderita sakit kepala?",
      "Apakah Anda tidak nafsu makan?",
      "Apakah Anda sulit tidur?",
      "Apakah Anda mudah merasa takut?",
      "Apakah Anda merasa tegang, cemas atau kuatir?",
      "Apakah tangan Anda gemetar?",
      "Apakah pencernaan Anda terganggu/buruk?",
      "Apakah Anda sulit untuk berpikiran jernih?",
      "Apakah Anda merasa tidak bahagia?",
      "Apakah Anda menangis lebih sering?",
      "Apakah Anda merasa sulit untuk menikmati aktivitas sehari-hari?",
      "Apakah Anda sulit untuk mengambil keputusan?",
      "Apakah pekerjaan Anda sehari-hari terganggu?",
      "Apakah Anda tidak mampu melakukan hal-hal yang bermanfaat dalam hidup?",
      "Apakah Anda kehilangan minat pada berbagai hal?",
      "Apakah Anda merasa tidak berharga?",
      "Apakah Anda mempunyai pikiran untuk mengakhiri hidup Anda?",
      "Apakah Anda merasa lelah sepanjang waktu?",
      "Apakah Anda merasa tidak enak di perut?",
      "Apakah Anda mudah lelah?",
    ],
    threshold: 6,
    interpretation: (score) => {
      if (score >= 6)
        return {
          status: "Indikasi MasalahPsikososial",
          color: "#ef4444",
          msg: "Skor Anda menunjukkan adanya indikasi keluhan mental emosional yang bermakna secara klinis. Disarankan untuk berkonsultasi dengan profesional.",
        };
      return {
        status: "Normal",
        color: "#10b981",
        msg: "Skor Anda berada dalam batas normal. Tetap jaga kesehatan jiwa Anda.",
      };
    },
  },
  gad7: {
    title: "GAD-7 (Ansietas)",
    desc: "Instrumen untuk deteksi tingkat gangguan kecemasan umum.",
    questions: [
      "Merasa gugup, cemas, atau sangat gelisah?",
      "Tidak mampu menghentikan atau mengendalikan kekhawatiran?",
      "Terlalu mengkhawatirkan banyak hal yang berbeda?",
      "Kesulitan untuk santai/rileks?",
      "Sangat gelisah sehingga sulit untuk duduk diam?",
      "Menjadi mudah kesal atau marah?",
      "Merasa takut seolah-olah sesuatu yang buruk akan terjadi?",
    ],
    options: [
      "Sama sekali tidak",
      "Beberapa hari",
      "Lebih dari separuh waktu",
      "Hampir setiap hari",
    ],
    interpretation: (score) => {
      if (score <= 4)
        return {
          status: "Kecemasan Minimal",
          color: "#10b981",
          msg: "Tidak memerlukan tindakan khusus secara klinis.",
        };
      if (score <= 9)
        return {
          status: "Kecemasan Ringan",
          color: "#f59e0b",
          msg: "Disarankan untuk melakukan teknik relaksasi mandiri.",
        };
      if (score <= 14)
        return {
          status: "Kecemasan Sedang",
          color: "#f97316",
          msg: "Disarankan untuk konsultasi dengan perawat jiwa/konselor.",
        };
      return {
        status: "Kecemasan Berat",
        color: "#ef4444",
        msg: "Memerlukan intervensi klinis segera dari profesional kesehatan jiwa.",
      };
    },
  },
  phq9: {
    title: "PHQ-9 (Depresi)",
    desc: "Instrumen untuk mendeteksi tingkat keparahan depresi.",
    questions: [
      "Kurang berminat atau bergairah dalam melakukan sesuatu?",
      "Merasa sedih, tertekan, atau putus asa?",
      "Sulit tidur, sering terbangun, atau terlalu banyak tidur?",
      "Merasa lelah atau kurang bertenaga?",
      "Kurang nafsu makan atau makan berlebihan?",
      "Kurang percaya diri atau merasa gagal?",
      "Sulit berkonsentrasi (seperti saat membaca atau menonton)?",
      "Bergerak atau berbicara sangat lambat, atau sebaliknya sangat gelisah?",
      "Memiliki pikiran lebih baik mati atau ingin melukai diri sendiri?",
    ],
    options: [
      "Tidak pernah",
      "Beberapa hari",
      "Lebih dari separuh waktu",
      "Hampir setiap hari",
    ],
    interpretation: (score) => {
      if (score <= 4)
        return {
          status: "Depresi Minimal",
          color: "#10b981",
          msg: "Kesehatan mental Anda terjaga dengan baik.",
        };
      if (score <= 9)
        return {
          status: "Depresi Ringan",
          color: "#f59e0b",
          msg: "Lakukan manajemen stres dan koping adaptif.",
        };
      if (score <= 14)
        return {
          status: "Depresi Sedang",
          color: "#f97316",
          msg: "Memerlukan pemantauan dan dukungan dari keluarga/teman.",
        };
      if (score <= 19)
        return {
          status: "Depresi Berat",
          color: "#ef4444",
          msg: "Intervensi medis/psikologis sangat disarankan.",
        };
      return {
        status: "Depresi Sangat Berat",
        color: "#7f1d1d",
        msg: "Kondisi gawat darurat psikiatri. Segera ke fasilitas kesehatan!",
      };
    },
  },
};

const PSYCH_EDU_DATA = [
  {
    id: "ansietas",
    title: "Manajemen Kecemasan (Ansietas)",
    category: "Clinical",
    icon: "activity",
    color: "#22c55e",
    content: `
            <h4>1. Definisi Klinis</h4>
            <p>Kecemasan adalah respons antisipatif terhadap ancaman masa depan yang sering kali bersifat samar. Jika tidak dikelola, kecemasan kronis dapat menyebabkan gangguan fungsi fisik dan sosial.</p>
            <h4>2. Strategi Coping Adaptif</h4>
            <ul>
                <li><strong>Relaksasi Napas 4-7-8:</strong> Teknik untuk menenangkan sistem saraf parasimpatis.</li>
                <li><strong>Grounding 5-4-3-2-1:</strong> Mengalihkan fokus dari pikiran cemas ke lingkungan sekitar.</li>
                <li><strong>Mindfulness:</strong> Menyadari momen saat ini tanpa menghakimi perasaan sendiri.</li>
            </ul>
            <h4>3. Edukasi Gaya Hidup</h4>
            <p>Batasi konsumsi stimulansia seperti kafein (kopi/teh pekat) dan nikotin yang dapat meniru atau memperburuk gejala fisik kecemasan.</p>
        `,
  },
  {
    id: "depresi",
    title: "Pemulihan Kondisi Depresi",
    category: "Clinical",
    icon: "frown",
    color: "#ef4444",
    content: `
            <h4>1. Memahami Depresi</h4>
            <p>Depresi adalah gangguan suasana hati yang memengaruhi cara Anda berpikir, merasa, dan menjalani aktivitas sehari-hari seperti makan atau tidur.</p>
            <h4>2. Langkah-Langkah Pemulihan</h4>
            <ul>
                <li><strong>Aktivasi Perilaku:</strong> Mulailah dengan tugas terkecil (misalnya membereskan tempat tidur) sebagai bentuk kemenangan harian.</li>
                <li><strong>Koneksi Sosial:</strong> Hindari isolasi diri total; berbincanglah setidaknya 15 menit sehari dengan orang terpercaya.</li>
                <li><strong>Paparan Sinar Matahari:</strong> Cahaya pagi membantu regulasi hormon serotonin.</li>
            </ul>
            <h4>3. Catatan Penting</h4>
            <p>Depresi bukan merupakan tanda kelemahan karakter, melainkan kondisi medis yang memerlukan perawatan berkelanjutan.</p>
        `,
  },
  {
    id: "panic-attack",
    title: "Menghadapi Serangan Panik",
    category: "Emergency",
    icon: "zap",
    color: "#f59e0b",
    content: `
            <h4>1. Karakteristik Serangan</h4>
            <p>Serangan panik sering kali muncul tiba-tiba dengan gejala sesak napas, nyeri dada, dan rasa takut akan kematian atau kehilangan kendali.</p>
            <h4>2. Pertolongan Pertama (Self-Aid)</h4>
            <ul>
                <li><strong>Validasi Perasaan:</strong> Katakan pada diri sendiri: "Ini hanya serangan panik, ini akan segera berlalu, saya tidak sedang dalam bahaya nyata."</li>
                <li><strong>Bernapas ke Kantong Kertas:</strong> Mencegah hiperventilasi (jika tersedia) atau bernapas perlahan melalui hidung.</li>
                <li><strong>Fokus pada Satu Titik:</strong> Perhatikan satu objek secara mendalam untuk menambatkan kesadaran.</li>
            </ul>
        `,
  },
  {
    id: "tidur",
    title: "Higiene Tidur (Sleep Hygiene)",
    category: "Lifestyle",
    icon: "moon",
    color: "#4f46e5",
    content: `
            <h4>1. Standar Higiene Tidur</h4>
            <p>Kualitas tidur yang buruk berkaitan erat dengan penurunan fungsi kognitif dan peningkatan iritabilitas emosional.</p>
            <h4>2. Panduan Praktis</h4>
            <ul>
                <li><strong>Konsistensi Jadwal:</strong> Tidur dan bangun di jam yang sama setiap hari.</li>
                <li><strong>Lingkungan Optima:</strong> Suhu kamar yang sejuk, kondisi gelap total, dan bebas dari bising.</li>
                <li><strong>Digital Detox:</strong> Matikan perangkat layar 60 menit sebelum waktu tidur (cahaya biru menghambat melatonin).</li>
            </ul>
            <h4>3. Batasan</h4>
            <p>Hindari tidur siang lebih dari 20-30 menit jika Anda mengalami kesulitan tidur di malam hari.</p>
        `,
  },
  {
    id: "kepatuhan-obat",
    title: "Kepatuhan Farmakoterapi",
    category: "Treatment",
    icon: "pill",
    color: "#6366f1",
    content: `
            <h4>1. Mengapa Obat Itu Penting?</h4>
            <p>Obat menyeimbangkan neurotransmitter (Dopamin, Serotonin) yang terganggu fungsinya saat terjadi gangguan jiwa.</p>
            <h4>2. Tips Kepatuhan</h4>
            <ul>
                <li><strong>Pill Box:</strong> Gunakan kotak obat harian untuk memantau asupan.</li>
                <li><strong>Alarm Pengingat:</strong> Atur alarm di ponsel khusus untuk jadwal obat.</li>
                <li><strong>Konsultasi Efek Samping:</strong> Jika merasa tidak nyaman (mulut kering, kantuk), segera hubungi dokter daripada berhenti sendiri.</li>
            </ul>
            <h4>3. Peringatan</h4>
            <p>Jangan menghentikan obat secara mendadak (Cold Turkey) karena berisiko memicu gejala putus obat yang berat.</p>
        `,
  },
  {
    id: "stress-kerja",
    title: "Manajemen Stres & Burnout",
    category: "Vocational",
    icon: "briefcase",
    color: "#0d9488",
    content: `
            <h4>1. Mengenali Burnout</h4>
            <p>Burnout adalah kelelahan emosional, fisik, dan mental yang disebabkan oleh stres kerja yang berlebihan dan berkepanjangan.</p>
            <h4>2. Strategi Pencegahan</h4>
            <ul>
                <li><strong>Work-Life Boundary:</strong> Tetapkan batas yang tegas antara jam kerja dan jam istirahat.</li>
                <li><strong>Delegasi Tugas:</strong> Jangan memaksakan diri mengerjakan semua hal sendirian jika tersedia sistem pendukung.</li>
                <li><strong>Hobi Non-Pekerjaan:</strong> Miliki aktivitas kreatif yang sama sekali tidak berhubungan dengan profesi utama.</li>
            </ul>
        `,
  },
  {
    id: "dukungan-keluarga",
    title: "Edukasi untuk Perawat Keluarga",
    category: "Social",
    icon: "users",
    color: "#db2777",
    content: `
            <h4>1. Peran Keluarga</h4>
            <p>Keluarga yang supportif dapat mempercepat pemulihan pasien dan menurunkan angka kekambuhan hingga 50%.</p>
            <h4>2. Teknik Komunikasi</h4>
            <ul>
                <li><strong>Low Expressed Emotion:</strong> Hindari nada bicara yang terlalu kritis atau bermusuhan.</li>
                <li><strong>Mendengarkan Empatik:</strong> Berikan waktu bagi pasien untuk menceritakan perasaannya tanpa langsung memotong atau menghakimi.</li>
            </ul>
            <h4>3. Kesehatan Caregiver</h4>
            <p>Merawat orang dengan gangguan jiwa sangat melelahkan. Caregiver harus memiliki sistem pendukung sendiri (Support Group).</p>
        `,
  },
  {
    id: "regulasi-emosi",
    title: "Keterampilan Regulasi Emosi",
    category: "Self-Help",
    icon: "heart",
    color: "#ec4899",
    content: `
            <h4>1. Apa itu Regulasi Emosi?</h4>
            <p>Kemampuan untuk mengenali, memahami, dan mengelola emosi intens agar tidak berakhir pada perilaku destruktif.</p>
            <h4>2. Metode STOP</h4>
            <ul>
                <li><strong>S (Stop):</strong> Berhenti sejenak dari apa yang sedang Anda lakukan.</li>
                <li><strong>T (Take a Breath):</strong> Ambil napas dalam untuk menurunkan ketegangan.</li>
                <li><strong>O (Observe):</strong> Amati apa yang terjadi di pikiran dan tubuh Anda.</li>
                <li><strong>P (Proceed):</strong> Lanjutkan tindakan dengan lebih tenang dan sadar.</li>
            </ul>
        `,
  },
  {
    id: "boundaries",
    title: "Membangun Batas yang Sehat",
    category: "Interpersonal",
    icon: "shield-check",
    color: "#1e293b",
    content: `
            <h4>1. Definisi Boundaries</h4>
            <p>Batas (boundaries) adalah garis imajiner yang melindungi ruang pribadi, nilai, dan energi mental Anda dalam berhubungan dengan orang lain.</p>
            <h4>2. Jenis-Jenis Batas</h4>
            <ul>
                <li><strong>Batas Fisik:</strong> Ruang pribadi dan sentuhan.</li>
                <li><strong>Batas Emosional:</strong> Memisahkan perasaan Anda dari perasaan orang lain.</li>
                <li><strong>Batas Waktu:</strong> Menghargai waktu luang dan istirahat Anda sendiri.</li>
            </ul>
            <h4>3. Cara Berkata 'Tidak'</h4>
            <p>Belajarlah berkata tidak tanpa merasa bersalah demi menjaga kapasitas mental Anda tetap stabil.</p>
        `,
  },
  {
    id: "emergency-mental",
    title: "Menghadapi Krisis Bunuh Diri",
    category: "Emergency",
    icon: "shield-alert",
    color: "#b91c1c",
    content: `
            <h4>1. Deteksi Dini Bahaya</h4>
            <p>Perhatikan jika ada keinginan untuk mengakhiri hidup, memberikan barang-barang kesayangan, atau pamit secara tidak langsung.</p>
            <h4>2. Protokol Keselamatan</h4>
            <ul>
                <li><strong>Singkirkan Sarana:</strong> Jauhkan obat-obatan, benda tajam, atau alat berbahaya lainnya.</li>
                <li><strong>Jangan Biarkan Sendiri:</strong> Pastikan ada pendamping fisik 24 jam saat krisis memuncak.</li>
                <li><strong>Hubungi Profesional:</strong> Segera ke IGD rumah sakit umum atau rumah sakit jiwa terdekat.</li>
            </ul>
            <h4>3. Dukungan Harapan</h4>
            <p>Ingatlah bahwa krisis ini bersifat sementara. Bantuan tersedia dan hidup Anda sangat berharga.</p>
        `,
  },
  {
    id: "grief-loss",
    title: "Mengelola Kedukaan (Grief)",
    category: "Internal",
    icon: "cloud-rain",
    color: "#64748b",
    content: `
            <h4>1. Memahami Kedukaan</h4>
            <p>Kehilangan orang yang dicintai, pekerjaan, atau status kesehatan adalah proses yang menyakitkan namun manusiawi.</p>
            <h4>2. Tahapan Kedukaan</h4>
            <p>Kedukaan tidak berjalan lurus. Anda mungkin merasakan penolakan, kemarahan, tawar-menawar, hingga akhirnya penerimaan secara acak.</p>
            <h4>3. Cara Memproses Perasaan</h4>
            <ul>
                <li><strong>Manifestasi Emosi:</strong> Izinkan diri sendiri menangis atau merasa sedih tanpa batasan waktu tertentu.</li>
                <li><strong>Ritual Kenangan:</strong> Melakukan aktivitas untuk menghargai apa yang hilang guna memproses pelepasan emosi secara sehat.</li>
            </ul>
        `,
  },
  {
    id: "digital-detox",
    title: "Kesehatan Mental di Era Digital",
    category: "Lifestyle",
    icon: "smartphone",
    color: "#3b82f6",
    content: `
            <h4>1. Dampak Media Sosial</h4>
            <p>Paparan berlebihan terhadap kehidupan ideal orang lain dapat memicu perasaan rendah diri (FOMO) dan kecemasan sosial.</p>
            <h4>2. Strategi Detoks Digital</h4>
            <ul>
                <li><strong>Filter Konten:</strong> Berhenti mengikuti akun yang membuat Anda merasa "tidak cukup baik" atau cemas.</li>
                <li><strong>Waktu Tanpa Layar:</strong> Tentukan 2 jam setiap hari (misal jam makan malam) tanpa membuka gawai sama sekali.</li>
                <li><strong>Koneksi Offline:</strong> Prioritaskan pertemuan tatap muka daripada interaksi digital yang dangkal.</li>
            </ul>
        `,
  },
  {
    id: "halusinasi",
    title: "Manajemen Halusinasi",
    category: "Severe Mental",
    icon: "eye-off",
    color: "#6d28d9",
    content: `
            <h4>1. Pengertian Halusinasi</h4>
            <p>Kondisi di mana seseorang merasakan persepsi sensori (suara, penglihatan, bau) yang sebenarnya tidak ada objeknya.</p>
            <h4>2. Cara Kontrol Halusinasi</h4>
            <ul>
                <li><strong>Menghardik:</strong> Mengatakan dengan tegas "Pergi, kamu suara palsu!" saat halusinasi muncul.</li>
                <li><strong>Bercakap-cakap:</strong> Segera mencari teman bicara untuk mengalihkan fokus dari suara internal ke dunia nyata.</li>
                <li><strong>Aktivitas Terjadwal:</strong> Mengisi waktu dengan kegiatan positif agar pikiran tidak kosong.</li>
            </ul>
        `,
  },
  {
    id: "harga-diri",
    title: "Membangun Harga Diri (Self-Esteem)",
    category: "Rehabilitation",
    icon: "award",
    color: "#fbbf24",
    content: `
            <h4>1. Gejala Harga Diri Rendah</h4>
            <p>Munculnya perasaan tidak berharga, malu berlebihan, dan pesimisme terhadap kemampuan diri sendiri.</p>
            <h4>2. Strategi Peningkatan</h4>
            <ul>
                <li><strong>Inventaris Kemampuan:</strong> Tuliskan minimal 3 hal yang masih bisa Anda lakukan secara mandiri setiap hari.</li>
                <li><strong>Latihan Afirmasi:</strong> Ucapkan kalimat positif di depan cermin tentang keberhasilan kecil Anda.</li>
                <li><strong>Hindari Komparasi:</strong> Berhenti membandingkan proses internal Anda dengan pencapaian eksternal orang lain.</li>
            </ul>
        `,
  },
  {
    id: "social-isolation",
    title: "Melangkah dari Isolasi Sosial",
    category: "Social",
    icon: "user-plus",
    color: "#2563eb",
    content: `
            <h4>1. Dampak Isolasi Sosial</h4>
            <p>Kesepian kronis dapat memperburuk gejala gangguan jiwa dan menghambat proses rehabilitasi psikososial.</p>
            <h4>2. Tahapan Sosialisasi</h4>
            <ul>
                <li><strong>Tahap 1:</strong> Berlatih berkenalan dengan satu orang (misal: perawat atau anggota keluarga).</li>
                <li><strong>Tahap 2:</strong> Berpartisipasi dalam kelompok kecil (misal: Terapi Aktivitas Kelompok).</li>
                <li><strong>Tahap 3:</strong> Mencoba berinteraksi dalam kegiatan komunitas yang lebih luas.</li>
            </ul>
        `,
  },
  {
    id: "post-partum",
    title: "Mental Health Pasca Melahirkan",
    category: "Maternal",
    icon: "baby",
    color: "#f472b6",
    content: `
            <h4>1. Baby Blues vs Depresi Pasca Melahirkan</h4>
            <p>Sangat penting membedakan sedih sementara (baby blues) dengan depresi pasca melahirkan yang memerlukan bantuan profesional.</p>
            <h4>2. Dukungan untuk Ibu Baru</h4>
            <ul>
                <li><strong>Istirahat Cukup:</strong> Tidurlah saat bayi tidur; jangan memaksakan diri menyelesaikan semua pekerjaan rumah.</li>
                <li><strong>Bicara Perasaan:</strong> Ungkapkan kelelahan atau ketakutan Anda kepada pasangan atau tenaga kesehatan.</li>
                <li><strong>Nutrisi Seimbang:</strong> Kondisi fisik yang lemah akan memengaruhi stabilitas emosi.</li>
            </ul>
        `,
  },
  {
    id: "adolescent",
    title: "Mental Health Remaja",
    category: "Child/Teen",
    icon: "graduation-cap",
    color: "#8b5cf6",
    content: `
            <h4>1. Krisis Identitas</h4>
            <p>Masa remaja adalah masa transisi di mana konflik internal dan tekanan teman sebaya (peer pressure) sangat mendominasi.</p>
            <h4>2. Tips untuk Orang Tua & Remaja</h4>
            <ul>
                <li><strong>Validasi Emosi:</strong> Dengarkan tanpa langsung memberikan solusi atau ceramah panjang.</li>
                <li><strong>Gali Minat:</strong> Salurkan energi emosional ke dalam bakat atau komunitas yang positif.</li>
                <li><strong>Edukasi Cyberbullying:</strong> Cara melindungi kesehatan mental di lingkungan sekolah dan digital.</li>
            </ul>
        `,
  },
  {
    id: "geriatric",
    title: "Kesehatan Jiwa Lansia (Geriatri)",
    category: "Geriatric",
    icon: "users",
    color: "#475569",
    content: `
            <h4>1. Tantangan Mental Lansia</h4>
            <p>Kehilangan kemandirian, kematian rekan sebaya, dan risiko demensia adalah pemicu utama stres pada lansia.</p>
            <h4>2. Strategi Sejahtera di Usia Senja</h4>
            <ul>
                <li><strong>Senam Otak:</strong> Membaca, bermain catur, atau mengisi teka-teki silang untuk menjaga kognitif.</li>
                <li><strong>Kunjungan Rutin:</strong> Interaksi dengan cucu atau kerabat untuk mencegah sindrom kesepian.</li>
                <li><strong>Cek Kesehatan Fisik:</strong> Penyakit fisik sering kali memicu perubahan perilaku pada lansia.</li>
            </ul>
        `,
  },
  {
    id: "ptsd-trauma",
    title: "Memulihkan Luka Batin (Trauma)",
    category: "Clinical",
    icon: "flame",
    color: "#ea580c",
    content: `
            <h4>1. Apa itu Trauma?</h4>
            <p>Respons emosional yang menetap setelah mengalami atau menyaksikan kejadian yang sangat menakutkan atau menyakitkan.</p>
            <h4>2. Menuju Pemulihan</h4>
            <ul>
                <li><strong>Sadar Pemicu (Triggers):</strong> Pahami situasi apa yang membuat trauma Anda muncul kembali (Flashback).</li>
                <li><strong>Self-Compassion:</strong> Berhentilah menyalahkan diri sendiri atas apa yang terjadi di masa lalu.</li>
                <li><strong>Psikoterapi Spesifik:</strong> Terapi seperti EMDR atau CBT sangat efektif untuk memulihkan trauma berat.</li>
            </ul>
        `,
  },
  {
    id: "self-affirmation",
    title: "Kekuatan Afirmasi Positif",
    category: "Mindfulness",
    icon: "sparkles",
    color: "#fbbf24",
    content: `
            <h4>1. Konsep Self-Talk</h4>
            <p>Cara kita berbicara pada diri sendiri menentukan 90% dari suasana hati dan tingkat kepercayaan diri kita.</p>
            <h4>2. Latihan Afirmasi Harian</h4>
            <ul>
                <li>"Saya melakukan yang terbaik yang saya bisa hari ini."</li>
                <li>"Tantangan ini membantu saya bertumbuh lebih kuat."</li>
                <li>"Saya berhak merasa tenang dan damai."</li>
            </ul>
            <p>Ulangi kalimat ini setiap pagi dengan penuh keyakinan untuk memprogram ulang pikiran bawah sadar Anda.</p>
        `,
  },
];
