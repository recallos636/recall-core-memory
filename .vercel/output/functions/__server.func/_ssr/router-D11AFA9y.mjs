import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as bs58 } from "../_libs/bs58.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { C as ConnectionProvider, W as WalletProvider, u as useWallet } from "../_libs/solana__wallet-adapter-react.mjs";
import { W as WalletModalProvider } from "../_libs/@solana/wallet-adapter-react-ui+[...].mjs";
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
import "stream";
import "util";
import "../_libs/isbot.mjs";
import "../_libs/base-x.mjs";
import "../_libs/safe-buffer.mjs";
import "buffer";
import "../_libs/solana__web3.js.mjs";
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
const appCss = "/assets/styles-hM6TT5Hv.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const AuthContext = reactExports.createContext(null);
function AuthProvider({ children }) {
  const { publicKey, signMessage, disconnect: walletDisconnect, connected, connecting, wallet } = useWallet();
  const [session, setSession] = reactExports.useState(null);
  const [isAuthenticating, setIsAuthenticating] = reactExports.useState(false);
  const [hasHydrated, setHasHydrated] = reactExports.useState(false);
  const syncSession = reactExports.useCallback(() => {
    const stored = localStorage.getItem("recallos_session");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setSession(parsed);
      } catch (e) {
        localStorage.removeItem("recallos_session");
        setSession(null);
      }
    } else {
      setSession(null);
    }
  }, []);
  reactExports.useEffect(() => {
    syncSession();
    setHasHydrated(true);
    const handleStorageChange = (e) => {
      if (e.key === "recallos_session") {
        syncSession();
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [syncSession]);
  const authenticate = reactExports.useCallback(async () => {
    if (!publicKey || !signMessage) return;
    if (session && session.publicKey === publicKey.toString()) {
      return;
    }
    setIsAuthenticating(true);
    try {
      const timestamp = Date.now();
      const message = `Welcome to RecallOS

Sign this message to verify wallet ownership.

Wallet:
${publicKey.toString()}

Timestamp:
${timestamp}`;
      const messageBytes = new TextEncoder().encode(message);
      const signatureBytes = await signMessage(messageBytes);
      const signature = bs58.encode(signatureBytes);
      const newSession = {
        publicKey: publicKey.toString(),
        signature,
        timestamp
      };
      setSession(newSession);
      localStorage.setItem("recallos_session", JSON.stringify(newSession));
      toast.success("Wallet authenticated successfully");
    } catch (error) {
      console.error("Authentication failed:", error);
      toast.error("Authentication failed. Please try again.");
      await walletDisconnect();
    } finally {
      setIsAuthenticating(false);
    }
  }, [publicKey, signMessage, session, walletDisconnect]);
  reactExports.useEffect(() => {
    if (!hasHydrated) return;
    if (connected && publicKey && !isAuthenticating) {
      if (!session || session.publicKey !== publicKey.toString()) {
        authenticate();
      }
    }
  }, [connected, publicKey, session, authenticate, isAuthenticating, hasHydrated]);
  const disconnect = reactExports.useCallback(async () => {
    setSession(null);
    localStorage.removeItem("recallos_session");
    await walletDisconnect();
  }, [walletDisconnect]);
  const truncatedAddress = publicKey ? `${publicKey.toString().slice(0, 4)}...${publicKey.toString().slice(-4)}` : "";
  const isFullyConnected = connected && !!session && !!publicKey && session.publicKey === publicKey.toString();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AuthContext.Provider,
    {
      value: {
        session,
        isAuthenticating,
        authenticate,
        disconnect,
        connected: isFullyConnected,
        connecting: connecting || isAuthenticating || !hasHydrated,
        publicKey,
        wallet,
        truncatedAddress
      },
      children
    }
  );
}
const endpoint = "https://api.mainnet-beta.solana.com";
function WalletContextProvider({ children }) {
  const wallets = reactExports.useMemo(() => [], []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ConnectionProvider, { endpoint, children: /* @__PURE__ */ jsxRuntimeExports.jsx(WalletProvider, { wallets, autoConnect: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(WalletModalProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AuthProvider, { children }) }) }) });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-[#050A07] px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-white", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-white", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-white/60", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/20 border border-white/10",
        children: "Return to Home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$3 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "RecallOS — The Memory Layer For AI" },
      { name: "description", content: "Persistent AI memory infrastructure on Solana with live ecosystem token support." },
      { name: "author", content: "RecallOS" },
      { property: "og:title", content: "RecallOS — The Memory Layer For AI" },
      { property: "og:description", content: "Persistent AI memory infrastructure on Solana with live ecosystem token support." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://recallos.live" },
      { property: "og:image", content: "https://recallos.live/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@RecallOS" },
      { name: "twitter:image", content: "https://recallos.live/og-image.png" }
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
      },
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$3.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(WalletContextProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) });
}
const $$splitComponentImporter$2 = () => import("./downloads-7DD5bM0l.mjs");
const Route$2 = createFileRoute("/downloads")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./docs-sxJte2x3.mjs");
const Route$1 = createFileRoute("/docs")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-sQV5V5lW.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "RecallOS — The Memory Layer For AI"
    }, {
      name: "description",
      content: "Persistent AI memory infrastructure on Solana with live ecosystem token support."
    }, {
      property: "og:title",
      content: "RecallOS — The Memory Layer For AI"
    }, {
      property: "og:description",
      content: "Persistent AI memory infrastructure on Solana with live ecosystem token support."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const DownloadsRoute = Route$2.update({
  id: "/downloads",
  path: "/downloads",
  getParentRoute: () => Route$3
});
const DocsRoute = Route$1.update({
  id: "/docs",
  path: "/docs",
  getParentRoute: () => Route$3
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$3
});
const rootRouteChildren = {
  IndexRoute,
  DocsRoute,
  DownloadsRoute
};
const routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  AuthContext as A,
  router as r
};
