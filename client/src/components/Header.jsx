"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Models", href: "/models" },
  { name: "About", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="w-full fixed top-0 left-0 z-50 px-6 py-4 flex items-center justify-between"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(29, 58, 115, 0.4), rgba(63,105,179,0.4))",
        backdropFilter: "saturate(180%) blur(2px)",
        WebkitBackdropFilter: "saturate(180%) blur(2px)",
      }}
    >
      {/* Logo with hover yellow */}
      <Link href="/" className="flex items-center space-x-2 group">
        <span
          className="text-4xl tracking-wider text-white transition-colors duration-300 group-hover:text-[#f1e869]"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: "600",
          }}
        >
          Vincitizer
        </span>

        {/* Brushstroke icon */}
        <svg
          viewBox="0 0 60 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-5"
        >
          <path
            d="M2 10c15-8 20 8 36 0s20 8 0 8-36-8-36-8z"
            fill="#f1e869"
            opacity="0.8"
          />
        </svg>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`group relative text-[1.05rem] font-medium transition-colors duration-300 ${
              pathname === link.href
                ? "text-[#f1e869]"
                : "text-white hover:text-[#f1e869]"
            }`}
          >
            <span className="pb-1 inline-block">{link.name}</span>
            <span
              className={`
                absolute bottom-0 left-0 h-0.5 w-full bg-[#f1e869]
                transform transition-transform duration-300
                origin-left
                ${
                  pathname === link.href
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }
              `}
            />
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-white p-2"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle Menu"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Nav */}
      {open && (
        <nav className="absolute top-full right-0 mt-2 w-48 bg-white/80 dark:bg-[#102d57]/90 backdrop-blur-sm rounded shadow-lg">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-4 py-2 text-gray-800 dark:text-gray-100 ${
                    pathname === link.href ? "font-semibold text-[#2458a0]" : ""
                  } hover:bg-gray-100 dark:hover:bg-[#1d3a73]/60`}
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
