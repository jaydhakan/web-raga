import { siteConfig } from '@/constants/site';

export const pageSeo = {
  home: {
    title: 'International Holiday Packages',
    description:
      'Plan Dubai, Bali, Thailand, Singapore, Malaysia, and cruise holidays with RAGA International. Compare package variants and enquire on WhatsApp.',
    path: '/',
  },
  packages: {
    title: 'International Travel Packages',
    description:
      'Browse RAGA International packages with budget, standard, premium, and luxury variants for Dubai, Bali, Thailand, Singapore, Malaysia, and cruises.',
    path: '/packages',
  },
  about: {
    title: 'About RAGA International',
    description:
      'Learn how RAGA International helps travellers choose routes, hotel tiers, transfers, and package variants with clear expert guidance.',
    path: '/about',
  },
  contact: {
    title: 'Contact RAGA International',
    description:
      'Send RAGA International your travel brief for international holidays, group trips, honeymoon planning, and custom package enquiries.',
    path: '/contact',
  },
  notFound: {
    title: 'Page Not Found',
    description: `The page you are looking for is not available on ${siteConfig.name}.`,
    path: '/404',
  },
};
