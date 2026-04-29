import { MessageCircle } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { getGeneralTripPlanningWhatsAppUrl } from '@/utils/whatsapp';

export function ContactCtaSection() {
  return (
    <section className="bg-raga-sand/70 py-20">
      <Container>
        <div className="grid gap-7 rounded-brand bg-raga-pine p-7 text-raga-ivory shadow-lifted sm:p-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-raga-gold">Fastest way to start</p>
            <h2 className="mt-4 font-display text-5xl font-semibold leading-[1.02]">Send your travel plan on WhatsApp.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-raga-ivory/76">
              Tell us your destination, travel month, group size, and preferred budget. RAGA International will suggest the right package variant and next steps.
            </p>
          </div>
          <a
            href={getGeneralTripPlanningWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-raga-ivory px-6 py-3 text-sm font-bold text-raga-pine shadow-card transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lifted"
          >
            <MessageCircle className="mr-2" size={18} aria-hidden="true" />
            Start enquiry
          </a>
        </div>
      </Container>
    </section>
  );
}
