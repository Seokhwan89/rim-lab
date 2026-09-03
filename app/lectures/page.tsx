import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { courses, lectureNotice } from '@/content/lectures';

export const metadata: Metadata = { title: 'Lectures' };

function fmtDate(d: string) {
  return new Date(d + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function LecturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Lectures"
        title={<>Course materials, <span className="grad-cyan">openly shared</span></>}
        desc="Slides from courses taught by Prof. Seokhwan Jeong at Sogang University. Materials for each session are posted here right before the lecture. Homework must be submitted on Cybercampus — and check Cybercampus regularly for course announcements."
      />
      <section className="bg-rim-bg py-20">
        <div className="container-site space-y-12">
          {courses.map((c, ci) => (
            <Reveal key={c.id} delay={ci * 80}>
              <div className="card overflow-hidden p-0">
                {/* Course header */}
                <div className="border-b border-rim-line bg-gradient-to-r from-rim-cyan/[0.07] to-transparent px-7 py-6 md:px-9">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="chip border-rim-cyan/40 bg-rim-cyan/10 text-rim-cyan">{c.semester}</span>
                    <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-rim-faint">{c.code} · {c.level}</span>
                    {c.active && (
                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-rim-cyan">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-rim-cyan" /> In progress
                      </span>
                    )}
                  </div>
                  <h2 className="mt-3 font-display text-[26px] font-semibold">{c.title}</h2>
                  <p className="mt-2 max-w-3xl text-[14px] leading-relaxed text-rim-muted">{c.desc}</p>
                  {c.ta && (
                    <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.14em] text-rim-faint">
                      TA — <span className="text-rim-text normal-case tracking-normal">{c.ta.name}</span>
                      {c.ta.email && (
                        <>
                          {' · '}
                          <a href={`mailto:${c.ta.email}`} className="lowercase tracking-normal text-rim-cyan hover:underline">{c.ta.email}</a>
                        </>
                      )}
                    </p>
                  )}
                </div>

                {/* Lecture rows */}
                <ul className="divide-y divide-rim-line/60">
                  {[...c.lectures].sort((a, b) => b.no - a.no).map((l) => (
                    <li key={l.no}>
                      <a
                        href={l.file}
                        download
                        className="group flex items-center gap-4 px-7 py-4 transition-colors hover:bg-rim-cyan/5 md:px-9"
                      >
                        <span className="w-10 shrink-0 font-mono text-[13px] tracking-[0.12em] text-rim-faint">
                          {String(l.no).padStart(2, '0')}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-[15px] font-medium transition-colors group-hover:text-rim-cyan">{l.title}</span>
                          <span className="mt-0.5 block font-mono text-[11.5px] text-rim-faint">
                            {fmtDate(l.date)}
                            {l.pages ? ` · ${l.pages} pages` : ''}
                            {l.size ? ` · ${l.size}` : ''}
                          </span>
                        </span>
                        <span className="btn-ghost shrink-0 !px-4 !py-2 text-[12.5px]">PDF ↓</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          <Reveal>
            <p className="text-[12.5px] leading-relaxed text-rim-faint">{lectureNotice}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
