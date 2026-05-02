import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie policy",
  description:
    "Hampshire Headspace doesn't use any tracking or advertising cookies. The plain-English version of why.",
  alternates: { canonical: "/cookies" },
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie policy"
      updated="April 2026"
      intro="The short version: this website doesn't track you. The longer version is below."
    >
      <section>
        <h2 className="text-xl font-semibold text-navy">No tracking, no advertising</h2>
        <p>
          Hampshire Headspace doesn&apos;t use Google Analytics, Facebook
          Pixel, advertising cookies, or any third-party tracking system. I&apos;m
          not interested in following you around the internet, and you
          shouldn&apos;t have to dismiss a cookie banner just to read about
          counselling.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">What does run in the background</h2>
        <p>
          The site loads fonts from Google Fonts so that the typography
          renders consistently on your device. Google may collect basic
          technical information (your IP address, browser type) when those
          fonts are requested. Their privacy policy applies to that
          information, and you can read it at{" "}
          <a className="underline" href="https://policies.google.com/privacy">
            policies.google.com/privacy
          </a>
          .
        </p>
        <p>
          The hosting provider (whichever CDN serves this site) keeps standard
          server logs for operational and security reasons. These contain
          things like the time of your visit and the page you requested.
          They&apos;re not linked to anything else and they&apos;re not used
          for marketing.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">If that ever changes</h2>
        <p>
          If at some point I add genuine analytics (likely Plausible or a
          similar privacy-friendly tool), I&apos;ll update this page first and
          add a clear consent option to the site. Nothing will be added
          quietly.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-navy">Questions</h2>
        <p>
          If you have any questions about how the site handles your data,
          please email{" "}
          <a className="underline" href="mailto:hello@hampshireheadspace.com">
            hello@hampshireheadspace.com
          </a>{" "}
          or read the full{" "}
          <a className="underline" href="/privacy/">privacy policy</a>.
        </p>
      </section>
    </LegalPage>
  );
}
