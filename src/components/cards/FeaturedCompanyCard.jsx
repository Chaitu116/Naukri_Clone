import { ArrowRight } from "lucide-react";
import Logo from "../ui/Logo";

/**
 * Larger branded showcase card for featured companies. Uses the company's
 * `accent` color as a soft background wash.
 */
const FeaturedCompanyCard = ({ company }) => {
  return (
    <article
      className="group flex h-full flex-col justify-between rounded-2xl border border-gray-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{ backgroundColor: company.accent }}
    >
      <div>
        <Logo
          src={company.logo}
          name={company.name}
          className="h-14 w-14 rounded-xl bg-white p-2 shadow-sm"
        />
        <h3 className="mt-4 text-lg font-bold text-ink">{company.name}</h3>
        <p className="mt-1 text-sm text-gray-600">{company.tagline}</p>
      </div>

      <button className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
        {company.openings} openings
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </button>
    </article>
  );
};

export default FeaturedCompanyCard;
