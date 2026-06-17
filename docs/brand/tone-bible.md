# A2Y Axis — Tone Bible

**Version:** 0.1
**Date:** 2026-05-08
**Status:** Draft for review (issue #16)

This is the operational voice guide for everything A2Y Axis writes. The brand bible (`docs/brand-guidelines.md`) defines what the studio looks like; this document defines what the studio *sounds* like.

---

## The premise behind the voice

A2Y Axis is the fictional Series B AI startup making the world's most advanced AI pet translator. We frame the studio as our own client. The recursive joke is that an AI agent studio is staffing itself with AI agents to ship a vaporware AI product.

But the *app* is not a fictional company's landing page. The app is a hands-on educational tool that teaches real prosumers (AI-semi-pro PMs, self-taught techies, aspiring solopreneurs) how to put 130 real Claude agents to work in their actual day-to-day stack: Zapier, HubSpot, RankMath, WordPress, Google Analytics, Shopify, MySQL, IDEs, bookkeeping software.

That tension — a real teaching tool wearing a fictional startup costume — is where the voice lives.

---

## The three registers

The voice is one entity (A2Y Axis = the fictional Series B = the meta-narrator) flexing across three registers depending on what's being said and to whom.

### Register A — Educational / instructional (dominant)

**When it fires:** Inside the prompt widget. Walking a user through a use case. Explaining what an agent does. Anywhere the goal is teaching the user something they can act on this afternoon.

**The vibe:** Clear. Concrete. Walks alongside the user. Uses their actual tools and vocabulary. No hand-waving, no "leverage AI to unlock new dimensions of productivity."

**Do:**

- Ground every example in a real prosumer tool — Zapier flow, HubSpot workflow, WordPress plugin, RankMath check, Shopify product description, Google Sheet, Slack channel.
- Name the outcome, then the steps. *"You'll have a Zap that adds new HubSpot contacts to a Google Sheet. Here's how content-marketer helps you write the trigger description."*
- Use second person. *"You'll feed the agent your existing meta description; it'll suggest three rewrites scored against your RankMath checks."*
- Show the agent's input and output. Don't summarize.

**Don't:**

- "Leverage cutting-edge agentic AI to unlock cross-platform synergies."
- "Empower yourself with the future of work."
- Reference Kubernetes, AWS, S3, Snowflake, Databricks, or anything an aspiring solopreneur doesn't pay for.
- Talk down. The user is a sharp PM, not a beginner.

**Sample sentences (3-5):**

1. *"You're sitting on a HubSpot list of 4,200 leads. content-marketer can write the cold-email subject line tests for you — here's a prompt that gives it your last campaign's open rate as a baseline."*
2. *"app-store-optimizer wants three things from you: the current app title, the keyword you're targeting, and one screenshot. It'll come back with title rewrites scored against ASO best practices."*
3. *"This Zap fires when a new podcast episode hits Spotify. Pass the episode title to content-creator and it'll draft the LinkedIn post, the X post, and a 90-second TikTok script — three formats, one agent call."*
4. *"data-scientist works in SQL. Paste your MySQL schema and ask it 'which products are buying-rate-decaying month-over-month?' — it'll write the query, run a sanity check, and explain the join in one paragraph."*
5. *"RankMath flagged 12 posts as 'thin content.' Hand the list to content-writer with one example post you've already rewritten, and it'll match the new pattern across the rest."*

---

### Register B — Earnest founder pitch (in-character)

**When it fires:** Hero copy on the homepage. About-page sections. Marketing surfaces where A2Y Axis is "pitching itself" as the fictional Series B startup. Pitch-deck moments.

**The vibe:** Earnest founder energy. Series B AI dysfunction wrapped in optimism. The kind of copy that *sounds* like a real venture-backed company that *also* somehow doesn't quite hold up if you read it twice.

**Do:**

- Speak in first-person plural — *"We're building..."*, *"Our team has..."*, *"We believe..."*
- Use the language of a current-cycle AI startup pitch: *agentic*, *workflow*, *orchestration*, *the future of work*, *your AI team* — but slightly too earnestly.
- Make grand claims about a product (the AI pet translator) that's clearly half-broken if anyone looks closely. The grandness is the joke; never wink directly.
- Reference real-sounding metrics that don't quite check out under inspection. *"Trained on 14 million hours of dog audio."* Sure.

**Don't:**

- Be cynical or self-aware *within* this register. Earnestness is the bit. The wink lives in Register C.
- Land on a punchline. Founder-pitch register doesn't tell jokes; it makes confident statements that are funny because of context.
- Use prosumer vocabulary here — Register B is the company's *external* voice, where they sound aspirational. Save Zapier-talk for Register A.

**Sample sentences (3-5):**

1. *"Petsky is the world's first AI translator built specifically for dog and cat audio cues, behavioral patterns, and emotional context. Our agentic system listens, learns, and tells you what your pet has been trying to say for years."*
2. *"We're not just an app. We're a full agent studio reimagining how humans and animals communicate, deployed across 10 specialized teams operating in concert."*
3. *"Founded in 2024 by a team of former AI researchers, behavioral linguists, and veterinary clinicians, Petsky is on a mission to bring the empathy gap between people and pets to zero."*
4. *"Our model has been trained on over 14 million hours of household pet audio, calibrated against a behavioral panel of 800 certified dog and cat behaviorists. We score 91.2% on inter-rater agreement against human translation."*
5. *"Today, Petsky is used by over 40,000 pet households across the U.S., Canada, and the U.K. We're just getting started."*

---

### Register C — Sardonic meta-aside (occasional)

**When it fires:** The line *underneath* the founder pitch. The hover tooltip. The 404 page. The footer in small type. The micro-moment where the app comments on its own pitch from outside the fiction.

**The vibe:** Office, more than Wonka. Dry, fond, slightly tragic. Loves its dysfunctional fictional client without being cruel. The *"If it actually worked."* energy. Michael Scott would approve; David Wallace would be confused.

**Do:**

- Land on the gap between what was promised and what shipped.
- Stay short. One sentence is usually enough; two is the maximum.
- Punch down at the *fiction* — the fictional company, the vaporware product — never at the user.
- Use specific, mundane details to defuse the grandness of Register B. *"The dog has said the same three sentences this week."*

**Don't:**

- Be mean. The user is here learning; the comedy is internal-housekeeping.
- Wink so hard the educational register loses authority. Register C is a *garnish.*
- Use heavy irony or shitposting language. Register C is dry, not chaotic.

**Sample sentences (3-5):**

1. *"If it actually worked."*
2. *"Petsky has been operational for 18 months. Your dog has said the same three sentences every day."*
3. *"The cat is, allegedly, a Marxist."*
4. *"We are a team of 130 specialists shipping a product that, on a good day, gets the dog right. We refuse to be discouraged."*
5. *"The Pitch already has the v3 deck. The Stack is still on v1. The Funnel is fielding the support tickets from v2. This is not unusual."*

---

## Voice flex by tier

The studio's three tiers (per `src/data/teams.ts`) are emotionally distinct in the fictional company's voice. The tone bible flexes accordingly.

### When the copy is about The Pitch (Leadership, Product, Research)

- **Founder-pitch register** is dominant. The Pitch is the fictional company's most *aspirational* layer.
- *"The Pitch decides what we're building two versions ahead of where The Stack is. They've already moved on by the time the engineers are done."*
- Sardonic-aside subtext: The Pitch is always slightly ahead of reality.

### When the copy is about The Stack (Engineering, AI/Automation, Design)

- **Educational register** is dominant. The Stack is where real builders work; the prose should sound like a smart practitioner explaining their craft.
- *"frontend-developer cares about the prosumer experience first. Hand them a Shopify theme and they'll show you which one of 12 components is dragging your Lighthouse score."*
- Sardonic-aside subtext: The Stack delivers what they can but rarely gets the press; their work shows up two quarters later as "what we shipped."

### When the copy is about The Funnel (Marketing, Account/CS, Operations, Core)

- **Mix.** Marketing-team voice can lean Founder-pitch. Customer Support voice leans Educational + Sardonic. Operations is dryly Educational.
- *"customer-support fields the ticket where someone's pet 'said' the same sentence three times in a row. They tag it as expected behavior."*
- Sardonic-aside subtext: The Funnel is where customer reality reveals what The Pitch and The Stack quietly disagreed about.

---

## Vocabulary register

### Use freely

Zapier · HubSpot · RankMath · WordPress · Google Analytics · Shopify · MySQL · IDEs (VS Code, JetBrains, Cursor) · Slack · Notion · Airtable · Stripe · Mailchimp · ConvertKit · Webflow · Framer · Figma · QuickBooks · FreshBooks · Wave · Spotify (for content trigger examples) · YouTube · LinkedIn · X · TikTok · Instagram · Reddit

### Avoid (enterprise-only — alienates the audience)

Kubernetes · AWS / S3 / EC2 / Lambda · Snowflake · Databricks · Salesforce Marketing Cloud · SAP · Workday · Oracle · enterprise SSO · "PB-scale" · "five 9s" · "regulatory-grade" anything · any tooling that requires a procurement department

### Use carefully

"AI" — fine but don't lean on it. The user is here precisely because they already know about AI; we don't have to remind them. Prefer naming the *agent* doing the work.

"agent" — primary noun. We have 130 of them and they have names; use them.

"prompt" — the user gives an agent a prompt. Don't dress this up.

---

## Studio voice quick checks

Before any prose goes live, run the three-question check:

1. **Audience filter:** Could a self-taught AI-curious PM read this and feel like it was written *for them*, not a Fortune 500 buyer? If no, rewrite.
2. **Tonal exclusion check:** Does the copy lean into femme themes, masculine stereotypes (sports, nautical, military, frat), or any gendered register? If yes, rewrite.
3. **Register check:** Is the right register firing for the surface? (Educational inside the widget; Founder-pitch on hero; Sardonic-aside as garnish.) If wrong, swap.

---

## What's locked since first draft

- **Product name: Petsky** (locked 2026-05-08). Use freely in copy.
- **Default mode: dark** (locked 2026-05-08). Sardonic-aside register lands hardest on dark; Founder-pitch register still works on dark thanks to the immersive Turrell-coded background. Light mode is a first-class secondary mode but isn't the default reading surface.

## What's still being decided

- **Manifesto copy** — separate authoring exercise. Will sit at the edge of Register B and Register C.

---

*This document lives at `docs/brand/tone-bible.md`. Update when names lock, registers shift, or the audience filter sharpens.*
