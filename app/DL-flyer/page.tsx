import type { Metadata } from "next";
import CloudBlob from "@/components/illustrations/CloudBlob";
import Birds from "@/components/illustrations/Birds";
import Sparkles from "@/components/illustrations/Sparkles";

/* Unlisted proof sheet for Ruth's two-sided DL flyer.
   Deliberately kept out of the sitemap, out of the nav, and marked noindex.
   It is NOT added to robots.txt: a Disallow line would publish the path to
   anyone who reads robots.txt, which is the opposite of keeping it quiet.

   Every word here is Ruth's, taken from FLYER.docx. The two panels are laid
   out at true DL size (99mm x 210mm) using mm and pt throughout, so what
   prints from this page is actual size rather than a scaled approximation. */

export const metadata: Metadata = {
  title: "DL flyer proof",
  robots: { index: false, follow: false, nocache: true },
};

/* Her doc repeats the same sign-off on both sides. Labels are hers:
   "Website:" not "Web:", "Text or voicemail:" not "Text or message:". */
const CONTACT = [
  ["Email:", "hello@hampshireheadspace.com"],
  ["Website:", "hampshireheadspace.com"],
  ["Text or voicemail:", "07717 811986"],
];

/* The logo in her doc carries the tagline, but that copy of the artwork
   reads "a space to show down and connect". The site's wordmark has the
   correct "slow", so the lockup is rebuilt here from the two site assets
   rather than dropping her file in with the typo baked into it. */
function Lockup({ mark, word }: { mark: string; word: string }) {
  return (
    <div className="flex flex-col items-center">
      <img
        src="/logo-icon.webp"
        alt=""
        aria-hidden="true"
        width={559}
        height={447}
        className={mark}
      />
      <img
        src="/logo-wordmark.webp"
        alt=""
        aria-hidden="true"
        width={1280}
        height={248}
        className={`mt-[2.5mm] ${word}`}
      />
    </div>
  );
}

function SignOff() {
  return (
    <>
      <p className="text-[9pt] font-bold leading-[1.35] text-navy">
        May I encourage you to take that first step with me today?
      </p>
      <div className="mt-[3mm] space-y-[1.2mm]">
        {CONTACT.map(([label, value]) => (
          <p key={label} className="text-[8pt] leading-none text-navy">
            <span className="font-semibold">{label}</span> {value}
          </p>
        ))}
      </div>
    </>
  );
}

/* Both the BACP mark and the yarn illustration are supplied on solid white.
   Cream is only a few points off white on screen but prints as real ink, so
   dropped in plainly they would each sit in a faint white box. Multiply
   blending lets the paper show through instead. */
function Bacp({ className }: { className: string }) {
  return (
    <img
      src="/bacp-logo.webp"
      alt="BACP registered member 418989, MBACP"
      width={600}
      height={268}
      className={`mix-blend-multiply ${className}`}
    />
  );
}

function Front() {
  return (
    <div className="dl-panel relative flex h-[210mm] w-[99mm] flex-col overflow-hidden bg-cream">
      <div className="h-[6mm] shrink-0 bg-navy" />

      {/* Ambience lifted straight from the website: clouds, birds and dots. */}
      <CloudBlob
        variant="blue"
        className="pointer-events-none absolute -left-[26mm] top-[8mm] h-[42mm] w-[76mm] opacity-25"
      />
      <CloudBlob
        variant="yellow"
        className="pointer-events-none absolute -right-[24mm] bottom-[30mm] h-[40mm] w-[70mm] opacity-30"
      />
      <div className="pointer-events-none absolute right-[6mm] top-[12mm]">
        <Birds className="h-[8mm] w-[26mm] opacity-70" count={3} animated={false} />
      </div>
      <div className="pointer-events-none absolute left-[5mm] top-[62mm] h-[6mm] w-[6mm] rounded-full bg-soft-yellow" />
      <div className="pointer-events-none absolute right-[4mm] top-[80mm] h-[4.5mm] w-[4.5mm] rounded-full bg-soft-blue/80" />
      <div className="pointer-events-none absolute left-[7mm] top-[148mm] h-[4mm] w-[4mm] rounded-full bg-[#FFD6DD]" />
      <div className="pointer-events-none absolute right-[9mm] top-[168mm] h-[3mm] w-[3mm] rounded-full bg-[#FFD6DD]" />
      <Sparkles className="pointer-events-none absolute left-[2mm] top-[104mm] h-[12mm] w-[20mm] opacity-45" />

      <div className="relative flex flex-1 flex-col items-center px-[9mm] pb-[6mm] pt-[7mm] text-center">
        <Lockup mark="w-[20mm]" word="w-[48mm]" />

        <h1 className="mt-[5mm] text-[12pt] font-bold uppercase leading-[1.2] tracking-[0.01em] text-navy">
          Can talking to someone help?
        </h1>

        <p className="mt-[3.5mm] text-[8pt] leading-[1.5] text-navy">
          At times we may all struggle with stresses, strains, challenges,
          difficulties, loss and change. In a fast changing and sometimes
          confusing world many of us may struggle to feel connected; with
          ourselves, with others and within society and during these times it
          can be helpful to talk about our thoughts, our feelings and our
          emotions.
        </p>
        <p className="mt-[2.5mm] text-[8pt] leading-[1.5] text-navy">
          Counselling can provide an opportunity to slow down and connect so
          that you may live with more ease and less strain.
        </p>

        <img
          src="/hero-tangled-yarn.webp"
          alt="Two figures sitting in soft blue chairs, one with a tangled ball of yarn for a head, the other calmly holding the loose end."
          width={1200}
          height={1200}
          className="mt-[2.5mm] w-[36mm] mix-blend-multiply"
        />

        {/* The banner Ruth asked for "if it could fit", in the website's
            yellow, full bleed to the panel edges. */}
        <div className="-mx-[9mm] mt-[2.5mm] w-[99mm] bg-soft-yellow px-[8mm] py-[3.2mm]">
          <p className="text-balance text-[9pt] font-bold leading-[1.25] tracking-tight text-navy">
            People who need support sometimes look a lot like people who
            don&rsquo;t need support.
          </p>
        </div>

        <div className="mt-auto pt-[3mm]">
          <SignOff />
          <Bacp className="mx-auto mt-[3mm] w-[36mm]" />
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
        className="pointer-events-none absolute -left-[24mm] top-[6mm] h-[38mm] w-[68mm] opacity-25"
      />
      <CloudBlob
        variant="blue"
        className="pointer-events-none absolute -right-[26mm] top-[92mm] h-[40mm] w-[72mm] opacity-20"
      />
      <div className="pointer-events-none absolute left-[6mm] top-[9mm]">
        <Birds className="h-[7mm] w-[22mm] opacity-60" count={2} animated={false} />
      </div>
      <div className="pointer-events-none absolute right-[5mm] top-[26mm] h-[5mm] w-[5mm] rounded-full bg-soft-yellow" />
      <div className="pointer-events-none absolute left-[3mm] top-[112mm] h-[4mm] w-[4mm] rounded-full bg-[#FFD6DD]" />
      <div className="pointer-events-none absolute right-[6mm] top-[136mm] h-[4mm] w-[4mm] rounded-full bg-soft-blue/80" />

      <div className="relative flex flex-1 flex-col items-center px-[9mm] pb-[6mm] pt-[8mm] text-center">
        {/* Her doc uses the rectangular portrait, not the site's circular
            crop, so it is framed the way the site treats its photographs. */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-[1.5mm] rounded-[4mm] bg-soft-yellow/50"
          />
          <img
            src="/ruth-headshot.webp?v=8"
            alt="Ruth, counsellor at Hampshire Headspace"
            width={800}
            height={1067}
            className="relative h-[43mm] w-[32mm] rounded-[3mm] object-cover object-[center_20%] shadow-soft ring-[0.5mm] ring-cream"
          />
        </div>

        <p className="mt-[5mm] text-[9.5pt] font-bold leading-[1.3] text-navy">
          I&rsquo;m Ruth and I offer connection, compassion and care.
        </p>
        <p className="mt-[1.5mm] text-[9.5pt] font-bold leading-[1.3] text-navy">
          Meeting you as you are, beyond roles, expectations, or appearances.
        </p>

        <p className="mt-[4mm] text-[7.6pt] leading-[1.45] text-navy">
          I am a fully qualified humanistic counsellor, registered with the
          British Association of Counselling and Psychotherapy (BACP) and
          committed to offering a confidential and ethical service.
        </p>
        <p className="mt-[2.2mm] text-[7.6pt] leading-[1.45] text-navy">
          I offer individual counselling sessions for people aged 16 and over.
          I welcome neurotypical and neurodiverse clients, as well as
          individuals from all cultural backgrounds, sexual orientations, and
          gender identities, in a space which is safe, welcoming, and
          non-judgmental in which you can feel secure and supported.
        </p>
        <p className="mt-[2.2mm] text-[7.6pt] leading-[1.45] text-navy">
          I have experience working with both adults and adolescents in private
          practice, charity organisations and education settings.
        </p>
        <p className="mt-[2.2mm] text-[7.6pt] leading-[1.45] text-navy">
          I operate from comfortable rooms in both Eastleigh and Winchester or
          can work online. Contact me to find out more and to arrange a
          suitable appointment.
        </p>

        <div className="mt-auto pt-[4mm]">
          <SignOff />
          <Bacp className="mx-auto mt-[4mm] w-[44mm]" />
        </div>
      </div>

      <div className="h-[6mm] shrink-0 bg-navy" />
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
