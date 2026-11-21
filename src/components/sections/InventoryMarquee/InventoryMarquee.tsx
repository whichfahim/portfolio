import { inventory } from '@/data/profile';
import styles from './InventoryMarquee.module.css';

/** A looping strip of skills, styled as the player's inventory. */
export function InventoryMarquee() {
  // The list is rendered twice so the loop is seamless; the copy is hidden from screen readers.
  return (
    <div className={styles.strip}>
      <p className="visually-hidden">Inventory: {inventory.join(', ')}</p>
      <div className={styles.track} aria-hidden="true">
        {[...inventory, ...inventory].map((item, i) => (
          <span key={`${item}-${i}`} className={styles.item}>
            [{item}] <span className={styles.spark}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
