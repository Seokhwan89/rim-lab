'use client';

/**
 * News photo layout tuned for a human reader:
 * - single landscape photo → large (up to 672px wide)
 * - single portrait photo (certificates!) → tall but not overwhelming (~340px high)
 * - multi-photo events → uniform rows; portrait tiles run taller than landscape
 *   ones so certificate text stays legible.
 * Orientation is read from the loaded image itself.
 */
const CLS = {
  singleL: 'w-full max-w-2xl rounded-lg border border-rim-line',
  singleP: 'h-[340px] w-auto max-w-full rounded-lg border border-rim-line',
  multiL: 'h-40 w-auto max-w-full rounded-lg border border-rim-line object-cover sm:h-52',
  multiP: 'h-64 w-auto max-w-full rounded-lg border border-rim-line sm:h-80',
};

export default function NewsImages({ images, alt }: { images: string[]; alt: string }) {
  const single = images.length === 1;
  const apply = (im: HTMLImageElement) => {
    if (!im.naturalWidth) return;
    const portrait = im.naturalHeight > im.naturalWidth * 1.05;
    im.className = single ? (portrait ? CLS.singleP : CLS.singleL) : portrait ? CLS.multiP : CLS.multiL;
  };
  return (
    <div className={single ? 'mt-4' : 'mt-4 flex max-w-4xl flex-wrap items-end gap-3'}>
      {images.map((src) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt={alt}
          loading="lazy"
          ref={(im) => { if (im && im.complete) apply(im); }}
          onLoad={(e) => apply(e.currentTarget)}
          className={single ? CLS.singleL : CLS.multiL}
        />
      ))}
    </div>
  );
}
