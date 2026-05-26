import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Ethical framework",
  description:
    "The ethical framework Hampshire Headspace works to as a BACP-registered counsellor.",
  alternates: { canonical: "/ethical-framework" },
};

export default function EthicalFrameworkPage() {
  return (
    <LegalPage title="Ethical framework" updated="April 2026">
      <section>
        <p>
          As a BACP-registered counsellor, I work within a professional and
          ethical framework.
        </p>
        <p>
          A copy of the British Association for Counselling and Psychotherapy
          Ethical Framework for the Counselling Professions (BACP) can be found
          at{" "}
          <a className="underline" href="https://www.bacp.co.uk">
            www.bacp.co.uk
          </a>
          .
        </p>
      </section>

      <section>
        <p>
          In summary, the framework is shaped by values such as trust, empathy,
          integrity, and respect for client wellbeing, and sets out expectations
          for how counselling is practiced:
        </p>
      </section>

      <section>
        <ul className="list-disc space-y-2 pl-6">
          <li>Treat clients with respect, dignity, and fairness.</li>
          <li>
            Keep information confidential, except where there is a serious
            safety risk or legal requirement.
          </li>
          <li>
            Work within the limits of training and competence, honestly and
            professionally.
          </li>
          <li>Prioritise client wellbeing and aim to avoid harm.</li>
          <li>Maintain clear professional boundaries.</li>
          <li>
            Be open about how counselling works, including limitations, fees,
            cancellations, and confidentiality.
          </li>
          <li>
            Continue training and supervision to support safe and effective
            practice.
          </li>
          <li>
            Be accountable for practice and follow a complaints process if
            concerns arise.
          </li>
        </ul>
      </section>
    </LegalPage>
  );
}
