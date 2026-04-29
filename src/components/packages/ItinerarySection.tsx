import type { ItineraryDay } from '@/types/package';
import { SectionHeading } from '@/components/common/SectionHeading';

type ItinerarySectionProps = {
  itinerary: ItineraryDay[];
};

export function ItinerarySection({ itinerary }: ItinerarySectionProps) {
  return (
    <section className="py-16">
      <SectionHeading eyebrow="Journey rhythm" title="Itinerary" />
      <div className="mt-10 grid gap-4">
        {itinerary.map((day) => (
          <article key={day.day} className="grid gap-4 border-l-2 border-raga-gold bg-white p-5 sm:grid-cols-[96px_1fr]">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-raga-rust">Day {day.day}</p>
            <div>
              <h3 className="font-display text-2xl font-semibold">{day.title}</h3>
              <p className="mt-2 text-sm leading-6 text-raga-ink/70">{day.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
