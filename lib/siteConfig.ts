// Central SEO / business data. Single source of truth for schema, sitemap,
// footer, etc. Update the TODO values once the manual Part 1 tasks are done,
// then everything that consumes this file updates automatically.

export const SITE_URL = "https://hampshireheadspace.com";

export const business = {
  name: "Hampshire Headspace",
  legalName: "Hampshire Headspace",
  email: "hello@hampshireheadspace.com",
  phoneE164: "+447717811986",
  phoneDisplay: "07717 811986",
  priceRange: "££",
  // Ruth now works from two rooms and publishes neither street address, so this
  // stays at locality level. Eastleigh is the primary locality; Winchester is
  // covered by `locations` and `areaServed` below.
  address: {
    addressLocality: "Eastleigh",
    addressRegion: "Hampshire",
    addressCountry: "GB",
  },
  // TODO (Task 1): refine the exact pin from the Google Business Profile.
  // Approximate centre of Eastleigh.
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

// The rooms Ruth currently works from. No street addresses are published.
export const locations = [
  { town: "Eastleigh", area: "central Eastleigh" },
  { town: "Winchester", area: "Winnall in Winchester" },
];

// Kept on record only. The Cranberry room is unavailable, so it is off the site
// for now, but Ruth may go back to it — restore the address card on the contact
// page from here if she does.
export const dormantLocations = [
  {
    name: "Cranberry Wellbeing Centre",
    streetAddress: "67 Leigh Road",
    addressLocality: "Eastleigh",
    addressRegion: "Hampshire",
    postalCode: "SO50 9DF",
    addressCountry: "GB",
    note: "Opposite The Point. Free parking is available.",
  },
];

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
    name: "Free initial session",
    price: "0",
    priceCurrency: "GBP",
    description:
      "Up to 50 minutes with no obligation, to meet, to talk, to get a feel for me, by phone, online or in person.",
  },
  {
    name: "Counselling session, face to face",
    price: "50",
    priceCurrency: "GBP",
    description: "A 50-minute session in either Eastleigh or Winchester.",
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
