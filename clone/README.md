# Atlas — Local Working Clone

A faithful, runnable recreation of **atlas.squareyards.com** (Bangalore), built from the real UI and populated with real data captured from the live app.

## Run it

Any static web server works. Easiest (Python):

```bash
cd "C:/Users/chand/OneDrive/Desktop/SoftwareHub/SquareYard/clone"
python -m http.server 8777
```

Then open **http://127.0.0.1:8777** and click **Login** (no real password — it's a local clone).

> You can also just double-click `index.html`, but running via a server is recommended (the map + scripts behave best over http). An internet connection is needed for the map tiles and fonts.

## What's inside

| File | Purpose |
|------|---------|
| `index.html` | Login screen + app shell |
| `styles.css` | Faithful Atlas dark theme (logo, badges, cards, map panel) |
| `app.js` | Renders the dashboard + the 7-screen project briefing; drives the map |
| `data.js` | **Real captured data** (edit/extend this as more data arrives) |

## Fidelity

Recreated faithfully:
- **Login** — constellation art, Atlas gradient logo, tagline, form
- **Dashboard** — "Select a Project", collapsible micromarkets with counts, project cards (thumbnail, status badge, price), search, dark map with project pins + City Master Plan legend, BASIC/NAME/IMG toggle
- **Project view** — top bar with project crumb, the seven screen tabs, map on the left, evidence panel on the right:
  1. **Project** — price, status, unit config, size, units, area, resources
  2. **Developer Profile** — tier, narrative, totals, Bangalore CAGR, project lists, bio
  3. **Micromarket** — market state, prices, price-history chart, top localities, top developers, comparison
  4. **Infrastructure** — growth outlook, live/upcoming counts, key projects, connectivity
  5. **Neighbourhood** — quality scores, nearby essentials, connectivity distances
  6. **Case Studies** — top gaining projects with 1Y/3Y/5Y returns
  7. **Outlook** — 3-/5-year Conservative/Realistic/Optimistic scenarios, supports & limits

## Data coverage (what's real vs. pending)

| Scope | Status |
|-------|--------|
| Central Bangalore — all 19 projects (name, location, status, price) | ✅ real |
| **Provident Equinox** — full detail across all 7 screens | ✅ real |
| Provident Housing Limited — full developer profile | ✅ real |
| Central Bangalore micromarket — full detail (chart, localities, developers) | ✅ real |
| All 5 micromarkets — counts + sale/rent comparison | ✅ real |
| North / East / West / South project lists | ⏳ via official export |
| Other projects' 7-screen detail | ⏳ via official export (they show a sample view pointing to the export) |

To complete coverage, feed the official data export (see `../DATA-EXPORT-REQUEST.md`) into `data.js` — the UI already renders any project that follows the same shape as `provident-equinox`.

## Note

The map uses free Esri dark-canvas tiles as a stand-in for Atlas's proprietary vector map + master-plan overlays (metro/highway/rail GeoJSON). Those overlays live behind the app's encrypted API and would come with the official export.
