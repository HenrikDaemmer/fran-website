/** Kleine handgezeichnete Elemente für mehr Wärme. */

export function HandUnderline({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 300 24"
      preserveAspectRatio="none"
      className={`draw-line pointer-events-none absolute -bottom-3 left-0 h-[0.32em] w-full ${className}`}
    >
      <path
        d="M4 16 C 60 6, 120 4, 170 10 S 260 20, 296 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        pathLength={1}
      />
    </svg>
  );
}

export function OliveBranch({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M8 104 C 50 86, 100 62, 192 14" />
      <path d="M40 90 C 34 74, 42 62, 56 58 C 58 72, 52 84, 40 90 Z" />
      <path d="M52 84 C 66 92, 80 92, 90 82 C 78 72, 62 74, 52 84 Z" />
      <path d="M82 70 C 78 54, 88 42, 102 40 C 102 54, 96 64, 82 70 Z" />
      <path d="M96 64 C 110 72, 124 70, 132 60 C 120 50, 106 54, 96 64 Z" />
      <path d="M126 50 C 124 34, 134 24, 148 22 C 146 36, 140 46, 126 50 Z" />
      <path d="M140 44 C 154 50, 166 46, 172 36 C 160 28, 148 32, 140 44 Z" />
      <ellipse cx="70" cy="98" rx="7" ry="9" transform="rotate(-30 70 98)" />
      <ellipse cx="118" cy="80" rx="6.5" ry="8.5" transform="rotate(-30 118 80)" />
    </svg>
  );
}

export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      className={className}
    >
      <path d="M4 30 C 20 4, 34 4, 40 22 S 62 40, 72 18 S 98 2, 116 14" />
    </svg>
  );
}
