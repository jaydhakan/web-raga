import { testimonials } from '@/data/testimonials';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';

export function TestimonialsSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionHeading
          eyebrow="Guest notes"
          title="Built on trust and detail"
          description="Travelers should feel the brand is careful, responsive, and experienced before they ever enquire."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.id} className="rounded-lg border border-raga-ink/10 bg-raga-linen p-6">
              <blockquote className="text-sm leading-7 text-raga-ink/75">"{item.quote}"</blockquote>
              <figcaption className="mt-5">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-raga-ink/55">{item.location}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
