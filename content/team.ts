export type Member = {
  name: string;
  role?: string;
  topic?: string;
  background?: string;
  email?: string;
};

export type Alum = { name: string; degree: string; date: string; position?: string };

export const pi: Member = {
  name: 'Seokhwan Jeong',
  role: 'Principal Investigator · Associate Professor',
  email: 'seokhwan@sogang.ac.kr',
};

export const staff: Member[] = [
  { name: 'Eunjin Yang', role: 'Administrative Staff', email: 'yangeunjin@gmail.com' },
];

export const phd: Member[] = [
  { name: 'Edgar Lee', topic: 'Reinforcement Learning-based In-Hand Manipulation', background: 'B.S. Sogang Univ. (2021)', email: 'edgarlee21@sogang.ac.kr' },
  { name: 'Joon Lee', topic: 'Robot Hand Design and Actuation', background: 'B.S. Sogang Univ. (2023)', email: 'hnj1208@naver.com' },
  { name: 'Seungbeom Noh', topic: 'Metal 3D Printing', background: 'M.S. DGIST · B.S. Tech Univ. of Korea', email: 'suny1357913@kitech.re.kr' },
  { name: 'Yundong Kim', topic: 'Lower Limb Exoskeleton', background: 'B.S. Sogang Univ. (2024)', email: 'kydong05020@naver.com' },
  { name: 'Ginwoo Pyo', topic: 'Robotic Hand Design', background: 'M.S./B.S. Kangwon Nat’l Univ. (2025/2023)', email: 'ryan8834@gmail.com' },
  { name: 'Ari Choi', topic: 'Gripper Actuation Mechanism and Control', background: 'M.S. Sogang Univ. (2026) · B.S. Pusan Nat’l Univ. (2023)', email: 'cheg1541@naver.com' },
  { name: 'Chanhyeok Lee', topic: 'LLM-based Robotic Lab Automation', background: 'M.S. Sogang Univ. (2026) · B.S. Hanyang Univ. (2024)', email: 'chanhyeok.lee.development@gmail.com' },
  { name: 'Junho Choi', topic: 'Variable Transmission Mechanism, MPC Control', background: 'B.S. Sogang Univ. (2024)', email: 'wnsgh3810@naver.com' },
];

export const ms: Member[] = [
  { name: 'Eunkyu Choi', topic: 'Harness Cable Assembly', background: 'B.S. Sogang Univ. (2025)', email: 'greenwarp99@gmail.com' },
  { name: 'Joonho Seo', topic: 'Harness Cable Assembly', background: 'B.S. Kangwon Nat’l Univ. (2025)', email: 'seojh996@naver.com' },
  { name: 'Doyoung Kim', topic: 'Reinforcement Learning-based In-Hand Manipulation', background: 'B.S. Sogang Univ. (2026)', email: 'wtiger57@sogang.ac.kr' },
  { name: 'Hyukjun Kwon', topic: 'Novel Robotic Motor', background: 'B.S. Sogang Univ. (2026)', email: 'dragonian1030@gmail.com' },
  { name: 'Changwuk Ha', topic: 'Novel Robotic Motor', background: 'B.S. DGIST (2025)', email: 'airincheon@sogang.ac.kr' },
];

export const undergrad: Member[] = [
  { name: 'Uisu Hwang', role: 'Undergraduate Fellow' },
  { name: 'Sungeon Kim', role: 'Undergraduate Fellow' },
];

export const alumni: Alum[] = [
  { name: 'Chunghyeon Lee', degree: 'M.S.', date: '2026.08', position: 'Ph.D. student, Texas A&M University' },
  { name: 'Jeongyoon Han', degree: 'M.S.', date: '2025.02', position: 'LG Electronics, Production Technology Division' },
  { name: 'Jeongwoo Ha', degree: 'M.S.', date: '2025.02', position: 'Samsung Electronics, DX Division' },
  { name: 'Andrew Jeong', degree: 'M.S.', date: '2024.08', position: 'Ph.D. student, KAIST' },
  { name: 'Samuel Mekonnen', degree: 'M.S.', date: '2024.08', position: 'Kangwon National University' },
  { name: 'Sungho Chung', degree: 'M.S.', date: '2024.02', position: 'LG Electronics, H&A Division' },
  { name: 'Seungmin Lee', degree: 'M.S.', date: '2024.02', position: 'LG Electronics, H&A Division' },
  { name: 'Jaehyun Lee', degree: 'M.S.', date: '2024.02' },
  { name: 'Hangyeol Song', degree: 'M.S.', date: '2023.08', position: 'Ph.D. student, Georgia Tech (Fulbright Scholar)' },
  { name: 'Seung Kyo Jeong', degree: 'M.S.', date: '2023.08', position: 'LG Electronics, Production Technology' },
];
