import { useState } from "react";
import { motion } from "motion/react";
import { Copy, Check, ExternalLink } from "lucide-react";
import { SectionHeader } from "./Problem";

export function TokenSection() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "8HGYvXMLjW9hd1JXbHZQYqRps7DiPS1H3HWyxm7Mpump";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
              <div className="flex flex-col gap-6">
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-[0.15em] text-white/40 mb-1">Network</span>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7CFF8A] opacity-70" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7CFF8A]" />
                    </span>
                    <span className="text-lg font-medium text-[#7CFF8A]">Solana</span>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-[0.15em] text-white/40 mb-1">Contract Address</span>
                  <span className="text-sm sm:text-base font-mono text-white break-all bg-white/[0.02] p-2 rounded-lg border border-white/5 inline-block">
                    {contractAddress}
                  </span>
                </div>
              </div>
              <p className="text-sm text-white/50 leading-relaxed mt-4 max-w-md">
                The RecallOS token will enable decentralized memory storage, node operator rewards, and protocol governance. Token holders will receive exclusive access to premium documentation, beta features, and the decentralized indexing network.
              </p>
            </div>

            {/* Right side: Trading buttons */}
            <div className="w-full md:w-auto flex flex-col gap-3">
              <div className="text-xs uppercase tracking-[0.15em] text-white/40 mb-2 md:text-right">Markets & Actions</div>
              
              <a
                href="https://pump.fun/coin/8HGYvXMLjW9hd1JXbHZQYqRps7DiPS1H3HWyxm7Mpump"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-6 rounded-xl border border-[#7CFF8A]/20 bg-[#7CFF8A]/10 hover:bg-[#7CFF8A]/20 transition-colors px-5 py-3 text-sm text-[#7CFF8A] w-full min-w-[220px]"
              >
                <span className="font-medium">Buy on Pump.fun</span>
                <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="https://dexscreener.com/solana/8HGYvXMLjW9hd1JXbHZQYqRps7DiPS1H3HWyxm7Mpump"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-6 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors px-5 py-3 text-sm text-white w-full min-w-[220px]"
              >
                <span className="font-medium">View on DexScreener</span>
                <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity text-white/50" />
              </a>

              <button
                onClick={handleCopy}
                className="group flex items-center justify-between gap-6 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors px-5 py-3 text-sm text-white w-full min-w-[220px]"
              >
                <span className="font-medium">Copy Contract Address</span>
                {copied ? (
                  <Check className="w-4 h-4 text-[#7CFF8A]" />
                ) : (
                  <Copy className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity text-white/50" />
                )}
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
