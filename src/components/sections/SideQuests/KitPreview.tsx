import { CodeTag, PixelButton, XPBar } from '@/components/ui';
import styles from './KitPreview.module.css';

const COMPONENT_NAMES = ['PixelButton', 'AccordionItem', 'XPBar', 'ThemeDock'];

/**
 * A live sample of the Quest UI Kit, rendered with the real components.
 * It follows whichever theme is active in the dock.
 */
export function KitPreview() {
  return (
    <div className={styles.preview} role="group" aria-label="Quest UI Kit preview">
      <p className={styles.eyebrow}>Quest UI Kit · v0.1 · 3 themes</p>
      <div className={styles.row}>
        <PixelButton variant="primary" tabIndex={-1}>
          ▶ Press start
        </PixelButton>
        <PixelButton tabIndex={-1}>Say hi</PixelButton>
        <span className={styles.toggle} aria-hidden="true">
          −
        </span>
      </div>
      <XPBar value={0.7} size="md" ariaLabel="Example progress bar at 70 percent" />
      <div className={styles.row}>
        {COMPONENT_NAMES.map((name) => (
          <CodeTag key={name} label={name} />
        ))}
      </div>
      <p className={styles.note}>Live preview: it follows the theme you pick in the dock.</p>
    </div>
  );
}
