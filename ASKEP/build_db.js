const fs = require("fs");
const path = require("path");

const dataDir = path.join(__dirname, "data");

function loadJSON(filename) {
  let content = fs.readFileSync(path.join(dataDir, filename), "utf-8");
  content = content.replace(/^\uFEFF/, "");
  return JSON.parse(content);
}

const sdkiData = loadJSON("sdki.json");
const sikiData = loadJSON("siki.json");
const slkiData = loadJSON("slki.json");

const dictionaries = { sdki: {}, siki: {}, slki: {} };
sdkiData.forEach((item) => {
  dictionaries.sdki[item.Kode] = item;
});
sikiData.forEach((item) => {
  dictionaries.siki[item.Kode] = item;
});
slkiData.forEach((item) => {
  dictionaries.slki[item.Kode] = item;
});

const diagnosaToSlki = {};
slkiData.forEach((slki) => {
  if (!slki["Tautan Diagnosa"] || slki["Tautan Diagnosa"] === "-") return;
  const codes = slki["Tautan Diagnosa"].split(",").map((c) => c.trim());
  codes.forEach((c) => {
    if (!diagnosaToSlki[c]) diagnosaToSlki[c] = [];
    diagnosaToSlki[c].push(slki);
  });
});

const diagnosaToSiki = {};
sikiData.forEach((siki) => {
  if (!siki["Tautan Diagnosa"] || siki["Tautan Diagnosa"] === "-") return;
  const codes = siki["Tautan Diagnosa"].split(",").map((c) => c.trim());
  codes.forEach((c) => {
    if (!diagnosaToSiki[c]) diagnosaToSiki[c] = [];
    diagnosaToSiki[c].push(siki);
  });
});

function splitSemicolon(str) {
  if (!str) return [];
  return str
    .split(";")
    .map((x) => x.trim())
    .filter(Boolean);
}

function processPenyakit(penyakitList, peminatanName) {
  const output = [];
  for (const p of penyakitList) {
    const askep = {
      diagnosa_medis: p.nama,
      pengkajian: {},
      diagnosa_keperawatan: [],
    };

    if (p.detail) {
      askep.pengkajian = {
        definisi: p.detail.definisi || "",
        etiologi: p.detail.etiologi || "",
        manifestasi: p.detail.manifestasi || "",
        patofisiologi: p.detail.patofisiologi || "",
        pemeriksaan: p.detail.pemeriksaan || "",
        penatalaksanaan: p.detail.penatalaksanaan || "",
        discharge_planning: p.detail.discharge_planning || "",
      };
    } else {
      askep.pengkajian = {
        definisi: `Keluhan dan kondisi terkait ${p.nama}`,
        etiologi: `Diakibatkan oleh problem medis primer ${p.nama}`,
        manifestasi: `Tanda dan gejala klinis ${p.nama}`,
        patofisiologi: "-",
        pemeriksaan: "-",
        penatalaksanaan: "-",
        discharge_planning: "-",
      };
    }

    if (p.diagnosa) {
      askep.diagnosa_keperawatan = p.diagnosa.map((d) => {
        const kode = d.kode;
        const sdki = dictionaries.sdki[kode];

        if (!sdki) {
          return {
            kode: kode,
            nama: d.nama,
            definisi: "Belum didefinisikan",
            penyebab: [],
            gejala_mayor: [],
            gejala_minor: [],
            slki: [],
            siki: [],
            implementasi: [],
            evaluasi: {},
          };
        }

        const slkis = diagnosaToSlki[kode] || [];
        const slkiList = slkis.map((s) => ({
          kode: s.Kode,
          nama: s.Nama,
          kriteria: splitSemicolon(s["Kriteria Hasil"]),
        }));

        const sikis = diagnosaToSiki[kode] || [];
        const sikiList = sikis.map((s) => ({
          kode: s.Kode,
          nama: s.Nama,
          tindakan: {
            observasi: splitSemicolon(s.Observasi),
            terapeutik: splitSemicolon(s.Terapeutik),
            edukasi: splitSemicolon(s.Edukasi),
            kolaborasi: splitSemicolon(s.Kolaborasi),
          },
        }));

        let implTindakanList = [];
        sikis.forEach((s) => {
          const ob = splitSemicolon(s.Observasi);
          const ter = splitSemicolon(s.Terapeutik);
          if (ob.length > 0) implTindakanList.push(ob[0]);
          if (ter.length > 0) implTindakanList.push(ter[0]);
        });

        // Helper: Generate professional response based on action text
        function generateProfessionalRespon(tindakan, index, diagnosaNama) {
          const t = tindakan.toLowerCase();
          if (
            t.includes("monitor") ||
            t.includes("identifikasi") ||
            t.includes("periksa")
          ) {
            return `Telah dilakukan observasi klinis secara komprehensif. Ditemukan parameter ${diagnosaNama.toLowerCase()} masih fluktuatif namun menunjukkan tren stabilisasi. Data objektif tervalidasi dan terdokumentasi dalam lembar observasi.`;
          }
          if (
            t.includes("posisi") ||
            t.includes("berikan") ||
            t.includes("fasilitasi")
          ) {
            return `Pasien menunjukkan peningkatan kenyamanan secara signifikan setelah intervensi. Pola napas/aktivitas pasien tampak lebih rileks dan pasien mampu mengikuti instruksi pengaturan posisi dengan kooperatif.`;
          }
          if (
            t.includes("edukasi") ||
            t.includes("jelaskan") ||
            t.includes("anjurkan")
          ) {
            return `Pasien dan keluarga mampu mendemonstrasikan pemahaman terhadap materi yang disampaikan. Pasien menunjukkan motivasi tinggi untuk terlibat dalam manajemen perawatan mandiri.`;
          }
          if (t.includes("kolaborasi") || t.includes("berikan obat")) {
            return `Terapi kolaboratif telah diberikan sesuai order medis. Tidak ditemukan reaksi alergi atau efek samping sistemik yang tidak diinginkan dalam 15-30 menit pasca pemberian.`;
          }
          return `${index === 0 ? "Pasien menunjukkan perbaikan subjektif yang progresif." : "Status klinis pasien dipantau secara berkala; respon menunjukkan toleransi yang baik terhadap intervensi."}`;
        }

        let timewarp = 8;
        let implementasi = implTindakanList.slice(0, 5).map((t, idx) => {
          timewarp += Math.floor(Math.random() * 2);
          let hour = timewarp < 10 ? `0${timewarp}` : `${timewarp}`;
          let mnt = ["05", "15", "30", "45", "50"][
            Math.floor(Math.random() * 5)
          ];
          return {
            waktu: `${hour}.${mnt} WIB`,
            tindakan: t,
            respon: generateProfessionalRespon(t, idx, sdki.Nama),
          };
        });

        if (implementasi.length === 0) {
          implementasi = [
            {
              waktu: "08.00 WIB",
              tindakan: `Melakukan pengkajian status ${sdki.Nama} secara berkala dan memberikan tindakan suportif.`,
              respon:
                "Pasien menunjukkan kestabilan hemodinamik dan kenyamanan psikologis.",
            },
          ];
        }

        return {
          kode: sdki.Kode,
          nama: sdki.Nama,
          definisi: sdki.Definisi,
          penyebab: splitSemicolon(sdki.Penyebab),
          gejala_mayor: splitSemicolon(sdki["Gejala Mayor"]),
          gejala_minor: splitSemicolon(sdki["Gejala Minor"]),
          tujuan: `Setelah dilakukan asuhan keperawatan selama 3 x 24 jam, diharapkan masalah ${sdki.Nama.toLowerCase()} dapat teratasi sepenuhnya dengan kriteria hasil yang terstandarisasi dan stabil.`,
          slki: slkiList,
          siki: sikiList,
          implementasi: implementasi,
          evaluasi: {
            s: `Pasien menyampaikan secara verbal bahwa keluhan terkait ${sdki.Nama.toLowerCase()} sudah berkurang sekitar 60-70% dibandingkan saat pertama kali masuk, merasa lebih bertenaga dan mampu beristirahat.`,
            o: `Data klinis menunjukkan parameter vital (TD, HR, RR, SpO2) dalam rentang normal/target; tanda-tanda mayor yang menjadi masalah utama kini tampak membaik secara signifikan melalui observasi visual dan fisik.`,
            a: `Analisis menunjukkan Masalah Keperawatan ${sdki.Nama} telah mencapai progresivitas positif (Teratasi Sebagian), menunjukkan bahwa strategi intervensi yang diterapkan berjalan efektif.`,
            p: `Lanjutkan seluruh rencana intervensi prioritas terutama ${sikis[0]?.Nama || "monitoring ketat"} serta pertahankan kondisi lingkungan yang kondusif bagi pemulihan pasien.`,
          },
        };
      });
    }
    output.push(askep);
  }
  return output;
}

const finalDatabase = {};
const files = [
  { file: "penyakit_kmb.json", key: "1. Keperawatan Medikal Bedah (KMB)" },
  { file: "penyakit_anak.json", key: "2. Keperawatan Anak" },
  { file: "penyakit_maternitas.json", key: "3. Keperawatan Maternitas" },
  { file: "penyakit_jiwa.json", key: "4. Keperawatan Jiwa" },
  { file: "penyakit_tropis.json", key: "5. Keperawatan Komunitas" },
  { file: "penyakit_gawat_darurat.json", key: "6. Keperawatan Gawat Darurat" },
  { file: "penyakit_kritis.json", key: "7. Keperawatan Kritis (ICU)" },
  { file: "penyakit_gerontik.json", key: "8. Keperawatan Gerontik" },
  { file: "penyakit_keluarga.json", key: "9. Keperawatan Keluarga" },
  { file: "penyakit_paliatif.json", key: "10. Keperawatan Paliatif" },
  { file: "penyakit_rehabilitasi.json", key: "11. Keperawatan Rehabilitasi" },
];

let totalPenyakit = 0;
files.forEach((f) => {
  if (fs.existsSync(path.join(dataDir, f.file))) {
    const raw = loadJSON(f.file);
    totalPenyakit += raw.length;
    finalDatabase[f.key] = processPenyakit(raw, f.key);
  }
});

finalDatabase._metadata = {
  total_sdki: Object.keys(dictionaries.sdki).length,
  total_siki: Object.keys(dictionaries.siki).length,
  total_slki: Object.keys(dictionaries.slki).length,
  total_penyakit: totalPenyakit,
};

fs.writeFileSync("data.json", JSON.stringify(finalDatabase, null, 2));
console.log("data.json successfully built from real DB files!");
