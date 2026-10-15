# 🚀 ToxiCycle-IoT - AI Model Training

Repositori ini berisi skrip otomatisasi penggabungan multi-dataset dari Roboflow Universe dan pelatihan (*training*) model Computer Vision untuk sistem pemilahan tempat sampah pintar **ToxiCycle-IoT** (PBLIF3-PC04).

## 📊 Spesifikasi Model & Kompartemen
Model menggunakan arsitektur **YOLOv8 Nano** yang dioptimalkan untuk perangkat *edge* (Raspberry Pi) agar menghasilkan waktu inferensi cepat (< 3 detik). Seluruh data dari berbagai sumber disinkronkan ke dalam **5 kompartemen fisik**:
- `ID 0`: Baterai & PowerBank
- `ID 1`: Keyboard & Mouse
- `ID 2`: Kabel
- `ID 3`: Charger
- `ID 4`: PCB

## 📈 Metrik Hasil Validasi Akhir (50 Epochs)
- **Precision:** 59.7%
- **Recall:** 61.0%
- **mAP50:** 57.5%
- **Inference Speed:** ~12.2ms (Colab GPU) / ~24.3ms (Unknown Test)

## 🛠️ Cara Menjalankan Training
1. Pasang pustaka pendukung: `pip install ultralytics roboflow pyyaml`
2. Masukkan API Key Roboflow Anda pada berkas `train.py`.
3. Jalankan perintah: `python train.py`
