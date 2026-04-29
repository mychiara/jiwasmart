/**
 * ASKEP JIWA SMART - Utilities
 */

window.isPrivacyMode = localStorage.getItem("privacy_mode") === "true";

window.maskName = function (name) {
  if (!isPrivacyMode) return name;
  if (!name) return "";
  const parts = name.split(" ");
  if (parts.length <= 1) return name;
  return (
    parts[0] +
    " " +
    parts
      .slice(1)
      .map((p) => (p ? p[0] + "." : ""))
      .join("")
  );
};

window.escapeHTML = function (str) {
  if (typeof str !== "string") return str;
  return str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[tag] || tag,
  );
};

window.showLoader = function () {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "flex";
};

window.hideLoader = function () {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
};

window.formatClinicalText = function (text) {
  if (!text) return "-";

  // Handle markdown bold first
  let processedText = text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");

  let trimmed = processedText.trim();
  let lines = trimmed.split(/\n/);
  let finalHtml = "";

  lines.forEach((line) => {
    let l = line.trim();
    if (!l) return;

    if (/^\d+\./.test(l)) {
      finalHtml += `<div style="margin-top: 0.8rem; font-weight: 700; color: var(--secondary); display: flex; gap: 8px;">
                        <span>${l.match(/^\d+\./)[0]}</span>
                        <span>${l.replace(/^\d+\.\s*/, "")}</span>
                    </div>`;
    } else if (/^[a-z]\./.test(l)) {
      finalHtml += `<div style="margin-left: 1.5rem; margin-top: 0.3rem; color: #475569; display: flex; gap: 8px;">
                        <span style="font-weight: 600;">${l.match(/^[a-z]\./)[0]}</span>
                        <span>${l.replace(/^[a-z]\.\s*/, "")}</span>
                    </div>`;
    } else if (/\s[a-z]\.\s/.test(l)) {
      let parts = l.split(/([a-z]\.\s)/);
      finalHtml += `<div>${parts[0]}</div>`;
      for (let i = 1; i < parts.length; i += 2) {
        finalHtml += `<div style="margin-left: 1.5rem; margin-top: 0.3rem; color: #475569; display: flex; gap: 8px;">
                            <span style="font-weight: 600;">${parts[i].trim()}</span>
                            <span>${(parts[i + 1] || "").trim()}</span>
                        </div>`;
      }
    } else {
      finalHtml += `<div style="margin-top: 0.4rem; line-height: 1.6;">${l}</div>`;
    }
  });

  return finalHtml;
};

window.copyContent = function (elId) {
  const el = document.getElementById(elId);
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(el.innerText)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: "Konten berhasil disalin ke clipboard!",
          timer: 1500,
          showConfirmButton: false,
        });
      })
      .catch(() => {
        fallbackCopy(el);
      });
  } else {
    fallbackCopy(el);
  }
};

function fallbackCopy(el) {
  const range = document.createRange();
  range.selectNode(el);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  Swal.fire({
    icon: "success",
    title: "Berhasil",
    text: "Konten berhasil disalin ke clipboard!",
    timer: 1500,
    showConfirmButton: false,
  });
}

window.exportPDF = function (elId, filename) {
  const element = document.getElementById(elId);
  const opt = {
    margin: [0.3, 0.3, 0.3, 0.3], // top, left, bottom, right in inches
    filename: `${filename}_${new Date().getTime()}.pdf`,
    image: { type: "jpeg", quality: 1.0 },
    html2canvas: { scale: 2, useCORS: true, logging: false },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    pagebreak: { mode: ["avoid-all", "css", "legacy"] },
  };

  html2pdf().set(opt).from(element).save();
};

window.exportDOC = function (elId, filename) {
  const header =
    "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
    "xmlns:w='urn:schemas-microsoft-com:office:word' " +
    "xmlns='http://www.w3.org/TR/REC-html40'>" +
    "<head><meta charset='utf-8'><title>Export HTML to Word</title></head><body>";
  const footer = "</body></html>";
  const html = header + document.getElementById(elId).innerHTML + footer;

  const blob = new Blob(["\ufeff", html], {
    type: "application/msword",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${filename}_${new Date().getTime()}.doc`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

window.exportPrint = function (elId) {
  const element = document.getElementById(elId);
  const printWindow = window.open("", "_blank");
  printWindow.document.write("<html><head><title>Print Report</title>");
  printWindow.document.write(
    "<style>body{font-family: Arial; padding: 20px;} table{width:100%; border-collapse:collapse;} th,td{border:1px solid #ddd; padding:8px; text-align:left;} .report-header{text-align:center; border-bottom:2px solid #333; margin-bottom:20px;}</style>",
  );
  printWindow.document.write("</head><body>");
  printWindow.document.write(element.innerHTML);
  printWindow.document.write("</body></html>");
  printWindow.document.close();
  printWindow.print();
};
