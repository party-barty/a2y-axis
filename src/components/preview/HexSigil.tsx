interface HexSigilProps {
  color: string;
  size?: number;
  callsign?: string | null;
  earned?: boolean;
}

// Simple deterministic hash so each callsign gets a different inner motif
// without us having to author 10 of them by hand.
function hashSeed(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

export function HexSigil({
  color,
  size = 80,
  callsign,
  earned = true,
}: HexSigilProps) {
  // Earned vs idle just dials saturation/luminance of the gradient.
  // Sigils default to "earned" because the placeholder shouldn't read
  // as dimmed in the mockup.
  const opacity = earned ? 1 : 0.55;
  const seed = hashSeed(callsign ?? color);
  const motif = seed % 4; // 0..3 → four motif variants
  const rotation = (seed % 12) * 5; // 0..55deg incremental motif rotation

  const id = `hex-${color.replace('#', '')}-${callsign ?? 'x'}-${earned ? 'e' : 'i'}`;
  const fillId = `${id}-fill`;
  const innerFillId = `${id}-inner`;
  const highlightId = `${id}-highlight`;
  const rimId = `${id}-rim`;

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      role="img"
      aria-label={`Hex sigil placeholder${callsign ? ` — ${callsign}` : ''}`}
      style={{ display: 'block', overflow: 'visible' }}
    >
      <defs>
        {/* Outer hex fill — multi-stop linear gradient suggesting depth */}
        <linearGradient id={fillId} x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity={opacity * 0.95} />
          <stop offset="45%" stopColor={color} stopOpacity={opacity * 0.55} />
          <stop offset="100%" stopColor={color} stopOpacity={opacity * 0.18} />
        </linearGradient>

        {/* Inner rotated hex — radial gradient for the lit core */}
        <radialGradient id={innerFillId} cx="40%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity={earned ? 0.55 : 0.25} />
          <stop offset="35%" stopColor={color} stopOpacity={opacity * 0.65} />
          <stop offset="100%" stopColor={color} stopOpacity={opacity * 0.15} />
        </radialGradient>

        {/* Glassmorphic highlight ellipse */}
        <radialGradient id={highlightId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity={earned ? 0.85 : 0.4} />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0} />
        </radialGradient>

        {/* Iridescent rim — color → white → color along the stroke */}
        <linearGradient id={rimId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity={opacity} />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity={earned ? 0.6 : 0.3} />
          <stop offset="100%" stopColor={color} stopOpacity={opacity * 0.7} />
        </linearGradient>
      </defs>

      {/* Outer hex — fill + iridescent rim */}
      <polygon
        points="20,5 80,5 95,50 80,95 20,95 5,50"
        fill={`url(#${fillId})`}
        stroke={`url(#${rimId})`}
        strokeWidth={2}
        strokeLinejoin="round"
      />

      {/* Inner rotated hex (55% scale, rotated 30°) — the lit core */}
      <g transform="translate(50 50) rotate(30) scale(0.55) translate(-50 -50)">
        <polygon
          points="20,5 80,5 95,50 80,95 20,95 5,50"
          fill={`url(#${innerFillId})`}
          stroke={color}
          strokeOpacity={earned ? 0.5 : 0.2}
          strokeWidth={1.5}
        />
      </g>

      {/* Per-sigil motif — varies by callsign hash */}
      <g
        transform={`translate(50 50) rotate(${rotation}) translate(-50 -50)`}
        opacity={earned ? 0.92 : 0.6}
      >
        {motif === 0 && (
          <>
            {/* Triangular trio — three small circles + connecting lines */}
            <circle cx="50" cy="38" r="3.5" fill="#FFFFFF" fillOpacity={0.92} />
            <circle cx="42" cy="55" r="3.5" fill="#FFFFFF" fillOpacity={0.7} />
            <circle cx="58" cy="55" r="3.5" fill="#FFFFFF" fillOpacity={0.7} />
            <line x1="50" y1="38" x2="42" y2="55" stroke="#FFFFFF" strokeOpacity={0.45} strokeWidth={1} />
            <line x1="50" y1="38" x2="58" y2="55" stroke="#FFFFFF" strokeOpacity={0.45} strokeWidth={1} />
            <line x1="42" y1="55" x2="58" y2="55" stroke="#FFFFFF" strokeOpacity={0.45} strokeWidth={1} />
          </>
        )}
        {motif === 1 && (
          <>
            {/* Reticle — concentric circles + crosshair */}
            <circle cx="50" cy="50" r="9" fill="none" stroke="#FFFFFF" strokeOpacity={0.55} strokeWidth={1.2} />
            <circle cx="50" cy="50" r="14" fill="none" stroke="#FFFFFF" strokeOpacity={0.32} strokeWidth={1} />
            <line x1="50" y1="38" x2="50" y2="62" stroke="#FFFFFF" strokeOpacity={0.55} strokeWidth={1} />
            <line x1="38" y1="50" x2="62" y2="50" stroke="#FFFFFF" strokeOpacity={0.55} strokeWidth={1} />
          </>
        )}
        {motif === 2 && (
          <>
            {/* Gemstone facets — rotated nested squares */}
            <rect x="42" y="42" width="16" height="16" fill="none" stroke="#FFFFFF" strokeOpacity={0.62} strokeWidth={1.2} transform="rotate(45 50 50)" />
            <rect x="44" y="44" width="12" height="12" fill="none" stroke="#FFFFFF" strokeOpacity={0.4} strokeWidth={1} />
            <circle cx="50" cy="50" r="2" fill="#FFFFFF" fillOpacity={0.92} />
          </>
        )}
        {motif === 3 && (
          <>
            {/* Asterisk burst — three crossing lines + center dot */}
            <line x1="50" y1="36" x2="50" y2="64" stroke="#FFFFFF" strokeOpacity={0.55} strokeWidth={1.2} strokeLinecap="round" />
            <line x1="38" y1="44" x2="62" y2="56" stroke="#FFFFFF" strokeOpacity={0.55} strokeWidth={1.2} strokeLinecap="round" />
            <line x1="62" y1="44" x2="38" y2="56" stroke="#FFFFFF" strokeOpacity={0.55} strokeWidth={1.2} strokeLinecap="round" />
            <circle cx="50" cy="50" r="2.5" fill="#FFFFFF" fillOpacity={0.95} />
          </>
        )}
      </g>

      {/* Highlight ellipse — the 'lit from above-left' suggestion */}
      <ellipse
        cx="35"
        cy="22"
        rx="22"
        ry="9"
        fill={`url(#${highlightId})`}
        opacity={earned ? 0.7 : 0.3}
      />

      {/* Callsign monogram — small, lower-left */}
      {callsign && (
        <text
          x="22"
          y="86"
          fontSize="8"
          fontWeight="700"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
          fill="#FFFFFF"
          fillOpacity={earned ? 0.85 : 0.55}
          letterSpacing="0.5"
        >
          {callsign}
        </text>
      )}

      {/* Chartreuse pip — signature element, lower-right */}
      <circle cx="83" cy="80" r="3.5" fill="#E8FF47" />
      <circle cx="83" cy="80" r="5" fill="none" stroke="#E8FF47" strokeOpacity={0.35} strokeWidth={1} />
    </svg>
  );
}
