import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Github } from "lucide-react";
import { GradientButton } from "./ui/GradientButton";
import { toast } from "sonner";

const GITHUB_URL = "https://github.com/tushar-tomar11/recall-core-memory";

const links = [
  { label: "Features", href: "#features" },
  { label: "Architecture", href: "#architecture" },
  { label: "Benchmarks", href: "#benchmarks" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "/docs", isRoute: true },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const onDownload = () =>
    toast.success("RecallOS download queued", {
      description: "Check your inbox shortly — we'll email a link.",
    });

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3 flex max-w-7xl items-center justify-between px-4">
        <div className="liquid-glass flex w-full items-center justify-between rounded-full px-4 py-2.5">
          <Link to="/" className="flex items-center gap-2" aria-label="RecallOS home">
            <img src="/logo.png" alt="RecallOS Logo" className="h-8 w-auto" />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) =>
              l.isRoute ? (
                <Link
                  key={l.label}
                  to={l.href}
                  className="rounded-full px-3 py-1.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  className="rounded-full px-3 py-1.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              aria-label="View on GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <GradientButton onClick={onDownload} className="hidden md:inline-flex">
              Download RecallOS
            </GradientButton>
            <button
              aria-label="Menu"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white md:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="mx-4 mt-2 md:hidden">
          <div className="liquid-glass rounded-2xl p-3">
            <div className="flex flex-col">
              {links.map((l) =>
                l.isRoute ? (
                  <Link
                    key={l.label}
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                )
              )}
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <GradientButton onClick={onDownload} className="mt-2 w-full justify-center">
                Download RecallOS
              </GradientButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
