import { Brain } from "lucide-react";

const cols = [
  { title: "Product", links: ["Features", "Architecture", "Benchmarks", "Pricing"] },
  { title: "Developers", links: ["Docs", "SDK", "Changelog", "Status"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security", "DPA"] },
];

export function Footer() {
  return (
    <footer className="relative mx-auto mt-32 max-w-7xl px-4 pb-12">
      <div className="liquid-glass rounded-3xl p-8 sm:p-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-[#A4F4FD] to-[#00d2ff] text-[#0c0c0c]">
                <Brain className="h-4 w-4" strokeWidth={2.5} />
              </div>
              <span className="text-sm font-medium text-white">RecallOS</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/55">
              The memory layer for AI. Persistent, semantic, model agnostic.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">{c.title}</div>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white/70 hover:text-white">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 sm:flex-row sm:items-center">
          <div className="text-xs text-white/40">© {new Date().getFullYear()} RecallOS. All rights reserved.</div>
          <div className="text-xs text-white/40">Made for builders shipping real agents.</div>
        </div>
      </div>
    </footer>
  );
}
