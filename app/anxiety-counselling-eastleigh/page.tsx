import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import CloudBlob from "@/components/illustrations/CloudBlob";
import { SITE_URL, business } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Anxiety counselling in Eastleigh",
  description:
    "Counselling for anxiety, worry, panic and overwhelm in Eastleigh, Hampshire with a BACP-registered counsellor. In person or online. The first 50-minute session is free.",
  alternates: { canonical: "/anxiety-counselling-eastleigh" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Anxiety counselling in Eastleigh",
  serviceType: "Anxiety counselling",
  url: `${SITE_URL}/anxiety-counselling-eastleigh/`,
  description:
    "Counselling for anxiety, worry, panic and overwhelm in Eastleigh, Hampshire. BACP-registered. First 50-minute session free.",
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
      name: "Anxiety counselling in Eastleigh",
      item: `${SITE_URL}/anxiety-counselling-eastleigh/`,
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
          variant="blue"
          className="pointer-events-none absolute -top-12 right-[-5rem] h-44 w-72 opacity-20 animate-drift-slow"
        />
        <Container>
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-navy/55">
              Eastleigh, Hampshire
            </p>
            <h1 className="mt-3 max-w-3xl text-balance text-[2rem] font-semibold leading-[1.15] text-navy sm:text-[2.6rem]">
              Anxiety counselling in Eastleigh
            </h1>
            <p className="mt-5 max-w-prose text-[17px] leading-relaxed text-navy/85 sm:text-[18px]">
              If worry, panic or a constant sense of overwhelm has become the
              background noise of your days, counselling can help. I am Ruth
              Fleming, a BACP-registered counsellor in Eastleigh, and I offer
              in-person and online sessions. The first 50-minute session is
              free.
            </p>
          </FadeIn>
        </Container>
      </section>

      <Section tone="cream" spacing="default">
        <Container>
          <FadeIn>
            <div className="max-w-prose space-y-5 text-[16px] leading-relaxed text-navy/85 sm:text-[17px]">
              <p>
                Anxiety can show up in many ways. Racing thoughts that will not
                settle. A tight chest or a churning stomach. Trouble sleeping.
                Avoiding the things, or the people, that set it off. Sometimes
                there is an obvious reason and sometimes there is not, which can
                make it feel even harder to explain.
              </p>
              <p>
                You do not have to arrive with it all worked out. Counselling
                gives you a space to slow down and put words to what is
                happening, so that the patterns become clearer and less
                frightening. Over time, that understanding gives you more choice
                in how you respond, rather than feeling carried along by it.
              </p>
              <p>
                I offer a space which is safe, welcoming and non-judgmental. We
                work together at a pace that suits you, and we build a trusting
                relationship so that you can work through whatever you are
                experiencing. There is no issue too big or too small.
              </p>
              <h2 className="pt-2 text-[1.3rem] font-semibold leading-snug text-navy sm:text-[1.5rem]">
                Sessions and fees
              </h2>
              <p>
                Sessions are held in person in a comfortable and quiet room in
                central Eastleigh, with free parking, or online by secure
                video. The initial session is free and carries no obligation.
                After that, sessions are &pound;50 face to face and &pound;40
                online, each lasting 50 minutes.
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
              <a className="underline hover:text-navy" href="/counselling-in-eastleigh/">
                counselling in Eastleigh
              </a>
              ,{" "}
              <a className="underline hover:text-navy" href="/online-counselling-hampshire/">
                online counselling across Hampshire
              </a>
              , and{" "}
              <a className="underline hover:text-navy" href="/blog/anxiety-in-midlife/">
                anxiety in midlife
              </a>
              .
            </p>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
