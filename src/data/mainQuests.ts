import type { MainQuest } from '@/types/content';
import { caseStudyHref } from '@/routes';

import geniotechLanding from '@/assets/images/projects/geniotech-landing.jpg';
import geniotechCards from '@/assets/images/projects/geniotech-course-cards.jpg';
import geniotechClassroom from '@/assets/images/projects/geniotech-classroom.jpg';
import geniotechCheckout from '@/assets/images/projects/geniotech-checkout.jpg';
import khelaFlow from '@/assets/images/projects/khela-hobe-flow.jpg';
import khelaMockups from '@/assets/images/projects/khela-hobe-mockups.jpg';
import khelaGame from '@/assets/images/projects/khela-hobe-game.jpg';
import khelaLive from '@/assets/images/projects/khela-hobe-live.jpg';
import btpBuilder from '@/assets/images/projects/back-to-play-builder.jpg';
import btpSettings from '@/assets/images/projects/back-to-play-settings.jpg';
import btpRange from '@/assets/images/projects/back-to-play-range.jpg';
import btpUpload from '@/assets/images/projects/back-to-play-upload.jpg';

/** Case studies shown in the "Main quests" section, in display order. */
export const mainQuests: MainQuest[] = [
  {
    id: 'geniotech',
    title: 'Geniotech e-learning platform',
    summary: 'Live coding classes for kids, with booking, payments and video calls.',
    status: '[Completed] 2024',
    description:
      'Genio-tech, a kids’ coding school in Egypt, wanted to take its classes online and international. I designed the platform in Figma and built the frontend with a four-person team.',
    highlights: [
      'Designed the landing page, course browsing and checkout for parents',
      'Iterated course cards through three versions based on research and client feedback',
      'Integrated WebRTC video classrooms (up to 12 learners) and Square payments',
    ],
    tags: ['Figma', 'Django', 'WebRTC', 'Square', 'Bootstrap'],
    image: {
      src: geniotechLanding,
      alt: 'Geniotech landing page with a red hero banner for robotics and programming classes',
    },
    thumbnails: [
      { src: geniotechCards, alt: 'Course cards, version 2' },
      { src: geniotechClassroom, alt: 'Video classroom screen' },
      { src: geniotechCheckout, alt: 'Square checkout form' },
    ],
    links: [
      { label: 'Read case study', href: caseStudyHref('geniotech'), variant: 'primary' },
      {
        label: 'Behance',
        href: 'https://www.behance.net/gallery/197590325/Geniotech-Robotics-and-Programming-for-kids',
      },
      { label: 'Source', href: 'https://github.com/whichfahim/GENIO-TECH' },
    ],
  },
  {
    id: 'khela-hobe',
    title: 'Khela Hobe',
    summary: 'Bangla for “let’s play”: an app to find and book pickup games nearby.',
    status: '[Live] Side project',
    description:
      'A booking app for pickup football, cricket and more. Players pick a city, a sport, a venue and a slot, then join a game and split the fee. Field owners list venues and fill empty slots.',
    highlights: [
      'Designed the full mobile flow in Figma: city → sport → venue → slot → join → pay',
      'Game pages show format, price and open spots (e.g. 8v8, 4/16) at a glance, plus house rules and a map',
      'Bold graffiti branding; built in React, TypeScript and Tailwind',
    ],
    tags: ['Figma', 'React', 'TypeScript', 'Tailwind'],
    image: {
      src: khelaFlow,
      alt: 'Four Khela Hobe screens: splash, choose a sport, choose a slot, and game details with a Join Game button',
    },
    thumbnails: [
      { src: khelaMockups, alt: 'Khela Hobe phone mockups' },
      { src: khelaGame, alt: 'Game details screen with field photo, rules and Join Game button' },
      { src: khelaLive, alt: 'Khela Hobe live web app' },
    ],
    links: [
      { label: 'Live demo', href: 'https://khela-hobe.lovable.app/', variant: 'primary' },
      { label: 'Figma', href: 'https://www.figma.com/design/3ocmlcV0LLN5QmkGlKgMbL/Khela-Hobe?node-id=10-2' },
      { label: 'Behance', href: 'https://www.behance.net/gallery/223412067/Khela-Hobe' },
      { label: 'Source', href: 'https://github.com/whichfahim/khela-hobe' },
    ],
  },
  {
    id: 'back-to-play',
    title: 'BRAC IT: Back to Play assessments',
    summary: 'An assessment builder where every question is set up on one page.',
    status: '[Completed] 2021–22',
    description:
      'Admins building assessments for BRAC’s Back to Play programme had to jump between screens to set up each question. I redesigned the builder so everything happens on a single page, then rebuilt it in React.',
    highlights: [
      'Questions are edited in place; settings open in a side panel instead of a new screen',
      'Supports multiple choice, single choice, star rating and range questions, each mapped to sections and levels',
      'Also refactored dashboard widgets to update in real time from the API',
    ],
    tags: ['Figma', 'React', 'MongoDB'],
    image: {
      src: btpBuilder,
      alt: 'Back to Play Test Assessment builder with checkbox, radio and star-rating questions',
    },
    thumbnails: [
      { src: btpSettings, alt: 'Question settings side panel for a multiple selection question with levels' },
      { src: btpRange, alt: 'Range selection settings with labels, min, max and step size' },
      { src: btpUpload, alt: 'Upload a supporting image dialog' },
    ],
    links: [
      {
        label: 'Figma',
        href: 'https://www.figma.com/design/iqjjxBjJAgc4YeknnxhLAv/BackToPlay?node-id=0-1',
        variant: 'primary',
      },
    ],
  },
  {
    id: 'support-toolbox',
    title: 'Support toolbox',
    summary: 'Internal tools that save my team 20+ minutes per task.',
    status: '[Active] 2025–',
    description:
      'At FiftyTwo Digital I build and maintain the support team’s toolbox: transaction and log decoders and log extractors, deployed with Docker.',
    highlights: [
      'Replaced repetitive manual steps, saving 20+ minutes per task',
      'Maintain and deploy the toolbox server with Docker',
      'Automate with Python, Bash and PowerShell',
    ],
    tags: ['Python', 'Docker', 'Bash'],
    imageNote: 'Internal FiftyTwo tool: add a redacted screenshot or a diagram of the toolbox here',
    links: [],
  },
];
