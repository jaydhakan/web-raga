import { ContactCtaSection } from '@/components/sections/ContactCtaSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { FeaturedPackages } from '@/components/sections/FeaturedPackages';
import { HeroSection } from '@/components/sections/HeroSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedPackages />
      <TestimonialsSection />
      <FaqSection />
      <ContactCtaSection />
    </>
  );
}
