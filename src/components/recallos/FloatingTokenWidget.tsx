import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, LineChart } from "lucide-react";

export function FloatingTokenWidget() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem("recallos_token_widget_dismissed");
      if (!dismissed) {
        setIsVisible(true);
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("recallos_token_widget_dismissed", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 hidden lg:block"
        >
          <div className="liquid-glass relative overflow-hidden rounded-2xl p-4 border border-[#7CFF8A]/30 shadow-[0_10px_40px_rgba(124,255,138,0.15)] flex flex-col gap-3 min-w-[220px]">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7CFF8A]/10 to-transparent pointer-events-none" />

            <div className="relative z-10 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7CFF8A] opacity-70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7CFF8A]" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7CFF8A]">LIVE</span>
                </div>
                <h4 className="text-sm font-medium text-white">RecallOS Token</h4>
              </div>
              <button
                onClick={handleDismiss}
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <a
              href="https://dexscreener.com/solana/8HGYvXMLjW9hd1JXbHZQYqRps7DiPS1H3HWyxm7Mpump"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 flex items-center justify-center gap-2 w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-medium text-white transition-all hover:border-[#7CFF8A]/30 group"
            >
              <LineChart className="w-3.5 h-3.5 text-[#7CFF8A] group-hover:scale-110 transition-transform" />
              View Chart
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
