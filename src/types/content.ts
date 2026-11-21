/** Shared content models. Every section of the site renders from data shaped like this. */

export type LinkVariant = 'primary' | 'secondary';

export interface LinkItem {
  label: string;
  href: string;
  /** Primary links get the accent fill. Defaults to secondary. */
  variant?: LinkVariant;
}

export interface ImageAsset {
  src: string;
  alt: string;
}

/** A labelled image, used for before/after or design/build pairs. */
export interface LabelledImage extends ImageAsset {
  label: string;
}

/** A case-study style project shown in the "Main quests" section. */
export interface MainQuest {
  id: string;
  title: string;
  /** One plain-language line a stranger understands in five seconds. */
  summary: string;
  status: string;
  description: string;
  highlights: string[];
  tags: string[];
  links: LinkItem[];
  /** Hero image. Leave out for work that can't be shown publicly. */
  image?: ImageAsset;
  /** Shown instead of the image when there is none. */
  imageNote?: string;
  thumbnails?: ImageAsset[];
}

/** How a side quest's preview area is rendered. */
export type SideQuestMedia =
  | { kind: 'image'; image: ImageAsset }
  | { kind: 'compare'; images: [LabelledImage, LabelledImage] }
  | { kind: 'kit-preview' };

/** A smaller project shown in the "Side quests" section. */
export interface SideQuest {
  id: string;
  category: string;
  title: string;
  /** One plain-language line a stranger understands in five seconds. */
  hook: string;
  badge: string;
  /** Live projects get a filled badge. */
  isLive?: boolean;
  description: string;
  tags: string[];
  links: LinkItem[];
  media: SideQuestMedia;
}

export interface QuestLogEntry {
  period: string;
  title: string;
  description: string;
  current?: boolean;
}

export interface CaseStudyChapter {
  stage: string;
  label: string;
  heading: string;
  paragraphs: string[];
}

export interface CaseStudyFigure extends ImageAsset {
  tag: string;
  caption: string;
}

export interface CaseStudyDecision {
  title: string;
  body: string;
}

export interface CaseStudyStat {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  questNumber: string;
  eyebrow: string;
  title: string;
  meta: { label: string; value: string }[];
  hero: ImageAsset & { caption: string };
  chapters: CaseStudyChapter[];
  figures: CaseStudyFigure[];
  decisions: CaseStudyDecision[];
  outcome: { summary: string; note: string; stats: CaseStudyStat[]; links: LinkItem[] };
  next?: { label: string; href: string };
}
