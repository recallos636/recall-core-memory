import { AlertCircle, GhostIcon, Layers, RefreshCcw, Repeat } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

const pains = [
  { icon: GhostIcon, title: "AI forgets.", body: "Every new conversation starts at zero. Context dies the moment a session ends." },
  { icon: AlertCircle, title: "Context disappears.", body: "Vital project knowledge vanishes between prompts, tools, and teammates." },
  { icon: Layers, title: "Projects lose continuity.", body: "Long-running work fragments across chats, docs, and tickets." },
  { icon: Repeat, title: "Teams repeat themselves.", body: "Same explanations, same prompts, same context — pasted over and over." },
  { icon: RefreshCcw, title: "Agents restart from zero.", body: "Autonomous agents lose their footing every run, burning tokens to catch up." },
];

export function Problem() {
  return (
    <section className="relative mx-auto mt-32 max-w-7xl px-4">
      <SectionHeader eyebrow="The problem" title="AI built without memory is AI built to forget." />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {pains.map(({ icon: Icon, title, body }) => (
          <GlassCard key={title} className="p-5">
            <Icon className="h-5 w-5 text-[#A4F4FD]" />
            <div className="mt-4 text-base font-medium text-white">{title}</div>
            <p className="mt-1.5 text-sm leading-relaxed text-white/55">{body}</p>
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
      <div className="text-[11px] uppercase tracking-[0.22em] text-[#A4F4FD]/80">{eyebrow}</div>
      <h2 className="mt-3 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-balance text-white/55">{subtitle}</p>}
    </div>
  );
}
