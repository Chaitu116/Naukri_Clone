/**
 * Reusable button supporting visual variants and sizes.
 * Renders an <a> when `href` is passed, otherwise a <button>.
 */
const VARIANTS = {
  primary:
    "bg-brand text-white hover:bg-brand-dark focus-visible:ring-brand/40",
  outline:
    "border border-brand text-brand bg-white hover:bg-brand-light focus-visible:ring-brand/30",
  ghost:
    "text-ink hover:bg-gray-100 focus-visible:ring-gray-300",
  white:
    "bg-white text-brand hover:bg-blue-50 focus-visible:ring-white/50",
};

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-base",
};

const Button = ({
  variant = "primary",
  size = "md",
  href,
  type = "button",
  className = "",
  children,
  ...rest
}) => {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold
    transition-all duration-200 outline-none focus-visible:ring-4 disabled:opacity-50
    ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
