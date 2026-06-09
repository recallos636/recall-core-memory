import { motion } from "motion/react";
import { Coins, ExternalLink } from "lucide-react";
import { SectionHeader } from "./Problem";

export function TokenSection() {
  return (
    <section id="token" className="relative mx-auto mt-32 max-w-7xl px-4">
      <SectionHeader 
        eyebrow="Ecosystem" 
        title="RecallOS Token" 
        subtitle="The native asset powering the decentralized memory network." 
      />

      <div className="mx-auto mt-14 max-w-4xl">
        <div className="liquid-glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-12 border border-[#7CFF8A]/10 shadow-[0_0_80px_rgba(124,255,138,0.03)]">
          {/* Subtle glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7CFF8A]/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center justify-between">
            
            {/* Left side: Stats */}
            <div className="flex-1 w-full space-y-6">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Ticker", value: "Coming Soon" },
                  { label: "Supply", value: "Coming Soon" },
                  { label: "Launch", value: "Coming Soon" },
                  { label: "Network", value: "Solana", highlight: true },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-xs uppercase tracking-[0.15em] text-white/40 mb-1">{stat.label}</span>
                    <span className={`text-lg font-medium ${stat.highlight ? 'text-[#7CFF8A]' : 'text-white'}`}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-white/50 leading-relaxed mt-4 max-w-md">
                The RecallOS token will enable decentralized memory storage, node operator rewards, and protocol governance. Token holders will receive exclusive access to premium documentation, beta features, and the decentralized indexing network.
              </p>
            </div>

            {/* Right side: Trading buttons */}
            <div className="w-full md:w-auto flex flex-col gap-3">
              <div className="text-xs uppercase tracking-[0.15em] text-white/40 mb-2 md:text-right">Markets</div>
              {[
                { name: "Pump.fun" },
                { name: "DEX Screener" },
                { name: "Birdeye" }
              ].map((dex) => (
                <button
                  key={dex.name}
                  disabled
                  className="flex items-center justify-between gap-6 rounded-xl border border-white/5 bg-white/[0.02] px-5 py-3 text-sm text-white/40 cursor-not-allowed w-full min-w-[200px]"
                >
                  <span className="font-medium">{dex.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs">Coming Soon</span>
                  </div>
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
