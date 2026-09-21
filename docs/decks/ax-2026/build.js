// Build the deck: content.json -> RIM_Lab_연구실소개.pptx + preview.html
const fs = require('fs');
const path = require('path');
const { toPptx, toHtml } = require('./render');
const { build } = require('./layout');

const deck = JSON.parse(fs.readFileSync(path.join(__dirname, 'content.json'), 'utf8'));
const slides = build(deck);
const out = path.join(__dirname, 'RIM_Lab_연구실소개.pptx');

toHtml(slides, path.join(__dirname, 'preview.html'));
toPptx(slides, out).then(() => {
  console.log('pptx  ->', out, fs.statSync(out).size, 'bytes');
  console.log('html  ->', path.join(__dirname, 'preview.html'));
  console.log('slides:', slides.length);
});
