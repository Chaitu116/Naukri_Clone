/**
 * Centered, responsive max-width wrapper used by every section so horizontal
 * padding and the content cap stay consistent across the whole page.
 */
const Container = ({ as: Tag = "div", className = "", children }) => {
  return (
    <Tag className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  );
};

export default Container;
