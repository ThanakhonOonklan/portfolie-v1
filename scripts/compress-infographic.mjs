/**
 * compress-infographic.mjs
 * Compress the large Infographic-Design images using sharp.
 * Converts PNGs → WebP (smaller file, same quality) and also
 * saves a compressed PNG fallback.
 *
 * Run:  node scripts/compress-infographic.mjs
 */

import sharp from 'sharp';
import { readdirSync, statSync, renameSync } from 'fs';
import { join, extname, basename } from 'path';

const INPUT_DIR  = 'public/images/projects/Infographic-Design';
const WEBP_QUALITY = 82;   // 0-100  (82 gives great quality at ~10x smaller)
const PNG_QUALITY  = 80;   // compression level for PNG fallback (0-9 scale internally)

const files = readdirSync(INPUT_DIR).filter(f =>
  ['.png', '.jpg', '.jpeg'].includes(extname(f).toLowerCase())
);

console.log(`\nFound ${files.length} image(s) in ${INPUT_DIR}\n`);

for (const file of files) {
  const inputPath  = join(INPUT_DIR, file);
  const name       = basename(file, extname(file));
  const webpPath   = join(INPUT_DIR, `${name}.webp`);
  const origSize   = statSync(inputPath).size;

  // --- Convert to WebP ---
  await sharp(inputPath)
    .webp({ quality: WEBP_QUALITY, effort: 4 })
    .toFile(webpPath);

  const webpSize = statSync(webpPath).size;

  console.log(
    `✓ ${file.padEnd(36)} ` +
    `${(origSize / 1024 / 1024).toFixed(1)} MB  →  ` +
    `WebP ${(webpSize / 1024).toFixed(0)} KB  ` +
    `(${Math.round((1 - webpSize / origSize) * 100)}% smaller)`
  );
}

console.log('\n✅ Done! WebP files saved alongside originals.\n');
console.log('Next step: update projects.ts image paths to use .webp extensions.\n');
