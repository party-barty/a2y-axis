import Link from 'next/link';
import { notFound } from 'next/navigation';
import { agents, getAgent } from '@/data/agents';
import { getTeam } from '@/data/teams';
import { renderMarkdown } from '@/lib/markdown';

export function generateStaticParams() {
  return agents.map(a => ({ team: a.team, slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ team: string; slug: string }>;
}) {
  const { slug } = await params;
  const agent = getAgent(slug);
  if (!agent) return { title: 'Agent not found — A2Y Axis' };
  return {
    title: `${agent.name} — A2Y Axis`,
    description: agent.description,
  };
}

export default async function AgentPage({
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

  const bodyHtml = renderMarkdown(agent.body);
  const relatedAgents = agents
    .filter(a => a.team === agent.team && a.slug !== agent.slug)
    .slice(0, 6);

  return (
    <div className="min-h-screen" style={{ background: 'var(--axis-bg-void)' }}>
      <header
        className="border-b sticky top-0 z-50"
        style={{ borderColor: 'var(--axis-border-mid)', background: 'var(--axis-bg-base)' }}
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="hover:opacity-70 transition-opacity"
            style={{ color: 'var(--axis-brand)' }}
          >
            ← A2Y Axis
          </Link>
          <Link
            href={`/team/${team.slug}`}
            className="text-sm hover:opacity-80 transition-opacity"
            style={{ color: team.color }}
          >
            {team.label} ↗
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section
        className="border-b"
        style={{
          borderColor: 'var(--axis-border-mid)',
          background: `linear-gradient(135deg, var(--axis-bg-base) 0%, ${agent.color}1A 100%)`,
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-start gap-4 mb-6">
            <div
              className="w-3 h-12 rounded-full"
              style={{ background: agent.color }}
            />
            <div>
              <h1
                className="text-5xl font-bold"
                style={{ color: 'var(--axis-text-primary)' }}
              >
                {agent.name}
              </h1>
              <p
                className="text-xl mt-2"
                style={{ color: 'var(--axis-text-secondary)' }}
              >
                {agent.description}
              </p>
            </div>
          </div>

          {/* Metadata cards: Team (color-tinted), Subcategory, Model, Status */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <Link
              href={`/team/${team.slug}`}
              className="block transition-all hover:-translate-y-0.5"
            >
              <div
                className="p-4 rounded-lg border"
                style={{
                  background: `${agent.color}14`,
                  borderColor: agent.color,
                  borderWidth: '1px',
                }}
              >
                <div
                  className="text-xs uppercase tracking-wide"
                  style={{ color: agent.color, letterSpacing: '0.12em' }}
                >
                  Team
                </div>
                <div
                  className="text-sm font-semibold mt-1"
                  style={{ color: 'var(--axis-text-primary)' }}
                >
                  {team.label}
                </div>
              </div>
            </Link>
            <Card
              label="Subcategory"
              value={agent.subcategory || '—'}
              valueColor="var(--axis-text-primary)"
            />
            <Card
              label="Model"
              value={agent.model}
              valueColor="var(--axis-text-primary)"
            />
            <Card
              label="Status"
              value={agent.enabled ? 'Active' : 'Inactive'}
              valueColor="var(--axis-brand)"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: 'var(--axis-text-primary)' }}
              >
                Profile
              </h2>
              <article
                className="markdown-content"
                dangerouslySetInnerHTML={{ __html: bodyHtml }}
              />
            </section>
          </div>

          <aside className="lg:col-span-1 space-y-8">
            {agent.capabilities.length > 0 && (
              <div
                className="p-6 rounded-lg border"
                style={{
                  background: 'var(--axis-bg-elevated)',
                  borderColor: agent.color,
                  borderWidth: '1px',
                }}
              >
                <h3
                  className="font-semibold mb-4"
                  style={{ color: 'var(--axis-text-primary)' }}
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
                className="p-6 rounded-lg border"
                style={{
                  background: 'var(--axis-bg-elevated)',
                  borderColor: 'var(--axis-border-mid)',
                  borderWidth: '1px',
                }}
              >
                <h3
                  className="font-semibold mb-4"
                  style={{ color: 'var(--axis-text-primary)' }}
                >
                  Tools ({agent.tools.length})
                </h3>
                <div className="flex flex-wrap gap-2">
                  {agent.tools.slice(0, 12).map((tool, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded"
                      style={{
                        background: 'var(--axis-bg-overlay)',
                        color: 'var(--axis-text-tertiary)',
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        {relatedAgents.length > 0 && (
          <section
            className="mt-20 pt-12 border-t"
            style={{ borderColor: 'var(--axis-border-mid)' }}
          >
            <h2
              className="text-2xl font-bold mb-8"
              style={{ color: 'var(--axis-text-primary)' }}
            >
              More from {team.label}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedAgents.map(rel => (
                <Link key={rel.slug} href={`/agent/${rel.team}/${rel.slug}`}>
                  <div
                    className="p-4 rounded-lg border transition-all cursor-pointer group hover:-translate-y-0.5"
                    style={{
                      background: 'var(--axis-bg-elevated)',
                      borderColor: rel.color + '80',
                      borderWidth: '1px',
                    }}
                  >
                    <h3
                      className="font-semibold text-sm group-hover:opacity-80 transition-opacity"
                      style={{ color: 'var(--axis-text-primary)' }}
                    >
                      {rel.name}
                    </h3>
                    <p
                      className="text-xs line-clamp-1 mt-1"
                      style={{ color: 'var(--axis-text-tertiary)' }}
                    >
                      {rel.description.split('.')[0]}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

function Card({
  label,
  value,
  valueColor,
}: {
  label: string;
  value: string;
  valueColor: string;
}) {
  return (
    <div
      className="p-4 rounded-lg"
      style={{ background: 'var(--axis-bg-overlay)', borderRadius: '8px' }}
    >
      <div
        className="text-xs uppercase tracking-wide"
        style={{ color: 'var(--axis-text-tertiary)' }}
      >
        {label}
      </div>
      <div className="text-sm font-semibold mt-1" style={{ color: valueColor }}>
        {value}
      </div>
    </div>
  );
}
