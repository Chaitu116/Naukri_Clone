import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import CategoryCard from "../cards/CategoryCard";
import { categories } from "../../data/categories";

/**
 * Popular job categories — responsive grid:
 * 1 column on mobile, 2 on tablet, 3 on desktop, 4 on wide screens.
 */
const PopularCategories = () => {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Explore"
          title="Popular job categories"
          subtitle="Find opportunities across the domains that are hiring the most right now."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PopularCategories;
