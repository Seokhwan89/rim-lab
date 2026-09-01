export const site = {
  name: 'RIM Lab',
  fullName: 'Robotics & Intelligent Mechanisms Lab.',
  university: 'Sogang University',
  department: 'Department of Mechanical Engineering',
  tagline: 'Robotic hardware and physical intelligence for dexterous interaction with the real world.',
  email: 'seokhwan@sogang.ac.kr',
  phone: '+82-2-705-7886',
  address: 'RA313, Ricci Hall A, Sogang University, 35 Baekbeom-ro, Mapo-gu, Seoul, Korea',
  youtube: 'https://www.youtube.com/@rimlab.9158',
  scholar: 'https://scholar.google.com/citations?user=Vd9OOGIAAAAJ',
  applyForm: 'https://forms.gle/iL8kcczz2YYmdbne7',
  legacy: 'https://rim.sogang.ac.kr/',
};

export type NavItem = { id: string; label: string; href: string; sub?: { id: string; label: string; href: string }[] };

export const nav: NavItem[] = [
  { id: 'opening', label: 'Opening', href: '/opening' },
  { id: 'team', label: 'Team', href: '/team' },
  { id: 'advisor', label: 'Advisor', href: '/advisor' },
  {
    id: 'research',
    label: 'Research Projects',
    href: '/research',
    sub: [
      { id: 'overview', label: 'Overview', href: '/research' },
      { id: 'compact-variable-transmission', label: 'Compact Variable Transmission', href: '/research/compact-variable-transmission' },
      { id: 'robotic-hands', label: 'Robotic Hands', href: '/research/robotic-hands' },
      { id: 'ai-based-multifinger-grasping', label: 'AI-based Multifinger Grasping', href: '/research/ai-based-multifinger-grasping' },
      { id: 'magnetic-gear', label: 'Magnetic Gear', href: '/research/magnetic-gear' },
      { id: 'factory-automation', label: 'Factory Automation', href: '/research/factory-automation' },
      { id: 'surgical-robots', label: 'Surgical Robots', href: '/research/surgical-robots' },
      { id: 'lower-limb-exo', label: 'Lower Limb Exoskeleton', href: '/research/lower-limb-exo' },
      { id: 'hand-exoskeletons', label: 'Hand Exoskeletons', href: '/research/hand-exoskeletons' },
      { id: 'optical-compact-force-sensor', label: 'Optical Compact Force Sensor', href: '/research/optical-compact-force-sensor' },
    ],
  },
  { id: 'news', label: 'News', href: '/news' },
  { id: 'publications', label: 'Publications', href: '/publications' },
  { id: 'lectures', label: 'Lectures', href: '/lectures' },
];
