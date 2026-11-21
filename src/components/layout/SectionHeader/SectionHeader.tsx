import type { ReactNode } from 'react';
import { cx } from '@/utils/cx';
import { SectionLabel } from '@/components/ui';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  id: string;
  level: number;
  label: string;
  title: string;
  /** Short supporting text shown to the right of the title. */
  aside?: ReactNode;
  tone?: 'light' | 'dark';
}

/** Section intro: level label, big display heading and an optional aside. */
export function SectionHeader({ id, level, label, title, aside, tone = 'light' }: SectionHeaderProps) {
  return (
    <header className={styles.header}>
      <div>
        <SectionLabel level={level} title={label} tone={tone} />
        <h2 id={id} className={styles.title}>
          {title}
        </h2>
      </div>
      {aside && <p className={cx(styles.aside, tone === 'dark' && styles.asideDark)}>{aside}</p>}
    </header>
  );
}
