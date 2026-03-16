/**
 * ASKEP JIWA SMART - Mental Status Examination (MSE)
 */

window.processMSEReport = function () {
  const data = {
    pxNama: document.getElementById("mse-px-nama").value || "-",
    pxNorm: document.getElementById("mse-px-norm").value || "-",
    penampilan: document.getElementById("mse-penampilan").value || "-",
    mood: document.getElementById("mse-mood").value || "-",
    afek: document.getElementById("mse-afek").value || "-",
    proses_pikir: document.getElementById("mse-proses-pikir").value || "-",
    insight: document.getElementById("mse-insight").value || "-",
    catatan: document.getElementById("mse-catatan").value || "-",
    tanggal: new Date().toLocaleDateString("id-ID"),
  };

  const reportHtml = `
    <div id="mse-print-area" style="padding: 40px; font-family: 'Times New Roman', Times, serif; color: #000; line-height: 1.4; font-size: 11pt;">
      <div style="text-align: center; border-bottom: 2px solid #000; padding-bottom: 5px; margin-bottom: 20px;">
        <h2 style="margin: 0; text-transform: uppercase; font-size: 14pt;">MENTAL STATUS EXAMINATION (MSE)</h2>
        <p style="margin: 5px 0; font-size: 10pt;">Klinik / Rumah Sakit Jiwa Pratama JiwaCare</p>
      </div>

      <div style="margin-bottom: 20px;">
        <table style="width: 100%; margin-bottom: 10px;">
            <tr><td style="width: 20%;">Nama Pasien</td><td>: ${data.pxNama}</td><td style="width: 20%;">Tgl Periksa</td><td>: ${data.tanggal}</td></tr>
            <tr><td>No. RM</td><td>: ${data.pxNorm}</td><td></td><td></td></tr>
        </table>
      </div>

      <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
        <tr><td style="border: 0.5px solid #000; padding: 10px; width: 30%;"><strong>1. Penampilan</strong></td><td style="border: 0.5px solid #000; padding: 10px;">${data.penampilan}</td></tr>
        <tr><td style="border: 0.5px solid #000; padding: 10px;"><strong>2. Mood & Afek</strong></td><td style="border: 0.5px solid #000; padding: 10px;">Mood: ${data.mood}<br>Afek: ${data.afek}</td></tr>
        <tr><td style="border: 0.5px solid #000; padding: 10px;"><strong>3. Proses Pikir</strong></td><td style="border: 0.5px solid #000; padding: 10px;">${data.proses_pikir}</td></tr>
        <tr><td style="border: 0.5px solid #000; padding: 10px;"><strong>4. Insight (Daya Nilai)</strong></td><td style="border: 0.5px solid #000; padding: 10px;">${data.insight}</td></tr>
        <tr><td style="border: 0.5px solid #000; padding: 10px;"><strong>5. Catatan Kognitif</strong></td><td style="border: 0.5px solid #000; padding: 10px;">${data.catatan}</td></tr>
      </table>

      <div style="margin-top: 30px; border: 1px solid #000; padding: 10px; font-size: 10pt;">
          <strong>Interpretasi Klinis:</strong><br>
          ${data.insight.includes("Derajat 1") || data.insight.includes("Derajat 2") ? "Pasien menunjukkan penyangkalan atau ambivalensi yang signifikan terhadap kondisi jiwanya. Perlu fokus pada edukasi penyakit (Psychoeducation) dan pengawasan ketat terhadap kepatuhan minum obat." : "Pasien menunjukkan tingkat kesadaran diri (insight) yang cukup baik, hal ini merupakan indikator prognosis yang positif untuk keberlanjutan terapi."}
      </div>

      <div style="margin-top: 50px; display: flex; justify-content: flex-end; text-align: center;">
        <div style="width: 200px;">Perawat Pemeriksa<br><br><br><br>( ________________ )</div>
      </div>
    </div>
  `;

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = reportHtml;
  tempDiv.style.position = "absolute";
  tempDiv.style.left = "-9999px";
  document.body.appendChild(tempDiv);

  Swal.fire({
    title: "MSE Selesai",
    text: "Pilih format output laporan MSE.",
    icon: "success",
    showCancelButton: true,
    confirmButtonText: "Ekspor PDF",
    cancelButtonText: "Salin Teks",
    showDenyButton: true,
    denyButtonText: "Cetak Langsung",
  }).then((result) => {
    if (result.isConfirmed) {
      exportPDF(tempDiv.firstChild.id, `MSE_${data.pxNama}`);
    } else if (result.isDenied) {
      exportPrint(tempDiv.firstChild.id);
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      // Fallback to copy content if they click cancel (which we relabeled as Copy)
      const range = document.createRange();
      range.selectNode(tempDiv);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand("copy");
      Swal.fire("Disalin", "Konten MSE telah disalin ke clipboard.", "success");
    }
    document.body.removeChild(tempDiv);
  });
};

window.resetMSEForm = function () {
  [
    "mse-px-nama",
    "mse-px-norm",
    "mse-penampilan",
    "mse-mood",
    "mse-afek",
    "mse-proses-pikir",
    "mse-insight",
    "mse-catatan",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
};

window.goToMSEFromAssessment = function (kode) {
  document.getElementById("mse-px-nama").value =
    document.getElementById("as-nama").value;
  document.getElementById("mse-px-norm").value =
    document.getElementById("as-norm").value;

  if (kode === "D.0121") {
    document.getElementById("mse-afek").value = "Tumpul (Blunted)";
    document.getElementById("mse-mood").value = "Disforia (Sedih/Murung)";
  } else if (kode === "D.0085") {
    document.getElementById("mse-penampilan").value =
      "Penampilan cukup, afek inappropriate, sering tampak berbicara sendiri.";
  }

  showView("mse-digital");
  Swal.fire(
    "Next Step: MSE",
    "Data identitas telah diteruskan. Silakan lengkapi pemeriksaan status mental.",
    "info",
  );
};

window.goToLPFromMSE = function () {
  const pxNama = document.getElementById("mse-px-nama").value;
  // We don't have a direct "mhs-nama" from assessment, but we can set focus
  showView("generator-lp");
  const checkedSymptoms = document.querySelectorAll(
    'input[name="as-symptoms"]:checked',
  );
  if (checkedSymptoms.length > 0) {
    const topDiag = checkedSymptoms[0].value;
    const lpMatch = DATASET.lp.find(
      (l) => l.sdki === topDiag || l.id === topDiag,
    );
    if (lpMatch) document.getElementById("lp-select").value = lpMatch.id;
  }
  Swal.fire(
    "Alur LP",
    "Silakan buat Laporan Pendahuluan sesuai kasus pasien.",
    "success",
  );
};
