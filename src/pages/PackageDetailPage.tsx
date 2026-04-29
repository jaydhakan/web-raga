import { Navigate, useParams } from 'react-router-dom';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { InclusionsSection } from '@/components/packages/InclusionsSection';
import { ItinerarySection } from '@/components/packages/ItinerarySection';
import { PricingCtaSection } from '@/components/packages/PricingCtaSection';
import { ContactCtaSection } from '@/components/sections/ContactCtaSection';
import { getPackageBySlug, getStartingVariant } from '@/utils/packageUtils';

export function PackageDetailPage() {
  const { slug } = useParams();
  const item = getPackageBySlug(slug);

  if (!item) {
    return <Navigate to="/404" replace />;
  }

  const startingVariant = getStartingVariant(item);

  return (
    <>
      <section className="bg-raga-ink text-white">
        <Container className="grid gap-12 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-raga-gold">{item.packageType}</p>
            <h1 className="mt-5 font-display text-6xl font-semibold leading-[0.95] sm:text-7xl">{item.title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/74 sm:text-lg sm:leading-9">{item.overview}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">Enquire now</Button>
              <Button href="/packages" variant="secondary">
                Back to packages
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-brand shadow-lifted">
            <img src={item.heroImage} alt={item.title} className="aspect-[4/3] h-full w-full object-cover" />
          </div>
        </Container>
      </section>

      <Container>
        <section className="grid gap-4 border-b border-raga-ink/10 py-12 sm:grid-cols-3">
          {[
            ['Destination', item.destination],
            ['Best time', item.bestTimeToVisit],
            ['Starting price', startingVariant.priceLabel],
          ].map(([label, value]) => (
            <div key={label} className="rounded-brand bg-raga-ivory p-5 shadow-card">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-raga-rust">{label}</p>
              <p className="mt-2 font-bold text-raga-pine">{value}</p>
            </div>
          ))}
        </section>

        <section className="py-20">
          <h2 className="font-display text-5xl font-semibold leading-none">Highlights</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {item.highlights.map((highlight) => (
              <div key={highlight} className="rounded-brand border border-raga-ink/10 bg-raga-ivory p-6 text-sm font-bold leading-6 shadow-card">
                {highlight}
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <h2 className="font-display text-5xl font-semibold leading-none">Suitable for</h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {item.suitableFor.map((travelerType) => (
              <span
                key={travelerType}
                className="rounded-full border border-raga-ink/10 bg-raga-ivory px-5 py-3 text-sm font-bold text-raga-pine shadow-card"
              >
                {travelerType}
              </span>
            ))}
          </div>
        </section>

        <ItinerarySection itinerary={item.itinerary} />
        <InclusionsSection inclusions={startingVariant.inclusions} exclusions={startingVariant.exclusions} />
        <PricingCtaSection item={item} />
      </Container>
      <ContactCtaSection />
    </>
  );
}
