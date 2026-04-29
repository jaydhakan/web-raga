import type { ItineraryDay } from '@/types/package';
import { SectionHeading } from '@/components/common/SectionHeading';

type ItinerarySectionProps = {
  itinerary: ItineraryDay[];
};

export function ItinerarySection({ itinerary }: ItinerarySectionProps) {
  return (
    <section className="section-shell">
      <SectionHeading eyebrow="Journey rhythm" title="Itinerary" />
      <div className="mt-12 grid gap-5">
        {itinerary.map((day) => (
          <article key={day.day} className="premium-card grid gap-5 border-l-4 border-l-raga-gold p-6 sm:grid-cols-[104px_1fr]">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-raga-rust">Day {day.day}</p>
            <div>
              <h3 className="font-display text-3xl font-semibold leading-tight">{day.title}</h3>
              <p className="mt-3 text-sm leading-7 text-raga-ink/68">{day.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
