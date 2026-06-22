import { Search, MapPin, Briefcase } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { trendingSearches } from "../../data/categories";

/**
 * Hero with a responsive multi-field search bar.
 * - Mobile/tablet: fields stack vertically inside a rounded card.
 * - Desktop (lg+): fields sit inline as a single pill with dividers.
 */
const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-brand-light to-white py-14 sm:py-20">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-[1.75rem] font-extrabold leading-tight tracking-tight text-ink sm:text-5xl md:text-6xl">
            Find your <span className="text-brand">dream job</span> now
          </h1>
          <p className="mt-4 text-base text-muted sm:text-lg">
            5 lakh+ jobs across India for you to explore — from top MNCs to
            fast-growing startups.
          </p>
        </div>

        {/* Search bar */}
        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-gray-100 bg-white p-2 shadow-[0_12px_40px_rgba(10,102,194,0.12)] lg:rounded-full">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-0">
            {/* Skills */}
            <label className="flex flex-1 items-center gap-3 rounded-2xl px-4 py-3 lg:rounded-full">
              <Search size={20} className="shrink-0 text-gray-400" />
              <input
                type="text"
                placeholder="Skills, designations, companies"
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
            </label>

            <span className="hidden h-7 w-px bg-gray-200 lg:block" />

            {/* Experience */}
            <label className="flex flex-1 items-center gap-3 rounded-2xl px-4 py-3 lg:rounded-full">
              <Briefcase size={20} className="shrink-0 text-gray-400" />
              <select
                defaultValue=""
                className="w-full bg-transparent text-sm text-gray-600 outline-none"
              >
                <option value="" disabled>
                  Experience
                </option>
                <option>Fresher</option>
                <option>1-3 Years</option>
                <option>3-6 Years</option>
                <option>6+ Years</option>
              </select>
            </label>

            <span className="hidden h-7 w-px bg-gray-200 lg:block" />

            {/* Location */}
            <label className="flex flex-1 items-center gap-3 rounded-2xl px-4 py-3 lg:rounded-full">
              <MapPin size={20} className="shrink-0 text-gray-400" />
              <input
                type="text"
                placeholder="Location"
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
            </label>

            <Button size="lg" className="w-full lg:w-auto">
              Search
            </Button>
          </div>
        </div>

        {/* Trending chips */}
        <div className="mx-auto mt-7 flex max-w-4xl flex-wrap items-center justify-center gap-2.5">
          <span className="text-sm font-medium text-muted">Trending:</span>
          {trendingSearches.map((term) => (
            <button
              key={term}
              className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm text-gray-600 transition-colors hover:border-brand hover:text-brand"
            >
              {term}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
