export type MicromarketKey = 'central' | 'north' | 'east' | 'west' | 'south';

export interface MicromarketSummary {
  key: MicromarketKey;
  name: string;
  count: number;
  salePrice: number;
  rent: number;
  saleRank: number;
  rentRank: number;
}

export interface PricePoint { year: number; price: number; }
export interface Locality { rank: number; name: string; price: number; }
export interface DeveloperCount { name: string; projects: number; }
export interface RankedProject { rank: number; name: string; status: string; price: string; }

export interface MicromarketDetail {
  name: string;
  marketState: string;
  trend: string;
  narrative: string;
  avgSalePrice: number;
  avgRent: number;
  totalProjects: number;
  priceHistory: PricePoint[];
  topLocalities: Locality[];
  topDevelopers: DeveloperCount[];
  higherPriced: RankedProject[];
}

export interface DeveloperProjectRef { name: string; location: string; price: string; }
export interface Developer {
  id: string;
  name: string;
  tier: string;
  experience: number;
  narrative: string;
  totalProjects: number;
  bangalore: { newLaunch: number; underConstruction: number; readyToMove: number };
  returns: { y1: number; y3: number; y5: number };
  projectsByStatus: Record<string, DeveloperProjectRef[]>;
  about: string;
}

export interface InfraProject { name: string; status: string; impact: string; desc: string; }
export interface ConnItem { icon: string; label: string; place: string; dist: string; }
export interface CaseStudy { rank: number; name: string; area: string; dist: string; y1: string; y3: string; y5: string; }
export interface Scenario { label: string; note: string; price: string; ret: string; }
export interface SupportItem { title: string; desc: string; }

export interface ProjectScreens {
  project?: {
    priceLabel: string; status: string; unitConfig: string; size: string;
    units: number; area: string; resources: string[];
  };
  infrastructure?: {
    growthOutlook: string; support: string; live: number; upcoming: number;
    mediumImpact: number; mainStrength: string; keyProjects: InfraProject[];
    moreCount: number; connectivity: { metro: string; road: string; airport: string };
    watch: string[];
  };
  neighbourhood?: {
    quality: number; qualityDesc: string; travelConvenience: number; travelDesc: string;
    essentials: { education: number; healthcare: number; emergency: number };
    connectivity: ConnItem[];
  };
  caseStudies?: { topGaining: CaseStudy[] };
  outlook?: {
    confidence: string; market: string; current: string;
    y3: Scenario[]; y5: Scenario[]; supports: SupportItem[]; limits: SupportItem[];
  };
}

export interface Project {
  id: string;
  name: string;
  developer: string;
  developerId?: string;
  micromarket: MicromarketKey;
  location: string;
  status: string;
  price: string;
  detailed?: boolean;
  screens?: ProjectScreens;
}
