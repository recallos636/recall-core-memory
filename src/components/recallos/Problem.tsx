import { X } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

const pains = [
  "AI forgets everything after each conversation",
  "Context disappears between sessions",
  "Projects lose continuity and momentum",
  "Teams repeat themselves endlessly",
  "Agents restart from zero every time"
];

export function Problem() {
  return (
    <section className="relative mx-auto mt-32 max-w-7xl px-4">
      <SectionHeader eyebrow="The problem" title="AI has an amnesia problem" />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {pains.map((body, i) => (
          <GlassCard key={i} className="group relative overflow-hidden p-6 border-red-500/20 hover:border-red-500/40 transition-colors fade-up" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="absolute inset-0 bg-red-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-500/10 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
              <X className="h-4 w-4" />
            </div>
            <p className="text-sm font-medium leading-relaxed text-white/90">{body}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow, title, subtitle, center = true,
}: { eyebrow: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className="text-[11px] uppercase tracking-[0.22em] text-[#7CFF8A]">{eyebrow}</div>
      <h2 className="mt-3 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-balance text-white/60">{subtitle}</p>}
    </div>
  );
}
