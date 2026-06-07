import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BackgroundLayer } from "@/components/recallos/BackgroundLayer";
import { Navbar } from "@/components/recallos/Navbar";
import { Footer } from "@/components/recallos/Footer";
import { Search, ChevronRight, Menu, X, Check, Copy } from "lucide-react";

export const Route = createFileRoute("/docs")({
  component: DocsPage,
});

const sections = [
  "Introduction",
  "Getting Started",
  "Installation",
  "Quickstart",
  "Architecture",
  "Memory Collections",
  "Semantic Search",
  "Integrations",
  "CLI Commands",
  "API Reference",
  "FAQ"
];

function CodeBlock({ code, language = "bash" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="relative group my-6 rounded-xl overflow-hidden bg-[#0A140D] border border-[#7CFF8A]/20 shadow-[0_0_20px_rgba(124,255,138,0.05)]">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/5">
        <span className="text-xs text-white/50 font-mono">{language}</span>
        <button onClick={handleCopy} className="text-white/40 hover:text-white transition-colors p-1">
          {copied ? <Check className="w-4 h-4 text-[#7CFF8A]" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <div className="p-4 overflow-x-auto text-sm font-mono text-[#65FF9A]/90 whitespace-pre">
        {code}
      </div>
    </div>
  );
}

function DocsContent({ active }: { active: string }) {
  // A placeholder mapping for content to make the page functional
  return (
    <div className="prose prose-invert max-w-none animate-fade-up">
      <h1 className="text-4xl font-semibold tracking-tight text-white mb-4">{active}</h1>
      <p className="text-lg text-white/60 mb-8 leading-relaxed">
        This is the official RecallOS documentation for {active.toLowerCase()}.
      </p>
      
      {active === "Introduction" && (
        <>
          <p className="text-white/80">
            RecallOS is the definitive memory layer for AI agents. It provides persistent storage, semantic indexing, and sub-50ms retrieval capabilities to any language model.
          </p>
          <div className="my-8 p-6 rounded-2xl bg-[#7CFF8A]/10 border border-[#7CFF8A]/20">
            <h3 className="text-xl font-medium text-[#7CFF8A] mb-2">Why RecallOS?</h3>
            <ul className="list-disc pl-5 text-white/80 space-y-2">
              <li>Eliminate token limits holding back your context window</li>
              <li>Give agents persistent identity and memory</li>
              <li>Share knowledge graphs across entire teams</li>
            </ul>
          </div>
        </>
      )}

      {active === "Installation" && (
        <>
          <p className="text-white/80">Install the RecallOS core engine via Python or Node.js depending on your stack.</p>
          <CodeBlock code="pip install recallos\nrecallos init" />
          <p className="text-white/80">Once installed, your vector database is connected locally.</p>
        </>
      )}

      {active === "Quickstart" && (
        <>
          <p className="text-white/80">Initialize a memory collection and insert your first memory.</p>
          <CodeBlock language="python" code={`from recallos import MemoryClient\n\nclient = MemoryClient()\ncollection = client.create_collection("project_alpha")\n\ncollection.insert(\n    text="We decided to use PostgreSQL for the primary database.",\n    metadata={"author": "team_lead", "topic": "architecture"}\n)`} />
        </>
      )}

      {/* Fallback dummy content */}
      {!["Introduction", "Installation", "Quickstart"].includes(active) && (
        <p className="text-white/80">
          The documentation for {active} is currently being updated for RecallOS v2 Premium. Check back soon for detailed guides, API specifications, and architectural diagrams.
        </p>
      )}
    </div>
  );
}

function DocsPage() {
  const [activeSection, setActiveSection] = useState(sections[0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050A07] text-white selection:bg-[#7CFF8A]/30">
      <BackgroundLayer />
      <Navbar />
      
      <div className="mx-auto max-w-[90rem] px-4 pt-24 lg:flex lg:gap-8">
        
        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center justify-between py-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2 text-sm text-[#7CFF8A] font-medium">
            Docs <ChevronRight className="w-4 h-4 text-white/30" /> {activeSection}
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 bg-white/5 rounded-md border border-white/10">
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Sidebar */}
        <aside className={`lg:w-64 lg:shrink-0 lg:block ${mobileMenuOpen ? 'block' : 'hidden'} lg:h-[calc(100vh-6rem)] lg:sticky top-24 pb-12 pr-4`}>
          {/* Search bar */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input 
              type="text" 
              placeholder="Search docs..." 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-9 pr-4 text-sm text-white placeholder:text-white/40 focus:border-[#7CFF8A]/50 focus:bg-[#7CFF8A]/5 focus:outline-none focus:ring-1 focus:ring-[#7CFF8A]/50 transition-all"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
              <kbd className="hidden sm:inline-block border border-white/20 rounded bg-white/5 px-1.5 text-[10px] text-white/40 font-mono">⌘</kbd>
              <kbd className="hidden sm:inline-block border border-white/20 rounded bg-white/5 px-1.5 text-[10px] text-white/40 font-mono">K</kbd>
            </div>
          </div>

          <nav className="space-y-1">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => {
                  setActiveSection(section);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                  activeSection === section 
                    ? 'bg-[#7CFF8A]/10 text-[#7CFF8A] font-medium border border-[#7CFF8A]/20' 
                    : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {section}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 pb-32 lg:pt-8">
          {/* Breadcrumbs (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 text-sm text-white/40 mb-8 font-medium">
            <span className="hover:text-white transition-colors cursor-pointer">Docs</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#7CFF8A]">{activeSection}</span>
          </div>

          <div className="bg-[#0A140D]/80 border border-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-12 shadow-[0_0_40px_rgba(124,255,138,0.03)]">
            <DocsContent active={activeSection} />
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
}
