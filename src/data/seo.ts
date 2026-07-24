import { siteConfig } from '@/constants/site';

export const pageSeo = {
  home: {
    title: 'Raga International',
    description:
      'Plan Dubai, Bali, Thailand, Singapore, Malaysia, and cruise holidays with Raga International. Compare package variants and enquire on WhatsApp.',
    path: '/',
  },
  packages: {
    title: 'International Travel Packages',
    description:
      'Browse Raga International packages with budget, standard, premium, and luxury variants for Dubai, Bali, Thailand, Singapore, Malaysia, and cruises.',
    path: '/packages',
  },
  about: {
    title: 'About Raga International',
    description:
      'Learn how Raga International helps travellers choose routes, hotel tiers, transfers, and package variants with clear expert guidance.',
    path: '/about',
  },
  gallery: {
    title: 'Traveller Photo Gallery',
    description:
      'Real trip photos from Raga International travellers — Singapore family holidays, group tours, and cruise departures.',
    path: '/gallery',
  },
  reviews: {
    title: 'Google Reviews',
    description:
      'Real Google reviews from Raga International travellers who booked Dubai, Bali, Thailand, Singapore, and cruise holidays.',
    path: '/reviews',
  },
  faq: {
    title: 'Frequently Asked Questions',
    description:
      'Answers on customization, pricing, hidden charges, visa assistance, and trip support from Raga International.',
    path: '/faq',
  },
  contact: {
    title: 'Contact Raga International',
    description:
      'Send Raga International your travel brief for international holidays, group trips, honeymoon planning, and custom package enquiries.',
    path: '/contact',
  },
  notFound: {
    title: 'Page Not Found',
    description: `The page you are looking for is not available on ${siteConfig.name}.`,
    path: '/404',
  },
};
