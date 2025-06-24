export default function Footer() {
  return (
    <footer
      className="w-full fixed bottom-0 left-0 z-50 **px-4** py-4 text-white" // Changed from px-6 to px-4
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(29, 58, 115, 0.9), rgba(63,105,179,0.9))",
        backdropFilter: "saturate(180%) blur(1px)",
        WebkitBackdropFilter: "saturate(180%) blur(1px)", // Safari
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-sm">
        {/* Quote Group */}
        <div className="flex flex-col md:flex-row items-center md:gap-2">
          <p
            className="italic text-[#e0e8f0]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            “If you truly love nature, you will find beauty everywhere.”
          </p>
          <p
            className="text-[#e0e8f0]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            -Vincent Van Gogh
          </p>
        </div>

        {/* Signature */}
        <p className="text-gray-300">
          © 2025 <span className="text-[#f1e869] font-medium">Vincitizer</span>
        </p>
      </div>
    </footer>
  );
}
