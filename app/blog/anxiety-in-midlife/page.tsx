import type { Metadata } from "next";
import BlogLayout from "@/components/BlogLayout";

export const metadata: Metadata = {
  title: "Anxiety in midlife: why it shows up now",
  description:
    "On the surface nothing changed, and yet everything feels like it might.",
  alternates: { canonical: "/blog/anxiety-in-midlife" },
};

export default function Page() {
  return (
    <BlogLayout
      title="Anxiety in midlife: why it shows up now"
      description="On the surface nothing changed, and yet everything feels like it might."
      publishedISO="2026-02-14"
      publishedHuman="14 February 2026"
      readMinutes={6}
    >
      <p>
        It often starts as a feeling rather than a thought. A tightness in
        the chest while you&apos;re making coffee. A small dread when the
        phone rings. A heart rate that picks up when you sit down at your
        desk for no obvious reason. People in their late thirties, forties,
        and fifties often arrive at counselling describing some version of
        this and asking the same question: why now?
      </p>
      <p>
        On the surface, life looks the same as it did six months ago. The
        kids are okay. The job is okay. The marriage is okay. There&apos;s
        no obvious crisis. And yet you can&apos;t shake the feeling that
        you&apos;re running closer to the edge than you used to.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        What&apos;s actually happening
      </h2>
      <p>
        Anxiety in midlife very rarely arrives because of one thing. It
        usually arrives because several things are quietly accumulating
        all at once, and the system that used to absorb them has run out
        of capacity. Some of the common ingredients:
      </p>
      <p>
        <strong>The pile-up of responsibility.</strong> By your forties
        you&apos;re often holding the largest amount of life-admin
        you&apos;ve ever held. A career deep enough to have stakes,
        children deep enough to have problems, a house with things that
        keep needing fixing, possibly an ageing parent starting to need
        things, and the small but constant tax of being the person
        everyone else turns to.
      </p>
      <p>
        <strong>Sleep that isn&apos;t quite restorative any more.</strong>
        {" "}A combination of perimenopausal changes, stress
        hyper-arousal, and just the sheer volume of things turning over
        in your head means the seven hours you&apos;re technically
        getting aren&apos;t the seven hours you used to get.
      </p>
      <p>
        <strong>Hormonal shifts.</strong> For people who menstruate, the
        late thirties and early forties are when perimenopause typically
        begins. Hormonal fluctuation directly affects mood, sleep, and
        anxiety levels in ways that are still under-recognised.
      </p>
      <p>
        <strong>Mortality, quietly.</strong> Someone close to you has
        died, or is starting to. You&apos;ve started reading the obituary
        section, or noticing the ages. You&apos;re halfway through a
        life. The body knows.
      </p>
      <p>
        <strong>The post-pandemic background.</strong> Several years of
        unresolved low-grade fear, isolation, and hypervigilance left a
        residue in everyone&apos;s nervous system that has not entirely
        cleared.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        Why &ldquo;just relax&rdquo; doesn&apos;t work
      </h2>
      <p>
        Anxiety in midlife is often misread as a thinking problem
        (&ldquo;I&apos;m worrying about silly things&rdquo;) when
        it&apos;s actually a body problem. Your nervous system has been
        running too hot for too long. It can&apos;t simply be talked into
        running cooler.
      </p>
      <p>
        That&apos;s why the usual advice (read a book, do meditation,
        take a bath) often disappoints. Those things help at the margins
        but they don&apos;t address the underlying fact that your
        physiology has been told for a sustained period that things are
        not safe and is responding accordingly.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        What helps
      </h2>
      <p>
        <strong>Naming it accurately.</strong> A surprising number of
        people are several months into anxiety before they realise that
        what they&apos;ve been calling &ldquo;tiredness&rdquo; or
        &ldquo;being in a funk&rdquo; is actually anxiety. Naming it
        precisely (panic, generalised anxiety, health anxiety, social
        anxiety) makes it easier to deal with.
      </p>
      <p>
        <strong>The boring physical basics.</strong> Daylight in the
        morning, walking, basic protein, drinking less alcohol than
        you&apos;d like. None of these fix anything. All of them lower
        the floor a little.
      </p>
      <p>
        <strong>Talking to someone trained.</strong> Friends are good for
        many things. They are not very good for anxiety, partly because
        they get worried, and partly because anxiety needs a particular
        kind of attention that doesn&apos;t come from inside your social
        circle. A counsellor or therapist trained in anxiety can help you
        understand the patterns you&apos;ve been running and find ways
        out of them.
      </p>
      <p>
        <strong>Not white-knuckling it.</strong> The instinct to push
        through is strong, and for a while it works. After a while it
        stops working, and pushing harder makes things worse rather than
        better. The counter-intuitive thing is often that the way out is
        slowing down, not speeding up.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        On medication
      </h2>
      <p>
        Plenty of people in midlife are on antidepressants, often
        prescribed by a GP after a relatively brief conversation. They
        help some people enormously, do little for others, and aren&apos;t
        a substitute for the talking work for most.
      </p>
      <p>
        Counselling and medication aren&apos;t competing options. They
        sit alongside each other comfortably. If you&apos;re considering
        either, think of them as complementary rather than as a choice.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        When to take it seriously
      </h2>
      <p>
        Anxiety becomes worth getting help for when it&apos;s changing
        the shape of your life. When you&apos;re avoiding things you
        used to do, when sleep has been bad for more than a couple of
        weeks, when you&apos;re drinking more than you&apos;d planned to,
        when you&apos;re finding it hard to be present with people you
        love. Those are the signals.
      </p>
      <p>
        Anxiety in midlife is an extremely common, treatable thing.
        It&apos;s also one of the things that responds best to
        counselling, especially when there&apos;s no obvious external
        crisis driving it. The hardest part is admitting that it&apos;s
        what&apos;s going on. After that, the work is much easier than
        you&apos;d expect.
      </p>
    </BlogLayout>
  );
}
