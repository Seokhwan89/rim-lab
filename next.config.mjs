/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'i.ytimg.com' }],
  },
  async redirects() {
    return [
      // One canonical host: the Vercel alias serves the same pages, which Google reports as
      // "duplicate without user-selected canonical". Send it (and any preview alias) to the real domain.
      { source: '/:path*', has: [{ type: 'host', value: 'rim-lab.vercel.app' }], destination: 'https://rim.sogang.ac.kr/:path*', permanent: true },
      // Old-site URL scheme (Search Console 404 report, 2026-11-09): /research-projects/<slug> → /research/<slug>
      { source: '/research-projects', destination: '/research', permanent: true },
      { source: '/research-projects/overview', destination: '/research', permanent: true },
      { source: '/research-projects/factory-automation-harness-cable-assembly', destination: '/research/factory-automation', permanent: true },
      { source: '/research-projects/:slug', destination: '/research/:slug', permanent: true },
      { source: '/projects/:slug', destination: '/research/:slug', permanent: true },
      { source: '/research-statement', destination: '/advisor', permanent: true },
      { source: '/research-advisor', destination: '/advisor', permanent: true },
      { source: '/publications-0', destination: '/publications', permanent: true },
      // Legacy / guessed entry points that Googlebot and visitors keep requesting (404s in Search Console)
      { source: '/home', destination: '/', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/index.php', destination: '/', permanent: true },
      { source: '/main', destination: '/', permanent: true },
      { source: '/members', destination: '/team', permanent: true },
      { source: '/people', destination: '/team', permanent: true },
      { source: '/professor', destination: '/advisor', permanent: true },
      { source: '/publication', destination: '/publications', permanent: true },
      { source: '/papers', destination: '/publications', permanent: true },
      { source: '/projects', destination: '/research', permanent: true },
      { source: '/contact', destination: '/opening', permanent: true },
      { source: '/recruit', destination: '/opening', permanent: true },
      { source: '/recruiting', destination: '/opening', permanent: true },
    ];
  },
  async headers() {
    return [
      // Photos & figures: long browser cache (30 days). Replace a photo under a new
      // filename (or add ?v=) if it must change immediately.
      { source: '/images/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' }] },
      { source: '/logo/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' }] },
      // Lecture PDFs get revised under the same name → short cache (1 day)
      { source: '/lectures/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=3600' }] },
    ];
  },
};
export default nextConfig;
