import type { ReactNode } from 'react';
import { cx } from '@/utils/cx';
import styles from './Badge.module.css';

export type BadgeVariant = 'outline' | 'filled' | 'inverse' | 'dark-filled' | 'dark-outline';

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
}

/** A small pixel-font label: status chips like [Completed], Live demo or Current quest. */
export function Badge({ variant = 'outline', children }: BadgeProps) {
  return <span className={cx(styles.badge, styles[variant])}>{children}</span>;
}
