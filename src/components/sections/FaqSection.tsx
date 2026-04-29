import { faqs } from '@/data/faqs';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';

type FaqSectionProps = {
  preview?: boolean;
};

export function FaqSection({ preview = false }: FaqSectionProps) {
  const visibleFaqs = preview ? faqs.slice(0, 3) : faqs;

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Before you book"
          title={preview ? 'Quick answers for new travellers' : 'Frequently asked questions'}
          description="Straight answers on customization, pricing, group travel, and how the enquiry process works."
        />
        <div className="mt-12 grid gap-4">
          {visibleFaqs.map((item) => (
            <details key={item.id} className="group rounded-brand border border-raga-ink/10 bg-raga-ivory p-6 shadow-card">
              <summary className="cursor-pointer list-none font-bold">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span className="text-xl text-raga-rust transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-raga-ink/68">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
