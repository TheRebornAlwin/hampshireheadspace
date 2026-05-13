import Container from "@/components/Container";
import Button from "@/components/Button";
import Section from "@/components/Section";
import ChairsIllustration from "@/components/illustrations/ChairsIllustration";
import CloudBlob from "@/components/illustrations/CloudBlob";
import Birds from "@/components/illustrations/Birds";
import Sun from "@/components/illustrations/Sun";
import Sparkles from "@/components/illustrations/Sparkles";
import LeafFloat from "@/components/illustrations/LeafFloat";
import Mountains from "@/components/illustrations/Mountains";
import FadeIn from "@/components/FadeIn";

const HERO_IMAGE_URL = "/hero-tangled-yarn.webp";

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
              <p className="mx-auto mt-6 max-w-xl text-pretty text-center text-[17px] leading-relaxed text-navy/85 sm:text-[19px] lg:mx-0 lg:text-left">
                Private counselling in Eastleigh for adults who&rsquo;d like a
                calmer, kinder way through.
              </p>
            </FadeIn>
            <FadeIn delay={240}>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
                <Button href="/contact/" size="lg">
                  Get in touch
                </Button>
              </div>
            </FadeIn>

            {/* Trust micro-badges */}
            <FadeIn delay={300}>
              <ul className="mt-7 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[13px] text-navy/75 sm:text-[14px] lg:justify-start">
                {[
                  { t: "BACP registered" },
                  { t: "First session – no fee" },
                  { t: "Same-day reply", smOnly: true },
                ].map((item) => (
                  <li
                    key={item.t}
                    className={`items-center gap-1.5 ${item.smOnly ? "hidden sm:flex" : "flex"}`}
                  >
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
                    <span className="font-medium">{item.t}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <div className="lg:col-span-5">
            <FadeIn delay={120}>
              <div className="relative mx-auto w-full max-w-xs sm:max-w-md lg:max-w-none">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(251,241,200,0.55),transparent_70%)]"
                />
                <div
                  aria-hidden="true"
                  className="absolute -top-3 -right-2 h-16 w-16 rounded-full bg-soft-yellow shadow-soft sm:h-20 sm:w-20"
                  style={{ animation: "floatSoft 12s ease-in-out infinite" }}
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-2 -left-3 h-12 w-12 rounded-full bg-soft-blue-strong/80 shadow-soft sm:h-16 sm:w-16"
                  style={{ animation: "floatSoft 16s ease-in-out 0.5s infinite" }}
                />
                <div
                  aria-hidden="true"
                  className="absolute bottom-6 -left-1 h-6 w-6 rounded-full bg-[#FFB0C0] shadow-soft sm:h-8 sm:w-8"
                  style={{ animation: "floatSoft 18s ease-in-out 1.5s infinite" }}
                />
                <img
                  src={HERO_IMAGE_URL}
                  alt="A counsellor in a soft blue chair gently holding the loose end of a tangled blue and yellow ball of yarn."
                  width={900}
                  height={820}
                  className="relative h-auto w-full animate-float-soft"
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

      {/* HEADLINER QUOTE — moved up per Ruth's request */}
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

      {/* SECTION — CAN TALKING TO SOMEONE HELP? (Ruth's exact prose, fully visible) */}
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
            <h2 className="mx-auto mt-4 max-w-3xl text-center text-balance text-[1.65rem] font-semibold leading-tight text-navy sm:text-[2.1rem]">
              Life can be difficult, and I understand that.
            </h2>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="mx-auto mt-8 max-w-prose space-y-5 text-center text-[17px] leading-relaxed text-navy/85 sm:text-[18px]">
              <p>
                We can&rsquo;t always cope on our own and at times may need
                additional support.
              </p>
              <p>
                The therapeutic relationship aims to give that support.
              </p>
              <p>
                At times we may all struggle with stresses, strains,
                challenges, difficulties, loss and change. In a fast changing
                and sometimes confusing world many of us may struggle to feel
                connected; with ourselves, with others and within society and
                during these times it can be helpful to talk about our
                thoughts, our feelings and our emotions.
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

      {/* THE ROOM — Ruth's actual counselling room */}
      <section className="relative overflow-hidden bg-cream py-12 sm:py-16">
        <Container size="wide">
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <img
                src="/room.webp"
                alt="The counselling room at the Cranberry Wellbeing Centre — soft chairs, a window, a lamp, plants"
                width={1600}
                height={2133}
                className="h-auto w-full rounded-xl2 shadow-soft-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* SECTION — COMPASSION. CONNECTION. CARE. */}
      <Section tone="yellow-strong" spacing="default" className="relative overflow-hidden">
        <CloudBlob
          variant="yellow"
          className="pointer-events-none absolute -top-8 right-[-4rem] h-36 w-72 opacity-30 animate-drift-slow"
        />
        <Container size="wide">
          <FadeIn>
            <p className="text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-navy/55">
              How I work
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-center text-balance text-[1.65rem] font-semibold leading-tight text-navy sm:text-[2.1rem]">
              Compassion. Connection. Care.
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Compassion.",
                d: "You&rsquo;re carrying things that nobody around you has seen. In our hour together you don&rsquo;t have to soften any of it.",
              },
              {
                t: "Connection.",
                d: "Counselling that works is much less a technique, and much more a real human noticing what you&rsquo;re saying, and what you&rsquo;re not quite saying.",
              },
              {
                t: "Care.",
                d: "The room is comfortable, your time starts properly when you sit down, I take supervision seriously, and I won&rsquo;t take you for granted.",
              },
            ].map((v, i) => (
              <FadeIn key={v.t} delay={i * 80}>
                <div className="h-full rounded-xl2 bg-cream p-7 text-center shadow-soft sm:p-8">
                  <h3 className="text-[1.85rem] font-bold leading-tight tracking-tight text-navy sm:text-[2.2rem]">
                    {v.t}
                  </h3>
                  <p
                    className="mt-3 text-[15px] leading-relaxed text-navy/80 sm:text-[16px]"
                    dangerouslySetInnerHTML={{ __html: v.d }}
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* SECTION — ABOUT ME (slim intro, links to full page) */}
      <Section tone="cream" spacing="default" className="relative overflow-hidden">
        <Sparkles className="pointer-events-none absolute top-10 right-[6%] h-24 w-40 opacity-60 animate-twinkle" />
        <Container>
          <FadeIn>
            <p className="text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-navy/55">
              About me
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <div className="relative mx-auto mt-5 w-[210px] sm:w-[240px]">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-full bg-soft-yellow/55 blur-sm"
              />
              <div
                aria-hidden="true"
                className="absolute -inset-1.5 rounded-full bg-soft-blue/40"
              />
              <img
                src="/ruth-headshot.webp?v=7"
                alt="Ruth, the counsellor at Hampshire Headspace"
                width={520}
                height={520}
                className="relative h-auto w-full rounded-full object-cover shadow-soft-lg ring-2 ring-cream"
                loading="lazy"
                decoding="async"
              />
            </div>
          </FadeIn>
          <FadeIn delay={140}>
            <h2 className="mx-auto mt-7 max-w-2xl text-center text-balance text-[1.75rem] font-semibold leading-tight text-navy sm:text-[2.25rem]">
              I&rsquo;m Ruth.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-[17px] leading-relaxed text-navy/85 sm:text-[18px]">
              Compassion, connection and care are important to me, so I base
              my practice on these principles.
            </p>
            <div className="mt-6 flex justify-center">
              <Button href="/about/" variant="secondary" size="md">
                About me
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* SECTION — WHAT COUNSELLING CAN SUPPORT */}
      <Section tone="blue-strong" spacing="default" className="relative overflow-hidden">
        <CloudBlob
          variant="blue"
          className="pointer-events-none absolute -top-6 left-[-4rem] h-32 w-72 opacity-20 animate-drift-slower"
        />
        <LeafFloat className="pointer-events-none absolute -bottom-4 right-[3%] h-36 w-36 opacity-60 animate-float-soft" />
        <Container size="wide">
          <FadeIn>
            <h2 className="mx-auto max-w-3xl text-center text-balance text-[1.75rem] font-semibold leading-tight text-navy sm:text-[2.25rem]">
              Counselling can support people experiencing&hellip;
            </h2>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="mx-auto mt-8 max-w-4xl rounded-xl2 bg-cream p-6 shadow-soft sm:p-8">
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Anxiety",
                  "Depression",
                  "Stress and overwhelm",
                  "Panic attacks",
                  "Anger and emotional regulation",
                  "Low self-esteem and confidence",
                  "Low mood and sadness",
                  "Loneliness and isolation",
                  "Family and friendship difficulties",
                  "Relationship difficulties",
                  "Separation and divorce",
                  "Loss and bereavement",
                  "Identity-related concerns",
                  "Life transitions and adjustment",
                  "Work-related stress and burnout",
                  "Obsessive Compulsive Disorder (OCD)",
                  "Suicidal thoughts",
                  "Long-term health conditions",
                  "&hellip;and life in general",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-soft-blue/25 px-3.5 py-1.5 text-[14px] text-navy/85 sm:text-[15px]"
                    dangerouslySetInnerHTML={{ __html: tag }}
                  />
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="mx-auto mt-8 max-w-2xl text-center text-balance text-[18px] font-medium leading-snug text-navy sm:text-[22px]">
              There is no issue too big or too small.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[16px] leading-relaxed text-navy/80 sm:text-[17px]">
              Therapy is not only for those with specific issues. It can also
              be helpful for anyone who would like to learn more about
              themselves and their relationships.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/services/" variant="secondary">
                See services
              </Button>
            </div>
          </FadeIn>
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
