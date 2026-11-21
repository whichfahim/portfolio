import { useEffect, useState } from 'react';

interface TypewriterOptions {
  /** Delay between typed characters, in ms. */
  typeSpeed?: number;
  /** Delay between deleted characters, in ms. */
  deleteSpeed?: number;
  /** How long a fully typed word stays on screen, in ms. */
  holdTime?: number;
  /** Pause on the empty string before typing the next word, in ms. */
  gapTime?: number;
}

type Phase = 'typing' | 'holding' | 'deleting' | 'gap';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Cycles through `words` like a typist: types a word, holds it, deletes it
 * character by character, then types the next. With reduced motion turned on,
 * it swaps whole words instead of animating each character.
 */
export function useTypewriter(
  words: readonly string[],
  { typeSpeed = 70, deleteSpeed = 35, holdTime = 2200, gapTime = 400 }: TypewriterOptions = {},
): string {
  const [wordIndex, setWordIndex] = useState(0);
  const [length, setLength] = useState(words[0]?.length ?? 0);
  const [phase, setPhase] = useState<Phase>('holding');

  useEffect(() => {
    if (words.length < 2) return;
    const word = words[wordIndex] ?? '';

    if (prefersReducedMotion()) {
      const id = window.setTimeout(() => {
        const next = (wordIndex + 1) % words.length;
        setWordIndex(next);
        setLength(words[next].length);
      }, holdTime + 1000);
      return () => window.clearTimeout(id);
    }

    let delay: number;
    let step: () => void;

    switch (phase) {
      case 'typing':
        delay = typeSpeed;
        step = () => (length < word.length ? setLength(length + 1) : setPhase('holding'));
        break;
      case 'holding':
        delay = holdTime;
        step = () => setPhase('deleting');
        break;
      case 'deleting':
        delay = deleteSpeed;
        step = () => (length > 0 ? setLength(length - 1) : setPhase('gap'));
        break;
      case 'gap':
        delay = gapTime;
        step = () => {
          setWordIndex((wordIndex + 1) % words.length);
          setPhase('typing');
        };
        break;
    }

    const id = window.setTimeout(step, delay);
    return () => window.clearTimeout(id);
  }, [words, wordIndex, length, phase, typeSpeed, deleteSpeed, holdTime, gapTime]);

  return (words[wordIndex] ?? '').slice(0, length);
}
