## Mission

Engineering owns the load-bearing systems — the codebases, infrastructure, and tooling everything else hangs on. The team's job is to ship working software that scales, fails gracefully, and stays maintainable years from now.

## How they work together

Engineering breaks into vertical specialties (frontend, backend, mobile, data, devops, security) and horizontal disciplines (architecture, code quality, testing, debugging, languages). The pattern: a senior generalist (e.g., **backend-architect** or **systems-architect**) sets the design contract, language specialists (e.g., **typescript-pro**, **python-pro**, **rust-pro**) implement, and review agents (**architect-review**, **security-auditor**, **qa-test-engineer**) close the loop before merge.

For incidents, the chain is **incident-responder** → **error-detective** / **devops-troubleshooter** → **root-cause-analyzer** → fix author. Don't skip the analyzer — it's the difference between a fix and a recurring fire.

## Best practices

1. **Architecture before code.** When a feature touches more than one service, route through **backend-architect** or **systems-architect** first. Sketch the contract, then build.
2. **Reviews are non-optional.** Every PR worth merging gets an **architect-review** pass for structure and a **security-auditor** pass when it touches auth, data, or external boundaries.
3. **Test what you ship.** **test-automator** or **qa-test-engineer** writes the integration test before the feature is called done. Unit-only coverage is a smell.
4. **Optimize after you measure.** **performance-tuner** and **performance-benchmarker** work from profiles, not hunches. Don't index, cache, or rewrite until there's a number to beat.

## Do's

- Use **legacy-modernizer** before rewriting. Most "rewrites" are migrations in disguise.
- Pull in **graphql-architect** the moment a REST API starts growing N+1 problems.
- Hand database changes to **database-optimizer** or **database-admin** — never wing a migration.
- Treat **error-detective** as a first-line responder for anything log-shaped.

## Don'ts

- Don't ask a language specialist to design the system. Architects design; specialists implement.
- Don't skip **security-auditor** on auth, payments, or anything with a user upload field.
- Don't let **devops-troubleshooter** become the catch-all. Route to specialists once the symptom is identified.

## Common tools

Read, Write, Edit, Bash, Grep, Glob — every engineering agent has these. Add Task for orchestrators (architects, reviewers) and WebFetch / WebSearch for agents that need external API context.

## When to call on Engineering

Anything that runs in production. New services, broken services, slow services, services that need to talk to other services. If the answer involves a deploy, this is the team.
