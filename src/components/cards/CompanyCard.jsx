import { ArrowUpRight } from "lucide-react";
import Badge from "../ui/Badge";
import Rating from "../ui/Rating";
import Logo from "../ui/Logo";

/**
 * Card for a top-hiring company. Reusable across any company grid.
 */
const CompanyCard = ({ company }) => {
  return (
    <article className="group flex h-full flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg">
      <Logo
        src={company.logo}
        name={company.name}
        className="h-16 w-16 rounded-xl border border-gray-100 p-2"
      />

      <h3 className="mt-4 text-base font-semibold text-ink">{company.name}</h3>

      <Rating value={company.rating} reviews={company.reviews} className="mt-1" />

      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {company.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <button className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand transition-colors group-hover:text-brand-dark">
        {company.openings} open jobs
        <ArrowUpRight size={15} />
      </button>
    </article>
  );
};

export default CompanyCard;
