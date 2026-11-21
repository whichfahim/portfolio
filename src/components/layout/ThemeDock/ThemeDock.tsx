import { PALETTE_ICON, PixelGrid } from '@/components/ui';
import { paletteIconColors } from '@/theme/paletteIcon';
import { useTheme } from '@/theme/useTheme';
import { cx } from '@/utils/cx';
import styles from './ThemeDock.module.css';

/** Width of one icon button plus the gap between buttons, in px. Keep in sync with the CSS. */
const STEP = 60;

/**
 * Floating theme switcher, pinned bottom-right. Each theme is a pixel palette icon
 * painted in that theme's colours; the selected one lifts and gets a sliding label.
 */
export function ThemeDock() {
  const { theme: active, themes, setThemeId } = useTheme();
  const activeIndex = themes.findIndex((t) => t.id === active.id);

  return (
    <aside className={styles.dock} aria-label="Colour theme">
      <div className={styles.title} aria-hidden="true">
        <span>Select theme</span>
        <span>■ ■</span>
      </div>
      <div role="radiogroup" aria-label="Colour theme" className={styles.options}>
        {themes.map((theme) => {
          const selected = theme.id === active.id;
          return (
            <button
              key={theme.id}
              type="button"
              role="radio"
              aria-checked={selected}
              aria-label={theme.name}
              className={cx(styles.option, selected && styles.selected)}
              onClick={() => setThemeId(theme.id)}
            >
              <PixelGrid map={PALETTE_ICON} colors={paletteIconColors(theme, active.tokens.ink)} pixelSize={3} />
            </button>
          );
        })}
      </div>
      <div className={styles.labelTrack} aria-hidden="true">
        <span className={styles.label} style={{ transform: `translateX(${activeIndex * STEP}px)` }}>
          <span className={styles.caret}>▲</span>
          {active.shortName}
        </span>
      </div>
    </aside>
  );
}
