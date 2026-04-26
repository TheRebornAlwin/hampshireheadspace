import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import CloudBlob from "@/components/illustrations/CloudBlob";
import Sun from "@/components/illustrations/Sun";
import Birds from "@/components/illustrations/Birds";
import LeafFloat from "@/components/illustrations/LeafFloat";
import Mountains from "@/components/illustrations/Mountains";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Services & Fees",
  description:
    "Individual counselling for adults, in person in Eastleigh or online. £50 per session, £40 online, first 55-minute session free.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-12 pb-12 sm:pt-20 sm:pb-16">
        <CloudBlob
          variant="blue"
          className="pointer-events-none absolute -top-12 left-[-6rem] h-64 w-[24rem] opacity-20"
        />
        <div
          className="pointer-events-none absolute top-[18%] left-0 right-0 h-12 animate-fly-across"
          style={{ animationDuration: "130s" }}
          aria-hidden="true"
        >
          <Birds className="h-12 w-44 opacity-55" count={2} />
        </div>
        <Container>
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-wider text-navy/60">
              Services & fees
            </p>
            <h1 className="mt-3 text-balance text-[2rem] font-semibold leading-[1.12] text-navy sm:text-[2.75rem] lg:text-[3.25rem]">
              Simple, transparent, no surprises.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-[17px] leading-relaxed text-navy/85 sm:text-[19px]">
              One thing at a time. Here&apos;s exactly what I offer, what it
              costs, and how sessions work.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* WHAT I OFFER */}
      <Section tone="cream" spacing="tight">
        <Container>
          <FadeIn>
            <h2 className="text-balance text-[1.6rem] font-semibold leading-tight text-navy sm:text-[2rem]">
              What I offer
            </h2>
            <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-navy/85">
              <p>
                Individual counselling for adults aged 16 and up. Neurotypical
                and neurodiverse welcome. All identities welcome.
              </p>
              <p>
                Face-to-face in Eastleigh, or online via secure video,
                whichever feels easier for you. Some people prefer the room.
                Some prefer their own sofa. Both work.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* HOW SESSIONS WORK */}
      <Section tone="blue" spacing="default" className="relative overflow-hidden">
        <CloudBlob
          variant="yellow"
          className="pointer-events-none absolute -top-6 left-[-4rem] h-32 w-72 opacity-30 animate-drift-slow"
        />
        <LeafFloat className="pointer-events-none absolute -bottom-2 right-[3%] h-36 w-36 opacity-70 animate-float-soft" />
        <Container size="wide">
          <FadeIn>
            <h2 className="text-balance text-[1.6rem] font-semibold leading-tight text-navy sm:text-[2rem]">
              How sessions work
            </h2>
          </FadeIn>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              {
                t: "55 minutes",
                d: "Each session is just under an hour. We start when you sit down. I let you know gently when we have about ten minutes left so we can land somewhere okay.",
              },
              {
                t: "Usually weekly",
                d: "Weekly works for most people because it gives the work between us continuity. Some weeks you&rsquo;ll skip. That&rsquo;s fine. We&rsquo;ll find what suits you.",
              },
              {
                t: "Short term or longer",
                d: "Some people want six to twelve sessions and that&rsquo;s enough. Some stay longer. We decide together based on what you actually want, not on a fixed package.",
              },
              {
                t: "You&rsquo;re in charge",
                d: "You can pause counselling, change frequency, or stop whenever you want. No tie-in, no contract. I&rsquo;d rather you stay because you choose to.",
              },
            ].map((item, i) => (
              <FadeIn key={item.t} delay={i * 70}>
                <div className="h-full rounded-xl2 bg-cream p-7 shadow-soft">
                  <h3 className="text-[18px] font-semibold text-navy sm:text-[20px]">
                    {item.t}
                  </h3>
                  <p
                    className="mt-3 leading-relaxed text-navy/80"
                    dangerouslySetInnerHTML={{ __html: item.d }}
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* FEES */}
      <Section tone="cream" spacing="default">
        <Container size="wide">
          <FadeIn>
            <h2 className="text-balance text-[1.6rem] font-semibold leading-tight text-navy sm:text-[2rem]">
              Fees
            </h2>
            <p className="mt-3 text-warm-grey">
              Pricing in plain numbers. Pay as you go, after each session.
            </p>
          </FadeIn>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                k: "Free",
                t: "First session",
                d: "55 minutes. No obligation to come back. Genuinely free.",
                highlight: true,
              },
              {
                k: "£50",
                t: "In person, Eastleigh",
                d: "55 minutes at the Cranberry Wellbeing Centre.",
              },
              {
                k: "£40",
                t: "Online",
                d: "55 minutes by secure video. Same session, your sofa.",
              },
            ].map((row) => (
              <FadeIn key={row.t} delay={80}>
                <div
                  className={`flex h-full flex-col rounded-xl2 p-7 shadow-soft ${
                    row.highlight
                      ? "border-2 border-navy bg-soft-yellow/40"
                      : "bg-soft-blue/15"
                  }`}
                >
                  <p className="text-[2rem] font-semibold leading-none text-navy sm:text-[2.4rem]">
                    {row.k}
                  </p>
                  <p className="mt-2 text-[15px] font-semibold uppercase tracking-wider text-navy/70">
                    {row.t}
                  </p>
                  <p className="mt-3 leading-relaxed text-navy/85">{row.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200}>
            <p className="mt-6 max-w-2xl text-sm text-warm-grey">
              If money is the thing keeping you from booking, please say so when
              you message. I keep a small number of lower-cost spaces and would
              rather you ask than not come at all.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="mt-12">
              <Testimonial
                variant="inline"
                quote={
                  <>
                    &ldquo;Felt selfish spending £50 a week on me when the
                    house needs new carpets. Six months in and i&rsquo;m a
                    different mum. Honestly best money i&rsquo;ve ever spent.
                    Carpets can wait.&rdquo;
                  </>
                }
                attribution="Rachel"
                context="38, Hedge End"
              />
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* WHAT I WORK WITH */}
      <Section tone="blue" spacing="default">
        <Container>
          <FadeIn>
            <h2 className="text-balance text-[1.6rem] font-semibold leading-tight text-navy sm:text-[2rem]">
              What I work with
            </h2>
            <p className="mt-3 text-warm-grey">
              There&apos;s no issue too big or too small. The list below is a
              rough map, not a checklist you have to fit into.
            </p>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="mt-8 rounded-xl2 bg-cream p-7 shadow-soft sm:p-8">
              <div className="flex flex-wrap gap-2">
                {[
                  "Anxiety",
                  "Depression",
                  "Panic attacks",
                  "Anger",
                  "Self-esteem",
                  "Sadness",
                  "Loneliness",
                  "Family issues",
                  "Relationships",
                  "Separation",
                  "Bereavement",
                  "OCD",
                  "Dark thoughts you’re scared to say out loud",
                  "Long-term health issues",
                  "Burnout",
                  "Life in general",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-soft-blue/30 px-3.5 py-1.5 text-sm text-navy/85"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-6 leading-relaxed text-navy/85">
                Counselling isn&apos;t only for those with a specific issue. It
                can also be helpful for anyone who wants to learn more about
                themselves and their relationships.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section tone="yellow" spacing="tight" className="relative overflow-hidden">
        <Sun
          className="pointer-events-none absolute top-8 right-[8%] h-28 w-28 opacity-55 animate-float-soft"
          withRays
        />
        <Mountains className="pointer-events-none absolute bottom-0 left-0 right-0 h-24" />
        <Container>
          <FadeIn>
            <div className="text-center">
              <h2 className="text-balance text-[1.6rem] font-semibold leading-tight text-navy sm:text-[2rem]">
                Ready when you are.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-navy/85">
                The first session costs nothing and tells you almost everything
                you need to know.
              </p>
              <div className="mt-7 flex justify-center">
                <Button href="/contact/" size="lg">
                  Book your free first session
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
