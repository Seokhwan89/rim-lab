export type Patent = {
  /** English title (original Korean title kept alongside for KR filings) */
  title: string;
  titleKo?: string;
  /** Representative application/registration numbers with jurisdictions */
  numbers: string;
  /** Year of the earliest filing in the family */
  year: number;
  status: 'registered' | 'filed';
  assignee: string;
  /** Related research project slug (content/projects.ts) */
  project?: string;
  note?: string;
  /** Public patent-document page (Google Patents) */
  link?: string;
  /** Representative drawing (path under /public) */
  image?: string;
};

/** Patent families, newest first. Same-invention filings in multiple countries are grouped as one entry. */
export const patents: Patent[] = [
  {
    title: 'Multi-DOF robotic gripper using a direct-drive differential mechanism',
    titleKo: '직구동 차동 메커니즘을 이용한 다자유도 로봇 그리퍼',
    numbers: 'KR 10-2026-0005274 · PCT/KR2026/005769',
    year: 2026,
    status: 'filed',
    assignee: 'Sogang University',
    project: 'robotic-hands',
  },
  {
    title: 'Quasi-direct-drive robot hand actuation with a nonlinear elastic mechanism and its control',
    titleKo: '비선형 탄성 메커니즘을 포함하는 준직구동 기반 로봇 핸드 구동장치 및 그 제어방법',
    numbers: 'KR 10-2026-0075758 · KR 10-2025-0097452 · US 19/741,259 · JP 2026-174560 · DE 10 2026 130 079',
    year: 2025,
    status: 'filed',
    assignee: 'Sogang University',
    project: 'robotic-hands',
    note: 'US, JP and DE filings completed 2026.08',
  },
  {
    title: 'Robot grasp control based on uniaxial force sensing',
    titleKo: '단축 힘 센서 기반의 로봇 파지 제어 방법 및 그 장치',
    numbers: 'KR 10-2026-0014600',
    year: 2026,
    status: 'filed',
    assignee: 'Sogang University',
    project: 'ai-based-multifinger-grasping',
  },
  {
    title: 'Flexible robot hand design method (CMC-joint robot hand)',
    titleKo: '유연한 로봇핸드 설계 방법 · 수근중수관절 기반 로봇핸드',
    numbers: 'KR 10-2025-0097414 · KR 10-2026-0118232',
    year: 2025,
    status: 'filed',
    assignee: 'Sogang University',
    project: 'robotic-hands',
    note: 'Domestic-priority follow-up filed 2026.06',
  },
  {
    title: 'Actively variable stiffness and transmission mechanism based on a 4-bar linkage for robots',
    titleKo: '능동 가변 강성 및 변속 메커니즘이 적용된 로봇',
    numbers: 'US 19/265,263 · KR 10-2025-0053062 · KR 10-2024-0094442 (legged robot)',
    year: 2024,
    status: 'filed',
    assignee: 'Sogang University',
    project: 'compact-variable-transmission',
  },
  {
    title: 'Hybrid transmission combining magnetic and mechanical gears',
    titleKo: '마그네틱기어와 기계식기어의 하이브리드 변속기',
    numbers: 'KR 10-2025-0025130',
    year: 2025,
    status: 'filed',
    assignee: 'Sogang University · Yeungnam University',
    project: 'magnetic-gear',
  },
  {
    title: 'Automated assembly system for harness cables',
    titleKo: '하네스 케이블 자동 조립시스템 (조립·정렬·피딩·터미널 결합·웨이빙)',
    numbers: 'KR 10-2024-0072703 / -0072705 / -0072707 / -0072709 / -0072710',
    year: 2024,
    status: 'registered',
    assignee: 'Daeha Wire & Cable · Sogang University',
    project: 'factory-automation',
    note: 'Five patents registered 2024.12',
    link: 'https://patents.google.com/patent/KR102744921B1',
  },
  {
    title: 'End-effector exchange system',
    titleKo: '엔드 이펙터 교환 시스템',
    numbers: 'KR 10-2024-0038169',
    year: 2024,
    status: 'filed',
    assignee: 'Sogang University',
    project: 'magnetic-gear',
  },
  {
    title: 'Robot hand',
    titleKo: '로봇용 핸드',
    numbers: 'KR 10-2023-0181022',
    year: 2023,
    status: 'registered',
    assignee: 'Sogang University · Yujin MS',
    project: 'robotic-hands',
    note: 'Registered 2026.02',
    link: 'https://patents.google.com/patent/KR102927194B1',
    image: '/images/patents/robot-hand-cvt-finger.jpg',
  },
  {
    title: 'Lower-limb force assistance device',
    titleKo: '하지 근력 보조 장치',
    numbers: 'KR 10-2023-0152159',
    year: 2023,
    status: 'registered',
    assignee: 'Sogang University · Sejong University · National Rehabilitation Center',
    project: 'lower-limb-exo',
    note: 'Registered 2025.05',
    image: '/images/patents/lower-limb-assist.jpg',
  },
  {
    title: 'Control system and method for a coaxial magnetic gear-based drive module',
    titleKo: '동축 자석기어 기반 구동모듈의 제어 시스템 및 그 제어 방법',
    numbers: 'KR 10-2023-0059085',
    year: 2023,
    status: 'registered',
    assignee: 'Sogang University',
    project: 'magnetic-gear',
    note: 'Registered 2025.01',
    link: 'https://patents.google.com/patent/KR102755860B1',
    image: '/images/patents/coaxial-magnetic-gear-module.jpg',
  },
  {
    title: 'Magnet transmission',
    titleKo: '마그넷 변속기',
    numbers: 'KR 10-2022-0063534',
    year: 2022,
    status: 'filed',
    assignee: 'Sogang University',
    project: 'magnetic-gear',
  },
  {
    title: 'Transmission using magnetic gears',
    titleKo: '자석 기어를 활용한 변속기',
    numbers: 'KR 10-2021-0155810',
    year: 2021,
    status: 'filed',
    assignee: 'Sogang University',
    project: 'magnetic-gear',
  },
  {
    title: 'Multi-DOF bending and bend-length control of a coaxially aligned robotically steerable guidewire (COAST)',
    numbers: 'JP 7798789 · CN 115916317A · US 17/919,763 · EP 21793176.5 · CA/AU/KR/PCT family',
    year: 2021,
    status: 'registered',
    assignee: 'Georgia Tech Research Corp.',
    project: 'surgical-robots',
    note: 'Registered in JP (2026) and CN (2025); allowed in the US and accepted in AU (2026); continuation and DE/JP counterparts filed in 2026',
    link: 'https://patents.google.com/patent/JP7798789B2',
  },
  {
    title: 'Steerable and flexible robotic endoscopic tools for minimally invasive procedures',
    numbers: 'US 17/433,165 · US 19/196,285 · JP 2021-553091 · EP/CA/PCT family',
    year: 2020,
    status: 'registered',
    assignee: "Georgia Tech Research Corp. · Children's Healthcare of Atlanta",
    project: 'surgical-robots',
    note: 'Registered in US (2025, 2026) and JP (2025)',
    link: 'https://patents.google.com/patent/US12318067B2',
  },
  {
    title: 'Voice-activated, compact, and portable robotic system',
    numbers: 'US 17/433,367 · US 18/924,569 · JP 2021-553114 · EP/CA/PCT family',
    year: 2020,
    status: 'registered',
    assignee: 'Georgia Tech Research Corp.',
    project: 'hand-exoskeletons',
    note: 'Registered in US (2024, 2026) and JP (2024)',
    link: 'https://patents.google.com/patent/US12179356B2',
  },
  {
    title: 'Dual-mode transmission mechanism based on twisted string actuation',
    titleKo: '줄 꼬임 기반의 듀얼 모드 트랜스미션 메커니즘',
    numbers: 'US 15/806,466 · EP 17200917.7 · KR 10-2017-0032997 · PCT/KR2017/012387',
    year: 2017,
    status: 'registered',
    assignee: 'KAIST',
    project: 'compact-variable-transmission',
    note: 'Registered in US (2019), EP (2021), KR (2018)',
    link: 'https://patents.google.com/patent/US10480590B2',
  },
  {
    title: 'Dual-mode actively variable twisted string actuator and robotic finger',
    titleKo: '듀얼모드 능동변속줄꼬임 액츄에이터 및 이를 구비한 로봇 핑거',
    numbers: 'KR 10-2014-0180017',
    year: 2014,
    status: 'registered',
    assignee: 'KAIST',
    project: 'compact-variable-transmission',
    note: 'Registered 2016.10',
    link: 'https://patents.google.com/patent/KR101664622B1',
  },
];

export const patentsByProject = (slug: string) => patents.filter((p) => p.project === slug);
