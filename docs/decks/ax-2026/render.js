// Shared scene-graph renderer: one geometry spec -> PPTX (pptxgenjs) + HTML twin (for visual QA).
// LibreOffice is broken in this container, so the HTML twin is how we eyeball the layout.
const fs = require('fs');
const path = require('path');

const W = 13.333, H = 7.5;               // LAYOUT_WIDE inches
const PX = 96;                            // inches -> px for the HTML twin
const PT2PX = 96 / 72;

const C = {
  bg:      '081020',   // page background (site --rim-bg2)
  bgAlt:   '050A16',
  card:    '111F36',
  cardHi:  '16243F',
  line:    '2A3A55',
  cyan:    '22D3EE',
  cyanDim: '0E7490',
  indigo:  '818CF8',
  text:    'FFFFFF',
  body:    'D7E2F0',
  muted:   '9DB0C8',
  faint:   '6E819B',
};

const F = { kr: 'Malgun Gothic', en: 'Arial' };   // Malgun Gothic ships with Windows PowerPoint
const HTML_FONT = "'Noto Sans KR','Malgun Gothic',sans-serif";

class Slide {
  constructor(name) { this.name = name; this.items = []; this.notes = ''; }
  rect(o) { this.items.push({ t: 'rect', ...o }); return this; }
  text(s, o) { this.items.push({ t: 'text', s, ...o }); return this; }
  img(f, o) { this.items.push({ t: 'img', f, ...o }); return this; }
  note(s) { this.notes = s; return this; }
}

// ---------- PPTX ----------
function toPptx(slides, outFile) {
  const pptxgen = require('pptxgenjs');
  const p = new pptxgen();
  p.layout = 'LAYOUT_WIDE';
  p.author = 'RIM Lab, Sogang University';
  p.title = 'RIM Lab 연구실 소개';

  for (const sl of slides) {
    const s = p.addSlide();
    s.background = { color: sl.bg || C.bg };
    for (const it of sl.items) {
      if (it.t === 'rect') {
        s.addShape(it.radius ? 'roundRect' : 'rect', {
          x: it.x, y: it.y, w: it.w, h: it.h,
          fill: it.fill === 'none' ? { type: 'none' } : { color: it.fill || C.card },
          line: it.stroke ? { color: it.stroke, width: it.strokeW || 1 } : { type: 'none' },
          ...(it.radius ? { rectRadius: it.radius } : {}),
          ...(it.shadow ? { shadow: { type: 'outer', color: '000000', blur: 12, offset: 3, angle: 90, opacity: 0.35 } } : {}),
        });
      } else if (it.t === 'img') {
        const o = {
          path: it.f, x: it.x, y: it.y, w: it.w, h: it.h,
          ...(it.cover ? { sizing: { type: 'cover', w: it.w, h: it.h } } : {}),
          ...(it.contain ? { sizing: { type: 'contain', w: it.w, h: it.h } } : {}),
          ...(it.radius ? { rounding: true } : {}),
          ...(it.transparency ? { transparency: it.transparency } : {}),
        };
        s.addImage(o);
      } else if (it.t === 'text') {
        const runs = Array.isArray(it.s) ? it.s : [{ text: it.s }];
        s.addText(runs.map(r => ({
          text: r.text,
          options: {
            fontSize: r.size || it.size || 14,
            bold: r.bold ?? it.bold ?? false,
            color: r.color || it.color || C.body,
            fontFace: r.font || it.font || F.kr,
            breakLine: r.breakLine ?? false,
            bullet: r.bullet ?? it.bullet ?? false,
            ...(r.paraSpaceAfter || it.paraSpaceAfter ? { paraSpaceAfter: r.paraSpaceAfter || it.paraSpaceAfter } : {}),
          },
        })), {
          x: it.x, y: it.y, w: it.w, h: it.h,
          align: it.align || 'left', valign: it.valign || 'top',
          fontSize: it.size || 14, color: it.color || C.body, fontFace: it.font || F.kr,
          bold: it.bold || false, isTextBox: true, margin: it.margin ?? 0,
          lineSpacingMultiple: it.lsm || undefined,
          shrinkText: false,
        });
      }
    }
    if (sl.notes) s.addNotes(sl.notes);
  }
  return p.writeFile({ fileName: outFile });
}

// ---------- HTML twin ----------
function esc(t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

function toHtml(slides, outFile) {
  const pages = slides.map((sl, i) => {
    const parts = sl.items.map(it => {
      const box = `left:${it.x * PX}px;top:${it.y * PX}px;width:${it.w * PX}px;height:${it.h * PX}px;`;
      if (it.t === 'rect') {
        return `<div style="position:absolute;${box}background:${it.fill === 'none' ? 'transparent' : '#' + (it.fill || C.card)};` +
          `${it.radius ? `border-radius:${it.radius * 100}%;` : ''}${it.stroke ? `border:${it.strokeW || 1}px solid #${it.stroke};box-sizing:border-box;` : ''}` +
          `${it.shadow ? 'box-shadow:0 4px 14px rgba(0,0,0,.45);' : ''}"></div>`;
      }
      if (it.t === 'img') {
        return `<div style="position:absolute;${box}overflow:hidden;${it.radius ? 'border-radius:10px;' : ''}">` +
          `<img src="${it.f}" style="width:100%;height:100%;object-fit:${it.contain ? 'contain' : 'cover'};${it.transparency ? `opacity:${1 - it.transparency / 100};` : ''}"></div>`;
      }
      const runs = Array.isArray(it.s) ? it.s : [{ text: it.s }];
      const inner = runs.map(r => {
        const st = `font-size:${(r.size || it.size || 14) * PT2PX}px;font-weight:${(r.bold ?? it.bold) ? 700 : 400};` +
          `color:#${r.color || it.color || C.body};`;
        const t = esc(r.text).replace(/\n/g, '<br>');
        return `<span style="${st}">${r.bullet ?? it.bullet ? '• ' : ''}${t}</span>${r.breakLine ? '<br>' : ''}`;
      }).join('');
      const jc = { top: 'flex-start', middle: 'center', bottom: 'flex-end' }[it.valign || 'top'];
      const label = (runs.map(r => r.text).join(' ').replace(/\s+/g, ' ').slice(0, 40)).replace(/"/g, '&quot;');
      return `<div class="tb" data-label="${label}" style="position:absolute;${box}display:flex;flex-direction:column;justify-content:${jc};` +
        `text-align:${it.align || 'left'};font-family:${HTML_FONT};line-height:${it.lsm || 1.25};overflow:visible;">` +
        `<div class="tbi">${inner}</div></div>`;
    }).join('\n');
    return `<div class="slide"><div class="page" style="background:#${sl.bg || C.bg}">${parts}
      <div class="tag">${i + 1} · ${esc(sl.name)}</div></div></div>`;
  }).join('\n');

  fs.writeFileSync(outFile, `<!doctype html><meta charset="utf-8">
<style>
  body{margin:0;background:#3a3a3a;font-family:${HTML_FONT}}
  .slide{margin:14px auto;width:${W * PX}px}
  .page{position:relative;width:${W * PX}px;height:${H * PX}px;overflow:hidden}
  .tag{position:absolute;right:6px;bottom:4px;color:#ffffff55;font-size:11px}
</style>${pages}`);
}

module.exports = { Slide, toPptx, toHtml, C, F, W, H };
