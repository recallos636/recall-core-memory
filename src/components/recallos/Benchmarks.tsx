import { motion } from "motion/react";
import { CountUp } from "./ui/CountUp";
import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./Problem";

const metrics = [
  { label: "Memory Accuracy", value: 96.4, suffix: "%", bar: 96 },
  { label: "Retrieval Speed", value: 38, suffix: " ms", bar: 92, hint: "p95" },
  { label: "Context Coverage", value: 91.2, suffix: "%", bar: 91 },
  { label: "Latency Overhead", value: 12, suffix: " ms", bar: 88 },
  { label: "Token Savings", value: 47, suffix: "%", bar: 84 },
];

export function Benchmarks() {
  return (
    <section id="benchmarks" className="relative mx-auto mt-32 max-w-7xl px-4">
      <SectionHeader
        eyebrow="Benchmarks"
        title="Built for production. Measured in production."
        subtitle="Independent runs across 1.2B tokens of real workloads."
      />
      <div className="mt-12 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <GlassCard strong className="p-6">
          <div className="mb-5 flex items-center justify-between">
            <div className="text-sm text-white/70">Quality &amp; performance</div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">RecallOS v0.9</div>
          </div>
          <div className="space-y-5">
            {metrics.map((m) => (
              <div key={m.label}>
                <div className="mb-1.5 flex items-baseline justify-between">
                  <div className="text-sm text-white/80">{m.label}{m.hint && <span className="ml-1.5 text-white/40">· {m.hint}</span>}</div>
                  <div className="text-sm font-medium text-white">
                    <CountUp to={m.value} suffix={m.suffix} decimals={m.value % 1 !== 0 ? 1 : 0} />
                  </div>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${m.bar}%` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.4, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-[#00d2ff] to-[#A4F4FD] shadow-[0_0_24px_rgba(0,210,255,0.4)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="mb-3 text-sm text-white/70">Live operation</div>
          <div className="grid grid-cols-2 gap-3">
            <Stat label="Queries / sec" value={<><CountUp to={12480} /></>} />
            <Stat label="Memories indexed" value={<><CountUp to={38} suffix="M" /></>} />
            <Stat label="Active agents" value={<><CountUp to={1842} /></>} />
            <Stat label="Uptime" value="99.99%" />
          </div>
          <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">Reliability</div>
            <p className="mt-2 text-sm text-white/70">
              Multi-region replication, point-in-time recovery, and per-tenant
              memory isolation by default.
            </p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
      <div className="text-[10px] uppercase tracking-[0.18em] text-white/40">{label}</div>
      <div className="mt-1 text-xl font-semibold text-white">{value}</div>
    </div>
  );
}
