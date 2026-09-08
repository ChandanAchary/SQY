'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TopBar } from '@/components/TopBar';
import { CITY, MICROMARKETS, PROJECTS, projectsByMicromarket } from '@/lib/data';
import { badgeClass, projImg } from '@/lib/ui';

const MapView = dynamic(() => import('@/components/MapView'), { ssr: false });

export default function Dashboard() {
  const router = useRouter();
  const [openKey, setOpenKey] = useState<string>('central');
  const [q, setQ] = useState('');
  const query = q.trim().toLowerCase();

  return (
    <div className="app">
      <TopBar />
      <div className="appbody">
        <div className="sidebar">
          <div className="head">
            <h1>FOCUS PROJECTS</h1>
            <div className="sub">{CITY.totalProjects} projects · {CITY.micromarketCount} micromarkets</div>
          </div>
          <div className="city-row"><span className="lbl">City</span><span className="val">{CITY.name}</span></div>
          <div className="search">
            <input placeholder="Search by Name" value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
          <div className="mm-list">
            {MICROMARKETS.map((m) => {
              const projs = projectsByMicromarket(m.key).filter((p) => p.name.toLowerCase().includes(query));
              const open = query ? projs.length > 0 : openKey === m.key;
              return (
                <div className="mm" key={m.key}>
                  <button
                    className={'mm-head' + (open ? ' open' : '')}
                    onClick={() => setOpenKey(openKey === m.key ? '' : m.key)}
                  >
                    <span className="name">{m.name.toUpperCase()}</span>
                    <span className="right"><span className="count">{m.count}</span><span className="chev">▾</span></span>
                  </button>
                  {open && (
                    <div className="mm-body">
                      {projs.map((p) => (
                        <button className="pcard" key={p.id} onClick={() => router.push('/project/' + p.id)}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img className="thumb" src={projImg(p.id)} alt="" />
                          <div className="info">
                            <div className="pname">{p.name}</div>
                            <div className="ploc">{p.location}</div>
                            <span className={'badge ' + badgeClass(p.status)}>{p.status}</span>
                            <div className="price">{p.price}</div>
                          </div>
                        </button>
                      ))}
                      {!projs.length && <div className="mm-empty">No matches</div>}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <MapView projects={PROJECTS} />
      </div>
    </div>
  );
}
