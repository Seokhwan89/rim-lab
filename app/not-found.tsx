import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-rim-bg pt-24">
      <div className="container-site text-center">
        <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-rim-cyan">404</p>
        <h1 className="h-display mt-4">Page not found</h1>
        <p className="mt-4 text-rim-muted">The mechanism you were looking for has been decoupled.</p>
        <Link href="/" className="btn-primary mt-8">Back to home</Link>
      </div>
    </section>
  );
}
