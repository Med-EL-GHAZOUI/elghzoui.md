/**
 * Static stand-in for the 3D hero. Rendered on the server and used permanently
 * for reduced-motion users and devices without WebGL.
 */
const nodes = [
  [300, 70], [468, 140], [520, 285], [452, 440], [300, 500], [148, 440], [80, 285], [132, 140],
  [380, 105], [494, 215], [494, 365], [376, 470], [224, 470], [106, 365], [106, 215], [220, 105],
] as const;

const edges = nodes.flatMap(([x, y], i) => {
  const next = nodes[(i + 1) % nodes.length];
  const skip = nodes[(i + 3) % nodes.length];
  return next && skip ? [[x, y, next[0], next[1]], [x, y, skip[0], skip[1]]] : [];
});

export const StaticHeroArt = () => (
  <svg viewBox="0 0 600 570" className="h-full w-full" role="img" aria-label="Abstract wireframe network illustration">
    <title>Abstract wireframe network illustration</title>
    <defs>
      <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.22" />
        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="300" cy="285" r="230" fill="url(#core-glow)" />
    <g fill="none" stroke="#8b7cf6" strokeOpacity="0.3" strokeWidth="1">
      {edges.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
      ))}
    </g>
    <g fill="none" stroke="#22d3ee" strokeOpacity="0.5" strokeWidth="1.2">
      <polygon points="300,160 410,222 410,348 300,410 190,348 190,222" />
      <polygon points="300,215 362,250 362,320 300,355 238,320 238,250" />
      <line x1="300" y1="160" x2="300" y2="215" />
      <line x1="410" y1="222" x2="362" y2="250" />
      <line x1="410" y1="348" x2="362" y2="320" />
      <line x1="300" y1="410" x2="300" y2="355" />
      <line x1="190" y1="348" x2="238" y2="320" />
      <line x1="190" y1="222" x2="238" y2="250" />
      <ellipse cx="300" cy="285" rx="190" ry="62" strokeOpacity="0.35" transform="rotate(-18 300 285)" />
    </g>
    <g fill="#22d3ee">
      {nodes.map(([x, y], i) => (
        <rect key={i} x={x - 4} y={y - 4} width="8" height="8" transform={`rotate(45 ${x} ${y})`} />
      ))}
    </g>
  </svg>
);
