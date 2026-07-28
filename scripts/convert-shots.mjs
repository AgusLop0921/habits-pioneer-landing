import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const RAW =
  '/private/tmp/claude-501/-Users-agustinlopez-Documents-projects-habit-pioneer/683cd404-120c-4f65-a7cc-9a07cf10026e/scratchpad/lsraw';
const OUT = new URL('../public/screenshots/', import.meta.url).pathname;
mkdirSync(OUT, { recursive: true });

const map = [
  ['home.png', 'home.webp'],
  ['home.png', 'habits.webp'],
  ['coach.png', 'coach.webp'],
  ['sleep.png', 'sleep.webp'],
  ['stats.png', 'stats.webp'],
];

const WIDTH = 828;

for (const [src, out] of map) {
  const info = await sharp(`${RAW}/${src}`)
    .resize({ width: WIDTH })
    .webp({ quality: 80, effort: 6 })
    .toFile(`${OUT}${out}`);
  console.log(out, `${info.width}x${info.height}`, `${(info.size / 1024).toFixed(1)}kb`);
}
