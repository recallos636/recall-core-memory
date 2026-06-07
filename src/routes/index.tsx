import { createFileRoute } from "@tanstack/react-router";
import { BackgroundLayer } from "@/components/recallos/BackgroundLayer";
import { Navbar } from "@/components/recallos/Navbar";
import { Hero } from "@/components/recallos/Hero";
import { MemoryTerminal } from "@/components/recallos/MemoryTerminal";
import { SocialProof } from "@/components/recallos/SocialProof";
import { Problem } from "@/components/recallos/Problem";
import { Solution } from "@/components/recallos/Solution";
import { Architecture } from "@/components/recallos/Architecture";
import { Features } from "@/components/recallos/Features";
import { Integrations } from "@/components/recallos/Integrations";
import { Installation } from "@/components/recallos/Installation";
import { Benchmarks } from "@/components/recallos/Benchmarks";
import { Testimonials } from "@/components/recallos/Testimonials";
import { Pricing } from "@/components/recallos/Pricing";
import { FinalCTA } from "@/components/recallos/FinalCTA";
import { Waitlist } from "@/components/recallos/Waitlist";
import { Footer } from "@/components/recallos/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RecallOS — The Memory Layer for AI" },
      {
        name: "description",
        content:
          "RecallOS gives AI agents, copilots, and assistants a persistent memory layer that survives across conversations, projects, and workflows.",
      },
      { property: "og:title", content: "RecallOS — The Memory Layer for AI" },
      {
        property: "og:description",
        content:
          "Persistent, semantic, model-agnostic memory for the AI era. Compatible with Claude, GPT, Gemini, DeepSeek, Qwen and open-source models.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RecallOSLanding,
});

function RecallOSLanding() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">
      <BackgroundLayer />
      <Navbar />
      <main>
        <Hero />
        <MemoryTerminal />
        <SocialProof />
        <Problem />
        <Solution />
        <Architecture />
        <Features />
        <Integrations />
        <Installation />
        <Benchmarks />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>
      <Waitlist />
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}
