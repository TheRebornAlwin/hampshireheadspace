import Container from "@/components/Container";
import Button from "@/components/Button";
import Section from "@/components/Section";
import ChairsIllustration from "@/components/illustrations/ChairsIllustration";
import CloudBlob from "@/components/illustrations/CloudBlob";
import Birds from "@/components/illustrations/Birds";
import Sun from "@/components/illustrations/Sun";
import Sparkles from "@/components/illustrations/Sparkles";
import Mountains from "@/components/illustrations/Mountains";
import FadeIn from "@/components/FadeIn";

function Heart({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <path
        d="M16 27s-9-5.5-9-12a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.5-9 12-9 12z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-32">
        <CloudBlob
          variant="blue"
          className="pointer-events-none absolute -top-16 -left-24 h-72 w-[28rem] opacity-15 animate-drift-slow"
        />
        <CloudBlob
          variant="yellow"
          className="pointer-events-none absolute -bottom-20 right-[-6rem] h-72 w-[26rem] opacity-25"
        />
        <div
          className="pointer-events-none absolute top-[14%] left-0 right-0 h-16 animate-fly-across"
          aria-hidden="true"
        >
          <Birds className="h-16 w-56 opacity-70" count={3} />
        </div>

        <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-12 lg:gap-12">
          <div className="text-center lg:col-span-7 lg:pt-6 lg:text-left">
            <FadeIn>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-soft-yellow/60 px-4 py-1.5 text-[13px] font-medium text-navy/85">
                <span className="h-1.5 w-1.5 rounded-full bg-navy/80" />
                Private counselling, Eastleigh
              </p>
            </FadeIn>
            <FadeIn delay={80}>
              <h1 className="text-balance text-[2.1rem] font-bold leading-[1.08] tracking-tight text-navy sm:text-[2.8rem] lg:text-[3.4rem]">
                A space to slow down and connect&hellip;
              </h1>
            </FadeIn>
            <FadeIn delay={160}>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
                <Button href="/contact/" size="lg">
                  Get in touch
                </Button>
              </div>
            </FadeIn>

            {/* Trust micro-badges — all three visible on mobile per Ruth */}
            <FadeIn delay={240}>
              <ul className="mt-7 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[13px] text-navy/75 sm:text-[14px] lg:justify-start">
                {[
                  "BACP registered",
                  "First session – no fee",
                  "Same-day reply",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-1.5">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      className="h-4 w-4 text-navy"
                    >
                      <path
                        d="M4 10.5l3.5 3.5 8.5-9"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="font-medium">{t}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* HERO LOGO — using Ruth's provided combo (icon + wordmark in one image) */}
          <div className="lg:col-span-5">
            <FadeIn delay={120}>
              <div className="relative mx-auto w-full max-w-[300px] sm:max-w-sm lg:max-w-none">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(251,241,200,0.55),transparent_70%)]"
                />
                {/* Dots: hidden on mobile so they don't sit over the wordmark; only show from sm+ where there's room */}
                <div
                  aria-hidden="true"
                  className="absolute -top-3 -right-2 hidden h-16 w-16 rounded-full bg-soft-yellow shadow-soft sm:block sm:h-20 sm:w-20"
                  style={{ animation: "floatSoft 12s ease-in-out infinite" }}
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-2 -left-3 hidden h-12 w-12 rounded-full bg-soft-blue-strong/80 shadow-soft sm:block sm:h-16 sm:w-16"
                  style={{ animation: "floatSoft 16s ease-in-out 0.5s infinite" }}
                />
                <div
                  aria-hidden="true"
                  className="absolute bottom-6 -left-1 hidden h-6 w-6 rounded-full bg-[#FFB0C0] shadow-soft sm:block sm:h-8 sm:w-8"
                  style={{ animation: "floatSoft 18s ease-in-out 1.5s infinite" }}
                />
                <img
                  src="/logo.webp"
                  alt="Hampshire Headspace Counselling"
                  width={1080}
                  height={780}
                  className="relative mx-auto h-auto w-full animate-float-soft"
                  loading="eager"
                  // @ts-expect-error fetchpriority is valid HTML
                  fetchpriority="high"
                  decoding="async"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION — CAN TALKING TO SOMEONE HELP? Paragraphs reordered per Ruth */}
      <Section tone="blue-strong" spacing="default" className="relative overflow-hidden">
        <CloudBlob
          variant="yellow"
          className="pointer-events-none absolute -top-12 right-[-4rem] h-44 w-72 opacity-25 animate-drift-slow"
        />
        <Container>
          <FadeIn>
            <p className="text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-navy/55">
              Can talking to someone help?
            </p>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="mx-auto mt-8 max-w-prose space-y-5 text-center text-[17px] leading-relaxed text-navy/85 sm:text-[18px]">
              <p>
                At times we may all struggle with stresses, strains,
                challenges, difficulties, loss and change. In a fast changing
                and sometimes confusing world many of us may struggle to feel
                connected; with ourselves, with others and within society and
                during these times it can be helpful to talk about our
                thoughts, our feelings and our emotions.
              </p>
              <p className="text-balance text-[1.35rem] font-semibold leading-snug text-navy sm:text-[1.6rem]">
                Life can be difficult, and I understand that.
              </p>
              <p>
                We can&rsquo;t always cope on our own and at times may need
                additional support. The therapeutic relationship aims to give
                that support.
              </p>
              <p>
                Beginning therapy and choosing a therapist can be challenging.
                I offer a space which is safe, welcoming, and non-judgmental in
                which you can feel secure and supported. A space where there
                are no expectations. We will work together at a pace that suits
                you, and we will build a trusting relationship, so that you can
                work through any difficulties or challenges that you are
                experiencing.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* YELLOW BANNER — moved DOWN to here per Ruth, sits AFTER the talking text */}
      <section className="relative overflow-hidden bg-soft-yellow py-14 sm:py-20">
        <Sparkles className="pointer-events-none absolute top-6 right-[8%] h-20 w-32 opacity-70 animate-twinkle" />
        <Sparkles className="pointer-events-none absolute bottom-6 left-[6%] h-16 w-28 opacity-50 animate-twinkle" />
        <Container>
          <FadeIn>
            <p className="mx-auto max-w-3xl text-center text-balance font-semibold leading-[1.18] tracking-tight text-navy text-[1.55rem] sm:text-[2rem] lg:text-[2.4rem]">
              People who need support sometimes look a lot like people who don&rsquo;t need support.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* YARN PHOTO — Yarn 2 (softer colours) */}
      <section className="relative overflow-hidden bg-cream py-12 sm:py-16">
        <Container size="wide">
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <img
                src="/hero-tangled-yarn.webp"
                alt="Two figures sitting in soft blue chairs — one with a tangled ball of yarn for a head, the other calmly holding the loose end."
                width={1254}
                height={1254}
                className="h-auto w-full rounded-xl2"
                loading="lazy"
                decoding="async"
              />
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* AT THE HEART OF COUNSELLING — was "How I work", reordered Connection/Compassion/Care */}
      <Section tone="yellow-strong" spacing="default" className="relative overflow-hidden">
        <CloudBlob
          variant="yellow"
          className="pointer-events-none absolute -top-8 right-[-4rem] h-36 w-72 opacity-30 animate-drift-slow"
        />
        {/* Subtle abstract hearts echoing the logo */}
        <Heart className="pointer-events-none absolute top-6 left-[5%] h-10 w-10 text-navy/15 sm:h-14 sm:w-14" />
        <Heart className="pointer-events-none absolute bottom-6 right-[6%] h-8 w-8 text-navy/20 sm:h-12 sm:w-12" />
        <Container size="wide">
          <FadeIn>
            <p className="text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-navy/55">
              At the heart of counselling
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-center text-balance text-[1.65rem] font-semibold leading-tight text-navy sm:text-[2.1rem]">
              Connection. Compassion. Care.
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-3 md:items-stretch">
            {[
              {
                t: "Connection.",
                d: "Being met as you are, beyond roles, expectations, or appearances. Where the difficult, messy, and human parts of experience can have space.",
              },
              {
                t: "Compassion.",
                d: "Understanding you within your own frame of reference. We are all shaped by different beginnings, by different experiences of love, loss, safety, survival, pressure and opportunity, or the absence of these things. We all struggle differently. We all protect ourselves differently. We all use different coping strategies.",
              },
              {
                t: "Care.",
                d: "Holding the relationship with consistency, respect, and professional responsibility.",
              },
            ].map((v, i) => (
              <FadeIn key={v.t} delay={i * 80}>
                <div className="relative h-full rounded-xl2 bg-cream p-7 text-center shadow-soft sm:p-8">
                  <Heart className="absolute -top-3 left-1/2 h-7 w-7 -translate-x-1/2 text-soft-yellow drop-shadow-sm" />
                  <h3 className="text-[1.85rem] font-bold leading-tight tracking-tight text-navy sm:text-[2.2rem]">
                    {v.t}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-navy/80 sm:text-[16px]">
                    {v.d}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION — FINAL CTA */}
      <section className="relative overflow-hidden bg-soft-yellow py-16 sm:py-24 lg:py-32">
        <Sun
          className="pointer-events-none absolute top-12 right-[6%] h-32 w-32 opacity-65 animate-float-soft"
          withRays
        />
        <div
          className="pointer-events-none absolute top-24 left-0 right-0 h-12 animate-fly-across"
          style={{ animationDuration: "100s" }}
          aria-hidden="true"
        >
          <Birds className="h-12 w-52 opacity-75" count={3} />
        </div>
        <Mountains className="pointer-events-none absolute bottom-0 left-0 right-0 h-32" />

        <Container>
          <FadeIn>
            <div className="relative mx-auto max-w-2xl">
              <div
                aria-hidden="true"
                className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-[#FFD9B7] shadow-soft sm:-top-10 sm:-right-10 sm:h-44 sm:w-44"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-5 -left-4 h-20 w-20 rounded-full bg-[#FFB0C0] shadow-soft sm:-bottom-8 sm:-left-8 sm:h-28 sm:w-28"
              />

              <div className="relative rounded-[28px] bg-cream p-8 text-center shadow-soft-lg sm:p-12">
                <ChairsIllustration className="mx-auto mb-6 h-auto w-full max-w-[260px] sm:max-w-xs" />
                <h2 className="text-balance text-[1.7rem] font-semibold leading-[1.15] tracking-tight text-navy sm:text-[2.25rem]">
                  May I encourage you to take that first step with me today?
                </h2>
                <p className="mx-auto mt-5 max-w-lg text-balance text-[16px] leading-relaxed text-navy/85 sm:text-[18px]">
                  Send me a short message and I&rsquo;ll get back to you the
                  same day.
                </p>
                <div className="mt-8 flex justify-center">
                  <Button href="/contact/" size="lg">
                    Get in touch
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
