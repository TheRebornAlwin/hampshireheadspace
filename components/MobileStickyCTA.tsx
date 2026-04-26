"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MobileStickyCTA() {
  const pathname = usePathname() || "/";
  const [visible, setVisible] = useState(false);

  // Hide on the contact page (where they'd already be), and only show after a
  // small scroll so it doesn't slap up immediately on first paint.
  const onContact = pathname.startsWith("/contact");

  useEffect(() => {
    if (onContact) {
      setVisible(false);
      return;
    }
    const handler = () => setVisible(window.scrollY > 240);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [onContact]);

  if (onContact) return null;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-30 px-4 pb-[max(env(safe-area-inset-bottom),12px)] pt-3 transition-all duration-300 lg:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-md rounded-xl2 bg-cream/95 p-2 shadow-soft-lg ring-1 ring-navy/10 backdrop-blur">
        <Link
          href="/contact/"
          className="flex h-12 w-full items-center justify-center rounded-xl2 bg-navy px-5 text-[15px] font-medium text-cream transition-colors hover:bg-navy-deep"
        >
          Book your free first session
        </Link>
      </div>
    </div>
  );
}
