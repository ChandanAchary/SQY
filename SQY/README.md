# SQY — Atlas (Next.js)

A faithful **Next.js** recreation of [atlas.squareyards.com](https://atlas.squareyards.com) — Square Yards' market-intelligence terminal — for Bangalore, built from the real UI and populated with real data captured from the live app.

Ready to deploy on **Vercel**.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **React 18**
- **Leaflet** / **react-leaflet** (dark Esri canvas tiles) for the map
- Plain CSS (`app/globals.css`) — the Atlas dark theme

## Run locally

```bash
npm install
npm run dev
```

Open **http://localhost:3000** → click **Login** (no real auth) → dashboard → pick a project.

Production build:

```bash
npm run build && npm start
```

## Deploy to Vercel

This repo is a standard Next.js app — no env vars or backend needed.

**Option A — Git (recommended):**
```bash
git remote add origin https://github.com/ChandanAchary/SQY.git
git branch -M main
git push -u origin main
```
Then in Vercel, import the `ChandanAchary/SQY` repo (Framework preset: **Next.js**, all defaults). Every push auto-deploys.

**Option B — Vercel CLI:**
```bash
npm i -g vercel
vercel        # preview
vercel --prod # production
```

## Project structure

```
SQY/
├── app/
│   ├── layout.tsx              # root layout + fonts
│   ├── globals.css             # Atlas dark theme
│   ├── page.tsx                # login screen
│   ├── dashboard/page.tsx      # "Select a Project" + map
│   └── project/[id]/page.tsx   # 7-screen project briefing
├── components/
│   ├── AtlasLogo.tsx
│   ├── TopBar.tsx
│   ├── MapView.tsx             # Leaflet (SSR-safe, dynamic import)
│   └── ProjectScreens.tsx      # the 7 evidence screens
├── lib/
│   ├── types.ts
│   ├── data.ts                 # ALL 217 projects + detail + developers + micromarkets
│   └── ui.ts
└── ...config
```

## What the seven screens are

`Project · Developer Profile · Micromarket · Infrastructure · Neighbourhood · Case Studies · Outlook` — the fixed Atlas briefing flow, with the map always on the left.

## Data coverage

| Scope | Status |
|-------|--------|
| **All 217 projects** across 5 micromarkets (name · location · status · price) | ✅ real |
| Interactive map — every project pinned, colour-coded by status | ✅ |
| **Provident Equinox** — full detail across all 7 screens | ✅ real |
| **Provident Housing Limited** — full developer profile | ✅ real |
| Central Bangalore micromarket — full detail (chart, localities, developers) | ✅ real |
| All 5 micromarkets — sale/rent comparison | ✅ real |
| Every other developer | ✅ auto-lists their catalog projects |
| Other projects' full 7-screen detail | ⏳ shows a "Sample view"; drops in from the official Atlas export |

### Extending the data

`lib/data.ts` is the single source of truth. To add full detail for another project, add a `screens` object to it in the same shape as `provident-equinox` — the UI renders it automatically. Bulk data comes from the official Atlas export (see `../DATA-EXPORT-REQUEST.md`).

## Note on the map

Uses free Esri dark-canvas tiles as a stand-in for Atlas's proprietary vector map + master-plan overlays (metro/highway/rail GeoJSON), which live behind the app's encrypted API. The layer legend is shown for parity; the real geometry comes with the export.

---

*Local clone for reference/education. Data © Square Yards; captured for the account holder's own use.*
