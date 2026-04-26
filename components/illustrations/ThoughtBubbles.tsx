type Props = { className?: string };

export default function ThoughtBubbles({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 360 220"
      className={className}
      role="img"
      aria-label="Soft thought bubble shapes drifting upward."
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="tb-a" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C8DCEE" />
          <stop offset="100%" stopColor="#A7C5E3" />
        </radialGradient>
        <radialGradient id="tb-b" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FBF1C8" />
          <stop offset="100%" stopColor="#F6E9B2" />
        </radialGradient>
      </defs>

      <ellipse cx="80" cy="180" rx="36" ry="14" fill="url(#tb-a)" opacity="0.6" />
      <ellipse cx="130" cy="155" rx="24" ry="10" fill="url(#tb-a)" opacity="0.7" />
      <path
        d="M180 90 q24 -50 78 -42 q56 8 60 56 q4 38 -34 56 q-44 22 -82 -8 q-30 -22 -22 -62 z"
        fill="url(#tb-a)"
        opacity="0.85"
      />
      <path
        d="M62 70 q14 -26 44 -26 q30 0 38 24 q6 22 -16 36 q-26 14 -50 -2 q-20 -14 -16 -32 z"
        fill="url(#tb-b)"
      />
      <ellipse cx="290" cy="170" rx="22" ry="10" fill="url(#tb-b)" opacity="0.7" />
      <ellipse cx="250" cy="200" rx="14" ry="6" fill="url(#tb-a)" opacity="0.5" />
    </svg>
  );
}
