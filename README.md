# wardlume.github.io

The website for [Wardlume](https://github.com/arpitagarwal1301/wardlume), a botsitting ward for your Mac.

Live at **https://wardlume.github.io**

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run check    # build + leak guard + internal link check
```

Built with [Astro](https://astro.build) as a static site and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`, daily, and on demand:

```sh
gh workflow run deploy.yml -R wardlume/wardlume.github.io
```

## Where content comes from

| Content | Source |
|---|---|
| Latest version, download links, SHA-256 | GitHub API, latest release of `arpitagarwal1301/wardlume`, at build time |
| Safety, Changelog, Privacy, Terms | Rendered at build time from the Markdown files in `arpitagarwal1301/wardlume`. **Don't copy them here.** |
| Home, Download, Support, Pricing | `src/pages/` |
| Docs | `src/content/docs/*.md` |
| Blog | `src/content/blog/*.md` |
| Names, links, pricing mode, analytics | `src/site.config.ts` |

## Switching to paid

Set `pricing.mode = 'paid'` in `src/site.config.ts` and fill `pricing.tiers` with hosted checkout links (Polar or Lemon Squeezy). The Pricing page renders the tiers; no backend needed.

## Custom domain (later)

1. Add `public/CNAME` containing the domain.
2. Change `site` in `astro.config.mjs` and `site.url` in `src/site.config.ts`.
3. Point DNS at GitHub Pages and set the domain in the repo's Pages settings.
