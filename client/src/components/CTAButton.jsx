"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Wrap Link with motion
const MotionLink = motion.create(Link); // ✅ fixed


export default function CTAButton({ href = "/models", label = "Explore Styles" }) {
  return (
    <MotionLink
      href={href}
      className="mt-8 inline-block px-6 py-3 rounded-full bg-[#f1e869] text-[#102d57] font-medium transition"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </MotionLink>
  );
}
