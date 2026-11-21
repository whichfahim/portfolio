import { useEffect, useRef, useState, type RefObject } from 'react';

const clamp = (value: number) => Math.min(1, Math.max(0, value));

/**
 * Calls `measure` once on mount and then on scroll/resize, at most once per animation frame.
 * The latest `measure` is kept in a ref so listeners are only attached once.
 */
function useOnScroll(measure: () => void) {
  const measureRef = useRef(measure);
  measureRef.current = measure;

  useEffect(() => {
    let frame = 0;
    const run = () => measureRef.current();
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(run);
    };
    run();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
}

/** How far the page has been scrolled, from 0 to 1. Drives the header XP bar. */
export function usePageScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useOnScroll(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    setProgress(max > 0 ? clamp(window.scrollY / max) : 0);
  });

  return progress;
}

/**
 * How far an element has travelled through the viewport, from 0 (its top just
 * entered the bottom of the screen) to 1 (its bottom reached the middle).
 * Drives the scroll-fill text.
 */
export function useElementScrollProgress(ref: RefObject<HTMLElement>): number {
  const [progress, setProgress] = useState(0);

  useOnScroll(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const start = window.innerHeight;
    const end = window.innerHeight / 2 - rect.height;
    setProgress(clamp((start - rect.top) / (start - end)));
  });

  return progress;
}
