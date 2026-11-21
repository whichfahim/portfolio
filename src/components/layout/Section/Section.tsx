import type { ReactNode } from 'react';
import { cx } from '@/utils/cx';
import { Container } from '../Container/Container';
import styles from './Section.module.css';

interface SectionProps {
  id?: string;
  /** `dark` renders an inverted band (used by Side quests). */
  tone?: 'light' | 'dark';
  /** Draws a 2px rule above the section. */
  ruled?: boolean;
  labelledBy?: string;
  className?: string;
  children: ReactNode;
}

/** A full-width page section with vertical rhythm and a centred container. */
export function Section({ id, tone = 'light', ruled = false, labelledBy, className, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cx(styles.section, tone === 'dark' && styles.dark, ruled && styles.ruled, className)}
    >
      <Container className={styles.inner}>{children}</Container>
    </section>
  );
}
