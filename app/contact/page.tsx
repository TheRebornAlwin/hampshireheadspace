import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import BookingForm from "@/components/BookingForm";
import EnvelopeIllustration from "@/components/illustrations/EnvelopeIllustration";
import FadeIn from "@/components/FadeIn";
import CloudBlob from "@/components/illustrations/CloudBlob";
import PaperPlane from "@/components/illustrations/PaperPlane";
import Birds from "@/components/illustrations/Birds";
import LeafFloat from "@/components/illustrations/LeafFloat";

export const metadata: Metadata = {
  title: "Where to find me",
  description:
    "Comfortable and quiet counselling rooms in central Eastleigh and Winnall in Winchester, both with free parking and easy access. Or we can meet online.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-10 pb-10 sm:pt-16 sm:pb-12">
        <CloudBlob
          variant="yellow"
          className="pointer-events-none absolute -top-12 right-[-5rem] h-44 w-72 opacity-30 animate-drift-slower"
        />
        <CloudBlob
          variant="blue"
          className="pointer-events-none absolute top-32 left-[-4rem] h-32 w-60 opacity-25 animate-drift-slow"
        />
        <PaperPlane className="pointer-events-none absolute top-8 right-[8%] hidden h-20 w-44 opacity-50 animate-float-soft lg:block" />
        <div className="relative z-10">
          <Container>
            <FadeIn>
              <EnvelopeIllustration className="mx-auto h-auto w-full max-w-[180px] sm:max-w-[220px]" />
            </FadeIn>
            <FadeIn delay={120}>
              <h1 className="mx-auto mt-4 max-w-3xl text-center text-balance text-[1.85rem] font-semibold leading-[1.15] text-navy sm:text-[2.5rem] lg:text-[3rem]">
                Where to find me?
              </h1>
              {/* Ruth's doc reads "a comfortable and quiet counselling rooms" —
                  stray article dropped. Restore if she wants it verbatim. */}
              <p className="mx-auto mt-5 max-w-xl text-center text-pretty text-[16px] leading-relaxed text-navy/85 sm:text-[18px]">
                I offer comfortable and quiet counselling rooms in either
                central Eastleigh or Winnall in Winchester. Both have free
                parking and are easily accessible. Alternatively, we can meet
                online. Please contact me to discuss options and for further
                information.
              </p>
            </FadeIn>
          </Container>
        </div>
      </section>

      <Section tone="cream" spacing="default" className="relative overflow-hidden">
        <LeafFloat className="pointer-events-none absolute -top-2 right-[-3%] h-36 w-36 opacity-50 animate-float-soft" />
        <div
          className="pointer-events-none absolute bottom-32 left-0 right-0 h-12 animate-fly-across"
          style={{ animationDuration: "140s" }}
          aria-hidden="true"
        >
          <Birds className="h-12 w-44 opacity-40" count={2} />
        </div>
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-12">
            <FadeIn className="lg:col-span-7">
              <div className="rounded-xl2 bg-cream p-7 shadow-soft sm:p-9">
                <h2 className="text-[1.4rem] font-semibold leading-tight text-navy sm:text-[1.65rem]">
                  Send me a short message
                </h2>
                <div className="mt-7">
                  <BookingForm />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={140} className="space-y-6 lg:col-span-5">
              <div className="rounded-xl2 bg-soft-blue/15 p-6 sm:p-7">
                <h3 className="text-[15px] font-semibold uppercase tracking-wider text-navy/70">
                  How to reach me
                </h3>
                <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-navy/90">
                  <li>
                    <a
                      className="font-medium underline-offset-4 hover:underline"
                      href="mailto:hello@hampshireheadspace.com"
                    >
                      hello@hampshireheadspace.com
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-medium underline-offset-4 hover:underline"
                      href="tel:+447717811986"
                    >
                      07717 811986
                    </a>
                    <span className="ml-1 text-warm-grey-light">
                      (text or message)
                    </span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-warm-grey">
                  Please email or leave a text mentioning how you would like
                  to be contacted, and I will usually get back to you on the
                  same day.
                </p>
              </div>

              {/*
                The "Where to find me" address card for the Cranberry Wellbeing
                Centre used to sit here. Ruth: that room is currently
                unavailable, so it is off the site for now, but she may go back
                to it. The address is kept on record as `dormantLocations` in
                lib/siteConfig.ts, and the markup is in git history.

                Ruth picked the two photos below, but asked that they are NOT
                labelled as the counselling room, since the room may change. So:
                no caption, and alt text that says what is shown without
                claiming whose room it is.
              */}
              <div className="space-y-4">
                <img
                  src="/room-chairs.webp"
                  alt="A quiet corner with a pink armchair and a pale blue chair either side of a small round table"
                  width={980}
                  height={652}
                  className="h-auto w-full rounded-xl2 shadow-soft"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src="/room-shelves.webp"
                  alt="Open shelves holding books, creative materials and therapeutic resources"
                  width={988}
                  height={657}
                  className="h-auto w-full rounded-xl2 shadow-soft"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

    </>
  );
}
