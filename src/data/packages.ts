import type { TravelPackage } from '@/types/package';

export const travelPackages: TravelPackage[] = [
  {
    id: 'pkg-001',
    slug: 'ladakh-highland-retreat',
    title: 'Ladakh Highland Retreat',
    location: 'Leh, Nubra Valley, Pangong',
    duration: '7 days / 6 nights',
    price: 'From INR 92,000',
    shortDescription:
      'A slow, high-altitude journey through monasteries, desert valleys, alpine lakes, and boutique stays.',
    longDescription:
      'Designed for travelers who want Ladakh without rushing it, this journey balances iconic landscapes with acclimatized pacing, thoughtful guides, and stays chosen for warmth and character.',
    images: [
      'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1400&q=80',
    ],
    highlights: [
      'Private monastery walks with local context',
      'Nubra Valley desert camp experience',
      'Sunrise by Pangong Lake',
      'Acclimatized schedule with hosted transfers',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive in Leh',
        description: 'Settle into your boutique stay, acclimatize, and ease into the mountains.',
      },
      {
        day: 2,
        title: 'Monasteries and old Leh',
        description: 'Explore Thiksey, Hemis, and the old market with a private guide.',
      },
      {
        day: 3,
        title: 'Cross Khardung La',
        description: 'Drive into Nubra Valley with scenic pauses and a relaxed evening at camp.',
      },
    ],
    inclusions: ['Boutique stays', 'Daily breakfast and dinner', 'Private vehicle', 'Local guide'],
    exclusions: ['Flights', 'Travel insurance', 'Personal expenses', 'Camera fees'],
    availableDates: ['2026-06-12', '2026-07-18', '2026-09-05'],
    category: 'Adventure',
    featured: true,
  },
  {
    id: 'pkg-002',
    slug: 'rajasthan-royal-circuit',
    title: 'Rajasthan Royal Circuit',
    location: 'Jaipur, Jodhpur, Udaipur',
    duration: '8 days / 7 nights',
    price: 'From INR 1,18,000',
    shortDescription:
      'Palace hotels, desert evenings, craft ateliers, and private city walks across Rajasthan.',
    longDescription:
      'A polished cultural route through Rajasthan with strong design, food, and heritage layers. Ideal for travelers who want comfort, atmosphere, and credible local storytelling.',
    images: [
      'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1400&q=80',
    ],
    highlights: [
      'Heritage stays with modern comfort',
      'Private block-printing and craft visits',
      'Lake Pichola evening experience',
      'Curated dining reservations',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Jaipur arrival',
        description: 'Check in and begin with an atmospheric old-city evening walk.',
      },
      {
        day: 2,
        title: 'Forts and ateliers',
        description: 'Visit Amber Fort, then meet craft practitioners in a working studio.',
      },
      {
        day: 3,
        title: 'Jodhpur by road',
        description: 'Drive to Jodhpur with a countryside lunch and sunset at Mehrangarh.',
      },
    ],
    inclusions: ['Heritage hotels', 'Breakfast', 'Private transfers', 'Hosted experiences'],
    exclusions: ['Flights', 'Lunches and dinners unless noted', 'Insurance', 'Tips'],
    availableDates: ['2026-10-10', '2026-11-14', '2026-12-05'],
    category: 'Culture',
    featured: true,
  },
  {
    id: 'pkg-003',
    slug: 'kerala-backwater-wellness',
    title: 'Kerala Backwater Wellness',
    location: 'Kochi, Kumarakom, Marari',
    duration: '6 days / 5 nights',
    price: 'From INR 84,000',
    shortDescription:
      'A restorative coastal escape with Ayurveda, backwater cruising, seafood, and calm design-led stays.',
    longDescription:
      'This journey is built around rest and sensory richness: old Kochi, private backwater time, Ayurvedic rituals, and quiet beach days on the Malabar coast.',
    images: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1400&q=80',
    ],
    highlights: [
      'Ayurveda consultation and therapies',
      'Private backwater cruise',
      'Fort Kochi heritage walk',
      'Slow beach stay in Marari',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Kochi arrival',
        description: 'Arrive in Fort Kochi and settle into a restored heritage property.',
      },
      {
        day: 2,
        title: 'Culture and cuisine',
        description: 'Walk the old quarter, then join a hosted coastal cooking session.',
      },
      {
        day: 3,
        title: 'Backwaters',
        description: 'Transfer to Kumarakom for a private cruise and sunset by the water.',
      },
    ],
    inclusions: ['Premium stays', 'Daily breakfast', 'Wellness consultation', 'Private transfers'],
    exclusions: ['Flights', 'Additional therapies', 'Alcohol', 'Personal shopping'],
    availableDates: ['2026-08-22', '2026-09-19', '2026-11-07'],
    category: 'Wellness',
    featured: true,
  },
];
