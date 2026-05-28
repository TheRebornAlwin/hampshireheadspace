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
  title: "About you",
  description:
    "A space to slow down and connect with yourself. Counselling for adults in Eastleigh, Hampshire.",
  alternates: { canonical: "/about-you" },
};

export default function AboutYouPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream pt-10 pb-4 sm:pt-16 sm:pb-6">
        <CloudBlob
          variant="blue"
          className="pointer-events-none absolute -top-12 left-[-6rem] h-64 w-[24rem] opacity-20"
        />
        <CloudBlob
          variant="yellow"
          className="pointer-events-none absolute bottom-4 right-[-4rem] h-36 w-72 opacity-25 animate-drift-slow"
        />
        <div
          className="pointer-events-none absolute top-[18%] left-0 right-0 h-12 animate-fly-across"
          style={{ animationDuration: "120s" }}
          aria-hidden="true"
        >
          <Birds className="h-12 w-44 opacity-55" count={2} />
        </div>
        <div className="relative z-10">
          <Container>
            <FadeIn>
              <p className="text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-navy/55">
                About you
              </p>
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
                  src="/about-you.webp"
                  alt="A quiet, supportive counselling conversation"
                  width={1122}
                  height={1402}
                  className="relative aspect-square w-full rounded-full object-cover object-[center_30%] shadow-soft-lg ring-2 ring-cream"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </FadeIn>
            <FadeIn delay={160}>
              <h1 className="mx-auto mt-6 max-w-3xl text-center text-balance text-[1.5rem] font-semibold leading-tight text-navy sm:text-[2rem]">
                A space to slow down and connect with yourself.
              </h1>
            </FadeIn>
          </Container>
        </div>
      </section>

      {/* RUTH'S EXACT WORDING — subhead now lives inside the prose block so the
          sizing, width and line-rhythm are uniform on desktop (Ruth: "extra line"
          between first sentence and the rest) */}
      <section className="bg-cream pt-4 pb-14 sm:pt-6 sm:pb-20">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-prose space-y-5 text-center text-[16px] leading-relaxed text-navy/85 sm:text-[17px]">
              <p>
                The counselling experience can be a{" "}
                <span style={{ wordSpacing: "4px" }}>freeing journey</span>{" "}
                that will enable you to love, care, nourish and respect
                yourself, just as you are.
              </p>
              <p>
                Counselling can provide you with an opportunity to slow down
                and connect, to grow and to develop so that you may live with
                more ease and less strain.
              </p>
              <p>
                During counselling it is likely that you will become more
                self-aware. You may begin to recognise behaviours and cycles
                of responding which are no longer helpful, or you may become
                more able to let go of outdated ideas of yourself or others.
              </p>
              <p>
                You may come to terms with what harms you at the same time as
                embracing more of what brings joy and fulfilment.
              </p>
              <p>
                While you cannot always choose what happens in your life, you
                do have a degree of choice and freedom over how you respond.
                The more clarity you have about how you behave and respond to
                life&rsquo;s challenges, the more you can take ownership and
                move towards a life that is in line with what matters most to
                you.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* CTA */}
      <Section tone="blue" spacing="default" className="relative overflow-hidden">
        <Sparkles className="pointer-events-none absolute top-12 right-[8%] h-24 w-40 opacity-60 animate-twinkle" />
        <LeafFloat className="pointer-events-none absolute -bottom-4 left-[2%] h-36 w-36 opacity-60 animate-float-soft" />
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
