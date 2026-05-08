'use client';

import { useState, useMemo } from 'react';
import { agents, type Agent } from '@/data/agents';
import { teams, tiers, teamsByTier } from '@/data/teams';
import Link from 'next/link';

export default function Home() {
  const [search, setSearch] = useState('');
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let result = agents;

    if (selectedTeam) {
      result = result.filter(a => a.team === selectedTeam);
    }

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        a =>
          a.name.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.team.toLowerCase().includes(q) ||
          a.subcategory.toLowerCase().includes(q)
      );
    }

    return result.sort((a, b) => a.name.localeCompare(b.name));
  }, [search, selectedTeam]);

  const agentCountByTeam = useMemo(() => {
    const m: Record<string, number> = {};
    for (const a of agents) m[a.team] = (m[a.team] ?? 0) + 1;
    return m;
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'var(--axis-bg-void)' }}>
      {/* Header */}
      <header className="border-b" style={{ borderColor: 'var(--axis-border-mid)', background: 'var(--axis-bg-base)' }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--axis-brand)' }}>
              A2Y Axis
            </h1>
            <p className="text-lg mb-1" style={{ color: 'var(--axis-text-primary)' }}>
              {agents.length} agents shipping the world&rsquo;s most advanced AI pet translator.
            </p>
            <p className="text-sm" style={{ color: 'var(--axis-text-tertiary)' }}>
              If it actually worked.
            </p>
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder="Search agents..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full px-4 py-3 rounded-lg text-sm"
            style={{
              background: 'var(--axis-bg-elevated)',
              borderColor: 'var(--axis-border-mid)',
              border: '1px solid',
              color: 'var(--axis-text-primary)',
            }}
          />
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Teams overview, grouped by tier */}
        <div className="mb-12 space-y-10">
          {tiers.map(tier => {
            const tierTeams = teamsByTier[tier.slug];
            const tierAgentCount = tierTeams.reduce(
              (sum, t) => sum + (agentCountByTeam[t.slug] ?? 0),
              0
            );
            return (
              <section key={tier.slug}>
                <div className="mb-4 flex items-baseline justify-between gap-4">
                  <div>
                    <h2
                      className="text-2xl font-bold tracking-tight"
                      style={{ color: 'var(--axis-text-primary)' }}
                    >
                      {tier.label}
                    </h2>
                    <p
                      className="text-sm mt-1"
                      style={{ color: 'var(--axis-text-secondary)' }}
                    >
                      {tier.blurb}
                    </p>
                  </div>
                  <div
                    className="text-xs font-mono uppercase tracking-widest whitespace-nowrap"
                    style={{ color: 'var(--axis-text-tertiary)', letterSpacing: '0.18em' }}
                  >
                    {tierTeams.length} {tierTeams.length === 1 ? 'team' : 'teams'} · {tierAgentCount} agents
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {tierTeams.map(t => (
                    <Link key={t.slug} href={`/team/${t.slug}`}>
                      <div
                        className="p-4 rounded-lg border transition-all hover:-translate-y-0.5 cursor-pointer group h-full"
                        style={{
                          background: 'var(--axis-bg-elevated)',
                          borderColor: t.color + '40',
                          borderLeft: `3px solid ${t.color}`,
                        }}
                      >
                        {t.callsign && (
                          <div
                            className="text-[10px] font-mono uppercase tracking-widest mb-1"
                            style={{ color: t.color, letterSpacing: '0.18em' }}
                          >
                            {t.callsign}
                          </div>
                        )}
                        <div
                          className="font-semibold text-sm group-hover:opacity-80 transition-opacity"
                          style={{ color: 'var(--axis-text-primary)' }}
                        >
                          {t.label}
                        </div>
                        <div
                          className="text-xs mt-1"
                          style={{ color: 'var(--axis-text-tertiary)' }}
                        >
                          {agentCountByTeam[t.slug] ?? 0} agents
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-8 mb-12">
          {/* Filter chips */}
          <div>
            <h2
              className="text-sm font-semibold mb-4 uppercase tracking-wide"
              style={{ color: 'var(--axis-text-tertiary)' }}
            >
              Filter by team
            </h2>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTeam(null)}
                className="px-3 py-1 text-sm rounded-full transition-colors"
                style={{
                  background: !selectedTeam ? 'var(--axis-brand)' : 'var(--axis-bg-elevated)',
                  color: !selectedTeam ? '#000' : 'var(--axis-text-secondary)',
                  border: '1px solid var(--axis-border-mid)',
                }}
              >
                All
              </button>
              {teams.map(t => (
                <button
                  key={t.slug}
                  onClick={() => setSelectedTeam(t.slug)}
                  className="px-3 py-1 text-sm rounded-full transition-colors"
                  style={{
                    background:
                      selectedTeam === t.slug
                        ? t.color
                        : 'var(--axis-bg-elevated)',
                    color:
                      selectedTeam === t.slug ? '#000' : 'var(--axis-text-secondary)',
                    border: `1px solid ${
                      selectedTeam === t.slug ? t.color : 'var(--axis-border-mid)'
                    }`,
                  }}
                >
                  {t.label} ({agentCountByTeam[t.slug] ?? 0})
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          <div>
            <h2
              className="text-sm font-semibold mb-6 uppercase tracking-wide"
              style={{ color: 'var(--axis-text-tertiary)' }}
            >
              Results ({filtered.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map(agent => (
                <AgentCard key={agent.slug} agent={agent} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function AgentCard({ agent }: { agent: Agent }) {
  return (
    <Link href={`/agent/${agent.team}/${agent.slug}`}>
      <div
        className="p-6 rounded-lg border transition-all hover:border-opacity-100 hover:-translate-y-0.5 cursor-pointer group"
        style={{
          background: 'var(--axis-bg-elevated)',
          borderColor: agent.color + '80',
          borderWidth: '1px',
        }}
      >
        {/* Color accent */}
        <div
          className="w-2 h-2 rounded-full mb-3"
          style={{ background: agent.color }}
        />

        {/* Name */}
        <h3 className="font-semibold mb-2 text-lg group-hover:opacity-80 transition-opacity">
          {agent.name}
        </h3>

        {/* Description */}
        <p
          className="text-sm line-clamp-2 mb-4"
          style={{ color: 'var(--axis-text-secondary)' }}
        >
          {agent.description}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap gap-2">
          <span
            className="px-2 py-1 text-xs rounded"
            style={{
              background: agent.color + '1F',
              color: agent.color,
            }}
          >
            {agent.team}
          </span>
          {agent.subcategory && (
            <span
              className="px-2 py-1 text-xs rounded"
              style={{
                background: 'var(--axis-bg-overlay)',
                color: 'var(--axis-text-tertiary)',
              }}
            >
              {agent.subcategory}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
