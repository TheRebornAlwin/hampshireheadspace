// Local SEO landing pages (service x location). Reachable via the footer and
// the sitemap so they can rank for local-intent searches without changing the
// main site's look. Each has its own bespoke page under app/<slug>/page.tsx.

export type LandingPage = {
  slug: string;
  footerLabel: string;
};

export const LANDING_PAGES: LandingPage[] = [
  { slug: "counselling-in-eastleigh", footerLabel: "Counselling in Eastleigh" },
  {
    slug: "anxiety-counselling-eastleigh",
    footerLabel: "Anxiety counselling, Eastleigh",
  },
  {
    slug: "online-counselling-hampshire",
    footerLabel: "Online counselling, Hampshire",
  },
];
