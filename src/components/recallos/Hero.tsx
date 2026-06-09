import { motion } from "motion/react";
import { ArrowRight, BookOpen, Github } from "lucide-react";
import { GradientButton } from "./ui/GradientButton";
import { ShinyText } from "./ui/ShinyText";
import { toast } from "sonner";
import { Link } from "@tanstack/react-router";
import { ConnectWalletButton } from "./ConnectWalletButton";

export function Hero() {
  return (
    <section className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Column: Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-7">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="liquid-glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-white/70"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7CFF8A] opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#7CFF8A]" />
                </span>
                Now in private beta — v0.9
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="liquid-glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-white/90 border border-[#7CFF8A]/30 shadow-[0_0_15px_rgba(124,255,138,0.1)]"
              >
                <span className="text-[#7CFF8A] text-[10px]">●</span> Token Live on Solana
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-7xl md:text-[6.5rem] lg:text-[7rem]"
            >
              Your AI.
              <br />
              <ShinyText>Remembers.</ShinyText>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-7 max-w-xl text-balance text-base leading-relaxed text-white/60 sm:text-lg mx-auto lg:mx-0"
            >
              RecallOS gives AI agents, copilots, and assistants a persistent AI memory
              layer that survives across conversations, projects, and workflows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-9 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
            >
              <ConnectWalletButton className="px-6 py-3 text-[15px] w-full sm:w-auto justify-center" />
              <Link to="/docs">
                <GradientButton variant="outline" className="px-6 py-3 text-[15px] w-full sm:w-auto justify-center">
                  <BookOpen className="h-4 w-4" /> View Documentation
                </GradientButton>
              </Link>
              <a href="https://github.com/recallos636/recall-core-memory" target="_blank" rel="noopener noreferrer">
                <GradientButton variant="outline" className="px-6 py-3 text-[15px] w-full sm:w-auto justify-center">
                  <Github className="h-4 w-4" /> View on GitHub
                </GradientButton>
              </a>
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

          {/* Right Column: Premium MP4 Memory Cube */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="flex-1 relative hidden lg:flex items-center justify-center w-full max-w-[650px] min-w-[500px]"
          >
            {/* Glowing Aura behind the container */}
            <div className="absolute inset-0 bg-[#7CFF8A]/15 blur-[100px] rounded-full animate-pulse" style={{ animationDuration: '6s' }} />
            
            {/* Premium Glass Container with subtle breathing */}
            <div className="relative w-full aspect-square float-slow rounded-[2.5rem] overflow-hidden shadow-[0_0_80px_rgba(124,255,138,0.15)] bg-[#050A07]/40 border border-[#7CFF8A]/20 backdrop-blur-2xl flex items-center justify-center p-6 transition-all duration-[2000ms] hover:scale-[1.02] hover:shadow-[0_0_120px_rgba(124,255,138,0.25)] hover:border-[#7CFF8A]/40 group">
              
              <div className="absolute inset-0 bg-gradient-to-br from-[#7CFF8A]/10 via-transparent to-[#0F2A18]/50 opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <video
                src="/cube.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/cube-poster.png"
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_40px_rgba(124,255,138,0.4)] transition-transform duration-[3000ms] group-hover:scale-105"
              />
              
            </div>
            
            {/* Overlay Particles */}
            <svg className="absolute inset-0 h-full w-full opacity-60 pointer-events-none" viewBox="0 0 100 100">
              <defs>
                <radialGradient id="cubeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#7CFF8A" stopOpacity="1" />
                  <stop offset="100%" stopColor="#7CFF8A" stopOpacity="0" />
                </radialGradient>
              </defs>
              {[...Array(25)].map((_, i) => (
                <circle
                  key={i}
                  cx="50"
                  cy="50"
                  r={Math.random() * 0.6 + 0.2}
                  fill="url(#cubeGlow)"
                >
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values={`0,0; ${(Math.random() - 0.5) * 100},${(Math.random() - 0.5) * 100}`}
                    dur={`${Math.random() * 4 + 4}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="1; 0; 1"
                    dur={`${Math.random() * 4 + 4}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}
            </svg>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
