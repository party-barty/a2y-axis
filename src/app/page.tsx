'use client';

import { useState, useMemo } from 'react';
import { agents, categories, type Agent } from '@/data/agents';
import Link from 'next/link';

export default function Home() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let result = agents;

    if (selectedCategory) {
      result = result.filter(a => a.category === selectedCategory);
    }

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        a =>
          a.name.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q)
      );
    }

    return result.sort((a, b) => a.name.localeCompare(b.name));
  }, [search, selectedCategory]);

  return (
    <div className="min-h-screen" style={{ background: 'var(--axis-bg-void)' }}>
      {/* Header */}
      <header className="border-b" style={{ borderColor: 'var(--axis-border-mid)', background: 'var(--axis-bg-base)' }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--axis-brand)' }}>
              A2Y Axis
            </h1>
            <p style={{ color: 'var(--axis-text-secondary)' }}>
              Interactive agent directory — discover all {agents.length} agents
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
        <div className="grid grid-cols-1 gap-8 mb-12">
          {/* Categories */}
          <div>
            <h2
              className="text-sm font-semibold mb-4 uppercase tracking-wide"
              style={{ color: 'var(--axis-text-tertiary)' }}
            >
              Categories ({categories.length})
            </h2>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className="px-3 py-1 text-sm rounded-full transition-colors"
                style={{
                  background: !selectedCategory ? 'var(--axis-brand)' : 'var(--axis-bg-elevated)',
                  color: !selectedCategory ? '#000' : 'var(--axis-text-secondary)',
                  border: '1px solid var(--axis-border-mid)',
                }}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className="px-3 py-1 text-sm rounded-full transition-colors"
                  style={{
                    background: selectedCategory === cat ? 'var(--axis-brand)' : 'var(--axis-bg-elevated)',
                    color: selectedCategory === cat ? '#000' : 'var(--axis-text-secondary)',
                    border: '1px solid var(--axis-border-mid)',
                  }}
                >
                  {cat} ({agents.filter(a => a.category === cat).length})
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
    <Link href={`/agent/${agent.slug}`}>
      <div
        className="p-6 rounded-lg border transition-all hover:border-opacity-100 cursor-pointer group"
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
              background: 'var(--axis-bg-overlay)',
              color: 'var(--axis-text-tertiary)',
            }}
          >
            {agent.category}
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
