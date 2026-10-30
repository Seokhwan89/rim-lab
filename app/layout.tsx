import type { Metadata } from 'next';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/600.css';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://rim.sogang.ac.kr'),
  title: {
    default: 'RIM Lab — Robotics & Intelligent Mechanisms Lab, Sogang University',
    template: '%s | RIM Lab, Sogang University',
  },
  description:
    'Robotics and Intelligent Mechanisms Lab at Sogang University. We develop core robotic hardware and physical intelligence — robot hands, grippers, compact high-performance actuators, variable transmissions, and force-aware manipulation.',
  keywords: ['robotics', 'physical AI', 'robot hand', 'gripper', 'variable transmission', 'magnetic gear', 'Sogang University', 'RIM Lab'],
  icons: { icon: '/logo/favicon.png' },
  openGraph: {
    title: 'RIM Lab — Robotics & Intelligent Mechanisms Lab',
    description: 'Robotic hardware and physical intelligence for dexterous interaction with the real world.',
    type: 'website',
    siteName: 'RIM Lab, Sogang University',
    url: 'https://rim.sogang.ac.kr',
    locale: 'en_US',
    images: [
      {
        url: '/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'RIM Lab — Robotics & Intelligent Mechanisms Lab, Sogang University',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RIM Lab — Robotics & Intelligent Mechanisms Lab',
    description: 'Robotic hardware and physical intelligence for dexterous interaction with the real world.',
    images: ['/og-cover.jpg'],
  },
};

// Structured data so search engines and AI answer engines identify the lab unambiguously.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ResearchOrganization',
  name: 'RIM Lab — Robotics and Intelligent Mechanisms Lab',
  alternateName: 'RIM Lab, Sogang University',
  url: 'https://rim.sogang.ac.kr',
  logo: 'https://rim.sogang.ac.kr/logo/rim-mark.png',
  parentOrganization: { '@type': 'CollegeOrUniversity', name: 'Sogang University', url: 'https://www.sogang.ac.kr' },
  department: { '@type': 'Organization', name: 'Department of Mechanical Engineering, Sogang University', url: 'https://me.sogang.ac.kr' },
  founder: { '@type': 'Person', name: 'Seokhwan Jeong', jobTitle: 'Associate Professor', url: 'https://rim.sogang.ac.kr/advisor' },
  address: { '@type': 'PostalAddress', addressLocality: 'Seoul', addressCountry: 'KR' },
  knowsAbout: ['robot hands', 'robotic grippers', 'direct-drive actuation', 'tendon-driven mechanisms', 'variable transmissions', 'magnetic gears', 'force sensing', 'physical AI', 'robotic grasping'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
      </head>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        {/* Cookieless visitor counting (Vercel Web Analytics). Dashboard: project → Analytics. */}
        <Analytics />
      </body>
    </html>
  );
}
