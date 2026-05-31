import { ReactNode } from "react";
import Link from "next/link";
import Container from "./Container";
import Button from "./Button";
import CloudBlob from "./illustrations/CloudBlob";
import { SITE_URL, business, ruth } from "@/lib/siteConfig";
import { getRelated } from "@/lib/posts";

type Props = {
  title: string;
  description: string;
  slug: string;
  publishedISO: string;
  publishedHuman: string;
  readMinutes: number;
  modifiedISO?: string;
  children: ReactNode;
};

export default function BlogLayout({
  title,
  description,
  slug,
  publishedISO,
  publishedHuman,
  readMinutes,
  modifiedISO,
  children,
}: Props) {
  const url = `${SITE_URL}/blog/${slug}/`;
  const related = getRelated(slug, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    inLanguage: "en-GB",
    datePublished: publishedISO,
    dateModified: modifiedISO ?? publishedISO,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: `${SITE_URL}/logo.webp`,
    author: {
      "@type": "Person",
      "@id": ruth.id,
      name: ruth.name,
      jobTitle: ruth.jobTitle,
    },
    publisher: {
      "@type": "Organization",
      name: business.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.webp`,
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Articles",
        item: `${SITE_URL}/blog/`,
      },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ],
  };

  return (
    <article className="relative overflow-hidden pt-12 pb-20 sm:pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
          Hampshire Headspace · Articles
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
            Hampshire Headspace is private counselling in Eastleigh. The first
            50-minute session is free, with no pressure to come back if it
            isn&apos;t the right fit.
          </p>
          <div className="mt-5">
            <Button href="/contact/">Get in touch</Button>
          </div>
        </div>

        {related.length > 0 && (
          <nav aria-label="Related articles" className="mt-14">
            <h2 className="text-[13px] font-semibold uppercase tracking-wider text-navy/60">
              More articles
            </h2>
            <ul className="mt-5 grid gap-4">
              {related.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}/`}
                    className="group block rounded-xl2 bg-cream p-5 shadow-soft transition-shadow hover:shadow-soft-lg"
                  >
                    <h3 className="text-[16px] font-semibold leading-snug text-navy group-hover:text-navy-deep sm:text-[17px]">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-warm-grey">
                      {p.excerpt}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </Container>
    </article>
  );
}
