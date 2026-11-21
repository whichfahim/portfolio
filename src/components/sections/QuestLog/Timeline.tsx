import { Badge } from '@/components/ui';
import type { QuestLogEntry } from '@/types/content';
import { cx } from '@/utils/cx';
import styles from './Timeline.module.css';

/** A vertical career timeline. The accent line fills up to the current role. */
export function Timeline({ entries }: { entries: QuestLogEntry[] }) {
  const currentIndex = entries.findIndex((entry) => entry.current);
  const filledShare = currentIndex < 0 ? 1 : currentIndex / Math.max(1, entries.length - 1);

  return (
    <div className={styles.timeline}>
      <span className={styles.rail} aria-hidden="true" />
      <span className={styles.fill} style={{ height: `${filledShare * 100}%` }} aria-hidden="true" />
      <ol className={styles.list}>
        {entries.map((entry) => (
          <li key={entry.title} className={styles.entry}>
            <span className={cx(styles.dot, entry.current && styles.dotCurrent)} aria-hidden="true" />
            <div className={styles.meta}>
              <span className={styles.period}>{entry.period}</span>
              {entry.current && <Badge variant="inverse">Current quest</Badge>}
            </div>
            <h3 className={styles.entryTitle}>{entry.title}</h3>
            <p className={styles.description}>{entry.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
