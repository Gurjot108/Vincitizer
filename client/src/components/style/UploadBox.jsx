"use client";

import { useState, useRef } from "react";
import imageCompression from "browser-image-compression";

export default function UploadBox({ onFileSelect }) {
  const [preview, setPreview] = useState(null);
  const inputRef = useRef();

  const compressAndSet = async (file) => {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 768,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      const previewURL = URL.createObjectURL(compressedFile);
      setPreview(previewURL);
      onFileSelect(compressedFile); // Pass compressed file to parent
    } catch (err) {
      console.error("Image compression failed:", err);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      compressAndSet(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      compressAndSet(file);
    }
  };

  return (
    <div
      className="w-full max-w-md border-2 border-dashed border-white/40 rounded-xl p-6 text-white/90 text-center backdrop-blur-md bg-white/5 hover:bg-white/10 transition"
      onClick={() => inputRef.current.click()}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={inputRef}
        onChange={handleFileChange}
      />
      {preview ? (
        <img
          src={preview}
          alt="Preview"
          className="rounded-lg max-h-64 mx-auto object-contain"
        />
      ) : (
        <p className="text-lg">Click or drag an image to upload</p>
      )}
    </div>
  );
}
