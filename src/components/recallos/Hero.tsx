import { motion } from "motion/react";
import { ArrowRight, BookOpen } from "lucide-react";
import { GradientButton } from "./ui/GradientButton";
import { ShinyText } from "./ui/ShinyText";
import { toast } from "sonner";

export function Hero() {
  return (
    <section className="relative pt-40 pb-24 sm:pt-48 sm:pb-32">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="liquid-glass mx-auto mb-7 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-white/70"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00d2ff] opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00d2ff]" />
          </span>
          Now in private beta — v0.9
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mx-auto max-w-5xl text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-7xl md:text-[7.5rem]"
        >
          Your AI.
          <br />
          <ShinyText>Remembers.</ShinyText>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-7 max-w-2xl text-balance text-base leading-relaxed text-white/60 sm:text-lg"
        >
          RecallOS gives AI agents, copilots, and assistants a persistent memory
          layer that survives across conversations, projects, and workflows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <GradientButton
            onClick={() =>
              toast.success("RecallOS download queued", {
                description: "We'll email a link to install it locally.",
              })
            }
            className="px-6 py-3 text-[15px]"
          >
            Download RecallOS <ArrowRight className="h-4 w-4" />
          </GradientButton>
          <GradientButton variant="outline" className="px-6 py-3 text-[15px]">
            <BookOpen className="h-4 w-4" /> View Documentation
          </GradientButton>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="mt-8 text-xs uppercase tracking-[0.18em] text-white/40"
        >
          Compatible with Claude · GPT · Gemini · DeepSeek · Qwen · Llama · Mistral
        </motion.p>
      </div>
    </section>
  );
}
