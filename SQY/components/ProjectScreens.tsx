'use client';
import { Project, MicromarketKey } from '@/lib/types';
import {
  MICROMARKETS, MICROMARKET_DETAIL, DEVELOPERS, PROJECTS, micromarketByKey,
} from '@/lib/data';
import { money, projImg } from '@/lib/ui';

export type ScreenKey =
  | 'project' | 'developer' | 'micromarket' | 'infrastructure'
  | 'neighbourhood' | 'caseStudies' | 'outlook';

export const SCREENS: [ScreenKey, string][] = [
  ['project', 'Project'], ['developer', 'Developer Profile'], ['micromarket', 'Micromarket'],
  ['infrastructure', 'Infrastructure'], ['neighbourhood', 'Neighbourhood'],
  ['caseStudies', 'Case Studies'], ['outlook', 'Outlook'],
];

const mmName = (k: string) => micromarketByKey(k)?.name || k;

function CompareTable({ activeKey }: { activeKey: string }) {
  const rows = [...MICROMARKETS].sort((a, b) => a.saleRank - b.saleRank);
  return (
    <div className="list-card">
      {rows.map((m) => (
        <div className="row" key={m.key} style={m.key === activeKey ? { background: 'rgba(79,131,255,.08)' } : undefined}>
          <div className="nm">{m.name}</div>
          <div style={{ textAlign: 'right' }}>
            <div className="rt" style={{ color: '#cdd4e0' }}>
              ₹{(m.salePrice / 1000).toFixed(1)}K <span className="rank" style={{ margin: '0 0 0 4px' }}>#{m.saleRank}</span>
            </div>
            <div className="mut">Rent ₹{m.rent} #{m.rentRank}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Placeholder({ project, title }: { project: Project; title: string }) {
  return (
    <div className="ev-pad">
      <div className="ev-label">{title.toUpperCase()}</div>
      <div className="ev-title">{project.name}</div>
      <div className="notice">
        <b>Sample view.</b> Full {title} data for this project is available through the official Atlas data export.
        Provident Equinox is fully populated as a live example — open it from Central Bangalore to see real captured
        data across all seven screens.
      </div>
    </div>
  );
}

function ProjectScreen({ project }: { project: Project }) {
  const s = project.screens?.project;
  if (!s) return <Placeholder project={project} title="Project" />;
  return (
    <>
      <div className="hero" style={{ backgroundImage: `linear-gradient(180deg,rgba(10,13,20,.1),rgba(10,13,20,.85)),url('${projImg(project.id)}')` }}>
        <div className="cap">
          <h2>{project.name}</h2>
          <p>{project.location}, Bangalore</p>
        </div>
      </div>
      <div className="price-line">{s.priceLabel}</div>
      <div className="stat-grid">
        <div className="stat full"><div className="k"><span className="chip chip-blue">🖥️</span>Status</div><div className="v" style={{ color: '#25a25a' }}>{s.status}</div></div>
        <div className="stat"><div className="k"><span className="chip chip-green">🛏️</span>Unit Config</div><div className="v">{s.unitConfig}</div></div>
        <div className="stat"><div className="k"><span className="chip chip-purple">📐</span>Size</div><div className="v">{s.size}</div></div>
        <div className="stat"><div className="k"><span className="chip chip-amber">🏢</span>Number of Units</div><div className="v">{s.units}</div></div>
        <div className="stat"><div className="k"><span className="chip chip-teal">🌳</span>Total area</div><div className="v">{s.area}</div></div>
      </div>
      <div className="resources">
        {s.resources.map((r) => (<div className="res-row" key={r}>{r}<span className="chev">▾</span></div>))}
      </div>
    </>
  );
}

function DeveloperScreen({ project }: { project: Project }) {
  const dev = project.developerId ? DEVELOPERS[project.developerId] : undefined;
  if (!dev) {
    const others = PROJECTS.filter((p) => p.developerId === project.developerId);
    return (
      <div className="ev-pad">
        <div className="ev-label">DEVELOPER PROFILE</div>
        <div className="ev-title">{project.developer}</div>
        <div className="ev-sub">{others.length} project{others.length !== 1 ? 's' : ''} in this city catalog</div>
        <div className="list-card">
          {others.map((p) => (
            <div className="row" key={p.id}>
              <div><div className="nm">{p.name}</div><div className="mut">{p.location} · {mmName(p.micromarket)}</div></div>
              <div className="rt" style={{ color: 'var(--teal)' }}>{p.price}</div>
            </div>
          ))}
        </div>
        <div className="notice">Full developer profile (track record, CAGR, narrative) is available via the official Atlas export.</div>
      </div>
    );
  }
  const st = dev.projectsByStatus;
  const listBlock = (title: string, arr?: { name: string; location: string; price: string }[]) =>
    arr && arr.length ? (
      <div key={title}>
        <div className="h-sec">{title} Projects</div>
        <div className="list-card">
          {arr.map((x) => (
            <div className="row" key={x.name}>
              <div><div className="nm">{x.name}</div><div className="mut">{x.location}</div></div>
              <div className="rt" style={{ color: 'var(--teal)' }}>{x.price}</div>
            </div>
          ))}
        </div>
      </div>
    ) : null;
  return (
    <div className="ev-pad">
      <div className="ev-label">DEVELOPER PROFILE</div>
      <div className="ev-title">{dev.name}</div>
      <div className="ev-sub">{dev.experience} yrs experience <span className="pill gold" style={{ marginLeft: 8 }}>{dev.tier}</span></div>
      <div className="narr accent"><div className="ev-label">＋ NARRATIVE SUMMARY</div>{dev.narrative}</div>
      <div className="kv2">
        <div className="kv"><div className="k">Total Projects</div><div className="v">{dev.totalProjects}</div><div className="mut">ACROSS INDIA</div></div>
        <div className="kv"><div className="k">In Bangalore</div><div className="v sm">🟣 New {dev.bangalore.newLaunch} · 🔵 UC {dev.bangalore.underConstruction} · 🟢 RTM {dev.bangalore.readyToMove}</div></div>
      </div>
      <div className="h-sec">{dev.name} Returns in Bangalore</div>
      <div className="metric-row">
        <div className="metric"><div className="v">+{dev.returns.y1}%</div><div className="k">1 Year CAGR</div></div>
        <div className="metric"><div className="v">+{dev.returns.y3}%</div><div className="k">3 Year CAGR</div></div>
        <div className="metric"><div className="v">+{dev.returns.y5}%</div><div className="k">5 Year CAGR</div></div>
      </div>
      {listBlock('New Launch', st['New Launch'])}
      {listBlock('Under Construction', st['Under Construction'])}
      {listBlock('Ready to Move', st['Ready to Move'])}
      <div className="h-sec">About Developer</div>
      <div className="narr">{dev.about}</div>
    </div>
  );
}

function MicromarketScreen({ project }: { project: Project }) {
  const m = MICROMARKET_DETAIL[project.micromarket as MicromarketKey];
  if (!m) {
    const mm = micromarketByKey(project.micromarket)!;
    return (
      <div className="ev-pad">
        <div className="ev-label">MICROMARKET</div>
        <div className="ev-title">{mm.name}</div>
        <div className="metric-row">
          <div className="metric"><div className="v">{money(mm.salePrice)}</div><div className="k">Avg Sale /sq ft</div></div>
          <div className="metric"><div className="v">₹{mm.rent}</div><div className="k">Avg Rent /sq ft/mo</div></div>
        </div>
        <div className="h-sec">How This Area Compares</div>
        <CompareTable activeKey={project.micromarket} />
        <div className="notice">Full micromarket detail (price history, top localities & developers) is available via the official Atlas export.</div>
      </div>
    );
  }
  const maxP = Math.max(...m.priceHistory.map((h) => h.price));
  return (
    <div className="ev-pad">
      <div className="ev-label">MICROMARKET</div>
      <div className="ev-title">{m.name}</div>
      <div style={{ margin: '6px 0 12px' }}><span className="pill green">{m.marketState}</span><span className="pill blue">{m.trend}</span></div>
      <div className="narr">{m.narrative}</div>
      <div className="kv2">
        <div className="kv"><div className="k">Average Sale Price</div><div className="v">{money(m.avgSalePrice)}<span style={{ fontSize: 12, color: 'var(--muted)' }}>/sq ft</span></div></div>
        <div className="kv"><div className="k">Average Rent</div><div className="v">₹{m.avgRent}<span style={{ fontSize: 12, color: 'var(--muted)' }}>/sq ft/mo</span></div></div>
      </div>
      <div className="kv"><div className="k">Total Projects</div><div className="v">{m.totalProjects.toLocaleString('en-IN')}</div></div>
      <div className="h-sec">Average Asking Price · INR/sq.ft</div>
      <div className="chart">
        {m.priceHistory.map((h) => (
          <div className="bar" key={h.year}>
            <div className="pv">₹{(h.price / 1000).toFixed(1)}K</div>
            <div className="fill" style={{ height: `${Math.round((h.price / maxP) * 100)}%` }} />
            <div className="yr">{h.year}</div>
          </div>
        ))}
      </div>
      <div className="h-sec">Top Priced Localities</div>
      <div className="list-card">
        {m.topLocalities.map((l) => (
          <div className="row" key={l.rank}><div><span className="rank">{l.rank}</span><span className="nm">{l.name}</span></div><div className="rt" style={{ color: 'var(--teal)' }}>{money(l.price)}/sq ft</div></div>
        ))}
      </div>
      <div className="h-sec">Top Developers in {m.name}</div>
      <div className="list-card">
        {m.topDevelopers.map((d) => (<div className="row" key={d.name}><div className="nm">{d.name}</div><div className="mut">{d.projects} Projects</div></div>))}
      </div>
      <div className="h-sec">How This Area Compares</div>
      <CompareTable activeKey={project.micromarket} />
    </div>
  );
}

function InfraScreen({ project }: { project: Project }) {
  const s = project.screens?.infrastructure;
  if (!s) return <Placeholder project={project} title="Infrastructure & Growth" />;
  return (
    <div className="ev-pad">
      <div className="ev-label">INFRASTRUCTURE & GROWTH</div>
      <div className="ev-title">{project.name}</div>
      <div style={{ margin: '8px 0 14px' }}><span className="pill green">{s.growthOutlook}</span><span className="pill blue">{s.support}</span></div>
      <div className="metric-row">
        <div className="metric"><div className="v">{s.live}</div><div className="k">Live Projects</div></div>
        <div className="metric"><div className="v">{s.upcoming}</div><div className="k">Upcoming</div></div>
        <div className="metric"><div className="v">{s.mediumImpact}</div><div className="k">Medium-Impact</div></div>
      </div>
      <div className="kv"><div className="k">Main Strength</div><div className="v sm">{s.mainStrength}</div></div>
      <div className="h-sec">Key Infrastructure Projects</div>
      <div className="list-card">
        {s.keyProjects.map((k, i) => (
          <div className="row" key={i}>
            <div><div className="nm">{k.name}</div><div className="mut">{k.desc}</div></div>
            <div style={{ textAlign: 'right', whiteSpace: 'nowrap' }}><span className="pill green" style={{ fontSize: 9 }}>{k.status}</span><div className="mut">{k.impact}</div></div>
          </div>
        ))}
        <div className="row"><div className="mut">View More ({s.moreCount} more)</div></div>
      </div>
      <div className="h-sec">Connectivity at a Glance</div>
      <div className="metric-row">
        <div className="metric"><div className="v sm" style={{ color: 'var(--teal)' }}>{s.connectivity.metro}</div><div className="k">Metro</div></div>
        <div className="metric"><div className="v sm" style={{ color: 'var(--teal)' }}>{s.connectivity.road}</div><div className="k">Road</div></div>
        <div className="metric"><div className="v sm" style={{ color: 'var(--teal)' }}>{s.connectivity.airport}</div><div className="k">Airport</div></div>
      </div>
      <div className="h-sec">What to Watch</div>
      <div className="narr">{s.watch.map((w, i) => (<div key={i}>• {w}</div>))}</div>
    </div>
  );
}

function NeighbourhoodScreen({ project }: { project: Project }) {
  const s = project.screens?.neighbourhood;
  if (!s) return <Placeholder project={project} title="Neighbourhood Overview" />;
  return (
    <div className="ev-pad">
      <div className="ev-label">NEIGHBOURHOOD OVERVIEW</div>
      <div className="ev-title">{project.name}</div>
      <div className="h-sec">Area Quality</div>
      <div className="kv2">
        <div className="kv"><div className="k">Neighbourhood Quality</div><div className="v">{s.quality}</div></div>
        <div className="kv"><div className="k">Travel Convenience</div><div className="v" style={{ color: 'var(--green)' }}>{s.travelConvenience}</div></div>
      </div>
      <div className="narr" style={{ fontSize: 12 }}>{s.qualityDesc}</div>
      <div className="h-sec">Nearby Essentials</div>
      <div className="metric-row">
        <div className="metric"><div className="v">{s.essentials.education}</div><div className="k">Education</div></div>
        <div className="metric"><div className="v">{s.essentials.healthcare}</div><div className="k">Healthcare</div></div>
        <div className="metric"><div className="v">{s.essentials.emergency}</div><div className="k">Emergency</div></div>
      </div>
      <div className="h-sec">Connectivity</div>
      <div className="list-card">
        {s.connectivity.map((c, i) => (
          <div className="row" key={i}><div><div className="nm">{c.icon} {c.label}</div><div className="mut">{c.place}</div></div><div className="rt" style={{ color: '#cdd4e0' }}>{c.dist}</div></div>
        ))}
      </div>
    </div>
  );
}

function CaseStudiesScreen({ project }: { project: Project }) {
  const s = project.screens?.caseStudies;
  if (!s) return <Placeholder project={project} title="Case Studies" />;
  return (
    <div className="ev-pad">
      <div className="ev-label">CASE STUDIES</div>
      <div className="ev-title">{mmName(project.micromarket)}</div>
      <div className="ev-sub">By {project.developer}</div>
      <div className="h-sec">Top Gaining Projects</div>
      <div className="list-card">
        {s.topGaining.map((g) => (
          <div className="row" key={g.rank}>
            <div><span className="rank">{g.rank}</span><span className="nm">{g.name}</span><div className="mut" style={{ marginLeft: 30 }}>{g.area} • {g.dist}</div></div>
            <div style={{ textAlign: 'right' }}><div className="rt">1Y {g.y1}</div><div className="mut">3Y {g.y3} · 5Y {g.y5}</div></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OutlookScreen({ project }: { project: Project }) {
  const s = project.screens?.outlook;
  if (!s) return <Placeholder project={project} title="Forward Outlook" />;
  const scen = (arr: typeof s.y3, yrs: number) => (
    <div className="scen-block">
      <div className="h-sec">In {yrs} Years</div>
      <div className="today">Today: {s.current}</div>
      {arr.map((x) => (
        <div className={'scen ' + (x.label === 'Conservative' ? 'cons' : x.label === 'Realistic' ? 'real' : 'opt')} key={x.label}>
          <div><div className="lbl">{x.label}</div><div className="note">{x.note}</div></div>
          <div style={{ textAlign: 'right' }}><div className="price">{x.price}</div><div className="ret">{x.ret}</div></div>
        </div>
      ))}
    </div>
  );
  return (
    <div className="ev-pad">
      <div className="ev-label">FORWARD OUTLOOK</div>
      <div className="ev-title">{project.name}</div>
      <div className="ev-sub">{project.location} · {s.market} <span className="pill gold" style={{ marginLeft: 6 }}>Confidence: {s.confidence}</span></div>
      <div className="kv"><div className="k">Current Estimated Price</div><div className="v" style={{ color: 'var(--green)' }}>{s.current}</div></div>
      {scen(s.y3, 3)}
      {scen(s.y5, 5)}
      <div className="h-sec">What Supports This Outlook</div>
      {s.supports.map((x, i) => (<div className="support sup" key={i}><div className="t">{x.title}</div><div className="d">{x.desc}</div></div>))}
      <div className="h-sec">What May Limit Growth</div>
      {s.limits.map((x, i) => (<div className="support lim" key={i}><div className="t">{x.title}</div><div className="d">{x.desc}</div></div>))}
      <div className="disc">These are estimated scenarios, not a guaranteed return or exact future selling price. Ranges assume the broader economy and regulations remain broadly stable.</div>
    </div>
  );
}

export function Evidence({ screen, project }: { screen: ScreenKey; project: Project }) {
  switch (screen) {
    case 'project': return <ProjectScreen project={project} />;
    case 'developer': return <DeveloperScreen project={project} />;
    case 'micromarket': return <MicromarketScreen project={project} />;
    case 'infrastructure': return <InfraScreen project={project} />;
    case 'neighbourhood': return <NeighbourhoodScreen project={project} />;
    case 'caseStudies': return <CaseStudiesScreen project={project} />;
    case 'outlook': return <OutlookScreen project={project} />;
    default: return null;
  }
}
