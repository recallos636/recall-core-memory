import { GlassCard } from "./ui/GlassCard";
import { SectionHeader } from "./Problem";

type Integration = {
  name: string;
  slug: string;
  description: string;
  status: "Connected" | "Available";
  hue: string;
};

const items: Integration[] = [
  { name: "Claude", slug: "anthropic", description: "Anthropic's reasoning workhorse.", status: "Connected", hue: "from-[#7CFF8A]/30 to-[#0F2A18]/40" },
  { name: "ChatGPT", slug: "openai", description: "OpenAI multimodal series.", status: "Connected", hue: "from-[#65FF9A]/30 to-[#0F2A18]/40" },
  { name: "Gemini", slug: "googlegemini", description: "Google's long-context family.", status: "Connected", hue: "from-[#4AFF71]/30 to-[#0F2A18]/40" },
  { name: "DeepSeek", slug: "deepseek", description: "High-throughput open weights.", status: "Available", hue: "from-[#7CFF8A]/20 to-[#050A07]/40" },
  { name: "Qwen", slug: "alibabacloud", description: "Alibaba's multilingual stack.", status: "Available", hue: "from-[#65FF9A]/20 to-[#050A07]/40" },
  { name: "Llama", slug: "meta", description: "Meta's open-weight backbone.", status: "Available", hue: "from-[#4AFF71]/20 to-[#050A07]/40" },
  { name: "Mistral", slug: "mistral", description: "Compact, fast, Euro-built.", status: "Available", hue: "from-[#7CFF8A]/20 to-[#050A07]/40" },
  { name: "HuggingFace", slug: "huggingface", description: "Inference for any open model.", status: "Available", hue: "from-[#65FF9A]/20 to-[#050A07]/40" },
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
        {items.map((i, index) => (
          <GlassCard key={i.name} className="group relative overflow-hidden p-5 border-[#7CFF8A]/20 hover:border-[#7CFF8A]/40 transition-colors fade-up" style={{ animationDelay: `${index * 50}ms` }}>
            <div className="absolute inset-0 bg-[#7CFF8A]/5 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="flex items-start justify-between relative z-10">
              <div className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${i.hue} text-base font-semibold shadow-[0_0_15px_rgba(124,255,138,0.15)] group-hover:shadow-[0_0_20px_rgba(124,255,138,0.3)] transition-shadow`}>
                <img 
                  src={i.slug === 'mistral' ? 'https://cdn.brandfetch.io/mistral.ai/w/400/h/400/icon' : `https://cdn.simpleicons.org/${i.slug}/white`} 
                  alt={i.name} 
                  className="h-6 w-6 object-contain" 
                  onError={(e) => { 
                    e.currentTarget.style.display = 'none'; 
                    e.currentTarget.parentElement!.innerHTML = `<span class="text-white">${i.name[0]}</span>`; 
                  }} 
                />
              </div>
              <span
                className={`rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] ${
                  i.status === "Connected"
                    ? "border-[#7CFF8A]/40 bg-[#7CFF8A]/10 text-[#7CFF8A]"
                    : "border-white/10 bg-white/[0.04] text-white/55"
                }`}
              >
                {i.status}
              </span>
            </div>
            <div className="mt-5 text-base font-medium tracking-tight text-white relative z-10">{i.name}</div>
            <p className="mt-1 text-sm leading-relaxed text-white/60 relative z-10">{i.description}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
