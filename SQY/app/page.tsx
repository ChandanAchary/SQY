'use client';
import { useRouter } from 'next/navigation';
import { AtlasLogo } from '@/components/AtlasLogo';

export default function LoginPage() {
  const router = useRouter();
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };
  return (
    <div className="login">
      <div className="art" aria-hidden>
        <svg viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#1c3a5e" strokeWidth="1" fill="none" opacity=".7">
            <path d="M-50 250 Q400 180 750 300 T1450 260" />
            <path d="M-50 520 Q350 620 780 500 T1450 560" />
            <path d="M200 -50 Q300 400 250 850" />
            <path d="M700 -50 Q650 350 780 850" />
          </g>
          <g stroke="#e07a5f" strokeWidth="1.5" fill="none" opacity=".55"><path d="M500 -50 Q560 400 470 850" /></g>
          <g stroke="#2ecc71" strokeWidth="1.5" fill="none" opacity=".45"><path d="M-50 640 Q450 560 900 660 T1450 620" /></g>
          <g stroke="#f5b942" strokeWidth="1.2" fill="none" opacity=".5"><path d="M-50 300 Q500 260 950 340 T1450 300" /></g>
          <g fill="#4db6e6">
            <circle cx="250" cy="300" r="3" /><circle cx="500" cy="240" r="3" /><circle cx="780" cy="300" r="3" />
            <circle cx="470" cy="470" r="3" /><circle cx="900" cy="660" r="3" />
          </g>
          <rect x="330" y="60" width="180" height="180" fill="none" stroke="#2a5a8a" opacity=".4" transform="rotate(12 420 150)" />
          <circle cx="420" cy="150" r="7" fill="none" stroke="#4db6e6" strokeWidth="2" />
        </svg>
      </div>
      <div className="left">
        <div className="tagline">
          A market intelligence terminal for live client conversations — every market claim grounded in visible data.
        </div>
      </div>
      <div className="right">
        <form className="login-card" onSubmit={submit}>
          <div className="brand"><AtlasLogo /></div>
          <h2>Sign in to Start Your Session</h2>
          <div className="field"><input type="text" placeholder="Employee ID" defaultValue="SQY63334" /></div>
          <div className="field"><input type="password" placeholder="Password" defaultValue="********" /></div>
          <button className="btn-login" type="submit">Login</button>
          <div className="login-note">
            Local clone · no real authentication.<br />Password resets are handled in Beats.
          </div>
        </form>
      </div>
    </div>
  );
}
