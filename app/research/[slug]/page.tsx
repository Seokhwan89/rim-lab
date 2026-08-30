import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import LiteYouTube from '@/components/LiteYouTube';
import ProjectIcon from '@/components/ProjectIcon';
import { projects } from '@/content/projects';
import { patentsByProject } from '@/content/patents';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = projects.find((x) => x.slug === params.slug);
  return { title: p ? p.title : 'Research' };
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <div className="card h-full p-7">
        <h2 className="font-display text-[16px] font-semibold uppercase tracking-wide text-rim-cyan">{title}</h2>
        <div className="mt-4">{children}</div>
      </div>
    </Reveal>
  );
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const idx = projects.findIndex((x) => x.slug === params.slug);
  if (idx === -1) notFound();
  const p = projects[idx];
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <PageHero eyebrow="Research Projects" title={<span className="grad-cyan">{p.title}</span>} desc={p.short} />
      <section className="bg-rim-bg py-16">
        <div className="container-site">
          <Reveal>
            <div className="flex items-start gap-6">
              <span className="hidden text-rim-cyan md:block"><ProjectIcon kind={p.icon} className="h-14 w-14" /></span>
              <div className="max-w-3xl space-y-4">
                {p.summary.map((s, i) => <p key={i} className="text-[15.5px] leading-[1.9] text-rim-muted">{s}</p>)}
              </div>
            </div>
          </Reveal>

          {p.image && (
            <Reveal className="mt-12">
              <figure className="card overflow-hidden p-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.imageCaption ?? p.title} className="w-full bg-white object-contain" />
                {p.imageCaption && (
                  <figcaption className="p-4 text-[13px] leading-snug text-rim-muted">{p.imageCaption}</figcaption>
                )}
              </figure>
            </Reveal>
          )}

          {p.videos && p.videos.length > 0 && (
            <div className="mt-14">
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

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {p.pubs && (
              <Block title="Representative Publications">
                <ul className="space-y-3">
                  {p.pubs.map((x) => (
                    <li key={x} className="flex gap-3 text-[13.5px] leading-relaxed text-rim-muted">
                      <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-rim-cyan" />{x}
                    </li>
                  ))}
                </ul>
                <Link href="/publications" className="mt-5 inline-block font-mono text-[12px] uppercase tracking-[0.14em] text-rim-cyan hover:text-rim-cyanLight">All publications →</Link>
              </Block>
            )}
            {(patentsByProject(p.slug).length > 0 || p.patents || p.funding || p.highlights) && (
              <Block title="Patents · Funding · Highlights">
                <ul className="space-y-3">
                  {[...(p.highlights ?? []), ...(p.funding ?? []), ...(p.patents ?? [])].map((x) => (
                    <li key={x} className="flex gap-3 text-[13.5px] leading-relaxed text-rim-muted">
                      <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-rim-indigo" />{x}
                    </li>
                  ))}
                  {patentsByProject(p.slug).map((pt) => (
                    <li key={pt.numbers} className="flex gap-3 text-[13.5px] leading-relaxed text-rim-muted">
                      <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-rim-indigo" />
                      <span>
                        {pt.title}
                        <span className="ml-2 font-mono text-[11px] uppercase tracking-wide text-rim-faint">
                          {pt.status === 'registered' ? 'Registered' : 'Filed'}
                        </span>
                        <span className="mt-0.5 block font-mono text-[11.5px] text-rim-faint">{pt.numbers}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <Link href="/publications" className="mt-5 inline-block font-mono text-[12px] uppercase tracking-[0.14em] text-rim-cyan hover:text-rim-cyanLight">All patents →</Link>
              </Block>
            )}
          </div>

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
