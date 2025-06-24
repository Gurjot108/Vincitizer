import os

MODEL_DIR = "models/binaries"

def list_models():
    return [f for f in os.listdir(MODEL_DIR) if f.endswith(".pth")]

def validate_model_name(model_name: str):
    return os.path.isfile(os.path.join(MODEL_DIR, model_name))
