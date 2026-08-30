import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import LiteYouTube from '@/components/LiteYouTube';
import ProjectIcon from '@/components/ProjectIcon';
import { projects } from '@/content/projects';
import { publications, type Pub } from '@/content/publications';
import { patentsByProject } from '@/content/patents';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = projects.find((x) => x.slug === params.slug);
  return { title: p ? p.title : 'Research' };
}

/** Resolve a short pub string ("Title — venue, year") to the full publication entry. */
function resolvePub(x: string): Pub | undefined {
  const head = x.split(' — ')[0].trim().toLowerCase();
  return publications.find(
    (pub) => pub.title.toLowerCase().startsWith(head.slice(0, 40)) || head.startsWith(pub.title.toLowerCase().slice(0, 40)),
  );
}

function videoHref(v?: string): string | undefined {
  if (!v) return undefined;
  if (v.startsWith('http') || v.startsWith('/')) return v;
  return `https://www.youtube.com/watch?v=${v}`;
}

function PubCard({ pub, fallback }: { pub?: Pub; fallback: string }) {
  if (!pub) {
    return (
      <div className="card flex items-center p-5 text-[13.5px] leading-relaxed text-rim-muted">{fallback}</div>
    );
  }
  const vh = videoHref(pub.video);
  return (
    <div className="card card-hover flex h-full flex-col overflow-hidden p-0">
      {pub.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={pub.image}
          alt={pub.title}
          loading="lazy"
          className="h-44 w-full border-b border-rim-line bg-white object-contain p-2"
        />
      )}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[14px] font-semibold leading-snug">
          {pub.link ? (
            <a href={pub.link} target="_blank" rel="noreferrer" className="transition-colors hover:text-rim-cyan">{pub.title}</a>
          ) : pub.title}
        </p>
        <p className="mt-2 text-[12.5px] leading-snug text-rim-muted">{pub.authors}</p>
        <p className="mt-1 font-mono text-[11.5px] uppercase tracking-wide text-rim-faint">{pub.venue} · {pub.year}</p>
        <p className="mt-auto flex gap-4 pt-4">
          {pub.link && (
            <a href={pub.link} target="_blank" rel="noreferrer" className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-rim-cyan hover:text-rim-cyanLight">Paper ↗</a>
          )}
          {vh && (
            <a href={vh} target="_blank" rel="noreferrer" className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-rim-cyan hover:text-rim-cyanLight">Video ▶</a>
          )}
        </p>
      </div>
    </div>
  );
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const idx = projects.findIndex((x) => x.slug === params.slug);
  if (idx === -1) notFound();
  const p = projects[idx];
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];
  const pubEntries = (p.pubs ?? []).map((x) => ({ raw: x, pub: resolvePub(x) }));
  const projectPatents = patentsByProject(p.slug);

  return (
    <>
      <PageHero eyebrow="Research Projects" title={<span className="grad-cyan">{p.title}</span>} desc={p.short} />
      <section className="bg-rim-bg py-16">
        <div className="container-site">
          {/* Overview + teaser figure */}
          <div className="grid items-start gap-10 lg:grid-cols-5">
            <Reveal className={p.image ? 'lg:col-span-2' : 'lg:col-span-5'}>
              <div className="flex items-start gap-5">
                <span className="hidden shrink-0 text-rim-cyan md:block"><ProjectIcon kind={p.icon} className="h-12 w-12" /></span>
                <div className="space-y-4">
                  <p className="eyebrow">Overview</p>
                  {p.summary.map((s, i) => <p key={i} className="text-[15px] leading-[1.9] text-rim-muted">{s}</p>)}
                </div>
              </div>
            </Reveal>
            {p.image && (
              <Reveal className="lg:col-span-3" delay={80}>
                <figure className="card overflow-hidden p-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.imageCaption ?? p.title} className="mx-auto block h-auto w-auto max-w-full bg-white object-contain px-3 py-3" style={{ maxHeight: 480 }} />
                  {p.imageCaption && (
                    <figcaption className="border-t border-rim-line p-4 text-[13px] leading-snug text-rim-muted">{p.imageCaption}</figcaption>
                  )}
                </figure>
              </Reveal>
            )}
          </div>

          {/* Highlights */}
          {p.highlights && p.highlights.length > 0 && (
            <Reveal className="mt-12">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {p.highlights.map((h) => (
                  <div key={h} className="card border-rim-cyan/25 p-5 text-[13.5px] leading-relaxed text-rim-muted">
                    <span className="mb-2 block h-1 w-8 rounded bg-rim-cyan" aria-hidden />{h}
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          {/* Demonstrations */}
          {p.videos && p.videos.length > 0 && (
            <div className="mt-16">
              <Reveal><p className="eyebrow">Demonstrations</p></Reveal>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {p.videos.map((v, i) => (
                  <Reveal key={v.id} delay={(i % 2) * 80}>
                    <div className="card card-hover group overflow-hidden p-0">
                      <LiteYouTube id={v.id} title={v.title} className="rounded-b-none" />
                      <p className="p-4 text-[13.5px] font-medium leading-snug">{v.title}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {/* Publications as cards */}
          {pubEntries.length > 0 && (
            <div className="mt-16">
              <Reveal>
                <p className="eyebrow">Representative Publications</p>
              </Reveal>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {pubEntries.map(({ raw, pub }, i) => (
                  <Reveal key={raw} delay={(i % 3) * 70}>
                    <PubCard pub={pub} fallback={raw} />
                  </Reveal>
                ))}
              </div>
              <Reveal>
                <Link href="/publications" className="mt-6 inline-block font-mono text-[12px] uppercase tracking-[0.14em] text-rim-cyan hover:text-rim-cyanLight">All publications →</Link>
              </Reveal>
            </div>
          )}

          {/* Patents · Funding */}
          {(projectPatents.length > 0 || p.patents || p.funding) && (
            <div className="mt-16 grid gap-5 lg:grid-cols-2">
              {(projectPatents.length > 0 || p.patents) && (
                <Reveal>
                  <div className="card h-full p-7">
                    <h2 className="font-display text-[15px] font-semibold uppercase tracking-wide text-rim-cyan">Patents</h2>
                    <ul className="mt-4 space-y-3">
                      {(p.patents ?? []).map((x) => (
                        <li key={x} className="flex gap-3 text-[13.5px] leading-relaxed text-rim-muted">
                          <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-rim-indigo" />{x}
                        </li>
                      ))}
                      {projectPatents.map((pt) => (
                        <li key={pt.numbers} className="flex gap-3 text-[13.5px] leading-relaxed text-rim-muted">
                          <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-rim-indigo" />
                          <span>
                            {pt.link ? <a href={pt.link} target="_blank" rel="noreferrer" className="transition-colors hover:text-rim-cyan">{pt.title} ↗</a> : pt.title}
                            <span className="ml-2 font-mono text-[11px] uppercase tracking-wide text-rim-faint">
                              {pt.status === 'registered' ? 'Registered' : 'Filed'}
                            </span>
                            <span className="mt-0.5 block font-mono text-[11.5px] text-rim-faint">{pt.numbers}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}
              {p.funding && (
                <Reveal delay={80}>
                  <div className="card h-full p-7">
                    <h2 className="font-display text-[15px] font-semibold uppercase tracking-wide text-rim-cyan">Funding</h2>
                    <ul className="mt-4 space-y-3">
                      {p.funding.map((x) => (
                        <li key={x} className="flex gap-3 text-[13.5px] leading-relaxed text-rim-muted">
                          <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-rim-cyan" />{x}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}
            </div>
          )}

          <div className="mt-14 flex items-center justify-between border-t border-rim-line pt-8">
            <Link href={`/research/${prev.slug}`} className="group max-w-[45%] text-left">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-rim-faint">← Previous</p>
              <p className="mt-1 text-[14px] font-medium transition-colors group-hover:text-rim-cyan">{prev.title}</p>
            </Link>
            <Link href={`/research/${next.slug}`} className="group max-w-[45%] text-right">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-rim-faint">Next →</p>
              <p className="mt-1 text-[14px] font-medium transition-colors group-hover:text-rim-cyan">{next.title}</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
