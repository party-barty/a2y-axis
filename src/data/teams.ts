export interface Team {
  slug: string;
  label: string;
  color: string;
  callsign: string | null;
  archetype: string | null;
  tagline: string;
}

export const teams: Team[] = [
  {
    slug: 'engineering',
    label: 'Engineering',
    color: '#3B82F6',
    callsign: 'ARC',
    archetype: 'The Structuralist',
    tagline: 'Builds the load-bearing systems everything else hangs on.',
  },
  {
    slug: 'design',
    label: 'Design',
    color: '#EC4899',
    callsign: 'VEGA',
    archetype: 'The Auteur',
    tagline: 'Sets the visual language and protects the brand at every surface.',
  },
  {
    slug: 'marketing',
    label: 'Marketing',
    color: '#10B981',
    callsign: 'LUMEN',
    archetype: 'The Amplifier',
    tagline: 'Turns signal into reach — content, channels, and growth loops.',
  },
  {
    slug: 'ai-automation',
    label: 'AI / Automation',
    color: '#6366F1',
    callsign: 'NOVA',
    archetype: 'The Accelerationist',
    tagline: 'Makes the studio compound — agents, prompts, and automated workflows.',
  },
  {
    slug: 'product',
    label: 'Product',
    color: '#8B5CF6',
    callsign: 'VECTOR',
    archetype: 'The Navigator',
    tagline: 'Translates strategy into roadmaps, requirements, and shipped releases.',
  },
  {
    slug: 'account-customer-success',
    label: 'Account / CS',
    color: '#06B6D4',
    callsign: 'ECHO',
    archetype: 'The Translator',
    tagline: 'Closes the loop between what we ship and what customers actually need.',
  },
  {
    slug: 'leadership',
    label: 'Leadership',
    color: '#F59E0B',
    callsign: null,
    archetype: null,
    tagline: 'Strategy, finance, risk, and compliance — the executive layer.',
  },
  {
    slug: 'operations',
    label: 'Operations',
    color: '#14B8A6',
    callsign: null,
    archetype: null,
    tagline: 'Keeps the machine running: analytics, infrastructure, and support ops.',
  },
  {
    slug: 'research',
    label: 'Research',
    color: '#F97316',
    callsign: null,
    archetype: null,
    tagline: 'Data analysis and market intelligence that informs every other team.',
  },
  {
    slug: 'core',
    label: 'Core',
    color: '#FFD700',
    callsign: null,
    archetype: null,
    tagline: 'Cross-cutting capabilities that any agent can call on.',
  },
];

export const teamsBySlug: Record<string, Team> = teams.reduce(
  (acc, t) => ({ ...acc, [t.slug]: t }),
  {}
);

export const getTeam = (slug: string): Team | undefined => teamsBySlug[slug];
