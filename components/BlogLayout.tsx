import { ReactNode } from "react";
import Link from "next/link";
import Container from "./Container";
import Button from "./Button";
import CloudBlob from "./illustrations/CloudBlob";

type Props = {
  title: string;
  description: string;
  publishedISO: string;
  publishedHuman: string;
  readMinutes: number;
  children: ReactNode;
};

export default function BlogLayout({
  title,
  description,
  publishedISO,
  publishedHuman,
  readMinutes,
  children,
}: Props) {
  return (
    <article className="relative overflow-hidden pt-12 pb-20 sm:pt-16">
      <CloudBlob
        variant="blue"
        className="pointer-events-none absolute -top-12 right-[-5rem] h-44 w-72 opacity-20 animate-drift-slow"
      />
      <Container>
        <Link
          href="/blog/"
          className="text-sm text-warm-grey underline-offset-4 hover:text-navy hover:underline"
        >
          ← All articles
        </Link>
        <p className="mt-6 text-[13px] font-semibold uppercase tracking-wider text-navy/60">
          Hampshire HeadSpace · Articles
        </p>
        <h1 className="mt-3 text-balance text-[2rem] font-semibold leading-[1.15] text-navy sm:text-[2.5rem]">
          {title}
        </h1>
        <p className="mt-4 max-w-prose text-pretty text-[17px] leading-relaxed text-warm-grey">
          {description}
        </p>
        <p className="mt-3 text-sm text-warm-grey-light">
          <time dateTime={publishedISO}>{publishedHuman}</time>
          {" · "}
          {readMinutes} min read
        </p>

        <div className="prose-style mt-10 max-w-prose space-y-6 text-[16px] leading-relaxed text-navy/85 sm:text-[17px]">
          {children}
        </div>

        <div className="mt-14 rounded-xl2 border border-soft-blue/40 bg-soft-yellow/30 p-6 sm:p-7">
          <h2 className="text-[1.2rem] font-semibold leading-snug text-navy">
            Want to talk to someone properly?
          </h2>
          <p className="mt-3 leading-relaxed text-navy/85">
            Hampshire HeadSpace is private counselling in Eastleigh. The first
            55-minute session is free, with no pressure to come back if it
            isn&apos;t the right fit.
          </p>
          <div className="mt-5">
            <Button href="/contact/">Book your free first session</Button>
          </div>
        </div>
      </Container>
    </article>
  );
}
