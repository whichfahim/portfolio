import { useEffect } from 'react';
import { CaseStudyHeader, ChapterList, DecisionCards, FigureGrid, OutcomePanel } from '@/components/case-study';
import { Container } from '@/components/layout';
import { PixelButton } from '@/components/ui';
import { getCaseStudy } from '@/data/caseStudies';
import { profile } from '@/data/profile';
import { HOME_HREF } from '@/routes';
import { NotFoundPage } from './NotFoundPage';
import styles from './CaseStudyPage.module.css';

const BackIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" shapeRendering="crispEdges">
    <rect x="8" y="0" width="2" height="12" fill="currentColor" />
    <rect x="6" y="2" width="2" height="8" fill="currentColor" />
    <rect x="4" y="4" width="2" height="4" fill="currentColor" />
  </svg>
);

export function CaseStudyPage({ slug }: { slug: string }) {
  const study = getCaseStudy(slug);

  useEffect(() => {
    if (study) document.title = `${study.eyebrow.split('—')[1]?.trim() ?? 'Case study'} — ${profile.name}`;
  }, [study]);

  if (!study) return <NotFoundPage />;

  return (
    <Container as="article" className={styles.page}>
      <div className={styles.topBar}>
        <PixelButton href={HOME_HREF} icon={<BackIcon />}>
          Back to map
        </PixelButton>
        <span className={styles.questTag}>Quest {study.questNumber} · [Completed]</span>
      </div>

      <CaseStudyHeader study={study} />

      <figure className={styles.hero}>
        <img src={study.hero.src} alt={study.hero.alt} />
        <figcaption>{study.hero.caption}</figcaption>
      </figure>

      <ChapterList chapters={study.chapters} />
      <FigureGrid title="From Figma to build" figures={study.figures} />
      <DecisionCards decisions={study.decisions} />
      <OutcomePanel outcome={study.outcome} />

      {study.next && (
        <a href={study.next.href} className={styles.next}>
          <span className={styles.nextLabel}>Continue</span>
          <span className={styles.nextTitle}>
            {study.next.label} <span aria-hidden="true">→</span>
          </span>
        </a>
      )}
    </Container>
  );
}
