import type { CaseStudy } from '@/types/content';
import { HOME_HREF } from '@/routes';

import landing from '@/assets/images/case-studies/geniotech/landing.jpg';
import palette from '@/assets/images/case-studies/geniotech/brand-palette.jpg';
import cardsV1 from '@/assets/images/case-studies/geniotech/course-cards-v1.jpg';
import cardsV2 from '@/assets/images/case-studies/geniotech/course-cards-v2.jpg';
import classroom from '@/assets/images/case-studies/geniotech/classroom.jpg';

export const geniotechCaseStudy: CaseStudy = {
  slug: 'geniotech',
  questNumber: '01',
  eyebrow: 'Quest 01 — Genio-tech, Egypt',
  title: 'Taking a kids’ coding school online: courses, checkout and live classes in one place.',
  meta: [
    { label: 'Role', value: 'UI/UX & Frontend Developer' },
    { label: 'Client', value: 'Genio-tech, Egypt' },
    { label: 'Party', value: 'Four people, cross-functional' },
    { label: 'Timeline', value: 'Jan – Apr 2024' },
    { label: 'Equipped', value: 'Figma, Django, Bootstrap, WebRTC, Square' },
  ],
  hero: {
    src: landing,
    alt: 'Geniotech landing page: red hero banner reading Robotics and Programming Classes Online for Kids',
    caption: 'The final landing page, designed for parents looking for classes for their kids.',
  },
  chapters: [
    {
      stage: 'Stage 1',
      label: 'The problem',
      heading: 'A kids’ coding school that wanted to go global.',
      paragraphs: [
        'Genio-tech teaches programming and robotics to kids aged 3 to 18+ in Egypt. They wanted to reach families in other countries by running their existing courses, and some new ones, as live online classes.',
        'That meant one platform had to do three jobs: help parents find the right course, let them pay, and host the class itself.',
      ],
    },
    {
      stage: 'Stage 2',
      label: 'Process',
      heading: 'Research first, then the brand, then the screens.',
      paragraphs: [
        'I studied competing kids’ coding platforms and borrowed what worked in their layouts and user journeys. I built the colour palette from Genio-tech’s logo with Figma’s Image Palette plugin, and paired Black Han Sans with Inter to stay consistent with their existing platform.',
        'The landing page was designed for the people who actually book classes: parents, not kids. I took the course cards through three versions, testing each against research and client feedback.',
      ],
    },
    {
      stage: 'Stage 3',
      label: 'Build',
      heading: 'Courses, checkout and classrooms, without leaving the page.',
      paragraphs: [
        'We built the platform on Django with HTML, CSS, JavaScript and Bootstrap. I integrated a WebRTC classroom with live chat, screen sharing and screen recording, holding up to 12 learners per class.',
        'Payments run through Square, because that is what the client already used. Admins get a course management screen to add, edit and remove courses, and I fixed the UX and frontend issues QA reported along the way.',
      ],
    },
  ],
  figures: [
    {
      tag: 'Brand',
      src: palette,
      alt: 'Colour palette and typography taken from the Geniotech logo',
      caption: 'Palette pulled from the logo; type matched to the existing platform.',
    },
    {
      tag: 'Cards v1.1',
      src: cardsV1,
      alt: 'Course cards version 1.1 with age, level and price info blocks',
      caption: 'Info blocks for age, duration and price, plus a like button.',
    },
    {
      tag: 'Cards v2.0',
      src: cardsV2,
      alt: 'Course cards version 2.0 in a horizontal layout with a pricing panel',
      caption: 'Horizontal cards with a pricing panel. No more empty space.',
    },
    {
      tag: 'Classroom',
      src: classroom,
      alt: 'Live video classroom with participants list and chat',
      caption: 'WebRTC classroom with chat, screen sharing and recording.',
    },
  ],
  decisions: [
    {
      title: 'Say “Ages 6–10”, not “Jr”',
      body: 'My first cards labelled courses Jr/Sr and L1–L3. Parents wouldn’t know what those meant, so v1.1 spelled out the exact age group, duration and price before the call to action.',
    },
    {
      title: 'Use the empty space',
      body: 'Earlier cards left awkward whitespace when a topic had only a few courses. v2.0 switched to wide cards with a pricing panel, and the section’s height now adapts to the number of courses.',
    },
    {
      title: 'Choose by interest, not reviews',
      body: 'The client asked to remove ratings and instructor names: they wanted kids to choose courses by what excites them. I kept a like button so the team could still see which courses were popular.',
    },
  ],
  outcome: {
    summary:
      'A working platform in one semester: parents can browse courses, pay, and join a live class without leaving the site.',
    note: 'This was an academic project with a real client and a fixed deadline. Next, I’d add personalised learning paths that recommend courses from a child’s interests and past classes.',
    stats: [
      { value: '3', label: 'core features: course management, browse and checkout, live classrooms' },
      { value: '12', label: 'learners per live classroom, with chat and screen sharing' },
      { value: '3', label: 'course card iterations, from research and client feedback' },
      { value: '4 mo', label: 'from research to working build, alongside a master’s' },
    ],
    links: [
      {
        label: 'Full process on Behance',
        href: 'https://www.behance.net/gallery/197590325/Geniotech-Robotics-and-Programming-for-kids',
        variant: 'primary',
      },
      { label: 'Source on GitHub', href: 'https://github.com/whichfahim/GENIO-TECH' },
    ],
  },
  next: { label: 'Back to all quests', href: HOME_HREF },
};
