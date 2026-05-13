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
    "A comfortable and quiet counselling room at the Cranberry Wellbeing Centre in Eastleigh, opposite The Point Arts and Performance Centre. Free parking.",
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
              <p className="mx-auto mt-5 max-w-xl text-center text-pretty text-[16px] leading-relaxed text-navy/85 sm:text-[18px]">
                I offer a comfortable and quiet counselling room at the
                Cranberry Wellbeing Centre in Eastleigh, located directly
                opposite the Point Arts and Performance Centre. Free parking is
                available.
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
                      href="tel:+447843114396"
                    >
                      07843 114396
                    </a>
                    <span className="ml-1 text-warm-grey-light">
                      (text) or message
                    </span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-warm-grey">
                  Please email or leave a text mentioning how and when you
                  would like to be contacted, and I will usually get back to
                  you on the same day.
                </p>
              </div>

              <div className="rounded-xl2 bg-cream p-6 shadow-soft sm:p-7">
                <h3 className="text-[15px] font-semibold uppercase tracking-wider text-navy/70">
                  Where to find us
                </h3>
                <address className="mt-3 not-italic text-[15px] leading-relaxed text-navy/90">
                  <span className="font-semibold text-navy">Cranberry Wellbeing Centre</span>
                  <br />
                  Eastleigh, Hampshire
                  <br />
                  Opposite The Point
                </address>
                <p className="mt-3 text-sm text-warm-grey">
                  Free parking is right outside!
                </p>
                <div className="mt-5 space-y-3">
                  <img
                    src="/cranberry.webp"
                    alt="Cranberry Wellbeing Centre, Eastleigh — the green door entrance"
                    width={1024}
                    height={1024}
                    className="h-auto w-full rounded-xl2 shadow-soft"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="/room.webp"
                    alt="The counselling room — soft chairs, a window, a lamp, plants"
                    width={1600}
                    height={2133}
                    className="h-auto w-full rounded-xl2 shadow-soft"
                    loading="lazy"
                    decoding="async"
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
