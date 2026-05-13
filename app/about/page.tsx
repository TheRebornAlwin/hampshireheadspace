import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Button from "@/components/Button";
import CloudBlob from "@/components/illustrations/CloudBlob";
import Birds from "@/components/illustrations/Birds";
import LeafFloat from "@/components/illustrations/LeafFloat";
import Sparkles from "@/components/illustrations/Sparkles";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About me",
  description:
    "Ruth is a BACP-registered humanistic counsellor at the Cranberry Wellbeing Centre in Eastleigh, Hampshire.",
  alternates: { canonical: "/about" },
};

export default function AboutMePage() {
  return (
    <>
      <section className="relative overflow-hidden pt-10 pb-12 sm:pt-16 sm:pb-16">
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
        <Container>
          <FadeIn>
            <div className="relative mx-auto w-[210px] sm:w-[240px]">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-full bg-soft-yellow/55 blur-sm"
              />
              <div
                aria-hidden="true"
                className="absolute -inset-1.5 rounded-full bg-soft-blue/40"
              />
              <img
                src="/ruth-headshot.webp?v=7"
                alt="Ruth, the counsellor at Hampshire Headspace"
                width={480}
                height={480}
                className="relative h-auto w-full rounded-full object-cover shadow-soft-lg ring-2 ring-cream"
                loading="eager"
                decoding="async"
              />
            </div>
          </FadeIn>
          <FadeIn delay={120}>
            <h1 className="mx-auto mt-8 max-w-3xl text-center text-balance text-[1.85rem] font-semibold leading-[1.15] text-navy sm:text-[2.5rem] lg:text-[3rem]">
              About me
            </h1>
          </FadeIn>
        </Container>
      </section>

      {/* RUTH'S EXACT WORDING — fully open, no Read More */}
      <Section tone="cream" spacing="default">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-prose space-y-5 text-center text-[16px] leading-relaxed text-navy/85 sm:text-[17px]">
              <p>
                I&rsquo;m Ruth and compassion, connection and care are
                important to me, so I base my practice on these principles.
              </p>
              <p>
                I am a fully qualified humanistic counsellor. I am registered
                with the BACP (British Association of Counselling and
                Psychotherapy) and I am committed to offering a confidential
                and ethical service.
              </p>
              <p>
                I engage in regular supervision and training to support my own
                knowledge and professional development.
              </p>
              <p>
                I am fully insured and hold an enhanced DBS certificate.
              </p>
              <p>
                I offer individual counselling sessions for people aged 16 and
                over. I welcome neurotypical and neurodiverse clients, as well
                as individuals from all cultural backgrounds, sexual
                orientations, and gender identities.
              </p>
              <p>
                I have plentiful experience in the school of life, working
                with adolescents, and of working across the charity and
                private practice sectors.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

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
                  "BACP registered (member 418989)",
                  "Humanistic counsellor",
                  "Fully insured for practice",
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

      {/* CTA */}
      <Section tone="cream" spacing="default" className="relative overflow-hidden">
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
