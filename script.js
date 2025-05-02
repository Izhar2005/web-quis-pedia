// Data soal kuis untuk tiap tingkat kesulitan
const questionsSD = [
  { question: "Apa warna langit saat cerah?", options: ["Merah", "Biru", "Hijau", "Kuning"], answer: 1 },
  { question: "Berapa jumlah jari tangan manusia?", options: ["5", "10", "8", "6"], answer: 0 },
  { question: "Hewan yang paling genit?", options: ["Semute", "Belalang", "Kupu-kupu", "Lebah"], answer: 2 },
  { question: "Apa nama buah yang berwarna merah dan kecil?", options: ["Apel", "Jeruk", "Ceri", "Anggur"], answer: 2 },
  { question: "Berapa 2 + 3?", options: ["4", "5", "6", "7"], answer: 1 },
  { question: "Apa yang kita gunakan untuk bernapas?", options: ["Paru-paru", "Jantung", "Hati", "Ginjal"], answer: 0 },
  { question: "Benda apa yang bersinar di malam hari?", options: ["Matahari", "Bulan", "Lampu", "Api"], answer: 1 },
  { question: "Apa nama hari setelah Senin?", options: ["Selasa", "Rabu", "Kamis", "Jumat"], answer: 0 },
  { question: "Apa yang kucing suka kejar?", options: ["Burung", "Tikus", "Ikan", "Semute"], answer: 1 },
  { question: "Berapa sisi segitiga?", options: ["2", "3", "4", "5"], answer: 1 },
  { question: "Apa warna daun pada umumnya?", options: ["Merah", "Biru", "Hijau", "Ungu"], answer: 2 },
  { question: "Alat untuk menulis di papan tulis?", options: ["Pensil", "Kapur", "Spidol", "Pen"], answer: 1 },
  { question: "Apa nama planet tempat kita tinggal?", options: ["Mars", "Bumi", "Jupiter", "Venus"], answer: 1 },
  { question: "Hewan yang paling pendiam?", options: ["Semute", "Kucing", "Anjing", "Ayam"], answer: 0 },
  { question: "Apa yang kita minum setiap hari?", options: ["Susu", "Air", "Teh", "Kopi"], answer: 1 }
];

const questionsSMP = [
  { question: "Apa ibu kota Indonesia?", options: ["Bandung", "Jakarta", "Surabaya", "Medan"], answer: 1 },
  { question: "Planet apa yang dikenal sebagai planet merah?", options: ["Mars", "Venus", "Jupiter", "Saturnus"], answer: 0 },
  { question: "Siapa presiden pertama Indonesia?", options: ["Sukarno", "Suharto", "Megawati", "Jokowi"], answer: 0 },
  { question: "Berapa hasil dari 6 x 7?", options: ["36", "42", "48", "50"], answer: 1 },
  { question: "Apa nama sungai terpanjang di dunia?", options: ["Amazon", "Nil", "Yangtze", "Mississippi"], answer: 1 },
  { question: "Hewan yang memiliki belalai?", options: ["Gajah", "Jerapah", "Badak", "Kuda"], answer: 0 },
  { question: "Apa rumus luas lingkaran?", options: ["πr²", "2πr", "r²", "πd"], answer: 0 },
  { question: "Apa nama gunung tertinggi di Indonesia?", options: ["Rinjani", "Semeru", "Kerinci", "Puncak Jaya"], answer: 3 },
  { question: "Bahasa resmi negara Jepang?", options: ["Mandarin", "Jepang", "Korea", "Thai"], answer: 1 },
  { question: "Apa itu fotosintesis?", options: ["Proses bernapas", "Proses membuat makanan", "Proses berkembang biak", "Proses bergerak"], answer: 1 },
  { question: "Berapa jumlah tulang manusia dewasa?", options: ["206", "208", "210", "212"], answer: 0 },
  { question: "Apa nama samudra terluas di dunia?", options: ["Atlantik", "Pasifik", "Hindia", "Arktik"], answer: 1 },
  { question: "Siapa penulis novel Laskar Pelangi?", options: ["Andrea Hirata", "Tere Liye", "Ahmad Fuadi", "Dewi Lestari"], answer: 0 },
  { question: "Apa simbol kimia emas?", options: ["Ag", "Au", "Fe", "Cu"], answer: 1 },
  { question: "Berapa sudut total segitiga?", options: ["90°", "180°", "270°", "360°"], answer: 1 }
];

const questionsSMA = [
  { question: "Siapa penemu teori relativitas?", options: ["Newton", "Einstein", "Galileo", "Tesla"], answer: 1 },
  { question: "Apa simbol kimia air?", options: ["H2O", "CO2", "O2", "NaCl"], answer: 0 },
  { question: "Apa nama perang dunia kedua berlangsung?", options: ["1914-1918", "1939-1945", "1945-1950", "1960-1965"], answer: 1 },
  { question: "Apa itu simbiosis mutualisme?", options: ["Saling merugikan", "Saling menguntungkan", "Menguntungkan satu pihak", "Tidak saling memengaruhi"], answer: 1 },
  { question: "Berapa nilai sin 90°?", options: ["0", "1", "0.5", "-1"], answer: 1 },
  { question: "Siapa pelukis Mona Lisa?", options: ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"], answer: 2 },
  { question: "Apa ibu kota Perancis?", options: ["Berlin", "Madrid", "Paris", "Roma"], answer: 2 },
  { question: "Apa itu DNA?", options: ["Asam lemak", "Asam nukleat", "Asam amino", "Asam sulfat"], answer: 1 },
  { question: "Berapa periode dalam tabel periodik?", options: ["7", "8", "9", "10"], answer: 0 },
  { question: "Apa nama hukum Newton tentang aksi-reaksi?", options: ["Hukum I", "Hukum II", "Hukum III", "Hukum Gravitasi"], answer: 2 },
  { question: "Apa nama pulau terbesar di Indonesia?", options: ["Jawa", "Sumatera", "Kalimantan", "Papua"], answer: 2 },
  { question: "Siapa penulis Romeo dan Juliet?", options: ["Shakespeare", "Dickens", "Austen", "Hemingway"], answer: 0 },
  { question: "Apa itu inflasi dalam ekonomi?", options: ["Penurunan harga", "Kenaikan harga", "Stabilitas harga", "Penurunan produksi"], answer: 1 },
  { question: "Apa rumus kecepatan?", options: ["s/t", "t/s", "s x t", "s + t"], answer: 0 },
  { question: "Apa nama alat untuk mengukur gempa?", options: ["Barometer", "Seismograf", "Higrometer", "Anemometer"], answer: 1 }
];

const questionsS1 = [
  { question: "Apa itu logika proposisional?", options: ["Ilmu tentang angka", "Ilmu tentang argumen", "Ilmu tentang bahasa", "Ilmu tentang sejarah"], answer: 1 },
  { question: "Apa nama teori yang menjelaskan evolusi?", options: ["Teori Big Bang", "Teori Evolusi", "Teori Relativitas", "Teori Kuantum"], answer: 1 },
  { question: "Apa itu regresi linier dalam statistik?", options: ["Metode pengelompokan", "Metode prediksi hubungan", "Metode pengurutan", "Metode pengujian"], answer: 1 },
  { question: "Siapa filsuf yang menulis 'Critique of Pure Reason'?", options: ["Kant", "Hegel", "Nietzsche", "Sartre"], answer: 0 },
  { question: "Apa itu entropi dalam termodinamika?", options: ["Energi total", "Ketidakteraturan", "Panas spesifik", "Tekanan sistem"], answer: 1 },
  { question: "Apa nama model atom Bohr?", options: ["Model Planet", "Model Kuantum", "Model Klasik", "Model Relativistik"], answer: 0 },
  { question: "Apa itu globalisasi?", options: ["Isolasi ekonomi", "Integrasi global", "Nasionalisasi", "Dekolonisasi"], answer: 1 },
  { question: "Apa itu machine learning?", options: ["Pemrograman manual", "Pembelajaran mesin", "Desain perangkat keras", "Jaringan komputer"], answer: 1 },
  { question: "Apa nama enzim yang memecah karbohidrat?", options: ["Lipase", "Amilase", "Protease", "Nuklease"], answer: 1 },
  { question: "Apa itu kontrak sosial menurut Rousseau?", options: ["Perjanjian dagang", "Perjanjian masyarakat", "Perjanjian hukum", "Perjanjian politik"], answer: 1 },
  { question: "Apa itu produk domestik bruto (PDB)?", options: ["Pendapatan per kapita", "Total nilai barang/jasa", "Anggaran negara", "Ekspor netto"], answer: 1 },
  { question: "Apa nama hukum yang mengatur induksi elektromagnetik?", options: ["Hukum Ohm", "Hukum Faraday", "Hukum Ampere", "Hukum Coulomb"], answer: 1 },
  { question: "Apa itu paradigma dalam ilmu pengetahuan?", options: ["Metode eksperimen", "Kerangka berpikir", "Hasil penelitian", "Hipotesis"], answer: 1 },
  { question: "Apa itu keseimbangan Nash dalam teori permainan?", options: ["Keseimbangan pasar", "Keseimbangan strategis", "Keseimbangan ekonomi", "Keseimbangan sosial"], answer: 1 },
  { question: "Apa nama bakteri penyebab tuberkulosis?", options: ["Escherichia coli", "Mycobacterium tuberculosis", "Staphylococcus aureus", "Salmonella"], answer: 1 }
];

const questionsS2 = [
  { question: "Apa itu epistemologi?", options: ["Studi tentang pengetahuan", "Studi tentang alam", "Studi tentang manusia", "Studi tentang bahasa"], answer: 0 },
  { question: "Apa nama teori yang membahas mekanika kuantum?", options: ["Teori String", "Mekanika Kuantum", "Teori Relativitas", "Teori Evolusi"], answer: 1 },
  { question: "Apa itu fenomenologi menurut Husserl?", options: ["Studi tentang kesadaran", "Studi tentang materi", "Studi tentang logika", "Studi tentang etika"], answer: 0 },
  { question: "Apa itu efek Doppler dalam fisika?", options: ["Perubahan frekuensi gelombang", "Perubahan amplitudo", "Perubahan energi", "Perubahan massa"], answer: 0 },
  { question: "Apa itu keberlanjutan dalam pembangunan?", options: ["Pertumbuhan ekonomi", "Keseimbangan lingkungan", "Ekspansi industri", "Urbanisasi"], answer: 1 },
  { question: "Apa itu hermeneutika?", options: ["Studi tentang interpretasi", "Studi tentang matematika", "Studi tentang biologi", "Studi tentang teknologi"], answer: 0 },
  { question: "Apa itu blockchain?", options: ["Database terdistribusi", "Perangkat lunak", "Jaringan sosial", "Algoritma pencarian"], answer: 0 },
  { question: "Apa itu disonansi kognitif?", options: ["Ketidakselarasan pikiran", "Penyelarasan emosi", "Keseimbangan logika", "Penguatan memori"], answer: 0 },
  { question: "Apa itu krisis eksistensial dalam filsafat?", options: ["Krisis ekonomi", "Krisis makna hidup", "Krisis politik", "Krisis lingkungan"], answer: 1 },
  { question: "Apa itu bioinformatika?", options: ["Studi biologi komputasi", "Studi biologi molekuler", "Studi biologi lingkungan", "Studi biologi perilaku"], answer: 0 },
  { question: "Apa itu teori khaos dalam matematika?", options: ["Sistem linier", "Sistem tak terprediksi", "Sistem statis", "Sistem periodik"], answer: 1 },
  { question: "Apa itu neuroplastisitas?", options: ["Kemampuan otak beradaptasi", "Kemampuan otot", "Kemampuan tulang", "Kemampuan kulit"], answer: 0 },
  { question: "Apa itu postkolonialisme?", options: ["Studi pasca-kolonial", "Studi kolonialisme", "Studi imperialisme", "Studi modernisme"], answer: 0 },
  { question: "Apa itu entanglmen kuantum?", options: ["Keterkaitan partikel", "Pemisahan partikel", "Pemrograman partikel", "Penggabungan partikel"], answer: 0 },
  { question: "Apa itu etika terapan?", options: ["Filsafat teoretis", "Penerapan prinsip etika", "Studi logika", "Studi estetika"], answer: 1 }
];

// Variabel global untuk status kuis
let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let questions = []; // array pertanyaan yang akan digunakan sesuai tingkat

// Elemen DOM
const homePage = document.getElementById('home-page');
const quizPage = document.getElementById('quiz-page');
const resultPage = document.getElementById('result-page');
const startQuizBtn = document.getElementById('start-quiz-btn');
const nextBtn = document.getElementById('next-btn');
const retryBtn = document.getElementById('retry-btn');
const questionNumberElem = document.getElementById('question-number');
const questionTextElem = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const progressFill = document.getElementById('progress-fill');
const scoreText = document.getElementById('score-text');
const feedbackText = document.getElementById('feedback-text');

// Fungsi untuk memulai kuis
function startQuiz() {
  if (questions.length === 0) return; // pastikan pertanyaan sudah dipilih
  currentQuestionIndex = 0;
  score = 0;
  selectedOption = null;
  homePage.classList.remove('active');
  resultPage.classList.remove('active');
  quizPage.classList.add('active');
  nextBtn.disabled = true;
  showQuestion();
  updateProgress();
}

// Fungsi untuk menampilkan pertanyaan saat ini
function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionNumberElem.textContent = `Pertanyaan ${currentQuestionIndex + 1} dari ${questions.length}`;
  questionTextElem.textContent = currentQuestion.question;
  optionsContainer.innerHTML = '';

  currentQuestion.options.forEach((option, index) => {
    const optionBtn = document.createElement('button');
    optionBtn.classList.add('option-btn');
    optionBtn.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
    optionBtn.addEventListener('click', () => selectOption(index, optionBtn));
    optionsContainer.appendChild(optionBtn);
  });
  selectedOption = null;
  nextBtn.disabled = true;
}

// Fungsi untuk memilih opsi jawaban
function selectOption(index, button) {
  selectedOption = index;
  // Hapus kelas selected dari semua opsi
  const optionButtons = optionsContainer.querySelectorAll('.option-btn');
  optionButtons.forEach(btn => btn.classList.remove('selected'));
  // Tambahkan kelas selected ke opsi yang dipilih
  button.classList.add('selected');
  nextBtn.disabled = false;
}

// Fungsi untuk memperbarui progress bar
function updateProgress() {
  const progressPercent = ((currentQuestionIndex) / questions.length) * 100;
  progressFill.style.width = `${progressPercent}%`;
}

// Fungsi untuk menampilkan hasil kuis
function showResult() {
  quizPage.classList.remove('active');
  resultPage.classList.add('active');
  scoreText.textContent = `Kamu menjawab ${score} dari ${questions.length} dengan benar!`;

  let feedback = '';
  if (score >= 13) {
    feedback = 'Wow! Kamu ahli pengetahuan dunia!';
  } else if (score >= 10) {
    feedback = 'Bagus! Kamu tahu banyak hal menarik.';
  } else if (score >= 5) {
    feedback = 'Lumayan! Masih banyak yang bisa dipelajari.';
  } else {
    feedback = 'Coba lagi ya! Dunia penuh dengan hal menarik untuk dipelajari.';
  }
  feedbackText.textContent = feedback;
}

// Fungsi untuk menangani klik tombol Selanjutnya
function handleNext() {
  if (selectedOption === null) return;

  // Cek jawaban benar
  if (selectedOption === questions[currentQuestionIndex].answer) {
    score++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
    updateProgress();
    nextBtn.disabled = true;
  } else {
    updateProgress();
    showResult();
  }
}

// Fungsi untuk mengulang kuis
function retryQuiz() {
  resultPage.classList.remove('active');
  homePage.classList.add('active');
  questions = [];
  startQuizBtn.disabled = true;
}

// Fungsi untuk memilih tingkat kesulitan
function selectDifficulty(level) {
  switch(level) {
    case 'sd':
      questions = questionsSD;
      break;
    case 'smp':
      questions = questionsSMP;
      break;
    case 'sma':
      questions = questionsSMA;
      break;
    case 's1':
      questions = questionsS1;
      break;
    case 's2':
      questions = questionsS2;
      break;
    default:
      questions = [];
  }
  startQuizBtn.disabled = questions.length === 0;
}

// Event listeners
startQuizBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', handleNext);
retryBtn.addEventListener('click', retryQuiz);

// Event listener untuk radio difficulty
const difficultyRadios = document.querySelectorAll('input[name="difficulty"]');
difficultyRadios.forEach(radio => {
  radio.addEventListener('change', (e) => {
    selectDifficulty(e.target.value);
  });
});