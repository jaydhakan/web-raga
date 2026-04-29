import { travelPackages } from '@/data/packages';
import type { TravelPackage } from '@/types/package';

export const getFeaturedPackages = () => travelPackages.filter((item) => item.featured);

export const getPackageBySlug = (slug: string | undefined) =>
  travelPackages.find((item) => item.slug === slug);

export const getPackageCategories = () =>
  Array.from(new Set(travelPackages.map((item) => item.category)));

export const getStartingVariant = (item: TravelPackage) =>
  item.variants.find((variant) => variant.variantName === 'Budget') ?? item.variants[0];
