import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Container';
import { getGeneralTripPlanningWhatsAppUrl } from '@/utils/whatsapp';

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-raga-ink text-white">
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=80"
        alt="Scenic international holiday route at sunrise"
        className="absolute inset-0 h-full w-full object-cover opacity-70 saturate-[0.9]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,26,23,0.92)_0%,rgba(20,26,23,0.72)_42%,rgba(20,26,23,0.28)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-raga-linen to-transparent" />
      <Container className="relative flex min-h-[calc(100vh-5rem)] items-center py-24">
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-raga-gold">
            RAGA International holidays
          </p>
          <h1 className="mt-6 font-display text-6xl font-semibold leading-[0.9] sm:text-7xl lg:text-8xl">
            International trips planned with taste, clarity, and care.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/78 sm:text-xl sm:leading-9">
            Explore Dubai, Bali, Thailand, Singapore, Malaysia, and cruise holidays with transparent
            package variants, hotel options, and WhatsApp-first travel support.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/packages">
              Explore packages <ArrowRight className="ml-2" size={18} aria-hidden="true" />
            </Button>
            <a
              href={getGeneralTripPlanningWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-raga-ivory/95 px-6 py-3 text-sm font-bold text-raga-pine shadow-card transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lifted"
            >
              <MessageCircle className="mr-2" size={18} aria-hidden="true" />
              Plan on WhatsApp
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/18 pt-6 text-sm font-bold text-white/76">
            <span><strong className="block font-display text-3xl text-white">6</strong> curated routes</span>
            <span><strong className="block font-display text-3xl text-white">20+</strong> price variants</span>
            <span><strong className="block font-display text-3xl text-white">24/7</strong> trip support</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
