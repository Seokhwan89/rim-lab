'use client';

import { useEffect, useRef, useState } from 'react';
import { heroPlaylistId, heroHighlights } from '@/content/videos';

/**
 * Full-bleed muted backdrop for the landing hero, driven by the lab's
 * YouTube "Research" playlist (new uploads appear automatically).
 *
 * Two stacked players double-buffer the reel: while one is visible, the
 * next video is already loaded, seeked to a random mid-video spot and
 * playing in the hidden player, then the two cross-fade. All buffering,
 * spinners and player chrome happen while a player is invisible, so the
 * visible backdrop never stalls or flashes icons.
 * Per-video segments can be pinned in content/videos.ts (heroHighlights).
 */
const SEG_MIN_FRACTION = 0.15; // skip the first 15% (intros, title cards)
const SEG_MAX_FRACTION = 0.8; // and the tail (outros, credits)
const SEG_SECONDS = 10; // seconds each clip stays on screen
const PRELOAD_SECONDS = 5; // how long before the switch the next video starts loading
const FADE_MS = 700; // crossfade duration
const MIN_AUTO_SEEK = 60; // don't auto-seek videos shorter than this (s)

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
  const s = useRef<{
    players: any[];
    seeked: boolean[];
    ready: boolean[];
    ids: string[];
    i: number; // index of the NEXT video to load
    active: Slot;
    swapDue: boolean;
    timers: ReturnType<typeof setTimeout>[];
  }>({ players: [], seeked: [true, true], ready: [false, false], ids: [], i: 0, active: 0, swapDue: false, timers: [] });

  useEffect(() => {
    let cancelled = false;
    const st = s.current;
    const later = (fn: () => void, ms: number) => { const t = setTimeout(() => { if (!cancelled) fn(); }, ms); st.timers.push(t); };

    const preload = (slot: Slot) => {
      const p = st.players[slot];
      if (!p || st.ids.length === 0) return;
      const id = st.ids[st.i % st.ids.length];
      st.i += 1;
      const hl = heroHighlights[id];
      st.ready[slot] = false;
      st.seeked[slot] = !!hl; // pinned segments load at the right spot already
      p.loadVideoById(hl ? { videoId: id, startSeconds: hl.start } : id);
    };

    const swap = () => {
      st.swapDue = false;
      const from = st.active;
      const to = (1 - from) as Slot;
      st.active = to;
      setVisible(to);
      later(() => {
        st.players[from]?.stopVideo?.();
        st.ready[from] = false;
      }, FADE_MS + 200);
      // buffer the following clip behind the scenes shortly before the next switch
      later(() => preload(from), (SEG_SECONDS - PRELOAD_SECONDS) * 1000);
      later(() => { st.swapDue = true; if (st.ready[(1 - st.active) as Slot]) swap(); }, SEG_SECONDS * 1000);
    };

    const onStateChange = (slot: Slot) => (e: any) => {
      if (cancelled || !window.YT) return;
      const { CUED, PLAYING, ENDED } = window.YT.PlayerState;
      if (e.data === CUED && slot === 0 && st.ids.length === 0) {
        const list = st.players[0].getPlaylist?.();
        st.ids = Array.isArray(list) && list.length > 0 ? [...list] : fallbackIds;
        preload(0);
        return;
      }
      if (e.data === PLAYING) {
        const p = st.players[slot];
        if (!st.seeked[slot]) {
          // one-time random seek; re-triggers PLAYING when done
          st.seeked[slot] = true;
          const d = p.getDuration?.() ?? 0;
          if (d > MIN_AUTO_SEEK) {
            const start = d * (SEG_MIN_FRACTION + Math.random() * (SEG_MAX_FRACTION - SEG_MIN_FRACTION));
            p.seekTo(Math.min(start, d - SEG_SECONDS - PRELOAD_SECONDS - 2), true);
          }
          return;
        }
        st.ready[slot] = true;
        if (visibleRef.current === null && slot === st.active) {
          // first clip is rolling — reveal and start the cycle
          setVisible(st.active);
          later(() => preload((1 - st.active) as Slot), (SEG_SECONDS - PRELOAD_SECONDS) * 1000);
          later(() => { st.swapDue = true; if (st.ready[(1 - st.active) as Slot]) swap(); }, SEG_SECONDS * 1000);
        } else if (st.swapDue && slot !== st.active) {
          swap(); // the switch was waiting on this preload
        }
      } else if (e.data === ENDED) {
        if (slot === st.active) {
          if (st.ready[(1 - st.active) as Slot]) swap();
          else preload(slot);
        } else {
          preload(slot); // hidden clip ran out before its turn — load another
        }
      }
    };

    const boot = () => {
      if (cancelled || st.players.length > 0 || !hostA.current || !hostB.current) return;
      ([ [hostA, 0], [hostB, 1] ] as const).forEach(([host, slot]) => {
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
            onStateChange: onStateChange(slot),
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

    return () => {
      cancelled = true;
      st.timers.forEach(clearTimeout);
      st.players.forEach((p) => p?.destroy?.());
      st.players = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fallbackIds]);

  // mirror `visible` into a ref so the stable event handlers can read it
  const visibleRef = useRef<Slot | null>(null);
  visibleRef.current = visible;

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
