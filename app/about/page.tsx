import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Button from "@/components/Button";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ChairsIllustration from "@/components/illustrations/ChairsIllustration";
import CloudBlob from "@/components/illustrations/CloudBlob";
import Birds from "@/components/illustrations/Birds";
import Sun from "@/components/illustrations/Sun";
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
      <section className="relative overflow-hidden pt-12 pb-12 sm:pt-20 sm:pb-16">
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
        <Container size="wide">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <FadeIn className="lg:col-span-7">
              <p className="text-[13px] font-semibold uppercase tracking-wider text-navy/60">
                About Ruth
              </p>
              <h1 className="mt-3 text-balance text-[2.25rem] font-semibold leading-[1.1] text-navy sm:text-[2.75rem] lg:text-[3.25rem]">
                I&apos;m Ruth. I sit with people and pay attention.
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-[17px] leading-relaxed text-navy/85 sm:text-[19px]">
                I run Hampshire HeadSpace from a quiet room at the Cranberry
                Wellbeing Centre in Eastleigh. Counsellor, BACP-registered.
                Working with adults across Hampshire, in person and online.
              </p>
            </FadeIn>
            <FadeIn delay={120} className="lg:col-span-5">
              <ImagePlaceholder
                label="Ruth, Hampshire HeadSpace"
                ratio="square"
                className="mx-auto max-w-sm"
              />
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* WHY I DO THIS WORK */}
      <Section tone="cream" spacing="tight">
        <Container>
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-wider text-navy/60">
              Why I do this work
            </p>
            <h2 className="mt-3 text-balance text-[1.6rem] font-semibold leading-tight text-navy sm:text-[2rem]">
              The reason I became a counsellor
            </h2>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="mt-6 rounded-xl2 border border-dashed border-navy/25 bg-soft-yellow/25 p-6 text-navy/80 sm:p-7">
              <p className="text-sm font-medium uppercase tracking-wider text-navy/60">
                Placeholder
              </p>
              <p className="mt-2 leading-relaxed">
                This is where Ruth&apos;s personal story lives. Two or three
                short paragraphs in her own words about why she chose this work
                and what brought her to it.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-navy/70">
                Once Ruth provides the copy, replace this whole block with her
                story. It belongs above &ldquo;How I work&rdquo; because story
                builds trust faster than credentials.
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
            <p className="text-[13px] font-semibold uppercase tracking-wider text-navy/60">
              How I work
            </p>
            <h2 className="mt-3 text-balance text-[1.6rem] font-semibold leading-tight text-navy sm:text-[2rem]">
              At your pace. Without a script.
            </h2>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-navy/85">
              <p>
                I work with you at your pace. I don&apos;t push, I don&apos;t
                rush, and I will never make you feel like a checklist. The
                first session especially is yours to use however you want. You
                can talk a lot, talk a little, or sit quietly. None of those
                are wrong.
              </p>
              <p>
                Counselling with me is a real conversation in a private room.
                Not advice in the bossy sense. Not a formula. Together
                we&apos;ll look at what is actually going on, what it&apos;s
                costing you, and what you might want to do differently. You
                stay in charge of what we talk about and how deep we go.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="mt-6 rounded-xl2 border border-dashed border-navy/25 bg-cream/80 p-6 text-navy/80 sm:p-7">
              <p className="text-sm font-medium uppercase tracking-wider text-navy/60">
                Placeholder
              </p>
              <p className="mt-2 leading-relaxed">
                Ruth&apos;s specific therapeutic approach (e.g.
                person-centred, integrative, etc.) goes here, explained in
                plain English as a benefit, not a label. Replace this block as
                soon as Ruth confirms her approach.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* WHAT I VALUE */}
      <Section tone="cream" spacing="default">
        <Container size="wide">
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-wider text-navy/60">
              What I value
            </p>
            <h2 className="mt-3 text-balance text-[1.6rem] font-semibold leading-tight text-navy sm:text-[2rem]">
              Three things that shape every session
            </h2>
          </FadeIn>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                t: "Compassion",
                d: "You&rsquo;re carrying things that nobody around you has fully seen. In our hour, you don&rsquo;t have to soften them so I can cope. I&rsquo;ve got the room for it.",
              },
              {
                t: "Connection",
                d: "Counselling that works isn&rsquo;t a technique done to you. It&rsquo;s a real human noticing what you&rsquo;re saying and what you&rsquo;re not saying, and gently bringing both into the room.",
              },
              {
                t: "Care",
                d: "Care in the boring practical sense too. The room is comfortable. Your time starts when you sit down. I take supervision seriously. I don&rsquo;t take you for granted.",
              },
            ].map((v, i) => (
              <FadeIn key={v.t} delay={i * 80}>
                <div className="h-full rounded-xl2 bg-soft-blue/15 p-7">
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

      {/* IN-LINE TESTIMONIAL — between values and credentials */}
      <Section tone="cream" spacing="tight" className="relative overflow-hidden">
        <Container>
          <FadeIn>
            <Testimonial
              variant="pullquote"
              quote={
                <>
                  &ldquo;I&rsquo;d done CBT through work and it didn&rsquo;t
                  really land. This was different. Ruth doesn&rsquo;t lecture
                  you. She doesn&rsquo;t tell you what you should be doing.
                  She helps you figure out what you already know.&rdquo;
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
            <p className="text-[13px] font-semibold uppercase tracking-wider text-navy/60">
              Credentials
            </p>
            <h2 className="mt-3 text-balance text-[1.6rem] font-semibold leading-tight text-navy sm:text-[2rem]">
              And, because it matters too: I&apos;m qualified to do this work.
            </h2>
          </FadeIn>

          <FadeIn delay={120}>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "BACP registered (member number coming soon)",
                "Fully insured for practice",
                "Enhanced DBS check",
                "Regular clinical supervision",
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
          </FadeIn>
        </Container>
      </Section>

      {/* THE ROOM */}
      <Section tone="cream" spacing="default" className="relative overflow-hidden">
        <Sparkles className="pointer-events-none absolute top-12 right-[8%] h-24 w-40 opacity-65 animate-twinkle" />
        <Container size="wide">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <FadeIn className="lg:col-span-6">
              <p className="text-[13px] font-semibold uppercase tracking-wider text-navy/60">
                The room
              </p>
              <h2 className="mt-3 text-balance text-[1.6rem] font-semibold leading-tight text-navy sm:text-[2rem]">
                A quiet room at the Cranberry Wellbeing Centre.
              </h2>
              <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-navy/85">
                <p>
                  Two soft chairs, a window, a box of tissues, a glass of water
                  if you want it. The door closes properly and no one can hear
                  what you say.
                </p>
                <p>
                  You&apos;ll find us in central Eastleigh, opposite The Point.
                  Free parking is right outside. If you would rather not come
                  in person, we can do the same session on a secure video call.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/contact/">Book your free first session</Button>
                <Button href="/services/" variant="secondary">
                  See services and fees
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={120} className="lg:col-span-6">
              <ImagePlaceholder
                label="The counselling room at Cranberry Wellbeing Centre"
                ratio="landscape"
              />
              <div className="mt-6">
                <ChairsIllustration className="mx-auto h-auto w-full max-w-sm" />
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  );
}
