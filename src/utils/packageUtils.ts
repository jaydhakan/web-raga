import { travelPackages } from '@/data/packages';
import { siteConfig } from '@/constants/site';
import type { PackageVariant } from '@/types/package';
import type { TravelPackage } from '@/types/package';

export const getFeaturedPackages = () => travelPackages.filter((item) => item.featured);

export const getPackageBySlug = (slug: string | undefined) =>
  travelPackages.find((item) => item.slug === slug);

export const getPackageCategories = () =>
  Array.from(new Set(travelPackages.map((item) => item.category)));

export const getStartingVariant = (item: TravelPackage) =>
  item.variants.find((variant) => variant.variantName === 'Budget') ?? item.variants[0];

const getVariantSortPrice = (variant: PackageVariant) =>
  variant.discountedPrice ?? variant.actualPrice ?? Number.MAX_SAFE_INTEGER;

export const getLowestPriceVariant = (item: TravelPackage) =>
  [...item.variants].sort((first, second) => getVariantSortPrice(first) - getVariantSortPrice(second))[0];

export const getBestSellingVariant = (item: TravelPackage) =>
  item.variants.find((variant) => variant.variantName === 'Standard') ??
  item.variants.find((variant) => variant.variantName === 'Premium') ??
  item.variants[0];

export const getDurationRange = (item: TravelPackage) => {
  const durations = Array.from(new Set(item.variants.map((variant) => variant.duration)));

  return durations.length === 1 ? durations[0] : `${durations[0]} to ${durations[durations.length - 1]}`;
};

export const getTravelKinds = (item: TravelPackage) => {
  const kinds = item.country.toLowerCase().includes('india') ? ['Domestic'] : ['International'];

  if (item.suitableFor.some((value) => value.toLowerCase().includes('group'))) {
    kinds.push('Group');
  }

  if (
    item.category === 'Honeymoon' ||
    item.suitableFor.some((value) => value.toLowerCase().includes('honeymoon'))
  ) {
    kinds.push('Honeymoon');
  }

  return kinds;
};

export const getPackageWhatsAppUrl = (item: TravelPackage) => {
  const variant = getLowestPriceVariant(item);
  const message = `Hi RAGA International, I want to enquire about ${item.title} (${variant.priceLabel}).`;

  return `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;
};

export const getVariantWhatsAppUrl = (item: TravelPackage, variant: PackageVariant) => {
  const message = [
    'Hi RAGA International, I want to enquire about:',
    `Package: ${item.title}`,
    `Variant: ${variant.variantName}`,
    `Duration: ${variant.duration}`,
    `Price: ${variant.priceLabel}`,
  ].join('\n');

  return `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;
};
