import type { ChangeEvent } from 'react';
import { cx } from '@/utils/cx';
import styles from './InlineEdit.module.css';

interface InlineEditProps {
  value: string;
  onChange: (value: string) => void;
  /** Accessible name, e.g. "Edit class". */
  label: string;
  maxLength?: number;
  className?: string;
}

/**
 * A text input that looks like plain inline text and grows with its content.
 * Designed for monospace contexts, where `ch` units match character width exactly.
 */
export function InlineEdit({ value, onChange, label, maxLength = 40, className }: InlineEditProps) {
  return (
    <input
      type="text"
      className={cx(styles.input, className)}
      value={value}
      maxLength={maxLength}
      aria-label={label}
      spellCheck={false}
      autoComplete="off"
      style={{ width: `${Math.max(1, value.length)}ch` }}
      onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
    />
  );
}
