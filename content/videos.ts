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

/** IDs cycled in the hero backdrop reel */
export const heroReel: string[] = ['pyLLG74D9jI', 'lJGHvHAex6g', '4oIh14FL_44', 'Qudi73Vm4_c'];

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

export const ytThumb = (id: string, quality: 'hq' | 'maxres' = 'hq') =>
  `https://i.ytimg.com/vi/${id}/${quality === 'maxres' ? 'maxresdefault' : 'hqdefault'}.jpg`;
