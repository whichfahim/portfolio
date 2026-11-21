import type { LinkItem } from "@/types/content";
import avatarImage from "@/assets/images/profile/fahim-pixel.png";

/** Personal details and contact links. Edit here to update the whole site. */
export const profile = {
  name: "Fahim Imtiaz",
  initials: "FI",
  role: "Design Engineer",
  city: "Dhaka, BD",
  timeZone: "Asia/Dhaka",
  utcOffsetLabel: "GMT+6",
  coordinates: "23.8103° N, 90.4125° E",
  email: "fahim.imtiaz07@gmail.com",
  availability: "Looking for my next quest!",
  guild: "FiftyTwo Digital",
  /** 64×64 pixel-art portrait, shown in a polaroid frame in the Quest log. */
  avatar: {
    src: avatarImage,
    alt: "Pixel-art portrait of Fahim Imtiaz",
    caption: "Player 1 · Fahim",
  },
  intro:
    "Hiya, I'm your friendly neighbourhood jack-of-all-trades: UI/UX designer, front-end engineer, branding specialist, and interaction designer. I like building cool things for the web and solving intriguing problems.",
  approach:
    "I can take a design from mockup to production, and a concept from idea to implementation. I like to think of myself as a bridge between design and development, and I enjoy working on projects that lets me work on both sides.",
  /** The word in `approach` that gets the accent colour when the scroll-fill reaches it. */
  approachHighlight: "bridge",
  equipped: ["Figma", "React", "TypeScript"],
  /** Values the hero card's "status" field types out in turn. */
  statusCycle: [
    "looking_for_party",
    "accepting_quests",
    "player_2_wanted",
    "open_to_remote_and_contract",
    "lvl_up_in_progress",
  ],
  lookingFor:
    "Looking for my next quest in UI/UX, front-end engineering or design systems, across time (zones) and space.",
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
};

/**
 * Contact links shown in the Save point section.
 * Leave UPWORK_URL empty to hide the "Hire me on Upwork" button.
 */
const UPWORK_URL = "https://www.upwork.com/freelancers/~01782abb3d7ed27458";

export const contactLinks: LinkItem[] = [
  ...(UPWORK_URL
    ? [
        {
          label: "Hire me on Upwork",
          href: UPWORK_URL,
          variant: "primary" as const,
        },
      ]
    : []),
  { label: "LinkedIn", href: "https://www.linkedin.com/in/fahim-imtiaz" },
  { label: "GitHub", href: "https://github.com/whichfahim" },
  { label: "Dribbble", href: "https://dribbble.com/whichfahim" },
  { label: "Behance", href: "https://www.behance.net/fahimimtiaz3" },
];

export const moreWorkLinks: LinkItem[] = [
  { label: "GitHub", href: "https://github.com/whichfahim" },
  { label: "Behance", href: "https://www.behance.net/fahimimtiaz3" },
  { label: "Dribbble", href: "https://dribbble.com/whichfahim" },
];

/** Items in the scrolling "inventory" strip under the hero. */
export const inventory = [
  "Figma",
  "React",
  "TypeScript",
  "Design systems",
  "Motion",
  "Accessibility",
  "Python",
  "Docker",
];
