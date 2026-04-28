import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";

const OUT = "scripts/selfspace-analysis";
await mkdir(OUT, { recursive: true });

const browser = await chromium.launch();

// Two viewports: desktop and mobile
const runs = [
  { name: "desktop", viewport: { width: 1440, height: 900 }, isMobile: false },
  { name: "mobile", viewport: { width: 390, height: 844 }, isMobile: true },
];

for (const run of runs) {
  console.log(`\n=== ${run.name.toUpperCase()} (${run.viewport.width}x${run.viewport.height}) ===`);
  const ctx = await browser.newContext({
    viewport: run.viewport,
    isMobile: run.isMobile,
    deviceScaleFactor: 2,
    userAgent: run.isMobile
      ? "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148"
      : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/127",
  });
  const page = await ctx.newPage();
  await page.goto("https://theselfspace.com/", { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(1500);

  // Full-page screenshot
  await page.screenshot({
    path: `${OUT}/${run.name}-full.png`,
    fullPage: true,
  });
  console.log(`Full-page screenshot saved.`);

  // Above-the-fold screenshot
  await page.screenshot({
    path: `${OUT}/${run.name}-hero.png`,
    fullPage: false,
  });

  // Section-by-section screenshots while scrolling
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  const viewportHeight = run.viewport.height;
  let scrollY = 0;
  let i = 0;
  while (scrollY < totalHeight) {
    await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), scrollY);
    await page.waitForTimeout(700);
    await page.screenshot({
      path: `${OUT}/${run.name}-scroll-${String(i).padStart(2, "0")}.png`,
      fullPage: false,
    });
    scrollY += Math.floor(viewportHeight * 0.85);
    i++;
    if (i > 25) break;
  }
  console.log(`${i} scroll screenshots.`);

  // Extract structure / content
  const data = await page.evaluate(() => {
    const styles = getComputedStyle(document.body);
    const colors = new Set();
    document.querySelectorAll("*").forEach((el) => {
      const cs = getComputedStyle(el);
      [cs.backgroundColor, cs.color, cs.borderColor].forEach((c) => {
        if (c && c !== "rgba(0, 0, 0, 0)" && c !== "transparent") colors.add(c);
      });
    });
    const headings = Array.from(document.querySelectorAll("h1,h2,h3"))
      .slice(0, 30)
      .map((h) => ({ tag: h.tagName, text: h.textContent?.trim().slice(0, 200) }));
    const buttons = Array.from(document.querySelectorAll("a,button"))
      .filter((b) => b.textContent?.trim() && b.textContent.length < 60)
      .slice(0, 30)
      .map((b) => b.textContent?.trim());
    const images = Array.from(document.querySelectorAll("img")).slice(0, 15).map((i) => ({
      src: i.src,
      alt: i.alt,
      w: i.naturalWidth,
      h: i.naturalHeight,
    }));
    const fontFams = new Set();
    document.querySelectorAll("h1,h2,h3,p,a,button,span").forEach((el) => {
      fontFams.add(getComputedStyle(el).fontFamily);
    });
    return {
      bodyFont: styles.fontFamily,
      bodyBg: styles.backgroundColor,
      bodyColor: styles.color,
      uniqueColors: Array.from(colors).slice(0, 50),
      uniqueFonts: Array.from(fontFams).slice(0, 10),
      headings,
      buttons,
      images,
      title: document.title,
      meta: document.querySelector("meta[name=description]")?.getAttribute("content"),
    };
  });

  await writeFile(
    `${OUT}/${run.name}-data.json`,
    JSON.stringify(data, null, 2),
  );

  await ctx.close();
}

await browser.close();
console.log("\nDone. Screenshots and data in", OUT);
