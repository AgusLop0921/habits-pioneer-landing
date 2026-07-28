import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const DL = '/Users/agustinlopez/Downloads';
const OUT = new URL('../public/screenshots/', import.meta.url).pathname;
mkdirSync(OUT, { recursive: true });

// New real-data screenshots (1170x2532). coach.webp is kept (no coach screenshot provided).
const map = [
  ['IMG_8275.PNG', 'home.webp'], // Hoy — progress ring + reflexión + habits (hero + gallery)
  ['IMG_8277.PNG', 'habits.webp'], // Semanales — reduction + weekly habits (reduction section)
  ['IMG_8279.PNG', 'sleep.webp'], // Sueño
  ['IMG_8281.PNG', 'stats.webp'], // Stats — streaks
];

const WIDTH = 828;

for (const [src, out] of map) {
  const info = await sharp(`${DL}/${src}`)
    .resize({ width: WIDTH })
    .webp({ quality: 80, effort: 6 })
    .toFile(`${OUT}${out}`);
  console.log(out, `${info.width}x${info.height}`, `${(info.size / 1024).toFixed(1)}kb`);
}
