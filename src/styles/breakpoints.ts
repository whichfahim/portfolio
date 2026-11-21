/**
 * Below 740px the header switches to its compact layout: burger menu, centred XP bar,
 * compact clock, and the theme switcher moves from the floating dock into the menu.
 *
 * CSS can't import this, so the matching `@media (max-width: 739px)` rules in
 * Header.module.css and ThemeDock.module.css must use the same value.
 */
export const MOBILE_QUERY = '(max-width: 739px)';
