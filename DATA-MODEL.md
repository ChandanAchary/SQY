# Atlas — Data Model Reference

> Captured from the Atlas in-app manual (Help & documentation) + observed dashboard/API behaviour.
> Use this to make an export request precise and to structure the data once it arrives.
> Last updated: 2026-09-08

Atlas walks a user through a **project** using **seven screens in a fixed order**, with a map always on screen. This is the shape of the data.

---

## 1. Top-level hierarchy

```
City  ──▶  Micromarket  ──▶  Project  ──▶  7 screens of evidence
```

- **City** — coverage is per-city; a user's dropdown is limited by department/level. **Bangalore = cityId 10.** Mumbai appears to be the default/fallback dataset.
- **Micromarket** — Bangalore has 5: Central (19), North (80), East (52), West (3), South (63) → **217 focus projects**.
- **Project** — the unit you brief on; each has the seven screens below.

---

## 2. The home map

Interactive vector map per city with a toggleable **"City Master Plan"** overlay:

| Layer | Content (geospatial) |
|-------|----------------------|
| Metro | Metro lines + stations |
| Highways | Highway network |
| Railway | Rail network |
| Emp. Hubs | Employment hubs |
| Industrial | Industrial zones |
| Airports | Airports |

Also present: **focus-project pins**, **road-names GeoJSON** (seen cached in `localStorage` as `sy-road-names-v1`, ~2.8 MB), micromarket boundaries, and "our closed deals nearby" pins (see Screen 6).

---

## 3. The seven screens (per project)

| # | Screen | What it holds |
|---|--------|---------------|
| 1 | **Project** | Project details/specifications |
| 2 | **Developer** | Developer/builder profile & track record |
| 3 | **Micromarket** | Micromarket context & positioning |
| 4 | **Infrastructure** | Infrastructure items with **status** and **distance** to the project (metro, highways, etc.) |
| 5 | **Neighbourhood** | **Connectivity** and **amenity** scores |
| 6 | **Case Studies** | Square Yards' own **closed/comparable deals** nearby (shown as map pins) |
| 7 | **Outlook** | Forward price view — **three scenarios** + **confidence label** |

Every screen carries a **summary line** at the top (section 2.1b of the manual).

---

## 4. The numbers (data fields — from manual Part 3 "Reading the data")

- **3.1** Where the numbers come from (data provenance)
- **3.2** Market-state badge (per project/micromarket)
- **3.3** Asking price, transaction price, per-sqft benchmarks
- **3.4** CAGR, benchmark returns, and transaction **count** (why the count matters)
- **3.5** The three **Outlook scenarios**
- **3.6** The **confidence label**
- **3.7** "What supports this outlook" / "What to watch"
- **3.8** Connectivity and amenity **scores**
- **3.9** Infrastructure **status** and **distance**
- **3.10** Empty/"data unavailable" states (many are designed, not errors)

So each project record should include, at minimum:
`identity` (name, developer, micromarket, city, coordinates) · `pricing` (asking, transaction, per-sqft benchmarks) · `returns` (CAGR, benchmark returns, transaction counts) · `market_state` · `infrastructure[]` (item, status, distance) · `neighbourhood` (connectivity score, amenity score) · `case_studies[]` (nearby deals) · `outlook` (3 scenarios, confidence, supports/watch notes).

---

## 5. API surface (observed)

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/browser-key-exchange` | Negotiate the AES key used to encrypt responses |
| POST | `/api/login` | Authenticate (Employee ID + password) |
| GET | `/api/me` | Current user |
| GET | `/api/user-city` | User's default city |
| GET | `/api/city-micromarket-data?cityId=10` | Micromarkets + project counts for a city |
| GET | `/api/city-infra-data?city_id=10` | City master-plan infra layers |
| GET | *(per-project endpoints — not enumerated)* | Screen 1–7 data per project |

**All `/api/*` data responses are AES-GCM encrypted** as `{v, iv, ct}` and decrypted in the browser — see `RECON.md`. This is why a clean dataset must come from an **official export**, not a scrape.

---

## 6. Escalation / ownership (manual Part 7.3)

| Need | Owner |
|------|-------|
| Password / lockout | **Beats** (not Atlas) |
| A number is wrong / missing / stale | **Team leader → Business Development / Atlas Product team** |
| City access / wrong city data | **Manager → Product** |
| Data export / API access *(this request)* | **Team leader → Atlas Product team** (Product contact is the right owner) |

> The manual's Product/Support contact fields are placeholders ("to be filled by Sales Ops"), so your **team leader/manager is the entry point** to reach the Atlas Product team.
