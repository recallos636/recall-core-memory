"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import bs58 from "bs58";
import { toast } from "sonner";

export interface Session {
  publicKey: string;
  signature: string;
  timestamp: number;
}

interface AuthContextType {
  session: Session | null;
  isAuthenticating: boolean;
  authenticate: () => Promise<void>;
  disconnect: () => Promise<void>;
  connected: boolean;
  connecting: boolean;
  publicKey: any;
  wallet: any;
  truncatedAddress: string;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { publicKey, signMessage, disconnect: walletDisconnect, connected, connecting, wallet } = useWallet();
  const [session, setSession] = useState<Session | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false);

  // Sync session from localStorage
  const syncSession = useCallback(() => {
    const stored = localStorage.getItem("recallos_session");
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Session;
        setSession(parsed);
      } catch (e) {
        localStorage.removeItem("recallos_session");
        setSession(null);
      }
    } else {
      setSession(null);
    }
  }, []);

  useEffect(() => {
    syncSession();
    setHasHydrated(true);

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "recallos_session") {
        syncSession();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [syncSession]);

  const authenticate = useCallback(async () => {
    if (!publicKey || !signMessage) return;

    if (session && session.publicKey === publicKey.toString()) {
      return;
    }

    setIsAuthenticating(true);
    try {
      const timestamp = Date.now();
      const message = `Welcome to RecallOS\n\nSign this message to verify wallet ownership.\n\nWallet:\n${publicKey.toString()}\n\nTimestamp:\n${timestamp}`;

      const messageBytes = new TextEncoder().encode(message);
      const signatureBytes = await signMessage(messageBytes);
      const signature = bs58.encode(signatureBytes);

      const newSession: Session = {
        publicKey: publicKey.toString(),
        signature,
        timestamp,
      };

      setSession(newSession);
      localStorage.setItem("recallos_session", JSON.stringify(newSession));
      toast.success("Wallet authenticated successfully");
    } catch (error) {
      console.error("Authentication failed:", error);
      toast.error("Authentication failed. Please try again.");
      await walletDisconnect();
    } finally {
      setIsAuthenticating(false);
    }
  }, [publicKey, signMessage, session, walletDisconnect]);

  // Trigger auth if connected but no session or session mismatch
  useEffect(() => {
    if (!hasHydrated) return;

    if (connected && publicKey && !isAuthenticating) {
      if (!session || session.publicKey !== publicKey.toString()) {
        authenticate();
      }
    }
  }, [connected, publicKey, session, authenticate, isAuthenticating, hasHydrated]);

  // Explicit disconnect
  const disconnect = useCallback(async () => {
    setSession(null);
    localStorage.removeItem("recallos_session");
    await walletDisconnect();
  }, [walletDisconnect]);

  const truncatedAddress = publicKey
    ? `${publicKey.toString().slice(0, 4)}...${publicKey.toString().slice(-4)}`
    : "";

  const isFullyConnected = connected && !!session && !!publicKey && session.publicKey === publicKey.toString();

  return (
    <AuthContext.Provider
      value={{
        session,
        isAuthenticating,
        authenticate,
        disconnect,
        connected: isFullyConnected,
        connecting: connecting || isAuthenticating || !hasHydrated,
        publicKey,
        wallet,
        truncatedAddress,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
