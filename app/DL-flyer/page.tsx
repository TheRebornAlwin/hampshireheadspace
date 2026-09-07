import type { Metadata } from "next";
import CloudBlob from "@/components/illustrations/CloudBlob";
import Birds from "@/components/illustrations/Birds";
import Sparkles from "@/components/illustrations/Sparkles";

/* Unlisted proof sheet for Ruth's two-sided DL flyer.
   Deliberately kept out of the sitemap, out of the nav, and marked noindex.
   It is NOT added to robots.txt: a Disallow line would publish the path to
   anyone who reads robots.txt, which is the opposite of keeping it quiet.

   Every word here is Ruth's, taken from FLYER V2.docx, and the layout follows
   her marked-up scan. The two panels are laid out at true DL size
   (99mm x 210mm) using mm and pt throughout, so what prints from this page is
   actual size rather than a scaled approximation. */

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
   rather than dropping her file in with the typo baked into it.

   "LITTLE LARGER?" against the mark on her scan. */
function Lockup() {
  return (
    <div className="flex flex-col items-center">
      <img
        src="/logo-icon.webp"
        alt=""
        aria-hidden="true"
        width={559}
        height={447}
        className="w-[28mm]"
      />
      <img
        src="/logo-wordmark.webp"
        alt=""
        aria-hidden="true"
        width={1280}
        height={248}
        className="mt-[2.5mm] w-[56mm]"
      />
    </div>
  );
}

/* "CAN BOTH FOOTERS BE IDENTICAL IN SIZE." Everything below her pencilled
   line on each panel is this one component, rendered with no per-side
   options, so the two footers cannot drift apart.

   "PERHAPS HIGHLIGHT THE CALL TO ACTION" and the yellow highlight on this
   sentence in her document: the yellow band has come off the "people who
   need support" line and onto the call to action, on both sides. */
function Footer() {
  return (
    <div className="-mx-[9mm] mt-auto w-[99mm] pt-[3mm]">
      <div className="bg-soft-yellow px-[8mm] py-[2.8mm]">
        <p className="text-balance text-[10pt] font-bold leading-[1.25] text-navy">
          May I encourage you to take that first step with me today?
        </p>
      </div>

      {/* "LARGER CONTACT DETAILS MAYBE?", then "increase size of contact
          details a little" on the second pass. */}
      <div className="mt-[3mm] space-y-[1.4mm] px-[9mm]">
        {CONTACT.map(([label, value]) => (
          <p key={label} className="text-[9.8pt] leading-none text-navy">
            <span className="font-semibold">{label}</span> {value}
          </p>
        ))}
      </div>

      {/* Supplied on solid white. Cream is only a few points off white on
          screen but prints as real ink, so dropped in plainly the mark would
          sit in a faint white box. Multiply lets the paper show through. */}
      <img
        src="/bacp-logo.webp"
        alt="BACP registered member 418989, MBACP"
        width={600}
        height={268}
        className="mx-auto mt-[3mm] w-[36mm] mix-blend-multiply"
      />
    </div>
  );
}

/* Both headings come through here, so "MATCH SIZE ON CAPS" holds by
   construction rather than by two numbers being kept in step by hand. */
function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[12pt] font-bold uppercase leading-[1.2] tracking-[0.01em] text-navy">
      {children}
    </h2>
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
      {/* Kept clear of the yellow call-to-action band: pale yellow behind a
          yellow panel just reads as a printing fault. */}
      <CloudBlob
        variant="yellow"
        className="pointer-events-none absolute -right-[24mm] top-[30mm] h-[40mm] w-[70mm] opacity-30"
      />
      {/* Her print lost the birds altogether, so they now carry a press-safe
          stroke and sit at full flock opacity.

          "MOVE BIRD OUT", arrowed at the bird sitting against the logo cloud.
          The flock is 40mm wide and only 37mm of panel is clear to the right
          of the mark, so it is pushed past the trim rather than shrunk: the
          box overhangs, the birds themselves do not, and they keep full size. */}
      <div className="pointer-events-none absolute -right-[3mm] top-[9mm]">
        <Birds
          className="h-[13mm] w-[40mm]"
          count={3}
          animated={false}
          strokeWidth={1.9}
          opacityScale={1.4}
        />
      </div>
      <div className="pointer-events-none absolute left-[5mm] top-[62mm] h-[6mm] w-[6mm] rounded-full bg-soft-yellow" />
      <div className="pointer-events-none absolute right-[4mm] top-[80mm] h-[4.5mm] w-[4.5mm] rounded-full bg-soft-blue/80" />
      <div className="pointer-events-none absolute left-[7mm] top-[150mm] h-[4mm] w-[4mm] rounded-full bg-[#FFD6DD]" />
      <div className="pointer-events-none absolute right-[9mm] top-[170mm] h-[3mm] w-[3mm] rounded-full bg-[#FFD6DD]" />
      {/* "YELLOW" written against a cloud drawn into the bottom-left corner,
          level with the BACP mark. */}
      <CloudBlob
        variant="yellow"
        className="pointer-events-none absolute -left-[20mm] bottom-[7mm] h-[32mm] w-[60mm] opacity-30"
      />
      <Sparkles className="pointer-events-none absolute left-[2mm] top-[104mm] h-[12mm] w-[20mm] opacity-45" />

      <div className="relative flex flex-1 flex-col items-center px-[9mm] pb-[5.5mm] pt-[5mm] text-center">
        <Lockup />

        <div className="mt-[3.5mm]">
          <Heading>Can talking to someone help?</Heading>
        </div>

        <p className="mt-[3mm] text-[8pt] leading-[1.5] text-navy">
          At times we may all struggle with stresses, strains, challenges,
          difficulties, loss and change. In a fast changing and sometimes
          confusing world many of us may struggle to feel connected; with
          ourselves, with others and within society and during these times it
          can be helpful to talk about our thoughts, our feelings and our
          emotions.
        </p>
        {/* "CHANGE THIS SENTENCE AS PROVIDED." */}
        <p className="mt-[2.2mm] text-[8pt] leading-[1.5] text-navy">
          We can&rsquo;t always cope on our own and at times may need
          additional support and the therapeutic relationship aims to give that
          support.
        </p>

        <img
          src="/hero-tangled-yarn.webp"
          alt="Two figures sitting in soft blue chairs, one with a tangled ball of yarn for a head, the other calmly holding the loose end."
          width={1200}
          height={1200}
          className="mt-[2.2mm] w-[27mm] mix-blend-multiply"
        />

        {/* "HIGHLIGHT IN ANOTHER WAY, NOT SURE HOW." The full-bleed yellow
            band belonged to this line and has gone to the call to action, so
            this becomes a soft-blue card: different colour, different shape,
            inset rather than bleeding, and no longer competing with the
            footer for the eye. Her document marks this line cyan. */}
        <div className="mt-[3mm] rounded-[3mm] border-[0.4mm] border-soft-blue bg-soft-blue/25 px-[5mm] py-[3mm]">
          <p className="text-balance text-[9pt] font-bold leading-[1.3] text-navy">
            People who need support often look a lot like people who
            don&rsquo;t need support.
          </p>
        </div>

        <Footer />
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
        variant="blue"
        className="pointer-events-none absolute -left-[24mm] top-[6mm] h-[38mm] w-[68mm] opacity-25"
      />
      {/* "PINK CLOUD?" drawn to the right of the portrait, then "DOWN A TINY
          BIT" against it on the second pass. */}
      <CloudBlob
        variant="pink"
        className="pointer-events-none absolute -right-[14mm] top-[20mm] h-[34mm] w-[58mm] opacity-55"
      />
      {/* "CLOUD." drawn low on the right, beside the BACP mark. */}
      <CloudBlob
        variant="blue"
        className="pointer-events-none absolute -right-[22mm] bottom-[10mm] h-[36mm] w-[64mm] opacity-25"
      />
      {/* "ADD BIRD." with two birds drawn into this corner, then "one extra
          bird at top of page two". Sized to match side 1 exactly, and it
          still stops 3mm clear of the portrait. */}
      <div className="pointer-events-none absolute left-[5mm] top-[10mm]">
        <Birds
          className="h-[13mm] w-[40mm]"
          count={3}
          animated={false}
          strokeWidth={1.9}
          opacityScale={1.4}
        />
      </div>
      {/* "YELLOW" written against a circle drawn here, level with the
          portrait. */}
      <div className="pointer-events-none absolute left-[6mm] top-[30mm] h-[6mm] w-[6mm] rounded-full bg-soft-yellow" />
      <div className="pointer-events-none absolute right-[5mm] top-[62mm] h-[4.5mm] w-[4.5mm] rounded-full bg-soft-blue/80" />
      <div className="pointer-events-none absolute left-[3mm] top-[118mm] h-[4mm] w-[4mm] rounded-full bg-[#FFD6DD]" />
      <div className="pointer-events-none absolute right-[7mm] top-[140mm] h-[3.5mm] w-[3.5mm] rounded-full bg-[#FFD6DD]" />

      <div className="relative flex flex-1 flex-col items-center px-[9mm] pb-[5.5mm] pt-[5mm] text-center">
        {/* "MAKE CIRCULAR." She ringed the portrait by hand. */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-[1.8mm] rounded-full bg-soft-yellow/50"
          />
          <img
            src="/ruth-headshot.webp?v=8"
            alt="Ruth, counsellor at Hampshire Headspace"
            width={800}
            height={1067}
            className="relative h-[30mm] w-[30mm] rounded-full object-cover object-[center_18%] shadow-soft ring-[0.5mm] ring-cream"
          />
        </div>

        {/* Her file ends both of these with an ellipsis followed by a full
            stop, which is what Word's autocorrect makes of four typed dots.
            Set as-is it prints as "ABOUT ME... ." with a gap before the last
            dot, so both are set as a single ellipsis, matching the three dots
            in the tagline above the fold on side 1.

            She reordered side 2 and cut it back so it could carry side 1's
            type size. Two headings only, in her order: about her first, then
            what to expect. The rule that used to sit between them is gone.
            "I can't get rid of the lines on page 2, but don't want any" is
            about the paragraph borders in her Word file, not a request for a
            divider here. */}
        <div className="mt-[3.5mm]">
          <Heading>About me&hellip;</Heading>
        </div>

        <p className="mt-[3mm] text-[8pt] leading-[1.5] text-navy">
          I&rsquo;m Ruth, a fully qualified humanistic counsellor, registered
          with the British Association of Counselling and Psychotherapy (BACP)
          and committed to offering a confidential and ethical service.
        </p>
        <p className="mt-[2.2mm] text-[8pt] leading-[1.5] text-navy">
          I offer individual counselling sessions for people aged 16 and over.
          I welcome neurotypical and neurodiverse clients, as well as
          individuals from all cultural backgrounds, sexual orientations, and
          gender identities, in a space which is safe, welcoming, and
          non-judgmental in which you can feel secure and supported.
        </p>
        <p className="mt-[2.2mm] text-[8pt] leading-[1.5] text-navy">
          I have experience working with both adults and adolescents in private
          practice, charity organisations and education settings.
        </p>

        <div className="mt-[4mm]">
          <Heading>What to expect?</Heading>
        </div>

        {/* "1 paragraph." on her scan, and one paragraph in her document. */}
        <p className="mt-[3mm] text-[8pt] leading-[1.5] text-navy">
          Counselling can be different for everyone. During counselling you may
          find a way to make sense of your experience and to move towards
          acceptance and understanding. You may come to terms with what harms
          you at the same time as embracing more of what brings joy and
          fulfilment&hellip;
        </p>

        <Footer />
      </div>

      <div className="h-[6mm] shrink-0 bg-navy" />
    </div>
  );
}

export default function DlFlyerPage() {
  return (
    <div className="fixed inset-0 z-[60] overflow-auto bg-[#E9EAEE] print:static print:overflow-visible print:bg-white">
      <style>{`
        /* This block ships inside this page only, so the rule is scoped to
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
