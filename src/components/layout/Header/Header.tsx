import { useCallback, useEffect, useRef, useState, type MouseEvent } from 'react';
import { XPBar } from '@/components/ui';
import { navItems, SECTION_IDS } from '@/data/navigation';
import { profile } from '@/data/profile';
import { useClock } from '@/hooks/useClock';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { usePageScrollProgress } from '@/hooks/useScrollProgress';
import { HOME_HREF } from '@/routes';
import { MOBILE_QUERY } from '@/styles/breakpoints';
import { scrollToSection } from '@/utils/scrollToSection';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import styles from './Header.module.css';

interface HeaderProps {
  /** On the case study page, nav links jump back to sections on the home page. */
  onHomePage: boolean;
}

const MENU_ID = 'mobile-menu';

const BurgerIcon = () => (
  <svg width="18" height="16" viewBox="0 0 18 16" shapeRendering="crispEdges" aria-hidden="true">
    <rect x="0" y="1" width="18" height="3" fill="currentColor" />
    <rect x="0" y="7" width="18" height="3" fill="currentColor" />
    <rect x="0" y="13" width="18" height="3" fill="currentColor" />
  </svg>
);

/**
 * Sticky single-bar header: logo, local clock, XP (scroll) bar and section links.
 * On small screens the links move into a slide-in menu opened by a burger button.
 */
export function Header({ onHomePage }: HeaderProps) {
  const time = useClock(profile.timeZone);
  const progress = usePageScrollProgress();
  const isMobile = useMediaQuery(MOBILE_QUERY);
  const [menuOpen, setMenuOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    burgerRef.current?.focus();
  }, []);

  // The menu only exists on small screens: close it if the window grows past the breakpoint.
  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  const handleNav = (event: MouseEvent<HTMLAnchorElement>, target: string) => {
    if (!onHomePage) return; // Let the hash link navigate home; App scrolls to the anchor.
    event.preventDefault();
    history.replaceState(null, '', `#${target}`);
    scrollToSection(target);
  };

  return (
    <div className={styles.sticky}>
      <header className={styles.bar}>
        <div className={styles.left}>
          <a
            href={onHomePage ? `#${SECTION_IDS.top}` : HOME_HREF}
            className={styles.logo}
            aria-label={`${profile.name}, home`}
            onClick={(e) => handleNav(e, SECTION_IDS.top)}
          >
            {profile.initials}
          </a>
          <span className={styles.clock}>
            <span className={styles.city}>{profile.city.split(',')[0]} · </span>
            <strong>{time}</strong> <span className={styles.offset}>{profile.utcOffsetLabel}</span>
          </span>
        </div>

        <XPBar value={progress} ariaLabel="Page scroll progress" className={styles.xp} />

        <nav aria-label="Primary" className={styles.nav}>
          {navItems.map((item) => (
            <a key={item.target} href={`#${item.target}`} onClick={(e) => handleNav(e, item.target)}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          ref={burgerRef}
          type="button"
          className={styles.burger}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls={MENU_ID}
          onClick={() => setMenuOpen(true)}
        >
          <BurgerIcon />
        </button>
      </header>

      {isMobile && <MobileMenu id={MENU_ID} open={menuOpen} onClose={closeMenu} onNavigate={handleNav} />}
    </div>
  );
}
