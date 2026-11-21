import { Badge, PixelButton } from '@/components/ui';
import { Container } from '@/components/layout';
import { SECTION_IDS } from '@/data/navigation';
import { profile } from '@/data/profile';
import { PlayerCard } from './PlayerCard';
import styles from './Hero.module.css';

const PlayIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" shapeRendering="crispEdges">
    <rect x="2" y="0" width="2" height="12" fill="currentColor" />
    <rect x="4" y="2" width="2" height="8" fill="currentColor" />
    <rect x="6" y="4" width="2" height="4" fill="currentColor" />
  </svg>
);

export function Hero() {
  return (
    <section id={SECTION_IDS.top} aria-labelledby="hero-title">
      <Container className={styles.hero}>
        <div className={styles.status}>
          <span className={styles.level}>LV.00 — START</span>
          <Badge variant="outline">
            <span className={styles.dot} aria-hidden="true" />
            {profile.availability}
          </Badge>
        </div>

        <h1 id="hero-title" className={styles.title}>
          Design
          <br />
          <span className={styles.slash} aria-hidden="true">
            /
          </span>
          Engineer
          <span className="visually-hidden"> — {profile.name}</span>
        </h1>

        <div className={styles.lower}>
          <div className={styles.intro}>
            <p className={styles.lead}>{profile.intro}</p>
            <div className={styles.actions}>
              <PixelButton href={`#${SECTION_IDS.work}`} variant="primary" size="lg" icon={<PlayIcon />}>
                Press start
              </PixelButton>
              <PixelButton href={`#${SECTION_IDS.contact}`} size="lg">
                Say hi
              </PixelButton>
            </div>
          </div>
          <PlayerCard />
        </div>
      </Container>
    </section>
  );
}
