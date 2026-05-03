"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number;
  className?: string;
};

export default function Typewriter({ text, speed = 55, className }: Props) {
  const [shown, setShown] = useState(text);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setShown("");
    setShowCursor(true);
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) {
        window.clearInterval(id);
      }
    }, speed);

    return () => window.clearInterval(id);
  }, [text, speed]);

  return (
    <span className={className}>
      {shown}
      {showCursor && (
        <span
          aria-hidden="true"
          className="ml-[3px] inline-block h-[0.92em] w-[3px] align-baseline bg-current animate-blink"
        />
      )}
    </span>
  );
}
