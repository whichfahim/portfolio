import type { LinkItem } from '@/types/content';
import { PixelButton, type PixelButtonTone } from '../PixelButton/PixelButton';
import styles from './LinkButtons.module.css';

interface LinkButtonsProps {
  links: LinkItem[];
  tone?: PixelButtonTone;
}

/** Renders a row of PixelButtons from link data. Renders nothing for an empty list. */
export function LinkButtons({ links, tone = 'light' }: LinkButtonsProps) {
  if (links.length === 0) return null;
  return (
    <div className={styles.row}>
      {links.map((link) => (
        <PixelButton key={link.href + link.label} href={link.href} variant={link.variant ?? 'secondary'} tone={tone}>
          {link.label}
        </PixelButton>
      ))}
    </div>
  );
}
