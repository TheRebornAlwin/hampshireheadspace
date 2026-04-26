import type { Metadata } from "next";
import BlogLayout from "@/components/BlogLayout";

export const metadata: Metadata = {
  title: "How to choose a counsellor in Eastleigh",
  description:
    "Six questions worth asking before you book, and what every counsellor's website tells you that you can safely ignore.",
  alternates: { canonical: "/blog/how-to-choose-a-counsellor-in-eastleigh" },
};

export default function Page() {
  return (
    <BlogLayout
      title="How to choose a counsellor in Eastleigh"
      description="Six questions worth asking before you book, and what every counsellor's website tells you that you can safely ignore."
      publishedISO="2026-04-12"
      publishedHuman="12 April 2026"
      readMinutes={7}
    >
      <p>
        If you&apos;ve been searching for a counsellor in Eastleigh, you&apos;ve
        probably noticed the websites all start to blur together. Soft photo
        of a person looking calmly at the camera, a paragraph about a
        &ldquo;safe, warm, non-judgemental space,&rdquo; a list of credentials
        ending in BACP, and a number for a free 15-minute consultation. After
        the third or fourth one you start to wonder how you&apos;re supposed
        to choose between them.
      </p>
      <p>
        The honest answer is that most of what&apos;s on those websites
        won&apos;t actually tell you whether the person inside the building is
        right for you. Here&apos;s what will.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        1. Are they actually registered with a professional body?
      </h2>
      <p>
        In the UK, anyone can call themselves a counsellor. The word isn&apos;t
        protected by law. What matters is whether they&apos;re registered with
        a recognised professional body, the most common being the BACP
        (British Association for Counselling and Psychotherapy), the UKCP
        (UK Council for Psychotherapy), or the BACP-equivalent BABCP for
        cognitive behavioural therapists.
      </p>
      <p>
        Registration means they&apos;ve met training and supervision standards,
        they carry insurance, and they&apos;re bound by an enforceable code
        of ethics. If a counsellor&apos;s website doesn&apos;t mention any
        professional body, that&apos;s a real flag. If it does, that&apos;s
        the baseline, not a feature.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        2. Do they explain how they actually work?
      </h2>
      <p>
        Most websites list a modality (person-centred, integrative, CBT,
        psychodynamic) without explaining what that means in practice. The
        modality matters less than whether the counsellor can describe their
        own work in plain English. If they can&apos;t tell you what a session
        with them actually feels like, you&apos;re going to find out the hard
        way during the first appointment.
      </p>
      <p>
        Look for the kind of practical detail that signals self-awareness.
        Things like: &ldquo;I&apos;ll ask gentle questions but I won&apos;t
        push,&rdquo; or &ldquo;I work practically, with tools woven in when
        they&apos;d genuinely help,&rdquo; or &ldquo;some sessions we&apos;ll
        spend on one thing that surfaced from nowhere, others we&apos;ll work
        steadily through something we&apos;ve been circling.&rdquo; That kind
        of language tells you something useful about how the counsellor
        thinks about their work.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        3. How long is the introductory session, and what does it actually
        cost?
      </h2>
      <p>
        Most Eastleigh and Hampshire counsellors offer a free fifteen or
        twenty-minute initial call. That&apos;s enough time to confirm
        availability and exchange basic information. It is not enough time
        to know whether you can actually work with each other.
      </p>
      <p>
        A small but growing number of counsellors offer the full first
        session free. That&apos;s a different proposition entirely. A free
        full session lets you experience what it&apos;s like to sit in the
        room, talk properly, and leave with an honest sense of whether this
        person is the right one. If you have a choice, take the longer free
        session over the shorter call every time.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        4. Where exactly are they based, and is the practical side painless?
      </h2>
      <p>
        Counsellor websites sometimes list &ldquo;Eastleigh&rdquo; or
        &ldquo;Southampton&rdquo; without giving you a precise address. The
        practical details matter. Will you have to find pay-and-display
        parking? Is the building easy to find? Is the entrance discreet
        enough that you don&apos;t feel like you&apos;re announcing yourself
        to the high street?
      </p>
      <p>
        For Eastleigh specifically, central locations like the Cranberry
        Wellbeing Centre (opposite The Point) tend to have free parking right
        outside, which spares you the small but genuine stress of a meter
        running while you&apos;re trying to focus on the work.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        5. What&apos;s their position on confidentiality?
      </h2>
      <p>
        All BACP-registered counsellors operate under the same broad rules
        about confidentiality, but counsellors differ in how clearly they
        explain it to you. Look for a website (or a first session) that
        spells out, in plain English, what stays in the room, what notes get
        kept, and the specific exceptions where information might need to be
        shared.
      </p>
      <p>
        If a counsellor is vague about confidentiality, ask. It&apos;s a
        reasonable question and any decent practitioner will welcome it.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        6. What does your gut say after reading their words?
      </h2>
      <p>
        This sounds vague but it&apos;s the most reliable signal you have.
        After reading two or three counsellors&apos; websites, your nervous
        system already has an opinion. One feels warm and human. Another
        feels clinical. A third feels overly polished, like a corporate
        brochure pretending to be cosy. Trust those reactions.
      </p>
      <p>
        Counselling is, more than anything else, a relationship. The first
        signal you have about whether you can work with someone is whether
        their voice on the page makes you feel seen, or makes you feel like
        you&apos;re reading a service description. There&apos;s no test for
        this. Just notice what your shoulders do.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        What you can safely ignore
      </h2>
      <p>
        Almost every counsellor&apos;s website includes a long list of
        &ldquo;issues I work with.&rdquo; Anxiety, depression, panic,
        bereavement, low self-esteem, OCD, relationships, separation, anger,
        and so on. These lists are essentially identical across practices.
        They&apos;re a sign of basic competence, not specialisation. Pay them
        no attention unless you have something genuinely unusual you want
        addressed (a specific phobia, a particular kind of trauma) in which
        case ask directly.
      </p>
      <p>
        Stock photos of mountains, candles, and steaming mugs of tea are
        also safe to ignore. They tell you nothing about the counsellor
        inside.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-navy">
        The shortcut
      </h2>
      <p>
        If reading three websites is already too much, here&apos;s the
        shortcut: shortlist two that feel different in tone from the others,
        check both are registered with a professional body, message both,
        and book the free session with whichever one replies in a way that
        sounds like a person rather than a clinic. After the first session,
        you&apos;ll know.
      </p>
    </BlogLayout>
  );
}
