# Session 002 — Design Direction Debrief

**Date:** 2026-05-07
**Branch:** `dev` (latest commit: `9c57b22` — team archive pages, nested agent URLs, real markdown rendering)
**Status:** Mid-conversation pause. Resume at the cluster + tier names decision.

---

## TL;DR — where we are

We started this session fixing a stray-quote rendering bug in the agent directory. We finished it in the middle of a deep design-direction conversation that genuinely reshapes the app's intent. The thing built before this session is correct but visually flat; the thing we're now scoping is *the experience* — colored, gamified, story-driven.

**The choke point right now:** cluster + tier-name decision (4 candidates, no winner picked). Behind that, the audience question is unresolved — and that question gates the design team's first deliverable.

---

## Session arc — what happened, in order

1. **Bug fix.** Identified 846 stray escaped quotes in `src/data/agents.ts` (parser artifact). Fixed with a single sed pass.
2. **IA audit.** Discovered `category` field is 100% redundant with `team`. Surfaced the brand-vs-data mismatch (CLAUDE.md says 6 callsigns; data has 10 teams).
3. **Major build shipped.** Team archive pages at `/team/[slug]`, canonical nested agent URLs at `/agent/[team]/[slug]`, legacy `/agent/[slug]` redirects. Replaced hand-rolled markdown with `marked`. 144 pages prerendered. Committed as `9c57b22`.
4. **README updated** by `docs-writer` agent. (Note: still describes "Dark-mode-first" — needs revisiting once light/dark direction locks.)
5. **Design direction conversation.** This is the substantial part. Multiple rounds of back-and-forth on visual language, tonal anchor, references, cluster shapes.
6. **Documentation accountability call-out.** User flagged that I'd authored 10 team brief MD files + team metadata without ever surfacing them for review. Real critique. New forward pattern adopted (see below).
7. **Brainstorm dispatch.** 3 creative agents produced 6 cluster naming candidates. Quote research (search-specialist) cancelled mid-flight.
8. **Pause.** User called for a break + memory + handoff. We're here.

---

## What's LOCKED (decisions made and confirmed)

| Decision | What it means |
|---|---|
| **App, not site** | Experience-first, not content-first. The framing changes design priorities. |
| **Aesthetic anchor: Wonka × Office, 7/10 whimsy** | Adult audience, joyful + grounded. *Charlie & the Chocolate Factory* original is 10/10; we're 7/10. Avoid earnest sci-fi cringe. |
| **Hex sigils, NOT humanoid characters** | 16personalities was cited for color system + grouping + casual gamification, not for character illustration. Sigil aesthetic confirmed = Datalands' Microsoft Praise (3D iridescent, gradient-flooded, abstract). |
| **Religious color application** | Every team color must do typographic, background, interaction-state, AND reward work — not just decorative borders. (16personalities lesson.) |
| **Light + dark = dual-vibe, not dark-mode-first** | This OVERRIDES `CLAUDE.md` and `README.md`. Light = clean white/pale gradient with vibrant accent components (Status.app sensibility). Dark = full-color heavy-gradient immersive (AI Prompt Box / Turrell). Default still TBD. |
| **Page priority: Homepage P0 → Team P1 → Agent detail P2** | Don't move past Homepage until visual storytelling language is finalized. |
| **Storytelling primitive: infinite tapestry mindmap** | Agents as nodes, teams as clusters, collaboration patterns as living edges. PM ↔ Leadership ↔ Research ↔ Engineering ↔ Design weaving in unique ways. |
| **Motion budget: restrained for MVP, mindmap-in-motion for upgrade** | Hover states, subtle transitions for v1. Reactive mindmap motion (animating connections between agents) is the upgrade target. |
| **Documentation accountability rule** | When I author opinionated prose, I flag it explicitly with paths and "please review." No more burying authored content in commits. |

---

## What's TENTATIVE (proposed but not finalized)

| Proposal | Status |
|---|---|
| **Callsign-as-task-force model** | User reframed: callsigns are *seats* not *people*. Max 6 per team, max 3 per session. I recommended adopting; she hasn't formally locked. **Implications if adopted:** CLAUDE.md table reframes, README.md "Six callsigns" softens, team briefs may need rewrites. |
| **Cluster: Option C (4-tier) lean over Option B (3-tier)** | Earlier I leaned Option B; current lean is Grand Hotel (Option C) — but no decision yet. Both stay live. |

---

## What's PENDING (in priority order)

1. **Audience definition** — *blocks design dispatch.* Who is this for? Onboarding devs / AI-curious non-devs / educators / studio-identity piece / power users. Pick the primary.
2. **Cluster + tier names** — 4 candidates below. Pick one or none.
3. **Callsign task-force shift** — confirm or reject.
4. **Default mode** — light or dark.
5. **Central metaphor** — debrief still pending. Spine of the storyline.
6. **Team brief review** — 10 files at `src/content/teams/*.md`, all authored by me, none yet read by user.
7. **Playground feature** — feasibility eval pending (technical complexity, mobile/perf cost, design coherence).
8. **Demand-validation agent dispatch** — 5 agents proposed (reddit-intelligence, competitive-intelligence, trend-researcher, ux-researcher, product-manager). Briefs ready, parked behind audience decision.

---

## The 4 cluster naming candidates (the immediate decision)

### Reframe A — *The Forge / The Circuit / The Helm* (3-tier)
Source: content-writer agent.

| Tier | Teams |
|---|---|
| **The Forge** | Engineering, Design, AI/Automation, Core |
| **The Circuit** | Marketing, Account/CS, Product |
| **The Helm** | Leadership, Operations, Research |

**Why:** Strongest individual names. THE HELM does heavy lifting (authority without bureaucracy). THE CIRCUIT cleanly maps "Move" to motion + connection. THE FORGE earns gravitas without trying.
**Cost:** Mixed metaphor (forge = blacksmith, circuit = electric, helm = nautical). Cohesion weaker than a single-world system.

### Reframe B — *The Expedition: Base Camp / Field Work / Summit* (3-tier)
Source: whimsy-injector agent.

| Tier | Teams |
|---|---|
| **Base Camp** | Engineering, Design, AI/Automation, Core |
| **Field Work** | Marketing, Account/CS, Product |
| **Summit** | Leadership, Operations, Research |

**Hidden joke:** Hierarchy is deliberately upside-down from corporate. Engineers at "Base Camp" are foundational, not low-status. "Summit" is the least interesting part of the mountain — climbers will tell you that. Map has the prestige labels backwards on purpose.
**Cost:** Adventure-team energy is overused in startup branding. Doesn't feel like an *office*.

### Reframe C — *The Grand Hotel* (4-tier) — current lean
Source: visual-storyteller agent.

| Tier | Teams |
|---|---|
| **The Penthouse** | Leadership, Product, Research |
| **The Lobby** | Design, Marketing |
| **The Boiler Room** | Engineering, AI/Automation |
| **Concierge** | Account/CS, Operations, Core |

**Why:** Hotels are physical, hierarchical-without-corporate. "Boiler Room" is the anti-Atelier — unglamorous, honest, punk. "Concierge" lands hard for Account-CS / Ops / Core (concierges are competent fixers, not executives). All four cluster mappings *fit* without strain.
**Cost:** Hotel verticality (penthouse > lobby > boiler) implies a hierarchy that isn't how AI agents actually collaborate. Risks reading as "executives at top, technical labor at bottom."

### Reframe D — *Dept. of Extraordinary Measures* (4-tier)
Source: whimsy-injector agent.

| Tier | Teams |
|---|---|
| **The Committee** | Leadership, Product, Research |
| **Outside Counsel** | Design, Marketing |
| **Internal Affairs** | Engineering, AI/Automation |
| **R&D (Floor 2)** | Account/CS, Operations, Core |

**Hidden joke:** "R&D (Floor 2)" — there is no Floor 1 R&D anywhere in the product. No explanation. Compounds with use.
**Cost:** "Internal Affairs" → Technical mapping is a stretch (engineers don't investigate anyone). Government-agency frame is one register from cringe. Weakest cluster fit.

---

## My honest read (for whoever picks this up)

**If 3-tier:** A (Forge / Circuit / Helm) > B (Expedition).
**If 4-tier:** C (Grand Hotel) > D (Extraordinary Measures).
**Cross-tier:** Hotel and Forge/Circuit/Helm are roughly equal in quality but differ in ask. Hotel is more *teachable* on first contact (one big metaphor, four vivid steps). Forge/Circuit/Helm is more *durable* across registers (3 standalone strong nouns).

**Tip-of-the-scale lean:** Hotel — because the cluster mapping fits without strain (Concierge especially), and 4 ambient color states will be more interesting in the playground feature than 3.

---

## References received this session (with roles)

### Apps / sites cited as inspiration
| Reference | Why it's in the brief |
|---|---|
| **16personalities.com** | Color-as-religion. 4 groups × 4 types × 4 colors. Casual gamification (personality test). Skip the humanoid characters; keep the color/group/quiz mechanics. |
| **Status.app** | Light mode with vibrant components. Reference for the light-mode default if we pick that. |
| **Datalands.co/work/microsoft-praise** | 3D iridescent gradient sigil aesthetic. THIS is what our hex sigils should look like. |

### UX article (read & cached)
- https://www.uxstudioteam.com/ux-blog/color-in-ux-ui-design — color is evidence-based not artistic; Google's $200M blue-shade A/B test; WCAG 2.2 floors (4.5:1 body / 3:1 large); design for both modes. Already absorbed; cite if needed.

### 21st.dev components shortlisted (open-source, drop-in)
| Component | Role assigned |
|---|---|
| **Orbiting Skills** (Sera UI) | Homepage hero. Inner orbit = team hexes; outer orbit = agent sigils. Light + dark variants both ship. |
| **Orbiting Skills (team-page variant)** | Team archive hero. Center = team token; orbits = subcategories. |
| **Hexagon Map** (Reaviz) | Hex as data primitive. Tool overlap, agent density, comprehension-checkpoint completion. Works for the tapestry mindmap layer. |
| **AI Prompt Box** (Easemize) | The Turrell mechanism made concrete. Reactive ambient gradient based on context. Inspiration for the playground feature. |
| **Scrolling Animation** (Le Thanh) | Alt homepage hero candidate if Orbiting Skills is too literal. |
| **Schema Card with Animated Wave Visualizer** (Le Thanh) | Agent detail card treatment. Glassmorphic body, gradient stroke in team color, waveform background. Replaces current rectangular team-bordered card. |

---

## Documents I authored that need user review

These were shipped to the public site in commit `9c57b22` without explicit sign-off. **The user has not yet read them.**

### Team briefs (10 files, ~80-100 lines each, opinionated prose):
- [src/content/teams/engineering.md](../../src/content/teams/engineering.md)
- [src/content/teams/design.md](../../src/content/teams/design.md)
- [src/content/teams/marketing.md](../../src/content/teams/marketing.md)
- [src/content/teams/ai-automation.md](../../src/content/teams/ai-automation.md)
- [src/content/teams/product.md](../../src/content/teams/product.md)
- [src/content/teams/account-customer-success.md](../../src/content/teams/account-customer-success.md)
- [src/content/teams/leadership.md](../../src/content/teams/leadership.md)
- [src/content/teams/operations.md](../../src/content/teams/operations.md)
- [src/content/teams/research.md](../../src/content/teams/research.md)
- [src/content/teams/core.md](../../src/content/teams/core.md)

### Authored team metadata
- [src/data/teams.ts](../../src/data/teams.ts) — taglines, archetype labels, callsign assignments. All my drafts.

**Pending decision:** walk through these now, or after metaphor + cluster lock. User's call.

---

## Active dispatch state

| Agent | Status | Notes |
|---|---|---|
| `search-specialist` (Office + Wonka quotes) | **CANCELLED mid-flight** | User said "that's enough quotes." Don't re-fire. |
| `visual-storyteller` (narrative cohesion naming) | Completed | Output captured in this doc (Reframe C: Grand Hotel + The Factory Floor) |
| `whimsy-injector` (whimsy + hidden jokes naming) | Completed | Output captured (Reframe B: Expedition + Reframe D: Extraordinary Measures) |
| `content-writer` (tonal range naming) | Completed | Output captured (Reframe A: Forge/Circuit/Helm + Studio Districts with reclaimed Atelier) |
| 5 demand-validation agents | **PARKED** | reddit-intelligence, competitive-intelligence, trend-researcher, ux-researcher, product-manager. Briefs ready in conversation. Don't fire until audience decision. |

---

## Forward pattern (effective immediately)

1. **Authored prose gets surfaced explicitly.** Any time I write opinionated prose (not generated, not refactored), I flag it in the same message with file paths and a "please review" call. No ambient documentation.
2. **Drafts vs. decisions get labeled.** "I'm leaning toward X — does that work?" not "We decided X." Particularly for brand/tonal/strategic moves.
3. **Task-force model applies to agent dispatching.** Max 3 agents per session (creative squad). Research agents go in their own session.
4. **Voice match.** User dictates; I respond clearly without mirroring drift. But meet the conversational register.

---

## Where to pick up next conversation

The first thing to ask the user when this resumes:

> "Picking up from where we paused. The choke point is the cluster + tier-name decision (4 candidates: Forge/Circuit/Helm, Expedition, Grand Hotel, Dept of Extraordinary Measures). Want to start there, or with the audience-definition question (which gates the design dispatch)? Or take an even bigger step back and talk through the central metaphor first?"

Don't make assumptions. Let her drive the next branch.

---

## Files touched this session (for git context)

- `src/data/agents.ts` — stray-quote bug fixed (846 occurrences)
- `src/data/teams.ts` — created (new team metadata)
- `src/lib/markdown.ts` — created (marked.js wrapper)
- `src/lib/teams.ts` — created (team page data loader)
- `src/app/team/[slug]/page.tsx` — created (team archive)
- `src/app/agent/[team]/[slug]/page.tsx` — created (nested agent detail)
- `src/app/agent/[team]/page.tsx` — created (legacy redirect handler)
- `src/app/agent/[slug]/page.tsx` — deleted (replaced by nested route)
- `src/app/page.tsx` — modified (homepage now uses teams + nested URLs)
- `src/app/globals.css` — modified (added `.markdown-content` styles)
- `src/content/teams/*.md` — 10 new authored team briefs
- `package.json` / `package-lock.json` — added `marked`
- `README.md` — updated (still has dark-mode-first language to revisit)
- `docs/sessions/session-002-design-direction-debrief.md` — this doc
