'use client';
import { useMemo, useState } from 'react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { publications, type Pub } from '@/content/publications';
import { patents, type Patent } from '@/content/patents';
import { site } from '@/content/site';

const TYPES = [
  { key: 'all', label: 'All' },
  { key: 'journal', label: 'Journals' },
  { key: 'conference', label: 'Conferences' },
  { key: 'domestic', label: 'Domestic' },
  { key: 'patents', label: 'Patents' },
] as const;

function highlightJeong(authors: string) {
  return authors.split(/(S\.\s?H?\.?\s?Jeong\*?|정석환)/g).map((part, i) =>
    /^(S\.\s?H?\.?\s?Jeong\*?|정석환)$/.test(part)
      ? <strong key={i} className="font-semibold text-rim-text">{part}</strong>
      : <span key={i}>{part}</span>
  );
}

export default function PublicationsPage() {
  const [type, setType] = useState<(typeof TYPES)[number]['key']>('all');
  const patentRows = useMemo<Pub[]>(
    () =>
      patents.map((pt: Patent) => ({
        title: pt.title,
        authors: pt.assignee,
        venue: pt.numbers,
        year: pt.year,
        type: 'patent',
        note: pt.status === 'registered' ? (pt.note ? `Registered · ${pt.note.replace(/^Registered\s*/i, '')}` : 'Registered') : pt.note,
      })),
    []
  );
  const filtered = useMemo(
    () => (type === 'patents' ? patentRows : type === 'all' ? publications : publications.filter((p) => p.type === type)),
    [type, patentRows]
  );
  const years = useMemo(
    () => Array.from(new Set(filtered.map((p) => p.year))).sort((a, b) => b - a),
    [filtered]
  );
  const counts = {
    journal: publications.filter((p) => p.type === 'journal').length,
    conference: publications.filter((p) => p.type === 'conference').length,
    domestic: publications.filter((p) => p.type === 'domestic').length,
    patents: patents.length,
  };

  return (
    <>
      <PageHero
        eyebrow="Publications"
        title={<>Peer-reviewed <span className="grad-cyan">output</span></>}
        desc={`${counts.journal} international journal papers · ${counts.conference} peer-reviewed conference papers · ${counts.domestic} domestic publications · ${counts.patents} patent families (KR, US, EP, JP, CN and more).`}
      />
      <section className="bg-rim-bg py-16">
        <div className="container-site">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {TYPES.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setType(t.key)}
                  className={`rounded-full border px-4 py-1.5 font-mono text-[12px] uppercase tracking-wide transition-all ${type === t.key ? 'border-rim-cyan bg-rim-cyan/15 text-rim-cyan shadow-[0_0_18px_-6px_rgba(34,211,238,0.7)]' : 'border-rim-line text-rim-muted hover:border-rim-line2 hover:text-rim-text'}`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <a href={site.scholar} target="_blank" rel="noreferrer" className="font-mono text-[12.5px] uppercase tracking-[0.14em] text-rim-cyan hover:text-rim-cyanLight">
              Google Scholar ↗
            </a>
          </div>

          <div className="mt-10 space-y-12">
            {years.map((year) => (
              <div key={year} className="grid gap-5 md:grid-cols-[110px_1fr]">
                <Reveal>
                  <p className="font-display text-[30px] font-semibold text-rim-cyan/85 md:sticky md:top-24">{year}</p>
                </Reveal>
                <div className="space-y-3.5">
                  {filtered.filter((p) => p.year === year).map((p: Pub, i) => (
                    <Reveal key={p.title} delay={Math.min(i, 4) * 50}>
                      <article className="card card-hover p-5">
                        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                          <h2 className="max-w-3xl text-[15px] font-semibold leading-snug">
                            {p.link ? (
                              <a href={p.link} target="_blank" rel="noreferrer" className="transition-colors hover:text-rim-cyan">{p.title}</a>
                            ) : p.title}
                          </h2>
                          <span className={`chip shrink-0 ${p.type === 'journal' ? 'border-cyan-300/40 bg-cyan-300/10 text-cyan-300' : p.type === 'conference' ? 'border-violet-300/40 bg-violet-300/10 text-violet-300' : p.type === 'patent' ? 'border-emerald-300/40 bg-emerald-300/10 text-emerald-300' : 'border-slate-300/40 bg-slate-300/10 text-slate-300'}`}>
                            {p.type}
                          </span>
                        </div>
                        <p className="mt-2 text-[13px] leading-relaxed text-rim-muted">{highlightJeong(p.authors)}</p>
                        <p className="mt-1.5 font-mono text-[12px] italic text-rim-faint">{p.venue}</p>
                        {p.note && <p className="mt-2 inline-block rounded border border-amber-300/35 bg-amber-300/10 px-2 py-0.5 font-mono text-[11px] text-amber-300">★ {p.note}</p>}
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
