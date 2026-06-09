import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { B as BackgroundLayer, N as Navbar, F as Footer, C as ConnectWalletButton, G as GradientButton, c as cn } from "./BackgroundLayer-BeNlb310.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { t as toast, T as Toaster$1 } from "../_libs/sonner.mjs";
import "../_libs/bs58.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { B as BookOpen, m as Github, g as Check, l as Copy, n as Star, o as Folder, D as Database, F as FileText, p as FlaskConical, c as CodeXml, U as Users, S as Search, q as Bookmark, r as Clock, s as Sparkles, N as Network, X, t as Type, a as Layers, W as Workflow, i as Cpu, u as MessagesSquare, k as Brain, v as FolderGit2, w as BotMessageSquare, x as Repeat, y as ChartColumn, z as Code, E as Boxes, T as Terminal, H as ExternalLink, A as ArrowRight, I as ChartLine } from "../_libs/lucide-react.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "./router-D11AFA9y.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/solana__wallet-adapter-react.mjs";
import "../_libs/solana__web3.js.mjs";
import "buffer";
import "../_libs/noble__curves.mjs";
import "../_libs/noble__hashes.mjs";
import "node:crypto";
import "../_libs/bn.js.mjs";
import "../_libs/borsh.mjs";
import "../_libs/text-encoding-utf-8.mjs";
import "../_libs/solana__buffer-layout.mjs";
import "../_libs/solana__codecs-numbers.mjs";
import "../_libs/solana__errors.mjs";
import "../_libs/solana__codecs-core.mjs";
import "util";
import "http";
import "https";
import "../_libs/superstruct.mjs";
import "../_libs/jayson.mjs";
import "../_libs/uuid.mjs";
import "crypto";
import "../_libs/node-fetch.mjs";
import "stream";
import "url";
import "../_libs/whatwg-url.mjs";
import "../_libs/webidl-conversions.mjs";
import "punycode";
import "../_libs/tr46.mjs";
import "zlib";
import "../_libs/rpc-websockets.mjs";
import "../_libs/ws.mjs";
import "net";
import "tls";
import "events";
import "../_libs/bufferutil.mjs";
import "../_libs/node-gyp-build.mjs";
import "fs";
import "os";
import "path";
import "../_libs/utf-8-validate.mjs";
import "../_libs/eventemitter3.mjs";
import "../_libs/@solana-mobile/wallet-adapter-mobile+[...].mjs";
import "../_libs/@solana-mobile/mobile-wallet-adapter-protocol+[...].mjs";
import "../_libs/solana__codecs-strings.mjs";
import "../_libs/solana__wallet-standard-util.mjs";
import "../_libs/solana__wallet-standard-chains.mjs";
import "../_libs/@solana-mobile/wallet-standard-mobile+[...].mjs";
import "../_libs/qrcode.mjs";
import "../_libs/dijkstrajs.mjs";
import "../_libs/pngjs.mjs";
import "assert";
import "../_libs/@solana/wallet-standard-features+[...].mjs";
import "../_libs/wallet-standard__features.mjs";
import "../_libs/solana__wallet-adapter-base.mjs";
import "../_libs/@solana/wallet-standard-wallet-adapter-react+[...].mjs";
import "../_libs/wallet-standard__app.mjs";
import "../_libs/@solana/wallet-standard-wallet-adapter-base+[...].mjs";
import "../_libs/wallet-standard__wallet.mjs";
import "../_libs/@solana/wallet-adapter-react-ui+[...].mjs";
import "../_libs/react-dom.mjs";
import "async_hooks";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/base-x.mjs";
import "../_libs/safe-buffer.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function ShinyText({ children, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("shiny-text inline-block", className), children });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative pt-40 pb-24 sm:pt-48 sm:pb-32 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-center lg:text-left max-w-3xl mx-auto lg:mx-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "liquid-glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-white/70",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7CFF8A] opacity-70" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-[#7CFF8A]" })
              ] }),
              "Now in private beta — v0.9"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.1 },
            className: "liquid-glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-white/90 border border-[#7CFF8A]/30 shadow-[0_0_15px_rgba(124,255,138,0.1)]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#7CFF8A] text-[10px]", children: "●" }),
              " Token Live on Solana"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h1,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.05 },
          className: "text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-7xl md:text-[6.5rem] lg:text-[7rem]",
          children: [
            "Your AI.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShinyText, { children: "Remembers." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.15 },
          className: "mt-7 max-w-xl text-balance text-base leading-relaxed text-white/60 sm:text-lg mx-auto lg:mx-0",
          children: "RecallOS gives AI agents, copilots, and assistants a persistent AI memory layer that survives across conversations, projects, and workflows."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.25 },
          className: "mt-9 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ConnectWalletButton, { className: "px-6 py-3 text-[15px] w-full sm:w-auto justify-center" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/docs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GradientButton, { variant: "outline", className: "px-6 py-3 text-[15px] w-full sm:w-auto justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-4 w-4" }),
              " View Documentation"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/recallos636/recall-core-memory", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GradientButton, { variant: "outline", className: "px-6 py-3 text-[15px] w-full sm:w-auto justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }),
              " View on GitHub"
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1, delay: 0.45 },
          className: "mt-8 text-xs uppercase tracking-[0.18em] text-white/40",
          children: "Compatible with Claude · GPT · Gemini · DeepSeek · Qwen · Llama · Mistral"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 1.2, delay: 0.3 },
        className: "flex-1 relative hidden lg:flex items-center justify-center w-full max-w-[650px] min-w-[500px]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[#7CFF8A]/15 blur-[100px] rounded-full animate-pulse", style: { animationDuration: "6s" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full aspect-square float-slow rounded-[2.5rem] overflow-hidden shadow-[0_0_80px_rgba(124,255,138,0.15)] bg-[#050A07]/40 border border-[#7CFF8A]/20 backdrop-blur-2xl flex items-center justify-center p-6 transition-all duration-[2000ms] hover:scale-[1.02] hover:shadow-[0_0_120px_rgba(124,255,138,0.25)] hover:border-[#7CFF8A]/40 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#7CFF8A]/10 via-transparent to-[#0F2A18]/50 opacity-50 group-hover:opacity-100 transition-opacity duration-1000" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "video",
              {
                src: "/cube.mp4",
                autoPlay: true,
                muted: true,
                loop: true,
                playsInline: true,
                preload: "auto",
                poster: "/cube-poster.png",
                className: "w-full h-full object-contain relative z-10 drop-shadow-[0_0_40px_rgba(124,255,138,0.4)] transition-transform duration-[3000ms] group-hover:scale-105"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "absolute inset-0 h-full w-full opacity-60 pointer-events-none", viewBox: "0 0 100 100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "cubeGlow", cx: "50%", cy: "50%", r: "50%", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#7CFF8A", stopOpacity: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#7CFF8A", stopOpacity: "0" })
            ] }) }),
            [...Array(25)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "circle",
              {
                cx: "50",
                cy: "50",
                r: Math.random() * 0.6 + 0.2,
                fill: "url(#cubeGlow)",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "animateTransform",
                    {
                      attributeName: "transform",
                      type: "translate",
                      values: `0,0; ${(Math.random() - 0.5) * 100},${(Math.random() - 0.5) * 100}`,
                      dur: `${Math.random() * 4 + 4}s`,
                      repeatCount: "indefinite"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "animate",
                    {
                      attributeName: "opacity",
                      values: "1; 0; 1",
                      dur: `${Math.random() * 4 + 4}s`,
                      repeatCount: "indefinite"
                    }
                  )
                ]
              },
              i
            ))
          ] })
        ]
      }
    )
  ] }) }) });
}
const collections = [
  { name: "Projects", count: 24, icon: Folder },
  { name: "Knowledge Base", count: 318, icon: Database },
  { name: "Meeting Notes", count: 47, icon: FileText },
  { name: "Research", count: 92, icon: FlaskConical },
  { name: "Code Context", count: 156, icon: CodeXml },
  { name: "Customer Data", count: 63, icon: Users }
];
const memories = [
  {
    id: "m1",
    title: "Product Strategy Meeting",
    collection: "Meeting Notes",
    preview: "Q3 roadmap aligned around agent retrieval and pricing v2…",
    date: "2h ago",
    tags: ["strategy", "Q3", "agents"],
    importance: 92,
    similarity: 0.94,
    summary: "The team aligned on shipping the agent retrieval API by Q3 and re-pricing the Builder tier. Marketing will lead an external launch the week of Sept 23. Engineering owns the latency target of <40ms p95.",
    facts: [
      "Launch window: week of Sept 23",
      "Builder tier moves to $19/mo",
      "Latency target: <40ms p95",
      "Owner: @maya (product), @jonas (eng)"
    ],
    entities: ["Maya Chen", "Jonas Reuter", "Builder Tier", "Retrieval API"],
    timeline: [
      { t: "00:04", e: "Kickoff & objectives" },
      { t: "00:18", e: "Pricing v2 proposal" },
      { t: "00:39", e: "Latency budget review" },
      { t: "00:51", e: "Action items locked" }
    ],
    related: ["Launch Checklist", "Roadmap Planning", "AI Agent Instructions"]
  },
  {
    id: "m2",
    title: "Launch Checklist",
    collection: "Projects",
    preview: "Pre-launch tasks across eng, design, growth, and legal…",
    date: "Yesterday",
    tags: ["launch", "ops"],
    importance: 87,
    similarity: 0.88,
    summary: "Comprehensive pre-launch checklist covering engineering readiness, design QA, growth distribution, and legal sign-off. Currently 38 of 52 items complete.",
    facts: [
      "38 / 52 items complete",
      "Critical path: changelog + status page",
      "Owner: @ops"
    ],
    entities: ["Status page", "Changelog", "Press kit"],
    timeline: [
      { t: "T-14d", e: "Final eng freeze" },
      { t: "T-7d", e: "Design QA pass" },
      { t: "T-1d", e: "Press embargo lifts" }
    ],
    related: ["Product Strategy Meeting", "Roadmap Planning"]
  },
  {
    id: "m3",
    title: "Research Notes — Long Context",
    collection: "Research",
    preview: "Comparing rolling buffers vs vector recall for 200k+ tokens…",
    date: "2 days ago",
    tags: ["research", "context"],
    importance: 78,
    similarity: 0.81,
    summary: "Vector recall outperforms rolling buffers above 32k tokens on factual recall benchmarks. Memory ranking with importance scoring lifts answer quality by 14%.",
    facts: [
      "Rolling buffer ceiling ≈ 32k tokens",
      "Importance score lift: +14%",
      "Best chunker: semantic + heading"
    ],
    entities: ["Vector recall", "Importance score", "Semantic chunker"],
    timeline: [
      { t: "Day 1", e: "Benchmark setup" },
      { t: "Day 2", e: "Eval runs (Qwen, Llama)" },
      { t: "Day 3", e: "Findings written up" }
    ],
    related: ["AI Agent Instructions", "Product Strategy Meeting"]
  },
  {
    id: "m4",
    title: "AI Agent Instructions",
    collection: "Knowledge Base",
    preview: "System prompt template + retrieval policy for sales copilot…",
    date: "3 days ago",
    tags: ["agent", "prompt"],
    importance: 81,
    similarity: 0.83,
    summary: "Operational instructions for the sales copilot agent: retrieval policy, refusal patterns, tone, and tools. Updated to include RecallOS memory tools.",
    facts: [
      "Tool list: recall, store, forget, summarize",
      "Refusal policy: legal + PII",
      "Tone: confident, concise"
    ],
    entities: ["Sales Copilot", "RecallOS Tools", "PII policy"],
    timeline: [
      { t: "v1", e: "Initial draft" },
      { t: "v2", e: "Added memory tools" },
      { t: "v3", e: "Refined refusal patterns" }
    ],
    related: ["Customer Feedback", "Research Notes — Long Context"]
  },
  {
    id: "m5",
    title: "Customer Feedback Digest",
    collection: "Customer Data",
    preview: "Top themes: persistence, control, and pricing clarity…",
    date: "4 days ago",
    tags: ["voice-of-customer"],
    importance: 74,
    similarity: 0.76,
    summary: "Across 312 conversations this week, customers asked most about cross-session memory persistence, granular forget controls, and clearer pricing tiers.",
    facts: [
      "312 conversations analyzed",
      "Top theme: persistence (41%)",
      "NPS movement: +6 WoW"
    ],
    entities: ["Persistence", "Forget controls", "Pricing"],
    timeline: [
      { t: "Mon", e: "Tickets aggregated" },
      { t: "Wed", e: "Themes clustered" },
      { t: "Fri", e: "Digest shared with PM" }
    ],
    related: ["Roadmap Planning", "Launch Checklist"]
  },
  {
    id: "m6",
    title: "Roadmap Planning — H2",
    collection: "Projects",
    preview: "Themes: agents, memory governance, on-device recall…",
    date: "1 week ago",
    tags: ["roadmap"],
    importance: 90,
    similarity: 0.79,
    summary: "H2 themes: agent SDK, on-device recall, and governance controls. Two bets per quarter, weekly bet review on Thursdays.",
    facts: [
      "Bets per quarter: 2",
      "Review cadence: weekly",
      "Cross-team owner: @nora"
    ],
    entities: ["Agent SDK", "On-device recall", "Governance"],
    timeline: [
      { t: "Q3", e: "Agent SDK alpha" },
      { t: "Q4", e: "On-device recall preview" }
    ],
    related: ["Product Strategy Meeting", "Research Notes — Long Context"]
  }
];
function MemoryTerminal() {
  const [collection, setCollection] = reactExports.useState("All");
  const [query, setQuery] = reactExports.useState("");
  const [selectedId, setSelectedId] = reactExports.useState(memories[0].id);
  const filtered = reactExports.useMemo(() => {
    return memories.filter((m) => {
      const matchesCol = collection === "All" || m.collection === collection;
      const q = query.trim().toLowerCase();
      const matchesQ = !q || m.title.toLowerCase().includes(q) || m.preview.toLowerCase().includes(q) || m.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCol && matchesQ;
    });
  }, [collection, query]);
  const selected = memories.find((m) => m.id === selectedId) ?? memories[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liquid-glass-strong relative overflow-hidden rounded-3xl p-2 sm:p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-white/5 px-3 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-white/15" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-white/15" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-white/15" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-white/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[#7CFF8A]" }),
        "recallos · memory terminal"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-white/40", children: "v0.9.2" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-2 p-2 lg:grid-cols-[240px_minmax(0,1fr)_360px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liquid-glass rounded-2xl p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 px-2 text-[11px] uppercase tracking-[0.18em] text-white/40", children: "Memory Collections" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setCollection("All"),
            className: `mb-1 flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-sm transition-colors ${collection === "All" ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5" }),
                " All Memories"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-white/40", children: memories.length })
            ]
          }
        ),
        collections.map(({ name, count, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setCollection(name),
            className: `mb-1 flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-sm transition-colors ${collection === name ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5" }),
                " ",
                name
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-white/40", children: count })
            ]
          },
          name
        ))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liquid-glass rounded-2xl p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: query,
              onChange: (e) => setQuery(e.target.value),
              placeholder: "Search memory…",
              className: "w-full rounded-xl border border-white/10 bg-white/[0.03] py-2.5 pl-9 pr-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#7CFF8A]/50"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: filtered.map((m) => {
            const active = m.id === selectedId;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.button,
              {
                layout: true,
                initial: { opacity: 0, y: 6 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -6 },
                onClick: () => setSelectedId(m.id),
                className: `group flex items-start gap-3 rounded-xl border px-3 py-2.5 text-left transition-all ${active ? "border-[#7CFF8A]/40 bg-[#7CFF8A]/[0.06]" : "border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "h-3.5 w-3.5 text-white/70" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-sm font-medium text-white", children: m.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 text-[11px] text-white/40", children: m.date })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-xs text-white/55", children: m.preview }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 flex flex-wrap gap-1", children: m.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-white/5 px-1.5 py-0.5 text-[10px] text-white/55", children: t }, t)) })
                  ] })
                ]
              },
              m.id
            );
          }) }),
          filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-8 text-center text-sm text-white/50", children: "No memories match that query." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liquid-glass rounded-2xl p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center justify-between px-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.18em] text-white/40", children: "Selected Memory" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[11px] text-white/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
            " ",
            selected.date
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-1 text-base font-medium text-white", children: selected.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-1 text-xs text-white/50", children: selected.collection }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 rounded-xl border border-[#7CFF8A]/20 bg-gradient-to-b from-[#7CFF8A]/[0.08] to-transparent p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1.5 flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-[#4AFF71]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
            " AI Summary"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] leading-relaxed text-white/80", children: selected.summary })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Key Facts", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: selected.facts.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2 text-[12.5px] text-white/75", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#7CFF8A]" }),
          f
        ] }, f)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Entities", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: selected.entities.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] text-white/75", children: e }, e)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Timeline", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "relative space-y-2 border-l border-white/10 pl-3", children: selected.timeline.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative text-[12px] text-white/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[7px] top-1.5 h-1.5 w-1.5 rounded-full bg-[#4AFF71]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/45", children: t.t }),
          " — ",
          t.e
        ] }, t.t)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Related Memories", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-1", children: selected.related.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-md px-1.5 py-1 text-[12.5px] text-white/75 hover:bg-white/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Network, { className: "h-3 w-3 text-white/40" }),
          " ",
          r
        ] }, r)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-2 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Similarity", value: `${(selected.similarity * 100).toFixed(1)}%` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { label: "Importance", value: `${selected.importance}/100` })
        ] })
      ] })
    ] })
  ] }) });
}
function Section({ title, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1.5 px-1 text-[11px] uppercase tracking-[0.18em] text-white/40", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-1", children })
  ] });
}
function Metric({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-white/10 bg-white/[0.03] p-2.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.18em] text-white/40", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-sm font-medium text-white", children: value })
  ] });
}
function TokenStrip() {
  const [copied, setCopied] = reactExports.useState(false);
  const contractAddress = "8HGYvXMLjW9hd1JXbHZQYqRps7DiPS1H3HWyxm7Mpump";
  const shortAddress = `${contractAddress.slice(0, 4)}...${contractAddress.slice(-4)}`;
  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative mx-auto max-w-5xl px-4 mt-8 sm:mt-12 mb-20 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay: 0.3 },
      className: "liquid-glass relative overflow-hidden rounded-2xl p-4 sm:p-5 border border-[#7CFF8A]/20 shadow-[0_0_40px_rgba(124,255,138,0.1)] flex flex-col md:flex-row items-center justify-between gap-4",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[#7CFF8A]/5 via-transparent to-[#7CFF8A]/5 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7CFF8A] opacity-70" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-[#7CFF8A]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-medium whitespace-nowrap", children: "RecallOS Token Live" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-white/[0.03] border border-white/5 rounded-lg px-3 py-1.5 w-full sm:w-auto justify-between sm:justify-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/40", children: "CA:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-white/80 font-mono tracking-wider", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden sm:inline", children: [
                contractAddress.slice(0, 8),
                "...",
                contractAddress.slice(-6)
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: shortAddress })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 w-full sm:w-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handleCopy,
                className: "flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-white transition-colors",
                children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5 text-[#7CFF8A]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#7CFF8A]", children: "Copied" })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3.5 h-3.5 text-white/70" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Copy CA" })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://pump.fun/coin/8HGYvXMLjW9hd1JXbHZQYqRps7DiPS1H3HWyxm7Mpump",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#7CFF8A]/10 hover:bg-[#7CFF8A]/20 border border-[#7CFF8A]/20 text-xs font-medium text-[#7CFF8A] transition-colors",
                children: "Pump.fun"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://dexscreener.com/solana/8HGYvXMLjW9hd1JXbHZQYqRps7DiPS1H3HWyxm7Mpump",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-white transition-colors",
                children: "DexScreener"
              }
            )
          ] })
        ] })
      ]
    }
  ) });
}
function FloatingTokenWidget() {
  const [isVisible, setIsVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem("recallos_token_widget_dismissed");
      if (!dismissed) {
        setIsVisible(true);
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("recallos_token_widget_dismissed", "true");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isVisible && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 50, scale: 0.9 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: 20, scale: 0.9 },
      transition: { duration: 0.4, type: "spring", stiffness: 200, damping: 20 },
      className: "fixed bottom-6 right-6 z-50 hidden lg:block",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liquid-glass relative overflow-hidden rounded-2xl p-4 border border-[#7CFF8A]/30 shadow-[0_10px_40px_rgba(124,255,138,0.15)] flex flex-col gap-3 min-w-[220px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#7CFF8A]/10 to-transparent pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7CFF8A] opacity-70" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-[#7CFF8A]" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-[#7CFF8A]", children: "LIVE" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-white", children: "RecallOS Token" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleDismiss,
              className: "text-white/40 hover:text-white transition-colors",
              "aria-label": "Dismiss",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://dexscreener.com/solana/8HGYvXMLjW9hd1JXbHZQYqRps7DiPS1H3HWyxm7Mpump",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "relative z-10 flex items-center justify-center gap-2 w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-medium text-white transition-all hover:border-[#7CFF8A]/30 group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChartLine, { className: "w-3.5 h-3.5 text-[#7CFF8A] group-hover:scale-110 transition-transform" }),
              "View Chart"
            ]
          }
        )
      ] })
    }
  ) });
}
function CountUp({
  to,
  duration = 2e3,
  suffix = "",
  prefix = "",
  decimals = 0
}) {
  const [val, setVal] = reactExports.useState(0);
  const ref = reactExports.useRef(null);
  const started = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (t) => {
              const p = Math.min(1, (t - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(to * eased);
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        }
      },
      { threshold: 0.3 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to, duration]);
  const formatted = val.toLocaleString(void 0, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    prefix,
    formatted,
    suffix
  ] });
}
const stats = [
  { label: "GitHub Stars", to: 14200, suffix: "+" },
  { label: "Developers", to: 9800, suffix: "+" },
  { label: "Projects", to: 2400, suffix: "+" },
  { label: "Memory Entries Indexed", to: 38, suffix: "M+" }
];
function SocialProof() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative mx-auto mt-24 max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liquid-glass grid grid-cols-2 gap-px overflow-hidden rounded-3xl sm:grid-cols-4", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0c0c0c]/30 px-6 py-8 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-semibold tracking-tight text-white sm:text-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { to: s.to, suffix: s.suffix }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs uppercase tracking-[0.18em] text-white/45", children: s.label })
  ] }, s.label)) }) });
}
function GlassCard({
  children,
  className,
  strong = false,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(
        strong ? "liquid-glass-strong" : "liquid-glass",
        "relative overflow-hidden",
        className
      ),
      ...props,
      children
    }
  );
}
const pains = [
  "AI forgets everything after each conversation",
  "Context disappears between sessions",
  "Projects lose continuity and momentum",
  "Teams repeat themselves endlessly",
  "Agents restart from zero every time"
];
function Problem() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative mx-auto mt-32 max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "The problem", title: "AI has an amnesia problem" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5", children: pains.map((body, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "group relative overflow-hidden p-6 border-red-500/20 hover:border-red-500/40 transition-colors fade-up", style: { animationDelay: `${i * 100}ms` }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-red-500/5 opacity-0 transition-opacity group-hover:opacity-100" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-500/10 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.2)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium leading-relaxed text-white/90", children: body })
    ] }, i)) })
  ] });
}
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: center ? "mx-auto max-w-3xl text-center" : "max-w-3xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.22em] text-[#7CFF8A]", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl", children: title }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-2xl text-balance text-white/60", children: subtitle })
  ] });
}
const items$1 = [
  "Store every conversation permanently",
  "Maintain full project context",
  "Build cumulative knowledge bases",
  "Share memory across team members",
  "Give agents persistent intelligence"
];
function Solution() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative mx-auto mt-32 max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "The solution",
        title: "Persistent memory for every AI",
        subtitle: "RecallOS creates a unified memory layer that stores, indexes, and retrieves information across every conversation, project, and workflow."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5", children: items$1.map((body, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "group relative overflow-hidden p-6 border-[#7CFF8A]/20 hover:border-[#7CFF8A]/40 transition-colors fade-up", style: { animationDelay: `${i * 100}ms` }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[#7CFF8A]/5 opacity-0 transition-opacity group-hover:opacity-100" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#7CFF8A]/10 text-[#7CFF8A] shadow-[0_0_15px_rgba(124,255,138,0.2)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium leading-relaxed text-white/90", children: body })
    ] }, i)) })
  ] });
}
const nodes = [
  { label: "User Input", icon: Type, sub: "Prompt or signal" },
  { label: "Memory Layer", icon: Layers, sub: "Capture & route" },
  { label: "Embedding Engine", icon: Workflow, sub: "Encode meaning" },
  { label: "Vector Database", icon: Database, sub: "Index + store" },
  { label: "Retrieval Layer", icon: Sparkles, sub: "Rank + select" },
  { label: "AI Model", icon: Cpu, sub: "Reason + generate" },
  { label: "Response", icon: MessagesSquare, sub: "Back to user" }
];
function Architecture() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "architecture", className: "relative mx-auto mt-32 max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Architecture",
        title: "A single pipeline for memory and intelligence.",
        subtitle: "From signal to response — every step instrumented, observable, and swappable."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto mt-14 max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#7CFF8A]/40 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "absolute left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#7CFF8A] shadow-[0_0_24px_8px_rgba(101,255,154,0.35)]",
          animate: { top: ["0%", "100%"] },
          transition: { duration: 5, repeat: Infinity, ease: "linear" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex flex-col gap-5", children: nodes.map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.4 },
          transition: { duration: 0.5, delay: i * 0.05 },
          className: `liquid-glass flex w-full items-center gap-4 rounded-2xl p-4 sm:w-[60%] ${i % 2 === 0 ? "sm:self-start" : "sm:self-end"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#7CFF8A]/20 to-[#0F2A18]/40 text-[#4AFF71]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(n.icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-white", children: n.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-white/50", children: n.sub })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-[0.2em] text-white/30", children: [
              "step ",
              String(i + 1).padStart(2, "0")
            ] })
          ]
        },
        n.label
      )) })
    ] })
  ] });
}
const features = [
  { icon: Brain, title: "Persistent memory", body: "Long-lived storage that survives sessions, processes, and deploys." },
  { icon: Search, title: "Semantic search", body: "Meaning-aware retrieval powered by hybrid vector + keyword indexes." },
  { icon: Sparkles, title: "Context retrieval", body: "Adaptive context windows tuned per model and per task." },
  { icon: FolderGit2, title: "Project knowledge", body: "Scope memory by project, customer, or environment." },
  { icon: BotMessageSquare, title: "Agent memory", body: "Drop-in tools your agents can call to recall, store, or forget." },
  { icon: Repeat, title: "Cross-session recall", body: "Pick up exactly where you — or your agent — left off." },
  { icon: ChartColumn, title: "Memory ranking", body: "Importance and recency scoring keeps the right facts on top." },
  { icon: Code, title: "Open source", body: "Run RecallOS locally, on prem, or as a managed service." },
  { icon: Boxes, title: "Model agnostic", body: "Works with any LLM — closed, open, or self-hosted." }
];
function Features() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "features", className: "relative mx-auto mt-32 max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Features",
        title: "Everything an agent needs to actually remember."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: features.map(({ icon: Icon, title, body }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "group p-6 transition-transform duration-300 hover:-translate-y-0.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-xl bg-white/[0.04] text-[#4AFF71] transition-colors group-hover:bg-[#7CFF8A]/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 text-base font-medium tracking-tight text-white", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm leading-relaxed text-white/55", children: body })
    ] }, title)) })
  ] });
}
const items = [
  { name: "Claude", slug: "anthropic", description: "Anthropic's reasoning workhorse.", status: "Connected", hue: "from-[#7CFF8A]/30 to-[#0F2A18]/40" },
  { name: "ChatGPT", slug: "openai", description: "OpenAI multimodal series.", status: "Connected", hue: "from-[#65FF9A]/30 to-[#0F2A18]/40" },
  { name: "Gemini", slug: "googlegemini", description: "Google's long-context family.", status: "Connected", hue: "from-[#4AFF71]/30 to-[#0F2A18]/40" },
  { name: "DeepSeek", slug: "deepseek", description: "High-throughput open weights.", status: "Available", hue: "from-[#7CFF8A]/20 to-[#050A07]/40" },
  { name: "Qwen", slug: "alibabacloud", description: "Alibaba's multilingual stack.", status: "Available", hue: "from-[#65FF9A]/20 to-[#050A07]/40" },
  { name: "Llama", slug: "meta", description: "Meta's open-weight backbone.", status: "Available", hue: "from-[#4AFF71]/20 to-[#050A07]/40" },
  { name: "Mistral", slug: "mistral", description: "Compact, fast, Euro-built.", status: "Available", hue: "from-[#7CFF8A]/20 to-[#050A07]/40" },
  { name: "HuggingFace", slug: "huggingface", description: "Inference for any open model.", status: "Available", hue: "from-[#65FF9A]/20 to-[#050A07]/40" }
];
function Integrations() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "integrations", className: "relative mx-auto mt-32 max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Integrations",
        title: "Plug RecallOS into the model you already use.",
        subtitle: "One memory layer, every model. Switch providers without losing a single thought."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: items.map((i, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "group relative overflow-hidden p-5 border-[#7CFF8A]/20 hover:border-[#7CFF8A]/40 transition-colors fade-up", style: { animationDelay: `${index * 50}ms` }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[#7CFF8A]/5 opacity-0 transition-opacity group-hover:opacity-100" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${i.hue} text-base font-semibold shadow-[0_0_15px_rgba(124,255,138,0.15)] group-hover:shadow-[0_0_20px_rgba(124,255,138,0.3)] transition-shadow`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: i.slug === "mistral" ? "https://cdn.brandfetch.io/mistral.ai/w/400/h/400/icon" : `https://cdn.simpleicons.org/${i.slug}/white`,
            alt: i.name,
            className: "h-6 w-6 object-contain",
            onError: (e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.parentElement.innerHTML = `<span class="text-white">${i.name[0]}</span>`;
            }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: `rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] ${i.status === "Connected" ? "border-[#7CFF8A]/40 bg-[#7CFF8A]/10 text-[#7CFF8A]" : "border-white/10 bg-white/[0.04] text-white/55"}`,
            children: i.status
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 text-base font-medium tracking-tight text-white relative z-10", children: i.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm leading-relaxed text-white/60 relative z-10", children: i.description })
    ] }, i.name)) })
  ] });
}
const GITHUB_URL = "https://github.com/recallos636/recall-core-memory";
const commands = [
  { cmd: "pip install recallos", out: "Successfully installed recallos" },
  { cmd: "recallos init", out: "✓ memory vault created\n✓ embeddings initialized\n✓ vector database connected\n✓ retrieval engine online\n✓ memory graph generated" },
  { cmd: "recallos memory create", out: "✓ memory collection active" }
];
function Installation() {
  const [copied, setCopied] = reactExports.useState(false);
  const [step, setStep] = reactExports.useState(0);
  const [text, setText] = reactExports.useState("");
  const [isTyping, setIsTyping] = reactExports.useState(true);
  reactExports.useEffect(() => {
    if (step >= commands.length) return;
    let currentText = "";
    const targetText = commands[step].cmd;
    let i = 0;
    setIsTyping(true);
    const interval = setInterval(() => {
      currentText += targetText[i];
      setText(currentText);
      i++;
      if (i >= targetText.length) {
        clearInterval(interval);
        setIsTyping(false);
        setTimeout(() => {
          setStep((s) => s + 1);
          setText("");
        }, 1500);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [step]);
  const copyInstall = () => {
    navigator.clipboard.writeText("pip install recallos");
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative mx-auto mt-32 max-w-5xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Installation",
        title: "Build your memory layer.",
        subtitle: "One command to install. One command to initialize. Your knowledge becomes persistent forever."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 relative group animate-fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-1 bg-gradient-to-r from-[#7CFF8A]/30 to-[#4AFF71]/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl bg-[#050A07]/90 border border-[#7CFF8A]/20 backdrop-blur-xl overflow-hidden shadow-[0_0_40px_rgba(124,255,138,0.1)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-3 rounded-full bg-red-500/80" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-3 rounded-full bg-yellow-500/80" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-3 rounded-full bg-green-500/80" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-white/40 font-mono", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { className: "h-3.5 w-3.5" }),
            "bash"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: copyInstall,
              className: "flex items-center justify-center h-7 w-7 rounded-md hover:bg-white/10 text-white/50 hover:text-white transition-colors",
              title: "Copy install command",
              children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5 text-[#7CFF8A]" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3.5 w-3.5" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 font-mono text-sm sm:text-base leading-relaxed min-h-[320px]", children: [
          commands.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mb-4 ${i > step ? "hidden" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#7CFF8A] shrink-0", children: "~" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white", children: [
                i === step ? text : c.cmd,
                i === step && isTyping && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-2 h-4 ml-1 bg-[#7CFF8A] animate-pulse align-middle" })
              ] })
            ] }),
            i < step && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 ml-5 text-[#65FF9A]/70 whitespace-pre-line", children: c.out })
          ] }, i)),
          step >= commands.length && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#7CFF8A]", children: "~" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-2 h-4 bg-[#7CFF8A] animate-pulse align-middle" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex items-center justify-center gap-4 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: GITHUB_URL,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/60 transition-all hover:border-[#7CFF8A]/30 hover:text-[#7CFF8A] hover:bg-[#7CFF8A]/5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }),
          "View source on GitHub"
        ]
      }
    ) })
  ] });
}
const metrics = [
  { label: "Memory Accuracy", value: 96.4, suffix: "%", bar: 96 },
  { label: "Retrieval Speed", value: 38, suffix: " ms", bar: 92, hint: "p95" },
  { label: "Context Coverage", value: 91.2, suffix: "%", bar: 91 },
  { label: "Latency Overhead", value: 12, suffix: " ms", bar: 88 },
  { label: "Token Savings", value: 47, suffix: "%", bar: 84 }
];
function Benchmarks() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "benchmarks", className: "relative mx-auto mt-32 max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Benchmarks",
        title: "Built for production. Measured in production.",
        subtitle: "Independent runs across 1.2B tokens of real workloads."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid gap-4 lg:grid-cols-[1.4fr_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { strong: true, className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-white/70", children: "Quality & performance" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.18em] text-white/40", children: "RecallOS v0.9" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: metrics.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1.5 flex items-baseline justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-white/80", children: [
              m.label,
              m.hint && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1.5 text-white/40", children: [
                "· ",
                m.hint
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { to: m.value, suffix: m.suffix, decimals: m.value % 1 !== 0 ? 1 : 0 }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full overflow-hidden rounded-full bg-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { width: 0 },
              whileInView: { width: `${m.bar}%` },
              viewport: { once: true, amount: 0.5 },
              transition: { duration: 1.4, ease: "easeOut" },
              className: "h-full rounded-full bg-gradient-to-r from-[#7CFF8A] to-[#4AFF71] shadow-[0_0_24px_rgba(101,255,154,0.25)]"
            }
          ) })
        ] }, m.label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 text-sm text-white/70", children: "Live operation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Queries / sec", value: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { to: 12480 }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Memories indexed", value: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { to: 38, suffix: "M" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Active agents", value: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { to: 1842 }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Uptime", value: "99.99%" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.18em] text-white/40", children: "Reliability" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-white/70", children: "Multi-region replication, point-in-time recovery, and per-tenant memory isolation by default." })
        ] })
      ] })
    ] })
  ] });
}
function Stat({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-white/10 bg-white/[0.03] p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.18em] text-white/40", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xl font-semibold text-white", children: value })
  ] });
}
function TokenSection() {
  const [copied, setCopied] = reactExports.useState(false);
  const contractAddress = "8HGYvXMLjW9hd1JXbHZQYqRps7DiPS1H3HWyxm7Mpump";
  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "token", className: "relative mx-auto mt-32 max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Ecosystem",
        title: "RecallOS Token",
        subtitle: "The native asset powering the decentralized memory network."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-14 max-w-4xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liquid-glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-12 border border-[#7CFF8A]/10 shadow-[0_0_80px_rgba(124,255,138,0.03)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#7CFF8A]/5 to-transparent pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col md:flex-row gap-12 items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 w-full space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.15em] text-white/40 mb-1", children: "Network" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7CFF8A] opacity-70" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-[#7CFF8A]" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-medium text-[#7CFF8A]", children: "Solana" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.15em] text-white/40 mb-1", children: "Contract Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm sm:text-base font-mono text-white break-all bg-white/[0.02] p-2 rounded-lg border border-white/5 inline-block", children: contractAddress })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/50 leading-relaxed mt-4 max-w-md", children: "The RecallOS token will enable decentralized memory storage, node operator rewards, and protocol governance. Token holders will receive exclusive access to premium documentation, beta features, and the decentralized indexing network." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full md:w-auto flex flex-col gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.15em] text-white/40 mb-2 md:text-right", children: "Markets & Actions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://pump.fun/coin/8HGYvXMLjW9hd1JXbHZQYqRps7DiPS1H3HWyxm7Mpump",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "group flex items-center justify-between gap-6 rounded-xl border border-[#7CFF8A]/20 bg-[#7CFF8A]/10 hover:bg-[#7CFF8A]/20 transition-colors px-5 py-3 text-sm text-[#7CFF8A] w-full min-w-[220px]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Buy on Pump.fun" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://dexscreener.com/solana/8HGYvXMLjW9hd1JXbHZQYqRps7DiPS1H3HWyxm7Mpump",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "group flex items-center justify-between gap-6 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors px-5 py-3 text-sm text-white w-full min-w-[220px]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "View on DexScreener" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity text-white/50" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: handleCopy,
              className: "group flex items-center justify-between gap-6 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors px-5 py-3 text-sm text-white w-full min-w-[220px]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Copy Contract Address" }),
                copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-[#7CFF8A]" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity text-white/50" })
              ]
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}
const quotes = [
  {
    quote: "RecallOS turned our copilot from amnesiac to actually useful. The latency budget is real and the recall is uncanny.",
    name: "Maya Chen",
    title: "Staff Engineer, infra startup"
  },
  {
    quote: "We replaced 600 lines of brittle context-stitching with a single recall() call. Our agents stopped lying about prior runs.",
    name: "Jonas Reuter",
    title: "Founder, agent platform"
  },
  {
    quote: "It's the first memory product that feels designed for production, not a demo. Importance scoring is a quiet superpower.",
    name: "Nora Akkad",
    title: "Head of AI, fintech"
  },
  {
    quote: "Cross-session recall is the feature I didn't know I was missing. My customer-support agent finally has a memory.",
    name: "Daniel Park",
    title: "Indie builder"
  },
  {
    quote: "Open source, model agnostic, dead simple SDK. RecallOS is what every team should reach for first.",
    name: "Priya Sundar",
    title: "Engineering lead, SaaS"
  },
  {
    quote: "We benchmarked four memory layers. RecallOS won on accuracy and latency at the same time.",
    name: "Lukas Brandt",
    title: "ML researcher"
  }
];
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative mx-auto mt-32 max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Testimonials",
        title: "Trusted by builders shipping real agents."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: quotes.map((q) => /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[15px] leading-relaxed text-white/85", children: [
        '"',
        q.quote,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#4AFF71] to-[#7CFF8A] text-sm font-semibold text-[#0c0c0c]", children: q.name.split(" ").map((p) => p[0]).join("").slice(0, 2) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-white", children: q.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-white/50", children: q.title })
        ] })
      ] })
    ] }, q.name)) })
  ] });
}
const plans = [
  {
    name: "Starter",
    tagline: "For solo builders exploring agent memory.",
    monthly: 0,
    annual: 0,
    features: [
      "100k memory entries",
      "Semantic + keyword recall",
      "Single project",
      "Local + cloud SDK",
      "Community support"
    ],
    cta: "Start free"
  },
  {
    name: "Builder",
    tagline: "For teams shipping production agents.",
    monthly: 19,
    annual: 15,
    features: [
      "10M memory entries",
      "Importance + recency ranking",
      "Unlimited projects",
      "Cross-session recall",
      "Priority email support",
      "Audit log"
    ],
    cta: "Upgrade to Builder",
    highlight: true
  },
  {
    name: "Enterprise",
    tagline: "For platforms with memory at scale.",
    monthly: "Custom",
    annual: "Custom",
    features: [
      "Unlimited memory",
      "Dedicated regions",
      "SSO + SCIM",
      "On-prem / VPC option",
      "99.99% SLA",
      "Solutions engineer"
    ],
    cta: "Contact sales"
  }
];
function Pricing() {
  const [annual, setAnnual] = reactExports.useState(true);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "pricing", className: "relative mx-auto mt-32 max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "pointer-events-none absolute inset-x-0 -top-10 select-none text-center text-[16vw] font-semibold tracking-[-0.06em] text-white/[0.025]",
        children: "RECALLOS"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Pricing", title: "Simple, predictable, scaled to your memory." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liquid-glass inline-flex items-center gap-1 rounded-full p-1 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setAnnual(false),
          className: `rounded-full px-4 py-1.5 transition-colors ${!annual ? "bg-white text-[#0c0c0c]" : "text-white/70"}`,
          children: "Monthly"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setAnnual(true),
          className: `rounded-full px-4 py-1.5 transition-colors ${annual ? "bg-white text-[#0c0c0c]" : "text-white/70"}`,
          children: [
            "Annual ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-[10px] uppercase tracking-[0.18em] text-[#7CFF8A]", children: "−20%" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-10 grid gap-5 lg:grid-cols-3", children: plans.map((p) => {
      const price = annual ? p.annual : p.monthly;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        GlassCard,
        {
          strong: p.highlight,
          className: `p-7 transition-transform duration-300 hover:-translate-y-0.5 ${p.highlight ? "lg:-translate-y-2" : ""}`,
          children: [
            p.highlight && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 inline-flex rounded-full border border-[#7CFF8A]/30 bg-[#7CFF8A]/10 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.18em] text-[#4AFF71]", children: "Most popular" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-medium text-white", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-white/55", children: p.tagline }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex items-baseline gap-1.5", children: typeof price === "number" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-5xl font-semibold tracking-tight text-white", children: [
                "$",
                price
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-white/50", children: [
                "/mo",
                annual && price > 0 ? ", billed yearly" : ""
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl font-semibold tracking-tight text-white", children: "Custom" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              GradientButton,
              {
                variant: p.highlight ? "primary" : "outline",
                className: "mt-6 w-full justify-center py-3",
                onClick: () => toast.success(`${p.name} selected`, {
                  description: "We'll be in touch with next steps."
                }),
                children: p.cta
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-2.5", children: p.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm text-white/75", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-[#7CFF8A]" }),
              f
            ] }, f)) })
          ]
        },
        p.name
      );
    }) })
  ] });
}
function FinalCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative mx-auto mt-32 max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liquid-glass-strong relative overflow-hidden rounded-3xl px-6 py-20 text-center sm:py-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl",
        style: {
          background: "radial-gradient(closest-side, rgba(124,255,138,0.18), rgba(101,255,154,0.10) 45%, transparent 75%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mx-auto max-w-3xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-7xl", children: [
        "Your AI deserves a memory.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shiny-text", children: "Give it one." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ConnectWalletButton, { className: "px-6 py-3 text-[15px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GradientButton, { variant: "outline", className: "px-6 py-3 text-[15px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-4 w-4" }),
          " View Docs"
        ] })
      ] })
    ] })
  ] }) });
}
function Waitlist() {
  const [email, setEmail] = reactExports.useState("");
  const [status, setStatus] = reactExports.useState("idle");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative mx-auto mt-32 mb-20 max-w-4xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden rounded-3xl border border-[#7CFF8A]/20 bg-[#0A140D]/80 p-8 sm:p-16 backdrop-blur-md shadow-[0_0_50px_rgba(124,255,138,0.05)] text-center animate-fade-up", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#7CFF8A]/5 to-[#0F2A18]/20 opacity-50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-[#7CFF8A]/10 blur-[80px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block rounded-full border border-[#7CFF8A]/30 bg-[#7CFF8A]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7CFF8A] mb-6 shadow-[0_0_10px_rgba(124,255,138,0.2)]", children: "Last Call" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold tracking-tight text-white sm:text-5xl mb-8", children: "Subscribe for updates" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleSubmit, className: "mx-auto flex max-w-md flex-col sm:flex-row gap-3", children: status === "success" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center justify-center gap-3 rounded-xl border border-[#7CFF8A]/50 bg-[#7CFF8A]/10 px-6 py-4 text-[#7CFF8A] animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-5 w-5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "You're on the RecallOS waitlist." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "email",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            placeholder: "you@example.com",
            disabled: status === "loading",
            className: "w-full rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-white placeholder:text-white/40 focus:border-[#7CFF8A]/50 focus:bg-[#7CFF8A]/5 focus:outline-none focus:ring-1 focus:ring-[#7CFF8A]/50 transition-all disabled:opacity-50"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            disabled: status === "loading" || !email,
            className: "group flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-black hover:bg-[#7CFF8A] transition-colors disabled:opacity-50 disabled:hover:bg-white",
            children: status === "loading" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-5 animate-spin rounded-full border-2 border-black/20 border-t-black" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "JOIN THE LIST",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
            ] })
          }
        )
      ] }) })
    ] })
  ] }) });
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function RecallOSLanding() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen overflow-x-hidden text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackgroundLayer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TokenStrip, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MemoryTerminal, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SocialProof, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Problem, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Solution, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Architecture, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Features, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Integrations, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Installation, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Benchmarks, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TokenSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Pricing, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCTA, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Waitlist, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingTokenWidget, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { theme: "dark", position: "bottom-right" })
  ] });
}
export {
  RecallOSLanding as component
};
