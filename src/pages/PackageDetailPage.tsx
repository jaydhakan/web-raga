import { Check, Clock, Hotel, MessageCircle, Sparkles, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { ItinerarySection } from '@/components/packages/ItinerarySection';
import { PackageCard } from '@/components/packages/PackageCard';
import { ContactCtaSection } from '@/components/sections/ContactCtaSection';
import { travelPackages } from '@/data/packages';
import type { PackageVariant } from '@/types/package';
import { getPackageBySlug, getStartingVariant, getVariantWhatsAppUrl } from '@/utils/packageUtils';

const getDisplayPrice = (variant: PackageVariant) =>
  variant.discountedPrice
    ? `INR ${variant.discountedPrice.toLocaleString('en-IN')}`
    : variant.priceLabel;

export function PackageDetailPage() {
  const { slug } = useParams();
  const item = getPackageBySlug(slug);
  const [selectedVariantName, setSelectedVariantName] = useState<string | null>(null);

  const relatedPackages = useMemo(() => {
    if (!item) {
      return [];
    }

    return travelPackages
      .filter(
        (packageItem) =>
          packageItem.id !== item.id &&
          (packageItem.category === item.category || packageItem.country === item.country),
      )
      .slice(0, 3);
  }, [item]);

  if (!item) {
    return <Navigate to="/404" replace />;
  }

  const fallbackVariant = getStartingVariant(item);
  const selectedVariant =
    item.variants.find((variant) => variant.variantName === selectedVariantName) ?? fallbackVariant;
  const whatsappUrl = getVariantWhatsAppUrl(item, selectedVariant);

  return (
    <>
      <section className="relative overflow-hidden bg-raga-ink text-white">
        <img
          src={item.heroImage}
          alt={item.title}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,26,23,0.96)_0%,rgba(20,26,23,0.78)_48%,rgba(20,26,23,0.38)_100%)]" />
        <Container className="relative grid gap-12 py-16 lg:grid-cols-[1fr_0.86fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-raga-gold">{item.packageType}</p>
            <h1 className="mt-5 font-display text-6xl font-semibold leading-[0.95] sm:text-7xl">{item.title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/76 sm:text-lg sm:leading-9">{item.overview}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-raga-gold px-6 py-3 text-sm font-bold text-raga-ink shadow-card transition hover:-translate-y-0.5 hover:bg-raga-sand hover:shadow-lifted"
              >
                <MessageCircle className="mr-2" size={18} aria-hidden="true" />
                WhatsApp enquiry
              </a>
              <Button href="/packages" variant="secondary">
                Back to packages
              </Button>
            </div>
          </div>

          <aside className="rounded-brand border border-white/12 bg-raga-ivory p-6 text-raga-ink shadow-lifted lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-raga-rust">Selected plan</p>
            <h2 className="mt-3 font-display text-4xl font-semibold">{selectedVariant.variantName}</h2>
            <p className="mt-2 text-3xl font-extrabold text-raga-pine">{getDisplayPrice(selectedVariant)}</p>
            {selectedVariant.actualPrice && selectedVariant.discountedPrice ? (
              <p className="mt-1 text-sm font-semibold text-raga-ink/45 line-through">
                INR {selectedVariant.actualPrice.toLocaleString('en-IN')}
              </p>
            ) : null}
            <div className="mt-5 grid gap-3 border-y border-raga-ink/10 py-5 text-sm font-bold text-raga-ink/76">
              <span className="flex items-center gap-3">
                <Clock size={18} aria-hidden="true" /> {selectedVariant.duration}
              </span>
              <span className="flex items-center gap-3">
                <Hotel size={18} aria-hidden="true" /> {selectedVariant.hotelCategory}
              </span>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-raga-pine px-6 py-3 text-sm font-bold text-raga-ivory shadow-card transition hover:-translate-y-0.5 hover:bg-raga-ink hover:shadow-lifted"
            >
              <MessageCircle className="mr-2" size={18} aria-hidden="true" />
              Enquire on WhatsApp
            </a>
            <p className="mt-4 text-center text-xs font-semibold leading-5 text-raga-ink/48">
              Includes package, variant, duration, and price in the enquiry message.
            </p>
          </aside>
        </Container>
      </section>

      <Container>
        <section className="grid gap-4 border-b border-raga-ink/10 py-12 sm:grid-cols-3">
          {[
            ['Destination', item.destination],
            ['Best time', item.bestTimeToVisit],
            ['Country', item.country],
          ].map(([label, value]) => (
            <div key={label} className="rounded-brand bg-raga-ivory p-5 shadow-card">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-raga-rust">{label}</p>
              <p className="mt-2 font-bold text-raga-pine">{value}</p>
            </div>
          ))}
        </section>

        <section className="py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-raga-rust">Choose your comfort</p>
            <h2 className="mt-4 font-display text-5xl font-semibold leading-none">Package variants</h2>
            <p className="mt-5 text-base leading-8 text-raga-ink/68">
              Select a variant to update the price, hotel category, inclusions, exclusions, and WhatsApp enquiry.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {item.variants.map((variant) => {
              const isSelected = variant.variantName === selectedVariant.variantName;

              return (
                <button
                  key={variant.variantName}
                  className={`rounded-brand border p-5 text-left shadow-card transition hover:-translate-y-1 ${
                    isSelected
                      ? 'border-raga-gold bg-raga-pine text-raga-ivory shadow-lifted'
                      : 'border-raga-ink/10 bg-raga-ivory text-raga-ink hover:border-raga-gold'
                  }`}
                  type="button"
                  onClick={() => setSelectedVariantName(variant.variantName)}
                >
                  <span className={`text-xs font-bold uppercase tracking-[0.24em] ${isSelected ? 'text-raga-gold' : 'text-raga-rust'}`}>
                    {variant.variantName}
                  </span>
                  <span className="mt-4 block font-display text-3xl font-semibold">{variant.priceLabel}</span>
                  <span className={`mt-4 flex items-center gap-2 text-sm font-bold ${isSelected ? 'text-raga-ivory/78' : 'text-raga-ink/62'}`}>
                    <Clock size={16} aria-hidden="true" /> {variant.duration}
                  </span>
                  <span className={`mt-2 flex items-center gap-2 text-sm font-bold ${isSelected ? 'text-raga-ivory/78' : 'text-raga-ink/62'}`}>
                    <Hotel size={16} aria-hidden="true" /> {variant.hotelCategory}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="grid gap-7 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-brand bg-raga-pine p-7 text-raga-ivory shadow-lifted">
            <h2 className="font-display text-4xl font-semibold">Included in {selectedVariant.variantName}</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-raga-ivory/84">
              {selectedVariant.inclusions.map((inclusion) => (
                <li key={inclusion} className="flex gap-3">
                  <Check className="mt-1 shrink-0 text-raga-gold" size={18} aria-hidden="true" />
                  {inclusion}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-brand border border-raga-ink/10 bg-raga-ivory p-7 shadow-card">
            <h2 className="font-display text-4xl font-semibold">Not included</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-raga-ink/68">
              {selectedVariant.exclusions.map((exclusion) => (
                <li key={exclusion} className="flex gap-3">
                  <X className="mt-1 shrink-0 text-raga-rust" size={18} aria-hidden="true" />
                  {exclusion}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-raga-rust">Trip moments</p>
              <h2 className="mt-4 font-display text-5xl font-semibold leading-none">Gallery</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-raga-ink/64">
              A visual preview of the destination style. Final hotel and activity images can be connected through a CMS later.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {item.gallery.map((image, index) => (
              <div
                key={image}
                className={`overflow-hidden rounded-brand shadow-card ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
              >
                <img
                  src={image}
                  alt={`${item.title} gallery ${index + 1}`}
                  className="h-full min-h-64 w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <h2 className="font-display text-5xl font-semibold leading-none">Highlights</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {item.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-brand border border-raga-ink/10 bg-raga-ivory p-6 text-sm font-bold leading-6 shadow-card"
              >
                <Sparkles className="mb-4 text-raga-gold" size={20} aria-hidden="true" />
                {highlight}
              </div>
            ))}
          </div>
        </section>

        <ItinerarySection itinerary={item.itinerary} />

        <section className="grid gap-7 py-20 lg:grid-cols-3">
          <div className="rounded-brand border border-raga-ink/10 bg-raga-ivory p-6 shadow-card">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-raga-rust">Best time</p>
            <p className="mt-4 text-lg font-bold text-raga-pine">{item.bestTimeToVisit}</p>
          </div>
          <div className="rounded-brand border border-raga-ink/10 bg-raga-ivory p-6 shadow-card">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-raga-rust">Suitable for</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.suitableFor.map((travelerType) => (
                <span key={travelerType} className="rounded-full bg-raga-linen px-3 py-1.5 text-xs font-bold text-raga-pine">
                  {travelerType}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-brand border border-raga-ink/10 bg-raga-ivory p-6 shadow-card">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-raga-rust">Good to know</p>
            <p className="mt-4 text-sm leading-7 text-raga-ink/68">
              Prices are indicative and depend on season, availability, flight timings, room category, and final inclusions.
            </p>
          </div>
        </section>

        <section className="rounded-brand bg-raga-ink p-7 text-raga-ivory shadow-lifted sm:p-10">
          <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-raga-gold">{selectedVariant.variantName} selected</p>
              <h2 className="mt-4 font-display text-5xl font-semibold leading-none">{selectedVariant.priceLabel}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-raga-ivory/70">
                Send this exact package and variant to RAGA International on WhatsApp for availability,
                final costing, and customization.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-raga-gold px-6 py-3 text-sm font-bold text-raga-ink shadow-card transition hover:-translate-y-0.5 hover:bg-raga-sand hover:shadow-lifted"
            >
              <MessageCircle className="mr-2" size={18} aria-hidden="true" />
              Enquire for this variant
            </a>
          </div>
        </section>

        {relatedPackages.length > 0 ? (
          <section className="py-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-raga-rust">Explore more</p>
              <h2 className="mt-4 font-display text-5xl font-semibold leading-none">Related packages</h2>
            </div>
            <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
              {relatedPackages.map((packageItem) => (
                <PackageCard key={packageItem.id} item={packageItem} />
              ))}
            </div>
          </section>
        ) : null}
      </Container>
      <ContactCtaSection />
    </>
  );
}
