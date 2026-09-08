import { chromium } from 'playwright';
import { AxeBuilder } from '@axe-core/playwright';

const url = 'http://127.0.0.1:3777/';
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
for (const [name, w, h] of [['desktop',1440,900],['mobile',390,844]]) {
  const ctx = await browser.newContext({ viewport: { width:w, height:h } });
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: 'load' });
  await page.waitForTimeout(1500);
  const res = await new AxeBuilder({ page }).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();
  console.log(`\n=== ${name} (${w}px) — ${res.violations.length} violations ===`);
  for (const v of res.violations) {
    console.log(`[${v.impact}] ${v.id}: ${v.help}`);
    for (const n of v.nodes.slice(0,3)) console.log('   ', n.target.join(' '), '|', (n.failureSummary||'').split('\n')[1]||'');
  }
  await ctx.close();
}
await browser.close();
