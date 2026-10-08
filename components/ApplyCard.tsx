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
          Apply through the application form — every submission is reviewed, so please do not send applications by email.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={site.applyForm} target="_blank" rel="noreferrer" className="btn-primary">Application Form · 지원서 ↗</a>
          <a href={`mailto:${site.labContact}?subject=Open%20lab%20meeting%20inquiry`} className="btn-ghost">
            Lab meeting inquiries · Lab manager {site.labManager} ✉ {site.labContact}
          </a>
        </div>
        <p className="mt-6 max-w-3xl text-[13.5px] leading-relaxed text-rim-muted">
          Applications sent by email can easily be missed, so please use the Application Form above. Only if special
          circumstances prevent you from using the form, email Prof. Seokhwan Jeong ({site.email}) and briefly explain why.
        </p>
        <p className="mt-3 max-w-3xl text-[13.5px] leading-relaxed text-rim-muted">
          Undergraduate internships are open to students who hope to join RIM Lab for graduate study or who want to
          explore graduate study here, and are arranged individually; requests made only for general research experience
          (including another university’s internship requirement) are not accepted.
          Our weekly open lab meeting is open to anyone without prior permission — email the lab manager to ask when
          the next one is, and come see what we build.
        </p>
      </div>
    </div>
  );
}
