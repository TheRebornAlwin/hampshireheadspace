import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import BookingForm from "@/components/BookingForm";
import EnvelopeIllustration from "@/components/illustrations/EnvelopeIllustration";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import FadeIn from "@/components/FadeIn";
import CloudBlob from "@/components/illustrations/CloudBlob";
import PaperPlane from "@/components/illustrations/PaperPlane";
import Birds from "@/components/illustrations/Birds";
import Sun from "@/components/illustrations/Sun";
import LeafFloat from "@/components/illustrations/LeafFloat";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Contact and booking",
  description:
    "Book your free first session in about 90 seconds. No long forms. I reply the same day.",
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
        <Container>
          <FadeIn>
            <EnvelopeIllustration className="mx-auto h-auto w-full max-w-[180px] sm:max-w-[220px]" />
          </FadeIn>
          <FadeIn delay={120}>
            <h1 className="mx-auto mt-4 max-w-3xl text-center text-balance text-[1.85rem] font-semibold leading-[1.15] text-navy sm:text-[2.5rem] lg:text-[3rem]">
              Booking takes about 90 seconds.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-center text-pretty text-[16px] leading-relaxed text-navy/85 sm:text-[18px]">
              No long form, no questionnaire. Just a few details so I know how
              to reach you. The first 55-minute session is free.
            </p>
          </FadeIn>
        </Container>
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
                <p className="mt-2 text-warm-grey">
                  First name is fine. You don&apos;t have to explain anything
                  in detail.
                </p>
                <div className="mt-7">
                  <BookingForm />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={140} className="space-y-6 lg:col-span-5">
              <div className="rounded-xl2 bg-soft-blue/15 p-6 sm:p-7">
                <h3 className="text-[15px] font-semibold uppercase tracking-wider text-navy/70">
                  Other ways to reach me
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
                      href="tel:+447446136611"
                    >
                      07446 136611
                    </a>
                    <span className="ml-1 text-warm-grey-light">
                      (text or call)
                    </span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-warm-grey">
                  Email or text. I reply the same day, usually within a few
                  hours.
                </p>
              </div>

              <div className="rounded-xl2 bg-soft-yellow/40 p-6 sm:p-7">
                <h3 className="text-[15px] font-semibold uppercase tracking-wider text-navy/70">
                  What happens next
                </h3>
                <ol className="mt-4 space-y-3 text-[15px] leading-relaxed text-navy/90">
                  {[
                    "You send your details. (You're here. This is the hard part.)",
                    "I reply the same day to confirm a time that works for you.",
                    "You come in for your free 55-minute first session.",
                  ].map((s, i) => (
                    <li key={i} className="flex gap-3">
                      <span
                        className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-navy text-cream text-[12px] font-semibold"
                        aria-hidden="true"
                      >
                        {i + 1}
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <Testimonial
                tone="cream"
                quote={
                  <>
                    &ldquo;Sending the first message was the scariest part.
                    Ruth replied within an hour, no fuss, just a time. After
                    that the rest was easy.&rdquo;
                  </>
                }
                attribution="Beth"
                context="36"
              />

              <div className="rounded-xl2 bg-cream p-6 shadow-soft sm:p-7">
                <h3 className="text-[15px] font-semibold uppercase tracking-wider text-navy/70">
                  Where to find us
                </h3>
                <address className="mt-3 not-italic text-[15px] leading-relaxed text-navy/90">
                  Cranberry Wellbeing Centre
                  <br />
                  Eastleigh, Hampshire
                  <br />
                  Opposite The Point
                </address>
                <p className="mt-3 text-sm text-warm-grey">
                  Free parking right outside. No permits or meters.
                </p>
                <div className="mt-5">
                  <ImagePlaceholder
                    label="Cranberry Wellbeing Centre, Eastleigh"
                    ratio="wide"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  );
}
