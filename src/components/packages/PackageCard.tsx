import { MapPin } from 'lucide-react';
import type { TravelPackage } from '@/types/package';
import { Button } from '@/components/common/Button';

type PackageCardProps = {
  item: TravelPackage;
};

export function PackageCard({ item }: PackageCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-raga-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="aspect-[4/3] overflow-hidden bg-raga-sand">
        <img
          src={item.images[0]}
          alt={item.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-raga-rust">
          <MapPin size={14} aria-hidden="true" />
          {item.location}
        </div>
        <h3 className="font-display text-2xl font-semibold leading-tight">{item.title}</h3>
        <p className="mt-3 text-sm leading-6 text-raga-ink/70">{item.shortDescription}</p>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-raga-ink/10 pt-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-raga-ink/45">
              {item.duration}
            </p>
            <p className="mt-1 font-semibold">{item.price}</p>
          </div>
          <Button href={`/packages/${item.slug}`} variant="secondary">
            View
          </Button>
        </div>
      </div>
    </article>
  );
}
