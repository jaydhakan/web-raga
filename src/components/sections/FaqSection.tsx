import { faqs } from '@/data/faqs';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';

export function FaqSection() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading eyebrow="Good to know" title="Frequently asked questions" />
        <div className="mt-12 grid gap-4">
          {faqs.map((item) => (
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
