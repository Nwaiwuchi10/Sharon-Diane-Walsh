const experiences = [
  {
    id: "rbc",
    firm: "RBC CAPITAL MARKETS, LLC",
    crd: "CRD#: 31194",
    period: "2008 – Present",
    duration: "17 years",
    role: "Stock Broker | Investment Adviser",
  },
  {
    id: "wachovia",
    firm: "WACHOVIA SECURITIES, LLC",
    crd: "CRD#: 19616",
    period: "2008 – 2008",
    duration: "Less than 1 year",
    role: "Stock Broker | Investment Adviser",
  },
  {
    id: "edwards",
    firm: "A. G. EDWARDS & SONS, INC.",
    crd: "CRD# 4",
    period: "1999 – 2008",
    duration: "8 years",
    role: "Stock Broker | Investment Adviser",
  },
];

export default function Experience() {
  return (
    <section id="exp" className="bg-[#0d0d0d] py-24">
      <div className="max-w-4xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-[3px] mb-4">Sharon Diane Walsh</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white">Work Experience</h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-[#161616] border border-gray-800 hover:border-[#c9a84c]/50 rounded-2xl p-8 lg:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/40"
            >
              <div className="flex-1">
                {/* Gold left border accent */}
                <div className="flex items-start gap-5">
                  <div className="w-1 h-16 rounded-full bg-[#c9a84c] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-lg lg:text-xl leading-snug mb-1">{exp.firm}</h4>
                    <p className="text-gray-500 text-sm mb-3">{exp.crd}</p>
                    <span className="inline-block bg-[#c9a84c]/10 text-[#c9a84c] text-xs font-semibold px-3 py-1 rounded-full">
                      {exp.role}
                    </span>
                  </div>
                </div>
              </div>

              {/* Period */}
              <div className="shrink-0 text-right sm:text-right">
                <p className="text-[#c9a84c] font-bold text-xl font-mono">{exp.period}</p>
                <p className="text-gray-500 text-sm mt-1">({exp.duration})</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
