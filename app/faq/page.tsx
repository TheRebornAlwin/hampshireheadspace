import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Button from "@/components/Button";
import FAQItem from "@/components/FAQItem";
import FadeIn from "@/components/FadeIn";
import ThoughtBubbles from "@/components/illustrations/ThoughtBubbles";

export const metadata: Metadata = {
  title: "Questions and answers",
  description:
    "Honest answers to the questions almost everyone asks before booking a counselling session. From “what if my problem isn’t big enough” to “where do I park”.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-12 pb-12 sm:pt-20 sm:pb-16">
        <Container size="wide">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <FadeIn className="lg:col-span-7">
              <p className="text-[13px] font-semibold uppercase tracking-wider text-navy/60">
                Common worries
              </p>
              <h1 className="mt-3 text-balance text-[2.25rem] font-semibold leading-[1.1] text-navy sm:text-[2.75rem] lg:text-[3.25rem]">
                The questions almost everyone asks
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-[17px] leading-relaxed text-navy/85 sm:text-[19px]">
                If something on your mind isn&apos;t answered here, send me a
                short message. I will reply the same day, no pressure to book.
              </p>
            </FadeIn>
            <FadeIn delay={120} className="lg:col-span-5">
              <ThoughtBubbles className="mx-auto h-auto w-full max-w-sm" />
            </FadeIn>
          </div>
        </Container>
      </section>

      <Section tone="cream" spacing="default">
        <Container>
          <FadeIn>
            <div className="rounded-xl2 bg-cream px-2 shadow-soft sm:px-6">
              <FAQItem
                question="What if my problem isn&rsquo;t big enough?"
                defaultOpen
              >
                <p>
                  That&apos;s one of the most common worries, and a fair one.
                  There is no threshold to clear. If something is making your
                  weeks harder than they should be, that is enough.
                </p>
                <p>
                  Counselling isn&apos;t only for people in crisis. It&apos;s
                  also for people who are just tired of feeling like this.
                </p>
              </FAQItem>

              <FAQItem question="What if I&rsquo;ve tried counselling before and it didn&rsquo;t work?">
                <p>
                  A lot of people I see have. Often the issue wasn&apos;t
                  counselling itself. It was the fit, the timing, or six rushed
                  sessions that ended just as things started to land.
                </p>
                <p>
                  The free first session is partly so you can find out, with
                  zero risk, whether this time feels different.
                </p>
              </FAQItem>

              <FAQItem question="What if I don&rsquo;t know what to say?">
                <p>
                  Most people don&apos;t in their first session. Some cry. Some
                  apologise for crying. Some sit quietly for a minute before
                  anything comes out. All of that is okay.
                </p>
                <p>
                  You don&apos;t need to prepare. I&apos;ll ask gentle questions
                  and we will find the thread together.
                </p>
              </FAQItem>

              <FAQItem question="Will you push me to talk about things I&rsquo;m not ready for?">
                <p>
                  No. You decide what we look at and how deep we go. If
                  something feels too much in a session, you can tell me, or
                  just shake your head, or pause. We can come back to it later
                  or not at all.
                </p>
              </FAQItem>

              <FAQItem question="What if I cry?">
                <p>
                  That&apos;s very normal in sessions, especially early ones.
                  Tissues are right there. You don&apos;t have to apologise.
                  Crying is often the body&apos;s way of saying &ldquo;at last,
                  I get to put this down for a minute&rdquo;.
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
                  If it would help, I&apos;m happy to point you towards another
                  counsellor I trust.
                </p>
              </FAQItem>

              <FAQItem question="What&rsquo;s the difference between a counsellor and a therapist?">
                <p>
                  In the UK, the words are often used interchangeably.
                  Counsellor, therapist, psychotherapist all describe people
                  trained to do talking therapy.
                </p>
                <p>
                  What matters more is the person, their training, and their
                  professional registration. I&apos;m a BACP-registered
                  counsellor, which means I work to a clear ethical framework
                  and have regular clinical supervision.
                </p>
              </FAQItem>

              <FAQItem question="How long will it take to feel different?">
                <p>
                  Honestly, it varies. Some people notice things shift in the
                  first few sessions. For others it takes longer because the
                  load is heavier or older.
                </p>
                <p>
                  What I won&apos;t do is promise transformation by week three.
                  What I will do is show up consistently and pay attention.
                </p>
              </FAQItem>

              <FAQItem question="Is everything I say confidential?">
                <p>
                  Yes. What you say in the room stays in the room. I take
                  professional supervision, where I sometimes discuss the work
                  with another senior counsellor, but you are never named or
                  identifiable.
                </p>
                <p>
                  The only exception is if I had genuine reason to believe you
                  or someone else was at serious risk of harm, in which case I
                  would talk to you first about what to do next.
                </p>
              </FAQItem>

              <FAQItem question="Do you offer online sessions or only in person?">
                <p>
                  Both. In person is at the Cranberry Wellbeing Centre in
                  Eastleigh. Online is by secure video call. Same length, same
                  attention. Online is £40, in person is £50. The first
                  session is free either way.
                </p>
              </FAQItem>

              <FAQItem question="Where is your room and is there parking?">
                <p>
                  The Cranberry Wellbeing Centre, Eastleigh, opposite The
                  Point. There is free parking right outside, no permits or
                  meters. The building has a small private waiting area inside.
                </p>
              </FAQItem>

              <FAQItem question="What if I can&rsquo;t afford £50 a week?">
                <p>
                  Please tell me when you message. I keep a small number of
                  lower-cost spaces. I&apos;d rather you ask than not come at
                  all.
                </p>
              </FAQItem>

              <FAQItem question="Can my partner or family member come with me?">
                <p>
                  My main work is one-to-one counselling, so the sessions
                  themselves are just you and me. If you&apos;d like to bring
                  someone for moral support to the building, that&apos;s fine.
                  They can wait nearby while we talk.
                </p>
              </FAQItem>

              <FAQItem question="How do I book the free first session?">
                <p>
                  Send me a short message through the{" "}
                  <a className="underline" href="/contact/">
                    contact page
                  </a>
                  , or email{" "}
                  <a
                    className="underline"
                    href="mailto:hello@hampshireheadspace.com"
                  >
                    hello@hampshireheadspace.com
                  </a>
                  . First name is fine. I&apos;ll reply the same day with a
                  time. The whole thing takes about 90 seconds.
                </p>
              </FAQItem>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section tone="yellow" spacing="tight">
        <Container>
          <FadeIn>
            <div className="text-center">
              <h2 className="text-balance text-[1.6rem] font-semibold leading-tight text-navy sm:text-[2rem]">
                Still wondering something?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-navy/85">
                You don&apos;t have to be sure. You can ask the question first
                and decide later.
              </p>
              <div className="mt-7 flex justify-center">
                <Button href="/contact/" size="lg">
                  Send me a short message
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
