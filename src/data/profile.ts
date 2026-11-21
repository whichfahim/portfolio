import type { LinkItem } from '@/types/content';

/** Personal details and contact links. Edit here to update the whole site. */
export const profile = {
  name: 'Fahim Imtiaz',
  initials: 'FI',
  role: 'Design Engineer',
  city: 'Dhaka, BD',
  timeZone: 'Asia/Dhaka',
  utcOffsetLabel: 'GMT+6',
  coordinates: '23.8103° N, 90.4125° E',
  email: 'fahim.imtiaz07@gmail.com',
  availability: 'Open to remote + contract',
  guild: 'FiftyTwo Digital',
  intro:
    'I design in Figma and ship in React — so nothing gets lost in the handoff. Interfaces, design systems and the small interactions that make them feel considered.',
  approach:
    "I'm a designer who codes and a developer who sketches. I start in Figma, finish in React, and sweat the bits in between: the spacing, the states, the two hundred milliseconds of motion that make an interface feel considered.",
  /** The word in `approach` that gets the accent colour when the scroll-fill reaches it. */
  approachHighlight: 'considered.',
  equipped: ['Figma', 'React', 'TypeScript'],
  lookingFor: 'Looking for design engineer, UI engineer and design systems roles, remote or contract.',
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
};

/**
 * Contact links shown in the Save point section.
 * Add your Upwork profile URL to show the "Hire me on Upwork" button.
 */
const UPWORK_URL = '';

export const contactLinks: LinkItem[] = [
  ...(UPWORK_URL ? [{ label: 'Hire me on Upwork', href: UPWORK_URL, variant: 'primary' as const }] : []),
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fahim-imtiaz' },
  { label: 'GitHub', href: 'https://github.com/whichfahim' },
  { label: 'Dribbble', href: 'https://dribbble.com/whichfahim' },
  { label: 'Behance', href: 'https://www.behance.net/fahimimtiaz3' },
];

export const moreWorkLinks: LinkItem[] = [
  { label: 'GitHub', href: 'https://github.com/whichfahim' },
  { label: 'Behance', href: 'https://www.behance.net/fahimimtiaz3' },
  { label: 'Dribbble', href: 'https://dribbble.com/whichfahim' },
];

/** Items in the scrolling "inventory" strip under the hero. */
export const inventory = [
  'Figma',
  'React',
  'TypeScript',
  'Design systems',
  'Motion',
  'Accessibility',
  'Python',
  'Docker',
];
