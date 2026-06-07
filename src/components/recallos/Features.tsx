import {
  Brain, Search, FolderGit2, Sparkles, BotMessageSquare, Repeat, BarChart3, Code, Boxes,
} from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./Problem";

const features = [
  { icon: Brain, title: "Persistent memory", body: "Long-lived storage that survives sessions, processes, and deploys." },
  { icon: Search, title: "Semantic search", body: "Meaning-aware retrieval powered by hybrid vector + keyword indexes." },
  { icon: Sparkles, title: "Context retrieval", body: "Adaptive context windows tuned per model and per task." },
  { icon: FolderGit2, title: "Project knowledge", body: "Scope memory by project, customer, or environment." },
  { icon: BotMessageSquare, title: "Agent memory", body: "Drop-in tools your agents can call to recall, store, or forget." },
  { icon: Repeat, title: "Cross-session recall", body: "Pick up exactly where you — or your agent — left off." },
  { icon: BarChart3, title: "Memory ranking", body: "Importance and recency scoring keeps the right facts on top." },
  { icon: Code, title: "Open source", body: "Run RecallOS locally, on prem, or as a managed service." },
  { icon: Boxes, title: "Model agnostic", body: "Works with any LLM — closed, open, or self-hosted." },
];

export function Features() {
  return (
    <section id="features" className="relative mx-auto mt-32 max-w-7xl px-4">
      <SectionHeader
        eyebrow="Features"
        title="Everything an agent needs to actually remember."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, body }) => (
          <GlassCard key={title} className="group p-6 transition-transform duration-300 hover:-translate-y-0.5">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.04] text-[#4AFF71] transition-colors group-hover:bg-[#7CFF8A]/10">
              <Icon className="h-5 w-5" />
            </div>
            <div className="mt-5 text-base font-medium tracking-tight text-white">{title}</div>
            <p className="mt-1 text-sm leading-relaxed text-white/55">{body}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
