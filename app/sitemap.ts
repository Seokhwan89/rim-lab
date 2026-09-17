import type { MetadataRoute } from 'next';
import { projects } from '@/content/projects';

const BASE = 'https://rim.sogang.ac.kr';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = ['', '/opening', '/team', '/advisor', '/research', '/news', '/publications', '/lectures'];
  return [
    ...staticPages.map((p) => ({ url: `${BASE}${p}`, lastModified: now, changeFrequency: 'weekly' as const, priority: p === '' ? 1 : 0.7 })),
    ...projects.map((p) => ({ url: `${BASE}/research/${p.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 })),
  ];
}
