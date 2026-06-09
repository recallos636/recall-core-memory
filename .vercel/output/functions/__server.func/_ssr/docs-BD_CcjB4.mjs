import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as BackgroundLayer, N as Navbar, F as Footer } from "./BackgroundLayer-Deigh_si.mjs";
import "../_libs/bs58.mjs";
import "../_libs/sonner.mjs";
import { B as BookOpen, R as Rocket, a as Layers, D as Database, b as Compass, P as Plug, T as Terminal, c as CodeXml, d as CircleQuestionMark, e as ChevronRight, X, M as Menu, S as Search, f as ChevronDown, Z as Zap, g as Check, h as Box, i as Cpu, N as Network, A as ArrowRight, j as Shield, G as Globe, k as Brain, l as Copy } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "crypto";
import "async_hooks";
import "util";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
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
import "http";
import "https";
import "../_libs/superstruct.mjs";
import "../_libs/jayson.mjs";
import "../_libs/uuid.mjs";
import "../_libs/node-fetch.mjs";
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
import "../_libs/base-x.mjs";
import "../_libs/safe-buffer.mjs";
const sidebarGroups = [{
  label: "Overview",
  icon: BookOpen,
  sections: [{
    id: "introduction",
    title: "Introduction",
    group: "Overview"
  }, {
    id: "why-recallos",
    title: "Why RecallOS?",
    group: "Overview"
  }, {
    id: "core-concepts",
    title: "Core Concepts",
    group: "Overview"
  }]
}, {
  label: "Getting Started",
  icon: Rocket,
  sections: [{
    id: "installation",
    title: "Installation",
    group: "Getting Started"
  }, {
    id: "quickstart",
    title: "Quickstart",
    group: "Getting Started"
  }, {
    id: "first-collection",
    title: "First Memory Collection",
    group: "Getting Started"
  }]
}, {
  label: "Architecture",
  icon: Layers,
  sections: [{
    id: "architecture-overview",
    title: "Overview",
    group: "Architecture"
  }, {
    id: "memory-layer",
    title: "Memory Layer",
    group: "Architecture"
  }, {
    id: "embeddings-pipeline",
    title: "Embeddings Pipeline",
    group: "Architecture"
  }, {
    id: "vector-database",
    title: "Vector Database",
    group: "Architecture"
  }, {
    id: "retrieval-system",
    title: "Retrieval System",
    group: "Architecture"
  }, {
    id: "knowledge-graph",
    title: "Knowledge Graph",
    group: "Architecture"
  }]
}, {
  label: "Memory Collections",
  icon: Database,
  sections: [{
    id: "creating-collections",
    title: "Creating Collections",
    group: "Memory Collections"
  }, {
    id: "updating-collections",
    title: "Updating Collections",
    group: "Memory Collections"
  }, {
    id: "deleting-collections",
    title: "Deleting Collections",
    group: "Memory Collections"
  }, {
    id: "searching-collections",
    title: "Searching Collections",
    group: "Memory Collections"
  }]
}, {
  label: "Semantic Search",
  icon: Compass,
  sections: [{
    id: "how-retrieval-works",
    title: "How Retrieval Works",
    group: "Semantic Search"
  }, {
    id: "search-examples",
    title: "Examples",
    group: "Semantic Search"
  }, {
    id: "search-best-practices",
    title: "Best Practices",
    group: "Semantic Search"
  }]
}, {
  label: "Integrations",
  icon: Plug,
  sections: [{
    id: "integration-overview",
    title: "Overview",
    group: "Integrations"
  }, {
    id: "openai-integration",
    title: "OpenAI (GPT)",
    group: "Integrations"
  }, {
    id: "anthropic-integration",
    title: "Anthropic (Claude)",
    group: "Integrations"
  }, {
    id: "google-integration",
    title: "Google (Gemini)",
    group: "Integrations"
  }, {
    id: "deepseek-integration",
    title: "DeepSeek",
    group: "Integrations"
  }, {
    id: "open-source-integration",
    title: "Open Source Models",
    group: "Integrations"
  }]
}, {
  label: "CLI Reference",
  icon: Terminal,
  sections: [{
    id: "cli-install",
    title: "Installation",
    group: "CLI Reference"
  }, {
    id: "cli-init",
    title: "Initialization",
    group: "CLI Reference"
  }, {
    id: "cli-memory",
    title: "Memory Commands",
    group: "CLI Reference"
  }, {
    id: "cli-search",
    title: "Search Commands",
    group: "CLI Reference"
  }, {
    id: "cli-collections",
    title: "Collection Commands",
    group: "CLI Reference"
  }]
}, {
  label: "API Reference",
  icon: CodeXml,
  sections: [{
    id: "api-authentication",
    title: "Authentication",
    group: "API Reference"
  }, {
    id: "api-memories",
    title: "Memory Endpoints",
    group: "API Reference"
  }, {
    id: "api-search",
    title: "Search Endpoints",
    group: "API Reference"
  }, {
    id: "api-collections",
    title: "Collection Endpoints",
    group: "API Reference"
  }]
}, {
  label: "FAQ",
  icon: CircleQuestionMark,
  sections: [{
    id: "troubleshooting",
    title: "Troubleshooting",
    group: "FAQ"
  }, {
    id: "common-errors",
    title: "Common Errors",
    group: "FAQ"
  }, {
    id: "performance-tips",
    title: "Performance Tips",
    group: "FAQ"
  }]
}];
const allSections = sidebarGroups.flatMap((g) => g.sections);
function highlightSyntax(code, language) {
  const lines = code.split("\n");
  const keywords = /* @__PURE__ */ new Set(["import", "from", "def", "class", "return", "if", "else", "elif", "for", "while", "try", "except", "finally", "with", "as", "in", "not", "and", "or", "is", "None", "True", "False", "async", "await", "const", "let", "var", "function", "export", "default", "new", "this", "yield", "raise", "pass", "break", "continue", "lambda", "del", "global", "nonlocal", "assert", "type", "interface", "extends", "implements"]);
  const builtins = /* @__PURE__ */ new Set(["print", "len", "range", "str", "int", "float", "list", "dict", "set", "tuple", "bool", "map", "filter", "zip", "enumerate", "isinstance", "hasattr", "getattr", "setattr", "super", "self", "console", "fetch", "JSON", "Promise", "Array", "Object", "Math", "Date", "Error"]);
  const tokenize = (line) => {
    const nodes = [];
    const regex = /(#[^\n]*|\/\/[^\n]*|"""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\b\d+\.?\d*\b|[a-zA-Z_]\w*|[^\s\w]|\s+)/g;
    let match;
    let key = 0;
    while ((match = regex.exec(line)) !== null) {
      const token = match[0];
      key++;
      if (token.startsWith("#") || token.startsWith("//")) {
        nodes.push(/* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/30 italic", children: token }, key));
      } else if (token.startsWith('"') && token.endsWith('"') || token.startsWith("'") && token.endsWith("'") || token.startsWith("`") && token.endsWith("`") || token.startsWith('"""') || token.startsWith("'''")) {
        nodes.push(/* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#4AFF71]", children: token }, key));
      } else if (/^\d+\.?\d*$/.test(token)) {
        nodes.push(/* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#FFD700]", children: token }, key));
      } else if (keywords.has(token)) {
        nodes.push(/* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#7CFF8A] font-medium", children: token }, key));
      } else if (builtins.has(token)) {
        nodes.push(/* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#65FF9A]", children: token }, key));
      } else if (token === "@") {
        nodes.push(/* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#FF79C6]", children: token }, key));
      } else if (/^[^\s\w]$/.test(token)) {
        nodes.push(/* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: token }, key));
      } else {
        nodes.push(/* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/90", children: token }, key));
      }
    }
    return nodes;
  };
  return lines.map((line, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-8 shrink-0 text-right pr-4 text-white/20 select-none text-xs leading-6", children: i + 1 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-6", children: tokenize(line) })
  ] }, i));
}
function CodeBlock({
  code,
  language = "bash",
  title
}) {
  const [copied, setCopied] = reactExports.useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group my-6 rounded-xl overflow-hidden bg-[#060E09] border border-[#7CFF8A]/10 shadow-[0_0_30px_rgba(124,255,138,0.04)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-white/[0.03]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-white/10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-white/10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-white/10" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/40 font-mono", children: title || language })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleCopy, className: "flex items-center gap-1.5 text-xs text-white/30 hover:text-white/70 transition-colors px-2 py-1 rounded-md hover:bg-white/5", children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5 text-[#7CFF8A]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#7CFF8A]", children: "Copied" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Copy" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 overflow-x-auto text-[13px] font-mono whitespace-pre", children: highlightSyntax(code.trim()) })
  ] });
}
function Heading({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-3", children });
}
function SubHeading({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl sm:text-2xl font-semibold tracking-tight text-white mt-12 mb-4 flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-6 bg-[#7CFF8A] rounded-full" }),
    children
  ] });
}
function H3({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-white/90 mt-8 mb-3", children });
}
function P({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] leading-7 text-white/65 mb-4", children });
}
function InlineCode({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "px-1.5 py-0.5 rounded-md bg-[#7CFF8A]/10 text-[#7CFF8A] text-[13px] font-mono border border-[#7CFF8A]/10", children });
}
function Callout({
  type = "info",
  title,
  children
}) {
  const styles = {
    info: "border-[#7CFF8A]/20 bg-[#7CFF8A]/5",
    tip: "border-[#7CFF8A]/30 bg-[#7CFF8A]/10",
    warning: "border-yellow-400/20 bg-yellow-400/5"
  };
  const iconColors = {
    info: "text-[#7CFF8A]",
    tip: "text-[#7CFF8A]",
    warning: "text-yellow-400"
  };
  const icons = {
    info: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: `w-4 h-4 ${iconColors[type]}` }),
    warning: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: `w-4 h-4 ${iconColors[type]}` }),
    tip: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: `w-4 h-4 ${iconColors[type]}` })
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `my-6 rounded-xl border p-5 ${styles[type]}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
      icons[type],
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm font-medium ${iconColors[type]}`, children: title || type.charAt(0).toUpperCase() + type.slice(1) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-white/60 leading-6", children })
  ] });
}
function ParamTable({
  params
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6 overflow-x-auto rounded-xl border border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/5 bg-white/[0.02]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-white/50 font-medium", children: "Parameter" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-white/50 font-medium", children: "Type" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-white/50 font-medium", children: "Required" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-white/50 font-medium", children: "Description" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: params.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/5 last:border-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InlineCode, { children: p.name }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-white/50 font-mono text-xs", children: p.type }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: p.required ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#7CFF8A] text-xs font-medium", children: "Required" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/30 text-xs", children: "Optional" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-white/60", children: p.desc })
    ] }, p.name)) })
  ] }) });
}
function EndpointBadge({
  method,
  path
}) {
  const colors = {
    GET: "bg-[#7CFF8A]/10 text-[#7CFF8A] border-[#7CFF8A]/20",
    POST: "bg-[#7CFF8A]/20 text-[#7CFF8A] border-[#7CFF8A]/30",
    PUT: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    PATCH: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    DELETE: "bg-red-500/10 text-red-400 border-red-500/20"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 my-4 p-3 rounded-lg bg-white/[0.02] border border-white/5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 rounded text-xs font-mono font-bold border ${colors[method] || "bg-white/10 text-white border-white/20"}`, children: method }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-sm font-mono text-white/70", children: path })
  ] });
}
function IntroductionSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "Introduction" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "RecallOS is the memory infrastructure layer for AI agents and applications. It provides a complete system for storing, indexing, and retrieving knowledge with sub-50ms latency — giving your AI persistent memory that survives across sessions, conversations, and deployments." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "Unlike traditional databases or vector stores, RecallOS was built from the ground up for the unique demands of AI workloads. It combines semantic embeddings, structured metadata, and graph-based relationships into a unified memory layer that any language model can query naturally." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 my-8", children: [{
      icon: Zap,
      title: "Sub-50ms Retrieval",
      desc: "Optimized vector indices with HNSW graphs deliver results in under 50 milliseconds, even at millions of memories."
    }, {
      icon: Shield,
      title: "Enterprise Security",
      desc: "End-to-end encryption at rest and in transit, SOC 2 Type II compliant, with fine-grained access controls."
    }, {
      icon: Globe,
      title: "Model Agnostic",
      desc: "Works with OpenAI, Anthropic, Google, DeepSeek, Mistral, Llama, and any model that produces embeddings."
    }, {
      icon: Brain,
      title: "Semantic Understanding",
      desc: "Goes beyond keyword matching — understands meaning, context, and relationships between memories."
    }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#7CFF8A]/20 transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "w-5 h-5 text-[#7CFF8A] mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-white mb-1.5", children: f.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/50 leading-5", children: f.desc })
    ] }, f.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { type: "info", title: "Currently in v2.4", children: "RecallOS v2.4 introduces streaming retrieval, multi-tenant collections, and a redesigned knowledge graph engine. If you're upgrading from v1.x, see the migration guide." })
  ] });
}
function WhyRecallOSSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "Why RecallOS?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "Modern AI agents face a fundamental limitation: they forget everything between sessions. Context windows are finite, conversation histories get truncated, and critical decisions made weeks ago vanish without a trace. RecallOS solves this by providing a persistent, semantically-indexed memory layer that gives your agents true long-term recall." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "The Problem" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "Every AI application eventually hits the same walls. Token limits force you to truncate important context. RAG pipelines built on generic vector databases return irrelevant results because they lack domain-specific understanding. And building a custom memory system from scratch means months of engineering effort — handling embeddings, vector indexing, metadata filtering, access control, and consistency guarantees." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "How RecallOS Helps" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 my-6", children: [{
      title: "Persistent Identity",
      desc: "Agents maintain knowledge, preferences, and decision history across unlimited sessions. Your AI assistant remembers what it learned last Tuesday."
    }, {
      title: "Semantic Precision",
      desc: "RecallOS doesn't just store vectors — it understands relationships. Ask 'What did we decide about the database?' and it retrieves the architectural decision, not every mention of the word database."
    }, {
      title: "Team Knowledge Sharing",
      desc: "Collections can be shared across agents and team members. One agent learns something, and every agent on the team benefits immediately."
    }, {
      title: "Zero Infrastructure Overhead",
      desc: "No need to manage Pinecone, Weaviate, or Qdrant separately. RecallOS bundles an optimized vector engine, embedding pipeline, and query planner into a single install."
    }].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 p-4 rounded-lg bg-white/[0.02] border border-white/5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 text-[#7CFF8A] mt-0.5 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-white mb-1", children: item.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/50 leading-5", children: item.desc })
      ] })
    ] }, item.title)) })
  ] });
}
function CoreConceptsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "Core Concepts" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "Before diving into code, it helps to understand the four foundational primitives that RecallOS is built on. These concepts appear throughout the API, CLI, and SDKs." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Memory" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(P, { children: [
      "A ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(InlineCode, { children: "Memory" }),
      " is the fundamental unit of storage in RecallOS. It consists of a text payload, an automatically-generated embedding vector, optional structured metadata, and a timestamp. Memories are immutable once created — to update content, you create a new version that supersedes the original while preserving the full history."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", code: `from recallos import Memory

memory = Memory(
    text="The team decided to use PostgreSQL for the primary database.",
    metadata={
        "author": "sarah",
        "project": "atlas",
        "category": "architecture_decision",
        "confidence": 0.95
    }
)` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Collections" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(P, { children: [
      "A ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(InlineCode, { children: "Collection" }),
      " is a namespace that groups related memories together. Think of it like a database table or an S3 bucket — it provides logical isolation, independent access controls, and its own embedding configuration. Each collection can use a different embedding model, distance metric, and indexing strategy optimized for its specific workload."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Embeddings" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "RecallOS automatically converts every memory's text into a high-dimensional vector embedding using your configured model. These embeddings capture the semantic meaning of the text, enabling retrieval based on conceptual similarity rather than keyword matching. RecallOS supports OpenAI, Cohere, Voyage, and local embedding models out of the box." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Retrieval" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "The retrieval engine combines vector similarity search with metadata filtering, temporal weighting, and knowledge graph traversal to find the most relevant memories for any query. Results are ranked by a composite score that balances semantic similarity, recency, and contextual relevance — configurable per query." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { type: "tip", title: "Mental Model", children: "Think of RecallOS as a brain for your AI: Memories are individual thoughts, Collections are topic areas, Embeddings are the neural connections that link related ideas, and Retrieval is the act of recalling the right memory at the right time." })
  ] });
}
function InstallationSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "Installation" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "RecallOS can be installed via Python's pip, Node.js npm, or as a standalone Docker container. Choose the method that best fits your stack. All methods include the core engine, embedding pipeline, and vector database — no external dependencies required." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Python (Recommended)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "The Python SDK is the most feature-complete client and supports all RecallOS capabilities including streaming retrieval and async operations." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "bash", title: "terminal", code: `# Install the RecallOS Python SDK
pip install recallos

# Verify the installation
recallos --version
# RecallOS v2.4.1

# Initialize a new project
recallos init --project my-agent` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Node.js" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "The Node.js SDK provides full TypeScript support with type-safe queries, streaming results via async iterators, and first-class support for serverless environments." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "bash", title: "terminal", code: `# Install with npm
npm install @recallos/sdk

# Or with yarn
yarn add @recallos/sdk

# Or with pnpm
pnpm add @recallos/sdk` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Docker" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "Run RecallOS as a standalone service accessible over HTTP. This is ideal for production deployments, multi-language environments, or when you want a centralized memory server shared across multiple agents." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "bash", title: "terminal", code: `# Pull the official image
docker pull recallos/engine:latest

# Run with persistent storage
docker run -d \\
  --name recallos \\
  -p 8420:8420 \\
  -v recallos-data:/data \\
  -e RECALLOS_API_KEY=your-api-key \\
  recallos/engine:latest

# Verify the service is running
curl http://localhost:8420/health
# {"status": "healthy", "version": "2.4.1"}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "System Requirements" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6 overflow-x-auto rounded-xl border border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/5 bg-white/[0.02]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-white/50 font-medium", children: "Requirement" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-white/50 font-medium", children: "Minimum" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-white/50 font-medium", children: "Recommended" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [{
        req: "Python",
        min: "3.9+",
        rec: "3.11+"
      }, {
        req: "Node.js",
        min: "18+",
        rec: "20 LTS"
      }, {
        req: "Memory",
        min: "512 MB",
        rec: "2 GB+"
      }, {
        req: "Disk Space",
        min: "200 MB",
        rec: "1 GB+"
      }, {
        req: "OS",
        min: "Linux, macOS, Windows",
        rec: "Linux (Ubuntu 22.04+)"
      }].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/5 last:border-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-white/70 font-medium", children: r.req }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-white/50", children: r.min }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-white/50", children: r.rec })
      ] }, r.req)) })
    ] }) })
  ] });
}
function QuickstartSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "Quickstart" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "This guide walks you through the essential workflow in under five minutes: connect to RecallOS, create a memory collection, store a memory, and retrieve it using semantic search." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Step 1: Initialize the Client" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(P, { children: [
      "Create a ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(InlineCode, { children: "MemoryClient" }),
      " instance. It automatically discovers your API key from the environment variable ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(InlineCode, { children: "RECALLOS_API_KEY" }),
      ", or you can pass it explicitly."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", title: "quickstart.py", code: `from recallos import MemoryClient

# Reads RECALLOS_API_KEY from environment
client = MemoryClient()

# Or pass explicitly
client = MemoryClient(api_key="ros_sk_live_...")` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Step 2: Create a Collection" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "Collections group related memories. Give each collection a descriptive name and optionally configure the embedding model and distance metric." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", title: "quickstart.py", code: `collection = client.create_collection(
    name="project-atlas",
    description="Architecture decisions and meeting notes for Project Atlas",
    embedding_model="text-embedding-3-large",
    distance_metric="cosine"
)

print(f"Created collection: {collection.id}")
# Created collection: col_9f8k2m4n1p` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Step 3: Store Memories" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "Insert individual memories or batch-insert multiple memories at once. RecallOS automatically generates embeddings and indexes them for retrieval." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", title: "quickstart.py", code: `# Store a single memory
memory = collection.insert(
    text="We decided to use PostgreSQL for the primary database because "
         "of its strong JSON support and mature ecosystem.",
    metadata={
        "author": "sarah",
        "meeting": "2025-01-15-arch-review",
        "category": "decision"
    }
)

# Batch insert multiple memories
memories = collection.batch_insert([
    {
        "text": "The API will use REST with JSON:API spec for consistency.",
        "metadata": {"author": "james", "category": "decision"}
    },
    {
        "text": "We need to support 10k concurrent users by Q3 launch.",
        "metadata": {"author": "priya", "category": "requirement"}
    },
    {
        "text": "Redis will handle session caching and rate limiting.",
        "metadata": {"author": "sarah", "category": "decision"}
    }
])

print(f"Stored {len(memories)} memories")` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Step 4: Retrieve Memories" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "Query your collection using natural language. RecallOS finds the most semantically relevant memories, even if the exact words don't match." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", title: "quickstart.py", code: `# Semantic search
results = collection.search(
    query="What database are we using and why?",
    top_k=3
)

for result in results:
    print(f"Score: {result.score:.4f}")
    print(f"Text:  {result.text}")
    print(f"Meta:  {result.metadata}")
    print("---")

# Score: 0.9847
# Text:  We decided to use PostgreSQL for the primary database...
# Meta:  {'author': 'sarah', 'category': 'decision', ...}
# ---
# Score: 0.8234
# Text:  Redis will handle session caching and rate limiting...
# Meta:  {'author': 'sarah', 'category': 'decision', ...}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { type: "info", title: "What Just Happened?", children: "RecallOS converted your query into an embedding vector, searched the collection's HNSW index for the nearest neighbors, applied metadata-aware re-ranking, and returned the top results — all in under 50ms." })
  ] });
}
function FirstCollectionSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "First Memory Collection" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "Now that you've seen the basic workflow, let's explore the full power of collections. This guide covers configuration options, advanced metadata schemas, and best practices for organizing your AI's memory." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Collection Configuration" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "Every collection supports a rich set of configuration options that control how memories are embedded, indexed, and retrieved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", title: "advanced_collection.py", code: `from recallos import MemoryClient, CollectionConfig

client = MemoryClient()

config = CollectionConfig(
    embedding_model="text-embedding-3-large",
    embedding_dimensions=3072,
    distance_metric="cosine",       # "cosine" | "euclidean" | "dot_product"
    index_type="hnsw",              # "hnsw" | "flat" | "ivf"
    hnsw_m=16,                      # Number of connections per layer
    hnsw_ef_construction=200,       # Build-time search width
    enable_knowledge_graph=True,    # Auto-extract entity relationships
    deduplication="semantic",       # "none" | "exact" | "semantic"
    dedup_threshold=0.95            # Similarity threshold for dedup
)

collection = client.create_collection(
    name="engineering-knowledge",
    description="Accumulated engineering decisions and learnings",
    config=config,
    tags=["engineering", "production"]
)` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Metadata Schemas" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "Define a metadata schema to enforce consistency and enable type-safe filtering. Schemas are optional but strongly recommended for production collections." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", title: "schema.py", code: `from recallos import MetadataSchema, Field

schema = MetadataSchema(
    fields=[
        Field("author", type="string", required=True, indexed=True),
        Field("category", type="enum",
              values=["decision", "requirement", "note", "action_item"],
              required=True, indexed=True),
        Field("project", type="string", indexed=True),
        Field("confidence", type="float", min=0.0, max=1.0),
        Field("reviewed", type="boolean", default=False),
    ]
)

collection = client.create_collection(
    name="structured-knowledge",
    schema=schema
)

# This will validate metadata on insert
collection.insert(
    text="Use gRPC for internal service communication.",
    metadata={
        "author": "alex",
        "category": "decision",
        "project": "atlas",
        "confidence": 0.88
    }
)` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Callout, { type: "tip", title: "Best Practice", children: [
      "Start with a loose schema and tighten it as patterns emerge. Use the",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(InlineCode, { children: "indexed=True" }),
      " flag on fields you plan to filter by — this creates a secondary index that dramatically speeds up filtered queries."
    ] })
  ] });
}
function ArchitectureOverviewSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "Architecture Overview" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "RecallOS is composed of five core subsystems that work together to deliver fast, accurate memory retrieval. Understanding this architecture helps you make informed decisions about configuration and optimization." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-8 p-6 rounded-xl bg-white/[0.02] border border-white/5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-5 gap-4 text-center", children: [{
        icon: Box,
        label: "Memory Layer"
      }, {
        icon: Cpu,
        label: "Embeddings"
      }, {
        icon: Database,
        label: "Vector DB"
      }, {
        icon: Compass,
        label: "Retrieval"
      }, {
        icon: Network,
        label: "Knowledge Graph"
      }].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-[#7CFF8A]/10 border border-[#7CFF8A]/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-5 h-5 text-[#7CFF8A]" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/60", children: item.label }),
        i < 4 && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3 text-white/20 hidden sm:block absolute", style: {
          display: "none"
        } })
      ] }, item.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-white/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Input" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-px bg-gradient-to-r from-white/20 to-[#7CFF8A]/40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Process" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-px bg-gradient-to-r from-[#7CFF8A]/40 to-[#7CFF8A]/60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Store" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-px bg-gradient-to-r from-[#7CFF8A]/60 to-[#7CFF8A]/40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Retrieve" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-px bg-gradient-to-r from-[#7CFF8A]/40 to-white/20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Connect" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "When you insert a memory, it flows through the pipeline left-to-right: the Memory Layer validates and normalizes the input, the Embeddings Pipeline converts it to a vector, the Vector Database indexes it for fast retrieval, and the Knowledge Graph extracts and stores entity relationships. When you query, the Retrieval System orchestrates a search across all these subsystems and returns a ranked list of results." })
  ] });
}
function MemoryLayerSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "Memory Layer" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "The Memory Layer is the ingestion gateway. It handles validation, normalization, chunking, and version management for all incoming memories." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Text Processing" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "Before embedding, the Memory Layer applies a configurable text processing pipeline:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 my-4", children: ["Unicode normalization (NFC) to ensure consistent encoding", "Whitespace collapsing and trimming", "Automatic language detection (supports 50+ languages)", "Configurable chunking for long documents (sliding window, sentence-boundary, or paragraph-level)", "Deduplication check against existing memories (exact hash or semantic similarity)"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3 text-[#7CFF8A] mt-1.5 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white/60", children: item })
    ] }, item)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Versioning" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: 'Memories in RecallOS are append-only. When you "update" a memory, you create a new version linked to the original. This preserves the complete history and enables temporal queries like "What did we believe about X three months ago?"' }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", code: `# Create a new version of an existing memory
updated = collection.update_memory(
    memory_id="mem_abc123",
    text="We switched from PostgreSQL to CockroachDB for multi-region support.",
    metadata={"author": "sarah", "category": "decision_update"}
)

# Access version history
history = collection.get_memory_history("mem_abc123")
for version in history:
    print(f"v{version.version} ({version.created_at}): {version.text[:60]}...")` })
  ] });
}
function EmbeddingsPipelineSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "Embeddings Pipeline" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "The Embeddings Pipeline is responsible for converting text memories into high-dimensional vector representations. It supports multiple embedding providers, handles batching and rate limiting, and caches results to minimize cost and latency." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Supported Models" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6 overflow-x-auto rounded-xl border border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/5 bg-white/[0.02]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-white/50 font-medium", children: "Provider" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-white/50 font-medium", children: "Model" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-white/50 font-medium", children: "Dimensions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-white/50 font-medium", children: "Max Tokens" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [{
        provider: "OpenAI",
        model: "text-embedding-3-large",
        dims: "3072",
        tokens: "8191"
      }, {
        provider: "OpenAI",
        model: "text-embedding-3-small",
        dims: "1536",
        tokens: "8191"
      }, {
        provider: "Cohere",
        model: "embed-english-v3.0",
        dims: "1024",
        tokens: "512"
      }, {
        provider: "Voyage",
        model: "voyage-large-2",
        dims: "1536",
        tokens: "16000"
      }, {
        provider: "Local",
        model: "bge-large-en-v1.5",
        dims: "1024",
        tokens: "512"
      }, {
        provider: "Local",
        model: "nomic-embed-text-v1.5",
        dims: "768",
        tokens: "8192"
      }].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/5 last:border-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-white/70", children: m.provider }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InlineCode, { children: m.model }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-white/50 font-mono text-xs", children: m.dims }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-white/50 font-mono text-xs", children: m.tokens })
      ] }, m.model)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Batching & Caching" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "RecallOS automatically batches embedding requests to maximize throughput and minimize API calls. Embeddings are cached locally by content hash, so inserting a duplicate text incurs zero additional embedding cost." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", code: `# Configure embedding behavior at the collection level
config = CollectionConfig(
    embedding_model="text-embedding-3-large",
    embedding_batch_size=100,       # Texts per API call
    embedding_cache="persistent",   # "none" | "memory" | "persistent"
    embedding_timeout=30,           # Seconds before timeout
    embedding_retries=3             # Retry on transient failures
)` })
  ] });
}
function VectorDatabaseSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "Vector Database" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "RecallOS includes a purpose-built vector database engine optimized for AI memory workloads. It uses Hierarchical Navigable Small World (HNSW) graphs for approximate nearest neighbor search, delivering consistent sub-50ms latency at scale." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Index Types" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "Choose the index type based on your latency, accuracy, and memory requirements:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6 overflow-x-auto rounded-xl border border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/5 bg-white/[0.02]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-white/50 font-medium", children: "Index" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-white/50 font-medium", children: "Latency" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-white/50 font-medium", children: "Accuracy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-white/50 font-medium", children: "Memory" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-white/50 font-medium", children: "Best For" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [{
        idx: "HNSW",
        lat: "~5ms",
        acc: "~99%",
        mem: "High",
        best: "Production workloads, sub-10ms queries"
      }, {
        idx: "IVF",
        lat: "~15ms",
        acc: "~95%",
        mem: "Medium",
        best: "Large collections (10M+ memories)"
      }, {
        idx: "Flat",
        lat: "~100ms",
        acc: "100%",
        mem: "Low",
        best: "Small collections, exact results needed"
      }].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/5 last:border-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InlineCode, { children: r.idx }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-white/50", children: r.lat }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-white/50", children: r.acc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-white/50", children: r.mem }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-white/50", children: r.best })
      ] }, r.idx)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Distance Metrics" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "The distance metric determines how similarity is calculated between vectors:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 my-4", children: [{
      metric: "Cosine",
      desc: "Measures the angle between vectors. Best for normalized embeddings (OpenAI, Cohere). This is the default."
    }, {
      metric: "Euclidean",
      desc: "Measures the straight-line distance. Better for embeddings where magnitude matters."
    }, {
      metric: "Dot Product",
      desc: "Measures the projection of one vector onto another. Fastest computation, good for pre-normalized vectors."
    }].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(InlineCode, { children: item.metric.toLowerCase() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white/50", children: item.desc })
    ] }, item.metric)) })
  ] });
}
function RetrievalSystemSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "Retrieval System" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "The Retrieval System is the query engine that sits atop the vector database. It goes far beyond basic nearest-neighbor search by applying metadata filtering, temporal weighting, diversity sampling, and knowledge graph expansion to produce high-quality results." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Query Pipeline" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "Every query flows through a multi-stage pipeline:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 my-6", children: [{
      step: "1. Query Embedding",
      desc: "The search query is converted into a vector using the collection's embedding model."
    }, {
      step: "2. Candidate Retrieval",
      desc: "The HNSW index returns the top-N nearest neighbors (typically 10x the requested top_k)."
    }, {
      step: "3. Metadata Filtering",
      desc: "Candidates are filtered by metadata predicates (e.g., author == 'sarah', category in ['decision'])."
    }, {
      step: "4. Temporal Weighting",
      desc: "Recent memories receive a configurable recency boost."
    }, {
      step: "5. Diversity Sampling",
      desc: "MMR (Maximal Marginal Relevance) removes near-duplicate results."
    }, {
      step: "6. Graph Expansion",
      desc: "If enabled, related memories from the knowledge graph are injected into results."
    }, {
      step: "7. Re-ranking",
      desc: "A cross-encoder re-ranker (optional) computes precise relevance scores."
    }].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start p-3 rounded-lg bg-white/[0.02] border border-white/5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-mono text-[#7CFF8A] shrink-0 mt-0.5", children: [
        item.step.split(".")[0],
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white/80 font-medium", children: item.step.split(". ")[1] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/40 mt-0.5", children: item.desc })
      ] })
    ] }, item.step)) })
  ] });
}
function KnowledgeGraphSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "Knowledge Graph" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "The Knowledge Graph is an optional but powerful subsystem that automatically extracts entities and relationships from your memories, building a structured graph that enhances retrieval with contextual connections." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "How It Works" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(P, { children: [
      "When ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(InlineCode, { children: "enable_knowledge_graph=True" }),
      " is set on a collection, RecallOS uses a lightweight NER (Named Entity Recognition) model to extract entities (people, tools, projects, concepts) and infer relationships between them. These relationships are stored in a graph index alongside the vector embeddings."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", code: `# Enable knowledge graph on a collection
collection = client.create_collection(
    name="team-knowledge",
    config=CollectionConfig(
        enable_knowledge_graph=True,
        graph_extraction_model="recallos/entity-extract-v2"
    )
)

# Insert memories — entities are extracted automatically
collection.insert(
    text="Sarah recommended using CockroachDB for multi-region deployments.",
    metadata={"meeting": "2025-03-01"}
)

# Query the knowledge graph directly
entities = collection.graph.get_entities(type="person")
# [Entity(name="Sarah", mentions=12, connections=8)]

relationships = collection.graph.get_relationships(entity="Sarah")
# [Relationship(subject="Sarah", predicate="recommended", object="CockroachDB")]` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Graph-Enhanced Retrieval" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "When the knowledge graph is enabled, queries automatically traverse entity relationships to surface contextually related memories that pure vector search might miss." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", code: `# Standard vector search + graph expansion
results = collection.search(
    query="What has Sarah contributed to the architecture?",
    top_k=5,
    graph_expand=True,      # Traverse entity relationships
    graph_depth=2           # How many hops to traverse
)

# Results will include:
# 1. Direct mentions of Sarah in architecture context
# 2. Decisions Sarah made that affected architecture
# 3. Topics connected to Sarah's recommendations` })
  ] });
}
function CreatingCollectionsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "Creating Collections" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "Collections are the primary organizational unit in RecallOS. Each collection is an isolated namespace with its own embedding configuration, access controls, and indexing strategy." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Basic Creation" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", code: `from recallos import MemoryClient

client = MemoryClient()

# Create with defaults (cosine distance, text-embedding-3-small)
collection = client.create_collection("my-project")

# Create with a description
collection = client.create_collection(
    name="customer-support-kb",
    description="Knowledge base for customer support agents"
)` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Advanced Configuration" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", code: `from recallos import CollectionConfig

collection = client.create_collection(
    name="research-papers",
    description="Academic papers and their key findings",
    config=CollectionConfig(
        embedding_model="text-embedding-3-large",
        embedding_dimensions=3072,
        distance_metric="cosine",
        index_type="hnsw",
        hnsw_m=32,
        hnsw_ef_construction=400,
        enable_knowledge_graph=True,
        deduplication="semantic",
        dedup_threshold=0.92,
        max_memory_size=50000,       # Characters per memory
        auto_chunk=True,             # Split long documents automatically
        chunk_size=1000,             # Target characters per chunk
        chunk_overlap=200            # Overlap between chunks
    ),
    tags=["research", "papers", "ml"],
    access={"read": ["team:research"], "write": ["user:admin"]}
)` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Node.js" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "typescript", title: "collections.ts", code: `import { RecallOS } from "@recallos/sdk";

const client = new RecallOS({ apiKey: process.env.RECALLOS_API_KEY });

const collection = await client.collections.create({
  name: "chat-history",
  description: "Conversation history across all support channels",
  config: {
    embeddingModel: "text-embedding-3-large",
    distanceMetric: "cosine",
    enableKnowledgeGraph: true,
  },
});

console.log(\`Created: \${collection.id}\`);` })
  ] });
}
function UpdatingCollectionsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "Updating Collections" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "You can update a collection's metadata, configuration, and access controls after creation. Note that some settings — like the embedding model and distance metric — cannot be changed after memories have been inserted, as they would invalidate existing embeddings." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Update Metadata" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", code: `# Update name and description
collection.update(
    name="project-atlas-v2",
    description="Updated architecture decisions for Atlas v2 migration",
    tags=["atlas", "v2", "migration"]
)

# Update access controls
collection.update_access(
    read=["team:engineering", "team:product"],
    write=["user:sarah", "user:james"],
    admin=["user:admin"]
)` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Mutable vs Immutable Settings" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6 overflow-x-auto rounded-xl border border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/5 bg-white/[0.02]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-white/50 font-medium", children: "Setting" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-white/50 font-medium", children: "Mutable" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-white/50 font-medium", children: "Notes" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [{
        setting: "name",
        mutable: "Yes",
        notes: "Can be changed anytime"
      }, {
        setting: "description",
        mutable: "Yes",
        notes: "Can be changed anytime"
      }, {
        setting: "tags",
        mutable: "Yes",
        notes: "Can be added/removed anytime"
      }, {
        setting: "access controls",
        mutable: "Yes",
        notes: "Changes take effect immediately"
      }, {
        setting: "embedding_model",
        mutable: "No*",
        notes: "Requires re-indexing if changed"
      }, {
        setting: "distance_metric",
        mutable: "No*",
        notes: "Requires re-indexing if changed"
      }, {
        setting: "index_type",
        mutable: "No*",
        notes: "Requires re-indexing if changed"
      }, {
        setting: "deduplication",
        mutable: "Yes",
        notes: "Only affects new inserts"
      }].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/5 last:border-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InlineCode, { children: r.setting }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-white/50", children: r.mutable }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-white/50", children: r.notes })
      ] }, r.setting)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Callout, { type: "warning", title: "Re-indexing", children: [
      "Changing the embedding model, distance metric, or index type on a collection that already contains memories requires a full re-index. Use",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(InlineCode, { children: "collection.reindex()" }),
      " to trigger this — it runs in the background and the collection remains queryable during the process."
    ] })
  ] });
}
function DeletingCollectionsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "Deleting Collections" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "Collections can be soft-deleted (recoverable for 30 days) or permanently destroyed. Deletion removes all associated memories, embeddings, metadata, and knowledge graph data." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Soft Delete" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", code: `# Soft delete — recoverable for 30 days
client.delete_collection("project-atlas", soft=True)

# List soft-deleted collections
deleted = client.list_collections(include_deleted=True)

# Restore a soft-deleted collection
client.restore_collection("project-atlas")` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Permanent Delete" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", code: `# Permanent delete — cannot be recovered
client.delete_collection("project-atlas", soft=False, confirm=True)

# This is equivalent to:
collection = client.get_collection("project-atlas")
collection.destroy(confirm="project-atlas")  # Must type the name to confirm` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { type: "warning", title: "Caution", children: "Permanent deletion is irreversible. All memories, embeddings, graph data, and version history will be permanently erased. Always prefer soft delete unless you're certain you won't need the data." })
  ] });
}
function SearchingCollectionsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "Searching Collections" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "RecallOS provides rich search capabilities including semantic search, metadata filtering, temporal queries, and full-text search. These can be combined freely to build precise queries." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Semantic Search" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", code: `results = collection.search(
    query="What database technology decisions have been made?",
    top_k=10
)` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Filtered Search" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", code: `from recallos import Filter

results = collection.search(
    query="architecture decisions",
    top_k=5,
    filters=Filter.and_(
        Filter.eq("category", "decision"),
        Filter.eq("author", "sarah"),
        Filter.gte("confidence", 0.8)
    )
)` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Temporal Search" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", code: `from datetime import datetime, timedelta

# Search only recent memories
results = collection.search(
    query="deployment strategy",
    top_k=5,
    after=datetime.now() - timedelta(days=30),
    recency_weight=0.3   # Boost recent memories by 30%
)` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Hybrid Search" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "Combine semantic search with full-text keyword search for the best of both worlds:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", code: `results = collection.search(
    query="PostgreSQL performance tuning",
    top_k=5,
    mode="hybrid",           # "semantic" | "keyword" | "hybrid"
    semantic_weight=0.7,     # 70% semantic, 30% keyword
    keyword_weight=0.3
)` })
  ] });
}
function HowRetrievalWorksSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "How RecallOS Retrieval Works" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "RecallOS retrieval goes far beyond simple vector similarity search. It uses a multi-stage pipeline that combines embedding-based retrieval with metadata filtering, diversity sampling, and optional knowledge graph expansion to deliver the most relevant results." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "The Retrieval Pipeline" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(P, { children: [
      "When you call ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(InlineCode, { children: "collection.search()" }),
      ", the following happens in sequence:"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "text", title: "retrieval pipeline", code: `Query: "What database are we using?"
        │
        ▼
┌─────────────────────────┐
│  1. Query Embedding      │  Convert query to vector (5ms)
│     Model: text-3-large  │
└─────────┬───────────────┘
          │
          ▼
┌─────────────────────────┐
│  2. ANN Search (HNSW)    │  Find 100 nearest candidates (3ms)
│     ef_search: 50        │
└─────────┬───────────────┘
          │
          ▼
┌─────────────────────────┐
│  3. Metadata Filter      │  Apply predicates: author, category (1ms)
│     Remaining: 42        │
└─────────┬───────────────┘
          │
          ▼
┌─────────────────────────┐
│  4. Temporal Decay       │  Boost recent memories (1ms)
│     Half-life: 30 days   │
└─────────┬───────────────┘
          │
          ▼
┌─────────────────────────┐
│  5. MMR Diversity        │  Remove near-duplicates (2ms)
│     lambda: 0.7          │
└─────────┬───────────────┘
          │
          ▼
┌─────────────────────────┐
│  6. Return top_k         │  Final results (top 5)
│     Total latency: ~12ms │
└─────────────────────────┘` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Scoring Formula" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "The final relevance score for each memory is a weighted combination of factors:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "text", code: `score = (w_semantic * cosine_similarity)
      + (w_recency * temporal_decay)
      + (w_graph * graph_centrality)
      - (w_diversity * max_similarity_to_higher_ranked)

Default weights:
  w_semantic  = 0.7
  w_recency   = 0.15
  w_graph     = 0.1
  w_diversity = 0.05` })
  ] });
}
function SearchExamplesSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "Search Examples" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "Here are practical examples demonstrating the full range of RecallOS search capabilities." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Natural Language Query" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", title: "search_examples.py", code: `# Simple natural language query
results = collection.search(
    query="Why did we choose this tech stack?",
    top_k=5
)

for r in results:
    print(f"[{r.score:.2f}] {r.text[:100]}...")` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Multi-Collection Search" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", title: "multi_search.py", code: `# Search across multiple collections simultaneously
results = client.multi_search(
    query="authentication best practices",
    collections=["engineering-kb", "security-docs", "meeting-notes"],
    top_k=10,
    merge_strategy="interleave"  # "interleave" | "append" | "score"
)

for r in results:
    print(f"[{r.collection}] [{r.score:.2f}] {r.text[:80]}...")` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Streaming Results" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", title: "streaming.py", code: `# Stream results as they arrive (useful for large top_k)
async for result in collection.search_stream(
    query="deployment procedures",
    top_k=100
):
    process_result(result)
    if result.score < 0.5:
        break  # Stop early when relevance drops` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Search with Context Window" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", title: "context_window.py", code: `# Build a context window for an LLM prompt
context = collection.build_context(
    query="Summarize our database architecture decisions",
    max_tokens=4000,         # Token budget for context
    format="numbered",       # "plain" | "numbered" | "xml" | "json"
    include_metadata=True
)

# Use with any LLM
prompt = f"""Based on the following context, answer the question.

Context:
{context}

Question: Summarize our database architecture decisions."""` })
  ] });
}
function SearchBestPracticesSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "Search Best Practices" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "Maximize retrieval quality with these proven techniques for query construction, collection design, and result handling." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Write Descriptive Queries" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "Semantic search works best with natural, descriptive queries. Instead of keywords, write the question as you'd ask a knowledgeable colleague." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-6 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 text-red-400 mt-0.5 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-red-400 font-medium", children: "Avoid" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/50 mt-1 font-mono", children: '"postgres config"' })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-lg bg-[#7CFF8A]/5 border border-[#7CFF8A]/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-[#7CFF8A] mt-0.5 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-[#7CFF8A] font-medium", children: "Better" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/50 mt-1 font-mono", children: '"How is our PostgreSQL database configured and what were the reasons for those settings?"' })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Use Metadata Effectively" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "Well-structured metadata dramatically improves filtered search. Use consistent, indexable fields across all memories in a collection." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Tune top_k and Score Thresholds" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(P, { children: [
      "Start with ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(InlineCode, { children: "top_k=5" }),
      " and a minimum score threshold of 0.7 for most use cases. Increase ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(InlineCode, { children: "top_k" }),
      " when you need comprehensive coverage; decrease it when you need only the single best match."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", code: `# Apply a minimum score threshold
results = collection.search(
    query="authentication requirements",
    top_k=10,
    min_score=0.7    # Only return results above this threshold
)

# Adaptive retrieval: start strict, widen if needed
results = collection.search(query=query, top_k=3, min_score=0.85)
if len(results) < 2:
    results = collection.search(query=query, top_k=10, min_score=0.6)` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Memory Hygiene" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 my-4", children: ["Store atomic, self-contained memories — each should make sense on its own", "Include relevant context in the text, not just conclusions", "Use semantic deduplication to prevent near-duplicate memories", "Archive stale collections instead of letting them grow indefinitely", "Review and prune low-confidence memories periodically"].map((tip) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3 text-[#7CFF8A] mt-1.5 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white/60", children: tip })
    ] }, tip)) })
  ] });
}
function IntegrationOverviewSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "Integrations" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "RecallOS integrates with every major LLM provider and framework. These integrations let you add persistent memory to any AI agent or application with just a few lines of code." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 my-8", children: [{
      name: "OpenAI",
      tag: "GPT-4o"
    }, {
      name: "Anthropic",
      tag: "Claude 4"
    }, {
      name: "Google",
      tag: "Gemini 2.5"
    }, {
      name: "DeepSeek",
      tag: "V3"
    }, {
      name: "Qwen",
      tag: "Qwen3"
    }, {
      name: "Llama",
      tag: "Llama 4"
    }, {
      name: "Mistral",
      tag: "Large"
    }, {
      name: "HuggingFace",
      tag: "Transformers"
    }].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#7CFF8A]/20 transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white/80 font-medium", children: p.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-[#7CFF8A]/60 font-mono", children: p.tag })
    ] }, p.name)) })
  ] });
}
function OpenAIIntegrationSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "OpenAI (GPT) Integration" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "Add persistent memory to GPT-4o, GPT-4o-mini, or any OpenAI model. RecallOS retrieves relevant context and injects it into the system prompt automatically." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", title: "openai_integration.py", code: `from recallos import MemoryClient
from recallos.integrations import OpenAIMemory
from openai import OpenAI

# Initialize clients
recall = MemoryClient()
openai_client = OpenAI()
collection = recall.get_collection("project-context")

# Create the memory-augmented wrapper
memory = OpenAIMemory(
    collection=collection,
    top_k=5,
    min_score=0.7,
    system_prefix="You are a helpful engineering assistant."
)

# Use it like the standard OpenAI client
response = memory.chat(
    client=openai_client,
    model="gpt-4o",
    messages=[
        {"role": "user", "content": "What database are we using and why?"}
    ]
)

print(response.choices[0].message.content)
# "Based on your team's previous decisions, you're using PostgreSQL
#  for the primary database due to its strong JSON support..."

# Memories from the conversation are automatically stored
memory.store_interaction(
    user_message="What database are we using and why?",
    assistant_response=response.choices[0].message.content,
    metadata={"session": "planning-review"}
)` })
  ] });
}
function AnthropicIntegrationSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "Anthropic (Claude) Integration" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "RecallOS provides a first-class integration with Anthropic's Claude models, including support for Claude's extended thinking and tool use features." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", title: "anthropic_integration.py", code: `from recallos import MemoryClient
from recallos.integrations import AnthropicMemory
import anthropic

recall = MemoryClient()
claude_client = anthropic.Anthropic()
collection = recall.get_collection("agent-knowledge")

memory = AnthropicMemory(
    collection=collection,
    top_k=5,
    context_format="xml",     # Claude works best with XML-tagged context
    auto_store=True           # Automatically store conversations
)

response = memory.chat(
    client=claude_client,
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Summarize our API design decisions."}
    ]
)

print(response.content[0].text)` })
  ] });
}
function GoogleIntegrationSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "Google (Gemini) Integration" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "Use RecallOS with Gemini 2.5 Pro, Flash, and other Google AI models. The integration supports both the Google AI Studio API and Vertex AI." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", title: "gemini_integration.py", code: `from recallos import MemoryClient
from recallos.integrations import GeminiMemory
import google.generativeai as genai

recall = MemoryClient()
collection = recall.get_collection("research-notes")

genai.configure(api_key="your-google-api-key")
model = genai.GenerativeModel("gemini-2.5-pro")

memory = GeminiMemory(
    collection=collection,
    top_k=5,
    auto_store=True
)

response = memory.chat(
    model=model,
    message="What were the key findings from last week's research?"
)

print(response.text)` })
  ] });
}
function DeepSeekIntegrationSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "DeepSeek Integration" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "RecallOS supports DeepSeek models through the OpenAI-compatible API, making it simple to add persistent memory to DeepSeek-V3 and DeepSeek-R1 applications." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", title: "deepseek_integration.py", code: `from recallos import MemoryClient
from recallos.integrations import OpenAIMemory
from openai import OpenAI

recall = MemoryClient()
collection = recall.get_collection("coding-context")

# DeepSeek uses an OpenAI-compatible API
deepseek_client = OpenAI(
    api_key="your-deepseek-api-key",
    base_url="https://api.deepseek.com"
)

memory = OpenAIMemory(
    collection=collection,
    top_k=5
)

response = memory.chat(
    client=deepseek_client,
    model="deepseek-chat",
    messages=[
        {"role": "user", "content": "Review the code changes from yesterday."}
    ]
)

print(response.choices[0].message.content)` })
  ] });
}
function OpenSourceIntegrationSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "Open Source Models" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "RecallOS works with any model served through an OpenAI-compatible API, including Llama, Mistral, Qwen, and models hosted on HuggingFace Inference Endpoints." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Llama (via Ollama or vLLM)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", title: "llama_integration.py", code: `from recallos import MemoryClient
from recallos.integrations import OpenAIMemory
from openai import OpenAI

recall = MemoryClient()
collection = recall.get_collection("local-agent")

# Connect to local Ollama instance
ollama_client = OpenAI(
    api_key="ollama",
    base_url="http://localhost:11434/v1"
)

memory = OpenAIMemory(collection=collection, top_k=5)

response = memory.chat(
    client=ollama_client,
    model="llama3.3:70b",
    messages=[
        {"role": "user", "content": "What tasks are pending?"}
    ]
)` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Mistral" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", title: "mistral_integration.py", code: `from recallos.integrations import MistralMemory
from mistralai import Mistral

recall = MemoryClient()
collection = recall.get_collection("agent-context")

mistral_client = Mistral(api_key="your-mistral-api-key")

memory = MistralMemory(
    collection=collection,
    top_k=5,
    auto_store=True
)

response = memory.chat(
    client=mistral_client,
    model="mistral-large-latest",
    messages=[
        {"role": "user", "content": "Summarize the project status."}
    ]
)` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "HuggingFace Inference Endpoints" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", title: "huggingface_integration.py", code: `from recallos.integrations import HuggingFaceMemory
from huggingface_hub import InferenceClient

recall = MemoryClient()
collection = recall.get_collection("hf-agent")

hf_client = InferenceClient(
    model="Qwen/Qwen3-72B",
    token="your-hf-token"
)

memory = HuggingFaceMemory(
    collection=collection,
    top_k=5
)

response = memory.chat(
    client=hf_client,
    message="What did we discuss in the last standup?"
)` })
  ] });
}
function CLIInstallSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "CLI Installation" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "The RecallOS CLI is installed automatically with the Python package. It provides a complete command-line interface for managing collections, memories, and search operations." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "bash", code: `# Install via pip (includes CLI)
pip install recallos

# Verify CLI installation
recallos --version
# recallos v2.4.1

# View all available commands
recallos --help` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Shell Completions" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "bash", code: `# Bash
recallos completions bash >> ~/.bashrc

# Zsh
recallos completions zsh >> ~/.zshrc

# Fish
recallos completions fish > ~/.config/fish/completions/recallos.fish

# PowerShell
recallos completions powershell >> $PROFILE` })
  ] });
}
function CLIInitSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "CLI Initialization" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(P, { children: [
      "The ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(InlineCode, { children: "recallos init" }),
      " command sets up a new RecallOS project in the current directory, creates a configuration file, and optionally connects to a remote RecallOS server."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "bash", code: `# Interactive initialization
recallos init

# Non-interactive with options
recallos init \\
  --project my-agent \\
  --api-key ros_sk_live_... \\
  --storage local \\
  --embedding-model text-embedding-3-large

# Initialize with Docker backend
recallos init --backend docker --port 8420` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Configuration File" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(P, { children: [
      "Initialization creates a ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(InlineCode, { children: "recallos.yaml" }),
      " file in your project root:"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "yaml", title: "recallos.yaml", code: `project: my-agent
version: "2.4"

connection:
  type: local                    # "local" | "remote" | "docker"
  host: localhost
  port: 8420

defaults:
  embedding_model: text-embedding-3-large
  distance_metric: cosine
  index_type: hnsw

storage:
  path: .recallos/data
  max_size: 10GB

logging:
  level: info
  file: .recallos/logs/recallos.log` })
  ] });
}
function CLIMemorySection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "Memory Commands" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "The CLI provides full CRUD operations for memories within collections." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Create" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "bash", code: `# Insert a memory
recallos memory create \\
  --collection project-atlas \\
  --text "We decided to use PostgreSQL for the primary database." \\
  --meta author=sarah,category=decision

# Insert from a file
recallos memory create \\
  --collection project-atlas \\
  --file ./meeting-notes/2025-01-15.md \\
  --meta source=meeting,date=2025-01-15

# Batch insert from JSON
recallos memory batch-create \\
  --collection project-atlas \\
  --file ./memories.json` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Read" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "bash", code: `# Get a specific memory
recallos memory get mem_abc123

# List memories in a collection
recallos memory list --collection project-atlas --limit 20

# Get memory with version history
recallos memory get mem_abc123 --versions` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Delete" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "bash", code: `# Delete a specific memory
recallos memory delete mem_abc123

# Delete all memories matching a filter
recallos memory delete-where \\
  --collection project-atlas \\
  --filter "category=draft"

# Purge all memories (requires confirmation)
recallos memory purge --collection project-atlas --confirm` })
  ] });
}
function CLISearchSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "Search Commands" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "Search your collections directly from the command line with full support for semantic queries, metadata filters, and output formatting." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "bash", code: `# Basic semantic search
recallos search "What database decisions have been made?" \\
  --collection project-atlas \\
  --top-k 5

# Search with metadata filters
recallos search "architecture decisions" \\
  --collection project-atlas \\
  --filter "author=sarah" \\
  --filter "category=decision" \\
  --min-score 0.7

# Multi-collection search
recallos search "deployment strategy" \\
  --collections project-atlas,devops-kb \\
  --top-k 10

# Output as JSON
recallos search "API design" \\
  --collection project-atlas \\
  --format json \\
  --output results.json

# Interactive search mode
recallos search --interactive --collection project-atlas` })
  ] });
}
function CLICollectionsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "Collection Commands" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "Manage your memory collections from the command line." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "bash", code: `# List all collections
recallos collections list

# Create a new collection
recallos collections create \\
  --name "project-atlas" \\
  --description "Architecture decisions for Project Atlas" \\
  --embedding-model text-embedding-3-large \\
  --tags engineering,architecture

# Get collection info
recallos collections info project-atlas

# Get collection stats
recallos collections stats project-atlas
# Memories: 1,247
# Embeddings: 1,247
# Index type: HNSW
# Avg query latency: 8ms
# Storage: 42 MB

# Export a collection
recallos collections export project-atlas \\
  --format json \\
  --output ./backup/atlas-backup.json

# Import a collection
recallos collections import \\
  --file ./backup/atlas-backup.json \\
  --name project-atlas-restored

# Delete a collection
recallos collections delete project-atlas --soft` })
  ] });
}
function APIAuthenticationSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "Authentication" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(P, { children: [
      "The RecallOS API uses API keys for authentication. Include your key in the",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(InlineCode, { children: "Authorization" }),
      " header of every request."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "API Keys" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "RecallOS provides two types of API keys:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-6 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 p-4 rounded-lg bg-white/[0.02] border border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-white mb-1", children: "Live Keys" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-white/50", children: [
          "Prefix: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(InlineCode, { children: "ros_sk_live_" }),
          " — Full access to your production data. Keep these secret and never expose them in client-side code."
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 p-4 rounded-lg bg-white/[0.02] border border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-white mb-1", children: "Test Keys" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-white/50", children: [
          "Prefix: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(InlineCode, { children: "ros_sk_test_" }),
          " — Access to sandbox data only. Safe for development and testing. Data is isolated from production."
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Authentication Header" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "bash", title: "curl", code: `curl https://api.recallos.com/v1/collections \\
  -H "Authorization: Bearer ros_sk_live_your_api_key" \\
  -H "Content-Type: application/json"` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Python SDK" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", code: `from recallos import MemoryClient

# Option 1: Environment variable (recommended)
# export RECALLOS_API_KEY=ros_sk_live_your_api_key
client = MemoryClient()

# Option 2: Explicit key
client = MemoryClient(api_key="ros_sk_live_your_api_key")` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { type: "warning", title: "Security", children: "Never commit API keys to version control. Use environment variables or a secrets manager. Rotate keys immediately if they are exposed." })
  ] });
}
function APIMemoriesSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "Memory Endpoints" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "The Memory API provides CRUD operations for individual memories within collections." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Create a Memory" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EndpointBadge, { method: "POST", path: "/v1/collections/:collection_id/memories" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ParamTable, { params: [{
      name: "text",
      type: "string",
      required: true,
      desc: "The text content of the memory (max 50,000 characters)"
    }, {
      name: "metadata",
      type: "object",
      desc: "Key-value metadata attached to the memory"
    }, {
      name: "id",
      type: "string",
      desc: "Custom memory ID (auto-generated if omitted)"
    }, {
      name: "deduplicate",
      type: "boolean",
      desc: "Check for semantic duplicates before inserting (default: true)"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "bash", title: "curl", code: `curl -X POST https://api.recallos.com/v1/collections/col_abc123/memories \\
  -H "Authorization: Bearer ros_sk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "We decided to use PostgreSQL for the primary database.",
    "metadata": {
      "author": "sarah",
      "category": "decision"
    }
  }'` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "python", title: "Python SDK", code: `memory = collection.insert(
    text="We decided to use PostgreSQL for the primary database.",
    metadata={"author": "sarah", "category": "decision"}
)
print(memory.id)  # mem_xyz789` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Get a Memory" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EndpointBadge, { method: "GET", path: "/v1/memories/:memory_id" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "bash", title: "curl", code: `curl https://api.recallos.com/v1/memories/mem_xyz789 \\
  -H "Authorization: Bearer ros_sk_live_..."` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "List Memories" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EndpointBadge, { method: "GET", path: "/v1/collections/:collection_id/memories" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ParamTable, { params: [{
      name: "limit",
      type: "integer",
      desc: "Maximum number of results (default: 20, max: 100)"
    }, {
      name: "offset",
      type: "integer",
      desc: "Pagination offset (default: 0)"
    }, {
      name: "order",
      type: "string",
      desc: "Sort order: 'created_at' | 'updated_at' (default: created_at)"
    }, {
      name: "direction",
      type: "string",
      desc: "Sort direction: 'asc' | 'desc' (default: desc)"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Delete a Memory" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EndpointBadge, { method: "DELETE", path: "/v1/memories/:memory_id" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "bash", title: "curl", code: `curl -X DELETE https://api.recallos.com/v1/memories/mem_xyz789 \\
  -H "Authorization: Bearer ros_sk_live_..."` })
  ] });
}
function APISearchSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "Search Endpoints" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Semantic Search" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EndpointBadge, { method: "POST", path: "/v1/collections/:collection_id/search" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ParamTable, { params: [{
      name: "query",
      type: "string",
      required: true,
      desc: "Natural language search query"
    }, {
      name: "top_k",
      type: "integer",
      desc: "Number of results to return (default: 5, max: 100)"
    }, {
      name: "min_score",
      type: "float",
      desc: "Minimum relevance score threshold (0.0 - 1.0)"
    }, {
      name: "filters",
      type: "object",
      desc: "Metadata filter predicates"
    }, {
      name: "mode",
      type: "string",
      desc: "'semantic' | 'keyword' | 'hybrid' (default: semantic)"
    }, {
      name: "recency_weight",
      type: "float",
      desc: "Weight for temporal recency boost (0.0 - 1.0)"
    }, {
      name: "graph_expand",
      type: "boolean",
      desc: "Enable knowledge graph expansion (default: false)"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "bash", title: "curl", code: `curl -X POST https://api.recallos.com/v1/collections/col_abc123/search \\
  -H "Authorization: Bearer ros_sk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "What database are we using?",
    "top_k": 5,
    "min_score": 0.7,
    "filters": {
      "and": [
        {"field": "category", "op": "eq", "value": "decision"}
      ]
    }
  }'` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Response Format" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "json", title: "response", code: `{
  "results": [
    {
      "id": "mem_xyz789",
      "text": "We decided to use PostgreSQL for the primary database.",
      "score": 0.9847,
      "metadata": {
        "author": "sarah",
        "category": "decision"
      },
      "created_at": "2025-01-15T10:30:00Z",
      "collection_id": "col_abc123"
    }
  ],
  "query_time_ms": 12,
  "total_candidates": 42
}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Multi-Collection Search" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EndpointBadge, { method: "POST", path: "/v1/search" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "bash", title: "curl", code: `curl -X POST https://api.recallos.com/v1/search \\
  -H "Authorization: Bearer ros_sk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "deployment best practices",
    "collections": ["col_abc123", "col_def456"],
    "top_k": 10,
    "merge_strategy": "interleave"
  }'` })
  ] });
}
function APICollectionsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "Collection Endpoints" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Create Collection" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EndpointBadge, { method: "POST", path: "/v1/collections" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ParamTable, { params: [{
      name: "name",
      type: "string",
      required: true,
      desc: "Unique collection name (alphanumeric, hyphens, underscores)"
    }, {
      name: "description",
      type: "string",
      desc: "Human-readable description"
    }, {
      name: "config",
      type: "object",
      desc: "Collection configuration (embedding model, index type, etc.)"
    }, {
      name: "tags",
      type: "string[]",
      desc: "Tags for organization and filtering"
    }, {
      name: "schema",
      type: "object",
      desc: "Optional metadata schema for validation"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "bash", title: "curl", code: `curl -X POST https://api.recallos.com/v1/collections \\
  -H "Authorization: Bearer ros_sk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "project-atlas",
    "description": "Architecture decisions for Project Atlas",
    "config": {
      "embedding_model": "text-embedding-3-large",
      "distance_metric": "cosine",
      "index_type": "hnsw"
    },
    "tags": ["engineering", "architecture"]
  }'` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "List Collections" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EndpointBadge, { method: "GET", path: "/v1/collections" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "bash", title: "curl", code: `curl https://api.recallos.com/v1/collections \\
  -H "Authorization: Bearer ros_sk_live_..."` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Get Collection" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EndpointBadge, { method: "GET", path: "/v1/collections/:collection_id" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Update Collection" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EndpointBadge, { method: "PATCH", path: "/v1/collections/:collection_id" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Delete Collection" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EndpointBadge, { method: "DELETE", path: "/v1/collections/:collection_id" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ParamTable, { params: [{
      name: "soft",
      type: "boolean",
      desc: "If true, soft delete (recoverable for 30 days). Default: true"
    }] })
  ] });
}
function TroubleshootingSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "Troubleshooting" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "Common issues and their solutions when working with RecallOS." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Connection Issues" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(H3, { children: "Cannot connect to local RecallOS engine" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "Verify the engine is running and the port is correct:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { language: "bash", code: `# Check if the process is running
recallos status

# Restart the engine
recallos restart

# Check the port
curl http://localhost:8420/health` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(H3, { children: "API key rejected" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(P, { children: [
      "Ensure your API key has the correct prefix (",
      /* @__PURE__ */ jsxRuntimeExports.jsx(InlineCode, { children: "ros_sk_live_" }),
      " for production, ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(InlineCode, { children: "ros_sk_test_" }),
      " for sandbox) and hasn't expired."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Search Quality Issues" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(H3, { children: "Search returns irrelevant results" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 my-4", children: ["Use descriptive, natural language queries instead of keywords", "Increase min_score threshold to filter low-relevance results", "Verify the embedding model is appropriate for your domain", "Check that memories contain sufficient context for semantic matching", "Enable hybrid search to combine semantic and keyword matching"].map((tip) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3 text-[#7CFF8A] mt-1.5 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white/60", children: tip })
    ] }, tip)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(H3, { children: "Search is slow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(P, { children: [
      "If queries take longer than 100ms, consider switching from a Flat index to HNSW, reducing the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(InlineCode, { children: "top_k" }),
      " value, or adding metadata filters to narrow the search space."
    ] })
  ] });
}
function CommonErrorsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "Common Errors" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "Reference for error codes you may encounter when using the RecallOS API." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6 overflow-x-auto rounded-xl border border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/5 bg-white/[0.02]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-white/50 font-medium", children: "Code" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-white/50 font-medium", children: "Error" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-white/50 font-medium", children: "Solution" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [{
        code: "401",
        error: "Invalid API Key",
        solution: "Check your API key is correct and active. Ensure the Authorization header format is 'Bearer ros_sk_...'."
      }, {
        code: "403",
        error: "Insufficient Permissions",
        solution: "Your API key doesn't have access to this collection. Check access controls."
      }, {
        code: "404",
        error: "Collection Not Found",
        solution: "The collection ID doesn't exist or has been deleted. Use 'recallos collections list' to verify."
      }, {
        code: "409",
        error: "Duplicate Memory",
        solution: "A semantically similar memory already exists. Set deduplicate=false to force insert, or lower dedup_threshold."
      }, {
        code: "413",
        error: "Memory Too Large",
        solution: "The text exceeds the max size (50,000 chars). Enable auto_chunk or split the document manually."
      }, {
        code: "429",
        error: "Rate Limited",
        solution: "You've exceeded the request rate limit. Implement exponential backoff or upgrade your plan."
      }, {
        code: "500",
        error: "Internal Error",
        solution: "An unexpected error occurred. Check recallos logs and report the issue with the request ID."
      }, {
        code: "503",
        error: "Engine Unavailable",
        solution: "The RecallOS engine is not running or is still initializing. Wait a moment and retry."
      }].map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/5 last:border-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-mono text-xs px-2 py-0.5 rounded ${parseInt(e.code) >= 500 ? "bg-red-500/10 text-red-400" : parseInt(e.code) >= 400 ? "bg-yellow-500/10 text-yellow-400" : "bg-[#7CFF8A]/10 text-[#7CFF8A]"}`, children: e.code }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-white/70 font-medium", children: e.error }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-white/50", children: e.solution })
      ] }, e.code)) })
    ] }) })
  ] });
}
function PerformanceTipsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { children: "Performance Tips" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(P, { children: "Optimize RecallOS for maximum throughput, lowest latency, and most efficient resource usage." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Embedding Optimization" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 my-4", children: ["Use text-embedding-3-small for cost-sensitive workloads (1536 dims, ~5x cheaper than large)", "Enable persistent embedding cache to avoid re-computing embeddings for duplicate text", "Batch inserts in groups of 100 to maximize embedding API throughput", "Consider local embedding models (bge-large, nomic-embed) for air-gapped or high-volume environments"].map((tip) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3 h-3 text-[#7CFF8A] mt-1.5 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white/60", children: tip })
    ] }, tip)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Query Optimization" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 my-4", children: ["Add metadata filters to narrow the search space before vector comparison", "Use HNSW index with ef_search=50 for the best latency/accuracy tradeoff", "Set reasonable top_k values — don't request 100 results if you only need 5", "Pre-warm queries with collection.warm() to load indices into memory", "Use the min_score parameter to skip low-relevance results early"].map((tip) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3 h-3 text-[#7CFF8A] mt-1.5 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white/60", children: tip })
    ] }, tip)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubHeading, { children: "Collection Design" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 my-4", children: ["Keep collections focused — one topic area per collection performs better than one giant collection", "Enable semantic deduplication to prevent index bloat from near-duplicate memories", "Use auto-chunking for documents longer than 2000 characters", "Archive inactive collections to free up memory — they can be restored on demand", "Monitor collection stats with 'recallos collections stats' to catch growing latency early"].map((tip) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3 h-3 text-[#7CFF8A] mt-1.5 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white/60", children: tip })
    ] }, tip)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { type: "tip", title: "Quick Win", children: "The single biggest performance improvement for most deployments is adding metadata filters. A filtered search over 10% of the collection is 10x faster than scanning everything, and the results are usually more relevant too." })
  ] });
}
const sectionComponents = {
  "introduction": IntroductionSection,
  "why-recallos": WhyRecallOSSection,
  "core-concepts": CoreConceptsSection,
  "installation": InstallationSection,
  "quickstart": QuickstartSection,
  "first-collection": FirstCollectionSection,
  "architecture-overview": ArchitectureOverviewSection,
  "memory-layer": MemoryLayerSection,
  "embeddings-pipeline": EmbeddingsPipelineSection,
  "vector-database": VectorDatabaseSection,
  "retrieval-system": RetrievalSystemSection,
  "knowledge-graph": KnowledgeGraphSection,
  "creating-collections": CreatingCollectionsSection,
  "updating-collections": UpdatingCollectionsSection,
  "deleting-collections": DeletingCollectionsSection,
  "searching-collections": SearchingCollectionsSection,
  "how-retrieval-works": HowRetrievalWorksSection,
  "search-examples": SearchExamplesSection,
  "search-best-practices": SearchBestPracticesSection,
  "integration-overview": IntegrationOverviewSection,
  "openai-integration": OpenAIIntegrationSection,
  "anthropic-integration": AnthropicIntegrationSection,
  "google-integration": GoogleIntegrationSection,
  "deepseek-integration": DeepSeekIntegrationSection,
  "open-source-integration": OpenSourceIntegrationSection,
  "cli-install": CLIInstallSection,
  "cli-init": CLIInitSection,
  "cli-memory": CLIMemorySection,
  "cli-search": CLISearchSection,
  "cli-collections": CLICollectionsSection,
  "api-authentication": APIAuthenticationSection,
  "api-memories": APIMemoriesSection,
  "api-search": APISearchSection,
  "api-collections": APICollectionsSection,
  "troubleshooting": TroubleshootingSection,
  "common-errors": CommonErrorsSection,
  "performance-tips": PerformanceTipsSection
};
function Sidebar({
  activeSection,
  searchQuery,
  onSearchChange,
  onSectionClick,
  expandedGroups,
  onToggleGroup
}) {
  const filteredGroups = reactExports.useMemo(() => {
    if (!searchQuery.trim()) return sidebarGroups;
    const q = searchQuery.toLowerCase();
    return sidebarGroups.map((g) => ({
      ...g,
      sections: g.sections.filter((s) => s.title.toLowerCase().includes(q) || g.label.toLowerCase().includes(q))
    })).filter((g) => g.sections.length > 0);
  }, [searchQuery]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Search docs...", value: searchQuery, onChange: (e) => onSearchChange(e.target.value), className: "w-full bg-white/[0.03] border border-white/10 rounded-xl py-2.5 pl-9 pr-12 text-sm text-white placeholder:text-white/30 focus:border-[#7CFF8A]/40 focus:bg-[#7CFF8A]/[0.03] focus:outline-none focus:ring-1 focus:ring-[#7CFF8A]/30 transition-all" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { className: "hidden sm:inline-block border border-white/10 rounded bg-white/5 px-1.5 text-[10px] text-white/25 font-mono", children: "⌘" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { className: "hidden sm:inline-block border border-white/10 rounded bg-white/5 px-1.5 text-[10px] text-white/25 font-mono", children: "K" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "space-y-1 overflow-y-auto flex-1 pr-1 -mr-1", children: filteredGroups.map((group) => {
      const isExpanded = expandedGroups.has(group.label) || searchQuery.trim().length > 0;
      const hasActive = group.sections.some((s) => s.id === activeSection);
      const Icon = group.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => onToggleGroup(group.label), className: `w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-all ${hasActive ? "text-[#7CFF8A] font-medium" : "text-white/50 hover:text-white/80 hover:bg-white/[0.03]"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: group.label })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? "rotate-0" : "-rotate-90"}` })
        ] }),
        isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-4 mt-0.5 pl-3 border-l border-white/5 space-y-0.5", children: group.sections.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => onSectionClick(section.id), className: `w-full text-left px-3 py-1.5 text-[13px] rounded-md transition-all ${activeSection === section.id ? "bg-[#7CFF8A]/10 text-[#7CFF8A] font-medium" : "text-white/40 hover:text-white/70 hover:bg-white/[0.03]"}`, children: section.title }, section.id)) })
      ] }, group.label);
    }) })
  ] });
}
function DocsPage() {
  const [activeSection, setActiveSection] = reactExports.useState("introduction");
  const [mobileMenuOpen, setMobileMenuOpen] = reactExports.useState(false);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [expandedGroups, setExpandedGroups] = reactExports.useState(() => {
    return /* @__PURE__ */ new Set(["Overview", "Getting Started"]);
  });
  const contentRef = reactExports.useRef(null);
  const currentSection = allSections.find((s) => s.id === activeSection);
  const CurrentComponent = sectionComponents[activeSection] || IntroductionSection;
  const handleSectionClick = reactExports.useCallback((id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const group = sidebarGroups.find((g) => g.sections.some((s) => s.id === id));
    if (group) {
      setExpandedGroups((prev) => /* @__PURE__ */ new Set([...prev, group.label]));
    }
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);
  const handleToggleGroup = reactExports.useCallback((label) => {
    setExpandedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  }, []);
  reactExports.useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        const input = document.querySelector('input[placeholder="Search docs..."]');
        input?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  const handlePrevNext = reactExports.useCallback((direction) => {
    const idx = allSections.findIndex((s) => s.id === activeSection);
    const nextIdx = direction === "next" ? idx + 1 : idx - 1;
    if (nextIdx >= 0 && nextIdx < allSections.length) {
      handleSectionClick(allSections[nextIdx].id);
    }
  }, [activeSection, handleSectionClick]);
  const currentIdx = allSections.findIndex((s) => s.id === activeSection);
  const prevSection = currentIdx > 0 ? allSections[currentIdx - 1] : null;
  const nextSection = currentIdx < allSections.length - 1 ? allSections[currentIdx + 1] : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#050A07] text-white selection:bg-[#7CFF8A]/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackgroundLayer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[90rem] px-4 pt-24 lg:flex lg:gap-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden flex items-center justify-between py-4 border-b border-white/10 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: "Docs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 text-white/20" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: currentSection?.group }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 text-white/20" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#7CFF8A]", children: currentSection?.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMobileMenuOpen(!mobileMenuOpen), className: "p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors", children: mobileMenuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-5 h-5" }) })
      ] }),
      mobileMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-40 lg:hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/60 backdrop-blur-sm", onClick: () => setMobileMenuOpen(false) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "absolute top-20 left-4 right-4 max-h-[70vh] overflow-y-auto bg-[#0A140D] border border-white/10 rounded-2xl p-5 shadow-2xl z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sidebar, { activeSection, searchQuery, onSearchChange: setSearchQuery, onSectionClick: handleSectionClick, expandedGroups, onToggleGroup: handleToggleGroup }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "hidden lg:block w-72 shrink-0 h-[calc(100vh-6rem)] sticky top-24 pb-12 pr-6 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sidebar, { activeSection, searchQuery, onSearchChange: setSearchQuery, onSectionClick: handleSectionClick, expandedGroups, onToggleGroup: handleToggleGroup }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 min-w-0 pb-32 lg:pt-0 lg:pl-6 lg:border-l lg:border-white/5", ref: contentRef, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex items-center gap-2 text-sm text-white/30 mb-8 font-medium pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hover:text-white/60 transition-colors cursor-pointer", children: "Docs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hover:text-white/60 transition-colors cursor-pointer", children: currentSection?.group }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#7CFF8A]", children: currentSection?.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0A140D]/50 border border-white/[0.04] backdrop-blur-xl rounded-2xl p-6 sm:p-10 lg:p-12 shadow-[0_0_60px_rgba(124,255,138,0.02)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 p-5 rounded-xl bg-gradient-to-r from-[#7CFF8A]/10 to-transparent border border-[#7CFF8A]/20 flex flex-col sm:flex-row items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-medium mb-1", children: "Get the Full Setup Guide" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/60", children: "Download the complete 21-page architectural reference and implementation guide." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/downloads", className: "whitespace-nowrap rounded-full bg-[#7CFF8A]/10 px-4 py-2 text-sm font-medium text-[#7CFF8A] hover:bg-[#7CFF8A]/20 transition-colors border border-[#7CFF8A]/20", children: "Download PDF" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CurrentComponent, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-16 pt-8 border-t border-white/5", children: [
            prevSection ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => handlePrevNext("prev"), className: "group flex flex-col items-start gap-1 p-4 rounded-xl hover:bg-white/[0.03] transition-colors max-w-[45%]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-white/30 group-hover:text-white/50 transition-colors flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3 rotate-180" }),
                "Previous"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white/60 group-hover:text-[#7CFF8A] transition-colors font-medium truncate", children: prevSection.title })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
            nextSection ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => handlePrevNext("next"), className: "group flex flex-col items-end gap-1 p-4 rounded-xl hover:bg-white/[0.03] transition-colors max-w-[45%]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-white/30 group-hover:text-white/50 transition-colors flex items-center gap-1", children: [
                "Next",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white/60 group-hover:text-[#7CFF8A] transition-colors font-medium truncate", children: nextSection.title })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {})
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  DocsPage as component
};
