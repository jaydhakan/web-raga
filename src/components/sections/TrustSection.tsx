import { MessageCircle } from 'lucide-react';
import { Container } from '@/components/common/Container';
import trustPoster from '@/assets/images/gallery/trust-boarding-pass-poster.jpg';
import trustVideo from '@/assets/videos/trust-boarding-pass.mp4';
import { founderStats } from '@/data/founder';
import { usePausedOnReducedMotion } from '@/hooks/usePausedOnReducedMotion';
import { getGeneralTripPlanningWhatsAppUrl } from '@/utils/whatsapp';

export function TrustSection() {
  const videoRef = usePausedOnReducedMotion();

  return (
    <section className="section-shell bg-raga-ivory">
      <Container className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
        <div className="reveal-section mx-auto w-full max-w-[280px]">
          <div className="overflow-hidden rounded-premium border border-raga-ink/10 shadow-lifted">
            <video
              ref={videoRef}
              className="aspect-[9/16] w-full object-cover"
              poster={trustPoster}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
            >
              <source src={trustVideo} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="reveal-section">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-raga-rust">Built on trust</p>
          <h2 className="mt-4 font-display text-[2.7rem] font-semibold leading-[0.96] text-raga-ink sm:text-5xl lg:text-6xl">
            10,000+ Guests. Thousands of Memories.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-raga-ink/66 sm:text-lg">
            From your first enquiry to your return home, we&apos;re with you every step of the way.
          </p>

          <div className="mt-9 grid grid-cols-3 gap-3 rounded-premium border border-raga-ink/8 bg-raga-linen p-5 shadow-card sm:max-w-lg">
            {founderStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-semibold text-raga-pine sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-raga-ink/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <a
            href={getGeneralTripPlanningWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-raga-pine px-6 py-3 text-sm font-extrabold text-raga-ivory shadow-card transition duration-300 hover:-translate-y-0.5 hover:bg-raga-forest hover:shadow-glow"
          >
            <MessageCircle className="mr-2" size={18} aria-hidden="true" />
            Plan My Trip
          </a>
        </div>
      </Container>
    </section>
  );
}
