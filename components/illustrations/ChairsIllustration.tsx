type Props = { className?: string };

export default function ChairsIllustration({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 480 280"
      className={className}
      role="img"
      aria-label="Two empty soft chairs facing each other, suggesting a calm counselling space."
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ch-a" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C8DCEE" />
          <stop offset="100%" stopColor="#A7C5E3" />
        </linearGradient>
        <linearGradient id="ch-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#BBD3E8" />
          <stop offset="100%" stopColor="#9CBDDF" />
        </linearGradient>
        <radialGradient id="floor-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FBF1C8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FBFAF7" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="240" cy="200" rx="220" ry="60" fill="url(#floor-glow)" />
      <ellipse cx="120" cy="240" rx="100" ry="8" fill="#2A3D5F" opacity="0.05" />
      <ellipse cx="360" cy="240" rx="100" ry="8" fill="#2A3D5F" opacity="0.05" />

      <g>
        <path
          d="M40 130 q-4 -54 38 -56 l 80 0 q42 2 38 56 l-6 78 q-2 14 -16 14 l-118 0 q-14 0 -16 -14 z"
          fill="url(#ch-a)"
        />
        <path d="M36 175 q0 -18 18 -22 l 0 56 q-18 -2 -18 -22 z" fill="#9CBDDF" />
        <path d="M196 175 q0 -18 -18 -22 l 0 56 q18 -2 18 -22 z" fill="#9CBDDF" />
        <rect x="62" y="218" width="10" height="18" rx="2" fill="#7AA8CC" />
        <rect x="160" y="218" width="10" height="18" rx="2" fill="#7AA8CC" />
      </g>

      <g>
        <path
          d="M280 130 q-4 -54 38 -56 l 80 0 q42 2 38 56 l-6 78 q-2 14 -16 14 l-118 0 q-14 0 -16 -14 z"
          fill="url(#ch-b)"
        />
        <path d="M276 175 q0 -18 18 -22 l 0 56 q-18 -2 -18 -22 z" fill="#88B0D6" />
        <path d="M436 175 q0 -18 -18 -22 l 0 56 q18 -2 18 -22 z" fill="#88B0D6" />
        <rect x="302" y="218" width="10" height="18" rx="2" fill="#7AA8CC" />
        <rect x="400" y="218" width="10" height="18" rx="2" fill="#7AA8CC" />
      </g>
    </svg>
  );
}
