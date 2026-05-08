<!--
A2Y Axis PR template. Every section is required. Replace the placeholder copy.
Workflow contract: docs/workflow/issue-driven-development.md
-->

## Summary

<!-- 1–3 bullets. What changed and why. Reference the issue's locked direction or decision when relevant. -->

-
-

## Closes

<!-- Required. One issue per PR. Use "Closes #N" so GitHub auto-closes on merge. Multi-issue PRs are a smell — break them up. -->

Closes #

## QA

<!-- Checklist specific to this change. Replace the examples with concrete steps a reviewer can run. Drop any that don't apply. -->

- [ ] `npx tsc --noEmit` passes
- [ ] `npm run lint` passes (zero warnings)
- [ ] Tested in light + dark mode (if user-visible)
- [ ] No console errors on initial load (if user-visible)
- [ ] Authored prose reviewed by the issue owner (if any)

## Deployment notes

<!--
Anything special about how this lands on Vercel, env vars, secrets, redirects, build settings, project-board automation. Write "n/a" if none.
-->

n/a

## Authored prose surfaced

<!--
Per the documentation accountability rule (docs/workflow/issue-driven-development.md#documentation-accountability):
list any newly authored opinionated prose with file paths and a brief "please review" note.
Write "none in this PR" if no prose was authored.
-->

none in this PR
