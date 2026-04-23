'use client';

import { agents, getAgent } from '@/data/agents';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AgentPage() {
  const params = useParams();
  const router = useRouter();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  const agent = slug ? getAgent(slug as string) : null;

  if (!agent) {
    return (
      <div className="min-h-screen" style={{ background: 'var(--axis-bg-void)' }}>
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 style={{ color: 'var(--axis-text-primary)' }}>Agent not found</h1>
          <Link href="/" style={{ color: 'var(--axis-brand)' }}>
            ← Back to directory
          </Link>
        </div>
      </div>
    );
  }

  const relatedAgents = agents
    .filter(a => a.category === agent.category && a.slug !== agent.slug)
    .slice(0, 6);

  return (
    <div className="min-h-screen" style={{ background: 'var(--axis-bg-void)' }}>
      {/* Header */}
      <header className="border-b sticky top-0 z-50" style={{ borderColor: 'var(--axis-border-mid)', background: 'var(--axis-bg-base)' }}>
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="hover:opacity-70 transition-opacity" style={{ color: 'var(--axis-brand)' }}>
            ← A2Y Axis
          </Link>
          <div className="text-sm" style={{ color: 'var(--axis-text-secondary)' }}>
            {agent.category}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b" style={{ borderColor: 'var(--axis-border-mid)', background: 'linear-gradient(135deg, var(--axis-bg-base) 0%, var(--axis-bg-elevated) 100%)' }}>
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Color accent */}
          <div className="flex items-start gap-4 mb-6">
            <div
              className="w-3 h-12 rounded-full"
              style={{ background: agent.color }}
            />
            <div>
              <h1 className="text-5xl font-bold" style={{ color: 'var(--axis-text-primary)' }}>
                {agent.name}
              </h1>
              <p className="text-xl mt-2" style={{ color: 'var(--axis-text-secondary)' }}>
                {agent.description}
              </p>
            </div>
          </div>

          {/* Metadata */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div style={{ background: 'var(--axis-bg-overlay)', borderRadius: '8px' }} className="p-4">
              <div className="text-xs uppercase tracking-wide" style={{ color: 'var(--axis-text-tertiary)' }}>
                Category
              </div>
              <div className="text-sm font-semibold mt-1" style={{ color: 'var(--axis-text-primary)' }}>
                {agent.category}
              </div>
            </div>
            <div style={{ background: 'var(--axis-bg-overlay)', borderRadius: '8px' }} className="p-4">
              <div className="text-xs uppercase tracking-wide" style={{ color: 'var(--axis-text-tertiary)' }}>
                Team
              </div>
              <div className="text-sm font-semibold mt-1" style={{ color: 'var(--axis-text-primary)' }}>
                {agent.team}
              </div>
            </div>
            <div style={{ background: 'var(--axis-bg-overlay)', borderRadius: '8px' }} className="p-4">
              <div className="text-xs uppercase tracking-wide" style={{ color: 'var(--axis-text-tertiary)' }}>
                Model
              </div>
              <div className="text-sm font-semibold mt-1" style={{ color: 'var(--axis-text-primary)' }}>
                {agent.model}
              </div>
            </div>
            <div style={{ background: 'var(--axis-bg-overlay)', borderRadius: '8px' }} className="p-4">
              <div className="text-xs uppercase tracking-wide" style={{ color: 'var(--axis-text-tertiary)' }}>
                Status
              </div>
              <div className="text-sm font-semibold mt-1" style={{ color: 'var(--axis-brand)' }}>
                {agent.enabled ? 'Active' : 'Inactive'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--axis-text-primary)' }}>
                Profile
              </h2>
              <div
                className="prose prose-invert max-w-none"
                style={{ color: 'var(--axis-text-secondary)' }}
                dangerouslySetInnerHTML={{
                  __html: agent.body
                    .split('\n')
                    .map(line => {
                      if (line.startsWith('## ')) return `<h3 class="text-xl font-semibold mt-6 mb-3" style="color: var(--axis-text-primary)">${line.slice(3)}</h3>`;
                      if (line.startsWith('### ')) return `<h4 class="text-lg font-semibold mt-4 mb-2" style="color: var(--axis-text-primary)">${line.slice(4)}</h4>`;
                      if (line.startsWith('- ')) return `<li class="ml-4">${line.slice(2)}</li>`;
                      if (line === '') return '<br />';
                      return `<p>${line}</p>`;
                    })
                    .join('\n')
                    .replace(/(<li[^>]*>[\s\S]*?<\/li>)/g, '<ul class="space-y-2">$1</ul>'),
                }}
              />
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Capabilities */}
            {agent.capabilities.length > 0 && (
              <div
                className="p-6 rounded-lg border"
                style={{
                  background: 'var(--axis-bg-elevated)',
                  borderColor: agent.color,
                  borderWidth: '1px',
                }}
              >
                <h3 className="font-semibold mb-4" style={{ color: 'var(--axis-text-primary)' }}>
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

            {/* Tools */}
            {agent.tools.length > 0 && (
              <div
                className="p-6 rounded-lg border"
                style={{
                  background: 'var(--axis-bg-elevated)',
                  borderColor: 'var(--axis-border-mid)',
                  borderWidth: '1px',
                }}
              >
                <h3 className="font-semibold mb-4" style={{ color: 'var(--axis-text-primary)' }}>
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

        {/* Related Agents */}
        {relatedAgents.length > 0 && (
          <section className="mt-20 pt-12 border-t" style={{ borderColor: 'var(--axis-border-mid)' }}>
            <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--axis-text-primary)' }}>
              Related Agents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedAgents.map(relAgent => (
                <Link key={relAgent.slug} href={`/agent/${relAgent.slug}`}>
                  <div
                    className="p-4 rounded-lg border transition-all cursor-pointer group"
                    style={{
                      background: 'var(--axis-bg-elevated)',
                      borderColor: relAgent.color + '80',
                      borderWidth: '1px',
                    }}
                  >
                    <h3 className="font-semibold text-sm group-hover:opacity-80 transition-opacity">
                      {relAgent.name}
                    </h3>
                    <p
                      className="text-xs line-clamp-1 mt-1"
                      style={{ color: 'var(--axis-text-tertiary)' }}
                    >
                      {relAgent.description.split('.')?.[0]}
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