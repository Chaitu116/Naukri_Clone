import { Apple, Play, Check } from "lucide-react";
import Container from "../ui/Container";
import mobileApp from "../../assets/mobile-app.png";

const PERKS = [
  "Apply to jobs on the go",
  "Real-time application tracking",
  "Instant alerts for new openings",
];

/**
 * App promotion / call-to-action section.
 * Stacks vertically on mobile/tablet, sits side-by-side on desktop.
 */
const AppPromotion = () => {
  return (
    <section className="bg-slate-900 py-14 text-white sm:py-20">
      <Container>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
          {/* Copy */}
          <div className="max-w-xl text-center lg:text-left">
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-200">
              Mobile app
            </span>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Your next job is one tap away
            </h2>
            <p className="mt-4 text-base text-gray-300">
              Download the app and search, apply and track jobs from anywhere —
              anytime.
            </p>

            <ul className="mt-6 flex flex-col items-center gap-3 text-sm text-gray-200 lg:items-start">
              {PERKS.map((perk) => (
                <li key={perk} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <Check size={13} />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 transition-transform hover:-translate-y-0.5"
              >
                <Play size={18} className="fill-slate-900" />
                Google Play
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 transition-transform hover:-translate-y-0.5"
              >
                <Apple size={18} />
                App Store
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="shrink-0">
            <img
              src={mobileApp}
              alt="Naukri mobile app preview"
              className="mx-auto w-56 drop-shadow-2xl sm:w-72 lg:w-80"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AppPromotion;
