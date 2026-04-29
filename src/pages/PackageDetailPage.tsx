import { Navigate, useParams } from 'react-router-dom';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { InclusionsSection } from '@/components/packages/InclusionsSection';
import { ItinerarySection } from '@/components/packages/ItinerarySection';
import { PricingCtaSection } from '@/components/packages/PricingCtaSection';
import { ContactCtaSection } from '@/components/sections/ContactCtaSection';
import { getPackageBySlug } from '@/utils/packageUtils';

export function PackageDetailPage() {
  const { slug } = useParams();
  const item = getPackageBySlug(slug);

  if (!item) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <section className="bg-raga-ink text-white">
        <Container className="grid gap-10 py-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-raga-gold">{item.category}</p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-tight sm:text-6xl">{item.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">{item.longDescription}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/contact">Enquire now</Button>
              <Button href="/packages" variant="secondary">
                Back to packages
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={item.images[0]} alt={item.title} className="aspect-[4/3] h-full w-full object-cover" />
          </div>
        </Container>
      </section>

      <Container>
        <section className="grid gap-4 border-b border-raga-ink/10 py-10 sm:grid-cols-3">
          {[
            ['Location', item.location],
            ['Duration', item.duration],
            ['Starting price', item.price],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-raga-rust">{label}</p>
              <p className="mt-2 font-semibold">{value}</p>
            </div>
          ))}
        </section>

        <section className="py-16">
          <h2 className="font-display text-4xl font-semibold">Highlights</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {item.highlights.map((highlight) => (
              <div key={highlight} className="rounded-lg border border-raga-ink/10 bg-white p-5 text-sm font-semibold">
                {highlight}
              </div>
            ))}
          </div>
        </section>

        <ItinerarySection itinerary={item.itinerary} />
        <InclusionsSection inclusions={item.inclusions} exclusions={item.exclusions} />
        <PricingCtaSection item={item} />
      </Container>
      <ContactCtaSection />
    </>
  );
}
