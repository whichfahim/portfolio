import { Polaroid } from '@/components/ui';
import { profile } from '@/data/profile';
import styles from './PlayerStats.module.css';

/** The character sheet card: a pixel-art portrait in a polaroid frame, plus a few stats. */
export function PlayerStats() {
  const stats = [
    ['Player', profile.name.split(' ')[0]],
    ['Class', profile.role],
    ['Base', profile.city],
    ['Guild', profile.guild],
  ];

  return (
    <aside className={styles.card} aria-label="Player stats">
      <Polaroid
        src={profile.avatar.src}
        alt={profile.avatar.alt}
        caption={profile.avatar.caption}
        pixelated
      />
      <dl className={styles.stats}>
        {stats.map(([label, value]) => (
          <div key={label} className={styles.row}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
