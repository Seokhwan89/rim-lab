'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { nav } from '@/content/site';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // mobile menu
  const [drop, setDrop] = useState<string | null>(null); // desktop dropdown
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 10);
    f(); window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  useEffect(() => { setOpen(false); setDrop(null); }, [pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled || drop || open ? 'border-rim-line bg-[#050a16]/92 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.5)]' : 'border-transparent bg-gradient-to-b from-[#050a16]/90 to-transparent'}`}>
      <div className="h-[2px] bg-gradient-to-r from-transparent via-rim-cyan to-transparent opacity-70" />
      <div className="container-site flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="RIM Lab home">
          <Image src="/logo/rim-mark.png" alt="RIM Lab logo" width={40} height={40} priority className="h-10 w-10" />
          <span className="leading-tight">
            <span className="block font-display text-[17px] font-semibold tracking-wide">RIM LAB</span>
            <span className="block font-mono text-[9.5px] uppercase tracking-[0.14em] text-rim-muted">Robotics &amp; Intelligent Mechanisms</span>
          </span>
        </Link>

        <nav className="hidden h-full items-center lg:flex" aria-label="Main">
          {nav.map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <div key={item.id} className="relative h-full" onMouseEnter={() => setDrop(item.sub ? item.id : null)} onMouseLeave={() => setDrop(null)}>
                <Link
                  href={item.href}
                  className={`relative flex h-full items-center px-[16px] text-[15px] font-medium transition-colors hover:text-rim-cyan after:absolute after:bottom-0 after:left-[16px] after:right-[16px] after:h-[2px] after:origin-left after:bg-rim-cyan after:transition-transform ${active ? 'text-rim-cyan after:scale-x-100' : 'text-rim-text after:scale-x-0 hover:after:scale-x-100'}`}
                >
                  {item.label}
                  {item.sub && <svg className={`ml-1.5 transition-transform ${drop === item.id ? 'rotate-180' : ''}`} width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M6 9l6 6 6-6" /></svg>}
                </Link>
                {item.sub && (
                  <div className={`absolute left-0 top-full w-[300px] overflow-hidden rounded-b-xl border border-rim-line bg-[#0a1324]/97 backdrop-blur-xl shadow-[0_24px_60px_rgba(0,0,0,0.6)] transition-all duration-200 ${drop === item.id ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'}`}>
                    <ul className="py-2">
                      {item.sub.map((s) => (
                        <li key={s.id}>
                          <Link href={s.href} className={`block px-5 py-2.5 text-[13.5px] transition-colors hover:bg-rim-cyan/10 hover:text-rim-cyan ${pathname === s.href ? 'text-rim-cyan' : 'text-rim-muted'}`}>
                            {s.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <button onClick={() => setOpen(!open)} className="p-2 text-rim-text lg:hidden" aria-label="Menu" aria-expanded={open}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 7h18M3 12h18M3 17h18" />}</svg>
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-74px)] overflow-y-auto border-t border-rim-line bg-[#070f1e] lg:hidden">
          {nav.map((item) => (
            <div key={item.id} className="border-b border-rim-line">
              {item.sub ? (
                <>
                  <button className="flex w-full items-center justify-between px-5 py-4 text-left text-[15.5px] font-medium" onClick={() => setMobileSub(mobileSub === item.id ? null : item.id)} aria-expanded={mobileSub === item.id}>
                    {item.label}
                    <span className={`text-rim-muted transition-transform ${mobileSub === item.id ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  {mobileSub === item.id && (
                    <ul className="bg-rim-surface pb-2">
                      {item.sub.map((s) => <li key={s.id}><Link href={s.href} className="block px-8 py-2.5 text-[14px] text-rim-muted">{s.label}</Link></li>)}
                    </ul>
                  )}
                </>
              ) : (
                <Link href={item.href} className="block px-5 py-4 text-[15.5px] font-medium">{item.label}</Link>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
