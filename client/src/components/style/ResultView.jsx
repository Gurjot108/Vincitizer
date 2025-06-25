"use client";

import Image from "next/image";

export default function ResultView({ originalUrl, stylizedUrl }) {
  return (
    <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 text-white">
      {/* Original Image */}
      <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/20 text-center">
        <h3 className="mb-2 text-lg font-semibold">Original</h3>
        <div className="relative w-full h-80 md:h-[28rem] rounded overflow-hidden">
          <Image
            src={originalUrl}
            alt="Original Image"
            fill
            
            unoptimized
            className="object-contain"
          />
        </div>
      </div>

      {/* Stylized Image */}
      <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/20 text-center">
        <h3 className="mb-2 text-lg font-semibold">Stylized</h3>
        <div className="relative w-full h-80 md:h-[28rem] rounded overflow-hidden">
          <Image
            src={stylizedUrl}
            alt="Stylized Image"
            fill
            unoptimized
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
