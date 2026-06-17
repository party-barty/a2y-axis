## Mission

AI / Automation — codename **NOVA** — makes the studio compound. The team's job is to build the agents, prompts, pipelines, and automated workflows that let a small team operate like a much larger one.

## How they work together

Four lanes: **ai-engineering** (LLM apps, RAG, agent frameworks), **ml-engineering** (model training, MLOps, production ML), **prompts** (prompt design and optimization), and **automation** (workflow orchestration and process automation). The pattern: **ai-workflow-designer** scopes the system, **ai-engineer** or **ml-engineer** builds the core, **prompt-engineer** or **prompt-engineer-advanced** tunes the language layer, and **automation-architect** wires it into the broader stack.

For pure prompt work, **prompt-engineer** handles iteration and **prompt-engineer-advanced** handles production-grade systems with safety, evals, and conversation design.

## Best practices

1. **Start with the workflow, not the model.** **ai-workflow-designer** maps the human-AI handoffs before any model gets selected.
2. **MLOps from day one.** **mlops-engineer** sets up tracking, versioning, and rollback — even on the first model.
3. **Prompts are versioned artifacts.** **prompt-engineer** treats prompts like code: tested, diffed, rolled back when they regress.
4. **Cost is a design constraint.** Token budgets, model selection, and caching get decided before the system ships.

## Do's

- Use **ai-engineer** for any LLM-app work — RAG, agents, function calling, integrations.
- Pull in **ml-engineer** for traditional ML (classification, embeddings, recommendation).
- Hand production deployment of models to **mlops-engineer**.
- Let **automation-architect** design the integration boundary between agents and the rest of the stack.

## Don'ts

- Don't build a chatbot when an automation works. Most "AI features" are just workflows.
- Don't ship a prompt without evals. **prompt-engineer-advanced** can build the eval harness.
- Don't fine-tune until prompting hits its ceiling. The order is prompt → RAG → fine-tune.

## Common tools

Read, Write, Edit, Grep, Glob, Bash — for code and config. WebSearch / WebFetch for model research and API documentation. Task is heavily used by orchestrator agents that delegate to other specialists.

## When to call on AI / Automation

LLM features, agent systems, prompt design, ML pipelines, or any process that should run without a human in the loop. If the question is "can we automate this?", start here.
