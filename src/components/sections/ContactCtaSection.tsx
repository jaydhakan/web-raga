import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/constants/site';
import { Container } from '@/components/common/Container';

export function ContactCtaSection() {
  return (
    <section className="bg-raga-sand/70 py-20">
      <Container>
        <div className="grid gap-7 rounded-brand bg-raga-pine p-7 text-raga-ivory shadow-lifted sm:p-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-raga-gold">Start with a note</p>
            <h2 className="mt-4 font-display text-5xl font-semibold leading-[1.02]">Tell us where the next trip should feel like.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-raga-ivory/76">
              Share a destination, dates, or mood. We will turn it into a considered route and quote.
            </p>
          </div>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-raga-ivory px-6 py-3 text-sm font-bold text-raga-pine shadow-card transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lifted"
          >
            <MessageCircle className="mr-2" size={18} aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
