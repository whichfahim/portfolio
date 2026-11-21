import { profile } from '@/data/profile';
import styles from './PlayerCard.module.css';

/** A code-editor style "player.json" card summarising who Fahim is. */
export function PlayerCard() {
  const fields: [string, string | string[]][] = [
    ['player', profile.name],
    ['class', profile.role],
    ['base', profile.city],
    ['equipped', profile.equipped],
  ];

  const value = (v: string | string[]) =>
    Array.isArray(v) ? (
      <>
        [
        {v.map((item, i) => (
          <span key={item}>
            <span className={styles.string}>"{item}"</span>
            {i < v.length - 1 && ', '}
          </span>
        ))}
        ]
      </>
    ) : (
      <span className={styles.string}>"{v}"</span>
    );

  return (
    <figure className={styles.card}>
      <figcaption className={styles.bar}>
        <span>player.json</span>
        <span aria-hidden="true">■ ■ ■</span>
      </figcaption>
      <pre className={styles.code}>
        {'{\n'}
        {fields.map(([key, v]) => (
          <span key={key}>
            {'  '}"{key}": {value(v)},{'\n'}
          </span>
        ))}
        {'  '}"status": <span className={styles.string}>"open_to_remote"</span>
        <span className={styles.cursor} aria-hidden="true" />
        {'\n}'}
      </pre>
    </figure>
  );
}
