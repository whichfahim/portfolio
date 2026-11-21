import { cx } from '@/utils/cx';
import styles from './CodeTag.module.css';

interface CodeTagProps {
  label: string;
  tone?: 'light' | 'dark';
}

/** A tech tag styled like a JSX element: <React>. */
export function CodeTag({ label, tone = 'light' }: CodeTagProps) {
  return <span className={cx(styles.tag, tone === 'dark' && styles.dark)}>&lt;{label}&gt;</span>;
}

interface CodeTagListProps {
  tags: string[];
  tone?: 'light' | 'dark';
}

export function CodeTagList({ tags, tone }: CodeTagListProps) {
  return (
    <ul className={styles.list} aria-label="Tools and technologies">
      {tags.map((tag) => (
        <li key={tag}>
          <CodeTag label={tag} tone={tone} />
        </li>
      ))}
    </ul>
  );
}
