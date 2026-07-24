export type HomeIconKey =
  | 'calendar'
  | 'headphones'
  | 'heart'
  | 'message'
  | 'shield'
  | 'sparkles'
  | 'users';

export type WhyChooseItem = {
  title: string;
  description: string;
  icon: HomeIconKey;
};

export type CustomTripPoint = {
  label: string;
  icon: HomeIconKey;
};

// Home page content — update this file when adding new proof points, trust badges, or trip planning callouts.
export const whyChooseItems: WhyChooseItem[] = [
  {
    title: 'Variant-led planning',
    description: 'Compare budget, standard, premium, and luxury options with clear hotel and inclusion differences.',
    icon: 'calendar',
  },
  {
    title: 'Clear inclusions',
    description: 'Understand what is included, what is excluded, and where upgrades are genuinely worth it.',
    icon: 'shield',
  },
  {
    title: 'Travel assistance',
    description: 'Get human support for route choices, hotel areas, transfers, documents, and trip-day coordination.',
    icon: 'headphones',
  },
  {
    title: 'Warm expert guidance',
    description: 'Discuss dates, group needs, special occasions, and practical changes directly with the RAGA team.',
    icon: 'heart',
  },
];

export const trustBadges = [
  'Verified travel partner',
  '24/7 travel support',
  'Custom itineraries',
  'Transparent package variants',
];

export const customTripPoints: CustomTripPoint[] = [
  { label: 'Private groups and families', icon: 'users' },
  { label: 'Honeymoon and celebration setups', icon: 'sparkles' },
  { label: 'Quote discussion on WhatsApp', icon: 'message' },
];
