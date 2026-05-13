import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Ethical framework",
  description:
    "The ethical framework Hampshire Headspace works to.",
  alternates: { canonical: "/ethical-framework" },
};

export default function EthicalFrameworkPage() {
  return (
    <LegalPage
      title="Ethical framework"
      updated="April 2026"
      intro="As a BACP-registered counsellor I work to a clear, professional ethical framework."
    >
      <section>
        <h2 className="text-xl font-semibold text-navy">The framework I adhere to</h2>
        <p>
          Hampshire Headspace operates in line with the British Association
          for Counselling and Psychotherapy Ethical Framework for the
          Counselling Professions.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">Respecting your autonomy</h2>
        <p>
          You make the decisions about your own life and your own counselling.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">Supervision</h2>
        <p>
          All BACP-registered counsellors take regular clinical supervision,
          where we sometimes discuss the work with another senior
          practitioner. This is for the quality of your care, and you are
          never identifiable in those conversations.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">If something doesn&apos;t feel right</h2>
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
