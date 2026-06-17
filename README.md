# A2Y Axis

**Mission control for a semi-autonomous AI agent studio.**

A2Y Axis is an interactive directory for a studio of Claude AI agents — each with a defined persona, team, and domain. One coordinate system. One directive — build things worth building.

> *Axis is the center. Everything orbits from here.*
> 
> <img width="200" height="200" alt="A2Y AXIS-discord logo" src="https://github.com/user-attachments/assets/d0c9854e-d025-4ade-9be1-7771849029d0" />


---

## The Crew

Six teams carry a callsign. They set the tone for the studio.

| Callsign | Team | Archetype |
| -------- | ---- | --------- |
| **VEGA** | Design | The Auteur |
| **ARC** | Engineering | The Structuralist |
| **LUMEN** | Marketing | The Amplifier |
| **NOVA** | AI / Automation | The Accelerationist |
| **VECTOR** | Product | The Navigator |
| **ECHO** | Account / CS | The Translator |

Four operational teams round out the studio without callsigns: **Leadership** (strategy, finance, risk, compliance), **Operations** (analytics, infrastructure, support ops), **Research** (market and data intelligence), and **Core** (cross-cutting capabilities).

Starting at 130 agents across 10 teams. Built to scale to hundreds.

---

## The Directory

Three layers, all statically generated (144 routes prerendered):

- `/` — searchable roster of all 130 agents, filterable by team
- `/team/[slug]` — per-team page with mission, collaboration patterns, best practices, and the full team roster
- `/agent/[team]/[slug]` — full agent profile with capabilities, tools, and team context

Team pages are built from authored briefs in `src/content/teams/*.md` — the canonical record of how each team actually operates.

---

## Quickstart

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Stack

- **Next.js 16** (App Router, SSG)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **marked** — markdown rendering for team briefs
- Light + dark, both first-class. Brand color: `#E8FF47`.

---

## Project Structure

```text
src/
  app/               Next.js routes
  data/
    agents.ts        Auto-generated registry of 130 agents
    teams.ts         Team metadata — callsign, color, archetype, tagline
  content/
    teams/*.md       Authored team briefs
  lib/
    markdown.ts      Markdown rendering helper
```

---

Established: April 22, 2026
