import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ProjectIcon from '@/components/ProjectIcon';
import { projects, researchAreas } from '@/content/projects';

export const metadata: Metadata = { title: 'Research Projects' };

export default function ResearchOverview() {
  return (
    <>
      <PageHero
        eyebrow="Research Projects"
        title={<>From actuators to <span className="grad-cyan">physical AI</span></>}
        desc="Our research spans the full stack of dexterous robotics: novel actuation mechanisms at the bottom, force-aware hands and grippers in the middle, and learning-based manipulation intelligence on top."
      />
      <section className="bg-rim-bg py-20">
        <div className="container-site">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {researchAreas.map((a, i) => (
              <Reveal key={a.title} delay={i * 70}>
                <div className="card h-full p-6">
                  <span className="text-rim-cyan"><ProjectIcon kind={a.icon} className="h-9 w-9" /></span>
                  <h2 className="mt-4 font-display text-[16.5px] font-semibold">{a.title}</h2>
                  <p className="mt-2 text-[13px] leading-relaxed text-rim-muted">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20"><p className="eyebrow">All Projects</p></Reveal>
          <Reveal delay={60}><h2 className="h-section mt-3">Project index</h2></Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <Link href={`/research/${p.slug}`} className="card card-hover group flex h-full flex-col p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-rim-cyan"><ProjectIcon kind={p.icon} className="h-9 w-9" /></span>
                    <span className="font-mono text-[11px] tracking-[0.2em] text-rim-faint">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="mt-5 font-display text-[18px] font-semibold leading-snug transition-colors group-hover:text-rim-cyan">{p.title}</h3>
                  <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-rim-muted">{p.short}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-rim-cyan">
                    Explore <span className="transition-transform group-hover:translate-x-1.5">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
