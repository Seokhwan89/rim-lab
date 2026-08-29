/** Animated line-art icons for research areas. Stroke uses currentColor. */
export default function ProjectIcon({ kind, className = 'w-9 h-9' }: { kind: string; className?: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  switch (kind) {
    case 'transmission':
      return (
        <svg viewBox="0 0 48 48" className={className} {...common} aria-hidden>
          <g className="origin-[16px_24px] animate-[spin_9s_linear_infinite]">
            <circle cx="16" cy="24" r="8" />
            <path d="M16 12v-3M16 39v-3M28 24h3M4 24h3M24.5 15.5l2-2M5.5 32.5l2-2M24.5 32.5l2 2M5.5 15.5l2 2" />
          </g>
          <g className="origin-[35px_24px] animate-[spin_6s_linear_infinite_reverse]">
            <circle cx="35" cy="24" r="5.5" />
            <path d="M35 15.5v-2.3M35 34.8v-2.3M43.5 24h-2.3M28.8 24h-2.3" />
          </g>
        </svg>
      );
    case 'hand':
      return (
        <svg viewBox="0 0 48 48" className={className} {...common} aria-hidden>
          <path d="M14 26V12.5a2.5 2.5 0 0 1 5 0V24M19 23v-13a2.5 2.5 0 0 1 5 0v13M24 23V11.5a2.5 2.5 0 0 1 5 0V24M29 24v-9a2.5 2.5 0 0 1 5 0v13c0 7-4 12-11 12s-10-4-12-9l-3.2-7a2.3 2.3 0 0 1 4-2.2L14 26" />
          <circle cx="24" cy="31" r="1.4" fill="currentColor" className="pulse-glow" />
        </svg>
      );
    case 'ai':
      return (
        <svg viewBox="0 0 48 48" className={className} {...common} aria-hidden>
          <circle cx="10" cy="24" r="3" /><circle cx="24" cy="10" r="3" /><circle cx="24" cy="38" r="3" /><circle cx="38" cy="24" r="3" />
          <circle cx="24" cy="24" r="4.5" />
          <path d="M13 24h6.5M24 13v6.5M24 28.5V35M28.5 24H35M12.2 21.8l8-8M27.8 27.8l8 8M12.2 26.2l8 8M27.8 20.2l8-8" opacity=".55" />
          <circle cx="24" cy="24" r="1.6" fill="currentColor" className="pulse-glow" />
        </svg>
      );
    case 'magnet':
      return (
        <svg viewBox="0 0 48 48" className={className} {...common} aria-hidden>
          <path d="M12 8v12a12 12 0 0 0 24 0V8" />
          <path d="M12 8h8v8h-8zM28 8h8v8h-8z" />
          <path d="M9 40c4-3 8 3 12 0s8 3 12 0" opacity=".6" className="pulse-glow" />
        </svg>
      );
    case 'factory':
      return (
        <svg viewBox="0 0 48 48" className={className} {...common} aria-hidden>
          <path d="M6 40V18l10 7v-7l10 7v-7l16 11v11z" />
          <path d="M12 40v-5M20 40v-5M28 40v-5M36 40v-5" opacity=".6" />
          <circle cx="38" cy="12" r="4" className="origin-[38px_12px] animate-[spin_7s_linear_infinite]" />
          <path d="M38 6.5V4M38 20v-2.5M43.5 12H46M30 12h2.5" className="origin-[38px_12px] animate-[spin_7s_linear_infinite]" />
        </svg>
      );
    case 'surgical':
      return (
        <svg viewBox="0 0 48 48" className={className} {...common} aria-hidden>
          <path d="M8 40c10 0 8-10 16-10s6 10 16 10" opacity=".5" />
          <path d="M10 36C22 32 20 12 34 10" />
          <circle cx="36" cy="9" r="3.4" />
          <path d="M36 9l6-2" className="pulse-glow" />
        </svg>
      );
    case 'leg':
      return (
        <svg viewBox="0 0 48 48" className={className} {...common} aria-hidden>
          <circle cx="22" cy="9" r="3.4" />
          <path d="M22 13v10l-6 12M22 23l7 10M16 35l-2 6M29 33l1 8" />
          <circle cx="22" cy="23" r="2" /><circle cx="16" cy="35" r="2" /><circle cx="29" cy="33" r="2" />
        </svg>
      );
    case 'glove':
      return (
        <svg viewBox="0 0 48 48" className={className} {...common} aria-hidden>
          <path d="M16 27V13a2 2 0 0 1 4 0v10M20 22V9.5a2 2 0 0 1 4 0V22M24 22V11a2 2 0 0 1 4 0v11M28 23v-8a2 2 0 0 1 4 0v12c0 6.5-3.5 10.5-9.5 10.5S13 35 12 30l-1.8-5a2 2 0 0 1 3.6-1.6L16 27" />
          <path d="M17 30c3 2 8 2 12-.5" opacity=".55" strokeDasharray="2 3" />
        </svg>
      );
    case 'sensor':
      return (
        <svg viewBox="0 0 48 48" className={className} {...common} aria-hidden>
          <rect x="14" y="18" width="20" height="14" rx="2" />
          <path d="M24 18v-6M20 12h8" />
          <path d="M6 25h5M37 25h5" />
          <path d="M8 25c2 0 2-5 4-5" opacity=".5" className="pulse-glow" />
          <path d="M40 25c-2 0-2 5-4 5" opacity=".5" className="pulse-glow" />
          <circle cx="24" cy="25" r="2.5" fill="currentColor" className="pulse-glow" />
        </svg>
      );
    default:
      return null;
  }
}
