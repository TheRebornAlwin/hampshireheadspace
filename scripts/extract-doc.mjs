import { readFile, writeFile } from "node:fs/promises";

const html = await readFile("scripts/reference-analysis/ruth-doc.html", "utf8");

// Class c3 = background-color:#ffff00 (yellow highlight) per the embedded CSS.
// Catch any element whose class attribute contains c3 (Google often combines
// classes like class="c3 c7" or class="c7 c3").
const yellowRegex =
  /<([a-z]+)[^>]*class="[^"]*\bc3\b[^"]*"[^>]*>([\s\S]*?)<\/\1>/gi;

const highlights = [];
let m;
while ((m = yellowRegex.exec(html)) !== null) {
  const text = m[2].replace(/<[^>]+>/g, "").trim();
  if (text) highlights.push(text);
}

console.log("=== YELLOW HIGHLIGHTED ===\n");
highlights.forEach((t, i) => console.log(`[${i + 1}] ${t}\n`));

// Plain-text dump of body
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
const body = bodyMatch ? bodyMatch[1] : html;
const plain = body
  .replace(/<\/p>/gi, "\n\n")
  .replace(/<br\s*\/?>/gi, "\n")
  .replace(/<\/h[1-6]>/gi, "\n\n")
  .replace(/<[^>]+>/g, "")
  .replace(/&nbsp;/g, " ")
  .replace(/&amp;/g, "&")
  .replace(/&lt;/g, "<")
  .replace(/&gt;/g, ">")
  .replace(/&#39;/g, "'")
  .replace(/&quot;/g, '"')
  .replace(/\n{3,}/g, "\n\n")
  .trim();

await writeFile("scripts/reference-analysis/ruth-doc-text.txt", plain);
await writeFile(
  "scripts/reference-analysis/ruth-doc-highlights.json",
  JSON.stringify(highlights, null, 2),
);
console.log(`\nPlain text: ${plain.length} chars, highlights: ${highlights.length}`);
