import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { PackageCard } from '@/components/packages/PackageCard';
import { getFeaturedPackages } from '@/utils/packageUtils';

export function FeaturedPackages() {
  const featuredPackages = getFeaturedPackages();

  return (
    <section className="section-shell reveal-section">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Best-selling international holidays"
            title="Featured packages"
            description="Handpicked routes with clear budget, standard, premium, and luxury options so you can compare comfort levels before enquiring."
          />
        </div>
        <div className="mt-12 grid items-stretch gap-7 md:grid-cols-3">
          {featuredPackages.map((item) => (
            <PackageCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
