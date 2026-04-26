import type { Metadata } from "next";
import BlogLayout from "@/components/BlogLayout";

export const metadata: Metadata = {
  title: "Counselling, therapy, psychotherapy: the actual difference",
  description:
    "The plain-English version, with the bits the official sites don't quite spell out.",
  alternates: { canonical: "/blog/counselling-vs-therapy-vs-psychotherapy" },
};

export default function Page() {
  return (
    <BlogLayout
      title="Counselling, therapy, psychotherapy: what's the actual difference?"
      description="The plain-English version, with the bits the official sites don't quite spell out."
      publishedISO="2026-04-04"
      publishedHuman="4 April 2026"
      readMinutes={6}
    >
      <p>
        If you&apos;ve been Googling around, you&apos;ll have noticed that
        the same person seems to be variously described as a counsellor, a
        therapist, a psychotherapist, and sometimes a &ldquo;mental health
        professional.&rdquo; The labels appear interchangeable, except when
        they&apos;re used to make subtle distinctions that nobody quite
        bothers to explain.
      </p>
      <p>
        Here&apos;s the honest version, with the technical and the practical
        bits separated out.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        The technical answer
      </h2>
      <p>
        In the UK, none of these words are protected by law. Anyone can call
        themselves a counsellor or a therapist without any qualification at
        all. What is protected, in some cases, is the title
        &ldquo;psychologist&rdquo; (specifically &ldquo;clinical
        psychologist&rdquo; and &ldquo;chartered psychologist&rdquo;), which
        requires registration with the Health and Care Professions Council.
        Everything else is convention.
      </p>
      <p>
        That said, in professional usage there are loose conventions. A
        counsellor has typically completed a diploma-level qualification (one
        to three years of training, often part-time). A psychotherapist has
        usually done longer or deeper training, often four to six years,
        often including their own personal therapy as part of the course. A
        therapist is a catch-all term that covers either of the above, and
        sometimes other things too.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        The practical answer
      </h2>
      <p>
        From the client&apos;s side of the room, the difference is much
        smaller than the labels suggest. Both counsellors and
        psychotherapists do essentially the same thing: they sit with you in
        a private room (or on a video call), pay close attention, and help
        you make sense of what&apos;s going on for you. The conversation
        looks the same. The chairs are the same. The work is recognisably
        the same kind of work.
      </p>
      <p>
        The slight differences in convention are these. Counselling tends to
        focus on a specific issue or set of issues that have brought you to
        the room (a bereavement, an anxious season at work, a relationship
        that&apos;s ended) and aims to help you move through that
        particular thing. Psychotherapy tends to be longer-term and
        sometimes goes further into the patterns underneath, the ways
        you&apos;ve learned to be that aren&apos;t serving you any more.
        These are tendencies, not rules. Plenty of counsellors do open-ended
        depth work, and plenty of psychotherapists work briefly and
        practically.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        What about CBT, person-centred, integrative, and so on?
      </h2>
      <p>
        Those are modalities, the school of thought a practitioner has
        trained in and works from.
      </p>
      <p>
        <strong>Person-centred counselling</strong> trusts that you have
        the answers inside you, and the counsellor&apos;s job is to provide
        the conditions (acceptance, empathy, honesty) for you to find them.
        It&apos;s warm, conversational, and very common in private practice.
      </p>
      <p>
        <strong>CBT (cognitive behavioural therapy)</strong> works on the
        connection between thoughts, feelings, and behaviour, often with
        practical homework between sessions. It&apos;s the modality the NHS
        usually offers and is well-evidenced for anxiety and low mood.
      </p>
      <p>
        <strong>Psychodynamic therapy</strong> looks at how patterns from
        early life show up in the present. It tends to be longer and goes
        deeper into your story.
      </p>
      <p>
        <strong>Integrative counselling</strong> blends several approaches.
        Most experienced private counsellors are integrative in practice
        even when they don&apos;t use the word, because real human problems
        rarely sit neatly inside one model.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        How to choose between &ldquo;counsellor&rdquo; and
        &ldquo;psychotherapist&rdquo;
      </h2>
      <p>
        For most people considering private support for the first time, the
        answer is: don&apos;t worry about the label, focus on the person.
        A well-trained, BACP-registered counsellor and a well-trained UKCP
        psychotherapist are both good choices for the kinds of things people
        usually come to private therapy for.
      </p>
      <p>
        If you know you want very long-term, depth-oriented work, look
        specifically for a psychotherapist or psychoanalytic therapist. If
        you want shorter, focused work on a particular issue, a counsellor
        is often a more natural fit. If you&apos;re not sure, the free first
        session at any decent practice will tell you more than another hour
        of Googling will.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        The thing the official sites don&apos;t quite spell out
      </h2>
      <p>
        The label on the door matters less than the registration behind it
        and the person behind that. Two counsellors with identical
        qualifications can have very different effects on you. Two
        psychotherapists from the same training school can feel completely
        different to sit with. The work is, in the end, between two people
        in a room, and the relationship is the active ingredient.
      </p>
      <p>
        That&apos;s why most professional bodies recommend booking with the
        person whose voice and approach feel right to you, then using the
        first session to confirm the fit, rather than choosing on the
        strength of qualifications alone.
      </p>
    </BlogLayout>
  );
}
