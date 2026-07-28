import sharp from 'sharp';

const HANDOFF_ICON = '/Users/agustinlopez/Downloads/desing_handoff/icon.png';
const PUB = new URL('../public/', import.meta.url).pathname;
const OG = new URL('../public/og/', import.meta.url).pathname;

// --- app icons from the real app icon ---
await sharp(HANDOFF_ICON).resize(180, 180).png().toFile(PUB + 'apple-touch-icon.png');
await sharp(HANDOFF_ICON).resize(192, 192).png().toFile(PUB + 'icon-192.png');
await sharp(HANDOFF_ICON).resize(512, 512).png().toFile(PUB + 'icon-512.png');

// --- Open Graph cover (1200x630) ---
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#F7F4EF"/>
  <circle cx="600" cy="250" r="360" fill="#EFEAFF" opacity="0.55"/>
  <g transform="translate(600,150) scale(1.5)">
    <ellipse cx="0" cy="-33" rx="14" ry="9" fill="#DE7358"/>
    <ellipse cx="0" cy="-18" rx="20" ry="11" fill="#E5A03C"/>
    <ellipse cx="0" cy="0" rx="26" ry="13" fill="#CDC3B4"/>
  </g>
  <text x="600" y="410" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="76" letter-spacing="-2" fill="#171310">Habits Pioneer</text>
  <text x="600" y="472" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="400" font-size="34" fill="#5C534B">Mejores hábitos, cada día — con un coach de IA.</text>
  <g transform="translate(600,545)">
    <rect x="-215" y="-24" width="430" height="48" rx="24" fill="#171310"/>
    <text x="0" y="8" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="500" font-size="24" fill="#F7F4EF">iOS · Android · Empezá gratis</text>
  </g>
</svg>`;

await sharp(Buffer.from(og)).png().toFile(OG + 'og-cover.png');
console.log('icons + og-cover.png generated');
