import styles from './PixelGrid.module.css';

interface PixelGridProps {
  /** Rows of equal length. Each character is looked up in `colors`; unknown characters are transparent. */
  map: readonly string[];
  colors: Record<string, string>;
  /** Size of one pixel in CSS px. */
  pixelSize?: number;
  /** Accessible description. Leave out for decorative art. */
  label?: string;
}

/** Renders pixel art from a text map. Used for the theme dock's palette icons. */
export function PixelGrid({ map, colors, pixelSize = 3, label }: PixelGridProps) {
  const columns = map[0]?.length ?? 0;
  const a11y = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true };

  return (
    <span
      className={styles.grid}
      style={{ gridTemplateColumns: `repeat(${columns}, ${pixelSize}px)`, gridAutoRows: `${pixelSize}px` }}
      {...a11y}
    >
      {map.flatMap((row, y) =>
        row.split('').map((char, x) => (
          <span key={`${x}-${y}`} style={{ background: colors[char] ?? 'transparent' }} />
        )),
      )}
    </span>
  );
}
