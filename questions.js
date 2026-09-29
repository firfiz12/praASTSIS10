// Data Soal Ujian: Aqidah Islamiyyah & Ahkamus Shiyam (75 Soal)
const quizData = [
  {
    id: 1,
    type: "pg",
    category: "Aqidah Islamiyyah",
    section: "A. PILIHAN GANDA",
    question: "Secara bahasa, kata **العقيدة** berasal dari kata **عقد** yang bermakna ...",
    arabic: true,
    options: [
      { key: "A", text: "الشَّكُّ وَالتَّرَدُّدُ" },
      { key: "B", text: "الْجَزْمُ وَشِدَّةُ الْوُثُوقِ" },
      { key: "C", text: "الْخَوْفُ وَالرَّجَاءُ" },
      { key: "D", text: "الطَّاعَةُ وَالْعِبَادَةُ" },
      { key: "E", text: "الْعِلْمُ وَالْمَعْرِفَةُ" }
    ],
    correct: "B",
    explanation: "Secara etimologi (bahasa), kata 'العقيدة' berakar dari 'عقد' (al-'aqdu) yang bermakna ketetapan, kepastian yang kuat, dan ikatan yang kokoh (الْجَزْمُ وَشِدَّةُ الْوُثُوقِ وَالرَّبْطُ الْمُحْكَمُ)."
  },
  {
    id: 2,
    type: "pg",
    category: "Aqidah Islamiyyah",
    section: "A. PILIHAN GANDA",
    question: "Pengertian akidah Islam yang paling tepat berdasarkan materi adalah ...",
    arabic: true,
    options: [
      { key: "A", text: "أَعْمَالُ الْجَوَارِحِ فَقَطْ" },
      { key: "B", text: "الْعَادَاتُ وَالتَّقَالِيدُ" },
      { key: "C", text: "مَا يَجِبُ عَلَى الْمُؤْمِنِ اعْتِقَادُهُ بِجَزْمٍ وَيَقِينٍ" },
      { key: "D", text: "الْأَحْكَامُ الْفِقْهِيَّةُ فَقَطْ" },
      { key: "E", text: "الْأَخْلَاقُ الْحَسَنَةُ فَقَطْ" }
    ],
    correct: "C",
    explanation: "Akidah Islamiyah secara istilah syar'i adalah hal-hal yang wajib diyakini dan diimani oleh seorang mukmin dengan penuh kepastian dan keyakinan tanpa ada keraguan sedikit pun (مَا يَجِبُ عَلَى الْمُؤْمِنِ اعْتِقَادُهُ بِجَزْمٍ وَيَقِينٍ)."
  },
  {
    id: 3,
    type: "pg",
    category: "Aqidah Islamiyyah",
    section: "A. PILIHAN GANDA",
    question: "Manakah yang **bukan** termasuk enam rukun iman?",
    arabic: true,
    options: [
      { key: "A", text: "الْإِيمَانُ بِاللهِ" },
      { key: "B", text: "الْإِيمَانُ بِالْمَلَائِكَةِ" },
      { key: "C", text: "الْإِيمَانُ بِالْكُتُبِ" },
      { key: "D", text: "الْإِيمَانُ بِالْقَدَرِ" },
      { key: "E", text: "الْإِيمَانُ بِالْعَادَاتِ" }
    ],
    correct: "E",
    explanation: "Rukun iman ada enam: iman kepada Allah, Malaikat-Nya, Kitab-kitab-Nya, Rasul-rasul-Nya, Hari Akhir, dan Takdir (qadar) yang baik maupun yang buruk. Iman kepada tradisi/adat (الإيمان بالعادات) sama sekali bukan rukun iman."
  },
  {
    id: 4,
    type: "pg",
    category: "Aqidah Islamiyyah",
    section: "A. PILIHAN GANDA",
    question: "Yang termasuk sumber pengambilan akidah Islam adalah ...",
    arabic: true,
    options: [
      { key: "A", text: "الْأَحْلَامُ وَالرُّؤَى" },
      { key: "B", text: "الْعَادَاتُ وَالتَّقَالِيدُ" },
      { key: "C", text: "الْقُرْآنُ وَالسُّنَّةُ الصَّحِيحَةُ وَإِجْمَاعُ السَّلَفِ" },
      { key: "D", text: "آرَاءُ النَّاسِ فَقَطْ" },
      { key: "E", text: "الْعَقْلُ وَحْدَهُ" }
    ],
    correct: "C",
    explanation: "Sumber pokok pengambilan akidah Ahlus Sunnah wal Jama'ah adalah Al-Qur'an, As-Sunnah yang shahih, dan Ijma' As-Salafus Shalih (para sahabat, tabi'in, dan imam umat)."
  },
  {
    id: 5,
    type: "pg",
    category: "Aqidah Islamiyyah",
    section: "A. PILIHAN GANDA",
    question: "Salah satu alasan akidah Islam memiliki kedudukan penting adalah karena ...",
    arabic: false,
    options: [
      { key: "A", text: "akidah hanya membahas masalah sosial" },
      { key: "B", text: "akidah merupakan dasar agama Islam" },
      { key: "C", text: "akidah hanya diperlukan oleh para ulama" },
      { key: "D", text: "akidah hanya berkaitan dengan ibadah puasa" },
      { key: "E", text: "akidah tidak berkaitan dengan kehidupan seorang muslim" }
    ],
    correct: "B",
    explanation: "Akidah merupakan pondasi (asas) utama dari seluruh ajaran Islam. Diterimanya seluruh amal ibadah disyaratkan atas benarnya akidah dan tauhid."
  },
  {
    id: 6,
    type: "pg",
    category: "Aqidah Islamiyyah",
    section: "A. PILIHAN GANDA",
    question: "Ahlus Sunnah wal Jamaah adalah orang-orang yang ...",
    arabic: true,
    options: [
      { key: "A", text: "يَتَّبِعُونَ عَادَاتِ النَّاسِ" },
      { key: "B", text: "يَأْخُذُونَ الدِّينَ مِنْ عُقُولِهِمْ فَقَطْ" },
      { key: "C", text: "يَتَّبِعُونَ النَّبِيَّ ﷺ فِي أَقْوَالِهِ وَأَفْعَالِهِ وَتَقْرِيرَاتِهِ" },
      { key: "D", text: "يَرُدُّونَ السُّنَّةَ الصَّحِيحَةَ" },
      { key: "E", text: "يَتْرُكُونَ أَقْوَالَ الصَّحَابَةِ" }
    ],
    correct: "C",
    explanation: "Ahlus Sunnah wal Jama'ah adalah mereka yang setia mengikuti Nabi Muhammad ﷺ dalam ucapan, perbuatan, serta ketetapan beliau, dan berpegang teguh pada jalan para sahabat."
  },
  {
    id: 7,
    type: "pg",
    category: "Aqidah Islamiyyah",
    section: "A. PILIHAN GANDA",
    question: "Bagaimana sikap Ahlus Sunnah terhadap dalil yang sahih dari Al-Qur'an dan Sunnah?",
    arabic: true,
    options: [
      { key: "A", text: "رَدُّهَا" },
      { key: "B", text: "قَبُولُهَا" },
      { key: "C", text: "تَرْكُهَا" },
      { key: "D", text: "تَقْدِيمُ الرَّأْيِ عَلَيْهَا" },
      { key: "E", text: "الِاعْتِرَاضُ عَلَيْهَا" }
    ],
    correct: "B",
    explanation: "Prinsip Ahlus Sunnah terhadap dalil yang shahih dari wahyu (Al-Qur'an dan Sunnah) adalah taslim dan qabul (menerimanya dengan tunduk dan patuh), tanpa membantah atau menolaknya."
  },
  {
    id: 8,
    type: "pg",
    category: "Aqidah Islamiyyah",
    section: "A. PILIHAN GANDA",
    question: "Salah satu prinsip Ahlus Sunnah dalam memahami agama adalah ...",
    arabic: true,
    options: [
      { key: "A", text: "تَقْدِيمُ الْهَوَى عَلَى الْوَحْيِ" },
      { key: "B", text: "رَدُّ الْأَحَادِيثِ الصَّحِيحَةِ" },
      { key: "C", text: "الْجَمْعُ بَيْنَ النَّقْلِ الصَّحِيحِ وَالْعَقْلِ السَّلِيمِ" },
      { key: "D", text: "تَقْدِيمُ الْعَقْلِ عَلَى الْوَحْيِ دَائِمًا" },
      { key: "E", text: "اتِّبَاعُ الْبِدَعِ" }
    ],
    correct: "C",
    explanation: "Ahlus Sunnah memadukan antara dalil wahyu yang shahih (an-naql ash-sharih) dan logika akal yang sehat (al-'aql as-salim), karena keduanya tidak pernah bertentangan secara hakiki."
  },
  {
    id: 9,
    type: "pg",
    category: "Aqidah Islamiyyah",
    section: "A. PILIHAN GANDA",
    question: "Dalam masalah nama dan sifat Allah, Ahlus Sunnah ...",
    arabic: false,
    options: [
      { key: "A", text: "menyerupakan Allah dengan makhluk" },
      { key: "B", text: "menolak semua sifat Allah" },
      { key: "C", text: "menetapkan sesuai dengan yang layak bagi Allah tanpa menyerupakan-Nya dengan makhluk" },
      { key: "D", text: "hanya mengikuti pendapat manusia" },
      { key: "E", text: "tidak menggunakan dalil Al-Qur'an dan Sunnah" }
    ],
    correct: "C",
    explanation: "Kaidah Ahlus Sunnah dalam Asma wa Shifat adalah menetapkan apa yang ditetapkan oleh Allah dan Rasul-Nya secara hakiki yang layak bagi keagungan-Nya, tanpa tahrif, ta'thil, takyif, maupun tamtsil (tasybih)."
  },
  {
    id: 10,
    type: "pg",
    category: "Aqidah Islamiyyah",
    section: "A. PILIHAN GANDA",
    question: "Manakah yang merupakan salah satu sebab penyimpangan dari akidah?",
    arabic: true,
    options: [
      { key: "A", text: "التَّعَلُّمُ مِنَ الْعُلَمَاءِ" },
      { key: "B", text: "الْأَخْذُ مِنَ الْقُرْآنِ وَالسُّنَّةِ" },
      { key: "C", text: "أَخْذُ الدِّينِ مِنْ غَيْرِ أَهْلِ الْعِلْمِ" },
      { key: "D", text: "سُؤَالُ أَهْلِ الْعِلْمِ" },
      { key: "E", text: "اتِّبَاعُ السُّنَّةِ" }
    ],
    correct: "C",
    explanation: "Salah satu faktor terbesar terjadinya penyimpangan akidah adalah mengambil dan mempelajari agama dari orang-orang yang bukan ahli ilmu (أخذ الدين من غير أهل العلم)."
  },
  {
    id: 11,
    type: "pg",
    category: "Aqidah Islamiyyah",
    section: "A. PILIHAN GANDA",
    question: "Seseorang menafsirkan dalil akidah hanya berdasarkan pendapatnya sendiri tanpa bukti. Hal tersebut termasuk ...",
    arabic: true,
    options: [
      { key: "A", text: "الِاتِّبَاعُ الصَّحِيحُ" },
      { key: "B", text: "مِنْ أَسْبَابِ الِانْحِرَافِ" },
      { key: "C", text: "إِجْمَاعَ السَّلَفِ" },
      { key: "D", text: "الْعِلْمَ النَّافِعَ" },
      { key: "E", text: "اتِّبَاعَ السُّنَّةِ" }
    ],
    correct: "B",
    explanation: "Berbicara tentang urusan agama dan akidah semata-mata dengan akal pikiran dan hawa nafsu tanpa dasar dalil yang shahih merupakan salah satu pintu utama penyimpangan (من أسباب الانحراف)."
  },
  {
    id: 12,
    type: "pg",
    category: "Aqidah Islamiyyah",
    section: "A. PILIHAN GANDA",
    question: "Sikap yang benar terhadap bid'ah berdasarkan materi adalah ...",
    arabic: false,
    options: [
      { key: "A", text: "menyebarkannya agar semakin dikenal" },
      { key: "B", text: "membiarkannya tanpa penjelasan" },
      { key: "C", text: "mengajak kepada Sunnah dan memperingatkan dari bid'ah" },
      { key: "D", text: "langsung menuduh siapa pun sebagai ahli bid'ah" },
      { key: "E", text: "tidak perlu mempelajari Sunnah" }
    ],
    correct: "C",
    explanation: "Kewajiban seorang muslim adalah senantiasa mendakwahkan dan menghidupkan Sunnah serta memperingatkan umat dari bahaya bid'ah dengan hikmah dan cara yang bijak."
  },
  {
    id: 13,
    type: "pg",
    category: "Aqidah Islamiyyah",
    section: "A. PILIHAN GANDA",
    question: "Mengapa seseorang tidak boleh sembarangan memberikan label ahli bid'ah kepada orang lain?",
    arabic: false,
    options: [
      { key: "A", text: "Karena semua perbuatan pasti benar" },
      { key: "B", text: "Karena harus melakukan verifikasi terlebih dahulu" },
      { key: "C", text: "Karena bid'ah tidak pernah ada" },
      { key: "D", text: "Karena Sunnah tidak penting" },
      { key: "E", text: "Karena semua orang bebas membuat ajaran agama" }
    ],
    correct: "B",
    explanation: "Memberikan vonis atau label kepada individu muslim menuntut kehati-hatian, ilmu, tabayyun (verifikasi/tatsabbut), serta menegakkan hujah sebelum memberikan vonis."
  },
  {
    id: 14,
    type: "pg",
    category: "Ahkamus Shiyam",
    section: "A. PILIHAN GANDA",
    question: "Manakah yang termasuk pembatal puasa jika dilakukan dengan sengaja?",
    arabic: true,
    options: [
      { key: "A", text: "النَّوْمُ" },
      { key: "B", text: "الْأَكْلُ وَالشُّرْبُ" },
      { key: "C", text: "السِّوَاكُ" },
      { key: "D", text: "قِرَاءَةُ الْقُرْآنِ" },
      { key: "E", text: "الِاسْتِرَاحَةُ" }
    ],
    correct: "B",
    explanation: "Makan dan minum (الْأَكْلُ وَالشُّرْبُ) dengan sengaja adalah salah satu pembatal puasa yang disepakati oleh seluruh ulama kaum muslimin."
  },
  {
    id: 15,
    type: "pg",
    category: "Ahkamus Shiyam",
    section: "A. PILIHAN GANDA",
    question: "Seseorang makan setelah terbit fajar dengan sengaja. Apa yang terjadi pada puasanya?",
    arabic: true,
    options: [
      { key: "A", text: "صِيَامُهُ صَحِيحٌ" },
      { key: "B", text: "صِيَامُهُ يُفْسَدُ" },
      { key: "C", text: "صِيَامُهُ أَفْضَلُ" },
      { key: "D", text: "لَا شَيْءَ عَلَيْهِ" },
      { key: "E", text: "يَزْدَادُ أَجْرُهُ" }
    ],
    correct: "B",
    explanation: "Waktu puasa dimulai sejak terbit fajar shadiq hingga terbenam matahari. Makan dengan sengaja setelah terbit fajar membatalkan dan merusak puasanya (صِيَامُهُ يُفْسَدُ)."
  },
  {
    id: 16,
    type: "pg",
    category: "Bahasa Arab - Aqidah",
    section: "أَسْئِلَةٌ بِاللُّغَةِ الْعَرَبِيَّةِ",
    question: "**كَمْ عَدَدُ أَرْكَانِ الْإِيمَانِ؟**",
    arabic: true,
    options: [
      { key: "A", text: "أَرْبَعَةٌ" },
      { key: "B", text: "خَمْسَةٌ" },
      { key: "C", text: "سِتَّةٌ" },
      { key: "D", text: "سَبْعَةٌ" },
      { key: "E", text: "ثَمَانِيَةٌ" }
    ],
    correct: "C",
    explanation: "عَدَدُ أَرْكَانِ الْإِيمَانِ سِتَّةٌ (Sebagaimana dalam hadits Jibril: الإيمان أن تؤمن بالله وملائكته وكتبه ورسله واليوم الآخر وتؤمن بالقدر خيره وشره)."
  },
  {
    id: 17,
    type: "pg",
    category: "Bahasa Arab - Aqidah",
    section: "أَسْئِلَةٌ بِاللُّغَةِ الْعَرَبِيَّةِ",
    question: "**أَيُّ شَيْءٍ مِنْ مَصَادِرِ الْعَقِيدَةِ الْإِسْلَامِيَّةِ؟**",
    arabic: true,
    options: [
      { key: "A", text: "الْأَحْلَامُ" },
      { key: "B", text: "الْعَادَاتُ" },
      { key: "C", text: "الْقُرْآنُ وَالسُّنَّةُ الصَّحِيحَةُ" },
      { key: "D", text: "آرَاءُ النَّاسِ" },
      { key: "E", text: "الْأَفْكَارُ الشَّخْصِيَّةُ" }
    ],
    correct: "C",
    explanation: "مِنْ مَصَادِرِ الْعَقِيدَةِ الْإِسْلَامِيَّةِ الْأَسَاسِيَّةِ: الْقُرْآنُ الْكَرِيمُ وَالسُّنَّةُ النَّبَوِيَّةُ الصَّحِيحَةُ."
  },
  {
    id: 18,
    type: "pg",
    category: "Bahasa Arab - Aqidah",
    section: "أَسْئِلَةٌ بِاللُّغَةِ الْعَرَبِيَّةِ",
    question: "**مَنْ هُمْ أَهْلُ السُّنَّةِ وَالْجَمَاعَةِ؟**",
    arabic: true,
    options: [
      { key: "A", text: "مَنْ يَتْرُكُ السُّنَّةَ" },
      { key: "B", text: "مَنْ يَتَّبِعُ النَّبِيَّ ﷺ فِي أَقْوَالِهِ وَأَفْعَالِهِ وَتَقْرِيرَاتِهِ" },
      { key: "C", text: "مَنْ يَتَّبِعُ عَادَاتِ النَّاسِ فَقَطْ" },
      { key: "D", text: "مَنْ يَأْخُذُ الدِّينَ مِنْ عَقْلِهِ فَقَطْ" },
      { key: "E", text: "مَنْ يَرُدُّ الْأَحَادِيثَ الصَّحِيحَةَ" }
    ],
    correct: "B",
    explanation: "أَهْلُ السُّنَّةِ وَالْجَمَاعَةِ هُمْ مَنْ يَتَّبِعُ النَّبِيَّ ﷺ وَأَصْحَابَهُ فِي أَقْوَالِهِ وَأَفْعَالِهِ وَتَقْرِيرَاتِهِ."
  },
  {
    id: 19,
    type: "pg",
    category: "Bahasa Arab - Fiqih Shiyam",
    section: "أَسْئِلَةٌ بِاللُّغَةِ الْعَرَبِيَّةِ",
    question: "**أَيُّ الْآتِي مِنْ مُفْسِدَاتِ الصِّيَامِ؟**",
    arabic: true,
    options: [
      { key: "A", text: "السِّوَاكُ" },
      { key: "B", text: "النَّوْمُ" },
      { key: "C", text: "الْأَكْلُ وَالشُّرْبُ عَمْدًا" },
      { key: "D", text: "قِرَاءَةُ الْقُرْآنِ" },
      { key: "E", text: "الِاسْتِرَاحَةُ" }
    ],
    correct: "C",
    explanation: "الْأَكْلُ وَالشُّرْبُ عَمْدًا فِي نَهَارِ رَمَضَانَ مِنْ أَعْظَمِ مُفْسِدَاتِ الصِّيَامِ."
  },
  {
    id: 20,
    type: "pg",
    category: "Bahasa Arab - Fiqih Shiyam",
    section: "أَسْئِلَةٌ بِاللُّغَةِ الْعَرَبِيَّةِ",
    question: "**هَلْ يُفْسِدُ الِاحْتِلَامُ الصِّيَامَ؟**",
    arabic: true,
    options: [
      { key: "A", text: "نَعَمْ، يُفْسِدُهُ دَائِمًا" },
      { key: "B", text: "لَا، لَا يُفْسِدُ الصِّيَامَ" },
      { key: "C", text: "يُفْسِدُهُ فِي اللَّيْلِ" },
      { key: "D", text: "يُوجِبُ الْكَفَّارَةَ" },
      { key: "E", text: "يُوجِبُ الْفِدْيَةَ" }
    ],
    correct: "B",
    explanation: "الِاحْتِلَامُ لَا يُفْسِدُ الصِّيَامَ لِأَنَّهُ خَرَجَ بِغَيْرِ اخْتِيَارِ الصَّائِمِ، وَالْقَلَمُ مَرْفُوعٌ عَنِ النَّائِمِ حَتَّى يَسْتَيْقِظَ."
  },
  {
    id: 21,
    type: "pg",
    category: "Ahkamus Shiyam",
    section: "A. PILIHAN GANDA",
    question: "Seseorang muntah tanpa disengaja ketika berpuasa. Berdasarkan materi, bagaimana hukumnya?",
    arabic: true,
    options: [
      { key: "A", text: "يُفْسِدُ الصِّيَامَ" },
      { key: "B", text: "لَا يُفْسِدُ الصِّيَامَ" },
      { key: "C", text: "تَجِبُ الْكَفَّارَةُ" },
      { key: "D", text: "تَجِبُ الْفِدْيَةُ" },
      { key: "E", text: "يَجِبُ صِيَامُ شَهْرَيْنِ" }
    ],
    correct: "B",
    explanation: "Muntah tanpa sengaja tidak membatalkan puasa (لَا يُفْسِدُ الصِّيَامَ). Sabda Nabi ﷺ: 'Barang siapa yang terdesak muntah tanpa sengaja, maka tidak ada qadha baginya' (HR. Abu Dawud, Tirmidzi)."
  },
  {
    id: 22,
    type: "pg",
    category: "Ahkamus Shiyam",
    section: "A. PILIHAN GANDA",
    question: "Menurut materi, manakah yang **tidak** membatalkan puasa?",
    arabic: true,
    options: [
      { key: "A", text: "الْحَيْضُ" },
      { key: "B", text: "النِّفَاسُ" },
      { key: "C", text: "الْقَيْءُ عَمْدًا" },
      { key: "D", text: "الِاحْتِلَامُ" },
      { key: "E", text: "الْأَكْلُ عَمْدًا" }
    ],
    correct: "D",
    explanation: "Mimpi basah (الِاحْتِلَامُ) saat tidur tidak membatalkan puasa karena terjadi di luar kehendak manusia. Sedangkan haid, nifas, muntah sengaja, dan makan sengaja semuanya membatalkan puasa."
  },
  {
    id: 23,
    type: "pg",
    category: "Ahkamus Shiyam",
    section: "A. PILIHAN GANDA",
    question: "Mengambil sedikit darah untuk pemeriksaan laboratorium ...",
    arabic: true,
    options: [
      { key: "A", text: "يُفْسِدُ الصِّيَامَ" },
      { key: "B", text: "لَا يُفْسِدُ الصِّيَامَ" },
      { key: "C", text: "يُوجِبُ الْكَفَّارَةَ" },
      { key: "D", text: "يُوجِبُ الْفِدْيَةَ" },
      { key: "E", text: "يُوجِبُ الْقَضَاءَ مَعَ الْكَفَّارَةِ" }
    ],
    correct: "B",
    explanation: "Pengambilan sedikit darah untuk uji laboratorium tidak membatalkan puasa (لَا يُفْسِدُ الصِّيَامَ) karena jumlahnya sedikit dan tidak melemahkan badan layaknya bekam atau donor darah besar."
  },
  {
    id: 24,
    type: "pg",
    category: "Ahkamus Shiyam",
    section: "A. PILIHAN GANDA",
    question: "Wanita yang sedang haid ketika Ramadan ...",
    arabic: true,
    options: [
      { key: "A", text: "تَصُومُ وَلَا تَقْضِي" },
      { key: "B", text: "لَا تَصُومُ وَتَقْضِي بَعْدَ رَمَضَانَ" },
      { key: "C", text: "تَصُومُ وَتَدْفَعُ الْفِدْيَةَ" },
      { key: "D", text: "لَا تَصُومُ وَلَا تَقْضِي" },
      { key: "E", text: "تَدْفَعُ الْكَفَّارَةَ فَقَطْ" }
    ],
    correct: "B",
    explanation: "Wanita yang sedang haid haram berpuasa, dan ia wajib mengqadha hari-hari puasa yang ditinggalkannya setelah bulan Ramadan usai (لَا تَصُومُ وَتَقْضِي بَعْدَ رَمَضَانَ)."
  },
  {
    id: 25,
    type: "pg",
    category: "Ahkamus Shiyam",
    section: "A. PILIHAN GANDA",
    question: "Orang sakit yang diperkirakan akan sembuh dan berpuasa terasa berat atau membahayakan baginya ...",
    arabic: true,
    options: [
      { key: "A", text: "يُفْطِرُ وَعَلَيْهِ الْقَضَاءُ" },
      { key: "B", text: "يُفْطِرُ وَلَا يَقْضِي" },
      { key: "C", text: "يُطْعِمُ مِسْكِينًا فَقَطْ" },
      { key: "D", text: "يَجِبُ عَلَيْهِ الْكَفَّارَةُ" },
      { key: "E", text: "لَا يَجُوزُ لَهُ الْفِطْرُ" }
    ],
    correct: "A",
    explanation: "Orang sakit yang masih ada harapan sembuh (مريض يرجى برؤه) boleh berbuka dan berkewajiban mengqadha puasanya setelah sembuh (يُفْطِرُ وَعَلَيْهِ الْقَضَاءُ)."
  },
  {
    id: 26,
    type: "pg",
    category: "Ahkamus Shiyam",
    section: "A. PILIHAN GANDA",
    question: "Manakah yang termasuk orang yang boleh berbuka dan mengganti dengan memberi makan orang miskin setiap hari?",
    arabic: false,
    options: [
      { key: "A", text: "orang sehat yang sedang bekerja" },
      { key: "B", text: "musafir" },
      { key: "C", text: "orang tua renta yang tidak mampu berpuasa" },
      { key: "D", text: "orang yang malas berpuasa" },
      { key: "E", text: "orang yang tidak sempat sahur" }
    ],
    correct: "C",
    explanation: "Orang tua renta yang sudah tidak mampu lagi berpuasa diberikan keringanan untuk tidak berpuasa dan menggantinya dengan fidyah, yaitu memberi makan seorang miskin untuk setiap hari yang ditinggalkan."
  },
  {
    id: 27,
    type: "pg",
    category: "Ahkamus Shiyam",
    section: "A. PILIHAN GANDA",
    question: "Seorang musafir berbuka pada bulan Ramadan. Setelah Ramadan ia wajib ...",
    arabic: true,
    options: [
      { key: "A", text: "الْكَفَّارَةَ فَقَطْ" },
      { key: "B", text: "الْفِدْيَةَ فَقَطْ" },
      { key: "C", text: "قَضَاءَ الْيَوْمِ الَّذِي أَفْطَرَهُ" },
      { key: "D", text: "صِيَامَ شَهْرَيْنِ" },
      { key: "E", text: "إِطْعَامَ مِسْكِينَيْنِ" }
    ],
    correct: "C",
    explanation: "Musafir yang berbuka wajib mengqadha hari-hari yang ia tinggalkan di hari lain di luar bulan Ramadan (قَضَاءَ الْيَوْمِ الَّذِي أَفْطَرَهُ) sebagaimana firman Allah: فَعِدَّةٌ مِّنْ أَيَّامٍ أُخَرَ."
  },
  {
    id: 28,
    type: "pg",
    category: "Ahkamus Shiyam",
    section: "A. PILIHAN GANDA",
    question: "Wanita hamil atau menyusui diperbolehkan berbuka apabila ...",
    arabic: false,
    options: [
      { key: "A", text: "merasa tidak suka berpuasa" },
      { key: "B", text: "khawatir terhadap bahaya bagi dirinya atau dirinya dan anaknya" },
      { key: "C", text: "tidak sempat makan sahur" },
      { key: "D", text: "sedang sibuk mengurus rumah" },
      { key: "E", text: "ingin mengganti puasa dengan sedekah" }
    ],
    correct: "B",
    explanation: "Rukhsah (keringanan) berbuka bagi wanita hamil dan menyusui berlaku apabila ia mengkhawatirkan bahaya atau madharat terhadap kesehatan dirinya atau janin/anaknya."
  },
  {
    id: 29,
    type: "pg",
    category: "Ahkamus Shiyam",
    section: "A. PILIHAN GANDA",
    question: "Orang yang memiliki penyakit kronis dan tidak diharapkan sembuh sehingga tidak mampu berpuasa ...",
    arabic: true,
    options: [
      { key: "A", text: "يَقْضِي فَقَطْ" },
      { key: "B", text: "يُطْعِمُ مِسْكِينًا عَنْ كُلِّ يَوْمٍ" },
      { key: "C", text: "يَصُومُ شَهْرَيْنِ" },
      { key: "D", text: "لَا يَفْعَلُ شَيْئًا" },
      { key: "E", text: "يَجِبُ عَلَيْهِ الْكَفَّارَةُ فَقَطْ" }
    ],
    correct: "B",
    explanation: "Penyakit menahun yang tidak diharapkan sembuhnya disamakan dengan orang tua renta, yaitu cukup membayar fidyah dengan memberi makan seorang fakir miskin untuk setiap hari puasa (يُطْعِمُ مِسْكِينًا عَنْ كُلِّ يَوْمٍ)."
  },
  {
    id: 30,
    type: "pg",
    category: "Ahkamus Shiyam",
    section: "A. PILIHAN GANDA",
    question: "Jika seseorang menunda qadha Ramadan sampai Ramadan berikutnya **karena uzur yang sah**, maka ...",
    arabic: true,
    options: [
      { key: "A", text: "تَجِبُ عَلَيْهِ الْكَفَّارَةُ" },
      { key: "B", text: "يَجِبُ عَلَيْهِ الْفِدْيَةُ فَقَطْ" },
      { key: "C", text: "عَلَيْهِ الْقَضَاءُ فَقَطْ" },
      { key: "D", text: "لَا يَجِبُ عَلَيْهِ شَيْءٌ" },
      { key: "E", text: "يَصُومُ شَهْرَيْنِ" }
    ],
    correct: "C",
    explanation: "Apabila penundaan qadha disebabkan oleh uzur syar'i yang terus berlanjut (seperti sakit atau menyusui), maka ia tidak berdosa dan hanya berkewajiban mengqadha saja tanpa fidyah (عَلَيْهِ الْقَضَاءُ فَقَطْ)."
  },
  {
    id: 31,
    type: "pg",
    category: "Ahkamus Shiyam",
    section: "A. PILIHAN GANDA",
    question: "Qadha Ramadan sebaiknya dilakukan ...",
    arabic: false,
    options: [
      { key: "A", text: "setelah Ramadan berikutnya" },
      { key: "B", text: "sebelum datang Ramadan berikutnya" },
      { key: "C", text: "hanya pada bulan Ramadan" },
      { key: "D", text: "hanya pada hari Arafah" },
      { key: "E", text: "kapan saja tanpa batas" }
    ],
    correct: "B",
    explanation: "Kewajiban qadha puasa Ramadan hendaknya ditunaikan sesegera mungkin dan tidak boleh diakhirkan melampaui bulan Sya'ban sebelum masuknya Ramadan berikutnya tanpa uzur."
  },
  {
    id: 32,
    type: "pg",
    category: "Ahkamus Shiyam",
    section: "A. PILIHAN GANDA",
    question: "Jika seseorang memiliki hutang puasa Ramadan, maka yang lebih diutamakan secara umum adalah ...",
    arabic: true,
    options: [
      { key: "A", text: "صِيَامُ التَّطَوُّعِ" },
      { key: "B", text: "صِيَامُ الْقَضَاءِ" },
      { key: "C", text: "الِاعْتِكَافُ" },
      { key: "D", text: "الصَّدَقَةُ" },
      { key: "E", text: "تَرْكُ الصِّيَامِ" }
    ],
    correct: "B",
    explanation: "Mendahulukan ibadah yang fardhu/wajib (puasa qadha) lebih diprioritaskan dan diutamakan daripada ibadah tathawwu' (sunnah) demi menggugurkan tanggungan utang kepada Allah."
  },
  {
    id: 33,
    type: "pg",
    category: "Ahkamus Shiyam",
    section: "A. PILIHAN GANDA",
    question: "Menurut materi, suntikan yang **tidak mengandung unsur nutrisi** ...",
    arabic: true,
    options: [
      { key: "A", text: "تُفْسِدُ الصِّيَامَ" },
      { key: "B", text: "لَا تُفْسِدُ الصِّيَامَ" },
      { key: "C", text: "تُوجِبُ الْكَفَّارَةَ" },
      { key: "D", text: "تُوجِبُ الْفِدْيَةَ" },
      { key: "E", text: "تُوجِبُ الْقَضَاءَ مَعَ الْكَفَّارَةِ" }
    ],
    correct: "B",
    explanation: "Suntikan pengobatan melalui otot atau pembuluh darah yang tidak mengandung nutrisi atau zat makanan tidak membatalkan puasa (لَا تُفْسِدُ الصِّيَامَ)."
  },
  {
    id: 34,
    type: "pg",
    category: "Ahkamus Shiyam",
    section: "A. PILIHAN GANDA",
    question: "Donor darah dalam jumlah besar menurut materi ...",
    arabic: true,
    options: [
      { key: "A", text: "لَا يُؤَثِّرُ فِي الصِّيَامِ" },
      { key: "B", text: "يُفْسِدُ الصِّيَامَ" },
      { key: "C", text: "يُسْتَحَبُّ لِلصَّائِمِ" },
      { key: "D", text: "يُوجِبُ الْفِدْيَةَ فَقَطْ" },
      { key: "E", text: "يُوجِبُ صِيَامَ يَوْمَيْنِ" }
    ],
    correct: "B",
    explanation: "Donor darah dalam jumlah banyak diqiyaskan dengan bekam (hijamah), karena mengeluarkan banyak darah dan melemahkan kondisi fisik orang yang berpuasa, sehingga membatalkan puasa (يُفْسِدُ الصِّيَامَ)."
  },
  {
    id: 35,
    type: "pg",
    category: "Ahkamus Shiyam",
    section: "A. PILIHAN GANDA",
    question: "Jika seseorang sengaja membatalkan puasa tanpa uzur, salah satu kewajiban yang disebutkan dalam materi adalah ...",
    arabic: true,
    options: [
      { key: "A", text: "أَنْ يَتْرُكَ الصِّيَامَ بَقِيَّةَ الشَّهْرِ" },
      { key: "B", text: "أَنْ يَتُوبَ إِلَى اللهِ وَيَقْضِيَ الْيَوْمَ" },
      { key: "C", text: "أَنْ يَتْرُكَ الصَّلَاةَ" },
      { key: "D", text: "أَنْ يَدْفَعَ الصَّدَقَةَ فَقَطْ" },
      { key: "E", text: "أَنْ لَا يَقْضِيَ أَبَدًا" }
    ],
    correct: "B",
    explanation: "Membatalkan puasa Ramadan dengan sengaja tanpa uzur adalah dosa besar. Pelakunya wajib bertaubat nasuha kepada Allah dan mengqadha hari yang ia batalkan tersebut (أَنْ يَتُوبَ إِلَى اللهِ وَيَقْضِيَ الْيَوْمَ)."
  },
  {
    id: 36,
    type: "bs",
    category: "Aqidah Islamiyyah",
    section: "B. BENAR / SALAH",
    question: "Akidah Islam merupakan keyakinan yang harus diyakini oleh seorang mukmin dengan keyakinan yang kuat.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "BENAR",
    explanation: "Pernyataan ini BENAR. Akidah adalah keyakinan jazm (pasti dan mantap) di dalam hati seorang mukmin."
  },
  {
    id: 37,
    type: "bs",
    category: "Aqidah Islamiyyah",
    section: "B. BENAR / SALAH",
    question: "Rukun iman hanya mencakup iman kepada Allah, malaikat, kitab, rasul, dan hari akhir.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "SALAH",
    explanation: "Pernyataan ini SALAH. Kata 'hanya' tidak tepat karena rukun iman ada 6, mencakup juga iman kepada takdir (qadar) yang baik dan yang buruk."
  },
  {
    id: 38,
    type: "bs",
    category: "Aqidah Islamiyyah",
    section: "B. BENAR / SALAH",
    question: "Iman kepada qadar baik dan buruk termasuk salah satu rukun iman.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "BENAR",
    explanation: "Pernyataan ini BENAR. Iman kepada takdir (qadar) adalah rukun iman yang keenam."
  },
  {
    id: 39,
    type: "bs",
    category: "Aqidah Islamiyyah",
    section: "B. BENAR / SALAH",
    question: "Al-Qur'an dan Sunnah yang sahih termasuk sumber dalam mengambil akidah Islam.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "BENAR",
    explanation: "Pernyataan ini BENAR. Al-Qur'an dan As-Sunnah ash-shahihah adalah sumber primer pokok akidah Islam."
  },
  {
    id: 40,
    type: "bs",
    category: "Aqidah Islamiyyah",
    section: "B. BENAR / SALAH",
    question: "Menurut materi, pendapat pribadi boleh didahulukan daripada dalil wahyu yang sahih.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "SALAH",
    explanation: "Pernyataan ini SALAH. Dalam akidah Islam, wahyu yang shahih wajib didahulukan di atas akal, pendapat pribadi, maupun hawa nafsu manusia."
  },
  {
    id: 41,
    type: "bs",
    category: "Aqidah Islamiyyah",
    section: "B. BENAR / SALAH",
    question: "Ahlus Sunnah mengikuti Nabi ﷺ dalam perkataan, perbuatan, dan persetujuan beliau.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "BENAR",
    explanation: "Pernyataan ini BENAR. Definisi Sunnah mencakup qauliyah (ucapan), fi'liyah (perbuatan), dan taqririyah (persetujuan) beliau ﷺ."
  },
  {
    id: 42,
    type: "bs",
    category: "Aqidah Islamiyyah",
    section: "B. BENAR / SALAH",
    question: "Ahlus Sunnah menolak semua dalil yang tidak sesuai dengan pendapat akal seseorang.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "SALAH",
    explanation: "Pernyataan ini SALAH. Ahlus Sunnah tidak menolak dalil wahyu demi akal, melainkan menundukkan akal di bawah bimbingan dalil yang shahih."
  },
  {
    id: 43,
    type: "bs",
    category: "Aqidah Islamiyyah",
    section: "B. BENAR / SALAH",
    question: "Ahlus Sunnah meyakini bahwa dalil yang sahih tidak bertentangan dengan akal yang sehat.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "BENAR",
    explanation: "Pernyataan ini BENAR. Naql yang shahih dan akal yang sehat (sharihul ma'qul wa shahihul manqul) senantiasa selaras dan tidak bertolak belakang."
  },
  {
    id: 44,
    type: "bs",
    category: "Aqidah Islamiyyah",
    section: "B. BENAR / SALAH",
    question: "Mengambil ilmu agama dari orang yang tidak memiliki keahlian termasuk salah satu sebab penyimpangan akidah.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "BENAR",
    explanation: "Pernyataan ini BENAR. Belajar agama dari orang yang bukan ahlinya menimbulkan kebingungan dan pemahaman yang sesat."
  },
  {
    id: 45,
    type: "bs",
    category: "Aqidah Islamiyyah",
    section: "B. BENAR / SALAH",
    question: "Berlebihan dan meremehkan agama sama-sama disebut sebagai sebab penyimpangan.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "BENAR",
    explanation: "Pernyataan ini BENAR. Sikap ekstrem berlebih-lebihan (al-ghuluw) dan meremehkan/abai (at-tafrith/al-jafaa') keduanya adalah sebab utama penyimpangan."
  },
  {
    id: 46,
    type: "bs",
    category: "Aqidah Islamiyyah",
    section: "B. BENAR / SALAH",
    question: "Seseorang boleh menafsirkan dalil akidah berdasarkan pendapatnya sendiri meskipun tidak memiliki dalil.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "SALAH",
    explanation: "Pernyataan ini SALAH. Menafsirkan akidah tanpa ilmu dan dalil adalah perbuatan berbicara tentang Allah tanpa dasar ilmu yang diharamkan."
  },
  {
    id: 47,
    type: "bs",
    category: "Aqidah Islamiyyah",
    section: "B. BENAR / SALAH",
    question: "Dalam menghadapi bid'ah, seorang muslim dianjurkan menyebarkan Sunnah dan memperingatkan dari bid'ah.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "BENAR",
    explanation: "Pernyataan ini BENAR. Menyebarkan sunnah adalah obat penawar paling ampuh terhadap bid'ah, diiringi nasehat dan peringatan yang bijaksana."
  },
  {
    id: 48,
    type: "bs",
    category: "Aqidah Islamiyyah",
    section: "B. BENAR / SALAH",
    question: "Setiap orang yang melakukan kesalahan dalam masalah agama boleh langsung diberi label ahli bid'ah tanpa verifikasi.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "SALAH",
    explanation: "Pernyataan ini SALAH. Harus ada verifikasi (tatsabbut), pembedaan antara perbuatan dan pelaku (tabdi' al-mu'ayyan), serta penegakan hujah."
  },
  {
    id: 49,
    type: "bs",
    category: "Ahkamus Shiyam",
    section: "B. BENAR / SALAH",
    question: "Makan atau minum dengan sengaja setelah terbit fajar termasuk pembatal puasa.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "BENAR",
    explanation: "Pernyataan ini BENAR. Makan atau minum dengan sengaja membatalkan puasa sejak terbit fajar shadiq hingga terbenam matahari."
  },
  {
    id: 50,
    type: "bs",
    category: "Ahkamus Shiyam",
    section: "B. BENAR / SALAH",
    question: "Mimpi basah yang terjadi ketika seseorang tidur pada siang Ramadan membatalkan puasanya.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "SALAH",
    explanation: "Pernyataan ini SALAH. Mimpi basah (al-ihtilam) terjadi saat tidur tanpa kehendak manusia, sehingga tidak membatalkan puasa."
  },
  {
    id: 51,
    type: "bs",
    category: "Ahkamus Shiyam",
    section: "B. BENAR / SALAH",
    question: "Muntah yang terjadi tanpa disengaja tidak membatalkan puasa.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "BENAR",
    explanation: "Pernyataan ini BENAR. Berdasarkan sabda Nabi ﷺ, barangsiapa yang termuntahkan tanpa sengaja tidak batal puasanya dan tidak wajib qadha."
  },
  {
    id: 52,
    type: "bs",
    category: "Ahkamus Shiyam",
    section: "B. BENAR / SALAH",
    question: "Muntah dengan sengaja termasuk pembatal puasa.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "BENAR",
    explanation: "Pernyataan ini BENAR. Muntah yang diusahakan dengan sengaja (al-istiqaa') membatalkan puasa dan mewajibkan qadha."
  },
  {
    id: 53,
    type: "bs",
    category: "Ahkamus Shiyam",
    section: "B. BENAR / SALAH",
    question: "Menurut materi, bekam termasuk perkara yang membatalkan puasa.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "BENAR",
    explanation: "Pernyataan ini BENAR. Berdasarkan materi dan hadits: 'أفطر الحاجم والمحجوم' (Batal puasa orang yang membekam dan yang dibekam - HR. Abu Dawud)."
  },
  {
    id: 54,
    type: "bs",
    category: "Ahkamus Shiyam",
    section: "B. BENAR / SALAH",
    question: "Pengambilan sedikit darah untuk pemeriksaan laboratorium tidak membatalkan puasa.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "BENAR",
    explanation: "Pernyataan ini BENAR. Darah sedikit untuk cek laboratorium/medis dimaafkan dan tidak membatalkan puasa."
  },
  {
    id: 55,
    type: "bs",
    category: "Ahkamus Shiyam",
    section: "B. BENAR / SALAH",
    question: "Donor darah dalam jumlah besar tidak memiliki pengaruh terhadap puasa.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "SALAH",
    explanation: "Pernyataan ini SALAH. Donor darah dalam jumlah besar membatalkan puasa menurut materi (karena disamakan illatnya dengan bekam)."
  },
  {
    id: 56,
    type: "bs",
    category: "Ahkamus Shiyam",
    section: "B. BENAR / SALAH",
    question: "Haid dan nifas termasuk perkara yang membatalkan puasa.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "BENAR",
    explanation: "Pernyataan ini BENAR. Keluarnya darah haid atau nifas seketika membatalkan puasa secara ijma' ulama."
  },
  {
    id: 57,
    type: "bs",
    category: "Ahkamus Shiyam",
    section: "B. BENAR / SALAH",
    question: "Suntikan yang tidak bersifat nutrisi termasuk perkara yang tidak membatalkan puasa.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "BENAR",
    explanation: "Pernyataan ini BENAR. Suntikan terapi/obat yang tidak berfungsi menggantikan makan-minum tidak membatalkan puasa."
  },
  {
    id: 58,
    type: "bs",
    category: "Ahkamus Shiyam",
    section: "B. BENAR / SALAH",
    question: "Menggunakan inhaler untuk asma termasuk perkara yang tidak membatalkan puasa berdasarkan materi.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "BENAR",
    explanation: "Pernyataan ini BENAR. Gas semprotan inhaler mengalir ke saluran pernapasan paru-paru dan bukan makanan/minuman yang menuju ke lambung."
  },
  {
    id: 59,
    type: "bs",
    category: "Ahkamus Shiyam",
    section: "B. BENAR / SALAH",
    question: "Menggunakan siwak termasuk perkara yang tidak membatalkan puasa.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "BENAR",
    explanation: "Pernyataan ini BENAR. Bersiwak adalah sunnah yang disyariatkan kapan saja dan tidak membatalkan puasa selama tidak menelan serpihannya."
  },
  {
    id: 60,
    type: "bs",
    category: "Ahkamus Shiyam",
    section: "B. BENAR / SALAH",
    question: "Orang yang sengaja membatalkan puasa tanpa uzur cukup mengganti puasanya tanpa perlu bertaubat.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "SALAH",
    explanation: "Pernyataan ini SALAH. Orang yang sengaja berbuka tanpa uzur telah melakukan dosa besar, sehingga ia WAJIB bertaubat nasuha di samping mengqadha."
  },
  {
    id: 61,
    type: "bs",
    category: "Ahkamus Shiyam",
    section: "B. BENAR / SALAH",
    question: "Orang sakit yang diharapkan sembuh boleh berbuka jika puasa membahayakan atau memberatkannya, kemudian mengqadha.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "BENAR",
    explanation: "Pernyataan ini BENAR. Orang sakit yang diharapkan sembuh mendapatkan rukhsah berbuka dan wajib mengqadha hari yang ditinggalkan."
  },
  {
    id: 62,
    type: "bs",
    category: "Ahkamus Shiyam",
    section: "B. BENAR / SALAH",
    question: "Musafir termasuk salah satu golongan yang diperbolehkan berbuka dan wajib mengqadha puasanya.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "BENAR",
    explanation: "Pernyataan ini BENAR. Musafir boleh berbuka berdasarkan Al-Qur'an dan Sunnah, dan ia wajib mengqadhanya di luar Ramadan."
  },
  {
    id: 63,
    type: "bs",
    category: "Ahkamus Shiyam",
    section: "B. BENAR / SALAH",
    question: "Wanita haid tetap wajib berpuasa dan tidak perlu mengqadha setelah Ramadan.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "SALAH",
    explanation: "Pernyataan ini SALAH. Wanita haid diharamkan berpuasa dan diwajibkan mengqadha puasanya setelah Ramadan."
  },
  {
    id: 64,
    type: "bs",
    category: "Ahkamus Shiyam",
    section: "B. BENAR / SALAH",
    question: "Wanita hamil atau menyusui boleh berbuka jika khawatir terjadi bahaya pada dirinya atau dirinya dan anaknya.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "BENAR",
    explanation: "Pernyataan ini BENAR. Keringanan berbuka diberikan demi menjaga keselamatan jiwa ibu dan anak."
  },
  {
    id: 65,
    type: "bs",
    category: "Ahkamus Shiyam",
    section: "B. BENAR / SALAH",
    question: "Orang tua renta yang tidak mampu berpuasa termasuk golongan yang boleh berbuka dan memberi makan seorang miskin setiap hari.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "BENAR",
    explanation: "Pernyataan ini BENAR. Lansia yang lemah secara permanen mengganti puasanya dengan fidyah (memberi makan orang miskin per hari)."
  },
  {
    id: 66,
    type: "bs",
    category: "Ahkamus Shiyam",
    section: "B. BENAR / SALAH",
    question: "Orang yang memiliki penyakit kronis dan tidak diharapkan sembuh, tetapi tidak mampu berpuasa, cukup memberi makan seorang miskin setiap hari.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "BENAR",
    explanation: "Pernyataan ini BENAR. Penyakit kronis menahun tanpa harapan sembuh hukumnya sama dengan orang tua renta, cukup fidyah."
  },
  {
    id: 67,
    type: "bs",
    category: "Ahkamus Shiyam",
    section: "B. BENAR / SALAH",
    question: "Jika seseorang mengalami demensia berat sehingga tidak memiliki tanggung jawab hukum, maka ia tidak dibebani kewajiban puasa.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "BENAR",
    explanation: "Pernyataan ini BENAR. Orang yang hilang ingatan/demensia berat gugur status taklifnya (beban syariat) sehingga tidak wajib berpuasa dan tidak wajib fidyah."
  },
  {
    id: 68,
    type: "bs",
    category: "Ahkamus Shiyam",
    section: "B. BENAR / SALAH",
    question: "Qadha Ramadan sebaiknya dilakukan sebelum datang Ramadan berikutnya.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "BENAR",
    explanation: "Pernyataan ini BENAR. Batas akhir mengqadha puasa Ramadan adalah sebelum tiba Ramadan tahun berikutnya."
  },
  {
    id: 69,
    type: "bs",
    category: "Ahkamus Shiyam",
    section: "B. BENAR / SALAH",
    question: "Jika qadha ditunda sampai Ramadan berikutnya tanpa uzur, menurut materi orang tersebut berdosa, tetap wajib qadha, dan memberi makan seorang miskin untuk setiap hari.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "BENAR",
    explanation: "Pernyataan ini BENAR. Menurut fatwa para sahabat dan materi fiqih yang muktamad, penundaan tanpa uzur mewajibkan qadha disertai fidyah karena kelalaiannya."
  },
  {
    id: 70,
    type: "bs",
    category: "Ahkamus Shiyam",
    section: "B. BENAR / SALAH",
    question: "Jika qadha tertunda sampai Ramadan berikutnya karena uzur yang sah, maka cukup mengqadha puasanya.",
    arabic: false,
    options: [
      { key: "BENAR", text: "BENAR" },
      { key: "SALAH", text: "SALAH" }
    ],
    correct: "BENAR",
    explanation: "Pernyataan ini BENAR. Karena keterlambatan disebabkan uzur syar'i, tidak ada dosa dan tidak ada kewajiban fidyah, melainkan hanya qadha semata."
  },
  {
    id: 71,
    type: "arab_bs",
    category: "Bahasa Arab - Shahiih / Khatha'",
    section: "أَسْئِلَةُ الصَّوَابِ وَالْخَطَإِ بِاللُّغَةِ الْعَرَبِيَّةِ",
    question: "**أَرْكَانُ الْإِيمَانِ سِتَّةٌ، وَمِنْهَا الْإِيمَانُ بِالْقَدَرِ خَيْرِهِ وَشَرِّهِ.**",
    arabic: true,
    options: [
      { key: "صَحِيحٌ", text: "صَحِيحٌ (BENAR)" },
      { key: "خَطَأٌ", text: "خَطَأٌ (SALAH)" }
    ],
    correct: "صَحِيحٌ",
    explanation: "الْعِبَارَةُ صَحِيحَةٌ. أَرْكَانُ الْإِيمَانِ سِتَّةٌ: الْإِيمَانُ بِاللهِ، وَمَلَائِكَتِهِ، وَكُتُبِهِ، وَرُسُلِهِ، وَالْيَوْمِ الْآخِرِ، وَالْإِيمَانُ بِالْقَدَرِ خَيْرِهِ وَشَرِّهِ."
  },
  {
    id: 72,
    type: "arab_bs",
    category: "Bahasa Arab - Shahiih / Khatha'",
    section: "أَسْئِلَةُ الصَّوَابِ وَالْخَطَإِ بِاللُّغَةِ الْعَرَبِيَّةِ",
    question: "**مِنْ أَسْبَابِ الِانْحِرَافِ عَنِ الْعَقِيدَةِ أَخْذُ الدِّينِ مِنْ غَيْرِ أَهْلِ الْعِلْمِ.**",
    arabic: true,
    options: [
      { key: "صَحِيحٌ", text: "صَحِيحٌ (BENAR)" },
      { key: "خَطَأٌ", text: "خَطَأٌ (SALAH)" }
    ],
    correct: "صَحِيحٌ",
    explanation: "الْعِبَارَةُ صَحِيحَةٌ. تَلَقِّي الدِّينِ عَنْ غَيْرِ أَهْلِهِ وَالْجُهَّالِ مِنْ أَعْظَمِ أَسْبَابِ الضَّلَالِ وَالِانْحِرَافِ."
  },
  {
    id: 73,
    type: "arab_bs",
    category: "Bahasa Arab - Shahiih / Khatha'",
    section: "أَسْئِلَةُ الصَّوَابِ وَالْخَطَإِ بِاللُّغَةِ الْعَرَبِيَّةِ",
    question: "**الِاحْتِلَامُ فِي نَهَارِ رَمَضَانَ يُفْسِدُ الصِّيَامَ.**",
    arabic: true,
    options: [
      { key: "صَحِيحٌ", text: "صَحِيحٌ (BENAR)" },
      { key: "خَطَأٌ", text: "خَطَأٌ (SALAH)" }
    ],
    correct: "خَطَأٌ",
    explanation: "الْعِبَارَةُ خَطَأٌ. الِاحْتِلَامُ لَا يُفْسِدُ الصِّيَامَ لِأَنَّهُ خَرَجَ بِغَيْرِ اخْتِيَارِ الصَّائِمِ."
  },
  {
    id: 74,
    type: "arab_bs",
    category: "Bahasa Arab - Shahiih / Khatha'",
    section: "أَسْئِلَةُ الصَّوَابِ وَالْخَطَإِ بِاللُّغَةِ الْعَرَبِيَّةِ",
    question: "**الْمَرِيضُ الَّذِي يُرْجَى شِفَاؤُهُ إِذَا أَفْطَرَ فِي رَمَضَانَ يَجِبُ عَلَيْهِ الْقَضَاءُ.**",
    arabic: true,
    options: [
      { key: "صَحِيحٌ", text: "صَحِيحٌ (BENAR)" },
      { key: "خَطَأٌ", text: "خَطَأٌ (SALAH)" }
    ],
    correct: "صَحِيحٌ",
    explanation: "الْعِبَارَةُ صَحِيحَةٌ. الْمَرِيضُ الَّذِي يُرْجَى بُرْؤُهُ يَجِبُ عَلَيْهِ قَضَاءُ الْأَيَّامِ الَّتِي أَفْطَرَهَا بَعْدَ شِفَائِهِ."
  },
  {
    id: 75,
    type: "arab_bs",
    category: "Bahasa Arab - Shahiih / Khatha'",
    section: "أَسْئِلَةُ الصَّوَابِ وَالْخَطَإِ بِاللُّغَةِ الْعَرَبِيَّةِ",
    question: "**الشَّيْخُ الْكَبِيرُ الَّذِي لَا يَسْتَطِيعُ الصِّيَامَ يَجِبُ عَلَيْهِ الْقَضَاءُ فَقَطْ.**",
    arabic: true,
    options: [
      { key: "صَحِيحٌ", text: "صَحِيحٌ (BENAR)" },
      { key: "خَطَأٌ", text: "خَطَأٌ (SALAH)" }
    ],
    correct: "خَطَأٌ",
    explanation: "الْعِبَارَةُ خَطَأٌ. الشَّيْخُ الْكَبِيرُ الْعَاجِزُ لَا يَجِبُ عَلَيْهِ الْقَضَاءُ لِعَدَمِ اسْتِطَاعَتِهِ، وَإِنَّمَا تَجِبُ عَلَيْهِ الْفِدْيَةُ (إِطْعَامُ مِسْكِينٍ عَنْ كُلِّ يَوْمٍ)."
  }
];

if (typeof window !== 'undefined') {
  window.quizData = quizData;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = quizData;
}
