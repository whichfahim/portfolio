import type { QuestLogEntry } from '@/types/content';

/** Career timeline, oldest first. Mark the current role with `current: true`. */
export const questLog: QuestLogEntry[] = [
  { period: '2021', title: 'B.Sc. CSE — BRAC University', description: 'Tutorial complete.' },
  {
    period: '2021–22',
    title: 'Software Engineer — BRAC IT',
    description:
      'Refactored dashboard widgets for real-time APIs and redesigned the Back to Play assessment builder in React.',
  },
  {
    period: '2023–24',
    title: 'M.Sc. Applied Computing — University of Windsor',
    description: 'Moved to Canada for the master’s.',
  },
  {
    period: 'Jan–Apr 2024',
    title: 'UI/UX & Frontend intern — Geniotech',
    description: 'Designed and built an e-learning platform with WebRTC video calls and Square payments.',
  },
  {
    period: '2025–now',
    title: 'Technical Analyst — FiftyTwo Digital',
    description: 'Building internal tools, running the team’s Docker toolbox server and debugging customer issues.',
    current: true,
  },
];
