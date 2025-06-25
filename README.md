# 🎨 Vincitizer - Neural Style Transfer Web App

Vincitizer is a full-stack deep learning web application that applies real-time neural style transfer to user-uploaded images using custom-trained PyTorch models. Users can transform their photos into stunning artworks inspired by famous painting styles, all in a matter of seconds.

> 🚀 Built with FastAPI · PyTorch · React · Cloudinary · Vercel · Render

---

## 📸 Demo

[Live Demo (optional ngrok or hosted link)](https://vincitizer.vercel.app)

---

## 🧠 Features

- 🎨 Real-time neural style transfer using custom PyTorch models
- 🖼️ Upload any image and stylize it in the browser
- 🔄 Switch between multiple trained styles dynamically
- ☁️ Uploads and serves images using Cloudinary
- ⚡ FastAPI backend with REST API for stylization
- ✅ Fully responsive UI built with React + Tailwind CSS

---

## 🛠️ Tech Stack

### 🧠 Machine Learning
- Fast Neural Style Transfer (based on Johnson et al.)
- **Perceptual loss using pretrained VGG16**
- MS-COCO dataset (30,000+ images for training)
- PyTorch for training and inference

### ⚙️ Backend
- Python · FastAPI · Uvicorn
- PyTorch `.pth` model loader
- Cloudinary for image storage
- CORS support for frontend-backend communication
- Deployed on Render (CPU-based instance)

### 🖥️ Frontend
- React · Tailwind CSS · Vercel Hosting
- File upload interface + dynamic style model selection

---

## 🚀 How to Run Locally

### 1. Clone the Repo
```bash
git clone https://github.com/yourusername/vincitizer.git
cd vincitizer/server
```

### 2. Setup Backend Environment
```bash
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
```

### 3. Configure Environment Variables

Create a `.env` file in `server/`:
```
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
FRONT_END_URL=http://localhost:3000
```

### 4. Run FastAPI Server
```bash
uvicorn app.main:app --reload
```

### 5. Start Frontend
```bash
cd ../client
npm install
npm run dev
```

---

## 📁 Project Structure

```
vincitizer/
├── client/                 # React frontend
├── server/                 # FastAPI backend
│   ├── app/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── main.py
│   ├── models/binaries/    # Trained .pth models
│   ├── stylizer.py
│   └── requirements.txt
```

---

## 📊 Training Details

- Trained using PyTorch with VGG16-based perceptual loss
- Dataset: MS-COCO (subset of 30K images)
- Optimized for fast CPU inference (TransformerNet-style architecture)
- Loss: Content loss, style loss, total variation loss

---

## 📌 License

MIT License — feel free to use and modify!

---
