import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Hampshire Headspace handles your personal information. UK GDPR compliant.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy" updated="April 2026">
      <section>
        <h2 className="text-xl font-semibold text-navy">Who I am</h2>
        <p>
          Hampshire Headspace is a private counselling practice run by Ruth
          Fleming in Eastleigh, Hampshire. For data protection purposes I am
          the data controller of any personal information you share with me.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">What I collect</h2>
        <p>
          When you send a message through the contact form or by email, I
          collect your name, the contact details you give me and anything you
          choose to write in your message.
        </p>
        <p>
          When you become a client, I keep a small set of practical details.
        </p>
        <p>
          Any session details noted will be brief, anonymous and kept separate
          to any identifying details.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">What I do not collect</h2>
        <p>
          I do not run any analytics, tracking pixels, or advertising cookies
          on this website. I do not sell, share, or pass your information to
          marketing companies, ever.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">Your rights</h2>
        <p>
          Under UK GDPR you have the right to ask me what information I hold
          about you and to ask me to delete it. If you would like to exercise
          these rights, please email{" "}
          <a className="underline" href="mailto:hello@hampshireheadspace.com">
            hello@hampshireheadspace.com
          </a>
          .
        </p>
        <p>
          If you&rsquo;re not happy with how I&rsquo;ve handled your
          information, you have the right to complain to the Information
          Commissioner&rsquo;s Office at{" "}
          <a className="underline" href="https://ico.org.uk">
            ico.org.uk
          </a>
          .
        </p>
      </section>
    </LegalPage>
  );
}
