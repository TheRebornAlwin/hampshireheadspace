import sharp from "sharp";
import { stat } from "node:fs/promises";

await sharp("./logo-icon-raw.png")
  .resize({ width: 800, withoutEnlargement: true })
  .webp({ quality: 92, effort: 6, alphaQuality: 100 })
  .toFile("public/logo-icon.webp");

const s = await stat("public/logo-icon.webp");
console.log(`Wrote public/logo-icon.webp: ${(s.size / 1024).toFixed(1)} KB`);
