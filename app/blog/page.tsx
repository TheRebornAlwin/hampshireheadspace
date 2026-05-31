import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import CloudBlob from "@/components/illustrations/CloudBlob";
import { POSTS as posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Honest, plain-English articles about counselling, anxiety, grief, NHS waiting lists and choosing the right therapist in Hampshire.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16">
      <CloudBlob
        variant="yellow"
        className="pointer-events-none absolute -top-12 left-[-5rem] h-44 w-72 opacity-25 animate-drift-slower"
      />
      <Container size="wide">
        <p className="text-[13px] font-semibold uppercase tracking-wider text-navy/60">
          Articles
        </p>
        <h1 className="mt-3 max-w-2xl text-balance text-[2rem] font-semibold leading-[1.15] text-navy sm:text-[2.5rem]">
          Plain-English notes on counselling, choosing a therapist, and how
          this all actually works.
        </h1>
        <p className="mt-5 max-w-prose text-pretty text-[17px] leading-relaxed text-warm-grey">
          Written for the kind of person who&apos;s been Googling at 11pm
          and still isn&apos;t sure whether to send the message.
        </p>

        <ul className="mt-12 grid gap-4">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}/`}
                className="group block rounded-xl2 bg-cream p-6 shadow-soft transition-shadow hover:shadow-soft-lg sm:p-7"
              >
                <p className="text-[12px] font-medium uppercase tracking-wider text-navy/55">
                  <time dateTime={p.date}>{p.dateHuman}</time>
                </p>
                <h2 className="mt-2 text-[18px] font-semibold leading-snug text-navy group-hover:text-navy-deep sm:text-[20px]">
                  {p.title}
                </h2>
                <p className="mt-3 leading-relaxed text-warm-grey">
                  {p.excerpt}
                </p>
                <p className="mt-4 inline-flex items-center gap-2 text-[14px] font-medium text-navy/85">
                  Read article
                  <span aria-hidden="true">→</span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
