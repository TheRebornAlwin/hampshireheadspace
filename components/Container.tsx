import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  size?: "narrow" | "default" | "wide";
};

const sizes = {
  narrow: "max-w-prose-narrow",
  default: "max-w-prose",
  wide: "max-w-5xl",
};

export default function Container({
  children,
  className = "",
  size = "default",
}: Props) {
  return (
    <div
      className={`mx-auto w-full px-5 sm:px-6 ${sizes[size]} ${className}`}
    >
      {children}
    </div>
  );
}
