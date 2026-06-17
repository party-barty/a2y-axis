import Link from 'next/link';
import { agents } from '@/data/agents';
import { tiers, teamsByTier, type TierSlug } from '@/data/teams';
import { HexSigil } from '@/components/preview/HexSigil';
import { ModeWrapper } from '@/components/preview/ModeWrapper';

export const metadata = {
  title: 'Preview · Homepage — A2Y Axis',
  description:
    'Low-fi mockup demonstrating the educational orientation and tier-grouped layout.',
};

const TIER_GRADIENTS: Record<TierSlug, string> = {
  pitch:
    'radial-gradient(ellipse at top left, rgba(245,158,11,0.18), transparent 65%), radial-gradient(ellipse at bottom right, rgba(139,92,246,0.14), transparent 60%)',
  stack:
    'radial-gradient(ellipse at top left, rgba(59,130,246,0.18), transparent 65%), radial-gradient(ellipse at bottom right, rgba(99,102,241,0.14), transparent 60%)',
  funnel:
    'radial-gradient(ellipse at top left, rgba(16,185,129,0.18), transparent 65%), radial-gradient(ellipse at bottom right, rgba(6,182,212,0.12), transparent 60%)',
};

export default function PreviewHomepage() {
  const agentCountByTeam = agents.reduce<Record<string, number>>(
    (acc, a) => {
      acc[a.team] = (acc[a.team] ?? 0) + 1;
      return acc;
    },
    {}
  );

  return (
    <ModeWrapper defaultMode="dark">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-24">
        {/* Hero */}
        <header className="mb-16">
          <Link
            href="/preview"
            className="inline-block mb-6 text-sm hover:opacity-70 transition-opacity"
            style={{ color: 'var(--axis-brand)' }}
          >
            ← Preview index
          </Link>
          <div
            className="text-xs font-mono uppercase tracking-widest mb-4"
            style={{ color: 'var(--axis-text-tertiary)', letterSpacing: '0.22em' }}
          >
            A2Y Axis · Homepage v2
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6 max-w-3xl"
            style={{ color: 'var(--axis-text-primary)', lineHeight: 1.05 }}
          >
            Meet your{' '}
            <span style={{ color: 'var(--axis-brand)' }}>130-agent</span>{' '}
            studio.
          </h1>
          <p
            className="text-xl md:text-2xl mb-3 max-w-3xl leading-relaxed"
            style={{ color: 'var(--axis-text-secondary)' }}
          >
            Every agent gets at least three example prompts you can work
            through, grounded in the tools you already use — Zapier, HubSpot,
            WordPress, Shopify, RankMath, your IDE.
          </p>
          <p
            className="text-sm italic"
            style={{ color: 'var(--axis-text-tertiary)' }}
          >
            We&apos;re a fictional Series B AI startup shipping the world&apos;s
            most advanced AI pet translator. The agents are real. The
            translator{' '}
            <span style={{ color: 'var(--axis-text-secondary)' }}>
              is not.
            </span>
          </p>
        </header>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <Stat label="Agents" value="130" />
          <Stat label="Teams" value="10" />
          <Stat label="Tiers" value="3" />
          <Stat label="Real workflows" value="∞" accent />
        </div>

        {/* Tier sections */}
        <div className="space-y-16">
          {tiers.map(tier => {
            const tierTeams = teamsByTier[tier.slug];
            const tierAgentCount = tierTeams.reduce(
              (sum, t) => sum + (agentCountByTeam[t.slug] ?? 0),
              0
            );
            return (
              <section key={tier.slug} className="relative">
                <div
                  aria-hidden
                  className="absolute inset-0 -mx-6 rounded-2xl pointer-events-none"
                  style={{
                    background: TIER_GRADIENTS[tier.slug],
                    opacity: 0.7,
                  }}
                />

                <div className="relative px-6 py-8">
                  <div className="mb-6 flex flex-col md:flex-row md:items-baseline md:justify-between gap-3">
                    <div>
                      <div
                        className="text-xs font-mono uppercase tracking-widest mb-2"
                        style={{
                          color: 'var(--axis-text-tertiary)',
                          letterSpacing: '0.22em',
                        }}
                      >
                        {tier.function}
                      </div>
                      <h2
                        className="text-3xl md:text-4xl font-bold tracking-tight"
                        style={{ color: 'var(--axis-text-primary)' }}
                      >
                        {tier.label}
                      </h2>
                      <p
                        className="text-sm mt-2 max-w-xl"
                        style={{ color: 'var(--axis-text-secondary)' }}
                      >
                        {tier.blurb}
                      </p>
                    </div>
                    <div
                      className="text-xs font-mono uppercase tracking-widest whitespace-nowrap"
                      style={{
                        color: 'var(--axis-text-tertiary)',
                        letterSpacing: '0.18em',
                      }}
                    >
                      {tierTeams.length} {tierTeams.length === 1 ? 'team' : 'teams'} · {tierAgentCount} agents
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {tierTeams.map(t => (
                      <Link key={t.slug} href={`/team/${t.slug}`}>
                        <div
                          className="p-4 rounded-xl border transition-all hover:-translate-y-0.5 cursor-pointer h-full flex flex-col items-center text-center gap-3"
                          style={{
                            background: 'var(--axis-bg-elevated)',
                            borderColor: t.color + '40',
                            borderWidth: '1px',
                          }}
                        >
                          <HexSigil
                            color={t.color}
                            size={64}
                            callsign={t.callsign}
                          />
                          <div>
                            <div
                              className="font-semibold text-sm mb-0.5"
                              style={{ color: 'var(--axis-text-primary)' }}
                            >
                              {t.label}
                            </div>
                            <div
                              className="text-xs"
                              style={{ color: 'var(--axis-text-tertiary)' }}
                            >
                              {agentCountByTeam[t.slug] ?? 0} agents
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="flex justify-end">
                    <Link
                      href="/preview/agent/marketing/app-store-optimizer"
                      className="text-sm px-4 py-2 rounded-full font-mono transition-colors hover:opacity-80"
                      style={{
                        background: 'var(--axis-bg-overlay)',
                        color: 'var(--axis-brand)',
                        border: '1px solid var(--axis-border-mid)',
                      }}
                    >
                      Try a real workflow →
                    </Link>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Footer / meta */}
        <div
          className="mt-24 pt-8 border-t text-center"
          style={{ borderColor: 'var(--axis-border-mid)' }}
        >
          <p
            className="text-xs font-mono"
            style={{ color: 'var(--axis-text-tertiary)' }}
          >
            Static mockup for issue #17. Hex sigils are placeholders. Real sigil family lands later.
          </p>
        </div>
      </div>
    </ModeWrapper>
  );
}

function Stat({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div
      className="p-4 rounded-lg"
      style={{
        background: 'var(--axis-bg-elevated)',
        borderLeft: `3px solid ${accent ? 'var(--axis-brand)' : 'var(--axis-border-mid)'}`,
      }}
    >
      <div
        className="text-xs uppercase tracking-wide"
        style={{ color: 'var(--axis-text-tertiary)' }}
      >
        {label}
      </div>
      <div
        className="text-2xl font-bold mt-1"
        style={{
          color: accent ? 'var(--axis-brand)' : 'var(--axis-text-primary)',
        }}
      >
        {value}
      </div>
    </div>
  );
}
