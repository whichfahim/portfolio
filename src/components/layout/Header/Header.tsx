import type { MouseEvent } from 'react';
import { XPBar } from '@/components/ui';
import { navItems, SECTION_IDS } from '@/data/navigation';
import { profile } from '@/data/profile';
import { useClock } from '@/hooks/useClock';
import { usePageScrollProgress } from '@/hooks/useScrollProgress';
import { HOME_HREF } from '@/routes';
import { scrollToSection } from '@/utils/scrollToSection';
import styles from './Header.module.css';

interface HeaderProps {
  /** On the case study page, nav links jump back to sections on the home page. */
  onHomePage: boolean;
}

/** Sticky single-bar header: logo, local clock, XP (scroll) bar and section links. */
export function Header({ onHomePage }: HeaderProps) {
  const time = useClock(profile.timeZone);
  const progress = usePageScrollProgress();

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
            {profile.city.split(',')[0]} · <strong>{time}</strong> {profile.utcOffsetLabel}
          </span>
          <XPBar value={progress} ariaLabel="Page scroll progress" />
        </div>
        <nav aria-label="Primary" className={styles.nav}>
          {navItems.map((item) => (
            <a key={item.target} href={`#${item.target}`} onClick={(e) => handleNav(e, item.target)}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>
    </div>
  );
}
