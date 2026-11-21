import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { ThemeContext } from './ThemeContext';
import { DEFAULT_THEME_ID, themes, tokenToCssVar, type ThemeId } from './themes';

const STORAGE_KEY = 'portfolio-theme';

function readStoredThemeId(): ThemeId {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && themes.some((theme) => theme.id === stored)) return stored as ThemeId;
  } catch {
    // Storage can be unavailable (private mode, sandboxed iframes). Fall back to the default.
  }
  return DEFAULT_THEME_ID;
}

/** Applies the active theme's tokens as CSS custom properties on <html> and remembers the choice. */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeId] = useState<ThemeId>(readStoredThemeId);
  const theme = themes.find((t) => t.id === themeId) ?? themes[0];

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme.tokens).forEach(([token, value]) => {
      root.style.setProperty(tokenToCssVar(token), value);
    });
    root.dataset.theme = theme.id;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme.tokens.bg);
    try {
      window.localStorage.setItem(STORAGE_KEY, theme.id);
    } catch {
      // Ignore storage errors; the theme still applies for this visit.
    }
  }, [theme]);

  const value = useMemo(() => ({ theme, themes, setThemeId }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
