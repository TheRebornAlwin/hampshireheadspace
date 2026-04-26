type Props = {
  className?: string;
  count?: 2 | 3 | 4;
};

/* Soft V-shape silhouette birds with actual wing flapping (SMIL animate on path d). */
export default function Birds({ className = "", count = 3 }: Props) {
  const birds = [
    { x: 20, y: 38, scale: 1, opacity: 0.7, dur: 0.55, delay: 0 },
    { x: 70, y: 22, scale: 0.7, opacity: 0.55, dur: 0.7, delay: 0.18 },
    { x: 120, y: 48, scale: 0.85, opacity: 0.6, dur: 0.6, delay: 0.32 },
    { x: 175, y: 30, scale: 0.6, opacity: 0.45, dur: 0.75, delay: 0.5 },
  ].slice(0, count);

  // Wings up high, then wings level, then back. Keeping the same path command
  // shape so SMIL interpolates smoothly between keyframes.
  const wingsHigh = "M-12 0 q6 -10 12 -2 q6 -8 12 2";
  const wingsLevel = "M-12 0 q6 -3 12 0 q6 -3 12 -1";
  const wingsLow = "M-12 0 q6 2 12 3 q6 2 12 -2";

  return (
    <svg
      viewBox="0 0 220 80"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {birds.map((b, i) => (
        <g
          key={i}
          transform={`translate(${b.x} ${b.y}) scale(${b.scale})`}
          opacity={b.opacity}
        >
          <path
            d={wingsHigh}
            stroke="#2A3D5F"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          >
            <animate
              attributeName="d"
              dur={`${b.dur}s`}
              begin={`${b.delay}s`}
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;0.35;0.65;1"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              values={`${wingsHigh};${wingsLevel};${wingsLow};${wingsHigh}`}
            />
          </path>
        </g>
      ))}
    </svg>
  );
}
