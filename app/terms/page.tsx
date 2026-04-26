import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of service",
  description:
    "The terms under which Hampshire HeadSpace counselling sessions are offered. Plain English.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of service"
      updated="April 2026"
      intro="These terms cover the practical agreement between Hampshire HeadSpace and clients. They're meant to make things clear, not to be lawyerly. If anything is unclear, please ask."
    >
      <section>
        <h2 className="text-xl font-semibold text-navy">What I offer</h2>
        <p>
          One-to-one counselling for adults aged 16 and up, either at the
          Cranberry Wellbeing Centre in Eastleigh or by secure video call.
          Sessions are 55 minutes long. The first session is free, with no
          obligation to book again afterwards.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">Fees and payment</h2>
        <p>
          Sessions after the free first session are £50 in person and £40
          online. Payment is per session, by bank transfer or contactless card,
          on the day. There are no upfront packages and no minimum number of
          sessions to commit to.
        </p>
        <p>
          Lower-cost spaces are sometimes available. If finance is the thing
          standing in the way of booking, please mention it in your message.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">Cancellations</h2>
        <p>
          If you can let me know at least 24 hours before our session,
          there&apos;s no charge for cancelling. Cancellations within 24 hours,
          or missed sessions without any contact, are charged at the full
          session rate, because that time was set aside for you.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">Confidentiality</h2>
        <p>
          What you say in the room stays between us. The only exceptions are
          set out in the{" "}
          <a className="underline" href="/privacy/">privacy policy</a> and the
          {" "}
          <a className="underline" href="/ethical-framework/">ethical framework</a>
          {" "}
          page.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">Limits of counselling</h2>
        <p>
          Counselling can help with a great many things, but I&apos;m not a
          medical doctor and I don&apos;t prescribe or give advice on
          medication. If you&apos;re experiencing a mental health emergency,
          please contact your GP, NHS 111, or the Samaritans on 116 123. If
          there is an immediate risk to life, please call 999.
        </p>
        <p>
          I&apos;m not on call between sessions and I cannot guarantee
          out-of-hours response. If you need crisis support, please use the
          services above.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">Ending counselling</h2>
        <p>
          You can stop counselling at any time. I&apos;d usually suggest one
          final session to bring things to a close in a way that feels
          complete, but that&apos;s entirely up to you. Equally, if I felt I
          was no longer the right counsellor for you, I&apos;d talk to you
          about it openly and help you find someone better suited.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">Complaints</h2>
        <p>
          If something I do or say doesn&apos;t sit well, please tell me. We
          can usually sort it out between us. If we can&apos;t, the BACP has a
          formal professional conduct procedure you can use, with details at
          {" "}
          <a className="underline" href="https://www.bacp.co.uk">www.bacp.co.uk</a>.
        </p>
      </section>
    </LegalPage>
  );
}
