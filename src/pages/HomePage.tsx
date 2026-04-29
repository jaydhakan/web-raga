import { Seo } from '@/components/common/Seo';
import { ContactCtaSection } from '@/components/sections/ContactCtaSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { FeaturedPackages } from '@/components/sections/FeaturedPackages';
import { HeroSection } from '@/components/sections/HeroSection';
import {
  CustomTripsCtaSection,
  PopularDestinationsSection,
  SocialProofSection,
  WhyChooseSection,
} from '@/components/sections/HomeExperienceSections';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { pageSeo } from '@/data/seo';

export function HomePage() {
  return (
    <>
      <Seo {...pageSeo.home} />
      <HeroSection />
      <FeaturedPackages />
      <WhyChooseSection />
      <PopularDestinationsSection />
      <CustomTripsCtaSection />
      <TestimonialsSection />
      <FaqSection preview />
      <SocialProofSection />
      <ContactCtaSection />
    </>
  );
}
