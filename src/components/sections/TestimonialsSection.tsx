import { Headphones, ShieldCheck, Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';

export function TestimonialsSection() {
  return (
    <section className="section-shell border-y border-raga-ink/8 bg-raga-ivory">
      <Container>
        <SectionHeading
          eyebrow="Traveler confidence"
          title="Proof points for confident booking."
          description="Placeholder testimonials and trust markers now; ready to replace with verified customer reviews, Google ratings, screenshots, or tagged social stories."
        />
        <div className="mt-10 grid gap-4 rounded-brand border border-raga-ink/8 bg-raga-linen p-5 shadow-card sm:grid-cols-3">
          {[
            ['Clear package guidance', ShieldCheck],
            ['Travel-day assistance', Headphones],
            ['Review-ready experiences', Star],
          ].map(([label, Icon]) => (
            <div key={label as string} className="flex items-center gap-3 text-sm font-bold text-raga-pine">
              <Icon size={18} className="text-raga-gold" aria-hidden="true" />
              {label as string}
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.id} className="premium-card p-7">
              <div className="mb-5 flex gap-1 text-raga-gold" aria-label="Five star placeholder review">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="text-base leading-8 text-raga-ink/74">"{item.quote}"</blockquote>
              <figcaption className="mt-6 border-t border-raga-ink/10 pt-5">
                <p className="font-bold">{item.name}</p>
                <p className="text-sm text-raga-ink/52">{item.location}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
