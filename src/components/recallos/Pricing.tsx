import { useState } from "react";
import { Check } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import { GradientButton } from "./ui/GradientButton";
import { SectionHeader } from "./Problem";
import { toast } from "sonner";

type Plan = {
  name: string;
  tagline: string;
  monthly: number | "Custom";
  annual: number | "Custom";
  features: string[];
  cta: string;
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    tagline: "For solo builders exploring agent memory.",
    monthly: 0,
    annual: 0,
    features: [
      "100k memory entries",
      "Semantic + keyword recall",
      "Single project",
      "Local + cloud SDK",
      "Community support",
    ],
    cta: "Start free",
  },
  {
    name: "Builder",
    tagline: "For teams shipping production agents.",
    monthly: 19,
    annual: 15,
    features: [
      "10M memory entries",
      "Importance + recency ranking",
      "Unlimited projects",
      "Cross-session recall",
      "Priority email support",
      "Audit log",
    ],
    cta: "Upgrade to Builder",
    highlight: true,
  },
  {
    name: "Enterprise",
    tagline: "For platforms with memory at scale.",
    monthly: "Custom",
    annual: "Custom",
    features: [
      "Unlimited memory",
      "Dedicated regions",
      "SSO + SCIM",
      "On-prem / VPC option",
      "99.99% SLA",
      "Solutions engineer",
    ],
    cta: "Contact sales",
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="relative mx-auto mt-32 max-w-7xl px-4">
      {/* watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-10 select-none text-center text-[16vw] font-semibold tracking-[-0.06em] text-white/[0.025]"
      >
        RECALLOS
      </div>

      <SectionHeader eyebrow="Pricing" title="Simple, predictable, scaled to your memory." />

      <div className="mt-8 flex justify-center">
        <div className="liquid-glass inline-flex items-center gap-1 rounded-full p-1 text-sm">
          <button
            onClick={() => setAnnual(false)}
            className={`rounded-full px-4 py-1.5 transition-colors ${!annual ? "bg-white text-[#0c0c0c]" : "text-white/70"}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`rounded-full px-4 py-1.5 transition-colors ${annual ? "bg-white text-[#0c0c0c]" : "text-white/70"}`}
          >
            Annual <span className="ml-1 text-[10px] uppercase tracking-[0.18em] text-[#00d2ff]">−20%</span>
          </button>
        </div>
      </div>

      <div className="relative mt-10 grid gap-5 lg:grid-cols-3">
        {plans.map((p) => {
          const price = annual ? p.annual : p.monthly;
          return (
            <GlassCard
              key={p.name}
              strong={p.highlight}
              className={`p-7 transition-transform duration-300 hover:-translate-y-0.5 ${
                p.highlight ? "lg:-translate-y-2" : ""
              }`}
            >
              {p.highlight && (
                <div className="mb-3 inline-flex rounded-full border border-[#00d2ff]/30 bg-[#00d2ff]/10 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.18em] text-[#A4F4FD]">
                  Most popular
                </div>
              )}
              <div className="text-lg font-medium text-white">{p.name}</div>
              <p className="mt-1 text-sm text-white/55">{p.tagline}</p>

              <div className="mt-6 flex items-baseline gap-1.5">
                {typeof price === "number" ? (
                  <>
                    <span className="text-5xl font-semibold tracking-tight text-white">${price}</span>
                    <span className="text-sm text-white/50">/mo{annual && price > 0 ? ", billed yearly" : ""}</span>
                  </>
                ) : (
                  <span className="text-5xl font-semibold tracking-tight text-white">Custom</span>
                )}
              </div>

              <GradientButton
                variant={p.highlight ? "primary" : "outline"}
                className="mt-6 w-full justify-center py-3"
                onClick={() =>
                  toast.success(`${p.name} selected`, {
                    description: "We'll be in touch with next steps.",
                  })
                }
              >
                {p.cta}
              </GradientButton>

              <ul className="mt-6 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/75">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#00d2ff]" />
                    {f}
                  </li>
                ))}
              </ul>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
