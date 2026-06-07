import { CountUp } from "./ui/CountUp";

const stats = [
  { label: "GitHub Stars", to: 14200, suffix: "+" },
  { label: "Developers", to: 9800, suffix: "+" },
  { label: "Projects", to: 2400, suffix: "+" },
  { label: "Memory Entries Indexed", to: 38, suffix: "M+" },
];

export function SocialProof() {
  return (
    <section className="relative mx-auto mt-24 max-w-7xl px-4">
      <div className="liquid-glass grid grid-cols-2 gap-px overflow-hidden rounded-3xl sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-[#0c0c0c]/30 px-6 py-8 text-center">
            <div className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              <CountUp to={s.to} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/45">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
