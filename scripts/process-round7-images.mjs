import sharp from "sharp";
import { stat } from "node:fs/promises";

// Round 7 photos, from Ruth's "website updates" doc.
// The doc is a .docx, so the JPEGs were pulled out of word/media/ first.
//   image1 -> the homepage hero photo (Ruth with a client)
//   image2 -> contact page, chairs and plants
//   image3 -> contact page, shelves
// Ruth: the two contact photos must not be captioned as "the counselling room".

const SRC =
  "C:/Users/ac311/AppData/Local/Temp/claude/C--Users-ac311-OneDrive-documents-hampshireheadspace-main/232e8052-add1-4fc2-adf5-71263731199f/scratchpad/docx/word/media";

async function convert(src, dst, opts = {}) {
  const { width = 1600, quality = 82 } = opts;
  await sharp(src)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toFile(dst);
  const s = await stat(dst);
  const m = await sharp(dst).metadata();
  console.log(
    `Wrote ${dst}: ${m.width}x${m.height}, ${(s.size / 1024).toFixed(1)} KB`,
  );
}

// Hero: sits above the fold, so keep it a touch sharper.
await convert(`${SRC}/image1.jpeg`, "public/hero-session.webp", {
  width: 1400,
  quality: 84,
});

await convert(`${SRC}/image2.jpeg`, "public/room-chairs.webp", {
  width: 1400,
  quality: 82,
});

await convert(`${SRC}/image3.jpeg`, "public/room-shelves.webp", {
  width: 1400,
  quality: 82,
});
