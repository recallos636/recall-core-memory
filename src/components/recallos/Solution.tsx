import { Brain, Search, Layers, Zap } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./Problem";

const items = [
  { icon: Brain, title: "Persistent memory", body: "Conversations, decisions, and artifacts stored forever." },
  { icon: Search, title: "Semantic retrieval", body: "Find the right context by meaning, not keywords." },
  { icon: Layers, title: "Project context", body: "Everything an agent needs about a project, on demand." },
  { icon: Zap, title: "Instant recall", body: "Sub-50ms p95 retrieval at production scale." },
];

export function Solution() {
  return (
    <section className="relative mx-auto mt-32 max-w-7xl px-4">
      <SectionHeader
        eyebrow="The solution"
        title="A memory layer your models can rely on."
        subtitle="RecallOS sits between your AI and your data — capturing what matters, ranking it, and serving it back the instant a model needs it."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, body }) => (
          <GlassCard key={title} className="p-6">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#00d2ff]/30 to-[#0B2551]/40 text-[#A4F4FD]">
              <Icon className="h-5 w-5" />
            </div>
            <div className="mt-5 text-lg font-medium tracking-tight text-white">{title}</div>
            <p className="mt-1 text-sm leading-relaxed text-white/55">{body}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
