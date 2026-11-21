import { useEffect } from 'react';
import { Footer, Header, ThemeDock } from '@/components/layout';
import { profile } from '@/data/profile';
import { useHashRoute } from '@/hooks/useHashRoute';
import { CaseStudyPage } from '@/pages/CaseStudyPage';
import { HomePage } from '@/pages/HomePage';
import { scrollToSection } from '@/utils/scrollToSection';

const DEFAULT_TITLE = `${profile.name} — ${profile.role}`;

export function App() {
  const route = useHashRoute();
  const onHomePage = route.name === 'home';

  // Reset scroll and title on page change; scroll to an anchor when the URL has one.
  useEffect(() => {
    if (route.name === 'home') {
      document.title = DEFAULT_TITLE;
      if (route.anchor) {
        requestAnimationFrame(() => scrollToSection(route.anchor as string));
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [route]);

  return (
    <div className="theme-fade">
      <a
        className="skip-link"
        href="#main"
        onClick={(event) => {
          // Move focus without changing the hash, which would trigger a route change.
          event.preventDefault();
          document.getElementById('main')?.focus();
        }}
      >
        Skip to content
      </a>
      <Header onHomePage={onHomePage} />
      <main id="main" tabIndex={-1}>
        {route.name === 'case-study' ? <CaseStudyPage slug={route.slug} /> : <HomePage />}
      </main>
      <Footer />
      <ThemeDock />
    </div>
  );
}
