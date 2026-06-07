import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

export function GlassCard({
  children,
  className,
  strong = false,
  ...props
}: { children: ReactNode; strong?: boolean } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        strong ? "liquid-glass-strong" : "liquid-glass",
        "relative overflow-hidden",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
