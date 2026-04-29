type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-raga-rust">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-4xl font-semibold leading-tight text-raga-ink sm:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-7 text-raga-ink/70">{description}</p> : null}
    </div>
  );
}
