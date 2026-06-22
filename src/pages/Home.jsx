import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/sections/Hero";
import PopularCategories from "../components/sections/PopularCategories";
import TopHiringCompanies from "../components/sections/TopHiringCompanies";
import FeaturedJobs from "../components/sections/FeaturedJobs";
import FeaturedCompanies from "../components/sections/FeaturedCompanies";
import Testimonials from "../components/sections/Testimonials";
import AppPromotion from "../components/sections/AppPromotion";

/**
 * Naukri homepage clone. Composes the layout (Navbar/Footer) and all
 * homepage sections required by the assignment.
 */
const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />
        <PopularCategories />
        <FeaturedJobs />
        <TopHiringCompanies />
        <FeaturedCompanies />
        <Testimonials />
        <AppPromotion />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
