import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ContactCtaSection } from '@/components/sections/ContactCtaSection';

export function AboutPage() {
  return (
    <>
      <section className="py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="About RAGA"
            title="Premium travel, grounded in local intelligence."
            description="RAGA is built for travelers who want expert planning, elevated stays, and richer context without turning the journey into a checklist."
          />
          <div className="space-y-5 rounded-brand border border-raga-ink/8 bg-raga-ivory p-7 text-base leading-8 text-raga-ink/68 shadow-card sm:p-9">
            <p>
              The brand direction is refined, warm, and adventurous: editorial imagery, calm layouts,
              considered typography, and proof-led content.
            </p>
            <p>
              TODO: Replace this static story with founder notes, credentials, operating regions, and
              trust signals when final business content is ready.
            </p>
          </div>
        </Container>
      </section>
      <ContactCtaSection />
    </>
  );
}
