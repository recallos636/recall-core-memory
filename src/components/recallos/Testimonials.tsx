import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./Problem";

const quotes = [
  {
    quote: "RecallOS turned our copilot from amnesiac to actually useful. The latency budget is real and the recall is uncanny.",
    name: "Maya Chen",
    title: "Staff Engineer, infra startup",
  },
  {
    quote: "We replaced 600 lines of brittle context-stitching with a single recall() call. Our agents stopped lying about prior runs.",
    name: "Jonas Reuter",
    title: "Founder, agent platform",
  },
  {
    quote: "It's the first memory product that feels designed for production, not a demo. Importance scoring is a quiet superpower.",
    name: "Nora Akkad",
    title: "Head of AI, fintech",
  },
  {
    quote: "Cross-session recall is the feature I didn't know I was missing. My customer-support agent finally has a memory.",
    name: "Daniel Park",
    title: "Indie builder",
  },
  {
    quote: "Open source, model agnostic, dead simple SDK. RecallOS is what every team should reach for first.",
    name: "Priya Sundar",
    title: "Engineering lead, SaaS",
  },
  {
    quote: "We benchmarked four memory layers. RecallOS won on accuracy and latency at the same time.",
    name: "Lukas Brandt",
    title: "ML researcher",
  },
];

export function Testimonials() {
  return (
    <section className="relative mx-auto mt-32 max-w-7xl px-4">
      <SectionHeader
        eyebrow="Testimonials"
        title="Trusted by builders shipping real agents."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {quotes.map((q) => (
          <GlassCard key={q.name} className="p-6">
            <p className="text-[15px] leading-relaxed text-white/85">"{q.quote}"</p>
            <div className="mt-5 flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#A4F4FD] to-[#00d2ff] text-sm font-semibold text-[#0c0c0c]">
                {q.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
              </div>
              <div>
                <div className="text-sm font-medium text-white">{q.name}</div>
                <div className="text-xs text-white/50">{q.title}</div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
