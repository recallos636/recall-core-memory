import { useMemo, useState } from "react";
import {
  Folder, Search, Sparkles, Clock, Network, Star, Bookmark, FileText, Database, Users, FlaskConical, Code2,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type Memory = {
  id: string;
  title: string;
  collection: string;
  preview: string;
  date: string;
  tags: string[];
  importance: number; // 0-100
  similarity: number; // 0-1
  summary: string;
  facts: string[];
  entities: string[];
  timeline: { t: string; e: string }[];
  related: string[];
};

const collections = [
  { name: "Projects", count: 24, icon: Folder },
  { name: "Knowledge Base", count: 318, icon: Database },
  { name: "Meeting Notes", count: 47, icon: FileText },
  { name: "Research", count: 92, icon: FlaskConical },
  { name: "Code Context", count: 156, icon: Code2 },
  { name: "Customer Data", count: 63, icon: Users },
];

const memories: Memory[] = [
  {
    id: "m1",
    title: "Product Strategy Meeting",
    collection: "Meeting Notes",
    preview: "Q3 roadmap aligned around agent retrieval and pricing v2…",
    date: "2h ago",
    tags: ["strategy", "Q3", "agents"],
    importance: 92,
    similarity: 0.94,
    summary:
      "The team aligned on shipping the agent retrieval API by Q3 and re-pricing the Builder tier. Marketing will lead an external launch the week of Sept 23. Engineering owns the latency target of <40ms p95.",
    facts: [
      "Launch window: week of Sept 23",
      "Builder tier moves to $19/mo",
      "Latency target: <40ms p95",
      "Owner: @maya (product), @jonas (eng)",
    ],
    entities: ["Maya Chen", "Jonas Reuter", "Builder Tier", "Retrieval API"],
    timeline: [
      { t: "00:04", e: "Kickoff & objectives" },
      { t: "00:18", e: "Pricing v2 proposal" },
      { t: "00:39", e: "Latency budget review" },
      { t: "00:51", e: "Action items locked" },
    ],
    related: ["Launch Checklist", "Roadmap Planning", "AI Agent Instructions"],
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
    summary:
      "Comprehensive pre-launch checklist covering engineering readiness, design QA, growth distribution, and legal sign-off. Currently 38 of 52 items complete.",
    facts: [
      "38 / 52 items complete",
      "Critical path: changelog + status page",
      "Owner: @ops",
    ],
    entities: ["Status page", "Changelog", "Press kit"],
    timeline: [
      { t: "T-14d", e: "Final eng freeze" },
      { t: "T-7d", e: "Design QA pass" },
      { t: "T-1d", e: "Press embargo lifts" },
    ],
    related: ["Product Strategy Meeting", "Roadmap Planning"],
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
    summary:
      "Vector recall outperforms rolling buffers above 32k tokens on factual recall benchmarks. Memory ranking with importance scoring lifts answer quality by 14%.",
    facts: [
      "Rolling buffer ceiling ≈ 32k tokens",
      "Importance score lift: +14%",
      "Best chunker: semantic + heading",
    ],
    entities: ["Vector recall", "Importance score", "Semantic chunker"],
    timeline: [
      { t: "Day 1", e: "Benchmark setup" },
      { t: "Day 2", e: "Eval runs (Qwen, Llama)" },
      { t: "Day 3", e: "Findings written up" },
    ],
    related: ["AI Agent Instructions", "Product Strategy Meeting"],
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
    summary:
      "Operational instructions for the sales copilot agent: retrieval policy, refusal patterns, tone, and tools. Updated to include RecallOS memory tools.",
    facts: [
      "Tool list: recall, store, forget, summarize",
      "Refusal policy: legal + PII",
      "Tone: confident, concise",
    ],
    entities: ["Sales Copilot", "RecallOS Tools", "PII policy"],
    timeline: [
      { t: "v1", e: "Initial draft" },
      { t: "v2", e: "Added memory tools" },
      { t: "v3", e: "Refined refusal patterns" },
    ],
    related: ["Customer Feedback", "Research Notes — Long Context"],
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
    summary:
      "Across 312 conversations this week, customers asked most about cross-session memory persistence, granular forget controls, and clearer pricing tiers.",
    facts: [
      "312 conversations analyzed",
      "Top theme: persistence (41%)",
      "NPS movement: +6 WoW",
    ],
    entities: ["Persistence", "Forget controls", "Pricing"],
    timeline: [
      { t: "Mon", e: "Tickets aggregated" },
      { t: "Wed", e: "Themes clustered" },
      { t: "Fri", e: "Digest shared with PM" },
    ],
    related: ["Roadmap Planning", "Launch Checklist"],
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
    summary:
      "H2 themes: agent SDK, on-device recall, and governance controls. Two bets per quarter, weekly bet review on Thursdays.",
    facts: [
      "Bets per quarter: 2",
      "Review cadence: weekly",
      "Cross-team owner: @nora",
    ],
    entities: ["Agent SDK", "On-device recall", "Governance"],
    timeline: [
      { t: "Q3", e: "Agent SDK alpha" },
      { t: "Q4", e: "On-device recall preview" },
    ],
    related: ["Product Strategy Meeting", "Research Notes — Long Context"],
  },
];

export function MemoryTerminal() {
  const [collection, setCollection] = useState<string>("All");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string>(memories[0].id);

  const filtered = useMemo(() => {
    return memories.filter((m) => {
      const matchesCol = collection === "All" || m.collection === collection;
      const q = query.trim().toLowerCase();
      const matchesQ =
        !q ||
        m.title.toLowerCase().includes(q) ||
        m.preview.toLowerCase().includes(q) ||
        m.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCol && matchesQ;
    });
  }, [collection, query]);

  const selected = memories.find((m) => m.id === selectedId) ?? memories[0];

  return (
    <section className="relative mx-auto max-w-7xl px-4">
      <div className="liquid-glass-strong relative overflow-hidden rounded-3xl p-2 sm:p-3">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-white/5 px-3 py-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-white/40">
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[#00d2ff]" />
            recallos · memory terminal
          </div>
          <div className="text-[11px] text-white/40">v0.9.2</div>
        </div>

        <div className="grid grid-cols-1 gap-2 p-2 lg:grid-cols-[240px_minmax(0,1fr)_360px]">
          {/* LEFT */}
          <div className="liquid-glass rounded-2xl p-3">
            <div className="mb-2 px-2 text-[11px] uppercase tracking-[0.18em] text-white/40">
              Memory Collections
            </div>
            <button
              onClick={() => setCollection("All")}
              className={`mb-1 flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-sm transition-colors ${
                collection === "All" ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5"
              }`}
            >
              <span className="flex items-center gap-2"><Star className="h-3.5 w-3.5" /> All Memories</span>
              <span className="text-[11px] text-white/40">{memories.length}</span>
            </button>
            {collections.map(({ name, count, icon: Icon }) => (
              <button
                key={name}
                onClick={() => setCollection(name)}
                className={`mb-1 flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-sm transition-colors ${
                  collection === name ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5"
                }`}
              >
                <span className="flex items-center gap-2"><Icon className="h-3.5 w-3.5" /> {name}</span>
                <span className="text-[11px] text-white/40">{count}</span>
              </button>
            ))}
          </div>

          {/* CENTER */}
          <div className="liquid-glass rounded-2xl p-3">
            <div className="relative mb-3">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search memory…"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-2.5 pl-9 pr-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#00d2ff]/50"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <AnimatePresence initial={false}>
                {filtered.map((m) => {
                  const active = m.id === selectedId;
                  return (
                    <motion.button
                      layout
                      key={m.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      onClick={() => setSelectedId(m.id)}
                      className={`group flex items-start gap-3 rounded-xl border px-3 py-2.5 text-left transition-all ${
                        active
                          ? "border-[#00d2ff]/40 bg-[#00d2ff]/[0.06]"
                          : "border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white/5">
                        <Bookmark className="h-3.5 w-3.5 text-white/70" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <div className="truncate text-sm font-medium text-white">{m.title}</div>
                          <div className="shrink-0 text-[11px] text-white/40">{m.date}</div>
                        </div>
                        <div className="truncate text-xs text-white/55">{m.preview}</div>
                        <div className="mt-1.5 flex flex-wrap gap-1">
                          {m.tags.map((t) => (
                            <span key={t} className="rounded-full bg-white/5 px-1.5 py-0.5 text-[10px] text-white/55">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </AnimatePresence>
              {filtered.length === 0 && (
                <div className="px-3 py-8 text-center text-sm text-white/50">No memories match that query.</div>
              )}
            </div>
          </div>

          {/* RIGHT */}
          <div className="liquid-glass rounded-2xl p-3">
            <div className="mb-2 flex items-center justify-between px-1">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">Selected Memory</div>
              <div className="flex items-center gap-1 text-[11px] text-white/50">
                <Clock className="h-3 w-3" /> {selected.date}
              </div>
            </div>
            <div className="px-1 text-base font-medium text-white">{selected.title}</div>
            <div className="px-1 text-xs text-white/50">{selected.collection}</div>

            {/* AI summary */}
            <div className="mt-3 rounded-xl border border-[#00d2ff]/20 bg-gradient-to-b from-[#00d2ff]/[0.08] to-transparent p-3">
              <div className="mb-1.5 flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-[#A4F4FD]">
                <Sparkles className="h-3 w-3" /> AI Summary
              </div>
              <p className="text-[13px] leading-relaxed text-white/80">{selected.summary}</p>
            </div>

            <Section title="Key Facts">
              <ul className="space-y-1.5">
                {selected.facts.map((f) => (
                  <li key={f} className="flex gap-2 text-[12.5px] text-white/75">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#00d2ff]" />
                    {f}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Entities">
              <div className="flex flex-wrap gap-1.5">
                {selected.entities.map((e) => (
                  <span key={e} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] text-white/75">
                    {e}
                  </span>
                ))}
              </div>
            </Section>

            <Section title="Timeline">
              <ol className="relative space-y-2 border-l border-white/10 pl-3">
                {selected.timeline.map((t) => (
                  <li key={t.t} className="relative text-[12px] text-white/70">
                    <span className="absolute -left-[7px] top-1.5 h-1.5 w-1.5 rounded-full bg-[#A4F4FD]" />
                    <span className="text-white/45">{t.t}</span> — {t.e}
                  </li>
                ))}
              </ol>
            </Section>

            <Section title="Related Memories">
              <div className="flex flex-col gap-1">
                {selected.related.map((r) => (
                  <div key={r} className="flex items-center gap-2 rounded-md px-1.5 py-1 text-[12.5px] text-white/75 hover:bg-white/5">
                    <Network className="h-3 w-3 text-white/40" /> {r}
                  </div>
                ))}
              </div>
            </Section>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <Metric label="Similarity" value={`${(selected.similarity * 100).toFixed(1)}%`} />
              <Metric label="Importance" value={`${selected.importance}/100`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <div className="mb-1.5 px-1 text-[11px] uppercase tracking-[0.18em] text-white/40">{title}</div>
      <div className="px-1">{children}</div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
      <div className="text-[10px] uppercase tracking-[0.18em] text-white/40">{label}</div>
      <div className="mt-0.5 text-sm font-medium text-white">{value}</div>
    </div>
  );
}
