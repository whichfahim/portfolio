import { useRef } from 'react';
import { useElementScrollProgress } from '@/hooks/useScrollProgress';
import { cx } from '@/utils/cx';
import styles from './ScrollFillText.module.css';

interface ScrollFillTextProps {
  text: string;
  /** A word (including punctuation) that turns the accent colour once filled. */
  highlight?: string;
  className?: string;
}

/** A paragraph whose words fill from grey to full colour as it scrolls through the viewport. */
export function ScrollFillText({ text, highlight, className }: ScrollFillTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const progress = useElementScrollProgress(ref);
  const words = text.split(' ');
  const filledCount = Math.round(words.length * progress);

  return (
    <p ref={ref} className={cx(styles.text, className)}>
      {/* Screen readers get the sentence once, not word by word. */}
      <span className="visually-hidden">{text}</span>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className={cx(styles.word, i < filledCount && styles.filled, i < filledCount && word === highlight && styles.highlight)}
          >
            {word}{' '}
          </span>
        ))}
      </span>
    </p>
  );
}
