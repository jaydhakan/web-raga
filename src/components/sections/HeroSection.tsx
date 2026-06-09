import { ArrowRight, Headphones, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Container';
import { getGeneralTripPlanningWhatsAppUrl } from '@/utils/whatsapp';

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-raga-ink text-white">
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=75"
        alt="Scenic international holiday route at sunrise"
        className="absolute inset-0 h-full w-full object-cover opacity-75"
        width="1600"
        height="1067"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,23,20,0.94)_0%,rgba(17,23,20,0.72)_45%,rgba(17,23,20,0.30)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(200,154,76,0.20),transparent_24rem)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-raga-linen to-transparent" />
      <Container className="relative flex min-h-[calc(100vh-5rem)] items-center py-24">
        <div className="reveal-section max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-raga-gold">
            International holidays for couples, families, and groups
          </p>
          <h1 className="mt-6 font-display text-6xl font-semibold leading-[0.9] sm:text-7xl lg:text-8xl">
            Get a clear travel plan before you book.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/78 sm:text-xl sm:leading-9">
            RAGA International curates Dubai, Bali, Thailand, Singapore, Malaysia, and cruise holidays with
            package variants, transparent inclusions, and WhatsApp-first planning support.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-white/82">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/14 px-3 py-2">
              <ShieldCheck size={14} aria-hidden="true" /> Verified travel partner
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/14 px-3 py-2">
              <Headphones size={14} aria-hidden="true" /> 24/7 support
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/14 px-3 py-2">
              <Sparkles size={14} aria-hidden="true" /> Custom itineraries
            </span>
          </div>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/packages">
              Check Package Prices <ArrowRight className="ml-2" size={18} aria-hidden="true" />
            </Button>
            <a
              href={getGeneralTripPlanningWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-raga-ivory/95 px-6 py-3 text-sm font-bold text-raga-pine shadow-card transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lifted"
            >
              <MessageCircle className="mr-2" size={18} aria-hidden="true" />
              Plan My Trip
            </a>
          </div>
          <p className="mt-4 text-sm font-semibold text-white/68">
            Free consultation. Transparent inclusions before payment. Best time to book: before peak-season rooms fill up.
          </p>
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/18 pt-6 text-sm font-bold text-white/76 sm:gap-4">
            <span className="rounded-brand bg-white/10 p-3"><strong className="block font-display text-3xl text-white">6</strong> curated routes</span>
            <span className="rounded-brand bg-white/10 p-3"><strong className="block font-display text-3xl text-white">20+</strong> price variants</span>
            <span className="rounded-brand bg-white/10 p-3"><strong className="block font-display text-3xl text-white">24/7</strong> trip support</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
