# SquareYard / Atlas — Local Workspace

Workspace for replicating **Atlas** (https://atlas.squareyards.com) — Square Yards' market-intelligence terminal — locally.

## Status

| | |
|---|---|
| **Logged in as** | Ashish Kumar Rout · Employee ID SQY63334 · Bangalore (cityId 10) |
| **Key finding** | Atlas **encrypts all API responses** (AES-GCM) and decrypts them in-browser — a deliberate anti-scraping control |
| **Delivered** | A **faithful, runnable local clone** of the Atlas UI in [`clone/`](clone/), populated with real data captured from the live app |
| **Full dataset** | Via **official export route** — request a sanctioned data export from the Atlas Product team rather than defeating the encryption |
| **Next action (you)** | Run the clone (`clone/README.md`); send the request in [`DATA-EXPORT-REQUEST.md`](DATA-EXPORT-REQUEST.md) to complete the dataset |
| **Next action (me)** | Load the export into `clone/data.js` to fill in the remaining projects/geo layers |

## Files

| File | What it is |
|------|-----------|
| [`RECON.md`](RECON.md) | Technical reconnaissance — tech stack, auth flow, the encryption finding, API endpoints |
| [`DATA-MODEL.md`](DATA-MODEL.md) | The Atlas data model (seven screens, fields, geo layers) captured from the in-app manual |
| [`DATA-EXPORT-REQUEST.md`](DATA-EXPORT-REQUEST.md) | Ready-to-send request + checklist for getting the data officially |
| [`clone/`](clone/) | **Runnable local clone of Atlas** — see [`clone/README.md`](clone/README.md) to run it |
| `data/` | Where the export goes when it arrives (see layout below) |

## Intended folder layout

```
SquareYard/
├── README.md
├── RECON.md
├── DATA-MODEL.md
├── DATA-EXPORT-REQUEST.md
├── data/
│   ├── projects/        ← per-project JSON (the 7 screens)
│   ├── reference/       ← cities, micromarkets, glossary
│   └── geo/             ← GeoJSON master-plan layers, pins, roads
└── clone/              ← runnable local UI (built after data lands)
```

## Notes on scope

- **Atlas**: pursuing the official export route (above). I will not defeat the app's encryption to bulk-extract it.
- **Beats / vBeats** (https://vbeats.squareyards.com): a separate internal Square Yards employee system. Same stance — I can't enter passwords, and I won't bulk-extract it. If you need something specific from it, log in yourself and tell me exactly what, and I'll help capture/export that piece.
