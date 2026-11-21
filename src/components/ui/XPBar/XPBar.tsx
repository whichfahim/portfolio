import { cx } from '@/utils/cx';
import styles from './XPBar.module.css';

interface XPBarProps {
  /** Progress from 0 to 1. */
  value: number;
  label?: string;
  cells?: number;
  size?: 'sm' | 'md';
  /** Accessible description, e.g. "Page scroll progress". */
  ariaLabel: string;
  className?: string;
}

/** A segmented pixel progress bar. */
export function XPBar({ value, label = 'XP', cells = 10, size = 'sm', ariaLabel, className }: XPBarProps) {
  const filled = Math.round(Math.min(1, Math.max(0, value)) * cells);
  const percent = Math.round(value * 100);

  return (
    <div className={cx(styles.wrap, styles[size], className)}>
      <span className={styles.label} aria-hidden="true">
        {label}
      </span>
      <div
        className={styles.track}
        role="progressbar"
        aria-label={ariaLabel}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
      >
        {Array.from({ length: cells }, (_, i) => (
          <span key={i} className={cx(styles.cell, i < filled && styles.on)} />
        ))}
      </div>
    </div>
  );
}
