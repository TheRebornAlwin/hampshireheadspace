import { chromium } from "playwright";

const url = process.argv[2] || "https://hampshireheadspace.pages.dev/";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto(url, { waitUntil: "networkidle" });
await page.waitForTimeout(1500);
await page.screenshot({ path: "scripts/hero-live.png" });
console.log("saved scripts/hero-live.png");
await browser.close();
