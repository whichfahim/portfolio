import { cx } from '@/utils/cx';
import styles from './SectionLabel.module.css';

interface SectionLabelProps {
  /** Level number, e.g. 2 renders "LV.02". */
  level: number;
  title: string;
  /** Put the title on its own line under the level. */
  stacked?: boolean;
  tone?: 'light' | 'dark';
}

/** The game-style section marker: "LV.02 — Main quests". */
export function SectionLabel({ level, title, stacked = false, tone = 'light' }: SectionLabelProps) {
  const lv = `LV.${String(level).padStart(2, '0')}`;
  return (
    <p className={cx(styles.label, tone === 'dark' && styles.dark)}>
      {stacked ? (
        <>
          {lv}
          <br />
          <span className={styles.title}>{title}</span>
        </>
      ) : (
        `${lv} — ${title}`
      )}
    </p>
  );
}
