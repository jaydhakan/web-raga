import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { PackageCard } from '@/components/packages/PackageCard';
import { getFeaturedPackages } from '@/utils/packageUtils';

export function FeaturedPackages() {
  const featuredPackages = getFeaturedPackages();

  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Signature escapes"
            title="Featured packages"
            description="Static package data for v1, shaped so a CMS or API can later provide the same contract."
          />
        </div>
        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {featuredPackages.map((item) => (
            <PackageCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
