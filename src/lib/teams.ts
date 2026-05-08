import fs from 'node:fs';
import path from 'node:path';
import { agents, type Agent } from '@/data/agents';
import { getTeam, teams, type Team } from '@/data/teams';
import { renderMarkdown } from '@/lib/markdown';

export interface TeamPageData {
  team: Team;
  agents: Agent[];
  subcategories: { name: string; agents: Agent[] }[];
  toolFrequency: { tool: string; count: number }[];
  bodyHtml: string | null;
}

export function loadTeamPage(slug: string): TeamPageData | null {
  const team = getTeam(slug);
  if (!team) return null;

  const teamAgents = agents
    .filter(a => a.team === slug)
    .sort((a, b) => a.name.localeCompare(b.name));

  const subMap = new Map<string, Agent[]>();
  for (const a of teamAgents) {
    const key = a.subcategory || 'general';
    if (!subMap.has(key)) subMap.set(key, []);
    subMap.get(key)!.push(a);
  }
  const subcategories = [...subMap.entries()]
    .map(([name, ags]) => ({ name, agents: ags }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const toolCounts = new Map<string, number>();
  for (const a of teamAgents) {
    for (const t of a.tools) {
      toolCounts.set(t, (toolCounts.get(t) ?? 0) + 1);
    }
  }
  const toolFrequency = [...toolCounts.entries()]
    .map(([tool, count]) => ({ tool, count }))
    .sort((a, b) => b.count - a.count || a.tool.localeCompare(b.tool));

  let bodyHtml: string | null = null;
  const mdPath = path.join(process.cwd(), 'src', 'content', 'teams', `${slug}.md`);
  if (fs.existsSync(mdPath)) {
    const md = fs.readFileSync(mdPath, 'utf8');
    bodyHtml = renderMarkdown(md);
  }

  return { team, agents: teamAgents, subcategories, toolFrequency, bodyHtml };
}

export function listTeamSlugs(): string[] {
  return teams.map(t => t.slug);
}
