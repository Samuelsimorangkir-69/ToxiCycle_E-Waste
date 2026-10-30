# ============================================================
# ToxiCycle-IoT: Multi-Dataset Merge & AI Training Script
# Kelompok: PBLIF3-PC04 (Samuel Simorangkir & Cristh Valdo A.)
# ============================================================

import os
import shutil
import yaml
from roboflow import Roboflow
from ultralytics import YOLO

# 1. Inisialisasi Struktur Folder
for split in ['train', 'valid']:
    os.makedirs(f"e_waste_dataset/{split}/images", exist_ok=True)
    os.makedirs(f"e_waste_dataset/{split}/labels", exist_ok=True)

# 2. Download Dataset dari Roboflow Universe
rf = Roboflow(api_key="API_KEY_RAHASIA_ANDA") 

dataset1 = rf.workspace("samuel-simorangkir").project("deteksi-ewaste").version(1).download("yolov8")
dataset2 = rf.workspace("yolo-q5vmp").project("mouse-and-keyboard-drjip").version(1).download("yolov8")
dataset3 = rf.workspace("learningcomputervision").project("pcb-collect").version(5).download("yolov8")

# 3. Sinkronisasi Kategori ke 5 Kompartemen Fisik ToxiCycle-IoT
FINAL_CLASSES = ['Baterai_PowerBank', 'Keyboard_Mouse', 'Kabel', 'Charger', 'PCB']

def get_class_mapping(dataset_location):
    yaml_path = os.path.join(dataset_location, 'data.yaml')
    if not os.path.exists(yaml_path): return {}
    with open(yaml_path, 'r') as f:
        data = yaml.safe_load(f)
    source_names = data.get('names', [])
    mapping = {}
    
    def find_target_idx(name_str):
        name_clean = name_str.lower().replace(" ", "_")
        if any(x in name_clean for x in ['baterai', 'battery', 'powerbank']): return 0
        elif any(x in name_clean for x in ['keyboard', 'mouse', 'mice']): return 1
        elif 'kabel' in name_clean or 'cable' in name_clean: return 2
        elif 'charger' in name_clean or 'adaptor' in name_clean: return 3
        elif 'pcb' in name_clean or 'circuit' in name_clean: return 4
        return None

    for idx, name in (enumerate(source_names) if isinstance(source_names, list) else source_names.items()):
        target_idx = find_target_idx(name)
        if target_idx is not None: mapping[str(idx)] = target_idx
    return mapping

def smart_merge(source_dir, prefix):
    mapping = get_class_mapping(source_dir)
    for split in ['train', 'valid']:
        img_src, lbl_src = os.path.join(source_dir, split, 'images'), os.path.join(source_dir, split, 'labels')
        if not os.path.exists(img_src): continue
        for file in os.listdir(img_src):
            base_name, ext = os.path.splitext(file)
            new_name = f"{prefix}_{base_name}"
            shutil.copy(os.path.join(img_src, file), os.path.join("e_waste_dataset", split, "images", f"{new_name}{ext}"))
            
            src_txt, dst_txt = os.path.join(lbl_src, f"{base_name}.txt"), os.path.join("e_waste_dataset", split, "labels", f"{new_name}.txt")
            if os.path.exists(src_txt):
                new_lines = []
                with open(src_txt, 'r') as f:
                    for line in f.readlines():
                        parts = line.strip().split()
                        if parts and parts[0] in mapping:
                            parts[0] = str(mapping[parts[0]])
                            new_lines.append(" ".join(parts) + "\n")
                with open(dst_txt, 'w') as f: f.writelines(new_lines)

# Eksekusi Penggabungan
smart_merge(dataset1.location, "ds1")
smart_merge(dataset2.location, "ds2")
smart_merge(dataset3.location, "ds3")

# 4. Membuat Konfigurasi YAML Final
yaml_final = {'path': '/content/e_waste_dataset', 'train': 'train/images', 'val': 'valid/images', 'nc': len(FINAL_CLASSES), 'names': FINAL_CLASSES}
with open("e_waste_dataset/data.yaml", "w") as f: yaml.dump(yaml_final, f, default_flow_style=False)

# 5. Mulai Proses Training YOLOv8n
model = YOLO('yolov8n.pt') 
model.train(data="e_waste_dataset/data.yaml", epochs=50, imgsz=640, batch=16, device=0)
print("✅ Training Selesai! Bobot model terbaik disimpan di runs/detect/train/weights/best.pt")