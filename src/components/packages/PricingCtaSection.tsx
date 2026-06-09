import type { TravelPackage } from '@/types/package';
import { Button } from '@/components/common/Button';

type PricingCtaSectionProps = {
  item: TravelPackage;
};

export function PricingCtaSection({ item }: PricingCtaSectionProps) {
  const startingVariant = item.variants[0];

  return (
    <section className="rounded-premium bg-raga-ink p-7 text-raga-linen shadow-glow sm:p-10">
      <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-raga-gold">{startingVariant.duration}</p>
          <h2 className="mt-4 font-display text-5xl font-semibold leading-none">{startingVariant.priceLabel}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-raga-linen/70">
            Tell us your preferred dates, traveler count, and comfort level. We will shape the quote around
            the exact journey you want.
          </p>
          <div className="mt-7">
            <Button href="/contact" variant="primary" className="bg-raga-gold text-raga-ink hover:bg-raga-sand">
              Request quote
            </Button>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {item.variants.map((variant) => (
            <article key={variant.variantName} className="rounded-brand border border-raga-linen/12 bg-white/7 p-5 transition hover:-translate-y-1 hover:bg-white/10">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-raga-gold">{variant.variantName}</p>
              <h3 className="mt-3 font-display text-3xl font-semibold">{variant.priceLabel}</h3>
              <p className="mt-2 text-sm text-raga-linen/70">{variant.hotelCategory}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-raga-linen/45">
                {variant.duration}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
