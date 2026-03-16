/**
 * ASKEP JIWA SMART - Quiz (Latihan Soal)
 */

window.quizQuestions = [];
window.currentQuestionIndex = 0;
window.score = 0;
window.quizTimerInterval = null;
window.timeRemaining = 0;

window.startQuiz = function (count, hasTimer = false) {
  if (EXTERNAL_JIWA.length === 0) {
    Swal.fire("Error", "Basis data soal belum dimuat.", "error");
    return;
  }

  const shuffled = [...EXTERNAL_JIWA].sort(() => 0.5 - Math.random());
  window.quizQuestions = shuffled.slice(0, count);
  window.currentQuestionIndex = 0;
  window.score = 0;

  document.getElementById("quiz-intro").style.display = "none";
  document.getElementById("quiz-result").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";

  const timerCont = document.getElementById("quiz-timer-container");
  if (hasTimer) {
    window.timeRemaining = count * 60;
    if (timerCont) timerCont.style.display = "flex";
    startTimer();
  } else {
    stopTimer();
    if (timerCont) timerCont.style.display = "none";
    document.getElementById("quiz-timer").innerText = "";
  }
  renderQuestion();
  if (typeof lucide !== "undefined") lucide.createIcons();
};

function startTimer() {
  clearInterval(quizTimerInterval);
  updateTimerDisplay();
  window.quizTimerInterval = setInterval(() => {
    window.timeRemaining--;
    updateTimerDisplay();
    if (window.timeRemaining <= 0) {
      clearInterval(quizTimerInterval);
      showResult();
      Swal.fire({
        title: "Waktu Habis",
        text: "Durasi tryout telah berakhir.",
        icon: "warning",
      });
    }
  }, 1000);
}

window.stopTimer = function () {
  clearInterval(quizTimerInterval);
  window.quizTimerInterval = null;
};

function updateTimerDisplay() {
  const h = Math.floor(window.timeRemaining / 3600);
  const m = Math.floor((window.timeRemaining % 3600) / 60);
  const s = window.timeRemaining % 60;
  const timerText =
    h > 0
      ? `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
      : `${m}:${String(s).padStart(2, "0")}`;

  const timerEl = document.getElementById("quiz-timer");
  const timerCont = document.getElementById("quiz-timer-container");

  if (timerEl) {
    timerEl.innerText = timerText;
  }

  if (timerCont) {
    if (window.timeRemaining < 300) {
      // < 5 menit
      timerCont.style.background = "#ef4444";
      timerCont.style.animation = "pulse 1s infinite";
    } else {
      timerCont.style.background = "var(--accent)";
      timerCont.style.animation = "none";
    }
  }
}

window.renderQuestion = function () {
  const q = quizQuestions[currentQuestionIndex];
  const qText = document.getElementById("question-text");
  const optionsGrid = document.getElementById("options-grid");
  const progressText = document.getElementById("quiz-progress");
  const progressBar = document.getElementById("quiz-progress-bar");

  progressText.innerText = `Soal ${currentQuestionIndex + 1} dari ${quizQuestions.length}`;
  progressBar.style.width = `${(currentQuestionIndex / quizQuestions.length) * 100}%`;

  qText.innerHTML = `
    <div class="quiz-badge">${q.category || "Kasus Klinis"}</div>
    <div style="font-weight:700; color:var(--text-main); font-family:'Outfit', sans-serif; font-size:1.2rem;">${q.question}</div>
  `;
  optionsGrid.innerHTML = "";
  document.getElementById("feedback-area").style.display = "none";

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.innerHTML = `
      <div style="display: flex; gap: 15px; align-items: flex-start;">
        <div class="quiz-option-letter">${String.fromCharCode(65 + idx)}</div>
        <div style="padding-top:2px;">${opt}</div>
      </div>
    `;
    btn.onclick = () => checkAnswer(idx, btn);
    optionsGrid.appendChild(btn);
  });
};

window.checkAnswer = function (selectedIndex, btn) {
  const q = quizQuestions[currentQuestionIndex];
  const optionsGrid = document.getElementById("options-grid");
  const feedbackArea = document.getElementById("feedback-area");
  const feedbackStatus = document.getElementById("feedback-status");
  const explanationText = document.getElementById("explanation-text");

  const buttons = optionsGrid.querySelectorAll("button");
  buttons.forEach((b) => (b.disabled = true));

  const isCorrect = selectedIndex === q.answer;
  if (isCorrect) {
    window.score++;
    btn.classList.add("correct");
    feedbackStatus.innerHTML =
      '<i data-lucide="check-circle" style="color:#10b981; width:24px; height:24px;"></i> <span>Jawaban BENAR!</span>';
    feedbackStatus.style.color = "#047857";
    feedbackArea.style.background = "#ecfdf5";
    feedbackArea.style.border = "1px solid #10b981";
  } else {
    btn.classList.add("wrong");
    buttons[q.answer].classList.add("correct");
    feedbackStatus.innerHTML =
      '<i data-lucide="x-circle" style="color:#ef4444; width:24px; height:24px;"></i> <span>Jawaban Kurang Tepat</span>';
    feedbackStatus.style.color = "#b91c1c";
    feedbackArea.style.background = "#fef2f2";
    feedbackArea.style.border = "1px solid #ef4444";
  }

  explanationText.innerHTML = `
    <div style="margin-top:0.5rem; font-weight:600; color:var(--text-main); margin-bottom:0.5rem; display:flex; align-items:center; gap:8px;">
        <i data-lucide="book-open" style="width:16px;"></i> Rasional & Pembahasan:
    </div>
    <div style="opacity:0.9;">${formatClinicalText(q.explanation)}</div>
  `;
  feedbackArea.style.display = "block";
  if (typeof lucide !== "undefined") lucide.createIcons();
};

window.nextQuestion = function () {
  window.currentQuestionIndex++;
  if (window.currentQuestionIndex < quizQuestions.length) {
    renderQuestion();
  } else {
    showResult();
  }
};

window.showResult = function () {
  stopTimer();
  document.getElementById("quiz-container").style.display = "none";
  const resultDiv = document.getElementById("quiz-result");
  const scoreText = document.getElementById("result-score-text");
  const messageText = document.getElementById("result-message");
  const iconDiv = document.getElementById("result-icon");

  resultDiv.style.display = "block";
  scoreText.innerText = `${window.score} / ${window.quizQuestions.length}`;

  const percentage = (window.score / window.quizQuestions.length) * 100;
  if (percentage >= 80) {
    iconDiv.innerHTML =
      '<i data-lucide="trophy" style="width: 64px; height: 64px; color: #f59e0b;"></i>';
    messageText.innerText = "Luar biasa! Pemahaman Anda sangat kuat.";
  } else if (percentage >= 60) {
    iconDiv.innerHTML =
      '<i data-lucide="award" style="width: 64px; height: 64px; color: var(--primary);"></i>';
    messageText.innerText =
      "Bagus! Teruskan belajar untuk lebih memantapkan kompetensi.";
  } else {
    iconDiv.innerHTML =
      '<i data-lucide="book-open" style="width: 64px; height: 64px; color: var(--text-muted);"></i>';
    messageText.innerText =
      "Jangan berkecil hati. Pelajari kembali materi SPO dan TAK.";
  }
  if (typeof lucide !== "undefined") lucide.createIcons();
};

window.resetQuiz = function () {
  stopTimer();
  document.getElementById("quiz-result").style.display = "none";
  document.getElementById("quiz-intro").style.display = "block";
};

window.quitQuiz = function () {
  const currentCount = currentQuestionIndex + 1;
  Swal.fire({
    title: "Berhenti Latihan?",
    text: `Anda baru mengerjakan ${currentCount} soal. Selesaikan sekarang dan lihat hasil evaluasi?`,
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "var(--primary)",
    cancelButtonColor: "var(--secondary)",
    confirmButtonText: "Ya, Lihat Hasil",
    cancelButtonText: "Lanjutkan",
  }).then((result) => {
    if (result.isConfirmed) {
      showResult();
    }
  });
};

window.confirmGoHome = function () {
  Swal.fire({
    title: "Kembali ke Beranda?",
    text: "Progres latihan Anda saat ini tidak akan disimpan. Lanjutkan?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "var(--accent)",
    cancelButtonColor: "var(--secondary)",
    confirmButtonText: "Ya, Keluar",
    cancelButtonText: "Batal",
  }).then((result) => {
    if (result.isConfirmed) {
      stopTimer();
      showView("dashboard");
      // Reset state for next time
      document.getElementById("quiz-container").style.display = "none";
      document.getElementById("quiz-intro").style.display = "block";
    }
  });
};
