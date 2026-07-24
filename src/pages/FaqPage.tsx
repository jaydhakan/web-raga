import { Seo } from '@/components/common/Seo';
import { ContactCtaSection } from '@/components/sections/ContactCtaSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { pageSeo } from '@/data/seo';

export function FaqPage() {
  return (
    <>
      <Seo {...pageSeo.faq} />
      <FaqSection />
      <ContactCtaSection
        eyebrow="Still have questions?"
        title="Talk to a real travel expert, not a chatbot."
        description="Share your destination, travel dates, and group size on WhatsApp and our team will help you plan the right package."
        ctaLabel="Plan My Trip"
      />
    </>
  );
}
