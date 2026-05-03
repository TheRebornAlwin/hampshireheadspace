"use client";

import { useState, ReactNode } from "react";

type Props = {
  question: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export default function FAQItem({ question, children, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-navy/10 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-navy-deep"
      >
        <span className="text-[17px] font-medium text-navy sm:text-[18px]">
          {question}
        </span>
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-soft-blue/30 text-navy transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 5v14M5 12h14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="text-center text-warm-grey leading-relaxed space-y-3 sm:pr-10 sm:text-left">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
