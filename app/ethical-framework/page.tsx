import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Ethical framework",
  description:
    "The ethical framework Hampshire Headspace works to. Plain English version of the BACP standards.",
  alternates: { canonical: "/ethical-framework" },
};

export default function EthicalFrameworkPage() {
  return (
    <LegalPage
      title="Ethical framework"
      updated="April 2026"
      intro="As a BACP-registered counsellor I work to a clear, professional ethical framework. This page is a plain-English version of what that means in practice for you."
    >
      <section>
        <h2 className="text-xl font-semibold text-navy">The framework I work to</h2>
        <p>
          Hampshire Headspace operates in line with the British Association
          for Counselling and Psychotherapy&apos;s Ethical Framework for the
          Counselling Professions. That&apos;s the document UK counsellors
          commit to as a condition of registration, and you can read the full
          version at{" "}
          <a className="underline" href="https://www.bacp.co.uk/events-and-resources/ethics-and-standards/ethical-framework-for-the-counselling-professions/">
            bacp.co.uk
          </a>
          . The summary below is the practical day-to-day version.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">Putting your wellbeing first</h2>
        <p>
          The reason we&apos;re in the room together is your wellbeing, not
          mine and not the practice&apos;s. That means I won&apos;t push you
          into longer or more expensive work than you actually need. If a few
          sessions are enough, a few sessions are enough.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">Working within my competence</h2>
        <p>
          I work with the things I&apos;m trained and experienced to work
          with. If something you bring would be better helped by a different
          kind of practitioner (for example a psychiatrist, a CBT specialist,
          or a couples counsellor), I&apos;ll tell you that openly and help
          you find the right person.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">Respecting your autonomy</h2>
        <p>
          You make the decisions about your own life and your own counselling.
          I won&apos;t tell you what to do. I won&apos;t pressure you to talk
          about anything you don&apos;t want to. And I&apos;ll always be open
          with you about what I&apos;m thinking and why.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">Confidentiality, with three exceptions</h2>
        <p>
          What you say in the room stays in the room. The exceptions are if I
          had genuine reason to believe you or someone else was at serious
          risk of harm, if I were required to disclose by a court of law, or
          if I were made aware of a serious crime. In all of those cases,
          I&apos;d talk to you first wherever possible.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">Supervision</h2>
        <p>
          All BACP-registered counsellors take regular clinical supervision,
          where we sometimes discuss the work with another senior
          practitioner. This is for the quality of your care, and you are
          never named or identifiable in those conversations.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">Boundaries</h2>
        <p>
          Our relationship is professional, in the room. I won&apos;t add you
          on social media, I won&apos;t enter into any other kind of
          relationship with you (business, personal, romantic) while we&apos;re
          working together, and I&apos;ll keep our work, our notes, and our
          conversations carefully separate from the rest of my life.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">If something feels wrong</h2>
        <p>
          You can raise anything with me, and I&apos;d much rather you did.
          If, after that, you weren&apos;t satisfied, the BACP has a formal
          professional conduct procedure you can use to make a complaint,
          with details at{" "}
          <a className="underline" href="https://www.bacp.co.uk">www.bacp.co.uk</a>.
        </p>
      </section>
    </LegalPage>
  );
}
