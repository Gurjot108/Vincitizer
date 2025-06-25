"use client";

import { useState } from "react";
import axios from "axios";

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
      const formData = new FormData();
      formData.append("content_image", file); // ✅ MATCH FastAPI param
      formData.append("model_name", modelName); // ✅ MATCH FastAPI param

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
        model: data.model_used, // ✅ match the backend response field
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
