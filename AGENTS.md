<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- bm-design-system:start -->
## Design system

This codebase has a design system documented at [`/admin/design-system`](/admin/design-system). The page previews and explains every primitive — colors, typography, structure, base styles, and elements — and shows the exact markup to use.

> **Token authority is the brand, not this scaffold.** `docs/brand-guidelines.md` §2 and the `--axis-*` tokens in `src/app/globals.css` are the source of truth. The semantic tokens in `src/styles/design-system.css` (`--color-page`, `--color-accent`, …) are a documented *mirror* of those values — if the brand changes, update both.
>
> **`#E8FF47` is not a general-purpose accent.** It is bound to `--color-reward` and reserved for "you completed / unlocked / earned" states. The generic CTA accent is `--color-accent` (`--axis-launch`, `#F97316`). Do not use chartreuse for hover states, links, or focus rings.
>
> **Base styles are scoped to `.ds-scope`.** They apply only inside the design-system route, so the rest of the app is unaffected. Rule 3 below therefore describes how text elements behave *on that page*; elsewhere in the app, style text as the surrounding page already does.

When implementing UI:

1. **Always check the design system first.** Before writing any frontend markup or styles, refer to `/admin/design-system` and the components under `src/components/ui/` and `src/components/design-system/sections/`. Use the existing tokens (`bg-page`, `bg-surface`, `text-ink-body`, etc.) and the existing primitives (`<Button>`, `<Input>`, `<Badge>`, `<Select>`, `<Checkbox>`, `<Radio>`, `<Dialog>`, `<ThemeToggle>` and friends).

2. **Do not invent ad-hoc styles.** Don't reach for raw hex values, raw font sizes, or one-off Tailwind utilities when a token or primitive exists. Don't introduce new variant systems alongside the existing `cva`-based ones.

3. **Use bare semantic HTML for text elements** *(inside `.ds-scope`)*. Headings (`<h1>`–`<h6>`), paragraphs (`<p>`), anchors (`<a>`), `<strong>`, `<blockquote>`, `<ul>` / `<ol>` / `<li>`, `<hr>`, and form-field labels (`<label htmlFor>` / `<legend>`) already have their size, color, weight, font, letter-spacing, and line-height defined in the base layer of `design-system.css`. **Do not apply Tailwind utilities like `text-xl`, `text-sm`, `font-semibold`, `text-ink-display`, `tracking-tight` to these elements** — write `<h1>Projects</h1>`, not `<h1 className="text-2xl font-semibold text-ink-display">Projects</h1>`. Layout utilities (`mt-1`, `max-w-md`, `flex`, etc.) are fine. For a `<label>` wrapping a checkbox/radio (where the visible text is body copy, not a field title), add `font-normal text-ink-body` to override the medium weight.

4. **If a needed UI element is missing, propose it as a design-system addition** before building a one-off — `src/components/ui/x.tsx` plus a new section on `/admin/design-system`. Default to proposing the system addition.

5. **Re-running the `bm-design-system` skill** is the supported way to add new sections. Note this install intentionally diverges from the upstream template: brand palette instead of the default cyan/slate, `.ds-scope`-scoped base layer, dark-by-default, and no Milkdown/`<RichTextField>`. Re-check those after any re-run.
<!-- bm-design-system:end -->
