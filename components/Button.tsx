import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navy focus-visible:ring-offset-cream";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy text-cream hover:bg-navy-deep hover:shadow-soft-lg shadow-soft",
  secondary:
    "bg-transparent text-navy border-2 border-navy hover:bg-navy hover:text-cream",
  ghost: "bg-transparent text-navy hover:bg-soft-blue/30",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-base rounded-xl2",
  lg: "px-8 py-4 text-lg rounded-xl2",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = CommonProps & {
  href: string;
  type?: never;
  onClick?: never;
};

type RealButtonProps = CommonProps & {
  href?: never;
  type?: "button" | "submit";
  onClick?: () => void;
};

export default function Button(props: LinkButtonProps | RealButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className = "",
    children,
  } = props;

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    const isExternal = props.href.startsWith("http") || props.href.startsWith("mailto:") || props.href.startsWith("tel:");
    if (isExternal) {
      return (
        <a className={classes} href={props.href}>
          {children}
        </a>
      );
    }
    return (
      <Link className={classes} href={props.href}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      type={(props as RealButtonProps).type ?? "button"}
      onClick={(props as RealButtonProps).onClick}
    >
      {children}
    </button>
  );
}
