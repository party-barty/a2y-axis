'use client';

import { useState } from 'react';
import type { ExamplePrompt } from '@/data/example-prompts';

type Environment = 'web' | 'ide' | 'slack';

interface PromptWidgetProps {
  agentName: string;
  agentColor: string;
  prompts: ExamplePrompt[];
}

const ENVIRONMENTS: { slug: Environment; label: string }[] = [
  { slug: 'web', label: 'Web Chat' },
  { slug: 'ide', label: 'IDE' },
  { slug: 'slack', label: 'Slack' },
];

export function PromptWidget({
  agentName,
  agentColor,
  prompts,
}: PromptWidgetProps) {
  const [activePromptId, setActivePromptId] = useState(prompts[0]?.id ?? '');
  const [environment, setEnvironment] = useState<Environment>('web');
  const [showFollowUp, setShowFollowUp] = useState(false);

  const activePrompt = prompts.find(p => p.id === activePromptId) ?? prompts[0];

  if (!activePrompt) {
    return (
      <div
        className="p-6 rounded-lg border text-sm"
        style={{
          background: 'var(--axis-bg-elevated)',
          borderColor: 'var(--axis-border-mid)',
          color: 'var(--axis-text-secondary)',
        }}
      >
        No example prompts authored for this agent yet.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Environment tabs */}
      <div className="flex flex-wrap gap-2 items-center">
        <span
          className="text-xs uppercase tracking-widest mr-2"
          style={{ color: 'var(--axis-text-tertiary)', letterSpacing: '0.18em' }}
        >
          Try in
        </span>
        {ENVIRONMENTS.map(env => {
          const active = environment === env.slug;
          return (
            <button
              key={env.slug}
              onClick={() => setEnvironment(env.slug)}
              className="px-3 py-1 text-xs rounded-full font-mono transition-colors"
              style={{
                background: active ? agentColor : 'var(--axis-bg-elevated)',
                color: active ? '#0D0D16' : 'var(--axis-text-secondary)',
                border: `1px solid ${active ? agentColor : 'var(--axis-border-mid)'}`,
              }}
            >
              {env.label}
            </button>
          );
        })}
      </div>

      {/* Prompt scenario picker */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {prompts.map(p => {
          const active = activePromptId === p.id;
          return (
            <button
              key={p.id}
              onClick={() => {
                setActivePromptId(p.id);
                setShowFollowUp(false);
              }}
              className="p-3 rounded-lg border text-left transition-all hover:-translate-y-0.5"
              style={{
                background: active ? `${agentColor}1A` : 'var(--axis-bg-elevated)',
                borderColor: active ? agentColor : 'var(--axis-border-mid)',
                borderWidth: active ? '1.5px' : '1px',
              }}
            >
              <div
                className="text-xs uppercase tracking-widest mb-1 font-mono"
                style={{ color: agentColor, letterSpacing: '0.14em' }}
              >
                Scenario {prompts.indexOf(p) + 1}
              </div>
              <div
                className="text-sm font-semibold"
                style={{ color: 'var(--axis-text-primary)' }}
              >
                {p.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Scenario context */}
      <div
        className="p-4 rounded-lg border-l-4 text-sm"
        style={{
          background: 'var(--axis-bg-overlay)',
          borderLeftColor: agentColor,
          color: 'var(--axis-text-secondary)',
          fontStyle: 'italic',
        }}
      >
        {activePrompt.scenario}
      </div>

      {/* Conversation pane — environment-styled */}
      <ConversationPane
        environment={environment}
        agentName={agentName}
        agentColor={agentColor}
        prompt={activePrompt.prompt}
        response={activePrompt.response}
        followUp={activePrompt.followUp}
        showFollowUp={showFollowUp}
        onToggleFollowUp={() => setShowFollowUp(v => !v)}
      />

      {/* Disclaimer */}
      <div
        className="text-xs italic text-center pt-2"
        style={{ color: 'var(--axis-text-tertiary)' }}
      >
        Static mockup — agent responses are pre-authored, not generated live.
      </div>
    </div>
  );
}

interface ConversationPaneProps {
  environment: Environment;
  agentName: string;
  agentColor: string;
  prompt: string;
  response: string;
  followUp?: ExamplePrompt['followUp'];
  showFollowUp: boolean;
  onToggleFollowUp: () => void;
}

function ConversationPane({
  environment,
  agentName,
  agentColor,
  prompt,
  response,
  followUp,
  showFollowUp,
  onToggleFollowUp,
}: ConversationPaneProps) {
  if (environment === 'web') {
    return (
      <div
        className="p-5 rounded-lg border space-y-4"
        style={{
          background: 'var(--axis-bg-elevated)',
          borderColor: 'var(--axis-border-mid)',
        }}
      >
        <Bubble role="you" content={prompt} accent={agentColor} />
        <Bubble role={agentName} content={response} accent={agentColor} agent />
        {followUp && (
          <>
            {showFollowUp ? (
              <>
                <Bubble role="you" content={followUp.prompt} accent={agentColor} />
                <Bubble
                  role={agentName}
                  content={followUp.response}
                  accent={agentColor}
                  agent
                />
              </>
            ) : (
              <button
                onClick={onToggleFollowUp}
                className="text-xs px-3 py-1.5 rounded-full font-mono"
                style={{
                  background: 'var(--axis-bg-overlay)',
                  color: agentColor,
                  border: `1px solid ${agentColor}55`,
                }}
              >
                Show follow-up turn →
              </button>
            )}
          </>
        )}
      </div>
    );
  }

  if (environment === 'ide') {
    // IDE chrome stays dark regardless of page mode — code editors are
    // conventionally dark. Use hardcoded text colors here (not CSS vars)
    // so light mode doesn't render dark-on-dark unreadable text.
    const IDE_TEXT_PRIMARY = '#F0F4FF';
    const IDE_TEXT_SECONDARY = '#C4CDE5';
    const IDE_TEXT_TERTIARY = '#7B8AAB';
    const IDE_BORDER = '#2E2E48';

    return (
      <div
        className="rounded-lg border font-mono text-sm overflow-hidden"
        style={{
          background: '#0a0a0f',
          borderColor: IDE_BORDER,
        }}
      >
        <div
          className="px-4 py-2 text-xs flex items-center gap-3 border-b"
          style={{
            background: '#15151f',
            borderColor: IDE_BORDER,
            color: IDE_TEXT_TERTIARY,
          }}
        >
          <span>~/projects/mealmate-ios — IDE</span>
          <span style={{ color: agentColor }}>· {agentName}.session</span>
        </div>
        <div className="p-4 space-y-3 leading-relaxed">
          <div>
            <span style={{ color: IDE_TEXT_TERTIARY }}>{'// you'}</span>
            <pre
              className="whitespace-pre-wrap mt-1"
              style={{ color: IDE_TEXT_PRIMARY }}
            >
              {prompt}
            </pre>
          </div>
          <div>
            <span style={{ color: agentColor }}>{`// ${agentName}`}</span>
            <pre
              className="whitespace-pre-wrap mt-1"
              style={{ color: IDE_TEXT_SECONDARY }}
            >
              {response}
            </pre>
          </div>
          {followUp && showFollowUp && (
            <>
              <div>
                <span style={{ color: IDE_TEXT_TERTIARY }}>{'// you'}</span>
                <pre
                  className="whitespace-pre-wrap mt-1"
                  style={{ color: IDE_TEXT_PRIMARY }}
                >
                  {followUp.prompt}
                </pre>
              </div>
              <div>
                <span style={{ color: agentColor }}>{`// ${agentName}`}</span>
                <pre
                  className="whitespace-pre-wrap mt-1"
                  style={{ color: IDE_TEXT_SECONDARY }}
                >
                  {followUp.response}
                </pre>
              </div>
            </>
          )}
          {followUp && !showFollowUp && (
            <button
              onClick={onToggleFollowUp}
              className="text-xs underline"
              style={{ color: agentColor }}
            >
              {`// show follow-up`}
            </button>
          )}
        </div>
      </div>
    );
  }

  // Slack
  return (
    <div
      className="rounded-lg border overflow-hidden"
      style={{
        background: 'var(--axis-bg-elevated)',
        borderColor: 'var(--axis-border-mid)',
      }}
    >
      <div
        className="px-4 py-2 text-xs border-b flex items-center gap-2"
        style={{
          background: 'var(--axis-bg-overlay)',
          borderColor: 'var(--axis-border-mid)',
          color: 'var(--axis-text-tertiary)',
        }}
      >
        <span># aso-launch-prep</span>
        <span style={{ color: 'var(--axis-text-tertiary)' }}>·</span>
        <span>2 in thread</span>
      </div>
      <div className="p-4 space-y-4">
        <SlackMessage
          name="you"
          color="var(--axis-text-primary)"
          content={prompt}
        />
        <SlackMessage
          name={agentName}
          color={agentColor}
          content={response}
          isAgent
        />
        {followUp && showFollowUp && (
          <>
            <SlackMessage
              name="you"
              color="var(--axis-text-primary)"
              content={followUp.prompt}
            />
            <SlackMessage
              name={agentName}
              color={agentColor}
              content={followUp.response}
              isAgent
            />
          </>
        )}
        {followUp && !showFollowUp && (
          <button
            onClick={onToggleFollowUp}
            className="text-xs px-3 py-1.5 rounded-full font-mono"
            style={{
              background: 'var(--axis-bg-overlay)',
              color: agentColor,
              border: `1px solid ${agentColor}55`,
            }}
          >
            Reply in thread →
          </button>
        )}
      </div>
    </div>
  );
}

function Bubble({
  role,
  content,
  accent,
  agent = false,
}: {
  role: string;
  content: string;
  accent: string;
  agent?: boolean;
}) {
  return (
    <div
      className="flex gap-3"
      style={{ flexDirection: agent ? 'row' : 'row-reverse' }}
    >
      <div
        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-semibold"
        style={{
          background: agent ? accent : 'var(--axis-bg-overlay)',
          color: agent ? '#0D0D16' : 'var(--axis-text-secondary)',
        }}
      >
        {agent ? role.slice(0, 2).toUpperCase() : 'YOU'}
      </div>
      <div
        className="flex-1 p-3 rounded-lg text-sm leading-relaxed"
        style={{
          background: agent ? `${accent}14` : 'var(--axis-bg-overlay)',
          color: 'var(--axis-text-primary)',
          maxWidth: '85%',
        }}
      >
        <div
          className="text-xs mb-1.5 font-mono uppercase tracking-wide"
          style={{ color: agent ? accent : 'var(--axis-text-tertiary)' }}
        >
          {role}
        </div>
        <pre
          className="whitespace-pre-wrap"
          style={{
            color: 'var(--axis-text-primary)',
            fontFamily: 'inherit',
          }}
        >
          {content}
        </pre>
      </div>
    </div>
  );
}

function SlackMessage({
  name,
  color,
  content,
  isAgent = false,
}: {
  name: string;
  color: string;
  content: string;
  isAgent?: boolean;
}) {
  return (
    <div className="flex gap-3">
      <div
        className="flex-shrink-0 w-9 h-9 rounded flex items-center justify-center text-xs font-mono font-semibold"
        style={{
          background: isAgent ? color : 'var(--axis-bg-overlay)',
          color: isAgent ? '#0D0D16' : 'var(--axis-text-secondary)',
        }}
      >
        {isAgent ? name.slice(0, 2).toUpperCase() : 'YOU'}
      </div>
      <div className="flex-1">
        <div className="flex items-baseline gap-2 mb-1">
          <span
            className="text-sm font-semibold"
            style={{ color: isAgent ? color : 'var(--axis-text-primary)' }}
          >
            {name}
          </span>
          {isAgent && (
            <span
              className="text-[10px] px-1.5 py-0.5 rounded font-mono uppercase"
              style={{
                background: `${color}24`,
                color,
              }}
            >
              app
            </span>
          )}
          <span
            className="text-xs"
            style={{ color: 'var(--axis-text-tertiary)' }}
          >
            just now
          </span>
        </div>
        <pre
          className="whitespace-pre-wrap text-sm leading-relaxed"
          style={{
            color: 'var(--axis-text-secondary)',
            fontFamily: 'inherit',
          }}
        >
          {content}
        </pre>
      </div>
    </div>
  );
}
