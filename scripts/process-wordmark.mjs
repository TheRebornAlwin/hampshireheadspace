import sharp from "sharp";
import { stat } from "node:fs/promises";

// Ruth's full wordmark lockup, sent as FullLogo_NoBuffer.jpg with her
// "website updates 1" doc: "Replace the headline with the above."
//
// It arrives as a JPEG, so the background is solid white rather than
// transparent, which would show as a white slab on the cream hero. The
// artwork is a single flat navy on white, so the background can be keyed
// out exactly: work out how far each pixel travelled from white towards
// navy, use that as the alpha, and paint every pixel the same navy. That
// keeps the anti-aliased letter edges smooth instead of jagged.

const SRC = "C:/Users/ac311/Downloads/FullLogo_NoBuffer.jpg";
const DST = "public/logo-wordmark.webp";

// Sampled from the source: the flat navy the type is set in.
const NAVY = [42, 51, 92];
const NAVY_LUM = (NAVY[0] + NAVY[1] + NAVY[2]) / 3;

const { data, info } = await sharp(SRC)
  .trim({ threshold: 10 })
  .raw()
  .toBuffer({ resolveWithObject: true });

const px = info.width * info.height;
const out = Buffer.alloc(px * 4);

for (let i = 0; i < px; i++) {
  const s = i * info.channels;
  const lum = (data[s] + data[s + 1] + data[s + 2]) / 3;
  const a = Math.max(0, Math.min(255, Math.round(((255 - lum) / (255 - NAVY_LUM)) * 255)));
  const d = i * 4;
  out[d] = NAVY[0];
  out[d + 1] = NAVY[1];
  out[d + 2] = NAVY[2];
  out[d + 3] = a;
}

await sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } })
  .resize({ width: 1280, withoutEnlargement: true })
  .webp({ quality: 92, effort: 6, alphaQuality: 100 })
  .toFile(DST);

const s = await stat(DST);
const m = await sharp(DST).metadata();
console.log(`Wrote ${DST}: ${m.width}x${m.height}, alpha=${m.hasAlpha}, ${(s.size / 1024).toFixed(1)} KB`);
