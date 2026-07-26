import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Button from "@/components/Button";
import CloudBlob from "@/components/illustrations/CloudBlob";
import Birds from "@/components/illustrations/Birds";
import LeafFloat from "@/components/illustrations/LeafFloat";
import Sparkles from "@/components/illustrations/Sparkles";
import FadeIn from "@/components/FadeIn";
import { SITE_URL, business, ruth } from "@/lib/siteConfig";
import { aboutMeIntro, aboutMeParagraphs } from "@/lib/aboutMe";

export const metadata: Metadata = {
  title: "About me",
  description:
    "Ruth is a BACP-registered humanistic counsellor working from rooms in Eastleigh and Winchester, Hampshire, and online.",
  alternates: { canonical: "/about" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": ruth.id,
  name: ruth.name,
  jobTitle: ruth.jobTitle,
  url: `${SITE_URL}/about/`,
  worksFor: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#business`,
    name: business.name,
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Professional registration",
    recognizedBy: {
      "@type": "Organization",
      name: "British Association for Counselling and Psychotherapy (BACP)",
    },
    identifier: ruth.bacpNumber,
  },
  sameAs: ruth.sameAs,
};

export default function AboutMePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <section className="relative overflow-hidden bg-cream pt-10 pb-4 sm:pt-16 sm:pb-6">
        <CloudBlob
          variant="yellow"
          className="pointer-events-none absolute -top-12 right-[-6rem] h-64 w-[24rem] opacity-30"
        />
        <div
          className="pointer-events-none absolute top-[20%] left-0 right-0 h-12 animate-fly-across"
          style={{ animationDuration: "110s" }}
          aria-hidden="true"
        >
          <Birds className="h-12 w-48 opacity-60" count={3} />
        </div>
        <div className="relative z-10">
          <Container>
            <FadeIn>
              <h1 className="text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-navy/55">
                About me
              </h1>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="relative mx-auto mt-6 w-[210px] sm:w-[240px]">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-full bg-soft-yellow/55 blur-sm"
                />
                <div
                  aria-hidden="true"
                  className="absolute -inset-1.5 rounded-full bg-soft-blue/40"
                />
                <img
                  src="/ruth-headshot.webp?v=8"
                  alt="Ruth, the counsellor at Hampshire Headspace"
                  width={800}
                  height={1067}
                  className="relative aspect-square w-full rounded-full object-cover object-[center_25%] shadow-soft-lg ring-2 ring-cream"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </FadeIn>
          </Container>
        </div>
      </section>

      {/* INTRO — headline-styled, tight spacing per Ruth */}
      <section className="bg-cream pt-4 pb-2 sm:pt-6 sm:pb-4">
        <Container>
          <FadeIn>
            <h2 className="mx-auto max-w-3xl text-center text-balance text-[1.5rem] font-semibold leading-tight text-navy sm:text-[2rem]">
              {aboutMeIntro}
            </h2>
          </FadeIn>
        </Container>
      </section>

      {/* RUTH'S EXACT WORDING — remaining paragraphs */}
      <section className="bg-cream pb-14 sm:pb-20">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-prose space-y-5 text-center text-[16px] leading-relaxed text-navy/85 sm:text-[17px]">
              {aboutMeParagraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* CREDENTIALS */}
      <Section tone="blue" spacing="tight">
        <Container>
          <FadeIn>
            <h2 className="mx-auto max-w-3xl text-center text-balance text-[1.5rem] font-semibold leading-tight text-navy sm:text-[2rem]">
              Qualifications and registration.
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="mx-auto mt-8 grid max-w-4xl gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:items-stretch">
              <div className="flex items-center justify-center rounded-xl2 bg-white p-6 shadow-soft sm:p-8">
                <img
                  src="/bacp-logo.webp"
                  alt="BACP registered member 418989, MBACP"
                  width={520}
                  height={232}
                  className="h-auto w-full max-w-[420px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  "BACP registered member (418989)",
                  "Qualified humanistic counsellor",
                  "Fully insured to practice",
                  "Enhanced DBS check",
                  "Regular clinical supervision",
                  "Ongoing CPD and training",
                ].map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-3 rounded-xl2 bg-cream p-4 text-[15px] text-navy/85 shadow-soft"
                  >
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-navy"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                      <path
                        d="M8.5 12.5l2.5 2.5 5-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* CTA — colour wash behind, per Ruth */}
      <Section tone="yellow" spacing="default" className="relative overflow-hidden">
        <Sparkles className="pointer-events-none absolute top-12 right-[8%] h-24 w-40 opacity-65 animate-twinkle" />
        <LeafFloat className="pointer-events-none absolute -bottom-4 left-[2%] h-36 w-36 opacity-70 animate-float-soft" />
        <Container>
          <FadeIn>
            <h2 className="mx-auto max-w-2xl text-center text-balance text-[1.5rem] font-semibold leading-tight text-navy sm:text-[2rem]">
              May I encourage you to take that first step with me today?
            </h2>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact/">Get in touch</Button>
              <Button href="/services/" variant="secondary">
                See services
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
