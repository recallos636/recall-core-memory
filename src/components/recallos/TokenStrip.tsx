import { useState } from "react";
import { motion } from "motion/react";
import { Copy, Check, ExternalLink } from "lucide-react";

export function TokenStrip() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "8HGYvXMLjW9hd1JXbHZQYqRps7DiPS1H3HWyxm7Mpump";
  
  // Truncate for mobile but full for large screens if needed.
  // Actually, standard is usually just showing truncated on all or truncating via css.
  const shortAddress = `${contractAddress.slice(0, 4)}...${contractAddress.slice(-4)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative mx-auto max-w-5xl px-4 mt-8 sm:mt-12 mb-20 z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="liquid-glass relative overflow-hidden rounded-2xl p-4 sm:p-5 border border-[#7CFF8A]/20 shadow-[0_0_40px_rgba(124,255,138,0.1)] flex flex-col md:flex-row items-center justify-between gap-4"
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#7CFF8A]/5 via-transparent to-[#7CFF8A]/5 pointer-events-none" />

        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7CFF8A] opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7CFF8A]" />
          </span>
          <span className="text-white font-medium whitespace-nowrap">RecallOS Token Live</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-2 bg-white/[0.03] border border-white/5 rounded-lg px-3 py-1.5 w-full sm:w-auto justify-between sm:justify-start">
            <span className="text-xs text-white/40">CA:</span>
            <span className="text-sm text-white/80 font-mono tracking-wider">
              <span className="hidden sm:inline">{contractAddress.slice(0, 8)}...{contractAddress.slice(-6)}</span>
              <span className="sm:hidden">{shortAddress}</span>
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleCopy}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-white transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#7CFF8A]" />
                  <span className="text-[#7CFF8A]">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-white/70" />
                  <span>Copy CA</span>
                </>
              )}
            </button>

            <a
              href="https://pump.fun/coin/8HGYvXMLjW9hd1JXbHZQYqRps7DiPS1H3HWyxm7Mpump"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#7CFF8A]/10 hover:bg-[#7CFF8A]/20 border border-[#7CFF8A]/20 text-xs font-medium text-[#7CFF8A] transition-colors"
            >
              Pump.fun
            </a>

            <a
              href="https://dexscreener.com/solana/8HGYvXMLjW9hd1JXbHZQYqRps7DiPS1H3HWyxm7Mpump"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-white transition-colors"
            >
              DexScreener
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
