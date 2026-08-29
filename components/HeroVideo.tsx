'use client';

import { useEffect, useRef, useState } from 'react';
import { heroPlaylistId, heroHighlights } from '@/content/videos';

/**
 * Full-bleed muted backdrop for the landing hero, driven by the lab's
 * YouTube "Research" playlist (new uploads appear automatically).
 *
 * Two stacked players double-buffer the reel: while one is on screen, the
 * next video loads, seeks to a random mid-video spot and starts playing in
 * the hidden player, then the two cross-fade. A polling "conductor" loop
 * drives the schedule directly from player state instead of YouTube's
 * event stream, which fires unreliable CUED/ENDED events around stops.
 * Per-video segments can be pinned in content/videos.ts (heroHighlights).
 */
const SEG_MIN_FRACTION = 0.15; // skip the first 15% (intros, title cards)
const SEG_MAX_FRACTION = 0.8; // and the tail (outros, credits)
const SEG_SECONDS = 10; // seconds each clip stays on screen
const PRELOAD_SECONDS = 6; // how long before the switch the next video starts loading
const FADE_MS = 700; // crossfade duration
const MIN_AUTO_SEEK = 60; // don't auto-seek videos shorter than this (s)
const TICK_MS = 500;

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

type Slot = 0 | 1;

export default function HeroVideo({ fallbackIds }: { fallbackIds: string[] }) {
  const hostA = useRef<HTMLDivElement>(null);
  const hostB = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<Slot | null>(null); // null = nothing ready yet (dark)

  useEffect(() => {
    let cancelled = false;
    const st = {
      players: [] as any[],
      ids: [] as string[],
      i: 0, // index of the next video to load
      active: 0 as Slot,
      started: false, // first clip revealed
      lastSwap: 0,
      preloadStarted: false,
      needSeek: [false, false],
      seekDoneAt: [0, 0],
      stopTimer: undefined as ReturnType<typeof setTimeout> | undefined,
    };

    const preload = (slot: Slot) => {
      const p = st.players[slot];
      if (!p?.loadVideoById || st.ids.length === 0) return;
      const id = st.ids[st.i % st.ids.length];
      st.i += 1;
      const hl = heroHighlights[id];
      st.needSeek[slot] = !hl;
      st.seekDoneAt[slot] = hl ? Date.now() : 0;
      p.loadVideoById(hl ? { videoId: id, startSeconds: hl.start } : id);
    };

    const slotReady = (slot: Slot) => {
      const p = st.players[slot];
      return (
        p?.getPlayerState?.() === window.YT?.PlayerState?.PLAYING &&
        !st.needSeek[slot] &&
        Date.now() - st.seekDoneAt[slot] > 600 // let playback settle after the seek
      );
    };

    const swap = () => {
      const from = st.active;
      st.active = (1 - from) as Slot;
      st.lastSwap = Date.now();
      st.preloadStarted = false;
      setVisible(st.active);
      if (st.stopTimer) clearTimeout(st.stopTimer);
      st.stopTimer = setTimeout(() => {
        if (!cancelled) st.players[from]?.pauseVideo?.(); // pause, not stop: stopVideo fires spurious events
      }, FADE_MS + 300);
    };

    const tick = () => {
      if (cancelled || st.ids.length === 0) return;
      const YT = window.YT;
      if (!YT?.PlayerState) return;
      const hidden = (1 - st.active) as Slot;

      // complete pending random seeks as soon as the video reports a duration
      ([0, 1] as const).forEach((slot) => {
        const p = st.players[slot];
        if (st.needSeek[slot] && p?.getPlayerState?.() === YT.PlayerState.PLAYING) {
          st.needSeek[slot] = false;
          st.seekDoneAt[slot] = Date.now();
          const d = p.getDuration?.() ?? 0;
          if (d > MIN_AUTO_SEEK) {
            const start = d * (SEG_MIN_FRACTION + Math.random() * (SEG_MAX_FRACTION - SEG_MIN_FRACTION));
            p.seekTo(Math.min(start, d - SEG_SECONDS - PRELOAD_SECONDS - 2), true);
          }
        }
      });

      if (!st.started) {
        if (slotReady(st.active)) {
          st.started = true;
          st.lastSwap = Date.now();
          setVisible(st.active);
        }
        return;
      }

      const elapsed = (Date.now() - st.lastSwap) / 1000;
      if (!st.preloadStarted && elapsed >= SEG_SECONDS - PRELOAD_SECONDS) {
        st.preloadStarted = true;
        preload(hidden);
      }
      if (elapsed >= SEG_SECONDS && slotReady(hidden)) {
        swap();
        return;
      }
      // visible clip died (ended / errored) — cut over or reload as soon as possible
      const activeState = st.players[st.active]?.getPlayerState?.();
      if (activeState === YT.PlayerState.ENDED && slotReady(hidden)) swap();
    };

    const boot = () => {
      if (cancelled || st.players.length > 0 || !hostA.current || !hostB.current) return;
      ([[hostA, 0], [hostB, 1]] as const).forEach(([host, slot]) => {
        st.players[slot] = new window.YT.Player(host.current, {
          width: '100%',
          height: '100%',
          host: 'https://www.youtube-nocookie.com',
          playerVars: { autoplay: 0, controls: 0, disablekb: 1, fs: 0, iv_load_policy: 3, modestbranding: 1, playsinline: 1, rel: 0 },
          events: {
            onReady: () => {
              if (cancelled) return;
              st.players[slot].mute();
              if (slot === 0) st.players[0].cuePlaylist({ list: heroPlaylistId, listType: 'playlist' });
            },
            onStateChange: (e: any) => {
              if (cancelled || slot !== 0 || st.ids.length > 0) return;
              if (e.data === window.YT?.PlayerState?.CUED) {
                const list = st.players[0].getPlaylist?.();
                st.ids = Array.isArray(list) && list.length > 0 ? [...list] : fallbackIds;
                preload(0);
              }
            },
            onError: () => { if (!cancelled) preload(slot); }, // broken/unembeddable video → next
          },
        });
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

    const interval = setInterval(tick, TICK_MS);

    return () => {
      cancelled = true;
      clearInterval(interval);
      if (st.stopTimer) clearTimeout(st.stopTimer);
      st.players.forEach((p) => p?.destroy?.());
      st.players = [];
    };
  }, [fallbackIds]);

  const layer = (slot: Slot) =>
    `absolute left-1/2 top-1/2 h-[max(100%,56.25vw)] w-[max(100%,177.78vh)] -translate-x-1/2 -translate-y-1/2 transition-opacity ` +
    `duration-700 [&_iframe]:h-full [&_iframe]:w-full ${visible === slot ? 'opacity-100' : 'opacity-0'}`;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className={layer(0)}><div ref={hostA} className="h-full w-full" /></div>
      <div className={layer(1)}><div ref={hostB} className="h-full w-full" /></div>
      {/* constant theme tint — players cross-fade beneath it */}
      <div className="absolute inset-0 bg-[#040812]/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#040812]/70 via-transparent to-[#040812]" />
    </div>
  );
}
