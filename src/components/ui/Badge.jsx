/**
 * Small pill label for skills, tags, and job types.
 */
const TONES = {
  brand: "bg-brand-light text-brand",
  neutral: "bg-gray-100 text-gray-600",
  success: "bg-emerald-50 text-emerald-600",
};

const Badge = ({ tone = "neutral", className = "", children }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${TONES[tone]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
