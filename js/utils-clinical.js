/**
 * ASKEP JIWA SMART - Clinical Utils (Dosage Calc, etc)
 */

window.toggleCalcForm = function () {
  const form = document.getElementById("calc-form").value;
  const volGroup = document.getElementById("liquid-vol-group");
  if (form === "liquid") {
    volGroup.style.display = "block";
  } else {
    volGroup.style.display = "none";
  }
  const resultArea = document.getElementById("calc-result-area");
  if (resultArea) resultArea.style.display = "none";
};

window.calculateDosage = function () {
  const form = document.getElementById("calc-form").value;
  const req = parseFloat(document.getElementById("calc-req").value);
  const hand = parseFloat(document.getElementById("calc-hand").value);
  const vol = parseFloat(document.getElementById("calc-vol").value) || 1;

  if (isNaN(req) || isNaN(hand) || req <= 0 || hand <= 0) {
    Swal.fire(
      "Peringatan",
      "Silakan masukkan angka dosis yang valid!",
      "warning",
    );
    return;
  }

  let result = 0;
  if (form === "tablet") {
    result = req / hand;
  } else {
    result = (req / hand) * vol;
  }

  const resultArea = document.getElementById("calc-result-area");
  const finalResultEl = document.getElementById("calc-final-result");
  const finalUnitEl = document.getElementById("calc-final-unit");

  if (!resultArea || !finalResultEl || !finalUnitEl) return;

  resultArea.style.display = "block";
  finalResultEl.innerText = Number.isInteger(result)
    ? result
    : result.toFixed(2);
  finalUnitEl.innerText =
    form === "tablet" ? "Tablet / Kapsul" : "ml / Ampul / Vial";

  resultArea.scrollIntoView({ behavior: "smooth", block: "nearest" });
};

window.resetDosageCalc = function () {
  document.getElementById("calc-req").value = "";
  document.getElementById("calc-hand").value = "";
  document.getElementById("calc-vol").value = "1";
  document.getElementById("calc-result-area").style.display = "none";
};
