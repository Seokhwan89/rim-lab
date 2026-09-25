'use client';
import { useState } from 'react';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { updates, updateColors, type UpdateKind } from '@/content/updates';

const FILTERS: ('All' | UpdateKind)[] = ['All', 'News', 'Publication', 'Patent', 'Video', 'Lecture', 'Award', 'Service', 'Team'];

export default function UpdatesPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');
  const kinds = new Set(updates.map((u) => u.kind));
  const filters = FILTERS.filter((f) => f === 'All' || kinds.has(f));
  const shown = filter === 'All' ? updates : updates.filter((u) => u.kind === filter);

  return (
    <>
      <PageHero
        eyebrow="Updates"
        title={<>What&apos;s <span className="grad-cyan">new</span> on the site</>}
        desc="Every addition to this site — news, papers, patents, videos, lectures, and team changes — newest first."
      />
      <section className="bg-rim-bg py-16">
        <div className="container-site">
          <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:px-0">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`shrink-0 rounded-full border px-4 py-1.5 font-mono text-[12px] uppercase tracking-wide transition-all ${filter === f ? 'border-rim-cyan bg-rim-cyan/15 text-rim-cyan shadow-[0_0_18px_-6px_rgba(34,211,238,0.7)]' : 'border-rim-line text-rim-muted hover:border-rim-line2 hover:text-rim-text'}`}
              >
                {f}
              </button>
            ))}
          </div>

          <ul className="mt-10 max-w-4xl divide-y divide-rim-line overflow-hidden rounded-xl border border-rim-line bg-rim-bg2">
            {shown.map((u) => {
              const external = /^https?:/.test(u.href);
              const inner = (
                <>
                  <span className="shrink-0 pt-0.5 font-mono text-[12px] text-rim-faint sm:w-[92px]">{u.date}</span>
                  <span className="min-w-0 sm:flex-1">
                    <span className="block text-[15px] leading-snug text-rim-text transition-colors group-hover:text-rim-cyan">{u.title}</span>
                    <span className={`chip mt-2 ${updateColors[u.kind]}`}>{u.kind}</span>
                  </span>
                  <span className="hidden shrink-0 pt-0.5 font-mono text-[13px] text-rim-faint transition-colors group-hover:text-rim-cyan sm:block">{external ? '↗' : '→'}</span>
                </>
              );
              const cls = 'group flex flex-col gap-1.5 px-5 py-4 sm:flex-row sm:items-start sm:gap-4 transition-colors hover:bg-rim-cyan/5';
              return (
                <li key={`${u.date}-${u.title}`}>
                  {external ? (
                    <a href={u.href} target="_blank" rel="noreferrer" className={cls}>{inner}</a>
                  ) : (
                    <Link href={u.href} className={cls}>{inner}</Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
