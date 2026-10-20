# 📝 Product Requirement Document (PRD)
**Proyek:** ToxicCycle — IoT Smart Drop-Box Dashboard (Single-Box System)
**Runtime:** Node.js (Next.js v16 - App Router)
**Gaya UI/UX:** Ultra-Minimalist IoT Design (Bebas AI Slop, Legah, & Nyaman di Mata)

---

## 1. Alur Pengguna (User Flow) Utama
*   **Akses Pertama:** Ketika pengguna membuka website (`/`), middleware/proksi sistem wajib langsung mendeteksi sesi. Jika belum login, halaman **wajib dialihkan secara instan ke halaman Login Admin (`/login`)**.
*   **Setelah Sukses Login:** Admin diarahkan ke halaman Dasbor Utama (`/admin`) yang menampilkan data telemetri esensial.

---

## 2. Aturan Keamanan & Batasan Visual (Strict Guardrails)
*   **Security Guardrail:** Semua mutasi data perangkat keras dan fungsi IoT (seperti tombol refresh) wajib melalui *Next.js Server Actions* terotentikasi di sisi server. Token dan Kunci API (Supabase/MQTT) diisolasi dalam `process.env`.
*   **Anti-Sakit Mata Visual Guardrail:** 
    *   Dilarang keras memunculkan teks kecil redundan seperti status baterai seluler, ping jaringan, status latensi milidetik, atau teks sambutan generik AI.
    *   Desain wajib lega, bersih, dan hanya menampilkan data metrik makro yang berdampak langsung pada operasional.

---

## 3. Struktur Berkas & Folder Proyek (Clean Node.js Setup)
```text
toxiccycle-project/
├── app/
│   ├── layout.jsx            # Root Layout (Kunci variabel Global OKLCH & Font)
│   ├── page.jsx              # Rute Utama (Otomatis dialihkan ke /login jika belum auth)
│   ├── login/
│   │   └── page.jsx          # US-01: Form Login Admin Minimalis (Email & Password)
│   ├── admin/
│   │   ├── page.jsx          # US-02: Dasbor Utama (Kapasitas & Aktivitas Deteksi AI)
│   │   ├── kompartemen/
│   │   │   └── page.jsx      # US-03: Detail Interaktif Kompartemen Sensor
│   │   ├── mitra/
│   │   │   └── page.jsx      # US-04: Daftar Vendor & Tombol Link WhatsApp API
│   │   └── actions.js        # Server Actions Aman untuk Autentikasi & Trigger Hardware
├── components/               # Komponen Modular Global
│   ├── Sidebar.jsx           # Navigasi Samping Bersih (Dashboard, Detail, Mitra, Keluar)
│   └── MetricCard.jsx        # Kartu Indikator Metrik (Total E-Waste, Berat, Valuasi)
├── lib/
│   └── supabase.js           # Koneksi Server-side Supabase Auth & Database
├── public/                   # manifest.json & Ikon untuk Dukungan PWA (Bisa diinstall di HP)
├── middleware.js             # Proteksi Rute Otomatis (Mengunci /admin sebelum login)
└── DESIGN.md                 # Dokumentasi Sistem Desain Impeccable (Otomatis)
```

---

## 4. Rincian Fitur Per User Story (US)

### US-01: Konsol Masuk Web Admin (Rute: `/login`)
*   **Kebutuhan:** Halaman bersih tanpa status bar atas. Memuat Form Input "Email Admin" dan "Kata Sandi". 
*   **Sistem Sesi:** Menggunakan `@supabase/ssr` berbasis cookie aman. Jika login gagal, tampilkan notifikasi kesalahan yang rapi di bawah form.

### US-02: Dasbor Utama Telemetri (Rute: `/admin`)
*   **Metrik Esensial:** 3 Kartu Metrik Utama: Total E-Waste Masuk, Berat Akumulasi (kg), dan Estimasi Valuasi Daur Ulang.
*   **Tombol Kontrol:** Hanya menyediakan 2 tombol bersih: "Refresh Sensor" dan "Ekspor CSV".
*   **Tampilan Utama:** Grid berdampingan secara lega antara visual persentase `Kapasitas Kompartemen` dan log `Aktivitas Deteksi AI & Sensor`.

### US-03: Detail Kompartemen Sensor (Rute: `/admin/kompartemen`)
*   **Kebutuhan:** Tampilan interaktif tingkat keterisian lingkaran untuk Chamber aktif. Menampilkan pembacaan sensor ultrasonik (jarak sisa cm) dan load cell (berat ruang).
*   **Fitur Dinamis:** Judul kompartemen utama dapat diklik untuk berganti melihat data kompartemen lainnya secara dinamis dalam satu halaman yang lapang.

### US-04: Manajemen Mitra Daur Ulang (Rute: `/admin/mitra`)
*   **Kebutuhan:** Tampilan grid minimalis berisi kartu informasi 6 vendor mitra aktif.
*   **Integrasi Tautan:** Tombol "Hubungi WhatsApp" pada tiap kartu otomatis membuka tautan `https://wa.me` dengan isi pesan log sampah yang sudah ter-encode aman.

---

## 5. Aliansi Standar Desain Terminal
*   **UI/UX Pro Max:** Menentukan tema warna dasar *Emerald Green* modern untuk status aktif proyek IoT.
*   **OpenDesign:** Memaksa seluruh susunan kode CSS menggunakan fungsi ruang warna **`OKLCH`** dan fungsi ukuran **`clamp()`** agar layout elastis dan tajam.
*   **Impeccable:** Menyaring segala bentuk *AI Slop*, menjaga kontras aksesibilitas teks, dan memicu `/impeccable live` untuk inspeksi langsung di browser.
*   **Huashu Design:** Menyusun kerangka tata letak *high-fidelity* yang responsif.
 

 ### US-06: Pusat Kontrol & Diagnostik Perangkat Keras (Rute: `/admin/hardware`)
*   **Kebutuhan Data RPP:** Menampilkan status konektivitas dua node inti: Raspberry Pi 4 (Pemroses AI/Kamera) dan Mikrokontroler ESP32 (Pusat Data Sensor IoT).
*   **Aksi Driver (Server Actions):** Menyediakan 3 tombol aksi bersih terproteksi login: "Ping Perangkat", "Kalibrasi Timbangan (Load Cell)", dan "Uji Gerak Flap (Servo)".
*   **Aturan Bebas Polusi Visual:** Dilarang menampilkan grafik temperatur yang rumit atau log kode *hex* data mentah. Gunakan kartu metrik besar yang ringkas untuk status kesehatan sensor (Ultrasonik & Load Cell: ONLINE/SEHAT).
