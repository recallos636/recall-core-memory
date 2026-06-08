import { Link } from "@tanstack/react-router";
import { Github, Twitter } from "lucide-react";

const GITHUB_URL = "https://github.com/tushar-tomar11/recall-core-memory";

const cols = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Architecture", href: "#architecture" },
      { label: "Benchmarks", href: "#benchmarks" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "/docs", isRoute: true },
      { label: "GitHub", href: GITHUB_URL, external: true },
      { label: "Changelog", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
      { label: "DPA", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mx-auto mt-32 max-w-7xl px-4 pb-12">
      <div className="liquid-glass rounded-3xl p-8 sm:p-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div>
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="RecallOS Logo" className="h-7 w-auto" />
              <span className="text-lg font-semibold text-white tracking-tight">RecallOS</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/55">
              The memory layer for AI. Persistent, semantic, model agnostic.
            </p>
            {/* Social Links */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-[#7CFF8A]/30 hover:text-[#7CFF8A] hover:bg-[#7CFF8A]/5"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/RecallOS"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-[#7CFF8A]/30 hover:text-[#7CFF8A] hover:bg-[#7CFF8A]/5"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">{c.title}</div>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) =>
                  l.isRoute ? (
                    <li key={l.label}>
                      <Link to={l.href} className="text-sm text-white/70 hover:text-white transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ) : (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="text-sm text-white/70 hover:text-white transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 sm:flex-row sm:items-center">
          <div className="text-xs text-white/40">© {new Date().getFullYear()} RecallOS. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 hover:text-[#7CFF8A] transition-colors"
            >
              Star on GitHub ⭐
            </a>
            <span className="text-xs text-white/40">Made for builders shipping real agents.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
