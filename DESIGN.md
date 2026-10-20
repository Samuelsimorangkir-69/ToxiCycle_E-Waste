# 🎨 Design System Documentation (`DESIGN.md`)
**Proyek:** ToxicCycle — IoT Smart Drop-Box Dashboard
**Konsep UI:** Solid Minimalist Engineering (Anti-AI-Slop, Tanpa Efek Glassmorphic)
**Keluarga Font:** Plus Jakarta Sans (Keluarga tunggal, 100% No-Serif/Sans-Serif)

---

## 1. Spesifikasi Palet Warna (Sistem OKLCH Terkalibrasi)
Untuk menjaga konsistensi tampilan pada layar modern, seluruh kode warna di bawah dikonversi dari target HEX Anda ke dalam format `oklch()` dengan tingkat kontras tinggi yang ramah aksesibilitas.

### 🟢 Tema Gelap (Dark Mode - Default)
*   **Background Utama:** `oklch(14.39% 0.011 254.51)` (Setara `#111827` - Hitam pekat OLED yang lega)
*   **Latar Belakang Kartu:** `oklch(18.25% 0.013 255.1)` (Setara `#1F2937` - Kartu solid datar, bebas efek kaca)
*   **Teks Utama:** `oklch(96.72% 0.009 253.94)` (Setara `#F9FAFB` - Putih bersih nyaman di mata)

### ⚪ Tema Terang (Light Mode)
*   **Background Utama:** `oklch(98.48% 0.003 247.83)` (Setara `#F8FAFC` - Abu-abu kertas sangat muda yang bersih)
*   **Latar Belakang Kartu:** `oklch(100% 0 0)` (Setara `#FFFFFF` - Putih solid murni dengan bayangan tipis/soft shadow)
*   **Teks Utama:** `oklch(21.16% 0.011 254.51)` (Setara `#1F2937` - Abu-abu gelap pekat, mudah dipindai)

### 🎨 Komponen Warna Fungsional (Berlaku untuk Kedua Tema)
*   **Primary (Utama):** `oklch(52.68% 0.149 144.3)` (Setara `#15803D` - Hijau solid untuk Identitas & Tombol Utama)
*   **Secondary (Sekunder):** `oklch(48.91% 0.091 199.11)` (Setara `#0F766E` - Teal untuk Ikon & Elemen Pendukung)
*   **Accent (Aksen):** `oklch(73.55% 0.177 82.52)` (Setara `#F59E0B` - Kuning/Amber untuk Peringatan Volume Kritis)

---

## 2. Struktur Geometri & Kartu (Anti-Glassmorphism Guardrails)
*   **Batas Desain Tombol & Kartu:** `border-radius: 12px` (Gunakan kelas Tailwind `rounded-xl`).
*   **Aturan Kartu Solid:** DILARANG menggunakan efek `backdrop-blur`, gradien transparan, atau garis tepi bersinar (*neon borders*). Kartu harus menggunakan warna solid flat (`bg-gray-800` pada tema gelap, atau `bg-white` pada tema terang) dengan garis pembatas tipis (`border-gray-700` atau `border-gray-200`) untuk memisahkan informasi secara lugas.
*   **Tata Letak Komponen:** Mempertahankan tata letak 2 kolom: Sidebar statis di sisi kiri (lebar tetap), dan area konten fleksibel di sisi kanan dengan jarak antar-komponen (*gap*) yang konsisten sebesar `24px` (`gap-6`).

---

## 3. Hierarki Tipografi Ketat (Plus Jakarta Sans)
Seluruh teks wajib menggunakan jenis huruf tunggal Sans-Serif dan dikunci menggunakan ukuran piksel berikut melalui fungsi penskalaan responsif:

*   **H1 (Judul Utama / Nama Aplikasi):** `32px` | Bold (`font-bold text-[32px]`)
    *   *Penerapan:* Nama aplikasi "ToxicCycle" di sidebar dan judul halaman "Telemetri IoT".
*   **H2 (Judul Bagian Utama):** `24px` | Semibold (`font-semibold text-[24px]`)
    *   *Penerapan:* Judul sub-blok seperti "Kapasitas Kompartemen" dan "Aktivitas Deteksi AI".
*   **Body (Informasi Utama & Nilai Sensor):** `16px` | Regular (`font-normal text-[16px]`)
    *   *Penerapan:* Angka telemetri, deskripsi kondisi, dan barisan teks log sensor.
*   **Tombol Aksi (Tindakan Utama):** `16px` | Semibold (`font-semibold text-[16px]`)
    *   *Penerapan:* Tombol "Refresh Sensor", "Ekspor CSV", dan "Masuk sebagai Admin".
*   **Caption / Label Pendukung:** `12px - 14px` | Medium (`font-medium text-[12px]` s.d `text-[14px]`)
    *   *Penerapan:* Teks "+14% periode berjalan", waktu sinkronisasi log, dan label nama kompartemen.
