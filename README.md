# Hampshire HeadSpace

Marketing site for Ruth's private counselling practice in Eastleigh, Hampshire.

**Live domain target:** `hampshireheadspace.co.uk`

## What this is

A static, fast, accessible 5-page site whose single job is to convert cold traffic into bookings for the free first session.

Pages:

- `/` — Home (the conversion engine, longest page)
- `/about` — About Ruth
- `/services` — Services & Fees
- `/faq` — Questions and answers
- `/contact` — Contact and booking

## Tech stack

- **Framework:** Next.js 16 (App Router) with `output: "export"` so the site builds to a fully static `out/` directory.
- **Styling:** Tailwind CSS, custom palette in `tailwind.config.ts`.
- **Type system:** TypeScript.
- **Fonts:** Plus Jakarta Sans (headings/body) + Inter (fallback) loaded from Google Fonts in `app/layout.tsx`.
- **Illustrations:** All inline SVG components in `components/illustrations/`. No raster art, no stock photography.

Why Next.js + static export over plain HTML or Astro: it gives a clean component model, easy SEO/metadata APIs (`sitemap.ts`, `robots.ts`, OpenGraph, JSON-LD), and the option to wire up forms or a calendar later without re-platforming. Static export gives us cheap, fast, host-anywhere deployment until that's needed.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Build for production

```bash
npm run build
```

Outputs a fully static site in `out/`. Ready to drop on Vercel, Netlify, Cloudflare Pages, or any static host.

## Deploy (recommended: Vercel)

1. Push this repo to GitHub (already configured: https://github.com/TheRebornAlwin/hampshireheadspace).
2. In Vercel, "Add new project" → import the repo. Defaults will work.
3. Add the custom domain `hampshireheadspace.co.uk` in Vercel project settings.

## What is finished vs. placeholder

### Finished

- Full design system (colors, typography, layout, spacing, components).
- All 5 pages with copy aligned to the WWP, awareness, sophistication, and verbatim docs.
- All inline SVG illustrations (hero tangled-yarn scene, chairs, thought bubbles, envelope, cloud blobs, wave divider).
- Header (sticky, mobile menu, scroll-state) + Footer.
- Mobile-first responsive design, tested layouts down to 375px.
- Accessibility basics: skip-to-content link, focus states, semantic HTML, ARIA where needed, descriptive alt text.
- SEO: per-page metadata, OpenGraph + Twitter cards, LocalBusiness JSON-LD, `sitemap.ts`, `robots.ts`, canonical URLs.
- Favicon and header logo wired to the URLs Ruth provided.
- Booking form UI complete and validates inputs client-side.

### Placeholder — needs Ruth or further work

| What | Where | Action when ready |
|---|---|---|
| Booking form submission | `components/BookingForm.tsx` | Currently `console.log`s the payload. Wire to Resend, Formspree, or a Cal.com / Calendly embed. |
| Ruth's personal "why I do this work" story | `app/about/page.tsx` (placeholder block) | Replace the dashed-border placeholder with Ruth's own copy, 2–3 short paragraphs. |
| Ruth's specific therapeutic approach (mechanism) | `app/about/page.tsx` "How I work" placeholder, plus revisit Home Section 3 mechanism | When Ruth confirms her approach (person-centred, integrative, etc.), rewrite as a benefit, not a label. |
| BACP membership number | `app/about/page.tsx` credentials list | Swap "(member number coming soon)" for the real number. |
| Ruth's headshot | `app/page.tsx` (Home About preview) and `app/about/page.tsx` hero | Replace `<ImagePlaceholder>` with `<img>` once the file lands in `/public/`. |
| Counselling room photo | `app/about/page.tsx` "The room" section | Same replacement pattern. |
| Cranberry Wellbeing Centre exterior photo | `app/contact/page.tsx` "Where to find us" | Same replacement pattern. |
| Phone / text number | `app/contact/page.tsx` and `components/Footer.tsx` | Currently shows "number coming soon". |
| Confirm contact email | currently `hello@hampshireheadspace.com` everywhere | Confirm with Ruth and global-replace if different. |
| Embedded map of the centre | `app/contact/page.tsx` | Add a Google Maps embed once we have the exact street address. |
| Analytics (Plausible / GA) | `app/layout.tsx` (commented placeholder in `<head>`) | Add when Ruth decides on consent + provider. |
| Cookie banner | not present | Add only if/when analytics or cookies are introduced. |

## Voice and copy rules (do not break)

These were used to write every word on the site:

- **No em dashes anywhere.** Use commas, full stops, parentheses, or rewrite.
- **No banned phrases:** "safe, warm, non-judgemental space", "on your journey", "embark on your healing", "begin your transformation", "reach out today", "take that brave first step".
- **No Carl Rogers quotes** or any famous-therapist quotes.
- **No fake testimonials.** Ruth has zero clients. Build trust through credentials, story, transparency of process, and design quality.
- **No stock photos.** SVG illustrations and image placeholders only.
- **At most 1–2 exclamation marks on the entire site.**
- **First person ("I"), second person ("you").** Never "we" or "the client".
- **Lead with Sarah's experience, then Ruth's offer, then credentials.**

## File structure

```
app/
  layout.tsx           # root layout, fonts, metadata, JSON-LD, header/footer
  page.tsx             # home (8 sections)
  globals.css
  about/page.tsx
  services/page.tsx
  faq/page.tsx
  contact/page.tsx
  not-found.tsx
  sitemap.ts
  robots.ts
components/
  Header.tsx           # sticky nav with mobile menu
  Footer.tsx
  Button.tsx
  Container.tsx
  Section.tsx
  FAQItem.tsx          # client accordion
  FadeIn.tsx           # IntersectionObserver fade-up
  BookingForm.tsx      # client form, console.log placeholder
  ImagePlaceholder.tsx
  illustrations/
    HeroIllustration.tsx
    ChairsIllustration.tsx
    ThoughtBubbles.tsx
    EnvelopeIllustration.tsx
    CloudBlob.tsx
    WaveDivider.tsx
tailwind.config.ts     # color palette + animations
next.config.mjs        # static export config
```

## License

Private. All rights reserved by Ruth and Hampshire HeadSpace.
