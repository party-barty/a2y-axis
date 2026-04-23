# A2Y Axis — Project Context

> Read this file to get full context on the project before starting any work.

**Repo:** https://github.com/party-barty/a2y-axis  
**Local:** `~/Sites/a2y-axis/`  
**Founded:** April 22, 2026  

---

## What We're Building

An interactive agent directory / yearbook web experience for the A2Y Axis AI agent studio. Six AI agents, each with a custom illustrated avatar and distinct persona. Users can explore personalities, skills, relationships, and use cases. Think: yearbook meets mission control roster meets interactive org chart.

**Stack:** Next.js + TypeScript + Tailwind CSS + Framer Motion

---

## The Six Agents

| Callsign | Nickname | Team | Hex | Archetype |
|----------|----------|------|-----|-----------|
| VEGA | — | Design | #EC4899 | The Auteur |
| ARC | — | Engineering | #3B82F6 | The Structuralist |
| LUMEN | — | Marketing | #10B981 | The Amplifier |
| NOVA | — | AI/Automation | #6366F1 | The Accelerationist |
| VECTOR | Vec | Product | #8B5CF6 | The Navigator |
| ECHO | — | Account/CS | #06B6D4 | The Translator |

---

## Brand

**Hero color:** `#E8FF47` (chartreuse) — HUD crosshair, radar return, coordinate lock  
**Design language:** Orbital mechanics, coordinate systems, mission control HUD, sci-fi command center  
**Dark-mode-first.** Cinematic and technical.

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

### Team Color Usage Rules
- Background tints: 8–10% opacity
- Active/selected: full saturation + team-color glow shadow
- Body text: never use team colors

---

## Avatar Illustration Spec

- **Style:** Retro-futurist mission patch art meets NFT-grade character design
- **Frame:** Flat-top hexagon, 400×400px master SVG
- **Signature:** Chartreuse pip (#E8FF47) lower-right corner of every hex — "powered by Axis"
- **SVG groups required:** `bg`, `character-body`, `character-eyes`, `accent-pip`
- **Animations:** 3px idle bob (4s, offset per agent), eye-track ±2px, respect `prefers-reduced-motion`
- **Build order:** VECTOR first (sets quality bar)

---

## Where We Left Off

Next.js scaffolding was attempted but failed — `create-next-app` conflicts with existing `README.md` and `CLAUDE.md`.

**Resume with:**
```bash
cd ~/Sites/a2y-axis
mv README.md /tmp/a2y-readme.md && mv CLAUDE.md /tmp/a2y-claude.md
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-git
mv /tmp/a2y-readme.md README.md && mv /tmp/a2y-claude.md CLAUDE.md
npm install framer-motion
```

Then:
1. Add all `--axis-*` tokens to `src/app/globals.css`
2. Extend Tailwind config with brand colors
3. Create agent data files (`src/data/agents.ts`)
4. Build hex avatar card component
5. Build directory grid

---

## Open Decisions

- A2Y Axis **Manifesto** not yet written (key section of the directory)
- **Visual personality briefs** per agent not yet written (needed before illustration)
- **GitHub Project** board not yet created (needs `gh auth refresh -s project,read:project`)
- Light mode spec: secondary priority, not yet defined

---

## Design Inspiration

**status.app** — reviewed full site. Key references:
- Wide color palette used for information organization
- Underground comic / street art character illustration style (ours differs — more retro-futurist/mission patch)
- Manifesto page: principled, direct, no corporate jargon
- Public Epics/burndown from GitHub Projects (build-in-public ethos — scope for v2)

---

## Full Session Log

Full founding session notes in:  
`~/.claude/projects/-Users-abbymini-Sites-are-you-serious-claude/memory/session_001_a2y_axis_founding.md`
