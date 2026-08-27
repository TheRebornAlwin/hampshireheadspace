import type { Metadata } from "next";
import CloudBlob from "@/components/illustrations/CloudBlob";
import Birds from "@/components/illustrations/Birds";
import Sparkles from "@/components/illustrations/Sparkles";

/* Unlisted proof sheet for Ruth's two-sided DL flyer.
   Deliberately kept out of the sitemap, out of the nav, and marked noindex.
   It is NOT added to robots.txt: a Disallow line would publish the path to
   anyone who reads robots.txt, which is the opposite of keeping it quiet.

   The two panels are laid out at true DL size (99mm x 210mm) using mm and pt
   throughout, so what prints from this page is actual size rather than a
   scaled approximation. */

export const metadata: Metadata = {
  title: "DL flyer proof",
  robots: { index: false, follow: false, nocache: true },
};

const HELPS_WITH = [
  "Anxiety",
  "Low self-esteem and confidence",
  "Depression",
  "People-pleasing and perfectionism",
  "Panic attacks",
  "Feeling stuck or lost",
  "Stress, overwhelm and burnout",
  "Loneliness and isolation",
  "Low mood and sadness",
  "Relationship difficulties",
  "Worry and overthinking",
  "Loss and bereavement",
];

const FEES = [
  { label: "First 50-minute session", value: "Free" },
  { label: "Face to face, Eastleigh or Winchester", value: "£50" },
  { label: "Online, by secure video", value: "£40" },
];

function Tick() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="mt-[0.7mm] h-[2.6mm] w-[2.6mm] shrink-0 text-navy"
    >
      <path
        d="M4 10.5l4 4 8-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* The letterhead block Ruth sent: navy rule, logo, vertical divider, details,
   navy rule. Reproduced rather than reinterpreted, since she supplied it as
   finished artwork. */
function ContactStrip() {
  return (
    <div className="-mx-[8mm]">
      <div className="h-[4mm] bg-navy" />
      <div className="flex items-center gap-[4mm] bg-white px-[6mm] py-[5mm]">
        <img
          src="/logo.webp"
          alt=""
          aria-hidden="true"
          width={1200}
          height={974}
          className="w-[21mm] shrink-0"
        />
        <div className="h-[19mm] w-[0.7mm] shrink-0 rounded-full bg-navy" />
        <div className="min-w-0">
          <p className="text-[13pt] font-extrabold leading-none tracking-tight text-navy">
            Ruth Fleming
          </p>
          <p className="mt-[1mm] text-[9.5pt] font-bold leading-none text-navy">
            MBACP
          </p>
          <div className="mt-[2.4mm] space-y-[1mm] text-[7pt] font-semibold leading-tight text-navy">
            <p>Email: hello@hampshireheadspace.com</p>
            <p>Web: hampshireheadspace.com</p>
            <p>Text or message: 07843 114396</p>
          </div>
        </div>
      </div>
      <div className="h-[4mm] bg-navy" />
    </div>
  );
}

function Front() {
  return (
    <div className="dl-panel relative flex h-[210mm] w-[99mm] flex-col overflow-hidden bg-cream">
      <div className="h-[6mm] shrink-0 bg-navy" />

      {/* Ambience lifted straight from the website: clouds, birds, and the
          yellow/blue/pink spots. */}
      <CloudBlob
        variant="blue"
        className="pointer-events-none absolute -left-[26mm] top-[10mm] h-[42mm] w-[76mm] opacity-25"
      />
      <CloudBlob
        variant="yellow"
        className="pointer-events-none absolute -right-[22mm] bottom-[24mm] h-[40mm] w-[70mm] opacity-30"
      />
      <div className="pointer-events-none absolute right-[7mm] top-[15mm]">
        <Birds className="h-[9mm] w-[30mm] opacity-70" count={3} animated={false} />
      </div>
      <div className="pointer-events-none absolute left-[6mm] top-[72mm] h-[7mm] w-[7mm] rounded-full bg-soft-yellow" />
      <div className="pointer-events-none absolute right-[5mm] top-[92mm] h-[5mm] w-[5mm] rounded-full bg-soft-blue/80" />
      <div className="pointer-events-none absolute left-[12mm] top-[152mm] h-[4mm] w-[4mm] rounded-full bg-[#FFD6DD]" />
      <div className="pointer-events-none absolute right-[13mm] top-[170mm] h-[3mm] w-[3mm] rounded-full bg-[#FFD6DD]" />
      <Sparkles className="pointer-events-none absolute left-[3mm] top-[120mm] h-[14mm] w-[22mm] opacity-45" />

      <div className="relative flex flex-1 flex-col items-center px-[8mm] pb-[7mm] pt-[13mm] text-center">
        <img
          src="/logo.webp"
          alt=""
          aria-hidden="true"
          width={1200}
          height={974}
          className="w-[46mm]"
        />

        <p className="mt-[7mm] text-[9pt] font-semibold uppercase tracking-[0.16em] text-navy/70">
          Private counselling
        </p>
        <p className="mt-[1.5mm] text-[11pt] font-bold text-navy">
          Eastleigh &middot; Winchester &middot; Online
        </p>

        {/* The banner Ruth asked for, in the website's yellow, full bleed. */}
        <div className="-mx-[8mm] mt-[10mm] w-[99mm] bg-soft-yellow px-[9mm] py-[9mm]">
          <p className="text-balance text-[14.5pt] font-bold leading-[1.2] tracking-tight text-navy">
            People who need support sometimes look a lot like people who
            don&rsquo;t need support.
          </p>
        </div>

        <p className="mt-[9mm] max-w-[76mm] text-[9.5pt] leading-relaxed text-navy/85">
          A calm, confidential space to slow down, make sense of things and feel
          properly heard. No judgement, no rush.
        </p>

        <div className="mt-[7mm] rounded-full bg-navy px-[7mm] py-[3.2mm]">
          <p className="text-[9.5pt] font-bold leading-none text-cream">
            Your first 50-minute session is free
          </p>
        </div>

        <div className="mt-auto">
          <p className="text-[10.5pt] font-bold tracking-tight text-navy">
            hampshireheadspace.com
          </p>
          <p className="mt-[1.5mm] text-[8pt] font-semibold text-navy/75">
            Ruth Fleming MBACP &middot; BACP registered
          </p>
        </div>
      </div>

      <div className="h-[6mm] shrink-0 bg-navy" />
    </div>
  );
}

function Back() {
  return (
    <div className="dl-panel relative flex h-[210mm] w-[99mm] flex-col overflow-hidden bg-cream">
      <div className="h-[6mm] shrink-0 bg-navy" />

      <CloudBlob
        variant="yellow"
        className="pointer-events-none absolute -left-[24mm] top-[8mm] h-[38mm] w-[68mm] opacity-25"
      />
      <CloudBlob
        variant="blue"
        className="pointer-events-none absolute -right-[26mm] top-[86mm] h-[40mm] w-[72mm] opacity-20"
      />
      <div className="pointer-events-none absolute left-[7mm] top-[8mm]">
        <Birds className="h-[8mm] w-[26mm] opacity-60" count={2} animated={false} />
      </div>
      <div className="pointer-events-none absolute right-[6mm] top-[30mm] h-[6mm] w-[6mm] rounded-full bg-soft-yellow" />
      <div className="pointer-events-none absolute left-[4mm] top-[104mm] h-[4mm] w-[4mm] rounded-full bg-[#FFD6DD]" />
      <div className="pointer-events-none absolute right-[8mm] top-[126mm] h-[4.5mm] w-[4.5mm] rounded-full bg-soft-blue/80" />

      <div className="relative flex flex-1 flex-col px-[8mm] pt-[15mm]">
        <h2 className="text-center text-[15pt] font-bold leading-[1.2] tracking-tight text-navy">
          Can talking to someone help?
        </h2>
        <p className="mx-auto mt-[3.5mm] max-w-[78mm] text-center text-[8.5pt] leading-relaxed text-navy/85">
          I&rsquo;m Ruth, a BACP-registered humanistic counsellor. I work with
          adults and young people from 16, in person and online, on things like:
        </p>

        <div className="mt-[6mm] grid grid-cols-2 gap-x-[4mm] gap-y-[2mm]">
          {HELPS_WITH.map((item) => (
            <div key={item} className="flex items-start gap-[1.6mm]">
              <Tick />
              <span className="text-[7.6pt] font-medium leading-[1.35] text-navy">
                {item}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-[3mm] text-center text-[8pt] font-semibold italic text-navy/70">
          &hellip;and life in general.
        </p>

        {/* Fees, taken from the site so the two cannot drift apart. */}
        <div className="mt-[6mm] rounded-[3mm] bg-white/70 px-[6mm] py-[5mm] shadow-soft ring-[0.3mm] ring-soft-blue/50">
          <p className="text-center text-[8pt] font-bold uppercase tracking-[0.14em] text-navy/70">
            Fees
          </p>
          <dl className="mt-[3mm] space-y-[2mm]">
            {FEES.map((f) => (
              <div key={f.label} className="flex items-baseline gap-[2mm]">
                <dt className="text-[8pt] leading-tight text-navy/85">
                  {f.label}
                </dt>
                <span className="mb-[0.8mm] h-[0.3mm] flex-1 bg-navy/20" />
                <dd className="text-[9.5pt] font-bold leading-none text-navy">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="mt-[5mm] text-center text-[8.5pt] leading-relaxed text-navy/85">
          Quiet, comfortable rooms in central Eastleigh and in Winnall,
          Winchester, both with free parking. Online sessions across the UK.
        </p>

        <div className="mt-auto">
          <ContactStrip />
        </div>
      </div>
    </div>
  );
}

export default function DlFlyerPage() {
  return (
    <div className="fixed inset-0 z-[60] overflow-auto bg-[#E9EAEE] print:static print:overflow-visible print:bg-white">
      <style>{`
        /* This <style> ships inside this page only, so the rule is scoped to
           this route. The proof renders inside the normal site shell; nothing
           but the two flyer sides belongs on it, so the header, skip link and
           footer come out of the render entirely rather than just being
           covered by the backdrop. */
        body > header, body > footer, body > .skip-link { display: none !important; }
        body { margin: 0 !important; }

        @media print {
          @page { size: 99mm 210mm; margin: 0; }
          /* The panels sit side by side on screen. At DL page width only one
             fits, so stack them in print: one side per sheet, no gaps, no
             padding, no shadow. */
          .dl-wrap { width: auto !important; padding: 0 !important; margin: 0 !important; }
          .dl-sheet { display: block !important; gap: 0 !important; }
          .dl-shadow { box-shadow: none !important; }
          .dl-panel { break-inside: avoid; }
          .dl-side-2 { break-before: page; }
        }
      `}</style>

      <div className="dl-wrap mx-auto w-fit px-6 py-8">
        <div className="dl-sheet flex flex-wrap items-start gap-7">
          <div className="dl-shadow shadow-soft-lg">
            <Front />
          </div>
          <div className="dl-side-2 dl-shadow shadow-soft-lg">
            <Back />
          </div>
        </div>
      </div>
    </div>
  );
}
