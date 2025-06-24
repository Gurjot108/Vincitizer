# stylizer.py

import os
import torch
from torchvision import transforms
from PIL import Image
from models.transformer_net import TransformerNet
import numpy as np

# ImageNet stats
IMAGENET_MEAN = torch.tensor([0.485, 0.456, 0.406]).view(3, 1, 1)
IMAGENET_STD = torch.tensor([0.229, 0.224, 0.225]).view(3, 1, 1)

def denormalize(tensor):
    return tensor * IMAGENET_STD.to(tensor.device) + IMAGENET_MEAN.to(tensor.device)

def stylize_image(content_path: str, model_name: str, output_path: str):
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

    # Load model
    model_path = os.path.join("models", "binaries", model_name)
    state_dict = torch.load(model_path, map_location=device)
    transformer = TransformerNet().to(device)
    transformer.load_state_dict(state_dict["state_dict"], strict=True)
    transformer.eval()

    # Prepare image with proper normalization
    image = Image.open(content_path).convert("RGB")
    transform = transforms.Compose([
        transforms.Resize(768),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406],
                             std=[0.229, 0.224, 0.225])
    ])
    tensor = transform(image).unsqueeze(0).to(device)

    with torch.no_grad():
        output_tensor = transformer(tensor).cpu()
        output_tensor = denormalize(output_tensor.squeeze(0)).clamp(0, 1)

    output_image = transforms.ToPILImage()(output_tensor)
    output_image.save(output_path)

    return output_path
