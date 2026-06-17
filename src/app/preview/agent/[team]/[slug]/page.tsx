import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAgent } from '@/data/agents';
import { getTeam, tiersBySlug } from '@/data/teams';
import { getPromptsForAgent } from '@/data/example-prompts';
import { HexSigil } from '@/components/preview/HexSigil';
import { ModeWrapper } from '@/components/preview/ModeWrapper';
import { PromptWidget } from '@/components/preview/PromptWidget';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ team: string; slug: string }>;
}) {
  const { slug } = await params;
  const agent = getAgent(slug);
  return {
    title: agent
      ? `Preview · ${agent.name} — A2Y Axis`
      : 'Preview · Agent not found',
    description: agent?.description ?? 'Agent prompt widget proof-of-concept.',
  };
}

export default async function PreviewAgentPage({
  params,
}: {
  params: Promise<{ team: string; slug: string }>;
}) {
  const { team: teamSlug, slug } = await params;
  const agent = getAgent(slug);
  const team = getTeam(teamSlug);

  if (!agent || !team || agent.team !== teamSlug) {
    notFound();
  }

  const prompts = getPromptsForAgent(slug);
  const tier = tiersBySlug[team.tier];

  return (
    <ModeWrapper defaultMode="dark">
      <div className="max-w-4xl mx-auto px-6 pt-12 pb-24">
        {/* Breadcrumb */}
        <Link
          href="/preview"
          className="inline-block mb-6 text-sm hover:opacity-70 transition-opacity"
          style={{ color: 'var(--axis-brand)' }}
        >
          ← Preview index
        </Link>

        {/* Hero */}
        <header className="mb-10 flex items-start gap-6">
          <HexSigil color={agent.color} size={96} callsign={team.callsign} />
          <div className="flex-1">
            <div
              className="text-xs font-mono uppercase tracking-widest mb-2"
              style={{ color: agent.color, letterSpacing: '0.18em' }}
            >
              {tier.label} · {team.label}
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold tracking-tight mb-3"
              style={{ color: 'var(--axis-text-primary)' }}
            >
              {agent.name}
            </h1>
            <p
              className="text-lg leading-relaxed max-w-2xl"
              style={{ color: 'var(--axis-text-secondary)' }}
            >
              {agent.description}
            </p>
          </div>
        </header>

        {/* Educational framing intro */}
        <section
          className="mb-10 p-6 rounded-xl border"
          style={{
            background: 'var(--axis-bg-elevated)',
            borderColor: agent.color + '40',
            borderLeft: `4px solid ${agent.color}`,
          }}
        >
          <div
            className="text-xs font-mono uppercase tracking-widest mb-3"
            style={{ color: agent.color, letterSpacing: '0.18em' }}
          >
            Try this agent on real work
          </div>
          <p
            className="text-base leading-relaxed mb-2"
            style={{ color: 'var(--axis-text-primary)' }}
          >
            Three real prosumer scenarios. Pick one, watch the conversation
            play out. Switch environments to see how the same agent shows up in
            a chat client, your IDE, or a Slack thread.
          </p>
          <p
            className="text-sm italic"
            style={{ color: 'var(--axis-text-tertiary)' }}
          >
            Static for now — when this widget ships for real, you&apos;ll be able
            to type your own prompts and run the agent against them.
          </p>
        </section>

        {/* Prompt widget */}
        <section className="mb-12">
          <PromptWidget
            agentName={agent.name}
            agentColor={agent.color}
            prompts={prompts}
          />
        </section>

        {/* Capabilities + tools */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {agent.capabilities.length > 0 && (
            <div
              className="p-5 rounded-xl border"
              style={{
                background: 'var(--axis-bg-elevated)',
                borderColor: agent.color + '40',
              }}
            >
              <h3
                className="font-semibold text-sm uppercase tracking-widest mb-3"
                style={{ color: agent.color, letterSpacing: '0.16em' }}
              >
                Capabilities
              </h3>
              <ul className="space-y-2">
                {agent.capabilities.map((cap, i) => (
                  <li
                    key={i}
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--axis-text-secondary)' }}
                  >
                    • {cap}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {agent.tools.length > 0 && (
            <div
              className="p-5 rounded-xl border"
              style={{
                background: 'var(--axis-bg-elevated)',
                borderColor: 'var(--axis-border-mid)',
              }}
            >
              <h3
                className="font-semibold text-sm uppercase tracking-widest mb-3"
                style={{
                  color: 'var(--axis-text-tertiary)',
                  letterSpacing: '0.16em',
                }}
              >
                Tools ({agent.tools.length})
              </h3>
              <div className="flex flex-wrap gap-2">
                {agent.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded font-mono"
                    style={{
                      background: 'var(--axis-bg-overlay)',
                      color: 'var(--axis-text-secondary)',
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Footer / meta */}
        <div
          className="pt-6 border-t text-center"
          style={{ borderColor: 'var(--axis-border-mid)' }}
        >
          <p
            className="text-xs font-mono"
            style={{ color: 'var(--axis-text-tertiary)' }}
          >
            Static mockup for issue #17. Production agent page lives at{' '}
            <Link
              href={`/agent/${team.slug}/${agent.slug}`}
              className="underline"
              style={{ color: 'var(--axis-brand)' }}
            >
              /agent/{team.slug}/{agent.slug}
            </Link>
            .
          </p>
        </div>
      </div>
    </ModeWrapper>
  );
}
