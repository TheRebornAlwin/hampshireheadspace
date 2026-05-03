import sharp from "sharp";

// Square crop and convert to WebP for the about/home portrait spots.
// Source: 1086 x 1448 portrait. We take a full-width square shifted down
// from the very top so we lose some of the empty headroom above her hair
// (Ruth feedback: "too much empty space up top, shift the picture up").
const input = "public/ruth-headshot-original.png";
const meta = await sharp(input).metadata();
const size = meta.width;
const yOffset = Math.min(meta.height - size, 200);

await sharp(input)
  .extract({ left: 0, top: yOffset, width: size, height: size })
  .resize(800, 800)
  .webp({ quality: 90, effort: 6 })
  .toFile("public/ruth-headshot.webp");

const stats = await import("node:fs/promises").then((m) =>
  m.stat("public/ruth-headshot.webp"),
);
console.log("Wrote public/ruth-headshot.webp", (stats.size / 1024).toFixed(1) + " KB");
