import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import JobCard from "../cards/JobCard";
import { jobs } from "../../data/jobs";

/**
 * Featured jobs — responsive grid:
 * 1 / 2 / 3 / 4 columns from mobile up to wide desktop.
 */
const FeaturedJobs = () => {
  return (
    <section className="bg-slate-50 py-14 sm:py-16">
      <Container>
        <SectionHeading
          align="left"
          title="Featured jobs"
          subtitle="Handpicked roles from companies actively hiring this week."
          action={
            <a
              href="#"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-dark"
            >
              View all jobs <ArrowRight size={16} />
            </a>
          }
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedJobs;
