# A2Y Axis

**An interactive guide to working with 130 Claude agents — for prosumers, by a fictional Series B startup that maybe doesn't have it all figured out.**

A2Y Axis is a hands-on educational app. It introduces 130 specialist Claude agents, organized across 10 teams, and walks real users through real prosumer workflows — Zapier integrations, HubSpot setups, WordPress SEO, Shopify product copy, the kinds of things people actually do.

The studio frames itself as a fictional Series B AI startup shipping the world's most advanced AI pet translator. Comedy, not pitch deck. The fiction is flavoring; the substance is teaching real humans how to put 130 real agents to work.

> *If it actually worked.*
>
> <img width="200" height="200" alt="A2Y AXIS-discord logo" src="https://github.com/user-attachments/assets/d0c9854e-d025-4ade-9be1-7771849029d0" />

---

## The Studio

130 agents organized across **10 teams** in **3 tiers**:

| Tier | Function | Teams |
| --- | --- | --- |
| **The Pitch** | Decide what to build | Leadership · Product · Research |
| **The Stack** | Build it | Engineering · AI/Automation · Design |
| **The Funnel** | Get it to people, sustain it | Marketing · Account/CS · Operations · Core |

Six teams carry callsigns — call them when a session needs a lead in that lane:

| Callsign | Team | Archetype |
| --- | --- | --- |
| **VEGA** | Design | The Auteur |
| **ARC** | Engineering | The Structuralist |
| **LUMEN** | Marketing | The Amplifier |
| **NOVA** | AI / Automation | The Accelerationist |
| **VECTOR** | Product | The Navigator |
| **ECHO** | Account / CS | The Translator |

Callsigns are task-force *seats*, not fixed people — any specialist on the design team can serve as VEGA when leading a session. Operating constraints: max 6 agents per team's spotlight roster, max 3 in any single session (keeps things legible). *(Working model — not yet formally locked.)*

---

## What's in the directory today

Three layers, statically generated (144 routes prerendered):

- `/` — searchable roster of all 130 agents, filterable by team
- `/team/[slug]` — per-team brief covering mission, collaboration patterns, and the full roster
- `/agent/[team]/[slug]` — full agent profile with capabilities, tools, and team context

Team pages are built from authored briefs in `src/content/teams/*.md`. Roadmap from here: a per-agent prompt-widget proof-of-concept, then scale to authored example use cases for every agent.

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

Two display modes ship as first-class: **light** (clean white / pale-gradient with vibrant accent components) and **dark** (full-color heavy-gradient, immersive). **Default mode: dark** (locked 2026-05-08); light remains first-class secondary. Brand color: `#E8FF47` (chartreuse) — reserved for "you completed / unlocked / earned" moments.

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
docs/
  brand-guidelines.md
  workflow/issue-driven-development.md
.github/
  ISSUE_TEMPLATE/    Required templates (feature/bug/hotfix/chore/docs)
  workflows/         Lint + project-status automation
```

Every change starts as a typed issue on the **Axis Studio** project board — read `docs/workflow/issue-driven-development.md` before opening your first issue or PR.

---

Established: April 22, 2026.
