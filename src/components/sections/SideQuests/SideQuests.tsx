import { AccordionItem, Badge } from '@/components/ui';
import { Section, SectionHeader } from '@/components/layout';
import { SECTION_IDS } from '@/data/navigation';
import { moreWorkLinks } from '@/data/profile';
import { sideQuests } from '@/data/sideQuests';
import { useSingleOpen } from '@/hooks/useSingleOpen';
import { SideQuestPanel } from './SideQuestPanel';
import styles from './SideQuests.module.css';

export function SideQuests() {
  const { isOpen, toggle } = useSingleOpen(sideQuests[0]?.id ?? null);

  return (
    <Section id={SECTION_IDS.sideQuests} tone="dark" labelledBy="side-quests-title">
      <SectionHeader
        id="side-quests-title"
        level={3}
        label="Side quests"
        title="Playground"
        tone="dark"
        aside="Five things I built for fun or to learn. Each one is finished and has something you can open."
      />
      <div className={styles.list}>
        {sideQuests.map((quest) => (
          <AccordionItem
            key={quest.id}
            tone="dark"
            open={isOpen(quest.id)}
            onToggle={() => toggle(quest.id)}
            header={
              <>
                <span className={styles.category}>[{quest.category}]</span>
                <span className={styles.titles}>
                  <span className={styles.title}>{quest.title}</span>
                  <span className={styles.hook}>{quest.hook}</span>
                </span>
                <Badge variant={quest.isLive ? 'dark-filled' : 'dark-outline'}>{quest.badge}</Badge>
              </>
            }
          >
            <SideQuestPanel quest={quest} />
          </AccordionItem>
        ))}
      </div>
      <p className={styles.more}>
        <span>More experiments on</span>
        {moreWorkLinks.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label} →
          </a>
        ))}
      </p>
    </Section>
  );
}
