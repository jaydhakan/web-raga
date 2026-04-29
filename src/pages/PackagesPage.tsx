import { Search, SlidersHorizontal, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Seo } from '@/components/common/Seo';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { PackageCard } from '@/components/packages/PackageCard';
import { travelPackages } from '@/data/packages';
import { pageSeo } from '@/data/seo';
import { getPackageCategories, getTravelKinds } from '@/utils/packageUtils';

const travelTypeFilters = ['Domestic', 'International', 'Group', 'Honeymoon'] as const;

export function PackagesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTravelType, setActiveTravelType] = useState('All');

  const categories = useMemo(() => ['All', ...getPackageCategories()], []);
  const variantCount = useMemo(
    () => travelPackages.reduce((total, item) => total + item.variants.length, 0),
    [],
  );

  const filteredPackages = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return travelPackages.filter((item) => {
      const packageText = [
        item.title,
        item.destination,
        item.country,
        item.category,
        item.packageType,
        item.shortDescription,
        item.highlights.join(' '),
        item.suitableFor.join(' '),
      ]
        .join(' ')
        .toLowerCase();

      const matchesSearch = normalizedSearch.length === 0 || packageText.includes(normalizedSearch);
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesTravelType =
        activeTravelType === 'All' || getTravelKinds(item).includes(activeTravelType);

      return matchesSearch && matchesCategory && matchesTravelType;
    });
  }, [activeCategory, activeTravelType, searchTerm]);

  const hasActiveFilters = searchTerm.length > 0 || activeCategory !== 'All' || activeTravelType !== 'All';

  const clearFilters = () => {
    setSearchTerm('');
    setActiveCategory('All');
    setActiveTravelType('All');
  };

  return (
    <section className="section-shell">
      <Seo {...pageSeo.packages} />
      <Container>
        <div className="reveal-section grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-raga-rust">RAGA International</p>
            <h1 className="mt-5 font-display text-6xl font-semibold leading-[0.92] text-raga-ink sm:text-7xl">
              Compare packages. Check availability. Get the best price.
            </h1>
            <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-raga-ink/64">
              Choose a destination, compare variants, then send the exact package to WhatsApp for a free consultation.
            </p>
          </div>
          <div className="premium-panel p-6">
            <p className="text-base leading-8 text-raga-ink/70">
              Pricing is variant-wise and inclusion-led, so you can compare comfort levels before asking
              RAGA International to check availability for your dates.
            </p>
            <p className="mt-3 text-sm font-bold text-raga-rust">
              Popular season note: book early for school holidays, long weekends, and cruise cabins.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm font-bold text-raga-pine sm:grid-cols-4">
              <div>
                <p className="font-display text-3xl text-raga-ink">{travelPackages.length}</p>
                Trips
              </div>
              <div>
                <p className="font-display text-3xl text-raga-ink">{variantCount}</p>
                Price plans
              </div>
              <div>
                <p className="font-display text-3xl text-raga-ink">6</p>
                Destinations
              </div>
              <div>
                <p className="font-display text-3xl text-raga-ink">24/7</p>
                Support
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-premium border border-raga-ink/10 bg-raga-ivory p-5 shadow-lifted">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <label className="relative block">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-raga-ink/42"
                size={20}
                aria-hidden="true"
              />
              <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="focus-ring min-h-14 w-full rounded-full border border-raga-ink/10 bg-white px-12 text-sm font-semibold text-raga-ink outline-none transition placeholder:text-raga-ink/38 focus:border-raga-gold focus:shadow-card"
                placeholder="Search Dubai, Bali, cruise, honeymoon…"
                type="search"
                name="package-search"
                autoComplete="off"
              />
            </label>

            <div className="flex items-center gap-3 rounded-full bg-raga-linen px-4 py-3 text-sm font-bold text-raga-ink/70">
              <SlidersHorizontal size={18} aria-hidden="true" />
              {filteredPackages.length} packages found
            </div>
          </div>

          <div className="mt-5 border-t border-raga-ink/10 pt-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-raga-ink/45">Category</p>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`focus-ring min-h-11 cursor-pointer rounded-full border px-5 py-2.5 text-sm font-bold transition ${
                    activeCategory === category
                      ? 'border-raga-pine bg-raga-pine text-raga-ivory shadow-card'
                      : 'border-raga-ink/10 bg-white/75 text-raga-ink/68 hover:border-raga-gold hover:text-raga-pine'
                  }`}
                  type="button"
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 border-t border-raga-ink/10 pt-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-raga-ink/45">Trip style</p>
            <div className="flex flex-wrap gap-3">
              <button
                className={`focus-ring min-h-11 cursor-pointer rounded-full border px-5 py-2.5 text-sm font-bold transition ${
                  activeTravelType === 'All'
                    ? 'border-raga-pine bg-raga-pine text-raga-ivory shadow-card'
                    : 'border-raga-ink/10 bg-white/75 text-raga-ink/68 hover:border-raga-gold hover:text-raga-pine'
                }`}
                type="button"
                aria-pressed={activeTravelType === 'All'}
                onClick={() => setActiveTravelType('All')}
              >
                All
              </button>
              {travelTypeFilters.map((filter) => (
                <button
                  key={filter}
                  className={`focus-ring min-h-11 cursor-pointer rounded-full border px-5 py-2.5 text-sm font-bold transition ${
                    activeTravelType === filter
                      ? 'border-raga-pine bg-raga-pine text-raga-ivory shadow-card'
                      : 'border-raga-ink/10 bg-white/75 text-raga-ink/68 hover:border-raga-gold hover:text-raga-pine'
                  }`}
                  type="button"
                  aria-pressed={activeTravelType === filter}
                  onClick={() => setActiveTravelType(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {hasActiveFilters ? (
            <button
              className="focus-ring mt-5 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full px-2 text-sm font-bold text-raga-rust transition hover:text-raga-ink"
              type="button"
              onClick={clearFilters}
            >
              <X size={16} aria-hidden="true" />
              Clear filters
            </button>
          ) : null}
        </div>

        {filteredPackages.length > 0 ? (
          <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {filteredPackages.map((item) => (
              <PackageCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-premium border border-dashed border-raga-ink/18 bg-raga-ivory p-10 text-center shadow-card">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-raga-rust">No trips found</p>
            <h2 className="mt-4 font-display text-5xl font-semibold">Try a wider search.</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-raga-ink/68">
              We could not match that exact combination. Clear filters or search for a destination like
              Dubai, Bali, Singapore, Thailand, or cruise.
            </p>
            <div className="mt-7">
              <Button type="button" onClick={clearFilters}>
                Reset Filters
              </Button>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
