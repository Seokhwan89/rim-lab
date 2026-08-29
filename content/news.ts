export type NewsCategory = 'Announcement' | 'Conference' | 'Award' | 'Grant' | 'Publication' | 'Members' | 'Lab Life';

export type NewsItem = {
  date: string; // YYYY.MM or YYYY.MM.DD
  title: string;
  category: NewsCategory;
  body?: string;
  link?: string;
  /** Optional photo shown with the item (path under /public) */
  image?: string;
};

export const news: NewsItem[] = [
  { date: '2026.11', title: 'KSME Annual Meeting 2026, Jeju (upcoming)', category: 'Conference', body: 'Prof. Jeong will give an oral presentation on robot hand and gripper design and control optimized for physical-AI learning environments at the KSME Annual Meeting (Nov 11–14, ICC Jeju), with lab members presenting their work.' },
  { date: '2026.08', title: 'New RIM Lab website launched', category: 'Announcement', body: 'The lab homepage was fully rebuilt with updated research projects, publications, patents, and news.', link: 'https://rim-lab.vercel.app' },
  { date: '2026.08', title: 'Prof. Jeong selected as a Fulbright Visiting Scholar', category: 'Award', body: 'Prof. Seokhwan Jeong was selected for the Fulbright Visiting Scholar Program (PY 2027) for research in the United States.' },
  { date: '2026.08', title: 'Graduation — Chunghyeon Lee (M.S.)', category: 'Members', body: 'Chunghyeon Lee received his M.S. degree and will join Texas A&M University as a Ph.D. student. Congratulations!' },
  { date: '2026.07', title: 'ICROS 2026, Daegu EXCO', category: 'Conference', body: 'RIM Lab members participated in ICROS 2026 at Daegu EXCO, where the lab also presented its lab-introduction poster; Prof. Jeong served on the organizing committee.' },
  { date: '2026.07', title: 'AIM 2026, Genova, Italy', category: 'Conference', body: 'The lab attended IEEE/ASME AIM 2026 in Genova, Italy.' },
  { date: '2026.06', title: 'MOTIE R&D project selected (Digital Healthcare)', category: 'Grant', body: 'Our proposal for the bio-industry technology development program (digital healthcare) was accepted.' },
  { date: '2026.06', title: 'Undergraduate internship news', category: 'Members', body: 'Updates from our undergraduate research internship program.' },
  { date: '2026.05', title: 'ICRA 2026, Vienna, Austria', category: 'Conference', body: 'RIM Lab presented and participated at IEEE ICRA 2026 in Vienna.' },
  { date: '2026.04', title: 'RIM Lab featured in Robot News', category: 'Announcement', body: 'Our lab was introduced in Robot News media coverage.' },
  { date: '2026.02', title: 'KROC 2026 RED Show — Excellence Award', category: 'Award', body: 'Edgar Lee, Junho Choi, and Chihyun Han received the Excellence Award (general category) at the KROC 2026 RED Show.' },
  { date: '2026.02', title: 'KROC 2026 participation', category: 'Conference', body: 'The lab participated in the Korea Robotics Society Annual Conference 2026.' },
  { date: '2025.12', title: 'Young Scientist Award, KROS', category: 'Award', body: 'Prof. Seokhwan Jeong received the Young Scientist Award from the Korea Robotics Society, recognizing excellence in robotic actuation research.', image: '/images/news/2025-12-kros-award.jpg' },
  { date: '2025.12', title: 'KSME Annual Meeting 2025', category: 'Conference', body: 'RIM Lab participated in the KSME Annual Meeting 2025.' },
  { date: '2025.10', title: 'Lab renovation', category: 'Lab Life', body: 'Our research space was renovated for a better research environment.', image: '/images/lab/lab-space-1.jpg' },
  { date: '2025.09', title: 'NRF national agenda project selected', category: 'Grant', body: 'Funding awarded for robotic hand/gripper platform hardware and control technologies.' },
  { date: '2025.08', title: 'NRF Materials Global Young Connect selected', category: 'Grant', body: 'New project on high-dielectric elastomers for electroadhesive robotic end-effectors.' },
  { date: '2025.06', title: 'IEEE RAM review paper published', category: 'Publication', body: '"Variable Transmission Mechanisms for Robotic Applications: A Review" was officially published in IEEE Robotics and Automation Magazine.' },
  { date: '2025.06', title: 'ICROS 2025 Excellence Paper Award', category: 'Award', body: 'Third consecutive year receiving a top paper award at ICROS.' },
  { date: '2025.05', title: 'ICRA 2025, Atlanta, USA', category: 'Conference', body: 'RIM Lab participated in IEEE ICRA 2025.' },
  { date: '2025.05', title: "Teacher's Day lab meeting", category: 'Lab Life', body: "A lab gathering to celebrate Teacher's Day." },
  { date: '2025.02', title: 'KROC 2025 — RED Show & workshop', category: 'Conference', body: 'RED show exhibition and workshop presentations at KROC 2025.' },
  { date: '2024.07', title: 'ICROS 2024 — Excellence Paper Awards & Young Researcher Award', category: 'Award', body: 'Jungwoo Hur and Hangyeol Song received excellence paper awards; Prof. Jeong received the Young Researcher Award.' },
  { date: '2024.05', title: 'Advanced Intelligent Systems journal cover', category: 'Publication', body: 'Our modular robotic platform for biological research was featured on the journal cover.' },
  { date: '2024.05', title: 'ICRA 2024, Yokohama, Japan', category: 'Conference', body: 'The lab participated in IEEE ICRA 2024.' },
  { date: '2024.02', title: 'KROC 2024 — paper awards & RED Show top honors', category: 'Award', body: 'Excellence paper awards and top honors at the KROC 2024 RED Show.' },
  { date: '2024.02', title: 'Graduation — Sungho Chung, Seungmin Lee, Jaehyun Lee', category: 'Members', body: 'Three M.S. students graduated. Congratulations!' },
  { date: '2023.12', title: 'Hangyeol Song selected as Fulbright Scholar', category: 'Members', body: 'M.S. graduate Hangyeol Song was selected for the Fulbright scholarship for Ph.D. study in the USA.' },
  { date: '2023.10', title: 'IROS 2023, Detroit, USA', category: 'Conference', body: 'The lab attended IEEE/RSJ IROS 2023.' },
  { date: '2023.09', title: 'Lab meeting with pizza', category: 'Lab Life', body: 'A casual lab gathering.' },
  { date: '2023.08', title: 'Graduation — Seung Kyo Jeong, Hangyeol Song', category: 'Members', body: 'Two M.S. students graduated.' },
  { date: '2023.06', title: 'NRF Basic Research Lab (기초연구실) selected', category: 'Grant', body: 'Selected for the NRF Basic Research Laboratory program.' },
  { date: '2023.06', title: 'ICROS 2023, Samcheok', category: 'Conference', body: 'The lab participated in ICROS 2023.' },
  { date: '2023.05', title: 'MERRIC webinar', category: 'Announcement', body: 'Invited webinar on high-performance anthropomorphic prosthetic hand systems by Prof. Jeong and Dr. Younggeol Cho.', link: 'https://www.youtube.com/watch?v=gCsYF04xCR8' },
  { date: '2023.04', title: 'KSME IT Convergence Excellence Award', category: 'Award', body: 'M.S. student Sungho Chung received the excellence award from the Korean Society of Mechanical Engineers.' },
  { date: '2023.02', title: 'KROC 2023', category: 'Conference', body: 'Conference participation and awards.' },
  { date: '2022.12', title: 'Sogang ME Academic Festival', category: 'Lab Life', body: 'The lab joined the department academic festival.' },
  { date: '2022.08', title: 'Invited talks — Dr. Younggeol Cho & Dr. Hyung-Tae Seo', category: 'Announcement', body: 'Invited seminar talks at the lab.' },
  { date: '2022.05', title: 'ICRA 2022, Philadelphia, USA', category: 'Conference', body: 'The lab participated in IEEE ICRA 2022.' },
];

export const categoryColors: Record<NewsCategory, string> = {
  Announcement: 'text-cyan-300 border-cyan-300/40 bg-cyan-300/10',
  Conference: 'text-sky-300 border-sky-300/40 bg-sky-300/10',
  Award: 'text-amber-300 border-amber-300/40 bg-amber-300/10',
  Grant: 'text-emerald-300 border-emerald-300/40 bg-emerald-300/10',
  Publication: 'text-violet-300 border-violet-300/40 bg-violet-300/10',
  Members: 'text-rose-300 border-rose-300/40 bg-rose-300/10',
  'Lab Life': 'text-slate-300 border-slate-300/40 bg-slate-300/10',
};
