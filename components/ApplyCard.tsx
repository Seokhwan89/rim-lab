import { site } from '@/content/site';

/** "How to apply" block — shown at the top of /opening and in the home page's Join Us section. */
export default function ApplyCard({ className = '' }: { className?: string }) {
  return (
    <div className={`card relative overflow-hidden border-rim-cyan/40 p-8 md:p-10 ${className}`}>
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-rim-cyan/15 blur-[80px]" aria-hidden />
      <div className="relative">
        <p className="eyebrow">Now recruiting</p>
        <h2 className="h-sub mt-3">How to apply</h2>
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-rim-text">
          Fill in the application form, or email Prof. Seokhwan Jeong with your CV and transcript.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={site.applyForm} target="_blank" rel="noreferrer" className="btn-primary">Application Form · 지원서 ↗</a>
          <a href={`mailto:${site.email}`} className="btn-ghost">{site.email}</a>
          <a href={`mailto:${site.labContact}?subject=Open%20lab%20meeting%20inquiry`} className="btn-ghost">
            Ask about the lab meeting ✉ {site.labContact}
          </a>
        </div>
        <p className="mt-6 max-w-3xl text-[13.5px] leading-relaxed text-rim-muted">
          Undergraduate internships are offered only to students seriously considering graduate study in RIM Lab
          and are selected individually; we do not host independent short-term visiting or summer research-experience internships.
          Our weekly open lab meeting is open to anyone without prior permission — email the lab manager to ask when
          the next one is, and come see what we build.
        </p>
      </div>
    </div>
  );
}
