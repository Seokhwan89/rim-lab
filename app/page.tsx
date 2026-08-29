import Link from 'next/link';
import Reveal from '@/components/Reveal';
import HeroCanvas from '@/components/HeroCanvas';
import HeroVideo from '@/components/HeroVideo';
import LiteYouTube from '@/components/LiteYouTube';
import ProjectIcon from '@/components/ProjectIcon';
import { researchAreas, projects } from '@/content/projects';
import { featuredVideos, heroReel } from '@/content/videos';
import { news, categoryColors, type NewsCategory } from '@/content/news';
import { site } from '@/content/site';

const KEYWORDS = [
  'Robot Hands', 'Variable Transmission', 'Physical AI', 'Twisted String Actuation', 'Magnetic Gear',
  'Force Sensing', 'In-Hand Manipulation', 'Quasi-Direct Drive', 'Blind Grasping', 'Surgical Robotics',
  'Exoskeletons', 'Harness Assembly Automation',
];

const newsGroups: { label: string; cats: NewsCategory[] }[] = [
  { label: 'Announcements', cats: ['Announcement', 'Conference'] },
  { label: 'Research & Grants', cats: ['Grant', 'Publication'] },
  { label: 'Awards', cats: ['Award'] },
  { label: 'Members & Alumni', cats: ['Members', 'Lab Life'] },
];

export default function Home() {
  return (
    <>
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-rim-bg">
        <HeroCanvas className="absolute inset-0 h-full w-full" />
        <HeroVideo ids={heroReel} />
        <div className="hero-grid absolute inset-0" aria-hidden />
        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-rim-cyan/8 blur-[130px]" aria-hidden />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-rim-indigo/10 blur-[130px]" aria-hidden />

        <div className="container-site relative py-32">
          <p className="eyebrow rise rise-1">Sogang University · Mechanical Engineering</p>
          <h1 className="h-display rise rise-2 mt-5 max-w-4xl">
            Building the <span className="grad-cyan glow-text">hardware of</span><br />
            <span className="grad-cyan glow-text">physical intelligence</span>
          </h1>
          <p className="rise rise-3 mt-7 max-w-2xl text-[17px] leading-relaxed text-rim-muted">
            The Robotics &amp; Intelligent Mechanisms Lab develops core robotic hardware and physical
            intelligence for dexterous interaction with the real world — robot hands, grippers, compact
            high-performance actuators, variable transmissions, and proprioceptive, force-aware manipulation.
          </p>
          <div className="rise rise-4 mt-9 flex flex-wrap gap-3">
            <Link href="/research" className="btn-primary">Explore Research</Link>
            <Link href="/opening" className="btn-ghost">Join the Lab</Link>
          </div>
        </div>

        {/* keyword ticker */}
        <div className="absolute inset-x-0 bottom-0 border-t border-rim-line bg-[#040812]/70 py-3 backdrop-blur">
          <div className="flex overflow-hidden">
            <div className="marquee flex shrink-0 items-center gap-8 pr-8">
              {[...KEYWORDS, ...KEYWORDS].map((k, i) => (
                <span key={i} className="flex items-center gap-8 whitespace-nowrap font-mono text-[12px] uppercase tracking-[0.18em] text-rim-faint">
                  {k} <span className="text-rim-cyan/60">◆</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── Research areas ───────────────────── */}
      <section className="border-b border-rim-line bg-rim-bg2 py-24">
        <div className="container-site">
          <Reveal><p className="eyebrow">Research</p></Reveal>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <Reveal delay={60}><h2 className="h-section">What moves, grasps,<br className="hidden md:block" /> and understands force</h2></Reveal>
            <Reveal delay={120}><Link href="/research" className="font-mono text-[13px] uppercase tracking-[0.16em] text-rim-cyan hover:text-rim-cyanLight">All projects →</Link></Reveal>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {researchAreas.map((a, i) => (
              <Reveal key={a.title} delay={i * 90}>
                <Link href={`/research/${a.slugs[0]}`} className="card card-hover group block h-full p-7">
                  <span className="text-rim-cyan"><ProjectIcon kind={a.icon} className="h-11 w-11" /></span>
                  <h3 className="h-sub mt-5 group-hover:text-rim-cyan transition-colors">{a.title}</h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-rim-muted">{a.desc}</p>
                  <p className="mt-5 flex flex-wrap gap-1.5">
                    {a.slugs.map((s) => {
                      const p = projects.find((x) => x.slug === s);
                      return p ? <span key={s} className="chip border-rim-line text-rim-faint">{p.title.split(' — ')[0]}</span> : null;
                    })}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── Experiment videos ─────────────────── */}
      <section className="border-b border-rim-line bg-rim-bg py-24">
        <div className="container-site">
          <Reveal><p className="eyebrow">In Motion</p></Reveal>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <Reveal delay={60}><h2 className="h-section">Selected experiment videos</h2></Reveal>
            <Reveal delay={120}>
              <a href={site.youtube} target="_blank" rel="noreferrer" className="btn-ghost !px-4 !py-2 text-[13px]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M23 7.2a3 3 0 0 0-2.1-2.2C19 4.5 12 4.5 12 4.5s-7 0-8.9.5A3 3 0 0 0 1 7.2 32 32 0 0 0 .5 12 32 32 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.6 8.9.6 8.9.6s7 0 8.9-.6a3 3 0 0 0 2.1-2.1A32 32 0 0 0 23.5 12 32 32 0 0 0 23 7.2zM9.8 15.3V8.7l5.8 3.3-5.8 3.3z" /></svg>
                YouTube Channel
              </a>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {featuredVideos.map((v, i) => (
              <Reveal key={v.id} delay={(i % 4) * 80} className={i < 2 ? 'md:col-span-2 lg:col-span-2' : ''}>
                <div className="card card-hover group overflow-hidden p-0">
                  <LiteYouTube id={v.id} title={v.title} className="rounded-b-none" />
                  <div className="flex items-start justify-between gap-3 p-4">
                    <p className="line-clamp-2 text-[13.5px] font-medium leading-snug text-rim-text">{v.title}</p>
                    {v.tag && <span className="chip shrink-0 border-rim-cyan/40 bg-rim-cyan/10 text-rim-cyan">{v.tag}</span>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────── News hub ──────────────────────── */}
      <section className="border-b border-rim-line bg-rim-bg2 py-24">
        <div className="container-site">
          <Reveal><p className="eyebrow">Lab News</p></Reveal>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <Reveal delay={60}><h2 className="h-section">Latest from the lab</h2></Reveal>
            <Reveal delay={120}><Link href="/news" className="font-mono text-[13px] uppercase tracking-[0.16em] text-rim-cyan hover:text-rim-cyanLight">All news →</Link></Reveal>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {newsGroups.map((g, gi) => {
              const items = news.filter((n) => g.cats.includes(n.category)).slice(0, 4);
              const cover = items.find((n) => n.image);
              return (
                <Reveal key={g.label} delay={gi * 90}>
                  <div className={`card h-full overflow-hidden p-6 ${cover ? 'pt-0' : ''}`}>
                    {cover?.image && (
                      <Link href="/news" className="group -mx-6 mb-5 block overflow-hidden border-b border-rim-line">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={cover.image} alt={cover.title} loading="lazy" className="h-32 w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
                      </Link>
                    )}
                    <h3 className="font-display text-[15.5px] font-semibold uppercase tracking-wide text-rim-text">{g.label}</h3>
                    <div className="mt-4 space-y-4">
                      {items.map((n, i) => (
                        <Link key={i} href="/news" className="group block border-l-2 border-rim-line pl-3.5 transition-colors hover:border-rim-cyan">
                          <p className="font-mono text-[11px] text-rim-faint">{n.date}</p>
                          <p className="mt-0.5 line-clamp-2 text-[13.5px] leading-snug text-rim-muted transition-colors group-hover:text-rim-text">{n.title}</p>
                          <span className={`chip mt-1.5 ${categoryColors[n.category]}`}>{n.category}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────── Join us CTA ─────────────────────── */}
      <section className="relative overflow-hidden bg-rim-bg py-24">
        <div className="absolute left-1/2 top-0 h-64 w-[720px] -translate-x-1/2 rounded-full bg-rim-cyan/8 blur-[120px]" aria-hidden />
        <div className="container-site relative">
          <Reveal><p className="eyebrow">Join Us</p></Reveal>
          <Reveal delay={60}><h2 className="h-section mt-3">Build robots that touch the real world</h2></Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { title: 'Undergraduate Intern', desc: 'Short- and long-term research internships and URECA — start hands-on robotics as an undergrad.', href: '/opening#intern', label: 'Internship info' },
              { title: 'Undergraduate Fellow', desc: 'Ongoing undergraduate fellow positions for students who want to go deeper with a project of their own.', href: '/opening#fellow', label: 'Fellowship info' },
              { title: 'Graduate Program', desc: 'M.S., Ph.D., and integrated programs with full-funding tracks and industry-collaboration tracks.', href: '/opening#graduate', label: 'Apply to grad school' },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <Link href={c.href} className="card card-hover group flex h-full flex-col p-8">
                  <span className="font-mono text-[12px] tracking-[0.2em] text-rim-cyan">0{i + 1}</span>
                  <h3 className="h-sub mt-4 transition-colors group-hover:text-rim-cyan">{c.title}</h3>
                  <p className="mt-3 flex-1 text-[14px] leading-relaxed text-rim-muted">{c.desc}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-mono text-[12.5px] uppercase tracking-[0.14em] text-rim-cyan">
                    {c.label} <span className="transition-transform group-hover:translate-x-1.5">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={140}>
            <p className="mt-8 text-[14px] text-rim-muted">
              Weekly lab seminars are open to anyone — contact <a className="text-rim-cyan hover:underline" href="mailto:ryan8834@gmail.com">ryan8834@gmail.com</a> to sit in.
              Applications: <a className="text-rim-cyan hover:underline" href={site.applyForm} target="_blank" rel="noreferrer">application form ↗</a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
