import sharp from "sharp";
import { stat } from "node:fs/promises";

const SRC = "./cranberry-raw";
const OUT = "public/cranberry.webp";

await sharp(SRC)
  .resize({ width: 1200, withoutEnlargement: true })
  .webp({ quality: 82, effort: 6 })
  .toFile(OUT);

const s = await stat(OUT);
console.log(`✓ ${OUT}  ${(s.size / 1024).toFixed(1)} KB`);
