"use client";

import { useState } from "react";
import axios from "axios";
import imageCompression from "browser-image-compression";

export default function useStylize() {
  const [originalUrl, setOriginalUrl] = useState(null);
  const [stylizedUrl, setStylizedUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [meta, setMeta] = useState(null);

  async function stylizeImage({ file, modelName }) {
    setLoading(true);
    setError(null);
    setOriginalUrl(null);
    setStylizedUrl(null);
    setMeta(null);

    try {
      // Compression options with 760px max dimension
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 768,
        useWebWorker: true,
        fileType: file.type, // Preserve original file type
      };

      // Compress the image
      const compressedFile = await imageCompression(file, options);

      // Create a new File object with the original name to preserve extension
      const finalFile = new File([compressedFile], file.name, {
        type: file.type,
        lastModified: Date.now(),
      });

      const formData = new FormData();
      formData.append("content_image", finalFile); // Use the properly named file
      formData.append("model_name", modelName);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/stylize`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const data = response.data;
      setOriginalUrl(data.original_url);
      setStylizedUrl(data.stylized_url);
      setMeta({
        model: data.model_used,
        inference_time: data.inference_time_sec,
      });
    } catch (err) {
      setError(err?.response?.data?.detail || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return {
    originalUrl,
    stylizedUrl,
    meta,
    loading,
    error,
    handleStylize: stylizeImage,
  };
}
