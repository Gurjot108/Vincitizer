from fastapi import FastAPI
import os
import sys
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

# Add root directory to sys.path for stylizer and config imports
sys.path.append(os.path.dirname(os.path.dirname(__file__)))

# Import middleware and routers
from .middleware import LimitUploadSizeMiddleware
from .routes import stylize, models
import config  # ensures cloudinary config is loaded

# Create required folders on startup (if needed)
os.makedirs("data/content", exist_ok=True)
os.makedirs("data/stylized", exist_ok=True)

# Initialize FastAPI app
app = FastAPI(
    title="Vincitizer API",
    description="Fast Neural Style Transfer Backend using PyTorch and Cloudinary",
    version="1.0.0"
)

# Load from .env
load_dotenv()

# Allow CORS from your frontend (localhost:3000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://vincitizer.vercel.app"],  # or ["*"] for all (use only during development)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Limit file upload size to 5MB
app.add_middleware(LimitUploadSizeMiddleware, max_upload_size=5 * 1024 * 1024)

# Include modular routes
app.include_router(stylize.router)
app.include_router(models.router)
