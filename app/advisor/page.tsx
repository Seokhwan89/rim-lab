import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { advisor } from '@/content/advisor';

export const metadata: Metadata = { title: 'Advisor' };

function Timeline({ title, rows }: { title: string; rows: { period: string; text: string }[] }) {
  return (
    <Reveal>
      <div className="card h-full p-7">
        <h2 className="h-sub text-rim-cyan">{title}</h2>
        <ul className="mt-6 space-y-5">
          {rows.map((r, i) => (
            <li key={i} className="relative border-l border-rim-line pl-5">
              <span className="absolute -left-[4.5px] top-[7px] h-2 w-2 rounded-full bg-rim-cyan shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              <p className="font-mono text-[11.5px] uppercase tracking-[0.12em] text-rim-faint">{r.period}</p>
              <p className="mt-1 text-[14px] leading-relaxed text-rim-muted">{r.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function AdvisorPage() {
  return (
    <>
      <PageHero
        eyebrow="Advisor"
        title={<>{advisor.name.replace(', Ph.D.', '')}<span className="grad-cyan">, Ph.D.</span></>}
        desc={advisor.title}
      />
      <section className="bg-rim-bg py-20">
        <div className="container-site">
          <Reveal>
            <div className="card p-7 md:flex md:items-start md:gap-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={advisor.photo}
                alt={advisor.name}
                className="mx-auto mb-6 w-56 max-w-full shrink-0 rounded-2xl border border-rim-cyan/35 sm:w-64 md:mx-0 md:mb-0 md:w-72"
              />
              <div className="md:flex-1">
                <p className="eyebrow">Research Interests</p>
                <p className="mt-3 flex flex-wrap gap-2">
                  {advisor.interests.map((x) => <span key={x} className="chip border-rim-cyan/40 bg-rim-cyan/10 text-rim-cyan !normal-case !text-[12.5px] !font-sans !tracking-normal">{x}</span>)}
                </p>
              </div>
              <div className="mt-8 shrink-0 md:mt-0 md:self-end md:text-right">
                <a href={`mailto:${advisor.email}`} className="block font-mono text-[13px] text-rim-cyan hover:underline">{advisor.email}</a>
                <p className="mt-1 font-mono text-[13px] text-rim-muted">{advisor.phone}</p>
                <p className="mt-1 text-[12.5px] text-rim-faint">{advisor.office}</p>
              </div>
            </div>
          </Reveal>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <Timeline title="Education" rows={advisor.education} />
            <Timeline title="Career" rows={advisor.career} />
            <Timeline title="Editorial & Academic Service" rows={advisor.editorial} />
            <Timeline title="Selected Honors" rows={advisor.honors} />
          </div>
        </div>
      </section>
    </>
  );
}
