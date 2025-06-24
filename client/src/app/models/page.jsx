"use client";

import { motion } from "framer-motion";
import HeadingBlock from "@/components/HeadingBlock";
import ModelCard from "@/components/models/ModelCard";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.3 },
  },
};

export default function ModelsPage() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-fixed bg-cover bg-center scale-110"
        style={{ backgroundImage: "url('/almond.jpg')" }}
        animate={{ scale: 1.1 }}
        initial={{ scale: 1 }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Scrollable Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <motion.div
          className="flex-grow flex flex-col items-center text-center px-6 pt-[20vh] pb-24"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Heading */}
          <HeadingBlock
            title="Explore Styles"
            subtitle="Choose a Style transfer model to transform your images"
          />

          {/* Model Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl mx-auto px-4">
            <ModelCard
              title="Candy"
              modelName="Candy stylej"
              image="/thumbs/candy.jpg"
              onClick={() => console.log("Use candy model")}
            />
            <ModelCard
              title="Starry Night"
              modelName="Vincet Van Gogh"
              image="/thumbs/starry.jpg"
              onClick={() => console.log("Use starrynight model")}
            />
            <ModelCard
              title="Mosaic"
              modelName="Mosaic Style"
              image="/thumbs/mosaic.jpg"
              onClick={() => console.log("Use mosaic model")}
            />
            <ModelCard
              title="Edtaonisl"
              modelName="Francis Picabia"
              image="/thumbs/Edta.jpg"
              onClick={() => console.log("Use edtaonisl model")}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
