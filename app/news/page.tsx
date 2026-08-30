'use client';
import { useState } from 'react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import NewsImages from '@/components/NewsImages';
import { news, categoryColors, type NewsCategory } from '@/content/news';

const FILTERS: ('All' | NewsCategory)[] = ['All', 'Announcement', 'Conference', 'Award', 'Grant', 'Publication', 'Members', 'Lab Life'];

export default function NewsPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');
  const shown = filter === 'All' ? news : news.filter((n) => n.category === filter);

  return (
    <>
      <PageHero
        eyebrow="News"
        title={<>Lab <span className="grad-cyan">timeline</span></>}
        desc="Conferences, awards, grants, publications, and life at RIM Lab — newest first."
      />
      <section className="bg-rim-bg py-16">
        <div className="container-site">
          <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:px-0">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`shrink-0 rounded-full border px-4 py-1.5 font-mono text-[12px] uppercase tracking-wide transition-all ${filter === f ? 'border-rim-cyan bg-rim-cyan/15 text-rim-cyan shadow-[0_0_18px_-6px_rgba(34,211,238,0.7)]' : 'border-rim-line text-rim-muted hover:border-rim-line2 hover:text-rim-text'}`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="relative mt-10 ml-2 border-l border-rim-line pl-8 md:ml-6 md:pl-12">
            {shown.map((n, i) => (
              <Reveal key={`${n.date}-${n.title}`} delay={Math.min(i, 5) * 50} className="relative mb-8 last:mb-0">
                <span className="absolute -left-[37.5px] top-[26px] h-[11px] w-[11px] rounded-full border-2 border-rim-cyan bg-rim-bg shadow-[0_0_12px_rgba(34,211,238,0.75)] md:-left-[53.5px]" aria-hidden />
                <div className="card card-hover p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-[12.5px] text-rim-faint">{n.date}</span>
                    <span className={`chip ${categoryColors[n.category]}`}>{n.category}</span>
                  </div>
                  <h2 className="mt-2.5 font-display text-[17.5px] font-semibold leading-snug">{n.title}</h2>
                  {n.body && <p className="mt-2 text-[13.5px] leading-relaxed text-rim-muted">{n.body}</p>}
                  {n.image && <NewsImages images={[n.image, ...(n.images ?? [])]} alt={n.title} />}
                  {(n.link || n.links) && (
                    <div className="mt-3 flex flex-wrap gap-4">
                      {n.link && <a href={n.link} target="_blank" rel="noreferrer" className="font-mono text-[12px] uppercase tracking-[0.14em] text-rim-cyan hover:text-rim-cyanLight">Related link ↗</a>}
                      {n.links?.map((l) => (
                        <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="font-mono text-[12px] uppercase tracking-[0.14em] text-rim-cyan hover:text-rim-cyanLight">{l.label} ↗</a>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
