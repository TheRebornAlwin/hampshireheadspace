type Props = { className?: string };

/* Soft, distant rolling hills. Faceted into low silhouettes, very pale. */
export default function Mountains({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 160 q120 -50 220 -10 q160 60 320 -10 q160 -60 320 0 q160 60 320 -20 q120 -60 260 -10 l0 90 l-1440 0 z"
        fill="#A7C5E3"
        opacity="0.18"
      />
      <path
        d="M0 180 q140 -30 260 0 q160 40 320 -10 q160 -40 320 10 q160 50 320 -10 q120 -40 220 0 l0 50 l-1440 0 z"
        fill="#7AA8CC"
        opacity="0.12"
      />
    </svg>
  );
}
