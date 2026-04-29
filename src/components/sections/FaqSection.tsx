import { faqs } from '@/data/faqs';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';

type FaqSectionProps = {
  preview?: boolean;
};

export function FaqSection({ preview = false }: FaqSectionProps) {
  const visibleFaqs = preview ? faqs.slice(0, 3) : faqs;

  return (
    <section className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="Before you book"
          title={preview ? 'Quick answers for new travellers' : 'Frequently asked questions'}
          description="Straight answers on customization, pricing, group travel, and how the enquiry process works."
        />
        <div className="mt-12 grid gap-4">
          {visibleFaqs.map((item) => (
            <details key={item.id} className="group rounded-premium border border-raga-ink/10 bg-raga-ivory p-6 shadow-card transition duration-300 open:border-raga-gold/40 open:shadow-lifted">
              <summary className="cursor-pointer list-none font-bold">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span className="text-xl text-raga-rust transition duration-300 group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-4 grid text-sm leading-7 text-raga-ink/68 transition-all duration-300">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
