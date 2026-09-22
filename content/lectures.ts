// 강의 자료. 새 강의 슬라이드가 오면:
//  1) PDF를 public/lectures/<course.id>/lecture-NN-<slug>.pdf 로 저장
//     (주차제 과목은 week-WW-S-<slug>.pdf)
//  2) 해당 course의 lectures 배열에 항목 추가 (no 내림차순 정렬은 페이지가 함)
//     주차제 과목은 no를 정렬용 일련번호로 쓰고 label에 '4-2'처럼 표기한다
export type Lecture = {
  /** Sort key within a course (descending). */
  no: number;
  /** Shown instead of `no` when a course numbers sessions by week, e.g. '4-2'. */
  label?: string;
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
        no: 5,
        title: 'AC Network Analysis 2',
        date: '2026-09-16',
        file: '/lectures/mee4033-fall-2026/lecture-05-ac-network-analysis-2.pdf',
        pages: 39,
        size: '4.2 MB',
      },
      {
        no: 4,
        title: 'AC Network Analysis 1',
        date: '2026-09-10',
        file: '/lectures/mee4033-fall-2026/lecture-04-ac-network-analysis-1.pdf',
        pages: 30,
        size: '4.5 MB',
      },
      {
        no: 3,
        title: 'Resistive Network Analysis',
        date: '2026-09-09',
        file: '/lectures/mee4033-fall-2026/lecture-03-resistive-network-analysis.pdf',
        pages: 36,
        size: '4.9 MB',
      },
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
  {
    id: 'mee1006-fall-2026',
    code: 'MEE1006',
    title: 'C Programming for Mechanical Engineers',
    semester: 'Fall 2026',
    level: 'Undergraduate',
    desc: 'Programming in C for mechanical engineers — variables, control flow, loops, and the preprocessor, with hands-on Arduino assignments that connect the code to real hardware.',
    active: true,
    lectures: [
      {
        no: 8,
        label: '4-2',
        title: 'Advanced Loops — for Variants, Nested Loops, break · continue, #define',
        date: '2026-09-22',
        file: '/lectures/mee1006-fall-2026/week-04-2-advanced-loops.pdf',
        pages: 19,
        size: '2.1 MB',
      },
    ],
  },
];

export const lectureNotice =
  'Lecture materials are provided for enrolled students and personal study. Please do not redistribute or repost the files elsewhere.';
