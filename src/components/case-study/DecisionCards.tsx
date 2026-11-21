import type { CaseStudyDecision } from '@/types/content';
import styles from './DecisionCards.module.css';

export function DecisionCards({ decisions }: { decisions: CaseStudyDecision[] }) {
  return (
    <section className={styles.section} aria-label="Key decisions">
      <p className={styles.title}>Key decisions</p>
      <ol className={styles.grid}>
        {decisions.map((decision, i) => (
          <li key={decision.title} className={styles.card}>
            <span className={styles.number} aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className={styles.heading}>{decision.title}</h3>
            <p className={styles.body}>{decision.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
