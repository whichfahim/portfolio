import type { SideQuestMedia as Media } from '@/types/content';
import { KitPreview } from './KitPreview';
import styles from './SideQuestMedia.module.css';

/** Renders the preview area for a side quest: a screenshot, a design/build pair or the live kit preview. */
export function SideQuestMedia({ media }: { media: Media }) {
  switch (media.kind) {
    case 'image':
      return <img className={styles.single} src={media.image.src} alt={media.image.alt} loading="lazy" />;

    case 'compare':
      return (
        <div className={styles.compare}>
          {media.images.map((image, i) => (
            <figure key={image.src} className={styles.figure}>
              <figcaption className={i === 0 ? styles.tagDesign : styles.tagBuild}>{image.label}</figcaption>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      );

    case 'kit-preview':
      return <KitPreview />;
  }
}
