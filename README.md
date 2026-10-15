# ♻️ ToxiCycle-IoT: Stasiun Pemilahan E-Waste Otomatis Berbasis Computer Vision & IoT

## 📌 Tentang Proyek
**ToxiCycle-IoT** adalah sistem stasiun tempat sampah pintar (*smart drop-box*) yang dirancang untuk mengotomatisasi pemilahan sampah elektronik (*e-waste*) secara real-time. Proyek ini dikembangkan oleh tim **PBLIF3-PC04** Jurusan Teknik Informatika Polibatam sebagai solusi mutakhir untuk meminimalkan risiko penanganan limbah berbahaya dan meningkatkan efisiensi operasional pengelolaan sampah.

---

## 🌐 Arsitektur Sistem & Ruang Lingkup Integrasi
Proyek ini mengintegrasikan tiga pilar teknologi utama:
1. **AI & Computer Vision (Raspberry Pi):** Bertindak sebagai otak komputasi untuk menangkap citra objek di input tray, menjalankan inferensi model, dan menentukan validasi kategori objek.
2. **Internet of Things / IoT (ESP32 & Sensor fisik):** Mengendalikan aktuator mekanik (motor servo/flap diverter) untuk mengarahkan objek, mengukur berat via *Load Cell + HX711*, serta memonitor kapasitas kompartemen via sensor ultrasonik.
3. **Web Dashboard Admin (React Vite + TypeScript + Tailwind CSS):** Menyediakan antarmuka grafis untuk admin guna memantau metrik telemetri secara real-time, melihat grafik tren volume sampah, dan melacak riwayat pengumpulan.

---

## 📊 Manajemen Kompartemen Fisik & Filter Keamanan
Sistem ini membagi hasil pemilahan ke dalam **5 kompartemen penyimpanan fisik** utama berdasarkan jenis material dan risiko penanganannya:
- `Kompartemen 0`: **Baterai & PowerBank** (Kompartemen khusus penanganan risiko kimia/kebakaran)
- `Kompartemen 1`: **Keyboard & Mouse** (Perangkat input eksternal)
- `Kompartemen 2`: **Kabel** (Kabel data, kabel daya, dll)
- `Kompartemen 3`: **Charger** (Adaptor daya dan kepala charger)
- `Kompartemen 4`: **PCB** (Papan sirkuit elektronik cetak)

### 🔒 Logika Penolakan Objek (Unknown Rejection System)
Untuk mencegah sabotase dari sampah non-elektronik (seperti botol plastik, kertas, sampah organik), sistem dikonfigurasi dengan batas ambang keyakinan **Confidence Threshold = 0.50 (50%)**:
* **E-Waste Valid (≥ 50%):** Objek dikenali, servo berputar ke kompartemen tujuan, dan metrik berat dikirim ke database.
* **Unknown / Reject (< 50%):** Jika botol plastik atau benda asing dimasukkan, AI mendeteksi tingkat kecocokan di bawah batas threshold. Layar monitor lokal akan memicu peringatan merah **"UNKNOWN / BUKAN E-WASTE"** dan aktuator otomatis membuka jalur *Return Tray* untuk mengembalikan benda ke pengguna.

---

## 📈 Spesifikasi & Performa Model AI
- **Arsitektur Model:** YOLOv8 Nano (Dioptimalkan untuk komputasi cepat di perangkat *edge*)
- **Ukuran Dataset:** 2.485 gambar latih (*train*) & 390 gambar validasi (*validation*) hasil merger multi-dataset.
- **Precision:** 59.7%
- **Recall:** 61.0%
- **mAP50:** 57.5%
- **Kecepatan Inferensi:** ~12.2ms (Colab GPU) / ~24.3ms (Raspberry Pi Target) -> *Memenuhi Acceptance Criteria batasan respons < 3 detik.*

---

## 🛠️ Struktur Repositori & Pengembangan Kode
Pengembangan proyek ini dibagi ke dalam klaster cabang (*branching model*) Agile:
* `main` : Berisi source code produksi akhir yang stabil dan siap didemokan.
* `code-training-data` : Berisi skrip otomasi merger dataset Roboflow dan file latih `train.py`.
* `frontend-dashboard` : Berisi basis kode website admin berbasis React Vite & TypeScript.

---
**Kelompok PBLIF3-PC04**  
- Samuel Simorangkir (AI & Backend Integration)  
- Cristh Valdo Aritonang (IoT Engineering & Frontend Dashboard)  
*Copyright © 2026 Jurusan Teknik Informatika - Politeknik Negeri Batam.*
