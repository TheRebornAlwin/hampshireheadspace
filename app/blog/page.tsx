import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import CloudBlob from "@/components/illustrations/CloudBlob";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Honest, plain-English articles about counselling, anxiety, grief, NHS waiting lists and choosing the right therapist in Hampshire.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    slug: "how-to-choose-a-counsellor-in-eastleigh",
    title: "How to choose a counsellor in Eastleigh",
    excerpt:
      "Six questions worth asking before you book, and what every counsellor's website tells you that you can safely ignore.",
    date: "2026-04-12",
    dateHuman: "12 April 2026",
  },
  {
    slug: "counselling-vs-therapy-vs-psychotherapy",
    title: "Counselling, therapy, psychotherapy: what's the actual difference?",
    excerpt:
      "The plain-English version, with the bits the official sites don't quite spell out.",
    date: "2026-04-04",
    dateHuman: "4 April 2026",
  },
  {
    slug: "what-to-expect-from-your-first-counselling-session",
    title: "What to expect from your first counselling session",
    excerpt:
      "Step by step, beat by beat, so you know what's coming before you walk in.",
    date: "2026-03-28",
    dateHuman: "28 March 2026",
  },
  {
    slug: "how-long-does-counselling-take-to-work",
    title: "How long does counselling take to work?",
    excerpt:
      "An honest answer that doesn't promise transformation by week three.",
    date: "2026-03-20",
    dateHuman: "20 March 2026",
  },
  {
    slug: "nhs-talking-therapies-waiting-list-alternatives",
    title:
      "Waiting on NHS Talking Therapies: how long is too long, and what to do meanwhile",
    excerpt:
      "A practical guide for the months between referral and the first session that may or may not arrive.",
    date: "2026-03-10",
    dateHuman: "10 March 2026",
  },
  {
    slug: "what-does-bacp-registered-actually-mean",
    title: "What does BACP registered actually mean?",
    excerpt:
      "It's the badge every UK counsellor displays. Here's what it's actually committing them to.",
    date: "2026-03-02",
    dateHuman: "2 March 2026",
  },
  {
    slug: "counselling-for-working-mums",
    title:
      "When you've held it together for everyone else for too long",
    excerpt:
      "Notes for working mothers who don't have time, energy or permission to fall apart.",
    date: "2026-02-22",
    dateHuman: "22 February 2026",
  },
  {
    slug: "anxiety-in-midlife",
    title: "Anxiety in midlife: why it shows up now",
    excerpt:
      "On the surface nothing changed, and yet everything feels like it might.",
    date: "2026-02-14",
    dateHuman: "14 February 2026",
  },
  {
    slug: "online-vs-in-person-counselling",
    title: "Online or in person: which counselling actually works better?",
    excerpt:
      "There's a real answer, and it's not the one you'll see on the big online-therapy adverts.",
    date: "2026-02-04",
    dateHuman: "4 February 2026",
  },
  {
    slug: "grief-doesnt-follow-a-timeline",
    title: "Grief doesn't follow the timeline you expected",
    excerpt:
      "Why bereavement keeps surprising you a year, two years, ten years on, and what to do about it.",
    date: "2026-01-28",
    dateHuman: "28 January 2026",
  },
];

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
