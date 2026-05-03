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
          className="ml-[2px] inline-block h-[0.85em] w-[3px] translate-y-[2px] animate-blink bg-current"
        />
      )}
    </span>
  );
}
