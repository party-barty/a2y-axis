## Mission

Operations keeps the machine running. The team's job is to handle the analytics, infrastructure, and support functions that aren't anyone else's specialty but everyone depends on.

## How they work together

Three lanes: **analytics** (data instrumentation, reporting, behavioral intelligence), **infrastructure** (system reliability, scaling, monitoring), and **support** (process automation and operational responses). The pattern: **business-analyst** turns metrics into reports, **infrastructure-maintainer** keeps systems healthy and scaled, **operations-optimizer** finds and removes process friction, and **workflow-analyst** maps and automates repeatable work.

Operations sits between every other team — they instrument what Engineering builds, surface signal to Product and Leadership, and reduce manual load across the studio.

## Best practices

1. **Instrument before you launch.** **business-analyst** defines the metrics that matter at design time, not after questions get asked.
2. **Process is a product.** **operations-optimizer** treats workflows like features — measure baseline, design improvement, ship, measure again.
3. **Infrastructure is a continuous practice.** **infrastructure-maintainer** monitors proactively. Scaling, drift, and capacity are watched, not waited on.
4. **Automate the second occurrence.** First time, do it manually. Second time, **workflow-analyst** automates it.

## Do's

- Use **business-analyst** for KPI definition and dashboard design.
- Pull in **operations-optimizer** any time someone says "this is taking forever every week."
- Let **infrastructure-maintainer** own scaling decisions — they have the production view.
- Hand new repeatable processes to **workflow-analyst** for documentation and automation.

## Don'ts

- Don't ship dashboards without owners. Every metric needs a human accountable for moving it.
- Don't paper over manual work. Find the structural fix.
- Don't let infrastructure become invisible. Operations gets the credit when nothing breaks.

## Common tools

Read, Write, Edit, Grep, Glob, Bash — for scripts, configs, and runbooks. WebSearch / WebFetch for tooling research. Task for orchestrators that delegate process work.

## When to call on Operations

Reporting and dashboards, system reliability concerns, scaling challenges, process bottlenecks, or any moment where "this should be more automatic" comes up.
