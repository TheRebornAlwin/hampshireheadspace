type Props = {
  className?: string;
  variant?: "blue" | "yellow";
};

export default function CloudBlob({ className = "", variant = "blue" }: Props) {
  const fill = variant === "yellow" ? "#F6E9B2" : "#A7C5E3";
  return (
    <svg
      viewBox="0 0 400 200"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 110 q0 -50 50 -56 q40 -4 50 14 q14 -32 56 -34 q44 -2 60 28 q44 -10 76 14 q34 24 14 56 q14 24 -8 44 q-26 24 -68 16 q-34 -6 -50 -28 q-30 22 -68 8 q-30 -10 -36 -32 q-32 4 -50 -8 q-26 -16 -26 -22 z"
        fill={fill}
      />
    </svg>
  );
}
