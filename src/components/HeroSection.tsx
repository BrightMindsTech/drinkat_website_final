import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import drinkatLogo from "@/assets/drinkat-logo.png";
import { SectionBackgroundVideo } from "./SectionBackgroundVideo";
import WarpedCheckerboard from "./WarpedCheckerboard";
import { playfulHoverTap, riseIn, sectionStagger } from "@/lib/motion";

const HERO_VIDEO_SRC = "/hero-airport-branch2.mp4";
const HERO_VIDEO_POSTER = "/parallex-photo1.jpeg";

function scrollToHashId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
}

function handleVisitUsClick(
  e: MouseEvent<HTMLAnchorElement>,
  pathname: string,
  hash: string,
) {
  if (pathname === "/" && hash === "#visit-us") {
    e.preventDefault();
    scrollToHashId("visit-us");
  }
}

function handleMenuSectionClick(
  e: MouseEvent<HTMLAnchorElement>,
  pathname: string,
  hash: string,
) {
  if (pathname === "/" && hash === "#menu") {
    e.preventDefault();
    scrollToHashId("menu");
  }
}

const MotionLink = motion(Link);

const HeroSection = () => {
  const reducedMotion = useReducedMotion();
  const location = useLocation();

  return (
    <section
      id="home"
      className="bg-background relative w-full max-w-none -mt-24 flex min-h-[100svh] flex-col items-center justify-center overflow-x-hidden scroll-mt-24 pt-20 pb-8 md:scroll-mt-28 md:pt-24 md:pb-10"
    >
      {reducedMotion ? (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: `url(${HERO_VIDEO_POSTER})` }}
          aria-hidden
        />
      ) : (
        <SectionBackgroundVideo src={HERO_VIDEO_SRC} poster={HERO_VIDEO_POSTER} />
      )}
      <WarpedCheckerboard className="z-[1]" />

      <motion.div
        className="container relative z-10 mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-col justify-center px-3 py-2 sm:px-8 md:px-10 lg:px-14"
        initial="hidden"
        animate="visible"
        variants={sectionStagger(reducedMotion, 0.08)}
      >
        <motion.div variants={riseIn(reducedMotion, 28)} className="flex min-h-0 w-full flex-1 flex-col justify-center gap-4 sm:gap-5">
          <div className="relative isolate z-10 flex w-full min-h-0 flex-col items-center gap-4 overflow-visible sm:gap-5 md:gap-6">
            <img
              src={drinkatLogo}
              alt="Drinkat"
              className="w-[1000px] max-w-[min(1000px,94vw)] h-auto shrink-0 object-contain object-center drop-shadow-[0_6px_28px_rgba(0,0,0,0.35)]"
              decoding="async"
              width={1000}
              height={312}
            />
          </div>

          <div className="relative z-10 flex w-full flex-col items-center gap-3">
            <motion.nav
              className="flex w-full max-w-xs justify-center sm:max-w-sm"
              aria-label="Quick links"
              initial={reducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <MotionLink
                to="/#visit-us"
                className="font-rounded inline-flex min-h-[2.75rem] w-full items-center justify-center rounded-2xl border-0 bg-black/35 px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-white shadow-sm backdrop-blur-sm transition-[background-color,opacity,transform] hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 active:scale-[0.98]"
                onClick={(e) => handleVisitUsClick(e, location.pathname, location.hash)}
                {...playfulHoverTap(reducedMotion)}
              >
                Locations
              </MotionLink>
            </motion.nav>

            <MotionLink
              to="/#menu"
              className="font-rounded inline-flex items-center gap-1.5 rounded-xl border-0 bg-transparent px-3 py-2 text-sm font-bold uppercase tracking-wide text-white shadow-none outline-none ring-0 transition-[opacity,background-color,transform] hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/35 active:scale-[0.98]"
              onClick={(e) => handleMenuSectionClick(e, location.pathname, location.hash)}
              aria-label="Scroll to menu section"
              {...playfulHoverTap(reducedMotion)}
            >
              Menu
              <ChevronDown className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
            </MotionLink>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
