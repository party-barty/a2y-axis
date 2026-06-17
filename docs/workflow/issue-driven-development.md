# Issue-Driven Development

The contract every contributor (human and agent) follows in this repo. Read this before opening your first issue or PR.

---

## The rule

**Every change starts as a typed issue on the [Axis Studio](#the-board) board.**

No exceptions. Not for "tiny" edits. Not for "I'll just commit this real quick." Not for refactors that "don't change anything." If a commit lands on `main`, an issue justified it first and a PR closed it.

Why:
- The Axis Studio board is the source of truth for what's happening in this project. If work happens off-board, the board lies, and planning gets done against fiction.
- Authored prose is load-bearing here. Per the [documentation accountability rule](#documentation-accountability), prose work has to be visible — buried in a feature commit it isn't.
- Sub-agents need a stable place to start. "Read the open issues" is a much sharper instruction than "figure out what's going on."

The only carve-out is [hotfix](#hotfix-carve-out) — production-broken incidents — where the issue can be opened in parallel with the fix. Even then, the issue exists.

---

## Choosing a type

Five templates. Pick exactly one. Each has its own form fields tuned to its workflow.

| Situation | Template |
|-----------|----------|
| Net-new functionality, surface, or capability | **Feature** |
| User-reported visual glitch, broken interaction, wrong data | **Bug** |
| Production is down or actively breaking right now | **Hotfix** |
| Refactor with no behavior change, dep bump, internal cleanup | **Chore** |
| Stale README, missing brand doc, agent brief needs revising | **Docs** |
| Fixing a typo in published prose | **Docs** (not Chore) |
| Renaming a variable for clarity | **Chore** (no behavior delta) |
| Adding a new agent brief markdown file | **Docs** if the file's the deliverable, **Feature** if it's part of a larger surface |
| Updating CLAUDE.md after a locked decision | **Docs** |
| Fixing a broken build | **Bug** if a regression, **Hotfix** if main is red and blocking everyone |

When in doubt, ask: *can a user feel the difference?* Yes → feature/bug. No → chore.

---

## Sub-issues — when and how

GitHub's native sub-issue feature is on. Use it when:
- A feature has 3+ discrete deliverables that can land independently
- Work crosses two or more teams (e.g. a Product spec + an Engineering build)
- Breakdown helps board parallelism — multiple agents can pick up different sub-issues without stepping on each other

**How to nest:**

Web UI:
1. Open the parent issue
2. Scroll to the "Sub-issues" panel under the body
3. Click "Add sub-issue" → either pick an existing issue or create a new one inline

CLI:
```
gh issue create -R party-barty/a2y-axis --title "[feature] Sub-task X" --body "..."
# Then in the parent issue, link via the web UI (gh CLI doesn't yet have a sub-issue subcommand)
```

**Don't nest** trivial todos. If the breakdown is a 5-item checklist of one-line tasks, just use a checkbox list in the parent issue body. Sub-issues are for items that warrant their own labels, priority, and PR.

A sub-issue gets its own type label, its own priority, its own team. Inheriting from the parent isn't automatic — pick deliberately.

---

## Labels are not optional

Every issue must carry, at minimum:
- **Exactly one** `type:*` label (auto-applied by the template)
- **Exactly one** `priority:*` label
- **Exactly one** `team:*` label, OR `status:needs-triage` if team ownership isn't clear yet

Status labels (`status:blocked`, `status:needs-decision`, `status:needs-triage`) stack on top of the project board column for nuance. The board column says where the work *is*; status labels say *why it's stuck* or *what it's waiting on*.

| Label group | Slugs |
|---|---|
| Type | `type:feature`, `type:bug`, `type:hotfix`, `type:chore`, `type:docs` |
| Work area (team) | `team:design`, `team:engineering`, `team:marketing`, `team:ai-automation`, `team:product`, `team:account-cs`, `team:leadership`, `team:operations`, `team:research`, `team:core` |
| Priority | `priority:p0` (drop everything), `priority:p1` (high), `priority:p2` (normal queue) |
| Status | `status:needs-triage`, `status:blocked`, `status:needs-decision` |

Default labels (`bug`, `enhancement`, `documentation`, etc.) from GitHub's stock set are kept for backward compatibility but **don't apply them** — the typed slugs above are the canonical set.

---

## Linking PRs

Every PR must close exactly one issue. Multi-issue PRs are a smell — break them up.

**PR title:** `<type>: <terse description> (#N)`

Examples:
- `feat: team archive pages with nested agent URLs (#12)`
- `fix: VEGA card flicker on hover in light mode (#27)`
- `docs: capture session-003 design-debrief decisions (#34)`
- `chore: bump next to 16.2.5 (#41)`

**PR body:** must contain `Closes #N` or `Fixes #N`. GitHub auto-closes the issue on merge.

**Branch naming:** `<type>/<short-slug>-<issue-number>` is preferred but not enforced. e.g. `feat/team-archive-12`, `fix/vega-flicker-27`, `chore/sync-design-direction-docs` (existing pattern, no number is acceptable for chores).

**Commit messages** continue to follow the existing repo style (terse, imperative, type-prefixed). See the most recent commits on `main` for the pattern.

---

## Definition of Done

An issue moves to **Done** on the board only when all of these are true:

- [ ] Code merged to `main` via a PR that closes this issue
- [ ] ESLint passes — both pre-commit hook and CI lint workflow are green
- [ ] If user-facing prose changed, it has its own docs issue/PR (not buried in a feature commit)
- [ ] Acceptance criteria from the issue body are checked off
- [ ] Issue moved to **Done** column on the Axis Studio board (not just closed)

A closed issue that's still in **In Progress** on the board is a bug in the workflow — fix it.

---

## The board

The **Axis Studio** GitHub Project (Project v2) is the kanban board for this repo. URL will be added here once the project is provisioned.

**Columns (Status field):**

| Column | Meaning |
|---|---|
| **Backlog** | Filed but not yet prioritized for current sprint. Default for new issues. |
| **Ready** | Triaged, scoped, and ready for someone to pick up. Has all required labels. |
| **In Progress** | Active work. Branch exists, draft PR may exist. |
| **In Review** | PR open, awaiting review or CI. |
| **Done** | Merged + DoD satisfied. |

Issues flow Backlog → Ready → In Progress → In Review → Done. Skipping forward is fine; skipping backward (Ready → Backlog) is a triage signal — note why in a comment.

**Board fields beyond Status:**
- **Type** (mirrors `type:*` label, for quick board filtering)
- **Work area** (mirrors `team:*` label)
- **Priority** (mirrors `priority:*` label — P0/P1/P2)

Filter views: by work area, by priority, by type. The default view is everyone's open work, sorted by priority.

### Field automation

Status transitions are driven by git events, not by manually dragging cards:

| Event | Result |
|---|---|
| Branch created with `<type>/<slug>-<issue-number>` | Linked issue → **In Progress** |
| Commit on that branch (any) | No-op on board (issue stays In Progress) |
| PR opened referencing the issue (`Closes #N` in body) | Issue → **In Review**; PR is auto-linked to issue |
| PR merged | Issue → **Done** and auto-closed (via `Closes #N` keyword) |
| PR closed without merge | Issue stays in **In Review** with `status:needs-triage` re-applied |

Manual dragging is allowed for Backlog ↔ Ready (those reflect prioritization decisions, not git state). Everything from Ready forward is automation-driven.

The automation lives in `.github/workflows/project-status-*.yml` and uses a `PROJECT_TOKEN` secret with `project` scope. If the secret is missing, the automation no-ops silently — a manual fallback (drag the card) still works.

---

## Agent-specific rules

Every Claude / sub-agent invocation that produces user-facing artifacts must:

1. **Check the issue exists.** If the user gave you a task, ask which issue it relates to. If none exists, open one before writing code.
2. **Link the PR.** PR body must reference the issue with `Closes #N`. No orphan PRs.
3. **Don't bury authored prose.** If the work produces a written artifact (brand brief, agent brief, manifesto, README copy, session debrief), open a **Docs** issue separately — even if it ships alongside a feature. Per the documentation accountability rule, prose work is load-bearing and must be visible on the board.
4. **Move the card.** After merging, move the issue to **Done** on the project board. A closed issue stuck in "In Progress" misleads everyone.
5. **Surface decisions.** If you make a non-obvious choice during execution (picked library X over Y, structured component A this way), say so in the PR body. The PR is the durable record.

Sub-agents launched via the `Agent` tool inherit these rules. If a sub-agent's output is going to land in the repo, it lands through an issue + PR, not through direct edits to `main`.

---

## Hotfix carve-out

When production is broken or about to be:

1. Open a **Hotfix** issue using the template. It auto-applies `type:hotfix` + `priority:p0`.
2. Start the fix immediately. Don't wait on triage. Don't wait for board grooming.
3. PR can land before the issue is fully fleshed out.
4. **Within the same day**, backfill: triggering event, blast radius, root cause, rollback plan.
5. Move the issue to **Done** when the fix is verified live.

If you're tempted to use the hotfix template for something that isn't actively-breaking-right-now, use **Bug** instead. The hotfix carve-out exists because incidents have a different cadence — abusing it dilutes the signal.

---

## Documentation accountability

Quoted from the standing rule:

> Surface authored prose explicitly. Never bury it in commits. If you wrote it, open an issue/PR for it.

Concretely:
- If a feature PR coincidentally rewrites a paragraph in the README, that paragraph becomes a separate **Docs** issue and PR.
- If a chore PR updates CLAUDE.md to reflect a renaming, the CLAUDE.md edit ships as a docs issue.
- If a session debrief produces 200 lines of new prose, that's a docs issue — even if it was "just notes."

The rule exists because prose is the most-loaded-bearing artifact in this repo (brand voice, agent briefs, manifesto, audience definition). If it ships invisibly, the board lies.

---

## Quick reference

| I want to… | Open this template | Default priority | Default team |
|---|---|---|---|
| Add a new homepage section | Feature | p2 | design or product |
| Fix a typo in published prose | Docs | p2 | whoever owns the doc |
| Bump a dependency | Chore | p2 | engineering |
| Refactor a component for clarity | Chore | p2 | engineering |
| Add a new agent brief | Docs (or Feature if it's part of a surface) | p2 | the agent's team |
| Production is down | Hotfix | p0 (auto) | engineering or ai-automation |
| User reports broken behavior | Bug | p1 or p2 | engineering |
| Capture a locked decision | Docs | p2 | leadership or product |
