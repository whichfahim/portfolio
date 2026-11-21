import type { CaseStudy } from '@/types/content';
import styles from './CaseStudyHeader.module.css';

/** Eyebrow, title and the role/client/timeline strip. */
export function CaseStudyHeader({ study }: { study: CaseStudy }) {
  return (
    <header className={styles.header}>
      <p className={styles.eyebrow}>{study.eyebrow}</p>
      <h1 className={styles.title}>{study.title}</h1>
      <dl className={styles.meta}>
        {study.meta.map((item) => (
          <div key={item.label} className={styles.metaItem}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}
