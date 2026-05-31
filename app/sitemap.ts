import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/siteConfig";
import { POSTS } from "@/lib/posts";
import { LANDING_PAGES } from "@/lib/landingPages";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const corePages: { path: string; priority: number }[] = [
    { path: "", priority: 1.0 },
    { path: "/services", priority: 0.8 },
    { path: "/contact", priority: 0.8 },
    { path: "/about", priority: 0.8 },
    { path: "/about-you", priority: 0.8 },
    { path: "/blog", priority: 0.6 },
    { path: "/terms", priority: 0.3 },
    { path: "/ethical-framework", priority: 0.3 },
    { path: "/privacy", priority: 0.3 },
  ];

  const core = corePages.map((p) => ({
    url: `${SITE_URL}${p.path}/`.replace(/\/+$/, "/"),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p.priority,
  }));

  const landing = LANDING_PAGES.map((p) => ({
    url: `${SITE_URL}/${p.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const posts = POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}/`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...core, ...landing, ...posts];
}
