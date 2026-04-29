import { MessageCircle } from 'lucide-react';
import { getGeneralTripPlanningWhatsAppUrl } from '@/utils/whatsapp';

export function FloatingWhatsAppButton() {
  return (
    <a
      href={getGeneralTripPlanningWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex min-h-14 items-center gap-3 rounded-full bg-raga-pine px-5 py-3 text-sm font-extrabold text-raga-ivory shadow-glow transition duration-300 hover:-translate-y-1 hover:bg-raga-forest focus:outline-none focus-visible:ring-2 focus-visible:ring-raga-gold focus-visible:ring-offset-2 focus-visible:ring-offset-raga-linen"
      aria-label="Plan a trip with RAGA International on WhatsApp"
    >
      <span className="inline-flex size-9 items-center justify-center rounded-full bg-raga-gold text-raga-ink animate-soft-pulse">
        <MessageCircle size={19} aria-hidden="true" />
      </span>
      <span className="hidden sm:inline">Plan My Trip</span>
    </a>
  );
}
