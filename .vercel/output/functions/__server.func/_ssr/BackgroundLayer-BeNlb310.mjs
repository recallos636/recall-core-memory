import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { A as AuthContext } from "./router-D11AFA9y.mjs";
import { m as Github, X, M as Menu, J as User, K as LogOut, O as Twitter } from "../_libs/lucide-react.mjs";
import { u as useWalletModal } from "../_libs/@solana/wallet-adapter-react-ui+[...].mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function GradientButton({
  children,
  variant = "primary",
  className,
  ...props
}) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-tight transition-all duration-300 will-change-transform";
  const styles = {
    primary: "text-[#0c0c0c] bg-gradient-to-b from-[#4AFF71] to-[#7CFF8A] shadow-[0_10px_40px_-10px_rgba(101,255,154,0.35),inset_0_1px_0_rgba(255,255,255,0.6)] hover:shadow-[0_18px_50px_-10px_rgba(101,255,154,0.45),inset_0_1px_0_rgba(255,255,255,0.7)] hover:-translate-y-0.5",
    ghost: "text-white/90 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10",
    outline: "text-white border border-white/15 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/30"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: cn(base, styles[variant], className), ...props, children });
}
function useWalletAuth() {
  const context = reactExports.useContext(AuthContext);
  if (!context) {
    throw new Error("useWalletAuth must be used within an AuthProvider");
  }
  return context;
}
function ConnectWalletButton({ className }) {
  const { connected, truncatedAddress, disconnect, connecting } = useWalletAuth();
  const { setVisible } = useWalletModal();
  const [dropdownOpen, setDropdownOpen] = reactExports.useState(false);
  if (connected) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("relative", className), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setDropdownOpen(!dropdownOpen),
          className: "liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-white/90 hover:text-white transition-all hover:bg-white/[0.08]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7CFF8A] opacity-70" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-[#7CFF8A]" })
            ] }),
            truncatedAddress
          ]
        }
      ),
      dropdownOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 top-full mt-2 w-48 rounded-2xl border border-white/10 bg-[#050A07]/90 p-2 shadow-[0_0_40px_rgba(124,255,138,0.1)] backdrop-blur-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              setDropdownOpen(false);
            },
            className: "flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }),
              " View Profile"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-1 h-px w-full bg-white/5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              disconnect();
              setDropdownOpen(false);
            },
            className: "flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm text-red-400/70 transition-colors hover:bg-red-400/10 hover:text-red-400",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
              " Disconnect"
            ]
          }
        )
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    GradientButton,
    {
      onClick: () => setVisible(true),
      className,
      disabled: connecting,
      children: connecting ? "Connecting..." : "Connect Wallet"
    }
  );
}
const GITHUB_URL$1 = "https://github.com/recallos636/recall-core-memory";
const links = [
  { label: "Features", href: "#features" },
  { label: "Architecture", href: "#architecture" },
  { label: "Benchmarks", href: "#benchmarks" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "/docs", isRoute: true }
];
function Navbar() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "fixed inset-x-0 top-0 z-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-3 flex max-w-7xl items-center justify-between px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liquid-glass flex w-full items-center justify-between rounded-full px-4 py-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center gap-2", "aria-label": "RecallOS home", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logo.png", alt: "RecallOS Logo", className: "h-8 w-auto" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-1 md:flex", children: links.map(
        (l) => l.isRoute ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: l.href,
            className: "rounded-full px-3 py-1.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white",
            children: l.label
          },
          l.label
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: l.href,
            className: "rounded-full px-3 py-1.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white",
            children: l.label
          },
          l.label
        )
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: GITHUB_URL$1,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hidden md:grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/70 transition-colors hover:bg-white/5 hover:text-white",
            "aria-label": "View on GitHub",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ConnectWalletButton, { className: "hidden md:inline-flex" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            "aria-label": "Menu",
            className: "grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white md:hidden",
            onClick: () => setOpen((v) => !v),
            children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4 w-4" })
          }
        )
      ] })
    ] }) }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-4 mt-2 md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liquid-glass rounded-2xl p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
      links.map(
        (l) => l.isRoute ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: l.href,
            onClick: () => setOpen(false),
            className: "rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5",
            children: l.label
          },
          l.label
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: l.href,
            onClick: () => setOpen(false),
            className: "rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5",
            children: l.label
          },
          l.label
        )
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: GITHUB_URL$1,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }),
            " GitHub"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ConnectWalletButton, { className: "mt-2 w-full justify-center" })
    ] }) }) })
  ] });
}
const GITHUB_URL = "https://github.com/recallos636/recall-core-memory";
const cols = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Architecture", href: "#architecture" },
      { label: "Benchmarks", href: "#benchmarks" },
      { label: "Pricing", href: "#pricing" }
    ]
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "/docs", isRoute: true },
      { label: "Downloads", href: "/downloads", isRoute: true },
      { label: "GitHub", href: GITHUB_URL, external: true },
      { label: "Changelog", href: "#" },
      { label: "Status", href: "#" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
      { label: "DPA", href: "#" }
    ]
  }
];
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative mx-auto mt-32 max-w-7xl px-4 pb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liquid-glass rounded-3xl p-8 sm:p-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(4,1fr)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logo.png", alt: "RecallOS Logo", className: "h-7 w-auto" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-semibold text-white tracking-tight", children: "RecallOS" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xs text-sm text-white/55", children: "The memory layer for AI. Persistent, semantic, model agnostic." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: GITHUB_URL,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-[#7CFF8A]/30 hover:text-[#7CFF8A] hover:bg-[#7CFF8A]/5",
              "aria-label": "GitHub",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://twitter.com/RecallOS",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-[#7CFF8A]/30 hover:text-[#7CFF8A] hover:bg-[#7CFF8A]/5",
              "aria-label": "Twitter",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Twitter, { className: "h-4 w-4" })
            }
          )
        ] })
      ] }),
      cols.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.18em] text-white/40", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2", children: c.links.map(
          (l) => l.isRoute ? /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: l.href, className: "text-sm text-white/70 hover:text-white transition-colors", children: l.label }) }, l.label) : /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              ...l.external ? { target: "_blank", rel: "noopener noreferrer" } : {},
              className: "text-sm text-white/70 hover:text-white transition-colors",
              children: l.label
            }
          ) }, l.label)
        ) })
      ] }, c.title))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 sm:flex-row sm:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-white/40", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " RecallOS. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: GITHUB_URL,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-xs text-white/40 hover:text-[#7CFF8A] transition-colors",
            children: "Star on GitHub ⭐"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/40", children: "Made for builders shipping real agents." })
      ] })
    ] })
  ] }) });
}
function BackgroundLayer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050A07]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes beam-travel {
          0% { transform: translateY(100vh); opacity: 0; }
          10% { opacity: 0.15; }
          90% { opacity: 0.15; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "vertical-guides absolute inset-0 opacity-20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex justify-evenly opacity-40", children: [...Array(12)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "w-[1px] h-[50vh] bg-gradient-to-b from-transparent via-[#7CFF8A] to-transparent",
        style: {
          animation: `beam-travel ${15 + i % 5 * 5}s linear infinite`,
          animationDelay: `${i * 1.5}s`
        }
      },
      i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute -top-1/4 left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 rounded-full blur-[120px] opacity-40 animate-pulse",
        style: {
          background: "radial-gradient(circle, rgba(124, 255, 138, 0.15) 0%, rgba(15, 42, 24, 0.4) 40%, transparent 70%)",
          animationDuration: "8s"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute bottom-[-10%] left-[-10%] h-[800px] w-[800px] rounded-full blur-[100px] opacity-30 pulse-dot",
        style: {
          background: "radial-gradient(circle, rgba(101, 255, 154, 0.1) 0%, rgba(15, 42, 24, 0.6) 50%, transparent 70%)",
          animationDuration: "12s"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute top-[20%] right-[-10%] h-[600px] w-[600px] rounded-full blur-[100px] opacity-20 float-slow",
        style: {
          background: "radial-gradient(circle, rgba(74, 255, 113, 0.15) 0%, transparent 70%)",
          animationDuration: "10s"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "absolute inset-0 h-full w-full opacity-50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "particleGlow", cx: "50%", cy: "50%", r: "50%", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#7CFF8A", stopOpacity: "1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#7CFF8A", stopOpacity: "0" })
      ] }) }),
      [...Array(40)].map((_, i) => {
        const cx = Math.random() * 100;
        const cy = Math.random() * 100;
        const r = Math.random() * 2 + 1;
        const dur = Math.random() * 15 + 10;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "circle",
          {
            cx: `${cx}%`,
            cy: `${cy}%`,
            r,
            fill: "url(#particleGlow)",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "animate",
                {
                  attributeName: "cy",
                  values: `${cy}%; ${cy - 10}%; ${cy}%`,
                  dur: `${dur}s`,
                  repeatCount: "indefinite"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "animate",
                {
                  attributeName: "opacity",
                  values: "0.2; 0.8; 0.2",
                  dur: `${dur / 2}s`,
                  repeatCount: "indefinite"
                }
              )
            ]
          },
          i
        );
      })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 noise-overlay opacity-30 mix-blend-overlay" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050A07] to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050A07] to-transparent" })
  ] });
}
export {
  BackgroundLayer as B,
  ConnectWalletButton as C,
  Footer as F,
  GradientButton as G,
  Navbar as N,
  cn as c,
  useWalletAuth as u
};
