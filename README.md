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

## Before going live

- Fill in **Impressum** and **Datenschutz** (`src/pages/Legal.tsx`) – required for a German business site.
- Replace the example reviews ("Beispielstimme") with real ones.
- The contact form opens the visitor's mail app (mailto:) addressed to `hallo@frans-events.de` – check the address.
