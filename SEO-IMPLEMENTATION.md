# Hampshire Headspace — SEO Boost Implementation Plan

**Goal:** Rank as high as possible for local counselling searches (Eastleigh / Hampshire) and AI search — with **zero meaningful visual changes** to the existing pages. Almost everything here is backend / `<head>` / structured-data work plus off-site setup.

**How this file works:**
- **PART 1 = YOUR manual tasks.** Things only *you / Ruth* can do (accounts, verification, off-site listings). Claude literally cannot do these. Do these in parallel with Claude's work.
- **PART 2 = Claude Code prompts.** Copy-paste straight into Claude Code. Already combined into the fewest prompts possible. Only split where Claude genuinely needs data that doesn't exist until a manual task is done.
- **PART 3 = the small list of data Claude needs from you** (gather it while doing Part 1, then run Prompt 2).

---

## 30-second current-state verdict

**Already solid (don't touch):** static export + HTTPS, mobile responsive, unique title/description/canonical on every page, a `ProfessionalService` schema, `robots.ts`, OG/Twitter tags, fast WebP images with alt text, and 10 genuinely good blog articles.

**The 3 critical problems killing your SEO right now:**
1. **The 10 blog articles aren't in your sitemap and nothing links to them** → Google barely knows they exist. (Biggest fix, costs nothing.)
2. **No author / `Person` / `Article` structured data** → for mental-health (YMYL) content, Google demands a named, credentialed author. Without it you won't rank for competitive terms.
3. **You're not set up on Google at all** → no Google Business Profile, no Search Console. For a *local* service business, Google Business Profile alone is ~32% of local ranking weight. This is the #1 lever and it's 100% manual.

**On your "invisible blog" idea:** good instinct, one correction. A page that's hidden from *everyone including Google* (orphan + not in sitemap) ranks for nothing — worst of both worlds, which is exactly where your blog is today. The fix: keep it **out of the top nav** (so it stays low-profile for visitors) but make it **crawlable** (in the sitemap) and **lightly linked** (one discreet footer link + posts linking to each other). That's how it ranks without taking over the site visually.

---

# PART 1 — YOUR MANUAL TASKS (only you can do these)

> Ordered by impact. #1 and #2 are the highest-leverage things in this entire document — do them first. None of these require waiting on Claude.

### ✅ Task 1 — Google Business Profile (BIGGEST single SEO win) — ~30 min + verification wait
This is the Maps/“counsellor near me” listing. It is the largest local ranking factor and Claude cannot create it.
1. Go to **business.google.com** → "Manage now".
2. Business name: **Hampshire Headspace**.
3. **Primary category: “Mental Health Service”** (add secondary: “Counselor” / “Psychotherapist”). The primary category is one of the strongest ranking signals — get it right.
4. Address: **no public street address**. Ruth works from rooms in central Eastleigh and Winnall, Winchester, and publishes neither. Set this up as a **service-area business** (Google asks "do you serve customers at your business address?" → answer **No**) and give Eastleigh as the base town.
5. Service area: Eastleigh, Winchester, Chandler's Ford, Southampton, Hedge End, Romsey.
6. Phone: **07717 811986**. Website: your live domain (see Task 4).
7. **Verify** (postcard or phone — Google decides). This can take a few days; everything else can continue meanwhile.
8. After verifying: add **services** (free initial session, face to face £50, online £40), **opening hours**, a keyword-rich description ("Private counselling in Eastleigh and Winchester…"), and **at least 5 photos** (the rooms, Ruth, logo).
> 📌 **Write down the exact lat/long pin and final opening hours** — Claude needs them for Part 3.

### ✅ Task 2 — Google Search Console + submit sitemap — ~15 min
Tells Google your site exists and to index it fast. Claude can't log in as you.
1. Go to **search.google.com/search-console** → Add property → **Domain** property → enter your domain.
2. Google gives you a **TXT record**. Add it in **Cloudflare → DNS** (Type: TXT, paste the value) → back in Search Console click **Verify**.
3. Once verified: **Sitemaps → submit `sitemap.xml`**.
4. Use **URL Inspection** on your homepage and 2–3 blog posts → "Request indexing".
> If you'd rather not touch DNS, choose the **HTML-file** verification method instead, paste the file name/token into Part 3, and Claude will drop the file into `/public` for you.

### ✅ Task 3 — Bing Webmaster Tools + fast indexing — ~5 min (powers ChatGPT/Copilot search)
1. Go to **bing.com/webmasters** → sign in → **Import from Google Search Console** (fastest, one click).
2. Confirm the sitemap imported. (Bing feeds ChatGPT search, so this matters more than it used to.)
3. **Easiest fast-indexing:** in **Cloudflare → Cache → Configuration**, turn on **Crawler Hints** — this auto-submits changes via IndexNow to Bing with zero maintenance. (This replaces needing the manual IndexNow key file, though Claude will still create the key file as a fallback. Note: Google does **not** use IndexNow — that's what Search Console/sitemap in Task 2 is for.)

### ✅ Task 4 — Lock the domain + redirects — ~10 min (in Cloudflare)
1. The live domain is **`hampshireheadspace.com`** (already hard-coded as canonical everywhere).
2. Point that domain at the Cloudflare Pages site.
3. For the other 3 domains: add **301 redirects → `hampshireheadspace.com`** (Cloudflare → Rules → Redirect Rules). Never serve the same site on two live domains.

### ✅ Task 5 — Directory listings / citations (NAP) — ~45 min, do over a week
Each is a trust signal + backlink + referral source. **Use identical Name / Address / Phone everywhere** (copy-paste exactly):
> `Hampshire Headspace, Eastleigh and Winchester, Hampshire · 07717 811986`

> ⚠️ No street address is published anywhere on the site, so do **not** invent one for a directory. If a listing forces an address field, use the town only, and keep it identical everywhere — inconsistent NAP is what breaks local ranking.
1. **BACP "Find a Therapist"** — included with membership. Highest trust signal for mental health. **Grab your public BACP profile URL** (Part 3).
2. **Counselling Directory** (counselling-directory.org.uk) — the dominant UK directory. Paid but worth it. **Grab the profile URL** (Part 3).
3. **Psychology Today UK** (psychologytoday.com/gb) — paid, high authority. **Grab the profile URL** (Part 3).
4. **Free citations:** Bing Places, Yell, FreeIndex. If Ruth returns to the Cranberry Wellbeing Centre, ask them to link to the site too — a strong local backlink.

### ✅ Task 6 — Reviews — ongoing
Once you have your first happy clients, ask for a **Google review on your Business Profile** (Task 1). Reviews are a direct local ranking factor and the highest-value place for the testimonial Ruth offered.

### ✅ Task 7 — Fix the enquiry-form recipient — ~3 min
The form delivers to wherever Formspark is configured, not the code. Log into **Formspark → your form → set notification email to `hello@hampshireheadspace.com`**, then send one test enquiry to confirm it arrives.

---

# PART 2 — CLAUDE CODE PROMPTS

> Two prompts. **Prompt 1** does ~90% of the technical SEO immediately (no external data needed). **Prompt 2** is a 2-minute swap that injects the real URLs/coordinates from Part 3 — it's split off **only because those values don't exist until you've done Tasks 1 & 5.** Run Prompt 1 now; run Prompt 2 once you've gathered Part 3.

## ▶️ PROMPT 1 — run this now (no external data required)

```
You're working in the Hampshire Headspace Next.js static-export site (output: "export"). Implement the following technical SEO upgrades. Do NOT change the visual design or copy of any existing page. Build with `npm run build`, fix any errors, then commit and push. Here are the tasks:

1. CENTRALISE SEO DATA. Create `lib/siteConfig.ts` exporting a single object with: SITE_URL ("https://hampshireheadspace.co.uk"), business name, full address parts, phone ("+447843114396" / display "07843 114396"), email ("hello@hampshireheadspace.com"), geo {lat, lng} (use approx 50.9686, -1.3520 for SO50 9DF as a placeholder — leave a // TODO comment to refine from Google Business Profile), openingHours (placeholder Mon–Fri 09:00–17:00, // TODO confirm), priceRange "££", and a `sameAs: string[]` array (leave it empty with a // TODO: add BACP / Counselling Directory / Psychology Today profile URLs). Also export a `ruth` object: name "Ruth Fleming" (confirm exact name in repo), jobTitle "Humanistic Counsellor", BACP membership number "418989", and her own sameAs array (empty, same TODO). Refactor layout.tsx, sitemap.ts, Footer, Header etc. to import SITE_URL etc. from here instead of redefining it.

2. FIX THE SITEMAP. Rewrite app/sitemap.ts so it generates entries for EVERY route, including all 10 individual blog posts under /blog/<slug>/. Read the post slugs from the array in app/blog/page.tsx (or hard-code the 10 slugs). Give the homepage priority 1.0, key pages (services, contact, about, about-you) 0.8, blog posts 0.6, legal pages 0.3. Use trailing slashes to match trailingSlash:true.

3. DE-ORPHAN THE BLOG (minimal visual footprint).
   a. In Footer.tsx, add a single "Articles" link to the existing "Site" link list, pointing to /blog/. (This is the only change to a visible page and it's required so the posts aren't orphaned.)
   b. In BlogLayout.tsx, add a "Related articles" block at the bottom (after the existing CTA box) that links to 3 other posts. Accept a new optional prop `relatedSlugs?: {slug,title}[]`; if not passed, just link to /blog/ index. Then in each of the 10 blog post pages, pass 2–3 relevant related posts. This internal linking only appears on blog pages, so the main site is visually unchanged.

4. ADD ARTICLE + BREADCRUMB SCHEMA. In BlogLayout.tsx, add a `slug` prop (pass it from each post page — the canonical already exists in each post's metadata, reuse that path). Inject JSON-LD <script> for:
   - BlogPosting: headline (title), description, datePublished (publishedISO), dateModified (= publishedISO unless a modified date is passed), image (use SITE_URL + "/logo.webp" for now), inLanguage "en-GB", mainEntityOfPage = SITE_URL+slug, author = { "@type":"Person", "@id": SITE_URL+"/about/#ruth", name, jobTitle } from siteConfig, publisher = Organization "Hampshire Headspace" with logo.
   - BreadcrumbList: Home → Articles (/blog/) → this post.

5. ENRICH THE BUSINESS SCHEMA in layout.tsx. Upgrade the existing ProfessionalService JSON-LD using siteConfig: add telephone, geo (GeoCoordinates), openingHoursSpecification, sameAs (from siteConfig — fine if empty for now), areaServed list, and hasOfferCatalog with 3 offers (Free initial online session; In-person session £55 GBP; Online session £40 GBP). Add `founder`/`employee` referencing a Person with "@id": SITE_URL+"/about/#ruth".

6. ADD PERSON (E-E-A-T) SCHEMA on the About page (app/about/page.tsx). Inject a Person JSON-LD with "@id": SITE_URL+"/about/#ruth", name, jobTitle "Humanistic Counsellor", hasCredential (BACP registered member 418989), worksFor the organization, and sameAs from siteConfig.ruth.sameAs (empty ok). This is the entity the BlogPosting author @id points to.

7. SECURITY / TRUST HEADERS. In public/_headers add for all routes (/*): X-Content-Type-Options: nosniff, Referrer-Policy: strict-origin-when-cross-origin, X-Frame-Options: SAMEORIGIN, Permissions-Policy: geolocation=(), camera=(), microphone=(), and Strict-Transport-Security: max-age=63072000; includeSubDomains; preload. Keep all existing cache rules.

8. AI / GENERATIVE SEARCH (OPTIONAL — low priority). Create public/llms.txt (markdown) summarising who Hampshire Headspace is, key pages with absolute URLs, services, location, and the free-first-session offer. NOTE: Google officially stated in 2026 that llms.txt is NOT required, so treat this as a cheap nice-to-have, not a priority. Skip if it adds any complexity.

9. INDEXNOW. Generate a random 32-char hex key. Create public/<key>.txt containing exactly that key on one line. Add a comment in lib/siteConfig.ts noting the key value so I can submit it in Bing Webmaster Tools later.

10. SANITY. Ensure every <img> has descriptive alt text, every page still has a unique title + meta description + canonical (they mostly do — just verify the blog posts and new files). Don't introduce any noindex. Run the build, confirm sitemap.xml output contains all blog post URLs, then commit and push.
```

## ▶️ PROMPT 2 — run this AFTER you've gathered Part 3 (real data swap)

```
Open lib/siteConfig.ts. Replace the placeholder values with the real data below, then rebuild, commit and push. Also confirm the BlogPosting author @id and the About-page Person @id still match.

- geo lat/lng: <PASTE from Google Business Profile pin>
- openingHours: <PASTE confirmed hours>
- business sameAs (add all that exist): Google Business Profile URL, BACP profile URL, Counselling Directory URL, Psychology Today URL, any social profiles
- ruth.sameAs: BACP profile URL, Counselling Directory profile URL, Psychology Today profile URL, LinkedIn (if any)
- ruth.name: <confirm Ruth's full name>

Then run a build and verify the JSON-LD in the built /about/index.html and one blog post /index.html contains the new sameAs links. Commit and push.
```

> **Optional Phase 2 (high-value, only if you want more ranking surface — say the word and I'll write the prompt):** dedicated local service landing pages, e.g. `/anxiety-counselling-eastleigh`, `/counselling-chandlers-ford`, linked discreetly from the footer. This is the standard local-SEO "service × location page" play and would meaningfully widen what you rank for — but they are *new pages*, so flagging separately from the no-visual-change work above.

---

# PART 3 — DATA CLAUDE NEEDS FROM YOU (gather during Part 1, then run Prompt 2)

Fill these in as you complete the manual tasks, then paste into Prompt 2:

- [ ] **Google Business Profile URL:** ____________________
- [ ] **Exact map pin lat/long** (from GBP): ____________________
- [ ] **Confirmed opening hours:** ____________________
- [ ] **BACP "Find a Therapist" profile URL:** ____________________
- [ ] **Counselling Directory profile URL:** ____________________
- [ ] **Psychology Today UK profile URL:** ____________________
- [ ] **LinkedIn / any social URLs:** ____________________
- [ ] **Ruth's full name (for author schema):** ____________________
- [ ] **(If using HTML-file GSC verification) the verification filename/token:** ____________________

---

## Why these specific moves (the evidence)

- Local ranking = proximity + relevance + prominence; **Google Business Profile ≈ 32% of local-pack weight** — the top lever, and manual. ([Mental Health IT Solutions](https://mentalhealthitsolutions.com/blog/local-seo-for-therapists/), [Reframe](https://reframepractice.com/guides/local-seo-for-therapists))
- **Orphan pages don't rank** even with great content; they need sitemap inclusion + internal links — exactly the blog fix above. ([Fly High Media](https://www.flyhighmedia.co.uk/blog/impact-orphan-pages-seo/), [ClickRank](https://www.clickrank.ai/orphan-pages-how-to-fix/))
- Counselling is **YMYL** → Google demands named, credentialed authorship + `Person` schema with `sameAs` to BACP etc. ([Search Engine Journal](https://www.searchenginejournal.com/eeat-ymyl-2026/), [Healthcare Success](https://healthcaresuccess.com/eeat-mental-health/))
- Schema doesn't directly boost rank but makes you **eligible for rich results + helps AI engines parse you correctly**. Note: **FAQ rich results were retired May 2026**, so don't over-invest in FAQ schema. ([icanotes](https://www.icanotes.com/2026/02/17/seo-for-therapists/), [Healthcare schema](https://healthcaresuccess.com/blog/seo/schema-markup-healthcare.html))
- Technical hygiene: sitemap must contain **only canonical, indexable URLs and be submitted in GSC**; template schema for dynamic routes (blog) where SEO value is highest. ([Pagepro Next.js SEO](https://pagepro.co/blog/nextjs-seo/), [Strapi](https://strapi.io/blog/nextjs-seo))
- **Bing Webmaster Tools + IndexNow** speed up indexing and feed AI search (Bing powers ChatGPT search); Cloudflare Crawler Hints automates it. Google doesn't use IndexNow. ([Bing IndexNow](https://www.bing.com/indexnow), [IndexNow getstarted](https://www.bing.com/indexnow/getstarted))
- **llms.txt: officially optional.** Google's 2026 generative-AI guide debunks it as a requirement — do fundamentals first. ([Google debunks GEO myths](https://dev.to/toshihiro_shishido/google-officially-debunks-5-geo-myths-in-2026-llmstxt-and-chunking-are-not-required-1cl8))
- **NAP-consistent citations** (Counselling Directory, BACP, Psychology Today) are foundational local trust signals. ([Counselling Directory](https://www.counselling-directory.org.uk/))
- **llms.txt** = low-risk/low-effort, possible upside for AI search; not a priority over fundamentals. ([Semrush](https://www.semrush.com/blog/llms-txt/), [Ahrefs](https://ahrefs.com/blog/llms-txt/))
```
