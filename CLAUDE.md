# A2Y Axis

## What This Is

An interactive educational app that teaches real prosumers (AI-semi-pro PMs, self-taught techies, digital-native entrepreneurs) how to work with 130 specialist Claude agents through hands-on, real-world use cases.

Every agent gets at least three example prompts users can "work through" via a widget that mimics interacting with the agent — possibly across three different environments. Use cases live in the audience's actual tech stack: Zapier, HubSpot, RankMath, WordPress, Google Analytics, Shopify, MySQL, IDEs, bookkeeping software. *Not* Kubernetes / AWS / Snowflake / anything that needs an enterprise subscription.

The app's tone is **Wonka × Office** — joyful, slightly weird, but adult and self-aware. The fictional Series B startup framing and the running AI-pet-translator gag are tonal flavoring, not the substance. The substance is teaching real humans practical workflows.

## The Studio — 10 Teams, 3 Tiers

The studio organizes 130 agents into 10 teams across 3 tiers (the "Pitch / Stack / Funnel" model — fictional Series B startup likeness):

**The Pitch** — decide what to build

- Leadership · Product (VECTOR) · Research

**The Stack** — build it

- Engineering (ARC) · AI/Automation (NOVA) · Design (VEGA)

**The Funnel** — get it to people, sustain it

- Marketing (LUMEN) · Account/CS (ECHO) · Operations · Core

### Callsigns are task-force seats, not fixed people

*(Working model — proposed and in use, but not yet formally locked. See `project_brand_decisions.md` → Tentative.)*

Six of the ten teams have callsigns (ARC, VEGA, LUMEN, NOVA, VECTOR, ECHO). A callsign is a *role* a session can summon — not a single permanent agent. Any of the design team's specialists can serve as VEGA when leading a session. Any engineering specialist can be ARC. The four operational teams (Leadership, Operations, Research, Core) currently have no callsign.

**Operating constraints:**

- Max 6 agents on any team's spotlight roster
- Max 3 agents working in any single session (cognitive-load cap; keeps the playground feature legible)

### The full callsign table

| Callsign | Team | Color | Archetype |
|----------|------|-------|-----------|
| VEGA | Design | `#EC4899` | The Auteur |
| ARC | Engineering | `#3B82F6` | The Structuralist |
| LUMEN | Marketing | `#10B981` | The Amplifier |
| NOVA | AI / Automation | `#6366F1` | The Accelerationist |
| VECTOR | Product | `#8B5CF6` | The Navigator |
| ECHO | Account / CS | `#06B6D4` | The Translator |

The four operational teams use these colors:

| Team | Color | Tier |
|------|-------|------|
| Leadership | `#F59E0B` | Pitch |
| Research | `#F97316` | Pitch |
| Operations | `#14B8A6` | Funnel |
| Core | `#FFD700` | Funnel |

## Audience

Core user: AI-semi-pro / self-taught techie / digital-native PM-on-web-and-digital-products. Power user: aspiring solopreneur or junior/retired-senior on a Sell-the-Thing or Build-the-Thing track who follows current AI-tooling discourse but hasn't (and won't) stand up an enterprise orchestration stack.

**Tonal exclusions:**

- No femme themes
- No masculine stereotypes (sports, nautical, military, frat)
- Wonka × Office is the safe-zone *because* both franchises are mainstream, beloved, and not gender-coded

Full audience persona is at `~/.claude/projects/-Users-abbymini-Sites-a2y-axis/memory/project_audience_definition.md`.

## Brand & Aesthetic

- **Hero color:** `#E8FF47` (chartreuse) — reserved for "you completed / unlocked / earned" moments per the gamification chassis. Don't overuse it on hover states or generic accents.
- **Aesthetic anchor:** Wonka × Office, 7/10 whimsy. *Charlie & the Chocolate Factory* original is 10/10; we aim 7/10. Adults grin, never cringe.
- **Mode:** Light + dark are dual-vibe modes — both first-class, not "dark with a light fallback." Light = clean white / pale-gradient with vibrant accent components (Status.app sensibility). Dark = full-color heavy-gradient immersive (Turrell-coded). **Default mode: dark** (locked 2026-05-08).
- **Identity layer:** Generative hex sigils, *not* humanoid avatars. Sigil aesthetic = Datalands' Microsoft Praise — 3D iridescent, gradient-flooded, abstract. Sigils double as earnable badges in the gamification layer.
- **Color application:** Religious. Every team color does typographic, background, interaction-state, AND reward work. Not just decorative borders.

Full brand guidelines live at `docs/brand-guidelines.md`. Locked decisions are tracked in `~/.claude/projects/-Users-abbymini-Sites-a2y-axis/memory/project_brand_decisions.md`.

## Color Tokens

```css
--axis-brand:        #E8FF47;
--axis-bg-void:      #09090E;
--axis-bg-base:      #0D0D16;
--axis-bg-elevated:  #131320;
--axis-bg-overlay:   #1C1C2E;
--axis-text-primary: #F0F4FF;
--axis-text-secondary: #A8B4D0;
--axis-text-tertiary:  #6B7A9E;
--axis-border-mid:   #2E2E48;
--axis-orbit:        #A78BFA;
--axis-launch:       #F97316;
```

Light-mode tokens are TBD — light mode is secondary now that dark is the default; light tokens land when someone needs them.

## Repo

- GitHub: https://github.com/party-barty/a2y-axis
- Local: `~/Sites/a2y-axis/`
- Established: April 22, 2026

## Workflow

**Every change starts as a typed issue on the Axis Studio project board.** No exceptions, including doc edits and "tiny" chores. Read `docs/workflow/issue-driven-development.md` before opening your first issue or PR.

- **Templates:** feature / bug / hotfix / chore / docs (in `.github/ISSUE_TEMPLATE/`). Blank issues are disabled.
- **Labels:** every issue carries one `type:*`, one `team:*` (work area), one `priority:*` (P0/P1/P2). Status labels stack on top of board column.
- **Lint enforcement:** ESLint + `tsc --noEmit` block commits via the Claude Code pre-commit hook (`.claude/hooks/pre-commit-lint.sh`, wired in `.claude/settings.json`), and ESLint blocks PRs via CI (`.github/workflows/lint.yml`). Both must pass.
- **Status automation:** branch-with-issue-ref → In Progress, PR opened → In Review, PR merged → Done. Driven by `.github/workflows/project-status-*.yml`. Manual dragging only for Backlog ↔ Ready.
- **Project board:** Axis Studio (URL TBD until party-barty's Claude bot completes `docs/workflow/handoff-axis-studio-project-setup.md`).
