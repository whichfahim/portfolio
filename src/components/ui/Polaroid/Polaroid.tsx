import { cx } from '@/utils/cx';
import styles from './Polaroid.module.css';

interface PolaroidProps {
  src: string;
  alt: string;
  caption: string;
  /** Scale small pixel-art images up with hard edges instead of blurring them. */
  pixelated?: boolean;
  /** Resting tilt in degrees. The photo straightens on hover. */
  tilt?: number;
  className?: string;
}

/** A photo in an instant-camera frame: even white margins, a deeper bottom edge and a handwritten-style caption. */
export function Polaroid({ src, alt, caption, pixelated = false, tilt = -2, className }: PolaroidProps) {
  return (
    <figure className={cx(styles.polaroid, className)} style={{ ['--tilt' as string]: `${tilt}deg` }}>
      <img className={cx(styles.photo, pixelated && styles.pixelated)} src={src} alt={alt} />
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  );
}
