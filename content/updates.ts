// Site-wide update log shown as "Latest Updates" on the home hero (top 5).
// Add one line here whenever any content goes up — a news item, paper, patent,
// YouTube video, lecture, team change, etc. Newest first; date = day it went live.

export type UpdateKind = 'News' | 'Publication' | 'Patent' | 'Video' | 'Lecture' | 'Team' | 'Award' | 'Service';

export type UpdateItem = {
  date: string; // YYYY.MM.DD
  kind: UpdateKind;
  title: string;
  /** Site path (or external URL) the entry links to */
  href: string;
};

export const updates: UpdateItem[] = [
  { date: '2026.09.25', kind: 'Video', title: 'New video: Zero-shot sim-to-real grasping with the direct-drive gripper', href: '/research/ai-based-multifinger-grasping' },
  { date: '2026.09.25', kind: 'Publication', title: 'Preprint: Simple Torque-Observation Alignment for Zero-Shot Sim-to-Real Grasping', href: '/publications' },
  { date: '2026.09.25', kind: 'Award', title: 'Ginwoo Pyo selected for NRF Ph.D. Research Fellowship', href: '/news#2026-09-ginwoo-pyo-selected-for-nrf-ph-d-research-fellowship' },
  { date: '2026.09.25', kind: 'Patent', title: 'COAST steerable guidewire patent granted in the US (US 12,752,086)', href: '/publications' },
  { date: '2026.09.25', kind: 'Service', title: 'Prof. Jeong named Associate Editor for IEEE ICRA 2027', href: '/advisor' },
  { date: '2026.09.25', kind: 'Video', title: 'All lab YouTube videos now on their research project pages', href: '/research' },
  { date: '2026.09.23', kind: 'Publication', title: 'Harness assembly paper published in IEEE T-ASE', href: '/news#2026-09-harness-assembly-paper-published-in-ieee-t-ase' },
  { date: '2026.09.22', kind: 'Lecture', title: 'MEE1006 C Programming — Week 4-2 slides', href: '/lectures' },
  { date: '2026.09.18', kind: 'Patent', title: 'US continuation filed for the COAST guidewire patent family', href: '/publications' },
  { date: '2026.09.16', kind: 'Lecture', title: 'MEE4033 Mechatronics — Lecture 5 slides', href: '/lectures' },
  { date: '2026.09.13', kind: 'Patent', title: 'COAST steerable guidewire patent granted in Australia', href: '/publications' },
  { date: '2026.09.10', kind: 'Lecture', title: 'MEE4033 Mechatronics — Lecture 4 slides', href: '/lectures' },
  { date: '2026.09.09', kind: 'Team', title: 'Gyungseo Choi joins as an undergraduate fellow', href: '/team' },
];

export const updateColors: Record<UpdateKind, string> = {
  News: 'text-cyan-300 border-cyan-300/40 bg-cyan-300/10',
  Publication: 'text-violet-300 border-violet-300/40 bg-violet-300/10',
  Patent: 'text-emerald-300 border-emerald-300/40 bg-emerald-300/10',
  Video: 'text-rose-300 border-rose-300/40 bg-rose-300/10',
  Lecture: 'text-sky-300 border-sky-300/40 bg-sky-300/10',
  Team: 'text-slate-300 border-slate-300/40 bg-slate-300/10',
  Award: 'text-amber-300 border-amber-300/40 bg-amber-300/10',
  Service: 'text-teal-300 border-teal-300/40 bg-teal-300/10',
};
