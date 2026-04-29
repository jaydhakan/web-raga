import type { TravelPackage } from '@/types/package';
import { Button } from '@/components/common/Button';

type PricingCtaSectionProps = {
  item: TravelPackage;
};

export function PricingCtaSection({ item }: PricingCtaSectionProps) {
  return (
    <section className="rounded-lg bg-raga-ink p-6 text-raga-linen sm:p-8">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-raga-gold">{item.duration}</p>
          <h2 className="mt-3 font-display text-4xl font-semibold">{item.price}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-raga-linen/70">
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
