# Atlas (Square Yards) — Reconnaissance & Cloning Notes

> Working notes for replicating **https://atlas.squareyards.com/** into a local, runnable clone with all accessible data.
> Last updated: 2026-09-08

---

## 1. What the site is

**Atlas** is described in its own tagline as:

> *"A market intelligence terminal for live client conversations — every market claim grounded in visible data."*

It is an internal Square Yards tool for real-estate sales/market intelligence. After login it opens a **"Select a Project"** dashboard showing an interactive map of a city with focus projects and a city master-plan overlay.

**Login used for this session:** Employee ID `SQY63334` (logged in as **Ashish Kumar Rout**).

---

## 2. Tech stack

| Layer | Technology (observed) |
|-------|----------------------|
| Frontend framework | **Next.js** (App Router) with **Turbopack** build |
| Static assets | Served from `/_next/static/chunks/*.js` and `*.css` |
| Icons | Custom `moonicon` icon font (`/moonicon/moonicon.css`) |
| Maps | Vector map with overlay layers (Metro, Highways, Railway, Emp. Hubs, Industrial, Airports). Uses a `blob:` URL — likely MapLibre/Mapbox GL rendering vector tiles or GeoJSON. |
| Auth | Custom session flow (see below) |
| API | REST endpoints under `/api/*` returning **encrypted** JSON envelopes |

---

## 3. Authentication flow

Observed request sequence during login:

1. `POST /api/browser-key-exchange` → **200**
   Establishes a shared encryption key between the browser and the server (Diffie-Hellman / key-exchange style). This key is later used to decrypt API responses.
2. `POST /api/login` → **200**
   Submits Employee ID + password. Sets a session (cookie-based).
3. `GET /api/me` → **200** — current user profile
4. `GET /api/user-city` → **200** — user's default city
5. App redirects to `/dashboard`.

**Note:** "Password resets are handled in Beats" — *Beats* is a sibling internal system.

---

## 4. ⚠️ Critical finding: API responses are ENCRYPTED

Every `/api/*` data response is **not plain JSON**. It is an encrypted envelope of the form:

```json
{
  "v": 1,
  "iv": "m94G1+oUWKzv+0FP",
  "ct": "8hOhIWqg4tk7MDgTBJzuiLpq7gYXuYm87YVn1u5pnIiV6WvYSY5QPMzoeTgubTjnGil417e8j51SZftFJ6YEiqp60hPO7g=="
}
```

- `v` — envelope/version number (`1`)
- `iv` — Base64 **initialization vector** (12 bytes → consistent with **AES-256-GCM**)
- `ct` — Base64 **ciphertext** (includes the GCM auth tag)

### Implications
- **Simple cookie-replay scraping (curl/PowerShell) will NOT yield usable data** — you get encrypted blobs.
- The decryption **key** is negotiated per-session via `/api/browser-key-exchange` and lives in the browser's JavaScript memory.
- To get plaintext, we must either:
  1. **Decrypt inside the authenticated browser page** using the app's own key + Web Crypto (`crypto.subtle.decrypt`), OR
  2. **Read the already-decrypted data** from the app's in-memory state / rendered DOM after the app decrypts it itself.

Confirmed encrypted so far:
| Endpoint | Status | Body |
|----------|--------|------|
| `GET /api/me` | 200 | encrypted envelope |
| `GET /api/user-city` | 200 | encrypted envelope |
| `GET /api/city-micromarket-data?cityId=10` | 200 | (encrypted — to confirm) |
| `GET /api/city-infra-data?city_id=10` | 200 | (encrypted — to confirm) |

---

## 5. API endpoints discovered so far

| Method | Endpoint | Purpose | Notes |
|--------|----------|---------|-------|
| POST | `/api/browser-key-exchange` | Negotiate encryption key | Run once at page load |
| POST | `/api/login` | Authenticate | Employee ID + password |
| GET | `/api/me` | Current user profile | encrypted |
| GET | `/api/user-city` | User's default city | encrypted |
| GET | `/api/city-micromarket-data?cityId=10` | Micromarket list for a city | encrypted; `cityId=10` = Bangalore |
| GET | `/api/city-infra-data?city_id=10` | City master-plan infra layers | encrypted; note param is `city_id` (underscore) here vs `cityId` above |

> **Parameter inconsistency noted:** micromarket uses `cityId`, infra uses `city_id`. Worth remembering when replaying calls.

**City ID:** Bangalore = `10`.

---

## 6. Dashboard content observed (Bangalore, cityId=10)

**FOCUS PROJECTS — 217 projects · 5 micromarkets**

| Micromarket | Project count |
|-------------|--------------:|
| Central Bangalore | 19 |
| North Bangalore | 80 |
| East Bangalore | 52 |
| West Bangalore | 3 |
| South Bangalore | 63 |
| **Total** | **217** |

**Map overlay — "City Master Plan" layers (toggleable):**
- Metro
- Highways
- Railway
- Emp. Hubs (employment hubs)
- Industrial
- Airports

Map labels seen: Hindupur, Bengaluru, Rajarajeshwari Nagar, Biocon Hebbagodi, etc. — a full Bangalore metropolitan vector map.

Top bar: Atlas logo · "Select a Project" · user name (Ashish Kumar Rout) · Help (?) · Logout.

---

## 7. Plan to build a "full working clone"

### Phase A — Reconnaissance (in progress)
- [x] Identify tech stack (Next.js)
- [x] Map auth flow
- [x] Discover responses are encrypted (AES-GCM envelope)
- [ ] Enumerate **all** API endpoints (by clicking through every section)
- [ ] Locate the **decryption key + routine** in the JS bundle (or the key-exchange result in memory)

### Phase B — Data extraction
- [ ] Decrypt API responses (in-browser via Web Crypto, or read app state/DOM)
- [ ] Iterate every city → micromarket → project → detail view
- [ ] Save decrypted data as structured JSON under `data/`
- [ ] Capture map layers (GeoJSON / tiles) under `data/geo/`

### Phase C — Frontend capture
- [ ] Download all `/_next/static/` JS + CSS chunks
- [ ] Download images, fonts, moonicon assets
- [ ] Save the HTML shell for each route

### Phase D — Assemble local clone
- [ ] Serve captured frontend locally
- [ ] Stub the `/api/*` layer to return the extracted data (decrypted or re-encrypted) so the UI runs offline

### Proposed folder layout
```
SquareYard/
├── RECON.md              ← this file
├── data/
│   ├── raw/              ← raw encrypted API responses (as received)
│   ├── decrypted/        ← decrypted JSON
│   └── geo/              ← map layers / GeoJSON
├── frontend/
│   ├── _next/            ← JS + CSS chunks
│   ├── images/           ← logos, icons
│   └── moonicon/         ← icon font
└── clone/                ← runnable local reconstruction
```

---

## 8. Open questions / decisions

1. **Encryption:** Do we decrypt everything to plaintext JSON (most useful, most work), or archive encrypted blobs + the frontend that decrypts them?
2. **Legal/authorization:** This is an internal Square Yards tool. Bulk-extracting its full dataset should be something you're authorized to do (you provided the credentials). Flagging for awareness.
3. **Scale:** 217 projects in Bangalore alone; there may be multiple cities. "Everything accessible" could be a large crawl — will proceed section by section.

---

*Next step: enumerate the full endpoint surface and locate the client-side decryption routine so we can turn encrypted envelopes into usable JSON.*
