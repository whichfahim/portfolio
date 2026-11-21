import type { ElementType, ReactNode } from 'react';
import { cx } from '@/utils/cx';
import styles from './Container.module.css';

interface ContainerProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

/** Centres content at the site's max width with consistent side gutters. */
export function Container({ as: Tag = 'div', className, children }: ContainerProps) {
  return <Tag className={cx(styles.container, className)}>{children}</Tag>;
}
