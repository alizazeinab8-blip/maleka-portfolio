# Maleka — Front-End Developer Portfolio

A bilingual (English / Persian, LTR/RTL) personal portfolio built with **Next.js 14**, **TypeScript** and **Tailwind CSS**.

This project was written by hand as source code in a sandbox without internet access, so it has **not** been run through `npm install` / `npm run build` yet. Please run it locally before publishing — see the checklist at the bottom.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## Project structure

```
src/
  app/
    layout.tsx        Root layout, fonts, global metadata
    page.tsx           Assembles every section
    globals.css         Design tokens, glass/lavender utilities, motion
  components/
    Navbar.tsx, Hero.tsx, About.tsx, Skills.tsx, Mindset.tsx, Focus.tsx,
    Experience.tsx, Workflow.tsx, Contact.tsx, Footer.tsx,
    PrivateProject.tsx, LanguageSwitcher.tsx
    projects/
      ProjectsSection.tsx, ProjectCard.tsx, VideoFrame.tsx
  context/
    LanguageContext.tsx   EN/FA state, sets <html lang/dir>, persists to localStorage
  data/
    content.ts            All EN + FA copy, and the project data (tech, features, media)
    links.ts               Placeholder email / GitHub / LinkedIn — see below
  lib/
    types.ts, useReveal.ts
public/
  videos/                 Compressed project preview clips (h264, muted, ~120KB–1MB each)
  images/                 Poster frames + the Employment Dashboard screenshot
```

## Before you publish — please do these

1. **Add your real links.** Open `src/data/links.ts` and replace the placeholder email, GitHub and LinkedIn URLs — nothing there is a real account, they're intentionally fake placeholders.
2. **GitHub / Live Demo buttons per project.** Each project in `src/data/content.ts` has a `links: {}` object. Add `github` and/or `demo` URLs for any project that has one; leave a project's `links` empty and the card will automatically show a disabled "Not public yet" state instead of a broken link.
3. **Double-check the Vazirmatn font import.** `src/app/layout.tsx` imports `Vazirmatn` from `next/font/google` for the Persian typeface. This requires an internet connection the first time you `npm run build`/`npm run dev` (Next.js downloads the font files at build time). If your `next` version doesn't ship that font key yet, swap it for another Persian-friendly Google font (e.g. `Noto_Sans_Arabic` or self-host Vazirmatn) — the rest of the code doesn't need to change, just the import in `layout.tsx`.
4. **Favicon / OG image.** `public/favicon.svg` is a simple placeholder monogram — swap it for your own mark if you have one. `metadataBase` in `layout.tsx` is set to a placeholder domain (`https://maleka.dev`); update it to your real domain once you have one, or Open Graph image URLs will resolve incorrectly.
5. **Run a full audit once installed:** `npm run lint`, then click through both languages, resize down to 360px, and tab through the page with your keyboard to confirm focus states.

## Content & translations

All copy — English and Persian — lives in one place: `src/data/content.ts`, typed against `src/lib/types.ts`. Update text there rather than inside components, and both languages will stay in sync structurally (TypeScript will flag anything missing).

## Design system

- **Palette:** near-black purple background (`#08050F`/`#0D0819`), lavender accents (`#8B5CF6` core, `#AB8CFF`/`#D9C9FF` for highlights), a restrained magenta accent used only as ambient glow.
- **Type:** Space Grotesk (display) + Inter (body) for English, Vazirmatn for Persian — all loaded as CSS variables via `next/font`.
- **Signature element:** the hero's terminal/console panel — a small, personal "who I am / what I build with" moment instead of a generic stats strip (per your brief, no invented numbers appear anywhere on the site).
- Motion respects `prefers-reduced-motion`, and all interactive elements have visible focus rings.

## Notes on the projects

Project descriptions and feature lists were written from what's actually visible in the four videos and the dashboard screenshot you provided — nothing was invented. The Pink Venom project is explicitly credited as a friend's UI design that you implemented, and the private medical project section deliberately omits any screenshots, video, or implementation detail per your instructions.
