# Hampshire HeadSpace, Ideas Backlog

Things to consider before launch or in v2. Not blockers, but worth keeping front-of-mind.

---

## Pre-launch (must do before sending real traffic)

- **Wire the booking form to a real endpoint.** Currently `console.log`s to the browser. Options: Resend, Formspree, Cal.com embed, or simple `mailto:` fallback. If using Cal.com, embed it on the contact page so visitors can pick a slot directly.
- **Confirm the contact email.** Site uses `hello@hampshireheadspace.com`, domain is `.co.uk`. Confirm with Ruth which is correct and global-replace if needed.
- **Get Ruth's photo and the room photo.** Three image placeholders currently visible: headshot (Home + About), counselling room (About), Cranberry Wellbeing Centre exterior (Contact). Photos will dramatically lift conversion.
- **Confirm BACP membership number.** Currently no number shown. Once added, can swap "BACP registered" for "BACP registered (member 0123456)" with a link to the public register.
- **Verify Ruth's actual therapeutic approach.** About page currently uses a realistic-sounding integrative-with-person-centred-values description. Confirm with Ruth and refine.
- **Verify Ruth's "why I do this work" story.** Currently a believable holding paragraph. Should be replaced with Ruth's actual story when she has bandwidth.

---

## High-value v2 additions

- **Two-minute video introduction from Ruth on the About page.** Probably the single highest-leverage trust signal we could add. A simple, unedited, slightly imperfect direct-to-camera video of Ruth saying who she is and how she works would 5x trust over the photo alone. Production note: phone camera in good window light, no script, two takes max, exported under 100MB and self-hosted (avoid YouTube embeds because they add cookies and tracking).
- **Embedded Google Map on the Contact page.** Currently a placeholder. Use the iframe embed from Google Maps for the Cranberry Wellbeing Centre. Helps with both trust and SEO (especially Google Maps local pack ranking).
- **Real testimonials with first names + town as Ruth's clients accumulate.** Replace the current verbatim-style placeholders with one or two real ones whenever Ruth has them. Adds enormously to credibility.
- **Plausible analytics (or similar privacy-friendly tool).** Currently no analytics. Plausible is GDPR-compliant by default, no cookie banner needed, costs about £14/month.

---

## Content / SEO

- **Local SEO citations.** Get Hampshire HeadSpace listed on Counselling Directory, Psychology Today UK, BACP Therapist Directory, Welldoing, Yelp UK, Google Business Profile.
- **Google Business Profile.** Free, hugely valuable for "counsellor near me" searches.
- **More articles, slowly.** The current `/blog` has 10 articles. Add 2-3 more per quarter with locally-targeted SEO terms.
- **Article topics worth writing later:** "Counselling for men", "Burnout vs depression", "When your child needs counselling, not you", "Couples counselling vs individual: when to choose which".

---

## Technical polish

- **Optimised image formats.** Hero is currently a 305KB PNG. Could be converted to WebP at ~80KB without visible quality loss.
- **Add `sizes` attribute to `<img>` for the hero.** Tiny but proper Lighthouse-friendly addition.
- **Skip-to-content link.** Already added.
- **Favicon variants.** Currently using a single PNG URL. Could add a multi-size set (16, 32, 180px Apple, 512px PWA) for better browser display.
- **Open Graph image.** Currently uses the logo URL. Could create a dedicated 1200x630 OG image with the headline overlaid for richer link-share previews.
- **Form spam protection.** Once the form is wired to a real endpoint, add a honeypot field or Cloudflare Turnstile.
- **GDPR consent on the form.** A small "I'm happy for Ruth to reply to me at the contact details I've given" checkbox.

---

## Accessibility

- **Test with a real screen reader.** All ARIA is in place but real testing with NVDA / VoiceOver / TalkBack catches subtle issues.
- **Test colour contrast at every step.** Tailwind palette has been chosen for accessibility but full audit at WCAG AAA would be a small extra polish.
- **Consider a "reduced motion" media query.** Currently the bird flapping and float-soft animations run for everyone. Wrapping them in `@media (prefers-reduced-motion: no-preference)` would respect users who turn animation off.

---

## Conversion experiments to try later

- **Test removing the testimonials disclaimer ("Names changed. Quotes shared with permission.")** to see if it lifts conversion. Some readers parse the disclaimer as "fake".
- **Test a longer hero subhead** that explicitly addresses "on the NHS waiting list" right at the top.
- **Test a sticky-page-bottom progress indicator** showing how far you've scrolled, on the home page.
- **Test adding a small Trustpilot or Google reviews widget** once Ruth has reviews.

---

## Partnership / referral ideas

- **Reach out to local GPs in Eastleigh / Chandler's Ford** to introduce Hampshire HeadSpace as a private alternative they can mention to patients on the NHS waiting list.
- **Reach out to local school WhatsApp / mum groups.** Subtle, helpful presence not promotional spam.
- **Mind Hampshire / local Mind branches.** They sometimes refer when their own services are full.

---

## Future site structure ideas

- **A "Resources" page** linking to charities and support lines for crises (Samaritans, CALM, Mind, Anxiety UK, Cruse Bereavement). Builds trust and helps people who aren't yet ready for paid counselling.
- **A "For couples" or "For teens" sub-section** if Ruth ever expands her practice.
- **An email newsletter** for people who aren't ready to book yet but want to follow Ruth's work.
