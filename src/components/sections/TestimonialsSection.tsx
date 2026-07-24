import { ExternalLink, Star } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { siteConfig } from '@/constants/site';
import { testimonials } from '@/data/testimonials';

const FEATURED_IDS = ['review-rajat-bohara', 'review-aryan-padalia', 'review-ronit-vangani', 'review-harsh-parikh'];

export function TestimonialsSection() {
  const featured = FEATURED_IDS.map((id) => testimonials.find((item) => item.id === id)).filter(
    (item): item is (typeof testimonials)[number] => Boolean(item),
  );
  const averageRating = testimonials.reduce((sum, item) => sum + item.rating, 0) / testimonials.length;

  return (
    <section className="section-shell border-y border-raga-ink/8 bg-raga-ivory">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <SectionHeading
            eyebrow="Google reviews"
            title="What travellers say, straight from Google."
            description="Real, verified reviews from couples, families, and groups who planned their holidays with RAGA International."
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
            <p className="mt-1 text-sm text-raga-ink/60">{siteConfig.address}</p>
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

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((item) => (
            <figure key={item.id} className="premium-card flex flex-col p-6">
              <div className="mb-4 flex gap-1 text-raga-gold" aria-label={`${item.rating} star review`}>
                {Array.from({ length: item.rating }).map((_, index) => (
                  <Star key={index} size={15} fill="currentColor" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="flex-1 text-sm leading-7 text-raga-ink/74">&ldquo;{item.quote}&rdquo;</blockquote>
              <figcaption className="mt-5 border-t border-raga-ink/10 pt-4">
                <p className="text-sm font-bold">{item.name}</p>
                <p className="text-xs text-raga-ink/52">
                  {item.reviewerMeta} · {item.timeAgo}
                  {item.destination ? ` · ${item.destination}` : ''}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/reviews" variant="secondary">
            Read All Reviews
          </Button>
        </div>
      </Container>
    </section>
  );
}
