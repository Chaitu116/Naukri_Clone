import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import CompanyCard from "../cards/CompanyCard";
import { companies } from "../../data/companies";

/**
 * Top hiring companies — responsive grid:
 * 1 / 2 / 3 / 4 columns from mobile up to wide desktop.
 */
const TopHiringCompanies = () => {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Top hiring"
          title="Top companies hiring now"
          subtitle="Get discovered by leading organisations and apply with a single click."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TopHiringCompanies;
