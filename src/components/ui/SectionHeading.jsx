/**
 * Consistent section header: optional eyebrow, title, subtitle, and an
 * optional right-aligned action (e.g. a "View all" link). Centers by default;
 * pass align="left" for left-aligned headers with a trailing action.
 */
const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  action,
}) => {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-8 sm:mb-10 ${
        isCenter
          ? "text-center"
          : "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      }`}
    >
      <div className={isCenter ? "mx-auto max-w-2xl" : ""}>
        {eyebrow && (
          <span className="mb-2 inline-block rounded-full bg-brand-light px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
            {eyebrow}
          </span>
        )}
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl md:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-sm text-muted sm:text-base">{subtitle}</p>
        )}
      </div>

      {action && !isCenter && <div className="shrink-0">{action}</div>}
    </div>
  );
};

export default SectionHeading;
