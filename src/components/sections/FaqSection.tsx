import { faqs } from '@/data/faqs';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';

export function FaqSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading eyebrow="Good to know" title="Frequently asked questions" />
        <div className="mt-10 grid gap-4">
          {faqs.map((item) => (
            <details key={item.id} className="group rounded-lg border border-raga-ink/10 bg-white p-5">
              <summary className="cursor-pointer list-none font-semibold">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span className="text-raga-rust transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-6 text-raga-ink/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
