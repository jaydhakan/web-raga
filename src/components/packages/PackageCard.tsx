import { MapPin } from 'lucide-react';
import type { TravelPackage } from '@/types/package';
import { Button } from '@/components/common/Button';
import { getStartingVariant } from '@/utils/packageUtils';

type PackageCardProps = {
  item: TravelPackage;
};

export function PackageCard({ item }: PackageCardProps) {
  const startingVariant = getStartingVariant(item);

  return (
    <article className="group overflow-hidden rounded-brand border border-raga-ink/8 bg-raga-ivory shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-lifted">
      <div className="aspect-[4/3] overflow-hidden bg-raga-sand">
        <img
          src={item.heroImage}
          alt={item.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="mb-4 flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-raga-rust">
          <MapPin size={14} aria-hidden="true" />
          {item.destination}
        </div>
        <h3 className="font-display text-3xl font-semibold leading-[1.02]">{item.title}</h3>
        <p className="mt-4 text-sm leading-7 text-raga-ink/68">{item.shortDescription}</p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-raga-ink/10 pt-5">
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-raga-ink/45">
              {startingVariant.duration}
            </p>
            <p className="mt-1 font-bold text-raga-pine">{startingVariant.priceLabel}</p>
          </div>
          <Button href={`/packages/${item.slug}`} variant="secondary">
            View
          </Button>
        </div>
      </div>
    </article>
  );
}
