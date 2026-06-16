"use client";
import Link from "next/link";
import { ContactLink } from "../ContactInfo/ContactInfo";

const navLinks = [
  { label: "About Me", href: "#about" },
  { label: "My Services", href: "#services" },
  { label: "Work Experience", href: "#exp" },
  { label: "Reviews from Clients", href: "#rev" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-gray-400">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Brand */}
          <div className="flex-1">
            <Link href="/" className="inline-block mb-5">
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Sharon <span className="text-[#c9a84c]">Diane</span> Walsh
              </span>
            </Link>
            <p className="text-gray-500 text-[15px] leading-relaxed max-w-xs">
              Premium Financial Consultant &amp; Licensed Stock Broker with 26+ years
              of experience and 38 state licenses.
            </p>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block flex-1" />

          {/* Navigation */}
          <div>
            <h5 className="text-white font-bold text-base mb-6 uppercase tracking-wider">Navigation</h5>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-500 text-[15px] hover:text-[#c9a84c] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-white font-bold text-base mb-6 uppercase tracking-wider">Contact</h5>
            <div className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-full bg-[#c9a84c]/10 flex items-center justify-center shrink-0 group-hover:bg-[#c9a84c]/20 transition-colors">
                <svg className="w-4 h-4 text-[#c9a84c]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <ContactLink type="email" className="text-gray-500 text-[15px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800/60">
        <div className="max-w-6xl mx-auto px-5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-sm">
            Copyright &copy; 2026 Sharon Diane Walsh. All rights reserved.
          </p>
          <Link
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="w-9 h-9 rounded-full border border-gray-700 hover:border-[#c9a84c] hover:bg-[#c9a84c] flex items-center justify-center text-gray-500 hover:text-black transition-all duration-200"
            aria-label="Back to top"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
