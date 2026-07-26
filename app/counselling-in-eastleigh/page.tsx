import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import CloudBlob from "@/components/illustrations/CloudBlob";
import { SITE_URL, business } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Counselling in Eastleigh",
  description:
    "Private counselling in Eastleigh, Hampshire with Ruth Fleming, a BACP-registered counsellor. In person in central Eastleigh, or online. The first 50-minute session is free.",
  alternates: { canonical: "/counselling-in-eastleigh" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Counselling in Eastleigh",
  serviceType: "Counselling",
  url: `${SITE_URL}/counselling-in-eastleigh/`,
  description:
    "Private, in-person and online counselling in Eastleigh, Hampshire. BACP-registered. First 50-minute session free.",
  provider: {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#business`,
    name: business.name,
  },
  areaServed: { "@type": "Place", name: "Eastleigh, Hampshire" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Counselling in Eastleigh",
      item: `${SITE_URL}/counselling-in-eastleigh/`,
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="relative overflow-hidden bg-cream pt-12 pb-4 sm:pt-16">
        <CloudBlob
          variant="yellow"
          className="pointer-events-none absolute -top-12 right-[-5rem] h-44 w-72 opacity-25 animate-drift-slow"
        />
        <Container>
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-navy/55">
              Eastleigh, Hampshire
            </p>
            <h1 className="mt-3 max-w-3xl text-balance text-[2rem] font-semibold leading-[1.15] text-navy sm:text-[2.6rem]">
              Counselling in Eastleigh
            </h1>
            <p className="mt-5 max-w-prose text-[17px] leading-relaxed text-navy/85 sm:text-[18px]">
              Private counselling with Ruth Fleming, a BACP-registered
              humanistic counsellor based in the centre of Eastleigh. Sessions
              are available in person in a comfortable, quiet room in central
              Eastleigh, or online from wherever you feel most comfortable. The
              first 50-minute session is free.
            </p>
          </FadeIn>
        </Container>
      </section>

      <Section tone="cream" spacing="default">
        <Container>
          <FadeIn>
            <div className="max-w-prose space-y-5 text-[16px] leading-relaxed text-navy/85 sm:text-[17px]">
              <p>
                At times we may all struggle with stresses, strains, challenges,
                difficulties, loss and change. When that happens it can be
                helpful to talk things through with someone outside of your own
                circle. Counselling offers a space to slow down, make sense of
                what you are carrying, and find a way forward that feels like
                yours.
              </p>
              <p>
                I offer a space which is safe, welcoming and non-judgmental, in
                which you can feel secure and supported. We work together at a
                pace that suits you, and we build a trusting relationship so
                that you can work through whatever you are experiencing. There
                is no issue too big or too small.
              </p>
              <h2 className="pt-2 text-[1.3rem] font-semibold leading-snug text-navy sm:text-[1.5rem]">
                Where to find me in Eastleigh
              </h2>
              <p>
                I see clients in a comfortable and quiet room in central
                Eastleigh. Free parking is available, which spares you the
                small but genuine stress of a meter running while you are
                trying to focus on the work. If you are travelling from
                Chandler&rsquo;s Ford, Southampton, Hedge End or Romsey, it is
                an easy drive. I also work from a room in Winnall in
                Winchester, if that suits you better.
              </p>
              <h2 className="pt-2 text-[1.3rem] font-semibold leading-snug text-navy sm:text-[1.5rem]">
                Fees
              </h2>
              <p>
                The initial session is free and carries no obligation, and
                gives us an opportunity to meet and discuss your needs. After
                that, sessions are &pound;50 face to face and &pound;40 online,
                each lasting 50 minutes, usually weekly. Counselling can be
                short term, around six to twelve sessions, or longer term. We
                decide together.
              </p>
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact/">Get in touch</Button>
              <Button href="/services/" variant="secondary">
                See services and fees
              </Button>
            </div>
            <p className="mt-8 text-[15px] leading-relaxed text-warm-grey">
              Related: {" "}
              <a className="underline hover:text-navy" href="/anxiety-counselling-eastleigh/">
                anxiety counselling in Eastleigh
              </a>
              {" "}and{" "}
              <a className="underline hover:text-navy" href="/online-counselling-hampshire/">
                online counselling across Hampshire
              </a>
              .
            </p>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
