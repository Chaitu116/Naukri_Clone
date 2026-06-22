import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import TestimonialCard from "../cards/TestimonialCard";
import { testimonials, platformStats } from "../../data/testimonials";

/**
 * Success stories + a platform stats band.
 * Testimonials: 1 / 2 / 4 columns. Stats: 2 / 4 columns.
 */
const Testimonials = () => {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        {/* Stats band */}
        <div className="mb-14 grid grid-cols-2 gap-6 rounded-3xl bg-brand px-6 py-10 text-center text-white sm:px-10 lg:grid-cols-4">
          {platformStats.map((stat) => (
            <div key={stat.id}>
              <p className="text-3xl font-extrabold sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-blue-100">{stat.label}</p>
            </div>
          ))}
        </div>

        <SectionHeading
          eyebrow="Success stories"
          title="Loved by job seekers"
          subtitle="Real professionals who found the right role through the platform."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
