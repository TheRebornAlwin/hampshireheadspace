import sharp from "sharp";

// Square crop and convert to WebP for the about/home portrait spots.
await sharp("public/ruth-headshot-original.png")
  .resize(800, 800, { fit: "cover", position: "top" })
  .webp({ quality: 90, effort: 6 })
  .toFile("public/ruth-headshot.webp");

const stats = await import("node:fs/promises").then((m) =>
  m.stat("public/ruth-headshot.webp"),
);
console.log("Wrote public/ruth-headshot.webp", (stats.size / 1024).toFixed(1) + " KB");
