import { chromium, devices } from "playwright";
import { mkdir } from "node:fs/promises";

const OUT_DIR = "scripts/mobile-shots";
await mkdir(OUT_DIR, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  ...devices["iPhone 13"],
});
const page = await context.newPage();

const routes = [
  ["home", "/"],
  ["about-me", "/about/"],
  ["about-you", "/about-you/"],
  ["services", "/services/"],
  ["fees", "/services/#fees"],
  ["contact", "/contact/"],
  ["privacy", "/privacy/"],
  ["terms", "/terms/"],
  ["ethical", "/ethical-framework/"],
];

for (const [name, path] of routes) {
  const url = `http://localhost:3000${path}`;
  await page.goto(url, { waitUntil: "networkidle" });
  // Force every fade-in element to be fully visible so the screenshot
  // shows actual content, not the pre-animation hidden state.
  await page.addStyleTag({
    content: `*, *::before, *::after { opacity: 1 !important; transform: none !important; animation: none !important; transition: none !important; }`,
  });
  // Trigger any intersection observers that gate on scroll position
  await page.evaluate(async () => {
    await new Promise((r) => {
      let y = 0;
      const step = () => {
        window.scrollTo(0, y);
        y += 400;
        if (y < document.body.scrollHeight) {
          requestAnimationFrame(step);
        } else {
          window.scrollTo(0, 0);
          setTimeout(r, 200);
        }
      };
      step();
    });
  });
  await page.waitForTimeout(400);
  const fileName = `${OUT_DIR}/${name}.png`;
  await page.screenshot({ path: fileName, fullPage: true });
  console.log(`✓ ${name}: ${fileName}`);
}

await browser.close();
console.log("\nAll mobile screenshots saved.");
