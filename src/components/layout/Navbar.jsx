import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import logo from "../../assets/Naukrilogo.png";

const NAV_LINKS = ["Jobs", "Companies", "Services", "Resources"];

/**
 * Sticky top navigation. Shows a full menu on desktop and a slide-down
 * hamburger menu on tablet/mobile (below the lg breakpoint).
 */
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 sm:h-[72px]">
          {/* Logo */}
          <a href="/" className="flex shrink-0 items-center">
            <img
              src={logo}
              alt="Naukri"
              className="h-8 w-auto sm:h-9"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors hover:text-brand"
              >
                {link}
                <ChevronDown size={15} className="text-gray-400" />
              </a>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button size="sm">Register</Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 lg:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile / tablet menu */}
      {open && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <Container className="py-4">
            <nav className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={() => setOpen(false)}
                  className="border-b border-gray-50 py-3 font-medium text-gray-700"
                >
                  {link}
                </a>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-3">
              <Button variant="outline" className="w-full">
                Login
              </Button>
              <Button className="w-full">Register</Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Navbar;
