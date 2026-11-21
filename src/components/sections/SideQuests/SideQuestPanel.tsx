import { CodeTagList, LinkButtons } from '@/components/ui';
import type { SideQuest } from '@/types/content';
import { SideQuestMedia } from './SideQuestMedia';
import styles from './SideQuestPanel.module.css';

export function SideQuestPanel({ quest }: { quest: SideQuest }) {
  return (
    <div className={styles.panel}>
      <SideQuestMedia media={quest.media} />
      <div className={styles.details}>
        <p className={styles.description}>{quest.description}</p>
        <CodeTagList tags={quest.tags} tone="dark" />
        <LinkButtons links={quest.links} tone="dark" />
      </div>
    </div>
  );
}
