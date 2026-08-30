import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { site } from '@/content/site';

export const metadata: Metadata = { title: 'Opening' };

const tracks = [
  {
    id: 'graduate',
    title: 'Graduate Program',
    chip: 'Priority',
    items: [
      'Integrated M.S./Ph.D. and Ph.D. programs (priority)',
      'M.S. program (considered when continuing toward a Ph.D.)',
      'ME Dept. 2027-1 admissions: closed · 2027-2: announced Dec 2026',
      'AI Graduate School: 3 positions for 2027-1,2 (AI Convergence Program — same lab, AI dept. affiliation)',
    ],
  },
  {
    id: 'intern',
    title: 'Undergraduate Intern',
    chip: 'Always open',
    items: [
      'Short-term and long-term research internships',
      'URECA undergraduate research program',
      'Participation before graduate admission is strongly encouraged',
    ],
  },
  {
    id: 'fellow',
    title: 'Undergraduate Fellow',
    chip: 'Ongoing',
    items: [
      'Ongoing recruitment of undergraduate research fellows',
      'Own a project — mechanical design, electronics, control, or AI',
    ],
  },
  {
    id: 'postdoc',
    title: 'Postdoctoral Researcher',
    chip: 'Inquiries welcome',
    items: [
      'Open to researchers in robotic actuation, mechanism design, or robot learning',
      'Positions are opened as projects allow — inquiries are welcome at any time',
      'Email seokhwan@sogang.ac.kr with a CV and a short research statement',
    ],
  },
  {
    id: 'kitech',
    title: 'Sogang–KITECH Joint Program',
    chip: 'Recruiting',
    items: [
      'Joint M.S./Ph.D. with the KITECH 3D-Printing Manufacturing Innovation Center',
      'Robot-arm-based large-scale metal 3D printing — equipment, process monitoring & control, AI print-quality prediction',
      'Research at KITECH (Ansan) · coursework at Sogang (Seoul)',
      'Contact seokhwan@sogang.ac.kr to apply',
    ],
  },
];

const funding: { name: string; desc: string; href?: string }[] = [
  { name: 'Full Funding Track', desc: 'Complete tuition coverage plus living expenses through government / industry research projects.' },
  { name: 'Albatross Fellowship', desc: '100% tuition for top 10% GPA.', href: 'https://gradsch.sogang.ac.kr/gradsch/gradsch04_3_2.html' },
  { name: 'Sogang Scholarship', desc: '70% tuition for GPA 3.7+.', href: 'https://gradsch.sogang.ac.kr/gradsch/gradsch04_3_2.html' },
  { name: 'External Graduates', desc: '50% tuition for 95th percentile and above.', href: 'https://gradsch.sogang.ac.kr/gradsch/gradsch04_3_2.html' },
  { name: 'Industry Collaboration Track', desc: 'Including the LG Electronics Smart Convergence Program.', href: 'https://me.sogang.ac.kr/v2/sub5_1.php' },
];

export default function OpeningPage() {
  return (
    <>
      <PageHero
        eyebrow="Opening"
        title={<>Ph.D. / M.S. / Undergraduate<br /><span className="grad-cyan">2026 – 2027 Openings</span></>}
        desc="We build high-performance robotic actuation hardware and the intelligent control that runs on it. If you want to design, machine, wire, and train robots with your own hands, this is your lab."
      />

      <section className="bg-rim-bg py-20">
        <div className="container-site">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {tracks.map((t, i) => (
              <Reveal key={t.id} delay={i * 90}>
                <div id={t.id} className="card card-hover h-full scroll-mt-28 p-8">
                  <span className="chip mb-3 inline-block border-rim-cyan/40 bg-rim-cyan/10 text-rim-cyan">{t.chip}</span>
                  <h2 className="h-sub">{t.title}</h2>
                  <ul className="mt-5 space-y-3">
                    {t.items.map((x) => (
                      <li key={x} className="flex gap-3 text-[14px] leading-relaxed text-rim-muted">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-rim-cyan" /> {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <p className="eyebrow">Financial Support</p>
            <h2 className="h-section mt-3">Funding &amp; scholarships</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {funding.map((f, i) => (
              <Reveal key={f.name} delay={i * 70}>
                <div className="card h-full p-6">
                  <h3 className="font-display text-[15px] font-semibold text-rim-cyan">{f.href ? <a href={f.href} target="_blank" rel="noreferrer" className="hover:underline">{f.name} ↗</a> : f.name}</h3>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-rim-muted">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <div className="card relative overflow-hidden p-8 md:p-10">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-rim-cyan/10 blur-[80px]" aria-hidden />
              <h2 className="h-sub">How to apply</h2>
              <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed text-rim-muted">
                Fill in the application form, or email Prof. Seokhwan Jeong with your CV and transcript.
                Our weekly open lab meeting is open to anyone without prior permission — email the lab manager to ask when
                the next one is, and come see what we build.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={site.applyForm} target="_blank" rel="noreferrer" className="btn-primary">Application Form ↗</a>
                <a href={`mailto:${site.email}`} className="btn-ghost">{site.email}</a>
                <a href="mailto:ryan8834@gmail.com?subject=Open%20lab%20meeting%20inquiry" className="btn-ghost">Ask about the lab meeting ✉ ryan8834@gmail.com</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
