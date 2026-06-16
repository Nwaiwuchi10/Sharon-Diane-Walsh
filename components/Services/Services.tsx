"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  { num: "01/", category: "Investment Adviser", title: "Personal Financial Consulting", img: "/services_dashboard.png" },
  { num: "02/", category: "Stock Broker",       title: "Digital Assets & Stock Options",            img: "/sharon_about.jpg" },
  { num: "03/", category: "Investment Adviser", title: "Family & Welfare Asset Advisory",           img: "/services_dashboard.png" },
  { num: "04/", category: "Stock Broker",       title: "Financial Trading Automation",              img: "/sharon_about.jpg" },
  { num: "05/", category: "Investment Adviser", title: "Long-Term Investments & Retirement Plans",  img: "/services_dashboard.png" },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="bg-[#0d0d0d] py-24">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-[3px] mb-4">Sharon Diane Walsh</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white">My Premium Services</h2>
        </div>

        {/* List */}
        <div className="divide-y divide-gray-800">
          {services.map((s, i) => (
            <div
              key={i}
              className="relative flex items-center justify-between py-8 lg:py-10 group"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex items-center gap-6 lg:gap-10 flex-1">
                <span className="text-[#c9a84c] font-extrabold text-xl lg:text-2xl shrink-0 font-mono">{s.num}</span>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{s.category}</p>
                  <h3 className="text-white font-bold text-xl lg:text-2xl group-hover:text-[#c9a84c] transition-colors duration-200">
                    {s.title}
                  </h3>
                </div>
              </div>

              {/* Arrow button */}
              <Link
                href="#contact"
                className="shrink-0 w-12 h-12 rounded-full border border-gray-700 group-hover:border-[#c9a84c] group-hover:bg-[#c9a84c] flex items-center justify-center transition-all duration-200 ml-6"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              {/* Hover image reveal — desktop only */}
              <div
                className={`hidden lg:block absolute right-24 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 z-10 ${hovered === i ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
              >
                <Image
                  src={s.img}
                  alt={s.title}
                  width={200}
                  height={130}
                  className="rounded-xl shadow-2xl object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
