"use client";
import { useState } from "react";

const testimonials = [
  {
    name: "Galif Fauwind",
    role: "Software Engineer",
    text: "Trading without guidance in the financial markets is risky & quite unprofitable, I found out the hard way. Luckily enough, I stumbled across Sharon's website and contacted her; within two months, my trading portfolio & investment options started to surprisingly improve after a long streak of losses.",
    initials: "GF",
  },
  {
    name: "Maggie Philips",
    role: "School Teacher",
    text: "I got in contact with Sharon Diane through an old family friend, it was a period of financial turmoil for my entire family and I met the perfect person for the Job! She patiently showed me what I was doing wrong and suggested really helpful ways to fix my harmful trading habits.",
    initials: "MP",
  },
  {
    name: "Sally J",
    role: "Event Planner",
    text: "I totally enjoy working with Sharon Diane Walsh. She is so down to earth and really knowledgeable about the financial markets. She has been guiding me privately on how to grow my portfolio for over two years now and the results have been simply amazing so far.",
    initials: "SJ",
  },
  {
    name: "Ali Ferguson",
    role: "Estate Developer",
    text: "I found my way to Sharon Diane during the COVID pandemic. I had lost so much trading at home because I had no solid background on the concept of trading & investments. Sharon literally showed me the ropes step by step, and now I can comfortably trade on my own.",
    initials: "AF",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  return (
    <section id="rev" className="bg-white py-24 relative overflow-hidden">
      {/* Subtle bg decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#c9a84c]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-5 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-[3px] mb-4">Sharon Diane Walsh</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">Some Clients Reviews</h2>
        </div>

        {/* Slider card */}
        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-10 lg:p-14 text-center shadow-sm">
          {/* Quote mark */}
          <div className="text-[80px] text-gray-200 font-serif leading-none mb-4 select-none">&ldquo;</div>

          <p className="text-gray-600 text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
            {t.text}
          </p>

          {/* Author */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#c9a84c] flex items-center justify-center text-white font-bold text-sm shrink-0">
              {t.initials}
            </div>
            <div className="text-left">
              <h4 className="font-bold text-gray-900">{t.name}</h4>
              <p className="text-gray-400 text-sm">{t.role}</p>
            </div>
          </div>

          {/* Stars */}
          <div className="flex items-center justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-[#c9a84c]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Nav controls */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={() => setIdx(i => (i === 0 ? testimonials.length - 1 : i - 1))}
              className="w-11 h-11 rounded-full border border-gray-200 hover:border-[#c9a84c] hover:bg-[#c9a84c] hover:text-white flex items-center justify-center text-gray-500 transition-all duration-200"
              aria-label="Previous"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === idx ? "bg-[#c9a84c] w-6" : "bg-gray-300 w-2"}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setIdx(i => (i === testimonials.length - 1 ? 0 : i + 1))}
              className="w-11 h-11 rounded-full border border-gray-200 hover:border-[#c9a84c] hover:bg-[#c9a84c] hover:text-white flex items-center justify-center text-gray-500 transition-all duration-200"
              aria-label="Next"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Rating summary */}
        <div className="flex items-center justify-center gap-16 mt-12 pt-10 border-t border-gray-100">
          {[["4.9", "Average Rating"], ["500+", "Client Reviews"]].map(([n, l]) => (
            <div key={l} className="text-center">
              <p className="text-5xl font-extrabold text-gray-900">{n}</p>
              <p className="text-gray-400 text-sm mt-1">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
