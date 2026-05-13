import sharp from "sharp";
import { stat } from "node:fs/promises";

// Convert Ruth's room + exterior photos to optimized WebP.
// Source paths are the user's Downloads folder.

async function convert(src, dst, opts = {}) {
  const { width = 1600, quality = 82 } = opts;
  await sharp(src)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toFile(dst);
  const s = await stat(dst);
  console.log(`Wrote ${dst}: ${(s.size / 1024).toFixed(1)} KB`);
}

await convert(
  "C:/Users/ac311/Downloads/ROOM.png",
  "public/room.webp",
  { width: 1600, quality: 82 },
);

await convert(
  "C:/Users/ac311/Downloads/CRANBERRY.png",
  "public/cranberry.webp",
  { width: 1600, quality: 82 },
);
