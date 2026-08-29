'use client';
import { useEffect, useRef } from 'react';

/**
 * Animated hero backdrop: a drifting particle network (physical intelligence)
 * plus a glowing kinematic linkage — a four-bar mechanism and a flexing
 * two-link finger — nodding to the lab's variable-transmission research.
 */
export default function HeroCanvas({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext('2d'); if (!ctx) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let w = 0, h = 0, raf = 0, t = 0;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    type P = { x: number; y: number; vx: number; vy: number; r: number };
    let pts: P[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = w * DPR; canvas.height = h * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      const n = Math.min(90, Math.floor((w * h) / 16000));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.5 + 0.6,
      }));
    };
    resize();
    const ro = new ResizeObserver(resize); ro.observe(canvas);

    const CY = '34, 211, 238';

    const drawNetwork = () => {
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -20) p.x = w + 20; if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20; if (p.y > h + 20) p.y = -20;
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j];
          const dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
          if (d2 < 130 * 130) {
            const alpha = 0.10 * (1 - Math.sqrt(d2) / 130);
            ctx.strokeStyle = `rgba(${CY}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      for (const p of pts) {
        ctx.fillStyle = `rgba(${CY}, 0.5)`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      }
    };

    const joint = (x: number, y: number, r = 4.5, glow = true) => {
      if (glow) { ctx.shadowColor = `rgba(${CY}, 0.9)`; ctx.shadowBlur = 12; }
      ctx.fillStyle = '#0b1426';
      ctx.strokeStyle = `rgba(${CY}, 0.95)`;
      ctx.lineWidth = 1.8;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.shadowBlur = 0;
    };
    const link = (x1: number, y1: number, x2: number, y2: number, alpha = 0.9) => {
      ctx.strokeStyle = `rgba(${CY}, ${alpha})`;
      ctx.lineWidth = 2.4;
      ctx.shadowColor = `rgba(${CY}, 0.55)`; ctx.shadowBlur = 8;
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
      ctx.shadowBlur = 0;
    };

    /** four-bar linkage: crank–coupler–rocker on a fixed base */
    const drawFourBar = (ox: number, oy: number, s: number, phase: number) => {
      const g = 3.4 * s, cr = 1.0 * s, cp = 3.0 * s, rk = 2.2 * s;
      const th = phase;
      const ax = ox + cr * Math.cos(th), ay = oy + cr * Math.sin(th);
      const bx0 = ox + g, by0 = oy;
      const dx = bx0 - ax, dy = by0 - ay;
      const d = Math.hypot(dx, dy);
      const aAng = Math.atan2(dy, dx);
      const cos = Math.min(1, Math.max(-1, (cp * cp + d * d - rk * rk) / (2 * cp * d)));
      const off = Math.acos(cos);
      const cx = ax + cp * Math.cos(aAng - off), cyy = ay + cp * Math.sin(aAng - off);
      ctx.strokeStyle = `rgba(${CY}, 0.35)`; ctx.lineWidth = 1.2;
      ctx.setLineDash([4, 6]);
      ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(bx0, by0); ctx.stroke();
      ctx.setLineDash([]);
      link(ox, oy, ax, ay); link(ax, ay, cx, cyy); link(cx, cyy, bx0, by0);
      joint(ox, oy, 5); joint(bx0, by0, 5); joint(ax, ay, 4); joint(cx, cyy, 4);
    };

    /** two-link finger flexing towards an object */
    const drawFinger = (ox: number, oy: number, s: number, phase: number) => {
      const bend = (Math.sin(phase) + 1) / 2; // 0..1
      const a1 = -0.35 - bend * 0.85;
      const a2 = a1 - 0.5 - bend * 0.9;
      const l1 = 3.2 * s, l2 = 2.6 * s;
      const x1 = ox + l1 * Math.cos(a1), y1 = oy + l1 * Math.sin(a1);
      const x2 = x1 + l2 * Math.cos(a2), y2 = y1 + l2 * Math.sin(a2);
      link(ox, oy, x1, y1, 0.75); link(x1, y1, x2, y2, 0.75);
      joint(ox, oy, 5); joint(x1, y1, 4); joint(x2, y2, 3.2);
      const obx = ox + 1.1 * s, oby = oy - 3.4 * s;
      ctx.strokeStyle = `rgba(129, 140, 248, ${0.35 + bend * 0.45})`;
      ctx.lineWidth = 1.6;
      ctx.beginPath(); ctx.arc(obx, oby, 1.15 * s, 0, Math.PI * 2); ctx.stroke();
    };

    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      drawNetwork();
      if (w > 640) {
        const s = Math.min(w, 1280) / 48;
        drawFourBar(w * 0.795, h * 0.62, s * 0.9, t * 0.02);
        drawFinger(w * 0.62, h * 0.72, s * 0.62, t * 0.016);
      }
      t += 1;
      raf = requestAnimationFrame(frame);
    };

    if (reduced) { drawNetwork(); }
    else { raf = requestAnimationFrame(frame); }

    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return <canvas ref={ref} className={`pointer-events-none ${className}`} aria-hidden />;
}
