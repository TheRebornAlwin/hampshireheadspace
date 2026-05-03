import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "cream" | "blue" | "yellow" | "blue-strong" | "yellow-strong";
  spacing?: "default" | "tight";
};

const tones = {
  cream: "bg-cream",
  blue: "bg-soft-blue/15",
  yellow: "bg-soft-yellow/35",
  "blue-strong": "bg-soft-blue/45",
  "yellow-strong": "bg-soft-yellow/75",
};

const spacings = {
  default: "py-14 sm:py-20 lg:py-28",
  tight: "py-8 sm:py-14",
};

export default function Section({
  children,
  className = "",
  id,
  tone = "cream",
  spacing = "default",
}: Props) {
  return (
    <section
      id={id}
      className={`${tones[tone]} ${spacings[spacing]} ${className}`}
    >
      {children}
    </section>
  );
}
