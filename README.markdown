# Pedia Quiz: Fakta Menarik Dunia

Selamat datang di **Pedia Quiz**, sebuah website kuis interaktif yang menguji pengetahuanmu tentang fakta-fakta menarik dunia! Pilih tingkat kesulitan dari SD hingga S2, jawab 15 pertanyaan seru, dan lihat seberapa jauh kamu menguasai dunia pengetahuan. Dengan desain modern, animasi halus, dan umpan balik motivasi, kuis ini cocok untuk belajar sambil bersenang-senang atau dipamerkan sebagai proyek web development.

## 📖 Deskripsi
Pedia Quiz adalah aplikasi web berbasis HTML, CSS, dan JavaScript yang memungkinkan pengguna mengikuti kuis dengan pertanyaan bertema pengetahuan umum. Setiap tingkat kesulitan (SD, SMP, SMA, S1, S2) memiliki 15 pertanyaan yang mencakup sains, sejarah, geografi, matematika, dan lainnya. Website ini menawarkan antarmuka responsif dengan gradient warna pastel, progress bar dinamis, dan tombol interaktif, menjadikannya proyek yang menarik untuk dipelajari atau dipresentasikan.

## ✨ Fitur Utama
- **Pilihan Tingkat Kesulitan**: 5 level (SD, SMP, SMA, S1, S2) dengan pertanyaan sesuai usia dan pendidikan.
- **Kuis Interaktif**: 15 pertanyaan per sesi dengan opsi pilihan ganda, progress bar, dan tombol navigasi.
- **Umpan Balik Motivasional**: Skor akhir disertai pesan seperti "Wow! Kamu ahli pengetahuan dunia!" berdasarkan performa.
- **Desain Responsif**: Dioptimalkan untuk desktop dan mobile dengan animasi halus menggunakan CSS.
- **Estetika Modern**: Menggunakan font Nunito, gradient warna, dan efek bayangan untuk tampilan profesional.

## 🛠 Teknologi yang Digunakan
- **HTML5**: Struktur halaman web (home, quiz, dan result page).
- **CSS3**: Styling dengan gradient, animasi fade-in, dan desain responsif.
- **JavaScript**: Logika kuis, termasuk pengelolaan pertanyaan, skor, dan interaksi pengguna.
- **Google Fonts**: Font Nunito untuk tipografi yang bersih dan modern.

## 🚀 Cara Instalasi
Ikuti langkah-langkah berikut untuk menjalankan Pedia Quiz di lokal:

### Prasyarat
- Browser modern (Chrome, Firefox, Safari, dll.).
- Editor kode (contoh: VS Code) untuk modifikasi (opsional).
- Server lokal (opsional, seperti Live Server di VS Code) atau buka langsung di browser.

### Langkah-Langkah
1. **Clone atau Unduh Repositori**:
   - Unduh file proyek (atau clone jika menggunakan Git):
     ```bash
     git clone https://github.com/Izhar2005/web-quis-pedia
     ```
   - File yang dibutuhkan: `index.html`, `styles.css`, `script.js`.

2. **Siapkan File**:
   - Pastikan ketiga file (`index.html`, `styles.css`, `script.js`) berada dalam satu folder.

3. **Jalankan Website**:
   - Buka `index.html` langsung di browser (klik dua kali), atau:
   - Gunakan server lokal (contoh: ekstensi Live Server di VS Code) untuk pengalaman lebih baik.

4. **Mainkan Kuis**:
   - Pilih tingkat kesulitan (SD hingga S2), klik "Mulai Kuis", dan jawab pertanyaan.
   - Lihat skor dan umpan balik di halaman hasil, lalu coba lagi jika ingin.

## 🖥 Penggunaan
1. **Halaman Beranda**:
   - Pilih tingkat kesulitan dengan mengklik salah satu opsi (SD, SMP, SMA, S1, S2).
   - Tombol "Mulai Kuis" akan aktif setelah tingkat dipilih.

2. **Halaman Kuis**:
   - Jawab pertanyaan dengan memilih opsi (A, B, C, atau D).
   - Klik "Selanjutnya" untuk lanjut ke pertanyaan berikutnya.
   - Pantau kemajuan melalui progress bar di atas.

3. **Halaman Hasil**:
   - Lihat skor (contoh: "Kamu menjawab 12 dari 15 dengan benar!").
   - Baca umpan balik motivasi.
   - Klik "Coba Lagi" untuk kembali ke beranda.

## 📂 Struktur Proyek
```
pedia-quiz/
├── index.html      # Halaman utama (HTML)
├── styles.css      # Styling (CSS)
└── script.js       # Logika kuis (JavaScript)
```

## 🎨 Kustomisasi
Kamu bisa mempercantik atau menambahkan fitur ke Pedia Quiz, seperti:
- **Tema Visual**: Ubah gradient di `styles.css` ke tema retro-arcade (pixel art, efek CRT scanline) untuk vibe seperti proyek Ludo.
- **Efek Suara**: Tambahkan audio (dengan Howler.js) untuk klik tombol atau jawaban benar.
- **Timer**: Tambahkan penghitung waktu per pertanyaan di `script.js`.
- **Pertanyaan Baru**: Edit array `questionsSD`, `questionsSMP`, dll. di `script.js` untuk topik spesifik.
- **Leaderboard**: Simpan skor tertinggi di localStorage atau backend sederhana.

## 🐛 Catatan dan Debugging
- **Progress Bar**: Pastikan `progress-fill` di CSS memiliki `width: 0%` awalnya untuk animasi yang benar.
- **Pertanyaan**: Semua level memiliki 15 pertanyaan. Jika ingin lebih, tambahkan di `script.js` dengan format `{ question: "...", options: ["...", "...", "...", "..."], answer: <index> }`.
- **Error DOM**: Pastikan semua ID elemen di HTML cocok dengan yang ada di `script.js` (contoh: `home-page`, `start-quiz-btn`).

## 📈 Rencana Pengembangan
- Tambahkan mode multiplayer untuk bersaing dengan teman.
- Integrasikan backend (Node.js/MongoDB) untuk menyimpan skor atau pertanyaan dinamis.
- Tambahkan animasi transisi antar halaman dengan library seperti GSAP.
- Dukung bahasa lain untuk aksesibilitas global.

## 🙌 Kontribusi
Ingin berkontribusi? Fork repositori ini, tambahkan fitur atau perbaikan, dan buat pull request. Ide seperti tema baru, pertanyaan tambahan, atau efek visual sangat diterima!

## 📜 Lisensi
Proyek ini bebas digunakan untuk tujuan edukasi dan non-komersial. Silakan modifikasi dan bagikan dengan kredit ke pembuat asli.

## 📬 Kontak
Punya pertanyaan atau saran? Hubungi saya di izhardulgom@gmail.com atau buka issue di repositori.

Selamat bermain dan belajar dengan Pedia Quiz! 🌍✨
