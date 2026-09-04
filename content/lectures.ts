// 강의 자료. 새 강의 슬라이드가 오면:
//  1) PDF를 public/lectures/<course.id>/lecture-NN-<slug>.pdf 로 저장
//  2) 해당 course의 lectures 배열에 항목 추가 (no 내림차순 정렬은 페이지가 함)
export type Lecture = {
  no: number;
  title: string;
  date: string; // YYYY-MM-DD (uploaded/lectured)
  file: string; // public path to the PDF
  pages?: number;
  size?: string; // human-readable, e.g. '2.9 MB'
};

export type Course = {
  id: string;
  code: string; // e.g. MEE4033
  title: string;
  semester: string; // e.g. Fall 2026
  level: 'Undergraduate' | 'Graduate';
  desc: string;
  ta?: { name: string; email?: string };
  active: boolean; // currently running course
  lectures: Lecture[];
};

export const courses: Course[] = [
  {
    id: 'mee4033-fall-2026',
    code: 'MEE4033',
    title: 'Mechatronics',
    semester: 'Fall 2026',
    level: 'Undergraduate',
    desc: 'Principles and applications of electrical engineering for mechanical engineers — circuits, electronics, sensors, actuators, and feedback control that bring machines to life.',
    ta: { name: 'Hyukjun Kwon', email: 'dragonian1030@gmail.com' },
    active: true,
    lectures: [
      {
        no: 2,
        title: 'Circuit Basics 1 — Fundamentals of Electric Circuits',
        date: '2026-09-03',
        file: '/lectures/mee4033-fall-2026/lecture-02-fundamentals-of-electric-circuits.pdf',
        pages: 38,
        size: '3.3 MB',
      },
      {
        no: 1,
        title: 'Introduction of Mechatronics',
        date: '2026-09-01',
        file: '/lectures/mee4033-fall-2026/lecture-01-introduction-of-mechatronics.pdf',
        pages: 27,
        size: '3.0 MB',
      },
    ],
  },
];

export const lectureNotice =
  'Lecture materials are provided for enrolled students and personal study. Please do not redistribute or repost the files elsewhere.';
