type InclusionsSectionProps = {
  inclusions: string[];
  exclusions: string[];
};

export function InclusionsSection({ inclusions, exclusions }: InclusionsSectionProps) {
  return (
    <section className="grid gap-7 py-20 md:grid-cols-2">
      <div className="rounded-premium bg-raga-pine p-7 text-raga-ivory shadow-lifted">
        <h2 className="font-display text-4xl font-semibold">Included</h2>
        <ul className="mt-6 grid gap-3 text-sm leading-7 text-raga-ivory/82">
          {inclusions.map((item) => (
            <li key={item}>+ {item}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-premium border border-raga-ink/10 bg-raga-ivory p-7 shadow-card">
        <h2 className="font-display text-4xl font-semibold">Not included</h2>
        <ul className="mt-6 grid gap-3 text-sm leading-7 text-raga-ink/68">
          {exclusions.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
