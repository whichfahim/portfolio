import { useEffect, useRef, type MouseEvent } from 'react';
import { PALETTE_ICON, PixelGrid } from '@/components/ui';
import { navItems } from '@/data/navigation';
import { paletteIconColors } from '@/theme/paletteIcon';
import { useTheme } from '@/theme/useTheme';
import { cx } from '@/utils/cx';
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  id: string;
  open: boolean;
  onClose: () => void;
  /** Handles a nav link click, the same way the desktop header does. */
  onNavigate: (event: MouseEvent<HTMLAnchorElement>, target: string) => void;
}

/**
 * Slide-in navigation panel for small screens. It holds the section links and a
 * button that cycles the colour theme (which replaces the floating theme dock on mobile).
 * It closes on Escape, on a backdrop tap or after choosing a link.
 */
export function MobileMenu({ id, open, onClose, onNavigate }: MobileMenuProps) {
  const { theme, themes, setThemeId } = useTheme();
  const closeRef = useRef<HTMLButtonElement>(null);
  const nextTheme = themes[(themes.findIndex((t) => t.id === theme.id) + 1) % themes.length];

  // While open: move focus into the panel, close on Escape and stop the page behind from scrolling.
  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div className={cx(styles.root, open && styles.open)} aria-hidden={!open}>
      <div className={styles.backdrop} onClick={onClose} />
      <div id={id} className={styles.panel} role="dialog" aria-modal="true" aria-label="Menu">
        <div className={styles.top}>
          <span className={styles.title}>Menu</span>
          <button ref={closeRef} type="button" className={styles.close} onClick={onClose} aria-label="Close menu">
            ×
          </button>
        </div>

        <nav aria-label="Site sections">
          <ul className={styles.links}>
            {navItems.map((item, index) => (
              <li key={item.target}>
                <a
                  href={`#${item.target}`}
                  className={styles.link}
                  onClick={(event) => {
                    onNavigate(event, item.target);
                    onClose();
                  }}
                >
                  <span className={styles.linkNumber} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={styles.theme}
          onClick={() => setThemeId(nextTheme.id)}
          aria-label={`Colour theme: ${theme.name}. Switch to ${nextTheme.name}`}
        >
          <span className={styles.themeIcon} aria-hidden="true">
            <PixelGrid map={PALETTE_ICON} colors={paletteIconColors(theme, theme.tokens.ink)} pixelSize={3} />
          </span>
          <span className={styles.themeText}>
            <span className={styles.themeLabel}>Theme</span>
            <span>{theme.shortName}</span>
          </span>
          <span className={styles.themeNext} aria-hidden="true">
            ▶ {nextTheme.shortName}
          </span>
        </button>
      </div>
    </div>
  );
}
