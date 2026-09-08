'use client';
import Link from 'next/link';
import { AtlasLogo } from './AtlasLogo';
import { USER } from '@/lib/data';
import { projImg } from '@/lib/ui';
import { Project } from '@/lib/types';

export function TopBar({ project, micromarketName }: { project?: Project; micromarketName?: string }) {
  return (
    <div className="topbar">
      <Link href="/dashboard"><AtlasLogo /></Link>
      <div className="divider" />
      {project ? (
        <div className="proj-crumb">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={projImg(project.id)} alt="" />
          <div>
            <div className="pt">
              {project.name} <small>({project.developer})</small>
            </div>
            <div className="ps">{project.location} · {micromarketName}</div>
          </div>
        </div>
      ) : (
        <div className="crumb">Select a Project</div>
      )}
      <div className="spacer" />
      <div className="user">{USER.name}</div>
      <span className="icon-btn">?</span>
      {project ? (
        <Link className="logout" href="/dashboard">← Projects</Link>
      ) : (
        <Link className="logout" href="/">⎋ Logout</Link>
      )}
    </div>
  );
}
