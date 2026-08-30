export type Member = {
  name: string;
  role?: string;
  topic?: string;
  background?: string;
  email?: string;
  /** Optional portrait (path under /public), e.g. '/images/team/name.jpg' */
  photo?: string;
};

export type Alum = { name: string; degree: string; date: string; position?: string; photo?: string };

export const pi: Member = {
  name: 'Seokhwan Jeong',
  role: 'Principal Investigator · Associate Professor',
  email: 'seokhwan@sogang.ac.kr',
  photo: '/images/team/seokhwan-jeong.jpg',
};

/** Group photo shown at the top of the Team page */
export const groupPhoto = {
  src: '/images/lab/group-photo.jpg',
  caption: 'RIM Lab members in the renovated lab space (RA313), 2025',
};

/** Lab & facilities gallery */
export const labGallery: { src: string; caption: string }[] = [
  { src: '/images/lab/lab-space-1.jpg', caption: 'Workspace 1 (RA313) — main research space' },
  { src: '/images/lab/lab-equipment.jpg', caption: 'Workspace 1 (RA313) — robot experiment area' },
  { src: '/images/lab/lab-space-2.jpg', caption: 'Workspace 1 (RA313) — renovated interior' },
  { src: '/images/lab/workspace-cy507.jpg', caption: 'Workspace 2 (CY507)' },
];


/** Equipment & facilities (from the lab's own records) */
export const equipment: { src: string; caption: string }[] = [
  { src: '/images/lab/equipment-manipulator.jpg', caption: 'Robotic manipulator' },
  { src: '/images/lab/equipment-mini-arm.jpg', caption: 'Mini robot arm' },
  { src: '/images/lab/equipment-3d-printing.jpg', caption: '3D printing lab (SLA, FDM)' },
  { src: '/images/lab/equipment-laser-cutter.jpg', caption: 'Laser cutter' },
  { src: '/images/lab/equipment-optitrack.jpg', caption: 'Vision tracking system (OptiTrack)' },
  { src: '/images/lab/equipment-tools.jpg', caption: 'Mechanical tools' },
];

export const staff: Member[] = [
  { name: 'Eunjin Yang', role: 'Administrative Staff', topic: 'Administrative Staff', email: 'yangeunjin@gmail.com', photo: '/images/team/eunjin-yang.jpg' },
];

export const phd: Member[] = [
  { name: 'Edgar Lee', topic: 'Reinforcement Learning-based In-Hand Manipulation', background: 'B.S. Sogang Univ. (2021)', email: 'edgarlee21@sogang.ac.kr', photo: '/images/team/edgar-lee.jpg' },
  { name: 'Joon Lee', topic: 'Robot Hand Design and Actuation', background: 'B.S. Sogang Univ. (2023)', email: 'hnj1208@naver.com', photo: '/images/team/joon-lee.jpg' },
  { name: 'Seungbeom Noh', topic: 'Metal 3D Printing', background: 'M.S. DGIST · B.S. Tech Univ. of Korea', email: 'suny1357913@kitech.re.kr', photo: '/images/team/seungbeom-noh.jpg' },
  { name: 'Yundong Kim', topic: 'Lower Limb Exoskeleton', background: 'B.S. Sogang Univ. (2024)', email: 'kydong05020@naver.com', photo: '/images/team/yundong-kim.jpg' },
  { name: 'Ginwoo Pyo', topic: 'Robotic Hand Design', background: 'M.S./B.S. Kangwon Nat’l Univ. (2025/2023)', email: 'ryan8834@gmail.com', photo: '/images/team/ginwoo-pyo.jpg' },
  { name: 'Ari Choi', topic: 'Gripper Actuation Mechanism and Control', background: 'M.S. Sogang Univ. (2026) · B.S. Pusan Nat’l Univ. (2023)', email: 'cheg1541@naver.com', photo: '/images/team/ari-choi.jpg' },
  { name: 'Chanhyeok Lee', topic: 'LLM-based Robotic Lab Automation', background: 'M.S. Sogang Univ. (2026) · B.S. Hanyang Univ. (2024)', email: 'chanhyeok.lee.development@gmail.com', photo: '/images/team/chanhyeok-lee.jpg' },
  { name: 'Junho Choi', topic: 'Variable Transmission Mechanism, MPC Control', background: 'B.S. Sogang Univ. (2024)', email: 'wnsgh3810@naver.com', photo: '/images/team/junho-choi.jpg' },
];

export const ms: Member[] = [
  { name: 'Eunkyu Choi', topic: 'Harness Cable Assembly', background: 'B.S. Sogang Univ. (2025)', email: 'greenwarp99@gmail.com', photo: '/images/team/eunkyu-choi.jpg' },
  { name: 'Joonho Seo', topic: 'Harness Cable Assembly', background: 'B.S. Kangwon Nat’l Univ. (2025)', email: 'seojh996@naver.com', photo: '/images/team/joonho-seo.jpg' },
  { name: 'Doyoung Kim', topic: 'Reinforcement Learning-based In-Hand Manipulation', background: 'B.S. Sogang Univ. (2026)', email: 'wtiger57@sogang.ac.kr', photo: '/images/team/doyoung-kim.jpg' },
  { name: 'Hyukjun Kwon', topic: 'Novel Robotic Motor', background: 'B.S. Sogang Univ. (2026)', email: 'dragonian1030@gmail.com', photo: '/images/team/hyukjun-kwon.jpg' },
  { name: 'Changwuk Ha', topic: 'Novel Robotic Motor', background: 'B.S. DGIST (2025)', email: 'airincheon@sogang.ac.kr', photo: '/images/team/changwuk-ha.jpg' },
];

export const undergrad: Member[] = [
  { name: 'Uisu Hwang', role: 'Undergraduate Fellow', topic: 'Robot Gripper', email: 'dmltn3906@sogang.ac.kr', photo: '/images/team/uisu-hwang.jpg' },
  { name: 'Sungeon Kim', role: 'Undergraduate Fellow', topic: 'Robot Hand', email: 'sungeon200102@gmail.com', photo: '/images/team/sungeon-kim.jpg' },
];

export const alumni: Alum[] = [
  { name: 'Chunghyeon Lee', degree: 'M.S.', date: '2026.08', position: 'Ph.D. student, Texas A&M University', photo: '/images/team/chunghyeon-lee.jpg' },
  { name: 'Jeongyoon Han', degree: 'M.S.', date: '2025.02', position: 'LG Electronics, Production Technology Division', photo: '/images/team/jeongyoon-han.jpg' },
  { name: 'Jeongwoo Ha', degree: 'M.S.', date: '2025.02', position: 'Samsung Electronics, DX Division', photo: '/images/team/jeongwoo-ha.jpg' },
  { name: 'Andrew Jeong', degree: 'M.S.', date: '2024.08', position: 'Ph.D. student, KAIST', photo: '/images/team/andrew-jeong.jpg' },
  { name: 'Samuel Mekonnen', degree: 'M.S.', date: '2024.08', photo: '/images/team/samuel-mekonnen.jpg' },
  { name: 'Sungho Chung', degree: 'M.S.', date: '2024.02', position: 'LG Electronics, H&A Division', photo: '/images/team/sungho-chung.jpg' },
  { name: 'Seungmin Lee', degree: 'M.S.', date: '2024.02', position: 'LG Electronics, H&A Division', photo: '/images/team/seungmin-lee.jpg' },
  { name: 'Jaehyun Lee', degree: 'M.S.', date: '2024.02', photo: '/images/team/jaehyun-lee.jpg' },
  { name: 'Hangyeol Song', degree: 'M.S.', date: '2023.08', position: 'Ph.D. student, Georgia Tech (Fulbright Scholar)', photo: '/images/team/hangyeol-song.jpg' },
  { name: 'Seung Kyo Jeong', degree: 'M.S.', date: '2023.08', position: 'LG Electronics, Production Technology', photo: '/images/team/seungkyo-jeong.jpg' },
];
