## Mission

Core is the cross-cutting layer — capabilities any agent on any team can call on. Documentation, prompt orchestration, workflow utilities, and meta-tools that don't belong to one discipline because they belong to all of them.

## How they work together

Core agents serve as primitives. **docs-writer** and **docs-architect** produce documentation for systems built by Engineering. **api-documenter** generates OpenAPI specs and SDK docs. **tutorial-engineer** turns code into onboarding paths. **reference-builder** creates exhaustive technical references.

The pattern: a Core agent gets called when an output (docs, tutorial, reference, scaffold) is needed alongside something another team built. They don't initiate work — they finish it.

## Best practices

1. **Documentation is part of done.** **docs-writer** ships alongside the feature, not after it.
2. **The right doc format for the audience.** **tutorial-engineer** writes for first-time users; **reference-builder** writes for users who already know what they're looking for.
3. **Specs before SDKs.** **api-documenter** writes the OpenAPI spec; the SDK is generated from it.
4. **Architecture docs need a maintainer.** **docs-architect** produces the long-form technical manual; someone owns keeping it current.

## Do's

- Use **docs-writer** for user-facing guides and how-tos.
- Pull in **api-documenter** the moment an API stabilizes — even before public release.
- Let **tutorial-engineer** design onboarding sequences from existing code.
- Hand exhaustive parameter and configuration documentation to **reference-builder**.

## Don'ts

- Don't write architecture docs as a one-off. Without an owner, they decay.
- Don't generate docs from stale code. Sync them to releases.
- Don't ask Core to do strategy or design work. They serve other teams' output.

## Common tools

Read, Write, Edit, Grep, Glob, Bash — heavy file system and search work. WebFetch for pulling external API references. Task for delegating to specialist agents when documentation requires deep technical context.

## When to call on Core

Documentation needs at any level (user, API, reference, tutorial), onboarding flows, or any moment where the work itself exists but the artifact that explains it doesn't.
