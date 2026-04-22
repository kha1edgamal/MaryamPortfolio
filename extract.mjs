import fs from 'fs';
import path from 'path';

const content = fs.readFileSync('src/constants/index.js', 'utf-8');

const seaMatch = content.match(/export const IMG_SEA = "(data:image\/[^;]+;base64,([^"]+))";/);
if (seaMatch) {
  const b64 = seaMatch[2];
  fs.writeFileSync('src/assets/sea.png', Buffer.from(b64, 'base64'));
}

const golfMatch = content.match(/export const IMG_GOLF = "(data:image\/[^;]+;base64,([^"]+))";/);
if (golfMatch) {
  const b64 = golfMatch[2];
  fs.writeFileSync('src/assets/golf.png', Buffer.from(b64, 'base64'));
}

