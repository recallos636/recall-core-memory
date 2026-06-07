import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./Problem";

type Integration = {
  name: string;
  mono: string;
  description: string;
  status: "Connected" | "Available";
  hue: string;
};

const items: Integration[] = [
  { name: "Claude", mono: "C", description: "Anthropic's reasoning workhorse.", status: "Connected", hue: "from-[#d97706]/40 to-[#f59e0b]/10" },
  { name: "GPT", mono: "G", description: "OpenAI multimodal series.", status: "Connected", hue: "from-[#10a37f]/40 to-[#34d399]/10" },
  { name: "Gemini", mono: "✦", description: "Google's long-context family.", status: "Connected", hue: "from-[#4285f4]/40 to-[#60a5fa]/10" },
  { name: "DeepSeek", mono: "DS", description: "High-throughput open weights.", status: "Available", hue: "from-[#4f46e5]/40 to-[#818cf8]/10" },
  { name: "Qwen", mono: "Q", description: "Alibaba's multilingual stack.", status: "Available", hue: "from-[#7c3aed]/40 to-[#a78bfa]/10" },
  { name: "Llama", mono: "L", description: "Meta's open-weight backbone.", status: "Available", hue: "from-[#0ea5e9]/40 to-[#38bdf8]/10" },
  { name: "Mistral", mono: "M", description: "Compact, fast, Euro-built.", status: "Available", hue: "from-[#f97316]/40 to-[#fb923c]/10" },
  { name: "HuggingFace", mono: "🤗", description: "Inference for any open model.", status: "Available", hue: "from-[#facc15]/40 to-[#fde047]/10" },
];

export function Integrations() {
  return (
    <section id="integrations" className="relative mx-auto mt-32 max-w-7xl px-4">
      <SectionHeader
        eyebrow="Integrations"
        title="Plug RecallOS into the model you already use."
        subtitle="One memory layer, every model. Switch providers without losing a single thought."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((i) => (
          <GlassCard key={i.name} className="p-5">
            <div className="flex items-start justify-between">
              <div className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${i.hue} text-base font-semibold text-white`}>
                {i.mono}
              </div>
              <span
                className={`rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] ${
                  i.status === "Connected"
                    ? "border-[#00d2ff]/30 bg-[#00d2ff]/10 text-[#A4F4FD]"
                    : "border-white/10 bg-white/[0.04] text-white/55"
                }`}
              >
                {i.status}
              </span>
            </div>
            <div className="mt-4 text-base font-medium tracking-tight text-white">{i.name}</div>
            <p className="mt-1 text-sm leading-relaxed text-white/55">{i.description}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
