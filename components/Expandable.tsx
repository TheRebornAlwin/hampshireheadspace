"use client";

import { ReactNode, useState } from "react";

type Props = {
  preview: ReactNode;
  more: ReactNode;
  expandLabel?: string;
  collapseLabel?: string;
};

export default function Expandable({
  preview,
  more,
  expandLabel = "Read more",
  collapseLabel = "Show less",
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {preview}
      <div
        className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ease-out ${
          open
            ? "mt-6 grid-rows-[1fr] opacity-100"
            : "mt-0 grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="overflow-hidden">{more}</div>
      </div>
      <div className="mt-7 flex justify-center">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="group inline-flex items-center gap-1.5 text-[15px] font-semibold text-navy underline decoration-navy/40 decoration-2 underline-offset-4 transition-colors hover:decoration-navy"
        >
          {open ? collapseLabel : expandLabel}
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`h-4 w-4 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
