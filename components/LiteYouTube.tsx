'use client';
import { useState } from 'react';

/** Click-to-play YouTube embed: shows the thumbnail until clicked, then swaps in the iframe. */
/** Thumbnail ladder per quality tier; the browser steps down on 404 (not every video has maxres). */
const LADDER: Record<'max' | 'sd' | 'hq', string[]> = {
  max: ['maxresdefault', 'sddefault', 'hqdefault'],
  sd: ['sddefault', 'hqdefault'],
  hq: ['hqdefault'],
};

export default function LiteYouTube({ id, title, className = '', quality = 'sd' }: { id: string; title: string; className?: string; quality?: 'max' | 'sd' | 'hq' }) {
  const [play, setPlay] = useState(false);
  const [step, setStep] = useState(0);
  const ladder = LADDER[quality];
  const thumb = `https://i.ytimg.com/vi/${id}/${ladder[Math.min(step, ladder.length - 1)]}.jpg`;
  return (
    <div className={`relative w-full aspect-video overflow-hidden rounded-lg bg-black ${className}`}>
      {play ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button type="button" onClick={() => setPlay(true)} className="group absolute inset-0 h-full w-full cursor-pointer" aria-label={`Play: ${title}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumb}
            alt={title}
            loading="lazy"
            onError={() => { if (step < ladder.length - 1) setStep(step + 1); }}
            onLoad={(e) => { /* YouTube serves a 120x90 placeholder instead of 404 for some missing sizes */ if (e.currentTarget.naturalWidth <= 120 && step < ladder.length - 1) setStep(step + 1); }}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
          <span className="play-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden><path d="M8 5.5v13l11-6.5-11-6.5z" /></svg>
          </span>
        </button>
      )}
    </div>
  );
}
