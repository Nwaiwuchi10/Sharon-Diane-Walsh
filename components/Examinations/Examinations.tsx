const exams = [
  {
    code: "Series 66",
    name: "Uniform Combined State Law Examination",
    category: "State Securities Law Exam",
    date: "Aug 30, 2005",
    dark: false,
  },
  {
    code: "Series 63",
    name: "Uniform Securities Agent State Law Examination",
    category: "State Securities Law Exam",
    date: "Oct 22, 1999",
    dark: true,
  },
  {
    code: "SIE",
    name: "Securities Industry Essentials Examination",
    category: "General Industry/Products Exam",
    date: "Oct 1, 2018",
    dark: false,
  },
  {
    code: "Series 7",
    name: "General Securities Representative Examination",
    category: "General Industry/Products Exam",
    date: "Sep 15, 1999",
    dark: true,
  },
];

export default function Examinations() {
  return (
    <section id="exam" className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-[3px] mb-4">Sharon Diane Walsh</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">My Examinations</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {exams.map((exam) => (
            <div
              key={exam.code}
              className={`rounded-2xl p-10 flex flex-col justify-between min-h-[220px] border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                exam.dark
                  ? "bg-[#0d0d0d] border-gray-800 hover:border-[#c9a84c]/40"
                  : "bg-white border-gray-100 hover:border-[#c9a84c]/30 hover:shadow-[#c9a84c]/5"
              }`}
            >
              <div>
                <span
                  className={`text-xs font-bold uppercase tracking-[2px] mb-4 block ${
                    exam.dark ? "text-[#c9a84c]" : "text-gray-400"
                  }`}
                >
                  {exam.code}
                </span>
                <h4
                  className={`text-xl font-extrabold leading-snug mb-3 ${
                    exam.dark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {exam.name}
                </h4>
                <p className={`text-sm ${exam.dark ? "text-gray-400" : "text-gray-500"}`}>
                  {exam.category}
                </p>
              </div>

              <div
                className={`flex items-center gap-2 mt-8 pt-6 border-t text-sm font-medium ${
                  exam.dark ? "border-gray-800 text-gray-400" : "border-gray-100 text-gray-500"
                }`}
              >
                <svg className="w-4 h-4 text-[#c9a84c]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {exam.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
