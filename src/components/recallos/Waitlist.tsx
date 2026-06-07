import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    
    setStatus("loading");
    // Simulate network request
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <section className="relative mx-auto mt-32 mb-20 max-w-4xl px-4">
      <div className="group relative overflow-hidden rounded-3xl border border-[#7CFF8A]/20 bg-[#0A140D]/80 p-8 sm:p-16 backdrop-blur-md shadow-[0_0_50px_rgba(124,255,138,0.05)] text-center animate-fade-up">
        {/* Glow Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7CFF8A]/5 to-[#0F2A18]/20 opacity-50" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-[#7CFF8A]/10 blur-[80px]" />

        <div className="relative z-10">
          <div className="inline-block rounded-full border border-[#7CFF8A]/30 bg-[#7CFF8A]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7CFF8A] mb-6 shadow-[0_0_10px_rgba(124,255,138,0.2)]">
            Last Call
          </div>
          
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl mb-8">
            Subscribe for updates
          </h2>

          <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col sm:flex-row gap-3">
            {status === "success" ? (
              <div className="flex w-full items-center justify-center gap-3 rounded-xl border border-[#7CFF8A]/50 bg-[#7CFF8A]/10 px-6 py-4 text-[#7CFF8A] animate-fade-up">
                <Check className="h-5 w-5" />
                <span className="font-medium">You're on the RecallOS waitlist.</span>
              </div>
            ) : (
              <>
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    disabled={status === "loading"}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-white placeholder:text-white/40 focus:border-[#7CFF8A]/50 focus:bg-[#7CFF8A]/5 focus:outline-none focus:ring-1 focus:ring-[#7CFF8A]/50 transition-all disabled:opacity-50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading" || !email}
                  className="group flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-black hover:bg-[#7CFF8A] transition-colors disabled:opacity-50 disabled:hover:bg-white"
                >
                  {status === "loading" ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-black/20 border-t-black" />
                  ) : (
                    <>
                      JOIN THE LIST
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
