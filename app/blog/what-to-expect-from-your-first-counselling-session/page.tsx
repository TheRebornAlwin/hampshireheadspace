import type { Metadata } from "next";
import BlogLayout from "@/components/BlogLayout";

export const metadata: Metadata = {
  title: "What to expect from your first counselling session",
  description:
    "Step by step, beat by beat, so you know what's coming before you walk in.",
  alternates: { canonical: "/blog/what-to-expect-from-your-first-counselling-session" },
};

export default function Page() {
  return (
    <BlogLayout
      title="What to expect from your first counselling session"
      description="Step by step, beat by beat, so you know what's coming before you walk in."
      publishedISO="2026-03-28"
      publishedHuman="28 March 2026"
      readMinutes={6}
    >
      <p>
        The single biggest reason people stop themselves from booking a
        counselling session, and stop themselves from turning up after they
        have, is that they don&apos;t know what&apos;s about to happen. The
        unknown reads as threat, your nervous system tightens, and the
        easiest way to make the threat go away is to close the tab.
      </p>
      <p>
        So here&apos;s the demystified version. Roughly the same shape across
        most private counselling practices in the UK, with small variations
        between practitioners.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">Before you arrive</h2>
      <p>
        You&apos;ll usually have exchanged a couple of messages with the
        counsellor by this point, confirming the time and the location.
        You&apos;re not expected to have written anything down or prepared a
        speech. Most people arrive without quite knowing what they&apos;re
        going to say, and that&apos;s fine.
      </p>
      <p>
        Wear whatever feels comfortable. Bring whatever you want, including
        nothing. If you usually take notes, bring a notebook. If your hands
        like something to hold, bring a coffee. There&apos;s no dress code
        and no expectation.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">Walking in</h2>
      <p>
        Most private counsellors work from a calm office or a wellbeing
        centre rather than a clinical-looking building. There&apos;s usually
        a small waiting area. You don&apos;t generally need to announce
        yourself at a desk. The counsellor will come and find you at the
        time of your appointment.
      </p>
      <p>
        Some people find this part the hardest. The five minutes between
        sitting down in the waiting area and the counsellor opening the door
        can feel surprisingly tense. That&apos;s normal. Once you&apos;re in
        the room, that particular kind of waiting-room tension dissolves
        very quickly.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">The room itself</h2>
      <p>
        Two comfortable chairs, set at an angle to each other. Soft lighting,
        usually a window. A box of tissues somewhere obvious. Probably a
        glass of water, possibly a plant, possibly a clock you can see
        without being obvious about it. Nothing alarming. Nothing clinical.
      </p>
      <p>
        The door closes properly. Counselling rooms are designed so that
        someone passing in the corridor outside can&apos;t hear what
        you&apos;re saying. If a particular practice can&apos;t guarantee
        that, they shouldn&apos;t be running sessions there.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">How it actually starts</h2>
      <p>
        Different counsellors have different opening lines. Common ones
        include:
      </p>
      <ul className="ml-6 list-disc space-y-2">
        <li>&ldquo;Tell me a bit about what brings you here today.&rdquo;</li>
        <li>&ldquo;Where would you like to start?&rdquo;</li>
        <li>
          &ldquo;Do you want me to ask you some questions, or would you
          rather just talk?&rdquo;
        </li>
      </ul>
      <p>
        There&apos;s no script and no clipboard. The counsellor isn&apos;t
        waiting to write something down, and you don&apos;t need to deliver
        your story in a particular order or use the right words.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        What you don&apos;t have to do
      </h2>
      <p>
        You don&apos;t have to know what&apos;s wrong. You don&apos;t have
        to be coherent. You don&apos;t have to share everything, and you
        don&apos;t have to share anything you&apos;re not ready to. You can
        pause. You can cry. You can apologise for crying (most people do, in
        their first session, and most counsellors will gently tell you not
        to). You can sit in silence for thirty seconds while you find a
        word. None of this is awkward, even though it might feel like it.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        What does the counsellor do?
      </h2>
      <p>
        Mostly, listens. Closely. Without checking their phone, without
        thinking about lunch, without rushing you. Asks gentle questions
        when something isn&apos;t clear, or when there&apos;s a thread worth
        pulling. Reflects back what they&apos;re hearing, sometimes word
        for word, so that you can hear it from the outside.
      </p>
      <p>
        A good counsellor doesn&apos;t lecture, doesn&apos;t hand out
        prescriptive advice, and doesn&apos;t tell you what they would have
        done. They help you find your own clarity, which is much more
        durable than someone else&apos;s.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">How long it lasts</h2>
      <p>
        The standard length is fifty minutes (the &ldquo;therapy hour&rdquo;)
        though some practices, including Hampshire Headspace, run
        fifty-five-minute sessions to give a small extra cushion. The
        counsellor will let you know gently when there&apos;s ten minutes
        left, so you can land somewhere that feels okay rather than getting
        cut off mid-sentence.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">After the session</h2>
      <p>
        At the end, the counsellor will usually ask whether you&apos;d like
        to book another session. There should be no pressure either way.
        With a free first session, the polite answer is to take a few days
        and see how the conversation sits with you, then send a short
        message saying yes or no. Either is fine. Counsellors are used to
        people not coming back after a first session, and a good one will
        be glad you tried, regardless.
      </p>
      <p>
        Many people feel quite tired afterwards. That&apos;s normal. The
        nervous system has done some work even if the conversation felt
        light. Plan for a quiet hour afterwards if you can.
      </p>
    </BlogLayout>
  );
}
