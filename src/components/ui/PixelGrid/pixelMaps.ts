/**
 * Original pixel art drawn for this site (free to reuse).
 * Legend: X = outline, S = surface, A/B/C/D = paint or accent colours, . = transparent.
 */

/** A painter's palette with four paint blobs and a thumb hole. 12 × 12. */
export const PALETTE_ICON = [
  '...XXXXXX...',
  '..XSSSSSSX..',
  '.XSAASSBBSX.',
  'XSSAASSBBSSX',
  'XSSSSSSSSSSX',
  'XSCCSSXXSSSX',
  'XSCCSX..XSSX',
  'XSSSSX..XSX.',
  'XSDDSSXXSSX.',
  '.XDDSSSSSX..',
  '..XXSSSXX...',
  '....XXX.....',
] as const;

/** A smiling computer for the player card. 12 × 11. */
export const PLAYER_AVATAR = [
  '..XXXXXXXX..',
  '.XSSSSSSSSX.',
  '.XSAASSAASX.',
  '.XSAASSAASX.',
  '.XSSSSSSSSX.',
  '.XSASSSSASX.',
  '.XSSAAAASSX.',
  '.XSSSSSSSSX.',
  '..XXXXXXXX..',
  '....XXXX....',
  '..XXXXXXXX..',
] as const;
