"use client";

import { Loader2 } from "lucide-react";

export default function Spinner({ label = "Stylizing your image..." }) {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16 text-white/80">
      <Loader2 className="h-10 w-10 animate-spin mb-4" />
      <p className="text-lg">{label}</p>
    </div>
  );
}
