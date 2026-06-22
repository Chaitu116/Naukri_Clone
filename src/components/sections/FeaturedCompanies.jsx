import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import FeaturedCompanyCard from "../cards/FeaturedCompanyCard";
import { featuredCompanies } from "../../data/featuredCompanies";

/**
 * Featured companies — branded showcase strip.
 * 1 / 2 / 4 columns from mobile up to desktop.
 */
const FeaturedCompanies = () => {
  return (
    <section className="bg-slate-50 py-14 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Spotlight"
          title="Featured companies"
          subtitle="Explore standout workplaces that are growing their teams right now."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCompanies.map((company) => (
            <FeaturedCompanyCard key={company.id} company={company} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCompanies;
