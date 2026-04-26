"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "./Button";

const LOGO_URL =
  "https://5gl6uqlaxg.ufs.sh/f/x0izTbEnXmRa6UWitisUF0JPnvVqwk53LThbAGaKrtslQ9fz";

const links = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About Ruth" },
  { href: "/services/", label: "Services & Fees" },
  { href: "/faq/", label: "FAQ" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 w-full backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "bg-cream/85 shadow-soft"
          : "bg-cream/60"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
        <Link
          href="/"
          aria-label="Hampshire HeadSpace, home"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <img
            src={LOGO_URL}
            alt="Hampshire HeadSpace"
            className="h-10 w-auto sm:h-11"
            width={160}
            height={44}
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 lg:flex"
        >
          {links.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] text-navy/80 transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact/" size="md">
            Book free session
          </Button>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl2 text-navy hover:bg-soft-blue/30 lg:hidden"
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-navy/5 bg-cream/95 backdrop-blur-md transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav
          aria-label="Mobile primary"
          className="flex flex-col gap-1 px-5 py-5"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl2 px-3 py-3 text-[17px] text-navy/85 hover:bg-soft-blue/30 hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3">
            <Button
              href="/contact/"
              size="md"
              className="w-full"
            >
              Book free session
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
