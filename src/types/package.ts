export type PackageCategory = 'Beach' | 'City' | 'Cruise' | 'Family' | 'Honeymoon' | 'Luxury';

export type PackageType =
  | 'Island Escape'
  | 'Multi-City Holiday'
  | 'Cruise Holiday'
  | 'City Break'
  | 'Beach Holiday';

export type PackageVariantName = 'Budget' | 'Standard' | 'Premium' | 'Luxury';

export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
};

export type PackageVariant = {
  variantName: PackageVariantName;
  duration: string;
  priceLabel: string;
  actualPrice?: number;
  discountedPrice?: number;
  hotelCategory: string;
  inclusions: string[];
  exclusions: string[];
};

export type TravelPackage = {
  id: string;
  slug: string;
  title: string;
  destination: string;
  country: string;
  category: PackageCategory;
  packageType: PackageType;
  heroImage: string;
  gallery: string[];
  shortDescription: string;
  overview: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  bestTimeToVisit: string;
  suitableFor: string[];
  variants: PackageVariant[];
  featured: boolean;
};
