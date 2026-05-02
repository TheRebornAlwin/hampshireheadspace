import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Hampshire Headspace handles your personal information, in plain English. UK GDPR compliant.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      updated="April 2026"
      intro="This page explains what information Hampshire Headspace collects, why, and what happens to it. Plain English, no jargon. If anything here is unclear, please get in touch and I'll explain properly."
    >
      <section>
        <h2 className="text-xl font-semibold text-navy">Who I am</h2>
        <p>
          Hampshire Headspace is a private counselling practice run by Ruth in
          Eastleigh, Hampshire. For data protection purposes I am the data
          controller of any personal information you share with me.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">What I collect, and when</h2>
        <p>
          When you send a message through the contact form or by email, I
          collect your name, the contact details you give me (email and / or
          phone number), and anything you choose to write in your message. I do
          this so that I can reply and arrange a session with you.
        </p>
        <p>
          When you become a client, I keep a small set of practical details
          (full name, contact details, date of birth, GP details if you choose
          to share them, emergency contact if you choose to give one) and
          brief, anonymised session notes that help me hold the work between
          our sessions.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">What I do not collect</h2>
        <p>
          I do not run any analytics, tracking pixels, or advertising cookies
          on this website. I do not sell, share, or pass your information to
          marketing companies, ever. I do not put your details into any AI
          system.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">How long I keep it</h2>
        <p>
          Enquiry messages from people who don&apos;t become clients are kept
          for up to twelve months and then deleted. Client records are kept
          for seven years after our last session, in line with my professional
          insurance requirements, and then securely destroyed.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">Where it&apos;s stored</h2>
        <p>
          Notes are kept in a locked cabinet, anonymised so that names and
          identifying details are not stored together with session content.
          Digital records are kept on encrypted devices and password-protected
          accounts hosted within the UK or European Economic Area.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">Confidentiality</h2>
        <p>
          What you say in sessions stays between us, with three exceptions
          required by my professional ethical framework: if I had genuine
          reason to believe you or someone else was at serious risk of harm,
          if I was required to disclose information by a court of law, or if
          I was made aware of a serious crime such as terrorism or money
          laundering. I would always try to talk to you first about what to do
          next.
        </p>
        <p>
          I take regular clinical supervision, where I sometimes discuss the
          work with another senior counsellor, but you are never named or made
          identifiable in those conversations.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">Your rights</h2>
        <p>
          Under UK GDPR you have the right to ask me what information I hold
          about you, to ask me to correct anything that is wrong, to ask me to
          delete it, and to ask me to stop processing it. If you would like to
          exercise any of these rights, please email{" "}
          <a className="underline" href="mailto:hello@hampshireheadspace.com">
            hello@hampshireheadspace.com
          </a>
          . If you&apos;re not happy with how I&apos;ve handled your
          information, you have the right to complain to the Information
          Commissioner&apos;s Office at{" "}
          <a className="underline" href="https://ico.org.uk">ico.org.uk</a>.
        </p>
      </section>
    </LegalPage>
  );
}
