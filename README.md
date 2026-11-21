# Fahim Imtiaz — Portfolio

A game-themed portfolio for a design engineer: "quests" instead of projects, levels instead of sections, and a pixel UI kit that switches between three colour themes.

**Live site:** https://whichfahim.github.io/portfolio/

Built with **React 18**, **TypeScript** and **Vite**, styled with **CSS Modules** and design tokens. It has no UI framework, no router library and no CSS framework: the only runtime dependencies are `react` and `react-dom`.

## Features

- **Main quests:** four case studies as expandable cards with screenshots, highlights, tech tags and links.
- **Side quests:** five smaller projects, each with a one-line plain-language summary, including a Figma-design vs live-build comparison.
- **Case study pages:** a full write-up for Geniotech at `#/work/geniotech`, covering problem, process, build, key decisions and outcome.
- **Three themes:** Paper, Arcade and Amber, picked from a floating theme dock with pixel-art palette icons. The choice is saved in `localStorage`.
- **Quest UI Kit:** reusable pixel components (buttons with press states, accordions, XP bars, badges, code tags, pixel art, an editable inline input, a typewriter and a polaroid photo frame) in `src/components/ui`.
- **Small touches:** a live Dhaka clock, an XP bar that tracks scroll progress, a scroll-fill paragraph, a skills marquee and a career timeline.
- **Accessibility:** semantic landmarks, real buttons and links, `aria-expanded` accordions, a radio-group theme picker, a skip link, visible focus styles, and full support for `prefers-reduced-motion`.

## Getting started

Requires Node.js 18 or newer.

```bash
git clone https://github.com/whichfahim/portfolio.git
cd portfolio
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173/portfolio/).

| Script              | What it does                                            |
| ------------------- | ------------------------------------------------------- |
| `npm run dev`       | Starts the dev server with hot reload                   |
| `npm run build`     | Typechecks, then builds the production site into `dist/` |
| `npm run preview`   | Serves the production build locally                     |
| `npm run typecheck` | Runs the TypeScript compiler without building           |
| `npm run lint`      | Lints all `.ts`/`.tsx` files with ESLint                |

## Project structure

```
src/
├── main.tsx                 # Entry: mounts <App /> inside <ThemeProvider />
├── App.tsx                  # App shell: header, routed page, footer, theme dock
├── routes.ts                # Hash routes: #/ (home) and #/work/<slug> (case study)
├── assets/images/           # Project and case-study screenshots
├── components/
│   ├── ui/                  # Quest UI Kit: generic, reusable building blocks
│   ├── layout/              # Page chrome: Header, ThemeDock, Footer, Section, Container
│   ├── sections/            # Home page sections: Hero, MainQuests, SideQuests, QuestLog…
│   └── case-study/          # Building blocks for case study pages
├── data/                    # All site content as typed data (edit content here)
│   └── caseStudies/         # One file per case study, registered in index.ts
├── hooks/                   # useHashRoute, useClock, useScrollProgress, useSingleOpen
├── pages/                   # HomePage, CaseStudyPage, NotFoundPage
├── styles/global.css        # Reset, typography, shared animations, reduced-motion rules
├── theme/                   # Theme tokens, ThemeProvider and useTheme
├── types/content.ts         # Content models shared by data and components
└── utils/                   # Small helpers (cx, scrollToSection)
```

Each component lives in its own folder with a `.tsx` file and a `.module.css` file. Each component folder group has an `index.ts` barrel, so imports stay short:

```ts
import { PixelButton, AccordionItem } from '@/components/ui';
```

`@/` is an alias for `src/`. It's configured in both `vite.config.ts` and `tsconfig.app.json`.

## Editing content

All copy, links and images live in `src/data`, so you rarely need to touch components.

| To change…                         | Edit                                  |
| ---------------------------------- | ------------------------------------- |
| Name, intro, email, availability   | `src/data/profile.ts`                 |
| Player card portrait and caption   | `avatar` in `src/data/profile.ts` (image in `src/assets/images/profile/`) |
| Contact buttons and Upwork link    | `contactLinks` and `UPWORK_URL` in `src/data/profile.ts` |
| Case studies on the home page      | `src/data/mainQuests.ts`              |
| Side projects                      | `src/data/sideQuests.ts`              |
| Career timeline                    | `src/data/questLog.ts`                |
| Header links                       | `src/data/navigation.ts`              |
| CV file                            | Replace `public/resume.pdf`           |

The data shapes are defined in `src/types/content.ts`, so TypeScript flags missing or misspelled fields.

### Add a side quest

Add an object to `sideQuests` in `src/data/sideQuests.ts`. `media` can be:

- an `image`
- a `compare` pair, for example a Figma design next to the live build
- `kit-preview`, which renders live components

### Add a case study page

1. Put screenshots in `src/assets/images/case-studies/<slug>/`.
2. Create `src/data/caseStudies/<slug>.ts` that exports a `CaseStudy` object (copy `geniotech.ts` as a template).
3. Register it in `src/data/caseStudies/index.ts`.
4. Link to it from a main quest with `caseStudyHref('<slug>')`.

The page is then available at `#/work/<slug>`.

### Add a theme

Add an entry to `themes` in `src/theme/themes.ts` with a full set of tokens. Each token becomes a CSS custom property (`darkAccent` becomes `--dark-accent`), and the theme dock picks it up automatically. Check that text meets WCAG AA contrast (4.5:1) on both the light and the dark section colours.

## Styling conventions

- Colours always come from theme tokens (`var(--ink)`, `var(--accent)`…). Never hard-code them in components.
- Fonts use `--font-display` (Archivo), `--font-body` (Inter), `--font-mono` (JetBrains Mono) and `--font-pixel` (Silkscreen), loaded from Google Fonts in `index.html`.
- Motion uses the shared easing variables (`--ease-out`, `--ease-spring`). Global rules turn animation off for users who prefer reduced motion.
- Components that can sit on the dark Side quests band take a `tone="dark"` prop instead of separate dark variants.

## Routing

GitHub Pages can't rewrite URLs, so the site uses hash routes (`#/work/geniotech`). Any other hash, such as `#contact`, is treated as an in-page anchor on the home page. The small router is in `src/routes.ts` and `src/hooks/useHashRoute.ts`.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which typechecks, builds and publishes `dist/` to GitHub Pages. Pull requests run the same typecheck and build without deploying.

To use it, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions** once in the repository settings. The site is served from `/portfolio/` (see `base` in `vite.config.ts`).

## License

MIT. See [LICENSE](LICENSE).

## Contact

- Email: [fahim.imtiaz07@gmail.com](mailto:fahim.imtiaz07@gmail.com)
- LinkedIn: [Fahim Imtiaz](https://www.linkedin.com/in/fahim-imtiaz/)
- GitHub: [@whichfahim](https://github.com/whichfahim)
