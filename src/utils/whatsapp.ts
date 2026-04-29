import { siteConfig } from '@/constants/site';
import type { PackageVariant, TravelPackage } from '@/types/package';
import { getLowestPriceVariant } from '@/utils/packageUtils';

type GeneralTripEnquiryInput = {
  name?: string;
  destination?: string;
  travelMonth?: string;
  travelers?: string;
  hotelPreference?: string;
  budget?: string;
  notes?: string;
};

const buildWhatsAppUrl = (message: string) =>
  `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;

export const getGeneralTripPlanningWhatsAppUrl = (input: GeneralTripEnquiryInput = {}) => {
  const message = [
    'Hi RAGA International, I want help planning an international trip.',
    input.name ? `Name: ${input.name}` : null,
    input.destination ? `Destination: ${input.destination}` : 'Destination: Not finalized yet',
    input.travelMonth ? `Travel month: ${input.travelMonth}` : null,
    input.travelers ? `Travellers: ${input.travelers}` : null,
    input.hotelPreference ? `Hotel preference: ${input.hotelPreference}` : null,
    input.budget ? `Budget: ${input.budget}` : null,
    input.notes ? `Notes: ${input.notes}` : null,
  ]
    .filter(Boolean)
    .join('\n');

  return buildWhatsAppUrl(message);
};

export const getPackageWhatsAppUrl = (item: TravelPackage) => {
  const variant = getLowestPriceVariant(item);
  const message = [
    'Hi RAGA International, I want to enquire about this package.',
    `Package: ${item.title}`,
    `Destination: ${item.destination}`,
    `Starting variant: ${variant.variantName}`,
    `Duration: ${variant.duration}`,
    `Price: ${variant.priceLabel}`,
  ].join('\n');

  return buildWhatsAppUrl(message);
};

export const getVariantWhatsAppUrl = (item: TravelPackage, variant: PackageVariant) => {
  const message = [
    'Hi RAGA International, I want to enquire about this package variant.',
    `Package: ${item.title}`,
    `Destination: ${item.destination}`,
    `Selected variant: ${variant.variantName}`,
    `Duration: ${variant.duration}`,
    `Price: ${variant.priceLabel}`,
    `Hotel category: ${variant.hotelCategory}`,
  ].join('\n');

  return buildWhatsAppUrl(message);
};
