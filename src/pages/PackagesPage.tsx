import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { PackageCard } from '@/components/packages/PackageCard';
import { PackageFilters } from '@/components/packages/PackageFilters';
import { travelPackages } from '@/data/packages';

export function PackagesPage() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          eyebrow="All journeys"
          title="Packages"
          description="Browse static package cards. Later, this page can read filters from search params and load results from a CMS or API."
        />
        <div className="mt-8">
          <PackageFilters />
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {travelPackages.map((item) => (
            <PackageCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
