/**
 * Design tokens for the three colour themes.
 * Every colour in the UI comes from these tokens via CSS custom properties,
 * so adding a theme means adding one object here.
 */
export interface ThemeTokens {
  bg: string;
  surface: string;
  alt: string;
  ink: string;
  body: string;
  muted: string;
  line: string;
  dim: string;
  accent: string;
  onAccent: string;
  dark: string;
  darkText: string;
  darkMuted: string;
  darkSurface: string;
  darkLine: string;
  darkAccent: string;
  grid: string;
  /** Extra paint colours used only by the theme's pixel palette icon. */
  paintA: string;
  paintB: string;
}

export interface Theme {
  id: ThemeId;
  name: string;
  shortName: string;
  tokens: ThemeTokens;
}

export type ThemeId = 'paper' | 'arcade' | 'amber';

export const themes: Theme[] = [
  {
    id: 'paper',
    name: 'Paper & Cobalt',
    shortName: 'Paper',
    tokens: {
      bg: '#F4F2EE',
      surface: '#FFFFFF',
      alt: '#E9E6E0',
      ink: '#121212',
      body: '#2B2926',
      muted: '#5E5A54',
      line: '#D6D1C8',
      dim: '#8E8A83',
      accent: '#2F4BFF',
      onAccent: '#FFFFFF',
      dark: '#121212',
      darkText: '#F4F2EE',
      darkMuted: '#C9C5BD',
      darkSurface: '#1C1B19',
      darkLine: '#3A3833',
      darkAccent: '#8FA2FF',
      grid: 'rgba(18, 18, 18, 0.05)',
      paintA: '#E4572E',
      paintB: '#F2C14E',
    },
  },
  {
    id: 'arcade',
    name: 'Night Arcade',
    shortName: 'Arcade',
    tokens: {
      bg: '#15121F',
      surface: '#1F1A2E',
      alt: '#2A2340',
      ink: '#F3EFFF',
      body: '#D9D3EC',
      muted: '#A49CBF',
      line: '#3A3256',
      dim: '#6B6388',
      accent: '#FF5FA2',
      onAccent: '#15121F',
      dark: '#0C0A13',
      darkText: '#F3EFFF',
      darkMuted: '#A49CBF',
      darkSurface: '#1A1626',
      darkLine: '#3A3256',
      darkAccent: '#46E0CF',
      grid: 'rgba(255, 255, 255, 0.04)',
      paintA: '#B388FF',
      paintB: '#FFE14D',
    },
  },
  {
    id: 'amber',
    name: 'Amber Terminal',
    shortName: 'Amber',
    tokens: {
      bg: '#1C1C1C',
      surface: '#262626',
      alt: '#303030',
      ink: '#EEE7DB',
      body: '#D4CCBF',
      muted: '#A39B8F',
      line: '#3D3D3D',
      dim: '#6B655D',
      accent: '#FF7A3D',
      onAccent: '#1C1C1C',
      dark: '#111111',
      darkText: '#EEE7DB',
      darkMuted: '#A39B8F',
      darkSurface: '#1A1A1A',
      darkLine: '#3D3D3D',
      darkAccent: '#F2C14E',
      grid: 'rgba(255, 255, 255, 0.04)',
      paintA: '#7FD3A0',
      paintB: '#E4572E',
    },
  },
];

export const DEFAULT_THEME_ID: ThemeId = 'paper';

/** Converts camelCase token names to CSS custom properties: darkAccent → --dark-accent. */
export function tokenToCssVar(token: string): string {
  return `--${token.replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`)}`;
}
