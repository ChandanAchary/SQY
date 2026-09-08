# Atlas Data — Export / Access Request

> A ready-to-adapt request for obtaining Atlas data **officially**, since the app encrypts its API to prevent scraping.
> Send this up through your **team leader / manager → Atlas Product team** (the owner per the Atlas manual §7.3).
> Fill in the **[bracketed]** parts before sending.

---

## Why this route (short version)

Atlas encrypts every API response and decrypts it in the browser, specifically so its dataset can't be pulled programmatically. The correct — and reliable — way to get a complete, clean, up-to-date copy is an **official export or read-only data feed from the Product/Data team**, not a browser scrape. A scrape would be partial, brittle, and against the app's design.

---

## Draft message (email / Slack to your manager)

> **Subject:** Request — Atlas data export / read access for [your purpose]
>
> Hi [Manager name],
>
> I'd like to request an **official data export (or read-only API access)** for the Atlas market-intelligence data for **[city, e.g. Bangalore]**. Purpose: **[e.g. offline analysis / building an internal report / backup — be specific]**.
>
> Could you help route this to the **Atlas Product / Data team**? I know Atlas encrypts its API by design, so I'm asking for a sanctioned export rather than pulling it from the tool myself.
>
> What I'm after (happy to scope down):
> - Project master list for [city] — all micromarkets (Bangalore: Central/North/East/West/South, ~217 projects)
> - Per project: the seven-screen data — Project, Developer, Micromarket, Infrastructure, Neighbourhood, Case Studies, Outlook
> - The pricing/returns fields (asking & transaction price, per-sqft benchmarks, CAGR, transaction counts, market-state, outlook scenarios + confidence)
> - The city master-plan geo layers (Metro, Highways, Railway, Employment Hubs, Industrial, Airports) as GeoJSON
>
> Preferred format: **JSON/CSV** for tabular data, **GeoJSON** for map layers. A one-time export is fine to start; a refresh cadence would be a bonus.
>
> My details: Employee ID **[SQY63334]**, **[name]**, **[team/department]**, reporting city **[Bangalore]**.
>
> Thanks!
> [Your name]

---

## What to ask for — checklist (hand this to Product)

**Reference data**
- [ ] Cities covered + city IDs (Bangalore = 10)
- [ ] Micromarkets per city (+ boundaries as GeoJSON)

**Projects** (per city)
- [ ] Full project list with IDs, names, developer, micromarket, coordinates
- [ ] Screen 1 — Project: specs/details
- [ ] Screen 2 — Developer: profile & track record
- [ ] Screen 3 — Micromarket: positioning/context
- [ ] Screen 4 — Infrastructure: items with status + distance
- [ ] Screen 5 — Neighbourhood: connectivity + amenity scores
- [ ] Screen 6 — Case Studies: nearby closed/comparable deals
- [ ] Screen 7 — Outlook: 3 scenarios, confidence label, supports/watch notes

**Metrics**
- [ ] Asking price, transaction price, per-sqft benchmarks
- [ ] CAGR, benchmark returns, transaction counts
- [ ] Market-state badge values

**Geospatial (GeoJSON)**
- [ ] Master-plan layers: Metro, Highways, Railway, Emp. Hubs, Industrial, Airports
- [ ] Road-names layer
- [ ] Project pins + deal/case-study pins

**Format & delivery**
- [ ] JSON/CSV + GeoJSON
- [ ] One-time export vs. refresh cadence
- [ ] Any data-handling / confidentiality terms I should follow

---

## When the export arrives

Drop the files in `data/` (see `README.md` for the layout) and tell me — I'll:
1. Validate and normalise it into clean JSON/CSV.
2. Load it into the local UI clone so the map + seven screens run offline against the real data.
