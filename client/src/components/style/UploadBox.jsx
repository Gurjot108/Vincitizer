"use client";

import { useState, useRef } from "react";

export default function UploadBox({ onFileSelect }) {
  const [preview, setPreview] = useState(null);
  const inputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(file));
      onFileSelect(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(file));
      onFileSelect(file);
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
