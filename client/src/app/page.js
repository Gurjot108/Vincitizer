export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Hero background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('/wheatfield.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/2" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1
          className="text-6xl font-serif text-white"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Vincitizer
        </h1>
        <p className="mt-4 text-lg text-white/90 max-w-xl">
          Transform your photos into Van Gogh masterpieces.
        </p>
        <a
          href="/models"
          className="mt-8 inline-block px-6 py-3 rounded-full bg-[#f1e869] text-[#102d57] font-medium hover:scale-105 transition"
        >
          Explore Styles
        </a>
      </div>
    </div>
  );
}
