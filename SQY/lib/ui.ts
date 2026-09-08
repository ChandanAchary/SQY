export const badgeClass = (s: string): string =>
  (({
    'Ready to Move': 'ready',
    'Under Construction': 'uc',
    'New Launch': 'new',
    'Upcoming': 'up',
    'Partially Ready To Move': 'partial',
  }) as Record<string, string>)[s] || 'up';

export const projImg = (id: string) =>
  `https://picsum.photos/seed/${encodeURIComponent(id)}/240/180`;

export const money = (n: number) => '₹' + n.toLocaleString('en-IN');
