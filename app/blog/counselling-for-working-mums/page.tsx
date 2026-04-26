import type { Metadata } from "next";
import BlogLayout from "@/components/BlogLayout";

export const metadata: Metadata = {
  title:
    "When you've held it together for everyone else for too long",
  description:
    "Notes for working mothers who don't have time, energy or permission to fall apart.",
  alternates: { canonical: "/blog/counselling-for-working-mums" },
};

export default function Page() {
  return (
    <BlogLayout
      title="When you've held it together for everyone else for too long"
      description="Notes for working mothers who don't have time, energy or permission to fall apart."
      publishedISO="2026-02-22"
      publishedHuman="22 February 2026"
      readMinutes={6}
    >
      <p>
        There&apos;s a particular shape of exhaustion that is hard to
        describe to anyone who hasn&apos;t been carrying it. It&apos;s the
        exhaustion of being competent for everyone else for years on end,
        managing a household, a job, a partner, two or three children, a
        parent who is starting to need things, while quietly running the
        background processes of remembering everyone&apos;s appointments,
        worrying about everyone&apos;s feelings, and never quite catching
        up on sleep.
      </p>
      <p>
        It looks fine from the outside. That&apos;s the worst part. You
        post on the family chat, you smile at school pickup, you finish
        the report, you make the dinner. From the outside, you are
        functional. Inside, something has been quietly running on empty
        for so long you can&apos;t remember what full feels like.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        How it usually shows up
      </h2>
      <p>
        It often arrives sideways, not as obvious depression. The usual
        early signs are:
      </p>
      <ul className="ml-6 list-disc space-y-2">
        <li>
          Snapping more easily, then carrying enormous guilt afterwards.
        </li>
        <li>
          Crying at small things (an advert, a child&apos;s drawing, a
          stranger being kind).
        </li>
        <li>
          Going to bed exhausted but not being able to sleep, or sleeping
          and waking still tired.
        </li>
        <li>
          Drinking a bit more in the evening to take the edge off.
        </li>
        <li>
          Losing interest in things you used to enjoy, then guilt-tripping
          yourself for not making time for them.
        </li>
        <li>
          A sense of dread on Sunday evenings.
        </li>
        <li>
          Irritability at the people closest to you, while staying utterly
          patient with strangers and colleagues.
        </li>
      </ul>
      <p>
        None of this means you&apos;re a bad mother, a bad partner, or a
        bad person. It usually means you&apos;ve been carrying more than
        anyone could carry indefinitely, and your body and brain are
        starting to negotiate.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        Why it&apos;s often unspoken
      </h2>
      <p>
        Working mothers often don&apos;t talk about this for a few
        understandable reasons. There&apos;s the
        &ldquo;other-people-have-it-worse&rdquo; reflex (someone&apos;s
        always got more on, you don&apos;t want to be that person who
        complains). There&apos;s the fear that if you say it out loud,
        people will conclude you can&apos;t cope, with implications for
        work, the kids, the marriage. There&apos;s the worry of seeming
        ungrateful for the life you&apos;ve worked hard to build.
      </p>
      <p>
        And there&apos;s the version of yourself you&apos;ve constructed
        for the world, who is calm and competent and on top of things,
        and who you don&apos;t want to dismantle in front of the school
        gates.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        Why counselling, specifically, helps
      </h2>
      <p>
        Friends are wonderful, but talking to a friend involves managing
        their reactions. They want to fix it, or they get upset, or they
        compare it to their own thing, or they need looking after a bit
        once you&apos;ve told them. None of that is malicious, it&apos;s
        just what friendship does. It means you can rarely fully let go in
        a conversation with someone who has stakes in your life.
      </p>
      <p>
        A counsellor has no stakes in your life. They aren&apos;t going to
        be at the school disco. They don&apos;t need you to be okay. They
        don&apos;t mind if you cry, or swear, or say the unspeakable
        thing. Their job is to be there, properly, for fifty-five minutes
        a week, and to take what you bring without needing you to soften
        it for them.
      </p>
      <p>
        For a lot of working mothers, that hour is the first hour in years
        in which they don&apos;t have to be anything for anyone else.
        That&apos;s the active ingredient.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        On guilt about the cost
      </h2>
      <p>
        Most of the working mothers we hear from initially balk at the
        idea of spending fifty pounds a week on themselves. The reasoning
        is always the same: there are other things the money could go to,
        and they don&apos;t want to be selfish.
      </p>
      <p>
        Without lecturing about it, the maths usually works out the other
        way. A version of you who sleeps better, snaps less, and isn&apos;t
        running on background dread is a version of you who shows up
        better for the very people you&apos;re trying not to spend the
        money on. Most people who do the work say they regret not having
        started sooner, not the cost.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        On time
      </h2>
      <p>
        Fifty-five minutes a week, plus travel. Most counsellors keep
        evening or weekend slots specifically because the people who need
        them most are working during the day. If you&apos;re not sure how
        you&apos;d carve out the time, ask in your initial message; most
        practices will work with you.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        The first step
      </h2>
      <p>
        It is, genuinely, the hardest. The actual moment of sending the
        first message takes thirty seconds and feels like much more.
        After that, the rest is much easier than the closing-the-tab
        cycle you might have been in for the past few months.
      </p>
      <p>
        You don&apos;t have to be sure. You don&apos;t have to know what
        to say. You&apos;re allowed to want this for yourself.
      </p>
    </BlogLayout>
  );
}
