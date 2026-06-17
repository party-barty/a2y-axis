export interface ExamplePrompt {
  id: string;
  title: string;
  scenario: string;
  prompt: string;
  response: string;
  followUp?: {
    prompt: string;
    response: string;
  };
}

export const examplePrompts: Record<string, ExamplePrompt[]> = {
  'app-store-optimizer': [
    {
      id: 'audit-listing',
      title: 'Audit my App Store listing',
      scenario:
        'You run a meal-planning Shopify side-business and just shipped its companion iOS app. Your install rate is half what your landing page conversion is. Time for an ASO audit.',
      prompt:
        'Here\'s my current App Store title: "MealMate — Plan Your Week With Smart Meals." I\'m targeting "meal planner" as my primary keyword. Score this against ASO best practices and suggest rewrites that keep the brand recognizable.',
      response: `Quick read on the current title:

- **Length:** 41 characters. iOS allows 30 in the title, so the part after "Smart" is being truncated in search results. Bad.
- **Keyword position:** "Plan" appears twice, but "meal planner" (your target) is split across the subtitle. Apple's algorithm reads them separately.
- **Value prop:** "Smart Meals" is vague — every app in this category claims to be smart.

Three rewrites, in increasing risk:

1. **Conservative:** "MealMate: Weekly Meal Planner" — 28 chars, primary keyword exact-match, brand kept.
2. **Aggressive:** "Meal Planner — MealMate" — 23 chars, keyword first (Apple ranks first-position keywords higher), brand demoted to subtitle territory.
3. **Reframe:** "MealMate: Plan, Shop, Cook" — 26 chars, drops the keyword from the title entirely and puts "Meal Planner" as the dominant subtitle term. Bet on subtitle indexing being enough.

I'd ship #1, A/B-test against #2 if Apple's experimentation tools are turned on for your account.`,
      followUp: {
        prompt:
          'Go with #1. What should the subtitle do?',
        response: `Subtitle gets 30 characters and Apple indexes it like a second title. Don't repeat words from the main title — wasted real estate.

If your title becomes "MealMate: Weekly Meal Planner," your subtitle should pick up secondary keywords without overlap:

> **"Grocery Lists & Recipes"**

24 chars, picks up two high-volume keywords ("grocery list" and "recipes") that meal-planning shoppers also search. Indexed independently from the title.

Alternate: **"Family Meals, Smart Lists"** — slightly less keyword-dense but reads more aspirational. If your core audience is parents, lean here.`,
      },
    },
    {
      id: 'pick-keywords',
      title: 'Pick my iOS keyword field',
      scenario:
        'iOS gives you a 100-character keyword field that\'s indexed for search but not visible to users. RankMath gave you 30 candidate keywords. Now you have to pick.',
      prompt: `Here are my 30 keyword candidates from RankMath research, with monthly search volume in parens:

meal planner (40k), grocery list (33k), recipe app (28k), weekly menu (12k), meal prep (52k), family meals (8k), grocery shopping (22k), cooking app (15k), dinner ideas (18k), shopping list (45k), pantry tracker (3k), meal kit (38k), recipe organizer (4k), batch cooking (6k), eating healthy (14k), what to cook (7k), meal ideas (11k), grocery planner (5k), kitchen organizer (2k), dinner planner (3k), healthy eating (24k), recipe collection (3k), meal scheduler (1k), grocery tracker (4k), meal planning app (16k), recipes weekly (1k), cook book (8k), cooking ideas (9k), what to eat (12k), food planner (5k)

I'm already using "MealMate" + "Weekly Meal Planner" in the title and subtitle. Pick the best 100 characters of keywords for the keyword field.`,
      response: `**Rules to apply first:**

- iOS doesn't re-index words already in the title or subtitle — so "meal," "planner," "weekly" are off the table.
- Use commas, no spaces (Apple ignores spaces and commas, so spaces waste characters).
- Apple combines keyword field words with title/subtitle words, so I'll pick keywords that *combine well*, not just rank well alone.

**My pick (98 characters):**

\`\`\`
grocery,list,prep,recipe,menu,shopping,family,meal,kit,dinner,batch,pantry,healthy,ideas,cook
\`\`\`

**Why these:**

- "grocery,list" → combines with "meal planner" → ranks for "grocery list meal planner" and "meal planner grocery list" both
- "prep" → high volume on its own (52k) and unlocks "meal prep" combinations
- "recipe,menu" → unlocks long-tail like "weekly recipe menu" and "meal menu planner"
- "shopping,family" → these have decent volume and pair well with what's already indexed
- "kit,dinner,batch,pantry,healthy,ideas,cook" → tail keywords that fill out the 100 char budget without canniballing higher-volume terms

**Skipped intentionally:**

- "weekly," "meal," "planner" — already in title/subtitle
- "kitchen organizer" (2k), "meal scheduler" (1k) — too low volume to earn the chars
- "what to eat," "what to cook" — Apple weights short-keyword terms like "what" and "to" poorly

Re-evaluate in 30 days against your search-impressions report. ASO is a dial you tune, not a setting you flip.`,
    },
    {
      id: 'screenshot-captions',
      title: 'Write five screenshot captions',
      scenario:
        'You\'ve got 5 App Store screenshots showing your app\'s flow but the captions all say "Plan Your Week" — generic and not converting. You need a caption set that walks the viewer through the value prop.',
      prompt: `I have 5 screenshots, in this order:

1. Dashboard with the week's planned meals, all 7 days visible
2. Recipe detail with ingredients, prep time, and a "swap" button
3. Auto-generated grocery list grouped by store aisle
4. Cooking mode with step-by-step instructions and a timer
5. End-of-week summary showing what was cooked, what got skipped, and money saved

Caption #1 needs to address the headline value prop. Captions #2-#5 walk through the flow. Each caption is max 30 chars (Apple's display limit on most devices). Drop a complete set.`,
      response: `**Caption set, optimized for App Store browsing:**

1. *"Your week, planned in 60 seconds"* (33 — slight overflow, Apple will truncate gracefully)
2. *"Swap any meal in one tap"* (24)
3. *"Grocery list, sorted by aisle"* (29)
4. *"Cook hands-free with timers"* (27)
5. *"See what you saved, every Friday"* (32 — overflow on smaller devices; consider trimming)

**The reasoning:**

- Caption #1 promises a *time savings* (60 seconds), which is the strongest single conversion lever for utility apps. "Plan your week" is descriptive; "in 60 seconds" is a benefit.
- Caption #2 surfaces the swap feature without explaining what it does — App Store browsers scroll fast; the screenshot has to do the work.
- Caption #3 is concrete and specific. "Sorted by aisle" is the detail that makes a meal planner feel actually-useful instead of yet-another-recipe-app.
- Caption #4 implies hands-free cooking (timer + steps) which is the hidden value of the cooking mode. Don't say "cooking mode" — show it.
- Caption #5 closes the loop. The end-of-week recap is the retention moment; this caption tells the buyer "this app keeps working after launch week."

If you want to A/B-test, the highest-leverage swap is Caption #1 — try *"Plan a week of meals in 60 seconds"* (the literal version) against the more aspirational *"Eat better with less effort"*. Run 7 days each, ship the winner.`,
    },
  ],
};

export const getPromptsForAgent = (slug: string): ExamplePrompt[] =>
  examplePrompts[slug] ?? [];
