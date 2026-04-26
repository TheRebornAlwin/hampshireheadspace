import Link from "next/link";

const LOGO_URL =
  "https://5gl6uqlaxg.ufs.sh/f/x0izTbEnXmRa6UWitisUF0JPnvVqwk53LThbAGaKrtslQ9fz";

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-3">
        <div className="space-y-4">
          <Link href="/" aria-label="Hampshire HeadSpace, home">
            <img
              src={LOGO_URL}
              alt="Hampshire HeadSpace"
              className="h-12 w-auto"
              width={170}
              height={48}
            />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-warm-grey">
            Private counselling in Eastleigh, Hampshire. BACP-registered. First 55-minute session is free.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <h4 className="text-[13px] font-semibold uppercase tracking-wider text-navy/70">
            Site
          </h4>
          <ul className="space-y-2 text-warm-grey">
            <li><Link className="hover:text-navy" href="/">Home</Link></li>
            <li><Link className="hover:text-navy" href="/about/">About Ruth</Link></li>
            <li><Link className="hover:text-navy" href="/services/">Services & Fees</Link></li>
            <li><Link className="hover:text-navy" href="/faq/">FAQ</Link></li>
            <li><Link className="hover:text-navy" href="/contact/">Contact</Link></li>
            <li><Link className="hover:text-navy" href="/blog/">Articles</Link></li>
          </ul>
        </div>

        <div className="space-y-3 text-sm">
          <h4 className="text-[13px] font-semibold uppercase tracking-wider text-navy/70">
            Get in touch
          </h4>
          <ul className="space-y-2 text-warm-grey">
            <li>
              Cranberry Wellbeing Centre<br />
              Eastleigh, Hampshire
            </li>
            <li>
              <a className="hover:text-navy" href="mailto:hello@hampshireheadspace.com">
                hello@hampshireheadspace.com
              </a>
            </li>
            <li>
              <a className="hover:text-navy" href="tel:+447446136611">
                07446 136611
              </a>
              <span className="ml-1 text-xs text-warm-grey-light">
                (text or call)
              </span>
            </li>
          </ul>
          <p className="pt-2 text-xs leading-relaxed text-warm-grey-light">
            BACP registered, fully insured, with an enhanced DBS check and regular clinical supervision.
          </p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 pt-2 text-xs text-warm-grey-light">
            <li><Link className="hover:text-navy" href="/privacy/">Privacy</Link></li>
            <li><Link className="hover:text-navy" href="/cookies/">Cookies</Link></li>
            <li><Link className="hover:text-navy" href="/terms/">Terms</Link></li>
            <li><Link className="hover:text-navy" href="/ethical-framework/">Ethical framework</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-5 py-6 text-xs text-warm-grey-light sm:flex-row sm:items-center sm:px-6">
          <p>© {new Date().getFullYear()} Hampshire HeadSpace. All rights reserved.</p>
          <p>
            If you are in crisis, please call the Samaritans on 116 123 (free, 24/7).
          </p>
        </div>
      </div>
    </footer>
  );
}
