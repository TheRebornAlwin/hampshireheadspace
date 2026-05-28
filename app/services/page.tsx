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

export const metadata: Metadata = {
  title: "Services",
  description:
    "Individual humanistic counselling for adults in Eastleigh, Hampshire. £55 per session in person, £40 online. A free initial online session to meet and discuss your needs.",
  alternates: { canonical: "/services" },
};

const TAGS = [
  "Anxiety",
  "Depression",
  "Panic attacks",
  "Stress, overwhelm, and burnout",
  "Low mood and persistent sadness",
  "Worry and overthinking",
  "Anger and emotional regulation difficulties",
  "Low self-esteem and low confidence",
  "People-pleasing and perfectionism",
  "A harsh inner critic",
  "Feelings of being stuck or lost",
  "Disconnection",
  "Loneliness and isolation",
  "Family, friendship, and relationship issues",
  "Patterns in relationships",
  "Separation and divorce",
  "Parenting difficulties",
  "Caring responsibilities",
  "Loss and bereavement",
  "Identity-related concerns",
  "Life transitions and adjustment difficulties",
  "Obsessive Compulsive Disorder (OCD)",
  "Suicidal thoughts",
  "Long-term health conditions",
  "&hellip;and life in general",
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-4 pb-0 sm:pt-8 sm:pb-0">
        <CloudBlob
          variant="yellow"
          className="pointer-events-none absolute top-4 right-4 h-24 w-44 opacity-35 animate-drift-slow sm:h-28 sm:w-56"
        />
        <CloudBlob
          variant="pink"
          className="pointer-events-none absolute top-10 left-[3%] h-16 w-28 -rotate-12 opacity-70 sm:h-20 sm:w-36"
        />
        <div
          className="pointer-events-none absolute top-[18%] left-0 right-0 h-12 animate-fly-across"
          style={{ animationDuration: "130s" }}
          aria-hidden="true"
        >
          <Birds className="h-12 w-44 opacity-55" count={2} />
        </div>
        <div className="relative z-10">
          <Container>
            <FadeIn>
              <h1 className="text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-navy/55">
                Services
              </h1>
            </FadeIn>
          </Container>
        </div>
      </section>

      {/* WHAT COUNSELLING CAN SUPPORT */}
      <Section tone="cream" spacing="default" className="relative overflow-hidden">
        <CloudBlob
          variant="yellow"
          className="pointer-events-none absolute top-6 left-4 h-24 w-44 opacity-30 animate-drift-slower sm:h-28 sm:w-56"
        />
        <CloudBlob
          variant="pink"
          className="pointer-events-none absolute top-16 right-[4%] h-16 w-28 rotate-6 opacity-65 sm:h-20 sm:w-36"
        />
        <Container size="wide">
          <FadeIn>
            <h2 className="mx-auto max-w-3xl text-center text-balance text-[1.5rem] font-semibold leading-tight text-navy sm:text-[2rem]">
              Counselling can support people experiencing&hellip;
            </h2>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="mx-auto mt-8 max-w-4xl rounded-xl2 bg-cream p-5 shadow-soft sm:p-8">
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {TAGS.slice(0, -1).map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-soft-blue/30 px-3.5 py-2 text-center text-[14px] leading-snug text-navy/85 sm:text-[15px]"
                    dangerouslySetInnerHTML={{ __html: tag }}
                  />
                ))}
              </ul>
              <div className="mt-2 flex justify-center">
                <span
                  className="inline-block rounded-full bg-soft-blue/30 px-4 py-2 text-center text-[14px] leading-snug text-navy/85 sm:text-[15px]"
                  dangerouslySetInnerHTML={{ __html: TAGS[TAGS.length - 1] }}
                />
              </div>
              <p className="mt-7 text-center text-balance text-[18px] font-medium leading-snug text-navy sm:text-[20px]">
                There is no issue too big or too small.
              </p>
              <p className="mt-3 text-center leading-relaxed text-navy/80">
                Therapy is not only for those with specific issues. It can also
                be helpful for anyone who would like to learn more about
                themselves and their relationships.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* HOW LONG */}
      <Section tone="blue" spacing="default" className="relative overflow-hidden">
        <LeafFloat className="pointer-events-none absolute -bottom-2 right-[3%] h-36 w-36 opacity-70 animate-float-soft" />
        <Container>
          <FadeIn>
            <h2 className="mx-auto max-w-2xl text-center text-balance text-[1.5rem] font-semibold leading-tight text-navy sm:text-[2rem]">
              How long does counselling last?
            </h2>
          </FadeIn>
          <FadeIn delay={120}>
            <p className="mx-auto mt-6 max-w-prose text-center text-[16px] leading-relaxed text-navy/85 sm:text-[17px]">
              Counselling sessions are 50 minutes long, usually weekly and the
              process can either be short term (6&ndash;12 sessions) or longer
              term. This can be discussed and decided together.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* FEES */}
      <Section tone="cream" spacing="default" id="fees">
        <Container size="wide">
          <FadeIn>
            <p className="text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-navy/55">
              Fees
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-center text-[16px] leading-relaxed text-navy/85 sm:text-[17px]">
              It is really important to find the right counsellor for you,
              all counsellors are different, so for that reason I offer a free
              initial online session which gives us an opportunity to meet and
              discuss your needs.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[16px] leading-relaxed text-navy/85 sm:text-[17px]">
              After the initial free online session, I charge &pound;55 per
              session face to face and &pound;40 per session online.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                k: "Free",
                t: "Initial online session",
                d: "50 minutes by secure video to meet and discuss your needs.",
                highlight: true,
              },
              {
                k: "£55",
                t: "In person, Eastleigh",
                d: "50 minutes in the room at the Cranberry Wellbeing Centre.",
              },
              {
                k: "£40",
                t: "Online",
                d: "50 minutes by secure video, the same session from the comfort of your own home.",
              },
            ].map((row) => (
              <FadeIn key={row.t} delay={80}>
                <div
                  className={`flex h-full flex-col rounded-xl2 p-6 text-center shadow-soft sm:p-7 ${
                    row.highlight
                      ? "border-2 border-navy bg-soft-yellow/40 shadow-soft-lg"
                      : "bg-soft-blue/15"
                  }`}
                >
                  <p className="text-[2rem] font-semibold leading-none text-navy sm:text-[2.4rem]">
                    {row.k}
                  </p>
                  <p className="mt-2 text-[14px] font-semibold uppercase tracking-wider text-navy/70">
                    {row.t}
                  </p>
                  <p className="mt-3 leading-relaxed text-navy/85">
                    {row.d}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section tone="yellow" spacing="default" className="relative overflow-hidden">
        <Sun
          className="pointer-events-none absolute top-8 right-[8%] h-28 w-28 opacity-55 animate-float-soft"
          withRays
        />
        <Mountains className="pointer-events-none absolute bottom-0 left-0 right-0 h-24" />
        <Container>
          <FadeIn>
            <div className="text-center">
              <h2 className="mx-auto max-w-2xl text-balance text-[1.5rem] font-semibold leading-tight text-navy sm:text-[2rem]">
                May I encourage you to take that first step with me today?
              </h2>
              <div className="mt-7 flex justify-center">
                <Button href="/contact/" size="lg">
                  Get in touch
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
