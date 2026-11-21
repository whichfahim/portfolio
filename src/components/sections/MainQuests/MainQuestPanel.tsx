import { CodeTagList, LinkButtons } from '@/components/ui';
import type { MainQuest } from '@/types/content';
import styles from './MainQuestPanel.module.css';

/** The expanded content of a main quest: screenshots on the left, details and links on the right. */
export function MainQuestPanel({ quest }: { quest: MainQuest }) {
  return (
    <div className={styles.panel}>
      <div className={styles.media}>
        {quest.image ? (
          <img className={styles.hero} src={quest.image.src} alt={quest.image.alt} loading="lazy" />
        ) : (
          <div className={styles.placeholder}>{quest.imageNote}</div>
        )}
        {quest.thumbnails && quest.thumbnails.length > 0 && (
          <div className={styles.thumbs}>
            {quest.thumbnails.map((thumb) => (
              <img key={thumb.src} src={thumb.src} alt={thumb.alt} loading="lazy" />
            ))}
          </div>
        )}
      </div>

      <div className={styles.details}>
        <p className={styles.description}>{quest.description}</p>
        <ul className={styles.highlights}>
          {quest.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <CodeTagList tags={quest.tags} />
        <LinkButtons links={quest.links} />
      </div>
    </div>
  );
}
