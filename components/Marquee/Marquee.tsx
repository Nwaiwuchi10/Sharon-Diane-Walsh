import styles from "./Marquee.module.css";

const items = ["Financial Consultant", "Investment Adviser", "Digital Assets Trader", "Stock Broker"];
const repeated = [...items, ...items, ...items, ...items];

export default function Marquee() {
  return (
    <div className="bg-[#111] border-y border-gray-800 overflow-hidden py-5 flex">
      <div className={styles.track}>
        {repeated.map((item, i) => (
          <div key={i} className="inline-flex items-center gap-5 mr-10 whitespace-nowrap">
            <span className="text-[#c9a84c] text-xl">✦</span>
            <span className="text-white font-semibold text-lg uppercase tracking-widest">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
