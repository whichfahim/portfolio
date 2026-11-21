import { PixelGrid, PLAYER_AVATAR } from '@/components/ui';
import { profile } from '@/data/profile';
import { useTheme } from '@/theme/useTheme';
import styles from './PlayerStats.module.css';

/** The character sheet card: pixel avatar plus a few stats. */
export function PlayerStats() {
  const { theme } = useTheme();
  const colors = { X: theme.tokens.ink, S: theme.tokens.surface, A: theme.tokens.accent };
  const stats = [
    ['Player', profile.name.split(' ')[0]],
    ['Class', profile.role],
    ['Base', profile.city],
    ['Guild', profile.guild],
  ];

  return (
    <aside className={styles.card} aria-label="Player stats">
      <PixelGrid map={PLAYER_AVATAR} colors={colors} pixelSize={14} label="Pixel-art computer with a smiling face" />
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
