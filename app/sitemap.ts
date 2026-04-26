import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://hampshireheadspace.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    "",
    "/about",
    "/services",
    "/faq",
    "/contact",
    "/privacy",
    "/cookies",
    "/terms",
    "/ethical-framework",
    "/blog",
  ];
  return paths.map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p === "" ? 1.0 : 0.7,
  }));
}
