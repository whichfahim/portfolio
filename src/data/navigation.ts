/** Section anchors used by the header. Ids must match the `id` on each section. */
export const SECTION_IDS = {
  top: 'top',
  work: 'work',
  sideQuests: 'side-quests',
  log: 'log',
  contact: 'contact',
} as const;

export const navItems = [
  { label: 'Quests', target: SECTION_IDS.work },
  { label: 'Side quests', target: SECTION_IDS.sideQuests },
  { label: 'Log', target: SECTION_IDS.log },
  { label: 'Contact', target: SECTION_IDS.contact },
];
