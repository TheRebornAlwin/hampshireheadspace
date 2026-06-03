// Central SEO / business data. Single source of truth for schema, sitemap,
// footer, etc. Update the TODO values once the manual Part 1 tasks are done,
// then everything that consumes this file updates automatically.

export const SITE_URL = "https://hampshireheadspace.com";

export const business = {
  name: "Hampshire Headspace",
  legalName: "Hampshire Headspace",
  email: "hello@hampshireheadspace.com",
  phoneE164: "+447843114396",
  phoneDisplay: "07843 114396",
  priceRange: "££",
  address: {
    streetAddress: "Cranberry Wellbeing Centre, 67 Leigh Road",
    addressLocality: "Eastleigh",
    addressRegion: "Hampshire",
    postalCode: "SO50 9DF",
    addressCountry: "GB",
  },
  // TODO (Task 1): refine the exact pin from the Google Business Profile.
  // Approximate from postcode SO50 9DF / 67 Leigh Road, Eastleigh.
  geo: { lat: 50.9694, lng: -1.3503 },
  // TODO (Task 1): confirm the real opening hours from the Google Business Profile.
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  areaServed: [
    "Eastleigh",
    "Chandler's Ford",
    "Southampton",
    "Hedge End",
    "Romsey",
    "Winchester",
  ],
  // TODO (Tasks 1 & 5): add once live — Google Business Profile URL,
  // BACP profile, Counselling Directory, Psychology Today, any socials.
  sameAs: [] as string[],
};

export const ruth = {
  name: "Ruth Fleming",
  jobTitle: "Humanistic Counsellor",
  bacpNumber: "418989",
  // Stable @id used to link the author of every article to the About page.
  id: `${SITE_URL}/about/#ruth`,
  // TODO (Tasks 1 & 5): add Ruth's professional profile URLs —
  // BACP "Find a Therapist", Counselling Directory, Psychology Today, LinkedIn.
  sameAs: [] as string[],
};

export const offers = [
  {
    name: "Free initial online session",
    price: "0",
    priceCurrency: "GBP",
    description:
      "A free 50-minute online session to meet and discuss your needs.",
  },
  {
    name: "Counselling session, in person",
    price: "55",
    priceCurrency: "GBP",
    description:
      "A 50-minute session in the room at the Cranberry Wellbeing Centre, Eastleigh.",
  },
  {
    name: "Counselling session, online",
    price: "40",
    priceCurrency: "GBP",
    description: "A 50-minute session by secure video.",
  },
];

// IndexNow verification key. Served as a plain-text file at /<key>.txt.
// Submit URLs from Bing Webmaster Tools, or let Cloudflare Crawler Hints
// do it automatically (see SEO-IMPLEMENTATION.md, Task 3).
export const INDEXNOW_KEY = "c2f0798214a3453c7c81f2dfb12b29a4";
