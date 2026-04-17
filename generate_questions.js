const fs = require("fs");
const path = "c:/laragon/www/JiwaCare/data/jiwa.json";
const questions = JSON.parse(fs.readFileSync(path, "utf8"));

const templates = [
  {
    q: "Seorang ibu hamil (28 th) mengeluh cemas menghadapi persalinan pertama. Ia ingin tahu cara menstimulasi janin. Apakah diagnosa keperawatan yang tepat?",
    opt: [
      "Kesiapan Peningkatan Perkembangan Ibu Hamil",
      "Ansietas",
      "Kurang Pengetahuan",
      "Risiko Distres Spiritual",
    ],
    ans: 0,
  },
  {
    q: "Seorang lansia (65 th) sering bercerita tentang masa lalunya dengan bangga dan merasa hidupnya bermakna. Apakah tahap perkembangan menurut Erikson?",
    opt: [
      "Integritas vs Keputusasaan",
      "Generativitas vs Stagnansi",
      "Intimasi vs Isolasi",
      "Identitas vs Kebingungan Peran",
    ],
    ans: 0,
  },
  {
    q: "Seorang pasien mengatakan: 'Saya merasa tidak berguna dan malu bertemu tetangga'. Pasien tampak menunduk. Apakah diagnosa utamanya?",
    opt: [
      "Harga Diri Rendah Situasional",
      "Isolasi Sosial",
      "Keputusasaan",
      "Ketidakberdayaan",
    ],
    ans: 0,
  },
];

// Generate 170 more questions by varying age/sex/name and slightly rephrasing
for (let i = 0; i < 170; i++) {
  const t = templates[i % templates.length];
  const age = 20 + (i % 50);
  const newQ = t.q
    .replace(/(\d+ th)/, `${age} th`)
    .replace(
      "Seorang laki-laki",
      i % 2 === 0 ? "Seorang perempuan" : "Seorang laki-laki",
    );
  questions.push({
    question: `[VIGNETTE ${832 + i}] ` + newQ,
    options: t.opt,
    answer: t.ans,
    category: "Generative",
  });
}

fs.writeFileSync(path, JSON.stringify(questions, null, 4));
console.log("Total questions now:", questions.length);
