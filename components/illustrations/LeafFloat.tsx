type Props = { className?: string };

/* Three soft leaves drifting at different angles. Brand colors. */
export default function LeafFloat({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(40 40) rotate(-25)">
        <path
          d="M0 0 q22 -8 40 6 q-2 28 -28 32 q-22 -10 -12 -38 z"
          fill="#A7C5E3"
          opacity="0.55"
        />
        <path
          d="M4 6 q14 6 30 24"
          stroke="#7AA8CC"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
        />
      </g>
      <g transform="translate(120 90) rotate(20)">
        <path
          d="M0 0 q20 -10 38 4 q0 26 -24 30 q-22 -6 -14 -34 z"
          fill="#F6E9B2"
          opacity="0.65"
        />
        <path
          d="M4 4 q12 8 26 22"
          stroke="#F0DC8A"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        />
      </g>
      <g transform="translate(60 130) rotate(45)">
        <path
          d="M0 0 q16 -6 30 4 q0 22 -20 24 q-18 -6 -10 -28 z"
          fill="#C8DCEE"
          opacity="0.6"
        />
      </g>
    </svg>
  );
}
