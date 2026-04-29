import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Container';

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-raga-ink text-white">
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=80"
        alt="Mountain road at sunrise"
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-raga-ink via-raga-ink/65 to-transparent" />
      <Container className="relative flex min-h-[calc(100vh-5rem)] items-center py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-raga-gold">
            Premium hosted travel
          </p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.95] sm:text-6xl lg:text-7xl">
            Journeys with atmosphere, comfort, and a real sense of place.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
            RAGA designs slow, thoughtful itineraries for travelers who care about where they stay,
            who guides them, and how each day feels.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/packages">
              Explore packages <ArrowRight className="ml-2" size={18} aria-hidden="true" />
            </Button>
            <Button href="/contact" variant="secondary">
              Plan privately
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
