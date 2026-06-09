"use client";

import { useEffect, useState, useCallback } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import bs58 from "bs58";
import { toast } from "sonner";

export interface Session {
  publicKey: string;
  signature: string;
  timestamp: number;
}

export function useWalletAuth() {
  const { publicKey, signMessage, disconnect, connected, connecting, wallet } = useWallet();
  const [session, setSession] = useState<Session | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  // Load session from local storage on mount
  useEffect(() => {
    const stored = localStorage.getItem("recallos_session");
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Session;
        // Verify session is not expired (e.g., 24 hours)
        if (Date.now() - parsed.timestamp < 24 * 60 * 60 * 1000) {
          setSession(parsed);
        } else {
          localStorage.removeItem("recallos_session");
        }
      } catch (e) {
        // ignore
      }
    }
  }, []);

  const authenticate = useCallback(async () => {
    if (!publicKey || !signMessage) return;
    
    // If we already have a valid session for this public key, skip
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
      disconnect(); // Disconnect if auth fails
    } finally {
      setIsAuthenticating(false);
    }
  }, [publicKey, signMessage, session, disconnect]);

  // Trigger auth when connected
  useEffect(() => {
    if (connected && publicKey && !isAuthenticating) {
      authenticate();
    }
  }, [connected, publicKey, authenticate, isAuthenticating]);

  // Handle disconnect
  useEffect(() => {
    if (!connected && session) {
      setSession(null);
      localStorage.removeItem("recallos_session");
    }
  }, [connected, session]);

  const truncatedAddress = publicKey
    ? `${publicKey.toString().slice(0, 4)}...${publicKey.toString().slice(-4)}`
    : "";

  return {
    connected: connected && !!session,
    connecting: connecting || isAuthenticating,
    publicKey,
    truncatedAddress,
    session,
    disconnect,
    wallet,
  };
}
