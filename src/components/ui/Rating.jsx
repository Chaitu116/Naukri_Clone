import { Star } from "lucide-react";

/**
 * Star rating badge. Shows the numeric score with a filled star, plus an
 * optional review count. Used by company and testimonial cards.
 */
const Rating = ({ value, reviews, className = "" }) => {
  return (
    <span className={`inline-flex items-center gap-1 text-sm ${className}`}>
      <Star size={15} className="fill-amber-400 text-amber-400" />
      <span className="font-semibold text-ink">{value}</span>
      {reviews && <span className="text-muted">({reviews})</span>}
    </span>
  );
};

export default Rating;
