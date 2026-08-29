/**
 * Full-bleed muted YouTube backdrop for the landing hero.
 * Autoplays, loops through the given reel, sized to cover the section (16:9).
 * Sits behind a dark overlay so the headline stays readable; the canvas
 * animation underneath acts as the fallback while the stream loads.
 */
export default function HeroVideo({ ids }: { ids: string[] }) {
  const src =
    `https://www.youtube-nocookie.com/embed/${ids[0]}` +
    `?autoplay=1&mute=1&controls=0&loop=1&playlist=${ids.join(',')}` +
    `&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0`;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <iframe
        className="absolute left-1/2 top-1/2 h-[max(100%,56.25vw)] w-[max(100%,177.78vh)] -translate-x-1/2 -translate-y-1/2"
        src={src}
        title="RIM Lab research reel"
        allow="autoplay; encrypted-media"
        tabIndex={-1}
      />
      {/* darken + blend into the navy theme */}
      <div className="absolute inset-0 bg-[#040812]/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#040812]/70 via-transparent to-[#040812]" />
    </div>
  );
}
