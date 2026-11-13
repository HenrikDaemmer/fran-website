# Fran's – Event-Köchin in Landau & Umgebung

Website for Fran's (Franceska Schlindwein), rebuilt from the Lovable project as a standalone
**Vite + React + TypeScript + Tailwind CSS** app. No Lovable dependencies.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build to /dist
```

## Push to GitHub

```bash
git remote add origin https://github.com/<your-user>/fran-website.git
git branch -M main
git push -u origin main
```

(The repo is already initialised with a first commit.)

## Hosting (free, commercial use allowed)

**Netlify** or **Cloudflare Pages** – both free plans allow business sites.
Import the GitHub repo, build command `npm run build`, output folder `dist`.
`public/_redirects` makes `/galerie` work on reload (Netlify; Cloudflare Pages handles it automatically).

> Vercel's free Hobby plan is for non-commercial use only – for Fran's business site you'd need Vercel Pro.

## Deploy on Vercel

1. vercel.com → **Add New… → Project** → import the GitHub repo.
2. Vercel detects Vite automatically (Build: `npm run build`, Output: `dist`). Click **Deploy**.
3. `vercel.json` makes sure links like `/galerie` work on reload.

## Where things live

| What | File |
| --- | --- |
| Home page (all sections, texts) | `src/pages/Home.tsx` |
| Gallery page | `src/pages/Gallery.tsx` |
| **Which photo goes where + captions** | `src/data/content.ts` |
| Photos (web-optimised, from Dropbox) | `public/images/fran-XX.jpg` (XX = number in the original file name `Fran-XX.jpg`) |
| Colours, fonts, animations | `src/styles.css` |
| Navigation / footer | `src/components/site/` |
| Impressum / Datenschutz (placeholders!) | `src/pages/Legal.tsx` |

To swap a photo: export it at ~1600 px long edge, drop it into `public/images/`, and change the
number in `src/data/content.ts`.

## Versions

- `v1` (git tag) – faithful rebuild of the Lovable site
- `v2` (branch) – warmer design: real event photos, "Aus echten Events" polaroids, Oma story,
  dark kitchen section, smoother carousel, scroll animations, paper texture
- `v3` (branch) – Fran's feedback: bolder petrol/rust/saffron palette, gallery split into
  "Fotografiert von Luca" and "Schnappschüsse", "Über mich", shorter intro

Go back to v1: `git checkout v1` (look) or `git checkout main` (the v1 branch).
Make v2 the main version: `git checkout main && git merge v2`.

## Before going live

- Fill in **Impressum** and **Datenschutz** (`src/pages/Legal.tsx`) – required for a German business site.
- Replace the example reviews ("Beispielstimme") with real ones.
- The contact form opens the visitor's mail app (mailto:) addressed to `hallo@frans-events.de` – check the address.
