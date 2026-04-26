type Props = {
  className?: string;
  withRays?: boolean;
};

/* Soft warm sun. Yellow glow with optional gentle rays. */
export default function Sun({ className = "", withRays = true }: Props) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="sun-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FBF1C8" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#F6E9B2" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#F6E9B2" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sun-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FBF1C8" />
          <stop offset="100%" stopColor="#F0DC8A" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="92" fill="url(#sun-glow)" />
      <circle cx="100" cy="100" r="42" fill="url(#sun-core)" />
      {withRays && (
        <g
          stroke="#F0DC8A"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.6"
        >
          <path d="M100 36 v10" />
          <path d="M100 154 v10" />
          <path d="M36 100 h10" />
          <path d="M154 100 h10" />
          <path d="M55 55 l7 7" />
          <path d="M138 138 l7 7" />
          <path d="M55 145 l7 -7" />
          <path d="M138 62 l7 -7" />
        </g>
      )}
    </svg>
  );
}
