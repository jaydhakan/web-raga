import { ExternalLink, Star } from 'lucide-react';
import { Seo } from '@/components/common/Seo';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ContactCtaSection } from '@/components/sections/ContactCtaSection';
import { siteConfig } from '@/constants/site';
import { pageSeo } from '@/data/seo';
import { testimonials } from '@/data/testimonials';

export function ReviewsPage() {
  const averageRating = testimonials.reduce((sum, item) => sum + item.rating, 0) / testimonials.length;

  return (
    <>
      <Seo {...pageSeo.reviews} />
      <section className="section-shell">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <SectionHeading
              eyebrow="Google reviews"
              title="What travellers say, straight from Google."
              description="Every review below is real and publicly visible on our Google Business Profile — nothing written for this page."
            />
            <div className="rounded-premium border border-raga-ink/8 bg-raga-linen p-6 shadow-card">
              <div className="flex items-center gap-1 text-raga-gold" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="mt-3 font-display text-3xl font-semibold text-raga-ink">
                {averageRating.toFixed(1)}{' '}
                <span className="text-base font-sans font-bold text-raga-ink/60">
                  · {testimonials.length} reviews
                </span>
              </p>
              <p className="mt-2 text-sm font-bold text-raga-pine">{siteConfig.name}</p>
              <p className="text-sm text-raga-ink/60">{siteConfig.address}</p>
              <a
                href={siteConfig.googleReviewsUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring mt-4 inline-flex items-center gap-1.5 rounded-sm text-sm font-extrabold text-raga-rust transition hover:text-raga-ink"
              >
                View on Google <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <figure key={item.id} className="premium-card flex flex-col p-7">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex gap-1 text-raga-gold" aria-label={`${item.rating} star review`}>
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <Star key={index} size={15} fill="currentColor" aria-hidden="true" />
                    ))}
                  </div>
                  {item.destination ? (
                    <span className="rounded-full bg-raga-linen px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-raga-pine">
                      {item.destination}
                    </span>
                  ) : null}
                </div>

                <blockquote className="text-sm leading-7 text-raga-ink/74">&ldquo;{item.quote}&rdquo;</blockquote>
                {item.translatedFrom ? (
                  <p className="mt-2 text-xs italic text-raga-ink/42">Translated from {item.translatedFrom} by Google</p>
                ) : null}

                <figcaption className="mt-5 border-t border-raga-ink/10 pt-4">
                  <p className="text-sm font-bold">{item.name}</p>
                  <p className="text-xs text-raga-ink/52">
                    {item.reviewerMeta} · {item.timeAgo}
                  </p>
                </figcaption>

                {item.ownerReply ? (
                  <div className="mt-5 rounded-brand border border-raga-pine/15 bg-raga-pine/5 p-4">
                    <p className="text-xs font-extrabold uppercase tracking-[0.1em] text-raga-pine">
                      Response from the owner
                    </p>
                    <p className="mt-2 text-sm leading-6 text-raga-ink/72">{item.ownerReply.text}</p>
                    <p className="mt-2 text-xs font-semibold text-raga-ink/48">— {item.ownerReply.author}</p>
                  </div>
                ) : null}
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <ContactCtaSection
        eyebrow="Ready to be our next review?"
        title="Let's plan a trip worth writing home about."
        description="Share your destination, travel dates, and group size on WhatsApp and our team will help you plan the right package."
        ctaLabel="Plan My Trip"
      />
    </>
  );
}
