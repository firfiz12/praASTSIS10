# Aplikasi Tryout & Kuis ASTS: Aqidah Islamiyyah & Ahkamus Shiyam (Kelas 10)

Website Ujian Interaktif Computer-Based Test (CBT) untuk mata pelajaran Ilmu Syar'i (Akidah Islamiyah & Fiqih Puasa), lengkap dengan penginputan nama di awal, skor instan di akhir, serta modul koreksi dan pembahasan jawaban yang salah.

---

## 🌟 Fitur Utama

1. **Penginputan Identitas Peserta di Awal**:
   - Nama Lengkap Siswa
   - Kelas / Rombel
   - Pilihan Mode Ujian: 90 Menit (Standar), 60 Menit, 120 Menit, atau Mode Latihan Mandiri (Tanpa batas waktu).

2. **Antarmuka Ujian Modern & Ramah Pengguna**:
   - **Total 75 Soal**:
     - **35 Soal Pilihan Ganda** (No. 1–35, termasuk soal berbahasa Arab No. 16–20)
     - **35 Soal Benar / Salah** (No. 36–70)
     - **5 Soal Shahiih / Khatha' Berbahasa Arab** (No. 71–75)
   - Tipografi Arab berharakat jelas dengan font khusus (*Amiri* / *Traditional Arabic*).
   - Pengatur Ukuran Font Arab (A- / A / A+) untuk kenyamanan membaca harakat.
   - Papan Navigasi Kisi Nomor Soal (1–75) dengan status warna: *Hijau (Sudah Dijawab)*, *Kuning (Ragu-ragu)*, *Abu-abu (Belum Dijawab)*.
   - Fitur **Tandai Ragu-ragu (Bookmark)** pada setiap soal.
   - Countdown Timer dinamis dengan peringatan visual saat waktu tersisa 5 menit.
   - Pintasan keyboard (1–5 atau A–E untuk memilih opsi, Tombol Panah Kiri/Kanan untuk navigasi).
   - Dukungan Mode Gelap (Dark Mode) dan Mode Terang (Light Mode).

3. **Perhitungan Skor & Analisis Hasil Akhir**:
   - Skor otomatis dalam skala 0 – 100.
   - Ringkasan statistik: Jumlah Benar, Jumlah Salah, dan Jumlah Tidak Dijawab.
   - Predikat capaian (Mumtaz, Jayyid Jiddan, Jayyid, Maqbul, Perlu Perbaikan) dengan animasi perayaan *Confetti*.

4. **Koreksi & Pembahasan Jawaban (Review Module)**:
   - **Filter Khusus**:
     - *Semua Soal*
     - *Hanya Jawaban Salah* (Fokus evaluasi kesalahan peserta)
     - *Jawaban Benar*
     - *Soal Kosong*
   - Perbandingan langsung antara **Jawaban Siswa** dan **Kunci Jawaban yang Benar**.
   - **Catatan Dalil & Penjelasan Syar'i** pada setiap butir soal untuk edukasi mendalam.
   - Fitur **Cetak / Simpan PDF** (dengan format tata letak cetak yang rapi) dan **Salin Ringkasan Nilai** untuk dikirim via WhatsApp.

---

## 🚀 Cara Menjalankan

### Cara 1: Langsung Buka di Browser (Paling Praktis)
Cukup klik dua kali (double-click) file [`index.html`](file:///d:/apps/try%20out/asts%20kelas%2010/index.html) pada file explorer Anda untuk membukanya di browser apa saja (Google Chrome, Microsoft Edge, Mozilla Firefox, dll).

### Cara 2: Menjalankan Server Lokal (Node.js)
Buka terminal pada folder proyek ini, lalu jalankan:
```bash
node server.js
```
Akses di browser Anda: [http://localhost:3000](http://localhost:3000)
