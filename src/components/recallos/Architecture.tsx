import { motion } from "motion/react";
import {
  Cpu, Database, Layers, MessagesSquare, Sparkles, Type, Workflow,
} from "lucide-react";
import { SectionHeader } from "./Problem";

const nodes = [
  { label: "User Input", icon: Type, sub: "Prompt or signal" },
  { label: "Memory Layer", icon: Layers, sub: "Capture & route" },
  { label: "Embedding Engine", icon: Workflow, sub: "Encode meaning" },
  { label: "Vector Database", icon: Database, sub: "Index + store" },
  { label: "Retrieval Layer", icon: Sparkles, sub: "Rank + select" },
  { label: "AI Model", icon: Cpu, sub: "Reason + generate" },
  { label: "Response", icon: MessagesSquare, sub: "Back to user" },
];

export function Architecture() {
  return (
    <section id="architecture" className="relative mx-auto mt-32 max-w-7xl px-4">
      <SectionHeader
        eyebrow="Architecture"
        title="A single pipeline for memory and intelligence."
        subtitle="From signal to response — every step instrumented, observable, and swappable."
      />

      <div className="relative mx-auto mt-14 max-w-3xl">
        {/* center line */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#7CFF8A]/40 to-transparent" />
        {/* traveling glow */}
        <motion.div
          className="absolute left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#7CFF8A] shadow-[0_0_24px_8px_rgba(101,255,154,0.35)]"
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative flex flex-col gap-5">
          {nodes.map((n, i) => (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`liquid-glass flex w-full items-center gap-4 rounded-2xl p-4 sm:w-[60%] ${
                i % 2 === 0 ? "sm:self-start" : "sm:self-end"
              }`}
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#7CFF8A]/20 to-[#0F2A18]/40 text-[#4AFF71]">
                <n.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-white">{n.label}</div>
                <div className="text-xs text-white/50">{n.sub}</div>
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                step {String(i + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
