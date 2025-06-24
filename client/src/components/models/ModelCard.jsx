"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ModelCard({ title, modelName, image, onClick }) {
  return (
    <motion.div
      className="rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition cursor-pointer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
    >
      {/* Image Preview */}
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Info */}
      <div className="p-4 text-white">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm opacity-70 mt-1">{modelName}</p>
      </div>
    </motion.div>
  );
}
