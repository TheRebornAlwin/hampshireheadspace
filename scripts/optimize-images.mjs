import sharp from "sharp";
import { stat } from "node:fs/promises";

async function size(path) {
  const s = await stat(path);
  return (s.size / 1024).toFixed(1) + " KB";
}

async function convert(inPath, outPath, opts) {
  await sharp(inPath).webp(opts).toFile(outPath);
  console.log(`${inPath} (${await size(inPath)}) -> ${outPath} (${await size(outPath)})`);
}

await convert("public/hero-tangled-yarn.png", "public/hero-tangled-yarn.webp", {
  quality: 88,
  effort: 6,
  alphaQuality: 100,
});

await convert("public/logo.png", "public/logo.webp", {
  quality: 92,
  effort: 6,
  alphaQuality: 100,
});

console.log("Done.");
