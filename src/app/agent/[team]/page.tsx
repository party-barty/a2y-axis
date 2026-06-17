import { notFound, permanentRedirect } from 'next/navigation';
import { getAgent } from '@/data/agents';
import { getTeam } from '@/data/teams';

// Legacy /agent/<slug> URLs redirect to /agent/<team>/<slug>.
// Visiting /agent/<team-slug> directly redirects to the team archive.
export default async function AgentLegacyOrTeamRedirect({
  params,
}: {
  params: Promise<{ team: string }>;
}) {
  const { team: param } = await params;

  const agent = getAgent(param);
  if (agent) permanentRedirect(`/agent/${agent.team}/${agent.slug}`);

  if (getTeam(param)) permanentRedirect(`/team/${param}`);

  notFound();
}
