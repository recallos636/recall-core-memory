import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline";

export function GradientButton({
  children,
  variant = "primary",
  className,
  ...props
}: { children: ReactNode; variant?: Variant } & ButtonHTMLAttributes<HTMLButtonElement>) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-tight transition-all duration-300 will-change-transform";
  const styles: Record<Variant, string> = {
    primary:
      "text-[#0c0c0c] bg-gradient-to-b from-[#4AFF71] to-[#7CFF8A] shadow-[0_10px_40px_-10px_rgba(0,210,255,0.6),inset_0_1px_0_rgba(255,255,255,0.6)] hover:shadow-[0_18px_50px_-10px_rgba(0,210,255,0.8),inset_0_1px_0_rgba(255,255,255,0.7)] hover:-translate-y-0.5",
    ghost:
      "text-white/90 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10",
    outline:
      "text-white border border-white/15 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/30",
  };
  return (
    <button className={cn(base, styles[variant], className)} {...props}>
      {children}
    </button>
  );
}
