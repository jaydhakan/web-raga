import { getPackageCategories } from '@/utils/packageUtils';

export function PackageFilters() {
  const categories = getPackageCategories();

  return (
    <div className="flex flex-wrap gap-3 rounded-brand border border-raga-ink/10 bg-raga-ivory/90 p-4 shadow-card">
      <button className="focus-ring min-h-11 cursor-pointer rounded-full bg-raga-pine px-5 py-2.5 text-sm font-bold text-raga-ivory shadow-sm" type="button" aria-pressed="true">
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className="focus-ring min-h-11 cursor-pointer rounded-full border border-raga-ink/12 bg-white/70 px-5 py-2.5 text-sm font-bold text-raga-ink/66 transition hover:border-raga-gold hover:text-raga-pine"
          type="button"
          aria-pressed="false"
        >
          {category}
        </button>
      ))}
      {/* TODO: Wire filters to URL search params when package data becomes dynamic. */}
    </div>
  );
}
