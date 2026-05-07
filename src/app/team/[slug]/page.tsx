import Link from 'next/link';
import { notFound } from 'next/navigation';
import { listTeamSlugs, loadTeamPage } from '@/lib/teams';

export function generateStaticParams() {
  return listTeamSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = loadTeamPage(slug);
  if (!data) return { title: 'Team not found — A2Y Axis' };
  return {
    title: `${data.team.label} — A2Y Axis`,
    description: data.team.tagline,
  };
}

export default async function TeamPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = loadTeamPage(slug);
  if (!data) notFound();

  const { team, agents, subcategories, toolFrequency, bodyHtml } = data;

  return (
    <div className="min-h-screen" style={{ background: 'var(--axis-bg-void)' }}>
      <header
        className="border-b sticky top-0 z-50"
        style={{ borderColor: 'var(--axis-border-mid)', background: 'var(--axis-bg-base)' }}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="hover:opacity-70 transition-opacity"
            style={{ color: 'var(--axis-brand)' }}
          >
            ← A2Y Axis
          </Link>
          <div className="text-sm" style={{ color: 'var(--axis-text-secondary)' }}>
            Team archive
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        className="border-b"
        style={{
          borderColor: 'var(--axis-border-mid)',
          background: `linear-gradient(135deg, var(--axis-bg-base) 0%, ${team.color}1A 100%)`,
        }}
      >
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex items-start gap-4 mb-6">
            <div
              className="w-3 h-16 rounded-full"
              style={{ background: team.color }}
            />
            <div>
              {team.callsign && (
                <div
                  className="text-xs uppercase tracking-widest mb-2"
                  style={{ color: team.color, letterSpacing: '0.2em' }}
                >
                  Callsign · {team.callsign}
                  {team.archetype ? ` · ${team.archetype}` : ''}
                </div>
              )}
              <h1
                className="text-5xl font-bold"
                style={{ color: 'var(--axis-text-primary)' }}
              >
                {team.label}
              </h1>
              <p
                className="text-xl mt-3 max-w-2xl"
                style={{ color: 'var(--axis-text-secondary)' }}
              >
                {team.tagline}
              </p>
            </div>
          </div>

          {/* Stat strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <StatCard label="Agents" value={String(agents.length)} accent={team.color} />
            <StatCard
              label="Subcategories"
              value={String(subcategories.length)}
              accent={team.color}
            />
            <StatCard
              label="Distinct tools"
              value={String(toolFrequency.length)}
              accent={team.color}
            />
            <StatCard
              label="Status"
              value="Active"
              accent="var(--axis-brand)"
              valueColor="var(--axis-brand)"
            />
          </div>
        </div>
      </section>

      {/* Body */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Authored content */}
          <div className="lg:col-span-2">
            {bodyHtml ? (
              <article
                className="markdown-content"
                dangerouslySetInnerHTML={{ __html: bodyHtml }}
              />
            ) : (
              <p style={{ color: 'var(--axis-text-tertiary)' }}>
                Team brief coming soon.
              </p>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div
              className="p-6 rounded-lg border"
              style={{
                background: 'var(--axis-bg-elevated)',
                borderColor: team.color + '66',
                borderWidth: '1px',
              }}
            >
              <h3
                className="font-semibold mb-4 text-sm uppercase tracking-wide"
                style={{ color: team.color }}
              >
                Most-used tools
              </h3>
              <ul className="space-y-2">
                {toolFrequency.slice(0, 8).map(({ tool, count }) => (
                  <li
                    key={tool}
                    className="flex items-center justify-between text-sm"
                    style={{ color: 'var(--axis-text-secondary)' }}
                  >
                    <span>{tool}</span>
                    <span style={{ color: 'var(--axis-text-tertiary)' }}>
                      {count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* Agents grouped by subcategory */}
        <section className="mt-16">
          <h2
            className="text-2xl font-bold mb-8"
            style={{ color: 'var(--axis-text-primary)' }}
          >
            Roster ({agents.length})
          </h2>
          <div className="space-y-12">
            {subcategories.map(group => (
              <div key={group.name}>
                <h3
                  className="text-xs uppercase tracking-widest mb-4 pb-2 border-b"
                  style={{
                    color: team.color,
                    borderColor: team.color + '40',
                    letterSpacing: '0.18em',
                  }}
                >
                  {group.name === 'general' ? 'General' : group.name}{' '}
                  <span style={{ color: 'var(--axis-text-tertiary)' }}>
                    ({group.agents.length})
                  </span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.agents.map(agent => (
                    <Link
                      key={agent.slug}
                      href={`/agent/${team.slug}/${agent.slug}`}
                    >
                      <div
                        className="p-4 rounded-lg border transition-all cursor-pointer group hover:-translate-y-0.5"
                        style={{
                          background: 'var(--axis-bg-elevated)',
                          borderColor: team.color + '55',
                          borderWidth: '1px',
                        }}
                      >
                        <h4
                          className="font-semibold text-sm mb-1 group-hover:opacity-80 transition-opacity"
                          style={{ color: 'var(--axis-text-primary)' }}
                        >
                          {agent.name}
                        </h4>
                        <p
                          className="text-xs line-clamp-2"
                          style={{ color: 'var(--axis-text-tertiary)' }}
                        >
                          {agent.description.split('.')[0]}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function StatCard({
  label,
  value,
  accent,
  valueColor,
}: {
  label: string;
  value: string;
  accent: string;
  valueColor?: string;
}) {
  return (
    <div
      className="p-4 rounded-lg"
      style={{
        background: 'var(--axis-bg-overlay)',
        borderLeft: `3px solid ${accent}`,
      }}
    >
      <div
        className="text-xs uppercase tracking-wide"
        style={{ color: 'var(--axis-text-tertiary)' }}
      >
        {label}
      </div>
      <div
        className="text-lg font-semibold mt-1"
        style={{ color: valueColor ?? 'var(--axis-text-primary)' }}
      >
        {value}
      </div>
    </div>
  );
}
