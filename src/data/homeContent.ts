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

export type SocialProofPost = {
  label: string;
  caption: string;
  image: string;
  alt: string;
};

export type CustomTripPoint = {
  label: string;
  icon: HomeIconKey;
};

// TODO: Replace this static Home content with CMS-managed proof points, Instagram embeds, and support messaging.
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

export const socialProofPosts: SocialProofPost[] = [
  {
    label: 'Bali honeymoon villas',
    caption: 'Placeholder for real villa walk-throughs, room tours, and couple moments.',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=900&q=80',
    alt: 'Private pool villa in Bali prepared for honeymoon travellers',
  },
  {
    label: 'Dubai skyline breaks',
    caption: 'Placeholder for Dubai Mall, Burj Khalifa, desert safari, and family reels.',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=900&q=80',
    alt: 'Dubai skyline at golden hour for family holiday inspiration',
  },
  {
    label: 'Thailand island days',
    caption: 'Placeholder for Phuket, Krabi, island hopping, and guest beach stories.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
    alt: 'Clear blue Thailand beach for Phuket and Krabi island holidays',
  },
  {
    label: 'Singapore cruise departures',
    caption: 'Placeholder for cabin previews, boarding day, and onboard entertainment.',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=900&q=80',
    alt: 'Cruise ship at sea for Singapore cruise holiday placeholder',
  },
  {
    label: 'Malaysia group holidays',
    caption: 'Placeholder for Genting, Kuala Lumpur sightseeing, and coordinated group travel.',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=900&q=80',
    alt: 'Kuala Lumpur skyline for Singapore Malaysia group holiday planning',
  },
  {
    label: 'Family travel support',
    caption: 'Placeholder for airport assistance, transfer coordination, and day-wise support updates.',
    image: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=900&q=80',
    alt: 'Family travel planning placeholder for RAGA International support',
  },
];
