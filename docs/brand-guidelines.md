# A2Y Axis — Brand Guidelines

**Version:** 0.2 (Living Document)
**Last updated:** 2026-05-08

This is the public-facing brand reference. For the live decision log (with dates and rationale), see `~/.claude/projects/-Users-abbymini-Sites-a2y-axis/memory/project_brand_decisions.md`.

---

## 1. Studio Identity

**Name:** A2Y Axis
**Type:** AI agent studio — fictional Series B startup likeness
**App purpose:** An interactive educational app that teaches real prosumers how to work with 130 specialist Claude agents through real-world use cases.

**What we are:**
A team of specialized AI agents organized into 10 teams across 3 tiers (the "Pitch / Stack / Funnel" model). The studio's tone is **Wonka × Office** — joyful, slightly weird, but adult and self-aware. We frame ourselves as a fictional Series B startup shipping the world's most advanced AI pet translator. The fiction is flavoring; the substance is teaching real humans practical workflows.

**What we are not:**
Generic SaaS. Sterile or enterprise. Bubbly or playful in a shallow way. A working pet translator.

**Aesthetic anchor:** Wonka × Office, 7/10 whimsy. *Charlie and the Chocolate Factory* original = 10/10; we aim 7/10. Adults grin, never cringe.

---

## 2. Color System

### Brand / Hero Color

| Token | Hex | Use |
| --- | --- | --- |
| `--axis-brand` | `#E8FF47` | Chartreuse. Reserved for **"you completed / unlocked / earned"** moments per the gamification chassis. Don't waste it on hover states or generic accents. |

### Backgrounds (dark-mode tokens — light-mode tokens TBD)

| Token | Hex | Name | Use |
| --- | --- | --- | --- |
| `--axis-bg-void` | `#09090E` | Void | Deepest background, page root |
| `--axis-bg-base` | `#0D0D16` | Base | Primary content backgrounds |
| `--axis-bg-elevated` | `#131320` | Elevated | Cards, panels, modals |
| `--axis-bg-overlay` | `#1C1C2E` | Overlay | Dropdowns, tooltips, hover states |

### Borders

| Token | Hex | Use |
| --- | --- | --- |
| `--axis-border-dim` | `#1E1E30` | Hairline separators |
| `--axis-border-mid` | `#2E2E48` | Standard card/panel borders |
| `--axis-border-bright` | `#4A4A72` | Active, focused, or highlighted borders |

### Typography

| Token | Hex | Use |
| --- | --- | --- |
| `--axis-text-primary` | `#F0F4FF` | Body copy, headings |
| `--axis-text-secondary` | `#A8B4D0` | Labels, metadata, secondary info |
| `--axis-text-tertiary` | `#6B7A9E` | Captions, placeholder text, timestamps |

> **Rule:** Never use team colors for body text.

### Accent + Status Colors

| Token | Hex | Use |
| --- | --- | --- |
| `--axis-orbit` | `#A78BFA` | Decorative arcs, relationship lines |
| `--axis-launch` | `#F97316` | CTAs, action buttons |
| `--axis-status-active` | `#22D3EE` | Online, active, in-progress |
| `--axis-status-success` | `#34D399` | Completed, success |
| `--axis-status-warning` | `#FBBF24` | Warning, needs attention |
| `--axis-status-error` | `#F87171` | Error, offline, critical |

---

## 3. Team Color System

The studio organizes 130 agents into 10 teams. Six teams carry callsigns (operating as **task-force seats**, not fixed people). Four operational teams have no callsign.

### Callsign teams

| Team | Callsign | Color | Tier | Archetype |
| --- | --- | --- | --- | --- |
| Design | VEGA | `#EC4899` | The Stack | The Auteur |
| Engineering | ARC | `#3B82F6` | The Stack | The Structuralist |
| AI / Automation | NOVA | `#6366F1` | The Stack | The Accelerationist |
| Marketing | LUMEN | `#10B981` | The Funnel | The Amplifier |
| Account / CS | ECHO | `#06B6D4` | The Funnel | The Translator |
| Product | VECTOR | `#8B5CF6` | The Pitch | The Navigator |

### Operational teams (no callsign)

| Team | Color | Tier |
| --- | --- | --- |
| Leadership | `#F59E0B` | The Pitch |
| Research | `#F97316` | The Pitch |
| Operations | `#14B8A6` | The Funnel |
| Core | `#FFD700` | The Funnel |

### Color application = "religious"

Every team color does **typographic**, **background**, **interaction-state**, and **reward** work — not just decorative borders. Same color, every surface, every encounter. Reference: 16personalities' use of the four-quadrant meta-color system.

**Operating constraints inherited from the task-force model:**

- Max 6 agents on any team's spotlight roster
- Max 3 agents working in any single session

---

## 4. Design Language

**Core aesthetic: Wonka × Office, 7/10 whimsy.** Joyful weirdness anchored by self-aware workplace honesty. Adult audience. Mainstream and beloved, not gender-coded.

**Tonal exclusions:**

- No femme themes
- No masculine stereotypes (sports, nautical, military, frat)
- No earnest sci-fi cringe (the prior "mission control / orbital mechanics / HUD" framing was course-corrected on 2026-05-07)

**Inspiration references** (cited by the founder as load-bearing):

- **16personalities.com** — color-as-religion master class. Color reinforces team identity on every surface.
- **Status.app** — light-mode aesthetic with vibrant accent components. Component-driven brightness on a clean ground.
- **Datalands.co/work/microsoft-praise** — sigil aesthetic. 3D iridescent, gradient-flooded, abstract icons. **This is the language for our hex sigils.**
- **AI Prompt Box (21st.dev/easemize)** — reactive ambient gradient backgrounds (Turrell-coded). Inspiration for the in-flight playground feature.
- **Orbiting Skills (21st.dev/seraui)** — drop-in homepage hero candidate. Inner orbit = team hexes; outer orbit = agent sigils.

**Storytelling primitive:** infinite tapestry mindmap — agents as nodes, teams as clusters, collaboration patterns as living edges. Motion target on the upgrade path: animating connections between agents.

**Recurring motifs:**

- Flat-top hexagons (sigil frame, grid tiles)
- Chartreuse pip (`#E8FF47`) as a signature element — appears on every sigil's lower-right corner
- Tier-color-anchored gradients (3 ambient color states tied to The Pitch / The Stack / The Funnel)

**Design principles:**

1. **Educational first, decorative second.** Every visual choice should serve the user learning to work with these agents. If a flourish doesn't teach, justify it.
2. **Light + dark are dual-vibe.** Both ship as first-class modes (light = clean white / pale-gradient + vibrant components; dark = full-color heavy-gradient, immersive). **Default mode: dark** (locked 2026-05-08).
3. **Color reinforces hierarchy.** Team colors aren't accents; they're identity reinforcement. Use them religiously, per §3.
4. **The chartreuse pip is sacred.** It signals "you earned something." Don't sprinkle it on hover states.

---

## 5. Primary Mark (Logo)

**Status: Locked** — April 23, 2026.

**Construction:**

- Frame: flat-top hexagon, chartreuse (`#E8FF47`) border stroke, rounded corners
- Interior fill: near-black (`#09090E`)
- Monogram: white "A" (no crossbar) overlapping violet "X" (`#6366F1`–`#8B5CF6` range)
- Reticle: white concentric circles + crosshair lines, centered on the monogram intersection
- Crosshair arms extend through and slightly beyond the hex border as dashed/segmented lines
- Pip: flat solid chartreuse circle, lower-right interior corner

**Color-locked version:** chartreuse + black + white + violet only. No gradients on the primary mark.

**Gradient/rainbow treatment:** permitted as a contextual accent (e.g., full-roster hero sections) — never on the primary mark itself.

**Do not:**

- Recolor the hex border
- Add gradients to the monogram in the primary context
- Remove the pip
- Use on a non-dark backing without a defined dark panel behind it

---

## 6. Hex Sigil System

(Replaces the prior "Avatar Spec" — humanoid character illustrations were dropped 2026-05-07 in favor of generative hex sigils.)

- **Frame:** Flat-top hexagon, 400×400px master SVG
- **Aesthetic:** 3D iridescent, gradient-flooded, abstract — anchored by Datalands' Microsoft Praise reference
- **Generative:** sigils derive from agent name + team + role; no humanoid figures
- **Signature pip:** chartreuse (`#E8FF47`) in lower-right interior corner of every sigil
- **Layered identity:** sigils carry both an **individual team color** AND a **tier-color anchor** (The Pitch / The Stack / The Funnel). Tier color sits in the gradient field; team color sits in the foreground motif.
- **Gamification role:** sigils double as **earnable badges** in the comprehension-checkpoint chassis. Locked / unlocked state visualized through the sigil's saturation or fill.

The full sigil family design is pending — see issue tracker.

---

## 7. Animation Principles

- **Motion style:** Purposeful, not decorative. Easing should feel physical — anticipation on entry, follow-through on exit.
- **Duration defaults:** UI transitions 150–200ms. Ambient gradient blends 6–10s (Turrell pace).
- **No autoplay video or rapid flashing.**
- **Always provide `prefers-reduced-motion` fallback** — static positions, no idle motion.
- **Library:** Framer Motion (already installed; underused — upgrade target is the mindmap-in-motion concept).

---

## 8. Voice & Tone

The full tone bible is drafted at `docs/brand/tone-bible.md`. The three working registers:

- **Educational / instructional voice (dominant):** clear, concrete, walks the reader through a use case in their own tech vocabulary (Zapier, HubSpot, Shopify). Speaks to AI-semi-pro PMs and aspiring solopreneurs in their daily language.
- **Earnest founder voice (in-character):** the Series B startup pitching itself. Wonka × Office.
- **Sardonic meta-aside (occasional):** the app commenting on its own pitch. *"If it actually worked."*

**Universal tone rules:**

- No corporate jargon. No "leverage synergies" or "cutting-edge AI solutions."
- Vocabulary register: Zapier / HubSpot / RankMath / WordPress / Google Analytics / Shopify / MySQL / IDEs / bookkeeping. Avoid Kubernetes / AWS / Snowflake / enterprise-only terms.
- Personality is allowed to be dry and specific.
- 7/10 whimsy ceiling. Stop short of cute.

---

## 9. Audience

Core user: AI-semi-pro / self-taught techie / digital-native PM-on-web-and-digital-products. Power user: aspiring solopreneur or junior/retired-senior on a Sell-the-Thing or Build-the-Thing track who follows current AI-tooling discourse but won't ever stand up an enterprise orchestration stack.

Full persona: `~/.claude/projects/-Users-abbymini-Sites-a2y-axis/memory/project_audience_definition.md`.

---

## 10. Open Decisions

For the live priority queue, see `~/.claude/projects/-Users-abbymini-Sites-a2y-axis/memory/project_pending_decisions.md`. Highlights:

| Decision | Priority |
| --- | --- |
| Hex sigil family design (10 teams, 3 tier-color anchors) | High |
| Callsign task-force model — formally confirm/lock | Medium |
| Light-mode color tokens | Medium — light is now secondary; tokens land when needed |
| Typography (display + body/mono) | Medium |
| Manifesto copy | Medium |

*Resolved since v0.1:* product name locked (**Petsky** — `docs/brand/product-name-proposals.md`); tone bible drafted (`docs/brand/tone-bible.md`).

---

*This document lives at `docs/brand-guidelines.md` and should be updated as decisions land. The live source of truth for locked decisions is the memory file at the path above.*
