"use client";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Image */}
          <div className="flex-1 w-full max-w-lg mx-auto lg:mx-0">
            <div className="relative">
              {/* Gold accent box behind image */}
              <div className="absolute -bottom-6 -right-6 w-full h-full rounded-2xl bg-[#c9a84c]/10 border border-[#c9a84c]/30" />
              <Image
                src="/sharon_about.jpg"
                alt="Sharon Diane Walsh advisory office"
                width={540}
                height={520}
                className="rounded-2xl object-cover w-full relative shadow-xl"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-[3px] mb-4">
              Sharon Diane Walsh
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Professional Stock Broker &amp;{" "}
              <span className="text-[#c9a84c]">Investment Adviser</span>
            </h2>
            <p className="text-gray-500 text-[17px] leading-relaxed mb-10">
              Throughout the course of my career, I have been registered with three
              prestigious investment firms, passed four brokerage examinations and
              gotten accreditation with licenses in about thirty-eight states in the
              US. Click on the button below to send a message if you&apos;re interested in
              effectively improving the profit accumulation percentage of your
              Investment portfolio.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="#contact"
                className="bg-[#c9a84c] hover:bg-[#a8853a] text-black font-bold px-8 py-3.5 rounded-full transition-colors duration-200 text-[15px]"
              >
                Contact Me
              </Link>
              <Link
                href="#exp"
                className="inline-flex items-center gap-2 text-gray-800 font-semibold text-[15px] hover:text-[#c9a84c] transition-colors"
              >
                Work Experience
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
