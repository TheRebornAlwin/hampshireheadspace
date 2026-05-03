import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Button from "@/components/Button";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ChairsIllustration from "@/components/illustrations/ChairsIllustration";
import CloudBlob from "@/components/illustrations/CloudBlob";
import Birds from "@/components/illustrations/Birds";
import LeafFloat from "@/components/illustrations/LeafFloat";
import Sparkles from "@/components/illustrations/Sparkles";
import FadeIn from "@/components/FadeIn";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "About Ruth",
  description:
    "Ruth is a BACP-registered counsellor working from the Cranberry Wellbeing Centre in Eastleigh, Hampshire. Calm, real, and paying attention.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
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
                src="/ruth-headshot.webp?v=5"
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
              I&apos;m Ruth.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-center text-pretty text-[16px] leading-relaxed text-navy/85 sm:text-[18px]">
              Compassion, connection and care are important to me, so I base
              my practice on these principles.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* ABOUT ME — Ruth's exact copy */}
      <Section tone="cream" spacing="tight">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-prose space-y-5 text-center text-[16px] leading-relaxed text-navy/85 sm:text-[17px]">
              <p>
                I am fully qualified as a humanistic counsellor. I am registered
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
                I have plentiful experience in the school of life and of
                working across the charity and private practice sectors.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* HOW I WORK */}
      <Section tone="blue" spacing="default" className="relative overflow-hidden">
        <CloudBlob
          variant="blue"
          className="pointer-events-none absolute -top-6 right-[-4rem] h-32 w-72 opacity-25 animate-drift-slower"
        />
        <LeafFloat className="pointer-events-none absolute -bottom-4 left-[2%] h-36 w-36 opacity-70 animate-float-soft" />
        <Container>
          <FadeIn>
            <h2 className="mx-auto max-w-2xl text-center text-balance text-[1.5rem] font-semibold leading-tight text-navy sm:text-[2rem]">
              At your pace.
            </h2>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="mx-auto mt-8 max-w-prose space-y-4 text-center text-[16px] leading-relaxed text-navy/85 sm:text-[17px]">
              <p>
                I work with you at your pace. The first session especially is
                yours to use however you want, and you can talk a lot, talk a
                little, or sit quietly. None of those are wrong.
              </p>
              <p>
                My approach is humanistic, grounded in compassion, connection
                and care. That means I&apos;ll meet you as a whole person
                rather than a problem to be solved, and we&apos;ll work
                together at the pace that suits you.
              </p>
              <p>
                Some weeks we&apos;ll spend the whole session on something that
                surfaced out of nowhere, and other weeks we&apos;ll move
                steadily through something we&apos;ve been circling for a
                while. The frame stays the same, the work flexes around what
                you bring through the door.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* WHAT I VALUE */}
      <Section tone="cream" spacing="default">
        <Container size="wide">
          <FadeIn>
            <h2 className="mx-auto max-w-2xl text-center text-balance text-[1.5rem] font-semibold leading-tight text-navy sm:text-[2rem]">
              Three things that shape every session
            </h2>
          </FadeIn>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                t: "Compassion",
                d: "You&rsquo;re carrying things that nobody around you has fully seen, and in our hour together you don&rsquo;t have to soften any of it so I can cope.",
                bg: "bg-soft-blue/15",
              },
              {
                t: "Connection",
                d: "Counselling that works is much less a technique being done to you and much more a real human noticing what you&rsquo;re saying, and what you&rsquo;re not quite saying.",
                bg: "bg-soft-yellow/35",
              },
              {
                t: "Care",
                d: "The room is comfortable, your time starts properly when you sit down, I take supervision seriously, and I won&rsquo;t take you for granted.",
                bg: "bg-soft-blue/15",
              },
            ].map((v, i) => (
              <FadeIn key={v.t} delay={i * 80}>
                <div className={`h-full rounded-xl2 p-6 text-center sm:p-7 ${v.bg}`}>
                  <h3 className="text-[18px] font-semibold text-navy sm:text-[20px]">
                    {v.t}
                  </h3>
                  <p
                    className="mt-3 leading-relaxed text-navy/80"
                    dangerouslySetInnerHTML={{ __html: v.d }}
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* IN-LINE TESTIMONIAL */}
      <Section tone="cream" spacing="tight" className="relative overflow-hidden">
        <Container>
          <FadeIn>
            <Testimonial
              variant="pullquote"
              quote={
                <>
                  &ldquo;I&rsquo;d done CBT through work and it didn&rsquo;t
                  really land. This was different. Ruth doesn&rsquo;t lecture
                  you. She doesn&rsquo;t tell you what you should be doing. She
                  helps you figure out what you already know.&rdquo;
                </>
              }
              attribution="Mark"
              context="42, Southampton"
            />
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

      {/* THE ROOM */}
      <Section tone="cream" spacing="default" className="relative overflow-hidden">
        <Sparkles className="pointer-events-none absolute top-12 right-[8%] h-24 w-40 opacity-65 animate-twinkle" />
        <Container>
          <FadeIn>
            <h2 className="mx-auto max-w-2xl text-center text-balance text-[1.5rem] font-semibold leading-tight text-navy sm:text-[2rem]">
              A quiet room at the Cranberry Wellbeing Centre.
            </h2>
            <div className="mx-auto mt-6 max-w-prose space-y-4 text-center text-[16px] leading-relaxed text-navy/85 sm:text-[17px]">
              <p>
                Two soft chairs, a window, a box of tissues, a glass of water
                if you want it. The door closes properly and no one can hear
                what you say.
              </p>
              <p>
                You&apos;ll find us in central Eastleigh, opposite The Point.
                Free parking is right outside. If you would rather not come in
                person, we can do the same session on a secure video call.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="mx-auto mt-8 max-w-2xl">
              <ImagePlaceholder
                label="The counselling room at Cranberry Wellbeing Centre"
                ratio="landscape"
              />
            </div>
            <ChairsIllustration className="mx-auto mt-6 h-auto w-full max-w-xs" />
          </FadeIn>

          <FadeIn delay={200}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact/">Get in touch</Button>
              <Button href="/services/" variant="secondary">
                See services and fees
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
