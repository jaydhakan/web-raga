import { testimonials } from '@/data/testimonials';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';

export function TestimonialsSection() {
  return (
    <section className="border-y border-raga-ink/8 bg-raga-ivory py-24">
      <Container>
        <SectionHeading
          eyebrow="Guest notes"
          title="Built on trust and detail"
          description="Travelers should feel the brand is careful, responsive, and experienced before they ever enquire."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.id} className="rounded-brand border border-raga-ink/8 bg-raga-linen p-7 shadow-card">
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
