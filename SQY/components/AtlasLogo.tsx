export function AtlasLogo() {
  return (
    <div className="logo">
      <svg className="mark" viewBox="0 0 32 32" fill="none" aria-hidden>
        <defs>
          <linearGradient id="ag" x1="0" y1="32" x2="32" y2="0">
            <stop stopColor="#4f83ff" />
            <stop offset=".45" stopColor="#4db6e6" />
            <stop offset=".75" stopColor="#2ecc71" />
            <stop offset="1" stopColor="#f5b942" />
          </linearGradient>
        </defs>
        <path d="M16 3 L28 29 H22 L16 13 L10 29 H4 Z" fill="url(#ag)" />
        <rect x="12" y="21" width="8" height="3.4" rx="1.5" fill="url(#ag)" />
      </svg>
      <span className="word">Atlas</span>
    </div>
  );
}
