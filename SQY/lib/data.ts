import {
  MicromarketKey, MicromarketSummary, MicromarketDetail, Developer, Project, ProjectScreens
} from './types';

/* Real data captured from atlas.squareyards.com (Bangalore, cityId 10) on 2026-09-08,
 * browsing as authorised user SQY63334. Full catalog: all 217 projects across 5 micromarkets.
 * Full 7-screen detail: Provident Equinox (others available via the official Atlas export). */

export const USER = { name: 'Ashish Kumar Rout', empId: 'SQY63334', city: 'Bangalore', cityId: 10 };
export const CITY = { name: 'Bangalore', id: 10, totalProjects: 217, micromarketCount: 5 };

export const MICROMARKETS: MicromarketSummary[] = [
  { key: 'central', name: 'Central Bangalore', count: 19, salePrice: 14800, rent: 47, saleRank: 1, rentRank: 1 },
  { key: 'north',   name: 'North Bangalore',   count: 80, salePrice: 11000, rent: 30, saleRank: 4, rentRank: 5 },
  { key: 'east',    name: 'East Bangalore',    count: 52, salePrice: 12700, rent: 35, saleRank: 3, rentRank: 4 },
  { key: 'west',    name: 'West Bangalore',    count: 3,  salePrice: 8700,  rent: 39, saleRank: 5, rentRank: 2 },
  { key: 'south',   name: 'South Bangalore',   count: 63, salePrice: 13200, rent: 35, saleRank: 2, rentRank: 3 },
];

export const MICROMARKET_DETAIL: Partial<Record<MicromarketKey, MicromarketDetail>> = {
  central: {
    name: 'Central Bangalore', marketState: 'Mature', trend: 'Steady',
    narrative: "Central Bangalore is the priciest of the city's five listed micromarkets, with a current sale price of around Rs. 14,800 per sq.ft and steady demand supporting a mature market. Prices have grown at a historic rate of roughly 11% CAGR since 2022, reflecting consistent appreciation in this well-established area.",
    avgSalePrice: 14800, avgRent: 47, totalProjects: 8278,
    priceHistory: [
      { year: 2022, price: 9800 }, { year: 2023, price: 11200 }, { year: 2024, price: 12500 },
      { year: 2025, price: 13500 }, { year: 2026, price: 14800 },
    ],
    topLocalities: [
      { rank: 1, name: 'Rajaji Nagar', price: 25450 }, { rank: 2, name: 'Jayanagar', price: 21750 },
      { rank: 3, name: 'Richmond Town', price: 19750 }, { rank: 4, name: 'Koramangala', price: 19450 },
      { rank: 5, name: 'Mahadevpura', price: 18150 }, { rank: 6, name: 'Pulikeshi Nagar', price: 16950 },
      { rank: 7, name: 'Halasuru', price: 16950 }, { rank: 8, name: 'Frazer Town', price: 16950 },
      { rank: 9, name: 'Seshadripuram', price: 15950 }, { rank: 10, name: 'Rajaji Nagar 6th Block', price: 15950 },
    ],
    topDevelopers: [
      { name: 'Brigade', projects: 49 }, { name: 'Salarpuria Sattva Group', projects: 38 },
      { name: 'Prestige', projects: 91 }, { name: 'Sobha', projects: 23 },
      { name: 'Shriram Properties', projects: 13 }, { name: 'DS MAX Properties Pvt Ltd', projects: 17 },
      { name: 'Puravankara', projects: 40 }, { name: 'Century Real Estate', projects: 10 },
      { name: 'Assetz Homes', projects: 7 }, { name: 'Embassy', projects: 29 },
    ],
    higherPriced: [
      { rank: 1, name: 'Provident Equinox 5', status: 'New Launch', price: '90.00 Lac to 2.20 Cr' },
      { rank: 2, name: 'Godrej Tiara', status: 'New Launch', price: '3.50 Cr to 5.30 Cr' },
    ],
  },
};

export const DEVELOPERS: Record<string, Developer> = {
  'provident-housing-limited': {
    id: 'provident-housing-limited', name: 'Provident Housing Limited', tier: 'PLATINUM', experience: 10,
    narrative: 'Provident Housing Limited has a 10-year track record with 36 projects across India, including 18 in Bangalore where 10 are ready to move and 7 are under construction. Their resale prices in Bangalore have historically appreciated at around 9.5% over one year and over 12% across three and five years, providing some evidence of value retention in this market. This history offers a useful reference point for understanding their project performance here.',
    totalProjects: 36,
    bangalore: { newLaunch: 1, underConstruction: 7, readyToMove: 10 },
    returns: { y1: 9.5, y3: 12.8, y5: 12.1 },
    projectsByStatus: {
      'New Launch': [{ name: 'Provident Equinox 5', location: 'Mysore Road', price: '90.00 Lac – 2.20 Cr' }],
      'Under Construction': [
        { name: 'Provident Equinox 4', location: 'Mysore Road', price: '73.49 Lac – 1.80 Cr' },
        { name: 'Provident Deansgate', location: 'Kempalingapura', price: '2.50 Cr – 3.00 Cr' },
        { name: 'Provident Botanico', location: 'Whitefield', price: '1.07 Cr – 1.72 Cr' },
        { name: 'Provident Ecopolitan', location: 'Marenahalli', price: '51.20 Lac – 1.36 Cr' },
        { name: 'Provident Equinox 3', location: 'Mysore Road', price: '73.49 Lac – 1.80 Cr' },
        { name: 'Provident Central Park', location: 'Kanakapura Road', price: '36.50 Lac – 1.05 Cr' },
        { name: 'Provident Sunworth', location: 'Mysore Road', price: '78.27 Lac – 2.20 Cr' },
      ],
      'Ready to Move': [
        { name: 'Provident Park One', location: 'Kanakapura Road', price: '63.59 Lac – 1.57 Cr' },
        { name: 'Provident Too Good Homes', location: 'Thanisandra Main Road', price: '68.50 Lac – 71.20 Lac' },
        { name: 'Provident Upstudios', location: 'Whitefield', price: '38.10 Lac – 91.65 Lac' },
        { name: 'Provident Sundeck', location: 'Mysore Road', price: '73.49 Lac – 90.05 Lac' },
        { name: 'Provident Equinox 2', location: 'Mysore Road', price: '83.89 Lac – 1.03 Cr' },
        { name: 'Provident Park Square Phase 4', location: 'Kanakapura Road', price: '63.59 Lac – 1.59 Cr' },
        { name: 'Provident Woodfield', location: 'Kachanayakanahalli', price: '99.75 Lac – 1.43 Cr' },
        { name: 'Provident Rising City', location: 'Electronic City Phase I', price: 'Price on Request' },
        { name: 'Provident Capella', location: 'Whitefield', price: '42.37 Lac – 1.10 Cr' },
      ],
    },
    about: "Provident Housing Limited is owned by Puravankara Projects Limited, one of India's biggest real estate players. Ashish Puravankara holds office as Founder Director while Ravi Puravankara is the Chairman cum Founder Director. The tally of Provident Housing projects covers premium and affordable homes spread over 6.5 million sq. ft. overall. Six projects are presently being developed at major locations in Bangalore, Coimbatore, Chennai, Mangalore, etc. These cumulatively cover 10 million sq. ft. with configurations ranging between two-three bedroom apartments. There are premium amenities offered to residents at every project along with top class connectivity to major social amenities. Affordable and group housing are major specialties of the company while it is foraying into markets like Kochi, Hyderabad, Kolkata, Mysore, Colombo, Dubai, UAE, etc. Representatives have also been stationed in UK and the United States. It owns a land bank of more than 125 million sq. ft. which serves as the backbone for upcoming projects.",
  },
};

/* Approximate coordinates for Bangalore localities (map markers). Unlisted localities fall back to the micromarket centre. */
export const MICROMARKET_CENTER: Record<MicromarketKey, [number, number]> = {
  central: [12.9716, 77.5946], north: [13.10, 77.62], east: [12.97, 77.73], west: [13.03, 77.50], south: [12.86, 77.66],
};
export const LOCALITY_COORDS: Record<string, [number, number]> = {
  'Mysore Road': [12.9451, 77.5220], 'Rajaji Nagar': [12.9915, 77.5551], 'Yeshwanthpur': [13.0280, 77.5400],
  'Nagavara': [13.0430, 77.6200], 'Koramangala': [12.9352, 77.6245], 'Indiranagar': [12.9719, 77.6412],
  'Hebbal': [13.0358, 77.5970], 'Binnipete': [12.9720, 77.5620], 'Sudhama Nagar': [12.9560, 77.5760],
  'Banashankari': [12.9250, 77.5460], 'Bagalur': [13.1330, 77.6660], 'Sathnur': [13.2050, 77.6350],
  'Devanahalli': [13.2437, 77.7120], 'Yelahanka': [13.1007, 77.5963], 'Thanisandra': [13.0680, 77.6270],
  'Thanisandra Main Road': [13.0640, 77.6300], 'Kogilu': [13.0870, 77.6180], 'Budigere Cross': [13.0480, 77.7500],
  'Shettigere': [13.1930, 77.6560], 'Chokkanahalli': [13.0700, 77.6180], 'IVC Road': [13.2100, 77.6300],
  'Rajanukunte': [13.1660, 77.5500], 'Doddaballapura': [13.2940, 77.5370], 'Jakkuru': [13.0770, 77.6070],
  'Bagaluru': [13.1330, 77.6660], 'Rachenahalli': [13.0560, 77.6200], 'Bellahalli': [13.0790, 77.6420],
  'Hennur': [13.0400, 77.6420], 'HBR Layout': [13.0270, 77.6150], 'Whitefield': [12.9698, 77.7500],
  'Whitefield Road': [12.9850, 77.7300], 'Panathur': [12.9370, 77.6960], 'Varthur': [12.9400, 77.7470],
  'Hoskote': [13.0707, 77.7980], 'Munnekollal': [12.9560, 77.7030], 'Bhattarahalli': [13.0230, 77.7100],
  'KR Puram': [13.0075, 77.6960], 'Balagere': [12.9560, 77.7180], 'Hennur Road': [13.0400, 77.6420],
  'Hoodi': [12.9920, 77.7150], 'Gunjur': [12.9200, 77.7430], 'Kannamangala': [13.0020, 77.7620],
  'Mullur': [12.9200, 77.7060], 'Siddapura': [12.9450, 77.7350], 'Thubarahalli': [12.9560, 77.7100],
  'Chikkabidarakallu': [13.0480, 77.5030], 'Jalahalli': [13.0470, 77.5460], 'Nagasandra': [13.0480, 77.5010],
  'Kada Agrahara': [12.8100, 77.6600], 'Bannerghatta': [12.8000, 77.5770], 'Bannerghatta Road': [12.8600, 77.5970],
  'Electronic City': [12.8450, 77.6600], 'Electronic City Phase II': [12.8420, 77.6690], 'Attibele': [12.7830, 77.7710],
  'Madiwala': [12.9220, 77.6180], 'Kanakapura Road': [12.8850, 77.5560], 'Akshayanagar': [12.8720, 77.6230],
  'Sarjapur Road': [12.9010, 77.6870], 'Sarjapur': [12.8600, 77.7860], 'Dommasandra': [12.8850, 77.7500],
  'Singasandra': [12.8790, 77.6470], 'Kambipura': [12.9000, 77.4650], 'Bidaraguppe': [12.8300, 77.7600],
  'Marenahalli': [12.9080, 77.5450], 'Raja Rajeshwari Nagar': [12.9260, 77.5190], 'Gattahalli': [12.8900, 77.7000],
  'Hosur Road': [12.8600, 77.6600], 'Padmanabha Nagar': [12.9180, 77.5560], 'Chikkakannalli': [12.8880, 77.6820],
  'Gottigere': [12.8570, 77.5850], 'HSR layout': [12.9120, 77.6460], 'Bommasandra': [12.8080, 77.6980],
  'Choodasandra': [12.8880, 77.6870], 'Kudlu': [12.8880, 77.6470], 'Kudlu Gate': [12.8920, 77.6420],
};

export function coordsFor(p: Project): [number, number] {
  return LOCALITY_COORDS[p.location] || MICROMARKET_CENTER[p.micromarket];
}

/* Raw catalog: [name, location, status, price] grouped by micromarket. */
type Raw = [string, string, string, string];
const RAW: Record<MicromarketKey, Raw[]> = {
  central: [
    ['Provident Equinox', 'Mysore Road', 'Ready to Move', '₹83.89 Lac – 1.03 Cr'],
    ['Provident Equinox 4', 'Mysore Road', 'Under Construction', '₹73.49 Lac – 1.80 Cr'],
    ['Provident Equinox 5', 'Mysore Road', 'New Launch', '₹90.00 Lac – 2.20 Cr'],
    ['Birla Tisya', 'Rajaji Nagar', 'Under Construction', '₹1.57 Cr – 3.48 Cr'],
    ['Godrej Tiara', 'Yeshwanthpur', 'New Launch', '₹3.50 Cr – 5.30 Cr'],
    ['Lodha Mirabelle', 'Nagavara', 'Under Construction', '₹2.26 Cr – 4.57 Cr'],
    ['Shriram Esquire', 'Koramangala', 'Under Construction', '₹3.47 Cr – 4.24 Cr'],
    ['Godrej Athena', 'Indiranagar', 'Under Construction', '₹2.55 Cr – 3.60 Cr'],
    ['Sobha Infinia', 'Koramangala', 'Under Construction', '₹3.59 Cr – 6.64 Cr'],
    ['Century Regalia', 'Indiranagar', 'Under Construction', '₹6.65 Cr – 9.04 Cr'],
    ['Embassy Hebbal', 'Hebbal', 'Upcoming', 'Price on Request'],
    ['Provident Equinox 3', 'Mysore Road', 'Under Construction', '₹73.49 Lac – 1.80 Cr'],
    ['Purva Blubelle', 'Rajaji Nagar', 'Under Construction', '₹2.30 Cr – 2.61 Cr'],
    ['Shapoorji Pallonji ParkWest', 'Binnipete', 'Partially Ready To Move', '₹2.37 Cr – 5.66 Cr'],
    ['Puravankara Purva Orient Grand', 'Sudhama Nagar', 'Under Construction', '₹6.00 Cr – 10.78 Cr'],
    ['Assetz 22 And Crest', 'Yeshwanthpur', 'Under Construction', '₹2.58 Cr – 3.38 Cr'],
    ['Shriram Hebbal One', 'Hebbal', 'Under Construction', '₹52.50 Lac'],
    ['Sobha Royal Crest', 'Banashankari', 'Under Construction', '₹2.63 Cr – 4.93 Cr'],
    ['K Raheja Vivarea Bangalore', 'Koramangala', 'Partially Ready To Move', '₹4.12 Cr – 10.07 Cr'],
  ],
  north: [
    ['Puravankara Northern Lights', 'Bagalur', 'New Launch', '₹1.21 Cr – 4.55 Cr'],
    ['TVS Emerald Altura', 'Sathnur', 'New Launch', '₹1.53 Cr – 2.76 Cr'],
    ['Embassy Greenshore', 'Devanahalli', 'New Launch', '₹1.27 Cr – 2.70 Cr'],
    ['Godrej Aveline', 'Yelahanka', 'New Launch', '₹2.88 Cr – 4.50 Cr'],
    ['TVS Emerald Auralis', 'Thanisandra', 'New Launch', '₹1.58 Cr – 2.53 Cr'],
    ['Bhartiya Garden Estate', 'Navarathna Agrahara', 'New Launch', '₹58.14 Lac – 2.60 Cr'],
    ['Birla Trimaya', 'Devanahalli', 'Under Construction', '₹1.33 Cr – 5.09 Cr'],
    ['Provident Deansgate', 'Kempalingapura', 'Under Construction', '₹2.50 Cr – 3.00 Cr'],
    ['Century Kindle', 'Yelahanka', 'New Launch', '₹1.18 Cr – 2.18 Cr'],
    ['Bhartiya City Nikoo Homes 6', 'Kogilu', 'Under Construction', '₹55.23 Lac – 2.94 Cr'],
    ['Brigade Citrine', 'Budigere Cross', 'Under Construction', '₹80.80 Lac – 2.82 Cr'],
    ['Godrej Woods', 'Thanisandra Main Road', 'New Launch', '₹1.60 Cr – 2.95 Cr'],
    ['Embassy Verde', 'Devanahalli', 'Under Construction', '₹68.97 Lac – 1.53 Cr'],
    ['Godrej MSR City', 'Shettigere', 'Under Construction', '₹1.49 Cr – 2.24 Cr'],
    ['Assetz Zen And Sato', 'Sathnur', 'Under Construction', '₹2.97 Cr – 4.06 Cr'],
    ['Godrej Aravya Estate', 'Chokkanahalli', 'New Launch', '₹57.60 Lac – 1.15 Cr'],
    ['Prestige Greenbrook', 'Devanahalli', 'New Launch', '₹1.31 Cr – 2.10 Cr'],
    ['Prestige Crystal Lawns', 'IVC Road', 'New Launch', '₹1.31 Cr – 2.10 Cr'],
    ['Century OneWorld Seraya', 'Meenakunte', 'Ready to Move', '₹2.07 Cr – 3.31 Cr'],
    ['Arvind The Park', 'Devanahalli', 'Ready to Move', '₹90.00 Lac – 1.80 Cr'],
    ['Tata Varnam', 'Devanahalli', 'New Launch', '₹1.52 Cr – 5.11 Cr'],
    ['Salarpuria Sattva Aeropolis', 'Devanahalli', 'Under Construction', '₹29.38 Lac – 97.15 Lac'],
    ['Assetz The Secret Lake', 'IVC Road', 'Ready to Move', '₹78.00 Lac – 1.17 Cr'],
    ['Prestige Autumn Leaves', 'Devanahalli', 'New Launch', '₹1.28 Cr – 2.28 Cr'],
    ['Brigade Eternia', 'Yelahanka', 'Under Construction', '₹2.43 Cr – 4.46 Cr'],
    ['Sobha Chartered Birdsong', 'Rajanukunte', 'Ready to Move', '₹1.43 Cr – 2.66 Cr'],
    ['Prestige Gardenia Estate', 'Devanahalli', 'Ready to Move', '₹1.20 Cr – 3.21 Cr'],
    ['Embassy Paradiso', 'Devanahalli', 'Under Construction', '₹3.38 Cr – 5.26 Cr'],
    ['Prestige Dew Drops', 'Doddaballapura', 'Under Construction', '₹4.38 Cr – 7.33 Cr'],
    ['Shriram Serenity', 'Rajanukunte', 'Under Construction', '₹78.28 Lac – 1.19 Cr'],
    ['Brigade Insignia', 'Yelahanka', 'Under Construction', '₹3.59 Cr – 9.88 Cr'],
    ['Puravankara Purva Zenium', 'Hosahalli', 'Partially Ready To Move', '₹1.45 Cr – 2.38 Cr'],
    ['Bhartiya City Bagalur', 'Bagalur', 'Upcoming', 'Price on Request'],
    ['Embassy Tharahunise', 'Tharahunise', 'Upcoming', 'Price on Request'],
    ['LnT Thanisandra', 'Thanisandra', 'Upcoming', 'Price on Request'],
    ['Assetz Mizu and Ki', 'Chikkagubbi Village', 'New Launch', '₹3.80 Cr – 4.60 Cr'],
    ['Assetz KVN Niwa And Neo', 'Yelahanka', 'New Launch', 'Price on Request'],
    ['Ramky Thanisandra', 'Thanisandra', 'Upcoming', 'Price on Request'],
    ['Purva Hennur', 'Hennur', 'Upcoming', 'Price on Request'],
    ['Purva Chikkajala', 'Chikkajala', 'Upcoming', 'Price on Request'],
    ['Ebony At Brigade Orchards', 'Devanahalli', 'Under Construction', '₹1.49 Cr – 2.13 Cr'],
    ['Prestige Camden Gardens', 'Jakkuru', 'Under Construction', '₹2.02 Cr – 3.50 Cr'],
    ['Assetz Soho And Sky', 'Jakkuru', 'Under Construction', '₹2.58 Cr – 3.58 Cr'],
    ['Brigade El Dorado Dioro And Beryl', 'Bagaluru', 'Under Construction', '₹49.41 Lac – 1.28 Cr'],
    ['Assetz Miru And Miyo', 'Honnenahalli', 'New Launch', '₹1.77 Cr – 1.80 Cr'],
    ['Century Liva', 'Yelahanka', 'Under Construction', '₹1.59 Cr – 2.23 Cr'],
    ['Sobha Athena', 'Thanisandra', 'Under Construction', '₹2.27 Cr – 2.28 Cr'],
    ['Embassy Verde Phase 2', 'Devanahalli', 'New Launch', '₹59.20 Lac – 1.32 Cr'],
    ['Salarpuria Sattva Park Cubix', 'Devanahalli', 'Partially Ready To Move', '₹51.32 Lac – 1.17 Cr'],
    ['Embassy Eden', 'Yelahanka', 'New Launch', '₹25.00 Cr'],
    ['Brigade El Dorado Cobalt', 'Bagaluru', 'Under Construction', '₹49.41 Lac – 1.28 Cr'],
    ['Embassy Edge', 'Devanahalli', 'Under Construction', '₹91.42 Lac – 1.31 Cr'],
    ['Brigade Orchards Laurel And Maple', 'Devanahalli', 'New Launch', '₹81.00 Lac – 1.74 Cr'],
    ['Godrej Woodscapes', 'Budigere Cross', 'Under Construction', '₹1.67 Cr – 4.73 Cr'],
    ['Sumadhura Solea', 'Rachenahalli', 'New Launch', '₹2.20 Cr – 2.70 Cr'],
    ['Ivory at Brigade Orchards', 'Devanahalli', 'Partially Ready To Move', '₹42.24 Lac – 91.57 Lac'],
    ['Brigade El Dorado Aurum', 'Bagaluru', 'Under Construction', '₹92.86 Lac – 1.55 Cr'],
    ['Arvind Bel Air', 'Yelahanka', 'Ready to Move', '₹1.28 Cr – 1.75 Cr'],
    ['Brigade Orchards', 'Devanahalli', 'Partially Ready To Move', '₹55.17 Lac – 1.58 Cr'],
    ['TVS Emerald Isle of Trees', 'Rachenahalli', 'Under Construction', '₹1.95 Cr – 3.06 Cr'],
    ['LnT Elara Celestia', 'Byatarayanapura', 'Under Construction', '₹3.32 Cr – 6.21 Cr'],
    ['Salarpuria Sattva Bliss', 'Budigere Cross', 'Under Construction', '₹53.66 Lac – 94.74 Lac'],
    ['Brigade Calista', 'Budigere', 'Under Construction', '₹61.46 Lac – 1.64 Cr'],
    ['Brigade Belvedere', 'Budigere Cross', 'New Launch', '₹96.00 Lac – 2.70 Cr'],
    ['Sumadhura Epitome', 'Rachenahalli', 'Under Construction', '₹1.51 Cr – 2.48 Cr'],
    ['Sobha Oakshire', 'Devanahalli', 'Under Construction', '₹5.99 Cr – 6.07 Cr'],
    ['Century Bliss', 'Bisuvanahalli', 'New Launch', '₹92.63 Lac – 2.50 Cr'],
    ['Brigade El Dorado', 'Bagaluru', 'Ready to Move', '₹52.97 Lac – 1.06 Cr'],
    ['Bhartiya Garden Enclave Nikoo Homes 8', 'Bellahalli', 'New Launch', '₹94.29 Lac – 3.01 Cr'],
    ['Century Novus', 'Jakkuru', 'Under Construction', '₹1.19 Cr – 1.94 Cr'],
    ['Sobha Dream Gardens', 'Thanisandra Main Road', 'Partially Ready To Move', '₹85.79 Lac – 1.25 Cr'],
    ['Brigade Orchards Fairmont', 'Devanahalli', 'Under Construction', '₹1.71 Cr – 1.97 Cr'],
    ['Bhartiya City Nikoo Homes 5', 'Thanisandra Main Road', 'Under Construction', '₹55.20 Lac – 2.94 Cr'],
    ['Century Wintersun', 'Doddaballapur Road', 'Under Construction', '₹3.85 Cr – 8.21 Cr'],
    ['Godrej Ananda', 'Bagaluru', 'Under Construction', '₹38.66 Lac – 1.55 Cr'],
    ['Assetz City Of Palms', 'Doddacheemanahalli', 'New Launch', '₹1.08 Cr – 1.80 Cr'],
    ['Century Astoria', 'Jakkuru', 'New Launch', '₹4.25 Cr – 5.81 Cr'],
    ['Prestige Gardenia Phase 2', 'Devanahalli', 'New Launch', '₹1.09 Cr – 2.90 Cr'],
    ['Purva Elements', 'HBR Layout', 'New Launch', 'Price on Request'],
    ['Prestige KIADB', 'Devanahalli', 'Upcoming', 'Price on Request'],
  ],
  east: [
    ['Arvind Sylva', 'Mullur', 'New Launch', '₹1.95 Cr – 2.87 Cr'],
    ['Sowparnika Whispering Petals', 'Hoskote', 'New Launch', '₹53.15 Lac – 1.17 Cr'],
    ['Sowparnika Euphoria', 'Whitefield', 'Under Construction', '₹50.22 Lac – 1.46 Cr'],
    ['Sowparnika Rhythm Of Rain', 'Whitefield', 'Under Construction', '₹55.93 Lac – 1.65 Cr'],
    ['Prestige Raintree Park', 'Whitefield', 'Under Construction', '₹3.41 Cr – 6.29 Cr'],
    ['Sobha Neopolis', 'Panathur', 'Under Construction', '₹97.02 Lac – 3.81 Cr'],
    ['Mahindra Blossom', 'Whitefield', 'New Launch', '₹1.00 Cr – 3.92 Cr'],
    ['Provident Botanico', 'Whitefield', 'Under Construction', '₹1.07 Cr – 1.72 Cr'],
    ['Century Mirai', 'Munnekollal', 'New Launch', '₹2.16 Cr – 5.22 Cr'],
    ['Godrej Splendour', 'Whitefield', 'Under Construction', '₹73.81 Lac – 1.95 Cr'],
    ['Prestige Park Grove', 'Whitefield', 'Under Construction', '₹97.38 Lac – 11.00 Cr'],
    ['Sumadhura Soukya Road', 'Soukya Road', 'Upcoming', 'Price on Request'],
    ['Assetz 66 And Shibui', 'Whitefield Road', 'Under Construction', '₹2.80 Cr – 3.96 Cr'],
    ['Brigade Cornerstone Utopia Elysium', 'Varthur', 'Under Construction', 'Price on Request'],
    ['Sumadhura Hive', 'Whitefield', 'Under Construction', '₹4.96 Cr – 13.47 Cr'],
    ['Prestige Tech Forest', 'Varthur', 'Under Construction', 'Price on Request'],
    ['Brigade Lakecrest', 'Bhattarahalli', 'Under Construction', '₹77.28 Lac – 2.05 Cr'],
    ['Sobha Ayana', 'Panathur', 'Under Construction', '₹2.30 Cr – 2.65 Cr'],
    ['Sobha Dream Acres', 'Panathur', 'Ready to Move', '₹87.72 Lac – 1.65 Cr'],
    ['Sowparnika Indradhanush', 'Hoskote', 'Partially Ready To Move', '₹42.00 Lac – 82.16 Lac'],
    ['Sowparnika Ashiyana Phase II', 'Samethanahalli', 'Under Construction', '₹29.84 Lac – 91.60 Lac'],
    ['Assetz Sun And Sanctum', 'KR Puram', 'Partially Ready To Move', '₹1.52 Cr – 2.13 Cr'],
    ['Sobha Sentosa', 'Balagere', 'Under Construction', '₹1.01 Cr – 2.63 Cr'],
    ['Brigade Avalon', 'Whitefield', 'Under Construction', '₹4.62 Cr – 7.20 Cr'],
    ['Sobha Victoria Park', 'Hennur Road', 'Under Construction', '₹2.03 Cr – 6.00 Cr'],
    ['Prestige Serenity Shores', 'Whitefield', 'Under Construction', '₹1.84 Cr – 3.96 Cr'],
    ['Prestige Elm Park', 'Whitefield', 'Under Construction', '₹2.95 Cr – 4.25 Cr'],
    ['Sumadhura Capitol Residences', 'Whitefield', 'Under Construction', '₹1.60 Cr – 3.13 Cr'],
    ['Prestige Lavender Fields', 'Varthur', 'Under Construction', '₹99.01 Lac – 5.41 Cr'],
    ['Sobha One Residences', 'Hoskote', 'New Launch', '₹1.09 Cr – 3.57 Cr'],
    ['Sumadhura Solace', 'Thubarahalli', 'New Launch', '₹52.05 Lac – 4.11 Cr'],
    ['Sumadhura Edition', 'Siddapura', 'New Launch', '₹1.79 Cr – 3.16 Cr'],
    ['Sumadhura Folium', 'Whitefield', 'Partially Ready To Move', '₹79.47 Lac – 2.68 Cr'],
    ['Sumadhura Nexus', 'Hoodi', 'Under Construction', '₹5.92 Cr – 6.92 Cr'],
    ['Prestige Pine Forest', 'Whitefield', 'Under Construction', '₹3.52 Cr – 4.82 Cr'],
    ['Prestige Glenbrook', 'Whitefield', 'Under Construction', '₹1.44 Cr – 3.95 Cr'],
    ['Kolte Patil Lakeside 24', 'Hennur Road', 'Under Construction', '₹1.18 Cr – 1.51 Cr'],
    ['Rohan Ekanta', 'Gunjur', 'Under Construction', '₹92.50 Lac – 2.13 Cr'],
    ['Sobha Windsor', 'Whitefield', 'Partially Ready To Move', '₹2.90 Cr – 3.66 Cr'],
    ['Assetz Bloom And Dell', 'Whitefield Road', 'Under Construction', '₹1.99 Cr – 2.20 Cr'],
    ['Sumadhura Sarang', 'Doddabanahalli', 'Under Construction', '₹1.29 Cr – 2.33 Cr'],
    ['Prestige Tech Habitat', 'Whitefield', 'Ready to Move', 'Price on Request'],
    ['Embassy East Avenue', 'Whitefield', 'Under Construction', '₹1.70 Cr – 4.01 Cr'],
    ['Assetz Marq', 'Whitefield', 'Partially Ready To Move', '₹2.74 Cr – 4.28 Cr'],
    ['Godrej Elevate', 'Whitefield', 'Under Construction', '₹44.05 Lac – 1.78 Cr'],
    ['Godrej Parkshire', 'Hoskote', 'New Launch', '₹1.17 Cr – 1.94 Cr'],
    ['Prestige Somerville', 'Whitefield', 'Under Construction', '₹2.06 Cr – 3.95 Cr'],
    ['Sobha Galera', 'Kannamangala', 'Under Construction', '₹5.25 Cr – 7.57 Cr'],
    ['Sobha Sacred Grove By The Lake', 'Chikka Tirupathi', 'New Launch', '₹84.00 Lac – 1.68 Cr'],
    ['Sumadhura Elysium', 'Panathur', 'New Launch', '₹2.61 Cr – 3.80 Cr'],
    ['Prestige Evergreen', 'Whitefield', 'New Launch', '₹92.26 Lac – 3.52 Cr'],
    ['Brigade Whitefield', 'Whitefield', 'Upcoming', 'Price on Request'],
  ],
  west: [
    ['Brigade Lumina', 'Chikkabidarakallu', 'New Launch', '₹1.45 Cr – 2.36 Cr'],
    ['Shriram The Poem', 'Jalahalli', 'Under Construction', '₹75.46 Lac – 99.90 Lac'],
    ['Arvind The Edge', 'Nagasandra', 'Under Construction', '₹1.21 Cr – 3.32 Cr'],
  ],
  south: [
    ['Godrej Regent Park', 'Kada Agrahara', 'New Launch', '₹1.23 Cr – 1.85 Cr'],
    ['Godrej Vanantara', 'Bannerghatta', 'New Launch', '₹1.49 Cr – 3.14 Cr'],
    ['Puravankara Purva Silver Sky', 'Electronic City Phase II', 'New Launch', '₹2.50 Cr – 8.40 Cr'],
    ['Shriram 107 South East', 'Attibele', 'Partially Ready To Move', '₹55.84 Lac – 73.12 Lac'],
    ['Shriram Songs Of The Earth', 'Madiwala', 'New Launch', '₹1.08 Cr – 1.54 Cr'],
    ['Purva Park Hill', 'Kanakapura Road', 'Ready to Move', '₹1.32 Cr – 1.88 Cr'],
    ['Prestige Southern Star', 'Akshayanagar', 'Under Construction', '₹90.35 Lac – 3.61 Cr'],
    ['Godrej Lakeside Orchard', 'Sarjapur Road', 'Under Construction', '₹1.60 Cr – 3.43 Cr'],
    ['Lodha Elanza', 'Dommasandra', 'New Launch', '₹1.90 Cr – 3.00 Cr'],
    ['Prestige Suncrest', 'Electronic City', 'Under Construction', '₹78.77 Lac – 2.29 Cr'],
    ['Birla Evara', 'Sarjapur', 'Under Construction', '₹90.86 Lac – 3.27 Cr'],
    ['Mahindra Newhaven', 'Singasandra', 'Under Construction', '₹2.70 Cr – 3.29 Cr'],
    ['Assetz Trees And Tandem', 'Chokkasandra', 'Under Construction', '₹1.31 Cr – 2.57 Cr'],
    ['Assetz Meru And Meadow', 'Vasantha Vallabha Nagar (VV Nagar)', 'New Launch', '₹2.75 Cr – 3.06 Cr'],
    ['Brigade Horizon', 'Kambipura', 'Under Construction', '₹55.97 Lac – 3.09 Cr'],
    ['Sowparnika Life On The Green', 'Bidaraguppe', 'Ready to Move', '₹2.24 Cr – 2.61 Cr'],
    ['Provident Ecopolitan', 'Marenahalli', 'Under Construction', '₹51.20 Lac – 1.36 Cr'],
    ['Arvind Forest Trails', 'Sarjapur', 'Under Construction', '₹2.30 Cr – 3.35 Cr'],
    ['Brigade Valencia', 'Electronic City', 'Under Construction', '₹67.98 Lac – 2.64 Cr'],
    ['Brigade Sanctuary', 'Sarjapur Road', 'Under Construction', '₹84.95 Lac – 3.23 Cr'],
    ['Birla Ojasvi', 'Raja Rajeshwari Nagar', 'Under Construction', '₹77.28 Lac – 2.23 Cr'],
    ['Godrej Sarjapura Road', 'Sarjapur Road', 'Upcoming', 'Price on Request'],
    ['Purva Zentech Business Park', 'Kanakapura Road', 'Partially Ready To Move', '₹6.25 Cr'],
    ['TVS Emerald Jardin', 'Singasandra', 'Ready to Move', '₹79.33 Lac – 1.93 Cr'],
    ['Assetz Ren And Rei', 'Gattahalli', 'Under Construction', '₹1.84 Cr – 1.87 Cr'],
    ['Assetz Sora And Saki', 'Marenahalli', 'Under Construction', '₹26.52 Lac – 2.32 Cr'],
    ['Fernvale At The Prestige City', 'Sarjapur Road', 'New Launch', '₹1.29 Cr – 2.50 Cr'],
    ['Aston Park At The Prestige City', 'Sarjapur', 'Under Construction', '₹1.36 Cr – 2.90 Cr'],
    ['Sobha Hamptons Town Park', 'Hosur Road', 'Under Construction', '₹1.80 Cr – 4.13 Cr'],
    ['Sobha Brooklyn Towers Town Park', 'Hosur Road', 'Under Construction', '₹66.40 Lac – 3.17 Cr'],
    ['Brigade Komarla Heights', 'Padmanabha Nagar', 'Under Construction', '₹1.59 Cr – 2.57 Cr'],
    ['Sumadhura Pramoda', 'Raja Rajeshwari Nagar', 'Under Construction', '₹1.33 Cr – 1.97 Cr'],
    ['Sobha Crystal Meadows', 'Sarjapur Road', 'Under Construction', '₹10.50 Cr – 11.92 Cr'],
    ['Lodha Azur', 'Bannerghatta Road', 'Under Construction', '₹2.50 Cr – 4.30 Cr'],
    ['Meridian Park At The Prestige City', 'Sarjapur Road', 'Partially Ready To Move', '₹1.87 Cr – 2.52 Cr'],
    ['Sobha Royal Pavilion', 'Chikkakannalli', 'Partially Ready To Move', '₹1.81 Cr – 3.10 Cr'],
    ['Brigade Nanda Heights', 'Padmanabha Nagar', 'Under Construction', '₹2.21 Cr – 3.49 Cr'],
    ['Arvind Skycrest', 'Gottigere', 'New Launch', '₹1.22 Cr – 2.10 Cr'],
    ['Sowparnika Olivia Nest', 'Sarjapur', 'Under Construction', '₹70.35 Lac – 1.18 Cr'],
    ['Godrej Park Retreat', 'Sarjapur Road', 'Partially Ready To Move', '₹76.80 Lac – 1.82 Cr'],
    ['Sobha Royal Pavilion Phase 8', 'Sarjapur Road', 'Ready to Move', '₹2.60 Cr – 4.36 Cr'],
    ['Assetz Muse And Maison', 'Gattahalli', 'New Launch', '₹2.11 Cr – 2.17 Cr'],
    ['Purva Meraki', 'HSR layout', 'Under Construction', '₹3.90 Cr – 5.60 Cr'],
    ['Puravankara The Sound of Water Phase 2', 'Bannerghatta', 'Ready to Move', '₹3.76 Cr – 5.85 Cr'],
    ['Sobha Royal Pavilion Phase 7', 'Sarjapur Road', 'Ready to Move', '₹2.60 Cr – 4.46 Cr'],
    ['Mahindra Eden', 'Kanakapura Road', 'Under Construction', '₹85.91 Lac – 2.86 Cr'],
    ['Brigade Brillio', 'Hosur Road', 'Under Construction', '₹76.29 Lac – 2.83 Cr'],
    ['Assetz 63 Degree East', 'Off Sarjapur road', 'Partially Ready To Move', '₹90.58 Lac'],
    ['Sobha Magnus', 'Bannerghatta Road', 'New Launch', '₹2.15 Cr – 4.43 Cr'],
    ['Eaton Park At The Prestige City', 'Sarjapur Road', 'New Launch', '₹2.13 Cr – 3.21 Cr'],
    ['Shriram Chirping Grove 2', 'Sarjapur Road', 'Ready to Move', '₹1.96 Cr – 2.50 Cr'],
    ['Assetz Canvas And Cove', 'Hosur Road', 'Partially Ready To Move', '₹43.24 Lac – 2.10 Cr'],
    ['Mahindra Zen', 'Hosur Road', 'Under Construction', '₹2.16 Cr – 2.80 Cr'],
    ['Shriram Sapphire', 'Bommasandra', 'Under Construction', '₹97.50 Lac – 1.29 Cr'],
    ['Lodha Haven', 'Choodasandra', 'Under Construction', '₹2.14 Cr – 2.96 Cr'],
    ['Sobha Madison Heights Town Park', 'Hosur Road', 'Under Construction', '₹1.09 Cr – 3.06 Cr'],
    ['Assetz Inspira Melodies of Life Apartments', 'Choodasandra', 'New Launch', '₹2.38 Cr – 2.41 Cr'],
    ['Sobha Altair', 'Chikkakannalli', 'New Launch', '₹3.50 Cr – 4.75 Cr'],
    ['Sobha Manhattan Towers Town Park', 'Hosur Road', 'Under Construction', '₹2.02 Cr – 2.37 Cr'],
    ['Puravankara The Sound of Water', 'Bannerghatta', 'Partially Ready To Move', '₹3.76 Cr – 7.85 Cr'],
    ['Assetz Mizumi Reserve', 'Kudlu', 'New Launch', '₹2.47 Cr – 3.22 Cr'],
    ['Provident Park One', 'Kanakapura Road', 'Ready to Move', '₹63.59 Lac – 1.57 Cr'],
    ['Puravankara Purva Heritage', 'Kudlu Gate', 'New Launch', '₹1.92 Cr – 3.04 Cr'],
  ],
};

const BRANDS: [string, string][] = [
  ['Provident', 'Provident Housing Limited'], ['Puravankara', 'Puravankara'], ['Purva', 'Puravankara'],
  ['Godrej', 'Godrej Properties'], ['Sobha', 'Sobha'], ['Prestige', 'Prestige Group'], ['Brigade', 'Brigade Group'],
  ['Assetz', 'Assetz Property Group'], ['Sumadhura', 'Sumadhura Group'], ['Birla', 'Birla Estates'],
  ['Lodha', 'Lodha Group'], ['Shriram', 'Shriram Properties'], ['TVS Emerald', 'TVS Emerald'],
  ['Century', 'Century Real Estate'], ['Embassy', 'Embassy Group'], ['Bhartiya', 'Bhartiya Urban'],
  ['Mahindra', 'Mahindra Lifespaces'], ['Arvind', 'Arvind SmartSpaces'], ['Sowparnika', 'Sowparnika Projects'],
  ['Kolte Patil', 'Kolte Patil'], ['Rohan', 'Rohan Builders'], ['LnT', 'L&T Realty'], ['Tata', 'Tata Housing'],
  ['Salarpuria Sattva', 'Salarpuria Sattva Group'], ['K Raheja', 'K Raheja Corp'], ['Shapoorji', 'Shapoorji Pallonji'],
  ['Ramky', 'Ramky Estates'],
];

export function slug(s: string): string {
  return s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
function detectDeveloper(name: string): string {
  for (const [key, dev] of BRANDS) if (name.toLowerCase().includes(key.toLowerCase())) return dev;
  return name.split(' ')[0];
}

/* Full 7-screen detail captured for Provident Equinox. */
const PROVIDENT_EQUINOX_SCREENS: ProjectScreens = {
  project: {
    priceLabel: '₹ 83.89 Lac to 1.03 Cr', status: 'Ready to Move', unitConfig: '2 BHK-3 BHK',
    size: '883 to 1082 Sq. Ft. (Saleable)', units: 384, area: '3.46 Acres',
    resources: ['Amenities', 'Project Brochure', 'Master Plan Image', 'Floor Plans', 'Specifications', 'Gallery'],
  },
  infrastructure: {
    growthOutlook: 'Moderate', support: 'Live network support', live: 8, upcoming: 0, mediumImpact: 6,
    mainStrength: 'Metro-led',
    keyProjects: [
      { name: 'Challaghatta (Whitefield–Challaghatta)', status: 'Live', impact: 'Medium Impact', desc: 'Extends metro connectivity between Whitefield and Challaghatta.' },
      { name: 'Kengeri Railway Station', status: 'Live', impact: 'Low Impact', desc: 'A railway network project in the area.' },
      { name: 'NICE Peripheral Ring Road', status: 'Live', impact: 'Medium Impact', desc: 'A major highway project in the area.' },
      { name: 'Kempegowda International Airport', status: 'Live', impact: 'Low Impact', desc: 'An airport accessible from this location.' },
      { name: 'Kengeri (Whitefield–Challaghatta)', status: 'Live', impact: 'Medium Impact', desc: 'Extends metro connectivity between Whitefield and Challaghatta.' },
    ],
    moreCount: 3,
    connectivity: { metro: '2 live lines', road: '7 major corridors', airport: '1 airport accessible' },
    watch: ['Infrastructure timelines in the region have historically been subject to delays.'],
  },
  neighbourhood: {
    quality: 3.22, qualityDesc: 'Emerging locality with developing amenity base. Some access to essential services.',
    travelConvenience: 8.8, travelDesc: 'Excellent connectivity with proximity to major transport hubs. Superior accessibility and commute options.',
    essentials: { education: 16, healthcare: 2, emergency: 2 },
    connectivity: [
      { icon: '🛍️', label: 'Commercial Centers', place: 'M G Road', dist: '18.13 km' },
      { icon: '✈️', label: 'Distance To Airport', place: 'Kempegowda International Airport', dist: '43.96 km' },
      { icon: '🚌', label: 'Distance To Bus Stop', place: 'Provident Sunworth Apartment', dist: '0.24 km' },
      { icon: '🚇', label: 'Distance To Metro Station', place: 'Challaghatta Station', dist: '1.85 km' },
      { icon: '🚆', label: 'Distance To Railway Station', place: 'Kengeri Railway Station', dist: '4.05 km' },
      { icon: '🛣️', label: 'Distance To Major Highway', place: 'NICE Peripheral Ring Road', dist: '1.4 km' },
    ],
  },
  caseStudies: {
    topGaining: [
      { rank: 1, name: 'Provident Capella', area: 'East Bangalore', dist: '38.2 km away', y1: '+11.5%', y3: '+10.5%', y5: '+11.8%' },
      { rank: 2, name: 'Provident Park One', area: 'South Bangalore', dist: '7.9 km away', y1: '+9.8%', y3: '+13.9%', y5: '+12.9%' },
      { rank: 3, name: 'Provident Ecopolitan', area: 'South Bangalore', dist: '37.2 km away', y1: '+9.5%', y3: '+13.0%', y5: '—' },
    ],
  },
  outlook: {
    confidence: 'Medium', market: 'Central Bangalore', current: '₹83.9 L',
    y3: [
      { label: 'Conservative', note: 'If growth is slower than expected', price: '₹92.8 L', ret: '~10.6% absolute return' },
      { label: 'Realistic', note: 'Most probable scenario', price: '₹99.8 L', ret: '~18.9% absolute return' },
      { label: 'Optimistic', note: 'If market conditions are favourable', price: '₹99.8 L', ret: '~18.9% absolute return' },
    ],
    y5: [
      { label: 'Conservative', note: 'If growth is slower than expected', price: '₹99.3 L', ret: '~18.3% absolute return' },
      { label: 'Realistic', note: 'Most probable scenario', price: '₹1.1 Cr', ret: '~33.5% absolute return' },
      { label: 'Optimistic', note: 'If market conditions are favourable', price: '₹1.1 Cr', ret: '~33.5% absolute return' },
    ],
    supports: [
      { title: 'Proven developer record', desc: "This developer's past city projects have appreciated ~10.4%/yr, at or above the area trend." },
      { title: 'Nearby deals outperforming', desc: "Our own deals within 5 km have grown ~10.9%/yr, ahead of the area's 5% - actual transactions, not asking prices." },
      { title: 'Room under local ceiling', desc: 'Priced at or below its micromarket average, the project has room to move up within the local range.' },
    ],
    limits: [
      { title: 'Late-cycle / premium market', desc: 'The area is Mature - premium and late-cycle, so the projected trend is tempered (×0.85) for limited headroom.' },
      { title: 'Saturated connectivity', desc: "The area is already well-connected and its transit is largely operational - that value is in today's price, so there's little further infrastructure upside." },
      { title: 'Growth signals disagree', desc: 'The area trend and nearby deals differ by ~5.9 pp, so the downside band is wider and confidence is tempered.' },
    ],
  },
};

function build(): Project[] {
  const out: Project[] = [];
  (Object.keys(RAW) as MicromarketKey[]).forEach((mm) => {
    RAW[mm].forEach(([name, location, status, price]) => {
      const developer = detectDeveloper(name);
      const p: Project = {
        id: slug(name), name, developer, developerId: slug(developer),
        micromarket: mm, location, status, price,
      };
      if (p.id === 'provident-equinox') { p.detailed = true; p.screens = PROVIDENT_EQUINOX_SCREENS; }
      out.push(p);
    });
  });
  return out;
}

export const PROJECTS: Project[] = build();
export const projectsByMicromarket = (key: MicromarketKey) => PROJECTS.filter((p) => p.micromarket === key);
export const projectById = (id: string) => PROJECTS.find((p) => p.id === id);
export const micromarketByKey = (key: string) => MICROMARKETS.find((m) => m.key === key);
