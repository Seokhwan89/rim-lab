// Slide layouts for the RIM Lab introduction deck (AX 대학원 입학설명회).
// Geometry is shared by the PPTX and the HTML twin via render.js.
const { Slide, C, F, W, H } = require('./render');

const M = 0.72;                 // page margin
const TITLE_Y = 0.46;
const BODY_TOP = 1.72;

// ---- shared chrome -------------------------------------------------------
function chrome(s, n, total) {
  s.text('RIM Lab · 서강대학교 기계공학과', {
    x: M, y: 6.94, w: 6, h: 0.3, size: 10, color: C.faint, valign: 'middle',
  });
  s.text(`${n} / ${total}`, {
    x: W - M - 1.2, y: 6.94, w: 1.2, h: 0.3, size: 10, color: C.faint, align: 'right', valign: 'middle',
  });
}

function heading(s, title, subtitle) {
  s.rect({ x: M, y: TITLE_Y + 0.14, w: 0.09, h: 0.46, fill: C.cyan, radius: 0.5 });
  s.text(title, { x: M + 0.26, y: TITLE_Y, w: 11.4, h: 0.72, size: 29, bold: true, color: C.text, valign: 'middle' });
  if (subtitle) s.text(subtitle, { x: M + 0.26, y: TITLE_Y + 0.76, w: 11.4, h: 0.38, size: 13, color: C.cyan, valign: 'middle' });
}

function card(s, x, y, w, h, fill) {
  s.rect({ x, y, w, h, fill: fill || C.card, radius: 0.04, shadow: true });
}

function chip(s, x, y, label, d = 0.46) {
  s.rect({ x, y, w: d, h: d, fill: C.cyan, radius: 0.5 });
  s.text(label, { x, y, w: d, h: d, size: 15, bold: true, color: '06202E', align: 'center', valign: 'middle', font: F.en });
}

// bullets rendered as rows so each line keeps its own leading dot + optional sub-line
function bulletRows(s, items, x, y, w, opts = {}) {
  const size = opts.size || 14;
  const rowH = opts.rowH || 0.86;
  const subSize = opts.subSize || size - 2.5;
  const subDy = opts.subDy || 0.36;
  const subH = opts.subH || 0.42;
  items.forEach((b, i) => {
    const yy = y + i * rowH;
    s.rect({ x, y: yy + 0.13, w: 0.11, h: 0.11, fill: C.cyan, radius: 0.5 });
    s.text(b.text, { x: x + 0.28, y: yy, w: w - 0.28, h: 0.36, size, bold: true, color: C.text, valign: 'top', lsm: 1.15 });
    if (b.sub) s.text(b.sub, { x: x + 0.28, y: yy + subDy, w: w - 0.28, h: subH, size: subSize, color: C.muted, valign: 'top', lsm: 1.3 });
  });
}

// ---- slide builders ------------------------------------------------------
function titleSlide(d) {
  const s = new Slide('표지');
  s.bg = C.bgAlt;
  s.img('img/group.jpg', { x: 6.9, y: 0, w: 6.433, h: H, cover: true, transparency: 45 });
  s.rect({ x: 6.9, y: 0, w: 2.2, h: H, fill: C.bgAlt });
  s.img('img/logo.png', { x: M, y: 1.28, w: 0.92, h: 0.93, contain: true });
  s.text('RIM Lab', { x: M, y: 2.34, w: 7, h: 0.88, size: 44, bold: true, color: C.text, font: F.en, valign: 'middle' });
  s.text('Robotics & Intelligent Mechanisms Lab.', { x: M, y: 3.12, w: 7, h: 0.4, size: 15, color: C.muted, font: F.en, valign: 'middle' });
  s.rect({ x: M, y: 3.74, w: 1.9, h: 0.02, fill: C.cyanDim });
  s.text(d.deckTitle, { x: M, y: 4.0, w: 6.1, h: 1.0, size: 22, bold: true, color: C.cyan, valign: 'top', lsm: 1.25 });
  s.text(d.deckSubtitle, { x: M, y: 5.02, w: 6.1, h: 0.9, size: 13, color: C.body, valign: 'top', lsm: 1.35 });
  s.text('서강대학교 기계공학과 · 지도교수 정석환   |   rim.sogang.ac.kr', {
    x: M, y: 6.6, w: 8, h: 0.34, size: 11.5, color: C.faint, valign: 'middle',
  });
  return s;
}

// 3 narrative rows + group photo + a band of five figures
function overviewSlide(d, n, total) {
  const s = new Slide('연구실 한눈에');
  heading(s, d.title, d.subtitle);
  bulletRows(s, d.bullets, M, BODY_TOP + 0.22, 6.2,
    { size: 15, rowH: 1.08, subSize: 12.5, subDy: 0.4, subH: 0.56 });
  s.img('img/group.jpg', { x: 7.35, y: BODY_TOP, w: 5.25, h: 2.86, cover: true, radius: 1 });
  s.text('RIM Lab 구성원 (2026)', { x: 7.35, y: BODY_TOP + 2.92, w: 5.25, h: 0.28, size: 10.5, color: C.faint });

  const stats = [
    { n: '44', l: '논문', s: '저널 26 · 학회 16' },
    { n: '19', l: '특허 패밀리', s: '등록 9 · 출원 10' },
    { n: '11', l: '연구과제', s: '국가 · 기업' },
    { n: '16', l: '재학생', s: '박사·통합 8 · 석사 5' },
    { n: '10', l: '졸업생', s: '박사진학 3 · 대기업 5' },
  ];
  const gap = 0.26, cw = (W - 2 * M - 4 * gap) / 5, y0 = 5.32;
  stats.forEach((st, i) => {
    const x = M + i * (cw + gap);
    card(s, x, y0, cw, 1.4);
    s.text(st.n, { x: x + 0.26, y: y0 + 0.16, w: cw - 0.5, h: 0.62, size: 32, bold: true, color: C.cyan, font: F.en, valign: 'middle' });
    s.text(st.l, { x: x + 0.26, y: y0 + 0.8, w: cw - 0.5, h: 0.3, size: 12.5, bold: true, color: C.text, valign: 'middle' });
    s.text(st.s, { x: x + 0.26, y: y0 + 1.06, w: cw - 0.44, h: 0.28, size: 10, color: C.muted, valign: 'middle' });
  });
  chrome(s, n, total);
  return s;
}

// four numbered cards + a full-width closing band
function areasSlide(d, n, total) {
  const s = new Slide('주요 연구분야');
  heading(s, d.title, d.subtitle);
  const cw = 5.86, ch = 1.78, gx = 0.37, gy = 0.26;
  d.bullets.slice(0, 4).forEach((b, i) => {
    const x = M + (i % 2) * (cw + gx);
    const y = BODY_TOP + 0.04 + Math.floor(i / 2) * (ch + gy);
    card(s, x, y, cw, ch);
    chip(s, x + 0.32, y + 0.3, String(i + 1));
    s.text(b.text, { x: x + 0.94, y: y + 0.3, w: cw - 1.26, h: 0.5, size: 15, bold: true, color: C.text, valign: 'middle', lsm: 1.15 });
    s.text(b.sub, { x: x + 0.32, y: y + 0.9, w: cw - 0.64, h: 0.74, size: 12, color: C.muted, valign: 'top', lsm: 1.4 });
  });
  const band = d.bullets[4];
  if (band) {
    const by = BODY_TOP + 0.04 + 2 * ch + gy + 0.26;
    card(s, M, by, W - 2 * M, 0.92, C.cardHi);
    s.text(band.text, { x: M + 0.34, y: by + 0.13, w: W - 2 * M - 0.68, h: 0.34, size: 14, bold: true, color: C.cyan, valign: 'middle' });
    s.text(band.sub, { x: M + 0.34, y: by + 0.5, w: W - 2 * M - 0.68, h: 0.34, size: 12.5, color: C.body, valign: 'middle' });
  }
  chrome(s, n, total);
  return s;
}

// media on one side, five rows of bullets on the other
function imageBullets(d, n, total, img, side, caption, fit) {
  const s = new Slide(d.title);
  heading(s, d.title, d.subtitle);
  const iw = 4.92, ih = 3.24, iy = BODY_TOP + 0.5;
  const ix = side === 'left' ? M : W - M - iw;
  const tx = side === 'left' ? M + iw + 0.56 : M;
  const tw = W - 2 * M - iw - 0.56;
  if (fit === 'contain') {
    s.rect({ x: ix, y: iy, w: iw, h: ih, fill: 'FFFFFF', radius: 0.03 });
    s.img(img, { x: ix + 0.12, y: iy + 0.12, w: iw - 0.24, h: ih - 0.24, contain: true });
  } else {
    s.img(img, { x: ix, y: iy, w: iw, h: ih, cover: true, radius: 1 });
  }
  if (caption) s.text(caption, { x: ix, y: iy + ih + 0.16, w: iw, h: 0.46, size: 10.5, color: C.faint, valign: 'top', lsm: 1.25 });
  bulletRows(s, d.bullets.slice(0, 5), tx, BODY_TOP + 0.1, tw,
    { size: 13.5, rowH: 0.98, subSize: 11.5, subDy: 0.35, subH: 0.56 });
  chrome(s, n, total);
  return s;
}

// four image cards in a row
function gridSlide(d, n, total, imgs) {
  const s = new Slide(d.title);
  heading(s, d.title, d.subtitle);
  const gx = 0.3, cw = (W - 2 * M - 3 * gx) / 4, y = BODY_TOP + 0.24, ih = 1.72, ch = 3.72;
  d.bullets.slice(0, 4).forEach((b, i) => {
    const x = M + i * (cw + gx);
    card(s, x, y, cw, ch);
    s.rect({ x, y, w: cw, h: ih, fill: 'FFFFFF', radius: 0.04 });
    s.img(imgs[i], { x: x + 0.1, y: y + 0.1, w: cw - 0.2, h: ih - 0.2, contain: true });
    s.text(b.text, { x: x + 0.24, y: y + ih + 0.24, w: cw - 0.48, h: 0.64, size: 13.5, bold: true, color: C.text, valign: 'top', lsm: 1.18 });
    s.text(b.sub, { x: x + 0.24, y: y + ih + 0.94, w: cw - 0.48, h: 1.6, size: 11.5, color: C.muted, valign: 'top', lsm: 1.38 });
  });
  chrome(s, n, total);
  return s;
}

function achievementsSlide(d, n, total) {
  const s = new Slide('연구 실적');
  heading(s, d.title, d.subtitle);
  const big = [
    { n: '44', l: '논문', s: '저널 26 · 학회 16 · 국내 2' },
    { n: '13', l: 'IEEE RA-L 게재', s: 'T-Mech 3 · T-RO · T-ASE · RAM' },
    { n: '19', l: '특허 패밀리', s: '등록 9 · 출원 10' },
  ];
  const gap = 0.3, cw = (W - 2 * M - 2 * gap) / 3, y0 = BODY_TOP + 0.14;
  big.forEach((b, i) => {
    const x = M + i * (cw + gap);
    card(s, x, y0, cw, 1.62);
    s.text(b.n, { x: x + 0.3, y: y0 + 0.14, w: cw - 0.6, h: 0.76, size: 38, bold: true, color: C.cyan, font: F.en, valign: 'middle' });
    s.text(b.l, { x: x + 0.3, y: y0 + 0.9, w: cw - 0.6, h: 0.3, size: 13, bold: true, color: C.text, valign: 'middle' });
    s.text(b.s, { x: x + 0.3, y: y0 + 1.18, w: cw - 0.56, h: 0.28, size: 11, color: C.muted, valign: 'middle' });
  });

  const y1 = y0 + 1.94, halfW = (W - 2 * M - 0.36) / 2;
  card(s, M, y1, halfW, 2.9);
  s.text('수상과 특허', { x: M + 0.34, y: y1 + 0.24, w: 4, h: 0.34, size: 14, bold: true, color: C.cyan, valign: 'middle' });
  bulletRows(s, d.bullets.slice(0, 3), M + 0.34, y1 + 0.74, halfW - 0.68,
    { size: 12.5, rowH: 0.7, subSize: 11, subDy: 0.32, subH: 0.34 });

  const rx = M + halfW + 0.36;
  card(s, rx, y1, halfW, 2.9);
  s.text('학계 기여 — 지도교수', { x: rx + 0.34, y: y1 + 0.24, w: 4.4, h: 0.34, size: 14, bold: true, color: C.cyan, valign: 'middle' });
  const ed = [
    { text: 'IEEE/ASME Trans. on Mechatronics', sub: 'Technical Editor (2024 – 현재)' },
    { text: 'IEEE Robotics and Automation Letters', sub: 'Associate Editor (2024 – 현재)' },
    { text: 'Fulbright Scholar Program 2026–2027', sub: '교수·전문가 부문 선정' },
  ];
  bulletRows(s, ed, rx + 0.34, y1 + 0.74, halfW - 0.68,
    { size: 12.5, rowH: 0.7, subSize: 11, subDy: 0.32, subH: 0.34 });
  chrome(s, n, total);
  return s;
}

function teamSlide(d, n, total) {
  const s = new Slide('구성과 인프라');
  heading(s, d.title, d.subtitle);
  const comp = [
    { n: '8', l: '박사 · 통합과정' },
    { n: '5', l: '석사과정' },
    { n: '3', l: '학부연구생' },
  ];
  const cw = 1.86, gap = 0.22;
  comp.forEach((c, i) => {
    const x = M + i * (cw + gap);
    card(s, x, BODY_TOP + 0.06, cw, 1.16);
    s.text(c.n, { x, y: BODY_TOP + 0.2, w: cw, h: 0.52, size: 28, bold: true, color: C.cyan, align: 'center', font: F.en, valign: 'middle' });
    s.text(c.l, { x, y: BODY_TOP + 0.74, w: cw, h: 0.3, size: 11.5, color: C.body, align: 'center', valign: 'middle' });
  });
  bulletRows(s, d.bullets.slice(0, 3), M, BODY_TOP + 1.62, 5.9,
    { size: 13.5, rowH: 0.98, subSize: 11.5, subDy: 0.35, subH: 0.5 });

  const imgs = [
    ['img/tesollo.jpg', 'Tesollo DG-5F-M 5지 로봇 핸드'],
    ['img/optitrack.jpg', 'OptiTrack 모션캡처'],
    ['img/mecheye.jpg', 'Mech-Mind Mech-Eye Nano 3D 비전'],
    ['img/printer.jpg', '금속 · MJP · SLA/FDM 3D 프린팅'],
  ];
  const gx0 = 7.0, gy0 = BODY_TOP + 0.06, iw = 2.86, ih = 1.72, g = 0.3;
  imgs.forEach((im, i) => {
    const x = gx0 + (i % 2) * (iw + g);
    const y = gy0 + Math.floor(i / 2) * (ih + 0.62);
    s.img(im[0], { x, y, w: iw, h: ih, cover: true, radius: 1 });
    s.text(im[1], { x, y: y + ih + 0.08, w: iw, h: 0.42, size: 10.5, color: C.muted, valign: 'top', lsm: 1.2 });
  });
  chrome(s, n, total);
  return s;
}

function careerSlide(d, n, total) {
  const s = new Slide('진로와 지원 안내');
  heading(s, d.title, d.subtitle);
  const leftW = 7.2, cardH = 3.86, y0 = BODY_TOP + 0.1;
  card(s, M, y0, leftW, cardH);
  s.text('졸업생 진로와 연구 환경', { x: M + 0.34, y: y0 + 0.26, w: 5, h: 0.34, size: 14, bold: true, color: C.cyan, valign: 'middle' });
  bulletRows(s, d.bullets.slice(0, 4), M + 0.34, y0 + 0.8, leftW - 0.68,
    { size: 13.5, rowH: 0.76, subSize: 11.5, subDy: 0.32, subH: 0.36 });

  const rx = M + leftW + 0.36, rw = W - 2 * M - leftW - 0.36;
  card(s, rx, y0, rw, cardH, C.cardHi);
  s.text('지원 안내', { x: rx + 0.34, y: y0 + 0.26, w: 3.6, h: 0.34, size: 14, bold: true, color: C.cyan, valign: 'middle' });
  s.text([
    { text: 'AI융합 대학원 과정 — 2027-1·2\n', size: 13.5, bold: true, color: C.text, breakLine: true },
    { text: '소속은 AI 계열, 연구는 RIM Lab에서\n', size: 11.5, color: C.muted, breakLine: true },
    { text: '기계공학과 2027-2는 2026년 12월 공고', size: 11.5, color: C.muted },
  ], { x: rx + 0.34, y: y0 + 0.78, w: rw - 0.68, h: 1.2, valign: 'top', lsm: 1.4 });
  s.img('img/qr.png', { x: rx + 0.34, y: y0 + 2.18, w: 1.24, h: 1.24, contain: true });
  s.text([
    { text: 'rim.sogang.ac.kr\n', size: 12, bold: true, color: C.cyan, breakLine: true },
    { text: 'seokhwan@sogang.ac.kr\n', size: 11.5, color: C.body, breakLine: true },
    { text: '연구실 RA313', size: 10.5, color: C.muted },
  ], { x: rx + 1.74, y: y0 + 2.2, w: rw - 2.08, h: 1.3, valign: 'top', lsm: 1.45, font: F.en });

  s.text('궁금한 점은 언제든 메일 주세요 — 주간 랩미팅은 사전 약속 없이도 참관하실 수 있습니다.', {
    x: M, y: y0 + cardH + 0.3, w: 11.9, h: 0.4, size: 12.5, color: C.body, valign: 'middle',
  });
  chrome(s, n, total);
  return s;
}

// ---- assemble ------------------------------------------------------------
function build(deck) {
  const g = (i) => deck.slides[i];
  const T = 10;
  const out = [
    titleSlide(deck),
    overviewSlide(g(0), 2, T),
    areasSlide(g(1), 3, T),
    imageBullets(g(2), 4, T, 'img/ai-grasp.jpg', 'left', '강화학습 기반 인핸드 조작 — 외란관측기 적용 전후 비교'),
    imageBullets(g(3), 5, T, 'img/hands.jpg', 'right', 'RIM Hand — 수근중수관절(CMC) 구조 로봇 손', 'contain'),
    imageBullets(g(4), 6, T, 'img/cvt.jpg', 'left', '연속 가변 변속·강성 구동기 (IEEE RA-L 2024)', 'contain'),
    gridSlide(g(5), 7, T, ['img/factory.jpg', 'img/lowerlimb.jpg', 'img/surgical.jpg', 'img/exo.jpg']),
    achievementsSlide(g(6), 8, T),
    teamSlide(g(7), 9, T),
    careerSlide(g(8), 10, T),
  ];
  out.forEach((s, i) => { if (i > 0 && deck.slides[i - 1] && deck.slides[i - 1].notes) s.note(deck.slides[i - 1].notes); });
  out[0].note(deck.deckSubtitle || '');
  return out;
}

module.exports = { build };
