import type { Theme } from './themes';

/**
 * Colours for the pixel palette icon (see PALETTE_ICON), painted in a theme's own colours.
 * `outline` is usually the active theme's ink so the icon reads on the current background.
 */
export function paletteIconColors(theme: Theme, outline: string): Record<string, string> {
  const t = theme.tokens;
  return { X: outline, S: t.surface, A: t.accent, B: t.darkAccent, C: t.paintA, D: t.paintB };
}
