import { ScrollFillText, SectionLabel } from '@/components/ui';
import { Container } from '@/components/layout';
import { profile } from '@/data/profile';
import styles from './Approach.module.css';

export function Approach() {
  return (
    <section aria-label="Approach">
      <Container className={styles.approach}>
        <div className={styles.label}>
          <SectionLabel level={1} title="Approach" stacked />
        </div>
        <ScrollFillText className={styles.text} text={profile.approach} highlight={profile.approachHighlight} />
      </Container>
    </section>
  );
}
