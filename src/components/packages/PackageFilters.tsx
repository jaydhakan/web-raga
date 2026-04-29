import { getPackageCategories } from '@/utils/packageUtils';

export function PackageFilters() {
  const categories = getPackageCategories();

  return (
    <div className="flex flex-wrap gap-3 rounded-brand border border-raga-ink/10 bg-raga-ivory/90 p-4 shadow-card">
      <button className="rounded-full bg-raga-pine px-5 py-2.5 text-sm font-bold text-raga-ivory shadow-sm" type="button">
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className="rounded-full border border-raga-ink/12 bg-white/70 px-5 py-2.5 text-sm font-bold text-raga-ink/66 transition hover:border-raga-gold hover:text-raga-pine"
          type="button"
        >
          {category}
        </button>
      ))}
      {/* TODO: Wire filters to URL search params when package data becomes dynamic. */}
    </div>
  );
}
