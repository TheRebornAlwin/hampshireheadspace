import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";

const OUT = "scripts/reference-analysis";
await mkdir(OUT, { recursive: true });

const SITES = [
  { id: "theselfspace", url: "https://theselfspace.com/" },
  { id: "ours", url: "http://localhost:3000/" },
];

const browser = await chromium.launch();

for (const site of SITES) {
  console.log(`\n=== ${site.id.toUpperCase()} ===`);
  const runs = [
    { name: "desktop", viewport: { width: 1440, height: 900 }, isMobile: false },
    { name: "mobile", viewport: { width: 375, height: 812 }, isMobile: true },
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

    // Full-page screenshot
    await page.screenshot({
      path: `${OUT}/${site.id}-${run.name}-full.png`,
      fullPage: true,
    });

    // Get total height for stepped scrolling
    const totalHeight = await page.evaluate(() => document.body.scrollHeight);
    const vh = run.viewport.height;

    // We want 5-8 stepped screenshots
    const stepCount = Math.min(8, Math.max(5, Math.ceil(totalHeight / vh)));
    const step = Math.floor((totalHeight - vh) / Math.max(1, stepCount - 1));

    for (let i = 0; i < stepCount; i++) {
      const y = Math.min(i * step, totalHeight - vh);
      await page.evaluate((Y) => window.scrollTo({ top: Y, behavior: "instant" }), y);
      await page.waitForTimeout(700);
      await page.screenshot({
        path: `${OUT}/${site.id}-${run.name}-${String(i).padStart(2, "0")}.png`,
        fullPage: false,
      });
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
        .slice(0, 30)
        .map((h) => ({ tag: h.tagName, text: h.textContent?.trim().slice(0, 200) }));
      const fontFams = new Set();
      document.querySelectorAll("h1,h2,h3,p").forEach((el) => {
        fontFams.add(getComputedStyle(el).fontFamily);
      });
      const imageCount = document.querySelectorAll("img").length;
      const sectionCount = document.querySelectorAll("section").length;
      const totalText = document.body.innerText?.length || 0;
      return {
        bodyFont: styles.fontFamily,
        bodyBg: styles.backgroundColor,
        uniqueColors: Array.from(colors).slice(0, 40),
        uniqueFonts: Array.from(fontFams).slice(0, 8),
        headings,
        imageCount,
        sectionCount,
        totalTextLength: totalText,
        scrollHeight: document.body.scrollHeight,
        title: document.title,
      };
    });
    await writeFile(
      `${OUT}/${site.id}-${run.name}-data.json`,
      JSON.stringify(data, null, 2),
    );

    await ctx.close();
  }
}

await browser.close();
console.log("\nDone.", OUT);
