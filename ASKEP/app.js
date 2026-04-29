document.addEventListener("DOMContentLoaded", () => {
  const UI = {
    peminatanSel: document.getElementById("peminatan"),
    diagnosaSel: document.getElementById("diagnosaMedis"),
    patientName: document.getElementById("patientName"),
    patientAge: document.getElementById("patientAge"),
    patientRM: document.getElementById("patientRM"),
    ttvTd: document.getElementById("ttvTd"),
    ttvHr: document.getElementById("ttvHr"),
    ttvRr: document.getElementById("ttvRr"),
    ttvTemp: document.getElementById("ttvTemp"),
    ttvSpo2: document.getElementById("ttvSpo2"),
    openGcsBtn: document.getElementById("openGcsBtn"),
    closeGcsBtn: document.getElementById("closeGcsBtn"),
    gcsPanel: document.getElementById("gcsPanel"),
    gcsTotalDisplay: document.getElementById("gcsTotalDisplay"),
    gcsE: document.getElementById("gcsE"),
    gcsV: document.getElementById("gcsV"),
    gcsM: document.getElementById("gcsM"),
    smartSuggestion: document.getElementById("smartSuggestion"),
    smartSearch: document.getElementById("smartSearch"),
    searchSuggestions: document.getElementById("searchSuggestions"),
    modeCerdasBtn: document.getElementById("modeCerdasBtn"),
    modeManualBtn: document.getElementById("modeManualBtn"),
    sectionCerdas: document.getElementById("sectionCerdas"),
    sectionManual: document.getElementById("sectionManual"),
    generateBtn: document.getElementById("generateBtn"),
    resultSection: document.getElementById("resultSection"),
    exportPdfBtn: document.getElementById("exportPdfBtn"),
    copyBtn: document.getElementById("copyBtn"),
    askepContent: document.getElementById("askepContent"),
    sdkiChecklist: document.getElementById("sdkiChecklist"),
    sdkiSelectionBlock: document.getElementById("sdkiSelectionBlock"),
    exportWordBtn: document.getElementById("exportWordBtn"),
    welcomeModal: document.getElementById("welcomeModal"),
    closeWelcomeBtn: document.getElementById("closeWelcomeBtn"),
    getStartedBtn: document.getElementById("getStartedBtn"),
    news2Badge: document.getElementById("news2Badge"),
    news2Score: document.getElementById("news2Score"),
    news2Level: document.getElementById("news2Level"),
    news2Progress: document.getElementById("news2Progress"),
    sbarSection: document.getElementById("sbarSection"),
    sbarS: document.getElementById("sbarS"),
    sbarB: document.getElementById("sbarB"),
    sbarA: document.getElementById("sbarA"),
    sbarR: document.getElementById("sbarR"),
    o2Toggle: document.getElementById("o2Toggle"),
    o2Knob: document.getElementById("o2Knob"),
    voiceBtn: document.getElementById("voiceBtn"),
    openCalcBtn: document.getElementById("openCalcBtn"),
    closeCalcBtn: document.getElementById("closeCalcBtn"),
    calcModal: document.getElementById("calcModal"),
    news2HistorySection: document.getElementById("news2HistorySection"),
    clearNewsBtn: document.getElementById("clearNewsBtn"),
    shareQrBtn: document.getElementById("shareQrBtn"),
    qrModal: document.getElementById("qrModal"),
    closeQrBtn: document.getElementById("closeQrBtn"),
  };

  let news2Chart = null;
  let news2History = JSON.parse(localStorage.getItem("news2_history") || "[]");

  let dbData = {};
  let currentGcs = 15;
  let useOxygen = false;

  UI.o2Toggle.addEventListener("click", () => {
    useOxygen = !useOxygen;
    UI.o2Toggle.classList.toggle("bg-blue-500", useOxygen);
    UI.o2Toggle.classList.toggle("bg-slate-200", !useOxygen);
    UI.o2Knob.classList.toggle("translate-x-4", useOxygen);
    updateNEWS2();
  });

  // NEWS2 Calculation Logic
  const updateNEWS2 = () => {
    const rawRr = UI.ttvRr.value.trim();
    const rawSpo2 = UI.ttvSpo2.value.trim();
    const rawTd = UI.ttvTd.value.trim();
    const rawHr = UI.ttvHr.value.trim();
    const rawTemp = UI.ttvTemp.value.trim();

    // Only show badge if at least one vital is entered
    if (!rawRr && !rawSpo2 && !rawTd && !rawHr && !rawTemp) {
      UI.news2Badge.classList.add("hidden");
      return;
    }

    let score = 0;
    const rr = parseInt(rawRr) || 0;
    const spo2 = parseInt(rawSpo2) || 0;
    const sbp = parseInt(rawTd.split("/")[0]) || 0;
    const hr = parseInt(rawHr) || 0;
    const temp = parseFloat(rawTemp) || 0;

    // RR
    if (rawRr) {
      if (rr <= 8 || rr >= 25) score += 3;
      else if (rr >= 21) score += 2;
      else if (rr <= 11) score += 1;
    }

    // SpO2
    if (rawSpo2) {
      if (spo2 <= 91) score += 3;
      else if (spo2 <= 93) score += 2;
      else if (spo2 <= 95) score += 1;
    }

    // SBP
    if (rawTd) {
      if (sbp <= 90 || sbp >= 220) score += 3;
      else if (sbp <= 100) score += 2;
      else if (sbp <= 110) score += 1;
    }

    // HR
    if (rawHr) {
      if (hr <= 40 || hr >= 131) score += 3;
      else if (hr >= 111) score += 2;
      else if (hr <= 50 || hr >= 91) score += 1;
    }

    // Temp
    if (rawTemp) {
      if (temp <= 35.0) score += 3;
      else if (temp >= 39.1) score += 2;
      else if (temp <= 36.0 || temp >= 38.1) score += 1;
    }

    // GCS Impact
    if (currentGcs < 15) score += 3;

    // Oxygen Impact
    if (useOxygen) score += 2;

    UI.news2Score.innerText = score;
    UI.news2Progress.style.width = `${Math.min((score / 20) * 100, 100)}%`;

    let level = "LOW";
    let color = "bg-emerald-500";
    if (score >= 7) {
      level = "HIGH (RED ALERT)";
      color = "bg-red-600";
    } else if (score >= 5) {
      level = "MEDIUM (YELLOW)";
      color = "bg-amber-500";
    }

    UI.news2Level.className = `inline-block px-2 py-0.5 rounded text-[9px] font-bold ${color} text-white mb-2`;
    UI.news2Level.innerText = level;
    UI.news2Badge.classList.remove("hidden");

    // Save to history for chart (Throttle to avoid too many points)
    if (score > 0) {
      const now = new Date();
      const lastPoint = news2History[news2History.length - 1];
      const tenMins = 10 * 60 * 1000;

      if (!lastPoint || now - new Date(lastPoint.t) > tenMins) {
        news2History.push({ t: now.toISOString(), s: score });
        if (news2History.length > 20) news2History.shift();
        localStorage.setItem("news2_history", JSON.stringify(news2History));
        updateNews2Chart();
      }
    }
  };

  const updateNews2Chart = () => {
    if (news2History.length < 2) {
      UI.news2HistorySection.classList.add("hidden");
      return;
    }
    UI.news2HistorySection.classList.remove("hidden");

    const ctx = document.getElementById("news2Chart").getContext("2d");
    const labels = news2History.map((h) =>
      new Date(h.t).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    );
    const data = news2History.map((h) => h.s);

    if (news2Chart) news2Chart.destroy();

    news2Chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Skor NEWS2",
            data: data,
            borderColor: "#3b82f6",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            borderWidth: 3,
            tension: 0.4,
            fill: true,
            pointBackgroundColor: "#fff",
            pointBorderColor: "#3b82f6",
            pointRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { min: 0, max: 20, ticks: { stepSize: 5, font: { size: 10 } } },
          x: { ticks: { font: { size: 8 }, maxRotation: 0 } },
        },
      },
    });
  };

  UI.clearNewsBtn.addEventListener("click", () => {
    news2History = [];
    localStorage.removeItem("news2_history");
    UI.news2HistorySection.classList.add("hidden");
  });

  updateNews2Chart();

  [UI.ttvTd, UI.ttvHr, UI.ttvRr, UI.ttvTemp, UI.ttvSpo2].forEach((el) => {
    el.addEventListener("input", updateNEWS2);
  });

  // Show Welcome Modal on Load (Always on refresh)
  UI.welcomeModal.classList.remove("hidden");

  const closeWelcome = () => {
    UI.welcomeModal.classList.add("hidden");
  };

  UI.closeWelcomeBtn.addEventListener("click", closeWelcome);
  UI.getStartedBtn.addEventListener("click", closeWelcome);

  // Mode Toggling
  UI.modeCerdasBtn.addEventListener("click", () => {
    UI.sectionCerdas.classList.remove("hidden");
    UI.sectionManual.classList.add("hidden");
    UI.modeCerdasBtn.classList.add("bg-white", "shadow-sm", "text-blue-600");
    UI.modeManualBtn.classList.remove("bg-white", "shadow-sm", "text-blue-600");
    UI.modeManualBtn.classList.add("text-slate-500");
  });

  UI.modeManualBtn.addEventListener("click", () => {
    UI.sectionManual.classList.remove("hidden");
    UI.sectionCerdas.classList.add("hidden");
    UI.modeManualBtn.classList.add("bg-white", "shadow-sm", "text-blue-600");
    UI.modeCerdasBtn.classList.remove("bg-white", "shadow-sm", "text-blue-600");
    UI.modeCerdasBtn.classList.add("text-slate-500");
  });

  // Intelligent Multi-Keyword Search Logic
  UI.smartSearch.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query || query.length < 2) {
      UI.searchSuggestions.classList.add("hidden");
      return;
    }

    const tokens = query.split(/\s+/).filter((t) => t.length > 1);
    const results = [];

    Object.keys(dbData).forEach((cat) => {
      if (cat === "_metadata") return;
      dbData[cat].forEach((d) => {
        let score = 0;
        const targetStr =
          `${d.diagnosa_medis} ${d.pengkajian.manifestasi} ${d.diagnosa_keperawatan.map((dk) => dk.nama).join(" ")}`.toLowerCase();

        // Exact name match gets highest priority
        if (d.diagnosa_medis.toLowerCase().includes(query)) score += 50;

        // Check each token
        tokens.forEach((token) => {
          if (d.diagnosa_medis.toLowerCase().includes(token)) score += 20;
          if (d.pengkajian.manifestasi.toLowerCase().includes(token))
            score += 10;
          if (targetStr.includes(token)) score += 5;
        });

        // Penalize long manifests slightly to avoid junk matches
        if (score > 0) {
          results.push({ ...d, category: cat, score: score });
        }
      });
    });

    // Sort by score descending
    results.sort((a, b) => b.score - a.score);

    if (results.length > 0) {
      UI.searchSuggestions.innerHTML = results
        .slice(0, 8)
        .map(
          (r) => `
        <div class="p-3 hover:bg-slate-50 cursor-pointer border-b border-slate-100 last:border-0" data-cat="${r.category}" data-diag="${r.diagnosa_medis}">
          <div class="flex justify-between items-start mb-1">
            <span class="text-xs font-bold text-slate-800">${r.diagnosa_medis}</span>
            <span class="text-[9px] px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded-full font-bold uppercase tracking-wider">${r.category.split(".")[1].trim()}</span>
          </div>
          <p class="text-[10px] text-slate-500 italic line-clamp-1">${r.pengkajian.manifestasi}</p>
        </div>
      `,
        )
        .join("");
      UI.searchSuggestions.classList.remove("hidden");
    } else {
      UI.searchSuggestions.classList.add("hidden");
    }
  });

  UI.searchSuggestions.addEventListener("click", (e) => {
    const item = e.target.closest("[data-cat]");
    if (!item) return;

    const cat = item.dataset.cat;
    const diag = item.dataset.diag;

    // Auto-Select manual dropdowns
    UI.peminatanSel.value = cat;
    const ev = new Event("change");
    UI.peminatanSel.dispatchEvent(ev);

    setTimeout(() => {
      UI.diagnosaSel.value = diag;
      updateChecklist(diag, cat);
      UI.searchSuggestions.classList.add("hidden");
      // Trigger generate automatically for speed
      UI.generateBtn.click();
    }, 50);
  });

  // Close search suggestions on click outside
  document.addEventListener("click", (e) => {
    if (
      !UI.smartSearch.contains(e.target) &&
      !UI.searchSuggestions.contains(e.target)
    ) {
      UI.searchSuggestions.classList.add("hidden");
    }
  });
  // GCS Logic
  function updateGcs() {
    const e = parseInt(UI.gcsE.value);
    const v = parseInt(UI.gcsV.value);
    const m = parseInt(UI.gcsM.value);
    currentGcs = e + v + m;
    UI.gcsTotalDisplay.innerText = `GCS Total: ${currentGcs}`;
    UI.openGcsBtn.innerText = `GCS: ${currentGcs}`;
    updateNEWS2();
  }

  UI.openGcsBtn.addEventListener("click", () =>
    UI.gcsPanel.classList.toggle("hidden"),
  );
  UI.closeGcsBtn.addEventListener("click", () =>
    UI.gcsPanel.classList.add("hidden"),
  );
  [UI.gcsE, UI.gcsV, UI.gcsM].forEach((el) =>
    el.addEventListener("change", updateGcs),
  );

  // Smart Suggestion Logic
  function checkSmartSuggestion() {
    const hr = parseInt(UI.ttvHr.value) || 80;
    const rr = parseInt(UI.ttvRr.value) || 20;

    if (hr > 100 || rr > 24) {
      UI.smartSuggestion.classList.remove("hidden");
    } else {
      UI.smartSuggestion.classList.add("hidden");
    }
  }

  [UI.ttvHr, UI.ttvRr, UI.ttvTemp, UI.ttvSpo2].forEach((el) =>
    el.addEventListener("input", checkSmartSuggestion),
  );

  // VOICE RECOGNITION FEATURE
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.lang = "id-ID";
    recognition.continuous = false;

    UI.voiceBtn.addEventListener("click", () => {
      recognition.start();
      UI.voiceBtn.classList.add("animate-pulse", "text-red-500");
    });

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      UI.smartSearch.value = transcript;
      const ev = new Event("input", { bubbles: true });
      UI.smartSearch.dispatchEvent(ev);
    };

    recognition.onend = () => {
      UI.voiceBtn.classList.remove("animate-pulse", "text-red-500");
    };
  } else {
    UI.voiceBtn.style.display = "none";
  }

  // CALCULATOR LOGIC
  UI.openCalcBtn.addEventListener("click", () =>
    UI.calcModal.classList.remove("hidden"),
  );
  UI.closeCalcBtn.addEventListener("click", () =>
    UI.calcModal.classList.add("hidden"),
  );

  const calculateNursing = () => {
    // TPM
    const vol = parseFloat(document.getElementById("calcCairan").value) || 0;
    const jam = parseFloat(document.getElementById("calcWaktu").value) || 0;
    const factor =
      parseFloat(document.getElementById("calcFactor").value) || 20;
    if (vol && jam) {
      const tpm = Math.round((vol * factor) / (jam * 60));
      document.getElementById("resTpm").innerText = `TPM: ${tpm} tts/menit`;
    }

    // Syringe Pump
    const order =
      parseFloat(document.getElementById("calcDosisOrder").value) || 0;
    const bb = parseFloat(document.getElementById("calcBb").value) || 0;
    const sediaan =
      parseFloat(document.getElementById("calcSediaan").value) || 0;
    const pelarut =
      parseFloat(document.getElementById("calcPelarut").value) || 0;

    if (order && bb && sediaan && pelarut) {
      // Formula: (Dosis x BB x 60) / (Konsentrasi)
      // Konsentrasi = (Sediaan [mg] * 1000 [mcg]) / Pelarut [ml]
      const konsentrasi = (sediaan * 1000) / pelarut;
      const mlJam = (order * bb * 60) / konsentrasi;
      document.getElementById("resSyringe").innerText =
        `Syringe Pump: ${mlJam.toFixed(2)} ml/jam`;
    }
  };

  [
    "calcCairan",
    "calcWaktu",
    "calcFactor",
    "calcDosisOrder",
    "calcBb",
    "calcSediaan",
    "calcPelarut",
  ].forEach((id) => {
    document.getElementById(id).addEventListener("input", calculateNursing);
  });

  // QR SHARING LOGIC
  UI.shareQrBtn.addEventListener("click", () => {
    const sbarS = document.getElementById("sbarS").innerText;
    const sbarA = document.getElementById("sbarA").innerText;
    const shareText = `ISBAR HANDOVER\nSituation: ${sbarS}\nAssessment: ${sbarA}\nGenerated via AskepPro`;

    const qrContainer = document.getElementById("qrcode");
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
      text: shareText,
      width: 200,
      height: 200,
    });

    UI.qrModal.classList.remove("hidden");
  });

  document
    .getElementById("closeQrBtn")
    .addEventListener("click", () => UI.qrModal.classList.add("hidden"));
  document.getElementById("downloadQrBtn").addEventListener("click", () => {
    const img = document.querySelector("#qrcode img");
    if (img) {
      const link = document.createElement("a");
      link.href = img.src;
      link.download = "ISBAR_QR_Code.png";
      link.click();
    }
  });

  // 1. Fetch data.json
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      dbData = data;

      if (data._metadata) {
        document.getElementById("statPenyakit").innerText =
          data._metadata.total_penyakit;
        document.getElementById("statSdki").innerText =
          data._metadata.total_sdki;
        document.getElementById("statSiki").innerText =
          data._metadata.total_siki;
        document.getElementById("statSlki").innerText =
          data._metadata.total_slki;
      }

      populatePeminatan();
    })
    .catch((err) => {
      console.error("Error loading data:", err);
      UI.peminatanSel.innerHTML =
        '<option value="">Error loading data base</option>';
    });

  function populatePeminatan() {
    const categories = Object.keys(dbData).filter((c) => c !== "_metadata");
    categories.forEach((cat) => {
      const option = document.createElement("option");
      option.value = cat;
      option.textContent = cat;
      UI.peminatanSel.appendChild(option);
    });
  }

  UI.peminatanSel.addEventListener("change", (e) => {
    const cat = e.target.value;
    const diagnosaListDom = document.getElementById("diagnosaList");
    diagnosaListDom.innerHTML = "";
    UI.diagnosaSel.value = "";
    UI.diagnosaSel.disabled = true;
    UI.sdkiSelectionBlock.classList.add("hidden");
    UI.sdkiChecklist.innerHTML = "";

    if (cat && dbData[cat]) {
      const diagnoses = dbData[cat];
      diagnoses.forEach((d) => {
        const option = document.createElement("option");
        option.value = d.diagnosa_medis;
        diagnosaListDom.appendChild(option);
      });
      UI.diagnosaSel.disabled = false;
      UI.diagnosaSel.placeholder = "Ketik atau pilih diagnosa...";
    }
  });

  function updateChecklist(diagStr, cat) {
    UI.sdkiChecklist.innerHTML = "";
    UI.sdkiSelectionBlock.classList.add("hidden");

    if (cat && dbData[cat]) {
      const diagData = dbData[cat].find((d) => d.diagnosa_medis === diagStr);
      if (diagData && diagData.diagnosa_keperawatan.length > 0) {
        UI.sdkiSelectionBlock.classList.remove("hidden");
        diagData.diagnosa_keperawatan.forEach((dk, index) => {
          const div = document.createElement("div");
          div.className = "flex items-start mb-2 group";
          div.innerHTML = `
                      <div class="flex items-center h-5">
                          <input id="chk_${index}" type="checkbox" value="${dk.kode}" checked class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 cursor-pointer">
                      </div>
                      <div class="ml-3 text-xs">
                          <label for="chk_${index}" class="font-medium text-slate-700 group-hover:text-blue-600 cursor-pointer transition-colors">${dk.nama}</label>
                          <p class="text-slate-400 text-[10px] font-mono uppercase">${dk.kode}</p>
                      </div>
                  `;
          UI.sdkiChecklist.appendChild(div);
        });
        checkSmartSuggestion();
      }
    }
  }

  UI.diagnosaSel.addEventListener("input", (e) => {
    const cat = UI.peminatanSel.value;
    updateChecklist(e.target.value, cat);
  });

  UI.generateBtn.addEventListener("click", () => {
    UI.generateBtn.disabled = true;
    UI.generateBtn.innerHTML = "Generating...";

    setTimeout(() => {
      let manualCat = UI.peminatanSel.value;
      let manualDiag = UI.diagnosaSel.value;
      const smartQuery = UI.smartSearch.value.trim().toLowerCase();

      let primaryDiag = null;
      let comorbidityDiag = null;
      let detectedDiseases = [];

      // SMART COMORBIDITY SORTER LOGIC
      if (smartQuery.length >= 3) {
        const tokens = smartQuery.split(/\s+/).filter((t) => t.length > 2);
        Object.keys(dbData).forEach((c) => {
          if (c === "_metadata") return;
          dbData[c].forEach((d) => {
            let score = 0;
            if (d.diagnosa_medis.toLowerCase().includes(smartQuery))
              score += 100;
            tokens.forEach((t) => {
              if (d.diagnosa_medis.toLowerCase().includes(t)) score += 50;
              if (d.pengkajian.manifestasi.toLowerCase().includes(t))
                score += 20;
            });
            if (score > 30) detectedDiseases.push({ ...d, category: c, score });
          });
        });

        detectedDiseases.sort((a, b) => b.score - a.score);
        // Remove duplicates of same disease name
        detectedDiseases = detectedDiseases.filter(
          (v, i, a) =>
            a.findIndex((t) => t.diagnosa_medis === v.diagnosa_medis) === i,
        );
      }

      if (manualCat && manualDiag) {
        primaryDiag = dbData[manualCat].find(
          (d) => d.diagnosa_medis === manualDiag,
        );
        primaryDiag.category = manualCat;
      } else if (detectedDiseases.length > 0) {
        primaryDiag = detectedDiseases[0];
        if (detectedDiseases.length > 1 && detectedDiseases[1].score > 40) {
          comorbidityDiag = detectedDiseases[1];
        }
      }

      if (!primaryDiag) {
        alert("Pilih diagnosa atau ketik gejala/penyakit di Modul Cerdas!");
        resetGenerateBtn();
        return;
      }

      // SBAR GENERATOR
      const generateSBAR = (p, c, info, news) => {
        UI.sbarSection.classList.remove("hidden");
        const situation = `Pasien ${info.name} (${info.age} th) dengan diagnosa utama ${p.diagnosa_medis}${c ? " disertai " + c.diagnosa_medis : ""}. Mengeluhkan ${UI.smartSearch.value || "gejala terkait"}.`;
        const background = `TTV: TD ${info.ttv.td}, HR ${info.ttv.hr}, RR ${info.ttv.rr}, Temp ${info.ttv.temp}, SpO2 ${info.ttv.spo2}. GCS ${info.ttv.gcs}. Riwayat: ${p.pengkajian.etiologi ? p.pengkajian.etiologi.slice(0, 100) : "N/A"}...`;

        const mainNurseDiag =
          p.diagnosa_keperawatan.length > 0
            ? p.diagnosa_keperawatan[0].nama
            : "Masalah keperawatan kompleks";
        const assessment = `NEWS2 Score: ${news.score} (${news.level}). Analisis menunjukkan adanya mata rantai ${p.diagnosa_medis.toLowerCase()} ${c ? "dan " + c.diagnosa_medis.toLowerCase() : ""}. Prioritas utama: ${mainNurseDiag}.`;

        const mainTherapy = p.pengkajian.penatalaksanaan
          ? p.pengkajian.penatalaksanaan.split(",")[0]
          : "terapi suportif";
        const recommendation = `Lanjutkan monitoring hemodinamik, berikan posisi nyaman, kolaborasi pemberian terapi ${mainTherapy}, dan observasi ketat tanda pemburukan.`;

        UI.sbarS.innerText = situation;
        UI.sbarB.innerText = background;
        UI.sbarA.innerText = assessment;
        UI.sbarR.innerText = recommendation;
      };

      // NEWS2 For Handover
      const newsData = {
        score: UI.news2Score.innerText,
        level: UI.news2Level.innerText,
      };

      // Grab Patient Identity & TTV
      const pInfo = {
        name: UI.patientName.value || "Tn. / Ny. X",
        age: UI.patientAge.value || "-",
        rm: UI.patientRM.value || "-",
        ttv: {
          td: UI.ttvTd.value || "-",
          hr: UI.ttvHr.value || "-",
          rr: UI.ttvRr.value || "-",
          temp: UI.ttvTemp.value || "-",
          spo2: UI.ttvSpo2.value || "-",
          gcs: currentGcs,
        },
        date: new Date().toLocaleDateString("id-ID"),
      };

      // Call SBAR Generator
      generateSBAR(primaryDiag, comorbidityDiag, pInfo, newsData);

      let diagData = JSON.parse(JSON.stringify(primaryDiag)); // deep clone

      // Merge comorbidity info if exists
      if (comorbidityDiag) {
        diagData.diagnosa_medis += ` dengan Penyerta: ${comorbidityDiag.diagnosa_medis}`;
        diagData.pengkajian.patofisiologi += `<br><br><strong>Catatan Kondisi Penyerta (${comorbidityDiag.diagnosa_medis}):</strong> ${comorbidityDiag.pengkajian.patofisiologi}`;
      }

      const checkedBoxes = Array.from(
        UI.sdkiChecklist.querySelectorAll('input[type="checkbox"]:checked'),
      );
      if (checkedBoxes.length > 0) {
        const checkedCodes = checkedBoxes.map((cb) => cb.value);
        diagData.diagnosa_keperawatan = diagData.diagnosa_keperawatan.filter(
          (dk) => checkedCodes.includes(dk.kode),
        );
      }

      renderAskepKomplit(diagData, primaryDiag.category, pInfo);
      UI.resultSection.classList.remove("hidden");

      resetGenerateBtn();
    }, 150);
  });

  function resetGenerateBtn() {
    UI.generateBtn.disabled = false;
    UI.generateBtn.innerHTML = `
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            Generate Askep Lengkap
        `;
  }

  // Advanced Comprehensive Render (6 Stages)
  function renderAskepKomplit(data, cat, pInfo) {
    let html = `
            <div class="text-center mb-8 pb-4 border-b-2 border-slate-800">
                <h2 class="text-2xl font-bold uppercase tracking-wider text-slate-800">Dokumentasi Asuhan Keperawatan</h2>
                <p class="text-sm text-slate-500 font-medium mt-1">Departemen: ${cat} | Tanggal Pengkajian: ${pInfo.date}</p>
            </div>
            
            <!-- TAHAP 1: PENGKAJIAN -->
            <div class="mb-8">
                <div class="bg-blue-800 text-white font-bold px-4 py-2 mb-4 uppercase inline-block">1. Pengkajian Keperawatan</div>
                
                <h4 class="font-bold text-slate-800 border-b border-slate-200 pb-1 mb-3">A. Identitas Pasien</h4>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 text-sm text-slate-700 mb-6 bg-slate-50 p-4 rounded border border-slate-200">
                    <div><span class="font-semibold text-slate-500 text-[11px] uppercase block">Nama Pasien:</span> <span class="capitalize font-bold text-slate-800">${pInfo.name}</span></div>
                    <div><span class="font-semibold text-slate-500 text-[11px] uppercase block">Usia:</span> <span class="font-bold text-slate-800">${pInfo.age}</span></div>
                    <div><span class="font-semibold text-slate-500 text-[11px] uppercase block">No. Rekam Medis:</span> <span class="font-bold text-slate-800">${pInfo.rm}</span></div>
                    <div class="col-span-2 md:col-span-3 mt-2 pt-2 border-t border-slate-200 flex flex-wrap gap-x-6 gap-y-2">
                        <div><span class="font-semibold text-slate-500 text-[10px] uppercase">TD:</span> <span class="font-bold text-blue-700">${pInfo.ttv.td} mmHg</span></div>
                        <div><span class="font-semibold text-slate-500 text-[10px] uppercase">Nadi:</span> <span class="font-bold text-blue-700">${pInfo.ttv.hr} x/menit</span></div>
                        <div><span class="font-semibold text-slate-500 text-[10px] uppercase">RR:</span> <span class="font-bold text-blue-700">${pInfo.ttv.rr} x/menit</span></div>
                        <div><span class="font-semibold text-slate-500 text-[10px] uppercase">Suhu:</span> <span class="font-bold text-blue-700">${pInfo.ttv.temp} °C</span></div>
                        <div><span class="font-semibold text-slate-500 text-[10px] uppercase">SpO2:</span> <span class="font-bold text-blue-700">${pInfo.ttv.spo2} %</span></div>
                        <div><span class="font-semibold text-slate-500 text-[10px] uppercase">GCS:</span> <span class="font-bold text-blue-700">${pInfo.ttv.gcs} (E${UI.gcsE.value}V${UI.gcsV.value}M${UI.gcsM.value})</span></div>
                    </div>
                </div>

                <h4 class="font-bold text-slate-800 border-b border-slate-200 pb-1 mb-3">B. Kondisi Klinis & Patologis</h4>
                <div class="space-y-4 mb-6">
                    <div class="bg-slate-50 p-3 rounded border border-slate-200">
                        <h5 class="font-bold text-blue-700 text-sm mb-1 uppercase">1. Definisi Klinis</h5>
                        <div class="text-sm text-slate-700">${data.pengkajian.definisi || "-"}</div>
                    </div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200">
                        <h5 class="font-bold text-blue-700 text-sm mb-1 uppercase">2. Faktor Risiko & Etiologi</h5>
                        <div class="text-sm text-slate-700">${data.pengkajian.etiologi || "-"}</div>
                    </div>
                    <div class="bg-slate-50 p-3 rounded border border-slate-200">
                        <h5 class="font-bold text-blue-700 text-sm mb-1 uppercase">3. Manifestasi Klinis / Gejala</h5>
                        <div class="text-sm text-slate-700">${data.pengkajian.manifestasi || "-"}</div>
                    </div>
                </div>

                <h4 class="font-bold text-slate-800 border-b border-slate-200 pb-1 mb-3">C. Patofisiologi Dasar</h4>
                <div class="text-sm text-slate-700 mb-6 bg-slate-50 p-4 rounded border border-slate-200 leading-relaxed shadow-inner">
                    <p class="mb-3 italic text-slate-500 border-l-4 border-slate-300 pl-3 bg-white p-2 rounded">Berdasarkan analisis klinis, alur patofisiologi pada kasus ${data.diagnosa_medis} dapat diuraikan sebagai berikut:</p>
                    ${data.pengkajian.patofisiologi || "-"}
                </div>

                <h4 class="font-bold text-slate-800 border-b border-slate-200 pb-1 mb-3">D. Manajemen Medis Terkait</h4>
                <div class="space-y-4 mb-8">
                    <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 text-sm text-slate-700">
                        <p class="font-bold text-indigo-900 mb-2">Pemeriksaan Fisik & Penunjang:</p>
                        <div class="mb-3">${data.pengkajian.pemeriksaan || "-"}</div>
                        <p class="font-bold text-indigo-900 mb-2 mt-4">Penatalaksanaan / Farmakologi:</p>
                        <div>${data.pengkajian.penatalaksanaan || "-"}</div>
                    </div>
                    
                    ${
                      data.pengkajian.discharge_planning
                        ? `
                    <div class="bg-emerald-50 border-l-4 border-emerald-500 p-4 text-sm text-slate-700">
                        <p class="font-bold text-emerald-900 mb-2">Discharge Planning (Rencana Pulang):</p>
                        <div>${data.pengkajian.discharge_planning}</div>
                    </div>
                    `
                        : ""
                    }
                </div>
            </div>
        `;

    data.diagnosa_keperawatan.forEach((dk, index) => {
      // Helper to split symptoms into DS and DO
      const parseSymptoms = (list) => {
        let ds = [],
          do_ = [];
        list.forEach((item) => {
          if (item.toLowerCase().includes("subjektif:")) {
            const clean = item.replace(/subjektif:\s*/i, "").trim();
            if (clean && !clean.includes("tidak tersedia")) ds.push(clean);
          } else if (item.toLowerCase().includes("objektif:")) {
            const clean = item.replace(/objektif:\s*/i, "").trim();
            if (clean && !clean.includes("tidak tersedia")) do_.push(clean);
          } else {
            // If no label, put in DO by default or based on content
            do_.push(item);
          }
        });
        return { ds, do_ };
      };

      const mayor = parseSymptoms(dk.gejala_mayor);
      const minor = parseSymptoms(dk.gejala_minor);
      const allDS = [...mayor.ds, ...minor.ds];
      const allDO = [...mayor.do_, ...minor.do_];

      html += `
            <div class="mb-12 border border-slate-800 rounded-lg overflow-hidden border-2 shadow-lg">
                <!-- TAHAP 2: DIAGNOSA SDKI & ANALISA DATA -->
                <div class="bg-slate-800 text-white p-5">
                    <div class="flex justify-between items-start mb-3">
                        <div>
                            <div class="uppercase text-[10px] font-bold text-blue-300 tracking-[0.2em] mb-1">Diagnosa Keperawatan ${index + 1}</div>
                            <h3 class="text-xl font-black leading-tight">[${dk.kode}] ${dk.nama}</h3>
                        </div>
                        <div class="bg-blue-600 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider">SDKI Standar PPNI</div>
                    </div>
                    
                    <div class="bg-slate-900/60 p-4 rounded-lg border border-slate-700">
                         <div class="mb-4">
                            <h5 class="text-xs font-bold text-blue-400 uppercase mb-2">Analisa Data (DS & DO)</h5>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="bg-white/5 p-3 rounded border border-white/10">
                                    <span class="text-[10px] font-bold text-amber-400 block mb-1 uppercase tracking-tighter">Data Subjektif (DS)</span>
                                    <ul class="list-disc pl-4 text-xs text-slate-300 space-y-1">
                                        ${allDS.length > 0 ? allDS.map((s) => `<li>${s}</li>`).join("") : '<li class="italic opacity-50">Data subjektif tidak tersedia</li>'}
                                    </ul>
                                </div>
                                <div class="bg-white/5 p-3 rounded border border-white/10">
                                    <span class="text-[10px] font-bold text-emerald-400 block mb-1 uppercase tracking-tighter">Data Objektif (DO)</span>
                                    <ul class="list-disc pl-4 text-xs text-slate-300 space-y-1">
                                        ${allDO.length > 0 ? allDO.map((s) => `<li>${s}</li>`).join("") : '<li class="italic opacity-50">Data objektif tidak tersedia</li>'}
                                    </ul>
                                </div>
                            </div>
                         </div>
                         <p class="text-xs text-slate-300 leading-relaxed"><span class="font-bold text-blue-300">Definisi SDKI:</span> ${dk.definisi}</p>
                    </div>
                </div>

                <!-- TAHAP 3: PERENCANAAN (SLKI & SIKI) -->
                <div class="bg-slate-100 px-4 py-2 border-b border-slate-300 font-bold uppercase text-[10px] text-slate-600 tracking-widest flex justify-between">
                    <span>Perencanaan Keperawatan</span>
                    <span>Intervensi Berbasis 3S PPNI</span>
                </div>
                <div class="p-4 grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white text-sm">
                    
                    <!-- SLKI -->
                    <div class="bg-slate-50 border border-slate-200 rounded-lg p-4">
                        <h4 class="font-black text-slate-800 mb-3 border-b-2 border-blue-600 pb-1 flex items-center justify-between">
                            <span class="flex items-center">
                                <span class="bg-blue-800 text-white w-5 h-5 rounded-sm inline-flex items-center justify-center text-[10px] mr-2">SLKI</span>
                                KRITERIA HASIL
                            </span>
                            <span class="text-[9px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">Target 3x24 Jam</span>
                        </h4>
                        <p class="mb-4 italic text-slate-600 font-medium text-xs bg-white p-3 rounded-lg border border-slate-200 shadow-sm leading-relaxed">${dk.tujuan}</p>
                        <div class="space-y-4">
                            ${dk.slki
                              .map(
                                (slki) => `
                                <div class="bg-white border-l-4 border-blue-500 rounded shadow-sm p-3">
                                    <h5 class="font-bold text-blue-900 text-xs mb-3 flex justify-between items-center group">
                                        <span>[${slki.kode}] ${slki.nama}</span>
                                        <span class="text-[10px] text-slate-400 group-hover:text-blue-500 transition-colors">Skala Luaran (1-5)</span>
                                    </h5>
                                    <div class="space-y-2">
                                        ${slki.kriteria
                                          .map(
                                            (k) => `
                                            <div class="flex justify-between items-center text-xs border-b border-slate-100 pb-1">
                                                <span class="text-slate-700">${k}</span>
                                                <div class="flex gap-1 ml-4 shrink-0">
                                                    <span class="w-6 h-4 bg-slate-100 rounded text-[9px] flex items-center justify-center font-bold text-slate-400 border border-slate-200">A:2</span>
                                                    <svg class="w-3 h-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"></path></svg>
                                                    <span class="w-6 h-4 bg-blue-600 rounded text-[9px] flex items-center justify-center font-bold text-white shadow-sm">T:5</span>
                                                </div>
                                            </div>
                                        `,
                                          )
                                          .join("")}
                                    </div>
                                </div>
                            `,
                              )
                              .join("")}
                        </div>
                    </div>

                    <!-- SIKI -->
                    <div class="bg-slate-50 border border-slate-200 rounded-lg p-4">
                        <h4 class="font-black text-slate-800 mb-3 border-b-2 border-emerald-600 pb-1 flex items-center">
                            <span class="bg-emerald-800 text-white w-5 h-5 rounded-sm inline-flex items-center justify-center text-[10px] mr-2">SIKI</span>
                            INTERVENSI PRIORITAS
                        </h4>
                        <div class="space-y-4">
                            ${dk.siki
                              .map(
                                (siki) => `
                                <div class="bg-white border-l-4 border-emerald-500 rounded shadow-sm p-3">
                                    <h5 class="font-bold text-emerald-900 text-xs mb-2 bg-emerald-50 p-2 rounded border border-emerald-100">[${siki.kode}] ${siki.nama}</h5>
                                    <div class="grid grid-cols-1 gap-3 mt-3">
                                        ${[
                                          ["Observasi", "observasi", "blue"],
                                          [
                                            "Terapeutik",
                                            "terapeutik",
                                            "emerald",
                                          ],
                                          ["Edukasi", "edukasi", "amber"],
                                          ["Kolaborasi", "kolaborasi", "rose"],
                                        ]
                                          .filter(
                                            (cat) =>
                                              siki.tindakan[cat[1]].length > 0,
                                          )
                                          .map(
                                            (cat) => `
                                            <div class="space-y-1">
                                                <span class="text-[9px] font-black text-${cat[2]}-700 uppercase tracking-tighter block border-b border-${cat[2]}-100 mb-1">${cat[0]}</span>
                                                <ul class="list-disc pl-4 space-y-0.5 text-slate-600 text-[11px]">
                                                    ${siki.tindakan[cat[1]].map((t) => `<li>${t}</li>`).join("")}
                                                </ul>
                                            </div>
                                        `,
                                          )
                                          .join("")}
                                    </div>
                                </div>
                            `,
                              )
                              .join("")}
                        </div>
                    </div>
                </div>

                <!-- TAHAP 4: IMPLEMENTASI -->
                <div class="bg-slate-100 px-4 py-2 border-t border-b border-slate-300 font-bold uppercase text-[10px] text-slate-600 tracking-widest">Tahap Implementasi Keperawatan</div>
                <div class="overflow-x-auto bg-white p-4">
                    <table class="w-full border-collapse border border-slate-300 text-xs shadow-sm">
                        <thead class="bg-slate-800 text-white">
                            <tr>
                                <th class="border border-slate-400 p-2 w-24 text-[10px] uppercase">Waktu (WIB)</th>
                                <th class="border border-slate-400 p-2 text-[10px] uppercase">Implementasi Tindakan & Respon Klinis</th>
                                <th class="border border-slate-400 p-2 w-32 text-[10px] uppercase">Nama & Paraf</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${dk.implementasi
                              .map(
                                (imp, idx) => `
                                <tr class="hover:bg-slate-50 transition-colors">
                                    <td class="border border-slate-200 p-2 text-center font-bold text-blue-700 font-mono">${imp.waktu}</td>
                                    <td class="border border-slate-200 p-3 italic text-slate-700">
                                        <div class="font-bold not-italic mb-1 text-slate-900"><span class="text-blue-600 font-mono text-[10px] mr-1">DO-0${idx + 1}:</span> ${imp.tindakan}</div>
                                        <div class="text-[11px] border-l-2 border-slate-200 pl-3 mt-2 bg-slate-100/30 p-2 rounded leading-relaxed">
                                            <span class="font-bold text-slate-500 uppercase text-[9px] tracking-tight mr-1">Evaluasi Respon:</span> ${imp.respon}
                                        </div>
                                    </td>
                                    <td class="border border-slate-200 p-4 text-center align-bottom border-dashed">
                                        <div class="h-10 border-b border-slate-300 mb-1"></div>
                                        <div class="text-[9px] text-slate-400 font-bold uppercase">Ners Penanggung Jawab</div>
                                    </td>
                                </tr>
                            `,
                              )
                              .join("")}
                        </tbody>
                    </table>
                </div>

                <!-- TAHAP 5: EVALUASI -->
                <div class="bg-slate-100 px-4 py-2 border-t border-b border-slate-300 font-bold uppercase text-[10px] text-slate-600 tracking-widest">Evaluasi Keperawatan (CPPT / SOAP)</div>
                <div class="p-6 bg-amber-50/40 relative">
                    <div class="absolute right-8 top-12 opacity-5 pointer-events-none">
                        <svg class="w-48 h-48 text-amber-900" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                    </div>
                    <table class="w-full text-sm font-medium text-slate-800 border-separate border-spacing-y-4">
                        <tr class="group"><td class="w-12 h-12 align-middle bg-amber-700 text-white text-center font-black text-xl rounded-l-lg shadow-md border-r border-amber-800/20 leading-none">S</td><td class="p-4 align-top bg-white border border-amber-200 rounded-r-lg shadow-sm leading-relaxed"><span class="text-amber-700 font-bold uppercase text-[9px] block mb-1">Data Subjektif Akhir:</span> ${dk.evaluasi.s}</td></tr>
                        <tr class="group"><td class="w-12 h-12 align-middle bg-amber-600 text-white text-center font-black text-xl rounded-l-lg shadow-md border-r-amber-800/20 leading-none">O</td><td class="p-4 align-top bg-white border border-amber-200 rounded-r-lg shadow-sm leading-relaxed"><span class="text-amber-600 font-bold uppercase text-[9px] block mb-1">Data Objektif Akhir:</span> ${dk.evaluasi.o}</td></tr>
                        <tr class="group"><td class="w-12 h-12 align-middle bg-amber-800/80 text-white text-center font-black text-xl rounded-l-lg shadow-md border-r-amber-800/20 leading-none">A</td><td class="p-4 align-top bg-white border border-amber-200 rounded-r-lg shadow-sm leading-relaxed"><span class="text-amber-800 font-bold uppercase text-[9px] block mb-1">Assesmen Masalah:</span> ${dk.evaluasi.a}</td></tr>
                        <tr class="group"><td class="w-12 h-12 align-middle bg-slate-800 text-white text-center font-black text-xl rounded-l-lg shadow-md border-r-amber-800/20 leading-none">P</td><td class="p-4 align-top bg-white border border-amber-200 rounded-r-lg shadow-sm leading-relaxed"><span class="text-amber-900 font-bold uppercase text-[9px] block mb-1">Planning Lanjutan:</span> ${dk.evaluasi.p}</td></tr>
                    </table>
                </div>
            </div>`;
    });

    html += `
            <div class="mt-16 text-right print:mt-10 mr-10">
                <p class="text-sm text-slate-700 mb-16">Perawat Penanggung Jawab,</p>
                <p class="text-sm font-bold text-slate-800 underline decoration-slate-400 underline-offset-4">( .................................................. )</p>
                <p class="text-xs text-slate-500 mt-1">NIP/NIM.</p>
            </div>
        `;

    UI.askepContent.innerHTML = html;

    // Auto-apply Live Editing to all text elements natively!
    const editableElements = UI.askepContent.querySelectorAll(
      "p:not(.not-editable), li, td:not(.text-lg), div.text-sm",
    );
    editableElements.forEach((el) => {
      el.setAttribute("contenteditable", "true");
      el.setAttribute("spellcheck", "false");
      el.classList.add(
        "focus:outline-none",
        "focus:bg-yellow-50",
        "hover:bg-yellow-50",
        "transition-colors",
        "rounded",
      );
    });

    setTimeout(
      () =>
        UI.resultSection.scrollIntoView({ behavior: "smooth", block: "start" }),
      50,
    );
  }

  // 6. Export / Copy Features
  UI.copyBtn.addEventListener("click", () => {
    const text = document.getElementById("askepContent").innerText;
    navigator.clipboard.writeText(text).then(() => {
      const og = UI.copyBtn.innerHTML;
      UI.copyBtn.innerHTML = `Copied!`;
      setTimeout(() => (UI.copyBtn.innerHTML = og), 2000);
    });
  });

  UI.exportPdfBtn.addEventListener("click", () => {
    window.print();
  });

  UI.exportWordBtn.addEventListener("click", () => {
    const header =
      "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML to Word</title></head><body>";
    const footer = "</body></html>";
    const html =
      header + document.getElementById("askepContent").innerHTML + footer;

    const blob = new Blob(["\ufeff", html], {
      type: "application/msword",
    });
    const url =
      "data:application/vnd.ms-word;charset=utf-8," + encodeURIComponent(html);

    const downloadLink = document.createElement("a");
    document.body.appendChild(downloadLink);

    const filename = `ASKEP_${UI.diagnosaSel.value.replace(/\s+/g, "_")}_${new Date().getTime()}.doc`;

    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      downloadLink.href = url;
      downloadLink.download = filename;
      downloadLink.click();
    }
    document.body.removeChild(downloadLink);
  });
});
