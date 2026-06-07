import { Check } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./Problem";

const items = [
  "Store every conversation permanently",
  "Maintain full project context",
  "Build cumulative knowledge bases",
  "Share memory across team members",
  "Give agents persistent intelligence"
];

export function Solution() {
  return (
    <section className="relative mx-auto mt-32 max-w-7xl px-4">
      <SectionHeader
        eyebrow="The solution"
        title="Persistent memory for every AI"
        subtitle="RecallOS creates a unified memory layer that stores, indexes, and retrieves information across every conversation, project, and workflow."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {items.map((body, i) => (
          <GlassCard key={i} className="group relative overflow-hidden p-6 border-[#7CFF8A]/20 hover:border-[#7CFF8A]/40 transition-colors fade-up" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="absolute inset-0 bg-[#7CFF8A]/5 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#7CFF8A]/10 text-[#7CFF8A] shadow-[0_0_15px_rgba(124,255,138,0.2)]">
              <Check className="h-4 w-4" />
            </div>
            <p className="text-sm font-medium leading-relaxed text-white/90">{body}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
