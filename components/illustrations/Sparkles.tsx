type Props = { className?: string };

/* Tiny soft dots and sparkles, used as gentle background ambience. */
export default function Sparkles({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 240 160"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="#7AA8CC" opacity="0.55">
        <circle cx="22" cy="40" r="3" />
        <circle cx="80" cy="20" r="2" />
        <circle cx="170" cy="35" r="2.5" />
        <circle cx="210" cy="80" r="3.5" />
        <circle cx="40" cy="120" r="2" />
        <circle cx="115" cy="135" r="3" />
        <circle cx="200" cy="125" r="2" />
      </g>
      <g fill="#F0DC8A" opacity="0.7">
        <path d="M55 70 l3 -8 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 z" />
        <path d="M150 95 l2 -5 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 z" />
      </g>
      <g fill="#A7C5E3" opacity="0.65">
        <path d="M100 60 l2.5 -6 l2.5 6 l6 2.5 l-6 2.5 l-2.5 6 l-2.5 -6 l-6 -2.5 z" />
      </g>
    </svg>
  );
}
