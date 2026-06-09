"use client";

import { useState } from "react";
import { GradientButton } from "./ui/GradientButton";
import { useWalletAuth } from "@/hooks/useWalletAuth";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { LogOut, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function ConnectWalletButton({ className }: { className?: string }) {
  const { connected, truncatedAddress, disconnect, connecting } = useWalletAuth();
  const { setVisible } = useWalletModal();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (connected) {
    return (
      <div className={cn("relative", className)}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-white/90 hover:text-white transition-all hover:bg-white/[0.08]"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7CFF8A] opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7CFF8A]" />
          </span>
          {truncatedAddress}
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 top-full mt-2 w-48 rounded-2xl border border-white/10 bg-[#050A07]/90 p-2 shadow-[0_0_40px_rgba(124,255,138,0.1)] backdrop-blur-xl">
            <button
              onClick={() => {
                setDropdownOpen(false);
                // Future profile navigation
              }}
              className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              <User className="h-4 w-4" /> View Profile
            </button>
            <div className="my-1 h-px w-full bg-white/5" />
            <button
              onClick={() => {
                disconnect();
                setDropdownOpen(false);
              }}
              className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm text-red-400/70 transition-colors hover:bg-red-400/10 hover:text-red-400"
            >
              <LogOut className="h-4 w-4" /> Disconnect
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <GradientButton
      onClick={() => setVisible(true)}
      className={className}
      disabled={connecting}
    >
      {connecting ? "Connecting..." : "Connect Wallet"}
    </GradientButton>
  );
}
