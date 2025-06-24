import os
import uuid

def save_upload_locally(upload_file, folder="data/content"):
    os.makedirs(folder, exist_ok=True)
    unique_id = uuid.uuid4().hex
    filename = f"{unique_id}_{upload_file.filename}"
    path = os.path.join(folder, filename)
    with open(path, "wb") as f:
        f.write(upload_file.file.read())
    return path, filename

def remove_files(*paths):
    for p in paths:
        try:
            os.remove(p)
        except Exception as e:
            print(f"[CLEANUP] Failed to remove {p}: {e}")
