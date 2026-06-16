"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ContactLink } from "../ContactInfo/ContactInfo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "/" },
    { label: "About Me", href: "#about" },
    { label: "My Services", href: "#services" },
    { label: "Work Experience", href: "#exp" },
    { label: "Client Reviews", href: "#rev" },
  ];

  return (
    <header className="w-full z-50 relative">
      {/* Top bar */}
      <div className="bg-[#111] text-gray-400 text-sm py-2.5 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-5 flex flex-wrap items-center gap-x-6 gap-y-1">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#c9a84c]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <ContactLink type="email" />
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#c9a84c]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <ContactLink type="phone" />
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`w-full transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white"} border-b border-gray-100`}>
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-extrabold tracking-tight text-gray-900">
            Sharon <span className="text-[#c9a84c]">Diane</span> Walsh
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-[15px] font-medium text-gray-800 hover:text-[#c9a84c] transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <Link
            href="#contact"
            className="hidden lg:inline-flex items-center bg-[#c9a84c] hover:bg-[#a8853a] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-colors duration-200"
          >
            Let&apos;s Talk
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col justify-between w-7 h-5 bg-transparent border-none p-0"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`block h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-400 ${isOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"}`}>
          <ul className="flex flex-col px-5 py-4 gap-4">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-gray-800 hover:text-[#c9a84c] transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center bg-[#c9a84c] text-white font-semibold px-6 py-3 rounded-full text-sm"
              >
                Let&apos;s Talk
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
