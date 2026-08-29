export default function PageHero({ eyebrow, title, desc }: { eyebrow: string; title: React.ReactNode; desc?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-rim-line bg-rim-bg2">
      <div className="hero-grid absolute inset-0" aria-hidden />
      <div className="absolute -top-24 right-[8%] h-72 w-72 rounded-full bg-rim-cyan/10 blur-[110px]" aria-hidden />
      <div className="container-site relative pb-14 pt-[130px] md:pb-20 md:pt-[160px]">
        <p className="eyebrow rise rise-1">{eyebrow}</p>
        <h1 className="h-display rise rise-2 mt-3">{title}</h1>
        {desc && <p className="rise rise-3 mt-5 max-w-2xl text-[16px] leading-relaxed text-rim-muted">{desc}</p>}
      </div>
    </section>
  );
}
