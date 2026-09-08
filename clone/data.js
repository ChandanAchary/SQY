/* Atlas clone — real data captured from atlas.squareyards.com (Bangalore, cityId 10)
 * Captured 2026-09-08 by navigating the app as authorised user SQY63334.
 * Full-detail project: Provident Equinox (all 7 screens). Central Bangalore catalog: all 19 projects.
 * Other micromarkets: real counts + comparison stats; project lists pending official export.
 */
window.ATLAS_DATA = {
  user: { name: "Ashish Kumar Rout", empId: "SQY63334", city: "Bangalore", cityId: 10 },

  city: { name: "Bangalore", id: 10, totalProjects: 217, micromarketCount: 5 },

  // 5 micromarkets with cross-comparison stats (from the Micromarket screen)
  micromarkets: [
    { key: "central", name: "Central Bangalore", count: 19, salePrice: 14800, rent: 47, saleRank: 1, rentRank: 1 },
    { key: "north",   name: "North Bangalore",   count: 80, salePrice: 11000, rent: 30, saleRank: 4, rentRank: 5 },
    { key: "east",    name: "East Bangalore",    count: 52, salePrice: 12700, rent: 35, saleRank: 3, rentRank: 4 },
    { key: "west",    name: "West Bangalore",    count: 3,  salePrice: 8700,  rent: 39, saleRank: 5, rentRank: 2 },
    { key: "south",   name: "South Bangalore",   count: 63, salePrice: 13200, rent: 35, saleRank: 2, rentRank: 3 }
  ],

  // Detailed micromarket data (captured for Central Bangalore)
  micromarketDetail: {
    central: {
      name: "Central Bangalore",
      marketState: "Mature",
      trend: "Steady",
      narrative: "Central Bangalore is the priciest of the city's five listed micromarkets, with a current sale price of around Rs. 14,800 per sq.ft and steady demand supporting a mature market. Prices have grown at a historic rate of roughly 11% CAGR since 2022, reflecting consistent appreciation in this well-established area.",
      avgSalePrice: 14800,
      avgRent: 47,
      totalProjects: 8278,
      priceHistory: [
        { year: 2022, price: 9800 },
        { year: 2023, price: 11200 },
        { year: 2024, price: 12500 },
        { year: 2025, price: 13500 },
        { year: 2026, price: 14800 }
      ],
      topLocalities: [
        { rank: 1, name: "Rajaji Nagar", price: 25450 },
        { rank: 2, name: "Jayanagar", price: 21750 },
        { rank: 3, name: "Richmond Town", price: 19750 },
        { rank: 4, name: "Koramangala", price: 19450 },
        { rank: 5, name: "Mahadevpura", price: 18150 },
        { rank: 6, name: "Pulikeshi Nagar", price: 16950 },
        { rank: 7, name: "Halasuru", price: 16950 },
        { rank: 8, name: "Frazer Town", price: 16950 },
        { rank: 9, name: "Seshadripuram", price: 15950 },
        { rank: 10, name: "Rajaji Nagar 6th Block", price: 15950 }
      ],
      topDevelopers: [
        { name: "Brigade", projects: 49 },
        { name: "Salarpuria Sattva Group", projects: 38 },
        { name: "Prestige", projects: 91 },
        { name: "Sobha", projects: 23 },
        { name: "Shriram Properties", projects: 13 },
        { name: "DS MAX Properties Pvt Ltd", projects: 17 },
        { name: "Puravankara", projects: 40 },
        { name: "Century Real Estate", projects: 10 },
        { name: "Assetz Homes", projects: 7 },
        { name: "Embassy", projects: 29 }
      ],
      higherPriced: [
        { rank: 1, name: "Provident Equinox 5", status: "New Launch", price: "90.00 Lac to 2.20 Cr" },
        { rank: 2, name: "Godrej Tiara", status: "New Launch", price: "3.50 Cr to 5.30 Cr" }
      ]
    }
  },

  // Developers (captured: Provident Housing Limited)
  developers: {
    "provident-housing": {
      name: "Provident Housing Limited",
      tier: "PLATINUM",
      experience: 10,
      narrative: "Provident Housing Limited has a 10-year track record with 36 projects across India, including 18 in Bangalore where 10 are ready to move and 7 are under construction. Their resale prices in Bangalore have historically appreciated at around 9.5% over one year and over 12% across three and five years, providing some evidence of value retention in this market. This history offers a useful reference point for understanding their project performance here.",
      totalProjects: 36,
      bangalore: { newLaunch: 1, underConstruction: 7, readyToMove: 10 },
      returns: { y1: 9.5, y3: 12.8, y5: 12.1 },
      projectsByStatus: {
        "New Launch": [
          { name: "Provident Equinox 5", location: "Mysore Road", price: "90.00 Lac – 2.20 Cr" }
        ],
        "Under Construction": [
          { name: "Provident Equinox 4", location: "Mysore Road", price: "73.49 Lac – 1.80 Cr" },
          { name: "Provident Deansgate", location: "Kempalingapura", price: "2.50 Cr – 3.00 Cr" },
          { name: "Provident Botanico", location: "Whitefield", price: "1.07 Cr – 1.72 Cr" },
          { name: "Provident Ecopolitan", location: "Marenahalli", price: "51.20 Lac – 1.36 Cr" },
          { name: "Provident Equinox 3", location: "Mysore Road", price: "73.49 Lac – 1.80 Cr" },
          { name: "Provident Central Park", location: "Kanakapura Road", price: "36.50 Lac – 1.05 Cr" },
          { name: "Provident Sunworth", location: "Mysore Road", price: "78.27 Lac – 2.20 Cr" }
        ],
        "Ready to Move": [
          { name: "Provident Park One", location: "Kanakapura Road", price: "63.59 Lac – 1.57 Cr" },
          { name: "Provident Too Good Homes", location: "Thanisandra Main Road", price: "68.50 Lac – 71.20 Lac" },
          { name: "Provident Upstudios", location: "Whitefield", price: "38.10 Lac – 91.65 Lac" },
          { name: "Provident Sundeck", location: "Mysore Road", price: "73.49 Lac – 90.05 Lac" },
          { name: "Provident Equinox 2", location: "Mysore Road", price: "83.89 Lac – 1.03 Cr" },
          { name: "Provident Park Square Phase 4", location: "Kanakapura Road", price: "63.59 Lac – 1.59 Cr" },
          { name: "Provident Woodfield", location: "Kachanayakanahalli", price: "99.75 Lac – 1.43 Cr" },
          { name: "Provident Rising City", location: "Electronic City Phase I", price: "Price on Request" },
          { name: "Provident Capella", location: "Whitefield", price: "42.37 Lac – 1.10 Cr" }
        ]
      },
      about: "Provident Housing Limited is owned by Puravankara Projects Limited, one of India's biggest real estate players. Ashish Puravankara holds office as Founder Director while Ravi Puravankara is the Chairman cum Founder Director. The tally of Provident Housing projects covers premium and affordable homes spread over 6.5 million sq. ft. overall. Six projects are presently being developed at major locations in Bangalore, Coimbatore, Chennai, Mangalore, etc. These cumulatively cover 10 million sq. ft. with configurations ranging between two-three bedroom apartments. There are premium amenities offered to residents at every project along with top class connectivity to major social amenities. Affordable and group housing are major specialties of the company while it is foraying into markets like Kochi, Hyderabad, Kolkata, Mysore, Colombo, Dubai, UAE, etc. Representatives have also been stationed in UK and the United States. It owns a land bank of more than 125 million sq. ft. which serves as the backbone for upcoming projects."
    }
  },

  // Approx coordinates for Bangalore localities (for the map markers)
  localityCoords: {
    "Mysore Road": [12.9451, 77.5220], "Rajaji Nagar": [12.9915, 77.5551],
    "Yeshwanthpur": [13.0280, 77.5400], "Nagavara": [13.0430, 77.6200],
    "Koramangala": [12.9352, 77.6245], "Indiranagar": [12.9719, 77.6412],
    "Hebbal": [13.0358, 77.5970], "Binnipete": [12.9720, 77.5620],
    "Sudhama Nagar": [12.9560, 77.5760], "Banashankari": [12.9250, 77.5460],
    "Whitefield": [12.9698, 77.7500], "Kanakapura Road": [12.8850, 77.5560],
    "Electronic City Phase I": [12.8400, 77.6770], "Thanisandra Main Road": [13.0640, 77.6300]
  },

  // Project catalog — Central Bangalore fully captured (19). Provident Equinox has full 7-screen detail.
  projects: [
    {
      id: "provident-equinox", name: "Provident Equinox", developer: "Provident Housing Limited",
      developerId: "provident-housing", micromarket: "central", location: "Mysore Road",
      status: "Ready to Move", price: "₹83.89 Lac – 1.03 Cr", detailed: true,
      screens: {
        project: {
          priceLabel: "₹ 83.89 Lac to 1.03 Cr", status: "Ready to Move",
          unitConfig: "2 BHK-3 BHK", size: "883 to 1082 Sq. Ft. (Saleable)",
          units: 384, area: "3.46 Acres",
          resources: ["Amenities", "Project Brochure", "Master Plan Image", "Floor Plans", "Specifications", "Gallery"]
        },
        infrastructure: {
          growthOutlook: "Moderate", support: "Live network support",
          live: 8, upcoming: 0, mediumImpact: 6, mainStrength: "Metro-led",
          keyProjects: [
            { name: "Challaghatta (Whitefield–Challaghatta)", status: "Live", impact: "Medium Impact", desc: "Extends metro connectivity between Whitefield and Challaghatta." },
            { name: "Kengeri Railway Station", status: "Live", impact: "Low Impact", desc: "A railway network project in the area." },
            { name: "NICE Peripheral Ring Road", status: "Live", impact: "Medium Impact", desc: "A major highway project in the area." },
            { name: "Kempegowda International Airport", status: "Live", impact: "Low Impact", desc: "An airport accessible from this location." },
            { name: "Kengeri (Whitefield–Challaghatta)", status: "Live", impact: "Medium Impact", desc: "Extends metro connectivity between Whitefield and Challaghatta." }
          ],
          moreCount: 3,
          connectivity: { metro: "2 live lines", road: "7 major corridors", airport: "1 airport accessible" },
          watch: ["Infrastructure timelines in the region have historically been subject to delays."]
        },
        neighbourhood: {
          quality: 3.22, qualityDesc: "Emerging locality with developing amenity base. Some access to essential services.",
          travelConvenience: 8.8, travelDesc: "Excellent connectivity with proximity to major transport hubs. Superior accessibility and commute options.",
          essentials: { education: 16, healthcare: 2, emergency: 2 },
          connectivity: [
            { icon: "🛍️", label: "Commercial Centers", place: "M G Road", dist: "18.13 km" },
            { icon: "✈️", label: "Distance To Airport", place: "Kempegowda International Airport", dist: "43.96 km" },
            { icon: "🚌", label: "Distance To Bus Stop", place: "Provident Sunworth Apartment", dist: "0.24 km" },
            { icon: "🚇", label: "Distance To Metro Station", place: "Challaghatta Station", dist: "1.85 km" },
            { icon: "🚆", label: "Distance To Railway Station", place: "Kengeri Railway Station", dist: "4.05 km" },
            { icon: "🛣️", label: "Distance To Major Highway", place: "NICE Peripheral Ring Road", dist: "1.4 km" }
          ]
        },
        caseStudies: {
          topGaining: [
            { rank: 1, name: "Provident Capella", area: "East Bangalore", dist: "38.2 km away", y1: "+11.5%", y3: "+10.5%", y5: "+11.8%" },
            { rank: 2, name: "Provident Park One", area: "South Bangalore", dist: "7.9 km away", y1: "+9.8%", y3: "+13.9%", y5: "+12.9%" },
            { rank: 3, name: "Provident Ecopolitan", area: "South Bangalore", dist: "37.2 km away", y1: "+9.5%", y3: "+13.0%", y5: "—" }
          ]
        },
        outlook: {
          confidence: "Medium", market: "Central Bangalore", current: "₹83.9 L",
          y3: [
            { label: "Conservative", note: "If growth is slower than expected", price: "₹92.8 L", ret: "~10.6% absolute return" },
            { label: "Realistic", note: "Most probable scenario", price: "₹99.8 L", ret: "~18.9% absolute return" },
            { label: "Optimistic", note: "If market conditions are favourable", price: "₹99.8 L", ret: "~18.9% absolute return" }
          ],
          y5: [
            { label: "Conservative", note: "If growth is slower than expected", price: "₹99.3 L", ret: "~18.3% absolute return" },
            { label: "Realistic", note: "Most probable scenario", price: "₹1.1 Cr", ret: "~33.5% absolute return" },
            { label: "Optimistic", note: "If market conditions are favourable", price: "₹1.1 Cr", ret: "~33.5% absolute return" }
          ],
          supports: [
            { title: "Proven developer record", desc: "This developer's past city projects have appreciated ~10.4%/yr, at or above the area trend." },
            { title: "Nearby deals outperforming", desc: "Our own deals within 5 km have grown ~10.9%/yr, ahead of the area's 5% - actual transactions, not asking prices." },
            { title: "Room under local ceiling", desc: "Priced at or below its micromarket average, the project has room to move up within the local range." }
          ],
          limits: [
            { title: "Late-cycle / premium market", desc: "The area is Mature - premium and late-cycle, so the projected trend is tempered (×0.85) for limited headroom." },
            { title: "Saturated connectivity", desc: "The area is already well-connected and its transit is largely operational - that value is in today's price, so there's little further infrastructure upside." },
            { title: "Growth signals disagree", desc: "The area trend and nearby deals differ by ~5.9 pp, so the downside band is wider and confidence is tempered." }
          ]
        }
      }
    },
    { id: "provident-equinox-4", name: "Provident Equinox 4", developer: "Provident Housing Limited", developerId: "provident-housing", micromarket: "central", location: "Mysore Road", status: "Under Construction", price: "₹73.49 Lac – 1.80 Cr" },
    { id: "provident-equinox-5", name: "Provident Equinox 5", developer: "Provident Housing Limited", developerId: "provident-housing", micromarket: "central", location: "Mysore Road", status: "New Launch", price: "₹90.00 Lac – 2.20 Cr" },
    { id: "birla-tisya", name: "Birla Tisya", developer: "Birla Estates", micromarket: "central", location: "Rajaji Nagar", status: "Under Construction", price: "₹1.57 Cr – 3.48 Cr" },
    { id: "godrej-tiara", name: "Godrej Tiara", developer: "Godrej Properties", micromarket: "central", location: "Yeshwanthpur", status: "New Launch", price: "₹3.50 Cr – 5.30 Cr" },
    { id: "lodha-mirabelle", name: "Lodha Mirabelle", developer: "Lodha Group", micromarket: "central", location: "Nagavara", status: "Under Construction", price: "₹2.26 Cr – 4.57 Cr" },
    { id: "shriram-esquire", name: "Shriram Esquire", developer: "Shriram Properties", micromarket: "central", location: "Koramangala", status: "Under Construction", price: "₹3.47 Cr – 4.24 Cr" },
    { id: "godrej-athena", name: "Godrej Athena", developer: "Godrej Properties", micromarket: "central", location: "Indiranagar", status: "Under Construction", price: "₹2.55 Cr – 3.60 Cr" },
    { id: "sobha-infinia", name: "Sobha Infinia", developer: "Sobha", micromarket: "central", location: "Koramangala", status: "Under Construction", price: "₹3.59 Cr – 6.64 Cr" },
    { id: "century-regalia", name: "Century Regalia", developer: "Century Real Estate", micromarket: "central", location: "Indiranagar", status: "Under Construction", price: "₹6.65 Cr – 9.04 Cr" },
    { id: "embassy-hebbal", name: "Embassy Hebbal", developer: "Embassy", micromarket: "central", location: "Hebbal", status: "Upcoming", price: "Price on Request" },
    { id: "provident-equinox-3", name: "Provident Equinox 3", developer: "Provident Housing Limited", developerId: "provident-housing", micromarket: "central", location: "Mysore Road", status: "Under Construction", price: "₹73.49 Lac – 1.80 Cr" },
    { id: "purva-blubelle", name: "Purva Blubelle", developer: "Puravankara", micromarket: "central", location: "Rajaji Nagar", status: "Under Construction", price: "₹2.30 Cr – 2.61 Cr" },
    { id: "shapoorji-parkwest", name: "Shapoorji Pallonji ParkWest", developer: "Shapoorji Pallonji", micromarket: "central", location: "Binnipete", status: "Partially Ready To Move", price: "₹2.37 Cr – 5.66 Cr" },
    { id: "purva-orient-grand", name: "Puravankara Purva Orient Grand", developer: "Puravankara", micromarket: "central", location: "Sudhama Nagar", status: "Under Construction", price: "₹6.00 Cr – 10.78 Cr" },
    { id: "assetz-22-crest", name: "Assetz 22 And Crest", developer: "Assetz Homes", micromarket: "central", location: "Yeshwanthpur", status: "Under Construction", price: "₹2.58 Cr – 3.38 Cr" },
    { id: "shriram-hebbal-one", name: "Shriram Hebbal One", developer: "Shriram Properties", micromarket: "central", location: "Hebbal", status: "Under Construction", price: "₹52.50 Lac" },
    { id: "sobha-royal-crest", name: "Sobha Royal Crest", developer: "Sobha", micromarket: "central", location: "Banashankari", status: "Under Construction", price: "₹2.63 Cr – 4.93 Cr" },
    { id: "k-raheja-vivarea", name: "K Raheja Vivarea Bangalore", developer: "K Raheja Corp", micromarket: "central", location: "Koramangala", status: "Partially Ready To Move", price: "₹4.12 Cr – 10.07 Cr" }
  ]
};
