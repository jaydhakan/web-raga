import { Seo } from '@/components/common/Seo';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ContactCtaSection } from '@/components/sections/ContactCtaSection';
import { pageSeo } from '@/data/seo';

export function AboutPage() {
  return (
    <>
      <Seo {...pageSeo.about} />
      <section className="py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="About RAGA International"
            title="International travel planning with a human point of view."
            description="RAGA International helps travellers choose the right destination, hotel tier, sightseeing pace, and package variant without feeling overwhelmed."
          />
          <div className="space-y-5 rounded-brand border border-raga-ink/8 bg-raga-ivory p-7 text-base leading-8 text-raga-ink/68 shadow-card sm:p-9">
            <p>
              Our approach is simple: start with proven international routes, explain the real differences
              between budget and premium options, then customize the journey around your dates, group size,
              comfort level, and travel style.
            </p>
            <p>
              Whether it is a Bali honeymoon, a Dubai family break, a Singapore cruise, or a Thailand group
              trip, the goal is to make every step clear before you book and supported while you travel.
            </p>
          </div>
        </Container>
      </section>
      <ContactCtaSection />
    </>
  );
}
