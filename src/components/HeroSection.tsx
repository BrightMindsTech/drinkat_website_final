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
      className="bg-background relative flex min-h-[100svh] w-full max-w-none flex-col items-center justify-center overflow-x-hidden scroll-mt-24 pb-0 pt-20 md:scroll-mt-28 md:pt-24"
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
        className="container relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-3 pb-36 pt-2 sm:px-8 sm:pb-40 md:px-10 md:pb-44 lg:px-14"
        initial="hidden"
        animate="visible"
        variants={sectionStagger(reducedMotion, 0.08)}
      >
        <motion.div
          variants={riseIn(reducedMotion, 28)}
          className="relative isolate z-10 -mt-16 flex w-full min-h-0 flex-col items-center gap-3 overflow-visible sm:-mt-20 md:-mt-28 lg:-mt-32 md:gap-4"
        >
          <img
            src={drinkatLogo}
            alt="Drinkat"
            className="w-[2000px] max-w-[min(2000px,94vw)] h-auto shrink-0 object-contain object-center drop-shadow-[0_6px_28px_rgba(0,0,0,0.35)]"
            decoding="async"
            width={2000}
            height={624}
          />
          <p
            className="font-arabic text-center text-2xl font-bold text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)] sm:text-3xl md:text-4xl md:tracking-wide"
            lang="ar"
          >
            درينك ناو !
          </p>
        </motion.div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-16 z-10 flex flex-col items-center gap-4 px-4 pt-2 sm:bottom-20 md:bottom-28 lg:bottom-32 md:gap-5">
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
    </section>
  );
};

export default HeroSection;
