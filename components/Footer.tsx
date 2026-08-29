import Link from 'next/link';
import Image from 'next/image';
import { site, nav } from '@/content/site';

export default function Footer() {
  return (
    <footer className="border-t border-rim-line bg-[#03060f]">
      <div className="container-site grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo/rim-mark.png" alt="RIM Lab logo" width={44} height={44} className="h-11 w-11" />
            <div>
              <p className="font-display text-[17px] font-semibold tracking-wide">RIM LAB</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-rim-muted">Robotics &amp; Intelligent Mechanisms Lab.</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-[13.5px] leading-relaxed text-rim-muted">
            {site.department}, {site.university}<br />
            {site.address}
          </p>
          <p className="mt-3 font-mono text-[12.5px] text-rim-muted">
            <a href={`mailto:${site.email}`} className="hover:text-rim-cyan">{site.email}</a> · {site.phone}
          </p>
        </div>
        <div>
          <p className="eyebrow mb-4">Menu</p>
          <ul className="space-y-2 text-[13.5px] text-rim-muted">
            {nav.map((n) => <li key={n.id}><Link href={n.href} className="hover:text-rim-cyan">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Links</p>
          <ul className="space-y-2 text-[13.5px] text-rim-muted">
            <li><a href={site.youtube} target="_blank" rel="noreferrer" className="hover:text-rim-cyan">YouTube Channel ↗</a></li>
            <li><a href={site.scholar} target="_blank" rel="noreferrer" className="hover:text-rim-cyan">Google Scholar ↗</a></li>
            <li><a href="https://mech.sogang.ac.kr" target="_blank" rel="noreferrer" className="hover:text-rim-cyan">Sogang Mechanical Engineering ↗</a></li>
            <li><a href="https://www.sogang.ac.kr" target="_blank" rel="noreferrer" className="hover:text-rim-cyan">Sogang University ↗</a></li>
            <li><Link href="/opening" className="hover:text-rim-cyan">Join Us → Opening</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-rim-line py-5">
        <p className="container-site font-mono text-[11px] tracking-wide text-rim-faint">
          © {new Date().getFullYear()} Robotics and Intelligent Mechanisms Lab., Sogang University. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
