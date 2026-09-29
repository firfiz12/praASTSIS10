// Application Logic: Tryout Ujian ASTS Kelas 10
// Aqidah Islamiyyah & Ahkamus Shiyam (75 Soal)

document.addEventListener("DOMContentLoaded", () => {
  // Global State
  const state = {
    student: {
      name: "",
      class: "Kelas 10",
      timerMinutes: 90
    },
    currentIndex: 0,
    answers: Array(quizData.length).fill(null).map(() => ({
      selected: null,
      flagged: false
    })),
    timer: {
      remainingSeconds: 0,
      intervalId: null,
      enabled: true
    },
    startTime: null,
    endTime: null,
    fontSizeMultiplier: 1.0,
    filterReview: "all"
  };

  // DOM Elements
  const screens = {
    welcome: document.getElementById("welcomeScreen"),
    quiz: document.getElementById("quizScreen"),
    result: document.getElementById("resultScreen")
  };

  const formStart = document.getElementById("startExamForm");
  const inputName = document.getElementById("studentName");
  const inputClass = document.getElementById("studentClass");
  const selectTimer = document.getElementById("examTimerMode");
  const displayTimerMeta = document.getElementById("displayTimerMeta");

  // Topbar elements
  const topbarUserName = document.getElementById("topbarUserName");
  const topbarUserClass = document.getElementById("topbarUserClass");
  const avatarInitial = document.getElementById("avatarInitial");
  const timerBox = document.getElementById("timerBox");
  const timerText = document.getElementById("timerText");

  // Progress elements
  const progressText = document.getElementById("progressText");
  const answeredCountText = document.getElementById("answeredCountText");
  const progressBarFill = document.getElementById("progressBarFill");

  // Question Card elements
  const questionCard = document.getElementById("questionCard");
  const qNumberBadge = document.getElementById("qNumberBadge");
  const qSectionBadge = document.getElementById("qSectionBadge");
  const questionTitle = document.getElementById("questionTitle");
  const optionsList = document.getElementById("optionsList");

  // Nav Buttons
  const btnPrev = document.getElementById("btnPrev");
  const btnNext = document.getElementById("btnNext");
  const btnFlag = document.getElementById("btnFlag");
  const btnSubmitModalTrigger = document.getElementById("btnSubmitModalTrigger");

  // Palette Grid
  const paletteGrid = document.getElementById("paletteGrid");
  const paletteAnsweredStatus = document.getElementById("paletteAnsweredStatus");

  // Font resizers
  const fontDecreaseBtn = document.getElementById("fontDecreaseBtn");
  const fontResetBtn = document.getElementById("fontResetBtn");
  const fontIncreaseBtn = document.getElementById("fontIncreaseBtn");

  // Theme toggle
  const themeToggleBtn = document.getElementById("themeToggleBtn");

  // Modal elements
  const confirmModal = document.getElementById("confirmModal");
  const modalCancelBtn = document.getElementById("modalCancelBtn");
  const modalConfirmSubmitBtn = document.getElementById("modalConfirmSubmitBtn");
  const modalAnsweredCount = document.getElementById("modalAnsweredCount");
  const modalFlaggedCount = document.getElementById("modalFlaggedCount");
  const modalEmptyCount = document.getElementById("modalEmptyCount");

  // Result Elements
  const resStudentName = document.getElementById("resStudentName");
  const resStudentSub = document.getElementById("resStudentSub");
  const scoreCircle = document.getElementById("scoreCircle");
  const scoreVal = document.getElementById("scoreVal");
  const predikatTitle = document.getElementById("predikatTitle");
  const predikatDesc = document.getElementById("predikatDesc");
  const statCorrect = document.getElementById("statCorrect");
  const statWrong = document.getElementById("statWrong");
  const statEmpty = document.getElementById("statEmpty");
  const statPercentage = document.getElementById("statPercentage");

  // Review & Actions
  const reviewCardsList = document.getElementById("reviewCardsList");
  const tabBadgeAll = document.getElementById("tabBadgeAll");
  const tabBadgeWrong = document.getElementById("tabBadgeWrong");
  const tabBadgeCorrect = document.getElementById("tabBadgeCorrect");
  const tabBadgeEmpty = document.getElementById("tabBadgeEmpty");
  const filterTabButtons = document.querySelectorAll(".filter-tabs .tab-btn");
  const btnPrintResult = document.getElementById("btnPrintResult");
  const btnCopySummary = document.getElementById("btnCopySummary");
  const btnRestartExam = document.getElementById("btnRestartExam");

  // ==================== EVENT LISTENERS & SETUP ====================

  // Update timer display on select change
  selectTimer.addEventListener("change", (e) => {
    const val = parseInt(e.target.value);
    displayTimerMeta.textContent = val === 0 ? "Tanpa Batas" : `${val} Menit`;
  });

  // Theme Toggle (Dark / Light)
  const savedTheme = localStorage.getItem("theme_asts") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme_asts", nextTheme);
  });

  // Start Exam Form Submit
  formStart.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = inputName.value.trim();
    if (!name) {
      inputName.focus();
      return;
    }

    state.student.name = name;
    state.student.class = inputClass.value.trim() || "Kelas 10";
    state.student.timerMinutes = parseInt(selectTimer.value);

    startExam();
  });

  // Navigation handlers
  btnPrev.addEventListener("click", () => {
    if (state.currentIndex > 0) {
      navigateToQuestion(state.currentIndex - 1);
    }
  });

  btnNext.addEventListener("click", () => {
    if (state.currentIndex < quizData.length - 1) {
      navigateToQuestion(state.currentIndex + 1);
    }
  });

  // Bookmark / Flag handler
  btnFlag.addEventListener("click", () => {
    const current = state.answers[state.currentIndex];
    current.flagged = !current.flagged;
    updateFlagButtonState();
    updatePaletteGrid();
  });

  // Font size adjusters
  fontIncreaseBtn.addEventListener("click", () => {
    if (state.fontSizeMultiplier < 1.4) {
      state.fontSizeMultiplier += 0.1;
      applyFontSize();
    }
  });

  fontDecreaseBtn.addEventListener("click", () => {
    if (state.fontSizeMultiplier > 0.85) {
      state.fontSizeMultiplier -= 0.1;
      applyFontSize();
    }
  });

  fontResetBtn.addEventListener("click", () => {
    state.fontSizeMultiplier = 1.0;
    applyFontSize();
  });

  function applyFontSize() {
    questionTitle.style.fontSize = `${1.15 * state.fontSizeMultiplier}rem`;
    const arabicElements = document.querySelectorAll(".arabic-text, .option-text.arabic-text");
    arabicElements.forEach(el => {
      el.style.fontSize = `${1.4 * state.fontSizeMultiplier}rem`;
    });
  }

  // Submit Modal Triggers
  btnSubmitModalTrigger.addEventListener("click", openSubmitModal);
  modalCancelBtn.addEventListener("click", closeSubmitModal);
  modalConfirmSubmitBtn.addEventListener("click", () => {
    closeSubmitModal();
    finishExam();
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!screens.quiz.classList.contains("active")) return;
    if (confirmModal.classList.contains("active")) return;

    if (e.key === "ArrowLeft") {
      btnPrev.click();
    } else if (e.key === "ArrowRight") {
      btnNext.click();
    } else if (e.key.toLowerCase() === "f") {
      btnFlag.click();
    } else {
      // Option select with 1..5 or A..E
      const currentQ = quizData[state.currentIndex];
      const optKeys = currentQ.options.map(o => o.key.toUpperCase());
      const keyUpper = e.key.toUpperCase();

      if (optKeys.includes(keyUpper)) {
        selectOption(keyUpper);
      } else if (e.key >= "1" && e.key <= String(currentQ.options.length)) {
        const idx = parseInt(e.key) - 1;
        if (currentQ.options[idx]) {
          selectOption(currentQ.options[idx].key);
        }
      }
    }
  });

  // Review Filter Tabs
  filterTabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterTabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.filterReview = btn.dataset.filter;
      renderReviewCards();
    });
  });

  // Result Actions
  btnPrintResult.addEventListener("click", () => {
    window.print();
  });

  btnCopySummary.addEventListener("click", () => {
    const answeredCount = state.answers.filter(a => a.selected !== null).length;
    let correctCount = 0;
    quizData.forEach((q, idx) => {
      if (state.answers[idx].selected === q.correct) correctCount++;
    });
    const finalScore = ((correctCount / quizData.length) * 100).toFixed(1);

    const textToCopy = `*HASIL TRYOUT ASTS KELAS 10*\n` +
      `Mata Pelajaran: Aqidah Islamiyyah & Ahkamus Shiyam\n` +
      `Nama Siswa: ${state.student.name}\n` +
      `Kelas: ${state.student.class}\n` +
      `---------------------------------\n` +
      `Nilai Akhir: ${finalScore} / 100\n` +
      `Jawaban Benar: ${correctCount} dari ${quizData.length} soal\n` +
      `Jawaban Salah: ${answeredCount - correctCount}\n` +
      `Tidak Dijawab: ${quizData.length - answeredCount}\n` +
      `Status: Evaluasi Mandiri Selesai ✅`;

    navigator.clipboard.writeText(textToCopy).then(() => {
      const orig = btnCopySummary.innerHTML;
      btnCopySummary.innerHTML = `<i class="fa-solid fa-check"></i> <span>Tersalin!</span>`;
      setTimeout(() => {
        btnCopySummary.innerHTML = orig;
      }, 2000);
    }).catch(() => {
      alert("Gagal menyalin ke clipboard.");
    });
  });

  btnRestartExam.addEventListener("click", () => {
    if (confirm("Apakah Anda yakin ingin mengulang ujian dari awal? Data jawaban saat ini akan di-reset.")) {
      resetExam();
    }
  });

  // ==================== CORE FUNCTIONS ====================

  function switchScreen(screenKey) {
    Object.values(screens).forEach(sc => sc.classList.remove("active"));
    screens[screenKey].classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startExam() {
    state.startTime = new Date();
    state.currentIndex = 0;

    // Set user headers
    topbarUserName.textContent = state.student.name;
    topbarUserClass.textContent = state.student.class;
    avatarInitial.textContent = state.student.name.charAt(0).toUpperCase();

    // Timer Init
    if (state.student.timerMinutes > 0) {
      state.timer.enabled = true;
      state.timer.remainingSeconds = state.student.timerMinutes * 60;
      timerBox.style.display = "flex";
      startTimer();
    } else {
      state.timer.enabled = false;
      timerBox.style.display = "none";
    }

    initPaletteGrid();
    renderQuestion(0);
    switchScreen("quiz");
  }

  function startTimer() {
    updateTimerDisplay();
    clearInterval(state.timer.intervalId);

    state.timer.intervalId = setInterval(() => {
      state.timer.remainingSeconds--;

      if (state.timer.remainingSeconds <= 300) {
        timerBox.classList.add("warning");
      }

      if (state.timer.remainingSeconds <= 0) {
        clearInterval(state.timer.intervalId);
        alert("Waktu ujian telah berakhir! Lembar jawaban Anda akan otomatis dikumpulkan.");
        finishExam();
        return;
      }

      updateTimerDisplay();
    }, 1000);
  }

  function updateTimerDisplay() {
    const mins = Math.floor(state.timer.remainingSeconds / 60);
    const secs = state.timer.remainingSeconds % 60;
    timerText.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  function initPaletteGrid() {
    paletteGrid.innerHTML = "";
    quizData.forEach((q, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "q-btn";
      btn.id = `palette-btn-${idx}`;
      btn.textContent = idx + 1;
      btn.title = `Soal No. ${idx + 1}`;
      btn.addEventListener("click", () => {
        navigateToQuestion(idx);
      });
      paletteGrid.appendChild(btn);
    });
    updatePaletteGrid();
  }

  function updatePaletteGrid() {
    let answered = 0;
    state.answers.forEach((ans, idx) => {
      const btn = document.getElementById(`palette-btn-${idx}`);
      if (!btn) return;

      btn.className = "q-btn";
      if (idx === state.currentIndex) {
        btn.classList.add("current");
      }
      if (ans.selected !== null) {
        btn.classList.add("answered");
        answered++;
      }
      if (ans.flagged) {
        btn.classList.add("flagged");
      }
    });

    paletteAnsweredStatus.textContent = `${answered} / ${quizData.length}`;
    answeredCountText.textContent = `${answered} Terjawab (${Math.round((answered / quizData.length) * 100)}%)`;
    progressBarFill.style.width = `${((state.currentIndex + 1) / quizData.length) * 100}%`;
  }

  function navigateToQuestion(newIndex) {
    state.currentIndex = newIndex;
    renderQuestion(newIndex);
    updatePaletteGrid();
  }

  function renderQuestion(index) {
    const q = quizData[index];
    const userAns = state.answers[index];

    qNumberBadge.textContent = `Soal No. ${index + 1} dari ${quizData.length}`;
    qSectionBadge.textContent = `${q.section} • ${q.category}`;
    progressText.textContent = `Soal ${index + 1} dari ${quizData.length}`;

    // Format Question Text
    let formattedTitle = formatMarkdownBold(q.question);
    questionTitle.innerHTML = formattedTitle;

    if (q.arabic && containsArabic(q.question)) {
      questionTitle.classList.add("arabic-text");
    } else {
      questionTitle.classList.remove("arabic-text");
    }

    // Render Options
    optionsList.innerHTML = "";
    q.options.forEach((opt, optIndex) => {
      const optEl = document.createElement("div");
      optEl.className = "option-item";
      if (userAns.selected === opt.key) {
        optEl.classList.add("selected");
      }

      const isArabText = containsArabic(opt.text);
      const optTextHtml = formatMarkdownBold(opt.text);

      optEl.innerHTML = `
        <div class="option-badge">${opt.key}</div>
        <div class="option-text ${isArabText ? 'arabic-text' : ''}">${optTextHtml}</div>
      `;

      optEl.addEventListener("click", () => {
        selectOption(opt.key);
      });

      optionsList.appendChild(optEl);
    });

    // Nav Button States
    btnPrev.disabled = index === 0;
    if (index === quizData.length - 1) {
      btnNext.innerHTML = `<span>Selesai</span> <i class="fa-solid fa-flag-checkered"></i>`;
    } else {
      btnNext.innerHTML = `<span>Selanjutnya</span> <i class="fa-solid fa-chevron-right"></i>`;
    }

    updateFlagButtonState();
    applyFontSize();
  }

  function selectOption(key) {
    state.answers[state.currentIndex].selected = key;

    // Refresh option selected class
    const optionElements = optionsList.querySelectorAll(".option-item");
    const currentQ = quizData[state.currentIndex];
    currentQ.options.forEach((opt, idx) => {
      if (opt.key === key) {
        optionElements[idx]?.classList.add("selected");
      } else {
        optionElements[idx]?.classList.remove("selected");
      }
    });

    updatePaletteGrid();
  }

  function updateFlagButtonState() {
    const isFlagged = state.answers[state.currentIndex].flagged;
    if (isFlagged) {
      btnFlag.classList.add("flagged");
      btnFlag.innerHTML = `<i class="fa-solid fa-bookmark"></i> <span>Ragu-ragu</span>`;
    } else {
      btnFlag.classList.remove("flagged");
      btnFlag.innerHTML = `<i class="fa-regular fa-bookmark"></i> <span>Ragu-ragu</span>`;
    }
  }

  // ==================== SUBMIT & EVALUATION ====================

  function openSubmitModal() {
    let answered = 0;
    let flagged = 0;
    state.answers.forEach(a => {
      if (a.selected !== null) answered++;
      if (a.flagged) flagged++;
    });

    modalAnsweredCount.textContent = `${answered} soal`;
    modalFlaggedCount.textContent = `${flagged} soal`;
    modalEmptyCount.textContent = `${quizData.length - answered} soal`;

    confirmModal.classList.add("active");
  }

  function closeSubmitModal() {
    confirmModal.classList.remove("active");
  }

  function finishExam() {
    state.endTime = new Date();
    if (state.timer.intervalId) {
      clearInterval(state.timer.intervalId);
    }

    calculateAndShowResults();
  }

  function calculateAndShowResults() {
    let correctCount = 0;
    let wrongCount = 0;
    let emptyCount = 0;

    quizData.forEach((q, idx) => {
      const userSelected = state.answers[idx].selected;
      if (userSelected === null) {
        emptyCount++;
      } else if (userSelected === q.correct) {
        correctCount++;
      } else {
        wrongCount++;
      }
    });

    // Score on 0 - 100 scale
    const rawScore = (correctCount / quizData.length) * 100;
    const finalScore = Math.round(rawScore * 10) / 10;

    // Duration calculation
    const durationMs = state.endTime - state.startTime;
    const durationMins = Math.max(1, Math.round(durationMs / 60000));

    // Update Result UI
    resStudentName.textContent = state.student.name;
    resStudentSub.textContent = `${state.student.class} • Selesai dalam ${durationMins} Menit • Total 75 Pertanyaan`;

    scoreVal.textContent = finalScore % 1 === 0 ? finalScore.toFixed(0) : finalScore.toFixed(1);
    scoreCircle.style.setProperty("--score-pct", finalScore);

    statCorrect.textContent = correctCount;
    statWrong.textContent = wrongCount;
    statEmpty.textContent = emptyCount;
    statPercentage.textContent = `${Math.round(rawScore)}%`;

    // Badges on review tabs
    tabBadgeAll.textContent = quizData.length;
    tabBadgeWrong.textContent = wrongCount;
    tabBadgeCorrect.textContent = correctCount;
    tabBadgeEmpty.textContent = emptyCount;

    // Predikat determination
    let predTitle = "";
    let predDesc = "";

    if (finalScore >= 90) {
      predTitle = "Mumtaz (مُمْتَازٌ) 🌟";
      predDesc = "Luar biasa! Pemahaman Anda terhadap Akidah Ahlus Sunnah dan hukum-hukum Fiqih Puasa sangat mendalam dan kokoh.";
      launchConfetti();
    } else if (finalScore >= 80) {
      predTitle = "Jayyid Jiddan (جَيِّدٌ جِدًّا) 👏";
      predDesc = "Sangat baik! Penguasaan materi Anda sangat memuaskan, periksa beberapa koreksi jawaban salah untuk menyempurnakan ilmu.";
      launchConfetti();
    } else if (finalScore >= 70) {
      predTitle = "Jayyid (جَيِّدٌ) 👍";
      predDesc = "Baik! Anda telah menguasai mayoritas konsep pokok. Pelajari catatan pembahasan dalil pada soal-soal yang keliru.";
    } else if (finalScore >= 60) {
      predTitle = "Maqbul (مَقْبُولٌ) 📖";
      predDesc = "Cukup! Manfaatkan bagian koreksi di bawah ini untuk mengulang materi dan menguatkan pemahaman fiqih dan akidah Anda.";
    } else {
      predTitle = "Dha'if / Perlu Perbaikan (ضَعِيفٌ) ✍️";
      predDesc = "Perlu muroja'ah lebih giat lagi. Teliti kembali penjelasan kunci jawaban pada setiap butir soal di bawah ini.";
    }

    predikatTitle.textContent = predTitle;
    predikatDesc.textContent = predDesc;

    // Render Review section (default: all)
    renderReviewCards();
    switchScreen("result");
  }

  // ==================== REVIEW / KOREKSI JAWABAN ====================

  function renderReviewCards() {
    reviewCardsList.innerHTML = "";
    const filter = state.filterReview;

    quizData.forEach((q, idx) => {
      const userAns = state.answers[idx].selected;
      const isCorrect = userAns === q.correct;
      const isEmpty = userAns === null;
      const isWrong = !isEmpty && !isCorrect;

      // Filter logic
      if (filter === "correct" && !isCorrect) return;
      if (filter === "wrong" && !isWrong) return;
      if (filter === "empty" && !isEmpty) return;

      const card = document.createElement("div");
      card.className = `review-card ${isCorrect ? 'is-correct' : (isEmpty ? 'is-empty' : 'is-wrong')}`;

      // User Answer text representation
      let userAnsDisplay = "Tidak Dijawab (Kosong)";
      if (userAns !== null) {
        const foundOpt = q.options.find(o => o.key === userAns);
        userAnsDisplay = foundOpt ? `${userAns}. ${foundOpt.text}` : userAns;
      }

      // Correct Answer text representation
      const correctOpt = q.options.find(o => o.key === q.correct);
      const correctAnsDisplay = correctOpt ? `${q.correct}. ${correctOpt.text}` : q.correct;

      // Status badge
      let badgeHtml = "";
      if (isCorrect) {
        badgeHtml = `<span class="review-status-badge status-correct"><i class="fa-solid fa-check"></i> Jawaban Benar (+1)</span>`;
      } else if (isEmpty) {
        badgeHtml = `<span class="review-status-badge status-empty"><i class="fa-solid fa-minus"></i> Tidak Dijawab (0)</span>`;
      } else {
        badgeHtml = `<span class="review-status-badge status-wrong"><i class="fa-solid fa-xmark"></i> Jawaban Anda Salah</span>`;
      }

      card.innerHTML = `
        <div class="review-card-header">
          <span style="font-weight: 700; font-size: 0.85rem; color: var(--text-muted);">
            No. ${idx + 1} • ${q.section}
          </span>
          ${badgeHtml}
        </div>

        <div class="review-q-text ${q.arabic ? 'arabic-text' : ''}">
          ${formatMarkdownBold(q.question)}
        </div>

        <div class="review-answers-box">
          <div class="answer-pill ${isCorrect ? 'user-ans-correct' : (isEmpty ? '' : 'user-ans-wrong')}">
            <span class="pill-label">Jawaban Anda:</span>
            <div style="font-weight: 600;">
              ${userAns !== null && !isCorrect ? '<i class="fa-solid fa-circle-xmark"></i> ' : ''}
              ${userAns !== null && isCorrect ? '<i class="fa-solid fa-circle-check"></i> ' : ''}
              ${userAnsDisplay}
            </div>
          </div>

          <div class="answer-pill correct-ans">
            <span class="pill-label">Kunci Jawaban yang Benar:</span>
            <div style="font-weight: 700; color: var(--success);">
              <i class="fa-solid fa-circle-check"></i> ${correctAnsDisplay}
            </div>
          </div>
        </div>

        <div class="explanation-box">
          <div class="explanation-title">
            <i class="fa-solid fa-book-bookmark"></i> Penjelasan / Catatan Dalil:
          </div>
          <div>${q.explanation}</div>
        </div>
      `;

      reviewCardsList.appendChild(card);
    });

    if (reviewCardsList.children.length === 0) {
      reviewCardsList.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <i class="fa-solid fa-circle-check" style="font-size: 3rem; color: var(--success); margin-bottom: 1rem;"></i>
          <h4>Tidak ada soal dalam kategori ini.</h4>
          <p style="font-size: 0.9rem;">Pilih filter lain untuk melihat evaluasi soal lainnya.</p>
        </div>
      `;
    }
  }

  function resetExam() {
    state.answers = Array(quizData.length).fill(null).map(() => ({
      selected: null,
      flagged: false
    }));
    state.currentIndex = 0;
    if (state.timer.intervalId) clearInterval(state.timer.intervalId);
    switchScreen("welcome");
  }

  // ==================== HELPER UTILITIES ====================

  function formatMarkdownBold(text) {
    if (!text) return "";
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  }

  function containsArabic(str) {
    if (!str) return false;
    const arabicRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
    return arabicRegex.test(str);
  }

  function launchConfetti() {
    if (typeof confetti === "function") {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });
      }, 350);
    }
  }

});
