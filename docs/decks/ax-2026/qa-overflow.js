// Renders the HTML twin in Chromium: flags text that overflows its box and boxes that
// escape the 13.333x7.5in page, then screenshots every slide.
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args: ['--no-sandbox', '--disable-dev-shm-usage'] });
  const pg = await b.newPage({ viewport: { width: 1320, height: 900 }, deviceScaleFactor: 1.5 });
  await pg.goto('file://' + path.join(__dirname, 'preview.html'));
  await pg.waitForTimeout(1200);
  const report = await pg.evaluate(() => {
    const out = [];
    document.querySelectorAll('.page').forEach((page, pi) => {
      const pr = page.getBoundingClientRect();
      page.querySelectorAll('.tb').forEach(tb => {
        const inner = tb.querySelector('.tbi');
        const bh = tb.clientHeight, ih = inner.scrollHeight, iw = inner.scrollWidth, bw = tb.clientWidth;
        const r = tb.getBoundingClientRect();
        const issues = [];
        if (ih > bh + 2) issues.push(`height ${ih}>${bh}`);
        if (iw > bw + 2) issues.push(`width ${iw}>${bw}`);
        const top = r.top - pr.top, left = r.left - pr.left;
        if (top + ih > pr.height - 4) issues.push(`below page (${Math.round(top + ih)} / ${Math.round(pr.height)})`);
        if (left < -2 || left + bw > pr.width + 2) issues.push('outside page horizontally');
        if (issues.length) out.push({ slide: pi + 1, label: tb.dataset.label, issues });
      });
    });
    return out;
  });
  console.log(JSON.stringify(report, null, 1));
  const n = await pg.$$eval('.page', e => e.length);
  for (let i = 0; i < n; i++) {
    const el = (await pg.$$('.page'))[i];
    await el.screenshot({ path: path.join(__dirname, `shot-${String(i + 1).padStart(2, '0')}.png`) });
  }
  await b.close();
})();
