"use client";

import { motion } from "framer-motion";
import CTAButton from "@/components/CTAButton";
import HeadingBlock from "@/components/HeadingBlock";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with zoom animation */}
      <motion.div
        className="absolute inset-0 bg-fixed bg-cover bg-center scale-110"
        style={{ backgroundImage: "url('/wheatfield.jpg')" }}
        animate={{ scale: 1.2 }}
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

      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-start h-full text-center px-6 pt-[27vh]"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Heading (modularized) */}
        <motion.div variants={fadeInUp}>
          <HeadingBlock />
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={fadeInUp}>
          <CTAButton />
        </motion.div>
      </motion.div>
    </div>
  );
}
