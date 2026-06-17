import Link from 'next/link';

export const metadata = {
  title: 'Preview — A2Y Axis',
  description:
    'Low-fi mockups of the educational orientation and prompt widget proof-of-concept.',
};

export default function PreviewIndex() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--axis-bg-void)' }}>
      <header
        className="border-b"
        style={{
          borderColor: 'var(--axis-border-mid)',
          background: 'var(--axis-bg-base)',
        }}
      >
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-baseline justify-between">
          <Link
            href="/"
            className="hover:opacity-70 transition-opacity"
            style={{ color: 'var(--axis-brand)' }}
          >
            ← A2Y Axis
          </Link>
          <span
            className="text-xs font-mono uppercase tracking-widest"
            style={{
              color: 'var(--axis-text-tertiary)',
              letterSpacing: '0.18em',
            }}
          >
            /preview
          </span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1
          className="text-4xl font-bold mb-4"
          style={{ color: 'var(--axis-text-primary)' }}
        >
          Preview routes
        </h1>
        <p
          className="text-lg mb-12"
          style={{ color: 'var(--axis-text-secondary)' }}
        >
          Low-fi mockups for issue{' '}
          <a
            href="https://github.com/party-barty/a2y-axis/issues/17"
            className="underline"
            style={{ color: 'var(--axis-brand)' }}
          >
            #17
          </a>
          . Production routes are untouched.
        </p>

        <div className="space-y-4">
          <PreviewCard
            href="/preview/homepage"
            title="Homepage — educational orientation"
            description="Re-imagined homepage with tier-grouped layout (The Pitch / The Stack / The Funnel), hex sigil placeholders, and dual-mode (light + dark) demo. Demonstrates the educational-first framing without committing to fictional company copy."
            tag="homepage"
          />
          <PreviewCard
            href="/preview/agent/marketing/app-store-optimizer"
            title="Agent detail — prompt widget proof-of-concept"
            description="Enhanced agent detail page for app-store-optimizer with 3 worked-through example prompts in 3 environments (Web Chat / IDE / Slack). Real prosumer scenarios — App Store listing audit, keyword field optimization, screenshot caption authoring."
            tag="prompt widget"
          />
        </div>
      </main>
    </div>
  );
}

function PreviewCard({
  href,
  title,
  description,
  tag,
}: {
  href: string;
  title: string;
  description: string;
  tag: string;
}) {
  return (
    <Link href={href}>
      <div
        className="p-6 rounded-lg border transition-all hover:-translate-y-0.5 cursor-pointer"
        style={{
          background: 'var(--axis-bg-elevated)',
          borderColor: 'var(--axis-border-mid)',
          borderLeft: '3px solid var(--axis-brand)',
        }}
      >
        <div
          className="text-xs font-mono uppercase tracking-widest mb-2"
          style={{ color: 'var(--axis-brand)', letterSpacing: '0.18em' }}
        >
          {tag}
        </div>
        <h2
          className="text-xl font-semibold mb-2"
          style={{ color: 'var(--axis-text-primary)' }}
        >
          {title}
        </h2>
        <p
          className="text-sm leading-relaxed"
          style={{ color: 'var(--axis-text-secondary)' }}
        >
          {description}
        </p>
      </div>
    </Link>
  );
}
