import type { TravelPackage } from '@/types/package';
import { Button } from '@/components/common/Button';

type PricingCtaSectionProps = {
  item: TravelPackage;
};

export function PricingCtaSection({ item }: PricingCtaSectionProps) {
  return (
    <section className="rounded-brand bg-raga-ink p-7 text-raga-linen shadow-lifted sm:p-10">
      <div className="grid gap-7 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-raga-gold">{item.duration}</p>
          <h2 className="mt-4 font-display text-5xl font-semibold leading-none">{item.price}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-raga-linen/70">
            Tell us your preferred dates, traveler count, and comfort level. We will shape the quote around
            the exact journey you want.
          </p>
        </div>
        <Button href="/contact" variant="primary" className="bg-raga-gold text-raga-ink hover:bg-raga-sand">
          Request quote
        </Button>
      </div>
    </section>
  );
}
