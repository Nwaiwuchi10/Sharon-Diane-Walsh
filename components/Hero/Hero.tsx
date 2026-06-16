"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative bg-[#0d0d0d] min-h-[88vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(ellipse at 70% 50%, #1a1205 0%, #0d0d0d 70%)",
      }}
    >
      {/* Decorative gold glow */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at right center, #c9a84c 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-5 w-full py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left: text ── */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-[3px] mb-4">
              Premium Financial Consultant
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] mb-6">
              Sharon{" "}
              <span className="text-[#c9a84c]">Diane</span>
              <br />Walsh
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10">
              I am very dedicated &amp; passionate about my work in the financial
              markets. I have acquired expert skills necessary to boost your
              portfolio profits &amp; diversify your investments adequately.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-14">
              <Link
                href="#about"
                className="inline-flex items-center gap-2 text-white font-semibold text-base hover:text-[#c9a84c] transition-colors"
              >
                <span>About Me</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="https://files.brokercheck.finra.org/individual/individual_2419266.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#c9a84c] hover:bg-[#a8853a] text-black font-bold px-8 py-3.5 rounded-full transition-colors duration-200 text-[15px]"
              >
                Detailed Report
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-10 border-t border-white/10 pt-8">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Work Experience</p>
                <span className="text-2xl font-bold text-white">26+ Years</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">State Licenses</p>
                <span className="text-2xl font-bold text-white">38 Licenses</span>
              </div>
            </div>
          </div>

          {/* ── Right: portrait ── */}
          <div className="flex-1 order-1 lg:order-2 flex justify-center w-full max-w-sm lg:max-w-none mx-auto">
            <div className="relative w-full max-w-md">
              {/* Gold border frame */}
              <div className="absolute -inset-3 rounded-3xl border border-[#c9a84c]/30" />
              <Image
                src="/sharon_portrait.jpg"
                alt="Sharon Diane Walsh – Premium Investment Adviser"
                width={480}
                height={540}
                priority
                className="rounded-2xl object-cover w-full shadow-2xl"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-white text-gray-900 rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#c9a84c] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Verified by</p>
                  <p className="font-bold text-sm text-gray-900">FINRA &amp; NYSE</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
