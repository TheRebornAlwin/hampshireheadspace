import sharp from "sharp";
import { stat } from "node:fs/promises";

async function convert(src, out, opts) {
  await sharp(src).resize(opts.resize).webp({ quality: opts.quality, effort: 6 }).toFile(out);
  const s = await stat(out);
  console.log(`✓ ${out}  ${(s.size / 1024).toFixed(1)} KB`);
}

await convert("./ruth-headshot-new-raw", "public/ruth-headshot.webp", {
  resize: { width: 800, withoutEnlargement: true },
  quality: 85,
});
await convert("./room-new-raw", "public/room.webp", {
  resize: { width: 1600, withoutEnlargement: true },
  quality: 82,
});
await convert("./door-raw", "public/door.webp", {
  resize: { width: 1200, withoutEnlargement: true },
  quality: 82,
});
await convert("./yarn2-raw", "public/hero-tangled-yarn.webp", {
  resize: { width: 1200, withoutEnlargement: true },
  quality: 88,
});
