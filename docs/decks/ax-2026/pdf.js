// Print the HTML twin to a 13.333x7.5in PDF (one page per slide).
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args: ['--no-sandbox', '--disable-dev-shm-usage'] });
  const pg = await b.newPage();
  await pg.goto('file://' + path.join(__dirname, 'preview.html'));
  await pg.addStyleTag({ content: `
    body{background:#fff;margin:0}
    .slide{margin:0;page-break-after:always;break-after:page}
    .tag{display:none}
  ` });
  await pg.waitForTimeout(800);
  await pg.pdf({ path: path.join(__dirname, 'RIM_Lab_연구실소개.pdf'),
    width: '13.333in', height: '7.5in', printBackground: true, margin: { top: 0, bottom: 0, left: 0, right: 0 } });
  await b.close();
  console.log('pdf ok');
})();
