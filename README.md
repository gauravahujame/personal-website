# gauravahuja.dev

[![Netlify Status](https://api.netlify.com/api/v1/badges/75d86b3a-1d6c-4dff-99cd-d7707d9c97e7/deploy-status)](https://app.netlify.com/projects/epic-heisenberg-7dc639/deploys)

Source for [www.gauravahuja.dev](https://www.gauravahuja.dev), a one-page personal site built with [Astro](https://astro.build) and plain CSS. It links to the notes at [notes.gauravahuja.dev](https://notes.gauravahuja.dev), a separate Quartz site that shares its design language.

## Develop

Requires Node 22.12 or later (`.node-version` pins 24).

```sh
npm install
npm run dev      # http://localhost:4321
npm run check    # type-check .astro and .ts files
npm run build    # static output in dist/
npm run preview  # serve dist/
```

## Editing content

All copy lives in `src/data/`. Components only render it.

| File            | What it holds                                                                            |
| --------------- | ---------------------------------------------------------------------------------------- |
| `profile.ts`    | Name, role, location, email, social links, nav, the hero's "Currently exploring" list    |
| `projects.ts`   | Selected Work: tagline, why, how it works, stack, status, links, illustration, card size |
| `lab.ts`        | The Lab entries: summary, topics, status, illustration, size                             |
| `experience.ts` | Capability summary, jobs, education. `outcomes` is an empty slot for verified numbers    |
| `interests.ts`  | Beyond the Code                                                                          |
| `writing.ts`    | Selected garden notes and the garden's sections                                          |
| `status.ts`     | Status values: `completed`, `active`, `experimental`, `concept`                          |

- **Add a project:** append to `PROJECTS`. Pick a `layout` (`feature` spans both columns with the diagram beside the text, `half` takes one column, `wide` spans both) and a `visual`.
- **Add a Lab entry:** append to `LAB` with a `size` (`large`, `medium`, `small`). `visual` is optional.
- **New illustration:** add an SVG component in `src/components/diagrams/`, add its key to the `visual` type, and register it in `diagrams/Visual.astro`.
- **Statuses:** only set one when it's true. Leave `status` out and no badge renders.
- **Notes:** the garden's RSS feed lists folders and tags rather than notes, so `writing.ts` is curated by hand. Check each URL resolves.

## Structure

| Path                                            | Role                                                                            |
| ----------------------------------------------- | ------------------------------------------------------------------------------- |
| `src/pages/index.astro`                         | Composes the seven sections                                                     |
| `src/components/sections/`                      | Hero, SelectedWork, Lab, Experience, Beyond, Garden, Contact                    |
| `src/components/`                               | Header, Footer, ThemeToggle, SectionHeader, ProjectCard, StatusBadge, StackList |
| `src/components/diagrams/`, `beyond/`           | Inline SVG illustrations, themed through CSS tokens                             |
| `src/layouts/Base.astro`                        | Head, SEO and structured data, fonts, theme script, scroll reveals              |
| `src/styles/global.css`                         | Design tokens and shared roles                                                  |
| `src/pages/sitemap.xml.ts`, `public/robots.txt` | Sitemap and robots                                                              |
| `public/og.png`                                 | 1200×630 social card                                                            |

## Design

`src/styles/global.css` shares the notes site's type system, inks and accent (from `quartz/styles/custom.scss` and `.kiro/steering/ui-design-language.md` in the Quartz repo): P22 Mackinac Pro headings, light Bricolage Grotesque text and a single purple accent. This site adds:

- Fragment Mono for technical metadata (stacks, dates, statuses, diagram labels).
- A warm charcoal dark theme (`#1b1a18`) instead of near-black.
- Surface tokens (`--surface`, `--well`), status colours and diagram tokens.

Motion is limited to hover transitions, scroll reveals, a few looping diagram details and a cross-fade on theme switch. All of it turns off under `prefers-reduced-motion`. Content is visible without JavaScript.

Light/dark mode uses the `saved-theme` attribute on `<html>` and the `theme` key in `localStorage`, like the notes site.

Mackinac comes from the Adobe Fonts kit `pso3wdg`; the kit's allowed domains must include `gauravahuja.dev` and `localhost`.

## Deploy

The site deploys on Netlify as [epic-heisenberg-7dc639](https://app.netlify.com/projects/epic-heisenberg-7dc639/deploys). Every push to the production branch triggers a build; the badge above shows the latest deploy.

All build settings live in `netlify.toml`, so the Netlify dashboard needs no build overrides:

| Setting           | Value               |
| ----------------- | ------------------- |
| Build command     | `npm run build`     |
| Publish directory | `dist`              |
| Node              | 24 (`NODE_VERSION`) |

`netlify.toml` also sets security headers, long-lived caching for hashed assets in `/_astro/`, and 301 redirects for URLs from the previous version of the site: `/resume` and `/contact` go to sections of the home page, and `/blog/*` goes to the notes site.

## License

[MIT](LICENSE)
