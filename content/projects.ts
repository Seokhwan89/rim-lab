export type Project = {
  slug: string;
  title: string;
  short: string; // one-liner for cards
  icon: 'transmission' | 'hand' | 'ai' | 'magnet' | 'factory' | 'surgical' | 'leg' | 'glove' | 'sensor';
  summary: string[];
  videos?: { id: string; title: string }[];
  highlights?: string[];
  pubs?: string[]; // representative publications (short strings)
  patents?: string[];
  funding?: string[];
  /** Representative figure (path under /public) */
  image?: string;
  imageCaption?: string;
};

export const projects: Project[] = [
  {
    slug: 'compact-variable-transmission',
    image: '/images/projects/compact-variable-transmission.jpg',
    imageCaption: 'Torque–speed operating principle of the compact variable transmission mechanism',
    title: 'Compact Variable Transmission',
    short: 'Actuators that shift gear like machines should — compact CVT/VTM modules for dynamic robots.',
    icon: 'transmission',
    summary: [
      'Robots must be both fast and strong, but a fixed gear ratio forces a trade-off between speed and torque. We develop compact variable transmission mechanisms (VTM) that dynamically adjust the torque–speed ratio inside the actuator itself.',
      'Our implementations span twisted-string-based automatic transmissions, actively variable four-bar linkage CVTs with controllable stiffness, and their applications to robotic fingers, hands, and legs for highly dynamic tasks.',
    ],
    videos: [
      { id: 'Qudi73Vm4_c', title: 'CVT & Stiffness Actuator based on Actively Variable Four-Bar Linkage' },
      { id: 'rm8DG30cxmQ', title: 'Robotic Finger with 4-bar Linkage-based Continuously Variable Active Transmission' },
      { id: '_QcDDKlwtPs', title: 'Twisted String Actuation Module for Bi-directional Compact Robotic Finger' },
      { id: 'RxmGPmoC-yg', title: 'Robot Gripper and Robot Hand using 2-Speed Twisted String Actuation' },
    ],
    pubs: [
      'Variable Transmission Mechanisms for Robotic Applications: A Review — IEEE RAM, 2025',
      'Continuously Variable Transmission and Stiffness Actuator based on Actively Variable Four-Bar Linkage — IEEE RA-L, 2024',
      'A Robotic Finger with a 4-bar Linkage-based Compact and Continuously Variable Active Transmission — IEEE RA-L, 2024',
      'A 2-Speed Small Transmission Mechanism Based on Twisted String Actuation and a Dog Clutch — IEEE RA-L, 2018',
    ],
  },
  {
    slug: 'robotic-hands',
    image: '/images/projects/robotic-hands.jpg',
    imageCaption: 'Anthropomorphic robot hand with finger and palm skin design',
    title: 'Robotic Hands',
    short: 'Anthropomorphic hands with novel actuation, sensing, and skeletal structures.',
    icon: 'hand',
    summary: [
      'The human hand is the most versatile manipulator known. We design anthropomorphic robotic hands that approach this versatility through novel actuation mechanisms, accurate joint kinematics, and integrated tension/force sensing.',
      'Recent work includes the RIM Hand — a robotic hand with an accurate carpometacarpal joint and nitinol-reinforced skeletal structure — and earlier prosthetic hands such as the MSC Hand, driven by twisted string actuation.',
    ],
    videos: [
      { id: '4oIh14FL_44', title: 'Flex RIM Hand — 1st Prototyping' },
      { id: 'Rkd7FrLRpiQ', title: 'Prosthetic Robot Hand controlled by EMG (Box and Block Test)' },
    ],
    pubs: [
      'RIM Hand: A Robotic Hand with an Accurate Carpometacarpal Joint and Nitinol-Reinforced Skeletal Structure — Soft Robotics, 2026',
      'The MSC Prosthetic Hand: Rapid, Powerful, and Intuitive — IEEE RA-L, 2022',
      'Designing Anthropomorphic Robot Hand With Active Dual-Mode Twisted String Actuation Mechanism and Tiny Tension Sensors — IEEE RA-L, 2017',
    ],
    highlights: ['Best Student Paper Award & Best Mechatronics Student Paper Award, IEEE AIM 2016'],
  },
  {
    slug: 'ai-based-multifinger-grasping',
    image: '/images/projects/ai-based-multifinger-grasping.jpg',
    imageCaption: 'Multifinger grasping with and without disturbance-observer-based control',
    title: 'AI-based Multifinger Grasping',
    short: 'Physical AI — learning-based grasping and in-hand manipulation with proprioceptive hardware.',
    icon: 'ai',
    summary: [
      'Bridging hardware and intelligence, we develop learning-based grasping systems that exploit the physical properties of our actuators and sensors — Physical AI in the truest sense.',
      'RL-DOB-based grasping combines reinforcement learning with disturbance-observer control for robust in-hand manipulation. Vision-free blind grasping uses only uniaxial fingertip force sensing to grasp unknown objects without cameras. An ultra-low-impedance gripper enables high-bandwidth, transparent physical interaction.',
    ],
    videos: [
      { id: 'pyLLG74D9jI', title: 'Ultra-Low-Impedance Robotic Gripper' },
      { id: 'lJGHvHAex6g', title: 'Vision-Free Multifingered Blind Grasping' },
      { id: '73vfS0HiApM', title: 'Robust In-Hand Manipulation Policy based on RL-DOB' },
      { id: 'n74F0ifQ4PE', title: 'Ultra-Low-Impedance Robotic Finger — Demo 1' },
    ],
    pubs: [
      'Why Look at It at All?: Vision-Free Multifingered Blind Grasping Using Uniaxial Fingertip Force Sensing — under review, 2026',
    ],
  },
  {
    slug: 'magnetic-gear',
    image: '/images/projects/magnetic-gear.jpg',
    imageCaption: 'Coaxial magnetic gear actuator assembly',
    title: 'Magnetic Gear',
    short: 'Contact-free torque transmission — magnetic gearing for backdrivable, robust actuation.',
    icon: 'magnet',
    summary: [
      'Magnetic gears transmit torque without physical contact, eliminating wear, backlash, and jamming while providing inherent overload protection — ideal properties for robot actuation.',
      'We developed mechanically variable magnetic gear transmissions, magnetic-gear-based actuators with disturbance-observer torque control exploiting the magnetic spring, and a coaxial magnetic gear tool-changing system.',
    ],
    videos: [
      { id: 'NYoOHJvqkF4', title: 'Mechanical Variable Magnetic Gear Transmission' },
      { id: 'zuAvOsLDOUI', title: 'Coaxial Magnetic Gear-based Tool-Changing System' },
    ],
    pubs: [
      'Magnetic Gear-based Actuator: Design, Optimization, and DOB-based Torque Control — IEEE RA-L, 2023',
      'Mechanical Variable Magnetic Gear Transmission: Concept and Preliminary Research — IEEE RA-L, 2022',
      'Coaxial Magnetic Gear-based Tool-Changing System — IEEE Access, 2024',
    ],
    funding: ['NRF Basic Research Program (2021.06 – 2024.02)'],
  },
  {
    slug: 'factory-automation',
    image: '/images/projects/factory-automation.jpg',
    imageCaption: 'Robotic cell for harness cable terminal-to-housing assembly',
    title: 'Factory Automation — Harness Cable Assembly',
    short: 'Robotic grippers and manipulation strategies that automate wire-harness assembly.',
    icon: 'factory',
    summary: [
      'Wire-harness assembly remains one of the last fully manual processes in manufacturing — deformable cables defeat conventional automation. We develop robotic grippers, feeders, and assembly strategies that automate terminal-to-housing assembly of ribbon cable harnesses.',
      'The system combines orientation-aware object recognition, dedicated alignment mechanisms, and force-aware insertion control.',
    ],
    videos: [{ id: '3eF24n0M4sI', title: 'Automated Terminal-to-Housing Assembly System for Flat Ribbon Cable Harness' }],
    pubs: [
      'Automated Terminal-to-Housing Assembly System for Flat Ribbon Cable Harness — under review, 2026',
      '다발 하네스 케이블 조립 자동화 시스템 구현을 위한 메커니즘 설계 — 국방로봇학회 논문집, 2024',
    ],
    funding: ['Daeha Wire & Cable Co. (2022.04 – 2025.05)'],
  },
  {
    slug: 'surgical-robots',
    image: '/images/projects/surgical-robots.jpg',
    imageCaption: 'Tendon-driven steerable continuum tool with bidirectional asymmetric joints',
    title: 'Surgical Robots',
    short: 'Steerable meso-scale robots for neurosurgery and endovascular intervention.',
    icon: 'surgical',
    summary: [
      'Minimally invasive surgery demands dexterity at millimeter scale. During and after his time at Georgia Tech, Prof. Jeong developed steerable surgical robots including the COAST guidewire robot for endovascular intervention, robotically steerable catheters for mitral valve implant delivery, and meso-scale continuum tools for pediatric neurosurgery.',
    ],
    videos: [{ id: 'RRY6Vp9R0aA', title: 'COAST: Coaxially Aligned Steerable Guidewire Robot' }],
    pubs: [
      'Design, Modeling, and Control of a Coaxially Aligned Steerable (COAST) Guidewire Robot — IEEE RA-L, 2020',
      'Modeling and Control of a 2-DoF Meso-scale Continuum Robotic Tool for Pediatric Neurosurgery — IEEE T-RO, 2021',
      'Design and Kinematics Analysis of a Robotic Pediatric Neuroendoscope Tool Body — IEEE/ASME T-Mech, 2020',
    ],
  },
  {
    slug: 'lower-limb-exo',
    image: '/images/projects/lower-limb-exo.jpg',
    imageCaption: 'Soft wearable lower-limb assistance robot layout',
    title: 'Lower Limb Exoskeleton',
    short: 'Actuators and controllers for flexible wearable walking-assist robots.',
    icon: 'leg',
    summary: [
      'We develop actuators and control systems for flexible, wearable lower-limb assist robots — hardware that must be light, compliant, and powerful at once.',
      'The work spans 3D-printed sensing suits for walking-ability enhancement and actuator/controller development for flexible lower-limb assistive robots.',
    ],
    funding: [
      'NRF Basic Research Lab — Exo-3D-printed sensing suit for walking enhancement (2023.06 – 2026.02, 1.5B KRW, joint)',
      'National Rehabilitation Center R&D — flexible wearable lower-limb assistive robot (2022.08 – 2024.12, 390M KRW, joint)',
    ],
  },
  {
    slug: 'hand-exoskeletons',
    image: '/images/projects/hand-exoskeletons.jpg',
    imageCaption: 'FLEXotendon Glove hand rehabilitation exoskeleton',
    title: 'Hand Exoskeletons',
    short: 'FLEXotendon Glove — soft wearable rehabilitation for spinal cord injury.',
    icon: 'glove',
    summary: [
      'The FLEXotendon Glove series is a soft robotic hand exoskeleton for people with spinal cord injury: voice-controlled, tendon-driven, and patient-specific, with admittance grasping control and a novel fabrication method.',
    ],
    videos: [{ id: 'OM03dU-8-aQ', title: 'FLEXotendon Glove-III' }],
    pubs: [
      'FLEXotendon Glove-III: Voice-Controlled Soft Robotic Hand Exoskeleton — IEEE/ASME T-Mech, 2022',
      'A Review: Hand Exoskeleton Systems, Clinical Rehabilitation Practices, and Future Prospects — IEEE T-MRB, 2021',
    ],
  },
  {
    slug: 'optical-compact-force-sensor',
    image: '/images/projects/optical-compact-force-sensor.jpg',
    imageCaption: 'Dual-photointerrupter miniature force sensor',
    title: 'Optical Compact Force Sensor',
    short: 'Photointerrupter-based miniature force sensing with high linearity.',
    icon: 'sensor',
    summary: [
      'Force awareness is the foundation of dexterous manipulation. We design miniature optical force sensors based on photointerrupters — a dual-photointerrupter configuration achieves high linearity and disturbance compensation in a package small enough to embed in robotic fingertips and surgical tools.',
    ],
    pubs: [
      'Miniature Force Sensor based on Dual-Photointerrupter with High Linearity and Disturbance Compensation — IEEE Sensors Journal, 2020',
      'Design of a Miniature Force Sensor based on Photointerrupter for Robotic Hand — Sensors and Actuators A, 2018',
    ],
  },
];

export const researchAreas = [
  {
    title: 'Actuation Mechanisms',
    desc: 'Variable transmissions, twisted string actuators, magnetic gears, and quasi-direct drives — the muscles of next-generation robots.',
    slugs: ['compact-variable-transmission', 'magnetic-gear'],
    icon: 'transmission' as const,
  },
  {
    title: 'Robot Hands & Grippers',
    desc: 'Anthropomorphic hands, ultra-low-impedance grippers, and integrated tension/force sensing for dexterous manipulation.',
    slugs: ['robotic-hands', 'optical-compact-force-sensor'],
    icon: 'hand' as const,
  },
  {
    title: 'Physical AI',
    desc: 'Learning-based grasping and in-hand manipulation grounded in proprioceptive, force-aware hardware.',
    slugs: ['ai-based-multifinger-grasping', 'factory-automation'],
    icon: 'ai' as const,
  },
  {
    title: 'Medical & Wearable Robotics',
    desc: 'Steerable surgical robots, hand exoskeletons, and lower-limb assist systems that work with the human body.',
    slugs: ['surgical-robots', 'hand-exoskeletons', 'lower-limb-exo'],
    icon: 'surgical' as const,
  },
];
