'use client';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet';
import { useRouter } from 'next/navigation';
import { Project } from '@/lib/types';
import { coordsFor } from '@/lib/data';

const STATUS_COLORS: Record<string, string> = {
  'Ready to Move': '#2ecc71',
  'Under Construction': '#4f83ff',
  'New Launch': '#8b5cf6',
  'Upcoming': '#9aa3b2',
  'Partially Ready To Move': '#f59e0b',
};

const LAYERS: [string, string][] = [
  ['Metro', 'mp-metro'], ['Highways', 'mp-hw'], ['Railway', 'mp-rail'],
  ['Emp. Hubs', 'mp-emp'], ['Industrial', 'mp-ind'], ['Airports', 'mp-air'],
];

export default function MapView({
  projects,
  center = [12.9716, 77.5946],
  zoom = 11,
  activeId,
  styleLabels = ['BASIC', 'NAME', 'IMG'],
}: {
  projects: Project[];
  center?: [number, number];
  zoom?: number;
  activeId?: string;
  styleLabels?: string[];
}) {
  const router = useRouter();
  return (
    <div className="map-wrap">
      <MapContainer center={center} zoom={zoom} className="map-el" zoomControl attributionControl={false} scrollWheelZoom>
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
          maxZoom={16}
        />
        {projects.map((p) => {
          const active = p.id === activeId;
          return (
            <CircleMarker
              key={p.id}
              center={coordsFor(p)}
              radius={active ? 9 : 6}
              pathOptions={{
                color: '#ffffff',
                weight: active ? 2 : 1,
                fillColor: STATUS_COLORS[p.status] || '#4db6e6',
                fillOpacity: 0.9,
              }}
              eventHandlers={{ click: () => router.push('/project/' + p.id) }}
            >
              <Tooltip direction="top">
                <b>{p.name}</b>
                <br />
                {p.price}
              </Tooltip>
            </CircleMarker>
          );
        })}
      </MapContainer>

      <div className="map-style-toggle">
        {styleLabels.map((l, i) => (
          <button key={l} className={i === 0 ? 'active' : ''}>{l}</button>
        ))}
      </div>

      <div className="masterplan">
        <h4>CITY MASTER PLAN <span style={{ color: 'var(--gold)' }}>◉</span></h4>
        {LAYERS.map(([label, cls]) => (
          <label className="layer" key={label}>
            <span className={'dot ' + cls} />
            {label}
          </label>
        ))}
      </div>
    </div>
  );
}
