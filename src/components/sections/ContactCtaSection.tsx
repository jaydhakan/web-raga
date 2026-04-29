import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/constants/site';
import { Container } from '@/components/common/Container';

export function ContactCtaSection() {
  return (
    <section className="bg-raga-sand py-16">
      <Container>
        <div className="grid gap-6 rounded-lg bg-raga-pine p-6 text-white sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-raga-gold">Start with a note</p>
            <h2 className="mt-3 font-display text-4xl font-semibold">Tell us where the next trip should feel like.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75">
              Share a destination, dates, or mood. We will turn it into a considered route and quote.
            </p>
          </div>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold text-raga-pine transition hover:bg-raga-linen"
          >
            <MessageCircle className="mr-2" size={18} aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
