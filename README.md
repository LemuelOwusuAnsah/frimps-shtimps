# Frimps Shtimps

A production-grade static pub site for Frimps Shtimps, Belvedere. Cold pints, warm welcomes, and a kitchen that means it.

Live: https://lemuelowusuansah.github.io/frimps-shtimps/

## Overview

A four-page restaurant site built with Svelte 5 and Vite, hand-crafted CSS, and a component-driven architecture. Zero runtime dependencies beyond the framework. Deployed automatically to GitHub Pages on every push, gated by lint and tests.

## Stack

Svelte 5 with runes for the UI. Vite 8 for the build. Handwritten CSS with a dark and light theme. A custom hash-based router, zero extra bytes. Vitest and Testing Library for tests. ESLint flat config and Prettier for code quality. GitHub Actions for lint, test, build, deploy.

## Architecture

src/App.svelte is the root shell and hash router.
src/main.js is the mount point.
src/app.css holds design tokens, dark mode variables, and global resets.
src/components has Nav and Footer.
src/routes has Home, Menu, Story, Visit, and NotFound.
src/lib/data holds menu.js, story.js, site.js, nav.js.
src/lib/components has Button, Card, Badge, Image, and Section.
src/lib/stores has theme.js, a persisted dark mode store.
src/lib/utils has format.js with formatPrice, formatDate, slugify.
src/lib/motion.js has reveal and stagger helpers.

Every route pulls from lib/data and composes lib/components. Change a price once in menu.js, it updates everywhere.

## Features

Hash-based SPA router with no external dependency.
Dark mode persisted across sessions.
Sticky header that condenses on scroll.
Mobile hamburger with keyboard and Escape support.
Accessible focus rings, skip link, and ARIA throughout.
Booking form with per-field validation, party size chips, and real Formspree submission.
Error boundary around the route outlet.
Per-route head tags with title, description, Open Graph, and Twitter cards.
JSON-LD BarOrPub schema for search engines.
Respects prefers-reduced-motion.

## Getting started

git clone https://github.com/LemuelOwusuAnsah/frimps-shtimps.git
cd frimps-shtimps
npm install
npm run dev

Dev server opens on http://localhost:5173/frimps-shtimps/

## Scripts

npm run dev starts Vite with HMR.
npm run build builds the production bundle to dist/.
npm run preview serves the production build locally.
npm run lint runs ESLint over .js and .svelte.
npm run format runs Prettier across the repo.
npm test runs Vitest in single-run mode.

## Deployment

Pushes to main trigger .github/workflows/deploy.yml, which installs dependencies with npm ci, runs ESLint, runs Vitest, builds with npm run build, and publishes dist/ to GitHub Pages.

The build reads VITE_BOOKING_ENDPOINT from repo secrets and injects it into the bundle. Without it, the booking form falls back to a local simulated success.

## Configuration

Copy .env.example to .env and set VITE_BOOKING_ENDPOINT to a Formspree endpoint for the booking form.

## License

MIT. See LICENSE.
