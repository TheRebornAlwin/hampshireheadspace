import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import CloudBlob from "@/components/illustrations/CloudBlob";
import { SITE_URL, business } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Online counselling in Hampshire",
  description:
    "Online counselling across Hampshire and the UK with Ruth Fleming, a BACP-registered counsellor. Secure video sessions from the comfort of home. First session free.",
  alternates: { canonical: "/online-counselling-hampshire" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Online counselling in Hampshire",
  serviceType: "Online counselling",
  url: `${SITE_URL}/online-counselling-hampshire/`,
  description:
    "Online counselling by secure video across Hampshire and the UK. BACP-registered. First 50-minute session free.",
  provider: {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#business`,
    name: business.name,
  },
  areaServed: { "@type": "Place", name: "Hampshire, United Kingdom" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Online counselling in Hampshire",
      item: `${SITE_URL}/online-counselling-hampshire/`,
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
          className="pointer-events-none absolute -top-12 left-[-5rem] h-44 w-72 opacity-25 animate-drift-slower"
        />
        <Container>
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-navy/55">
              Across Hampshire and the UK
            </p>
            <h1 className="mt-3 max-w-3xl text-balance text-[2rem] font-semibold leading-[1.15] text-navy sm:text-[2.6rem]">
              Online counselling in Hampshire
            </h1>
            <p className="mt-5 max-w-prose text-[17px] leading-relaxed text-navy/85 sm:text-[18px]">
              The same counselling, from the comfort of your own home. I am Ruth
              Fleming, a BACP-registered counsellor based in Eastleigh, offering
              online sessions by secure video to people across Hampshire and the
              wider UK. The first 50-minute session is free.
            </p>
          </FadeIn>
        </Container>
      </section>

      <Section tone="cream" spacing="default">
        <Container>
          <FadeIn>
            <div className="max-w-prose space-y-5 text-[16px] leading-relaxed text-navy/85 sm:text-[17px]">
              <p>
                Online counselling makes it easier to fit support around a busy
                life. There is no travel, no parking, and no waiting room. You
                simply need a private space and a reliable connection. For many
                people, talking from a familiar room makes it easier to open up.
              </p>
              <p>
                The work itself is the same as it would be in person. I offer a
                space which is safe, welcoming and non-judgmental, in which you
                can feel secure and supported. We work together at a pace that
                suits you, and we build a trusting relationship so that you can
                work through whatever you are experiencing.
              </p>
              <p>
                Online sessions can be a good fit if you live a little further
                out, around Chandler&rsquo;s Ford, Southampton, Hedge End,
                Romsey or Winchester, if your week is unpredictable, or if you
                would simply feel more at ease at home. If you would prefer to
                meet in person, that option is there too.
              </p>
              <h2 className="pt-2 text-[1.3rem] font-semibold leading-snug text-navy sm:text-[1.5rem]">
                Sessions and fees
              </h2>
              <p>
                The initial session is free and carries no obligation, and
                gives us an opportunity to meet and discuss your needs. After
                that, online sessions are &pound;40, each lasting 50 minutes,
                usually weekly. Face-to-face sessions in Eastleigh or
                Winchester are &pound;50.
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
              {" "}and{" "}
              <a className="underline hover:text-navy" href="/blog/online-vs-in-person-counselling/">
                online or in person: which works better?
              </a>
            </p>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
