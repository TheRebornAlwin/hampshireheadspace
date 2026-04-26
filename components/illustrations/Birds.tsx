type Props = {
  className?: string;
  count?: 2 | 3 | 4;
};

/* Soft seagull-silhouette birds. Body center stays at the same y position;
   only the arc height between wing tip and body changes during the flap.
   That keeps the body steady and makes the wings actually look like they're
   moving rather than the whole bird folding in on itself. */
export default function Birds({ className = "", count = 3 }: Props) {
  const birds = [
    { x: 25, y: 38, scale: 1.05, opacity: 0.78, dur: 0.42, delay: 0 },
    { x: 82, y: 22, scale: 0.7, opacity: 0.55, dur: 0.55, delay: 0.21 },
    { x: 132, y: 48, scale: 0.92, opacity: 0.65, dur: 0.48, delay: 0.36 },
    { x: 188, y: 30, scale: 0.6, opacity: 0.45, dur: 0.6, delay: 0.55 },
  ].slice(0, count);

  // Both states keep wing tips at (-12, 0) and (12, 0), body crest at (0, -2).
  const wingsExtended =
    "M-12 0 C-9 -3 -3 -3 0 -2 C3 -3 9 -3 12 0";
  const wingsRaised =
    "M-12 0 C-9 -10 -3 -8 0 -2 C3 -8 9 -10 12 0";

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
            d={wingsExtended}
            stroke="#2A3D5F"
            strokeWidth="1.7"
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
              keyTimes="0;0.42;1"
              keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              values={`${wingsExtended};${wingsRaised};${wingsExtended}`}
            />
          </path>
        </g>
      ))}
    </svg>
  );
}
