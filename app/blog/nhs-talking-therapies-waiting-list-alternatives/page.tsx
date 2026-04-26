import type { Metadata } from "next";
import BlogLayout from "@/components/BlogLayout";

export const metadata: Metadata = {
  title:
    "Waiting on NHS Talking Therapies: how long is too long, and what to do meanwhile",
  description:
    "A practical guide for the months between referral and the first session that may or may not arrive.",
  alternates: {
    canonical: "/blog/nhs-talking-therapies-waiting-list-alternatives",
  },
};

export default function Page() {
  return (
    <BlogLayout
      title="Waiting on NHS Talking Therapies: how long is too long, and what to do meanwhile"
      description="A practical guide for the months between referral and the first session that may or may not arrive."
      publishedISO="2026-03-10"
      publishedHuman="10 March 2026"
      readMinutes={7}
    >
      <p>
        If you&apos;re reading this, there&apos;s a reasonable chance
        you&apos;ve been on an NHS Talking Therapies waiting list for
        longer than your GP suggested you would be. You&apos;re not on
        your own. The system is well-meaning and genuinely helps a lot of
        people, but it is also stretched in ways that mean the gap between
        referral and first appointment can be months, sometimes much longer,
        depending on where you live and what you&apos;ve been referred for.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        How NHS Talking Therapies actually works
      </h2>
      <p>
        Talking Therapies (formerly called IAPT, the Improving Access to
        Psychological Therapies programme) is the main way the NHS provides
        talking therapy in England. You can self-refer through your local
        service&apos;s website, or your GP can refer you. After referral,
        you&apos;ll typically have a triage call within a few weeks. After
        that, the wait for actual therapy can be anywhere from weeks to
        the better part of a year, depending on the service and on what
        you&apos;ve been assessed as needing.
      </p>
      <p>
        For most people, the therapy you&apos;ll be offered is CBT
        (cognitive behavioural therapy), often delivered as a course of
        six to twelve sessions. For some people that&apos;s exactly the
        right thing. For others, especially when grief, identity, or
        long-standing patterns are involved, six sessions of CBT can feel
        like the wrong tool, or simply not enough time.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        What &ldquo;the waiting list&rdquo; actually does to you
      </h2>
      <p>
        Quietly, often unnoticed, the waiting itself becomes part of the
        problem. There&apos;s a particular flavour of demoralisation that
        comes from knowing you&apos;ve asked for help and being told help
        is on its way, indefinitely. You stop reaching out to anyone else.
        You stop doing the small useful things you used to do for yourself,
        because you&apos;re &ldquo;already getting help.&rdquo; You feel
        guilty for taking up a slot you don&apos;t deserve, and worse for
        being annoyed that the slot hasn&apos;t materialised.
      </p>
      <p>
        Several studies of people on long mental health waiting lists in
        the UK have found that significant numbers report deteriorating
        during the wait. None of that is your fault. It&apos;s a
        predictable response to being in limbo for months while your life
        keeps demanding things from you.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        How long is too long?
      </h2>
      <p>
        There&apos;s no clean answer, but a useful rough guide is this:
        if you&apos;re managing reasonably well, the wait might be
        tolerable as long as it doesn&apos;t exceed about three months. If
        you&apos;re actively struggling (panic attacks, persistent low
        mood, significant disruption to sleep, work, or relationships) and
        the wait is going to be longer than that, it&apos;s worth
        considering other options sooner.
      </p>
      <p>
        That isn&apos;t a criticism of the NHS. It&apos;s simply an
        acknowledgement that for some people, three to nine months without
        any kind of support is a long time to be carrying what they&apos;re
        carrying.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        What to do while you wait
      </h2>
      <p>
        <strong>Do something for the body.</strong> Sleep, walking,
        daylight, basic eating. None of this fixes anything but all of it
        keeps the floor under you. Counsellors will tell you that the
        single most useful thing you can do for your mood is the unglamorous
        thing of getting outside in the morning for twenty minutes.
      </p>
      <p>
        <strong>Use the basic charity supports.</strong> Mind has free
        information and self-help resources at{" "}
        <a className="underline" href="https://www.mind.org.uk">mind.org.uk</a>
        . The Samaritans (116 123, free, 24/7) will talk to you whenever
        you want, about anything, and you don&apos;t have to be at crisis
        point. Anxiety UK and CALM also offer good basic support.
      </p>
      <p>
        <strong>Tell someone, properly.</strong> Not the
        &ldquo;I&apos;m fine, just tired&rdquo; version. The actual one.
        It&apos;s often easier to say it to one person who isn&apos;t in
        your daily life than to your closest people. A trusted friend, a
        cousin you don&apos;t see much, an aunt, even a sympathetic GP
        again.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        Considering private counselling
      </h2>
      <p>
        Private counselling is one of the things people consider while
        they&apos;re waiting. It costs money (typically £40 to £70 a
        session in Hampshire) and that&apos;s a real consideration,
        especially right now. But it has some real advantages: you can
        usually start within a week or two, you can choose someone whose
        approach feels right to you, and you&apos;re not limited to a
        fixed number of sessions.
      </p>
      <p>
        It&apos;s worth knowing that being on the NHS list doesn&apos;t
        stop you from also having private counselling, and starting
        private support doesn&apos;t take you off the NHS list. They run
        in parallel.
      </p>
      <p>
        If finance is the thing standing in the way, many private
        counsellors keep a small number of lower-cost spaces. It&apos;s
        always worth asking, because most counsellors would much rather
        see someone for £25 than not at all.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        If things get worse while you&apos;re waiting
      </h2>
      <p>
        Please don&apos;t wait. If you&apos;re experiencing thoughts of
        suicide or self-harm, or if you genuinely don&apos;t feel safe,
        contact 111 (option 2 for mental health), the Samaritans on 116
        123, or in immediate danger, 999. Your GP can also expedite a
        referral or change the type of support you&apos;re waiting for if
        the situation has changed.
      </p>
      <p>
        Being on a waiting list isn&apos;t the same as being beyond
        help. The waiting list is one route. There are others.
      </p>
    </BlogLayout>
  );
}
