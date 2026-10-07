// node render.mjs [--file index.html] [--fps 60] [--dur 15] [--sub 4] [--out out/silent.mp4]
// Walks time, calls window.seek(t), pipes PNGs to ffmpeg. SUB subframes are blended for motion blur.
// Needs: npm i -D playwright && npx playwright install chromium
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i > 0 ? process.argv[i + 1] : d; };
const FILE = resolve(arg('file', 'index.html')), OUT = arg('out', 'out/silent.mp4');
const FPS = Number(arg('fps', 60)), SUB = Number(arg('sub', 4));
mkdirSync(dirname(OUT), { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ deviceScaleFactor: 1 });
await page.goto('file://' + FILE);
const { w, h, dur } = await page.evaluate(async () => {
  // canvas never triggers a font load by itself: load window.FONTS explicitly, then fail loudly
  for (const f of window.FONTS ?? []) if (!(await document.fonts.load(f)).length) throw new Error('font failed: ' + f);
  await document.fonts.ready;
  const c = document.querySelector('canvas');
  return { w: c.width, h: c.height, dur: window.DUR };
});
const DUR = Number(arg('dur', dur ?? 15));
await page.setViewportSize({ width: w, height: h });

// tmix averages SUB consecutive subframes; select keeps the last of each group
const vf = SUB > 1 ? `tmix=frames=${SUB},select='eq(mod(n\\,${SUB})\\,${SUB - 1})',setpts=N/${FPS}/TB` : 'null';
const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(FPS * SUB), '-i', '-',
  '-vf', vf, '-r', String(FPS), '-c:v', 'libx264', '-crf', '16', '-pix_fmt', 'yuv420p', OUT],
  { stdio: ['pipe', 'inherit', 'inherit'] });

const total = Math.round(DUR * FPS * SUB);
for (let i = 0; i < total; i++) {
  await page.evaluate((t) => window.seek(t), i / (FPS * SUB));
  const png = await page.locator('canvas').screenshot({ type: 'png' });
  if (!ff.stdin.write(png)) await new Promise((r) => ff.stdin.once('drain', r));
  if (i % (FPS * SUB) === 0) console.log(`rendered ${i / (FPS * SUB)}s / ${DUR}s`);
}
ff.stdin.end();
await new Promise((r) => ff.on('close', r));
await browser.close();
console.log('wrote', OUT);
