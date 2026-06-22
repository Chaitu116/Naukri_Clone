import { ChevronRight } from "lucide-react";

/**
 * Card for a job category. `category.icon` is a lucide-react component.
 */
const CategoryCard = ({ category }) => {
  const Icon = category.icon;

  return (
    <button className="group flex w-full items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand transition-colors group-hover:bg-brand group-hover:text-white">
        {Icon && <Icon size={22} />}
      </span>

      <span className="min-w-0 flex-1">
        <span className="block truncate font-semibold text-ink">
          {category.name}
        </span>
        <span className="block text-sm text-muted">
          {category.openings} jobs
        </span>
      </span>

      <ChevronRight
        size={18}
        className="shrink-0 text-gray-300 transition-transform group-hover:translate-x-1 group-hover:text-brand"
      />
    </button>
  );
};

export default CategoryCard;
