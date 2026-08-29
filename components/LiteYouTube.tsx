'use client';
import { useState } from 'react';

/** Click-to-play YouTube embed: shows the thumbnail until clicked, then swaps in the iframe. */
export default function LiteYouTube({ id, title, className = '' }: { id: string; title: string; className?: string }) {
  const [play, setPlay] = useState(false);
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
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt={title}
            loading="lazy"
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
