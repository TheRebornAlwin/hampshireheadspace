import sharp from "sharp";

// Square crop and convert to WebP for the about/home portrait spots.
// Source: 1086 x 1448 portrait. Tighter square + bigger Y offset together
// pull Ruth's face into the upper portion of the circle frame; the prior
// "full-width square + small Y offset" approach left her face too low.
const input = "public/ruth-headshot-original.png";
const meta = await sharp(input).metadata();
const size = 1050;
const xOffset = Math.round((meta.width - size) / 2);
const yOffset = Math.min(meta.height - size, 295);

await sharp(input)
  .extract({ left: xOffset, top: yOffset, width: size, height: size })
  .resize(800, 800)
  .webp({ quality: 90, effort: 6 })
  .toFile("public/ruth-headshot.webp");

const stats = await import("node:fs/promises").then((m) =>
  m.stat("public/ruth-headshot.webp"),
);
console.log("Wrote public/ruth-headshot.webp", (stats.size / 1024).toFixed(1) + " KB");
