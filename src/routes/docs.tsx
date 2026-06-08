import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { BackgroundLayer } from "@/components/recallos/BackgroundLayer";
import { Navbar } from "@/components/recallos/Navbar";
import { Footer } from "@/components/recallos/Footer";
import {
  Search,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  Check,
  Copy,
  BookOpen,
  Rocket,
  Layers,
  Database,
  Compass,
  Plug,
  Terminal,
  Code2,
  HelpCircle,
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Brain,
  GitBranch,
  Box,
  Cpu,
  Network,
  type LucideIcon,
} from "lucide-react";

export const Route = createFileRoute("/docs")({
  component: DocsPage,
});

/* ─────────────────────────────────────────────
   Types
   ───────────────────────────────────────────── */

interface DocSection {
  id: string;
  title: string;
  group: string;
}

interface SidebarGroup {
  label: string;
  icon: LucideIcon;
  sections: DocSection[];
}

/* ─────────────────────────────────────────────
   Navigation Structure
   ───────────────────────────────────────────── */

const sidebarGroups: SidebarGroup[] = [
  {
    label: "Overview",
    icon: BookOpen,
    sections: [
      { id: "introduction", title: "Introduction", group: "Overview" },
      { id: "why-recallos", title: "Why RecallOS?", group: "Overview" },
      { id: "core-concepts", title: "Core Concepts", group: "Overview" },
    ],
  },
  {
    label: "Getting Started",
    icon: Rocket,
    sections: [
      { id: "installation", title: "Installation", group: "Getting Started" },
      { id: "quickstart", title: "Quickstart", group: "Getting Started" },
      { id: "first-collection", title: "First Memory Collection", group: "Getting Started" },
    ],
  },
  {
    label: "Architecture",
    icon: Layers,
    sections: [
      { id: "architecture-overview", title: "Overview", group: "Architecture" },
      { id: "memory-layer", title: "Memory Layer", group: "Architecture" },
      { id: "embeddings-pipeline", title: "Embeddings Pipeline", group: "Architecture" },
      { id: "vector-database", title: "Vector Database", group: "Architecture" },
      { id: "retrieval-system", title: "Retrieval System", group: "Architecture" },
      { id: "knowledge-graph", title: "Knowledge Graph", group: "Architecture" },
    ],
  },
  {
    label: "Memory Collections",
    icon: Database,
    sections: [
      { id: "creating-collections", title: "Creating Collections", group: "Memory Collections" },
      { id: "updating-collections", title: "Updating Collections", group: "Memory Collections" },
      { id: "deleting-collections", title: "Deleting Collections", group: "Memory Collections" },
      { id: "searching-collections", title: "Searching Collections", group: "Memory Collections" },
    ],
  },
  {
    label: "Semantic Search",
    icon: Compass,
    sections: [
      { id: "how-retrieval-works", title: "How Retrieval Works", group: "Semantic Search" },
      { id: "search-examples", title: "Examples", group: "Semantic Search" },
      { id: "search-best-practices", title: "Best Practices", group: "Semantic Search" },
    ],
  },
  {
    label: "Integrations",
    icon: Plug,
    sections: [
      { id: "integration-overview", title: "Overview", group: "Integrations" },
      { id: "openai-integration", title: "OpenAI (GPT)", group: "Integrations" },
      { id: "anthropic-integration", title: "Anthropic (Claude)", group: "Integrations" },
      { id: "google-integration", title: "Google (Gemini)", group: "Integrations" },
      { id: "deepseek-integration", title: "DeepSeek", group: "Integrations" },
      { id: "open-source-integration", title: "Open Source Models", group: "Integrations" },
    ],
  },
  {
    label: "CLI Reference",
    icon: Terminal,
    sections: [
      { id: "cli-install", title: "Installation", group: "CLI Reference" },
      { id: "cli-init", title: "Initialization", group: "CLI Reference" },
      { id: "cli-memory", title: "Memory Commands", group: "CLI Reference" },
      { id: "cli-search", title: "Search Commands", group: "CLI Reference" },
      { id: "cli-collections", title: "Collection Commands", group: "CLI Reference" },
    ],
  },
  {
    label: "API Reference",
    icon: Code2,
    sections: [
      { id: "api-authentication", title: "Authentication", group: "API Reference" },
      { id: "api-memories", title: "Memory Endpoints", group: "API Reference" },
      { id: "api-search", title: "Search Endpoints", group: "API Reference" },
      { id: "api-collections", title: "Collection Endpoints", group: "API Reference" },
    ],
  },
  {
    label: "FAQ",
    icon: HelpCircle,
    sections: [
      { id: "troubleshooting", title: "Troubleshooting", group: "FAQ" },
      { id: "common-errors", title: "Common Errors", group: "FAQ" },
      { id: "performance-tips", title: "Performance Tips", group: "FAQ" },
    ],
  },
];

const allSections = sidebarGroups.flatMap((g) => g.sections);

/* ─────────────────────────────────────────────
   Syntax Highlighting (inline, no deps)
   ───────────────────────────────────────────── */

function highlightSyntax(code: string, language: string): React.ReactNode[] {
  const lines = code.split("\n");

  const keywords = new Set([
    "import", "from", "def", "class", "return", "if", "else", "elif", "for",
    "while", "try", "except", "finally", "with", "as", "in", "not", "and",
    "or", "is", "None", "True", "False", "async", "await", "const", "let",
    "var", "function", "export", "default", "new", "this", "yield", "raise",
    "pass", "break", "continue", "lambda", "del", "global", "nonlocal",
    "assert", "type", "interface", "extends", "implements",
  ]);

  const builtins = new Set([
    "print", "len", "range", "str", "int", "float", "list", "dict", "set",
    "tuple", "bool", "map", "filter", "zip", "enumerate", "isinstance",
    "hasattr", "getattr", "setattr", "super", "self", "console", "fetch",
    "JSON", "Promise", "Array", "Object", "Math", "Date", "Error",
  ]);

  const tokenize = (line: string): React.ReactNode[] => {
    const nodes: React.ReactNode[] = [];
    // Regex tokenizer
    const regex =
      /(#[^\n]*|\/\/[^\n]*|"""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\b\d+\.?\d*\b|[a-zA-Z_]\w*|[^\s\w]|\s+)/g;
    let match: RegExpExecArray | null;
    let key = 0;
    while ((match = regex.exec(line)) !== null) {
      const token = match[0];
      key++;
      // Comments
      if (token.startsWith("#") || token.startsWith("//")) {
        nodes.push(<span key={key} className="text-white/30 italic">{token}</span>);
      }
      // Strings
      else if (
        (token.startsWith('"') && token.endsWith('"')) ||
        (token.startsWith("'") && token.endsWith("'")) ||
        (token.startsWith("`") && token.endsWith("`")) ||
        token.startsWith('"""') || token.startsWith("'''")
      ) {
        nodes.push(<span key={key} className="text-[#4AFF71]">{token}</span>);
      }
      // Numbers
      else if (/^\d+\.?\d*$/.test(token)) {
        nodes.push(<span key={key} className="text-[#FFD700]">{token}</span>);
      }
      // Keywords
      else if (keywords.has(token)) {
        nodes.push(<span key={key} className="text-[#7CFF8A] font-medium">{token}</span>);
      }
      // Builtins
      else if (builtins.has(token)) {
        nodes.push(<span key={key} className="text-[#65FF9A]">{token}</span>);
      }
      // Decorators / special
      else if (token === "@") {
        nodes.push(<span key={key} className="text-[#FF79C6]">{token}</span>);
      }
      // Operators / punctuation
      else if (/^[^\s\w]$/.test(token)) {
        nodes.push(<span key={key} className="text-white/60">{token}</span>);
      }
      // Default
      else {
        nodes.push(<span key={key} className="text-white/90">{token}</span>);
      }
    }
    return nodes;
  };

  return lines.map((line, i) => (
    <div key={i} className="flex">
      <span className="inline-block w-8 shrink-0 text-right pr-4 text-white/20 select-none text-xs leading-6">
        {i + 1}
      </span>
      <span className="leading-6">{tokenize(line)}</span>
    </div>
  ));
}

/* ─────────────────────────────────────────────
   Code Block Component
   ───────────────────────────────────────────── */

function CodeBlock({
  code,
  language = "bash",
  title,
}: {
  code: string;
  language?: string;
  title?: string;
}) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="relative group my-6 rounded-xl overflow-hidden bg-[#060E09] border border-[#7CFF8A]/10 shadow-[0_0_30px_rgba(124,255,138,0.04)]">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-white/[0.03]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
          <span className="text-xs text-white/40 font-mono">
            {title || language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-white/30 hover:text-white/70 transition-colors px-2 py-1 rounded-md hover:bg-white/5"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#7CFF8A]" />
              <span className="text-[#7CFF8A]">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="p-4 overflow-x-auto text-[13px] font-mono whitespace-pre">
        {highlightSyntax(code.trim(), language)}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Reusable Doc Typography Components
   ───────────────────────────────────────────── */

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-3">
      {children}
    </h1>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mt-12 mb-4 flex items-center gap-3">
      <span className="w-1 h-6 bg-[#7CFF8A] rounded-full" />
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-medium text-white/90 mt-8 mb-3">{children}</h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[15px] leading-7 text-white/65 mb-4">{children}</p>
  );
}

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="px-1.5 py-0.5 rounded-md bg-[#7CFF8A]/10 text-[#7CFF8A] text-[13px] font-mono border border-[#7CFF8A]/10">
      {children}
    </code>
  );
}

function Callout({
  type = "info",
  title,
  children,
}: {
  type?: "info" | "warning" | "tip";
  title?: string;
  children: React.ReactNode;
}) {
  const styles = {
    info: "border-[#7CFF8A]/20 bg-[#7CFF8A]/5",
    warning: "border-yellow-500/20 bg-yellow-500/5",
    tip: "border-blue-400/20 bg-blue-400/5",
  };
  const iconColors = {
    info: "text-[#7CFF8A]",
    warning: "text-yellow-400",
    tip: "text-blue-400",
  };
  const icons = {
    info: <Zap className={`w-4 h-4 ${iconColors[type]}`} />,
    warning: <Shield className={`w-4 h-4 ${iconColors[type]}`} />,
    tip: <Brain className={`w-4 h-4 ${iconColors[type]}`} />,
  };

  return (
    <div className={`my-6 rounded-xl border p-5 ${styles[type]}`}>
      <div className="flex items-center gap-2 mb-2">
        {icons[type]}
        <span className={`text-sm font-medium ${iconColors[type]}`}>
          {title || type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </div>
      <div className="text-sm text-white/60 leading-6">{children}</div>
    </div>
  );
}

function ParamTable({
  params,
}: {
  params: { name: string; type: string; required?: boolean; desc: string }[];
}) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-white/5">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/5 bg-white/[0.02]">
            <th className="text-left px-4 py-3 text-white/50 font-medium">Parameter</th>
            <th className="text-left px-4 py-3 text-white/50 font-medium">Type</th>
            <th className="text-left px-4 py-3 text-white/50 font-medium">Required</th>
            <th className="text-left px-4 py-3 text-white/50 font-medium">Description</th>
          </tr>
        </thead>
        <tbody>
          {params.map((p) => (
            <tr key={p.name} className="border-b border-white/5 last:border-0">
              <td className="px-4 py-3">
                <InlineCode>{p.name}</InlineCode>
              </td>
              <td className="px-4 py-3 text-white/50 font-mono text-xs">{p.type}</td>
              <td className="px-4 py-3">
                {p.required ? (
                  <span className="text-[#7CFF8A] text-xs font-medium">Required</span>
                ) : (
                  <span className="text-white/30 text-xs">Optional</span>
                )}
              </td>
              <td className="px-4 py-3 text-white/60">{p.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EndpointBadge({ method, path }: { method: string; path: string }) {
  const colors: Record<string, string> = {
    GET: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    POST: "bg-[#7CFF8A]/10 text-[#7CFF8A] border-[#7CFF8A]/20",
    PUT: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    PATCH: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    DELETE: "bg-red-500/10 text-red-400 border-red-500/20",
  };

  return (
    <div className="flex items-center gap-3 my-4 p-3 rounded-lg bg-white/[0.02] border border-white/5">
      <span className={`px-2 py-0.5 rounded text-xs font-mono font-bold border ${colors[method] || "bg-white/10 text-white border-white/20"}`}>
        {method}
      </span>
      <code className="text-sm font-mono text-white/70">{path}</code>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Documentation Content Sections
   ───────────────────────────────────────────── */

function IntroductionSection() {
  return (
    <>
      <Heading>Introduction</Heading>
      <P>
        RecallOS is the memory infrastructure layer for AI agents and applications. It provides a
        complete system for storing, indexing, and retrieving knowledge with sub-50ms latency —
        giving your AI persistent memory that survives across sessions, conversations, and deployments.
      </P>
      <P>
        Unlike traditional databases or vector stores, RecallOS was built from the ground up for the
        unique demands of AI workloads. It combines semantic embeddings, structured metadata, and
        graph-based relationships into a unified memory layer that any language model can query
        naturally.
      </P>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        {[
          { icon: Zap, title: "Sub-50ms Retrieval", desc: "Optimized vector indices with HNSW graphs deliver results in under 50 milliseconds, even at millions of memories." },
          { icon: Shield, title: "Enterprise Security", desc: "End-to-end encryption at rest and in transit, SOC 2 Type II compliant, with fine-grained access controls." },
          { icon: Globe, title: "Model Agnostic", desc: "Works with OpenAI, Anthropic, Google, DeepSeek, Mistral, Llama, and any model that produces embeddings." },
          { icon: Brain, title: "Semantic Understanding", desc: "Goes beyond keyword matching — understands meaning, context, and relationships between memories." },
        ].map((f) => (
          <div key={f.title} className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#7CFF8A]/20 transition-colors">
            <f.icon className="w-5 h-5 text-[#7CFF8A] mb-3" />
            <h3 className="text-sm font-medium text-white mb-1.5">{f.title}</h3>
            <p className="text-xs text-white/50 leading-5">{f.desc}</p>
          </div>
        ))}
      </div>

      <Callout type="info" title="Currently in v2.4">
        RecallOS v2.4 introduces streaming retrieval, multi-tenant collections, and a redesigned
        knowledge graph engine. If you're upgrading from v1.x, see the migration guide.
      </Callout>
    </>
  );
}

function WhyRecallOSSection() {
  return (
    <>
      <Heading>Why RecallOS?</Heading>
      <P>
        Modern AI agents face a fundamental limitation: they forget everything between sessions.
        Context windows are finite, conversation histories get truncated, and critical decisions
        made weeks ago vanish without a trace. RecallOS solves this by providing a persistent,
        semantically-indexed memory layer that gives your agents true long-term recall.
      </P>

      <SubHeading>The Problem</SubHeading>
      <P>
        Every AI application eventually hits the same walls. Token limits force you to truncate
        important context. RAG pipelines built on generic vector databases return irrelevant
        results because they lack domain-specific understanding. And building a custom memory
        system from scratch means months of engineering effort — handling embeddings, vector
        indexing, metadata filtering, access control, and consistency guarantees.
      </P>

      <SubHeading>How RecallOS Helps</SubHeading>
      <div className="space-y-4 my-6">
        {[
          { title: "Persistent Identity", desc: "Agents maintain knowledge, preferences, and decision history across unlimited sessions. Your AI assistant remembers what it learned last Tuesday." },
          { title: "Semantic Precision", desc: "RecallOS doesn't just store vectors — it understands relationships. Ask 'What did we decide about the database?' and it retrieves the architectural decision, not every mention of the word database." },
          { title: "Team Knowledge Sharing", desc: "Collections can be shared across agents and team members. One agent learns something, and every agent on the team benefits immediately." },
          { title: "Zero Infrastructure Overhead", desc: "No need to manage Pinecone, Weaviate, or Qdrant separately. RecallOS bundles an optimized vector engine, embedding pipeline, and query planner into a single install." },
        ].map((item) => (
          <div key={item.title} className="flex gap-4 p-4 rounded-lg bg-white/[0.02] border border-white/5">
            <ArrowRight className="w-4 h-4 text-[#7CFF8A] mt-0.5 shrink-0" />
            <div>
              <h3 className="text-sm font-medium text-white mb-1">{item.title}</h3>
              <p className="text-xs text-white/50 leading-5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function CoreConceptsSection() {
  return (
    <>
      <Heading>Core Concepts</Heading>
      <P>
        Before diving into code, it helps to understand the four foundational primitives that
        RecallOS is built on. These concepts appear throughout the API, CLI, and SDKs.
      </P>

      <SubHeading>Memory</SubHeading>
      <P>
        A <InlineCode>Memory</InlineCode> is the fundamental unit of storage in RecallOS. It consists of a text payload,
        an automatically-generated embedding vector, optional structured metadata, and a timestamp.
        Memories are immutable once created — to update content, you create a new version that
        supersedes the original while preserving the full history.
      </P>
      <CodeBlock language="python" code={`from recallos import Memory

memory = Memory(
    text="The team decided to use PostgreSQL for the primary database.",
    metadata={
        "author": "sarah",
        "project": "atlas",
        "category": "architecture_decision",
        "confidence": 0.95
    }
)`} />

      <SubHeading>Collections</SubHeading>
      <P>
        A <InlineCode>Collection</InlineCode> is a namespace that groups related memories together. Think of it like a
        database table or an S3 bucket — it provides logical isolation, independent access controls,
        and its own embedding configuration. Each collection can use a different embedding model,
        distance metric, and indexing strategy optimized for its specific workload.
      </P>

      <SubHeading>Embeddings</SubHeading>
      <P>
        RecallOS automatically converts every memory's text into a high-dimensional vector embedding
        using your configured model. These embeddings capture the semantic meaning of the text,
        enabling retrieval based on conceptual similarity rather than keyword matching. RecallOS
        supports OpenAI, Cohere, Voyage, and local embedding models out of the box.
      </P>

      <SubHeading>Retrieval</SubHeading>
      <P>
        The retrieval engine combines vector similarity search with metadata filtering, temporal
        weighting, and knowledge graph traversal to find the most relevant memories for any query.
        Results are ranked by a composite score that balances semantic similarity, recency, and
        contextual relevance — configurable per query.
      </P>

      <Callout type="tip" title="Mental Model">
        Think of RecallOS as a brain for your AI: Memories are individual thoughts, Collections
        are topic areas, Embeddings are the neural connections that link related ideas, and Retrieval
        is the act of recalling the right memory at the right time.
      </Callout>
    </>
  );
}

function InstallationSection() {
  return (
    <>
      <Heading>Installation</Heading>
      <P>
        RecallOS can be installed via Python's pip, Node.js npm, or as a standalone Docker container.
        Choose the method that best fits your stack. All methods include the core engine,
        embedding pipeline, and vector database — no external dependencies required.
      </P>

      <SubHeading>Python (Recommended)</SubHeading>
      <P>
        The Python SDK is the most feature-complete client and supports all RecallOS capabilities
        including streaming retrieval and async operations.
      </P>
      <CodeBlock language="bash" title="terminal" code={`# Install the RecallOS Python SDK
pip install recallos

# Verify the installation
recallos --version
# RecallOS v2.4.1

# Initialize a new project
recallos init --project my-agent`} />

      <SubHeading>Node.js</SubHeading>
      <P>
        The Node.js SDK provides full TypeScript support with type-safe queries, streaming results
        via async iterators, and first-class support for serverless environments.
      </P>
      <CodeBlock language="bash" title="terminal" code={`# Install with npm
npm install @recallos/sdk

# Or with yarn
yarn add @recallos/sdk

# Or with pnpm
pnpm add @recallos/sdk`} />

      <SubHeading>Docker</SubHeading>
      <P>
        Run RecallOS as a standalone service accessible over HTTP. This is ideal for production
        deployments, multi-language environments, or when you want a centralized memory server
        shared across multiple agents.
      </P>
      <CodeBlock language="bash" title="terminal" code={`# Pull the official image
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
# {"status": "healthy", "version": "2.4.1"}`} />

      <SubHeading>System Requirements</SubHeading>
      <div className="my-6 overflow-x-auto rounded-xl border border-white/5">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.02]">
              <th className="text-left px-4 py-3 text-white/50 font-medium">Requirement</th>
              <th className="text-left px-4 py-3 text-white/50 font-medium">Minimum</th>
              <th className="text-left px-4 py-3 text-white/50 font-medium">Recommended</th>
            </tr>
          </thead>
          <tbody>
            {[
              { req: "Python", min: "3.9+", rec: "3.11+" },
              { req: "Node.js", min: "18+", rec: "20 LTS" },
              { req: "Memory", min: "512 MB", rec: "2 GB+" },
              { req: "Disk Space", min: "200 MB", rec: "1 GB+" },
              { req: "OS", min: "Linux, macOS, Windows", rec: "Linux (Ubuntu 22.04+)" },
            ].map((r) => (
              <tr key={r.req} className="border-b border-white/5 last:border-0">
                <td className="px-4 py-3 text-white/70 font-medium">{r.req}</td>
                <td className="px-4 py-3 text-white/50">{r.min}</td>
                <td className="px-4 py-3 text-white/50">{r.rec}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function QuickstartSection() {
  return (
    <>
      <Heading>Quickstart</Heading>
      <P>
        This guide walks you through the essential workflow in under five minutes: connect to
        RecallOS, create a memory collection, store a memory, and retrieve it using semantic search.
      </P>

      <SubHeading>Step 1: Initialize the Client</SubHeading>
      <P>
        Create a <InlineCode>MemoryClient</InlineCode> instance. It automatically discovers your API key from the
        environment variable <InlineCode>RECALLOS_API_KEY</InlineCode>, or you can pass it explicitly.
      </P>
      <CodeBlock language="python" title="quickstart.py" code={`from recallos import MemoryClient

# Reads RECALLOS_API_KEY from environment
client = MemoryClient()

# Or pass explicitly
client = MemoryClient(api_key="ros_sk_live_...")`} />

      <SubHeading>Step 2: Create a Collection</SubHeading>
      <P>
        Collections group related memories. Give each collection a descriptive name and optionally
        configure the embedding model and distance metric.
      </P>
      <CodeBlock language="python" title="quickstart.py" code={`collection = client.create_collection(
    name="project-atlas",
    description="Architecture decisions and meeting notes for Project Atlas",
    embedding_model="text-embedding-3-large",
    distance_metric="cosine"
)

print(f"Created collection: {collection.id}")
# Created collection: col_9f8k2m4n1p`} />

      <SubHeading>Step 3: Store Memories</SubHeading>
      <P>
        Insert individual memories or batch-insert multiple memories at once. RecallOS automatically
        generates embeddings and indexes them for retrieval.
      </P>
      <CodeBlock language="python" title="quickstart.py" code={`# Store a single memory
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

print(f"Stored {len(memories)} memories")`} />

      <SubHeading>Step 4: Retrieve Memories</SubHeading>
      <P>
        Query your collection using natural language. RecallOS finds the most semantically relevant
        memories, even if the exact words don't match.
      </P>
      <CodeBlock language="python" title="quickstart.py" code={`# Semantic search
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
# Meta:  {'author': 'sarah', 'category': 'decision', ...}`} />

      <Callout type="info" title="What Just Happened?">
        RecallOS converted your query into an embedding vector, searched the collection's HNSW
        index for the nearest neighbors, applied metadata-aware re-ranking, and returned the top
        results — all in under 50ms.
      </Callout>
    </>
  );
}

function FirstCollectionSection() {
  return (
    <>
      <Heading>First Memory Collection</Heading>
      <P>
        Now that you've seen the basic workflow, let's explore the full power of collections.
        This guide covers configuration options, advanced metadata schemas, and best practices
        for organizing your AI's memory.
      </P>

      <SubHeading>Collection Configuration</SubHeading>
      <P>
        Every collection supports a rich set of configuration options that control how memories
        are embedded, indexed, and retrieved.
      </P>
      <CodeBlock language="python" title="advanced_collection.py" code={`from recallos import MemoryClient, CollectionConfig

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
)`} />

      <SubHeading>Metadata Schemas</SubHeading>
      <P>
        Define a metadata schema to enforce consistency and enable type-safe filtering. Schemas
        are optional but strongly recommended for production collections.
      </P>
      <CodeBlock language="python" title="schema.py" code={`from recallos import MetadataSchema, Field

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
)`} />

      <Callout type="tip" title="Best Practice">
        Start with a loose schema and tighten it as patterns emerge. Use the{" "}
        <InlineCode>indexed=True</InlineCode> flag on fields you plan to filter by — this creates
        a secondary index that dramatically speeds up filtered queries.
      </Callout>
    </>
  );
}

function ArchitectureOverviewSection() {
  return (
    <>
      <Heading>Architecture Overview</Heading>
      <P>
        RecallOS is composed of five core subsystems that work together to deliver fast, accurate
        memory retrieval. Understanding this architecture helps you make informed decisions about
        configuration and optimization.
      </P>
      <div className="my-8 p-6 rounded-xl bg-white/[0.02] border border-white/5">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-center">
          {[
            { icon: Box, label: "Memory Layer" },
            { icon: Cpu, label: "Embeddings" },
            { icon: Database, label: "Vector DB" },
            { icon: Compass, label: "Retrieval" },
            { icon: Network, label: "Knowledge Graph" },
          ].map((item, i) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-[#7CFF8A]/10 border border-[#7CFF8A]/20 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-[#7CFF8A]" />
              </div>
              <span className="text-xs text-white/60">{item.label}</span>
              {i < 4 && (
                <ArrowRight className="w-3 h-3 text-white/20 hidden sm:block absolute" style={{ display: "none" }} />
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <div className="flex items-center gap-2 text-xs text-white/30">
            <span>Input</span>
            <div className="w-16 h-px bg-gradient-to-r from-white/20 to-[#7CFF8A]/40" />
            <span>Process</span>
            <div className="w-16 h-px bg-gradient-to-r from-[#7CFF8A]/40 to-[#7CFF8A]/60" />
            <span>Store</span>
            <div className="w-16 h-px bg-gradient-to-r from-[#7CFF8A]/60 to-[#7CFF8A]/40" />
            <span>Retrieve</span>
            <div className="w-16 h-px bg-gradient-to-r from-[#7CFF8A]/40 to-white/20" />
            <span>Connect</span>
          </div>
        </div>
      </div>
      <P>
        When you insert a memory, it flows through the pipeline left-to-right: the Memory Layer
        validates and normalizes the input, the Embeddings Pipeline converts it to a vector, the
        Vector Database indexes it for fast retrieval, and the Knowledge Graph extracts and stores
        entity relationships. When you query, the Retrieval System orchestrates a search across
        all these subsystems and returns a ranked list of results.
      </P>
    </>
  );
}

function MemoryLayerSection() {
  return (
    <>
      <Heading>Memory Layer</Heading>
      <P>
        The Memory Layer is the ingestion gateway. It handles validation, normalization, chunking,
        and version management for all incoming memories.
      </P>

      <SubHeading>Text Processing</SubHeading>
      <P>
        Before embedding, the Memory Layer applies a configurable text processing pipeline:
      </P>
      <div className="space-y-2 my-4">
        {[
          "Unicode normalization (NFC) to ensure consistent encoding",
          "Whitespace collapsing and trimming",
          "Automatic language detection (supports 50+ languages)",
          "Configurable chunking for long documents (sliding window, sentence-boundary, or paragraph-level)",
          "Deduplication check against existing memories (exact hash or semantic similarity)",
        ].map((item) => (
          <div key={item} className="flex gap-3 items-start">
            <ChevronRight className="w-3 h-3 text-[#7CFF8A] mt-1.5 shrink-0" />
            <span className="text-sm text-white/60">{item}</span>
          </div>
        ))}
      </div>

      <SubHeading>Versioning</SubHeading>
      <P>
        Memories in RecallOS are append-only. When you "update" a memory, you create a new version
        linked to the original. This preserves the complete history and enables temporal queries
        like "What did we believe about X three months ago?"
      </P>
      <CodeBlock language="python" code={`# Create a new version of an existing memory
updated = collection.update_memory(
    memory_id="mem_abc123",
    text="We switched from PostgreSQL to CockroachDB for multi-region support.",
    metadata={"author": "sarah", "category": "decision_update"}
)

# Access version history
history = collection.get_memory_history("mem_abc123")
for version in history:
    print(f"v{version.version} ({version.created_at}): {version.text[:60]}...")`} />
    </>
  );
}

function EmbeddingsPipelineSection() {
  return (
    <>
      <Heading>Embeddings Pipeline</Heading>
      <P>
        The Embeddings Pipeline is responsible for converting text memories into high-dimensional
        vector representations. It supports multiple embedding providers, handles batching and
        rate limiting, and caches results to minimize cost and latency.
      </P>

      <SubHeading>Supported Models</SubHeading>
      <div className="my-6 overflow-x-auto rounded-xl border border-white/5">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.02]">
              <th className="text-left px-4 py-3 text-white/50 font-medium">Provider</th>
              <th className="text-left px-4 py-3 text-white/50 font-medium">Model</th>
              <th className="text-left px-4 py-3 text-white/50 font-medium">Dimensions</th>
              <th className="text-left px-4 py-3 text-white/50 font-medium">Max Tokens</th>
            </tr>
          </thead>
          <tbody>
            {[
              { provider: "OpenAI", model: "text-embedding-3-large", dims: "3072", tokens: "8191" },
              { provider: "OpenAI", model: "text-embedding-3-small", dims: "1536", tokens: "8191" },
              { provider: "Cohere", model: "embed-english-v3.0", dims: "1024", tokens: "512" },
              { provider: "Voyage", model: "voyage-large-2", dims: "1536", tokens: "16000" },
              { provider: "Local", model: "bge-large-en-v1.5", dims: "1024", tokens: "512" },
              { provider: "Local", model: "nomic-embed-text-v1.5", dims: "768", tokens: "8192" },
            ].map((m) => (
              <tr key={m.model} className="border-b border-white/5 last:border-0">
                <td className="px-4 py-3 text-white/70">{m.provider}</td>
                <td className="px-4 py-3"><InlineCode>{m.model}</InlineCode></td>
                <td className="px-4 py-3 text-white/50 font-mono text-xs">{m.dims}</td>
                <td className="px-4 py-3 text-white/50 font-mono text-xs">{m.tokens}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SubHeading>Batching & Caching</SubHeading>
      <P>
        RecallOS automatically batches embedding requests to maximize throughput and minimize API
        calls. Embeddings are cached locally by content hash, so inserting a duplicate text incurs
        zero additional embedding cost.
      </P>
      <CodeBlock language="python" code={`# Configure embedding behavior at the collection level
config = CollectionConfig(
    embedding_model="text-embedding-3-large",
    embedding_batch_size=100,       # Texts per API call
    embedding_cache="persistent",   # "none" | "memory" | "persistent"
    embedding_timeout=30,           # Seconds before timeout
    embedding_retries=3             # Retry on transient failures
)`} />
    </>
  );
}

function VectorDatabaseSection() {
  return (
    <>
      <Heading>Vector Database</Heading>
      <P>
        RecallOS includes a purpose-built vector database engine optimized for AI memory workloads.
        It uses Hierarchical Navigable Small World (HNSW) graphs for approximate nearest neighbor
        search, delivering consistent sub-50ms latency at scale.
      </P>

      <SubHeading>Index Types</SubHeading>
      <P>
        Choose the index type based on your latency, accuracy, and memory requirements:
      </P>
      <div className="my-6 overflow-x-auto rounded-xl border border-white/5">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.02]">
              <th className="text-left px-4 py-3 text-white/50 font-medium">Index</th>
              <th className="text-left px-4 py-3 text-white/50 font-medium">Latency</th>
              <th className="text-left px-4 py-3 text-white/50 font-medium">Accuracy</th>
              <th className="text-left px-4 py-3 text-white/50 font-medium">Memory</th>
              <th className="text-left px-4 py-3 text-white/50 font-medium">Best For</th>
            </tr>
          </thead>
          <tbody>
            {[
              { idx: "HNSW", lat: "~5ms", acc: "~99%", mem: "High", best: "Production workloads, sub-10ms queries" },
              { idx: "IVF", lat: "~15ms", acc: "~95%", mem: "Medium", best: "Large collections (10M+ memories)" },
              { idx: "Flat", lat: "~100ms", acc: "100%", mem: "Low", best: "Small collections, exact results needed" },
            ].map((r) => (
              <tr key={r.idx} className="border-b border-white/5 last:border-0">
                <td className="px-4 py-3"><InlineCode>{r.idx}</InlineCode></td>
                <td className="px-4 py-3 text-white/50">{r.lat}</td>
                <td className="px-4 py-3 text-white/50">{r.acc}</td>
                <td className="px-4 py-3 text-white/50">{r.mem}</td>
                <td className="px-4 py-3 text-white/50">{r.best}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SubHeading>Distance Metrics</SubHeading>
      <P>
        The distance metric determines how similarity is calculated between vectors:
      </P>
      <div className="space-y-2 my-4">
        {[
          { metric: "Cosine", desc: "Measures the angle between vectors. Best for normalized embeddings (OpenAI, Cohere). This is the default." },
          { metric: "Euclidean", desc: "Measures the straight-line distance. Better for embeddings where magnitude matters." },
          { metric: "Dot Product", desc: "Measures the projection of one vector onto another. Fastest computation, good for pre-normalized vectors." },
        ].map((item) => (
          <div key={item.metric} className="flex gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5">
            <InlineCode>{item.metric.toLowerCase()}</InlineCode>
            <span className="text-sm text-white/50">{item.desc}</span>
          </div>
        ))}
      </div>
    </>
  );
}

function RetrievalSystemSection() {
  return (
    <>
      <Heading>Retrieval System</Heading>
      <P>
        The Retrieval System is the query engine that sits atop the vector database. It goes far
        beyond basic nearest-neighbor search by applying metadata filtering, temporal weighting,
        diversity sampling, and knowledge graph expansion to produce high-quality results.
      </P>

      <SubHeading>Query Pipeline</SubHeading>
      <P>
        Every query flows through a multi-stage pipeline:
      </P>
      <div className="space-y-2 my-6">
        {[
          { step: "1. Query Embedding", desc: "The search query is converted into a vector using the collection's embedding model." },
          { step: "2. Candidate Retrieval", desc: "The HNSW index returns the top-N nearest neighbors (typically 10x the requested top_k)." },
          { step: "3. Metadata Filtering", desc: "Candidates are filtered by metadata predicates (e.g., author == 'sarah', category in ['decision'])." },
          { step: "4. Temporal Weighting", desc: "Recent memories receive a configurable recency boost." },
          { step: "5. Diversity Sampling", desc: "MMR (Maximal Marginal Relevance) removes near-duplicate results." },
          { step: "6. Graph Expansion", desc: "If enabled, related memories from the knowledge graph are injected into results." },
          { step: "7. Re-ranking", desc: "A cross-encoder re-ranker (optional) computes precise relevance scores." },
        ].map((item) => (
          <div key={item.step} className="flex gap-3 items-start p-3 rounded-lg bg-white/[0.02] border border-white/5">
            <span className="text-xs font-mono text-[#7CFF8A] shrink-0 mt-0.5">{item.step.split(".")[0]}.</span>
            <div>
              <span className="text-sm text-white/80 font-medium">{item.step.split(". ")[1]}</span>
              <p className="text-xs text-white/40 mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function KnowledgeGraphSection() {
  return (
    <>
      <Heading>Knowledge Graph</Heading>
      <P>
        The Knowledge Graph is an optional but powerful subsystem that automatically extracts
        entities and relationships from your memories, building a structured graph that enhances
        retrieval with contextual connections.
      </P>

      <SubHeading>How It Works</SubHeading>
      <P>
        When <InlineCode>enable_knowledge_graph=True</InlineCode> is set on a collection, RecallOS
        uses a lightweight NER (Named Entity Recognition) model to extract entities (people, tools,
        projects, concepts) and infer relationships between them. These relationships are stored
        in a graph index alongside the vector embeddings.
      </P>
      <CodeBlock language="python" code={`# Enable knowledge graph on a collection
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
# [Relationship(subject="Sarah", predicate="recommended", object="CockroachDB")]`} />

      <SubHeading>Graph-Enhanced Retrieval</SubHeading>
      <P>
        When the knowledge graph is enabled, queries automatically traverse entity relationships
        to surface contextually related memories that pure vector search might miss.
      </P>
      <CodeBlock language="python" code={`# Standard vector search + graph expansion
results = collection.search(
    query="What has Sarah contributed to the architecture?",
    top_k=5,
    graph_expand=True,      # Traverse entity relationships
    graph_depth=2           # How many hops to traverse
)

# Results will include:
# 1. Direct mentions of Sarah in architecture context
# 2. Decisions Sarah made that affected architecture
# 3. Topics connected to Sarah's recommendations`} />
    </>
  );
}

function CreatingCollectionsSection() {
  return (
    <>
      <Heading>Creating Collections</Heading>
      <P>
        Collections are the primary organizational unit in RecallOS. Each collection is an isolated
        namespace with its own embedding configuration, access controls, and indexing strategy.
      </P>

      <SubHeading>Basic Creation</SubHeading>
      <CodeBlock language="python" code={`from recallos import MemoryClient

client = MemoryClient()

# Create with defaults (cosine distance, text-embedding-3-small)
collection = client.create_collection("my-project")

# Create with a description
collection = client.create_collection(
    name="customer-support-kb",
    description="Knowledge base for customer support agents"
)`} />

      <SubHeading>Advanced Configuration</SubHeading>
      <CodeBlock language="python" code={`from recallos import CollectionConfig

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
)`} />

      <SubHeading>Node.js</SubHeading>
      <CodeBlock language="typescript" title="collections.ts" code={`import { RecallOS } from "@recallos/sdk";

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

console.log(\`Created: \${collection.id}\`);`} />
    </>
  );
}

function UpdatingCollectionsSection() {
  return (
    <>
      <Heading>Updating Collections</Heading>
      <P>
        You can update a collection's metadata, configuration, and access controls after creation.
        Note that some settings — like the embedding model and distance metric — cannot be changed
        after memories have been inserted, as they would invalidate existing embeddings.
      </P>

      <SubHeading>Update Metadata</SubHeading>
      <CodeBlock language="python" code={`# Update name and description
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
)`} />

      <SubHeading>Mutable vs Immutable Settings</SubHeading>
      <div className="my-6 overflow-x-auto rounded-xl border border-white/5">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.02]">
              <th className="text-left px-4 py-3 text-white/50 font-medium">Setting</th>
              <th className="text-left px-4 py-3 text-white/50 font-medium">Mutable</th>
              <th className="text-left px-4 py-3 text-white/50 font-medium">Notes</th>
            </tr>
          </thead>
          <tbody>
            {[
              { setting: "name", mutable: "Yes", notes: "Can be changed anytime" },
              { setting: "description", mutable: "Yes", notes: "Can be changed anytime" },
              { setting: "tags", mutable: "Yes", notes: "Can be added/removed anytime" },
              { setting: "access controls", mutable: "Yes", notes: "Changes take effect immediately" },
              { setting: "embedding_model", mutable: "No*", notes: "Requires re-indexing if changed" },
              { setting: "distance_metric", mutable: "No*", notes: "Requires re-indexing if changed" },
              { setting: "index_type", mutable: "No*", notes: "Requires re-indexing if changed" },
              { setting: "deduplication", mutable: "Yes", notes: "Only affects new inserts" },
            ].map((r) => (
              <tr key={r.setting} className="border-b border-white/5 last:border-0">
                <td className="px-4 py-3"><InlineCode>{r.setting}</InlineCode></td>
                <td className="px-4 py-3 text-white/50">{r.mutable}</td>
                <td className="px-4 py-3 text-white/50">{r.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Callout type="warning" title="Re-indexing">
        Changing the embedding model, distance metric, or index type on a collection that already
        contains memories requires a full re-index. Use{" "}
        <InlineCode>collection.reindex()</InlineCode> to trigger this — it runs in the background
        and the collection remains queryable during the process.
      </Callout>
    </>
  );
}

function DeletingCollectionsSection() {
  return (
    <>
      <Heading>Deleting Collections</Heading>
      <P>
        Collections can be soft-deleted (recoverable for 30 days) or permanently destroyed.
        Deletion removes all associated memories, embeddings, metadata, and knowledge graph data.
      </P>

      <SubHeading>Soft Delete</SubHeading>
      <CodeBlock language="python" code={`# Soft delete — recoverable for 30 days
client.delete_collection("project-atlas", soft=True)

# List soft-deleted collections
deleted = client.list_collections(include_deleted=True)

# Restore a soft-deleted collection
client.restore_collection("project-atlas")`} />

      <SubHeading>Permanent Delete</SubHeading>
      <CodeBlock language="python" code={`# Permanent delete — cannot be recovered
client.delete_collection("project-atlas", soft=False, confirm=True)

# This is equivalent to:
collection = client.get_collection("project-atlas")
collection.destroy(confirm="project-atlas")  # Must type the name to confirm`} />

      <Callout type="warning" title="Caution">
        Permanent deletion is irreversible. All memories, embeddings, graph data, and version
        history will be permanently erased. Always prefer soft delete unless you're certain you
        won't need the data.
      </Callout>
    </>
  );
}

function SearchingCollectionsSection() {
  return (
    <>
      <Heading>Searching Collections</Heading>
      <P>
        RecallOS provides rich search capabilities including semantic search, metadata filtering,
        temporal queries, and full-text search. These can be combined freely to build precise queries.
      </P>

      <SubHeading>Semantic Search</SubHeading>
      <CodeBlock language="python" code={`results = collection.search(
    query="What database technology decisions have been made?",
    top_k=10
)`} />

      <SubHeading>Filtered Search</SubHeading>
      <CodeBlock language="python" code={`from recallos import Filter

results = collection.search(
    query="architecture decisions",
    top_k=5,
    filters=Filter.and_(
        Filter.eq("category", "decision"),
        Filter.eq("author", "sarah"),
        Filter.gte("confidence", 0.8)
    )
)`} />

      <SubHeading>Temporal Search</SubHeading>
      <CodeBlock language="python" code={`from datetime import datetime, timedelta

# Search only recent memories
results = collection.search(
    query="deployment strategy",
    top_k=5,
    after=datetime.now() - timedelta(days=30),
    recency_weight=0.3   # Boost recent memories by 30%
)`} />

      <SubHeading>Hybrid Search</SubHeading>
      <P>
        Combine semantic search with full-text keyword search for the best of both worlds:
      </P>
      <CodeBlock language="python" code={`results = collection.search(
    query="PostgreSQL performance tuning",
    top_k=5,
    mode="hybrid",           # "semantic" | "keyword" | "hybrid"
    semantic_weight=0.7,     # 70% semantic, 30% keyword
    keyword_weight=0.3
)`} />
    </>
  );
}

function HowRetrievalWorksSection() {
  return (
    <>
      <Heading>How RecallOS Retrieval Works</Heading>
      <P>
        RecallOS retrieval goes far beyond simple vector similarity search. It uses a multi-stage
        pipeline that combines embedding-based retrieval with metadata filtering, diversity sampling,
        and optional knowledge graph expansion to deliver the most relevant results.
      </P>

      <SubHeading>The Retrieval Pipeline</SubHeading>
      <P>
        When you call <InlineCode>collection.search()</InlineCode>, the following happens in sequence:
      </P>
      <CodeBlock language="text" title="retrieval pipeline" code={`Query: "What database are we using?"
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
└─────────────────────────┘`} />

      <SubHeading>Scoring Formula</SubHeading>
      <P>
        The final relevance score for each memory is a weighted combination of factors:
      </P>
      <CodeBlock language="text" code={`score = (w_semantic * cosine_similarity)
      + (w_recency * temporal_decay)
      + (w_graph * graph_centrality)
      - (w_diversity * max_similarity_to_higher_ranked)

Default weights:
  w_semantic  = 0.7
  w_recency   = 0.15
  w_graph     = 0.1
  w_diversity = 0.05`} />
    </>
  );
}

function SearchExamplesSection() {
  return (
    <>
      <Heading>Search Examples</Heading>
      <P>
        Here are practical examples demonstrating the full range of RecallOS search capabilities.
      </P>

      <SubHeading>Natural Language Query</SubHeading>
      <CodeBlock language="python" title="search_examples.py" code={`# Simple natural language query
results = collection.search(
    query="Why did we choose this tech stack?",
    top_k=5
)

for r in results:
    print(f"[{r.score:.2f}] {r.text[:100]}...")`} />

      <SubHeading>Multi-Collection Search</SubHeading>
      <CodeBlock language="python" title="multi_search.py" code={`# Search across multiple collections simultaneously
results = client.multi_search(
    query="authentication best practices",
    collections=["engineering-kb", "security-docs", "meeting-notes"],
    top_k=10,
    merge_strategy="interleave"  # "interleave" | "append" | "score"
)

for r in results:
    print(f"[{r.collection}] [{r.score:.2f}] {r.text[:80]}...")`} />

      <SubHeading>Streaming Results</SubHeading>
      <CodeBlock language="python" title="streaming.py" code={`# Stream results as they arrive (useful for large top_k)
async for result in collection.search_stream(
    query="deployment procedures",
    top_k=100
):
    process_result(result)
    if result.score < 0.5:
        break  # Stop early when relevance drops`} />

      <SubHeading>Search with Context Window</SubHeading>
      <CodeBlock language="python" title="context_window.py" code={`# Build a context window for an LLM prompt
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

Question: Summarize our database architecture decisions."""`} />
    </>
  );
}

function SearchBestPracticesSection() {
  return (
    <>
      <Heading>Search Best Practices</Heading>
      <P>
        Maximize retrieval quality with these proven techniques for query construction, collection
        design, and result handling.
      </P>

      <SubHeading>Write Descriptive Queries</SubHeading>
      <P>
        Semantic search works best with natural, descriptive queries. Instead of keywords, write
        the question as you'd ask a knowledgeable colleague.
      </P>
      <div className="my-6 space-y-3">
        <div className="flex items-start gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/10">
          <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
          <div>
            <span className="text-sm text-red-400 font-medium">Avoid</span>
            <p className="text-xs text-white/50 mt-1 font-mono">"postgres config"</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-3 rounded-lg bg-[#7CFF8A]/5 border border-[#7CFF8A]/10">
          <Check className="w-4 h-4 text-[#7CFF8A] mt-0.5 shrink-0" />
          <div>
            <span className="text-sm text-[#7CFF8A] font-medium">Better</span>
            <p className="text-xs text-white/50 mt-1 font-mono">"How is our PostgreSQL database configured and what were the reasons for those settings?"</p>
          </div>
        </div>
      </div>

      <SubHeading>Use Metadata Effectively</SubHeading>
      <P>
        Well-structured metadata dramatically improves filtered search. Use consistent, indexable
        fields across all memories in a collection.
      </P>

      <SubHeading>Tune top_k and Score Thresholds</SubHeading>
      <P>
        Start with <InlineCode>top_k=5</InlineCode> and a minimum score threshold of 0.7 for
        most use cases. Increase <InlineCode>top_k</InlineCode> when you need comprehensive
        coverage; decrease it when you need only the single best match.
      </P>
      <CodeBlock language="python" code={`# Apply a minimum score threshold
results = collection.search(
    query="authentication requirements",
    top_k=10,
    min_score=0.7    # Only return results above this threshold
)

# Adaptive retrieval: start strict, widen if needed
results = collection.search(query=query, top_k=3, min_score=0.85)
if len(results) < 2:
    results = collection.search(query=query, top_k=10, min_score=0.6)`} />

      <SubHeading>Memory Hygiene</SubHeading>
      <div className="space-y-2 my-4">
        {[
          "Store atomic, self-contained memories — each should make sense on its own",
          "Include relevant context in the text, not just conclusions",
          "Use semantic deduplication to prevent near-duplicate memories",
          "Archive stale collections instead of letting them grow indefinitely",
          "Review and prune low-confidence memories periodically",
        ].map((tip) => (
          <div key={tip} className="flex gap-3 items-start">
            <ChevronRight className="w-3 h-3 text-[#7CFF8A] mt-1.5 shrink-0" />
            <span className="text-sm text-white/60">{tip}</span>
          </div>
        ))}
      </div>
    </>
  );
}

function IntegrationOverviewSection() {
  return (
    <>
      <Heading>Integrations</Heading>
      <P>
        RecallOS integrates with every major LLM provider and framework. These integrations let
        you add persistent memory to any AI agent or application with just a few lines of code.
      </P>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-8">
        {[
          { name: "OpenAI", tag: "GPT-4o" },
          { name: "Anthropic", tag: "Claude 4" },
          { name: "Google", tag: "Gemini 2.5" },
          { name: "DeepSeek", tag: "V3" },
          { name: "Qwen", tag: "Qwen3" },
          { name: "Llama", tag: "Llama 4" },
          { name: "Mistral", tag: "Large" },
          { name: "HuggingFace", tag: "Transformers" },
        ].map((p) => (
          <div key={p.name} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#7CFF8A]/20 transition-colors">
            <span className="text-sm text-white/80 font-medium">{p.name}</span>
            <span className="text-xs text-[#7CFF8A]/60 font-mono">{p.tag}</span>
          </div>
        ))}
      </div>
    </>
  );
}

function OpenAIIntegrationSection() {
  return (
    <>
      <Heading>OpenAI (GPT) Integration</Heading>
      <P>
        Add persistent memory to GPT-4o, GPT-4o-mini, or any OpenAI model. RecallOS retrieves
        relevant context and injects it into the system prompt automatically.
      </P>
      <CodeBlock language="python" title="openai_integration.py" code={`from recallos import MemoryClient
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
)`} />
    </>
  );
}

function AnthropicIntegrationSection() {
  return (
    <>
      <Heading>Anthropic (Claude) Integration</Heading>
      <P>
        RecallOS provides a first-class integration with Anthropic's Claude models, including
        support for Claude's extended thinking and tool use features.
      </P>
      <CodeBlock language="python" title="anthropic_integration.py" code={`from recallos import MemoryClient
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

print(response.content[0].text)`} />
    </>
  );
}

function GoogleIntegrationSection() {
  return (
    <>
      <Heading>Google (Gemini) Integration</Heading>
      <P>
        Use RecallOS with Gemini 2.5 Pro, Flash, and other Google AI models. The integration
        supports both the Google AI Studio API and Vertex AI.
      </P>
      <CodeBlock language="python" title="gemini_integration.py" code={`from recallos import MemoryClient
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

print(response.text)`} />
    </>
  );
}

function DeepSeekIntegrationSection() {
  return (
    <>
      <Heading>DeepSeek Integration</Heading>
      <P>
        RecallOS supports DeepSeek models through the OpenAI-compatible API, making it simple
        to add persistent memory to DeepSeek-V3 and DeepSeek-R1 applications.
      </P>
      <CodeBlock language="python" title="deepseek_integration.py" code={`from recallos import MemoryClient
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

print(response.choices[0].message.content)`} />
    </>
  );
}

function OpenSourceIntegrationSection() {
  return (
    <>
      <Heading>Open Source Models</Heading>
      <P>
        RecallOS works with any model served through an OpenAI-compatible API, including Llama,
        Mistral, Qwen, and models hosted on HuggingFace Inference Endpoints.
      </P>

      <SubHeading>Llama (via Ollama or vLLM)</SubHeading>
      <CodeBlock language="python" title="llama_integration.py" code={`from recallos import MemoryClient
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
)`} />

      <SubHeading>Mistral</SubHeading>
      <CodeBlock language="python" title="mistral_integration.py" code={`from recallos.integrations import MistralMemory
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
)`} />

      <SubHeading>HuggingFace Inference Endpoints</SubHeading>
      <CodeBlock language="python" title="huggingface_integration.py" code={`from recallos.integrations import HuggingFaceMemory
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
)`} />
    </>
  );
}

function CLIInstallSection() {
  return (
    <>
      <Heading>CLI Installation</Heading>
      <P>
        The RecallOS CLI is installed automatically with the Python package. It provides a complete
        command-line interface for managing collections, memories, and search operations.
      </P>
      <CodeBlock language="bash" code={`# Install via pip (includes CLI)
pip install recallos

# Verify CLI installation
recallos --version
# recallos v2.4.1

# View all available commands
recallos --help`} />

      <SubHeading>Shell Completions</SubHeading>
      <CodeBlock language="bash" code={`# Bash
recallos completions bash >> ~/.bashrc

# Zsh
recallos completions zsh >> ~/.zshrc

# Fish
recallos completions fish > ~/.config/fish/completions/recallos.fish

# PowerShell
recallos completions powershell >> $PROFILE`} />
    </>
  );
}

function CLIInitSection() {
  return (
    <>
      <Heading>CLI Initialization</Heading>
      <P>
        The <InlineCode>recallos init</InlineCode> command sets up a new RecallOS project in the
        current directory, creates a configuration file, and optionally connects to a remote
        RecallOS server.
      </P>
      <CodeBlock language="bash" code={`# Interactive initialization
recallos init

# Non-interactive with options
recallos init \\
  --project my-agent \\
  --api-key ros_sk_live_... \\
  --storage local \\
  --embedding-model text-embedding-3-large

# Initialize with Docker backend
recallos init --backend docker --port 8420`} />

      <SubHeading>Configuration File</SubHeading>
      <P>
        Initialization creates a <InlineCode>recallos.yaml</InlineCode> file in your project root:
      </P>
      <CodeBlock language="yaml" title="recallos.yaml" code={`project: my-agent
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
  file: .recallos/logs/recallos.log`} />
    </>
  );
}

function CLIMemorySection() {
  return (
    <>
      <Heading>Memory Commands</Heading>
      <P>
        The CLI provides full CRUD operations for memories within collections.
      </P>

      <SubHeading>Create</SubHeading>
      <CodeBlock language="bash" code={`# Insert a memory
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
  --file ./memories.json`} />

      <SubHeading>Read</SubHeading>
      <CodeBlock language="bash" code={`# Get a specific memory
recallos memory get mem_abc123

# List memories in a collection
recallos memory list --collection project-atlas --limit 20

# Get memory with version history
recallos memory get mem_abc123 --versions`} />

      <SubHeading>Delete</SubHeading>
      <CodeBlock language="bash" code={`# Delete a specific memory
recallos memory delete mem_abc123

# Delete all memories matching a filter
recallos memory delete-where \\
  --collection project-atlas \\
  --filter "category=draft"

# Purge all memories (requires confirmation)
recallos memory purge --collection project-atlas --confirm`} />
    </>
  );
}

function CLISearchSection() {
  return (
    <>
      <Heading>Search Commands</Heading>
      <P>
        Search your collections directly from the command line with full support for semantic
        queries, metadata filters, and output formatting.
      </P>
      <CodeBlock language="bash" code={`# Basic semantic search
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
recallos search --interactive --collection project-atlas`} />
    </>
  );
}

function CLICollectionsSection() {
  return (
    <>
      <Heading>Collection Commands</Heading>
      <P>
        Manage your memory collections from the command line.
      </P>
      <CodeBlock language="bash" code={`# List all collections
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
recallos collections delete project-atlas --soft`} />
    </>
  );
}

function APIAuthenticationSection() {
  return (
    <>
      <Heading>Authentication</Heading>
      <P>
        The RecallOS API uses API keys for authentication. Include your key in the{" "}
        <InlineCode>Authorization</InlineCode> header of every request.
      </P>

      <SubHeading>API Keys</SubHeading>
      <P>
        RecallOS provides two types of API keys:
      </P>
      <div className="my-6 space-y-3">
        <div className="flex gap-3 p-4 rounded-lg bg-white/[0.02] border border-white/5">
          <div>
            <h3 className="text-sm font-medium text-white mb-1">Live Keys</h3>
            <p className="text-xs text-white/50">
              Prefix: <InlineCode>ros_sk_live_</InlineCode> — Full access to your production data.
              Keep these secret and never expose them in client-side code.
            </p>
          </div>
        </div>
        <div className="flex gap-3 p-4 rounded-lg bg-white/[0.02] border border-white/5">
          <div>
            <h3 className="text-sm font-medium text-white mb-1">Test Keys</h3>
            <p className="text-xs text-white/50">
              Prefix: <InlineCode>ros_sk_test_</InlineCode> — Access to sandbox data only. Safe
              for development and testing. Data is isolated from production.
            </p>
          </div>
        </div>
      </div>

      <SubHeading>Authentication Header</SubHeading>
      <CodeBlock language="bash" title="curl" code={`curl https://api.recallos.com/v1/collections \\
  -H "Authorization: Bearer ros_sk_live_your_api_key" \\
  -H "Content-Type: application/json"`} />

      <SubHeading>Python SDK</SubHeading>
      <CodeBlock language="python" code={`from recallos import MemoryClient

# Option 1: Environment variable (recommended)
# export RECALLOS_API_KEY=ros_sk_live_your_api_key
client = MemoryClient()

# Option 2: Explicit key
client = MemoryClient(api_key="ros_sk_live_your_api_key")`} />

      <Callout type="warning" title="Security">
        Never commit API keys to version control. Use environment variables or a secrets manager.
        Rotate keys immediately if they are exposed.
      </Callout>
    </>
  );
}

function APIMemoriesSection() {
  return (
    <>
      <Heading>Memory Endpoints</Heading>
      <P>
        The Memory API provides CRUD operations for individual memories within collections.
      </P>

      <SubHeading>Create a Memory</SubHeading>
      <EndpointBadge method="POST" path="/v1/collections/:collection_id/memories" />
      <ParamTable params={[
        { name: "text", type: "string", required: true, desc: "The text content of the memory (max 50,000 characters)" },
        { name: "metadata", type: "object", desc: "Key-value metadata attached to the memory" },
        { name: "id", type: "string", desc: "Custom memory ID (auto-generated if omitted)" },
        { name: "deduplicate", type: "boolean", desc: "Check for semantic duplicates before inserting (default: true)" },
      ]} />
      <CodeBlock language="bash" title="curl" code={`curl -X POST https://api.recallos.com/v1/collections/col_abc123/memories \\
  -H "Authorization: Bearer ros_sk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "We decided to use PostgreSQL for the primary database.",
    "metadata": {
      "author": "sarah",
      "category": "decision"
    }
  }'`} />
      <CodeBlock language="python" title="Python SDK" code={`memory = collection.insert(
    text="We decided to use PostgreSQL for the primary database.",
    metadata={"author": "sarah", "category": "decision"}
)
print(memory.id)  # mem_xyz789`} />

      <SubHeading>Get a Memory</SubHeading>
      <EndpointBadge method="GET" path="/v1/memories/:memory_id" />
      <CodeBlock language="bash" title="curl" code={`curl https://api.recallos.com/v1/memories/mem_xyz789 \\
  -H "Authorization: Bearer ros_sk_live_..."`} />

      <SubHeading>List Memories</SubHeading>
      <EndpointBadge method="GET" path="/v1/collections/:collection_id/memories" />
      <ParamTable params={[
        { name: "limit", type: "integer", desc: "Maximum number of results (default: 20, max: 100)" },
        { name: "offset", type: "integer", desc: "Pagination offset (default: 0)" },
        { name: "order", type: "string", desc: "Sort order: 'created_at' | 'updated_at' (default: created_at)" },
        { name: "direction", type: "string", desc: "Sort direction: 'asc' | 'desc' (default: desc)" },
      ]} />

      <SubHeading>Delete a Memory</SubHeading>
      <EndpointBadge method="DELETE" path="/v1/memories/:memory_id" />
      <CodeBlock language="bash" title="curl" code={`curl -X DELETE https://api.recallos.com/v1/memories/mem_xyz789 \\
  -H "Authorization: Bearer ros_sk_live_..."`} />
    </>
  );
}

function APISearchSection() {
  return (
    <>
      <Heading>Search Endpoints</Heading>

      <SubHeading>Semantic Search</SubHeading>
      <EndpointBadge method="POST" path="/v1/collections/:collection_id/search" />
      <ParamTable params={[
        { name: "query", type: "string", required: true, desc: "Natural language search query" },
        { name: "top_k", type: "integer", desc: "Number of results to return (default: 5, max: 100)" },
        { name: "min_score", type: "float", desc: "Minimum relevance score threshold (0.0 - 1.0)" },
        { name: "filters", type: "object", desc: "Metadata filter predicates" },
        { name: "mode", type: "string", desc: "'semantic' | 'keyword' | 'hybrid' (default: semantic)" },
        { name: "recency_weight", type: "float", desc: "Weight for temporal recency boost (0.0 - 1.0)" },
        { name: "graph_expand", type: "boolean", desc: "Enable knowledge graph expansion (default: false)" },
      ]} />
      <CodeBlock language="bash" title="curl" code={`curl -X POST https://api.recallos.com/v1/collections/col_abc123/search \\
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
  }'`} />

      <SubHeading>Response Format</SubHeading>
      <CodeBlock language="json" title="response" code={`{
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
}`} />

      <SubHeading>Multi-Collection Search</SubHeading>
      <EndpointBadge method="POST" path="/v1/search" />
      <CodeBlock language="bash" title="curl" code={`curl -X POST https://api.recallos.com/v1/search \\
  -H "Authorization: Bearer ros_sk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "deployment best practices",
    "collections": ["col_abc123", "col_def456"],
    "top_k": 10,
    "merge_strategy": "interleave"
  }'`} />
    </>
  );
}

function APICollectionsSection() {
  return (
    <>
      <Heading>Collection Endpoints</Heading>

      <SubHeading>Create Collection</SubHeading>
      <EndpointBadge method="POST" path="/v1/collections" />
      <ParamTable params={[
        { name: "name", type: "string", required: true, desc: "Unique collection name (alphanumeric, hyphens, underscores)" },
        { name: "description", type: "string", desc: "Human-readable description" },
        { name: "config", type: "object", desc: "Collection configuration (embedding model, index type, etc.)" },
        { name: "tags", type: "string[]", desc: "Tags for organization and filtering" },
        { name: "schema", type: "object", desc: "Optional metadata schema for validation" },
      ]} />
      <CodeBlock language="bash" title="curl" code={`curl -X POST https://api.recallos.com/v1/collections \\
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
  }'`} />

      <SubHeading>List Collections</SubHeading>
      <EndpointBadge method="GET" path="/v1/collections" />
      <CodeBlock language="bash" title="curl" code={`curl https://api.recallos.com/v1/collections \\
  -H "Authorization: Bearer ros_sk_live_..."`} />

      <SubHeading>Get Collection</SubHeading>
      <EndpointBadge method="GET" path="/v1/collections/:collection_id" />

      <SubHeading>Update Collection</SubHeading>
      <EndpointBadge method="PATCH" path="/v1/collections/:collection_id" />

      <SubHeading>Delete Collection</SubHeading>
      <EndpointBadge method="DELETE" path="/v1/collections/:collection_id" />
      <ParamTable params={[
        { name: "soft", type: "boolean", desc: "If true, soft delete (recoverable for 30 days). Default: true" },
      ]} />
    </>
  );
}

function TroubleshootingSection() {
  return (
    <>
      <Heading>Troubleshooting</Heading>
      <P>
        Common issues and their solutions when working with RecallOS.
      </P>

      <SubHeading>Connection Issues</SubHeading>
      <H3>Cannot connect to local RecallOS engine</H3>
      <P>
        Verify the engine is running and the port is correct:
      </P>
      <CodeBlock language="bash" code={`# Check if the process is running
recallos status

# Restart the engine
recallos restart

# Check the port
curl http://localhost:8420/health`} />

      <H3>API key rejected</H3>
      <P>
        Ensure your API key has the correct prefix (<InlineCode>ros_sk_live_</InlineCode> for
        production, <InlineCode>ros_sk_test_</InlineCode> for sandbox) and hasn't expired.
      </P>

      <SubHeading>Search Quality Issues</SubHeading>
      <H3>Search returns irrelevant results</H3>
      <div className="space-y-2 my-4">
        {[
          "Use descriptive, natural language queries instead of keywords",
          "Increase min_score threshold to filter low-relevance results",
          "Verify the embedding model is appropriate for your domain",
          "Check that memories contain sufficient context for semantic matching",
          "Enable hybrid search to combine semantic and keyword matching",
        ].map((tip) => (
          <div key={tip} className="flex gap-3 items-start">
            <ChevronRight className="w-3 h-3 text-[#7CFF8A] mt-1.5 shrink-0" />
            <span className="text-sm text-white/60">{tip}</span>
          </div>
        ))}
      </div>

      <H3>Search is slow</H3>
      <P>
        If queries take longer than 100ms, consider switching from a Flat index to HNSW, reducing
        the <InlineCode>top_k</InlineCode> value, or adding metadata filters to narrow the search
        space.
      </P>
    </>
  );
}

function CommonErrorsSection() {
  return (
    <>
      <Heading>Common Errors</Heading>
      <P>
        Reference for error codes you may encounter when using the RecallOS API.
      </P>
      <div className="my-6 overflow-x-auto rounded-xl border border-white/5">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.02]">
              <th className="text-left px-4 py-3 text-white/50 font-medium">Code</th>
              <th className="text-left px-4 py-3 text-white/50 font-medium">Error</th>
              <th className="text-left px-4 py-3 text-white/50 font-medium">Solution</th>
            </tr>
          </thead>
          <tbody>
            {[
              { code: "401", error: "Invalid API Key", solution: "Check your API key is correct and active. Ensure the Authorization header format is 'Bearer ros_sk_...'." },
              { code: "403", error: "Insufficient Permissions", solution: "Your API key doesn't have access to this collection. Check access controls." },
              { code: "404", error: "Collection Not Found", solution: "The collection ID doesn't exist or has been deleted. Use 'recallos collections list' to verify." },
              { code: "409", error: "Duplicate Memory", solution: "A semantically similar memory already exists. Set deduplicate=false to force insert, or lower dedup_threshold." },
              { code: "413", error: "Memory Too Large", solution: "The text exceeds the max size (50,000 chars). Enable auto_chunk or split the document manually." },
              { code: "429", error: "Rate Limited", solution: "You've exceeded the request rate limit. Implement exponential backoff or upgrade your plan." },
              { code: "500", error: "Internal Error", solution: "An unexpected error occurred. Check recallos logs and report the issue with the request ID." },
              { code: "503", error: "Engine Unavailable", solution: "The RecallOS engine is not running or is still initializing. Wait a moment and retry." },
            ].map((e) => (
              <tr key={e.code} className="border-b border-white/5 last:border-0">
                <td className="px-4 py-3">
                  <span className={`font-mono text-xs px-2 py-0.5 rounded ${
                    parseInt(e.code) >= 500 ? "bg-red-500/10 text-red-400" :
                    parseInt(e.code) >= 400 ? "bg-yellow-500/10 text-yellow-400" :
                    "bg-[#7CFF8A]/10 text-[#7CFF8A]"
                  }`}>{e.code}</span>
                </td>
                <td className="px-4 py-3 text-white/70 font-medium">{e.error}</td>
                <td className="px-4 py-3 text-white/50">{e.solution}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function PerformanceTipsSection() {
  return (
    <>
      <Heading>Performance Tips</Heading>
      <P>
        Optimize RecallOS for maximum throughput, lowest latency, and most efficient resource usage.
      </P>

      <SubHeading>Embedding Optimization</SubHeading>
      <div className="space-y-2 my-4">
        {[
          "Use text-embedding-3-small for cost-sensitive workloads (1536 dims, ~5x cheaper than large)",
          "Enable persistent embedding cache to avoid re-computing embeddings for duplicate text",
          "Batch inserts in groups of 100 to maximize embedding API throughput",
          "Consider local embedding models (bge-large, nomic-embed) for air-gapped or high-volume environments",
        ].map((tip) => (
          <div key={tip} className="flex gap-3 items-start">
            <Zap className="w-3 h-3 text-[#7CFF8A] mt-1.5 shrink-0" />
            <span className="text-sm text-white/60">{tip}</span>
          </div>
        ))}
      </div>

      <SubHeading>Query Optimization</SubHeading>
      <div className="space-y-2 my-4">
        {[
          "Add metadata filters to narrow the search space before vector comparison",
          "Use HNSW index with ef_search=50 for the best latency/accuracy tradeoff",
          "Set reasonable top_k values — don't request 100 results if you only need 5",
          "Pre-warm queries with collection.warm() to load indices into memory",
          "Use the min_score parameter to skip low-relevance results early",
        ].map((tip) => (
          <div key={tip} className="flex gap-3 items-start">
            <Zap className="w-3 h-3 text-[#7CFF8A] mt-1.5 shrink-0" />
            <span className="text-sm text-white/60">{tip}</span>
          </div>
        ))}
      </div>

      <SubHeading>Collection Design</SubHeading>
      <div className="space-y-2 my-4">
        {[
          "Keep collections focused — one topic area per collection performs better than one giant collection",
          "Enable semantic deduplication to prevent index bloat from near-duplicate memories",
          "Use auto-chunking for documents longer than 2000 characters",
          "Archive inactive collections to free up memory — they can be restored on demand",
          "Monitor collection stats with 'recallos collections stats' to catch growing latency early",
        ].map((tip) => (
          <div key={tip} className="flex gap-3 items-start">
            <Zap className="w-3 h-3 text-[#7CFF8A] mt-1.5 shrink-0" />
            <span className="text-sm text-white/60">{tip}</span>
          </div>
        ))}
      </div>

      <Callout type="tip" title="Quick Win">
        The single biggest performance improvement for most deployments is adding metadata
        filters. A filtered search over 10% of the collection is 10x faster than scanning
        everything, and the results are usually more relevant too.
      </Callout>
    </>
  );
}

/* ─────────────────────────────────────────────
   Section Router
   ───────────────────────────────────────────── */

const sectionComponents: Record<string, React.FC> = {
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
  "performance-tips": PerformanceTipsSection,
};

/* ─────────────────────────────────────────────
   Sidebar Component
   ───────────────────────────────────────────── */

function Sidebar({
  activeSection,
  searchQuery,
  onSearchChange,
  onSectionClick,
  expandedGroups,
  onToggleGroup,
}: {
  activeSection: string;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onSectionClick: (id: string) => void;
  expandedGroups: Set<string>;
  onToggleGroup: (label: string) => void;
}) {
  const filteredGroups = useMemo(() => {
    if (!searchQuery.trim()) return sidebarGroups;
    const q = searchQuery.toLowerCase();
    return sidebarGroups
      .map((g) => ({
        ...g,
        sections: g.sections.filter(
          (s) =>
            s.title.toLowerCase().includes(q) ||
            g.label.toLowerCase().includes(q)
        ),
      }))
      .filter((g) => g.sections.length > 0);
  }, [searchQuery]);

  return (
    <div className="flex flex-col h-full">
      {/* Search bar */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
        <input
          type="text"
          placeholder="Search docs..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-2.5 pl-9 pr-12 text-sm text-white placeholder:text-white/30 focus:border-[#7CFF8A]/40 focus:bg-[#7CFF8A]/[0.03] focus:outline-none focus:ring-1 focus:ring-[#7CFF8A]/30 transition-all"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
          <kbd className="hidden sm:inline-block border border-white/10 rounded bg-white/5 px-1.5 text-[10px] text-white/25 font-mono">
            ⌘
          </kbd>
          <kbd className="hidden sm:inline-block border border-white/10 rounded bg-white/5 px-1.5 text-[10px] text-white/25 font-mono">
            K
          </kbd>
        </div>
      </div>

      {/* Navigation Groups */}
      <nav className="space-y-1 overflow-y-auto flex-1 pr-1 -mr-1">
        {filteredGroups.map((group) => {
          const isExpanded = expandedGroups.has(group.label) || searchQuery.trim().length > 0;
          const hasActive = group.sections.some((s) => s.id === activeSection);
          const Icon = group.icon;

          return (
            <div key={group.label} className="mb-1">
              <button
                onClick={() => onToggleGroup(group.label)}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-all ${
                  hasActive
                    ? "text-[#7CFF8A] font-medium"
                    : "text-white/50 hover:text-white/80 hover:bg-white/[0.03]"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4" />
                  <span>{group.label}</span>
                </div>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isExpanded ? "rotate-0" : "-rotate-90"
                  }`}
                />
              </button>
              {isExpanded && (
                <div className="ml-4 mt-0.5 pl-3 border-l border-white/5 space-y-0.5">
                  {group.sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => onSectionClick(section.id)}
                      className={`w-full text-left px-3 py-1.5 text-[13px] rounded-md transition-all ${
                        activeSection === section.id
                          ? "bg-[#7CFF8A]/10 text-[#7CFF8A] font-medium"
                          : "text-white/40 hover:text-white/70 hover:bg-white/[0.03]"
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main DocsPage Component
   ───────────────────────────────────────────── */

function DocsPage() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(() => {
    return new Set(["Overview", "Getting Started"]);
  });
  const contentRef = useRef<HTMLDivElement>(null);

  const currentSection = allSections.find((s) => s.id === activeSection);
  const CurrentComponent = sectionComponents[activeSection] || IntroductionSection;

  const handleSectionClick = useCallback((id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    // Expand the group containing this section
    const group = sidebarGroups.find((g) => g.sections.some((s) => s.id === id));
    if (group) {
      setExpandedGroups((prev) => new Set([...prev, group.label]));
    }
    // Scroll to top of content
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleToggleGroup = useCallback((label: string) => {
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

  // Keyboard shortcut for search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        const input = document.querySelector<HTMLInputElement>(
          'input[placeholder="Search docs..."]'
        );
        input?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Navigate between sections with arrow keys
  const handlePrevNext = useCallback(
    (direction: "prev" | "next") => {
      const idx = allSections.findIndex((s) => s.id === activeSection);
      const nextIdx = direction === "next" ? idx + 1 : idx - 1;
      if (nextIdx >= 0 && nextIdx < allSections.length) {
        handleSectionClick(allSections[nextIdx].id);
      }
    },
    [activeSection, handleSectionClick]
  );

  const currentIdx = allSections.findIndex((s) => s.id === activeSection);
  const prevSection = currentIdx > 0 ? allSections[currentIdx - 1] : null;
  const nextSection = currentIdx < allSections.length - 1 ? allSections[currentIdx + 1] : null;

  return (
    <div className="min-h-screen bg-[#050A07] text-white selection:bg-[#7CFF8A]/30">
      <BackgroundLayer />
      <Navbar />

      <div className="mx-auto max-w-[90rem] px-4 pt-24 lg:flex lg:gap-0">
        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center justify-between py-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2 text-sm font-medium">
            <span className="text-white/40">Docs</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/20" />
            <span className="text-white/40">{currentSection?.group}</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/20" />
            <span className="text-[#7CFF8A]">{currentSection?.title}</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile sidebar overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <aside className="absolute top-20 left-4 right-4 max-h-[70vh] overflow-y-auto bg-[#0A140D] border border-white/10 rounded-2xl p-5 shadow-2xl z-50">
              <Sidebar
                activeSection={activeSection}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                onSectionClick={handleSectionClick}
                expandedGroups={expandedGroups}
                onToggleGroup={handleToggleGroup}
              />
            </aside>
          </div>
        )}

        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-72 shrink-0 h-[calc(100vh-6rem)] sticky top-24 pb-12 pr-6 overflow-y-auto">
          <Sidebar
            activeSection={activeSection}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onSectionClick={handleSectionClick}
            expandedGroups={expandedGroups}
            onToggleGroup={handleToggleGroup}
          />
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 pb-32 lg:pt-0 lg:pl-6 lg:border-l lg:border-white/5" ref={contentRef}>
          {/* Breadcrumbs (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 text-sm text-white/30 mb-8 font-medium pt-2">
            <span className="hover:text-white/60 transition-colors cursor-pointer">Docs</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="hover:text-white/60 transition-colors cursor-pointer">
              {currentSection?.group}
            </span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#7CFF8A]">{currentSection?.title}</span>
          </div>

          {/* Content Card */}
          <div className="bg-[#0A140D]/50 border border-white/[0.04] backdrop-blur-xl rounded-2xl p-6 sm:p-10 lg:p-12 shadow-[0_0_60px_rgba(124,255,138,0.02)]">
            <CurrentComponent />

            {/* Prev / Next Navigation */}
            <div className="flex items-center justify-between mt-16 pt-8 border-t border-white/5">
              {prevSection ? (
                <button
                  onClick={() => handlePrevNext("prev")}
                  className="group flex flex-col items-start gap-1 p-4 rounded-xl hover:bg-white/[0.03] transition-colors max-w-[45%]"
                >
                  <span className="text-xs text-white/30 group-hover:text-white/50 transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 rotate-180" />
                    Previous
                  </span>
                  <span className="text-sm text-white/60 group-hover:text-[#7CFF8A] transition-colors font-medium truncate">
                    {prevSection.title}
                  </span>
                </button>
              ) : (
                <div />
              )}
              {nextSection ? (
                <button
                  onClick={() => handlePrevNext("next")}
                  className="group flex flex-col items-end gap-1 p-4 rounded-xl hover:bg-white/[0.03] transition-colors max-w-[45%]"
                >
                  <span className="text-xs text-white/30 group-hover:text-white/50 transition-colors flex items-center gap-1">
                    Next
                    <ChevronRight className="w-3 h-3" />
                  </span>
                  <span className="text-sm text-white/60 group-hover:text-[#7CFF8A] transition-colors font-medium truncate">
                    {nextSection.title}
                  </span>
                </button>
              ) : (
                <div />
              )}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
