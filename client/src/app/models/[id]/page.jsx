"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import useStylize from "@/hooks/useStylize";
import UploadBox from "@/components/style/UploadBox";
import ResultView from "@/components/style/ResultView";
import Spinner from "@/components/style/Spinner";
import HeadingBlock from "@/components/HeadingBlock";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};





export default function StylizePage() {
  const { id } = useParams(); // id = model filename like "candy.pth"
  const [image, setImage] = useState(null);

  const {
    originalUrl,
    stylizedUrl,
    meta,
    loading,
    error,
    handleStylize,
  } = useStylize();

  const handleSubmit = () => {
    if (image && id) {
      handleStylize({ file: image, modelName: id });
    }
  };


  const handleDownload = async () => {
  try {
    const response = await fetch(stylizedUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `stylized_${Date.now()}.jpg`; // You can customize the filename
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Failed to download image", error);
  }
};

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-fixed bg-cover bg-center scale-110"
        style={{ backgroundImage: "url('/almond.jpg')" }}
        animate={{ scale: 1.1 }}
        initial={{ scale: 1 }}
        transition={{
          duration: 30,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-start text-center px-6 pt-[20vh] pb-24"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.3 } } }}
      >
        {/* Heading */}
        <motion.div variants={fadeInUp}>
          <HeadingBlock
            title="Stylize Your Image"
            subtitle={`Using model: ${id.replace(".pth", "")}`}
          />
        </motion.div>

        {/* Upload Box */}
        <motion.div className="mt-12" variants={fadeInUp}>
          <UploadBox onFileSelect={setImage} />
        </motion.div>

       {/* Stylize Button or Download Button */}
{image && !stylizedUrl && !loading && (
  <motion.button
    onClick={handleSubmit}
    className="mt-6 px-6 py-3 rounded-full bg-[#f1e869] text-[#102d57] font-medium transition hover:scale-105 cursor-pointer"
    variants={fadeInUp}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Stylize Now
  </motion.button>
)}

{stylizedUrl && (
  <motion.a
    onClick={handleDownload}
    download
    className="mt-6 px-6 py-3 rounded-full bg-[#6ee7b7] text-[#102d57] font-medium transition hover:scale-105 cursor-pointer inline-block"
    variants={fadeInUp}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Download Stylized Image
  </motion.a>
)}


        {/* Error Message */}
        {error && (
          <motion.p
            className="mt-6 text-red-400 text-sm italic"
            variants={fadeInUp}
          >
            {error}
          </motion.p>
        )}

        {/* Spinner or Result */}
        <motion.div className="mt-12 w-full max-w-4xl" variants={fadeInUp}>
          {loading && <Spinner />}
          {stylizedUrl && (
            <ResultView
  originalUrl={originalUrl}
  stylizedUrl={stylizedUrl}
  meta={meta}
/>

          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
