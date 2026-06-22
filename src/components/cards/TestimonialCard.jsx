import { Star, Quote } from "lucide-react";

/**
 * Testimonial / success-story card driven by a `testimonial` prop.
 */
const TestimonialCard = ({ testimonial }) => {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <Quote size={28} className="text-brand/20" />

      <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
        “{testimonial.review}”
      </p>

      {/* Stars */}
      <div className="mt-4 flex gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={15}
            className={
              i < testimonial.rating
                ? "fill-amber-400 text-amber-400"
                : "text-gray-200"
            }
          />
        ))}
      </div>

      {/* Author */}
      <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-5">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          loading="lazy"
          className="h-11 w-11 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
          <p className="text-xs text-muted">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
