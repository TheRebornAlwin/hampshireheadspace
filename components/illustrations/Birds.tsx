type Props = {
  className?: string;
  count?: 2 | 3 | 4;
};

/* Soft V-shape silhouette birds, drifting. Calm not busy. */
export default function Birds({ className = "", count = 3 }: Props) {
  const birds = [
    { x: 20, y: 38, scale: 1, opacity: 0.7 },
    { x: 70, y: 22, scale: 0.7, opacity: 0.55 },
    { x: 120, y: 48, scale: 0.85, opacity: 0.6 },
    { x: 175, y: 30, scale: 0.6, opacity: 0.45 },
  ].slice(0, count);

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
            d="M-12 0 q6 -10 12 -2 q6 -8 12 2"
            stroke="#2A3D5F"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />
        </g>
      ))}
    </svg>
  );
}
