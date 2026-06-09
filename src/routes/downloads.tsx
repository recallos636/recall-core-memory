import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/recallos/Navbar";
import { Footer } from "@/components/recallos/Footer";
import { BackgroundLayer } from "@/components/recallos/BackgroundLayer";
import { ConnectWalletButton } from "@/components/recallos/ConnectWalletButton";
import { useWalletAuth } from "@/hooks/useWalletAuth";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { FileText, CheckCircle2, Lock } from "lucide-react";
import { checkAccess } from "@/lib/accessControl";

export const Route = createFileRoute("/downloads")({
  component: DownloadsPage,
});

function DownloadsPage() {
  const { connected, publicKey, session } = useWalletAuth();
  const { setVisible } = useWalletModal();

  // If connected, check access. For now, checkAccess just returns true if connected
  const hasAccess = connected && publicKey && checkAccess(publicKey.toString(), "download");

  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">
      <BackgroundLayer />
      <Navbar />

      <main className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 px-4 max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white mb-6">
            RecallOS Documentation
          </h1>
          <p className="text-xl text-white/60">
            The Complete Setup & Implementation Guide
          </p>
          <p className="mt-4 text-white/50">
            Persistent, Semantic, Model-Agnostic Memory for AI Agents and Applications
          </p>
        </div>

        <div className="liquid-glass-strong relative overflow-hidden rounded-3xl w-full max-w-xl p-8 sm:p-12 shadow-[0_0_80px_rgba(124,255,138,0.05)] border border-[#7CFF8A]/10">
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/10">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-[#7CFF8A]/20 to-[#0F2A18]/40 text-[#4AFF71]">
              <FileText className="h-8 w-8" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-2xl font-medium text-white">Version 2.4</h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider bg-[#7CFF8A]/10 text-[#7CFF8A] border border-[#7CFF8A]/20">
                  Professional
                </span>
              </div>
              <p className="text-sm text-white/50">21 Pages · PDF Document</p>
            </div>
          </div>

          <div className="space-y-4 mb-10">
            {[
              "Complete Setup Guide",
              "Architecture Reference",
              "Installation Guide",
              "Integration Examples",
              "Benchmarks",
              "Security & Compliance"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#7CFF8A]" />
                <span className="text-white/80">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto">
            {hasAccess ? (
              <button
                onClick={async () => {
                  if (!session) return;
                  const res = await fetch("/api/download", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ publicKey: session.publicKey, signature: session.signature })
                  });
                  if (!res.ok) {
                    alert("Unauthorized. Please reconnect wallet.");
                    return;
                  }
                  const blob = await res.blob();
                  const url = window.URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = "RecallOS_Complete_Documentation.pdf";
                  document.body.appendChild(a);
                  a.click();
                  window.URL.revokeObjectURL(url);
                  document.body.removeChild(a);
                }}
                className="flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium tracking-tight transition-all duration-300 text-[#0c0c0c] bg-gradient-to-b from-[#4AFF71] to-[#7CFF8A] shadow-[0_10px_40px_-10px_rgba(101,255,154,0.35),inset_0_1px_0_rgba(255,255,255,0.6)] hover:shadow-[0_18px_50px_-10px_rgba(101,255,154,0.45),inset_0_1px_0_rgba(255,255,255,0.7)] hover:-translate-y-0.5 cursor-pointer"
              >
                Download Documentation
              </button>
            ) : (
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <Lock className="w-5 h-5 text-white/40 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-white mb-1">Access Required</h4>
                    <p className="text-xs text-white/50 leading-relaxed">
                      Connect your Solana wallet to download the complete documentation, early access resources, and secure future token holder benefits.
                    </p>
                  </div>
                </div>
                <ConnectWalletButton className="w-full justify-center py-3.5" />
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
