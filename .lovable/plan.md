## RecallOS — Premium AI Memory Layer Landing Page

A cinematic, single-page marketing site styled like Apple Event × Linear × Vercel, with a liquid-glass design system on a true-black canvas and a cyan/ice signature palette.

### Design system (src/styles.css)
- Background `#0c0c0c`, primary `#00d2ff`, secondary `#A4F4FD`, deep accent `#0B2551`, text `#fff`, muted `rgba(255,255,255,0.6)` — all wired as oklch tokens in `@theme inline`.
- Custom utilities: `.liquid-glass` (backdrop-blur + layered inset highlights + subtle noise), `.shiny-text` (animated conic/linear gradient sweep for the word "Remembers"), `.vertical-guides` (fixed full-bleed guide lines), `.noise` (SVG noise overlay), `.glow-radial`.
- Motion via `motion/react`: fade-up, stagger reveal, marquee, count-up, parallax on hero.

### Routes & structure
Single landing route at `src/routes/index.tsx` composing sections in order. Reusable components in `src/components/recallos/`:

```
components/recallos/
  BackgroundLayer.tsx       // fixed video/gradient, guides, noise
  Navbar.tsx                // logo, links, Download CTA, mobile menu
  Hero.tsx                  // headline w/ shiny "Remembers", CTAs, compat strip
  MemoryTerminal.tsx        // 3-column Bloomberg/Claude-style mock
  SocialProof.tsx           // animated counters
  Problem.tsx               // 5-point pain grid
  Solution.tsx              // narrative w/ glass cards
  Architecture.tsx          // animated 7-node pipeline diagram
  Features.tsx              // 9 liquid-glass feature cards
  Integrations.tsx          // 8 model cards w/ connection status
  Benchmarks.tsx            // metric dashboard, animated bars
  Testimonials.tsx          // glass cards, developer voices
  Pricing.tsx               // monthly/annual toggle, 3 plans, watermark
  FinalCTA.tsx              // glow + glass
  Footer.tsx
  ui/                       // GlassCard, ShinyText, GradientButton, CountUp, Marquee
```

### Hero
- Headline: "Your AI." / "Remembers." with the second line using animated gradient sweep (cyan → ice → deep blue, infinite loop).
- Subhead + dual CTA (Download RecallOS, View Documentation) + compatibility line listing Claude/GPT/Gemini/DeepSeek/Qwen/open-source.
- Background: fixed dark canvas with vertical guide lines, slow radial cyan glow, noise overlay. Optional looping abstract video layer (CSS-driven gradient orb if no video asset) — no third-party assets required.

### Memory Terminal (replaces inbox)
Three-column glass interface:
- Left: Memory Collections list with counts and selection state.
- Center: searchable memory entries with timestamps and tags; click to update right panel.
- Right: selected memory detail — AI summary card, key facts, entities, timeline, related memories, vector similarity score, importance score.
Pure client-side state; feels alive via subtle pulses and hover transitions.

### Architecture diagram
Vertical 7-node pipeline (User Input → Memory Layer → Embedding Engine → Vector DB → Retrieval Layer → AI Model → Response). SVG connectors animate a traveling glow dot; nodes are glass tiles with icons (lucide-react).

### Benchmarks
Original metrics with animated bars and count-up numbers: Memory Accuracy, Retrieval Speed, Context Coverage, Latency, Token Savings. Compact dashboard layout.

### Integrations
Grid of 8 model cards (Claude, GPT, Gemini, DeepSeek, Qwen, Llama, Mistral, HuggingFace) with brand-neutral monogram tiles, one-line description, and "Connected / Available" pill.

### Pricing
Monthly/annual toggle, three plans (Starter Free, Builder $19/mo, Enterprise Custom), liquid-glass cards, faint "RECALLOS" watermark behind, memory-platform-specific feature lists.

### Functionality (simulated where needed)
- Download/waitlist buttons: show success toast via `sonner` (already installed).
- Terminal search: filters the in-memory list with realistic latency.
- Install snippet: "Copy" button copies to clipboard and flips to "Copied".
- No backend or AI API calls — fully static, no secrets, no Lovable Cloud needed.

### Copy
All copy original to RecallOS; no MemPalace/Aura phrasing reused. Positioning: "The Memory Layer for AI."

### SEO & head
Update root `head()`: title "RecallOS — The Memory Layer for AI", meta description, og tags. Single H1 in Hero.

### Out of scope (this plan)
- No real AI inference, no auth, no database, no payments wiring.
- No video file ingestion; background is CSS/SVG-driven (looks cinematic without a binary asset).
- No separate routes — landing is single-page with in-page anchors for nav links.

If you'd like a real looping background video, a working waitlist (Lovable Cloud), or actual model calls via Lovable AI Gateway, say the word and I'll add them in a follow-up.
