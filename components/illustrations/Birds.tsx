type Props = {
  className?: string;
  count?: 2 | 3 | 4;
};

/* Soft seagull-silhouette birds with proper wing kinematics.
   The body crest stays roughly steady at (0, -2). The wing tips traverse
   a real vertical arc, swinging from below the body line (downstroke,
   wings out and dipped) through level (gliding) to high above the body
   (upstroke, wings raised), the way an actual flying bird moves. */
export default function Birds({ className = "", count = 3 }: Props) {
  const birds = [
    { x: 25, y: 38, scale: 1.05, opacity: 0.78, dur: 0.55, delay: 0 },
    { x: 82, y: 22, scale: 0.7, opacity: 0.55, dur: 0.7, delay: 0.22 },
    { x: 132, y: 48, scale: 0.92, opacity: 0.65, dur: 0.62, delay: 0.4 },
    { x: 188, y: 30, scale: 0.6, opacity: 0.45, dur: 0.78, delay: 0.6 },
  ].slice(0, count);

  // Three keyframes for the flap. Body crest stays near (0, -2). Tips travel
  // from y=5 (below the body line, end of downstroke) up through y=0 (level)
  // to y=-9 (high above body, end of upstroke). The x-coords of the tips
  // also pull in slightly when raised, mimicking the foreshortening you see
  // when a wing is held high.
  const wingsDown =
    "M-11 5 C-8 1 -3 -1 0 -2 C3 -1 8 1 11 5";
  const wingsLevel =
    "M-12 0 C-9 -3 -3 -3 0 -2 C3 -3 9 -3 12 0";
  const wingsUp =
    "M-9 -9 C-7 -7 -3 -4 0 -2 C3 -4 7 -7 9 -9";

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
            d={wingsLevel}
            stroke="#2A3D5F"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          >
            {/* Down -> Level -> Up -> Level -> Down (one full flap cycle).
                Eased so wings accelerate in the middle of each stroke. */}
            <animate
              attributeName="d"
              dur={`${b.dur}s`}
              begin={`${b.delay}s`}
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0.45 0 0.55 1; 0.45 0 0.55 1; 0.45 0 0.55 1; 0.45 0 0.55 1"
              values={`${wingsDown};${wingsLevel};${wingsUp};${wingsLevel};${wingsDown}`}
            />
          </path>
        </g>
      ))}
    </svg>
  );
}
