// Single source of truth for blog posts. Used by the blog index, the sitemap,
// and BlogLayout's "related articles" internal linking (which de-orphans the
// posts so they can actually rank).

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO, for <time> + sitemap lastModified
  dateHuman: string;
};

export const POSTS: Post[] = [
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
    title: "When you've held it together for everyone else for too long",
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

// Return up to `n` other posts to link to from a given post, so no article
// is an orphan. Wraps around the list for stable, deterministic results.
export function getRelated(slug: string, n = 3): Post[] {
  const i = POSTS.findIndex((p) => p.slug === slug);
  if (i === -1) return POSTS.slice(0, n);
  const out: Post[] = [];
  for (let k = 1; out.length < n && k < POSTS.length; k++) {
    out.push(POSTS[(i + k) % POSTS.length]);
  }
  return out;
}
