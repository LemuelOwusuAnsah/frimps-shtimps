# Contributing to Frimps Shtimps

Thanks for wanting to help. This is a small project, so keep it simple.

## Getting set up

Install Node 20 or newer, then:

    git clone https://github.com/LemuelOwusuAnsah/frimps-shtimps.git
    cd frimps-shtimps
    npm install
    npm run dev

The dev server runs at http://localhost:5173.

## Project layout

    src/
      App.svelte            hash router and page switcher
      main.js               entry point
      app.css               global styles, CSS variables, dark mode
      components/
        Nav.svelte          top nav, hamburger, theme toggle
        Footer.svelte       footer
      routes/
        Home.svelte
        Menu.svelte
        Story.svelte
        Visit.svelte
        NotFound.svelte
    public/
      404.html              GitHub Pages SPA fallback
    .github/workflows/
      deploy.yml            auto-deploy to GitHub Pages

## Style

- 2 spaces, LF line endings, UTF-8 (see .editorconfig)
- One component per file
- Scoped styles inside each .svelte file
- Global tokens (colors, fonts) live in src/app.css
- Prefer CSS variables over hardcoded colors so dark mode keeps working

## Adding a page

1. Create src/routes/YourPage.svelte
2. Import it in src/App.svelte
3. Add it to the routes object
4. Add a link in src/components/Nav.svelte (both desktop and mobile menus)

## Commits

Short, plain English. Present tense.

    Add booking form validation
    Fix nav layout on small screens
    Update menu prices

## Before pushing

    npm run build

If the build passes, push. The GitHub Actions workflow deploys automatically.

## Reporting issues

Open a GitHub issue with:
- what you expected
- what happened
- browser and OS
- a screenshot if it's visual
