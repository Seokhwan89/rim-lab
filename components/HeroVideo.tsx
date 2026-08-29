'use client';

import { useEffect, useRef, useState } from 'react';
import { heroPlaylistId, heroHighlights } from '@/content/videos';

/**
 * Full-bleed muted backdrop for the landing hero, driven by the lab's
 * YouTube "Research" playlist (new uploads appear automatically).
 *
 * Instead of playing each video from the start, it jumps to a highlight
 * segment — 12s starting ~35% into the video, past intros and title cards —
 * and cross-fades between videos through a dark veil. Per-video segments
 * can be pinned in content/videos.ts (heroHighlights).
 */
const SEG_FRACTION = 0.35; // auto-highlight start point (fraction of duration)
const SEG_SECONDS = 12; // seconds each highlight plays
const FADE_MS = 500; // veil fade duration between videos
const MIN_AUTO_SEEK = 60; // don't auto-seek videos shorter than this (s)

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

export default function HeroVideo({ fallbackIds }: { fallbackIds: string[] }) {
  const hostRef = useRef<HTMLDivElement>(null);
  // true = fully dark (loading / between videos), false = video visible under the tint
  const [veiled, setVeiled] = useState(true);
  const s = useRef<{ player?: any; ids: string[]; i: number; timer?: ReturnType<typeof setTimeout> }>({ ids: [], i: 0 });

  useEffect(() => {
    let cancelled = false;
    const st = s.current;

    const advance = () => {
      if (cancelled || !st.player || st.ids.length === 0) return;
      setVeiled(true);
      if (st.timer) clearTimeout(st.timer);
      st.timer = setTimeout(() => {
        if (cancelled) return;
        const id = st.ids[st.i % st.ids.length];
        st.i += 1;
        const hl = heroHighlights[id];
        st.player.loadVideoById(hl ? { videoId: id, startSeconds: hl.start } : id);
      }, FADE_MS);
    };

    const onStateChange = (e: any) => {
      if (cancelled || !window.YT) return;
      const { CUED, PLAYING, ENDED } = window.YT.PlayerState;
      if (e.data === CUED) {
        const list = st.player.getPlaylist?.();
        st.ids = Array.isArray(list) && list.length > 0 ? [...list] : fallbackIds;
        advance();
      } else if (e.data === PLAYING) {
        const id = st.ids[(st.i - 1 + st.ids.length) % st.ids.length];
        const hl = heroHighlights[id];
        if (!hl) {
          const d = st.player.getDuration?.() ?? 0;
          if (d > MIN_AUTO_SEEK) st.player.seekTo(d * SEG_FRACTION, true);
        }
        setTimeout(() => { if (!cancelled) setVeiled(false); }, 350);
        if (st.timer) clearTimeout(st.timer);
        st.timer = setTimeout(advance, (hl?.seconds ?? SEG_SECONDS) * 1000);
      } else if (e.data === ENDED) {
        advance();
      }
    };

    const boot = () => {
      if (cancelled || !hostRef.current || st.player) return;
      st.player = new window.YT.Player(hostRef.current, {
        width: '100%',
        height: '100%',
        host: 'https://www.youtube-nocookie.com',
        playerVars: { autoplay: 0, controls: 0, disablekb: 1, fs: 0, iv_load_policy: 3, modestbranding: 1, playsinline: 1, rel: 0 },
        events: {
          onReady: () => {
            if (cancelled) return;
            st.player.mute();
            st.player.cuePlaylist({ list: heroPlaylistId, listType: 'playlist' });
          },
          onStateChange,
          onError: advance, // embedding-disabled or broken video → skip to the next
        },
      });
    };

    if (window.YT?.Player) {
      boot();
    } else {
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => { prev?.(); boot(); };
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.head.appendChild(tag);
      }
    }

    // If YouTube never loads (blocked network), lift the veil so the canvas shows
    const safety = setTimeout(() => { if (!cancelled) setVeiled(false); }, 8000);

    return () => {
      cancelled = true;
      clearTimeout(safety);
      if (st.timer) clearTimeout(st.timer);
      st.player?.destroy?.();
      st.player = undefined;
    };
  }, [fallbackIds]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute left-1/2 top-1/2 h-[max(100%,56.25vw)] w-[max(100%,177.78vh)] -translate-x-1/2 -translate-y-1/2 [&_iframe]:h-full [&_iframe]:w-full">
        <div ref={hostRef} className="h-full w-full" />
      </div>
      {/* transition veil — fully dark while loading/switching, tint while playing */}
      <div className={`absolute inset-0 bg-[#040812] transition-opacity duration-500 ${veiled ? 'opacity-100' : 'opacity-60'}`} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#040812]/70 via-transparent to-[#040812]" />
    </div>
  );
}
