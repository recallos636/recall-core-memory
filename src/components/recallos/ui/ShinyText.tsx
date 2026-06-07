import { cn } from "@/lib/utils";

export function ShinyText({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn("shiny-text inline-block", className)}>{children}</span>;
}
