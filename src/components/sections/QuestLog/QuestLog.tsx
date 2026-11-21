import { SectionLabel } from "@/components/ui";
import { Container } from "@/components/layout";
import { SECTION_IDS } from "@/data/navigation";
import { profile } from "@/data/profile";
import { questLog } from "@/data/questLog";
import { PlayerStats } from "./PlayerStats";
import { Timeline } from "./Timeline";
import styles from "./QuestLog.module.css";

export function QuestLog() {
  return (
    <section id={SECTION_IDS.log} aria-labelledby="quest-log-title">
      <Container className={styles.layout}>
        <PlayerStats />
        <div className={styles.content}>
          <SectionLabel level={4} title="Quest log" />
          <h2 id="quest-log-title" className={styles.title}>
            Design 🤝 Development
          </h2>
          <p className={styles.lead}>{profile.lookingFor}</p>
          <Timeline entries={questLog} />
        </div>
      </Container>
    </section>
  );
}
