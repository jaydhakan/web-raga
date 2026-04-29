export type PackageCategory = 'Luxury' | 'Adventure' | 'Wellness' | 'Culture';

export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
};

export type TravelPackage = {
  id: string;
  slug: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  shortDescription: string;
  longDescription: string;
  images: string[];
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  availableDates: string[];
  category: PackageCategory;
  featured: boolean;
};
