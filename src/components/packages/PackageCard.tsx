import { MessageCircle, MapPin, Sparkles } from 'lucide-react';
import type { TravelPackage } from '@/types/package';
import { Button } from '@/components/common/Button';
import {
  getBestSellingVariant,
  getDurationRange,
  getLowestPriceVariant,
} from '@/utils/packageUtils';
import { getPackageWhatsAppUrl } from '@/utils/whatsapp';

type PackageCardProps = {
  item: TravelPackage;
};

export function PackageCard({ item }: PackageCardProps) {
  const lowestVariant = getLowestPriceVariant(item);
  const bestSellingVariant = getBestSellingVariant(item);
  const durationRange = getDurationRange(item);
  const whatsappUrl = getPackageWhatsAppUrl(item);

  return (
    <article className="premium-card group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden bg-raga-sand">
        <img
          src={item.heroImage}
          alt={`${item.title} package card image for ${item.destination}`}
          className="image-zoom h-full w-full object-cover"
          loading="lazy"
          width="900"
          height="675"
        />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-raga-ink/72 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-raga-ivory/94 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-raga-pine shadow-card">
          {item.packageType}
        </div>
        <div className="absolute bottom-4 left-4 inline-flex max-w-[calc(100%-2rem)] items-center gap-2 rounded-full bg-raga-gold px-3 py-1.5 text-xs font-extrabold text-raga-ink shadow-card">
          <Sparkles size={13} aria-hidden="true" />
          Popular choice: {bestSellingVariant.variantName}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.24em] text-raga-rust">
          <MapPin size={14} aria-hidden="true" />
          {item.destination}, {item.country}
        </div>
        <h3 className="font-display text-3xl font-semibold leading-tight">{item.title}</h3>
        <p className="mt-4 text-sm leading-7 text-raga-ink/68">{item.shortDescription}</p>

        <ul className="mt-5 grid gap-2 text-sm font-semibold leading-6 text-raga-ink/72">
          {item.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-raga-gold" />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <div className="rounded-brand border border-raga-ink/8 bg-white/72 p-4 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-raga-ink/45">
              Duration
            </p>
            <p className="mt-1 text-sm font-bold text-raga-ink">{durationRange}</p>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-raga-ink/45">
              Starting from
            </p>
            <p className="mt-1 text-xl font-extrabold text-raga-pine">{lowestVariant.priceLabel}</p>
            <p className="mt-2 text-xs font-bold text-raga-ink/52">
              Transparent inclusions. Variant-wise pricing.
            </p>
          </div>
        </div>

        <div className="mt-5 grid items-stretch gap-3 sm:grid-cols-2">
          <Button href={`/packages/${item.slug}`} variant="secondary" className="w-full">
            Check Availability
          </Button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex w-full min-h-12 items-center justify-center rounded-full bg-raga-pine px-6 py-3 text-sm font-extrabold text-raga-ivory shadow-card transition duration-300 hover:-translate-y-0.5 hover:bg-raga-forest hover:shadow-glow"
          >
            <MessageCircle className="mr-2" size={17} aria-hidden="true" />
            Get Best Price
          </a>
        </div>
        <p className="mt-3 text-center text-xs font-bold text-raga-ink/48">
          Free WhatsApp consultation. No hidden charges in final quote.
        </p>
        <div className="mt-4 flex shrink-0 flex-wrap items-center gap-2 border-t border-raga-ink/10 pt-4">
          {item.variants.map((variant) => (
            <span
              key={variant.variantName}
              className="rounded-full border border-raga-ink/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-raga-ink/55"
            >
              {variant.variantName}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
