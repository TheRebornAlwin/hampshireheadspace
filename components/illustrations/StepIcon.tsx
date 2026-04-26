import type { ReactNode } from "react";

type Name =
  | "arrive"
  | "chair"
  | "speech"
  | "heart"
  | "lock"
  | "clock"
  | "leave";

type Props = {
  name: Name;
  className?: string;
};

const paths: Record<Name, ReactNode> = {
  arrive: (
    <>
      <path d="M5 21h14M6 21V8.5a1 1 0 0 1 .5-.87l5-2.86a1 1 0 0 1 1 0l5 2.86a1 1 0 0 1 .5.87V21" />
      <path d="M10 14a2 2 0 0 1 4 0v7" />
      <path d="M9.5 11h.01M14.5 11h.01" />
    </>
  ),
  chair: (
    <>
      <path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
      <path d="M3 13h18a1 1 0 0 1 1 1v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a1 1 0 0 1 1-1Z" />
      <path d="M5 19v2M19 19v2" />
    </>
  ),
  speech: (
    <>
      <path d="M21 12a8 8 0 0 1-12.6 6.5L3 20l1.3-4.6A8 8 0 1 1 21 12Z" />
      <circle cx="9" cy="12" r="0.6" fill="currentColor" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
      <circle cx="15" cy="12" r="0.6" fill="currentColor" />
    </>
  ),
  heart: (
    <>
      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="1.5" />
      <path d="M8 11V7.5a4 4 0 0 1 8 0V11" />
      <path d="M12 14.5v2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  leave: (
    <>
      <path d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4" />
      <path d="M9 16l-4-4 4-4" />
      <path d="M5 12h11" />
    </>
  ),
};

export default function StepIcon({ name, className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {paths[name]}
    </svg>
  );
}
