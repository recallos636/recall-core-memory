"use client";

import React, { useMemo } from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

// Using mainnet-beta endpoint
const endpoint = "https://api.mainnet-beta.solana.com";

export function WalletContextProvider({ children }: { children: React.ReactNode }) {
  // Modern wallets support Wallet Standard, so empty array works for Phantom, Solflare, Backpack, Glow
  const wallets = useMemo(() => [], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
