import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Container';

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-raga-ink text-white">
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=80"
        alt="Mountain road at sunrise"
        className="absolute inset-0 h-full w-full object-cover opacity-70 saturate-[0.9]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,26,23,0.92)_0%,rgba(20,26,23,0.72)_42%,rgba(20,26,23,0.28)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-raga-linen to-transparent" />
      <Container className="relative flex min-h-[calc(100vh-5rem)] items-center py-24">
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-raga-gold">
            Premium hosted travel
          </p>
          <h1 className="mt-6 font-display text-6xl font-semibold leading-[0.9] sm:text-7xl lg:text-8xl">
            Journeys with atmosphere, comfort, and a real sense of place.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/78 sm:text-xl sm:leading-9">
            RAGA designs slow, thoughtful itineraries for travelers who care about where they stay,
            who guides them, and how each day feels.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
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
