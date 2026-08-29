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
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
