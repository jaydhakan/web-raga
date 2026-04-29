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
        <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.3em] text-raga-rust">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-[2.7rem] font-semibold leading-[0.96] text-raga-ink sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? <p className="mt-5 text-base leading-8 text-raga-ink/66 sm:text-lg">{description}</p> : null}
    </div>
  );
}
