export type Video = { id: string; title: string; tag?: string };

/** Featured on the landing page — representative works, newest first */
export const featuredVideos: Video[] = [
  { id: 'pyLLG74D9jI', title: 'Ultra-Low-Impedance Robotic Gripper for High-Bandwidth, Transparent Physical Interaction', tag: 'Gripper' },
  { id: 'lJGHvHAex6g', title: 'Vision-Free Multifingered Blind Grasping Using Uniaxial Fingertip Force Sensing', tag: 'Physical AI' },
  { id: '3eF24n0M4sI', title: 'Automated Terminal-to-Housing Assembly System for Flat Ribbon Cable Harness', tag: 'Automation' },
  { id: '4oIh14FL_44', title: 'Flex RIM Hand — 1st Prototyping', tag: 'Robot Hand' },
  { id: 'Qudi73Vm4_c', title: 'Continuously Variable Transmission & Stiffness Actuator based on Actively Variable Four-Bar Linkage', tag: 'Actuation' },
  { id: '_QcDDKlwtPs', title: 'Twisted String Actuation Module for Bi-directional Compact Robotic Finger', tag: 'Actuation' },
  { id: 'zuAvOsLDOUI', title: 'Coaxial Magnetic Gear-based Tool-Changing System', tag: 'Magnetic Gear' },
  { id: '73vfS0HiApM', title: 'Robust In-Hand Manipulation Policy based on RL-DOB', tag: 'Physical AI' },
];

/** IDs cycled in the hero backdrop reel (fallback when the playlist can't be fetched) */
export const heroReel: string[] = ['pyLLG74D9jI', 'lJGHvHAex6g', '4oIh14FL_44', 'Qudi73Vm4_c'];

/** YouTube "Research" playlist that feeds the hero backdrop — new uploads appear automatically */
export const heroPlaylistId = 'PLAUadnYJsReuafzkvid6k_3qI1vjicdvk';

/**
 * Optional per-video override of the hero highlight segment.
 * Videos not listed here automatically play ~12s starting 35% into the video
 * (past intros/title cards). Example: { pyLLG74D9jI: { start: 42, seconds: 10 } }
 */
export const heroHighlights: Record<string, { start: number; seconds?: number }> = {};

export const moreVideos: Video[] = [
  { id: 'n74F0ifQ4PE', title: 'Ultra-Low-Impedance, High-Bandwidth, High-Sensitivity Robotic Finger — Demo 1' },
  { id: 'rm8DG30cxmQ', title: 'A Robotic Finger with a 4-bar Linkage-based Compact and Continuously Variable Active Transmission' },
  { id: 'RxmGPmoC-yg', title: 'Robot Gripper and Robot Hand using 2-Speed Twisted String Actuation (TSA)' },
  { id: 'NYoOHJvqkF4', title: 'Mechanical Variable Magnetic Gear Transmission' },
  { id: 'Rkd7FrLRpiQ', title: 'Prosthetic Robot Hand controlled by EMG — Twisted String Actuation, Box and Block Test' },
  { id: 'OM03dU-8-aQ', title: 'FLEXotendon Glove-III — Soft Robotic Hand Exoskeleton' },
  { id: 'RRY6Vp9R0aA', title: 'COAST: Coaxially Aligned Steerable Guidewire Robot' },
  { id: 'gCsYF04xCR8', title: 'MERRIC Webinar — High-Performance Anthropomorphic Prosthetic Hand Systems (KR)' },
];

/** Snapshot of the YouTube "Research" playlist (fallback when the live fetch fails at build) */
export const playlistSnapshot: Video[] = [
  { id: '3eF24n0M4sI', title: 'Automated Terminal-to-Housing Assembly System for Flat Ribbon Cable Harness' },
  { id: 'n74F0ifQ4PE', title: 'Ultra-Low-Impedance, High-Control Bandwidth, and High-Sensitive Robotic Finger Demo 1' },
  { id: '9866GYPbY-E', title: 'A Robotic Hand with an Accurate Carpometacarpal Joint and Nitinol-Reinforced Skeletal Structure' },
  { id: '_QcDDKlwtPs', title: 'Twisted String Actuation Module for Bi-directional Compact Robotic Finger' },
  { id: 'lJGHvHAex6g', title: 'Vision-Free Multifingered Blind GraspingUsing Uniaxial Fingertip Force Sensing - version 1.0' },
  { id: '4oIh14FL_44', title: 'Flex RIM hand - 1st prototyping' },
  { id: 'wmo343wLfB8', title: 'Progress update on blind grasping research' },
  { id: 'dBLvZ5Zh2CE', title: 'Blind Grasping 2nd Trial' },
  { id: '73vfS0HiApM', title: '서강대학교 이에드가 “Robust Hand Manipulation Policy Based on RL-DOB”' },
  { id: 'wjMNIGHWg5g', title: 'Hand Exo with Suction Cup' },
  { id: 'Qudi73Vm4_c', title: 'Continuously Variable Transmission and Stiffness Actuator based on Actively Variable FourBar Linkage' },
  { id: 'rm8DG30cxmQ', title: 'A Robotic Finger with a 4-bar Linkage-based Compact and Continuously Variable Active Transmission' },
  { id: 'zuAvOsLDOUI', title: 'Coaxial Magnetic Gear-based Tool-Changing System' },
  { id: '64h1yNFKHZI', title: 'Magnetic Gear-based Actuator: A Framework of Design, Optimization, and DOB-based Torque Control' },
  { id: 'gCsYF04xCR8', title: 'Development of High-Performance Humanoid Prosthetic Hand System' },
  { id: 'M1_JCT_Ov-0', title: 'MSC Prosthetic hand prototype EMG-based grasping intention estimation experiment' },
  { id: 'Rkd7FrLRpiQ', title: 'Prosthetic Robot Hand controlled by EMG –Twisted String Actuation, Box and Block Test(BBT)' },
  { id: 'NYoOHJvqkF4', title: 'Mechanical Variable Magnetic Gear Transmission' },
  { id: 'RxmGPmoC-yg', title: 'Robot Gripper and Robot hand using 2-Speed Twisted String Actuation (TSA)' },
  { id: 'QBQMZsSQJQM', title: 'Active Dual-mode Twisting Actuation Mechanism' },
  { id: 'H8aGkbSwlYs', title: 'Robot hand with 2-speed transmission mechanism based on twisted string actuation' },
  { id: '5PtXTI1t3Po', title: 'Designing Anthropomorphic Robot Hand with Active Dual-Mode Twisted String Actuation Mechanism' },
  { id: 'Ctz6tUdFF8s', title: 'AIM 2016 720p' },
];

export const ytThumb = (id: string, quality: 'hq' | 'maxres' = 'hq') =>
  `https://i.ytimg.com/vi/${id}/${quality === 'maxres' ? 'maxresdefault' : 'hqdefault'}.jpg`;
