type Props = { className?: string };

/* Soft paper plane with a wisp trail. Used on contact + 404. */
export default function PaperPlane({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 240 140"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="pp-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C8DCEE" />
          <stop offset="100%" stopColor="#A7C5E3" />
        </linearGradient>
      </defs>
      <path
        d="M20 110 q40 -30 80 -28 q40 2 60 -16 q14 -12 24 -28"
        stroke="#A7C5E3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="2 8"
        fill="none"
        opacity="0.7"
      />
      <g transform="translate(170 36) rotate(-20)">
        <path d="M0 0 l60 18 l-44 8 l-12 22 l-4 -28 z" fill="url(#pp-grad)" />
        <path
          d="M0 0 l16 30 l44 -12"
          stroke="#7AA8CC"
          strokeWidth="1.4"
          fill="none"
          strokeLinejoin="round"
          opacity="0.85"
        />
      </g>
    </svg>
  );
}
