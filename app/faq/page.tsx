import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Button from "@/components/Button";
import FAQItem from "@/components/FAQItem";
import FadeIn from "@/components/FadeIn";
import ThoughtBubbles from "@/components/illustrations/ThoughtBubbles";
import CloudBlob from "@/components/illustrations/CloudBlob";
import Birds from "@/components/illustrations/Birds";
import Sparkles from "@/components/illustrations/Sparkles";
import Sun from "@/components/illustrations/Sun";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Questions and answers",
  description:
    "Honest answers to the questions almost everyone asks before booking a counselling session. From “what if my problem isn’t big enough” to “where do I park”.",
  alternates: { canonical: "/faq" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      q: "What if my problem isn't big enough?",
      a: "There is no threshold to clear. If something is making your weeks harder than they should be, that is enough. Counselling isn't only for people in crisis, it's also for people who are just tired of feeling like this.",
    },
    {
      q: "What if I've tried counselling before and it didn't work?",
      a: "A lot of people have. Often the issue wasn't counselling itself but the fit, the timing, or six rushed NHS sessions that ended just as things started to land. The free first session is so you can find out, with zero risk, whether this time feels different.",
    },
    {
      q: "What if I don't know what to say?",
      a: "Most people don't in their first session. You don't need to prepare. I'll ask gentle questions and we will find the thread together.",
    },
    {
      q: "Will you push me to talk about things I'm not ready for?",
      a: "No. You decide what we look at and how deep we go. If something feels too much in a session, you can tell me, or just shake your head, or pause.",
    },
    {
      q: "What if I cry?",
      a: "Very normal, especially in early sessions. Tissues are right there. Crying is often the body's way of saying 'at last, I get to put this down for a minute'.",
    },
    {
      q: "What if we don't click?",
      a: "The first session is free for exactly this reason. If by the end you don't feel I'm the right person, that's important information, not a failure.",
    },
    {
      q: "What's the difference between a counsellor and a therapist?",
      a: "In the UK the words are often used interchangeably. What matters more is the person, their training, and their professional registration. I'm a BACP-registered counsellor.",
    },
    {
      q: "How long will it take to feel different?",
      a: "It varies. Some people notice things shift in the first few sessions, for others it takes longer. I won't promise transformation by week three, but I will show up consistently and pay attention.",
    },
    {
      q: "Is everything I say confidential?",
      a: "Yes. What you say in the room stays in the room. I take professional supervision but you are never named. The only exception is if I had genuine reason to believe you or someone else was at serious risk of harm.",
    },
    {
      q: "Do you offer online sessions or only in person?",
      a: "Both. In person is at the Cranberry Wellbeing Centre in Eastleigh. Online is by secure video call. Online is £40, in person is £50. The first session is free either way.",
    },
    {
      q: "Where is your room and is there parking?",
      a: "The Cranberry Wellbeing Centre, Eastleigh, opposite The Point. There is free parking right outside, no permits or meters.",
    },
    {
      q: "What if I can't afford £50 a week?",
      a: "Please tell me when you message. I keep a small number of lower-cost spaces.",
    },
    {
      q: "What if I'm on antidepressants?",
      a: "Common, and it doesn't change anything about whether counselling will help. Medication and talking therapy sit alongside each other comfortably.",
    },
    {
      q: "What if I've tried Headspace or Calm and it didn't help?",
      a: "Apps can be useful but were never going to do the work of being properly heard by another human being. Counselling does something different.",
    },
    {
      q: "What's your cancellation policy?",
      a: "Cancel at least 24 hours before our session and there's no charge. Cancellations within 24 hours or missed sessions without contact are charged at the full session rate.",
    },
    {
      q: "How do I book the free first session?",
      a: "Send a short message through the contact page or email hello@hampshireheadspace.com. First name is fine. I'll reply the same day with a time.",
    },
  ].map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="relative overflow-hidden pt-10 pb-10 sm:pt-16 sm:pb-12">
        <CloudBlob
          variant="blue"
          className="pointer-events-none absolute -top-12 left-[-5rem] h-56 w-[22rem] opacity-25 animate-drift-slow"
        />
        <CloudBlob
          variant="yellow"
          className="pointer-events-none absolute -bottom-10 right-[-5rem] h-44 w-72 opacity-30 animate-drift-slower"
        />
        <Sparkles className="pointer-events-none absolute top-16 right-[18%] h-24 w-44 opacity-70 animate-twinkle" />
        <Container>
          <FadeIn>
            <ThoughtBubbles className="mx-auto h-auto w-full max-w-[180px] sm:max-w-[220px]" />
          </FadeIn>
          <FadeIn delay={120}>
            <h1 className="mx-auto mt-4 max-w-3xl text-center text-balance text-[1.85rem] font-semibold leading-[1.15] text-navy sm:text-[2.5rem] lg:text-[3rem]">
              The questions almost everyone asks
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-center text-pretty text-[16px] leading-relaxed text-navy/85 sm:text-[18px]">
              If something on your mind isn&apos;t answered here, send me a
              short message. I&apos;ll reply the same day, no pressure to book.
            </p>
          </FadeIn>
        </Container>
      </section>

      <Section tone="cream" spacing="default" className="relative overflow-hidden">
        <ThoughtBubbles className="pointer-events-none absolute -top-6 right-[2%] h-32 w-56 opacity-40 animate-float-soft" />
        <ThoughtBubbles className="pointer-events-none absolute bottom-10 left-[-2%] h-28 w-48 opacity-35 animate-drift-slower" />
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
                  A lot of people I see have, and often the issue wasn&apos;t
                  counselling itself but rather the fit with the particular
                  counsellor, the timing in their life, or a course of six
                  rushed sessions that ended just as things were starting to
                  land. None of that means it can&apos;t work for you now.
                </p>
                <p>
                  The free first session is partly so you can find out, with
                  zero risk, whether this time feels different.
                </p>
              </FAQItem>

              <FAQItem question="What if I&rsquo;m on antidepressants?">
                <p>
                  That&apos;s very common, and it doesn&apos;t change anything
                  about whether counselling will help. Medication and talking
                  therapy work in different ways and they sit alongside each
                  other comfortably. I&apos;m not a doctor, so I won&apos;t
                  give you medical advice, but I won&apos;t tell you to come
                  off your medication either, or pressure you to stay on it.
                  That stays between you and your GP.
                </p>
              </FAQItem>

              <FAQItem question="What if I&rsquo;ve tried Headspace, Calm or another app and it didn&rsquo;t help?">
                <p>
                  Apps can be useful for getting through a difficult morning,
                  but they were never going to do the work of being properly
                  heard by another human being for nearly an hour. If apps had
                  done the trick, you wouldn&apos;t still be looking, and the
                  fact that you&apos;re here suggests you already know that.
                </p>
                <p>
                  Counselling does something different. It&apos;s a real
                  conversation with someone who is paying close attention to
                  you in particular, not a recording, not a chatbot, and not
                  a five-minute meditation that gets interrupted by an email.
                </p>
              </FAQItem>

              <FAQItem question="What&rsquo;s your cancellation policy?">
                <p>
                  Life happens, and I&apos;d rather you cancel than push
                  yourself to come when you can&apos;t. If you can let me know
                  at least 24 hours before our session, there&apos;s no charge.
                  Cancellations within 24 hours, or missed sessions without
                  any contact, are charged at the full session rate, simply
                  because that time was set aside for you.
                </p>
                <p>
                  If you need to move things around for a one-off reason, just
                  send me a quick message and we&apos;ll figure it out.
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

      <Section tone="cream" spacing="tight">
        <Container>
          <FadeIn>
            <Testimonial
              variant="pullquote"
              quote={
                <>
                  &ldquo;I had so many questions before booking and felt
                  embarrassed to ask. Ruth replied to my email like a normal
                  person, not a clinic. That was when i knew it would be
                  ok.&rdquo;
                </>
              }
              attribution="Lauren"
              context="33, Winchester"
            />
          </FadeIn>
        </Container>
      </Section>

      <Section tone="yellow" spacing="tight" className="relative overflow-hidden">
        <Sun
          className="pointer-events-none absolute top-8 left-[10%] h-28 w-28 opacity-55 animate-float-soft"
          withRays
        />
        <div
          className="pointer-events-none absolute top-16 left-0 right-0 h-12 animate-fly-across"
          style={{ animationDuration: "115s" }}
          aria-hidden="true"
        >
          <Birds className="h-12 w-44 opacity-55" count={2} />
        </div>
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
