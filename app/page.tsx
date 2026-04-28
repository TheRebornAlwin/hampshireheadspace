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

const HERO_IMAGE_URL = "/hero-tangled-yarn.webp";

export default function HomePage() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-32">
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
          <div className="lg:col-span-7 lg:pt-6">
            <FadeIn>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-soft-yellow/60 px-4 py-1.5 text-[13px] font-medium text-navy/85">
                <span className="h-1.5 w-1.5 rounded-full bg-navy/80" />
                Private counselling, Eastleigh
              </p>
            </FadeIn>
            <FadeIn delay={80}>
              <h1 className="text-balance text-[2rem] font-bold leading-[1.08] tracking-tight text-navy sm:text-[2.85rem] lg:text-[3.5rem]">
                On paper, you&apos;ve got a good life. So why does it feel like this?
              </h1>
            </FadeIn>
            <FadeIn delay={160}>
              <p className="mt-6 max-w-xl text-pretty text-[17px] leading-relaxed text-navy/85 sm:text-[19px]">
                Hampshire HeadSpace is private counselling in Eastleigh for
                people who are tired of pretending they&apos;re fine. Your
                first 55-minute session is free, with no long forms to fill in
                and no pressure to come back if it isn&apos;t the right fit.
              </p>
            </FadeIn>
            <FadeIn delay={240}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Button href="/contact/" size="lg">
                  Book your free first session
                </Button>
                <Link
                  href="#what-its-like"
                  className="text-[15px] font-medium text-navy/75 underline-offset-4 hover:underline"
                >
                  Or read what the first session is actually like
                </Link>
              </div>
            </FadeIn>

            {/* Trust micro-badges */}
            <FadeIn delay={300}>
              <ul className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-navy/75 sm:text-[14px]">
                {[
                  "BACP registered",
                  "Free first 55-min session",
                  "Same-day reply",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
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
                    <span className="font-medium">{item}</span>
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
                  className="absolute top-6 -right-4 grid h-10 w-10 place-items-center rounded-xl2 bg-cream text-navy shadow-soft sm:h-12 sm:w-12"
                  style={{ animation: "floatSoft 14s ease-in-out 1s infinite" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
                    <path d="M3 13h18a1 1 0 0 1 1 1v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a1 1 0 0 1 1-1Z" />
                    <path d="M5 19v2M19 19v2" />
                  </svg>
                </div>
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
              You are not broken. You are exhausted, and you are carrying more
              than you should be carrying alone.
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

      {/* SECTION 3 — MECHANISM */}
      <Section tone="blue" className="relative overflow-hidden">
        <CloudBlob
          variant="blue"
          className="pointer-events-none absolute top-8 left-[-5rem] h-40 w-80 opacity-30 animate-drift-slow"
        />
        <LeafFloat className="pointer-events-none absolute -bottom-6 right-[3%] h-40 w-40 opacity-80 animate-float-soft" />
        <Container size="wide">
          <FadeIn>
            <h2 className="mx-auto max-w-3xl text-center text-balance text-[1.75rem] font-semibold leading-tight text-navy sm:text-[2.25rem]">
              Most counsellors give you a 20-minute call. I give you the full
              first session, free.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-center text-[17px] leading-relaxed text-navy/85">
              Twenty minutes on the phone is enough to confirm a time. It
              isn&apos;t enough to know whether you can actually work with
              someone. Fifty-five minutes, sitting in the room, is.
            </p>
          </FadeIn>

          <FadeIn delay={140}>
            <div className="mx-auto mt-12 grid max-w-4xl items-stretch gap-5 lg:grid-cols-2">
              {/* Muted "before" card */}
              <div className="relative rounded-xl2 border border-warm-grey/25 bg-warm-grey/[0.06] p-6 sm:p-7">
                <p className="text-[12px] font-semibold uppercase tracking-wider text-warm-grey">
                  What most counsellors offer
                </p>
                <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-warm-grey">
                  {[
                    "20-minute phone call",
                    "Confirms availability and admin",
                    "You decide based on a brief chat",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-warm-grey/50"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlighted "after" card */}
              <div
                className="relative rounded-xl2 border-2 border-navy/20 bg-gradient-to-br from-soft-yellow/40 via-cream to-soft-blue/30 p-6 shadow-soft-lg sm:p-7"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-3 right-5 rounded-full bg-navy px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cream"
                >
                  What I offer
                </span>
                <p className="text-[12px] font-semibold uppercase tracking-wider text-navy/70">
                  Hampshire HeadSpace
                </p>
                <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-navy">
                  {[
                    "55-minute full first session",
                    "Real work, not a screening call",
                    "You decide based on what we actually do together",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="mt-0.5 h-5 w-5 shrink-0 text-navy"
                      >
                        <path
                          d="M5 12.5l4 4 10-10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={220}>
            <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-3">
              {[
                { k: "55 min", v: "the full first session" },
                { k: "£0", v: "no commitment to come back" },
                { k: "1:1", v: "in person or online, your choice" },
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

          <FadeIn delay={280}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-[16px] leading-relaxed text-navy/85">
              If you&apos;ve been on an NHS waiting list for months and
              quietly lost faith that anything is coming, you don&apos;t have
              to keep waiting.
            </p>
            <div className="mt-6 flex justify-center">
              <Button href="/contact/" size="md">
                Book your free first session
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
              The biggest reason people close the tab is that they don&apos;t
              know what&apos;s going to happen. So here it is, step by step.
            </p>
          </FadeIn>

          <ol className="mt-12 grid gap-4 sm:grid-cols-2">
            {([
              {
                icon: "arrive",
                t: "You arrive",
                d: "Free parking outside, opposite The Point. A small waiting area inside, and I&rsquo;ll come find you.",
                style: "cream",
              },
              {
                icon: "chair",
                t: "We walk to the room",
                d: "Two soft chairs, a window, tissues, water if you&rsquo;d like it. The door closes properly.",
                style: "blue",
              },
              {
                icon: "speech",
                t: "We start gently",
                d: "Usually with: &ldquo;Tell me a bit about what brought you here, when you&rsquo;re ready.&rdquo; No script, no clipboard.",
                style: "yellow",
              },
              {
                icon: "heart",
                t: "What’s not expected",
                d: "Knowing what to say. Sharing everything. Being coherent. You can pause, cry, ask questions, sit in silence.",
                style: "cream",
              },
              {
                icon: "lock",
                t: "What stays between us",
                d: "Nothing leaves the room. Brief notes, locked, GDPR-compliant. Nothing goes to your GP or insurer unless you ask.",
                style: "highlight",
              },
              {
                icon: "clock",
                t: "55 minutes, gently landed",
                d: "I&rsquo;ll let you know when we have ten minutes left, so we can wrap up somewhere that feels okay.",
                style: "blue",
              },
              {
                icon: "leave",
                t: "At the end, no pressure",
                d: "Take a day, take a week. Message if you want to come back, or don&rsquo;t. Either is honestly fine.",
                style: "yellow",
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
                    <div className="flex items-start gap-4">
                      <div
                        className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl2 text-navy ${iconBg}`}
                      >
                        <StepIcon name={step.icon} className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
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
                    &ldquo;I sat in the car for ten minutes before going in.
                    By the end of the first session i was actually laughing.
                    Don&rsquo;t know how she does it. She just listens, like
                    properly listens.&rdquo;
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
                If you have read this far, something brought you here. The first
                session is free. You don&apos;t have to know what to say. You
                just have to show up.
              </p>
              <div className="mt-5 flex justify-center">
                <Button href="/contact/" size="lg">
                  Book your free first session
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* SECTION 5 — ABOUT RUTH PREVIEW */}
      <Section tone="cream" spacing="default" className="relative overflow-hidden">
        <WaveLines
          variant="blue"
          className="pointer-events-none absolute inset-x-0 top-10 h-12 opacity-60"
        />
        <Sparkles className="pointer-events-none absolute top-10 right-[6%] h-24 w-40 opacity-60 animate-twinkle" />
        <Container>
          <FadeIn>
            <ImagePlaceholder
              label="Ruth, Hampshire HeadSpace"
              ratio="square"
              className="mx-auto max-w-[220px] rounded-full"
            />
          </FadeIn>
          <FadeIn delay={120}>
            <h2 className="mx-auto mt-7 max-w-2xl text-center text-balance text-[1.75rem] font-semibold leading-tight text-navy sm:text-[2.25rem]">
              A real person. Paying attention. Not in a rush.
            </h2>
            <div className="mx-auto mt-5 max-w-prose space-y-4 text-center text-[17px] leading-relaxed text-navy/85">
              <p>
                I&apos;m Ruth. I run Hampshire HeadSpace from a quiet room at
                the Cranberry Wellbeing Centre in Eastleigh, working with
                adults aged 16 and up, neurotypical and neurodiverse, all
                identities welcome.
              </p>
              <p>
                I&apos;m BACP-registered, fully insured, with an enhanced DBS
                and regular clinical supervision. The credentials matter, the
                way I sit with you matters more.
              </p>
            </div>
            <div className="mt-7 flex justify-center">
              <Button href="/about/" variant="secondary" size="md">
                More about Ruth
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* SECTION 6 — PRACTICAL INFO */}
      <Section tone="blue" className="relative overflow-hidden">
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
                b: "55 minutes. Usually weekly. Short term (6 to 12 sessions) or longer, decided together.",
                accent: "bg-soft-blue/40",
              },
              {
                h: "Fees",
                b: "£50 in person. £40 online. First 55-minute session is free.",
                accent: "bg-soft-yellow",
              },
              {
                h: "Where",
                b: "Cranberry Wellbeing Centre, Eastleigh. Opposite The Point. Free parking outside.",
                accent: "bg-soft-blue/40",
              },
              {
                h: "Contact",
                b: "Email or text. I reply the same day, usually within a few hours.",
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
                  <p className="mt-3 leading-relaxed text-navy/85">{item.b}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={240}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/services/" variant="secondary">
                Full services and fees
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
                  That is one of the most common worries, and a fair one. There
                  is no threshold to clear. If something is making your weeks
                  harder than they should be, that is enough.
                </p>
                <p>
                  Counselling isn&apos;t only for people in crisis. It&apos;s
                  also for people who are just tired of feeling like this.
                </p>
              </FAQItem>
              <FAQItem question="What if I&rsquo;ve tried counselling before and it didn&rsquo;t work?">
                <p>
                  A lot of people I see have. Often the issue wasn&apos;t
                  counselling itself, it was the fit, the time, or six rushed
                  NHS sessions that ended just as things started to land.
                </p>
                <p>
                  The free first session is partly so you can find out, with
                  zero risk, whether this time feels different.
                </p>
              </FAQItem>
              <FAQItem question="What if I don&rsquo;t know what to say?">
                <p>
                  Most people don&apos;t in their first session. Some cry.
                  Some apologise for crying. Some sit quietly for a minute
                  before anything comes out. All of that is okay.
                </p>
                <p>
                  You don&apos;t need to prepare. You don&apos;t need a
                  speech. I&apos;ll ask gentle questions and we&apos;ll find
                  the thread together.
                </p>
              </FAQItem>
              <FAQItem question="What if we don&rsquo;t click?">
                <p>
                  The first session is free for exactly this reason. If by the
                  end you don&apos;t feel I&apos;m the right person, that&apos;s
                  important information, not a failure. Tell me, or just
                  don&apos;t book again. I won&apos;t chase you.
                </p>
                <p>
                  If it would help, I&apos;m happy to point you towards
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
      <Section tone="cream" spacing="default" className="relative overflow-hidden">
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
                      that make you feel&rsquo; nodding thing. We just talk and
                      somehow things make more sense by the end.&rdquo;
                    </>
                  ),
                  attribution: "Em",
                  context: "28",
                },
                {
                  tone: "yellow" as const,
                  quote: (
                    <>
                      &ldquo;I&rsquo;d been on the NHS waiting list for months
                      and lost faith. Booked the free session at half eleven at
                      night. Best decision i&rsquo;ve made in ages, no
                      exaggeration.&rdquo;
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
                      it. Apparently not. Ruth gave me space to talk about her
                      without rushing me, which I didn&rsquo;t know I needed so
                      badly. I leave each session lighter than I came in.&rdquo;
                    </>
                  ),
                  attribution: "Karen",
                  context: "51",
                },
                {
                  tone: "blue" as const,
                  quote: (
                    <>
                      &ldquo;I&rsquo;d done CBT before and it just didn&rsquo;t
                      stick. Ruth is different. Doesn&rsquo;t lecture you.
                      Doesn&rsquo;t tell you what to do. Six weeks in and
                      i&rsquo;m sleeping properly for the first time in
                      ages.&rdquo;
                    </>
                  ),
                  attribution: "Mark",
                  context: "42, Southampton",
                },
                {
                  tone: "yellow" as const,
                  quote: (
                    <>
                      &ldquo;Was so embarrassed to email at first. Felt like my
                      stuff wasn&rsquo;t big enough to bother anyone with. Ruth
                      replied in a way that made me feel like a person, not a
                      problem.&rdquo;
                    </>
                  ),
                  attribution: "Beth",
                  context: "36",
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

          <FadeIn delay={300}>
            <p className="mx-auto mt-6 max-w-prose text-center text-sm text-warm-grey">
              Names changed for privacy.
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
                <h2 className="text-balance text-[1.85rem] font-bold leading-[1.1] tracking-tight text-navy sm:text-[2.4rem]">
                  Booking is the easiest part of this.
                </h2>
                <p className="mx-auto mt-5 max-w-lg text-balance text-[16px] leading-relaxed text-navy/85 sm:text-[18px]">
                  A short message. I&apos;ll reply the same day with a time.
                  The first 55 minutes are free. You don&apos;t have to know
                  what to say.
                </p>
                <div className="mt-8 flex justify-center">
                  <Button href="/contact/" size="lg">
                    Book your free first session
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
