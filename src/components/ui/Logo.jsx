import { useState } from "react";

/**
 * Company logo with a graceful fallback. If the remote image fails to load
 * (e.g. Clearbit 404), it swaps to a tinted monogram of the company name so
 * cards never show a broken-image icon.
 */
const Logo = ({ src, name, className = "" }) => {
  const [failed, setFailed] = useState(false);
  const initial = (name || "?").charAt(0).toUpperCase();

  if (failed || !src) {
    return (
      <div
        className={`flex items-center justify-center bg-brand-light font-bold text-brand ${className}`}
        aria-label={name}
      >
        {initial}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`${name} logo`}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-contain ${className}`}
    />
  );
};

export default Logo;
