type Props = {
  className?: string;
  variant?: "blue" | "yellow";
};

/* Tiny, thin, lazily-curving wave lines used as ambient background texture.
   Three offset waves with small phase differences. Designed to read as
   subliminal calm rather than active decoration. */
export default function WaveLines({ className = "", variant = "blue" }: Props) {
  const stroke = variant === "yellow" ? "#F0DC8A" : "#7AA8CC";
  return (
    <svg
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      width="100%"
      height="100%"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        stroke={stroke}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.45"
      >
        <path d="M0 14 q120 -10 240 0 q120 10 240 0 q120 -10 240 0 q120 10 240 0 q120 -10 240 0" />
      </g>
      <g
        fill="none"
        stroke={stroke}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.32"
      >
        <path d="M0 30 q140 8 280 -2 q140 -8 280 2 q140 8 280 -2 q140 -8 280 2 q140 8 200 0" />
      </g>
      <g
        fill="none"
        stroke={stroke}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.25"
      >
        <path d="M0 48 q160 -6 320 4 q160 10 320 -4 q160 -10 320 4 q160 10 320 -4 q120 -6 200 0" />
      </g>
    </svg>
  );
}
