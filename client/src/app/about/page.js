"use client";

import { motion } from "framer-motion";
import HeadingBlock from "@/components/HeadingBlock";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image (animated) */}
      <motion.div
        className="absolute inset-0 bg-fixed bg-cover bg-center scale-110"
        style={{ backgroundImage: "url('/wheatfield.jpg')" }}
        animate={{ scale: 1.2 }}
        initial={{ scale: 1 }}
        transition={{
          duration: 25,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 pt-[15vh] text-white"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.3 } } }}
      >
        {/* Heading */}
        <motion.div variants={fadeInUp}>
          <HeadingBlock
            title="About Vincitizer"
            subtitle="Turn Your Images into Art Instantly"
          />
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={fadeInUp}
          className="mt-10 space-y-8 text-lg leading-relaxed"
        >
          {/* App Summary */}
          <p>
            <strong>Vincitizer</strong> is an AI-powered image stylization app
            that transforms your photos into artistic masterpieces using the
            styles of famous painters — instantly and effortlessly.
          </p>

          {/* How It Works */}
          <p>
            Vincitizer uses <strong>Fast Neural Style Transfer</strong>, a deep
            learning technique where a neural network is trained to apply a
            specific painting style to any image in real-time. Unlike
            traditional style transfer (which is slow and image-specific), our
            models are pre-trained and optimized for speed.
          </p>

          <p>
            These models learn the patterns, brushstrokes, and colors from real
            paintings, then apply them to your photo while preserving its core
            content.
          </p>

          {/* Tech Stack */}
          <div>
            <p className="font-semibold mb-2"> Technologies Used:</p>
            <ul className="list-disc list-inside ml-5">
              <li>
                <strong>PyTorch</strong> – Fast Neural Style Transfer model
                training & inference
              </li>
              <li>
                <strong>FastAPI</strong> – High-performance backend for serving
                stylized images
              </li>
              <li>
                <strong>Cloudinary</strong> – Image upload, CDN storage, and
                fast delivery
              </li>
              <li>
                <strong>Next.js & Tailwind CSS</strong> – Modern frontend with
                responsive UI
              </li>
            </ul>
          </div>

          {/* Models Used */}
          <div>
            <p className="font-semibold mb-2"> Style Models Included:</p>
            <ul className="list-disc list-inside ml-5">
              <li>
                <strong>Van Gogh</strong> – <em>Wheatfield with Cypresses</em>,{" "}
                <em>Self-Portrait</em>, <em>Café Terrace</em>
              </li>
              <li>
                <strong>Claude Monet</strong> – <em>Water Lilies</em>,{" "}
                <em>Impression, Sunrise</em>
              </li>
              <li>
                <strong>Gustav Klimt</strong> – <em>The Kiss</em>
              </li>
              <li>
                <strong>Frida Kahlo</strong> –{" "}
                <em>Self-Portrait with Thorn Necklace</em>
              </li>
              <li>
                <strong>Johannes Vermeer</strong> –{" "}
                <em>Girl with a Pearl Earring</em>
              </li>
              <li>
                <strong>Salvador Dalí</strong> –{" "}
                <em>The Persistence of Memory</em>
              </li>
            </ul>
          </div>

          {/* Credits */}
          <p className="text-sm text-gray-300 pt-4">
            Built and maintained by{" "}
            <Link
              href="https://github.com/gurjot-singh"
              target="_blank"
              className="underline text-yellow-400 hover:text-yellow-300"
            >
              Gurjot Singh
            </Link>
            . Artworks are used from public domain sources for educational and
            research purposes.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
