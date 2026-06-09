import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useWalletAuth, B as BackgroundLayer, N as Navbar, C as ConnectWalletButton, F as Footer } from "./BackgroundLayer-Mikfjp9E.mjs";
import "../_libs/bs58.mjs";
import "../_libs/sonner.mjs";
import { F as FileText, C as CircleCheck, L as Lock } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "./router-BJUcTRnC.mjs";
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
function checkAccess(publicKey, resource) {
  if (!publicKey) return false;
  switch (resource) {
    case "download":
      return true;
    case "premium":
    case "token_holder":
      return false;
    case "beta":
    case "nft_holder":
      return false;
    default:
      return false;
  }
}
function DownloadsPage() {
  const {
    connected,
    publicKey,
    session
  } = useWalletAuth();
  const hasAccess = connected && publicKey && checkAccess(publicKey.toString(), "download");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen overflow-x-hidden text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackgroundLayer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative pt-40 pb-24 sm:pt-48 sm:pb-32 px-4 max-w-7xl mx-auto flex flex-col items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl sm:text-6xl font-semibold tracking-tight text-white mb-6", children: "RecallOS Documentation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-white/60", children: "The Complete Setup & Implementation Guide" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/50", children: "Persistent, Semantic, Model-Agnostic Memory for AI Agents and Applications" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liquid-glass-strong relative overflow-hidden rounded-3xl w-full max-w-xl p-8 sm:p-12 shadow-[0_0_80px_rgba(124,255,138,0.05)] border border-[#7CFF8A]/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-8 pb-8 border-b border-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-[#7CFF8A]/20 to-[#0F2A18]/40 text-[#4AFF71]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-8 w-8" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-medium text-white", children: "Version 2.4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider bg-[#7CFF8A]/10 text-[#7CFF8A] border border-[#7CFF8A]/20", children: "Professional" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/50", children: "21 Pages · PDF Document" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 mb-10", children: ["Complete Setup Guide", "Architecture Reference", "Installation Guide", "Integration Examples", "Benchmarks", "Security & Compliance"].map((feature, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-[#7CFF8A]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80", children: feature })
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto", children: hasAccess ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: async () => {
          if (!session) return;
          const res = await fetch("/api/download", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              publicKey: session.publicKey,
              signature: session.signature
            })
          });
          if (!res.ok) {
            alert("Unauthorized. Please reconnect wallet.");
            return;
          }
          const blob = await res.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "RecallOS_Complete_Documentation.pdf";
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        }, className: "flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium tracking-tight transition-all duration-300 text-[#0c0c0c] bg-gradient-to-b from-[#4AFF71] to-[#7CFF8A] shadow-[0_10px_40px_-10px_rgba(101,255,154,0.35),inset_0_1px_0_rgba(255,255,255,0.6)] hover:shadow-[0_18px_50px_-10px_rgba(101,255,154,0.45),inset_0_1px_0_rgba(255,255,255,0.7)] hover:-translate-y-0.5 cursor-pointer", children: "Download Documentation" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-5 h-5 text-white/40 shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-white mb-1", children: "Access Required" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/50 leading-relaxed", children: "Connect your Solana wallet to download the complete documentation, early access resources, and secure future token holder benefits." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ConnectWalletButton, { className: "w-full justify-center py-3.5" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  DownloadsPage as component
};
