import Link from "next/link";

const LOGO_URL = "/logo.webp";

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 text-center sm:px-6 md:grid-cols-3 md:text-left">
        <div className="space-y-4">
          <Link
            href="/"
            aria-label="Hampshire Headspace, home"
            className="inline-block"
          >
            <img
              src={LOGO_URL}
              alt="Hampshire Headspace Counselling"
              className="mx-auto h-24 w-auto sm:h-28 md:mx-0"
              width={200}
              height={112}
            />
          </Link>
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-warm-grey md:mx-0">
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
            <li><Link className="hover:text-navy" href="/services/">Services</Link></li>
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
              <a className="hover:text-navy" href="tel:+447843114396">
                07843 114396
              </a>
              <span className="ml-1 text-xs text-warm-grey-light">
                (text)
              </span>
            </li>
          </ul>
          <p className="mx-auto max-w-xs pt-2 text-xs leading-relaxed text-warm-grey-light md:mx-0 md:max-w-none">
            BACP registered, fully insured, with an enhanced DBS check and regular clinical supervision.
          </p>
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 pt-2 text-xs text-warm-grey-light md:justify-start">
            <li><Link className="hover:text-navy" href="/privacy/">Privacy</Link></li>
            <li><Link className="hover:text-navy" href="/cookies/">Cookies</Link></li>
            <li><Link className="hover:text-navy" href="/terms/">Terms</Link></li>
            <li><Link className="hover:text-navy" href="/ethical-framework/">Ethical framework</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-6 text-center text-xs text-warm-grey-light sm:flex-row sm:items-center sm:px-6 sm:text-left">
          <p>© {new Date().getFullYear()} Hampshire Headspace. All rights reserved.</p>
          <p>
            If you are in crisis, please call the Samaritans on 116 123 (free, 24/7).
          </p>
        </div>
      </div>
    </footer>
  );
}
