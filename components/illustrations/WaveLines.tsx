type Props = {
  className?: string;
  variant?: "blue" | "yellow";
};

/* Three thin animated wave lines flowing left across the background.
   Paths span 2x the viewBox width (0 → 2880) so the SMIL translate
   from "0 0" to "-1440 0" loops seamlessly. preserveAspectRatio="none"
   stretches the SVG to fill its container, and width="100%" sizes it
   the rest of the way. */
export default function WaveLines({ className = "", variant = "blue" }: Props) {
  const stroke = variant === "yellow" ? "#F0DC8A" : "#7AA8CC";

  // Build a wave path that repeats over (2880 / segWidth) segments.
  // Two amplitudes alternate per segment, so the rhythm doesn't look
  // mechanically regular.
  const wave = (yBase: number, amp1: number, amp2: number, segWidth = 240) => {
    const half = segWidth / 2;
    const total = 2880;
    const count = total / segWidth;
    const segs: string[] = [];
    for (let i = 0; i < count; i++) {
      const amp = i % 2 === 0 ? amp1 : amp2;
      segs.push(`q${half} ${amp} ${segWidth} 0`);
    }
    return `M0 ${yBase} ${segs.join(" ")}`;
  };

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
      <g>
        <path
          d={wave(14, -10, 10, 240)}
          fill="none"
          stroke={stroke}
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.7"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0 0"
          to="-1440 0"
          dur="40s"
          repeatCount="indefinite"
        />
      </g>
      <g>
        <path
          d={wave(30, 8, -8, 360)}
          fill="none"
          stroke={stroke}
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.55"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0 0"
          to="-1440 0"
          dur="60s"
          repeatCount="indefinite"
        />
      </g>
      <g>
        <path
          d={wave(48, -6, 12, 320)}
          fill="none"
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.45"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0 0"
          to="-1440 0"
          dur="80s"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  );
}
