import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { pi, staff, phd, ms, undergrad, alumni, groupPhoto, labGallery, equipment, type Member } from '@/content/team';

export const metadata: Metadata = { title: 'Team' };

function initials(name: string) {
  const parts = name.split(/[\s,]+/).filter(Boolean);
  return parts.slice(0, 2).map((p) => p[0]).join('').toUpperCase();
}

function MemberCard({ m, delay = 0 }: { m: Member; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <div className="card card-hover flex h-full items-start gap-4 p-5">
        {m.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={m.photo} alt={m.name} loading="lazy" className="h-20 w-20 shrink-0 rounded-full border border-rim-cyan/35 object-cover object-top" />
        ) : (
          <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-rim-cyan/35 bg-rim-cyan/10 font-display text-[15px] font-semibold text-rim-cyan">
            {initials(m.name)}
          </span>
        )}
        <div className="min-w-0">
          <p className="font-display text-[15.5px] font-semibold">{m.name}</p>
          {m.topic && <p className="mt-1 text-[13px] leading-snug text-rim-cyan/90">{m.topic}</p>}
          {m.background && <p className="mt-1 text-[12.5px] text-rim-muted">{m.background}</p>}
          {m.email && <a href={`mailto:${m.email}`} className="mt-1.5 block truncate font-mono text-[11.5px] text-rim-faint hover:text-rim-cyan">{m.email}</a>}
        </div>
      </div>
    </Reveal>
  );
}

function Section({ title, count, children }: { title: string; count?: number; children: React.ReactNode }) {
  return (
    <div className="mt-16 first:mt-0">
      <Reveal>
        <h2 className="h-sub flex items-baseline gap-3">
          {title}
          {typeof count === 'number' && <span className="font-mono text-[13px] text-rim-faint">{count}</span>}
        </h2>
      </Reveal>
      <div className="mt-6">{children}</div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title={<>The people who <span className="grad-cyan">build it</span></>}
        desc="Lab: RA313 · Sogang University. We design, machine, solder, and train — every member ships hardware that works in the real world."
      />
      {/* Group photo */}
      <section className="border-b border-rim-line bg-rim-bg">
        <div className="container-site py-10">
          <Reveal>
            <figure className="card overflow-hidden p-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={groupPhoto.src} alt={groupPhoto.caption} className="max-h-[520px] w-full object-cover" />
              <figcaption className="border-t border-rim-line px-5 py-3 font-mono text-[12px] uppercase tracking-[0.14em] text-rim-faint">
                {groupPhoto.caption}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="bg-rim-bg py-20">
        <div className="container-site">
          <Section title="Principal Investigator">
            <Reveal>
              <div className="card card-hover relative overflow-hidden p-8 md:flex md:items-center md:justify-between md:gap-8">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-rim-cyan/10 blur-[90px]" aria-hidden />
                <div className="relative flex items-center gap-6">
                  {pi.photo && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={pi.photo} alt={pi.name} className="h-24 w-24 shrink-0 rounded-2xl border border-rim-cyan/35 object-cover object-top" />
                  )}
                  <div>
                    <p className="font-display text-[24px] font-semibold">{pi.name}</p>
                    <p className="mt-1 text-[14.5px] text-rim-muted">{pi.role}</p>
                    <a href={`mailto:${pi.email}`} className="mt-2 block font-mono text-[13px] text-rim-cyan hover:underline">{pi.email}</a>
                  </div>
                </div>
                <Link href="/advisor" className="btn-ghost relative mt-6 md:mt-0">Full profile →</Link>
              </div>
            </Reveal>
          </Section>

          <Section title="Ph.D. & Integrated M.S./Ph.D." count={phd.length}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {phd.map((m, i) => <MemberCard key={m.name} m={m} delay={(i % 3) * 70} />)}
            </div>
          </Section>

          <Section title="M.S. Students" count={ms.length}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {ms.map((m, i) => <MemberCard key={m.name} m={m} delay={(i % 3) * 70} />)}
            </div>
          </Section>

          <Section title="Undergraduate Fellows" count={undergrad.length}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {undergrad.map((m, i) => <MemberCard key={m.name} m={m} delay={i * 70} />)}
            </div>
          </Section>

          <Section title="Staff">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {staff.map((m) => <MemberCard key={m.name} m={m} />)}
            </div>
          </Section>

          <Section title="Alumni" count={alumni.length}>
            <Reveal>
              <div className="card overflow-x-auto p-2">
                <table className="w-full min-w-[560px] text-[13.5px]">
                  <thead>
                    <tr className="border-b border-rim-line text-left font-mono text-[11px] uppercase tracking-[0.14em] text-rim-faint">
                      <th className="px-4 py-3">Name</th><th className="px-4 py-3">Degree</th><th className="px-4 py-3">Graduated</th><th className="px-4 py-3">Now at</th>
                    </tr>
                  </thead>
                  <tbody>
                    {alumni.map((a) => (
                      <tr key={a.name + a.date} className="border-b border-rim-line/60 transition-colors last:border-0 hover:bg-rim-cyan/5">
                        <td className="px-4 py-3 font-medium">
                          <span className="flex items-center gap-3">
                            {a.photo ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img src={a.photo} alt={a.name} loading="lazy" className="h-9 w-9 shrink-0 rounded-full border border-rim-line object-cover object-top" />
                            ) : (
                              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-rim-line font-mono text-[11px] text-rim-faint">{initials(a.name)}</span>
                            )}
                            {a.name}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-rim-muted">{a.degree}</td>
                        <td className="px-4 py-3 font-mono text-[12.5px] text-rim-faint">{a.date}</td>
                        <td className="px-4 py-3 text-rim-muted">{a.position ?? '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </Section>

          <Section title="Lab & Facilities" count={labGallery.length}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {labGallery.map((g, i) => (
                <Reveal key={g.src} delay={(i % 3) * 70}>
                  <figure className="card card-hover h-full overflow-hidden p-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={g.src} alt={g.caption} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                    <figcaption className="px-4 py-3 text-[12.5px] leading-snug text-rim-muted">{g.caption}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </Section>

          <Section title="Equipment" count={equipment.length}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {equipment.map((g, i) => (
                <Reveal key={g.src} delay={(i % 3) * 70}>
                  <figure className="card card-hover h-full overflow-hidden p-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={g.src} alt={g.caption} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                    <figcaption className="px-4 py-3 text-[12.5px] leading-snug text-rim-muted">{g.caption}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </Section>
        </div>
      </section>
    </>
  );
}
