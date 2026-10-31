import type { ProjectTheme } from "@/types";

const CYAN = "#22d3ee";
const VIOLET = "#8b7cf6";

/**
 * CSS/SVG illustrations. They are abstract artwork, not screenshots, and are
 * intentionally not presented as real application UI.
 */
const illustrations: Record<ProjectTheme, () => React.ReactNode> = {
  forecast: () => (
    <>
      {[40, 70, 55, 95, 80, 120, 105].map((h, i) => (
        <rect key={i} x={36 + i * 46} y={190 - h} width="26" height={h} rx="4" fill={VIOLET} fillOpacity={0.18 + i * 0.03} />
      ))}
      <polyline
        points="49,140 95,118 141,128 187,84 233,98 279,56 325,64"
        fill="none"
        stroke={CYAN}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="325,64 371,40"
        fill="none"
        stroke={CYAN}
        strokeWidth="2.5"
        strokeDasharray="5 6"
        strokeLinecap="round"
      />
      <circle cx="325" cy="64" r="4.5" fill={CYAN} />
    </>
  ),
  gpec: () => (
    <>
      <g stroke={CYAN} strokeOpacity="0.55" strokeWidth="1.5" fill="none">
        <path d="M200 52v28M110 80h180M110 80v26M200 80v26M290 80v26" />
      </g>
      <rect x="164" y="22" width="72" height="30" rx="7" fill={CYAN} fillOpacity="0.2" stroke={CYAN} strokeOpacity="0.7" />
      {[74, 164, 254].map((x) => (
        <rect key={x} x={x} y="106" width="72" height="28" rx="7" fill={VIOLET} fillOpacity="0.2" stroke={VIOLET} strokeOpacity="0.7" />
      ))}
      {[0, 1, 2, 3, 4, 5].map((c) =>
        [0, 1].map((r) => (
          <rect
            key={`${c}-${r}`}
            x={74 + c * 42}
            y={150 + r * 22}
            width="34"
            height="14"
            rx="3"
            fill={(c + r) % 3 === 0 ? CYAN : VIOLET}
            fillOpacity={(c * 2 + r) % 4 === 0 ? 0.55 : 0.16}
          />
        )),
      )}
    </>
  ),
  ocr: () => (
    <>
      <rect x="86" y="42" width="228" height="140" rx="12" fill="#0b1220" stroke={CYAN} strokeOpacity="0.6" strokeWidth="1.5" />
      <rect x="104" y="64" width="54" height="66" rx="6" fill={VIOLET} fillOpacity="0.22" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="176" y={66 + i * 17} width={120 - i * 14} height="8" rx="4" fill="#98a4b8" fillOpacity="0.4" />
      ))}
      {[0, 1].map((i) => (
        <rect key={i} x="104" y={146 + i * 14} width={190 - i * 40} height="6" rx="3" fill="#98a4b8" fillOpacity="0.22" />
      ))}
      <rect x="78" y="104" width="244" height="3" fill={CYAN} fillOpacity="0.9" />
      <rect x="78" y="86" width="244" height="38" fill={CYAN} fillOpacity="0.06" />
      <g stroke={CYAN} strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M72 62V46a8 8 0 0 1 8-8h16M328 62V46a8 8 0 0 0-8-8h-16M72 162v16a8 8 0 0 0 8 8h16M328 162v16a8 8 0 0 1-8 8h-16" />
      </g>
    </>
  ),
  conference: () => (
    <>
      <rect x="56" y="30" width="170" height="150" rx="12" fill="#0b1220" stroke={CYAN} strokeOpacity="0.5" strokeWidth="1.5" />
      <rect x="56" y="30" width="170" height="30" rx="12" fill={CYAN} fillOpacity="0.16" />
      {Array.from({ length: 20 }, (_, i) => (
        <rect
          key={i}
          x={72 + (i % 5) * 29}
          y={74 + Math.floor(i / 5) * 25}
          width="20"
          height="16"
          rx="4"
          fill={[3, 8, 12, 17].includes(i) ? CYAN : "#98a4b8"}
          fillOpacity={[3, 8, 12, 17].includes(i) ? 0.6 : 0.16}
        />
      ))}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <circle cx="270" cy={62 + i * 44} r="14" fill={VIOLET} fillOpacity={0.3 - i * 0.05} stroke={VIOLET} strokeOpacity="0.6" />
          <rect x="294" y={54 + i * 44} width={72 - i * 10} height="8" rx="4" fill="#98a4b8" fillOpacity="0.4" />
          <rect x="294" y={69 + i * 44} width={50 - i * 6} height="6" rx="3" fill="#98a4b8" fillOpacity="0.2" />
        </g>
      ))}
    </>
  ),
};

export const ProjectVisual = ({ theme, className }: { theme: ProjectTheme; className?: string }) => (
  <svg viewBox="0 0 400 220" className={className} aria-hidden focusable="false">
    <defs>
      <pattern id={`dots-${theme}`} width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="1" fill="#98a4b8" fillOpacity="0.18" />
      </pattern>
    </defs>
    <rect width="400" height="220" fill="#080d18" />
    <rect width="400" height="220" fill={`url(#dots-${theme})`} />
    {illustrations[theme]()}
  </svg>
);
