import sharp from "sharp";
import { stat } from "node:fs/promises";

async function convert(src, out, opts) {
  await sharp(src)
    .resize(opts.resize)
    .webp({ quality: opts.quality, effort: 6, alphaQuality: 100 })
    .toFile(out);
  const s = await stat(out);
  console.log(`✓ ${out}  ${(s.size / 1024).toFixed(1)} KB`);
}

// Wordmark — used in homepage hero (rendered ~480px wide on desktop) + footer (~200px) + header (~140px)
await convert("./logo-wordmark-raw", "public/logo.webp", {
  resize: { width: 1200, withoutEnlargement: true },
  quality: 92,
});

// Icon-only — used for favicon (browser tab) and as the og:image fallback
await convert("./logo-icon-only-raw", "public/logo-icon.webp", {
  resize: { width: 800, withoutEnlargement: true },
  quality: 92,
});
