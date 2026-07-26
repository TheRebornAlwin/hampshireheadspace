import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "The terms under which Hampshire Headspace counselling sessions are offered.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms" updated="April 2026">
      <section>
        <h2 className="text-xl font-semibold text-navy">What I offer</h2>
        <p>
          One-to-one counselling for people aged 16 and over, either in person
          in Eastleigh or Winchester, or by secure video call. Sessions are 50
          minutes long, unless another arrangement has been made.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">Fees and payment</h2>
        <p>
          After the free first session, costs are &pound;50 face to face and
          &pound;40 online.
        </p>
        <p>Payment is prior to each session, by bank transfer.</p>
        <p>
          There are no upfront packages and no minimum number of sessions to
          commit to.
        </p>
        <p>
          Lower-cost spaces are sometimes available. If finance is the thing
          standing in the way of booking, please mention it in your message.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">Cancellations</h2>
        <p>
          If you have a regular session, the time is held especially for you
          and can be difficult to offer to someone else. Cancellations with
          less than 24 hours&rsquo; notice, or missed sessions without contact,
          will be charged at the full session rate.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">Confidentiality</h2>
        <p>What you share in sessions is treated as confidential.</p>
        <p>
          There are a few exceptions where information may need to be shared,
          and where possible, this would be discussed with you first.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            If there is a serious concern that you or someone else is at risk
            of significant harm.
          </li>
          <li>
            If there is knowledge of serious criminal activity, such as
            terrorism or money laundering.
          </li>
          <li>If disclosure is required by law or a court order.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">Supervision</h2>
        <p>
          To support the quality of my work, I may discuss aspects of my
          practice with a senior practitioner. In these professional
          conversations, details are kept general so that you cannot be
          identified.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">Ending counselling</h2>
        <p>
          You can stop counselling at any time. It can be helpful to have one
          final session to bring things to a close in a way that feels
          complete, but this is entirely up to you.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">
          If something doesn&apos;t feel right
        </h2>
        <p>
          You can raise anything with me, and I&rsquo;d much rather you did.
          If, after that, you weren&rsquo;t satisfied, the BACP has a formal
          professional conduct procedure you can use to make a complaint, with
          details at{" "}
          <a className="underline" href="https://www.bacp.co.uk">
            www.bacp.co.uk
          </a>
          .
        </p>
      </section>
    </LegalPage>
  );
}
