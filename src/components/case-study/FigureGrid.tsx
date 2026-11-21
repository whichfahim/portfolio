import type { CaseStudyFigure } from '@/types/content';
import styles from './FigureGrid.module.css';

interface FigureGridProps {
  title: string;
  figures: CaseStudyFigure[];
}

/** A row of captioned process images (Figma explorations, iterations, final screens). */
export function FigureGrid({ title, figures }: FigureGridProps) {
  return (
    <section className={styles.section} aria-label={title}>
      <p className={styles.title}>{title}</p>
      <div className={styles.grid}>
        {figures.map((figure) => (
          <figure key={figure.src} className={styles.figure}>
            <img src={figure.src} alt={figure.alt} loading="lazy" />
            <figcaption>
              <strong className={styles.tag}>{figure.tag}</strong>
              {figure.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
