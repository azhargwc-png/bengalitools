# BanglaTools — Claude Code Instructions

## Deployment

- **Vercel deploys from**: `main` branch on GitHub (`origin/main`)
- **Always commit and push to `main`** — pushing to any other branch does NOT trigger a Vercel deployment
- There is only one branch: `main`. The old `master` branch was deleted.

## Canonical URL

- **Live site domain**: `https://www.bengalitools.com` (www version)
- **`site` in `astro.config.mjs`**: must stay as `https://www.bengalitools.com`
- **Do NOT change it to** `https://bengalitools.com` (non-www) — this causes Google Search Console to flag all pages as "Alternate page with proper canonical tag"

## CSS / Asset Caching

- Tailwind CSS is bundled into a single `/_astro/about.[hash].css` file
- If CSS breaks on the live site, the fix is to bump the tailwind `safelist` in `tailwind.config.mjs` by adding an innocuous class (e.g. `tracking-wide`) — this forces a new content hash and busts any stale cached redirect
- The `vercel.json` sets `Cache-Control: immutable` for `/_astro/` assets — do not add redirects that intercept `/_astro/` paths

## vercel.json Rules

- `trailingSlash: true` — Vercel redirects `/path` → `/path/` to avoid duplicate URLs in Google Search Console
- Only `/_astro/` assets get long-term immutable caching
- Do NOT add www→non-www redirects here — they create redirect loops because the DNS routes `bengalitools.com` back to `www`
