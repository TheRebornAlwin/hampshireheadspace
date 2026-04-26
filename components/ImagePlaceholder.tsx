type Props = {
  label: string;
  ratio?: "square" | "portrait" | "landscape" | "wide";
  className?: string;
};

const ratios = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

export default function ImagePlaceholder({
  label,
  ratio = "landscape",
  className = "",
}: Props) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl2 bg-soft-blue/30 ${ratios[ratio]} ${className}`}
      role="img"
      aria-label={label + " (image placeholder)"}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.6),transparent_60%)]" />
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="text-center">
          <svg
            className="mx-auto mb-3 text-navy/40"
            width="38"
            height="38"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x="3"
              y="4.5"
              width="18"
              height="15"
              rx="2.5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="9" cy="10" r="1.5" fill="currentColor" />
            <path
              d="M3 17l5-5 4 4 3-3 6 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-sm font-medium text-navy/65">{label}</p>
          <p className="mt-1 text-xs text-navy/45">
            Placeholder. Ruth will provide.
          </p>
        </div>
      </div>
    </div>
  );
}
