import { useTypewriter } from '@/hooks/useTypewriter';
import { cx } from '@/utils/cx';
import styles from './TypewriterText.module.css';

interface TypewriterTextProps {
  words: readonly string[];
  /** Read by screen readers instead of the animation, e.g. a summary of all the words. */
  accessibleText: string;
  className?: string;
}

/** Text that types, holds, deletes and retypes through a list of words, with a blinking block cursor. */
export function TypewriterText({ words, accessibleText, className }: TypewriterTextProps) {
  const text = useTypewriter(words);

  return (
    <span className={cx(styles.wrap, className)}>
      <span className="visually-hidden">{accessibleText}</span>
      <span aria-hidden="true">
        {text}
        <span className={styles.cursor} />
      </span>
    </span>
  );
}
