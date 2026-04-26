import type { Metadata } from "next";
import BlogLayout from "@/components/BlogLayout";

export const metadata: Metadata = {
  title: "Grief doesn't follow the timeline you expected",
  description:
    "Why bereavement keeps surprising you a year, two years, ten years on, and what to do about it.",
  alternates: { canonical: "/blog/grief-doesnt-follow-a-timeline" },
};

export default function Page() {
  return (
    <BlogLayout
      title="Grief doesn't follow the timeline you expected"
      description="Why bereavement keeps surprising you a year, two years, ten years on, and what to do about it."
      publishedISO="2026-01-28"
      publishedHuman="28 January 2026"
      readMinutes={6}
    >
      <p>
        Grief doesn&apos;t move in straight lines. People often arrive at
        counselling embarrassed because they thought they&apos;d
        &ldquo;dealt with&rdquo; their bereavement years ago, and now,
        unexpectedly, they&apos;re crying in the supermarket and
        can&apos;t quite say why. Or they&apos;re ten months in and
        wondering when they&apos;ll &ldquo;feel normal again,&rdquo; with
        a quiet horror that the answer might be never.
      </p>
      <p>
        The honest news is: grief doesn&apos;t follow a timeline. The
        better news is: that doesn&apos;t mean something is wrong with
        you, and there&apos;s a lot that can help.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        The five-stages thing
      </h2>
      <p>
        You&apos;ve probably heard the model. Denial, anger, bargaining,
        depression, acceptance. Elisabeth Kübler-Ross developed it in the
        1960s, and it&apos;s become the cultural shorthand for grief.
      </p>
      <p>
        Worth knowing: she developed it observing people who were
        themselves dying, not people who had been bereaved. She also
        never claimed the stages happened in order, that everyone went
        through all of them, or that they happened only once. The popular
        version of the model has flattened it into a tidy progression
        that doesn&apos;t quite match how grief actually behaves.
      </p>
      <p>
        Most contemporary grief researchers describe grief less as
        stages and more as oscillation, a back-and-forth between
        engaging with the loss and getting on with daily life, with the
        balance gradually shifting over time. That feels much closer to
        the actual experience for most people.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        Why it keeps coming back
      </h2>
      <p>
        Grief tends to ambush you long after the early acute period,
        often at moments that catch you off guard.
      </p>
      <ul className="ml-6 list-disc space-y-2">
        <li>
          Anniversaries of the death, often felt in the body before the
          conscious mind notices the date.
        </li>
        <li>
          The first time you reach a milestone they should have been
          part of (your wedding, your child&apos;s graduation, a
          birthday they would have celebrated).
        </li>
        <li>
          A small sensory cue (a smell, a song, a phrase someone uses)
          that suddenly puts you back in their kitchen.
        </li>
        <li>
          Other losses, even small ones, that quietly reactivate the
          old one.
        </li>
        <li>
          Sometimes for no obvious reason at all.
        </li>
      </ul>
      <p>
        This is normal. It doesn&apos;t mean you&apos;re going backwards.
        It means the relationship was real, and the absence is real, and
        your nervous system is still negotiating the fact.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        What &ldquo;processing&rdquo; actually means
      </h2>
      <p>
        The popular advice to &ldquo;work through&rdquo; grief sometimes
        suggests that there&apos;s a finish line, after which the loss
        no longer affects you. That isn&apos;t generally how it works.
      </p>
      <p>
        Processing grief is more about expanding the size of your life
        around the loss, so that the loss takes up a smaller proportion
        of your daily experience even though it remains. It&apos;s about
        being able to think about the person without it costing you the
        rest of the day. It&apos;s about being able to enjoy things
        again without feeling guilty for enjoying them.
      </p>
      <p>
        Most people don&apos;t &ldquo;get over&rdquo; significant losses.
        They get to a place where the loss is integrated into their
        story, rather than being the wall they keep walking into.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        When to consider counselling for grief
      </h2>
      <p>
        Bereavement counselling can help at any point, but particularly
        when:
      </p>
      <ul className="ml-6 list-disc space-y-2">
        <li>
          The loss feels stuck. You&apos;re still in the early acute
          state long after most people seem to have moved on, or
          you&apos;re circling the same thoughts without movement.
        </li>
        <li>
          You&apos;ve been holding it together for everyone else and
          haven&apos;t had room to grieve yourself.
        </li>
        <li>
          You and the person had a complicated or unfinished
          relationship.
        </li>
        <li>
          The death itself was traumatic (sudden, violent, by suicide,
          or one you witnessed).
        </li>
        <li>
          You&apos;re finding that the grief is starting to bleed into
          other areas (work, relationships, sleep, mood) in ways that
          worry you.
        </li>
        <li>
          You simply want a space that&apos;s yours, where you can talk
          about the person without managing anyone else&apos;s reaction.
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        What it&apos;s actually like
      </h2>
      <p>
        Bereavement counselling isn&apos;t a particular technique done
        to you. It&apos;s a weekly hour with someone who isn&apos;t
        afraid of your grief, who won&apos;t try to fix it or talk you
        out of it, and who can sit with the parts of it that other
        people back away from.
      </p>
      <p>
        That sounds simple, and it is. It&apos;s also surprisingly
        difficult to find anywhere else. Friends and family are loving
        but they have stakes in your continued functioning. They want
        you to be okay. A counsellor doesn&apos;t need you to be okay,
        which paradoxically makes okay easier to find.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        On the people who tell you it&apos;s time to move on
      </h2>
      <p>
        They mean well, mostly. They&apos;re uncomfortable with your
        sadness because it makes them think about their own losses, or
        possible losses to come. The phrase &ldquo;move on&rdquo;
        usually says more about their discomfort than about your
        timeline.
      </p>
      <p>
        You move on when you move on. Or, more accurately, you move
        forward, while carrying it. Both can be true.
      </p>
    </BlogLayout>
  );
}
