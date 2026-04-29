import { getPackageCategories } from '@/utils/packageUtils';

export function PackageFilters() {
  const categories = getPackageCategories();

  return (
    <div className="flex flex-wrap gap-3 rounded-lg border border-raga-ink/10 bg-white p-4">
      <button className="rounded-full bg-raga-pine px-4 py-2 text-sm font-semibold text-white" type="button">
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className="rounded-full border border-raga-ink/15 px-4 py-2 text-sm font-semibold text-raga-ink/70 transition hover:border-raga-pine hover:text-raga-pine"
          type="button"
        >
          {category}
        </button>
      ))}
      {/* TODO: Wire filters to URL search params when package data becomes dynamic. */}
    </div>
  );
}
