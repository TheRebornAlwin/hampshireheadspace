import { ReactNode } from "react";

type Variant = "card" | "inline" | "pullquote";
type Tone = "cream" | "blue" | "yellow";

type Props = {
  quote: ReactNode;
  attribution: string;
  context?: string;
  variant?: Variant;
  tone?: Tone;
  className?: string;
};

const tones: Record<Tone, string> = {
  cream: "bg-cream",
  blue: "bg-soft-blue/20",
  yellow: "bg-soft-yellow/40",
};

export default function Testimonial({
  quote,
  attribution,
  context,
  variant = "card",
  tone = "cream",
  className = "",
}: Props) {
  if (variant === "pullquote") {
    return (
      <figure className={`relative mx-auto max-w-2xl ${className}`}>
        <svg
          aria-hidden="true"
          viewBox="0 0 60 48"
          className="absolute -top-2 -left-2 h-12 w-12 text-soft-blue-strong/40"
          fill="currentColor"
        >
          <path d="M16 0 q-16 6 -16 28 v20 h22 v-22 h-12 q0 -16 14 -22 z" />
          <path d="M48 0 q-16 6 -16 28 v20 h22 v-22 h-12 q0 -16 14 -22 z" />
        </svg>
        <blockquote className="pl-8 text-balance text-[1.25rem] font-medium leading-snug text-navy sm:text-[1.5rem]">
          {quote}
        </blockquote>
        <figcaption className="mt-4 pl-8 text-sm text-warm-grey">
          {attribution}
          {context ? <span className="text-warm-grey-light">, {context}</span> : null}
        </figcaption>
      </figure>
    );
  }

  if (variant === "inline") {
    return (
      <figure
        className={`mx-auto max-w-prose border-l-2 border-soft-blue-strong/60 pl-5 ${className}`}
      >
        <blockquote className="text-[16px] italic leading-relaxed text-navy/85 sm:text-[17px]">
          {quote}
        </blockquote>
        <figcaption className="mt-3 text-[13px] not-italic text-warm-grey">
          {attribution}
          {context ? <span className="text-warm-grey-light">, {context}</span> : null}
        </figcaption>
      </figure>
    );
  }

  return (
    <figure
      className={`relative h-full rounded-xl2 p-6 shadow-soft sm:p-7 ${tones[tone]} ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 60 48"
        className="mb-3 h-8 w-8 text-soft-blue-strong/55"
        fill="currentColor"
      >
        <path d="M16 0 q-16 6 -16 28 v20 h22 v-22 h-12 q0 -16 14 -22 z" />
        <path d="M48 0 q-16 6 -16 28 v20 h22 v-22 h-12 q0 -16 14 -22 z" />
      </svg>
      <blockquote className="text-[16px] leading-relaxed text-navy/90 sm:text-[17px]">
        {quote}
      </blockquote>
      <figcaption className="mt-4 text-[13px] font-medium text-warm-grey">
        {attribution}
        {context ? <span className="font-normal text-warm-grey-light">, {context}</span> : null}
      </figcaption>
    </figure>
  );
}
