import type { SideQuest } from '@/types/content';

import palPlanner from '@/assets/images/projects/pal-breeding-planner.jpg';
import glassFigma from '@/assets/images/projects/glass-figma.jpg';
import glassLive from '@/assets/images/projects/glass-live.jpg';
import fplScout from '@/assets/images/projects/fpl-scout.jpg';
import waddlez from '@/assets/images/projects/waddlez.jpg';

/** Smaller projects shown in the "Side quests" section, in display order. Keep it to about five. */
export const sideQuests: SideQuest[] = [
  {
    id: 'pal-breeding-planner',
    category: 'Game tool',
    title: 'Pal Breeding Planner',
    hook: 'Finds the fastest way to breed any creature in the game Palworld.',
    badge: 'Live demo',
    isLive: true,
    description:
      'Mark the creatures you own, pick the one you want, and it shows the shortest chain of breeds to get there. I checked all ~41,000 parent pairs against the community’s reference data, so the routes are accurate. Filters, light and dark themes, and it works on phones.',
    tags: ['JavaScript', 'HTML', 'Python build'],
    media: {
      kind: 'image',
      image: { src: palPlanner, alt: 'Pal Breeding Planner app with filters, a grid of Pals and a detail panel' },
    },
    links: [
      { label: 'Play demo', href: 'https://whichfahim.github.io/pal-breeding-planner/', variant: 'primary' },
      { label: 'Source', href: 'https://github.com/whichfahim/pal-breeding-planner' },
    ],
  },
  {
    id: 'glass-cosmetics',
    category: 'Design → code',
    title: 'Glass Cosmetics',
    hook: 'A beauty brand’s website, from Figma design to live build.',
    badge: 'Live site',
    isLive: true,
    description:
      'The brand’s old site was unoptimised, incomplete and had broken plugins. I redesigned it in Figma (ingredients, product pages, sign-up) and built the responsive site myself, so the design and the code match.',
    tags: ['Figma', 'HTML', 'SASS', 'JavaScript'],
    media: {
      kind: 'compare',
      images: [
        {
          label: 'Figma design',
          src: glassFigma,
          alt: 'Glass Cosmetics Figma mockups: ingredients grid, product page and sign-up screen',
        },
        { label: 'Live build', src: glassLive, alt: 'Glass Cosmetics live landing page hero with rose petals' },
      ],
    },
    links: [
      { label: 'View live site', href: 'https://whichfahim.github.io/glass/', variant: 'primary' },
      { label: 'Figma case study', href: 'https://www.behance.net/gallery/139245067/Glass-Website-Redesign' },
      { label: 'Source', href: 'https://github.com/whichfahim/glass' },
    ],
  },
  {
    id: 'fpl-scout',
    category: 'Data tool',
    title: 'FPL Scout',
    hook: 'Ranks Fantasy Premier League players so you can pick your team each week.',
    badge: 'Open source',
    description:
      'A Python script pulls live data from the official Fantasy Premier League API and scores every player on form, fixtures, expected goals and more. The dashboard re-ranks all players instantly as you drag the weight sliders, and you can click any player to see why they scored what they did.',
    tags: ['Python', 'JavaScript', 'Data viz'],
    media: {
      kind: 'image',
      image: {
        src: fplScout,
        alt: 'FPL Scout dashboard ranking players by scout score, with form bars and fixture difficulty',
      },
    },
    links: [{ label: 'Source + demo', href: 'https://github.com/whichfahim/FPL-Recommender', variant: 'primary' }],
  },
  {
    id: 'quest-ui-kit',
    category: 'Design system',
    title: 'Quest UI Kit',
    hook: 'The pixel components this website is built from.',
    badge: 'New',
    description:
      'This portfolio’s own design system: buttons with press states, quest cards, XP bars, dialogue boxes and the theme dock, built on design tokens with three themes. Components use real buttons and links for keyboard access, are designed to WCAG AA contrast, and respect reduced-motion settings.',
    tags: ['Design tokens', 'React', 'TypeScript', 'Accessibility'],
    media: { kind: 'kit-preview' },
    links: [
      {
        label: 'Browse the components',
        href: 'https://github.com/whichfahim/portfolio/tree/main/src/components/ui',
        variant: 'primary',
      },
      { label: 'Theme tokens', href: 'https://github.com/whichfahim/portfolio/blob/main/src/theme/themes.ts' },
    ],
  },
  {
    id: 'waddlez',
    category: '3D short',
    title: 'Waddlez — To the Sky',
    hook: 'A short 3D animated film about a penguin who wants to fly.',
    badge: 'Live site',
    isLive: true,
    description:
      'I modelled, textured and animated the characters in Maya, then built a small website documenting the models and process.',
    tags: ['Maya', 'HTML'],
    media: {
      kind: 'image',
      image: { src: waddlez, alt: 'Gallery of 3D penguin models in Maya, plain and with an aviator helmet' },
    },
    links: [{ label: 'View site', href: 'https://whichfahim.github.io/Waddlez--To-The-Sky/', variant: 'primary' }],
  },
];
