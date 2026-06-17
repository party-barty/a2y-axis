'use client';

import { useState, type ReactNode, type CSSProperties } from 'react';

type Mode = 'light' | 'dark';

const LIGHT_VARS: CSSProperties = {
  '--axis-bg-void': '#F7F7FB',
  '--axis-bg-base': '#FFFFFF',
  '--axis-bg-elevated': '#F4F4F8',
  '--axis-bg-overlay': '#E8E8F0',
  '--axis-text-primary': '#0D0D16',
  '--axis-text-secondary': '#3D3D52',
  '--axis-text-tertiary': '#6B7A9E',
  '--axis-border-mid': '#D8D8E2',
} as CSSProperties;

const DARK_VARS: CSSProperties = {
  '--axis-bg-void': '#09090E',
  '--axis-bg-base': '#0D0D16',
  '--axis-bg-elevated': '#131320',
  '--axis-bg-overlay': '#1C1C2E',
  '--axis-text-primary': '#F0F4FF',
  '--axis-text-secondary': '#A8B4D0',
  '--axis-text-tertiary': '#6B7A9E',
  '--axis-border-mid': '#2E2E48',
} as CSSProperties;

interface ModeWrapperProps {
  children: ReactNode;
  defaultMode?: Mode;
}

export function ModeWrapper({ children, defaultMode = 'dark' }: ModeWrapperProps) {
  const [mode, setMode] = useState<Mode>(defaultMode);
  const vars = mode === 'light' ? LIGHT_VARS : DARK_VARS;

  return (
    <div style={{ ...vars, background: 'var(--axis-bg-void)', minHeight: '100vh' }}>
      <div
        className="sticky top-0 z-50 backdrop-blur-md"
        style={{
          background:
            mode === 'light'
              ? 'rgba(255,255,255,0.85)'
              : 'rgba(13,13,22,0.85)',
          borderBottom: '1px solid var(--axis-border-mid)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <span
            className="text-xs font-mono uppercase tracking-widest"
            style={{
              color: 'var(--axis-text-tertiary)',
              letterSpacing: '0.18em',
            }}
          >
            preview · mode demo
          </span>
          <div className="flex gap-1 p-1 rounded-full" style={{ background: 'var(--axis-bg-elevated)' }}>
            <button
              onClick={() => setMode('light')}
              className="px-3 py-1 text-xs rounded-full font-mono transition-colors"
              style={{
                background: mode === 'light' ? 'var(--axis-brand)' : 'transparent',
                color: mode === 'light' ? '#0D0D16' : 'var(--axis-text-secondary)',
              }}
              aria-label="Switch to light mode"
            >
              Light
            </button>
            <button
              onClick={() => setMode('dark')}
              className="px-3 py-1 text-xs rounded-full font-mono transition-colors"
              style={{
                background: mode === 'dark' ? 'var(--axis-brand)' : 'transparent',
                color: mode === 'dark' ? '#0D0D16' : 'var(--axis-text-secondary)',
              }}
              aria-label="Switch to dark mode"
            >
              Dark
            </button>
          </div>
        </div>
      </div>

      {/* ambient gradient layer — Turrell-coded for dark, soft for light */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            mode === 'dark'
              ? 'radial-gradient(ellipse at 30% 20%, rgba(99,102,241,0.18), transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(236,72,153,0.12), transparent 55%)'
              : 'radial-gradient(ellipse at 30% 20%, rgba(232,255,71,0.12), transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(139,92,246,0.06), transparent 55%)',
          zIndex: 0,
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}
