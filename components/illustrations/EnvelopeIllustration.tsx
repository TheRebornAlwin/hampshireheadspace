type Props = { className?: string };

export default function EnvelopeIllustration({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 320 220"
      className={className}
      role="img"
      aria-label="A simplified open envelope, suggesting an easy first message."
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="env-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C8DCEE" />
          <stop offset="100%" stopColor="#A7C5E3" />
        </linearGradient>
      </defs>

      <ellipse cx="160" cy="190" rx="120" ry="10" fill="#2A3D5F" opacity="0.06" />

      <g>
        <path
          d="M58 88 q0 -10 10 -10 l184 0 q10 0 10 10 l 0 84 q0 10 -10 10 l-184 0 q-10 0 -10 -10 z"
          fill="url(#env-grad)"
        />
        <path
          d="M58 88 l 102 64 l 102 -64"
          fill="none"
          stroke="#7AA8CC"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>

      <g transform="translate(160 80)">
        <path
          d="M-50 -28 q0 -16 16 -16 l 68 0 q16 0 16 16 l 0 38 q0 -8 -16 -8 q-22 -2 -34 6 q-12 -8 -34 -6 q-16 0 -16 8 z"
          fill="#FBF1C8"
        />
        <path
          d="M-32 -16 l 64 0"
          stroke="#2A3D5F"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M-32 -2 l 50 0"
          stroke="#2A3D5F"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.3"
        />
      </g>
    </svg>
  );
}
