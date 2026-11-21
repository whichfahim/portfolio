import { LinkButtons, PixelButton, SectionLabel } from '@/components/ui';
import { Section } from '@/components/layout';
import { SECTION_IDS } from '@/data/navigation';
import { contactLinks, profile } from '@/data/profile';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <Section id={SECTION_IDS.contact} ruled labelledBy="contact-title" className={styles.section}>
      <SectionLabel level={5} title="Save point" />
      <h2 id="contact-title" className={styles.heading}>
        <a href={`mailto:${profile.email}`} className={styles.mail}>
          Say hi{' '}
          <span className={styles.arrow} aria-hidden="true">
            →
          </span>
        </a>
      </h2>
      <p className={styles.email}>{profile.email}</p>
      <div className={styles.links}>
        <LinkButtons links={contactLinks} />
        <PixelButton href={profile.resumeUrl} variant="inverse" download>
          Download CV
        </PixelButton>
      </div>
    </Section>
  );
}
