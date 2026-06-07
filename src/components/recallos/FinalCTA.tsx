import { ArrowRight, BookOpen } from "lucide-react";
import { GradientButton } from "./ui/GradientButton";
import { toast } from "sonner";

export function FinalCTA() {
  return (
    <section className="relative mx-auto mt-32 max-w-7xl px-4">
      <div className="liquid-glass-strong relative overflow-hidden rounded-3xl px-6 py-20 text-center sm:py-28">
        {/* glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(0,210,255,0.35), rgba(11,37,81,0.2) 45%, transparent 75%)",
          }}
        />
        <div className="relative">
          <h2 className="mx-auto max-w-3xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-7xl">
            Your AI deserves a memory.
            <br />
            <span className="shiny-text">Give it one.</span>
          </h2>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <GradientButton
              onClick={() =>
                toast.success("RecallOS download queued", {
                  description: "We'll email you a link to install.",
                })
              }
              className="px-6 py-3 text-[15px]"
            >
              Download RecallOS <ArrowRight className="h-4 w-4" />
            </GradientButton>
            <GradientButton variant="outline" className="px-6 py-3 text-[15px]">
              <BookOpen className="h-4 w-4" /> View Docs
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}
