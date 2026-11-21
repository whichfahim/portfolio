import { AccordionItem } from '@/components/ui';
import { Section, SectionHeader } from '@/components/layout';
import { mainQuests } from '@/data/mainQuests';
import { SECTION_IDS } from '@/data/navigation';
import { useSingleOpen } from '@/hooks/useSingleOpen';
import { MainQuestPanel } from './MainQuestPanel';
import styles from './MainQuests.module.css';

export function MainQuests() {
  const { isOpen, toggle } = useSingleOpen(mainQuests[0]?.id ?? null);

  return (
    <Section id={SECTION_IDS.work} ruled labelledBy="main-quests-title">
      <SectionHeader
        id="main-quests-title"
        level={2}
        label="Main quests"
        title="Case studies"
        aside="Open a quest to see screenshots, what I did, and links to the live build, code and design files."
      />
      <div className={styles.list}>
        {mainQuests.map((quest, index) => (
          <AccordionItem
            key={quest.id}
            open={isOpen(quest.id)}
            onToggle={() => toggle(quest.id)}
            header={
              <>
                <span className={styles.number}>Q.{String(index + 1).padStart(2, '0')}</span>
                <span className={styles.titles}>
                  <span className={styles.title}>{quest.title}</span>
                  <span className={styles.summary}>{quest.summary}</span>
                </span>
                <span className={styles.status}>{quest.status}</span>
              </>
            }
          >
            <MainQuestPanel quest={quest} />
          </AccordionItem>
        ))}
      </div>
    </Section>
  );
}
