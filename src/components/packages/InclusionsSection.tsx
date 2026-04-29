type InclusionsSectionProps = {
  inclusions: string[];
  exclusions: string[];
};

export function InclusionsSection({ inclusions, exclusions }: InclusionsSectionProps) {
  return (
    <section className="grid gap-6 py-16 md:grid-cols-2">
      <div className="rounded-lg bg-raga-pine p-6 text-white">
        <h2 className="font-display text-3xl font-semibold">Included</h2>
        <ul className="mt-5 grid gap-3 text-sm leading-6 text-white/80">
          {inclusions.map((item) => (
            <li key={item}>+ {item}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg border border-raga-ink/10 bg-white p-6">
        <h2 className="font-display text-3xl font-semibold">Not included</h2>
        <ul className="mt-5 grid gap-3 text-sm leading-6 text-raga-ink/70">
          {exclusions.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
