"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function HeadingBlock({
  title = "Vincitizer",
  subtitle = "Transform your photos into classic masterpieces",
  center = true,
}) {
  return (
    <div className={`px-6 ${center ? "text-center" : ""}`}>
      <motion.h1
        className="text-6xl md:text-7xl font-serif text-white cursor-pointer"
        style={{ fontFamily: "Playfair Display, serif" }}
        variants={fadeInUp}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {title}
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-xl text-white/90 max-w-xl mx-auto"
        variants={fadeInUp}
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
