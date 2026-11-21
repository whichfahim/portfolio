import type { CaseStudy } from '@/types/content';
import { geniotechCaseStudy } from './geniotech';

/** Register new case studies here. The key is the URL slug: #/work/<slug>. */
export const caseStudies: Record<string, CaseStudy> = {
  [geniotechCaseStudy.slug]: geniotechCaseStudy,
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}
