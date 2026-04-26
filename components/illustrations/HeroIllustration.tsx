type Props = {
  className?: string;
};

export default function HeroIllustration({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 540 480"
      className={className}
      role="img"
      aria-label="Two figures sitting in soft chairs, one with a tangled ball of yarn where a head would be, the other gently holding the loose end of the yarn that connects them."
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="bg-glow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#FBF1C8" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#FBFAF7" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="chair-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C8DCEE" />
          <stop offset="100%" stopColor="#A7C5E3" />
        </linearGradient>
        <linearGradient id="chair-grad-2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#BBD3E8" />
          <stop offset="100%" stopColor="#9CBDDF" />
        </linearGradient>
        <linearGradient id="figure-blue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3B5680" />
          <stop offset="100%" stopColor="#2A3D5F" />
        </linearGradient>
      </defs>

      <ellipse cx="270" cy="260" rx="260" ry="180" fill="url(#bg-glow)" />

      <ellipse cx="290" cy="430" rx="220" ry="14" fill="#2A3D5F" opacity="0.06" />

      <g>
        <path
          d="M70 285 q-6 -90 60 -94 l112 0 q66 4 60 94 l-8 110 q-2 22 -22 22 l-172 0 q-20 0 -22 -22 z"
          fill="url(#chair-grad)"
        />
        <path
          d="M64 360 q0 -28 26 -32 l 0 80 q-26 -4 -26 -32 z"
          fill="#9CBDDF"
        />
        <path
          d="M286 360 q0 -28 -26 -32 l 0 80 q26 -4 26 -32 z"
          fill="#9CBDDF"
        />
        <rect x="100" y="402" width="14" height="22" rx="3" fill="#7AA8CC" />
        <rect x="232" y="402" width="14" height="22" rx="3" fill="#7AA8CC" />
      </g>

      <g>
        <path
          d="M138 308 q0 -16 22 -16 l 28 0 q22 0 22 16 l 0 80 q-2 18 -18 18 l-36 0 q-16 0 -18 -18 z"
          fill="url(#figure-blue)"
        />
        <path
          d="M150 392 q-4 12 4 18 l 12 6 q-2 -10 -4 -22 z"
          fill="#1F2E47"
        />
        <path
          d="M204 392 q4 12 -4 18 l -12 6 q2 -10 4 -22 z"
          fill="#1F2E47"
        />
        <path
          d="M152 312 q4 -8 14 -10 l24 0 q10 2 14 10 q-26 4 -52 0 z"
          fill="#3B5680"
          opacity="0.6"
        />
      </g>

      <g transform="translate(176 188)">
        <circle r="68" fill="#7AA8CC" opacity="0.18" />
        <g stroke="#A7C5E3" strokeWidth="2.5" fill="none" strokeLinecap="round">
          <path d="M-58 -4 q12 -36 50 -38 q44 -2 58 32 q12 30 -10 56 q-22 24 -56 18 q-38 -6 -42 -34 q-2 -22 0 -34 z" />
          <path d="M-44 -16 q-6 22 6 42 q14 24 38 28" />
          <path d="M-30 14 q14 -28 42 -34 q28 -4 42 14" />
          <path d="M-12 -36 q-18 18 -22 42 q-2 26 12 44" />
          <path d="M16 -42 q22 14 28 38 q4 22 -8 42" />
        </g>
        <g stroke="#7AA8CC" strokeWidth="2.5" fill="none" strokeLinecap="round">
          <path d="M-50 -22 q24 -10 50 -8" />
          <path d="M-32 24 q22 14 50 8" />
          <path d="M22 -22 q14 18 18 38" />
          <path d="M-44 6 q12 -8 28 -6" />
        </g>
        <g stroke="#F6E9B2" strokeWidth="2.5" fill="none" strokeLinecap="round">
          <path d="M-40 -28 q26 -8 50 4" />
          <path d="M-46 18 q26 18 56 -2" />
          <path d="M10 -34 q14 22 8 46" />
          <path d="M-22 -10 q12 26 38 28" />
          <path d="M-30 -6 q-4 22 14 36" />
        </g>
        <g stroke="#FBF1C8" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.85">
          <path d="M-28 -22 q22 -2 36 12" />
          <path d="M-12 26 q22 -4 30 -22" />
          <path d="M-38 -2 q14 12 32 8" />
        </g>
      </g>

      <g transform="translate(380 270)">
        <path
          d="M-86 32 q-6 -86 56 -90 l 100 0 q62 4 56 90 l-8 100 q-2 20 -20 20 l-156 0 q-18 0 -20 -20 z"
          fill="url(#chair-grad-2)"
        />
        <path d="M-92 100 q0 -26 24 -30 l 0 76 q-24 -4 -24 -30 z" fill="#88B0D6" />
        <path d="M86 100 q0 -26 -24 -30 l 0 76 q24 -4 24 -30 z" fill="#88B0D6" />
        <rect x="-58" y="142" width="14" height="22" rx="3" fill="#7AA8CC" />
        <rect x="46" y="142" width="14" height="22" rx="3" fill="#7AA8CC" />
      </g>

      <g transform="translate(380 156)">
        <ellipse cx="0" cy="0" rx="42" ry="46" fill="#F6E9B2" />
        <path
          d="M-44 -8 q-2 -38 24 -52 q26 -12 48 6 q22 18 18 50 q-2 14 -10 24 q-12 -16 -28 -10 q-18 8 -32 -6 q-14 -12 -20 -12 z"
          fill="#F0DC8A"
        />
        <path
          d="M-38 16 q-8 22 4 40 q14 22 20 0"
          fill="#F0DC8A"
        />
        <path
          d="M40 14 q10 24 -2 42 q-14 22 -20 0"
          fill="#F0DC8A"
        />
        <ellipse cx="-12" cy="6" rx="3" ry="2" fill="#2A3D5F" opacity="0.45" />
        <ellipse cx="14" cy="6" rx="3" ry="2" fill="#2A3D5F" opacity="0.45" />
        <path d="M-6 22 q6 4 14 0" stroke="#2A3D5F" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
      </g>

      <g transform="translate(380 240)">
        <path
          d="M-44 -8 q4 -22 24 -22 l 40 0 q20 0 24 22 l 0 76 q-2 16 -16 16 l-56 0 q-14 0 -16 -16 z"
          fill="#7AA8CC"
        />
        <path
          d="M-32 76 q-2 18 16 30 q14 8 8 -8 q-4 -14 -10 -22 z"
          fill="#5E8CB4"
        />
        <path
          d="M32 76 q2 18 -16 30 q-14 8 -8 -8 q4 -14 10 -22 z"
          fill="#5E8CB4"
        />
      </g>

      <g fill="none" stroke="#2A3D5F" strokeWidth="2.2" strokeLinecap="round">
        <path d="M236 200 q40 -10 80 -4 q40 6 70 -10 q22 -12 26 -32" />
      </g>

      <g transform="translate(354 168)">
        <circle r="6" fill="#2A3D5F" />
      </g>

      <g opacity="0.4" fill="#A7C5E3">
        <ellipse cx="60" cy="80" rx="38" ry="14" />
        <ellipse cx="490" cy="120" rx="42" ry="14" />
        <ellipse cx="120" cy="50" rx="22" ry="8" />
      </g>
    </svg>
  );
}
