import { LinkButtons } from '@/components/ui';
import type { CaseStudy } from '@/types/content';
import styles from './OutcomePanel.module.css';

/** The dark "Quest complete" panel: what shipped, honest context, stats and links. */
export function OutcomePanel({ outcome }: { outcome: CaseStudy['outcome'] }) {
  return (
    <section className={styles.panel} aria-label="Outcome">
      <div className={styles.top}>
        <div className={styles.summaryBlock}>
          <p className={styles.eyebrow}>Quest complete — rewards</p>
          <p className={styles.summary}>{outcome.summary}</p>
        </div>
        <p className={styles.note}>{outcome.note}</p>
      </div>
      <dl className={styles.stats}>
        {outcome.stats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <dt className={styles.statValue}>{stat.value}</dt>
            <dd className={styles.statLabel}>{stat.label}</dd>
          </div>
        ))}
      </dl>
      <LinkButtons links={outcome.links} tone="dark" />
    </section>
  );
}
