import { useId, type ReactNode } from 'react';
import { cx } from '@/utils/cx';
import styles from './AccordionItem.module.css';

interface AccordionItemProps {
  open: boolean;
  onToggle: () => void;
  /** Content of the clickable header row (title, summary, badges). */
  header: ReactNode;
  children: ReactNode;
  tone?: 'light' | 'dark';
  /** Heading level for the header button. */
  headingLevel?: 'h3' | 'h4';
}

/**
 * A controlled disclosure card with a +/− toggle. The parent owns which item is
 * open, so a list can allow one or many open items.
 */
export function AccordionItem({ open, onToggle, header, children, tone = 'light', headingLevel = 'h3' }: AccordionItemProps) {
  const id = useId();
  const panelId = `${id}-panel`;
  const Heading = headingLevel;

  return (
    <article className={cx(styles.item, tone === 'dark' && styles.dark, open && styles.open)}>
      <Heading className={styles.heading}>
        <button
          type="button"
          className={styles.trigger}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className={styles.headerContent}>{header}</span>
          <span className={styles.icon} aria-hidden="true">
            {open ? '−' : '+'}
          </span>
        </button>
      </Heading>
      {open && (
        <div id={panelId} className={styles.panel}>
          {children}
        </div>
      )}
    </article>
  );
}
