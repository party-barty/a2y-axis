# A2Y Axis — Brand Guidelines Brief
**Version:** 0.1 (Living Document)  
**Last updated:** April 23, 2026

---

## 1. Studio Identity

**Name:** A2Y Axis  
**Type:** AI agent studio  
**Tagline (working):** *None locked yet — see Open Decisions*

**What we are:**  
A team of six specialized AI agents operating as a coordinated studio. Each agent has a defined role, personality, and domain. The studio aesthetic borrows from mission control, orbital mechanics, and sci-fi command centers — technical and cinematic, never corporate.

**What we are not:**  
Generic SaaS. Sterile or enterprise. Bubbly or playful in a shallow way. Dark-mode as an afterthought.

---

## 2. Color System

You have a full color system. Here it is clearly:

### Brand / Hero Color
| Token | Hex | Use |
|-------|-----|-----|
| `--axis-brand` | `#E8FF47` | Chartreuse — coordinate lock, HUD crosshair, focus rings, the "powered by Axis" signature pip on all avatars. The one color that appears across everything. |

### Backgrounds (dark-mode)
| Token | Hex | Name | Use |
|-------|-----|------|-----|
| `--axis-bg-void` | `#09090E` | Void | Deepest background, page root |
| `--axis-bg-base` | `#0D0D16` | Base | Primary content backgrounds |
| `--axis-bg-elevated` | `#131320` | Elevated | Cards, panels, modals |
| `--axis-bg-overlay` | `#1C1C2E` | Overlay | Dropdowns, tooltips, hover states |

### Borders
| Token | Hex | Use |
|-------|-----|-----|
| `--axis-border-dim` | `#1E1E30` | Hairline separators |
| `--axis-border-mid` | `#2E2E48` | Standard card/panel borders |
| `--axis-border-bright` | `#4A4A72` | Active, focused, or highlighted borders |

### Typography
| Token | Hex | Use |
|-------|-----|-----|
| `--axis-text-primary` | `#F0F4FF` | Body copy, headings |
| `--axis-text-secondary` | `#A8B4D0` | Labels, metadata, secondary info |
| `--axis-text-tertiary` | `#6B7A9E` | Captions, placeholder text, timestamps |

> **Rule:** Never use team/agent colors for body text.

### Accent Colors
| Token | Hex | Name | Use |
|-------|-----|------|-----|
| `--axis-orbit` | `#A78BFA` | Orbit | Orbital arcs, decorative rings, relationship lines |
| `--axis-launch` | `#F97316` | Launch | CTAs, action buttons, "fire" moments |

### Status Colors
| Token | Hex | Use |
|-------|-----|-----|
| `--axis-status-active` | `#22D3EE` | Online, active, in-progress |
| `--axis-status-success` | `#34D399` | Completed, success |
| `--axis-status-warning` | `#FBBF24` | Warning, needs attention |
| `--axis-status-error` | `#F87171` | Error, offline, critical |

---

## 3. Agent Color System

Each agent has one identity color. These are used for: avatar hex tint, team category labels, active/selected states with team-color glow, and agent-specific accents.

| Agent | Team | Identity Color | Archetype |
|-------|------|---------------|-----------|
| VEGA | Design | `#EC4899` (pink) | The Auteur |
| ARC | Engineering | `#3B82F6` (blue) | The Structuralist |
| LUMEN | Marketing | `#10B981` (green) | The Amplifier |
| NOVA | AI/Automation | `#6366F1` (indigo) | The Accelerationist |
| VECTOR (Vec) | Product | `#8B5CF6` (violet) | The Navigator |
| ECHO | Account/CS | `#06B6D4` (cyan) | The Translator |

**Usage rules:**
- Background tints: 8–10% opacity
- Active/selected state: full saturation + team-color box shadow glow
- Never on body text

---

## 4. Design Language

**Core aesthetic:** Orbital mechanics meets mission control HUD. Think: coordinate systems, reticles, targeting overlays, spacecraft telemetry readouts, mission patch art.

**References:**
- Mission patches (NASA/ESA) — precision, pride, emblematic
- Sci-fi command centers — clean data, tight grids, glowing UI
- status.app — principled, direct, build-in-public ethos (tone reference, not visual)
- Retro-futurist character design — personality without being cartoonish

**Design principles:**
1. **Precision over decoration.** Every line should feel intentional. No random flourishes.
2. **Dark-mode first.** Light mode is secondary and not yet specced.
3. **Cinematic scale.** Headers can be big. Silence (negative space) is intentional.
4. **Technical warmth.** The aesthetic is cold and precise but the content is personable.

**Recurring motifs:**
- Flat-top hexagons (avatar frames, grid tiles)
- Crosshair / reticle / coordinate lock marks
- Orbital ring arcs
- Chartreuse pip (`#E8FF47`) as a signature element — appears on every avatar, lower-right corner

---

## 5. Primary Mark (Logo)

**Status: Locked** — April 23, 2026

**Construction:**

- Frame: flat-top hexagon, chartreuse (`#E8FF47`) border stroke, rounded corners
- Interior fill: near-black (`#09090E`), slightly separated from page background
- Monogram: white "A" (no crossbar) overlapping violet "X" (`#6366F1`–`#8B5CF6` range)
- Reticle: white concentric circles + crosshair lines, centered on the monogram intersection
- Crosshair arms extend through and slightly beyond the hex border as dashed/segmented lines
- Pip: flat solid chartreuse circle, lower-right interior corner

**Color-locked version:** chartreuse + black + white + violet only. No gradients on the primary mark.

**Gradient/rainbow treatment:** permitted as a contextual accent (e.g., full-crew hero sections showing all six agents) — never on the primary mark itself.

**Do not:**

- Recolor the hex border
- Add gradients to the monogram in the primary context
- Remove the pip
- Use on non-dark backgrounds without a defined dark panel behind it

---

## 6. Avatar Spec

- **Frame:** Flat-top hexagon, 400×400px master SVG
- **Style:** Retro-futurist mission patch art — illustrated, not photorealistic, not simple icon
- **SVG structure:** Groups required: `bg`, `character-body`, `character-eyes`, `accent-pip`
- **Signature:** Chartreuse pip (`#E8FF47`) lower-right corner of every hex — "powered by Axis"
- **Animations:**
  - 3px idle vertical bob, 4s loop, offset per agent so they don't sync
  - Eye tracking: ±2px horizontal on cursor/pointer
  - Always respect `prefers-reduced-motion`
- **Build order:** VECTOR first — sets the quality bar for all others

**Visual personality rule:** Each agent should have an illustrative element in their avatar that signals their domain (e.g., VEGA/Design might have a stylus or color swatch integrated into the composition; ARC/Engineering might have a circuit or structural frame element).

---

## 6. Animation Principles

- **Motion style:** Purposeful, not decorative. Easing should feel physical — anticipation on entry, follow-through on exit.
- **Duration defaults:** UI transitions 150–200ms. Avatar animations 3–4s loops.
- **No autoplay video or rapid flashing.**
- **Always provide `prefers-reduced-motion` fallback** — static position, no bob, no eye tracking.
- **Library:** Framer Motion (already installed).

---

## 7. Voice & Tone

**Studio voice:** Confident, precise, insider. Speaks like a crew that knows their mission — not a pitch deck, not a chatbot.

**Agent voices:** Each agent has their own register that fits their archetype:
- VEGA: opinionated, aesthetic-first, auteur energy
- ARC: structured, deliberate, explains the load-bearing logic
- LUMEN: energetic, signal-focused, amplifies the message
- NOVA: fast, future-facing, talks in systems
- VECTOR (Vec): navigational, decisive, always knows where we are
- ECHO: translational, attuned, bridges the gap

**Tone rules:**
- No corporate jargon
- No "leverage synergies" or "cutting-edge AI solutions"
- Technical terms are fine — but earned, not dropped for credibility
- Personality is allowed to be dry and specific

---

## 8. Open Decisions

These are not yet defined and should be resolved before the directory ships:

| Decision | Priority | Notes |
|----------|----------|-------|
| **Typography** | High | No typefaces chosen yet. Needs: display/heading font + body/mono. Consider: geometric sans + mono for HUD labels. |
| **Wordmark / Logo** | ~~High~~ **Locked** | Primary mark established April 23, 2026. Flat-top hex, chartreuse border, white A + violet X monogram overlaid on white reticle, chartreuse pip lower-right. Full wordmark (mark + logotype lockup) still TBD. |
| **Tagline** | Medium | "Mission control for your AI stack"? Still open. |
| **Light mode** | Low | Secondary priority, not yet specced. |
| **Manifesto copy** | Medium | Key section of the directory — not yet written. |
| **Visual personality briefs per agent** | High | Needed before illustration begins. VECTOR first. |

---

*This document lives at `docs/brand-guidelines.md` and should be updated as decisions get made.*
