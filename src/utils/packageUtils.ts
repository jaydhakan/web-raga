import { travelPackages } from '@/data/packages';

export const getFeaturedPackages = () => travelPackages.filter((item) => item.featured);

export const getPackageBySlug = (slug: string | undefined) =>
  travelPackages.find((item) => item.slug === slug);

export const getPackageCategories = () =>
  Array.from(new Set(travelPackages.map((item) => item.category)));
