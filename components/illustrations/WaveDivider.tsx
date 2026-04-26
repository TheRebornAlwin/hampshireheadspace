type Props = {
  className?: string;
  flip?: boolean;
};

export default function WaveDivider({ className = "", flip = false }: Props) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      width="100%"
      height="100%"
      className={`${className} ${flip ? "rotate-180" : ""}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 50 q120 -60 280 -10 q160 50 320 -10 q160 -60 320 0 q160 60 320 -10 q120 -50 200 -10 l0 80 l-1440 0 z"
        fill="#A7C5E3"
        opacity="0.16"
      />
    </svg>
  );
}
