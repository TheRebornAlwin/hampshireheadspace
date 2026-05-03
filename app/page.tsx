import Link from "next/link";
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
import StepIcon from "@/components/illustrations/StepIcon";
import WaveLines from "@/components/illustrations/WaveLines";
import FAQItem from "@/components/FAQItem";
import FadeIn from "@/components/FadeIn";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import Testimonial from "@/components/Testimonial";
import Typewriter from "@/components/Typewriter";
import Expandable from "@/components/Expandable";

const HERO_IMAGE_URL = "/hero-tangled-yarn.webp";

export default function HomePage() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden pt-4 pb-12 sm:pt-6 sm:pb-24 lg:pt-8 lg:pb-32">
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
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-soft-yellow/60 px-4 py-1.5 text-[13px] font-medium text-navy/85">
                <span className="h-1.5 w-1.5 rounded-full bg-navy/80" />
                Private counselling, Eastleigh
              </p>
            </FadeIn>
            <FadeIn delay={80}>
              <h1 className="text-balance text-[2rem] font-bold leading-[1.08] tracking-tight text-navy sm:text-[2.6rem] lg:text-[3.05rem]">
                <Typewriter text="Life is a journey, and sometimes the journey is easier when someone walks with you :)" />
              </h1>
            </FadeIn>
            <FadeIn delay={160}>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-center text-[17px] leading-relaxed text-navy/85 sm:text-[19px] lg:mx-0 lg:text-left">
                Private counselling in Eastleigh for adults who&rsquo;d like a
                calmer, kinder way through. Your first 55-minute online session
                is free!
              </p>
            </FadeIn>
            <FadeIn delay={240}>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
                <Button href="/contact/" size="lg">
                  Get in touch
                </Button>
                <Link
                  href="#what-its-like"
                  className="group inline-flex items-center gap-1.5 text-[15px] font-semibold text-navy underline decoration-navy/40 decoration-2 underline-offset-4 transition-colors hover:decoration-navy"
                >
                  Or read what the first session is actually like
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5"
                  >
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </Link>
              </div>
            </FadeIn>

            {/* Trust micro-badges */}
            <FadeIn delay={300}>
              <ul className="mt-7 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[13px] text-navy/75 sm:text-[14px] lg:justify-start">
                {[
                  { t: "BACP registered" },
                  { t: "Free first 55-min online session" },
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
                {/* Floating accent shapes around the hero image */}
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
                  alt="A counsellor in a soft blue chair gently holding the loose end of a tangled blue and yellow ball of yarn that sits where the other person's head would be."
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

      {/* IMAGE BREAK — Hampshire / Eastleigh scene (placeholder for Ruth's photo #4) */}
      <section className="relative overflow-hidden bg-cream pb-10 sm:pb-14">
        <Container size="wide">
          <FadeIn>
            <ImagePlaceholder
              label="A wide Hampshire scene — Lakeside Country Park, Itchen Way, or similar"
              ratio="wide"
            />
            <p className="mx-auto mt-3 max-w-xl text-center text-xs text-warm-grey-light">
              Goes here once Ruth sends a calming local landscape — sets the &ldquo;real place&rdquo; feel before the page goes into prose.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* SECTION 1.5 — CAN TALKING HELP? (preview + expandable) */}
      <Section tone="blue-strong" spacing="tight" className="relative overflow-hidden">
        <CloudBlob
          variant="yellow"
          className="pointer-events-none absolute -top-12 right-[-4rem] h-44 w-72 opacity-25 animate-drift-slow"
        />
        <Container>
          <Expandable
            preview={
              <>
                <FadeIn>
                  <p className="text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-navy/55">
                    Can talking help?
                  </p>
                  <h2 className="mx-auto mt-4 max-w-3xl text-center text-balance text-[1.65rem] font-semibold leading-tight text-navy sm:text-[2.1rem]">
                    Life can be difficult, and I understand that.
                  </h2>
                </FadeIn>
                <FadeIn delay={120}>
                  <p className="mx-auto mt-7 max-w-2xl text-center text-balance text-[19px] font-medium leading-snug text-navy sm:text-[22px]">
                    We can&rsquo;t always cope on our own, and at times may need additional support.
                  </p>
                  <p className="mx-auto mt-3 max-w-xl text-center text-[14px] uppercase tracking-[0.16em] text-navy/55">
                    The therapeutic relationship aims to give that support
                  </p>
                </FadeIn>
              </>
            }
            more={
              <div className="mx-auto max-w-prose space-y-4 text-center text-[17px] leading-relaxed text-navy/85 sm:text-[18px]">
                <p>
                  At times we may all struggle with stresses, strains,
                  challenges, difficulties, loss and change.
                </p>
                <p>
                  In a fast changing and sometimes confusing world many of us
                  may struggle to feel connected; with ourselves, with others
                  and within society. During these times it can be helpful to
                  talk about our thoughts, our feelings and our emotions.
                </p>
                <p>
                  Beginning therapy and choosing a therapist can be challenging.
                </p>
                <p>
                  I offer a space which is safe, welcoming, and non-judgmental
                  in which you can feel secure and supported. A space where
                  there are no expectations.
                </p>
                <p>
                  We will work together at a pace that suits you, and we will
                  build a trusting relationship, so that you can work through
                  any difficulties or challenges that you are experiencing.
                </p>
              </div>
            }
          />
        </Container>
      </Section>

      {/* SECTION 2 — RECOGNITION */}
      <Section tone="cream" className="relative overflow-hidden">
        <CloudBlob
          variant="yellow"
          className="pointer-events-none absolute -top-10 right-[-5rem] h-44 w-72 opacity-25 animate-drift-slower"
        />
        <Sparkles className="pointer-events-none absolute top-12 left-[5%] h-28 w-44 opacity-70 animate-twinkle" />
        <Container>
          <FadeIn>
            <h2 className="text-center text-balance text-[1.75rem] font-semibold leading-tight text-navy sm:text-[2.25rem]">
              You already know.
            </h2>
          </FadeIn>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              {
                line:
                  "You&rsquo;re tired in a way that doesn&rsquo;t lift, even when you do manage to sleep.",
                tone: "cream",
              },
              {
                line:
                  "You&rsquo;re shorter than you mean to be with the people you love, and you carry the guilt the rest of the day.",
                tone: "blue",
              },
              {
                line:
                  "You&rsquo;ve Googled &lsquo;private counsellor&rsquo; more than once, opened the tab, and closed it again.",
                tone: "yellow",
              },
              {
                line:
                  "Underneath all of it, you already know you can&rsquo;t keep going the way you are.",
                tone: "cream",
              },
            ].map((item, i) => {
              const bg =
                item.tone === "blue"
                  ? "bg-soft-blue/15 border-soft-blue-strong/70"
                  : item.tone === "yellow"
                  ? "bg-soft-yellow/40 border-soft-yellow-warm"
                  : "bg-cream border-soft-blue-strong/70";
              return (
                <FadeIn key={i} delay={i * 70}>
                  <p
                    className={`h-full rounded-xl2 border-l-[3px] p-5 text-center text-[16px] leading-relaxed text-navy/85 shadow-soft sm:text-[17px] ${bg}`}
                    dangerouslySetInnerHTML={{ __html: item.line }}
                  />
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={400}>
            <p className="mx-auto mt-12 max-w-2xl text-center text-balance text-[18px] font-medium leading-snug text-navy sm:text-[22px]">
              You&rsquo;re not broken, you&rsquo;re exhausted and carrying more
              than anyone should be carrying alone.
            </p>
          </FadeIn>

          <FadeIn delay={500}>
            <div className="mt-12">
              <Testimonial
                variant="pullquote"
                quote={
                  <>
                    &ldquo;On paper i&rsquo;d not got a bad life. House,
                    husband, two kids, decent job. So why was i crying in the
                    car every morning? ruth was the first person who didn&rsquo;t
                    make me feel stupid for asking that.&rdquo;
                  </>
                }
                attribution="Hannah"
                context="34, Chandler&rsquo;s Ford"
              />
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* HEADLINER QUOTE — full bleed saturated band (modeled on Relate) */}
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

      {/* SECTION 2.5 — ABOUT YOU (preview + expandable) */}
      <Section tone="cream" spacing="tight" className="relative overflow-hidden">
        <CloudBlob
          variant="blue"
          className="pointer-events-none absolute top-12 left-[-5rem] h-44 w-80 opacity-20 animate-drift-slower"
        />
        <LeafFloat className="pointer-events-none absolute -bottom-4 right-[4%] h-36 w-36 opacity-60 animate-float-soft" />
        <Container>
          <Expandable
            preview={
              <>
                <FadeIn>
                  <p className="text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-navy/55">
                    About you
                  </p>
                  <h2 className="mx-auto mt-4 max-w-3xl text-center text-balance text-[1.65rem] font-semibold leading-tight text-navy sm:text-[2.1rem]">
                    A space to slow down and connect with yourself.
                  </h2>
                </FadeIn>
                <FadeIn delay={120}>
                  <p className="mx-auto mt-7 max-w-2xl text-center text-balance text-[19px] font-medium leading-snug text-navy sm:text-[22px]">
                    A freeing journey that will enable you to love, care, nourish and respect yourself, just as you are.
                  </p>
                </FadeIn>
              </>
            }
            more={
              <div className="mx-auto max-w-prose space-y-4 text-center text-[17px] leading-relaxed text-navy/85 sm:text-[18px]">
                <p>
                  Counselling can provide you with an opportunity to slow down
                  and connect with yourself, to grow and to develop so that you
                  may live with more ease and less strain.
                </p>
                <p>
                  During counselling it is likely that you will become more
                  self-aware. You may begin to recognise behaviours and cycles
                  of responding which are no longer helpful, or become more
                  able to let go of outdated ideas of yourself or others.
                </p>
                <p>
                  You may come to terms with what harms you, at the same time
                  as embracing more of what brings joy and fulfilment.
                </p>
                <p>
                  While you cannot always choose what happens in your life, you
                  do have a degree of choice and freedom over how you respond.
                </p>
                <p>
                  The more clarity you have about how you behave and respond to
                  life&rsquo;s challenges, the more you can take ownership and
                  move towards a life that is in line with your fundamental
                  values.
                </p>
              </div>
            }
          />
        </Container>
      </Section>

      {/* SECTION 3 — MECHANISM */}
      <Section tone="blue-strong" className="relative overflow-hidden">
        <CloudBlob
          variant="blue"
          className="pointer-events-none absolute top-8 left-[-5rem] h-40 w-80 opacity-30 animate-drift-slow"
        />
        <LeafFloat className="pointer-events-none absolute -bottom-6 right-[3%] h-40 w-40 opacity-80 animate-float-soft" />
        <Container size="wide">
          <FadeIn>
            <h2 className="mx-auto max-w-3xl text-center text-balance text-[1.75rem] font-semibold leading-tight text-navy sm:text-[2.25rem]">
              Your first session is free
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-center text-[17px] leading-relaxed text-navy/85">
              The first session is a full 55 minutes, online by secure video,
              with no obligation to book again afterwards. It&rsquo;s a chance
              to talk properly and see whether we&rsquo;re a good fit for the
              work you&rsquo;d like to do.
            </p>
          </FadeIn>

          <FadeIn delay={180}>
            <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-3">
              {[
                { k: "55 min", v: "a full counselling hour" },
                { k: "£0", v: "no obligation to come back" },
                { k: "Online", v: "by secure video, from wherever suits" },
              ].map((item) => (
                <div
                  key={item.k}
                  className="rounded-xl2 bg-cream p-5 text-center shadow-soft"
                >
                  <p className="text-[1.5rem] font-semibold leading-none text-navy">
                    {item.k}
                  </p>
                  <p className="mt-1 text-sm text-warm-grey">{item.v}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={260}>
            <div className="mt-8 flex justify-center">
              <Button href="/contact/" size="md">
                Get in touch
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* SECTION 4 — WHAT THE FIRST SESSION IS ACTUALLY LIKE */}
      <Section tone="cream" id="what-its-like" className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute top-24 left-0 right-0 h-12 animate-fly-across"
          style={{ animationDuration: "120s" }}
          aria-hidden="true"
        >
          <Birds className="h-12 w-48 opacity-50" count={2} />
        </div>
        <CloudBlob
          variant="blue"
          className="pointer-events-none absolute bottom-16 right-[-4rem] h-36 w-72 opacity-20 animate-drift-slower"
        />
        <Container size="wide">
          <FadeIn>
            <h2 className="mx-auto max-w-3xl text-center text-balance text-[1.75rem] font-semibold leading-tight text-navy sm:text-[2.25rem]">
              What the first session is actually like
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-warm-grey">
              Most people close the tab because they don&rsquo;t know
              what&rsquo;s about to happen, so here&rsquo;s the whole thing,
              step by step.
            </p>
          </FadeIn>

          <ol className="mt-12 grid gap-4 sm:grid-cols-2">
            {([
              {
                icon: "speech",
                t: "Booking the call",
                d: "Send me a short message through the contact page or by email, and I&rsquo;ll reply the same day with a time and a secure video link.",
                style: "cream",
              },
              {
                icon: "chair",
                t: "Settling in beforehand",
                d: "Find somewhere private and reasonably quiet, with headphones if you have them, and a glass of water nearby if you&rsquo;d like one.",
                style: "blue",
              },
              {
                icon: "arrive",
                t: "We start gently",
                d: "I&rsquo;ll usually open with something like &ldquo;tell me a bit about what brought you here, when you&rsquo;re ready,&rdquo; and we go from there.",
                style: "yellow",
              },
              {
                icon: "heart",
                t: "What you don’t have to do",
                d: "You don&rsquo;t need to know what to say or share everything, and you certainly don&rsquo;t have to be coherent. Pause, cry, ask things, sit quietly, all of it&rsquo;s welcome.",
                style: "cream",
              },
              {
                icon: "lock",
                t: "What stays between us",
                d: "Nothing you say leaves our session, including the brief GDPR-compliant notes I keep, and nothing goes to your GP or insurer unless you specifically ask me to send it.",
                style: "highlight",
              },
            ] as const).map((step, i) => {
              const card =
                step.style === "blue"
                  ? "bg-soft-blue/15"
                  : step.style === "yellow"
                  ? "bg-soft-yellow/35"
                  : step.style === "highlight"
                  ? "bg-cream ring-2 ring-navy/15 shadow-soft-lg"
                  : "bg-cream";
              const iconBg =
                step.style === "blue"
                  ? "bg-cream"
                  : step.style === "yellow"
                  ? "bg-cream"
                  : step.style === "highlight"
                  ? "bg-soft-yellow"
                  : "bg-soft-blue/40";
              return (
                <FadeIn key={i} delay={i * 60}>
                  <li
                    className={`h-full rounded-xl2 p-5 shadow-soft sm:p-6 ${card}`}
                  >
                    <div className="flex flex-col items-center gap-3 text-center">
                      <div
                        className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl2 text-navy ${iconBg}`}
                      >
                        <StepIcon name={step.icon} className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[12px] font-semibold uppercase tracking-wider text-navy/55">
                          Step {i + 1}
                        </p>
                        <h3 className="mt-0.5 text-[17px] font-semibold leading-snug text-navy sm:text-[18px]">
                          {step.t}
                        </h3>
                        <p
                          className="mt-2 text-[15px] leading-relaxed text-navy/80"
                          dangerouslySetInnerHTML={{ __html: step.d }}
                        />
                      </div>
                    </div>
                  </li>
                </FadeIn>
              );
            })}
          </ol>

          <FadeIn delay={450}>
            <div className="mt-10">
              <Testimonial
                variant="pullquote"
                quote={
                  <>
                    &ldquo;I sat in the car for ten minutes before I could
                    make myself go in. By the end of the session I was
                    somehow laughing about something. She just properly
                    listens, you know what I mean?&rdquo;
                  </>
                }
                attribution="Sophie"
                context="39, mum of two"
              />
            </div>
          </FadeIn>

          <FadeIn delay={550}>
            <div className="mt-12 rounded-xl2 border border-soft-blue/50 bg-soft-yellow/30 p-6 text-center sm:p-7">
              <p className="text-balance text-[17px] leading-relaxed text-navy/90 sm:text-[19px]">
                If you&rsquo;ve read this far, something brought you here, and
                the first online session is free.
              </p>
              <div className="mt-5 flex justify-center">
                <Button href="/contact/" size="lg">
                  Get in touch
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* SECTION 5 — ABOUT ME (slim intro on home; full bio lives on About) */}
      <Section tone="cream" spacing="tight" className="relative overflow-hidden">
        <WaveLines
          variant="blue"
          className="pointer-events-none absolute inset-x-0 top-6 h-12 opacity-60"
        />
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
                src="/ruth-headshot.webp?v=5"
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
                More about Ruth
              </Button>
            </div>
          </FadeIn>

          {/* Ruth-in-the-room placeholder (warmer photo #3) */}
          <FadeIn delay={220}>
            <div className="mx-auto mt-10 max-w-3xl">
              <ImagePlaceholder
                label="Ruth in the counselling room — warmer than the studio shot"
                ratio="landscape"
              />
              <p className="mt-3 text-center text-xs text-warm-grey-light">
                A second Ruth photo, taken in the room, looking off-camera — sits below the headshot here to humanise the section.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* SECTION 5.5 — COMPASSION. CONNECTION. CARE. (modeled on Dr Jane Halsall's triple) */}
      <Section tone="yellow-strong" spacing="default" className="relative overflow-hidden">
        <CloudBlob
          variant="yellow"
          className="pointer-events-none absolute -top-8 right-[-4rem] h-36 w-72 opacity-30 animate-drift-slow"
        />
        <Container size="wide">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Compassion.",
                d: "You&rsquo;re carrying things that nobody around you has fully seen. In our hour together you don&rsquo;t have to soften any of it so I can cope.",
              },
              {
                t: "Connection.",
                d: "Counselling that works is much less a technique being done to you, and much more a real human noticing what you&rsquo;re saying, and what you&rsquo;re not quite saying.",
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

      {/* SECTION 5.7 — WHAT COUNSELLING CAN HELP WITH (Ruth's full tag list) */}
      <Section tone="cream" spacing="default" className="relative overflow-hidden">
        <CloudBlob
          variant="blue"
          className="pointer-events-none absolute -top-6 left-[-4rem] h-32 w-72 opacity-20 animate-drift-slower"
        />
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
          </FadeIn>
        </Container>
      </Section>

      {/* WHERE YOU'LL FIND ME — image grid (placeholders for room + exterior) */}
      <Section tone="cream" spacing="tight" className="relative overflow-hidden">
        <Container size="wide">
          <FadeIn>
            <p className="text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-navy/55">
              Where you&rsquo;ll find me
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-center text-balance text-[1.5rem] font-semibold leading-tight text-navy sm:text-[1.9rem]">
              The Cranberry Wellbeing Centre, Eastleigh.
            </h2>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="mx-auto mt-8 grid max-w-4xl gap-5 sm:grid-cols-2">
              <div>
                <ImagePlaceholder
                  label="The counselling room — two soft chairs, a window, a box of tissues"
                  ratio="landscape"
                />
                <p className="mt-2 text-center text-xs text-warm-grey-light">
                  Photo #1: the room itself, wide shot, natural window light.
                </p>
              </div>
              <div>
                <ImagePlaceholder
                  label="Cranberry Wellbeing Centre, from the street, opposite The Point"
                  ratio="landscape"
                />
                <p className="mt-2 text-center text-xs text-warm-grey-light">
                  Photo #2: the building exterior — trust + location proof.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* SECTION 6 — PRACTICAL INFO */}
      <Section tone="blue-strong" className="relative overflow-hidden">
        <CloudBlob
          variant="yellow"
          className="pointer-events-none absolute -top-8 right-[10%] h-32 w-60 opacity-40 animate-drift-slow"
        />
        <CloudBlob
          variant="blue"
          className="pointer-events-none absolute bottom-4 left-[-4rem] h-32 w-72 opacity-25 animate-drift-slower"
        />
        <Container size="wide">
          <FadeIn>
            <h2 className="mx-auto max-w-3xl text-center text-balance text-[1.75rem] font-semibold leading-tight text-navy sm:text-[2.25rem]">
              Everything you might want to know upfront.
            </h2>
          </FadeIn>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                h: "Sessions",
                b: "55 minutes, usually weekly, for somewhere between 6 and 12 sessions or longer if it suits you.",
                accent: "bg-soft-blue/40",
              },
              {
                h: "Fees",
                b: "£55 in person or £45 online, with the first 55-minute online session free.",
                accent: "bg-soft-yellow",
              },
              {
                h: "Where",
                b: "Cranberry Wellbeing Centre in Eastleigh, opposite The Point, with free parking right outside.",
                accent: "bg-soft-blue/40",
              },
              {
                h: "Contact",
                b: "Email or text, and I&rsquo;ll reply the same day, usually within a few hours.",
                accent: "bg-soft-yellow",
              },
            ].map((item, i) => (
              <FadeIn key={item.h} delay={60 + i * 40}>
                <div className="h-full rounded-xl2 bg-cream p-6 text-center shadow-soft">
                  <span
                    aria-hidden="true"
                    className={`mx-auto block h-1 w-10 rounded-full ${item.accent}`}
                  />
                  <h3 className="mt-4 text-[15px] font-semibold uppercase tracking-wider text-navy/70">
                    {item.h}
                  </h3>
                  <p
                    className="mt-3 leading-relaxed text-navy/85"
                    dangerouslySetInnerHTML={{ __html: item.b }}
                  />
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={240}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/services/" variant="secondary">
                Full services
              </Button>
              <Link
                href="/contact/"
                className="text-[15px] font-medium text-navy underline-offset-4 hover:underline"
              >
                Or jump straight to booking
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* SECTION 7 — FAQ PREVIEW */}
      <Section tone="cream" className="relative overflow-hidden">
        <WaveLines
          variant="yellow"
          className="pointer-events-none absolute inset-x-0 bottom-10 h-12 opacity-50"
        />
        <Container>
          <FadeIn>
            <h2 className="mx-auto max-w-3xl text-center text-balance text-[1.75rem] font-semibold leading-tight text-navy sm:text-[2.25rem]">
              The questions almost everyone asks
            </h2>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="mt-10 rounded-xl2 bg-cream px-2 shadow-soft sm:px-6">
              <FAQItem question="What if my problem isn&rsquo;t big enough?" defaultOpen>
                <p>
                  It&rsquo;s one of the most common worries and a completely
                  fair one, but there&rsquo;s no threshold to clear: if
                  something is making your weeks harder than they should be,
                  that&rsquo;s already enough.
                </p>
                <p>
                  Counselling isn&rsquo;t only for people in crisis, it&rsquo;s
                  also for people who are quietly tired of feeling like this.
                </p>
              </FAQItem>
              <FAQItem question="What if I&rsquo;ve tried counselling before and it didn&rsquo;t work?">
                <p>
                  A lot of the people I see have, and often the issue wasn&rsquo;t
                  counselling itself but the fit, the timing, or six rushed NHS
                  sessions that ended just as things were starting to land.
                  None of that means it can&rsquo;t work for you now.
                </p>
                <p>
                  The free first session is partly so you can find out, with
                  zero risk, whether this time feels different.
                </p>
              </FAQItem>
              <FAQItem question="What if I don&rsquo;t know what to say?">
                <p>
                  Most people don&rsquo;t in their first session, and
                  that&rsquo;s completely normal. Some end up crying and then
                  apologising for crying, others sit quietly for a minute
                  before anything comes out, and all of it&rsquo;s fine.
                </p>
                <p>
                  You don&rsquo;t need to prepare or have a speech ready,
                  I&rsquo;ll ask gentle questions and we&rsquo;ll find the
                  thread together.
                </p>
              </FAQItem>
              <FAQItem question="What if we don&rsquo;t click?">
                <p>
                  That&rsquo;s exactly why the first session is free. If by
                  the end you don&rsquo;t feel I&rsquo;m the right person,
                  that&rsquo;s genuinely useful information rather than a
                  failure, so just tell me or simply don&rsquo;t book again
                  and I won&rsquo;t chase you about it.
                </p>
                <p>
                  If it would help, I&rsquo;m happy to point you towards
                  another counsellor I trust.
                </p>
              </FAQItem>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="mt-8 text-center">
              <Link
                href="/faq/"
                className="text-[15px] font-medium text-navy underline-offset-4 hover:underline"
              >
                Read more questions and answers
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* SECTION 7.5 — TESTIMONIALS BAND */}
      <Section tone="yellow" spacing="default" className="relative overflow-hidden">
        <CloudBlob
          variant="blue"
          className="pointer-events-none absolute top-4 left-[-4rem] h-32 w-72 opacity-20 animate-drift-slow"
        />
        <Container size="wide">
          <FadeIn>
            <h2 className="mx-auto max-w-2xl text-center text-balance text-[1.75rem] font-semibold leading-tight text-navy sm:text-[2.25rem]">
              People who weren&apos;t sure either, until they were.
            </h2>
          </FadeIn>

          <FadeIn delay={60}>
            <div
              className="mt-10 -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-4 sm:-mx-6 sm:px-6"
              style={{ scrollbarWidth: "thin" }}
            >
              {[
                {
                  tone: "blue" as const,
                  quote: (
                    <>
                      &ldquo;Genuinely thought I&rsquo;d be judged. Wasn&rsquo;t,
                      at all. Ruth doesn&rsquo;t do that &lsquo;and how does
                      that make you feel&rsquo; nodding thing. We just talk
                      and somehow things make more sense by the end.&rdquo;
                    </>
                  ),
                  attribution: "Em",
                  context: "28",
                },
                {
                  tone: "yellow" as const,
                  quote: (
                    <>
                      &ldquo;I&rsquo;d been telling myself I&rsquo;d sort it
                      out on my own for months. Booked the free session at
                      half eleven at night. Best decision I&rsquo;ve made in
                      ages, no exaggeration.&rdquo;
                    </>
                  ),
                  attribution: "Jo",
                  context: "36, Eastleigh",
                },
                {
                  tone: "cream" as const,
                  quote: (
                    <>
                      &ldquo;I lost my mum 2 years ago and thought I was over
                      it. Apparently not. Ruth gave me space to talk about
                      her without rushing me, which I didn&rsquo;t know I
                      needed so badly. I leave each session lighter than I
                      came in.&rdquo;
                    </>
                  ),
                  attribution: "Karen",
                  context: "51",
                },
                {
                  tone: "blue" as const,
                  quote: (
                    <>
                      &ldquo;I&rsquo;d done CBT before and it just
                      didn&rsquo;t stick. Ruth is different, doesn&rsquo;t
                      lecture you. Six weeks in and I&rsquo;m sleeping
                      properly for the first time in ages.&rdquo;
                    </>
                  ),
                  attribution: "Mark",
                  context: "42, Southampton",
                },
                {
                  tone: "yellow" as const,
                  quote: (
                    <>
                      &ldquo;Was so embarrassed to email at first, felt like
                      my stuff wasn&rsquo;t big enough to bother anyone with.
                      Ruth replied in a way that made me feel like a person,
                      not a problem.&rdquo;
                    </>
                  ),
                  attribution: "Beth",
                  context: "36",
                },
                {
                  tone: "cream" as const,
                  quote: (
                    <>
                      &ldquo;Honestly the booking page is what made me
                      message in the first place. Wasn&rsquo;t all clinical
                      and weird. Felt like emailing a normal person.&rdquo;
                    </>
                  ),
                  attribution: "Lisa",
                  context: "41",
                },
                {
                  tone: "blue" as const,
                  quote: (
                    <>
                      &ldquo;i&rsquo;d been telling myself my problems
                      weren&rsquo;t &lsquo;big enough&rsquo; for therapy.
                      ruth was so warm in the first session i actually cried
                      just because someone took it seriously.&rdquo;
                    </>
                  ),
                  attribution: "Imogen",
                  context: "38, Romsey",
                },
                {
                  tone: "yellow" as const,
                  quote: (
                    <>
                      &ldquo;Was waiting and waiting for proper support and
                      it just wasn&rsquo;t coming. Found Ruth, started the
                      next week. Such a relief honestly.&rdquo;
                    </>
                  ),
                  attribution: "Catherine",
                  context: "45, Winchester",
                },
                {
                  tone: "cream" as const,
                  quote: (
                    <>
                      &ldquo;Bit sceptical going in because I&rsquo;d done
                      CBT through work and it didn&rsquo;t really land. This
                      is different, we just talk. Don&rsquo;t really know why
                      it works but it does.&rdquo;
                    </>
                  ),
                  attribution: "Steve",
                  context: "47, Hedge End",
                },
                {
                  tone: "blue" as const,
                  quote: (
                    <>
                      &ldquo;I&rsquo;m a nurse and you&rsquo;d think
                      I&rsquo;d know how to look after myself, apparently
                      not. Ruth is the only person I can actually be honest
                      with about it.&rdquo;
                    </>
                  ),
                  attribution: "Naomi",
                  context: "40",
                },
                {
                  tone: "yellow" as const,
                  quote: (
                    <>
                      &ldquo;first session was free which is what got me
                      through the door honestly. didn&rsquo;t think i&rsquo;d
                      come back but here i am 4 months later 🙃&rdquo;
                    </>
                  ),
                  attribution: "Becky",
                  context: "33",
                },
                {
                  tone: "cream" as const,
                  quote: (
                    <>
                      &ldquo;Lost my dad last year and just kept... not
                      dealing with it. Ruth doesn&rsquo;t push you to talk
                      about anything you&rsquo;re not ready for. Slowly we
                      got there.&rdquo;
                    </>
                  ),
                  attribution: "Marie",
                  context: "52, Eastleigh",
                },
                {
                  tone: "blue" as const,
                  quote: (
                    <>
                      &ldquo;Honestly the best money I spend each week. £55
                      sounds like a lot but it&rsquo;s cheaper than the wine
                      bill it replaced 😅&rdquo;
                    </>
                  ),
                  attribution: "Jess",
                  context: "36",
                },
                {
                  tone: "yellow" as const,
                  quote: (
                    <>
                      &ldquo;Tried Headspace, Calm, all the apps. None of
                      them are like talking to an actual person who&rsquo;s
                      listening to YOUR specific thing.&rdquo;
                    </>
                  ),
                  attribution: "Olivia",
                  context: "29",
                },
                {
                  tone: "cream" as const,
                  quote: (
                    <>
                      &ldquo;Was nervous about doing it in person in case I
                      bumped into someone I know. The place is really
                      discreet, you don&rsquo;t even have to sign in at the
                      front.&rdquo;
                    </>
                  ),
                  attribution: "Hayley",
                  context: "44",
                },
                {
                  tone: "blue" as const,
                  quote: (
                    <>
                      &ldquo;She&rsquo;s not all &lsquo;love and
                      light&rsquo;, which I was worried about. Just normal.
                      Like talking to a really wise friend who happens to
                      know what she&rsquo;s doing.&rdquo;
                    </>
                  ),
                  attribution: "Charlotte",
                  context: "39, Chandler&rsquo;s Ford",
                },
                {
                  tone: "yellow" as const,
                  quote: (
                    <>
                      &ldquo;Was burnt out, properly burnt out, couldn&rsquo;t
                      admit it to anyone. 6 months on i&rsquo;m a different
                      person, my husband&rsquo;s noticed too.&rdquo;
                    </>
                  ),
                  attribution: "Anna",
                  context: "42",
                },
                {
                  tone: "cream" as const,
                  quote: (
                    <>
                      &ldquo;Went to Ruth after my divorce. Couldn&rsquo;t
                      afford long-term so we did 8 sessions and she was
                      upfront from the start that 8 was probably enough. She
                      was right.&rdquo;
                    </>
                  ),
                  attribution: "Helen",
                  context: "48",
                },
                {
                  tone: "blue" as const,
                  quote: (
                    <>
                      &ldquo;i&rsquo;m autistic and a lot of therapists just
                      don&rsquo;t get it. ruth listened, didn&rsquo;t try to
                      &lsquo;fix&rsquo; me, just helped me understand my own
                      brain better.&rdquo;
                    </>
                  ),
                  attribution: "James",
                  context: "31",
                },
                {
                  tone: "yellow" as const,
                  quote: (
                    <>
                      &ldquo;Panic attacks at work were getting unmanageable.
                      Did 3 months with Ruth and they&rsquo;ve nearly
                      stopped. Don&rsquo;t really know what changed but
                      something did.&rdquo;
                    </>
                  ),
                  attribution: "Vicky",
                  context: "37",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="w-[300px] shrink-0 snap-start sm:w-[340px] lg:w-[360px]"
                >
                  <Testimonial
                    tone={t.tone}
                    quote={t.quote}
                    attribution={t.attribution}
                    context={t.context}
                  />
                </div>
              ))}
            </div>
            <p className="mt-3 flex items-center gap-2 text-xs text-warm-grey-light">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
              Swipe to see more
            </p>
          </FadeIn>

        </Container>
      </Section>

      {/* SECTION 8 — FINAL CTA (bold saturated) */}
      <section className="relative overflow-hidden bg-soft-yellow py-16 sm:py-24 lg:py-32">
        {/* Ambient elements */}
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
            {/* Big rounded floating card with offset accent shape behind */}
            <div className="relative mx-auto max-w-2xl">
              {/* Offset peach circle peeking out behind card */}
              <div
                aria-hidden="true"
                className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-[#FFD9B7] shadow-soft sm:-top-10 sm:-right-10 sm:h-44 sm:w-44"
              />
              {/* Offset pink dot bottom-left */}
              <div
                aria-hidden="true"
                className="absolute -bottom-5 -left-4 h-20 w-20 rounded-full bg-[#FFB0C0] shadow-soft sm:-bottom-8 sm:-left-8 sm:h-28 sm:w-28"
              />

              {/* Main card */}
              <div className="relative rounded-[28px] bg-cream p-8 text-center shadow-soft-lg sm:p-12">
                <ChairsIllustration className="mx-auto mb-6 h-auto w-full max-w-[260px] sm:max-w-xs" />
                <h2 className="text-balance text-[1.7rem] font-semibold leading-[1.15] tracking-tight text-navy sm:text-[2.25rem]">
                  May I encourage you to take that first step with me today?
                </h2>
                <p className="mx-auto mt-5 max-w-lg text-balance text-[16px] leading-relaxed text-navy/85 sm:text-[18px]">
                  Send me a short message and I&rsquo;ll get back to you the
                  same day. Your first 55-minute online session is free, and
                  you don&rsquo;t need to know what to say beforehand.
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
