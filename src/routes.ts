/**
 * Hash-based routes. GitHub Pages has no server-side fallback, so hash URLs
 * (`#/work/geniotech`) keep deep links working without a 404 hack.
 *
 * Any hash that doesn't start with `#/` is treated as an in-page anchor on the home page.
 */
export type Route = { name: 'home'; anchor?: string } | { name: 'case-study'; slug: string };

export const HOME_HREF = '#/';

export function caseStudyHref(slug: string): string {
  return `#/work/${slug}`;
}

export function parseHash(hash: string): Route {
  const caseStudy = hash.match(/^#\/work\/([\w-]+)\/?$/);
  if (caseStudy) return { name: 'case-study', slug: caseStudy[1] };
  if (hash.startsWith('#') && !hash.startsWith('#/') && hash.length > 1) {
    return { name: 'home', anchor: hash.slice(1) };
  }
  return { name: 'home' };
}
