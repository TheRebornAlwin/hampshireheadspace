import { ReactNode } from "react";
import Container from "./Container";

type Props = {
  title: string;
  intro: string;
  updated: string;
  children: ReactNode;
};

export default function LegalPage({ title, intro, updated, children }: Props) {
  return (
    <article className="pt-12 pb-20 sm:pt-16">
      <Container>
        <p className="text-[13px] font-semibold uppercase tracking-wider text-navy/60">
          {title.split(" ")[0]}
        </p>
        <h1 className="mt-3 text-balance text-[2rem] font-semibold leading-[1.15] text-navy sm:text-[2.5rem]">
          {title}
        </h1>
        <p className="mt-2 text-sm text-warm-grey">Last updated: {updated}</p>
        <p className="mt-6 max-w-prose text-[17px] leading-relaxed text-navy/85">
          {intro}
        </p>
        <div className="prose-style mt-10 max-w-prose space-y-7 text-[16px] leading-relaxed text-navy/85 sm:text-[17px]">
          {children}
        </div>
      </Container>
    </article>
  );
}
