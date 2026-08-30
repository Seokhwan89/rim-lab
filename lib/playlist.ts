import { heroPlaylistId, playlistSnapshot, type Video } from '@/content/videos';

/**
 * Fetch the full YouTube "Research" playlist at build time (no API key).
 * Falls back to the RSS feed (first 15 items) and then to the static
 * snapshot in content/videos.ts, so a blocked fetch can never break the build.
 */
export async function getResearchPlaylist(): Promise<Video[]> {
  try {
    const res = await fetch(
      'https://www.youtube.com/youtubei/v1/browse?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          context: { client: { clientName: 'WEB', clientVersion: '2.20240101.00.00' } },
          browseId: `VL${heroPlaylistId}`,
        }),
        cache: 'no-store',
      }
    );
    if (res.ok) {
      const data = await res.json();
      const out: Video[] = [];
      const seen = new Set<string>();
      const walk = (o: unknown): void => {
        if (Array.isArray(o)) { o.forEach(walk); return; }
        if (!o || typeof o !== 'object') return;
        const rec = o as Record<string, unknown>;
        // New web UI ("lockupViewModel") and classic ("playlistVideoRenderer") shapes
        const lv = rec.lockupViewModel as Record<string, unknown> | undefined;
        if (lv && typeof lv.contentId === 'string') {
          const meta = lv.metadata as { lockupMetadataViewModel?: { title?: { content?: string } } } | undefined;
          const title = meta?.lockupMetadataViewModel?.title?.content ?? '';
          if (title && !seen.has(lv.contentId)) { seen.add(lv.contentId); out.push({ id: lv.contentId, title }); }
        }
        const pv = rec.playlistVideoRenderer as
          | { videoId?: string; title?: { runs?: { text?: string }[]; simpleText?: string } }
          | undefined;
        if (pv?.videoId) {
          const title = pv.title?.simpleText ?? (pv.title?.runs ?? []).map((r) => r.text ?? '').join('');
          if (title && !seen.has(pv.videoId)) { seen.add(pv.videoId); out.push({ id: pv.videoId, title }); }
        }
        Object.values(rec).forEach(walk);
      };
      walk(data);
      if (out.length >= 5) return out;
    }
  } catch { /* fall through */ }
  try {
    const res = await fetch(`https://www.youtube.com/feeds/videos.xml?playlist_id=${heroPlaylistId}`, { cache: 'no-store' });
    if (res.ok) {
      const xml = await res.text();
      const ids: string[] = [];
      const titles: string[] = [];
      const idRe = /<yt:videoId>([\w-]{11})<\/yt:videoId>/g;
      const titleRe = /<media:title>([^<]*)<\/media:title>/g;
      let m: RegExpExecArray | null;
      while ((m = idRe.exec(xml)) !== null) ids.push(m[1]);
      while ((m = titleRe.exec(xml)) !== null)
        titles.push(m[1].replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'"));
      if (ids.length >= 5) return ids.map((id, i) => ({ id, title: titles[i] ?? '' }));
    }
  } catch { /* fall through */ }
  return playlistSnapshot;
}
