'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { TopBar } from '@/components/TopBar';
import { Evidence, SCREENS, ScreenKey } from '@/components/ProjectScreens';
import { projectById, projectsByMicromarket, coordsFor, micromarketByKey } from '@/lib/data';

const MapView = dynamic(() => import('@/components/MapView'), { ssr: false });

export default function ProjectPage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : (params.id as string);
  const project = projectById(id);
  const [screen, setScreen] = useState<ScreenKey>('project');

  if (!project) {
    return (
      <div className="app">
        <TopBar />
        <div className="appbody" style={{ alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <p>Project not found.</p>
            <Link className="logout" href="/dashboard">← Back to projects</Link>
          </div>
        </div>
      </div>
    );
  }

  const siblings = projectsByMicromarket(project.micromarket);

  return (
    <div className="app">
      <TopBar project={project} micromarketName={micromarketByKey(project.micromarket)?.name} />
      <div className="appbody col">
        <div className="screen-tabs">
          {SCREENS.map(([key, label]) => (
            <button
              key={key}
              className={'tab' + (key === screen ? ' active' : '')}
              onClick={() => setScreen(key)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="lower">
          <MapView
            projects={siblings}
            center={coordsFor(project)}
            zoom={13}
            activeId={project.id}
            styleLabels={['2D', 'SAT']}
          />
          <div className="evidence">
            <Evidence screen={screen} project={project} />
          </div>
        </div>
      </div>
    </div>
  );
}
