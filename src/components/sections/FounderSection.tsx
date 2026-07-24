import { Container } from '@/components/common/Container';
import { founderContent, founderStats } from '@/data/founder';

export function FounderSection() {
  return (
    <section className="section-shell bg-raga-pine text-raga-ivory">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="reveal-section mx-auto w-full max-w-sm lg:mx-0">
          <div className="overflow-hidden rounded-premium border border-raga-gold/25 shadow-lifted">
            <img
              src={founderContent.portrait}
              alt={`${founderContent.name}, ${founderContent.role}`}
              className="aspect-[4/5] w-full object-cover"
              width="632"
              height="790"
              loading="lazy"
            />
          </div>
        </div>

        <div className="reveal-section">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-raga-gold">{founderContent.eyebrow}</p>
          <blockquote className="mt-6 font-display text-3xl font-medium leading-[1.25] sm:text-4xl">
            &ldquo;{founderContent.quote}&rdquo;
          </blockquote>
          <p className="mt-7 text-base font-bold">{founderContent.name}</p>
          <p className="text-sm text-raga-ivory/64">
            {founderContent.role} · {founderContent.location}
          </p>
          <p className="mt-6 max-w-xl text-sm leading-7 text-raga-ivory/76">{founderContent.bio}</p>

          <div className="mt-9 grid grid-cols-3 gap-3 border-t border-raga-ivory/16 pt-7">
            {founderStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-semibold text-raga-gold sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-raga-ivory/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm font-semibold text-raga-ivory/60">— {founderContent.signature}</p>
        </div>
      </Container>
    </section>
  );
}
