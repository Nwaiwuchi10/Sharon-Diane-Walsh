"use client";
import Image from "next/image";
import Link from "next/link";

interface CircleProps { pct: number; title: string; sub: string; }
function CircleProgress({ pct, title, sub }: CircleProps) {
  const r = 36; const sw = 6;
  const nr = r - sw; const c = nr * 2 * Math.PI;
  const offset = c - (pct / 100) * c;
  return (
    <div className="flex items-center gap-6 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:-translate-y-1 transition-transform duration-200">
      <div className="relative shrink-0" style={{ width: r * 2, height: r * 2 }}>
        <svg width={r * 2} height={r * 2} className="-rotate-90">
          <circle stroke="#f0f0f0" fill="transparent" strokeWidth={sw} r={nr} cx={r} cy={r} />
          <circle stroke="#c9a84c" fill="transparent" strokeWidth={sw}
            strokeDasharray={`${c} ${c}`}
            style={{ strokeDashoffset: offset }} strokeLinecap="round"
            r={nr} cx={r} cy={r} />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-gray-900">{pct}%</span>
        </div>
      </div>
      <div>
        <h5 className="font-bold text-gray-900 text-base">{title}</h5>
        <p className="text-gray-400 text-xs uppercase tracking-wider mt-0.5">{sub}</p>
      </div>
    </div>
  );
}

export default function PortfolioStats() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
          <div className="max-w-xl">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-[3px] mb-4">Sharon Diane Walsh</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Premium Financial Consultant &amp;<br className="hidden lg:block" /> Licensed Stock Broker
            </h2>
          </div>
          <div className="flex gap-12">
            {[["1,500", "Portfolios Handled"], ["100%", "Client Satisfaction"]].map(([n, l]) => (
              <div key={l}>
                <p className="text-5xl font-extrabold text-gray-900">{n}</p>
                <p className="text-gray-400 text-sm mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
          {/* Circles */}
          <div className="flex-1 flex flex-col gap-5 w-full">
            <CircleProgress pct={100} title="FINRA" sub="SRO Registration" />
            <CircleProgress pct={100} title="New York Stock Exchange" sub="SRO Registration" />
            <CircleProgress pct={100} title="Nasdaq Stock Market" sub="SRO Registration" />
          </div>
          {/* Image */}
          <div className="flex-1 w-full max-w-lg mx-auto">
            <Image src="/portfolio_meeting.png" alt="Client advisory meeting"
              width={540} height={460} className="rounded-2xl object-cover w-full shadow-xl" />
          </div>
        </div>

        <div className="text-center">
          <Link href="#contact"
            className="inline-flex items-center bg-[#c9a84c] hover:bg-[#a8853a] text-black font-bold px-10 py-4 rounded-full transition-colors duration-200 text-[15px]">
            Send a Message
          </Link>
        </div>
      </div>
    </section>
  );
}
