"use client";

import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

export function useWalletAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useWalletAuth must be used within an AuthProvider");
  }
  return context;
}

export type { Session } from "@/contexts/AuthContext";
