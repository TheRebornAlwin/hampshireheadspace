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
import FAQItem from "@/components/FAQItem";
import FadeIn from "@/components/FadeIn";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const HERO_IMAGE_URL =
  "https://5gl6uqlaxg.ufs.sh/f/x0izTbEnXmRac5qOIEpOtE7NBk61YirsFp3RfLSDzQATqu0d";

export default function HomePage() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-32">
        <CloudBlob
          variant="blue"
          className="pointer-events-none absolute -top-16 -left-24 h-72 w-[28rem] opacity-15 animate-drift-slow"
        />
        <CloudBlob
          variant="yellow"
          className="pointer-events-none absolute -bottom-20 right-[-6rem] h-72 w-[26rem] opacity-25"
        />
        <Sun
          className="pointer-events-none absolute -top-20 right-[8%] h-56 w-56 opacity-60 animate-float-soft"
          withRays={false}
        />
        <div
          className="pointer-events-none absolute top-[12%] left-0 right-0 h-16 animate-fly-across"
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
              <h1 className="text-balance text-[2.25rem] font-semibold leading-[1.1] text-navy sm:text-[2.75rem] lg:text-[3.4rem]">
                On paper, you&apos;ve got a good life. So why does it feel like this?
              </h1>
            </FadeIn>
            <FadeIn delay={160}>
              <p className="mt-6 max-w-xl text-pretty text-[17px] leading-relaxed text-navy/85 sm:text-[19px]">
                Hampshire HeadSpace is private counselling for people who are
                tired of pretending they&apos;re fine. Your first 55-minute
                session is free. No long forms. No pressure to come back.
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
            <FadeIn delay={320}>
              <p className="mt-6 text-sm text-warm-grey">
                BACP registered. £50 in person, £40 online. First session free.
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-5">
            <FadeIn delay={120}>
              <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(251,241,200,0.55),transparent_70%)]"
                />
                <img
                  src={HERO_IMAGE_URL}
                  alt="A counsellor in a soft blue chair gently holding the loose end of a tangled blue and yellow ball of yarn that sits where the other person's head would be."
                  width={900}
                  height={820}
                  className="h-auto w-full animate-float-soft"
                  loading="eager"
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
            <h2 className="text-balance text-[1.75rem] font-semibold leading-tight text-navy sm:text-[2.25rem]">
              You already know.
            </h2>
            <p className="mt-3 text-warm-grey">A few sentences. See if any of these sound familiar.</p>
          </FadeIn>

          <div className="mt-10 space-y-6 text-[17px] leading-relaxed text-navy/85 sm:text-[19px]">
            {[
              "You are tired. Not just sleep-tired. The kind of tired that does not lift even when you do sleep.",
              "You snap at the people you love and hate yourself for it five minutes later.",
              "You cry in the car. You drink one more glass than you used to. You scroll your phone until 1am to avoid being alone with your own head.",
              "You have Googled “private counsellor near me” three times this month. You have closed the tab three times.",
              "You can’t keep going the way you are. You already know that.",
            ].map((line, i) => (
              <FadeIn key={i} delay={i * 60}>
                <p className="border-l-2 border-soft-blue/70 pl-5">{line}</p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <p className="mt-12 max-w-2xl text-balance text-[18px] font-medium leading-snug text-navy sm:text-[22px]">
              You are not broken. You are exhausted, and you are carrying more
              than you should be carrying alone.
            </p>
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
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <FadeIn>
              <p className="text-[13px] font-semibold uppercase tracking-wider text-navy/60">
                What&apos;s different here
              </p>
              <h2 className="mt-3 text-balance text-[1.75rem] font-semibold leading-tight text-navy sm:text-[2.25rem]">
                Most counsellors give you a 20-minute call. I give you the full
                first session, free.
              </h2>
              <div className="mt-5 max-w-prose space-y-4 text-[17px] leading-relaxed text-navy/85">
                <p>
                  The first session is where you decide whether I&apos;m the
                  right person for you. Twenty minutes is not enough to know
                  that. Fifty-five minutes is.
                </p>
                <p>
                  You won&apos;t get scripted nodding and &ldquo;and how does
                  that make you feel?&rdquo; You&apos;ll get a real conversation
                  with someone who is paying attention, who isn&apos;t in a
                  rush, and who won&apos;t make you feel like a checklist.
                </p>
                <p>
                  At the end of the hour, there is no pressure to book another
                  session. Take a few days. Decide later. The free first session
                  is just that. Free, and yours.
                </p>
              </div>
              <div className="mt-7">
                <Button href="/contact/" size="md">
                  Book your free first session
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={120}>
              <div className="relative">
                <div className="rounded-xl2 bg-cream/80 p-6 shadow-soft backdrop-blur sm:p-8">
                  <div className="grid gap-5 sm:grid-cols-3">
                    {[
                      { k: "55 min", v: "the full first session" },
                      { k: "£0", v: "no commitment to come back" },
                      { k: "1:1", v: "in person or online, your choice" },
                    ].map((item) => (
                      <div key={item.k}>
                        <p className="text-[1.6rem] font-semibold text-navy">
                          {item.k}
                        </p>
                        <p className="mt-1 text-sm text-warm-grey">{item.v}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-7 border-t border-navy/10 pt-5 text-sm text-navy/80">
                    After the free session, weekly counselling is £50 in
                    person or £40 online. Always your call, never mine.
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
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
            <p className="text-[13px] font-semibold uppercase tracking-wider text-navy/60">
              What to expect
            </p>
            <h2 className="mt-3 max-w-3xl text-balance text-[1.75rem] font-semibold leading-tight text-navy sm:text-[2.25rem]">
              What the first session is actually like
            </h2>
            <p className="mt-4 max-w-2xl text-warm-grey">
              The biggest reason people close the tab is that they don&apos;t
              know what&apos;s going to happen. So here it is, step by step.
            </p>
          </FadeIn>

          <ol className="mt-12 space-y-5">
            {[
              {
                t: "You arrive",
                d: "The Cranberry Wellbeing Centre is opposite The Point in Eastleigh, with free parking right outside. There is a small waiting area inside. You don’t need to announce yourself. I’ll come and find you at the time of your appointment.",
              },
              {
                t: "We walk to the room",
                d: "The room is private and soft. Two comfortable chairs, a window, a box of tissues, a glass of water if you want it. The door closes properly. No one can hear what you say.",
              },
              {
                t: "I say something simple to start",
                d: "Usually something like: “Tell me a bit about what brought you here today, when you’re ready.” That’s it. There is no script and no clipboard.",
              },
              {
                t: "What is not expected",
                d: "You don’t have to know what to say. You don’t have to share everything. You can pause. You can cry. You can ask questions. You can sit in silence. I’m not going to push.",
              },
              {
                t: "The session lasts 55 minutes",
                d: "I’ll let you know gently when we have about ten minutes left, so we can land somewhere that feels okay rather than mid-sentence.",
              },
              {
                t: "At the end",
                d: "There is zero pressure to book another session. Take a day, take a week. If it felt right, send me a message and we’ll find a regular time. If not, that’s fine too. You’ve cost me nothing but an hour of my time, and I’m glad to give it.",
              },
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 70}>
                <li className="rounded-xl2 bg-cream p-6 shadow-soft sm:p-7">
                  <div className="flex gap-5">
                    <div
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy text-cream text-[15px] font-semibold"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[18px] font-semibold text-navy sm:text-[20px]">
                        {step.t}
                      </h3>
                      <p className="mt-2 leading-relaxed text-navy/80">
                        {step.d}
                      </p>
                    </div>
                  </div>
                </li>
              </FadeIn>
            ))}
          </ol>

          <FadeIn delay={500}>
            <div className="mt-10 rounded-xl2 border border-soft-blue/50 bg-soft-yellow/30 p-6 text-center sm:p-7">
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
        <Sparkles className="pointer-events-none absolute top-10 right-[6%] h-24 w-40 opacity-60 animate-twinkle" />
        <Container size="wide">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <FadeIn className="lg:col-span-5">
              <ImagePlaceholder
                label="Ruth, Hampshire HeadSpace"
                ratio="square"
                className="mx-auto max-w-sm"
              />
            </FadeIn>
            <FadeIn delay={120} className="lg:col-span-7">
              <p className="text-[13px] font-semibold uppercase tracking-wider text-navy/60">
                About Ruth
              </p>
              <h2 className="mt-3 text-balance text-[1.75rem] font-semibold leading-tight text-navy sm:text-[2.25rem]">
                A real person. Paying attention. Not in a rush.
              </h2>
              <div className="mt-5 max-w-prose space-y-4 text-[17px] leading-relaxed text-navy/85">
                <p>
                  I&apos;m Ruth. I run Hampshire HeadSpace from a quiet room at
                  the Cranberry Wellbeing Centre in Eastleigh. I work with
                  adults aged 16 and up, neurotypical and neurodiverse, all
                  identities welcome.
                </p>
                <p>
                  I&apos;m BACP-registered, fully insured, with an enhanced DBS
                  and regular clinical supervision. The credentials matter. The
                  way I sit with you matters more.
                </p>
              </div>
              <div className="mt-7">
                <Button href="/about/" variant="secondary" size="md">
                  More about Ruth
                </Button>
              </div>
            </FadeIn>
          </div>
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
            <p className="text-[13px] font-semibold uppercase tracking-wider text-navy/60">
              Practical things
            </p>
            <h2 className="mt-3 text-balance text-[1.75rem] font-semibold leading-tight text-navy sm:text-[2.25rem]">
              Everything you might want to know upfront.
            </h2>
          </FadeIn>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                h: "Sessions",
                b: "55 minutes. Usually weekly. Short term (6 to 12 sessions) or longer, decided together.",
              },
              {
                h: "Fees",
                b: "£50 in person. £40 online. First 55-minute session is free.",
              },
              {
                h: "Where",
                b: "Cranberry Wellbeing Centre, Eastleigh. Opposite The Point. Free parking outside.",
              },
              {
                h: "Contact",
                b: "Email or text. I reply the same day, usually within a few hours.",
              },
            ].map((item) => (
              <FadeIn key={item.h} delay={60}>
                <div className="rounded-xl2 bg-cream p-6 shadow-soft">
                  <h3 className="text-[15px] font-semibold uppercase tracking-wider text-navy/70">
                    {item.h}
                  </h3>
                  <p className="mt-3 leading-relaxed text-navy/85">{item.b}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200}>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
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
      <Section tone="cream">
        <Container>
          <FadeIn>
            <p className="text-[13px] font-semibold uppercase tracking-wider text-navy/60">
              Common worries
            </p>
            <h2 className="mt-3 text-balance text-[1.75rem] font-semibold leading-tight text-navy sm:text-[2.25rem]">
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

      {/* SECTION 8 — FINAL CTA */}
      <Section tone="yellow" spacing="default" className="relative overflow-hidden">
        <Sun
          className="pointer-events-none absolute -top-16 left-[8%] h-48 w-48 opacity-70 animate-float-soft"
          withRays
        />
        <div
          className="pointer-events-none absolute top-20 left-0 right-0 h-12 animate-fly-across"
          style={{ animationDuration: "100s" }}
          aria-hidden="true"
        >
          <Birds className="h-12 w-52 opacity-65" count={3} />
        </div>
        <Mountains className="pointer-events-none absolute bottom-0 left-0 right-0 h-32" />
        <Container>
          <FadeIn>
            <div className="text-center">
              <ChairsIllustration className="mx-auto mb-8 h-auto w-full max-w-sm" />
              <h2 className="text-balance text-[1.75rem] font-semibold leading-tight text-navy sm:text-[2.25rem]">
                Booking is the easiest part of this.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-balance text-[17px] leading-relaxed text-navy/85 sm:text-[19px]">
                A short message. I&apos;ll reply the same day with a time. The
                first 55 minutes are free. You don&apos;t have to know what to
                say.
              </p>
              <div className="mt-8 flex justify-center">
                <Button href="/contact/" size="lg">
                  Book your free first session
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
