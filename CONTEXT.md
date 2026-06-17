# A2Y Axis — Project Context

> Read this file to get full context on the project before starting any work.

**Repo:** <https://github.com/party-barty/a2y-axis>
**Local:** `~/Sites/a2y-axis/`
**Founded:** April 22, 2026

---

## What We're Building

An interactive **educational app** that teaches real prosumers (AI-semi-pro PMs, self-taught techies) how to work with 130 specialist Claude agents through real-world use cases — presented as a directory / yearbook for the A2Y Axis AI agent studio. **Starting at 130 agents across 10 teams** — the architecture is built to index and organize hundreds of agents over time. Six teams carry callsigns and set the studio's tone; the other four are operational.

**Purpose vs. flavor:** the substance is teaching real humans practical workflows. The fictional Series B startup framing, the Wonka × Office tone (7/10 whimsy), and the running AI-pet-translator gag are tonal flavoring — not the reason the app exists.

**Framing:** experience-first, not content-first. Visual storytelling primitive is an infinite tapestry mindmap — agents as nodes, teams as clusters, collaboration patterns as edges.

**Stack:** Next.js 16 (App Router, SSG) + TypeScript + Tailwind CSS v4 + Framer Motion + `marked` (markdown rendering for team briefs)

**Live source of truth for in-flux design decisions:** [`docs/sessions/session-002-design-direction-debrief.md`](docs/sessions/session-002-design-direction-debrief.md). Read that before reopening any visual/aesthetic question.

---

## The Ten Teams

Six callsign-bearing teams set the studio tone:

| Callsign | Nickname | Team | Hex | Archetype |
| -------- | -------- | ---- | --- | --------- |
| VEGA | — | Design | #EC4899 | The Auteur |
| ARC | — | Engineering | #3B82F6 | The Structuralist |
| LUMEN | — | Marketing | #10B981 | The Amplifier |
| NOVA | — | AI/Automation | #6366F1 | The Accelerationist |
| VECTOR | Vec | Product | #8B5CF6 | The Navigator |
| ECHO | — | Account/CS | #06B6D4 | The Translator |

Four operational teams round out the studio without callsigns: **Leadership**, **Operations**, **Research**, **Core**.

---

## Brand

**Aesthetic anchor:** Wonka × Office, 7/10 whimsy. (Overrides the prior "mission control / orbital mechanics / HUD" framing — course-corrected 2026-05-07.)
**Hero color:** `#E8FF47` (chartreuse) — reserved for "you completed / unlocked / earned" moments per the gamification chassis; don't waste it on generic hover/accents.
**Mode:** Dual-vibe — light and dark are both first-class. **Default: dark** (locked 2026-05-08); light is first-class secondary.
**Visual primitive:** Hex sigils — abstract, gradient-flooded, 3D-iridescent. *Not* humanoid characters. Reference: Datalands' Microsoft Praise.
**Color application:** Religious — every team color must do typographic, background, interaction-state, AND reward work, not just decorative borders.

### CSS Tokens

```css
--axis-brand:          #E8FF47;
--axis-bg-void:        #09090E;
--axis-bg-base:        #0D0D16;
--axis-bg-elevated:    #131320;
--axis-bg-overlay:     #1C1C2E;
--axis-border-dim:     #1E1E30;
--axis-border-mid:     #2E2E48;
--axis-border-bright:  #4A4A72;
--axis-text-primary:   #F0F4FF;
--axis-text-secondary: #A8B4D0;
--axis-text-tertiary:  #6B7A9E;
--axis-orbit:          #A78BFA;
--axis-launch:         #F97316;
--axis-status-active:  #22D3EE;
--axis-status-error:   #F87171;
--axis-status-warning: #FBBF24;
--axis-status-success: #34D399;
--axis-focus-ring:     #E8FF47;
```

*These tokens are dark-mode values. Light-mode token set is pending.*

### Team Color Usage Rules

- Background tints: 8–10% opacity
- Active/selected: full saturation + team-color glow shadow
- Body text: never use team colors

---

## Routing

Three layers, all statically generated (144 routes prerendered):

- `/` — searchable roster of all 130 agents, filterable by team
- `/team/[slug]` — per-team page with mission, collaboration patterns, best practices, full team roster
- `/agent/[team]/[slug]` — full agent profile with capabilities, tools, team context

Legacy `/agent/[slug]` URLs redirect to the canonical nested form.

Team pages are built from authored briefs in `src/content/teams/*.md`.

---

## Page Priority

P0 → P1 → P2. Don't move past P0 until visual storytelling language is finalized.

1. **Homepage (P0)** — tapestry/mindmap hero, 130-agent searchable roster
2. **Team page (P1)** — team archive
3. **Agent detail (P2)** — individual agent profile

---

## Motion Budget

- **MVP:** restrained — hover states, subtle transitions
- **Upgrade target:** mindmap-in-motion — reactive animating connections between agents
- Always respect `prefers-reduced-motion`
- Library: Framer Motion

---

## Cluster + Tier System

3 tiers, fictional Series B startup likeness (no real company named). Frame: studio-org taxonomy — **decide what to build / build it / get it to people**.

| Tier | Teams | Function |
| ---- | ----- | -------- |
| **The Pitch** | Leadership, Product, Research | Decide what to build (and tell investors about it) |
| **The Stack** | Engineering, AI/Automation, Design | Build it |
| **The Funnel** | Marketing, Account/CS, Operations, Core | Get it to people + sustain it |

Hidden hierarchy joke: The Pitch is always two versions ahead of The Stack (vaporware); The Stack delivers what it can but gets less press; The Funnel is where customer reality reveals the gap.

**Recurring case-study product:** AI pet translator app — "world's most advanced pet translator, if it actually worked." Wearable + app that "translates" barks/meows into English. Failure modes are comedy not harm (the dog "says" the same three sentences all week; the cat is allegedly a Marxist). Used as the universal recurring example throughout content for every agent's use cases.

Locked 2026-05-07. Fictional company name, product name, and tone-bible voice still pending under this lock.

---

## Open Decisions (gating further work)

Tracked in detail in [`docs/sessions/session-002-design-direction-debrief.md`](docs/sessions/session-002-design-direction-debrief.md) and the live priority queue in user memory. Summary:

1. **Central metaphor (storyline spine)** — debrief pending
2. **Callsign task-force model** — proposed (callsigns as seats, not people); not formally locked
3. **Hex sigil family design** — 10 teams, 3 tier-color anchors
4. **Light-mode color token set** — not yet specced
5. **Team brief review** — 10 authored files at `src/content/teams/*.md` not yet reviewed
6. **Playground feature** — feasibility eval pending
7. **Typography (display + body/mono)** — not yet chosen
8. **Manifesto copy** — not yet written

---

## Design Inspiration

Locked references this project draws from:

- **16personalities.com** — color-as-religion. 4 groups × 4 types × 4 colors. Casual gamification. Skip the humanoid characters; keep the color/group/quiz mechanics.
- **Datalands.co/work/microsoft-praise** — 3D iridescent gradient sigil aesthetic. The visual target for hex sigils.
- **Status.app** — light-mode reference: clean white/pale gradient with vibrant accent components. Also build-in-public ethos (tone reference).
- **AI Prompt Box** (Easemize, 21st.dev) — the Turrell mechanism made concrete. Reactive ambient gradient based on context. Inspiration for the playground feature and dark-mode immersive treatment.

---

## Documentation Accountability

When opinionated prose is authored (not generated, not refactored), it must be flagged explicitly with file paths and a "please review" call in the same message. No ambient documentation.

---

## Project Structure

```text
src/
  app/               Next.js routes
  data/
    agents.ts        Auto-generated registry of 130 agents
    teams.ts         Team metadata — callsign, color, archetype, tagline
  content/
    teams/*.md       Authored team briefs (10 files)
  lib/
    markdown.ts      Markdown rendering helper (marked.js wrapper)
    teams.ts         Team page data loader
docs/
  sessions/          Session debriefs (live source of truth for in-flux decisions)
  brand-guidelines.md  Brand reference (v0.2 — reflects locked direction)
```
