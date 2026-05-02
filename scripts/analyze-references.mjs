import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";

const OUT = "scripts/reference-analysis";
await mkdir(OUT, { recursive: true });

const SITES = [
  { id: "drjanehalsall", url: "https://www.drjanehalsall.com/" },
  { id: "relate", url: "https://www.relate.org.uk/" },
  {
    id: "ruth-doc",
    url: "https://docs.google.com/document/d/1xFol5wzhKc_3I1Qp2O3BhIHz8zKkhQfE/edit?usp=sharing&ouid=107155579145507137652&rtpof=true&sd=true",
    isDoc: true,
  },
];

const browser = await chromium.launch();

for (const site of SITES) {
  console.log(`\n=== ${site.id.toUpperCase()} ===`);
  const runs = site.isDoc
    ? [{ name: "doc", viewport: { width: 1280, height: 1600 }, isMobile: false }]
    : [
        { name: "desktop", viewport: { width: 1440, height: 900 }, isMobile: false },
        { name: "mobile", viewport: { width: 390, height: 844 }, isMobile: true },
      ];

  for (const run of runs) {
    console.log(`  ${run.name} ${run.viewport.width}x${run.viewport.height}`);
    const ctx = await browser.newContext({
      viewport: run.viewport,
      isMobile: run.isMobile,
      deviceScaleFactor: 2,
      userAgent: run.isMobile
        ? "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148"
        : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/127",
    });
    const page = await ctx.newPage();
    try {
      await page.goto(site.url, { waitUntil: "networkidle", timeout: 90000 });
    } catch (e) {
      console.log(`    nav warning:`, e.message);
    }
    await page.waitForTimeout(2500);

    await page.screenshot({
      path: `${OUT}/${site.id}-${run.name}-full.png`,
      fullPage: !site.isDoc,
    });

    if (!site.isDoc) {
      const totalHeight = await page.evaluate(() => document.body.scrollHeight);
      const vh = run.viewport.height;
      let y = 0;
      let i = 0;
      while (y < totalHeight) {
        await page.evaluate((Y) => window.scrollTo({ top: Y, behavior: "instant" }), y);
        await page.waitForTimeout(550);
        await page.screenshot({
          path: `${OUT}/${site.id}-${run.name}-${String(i).padStart(2, "0")}.png`,
          fullPage: false,
        });
        y += Math.floor(vh * 0.85);
        i++;
        if (i > 18) break;
      }

      const data = await page.evaluate(() => {
        const styles = getComputedStyle(document.body);
        const colors = new Set();
        document.querySelectorAll("*").forEach((el) => {
          const cs = getComputedStyle(el);
          [cs.backgroundColor, cs.color].forEach((c) => {
            if (c && c !== "rgba(0, 0, 0, 0)" && c !== "transparent") colors.add(c);
          });
        });
        const headings = Array.from(document.querySelectorAll("h1,h2,h3"))
          .slice(0, 25)
          .map((h) => ({ tag: h.tagName, text: h.textContent?.trim().slice(0, 200) }));
        const fontFams = new Set();
        document.querySelectorAll("h1,h2,h3,p").forEach((el) => {
          fontFams.add(getComputedStyle(el).fontFamily);
        });
        return {
          bodyFont: styles.fontFamily,
          bodyBg: styles.backgroundColor,
          uniqueColors: Array.from(colors).slice(0, 40),
          uniqueFonts: Array.from(fontFams).slice(0, 8),
          headings,
          title: document.title,
          meta: document.querySelector("meta[name=description]")?.getAttribute("content"),
        };
      });
      await writeFile(
        `${OUT}/${site.id}-${run.name}-data.json`,
        JSON.stringify(data, null, 2),
      );
    } else {
      // For the doc: scroll and screenshot pages, then also try the export endpoint for plain text fallback.
      const docId = "1xFol5wzhKc_3I1Qp2O3BhIHz8zKkhQfE";
      // Wait for the doc to fully render
      try {
        await page.waitForSelector(".kix-page", { timeout: 30000 });
      } catch {
        console.log("    waited for kix-page selector, proceeding");
      }
      await page.waitForTimeout(2500);

      const totalHeight = await page.evaluate(
        () => document.documentElement.scrollHeight,
      );
      const vh = run.viewport.height;
      let y = 0;
      let i = 0;
      while (y < totalHeight) {
        await page.evaluate((Y) => window.scrollTo({ top: Y, behavior: "instant" }), y);
        await page.waitForTimeout(900);
        await page.screenshot({
          path: `${OUT}/${site.id}-page-${String(i).padStart(2, "0")}.png`,
          fullPage: false,
        });
        y += Math.floor(vh * 0.92);
        i++;
        if (i > 25) break;
      }
    }

    await ctx.close();
  }
}

await browser.close();
console.log("\nDone.", OUT);
