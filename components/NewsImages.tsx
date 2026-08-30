'use client';

/**
 * News photo layout tuned for a human reader.
 * Certificates (bright, portrait document scans) are told apart from ordinary
 * portrait photos by sampling average luminance — only documents get the extra
 * height needed for legible text; every other photo shares one uniform row
 * height so galleries stay visually balanced.
 */
const CLS = {
  singleL: 'w-full max-w-2xl rounded-lg border border-rim-line',
  singleP: 'h-[360px] w-auto max-w-full rounded-lg border border-rim-line',
  multiPhoto: 'h-44 w-auto max-w-full rounded-lg border border-rim-line sm:h-52',
  multiDoc: 'h-72 w-auto max-w-full rounded-lg border border-rim-line sm:h-80',
};

function isDocument(im: HTMLImageElement): boolean {
  // banners and very wide graphics never count as documents
  if (im.naturalWidth > im.naturalHeight * 1.6) return false;
  try {
    const c = document.createElement('canvas');
    c.width = 24;
    c.height = 24;
    const ctx = c.getContext('2d');
    if (!ctx) return false;
    ctx.drawImage(im, 0, 0, 24, 24);
    const d = ctx.getImageData(0, 0, 24, 24).data;
    let sum = 0;
    let bright = 0;
    const n = d.length / 4;
    for (let i = 0; i < d.length; i += 4) {
      const l = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
      sum += l;
      if (l > 195) bright++;
    }
    // paper documents: mostly very bright pixels (white paper) or a uniformly
    // bright average (beige/toned paper); photos of people stay well below both
    return (bright / n > 0.45 && sum / n > 160) || sum / n > 168;
  } catch {
    return false;
  }
}

export default function NewsImages({ images, alt }: { images: string[]; alt: string }) {
  const single = images.length === 1;
  const apply = (im: HTMLImageElement) => {
    if (!im.naturalWidth) return;
    const portrait = im.naturalHeight > im.naturalWidth * 1.05;
    im.className = single
      ? portrait ? CLS.singleP : CLS.singleL
      : isDocument(im) ? CLS.multiDoc : CLS.multiPhoto;
  };
  return (
    <div className={single ? 'mt-4' : 'mt-4 flex max-w-4xl flex-wrap items-center gap-3'}>
      {images.map((src) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt={alt}
          loading="lazy"
          ref={(im) => { if (im && im.complete) apply(im); }}
          onLoad={(e) => apply(e.currentTarget)}
          className={single ? CLS.singleL : CLS.multiPhoto}
        />
      ))}
    </div>
  );
}
