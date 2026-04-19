import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { CAREERS_FORM_URL } from "@/lib/contact";
import drinkatLogo from "@/assets/drinkat-logo.png";
import { NavExploreSheet } from "@/components/NavExploreSheet";
import { SectionBackgroundVideo } from "./SectionBackgroundVideo";
import WarpedCheckerboard from "./WarpedCheckerboard";
import { playfulHoverTap, riseIn, sectionStagger } from "@/lib/motion";

const HERO_VIDEO_SRC = "/hero-airport-branch2.mp4";
const HERO_VIDEO_POSTER = "/parallex-photo1.jpeg";

const MotionLink = motion(Link);
const MotionA = motion.a;

const HeroSection = () => {
  const reducedMotion = useReducedMotion();

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

      <div className="absolute left-4 top-4 z-20 sm:left-6 md:left-8 lg:left-10">
        <NavExploreSheet triggerVariant="hero" />
      </div>

      <motion.div
        className="container relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-3 pb-36 pt-2 sm:px-8 sm:pb-40 md:px-10 md:pb-44 lg:px-14"
        initial="hidden"
        animate="visible"
        variants={sectionStagger(reducedMotion, 0.08)}
      >
        <motion.div
          variants={riseIn(reducedMotion, 28)}
          className="relative isolate z-10 -mt-16 flex w-full min-h-0 flex-col items-center overflow-visible sm:-mt-20 md:-mt-28 lg:-mt-32"
        >
          <img
            src={drinkatLogo}
            alt="Drinkat"
            className="w-[2000px] max-w-[min(2000px,94vw)] h-auto shrink-0 object-contain object-center drop-shadow-[0_6px_28px_rgba(0,0,0,0.35)]"
            decoding="async"
            width={2000}
            height={624}
          />
        </motion.div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-28 z-10 flex justify-start px-4 pt-2 sm:bottom-32 sm:px-8 md:bottom-40 md:px-10 lg:bottom-44 lg:px-14">
        <motion.nav
          className="flex flex-col items-start gap-3 sm:gap-4"
          aria-label="Quick links"
          initial={reducedMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <MotionLink
            to="/menu"
            className="font-rounded inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-none border-0 bg-white/10 px-7 py-3.5 text-base font-bold uppercase tracking-wide text-white shadow-none outline-none ring-0 backdrop-blur-sm transition-[opacity,background-color,transform] hover:bg-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 active:scale-[0.98] sm:min-h-[3.5rem] sm:px-8 sm:py-4 sm:text-lg"
            aria-label="Open full menu"
            {...playfulHoverTap(reducedMotion)}
          >
            Menu
            <ChevronDown className="h-5 w-5 shrink-0 opacity-90 sm:h-6 sm:w-6" aria-hidden />
          </MotionLink>
          <MotionLink
            to="/visit"
            className="font-rounded inline-flex min-h-[3.25rem] items-center justify-center rounded-none border-0 bg-white/10 px-7 py-3.5 text-base font-bold uppercase tracking-wide text-white shadow-none outline-none ring-0 backdrop-blur-sm transition-[opacity,background-color,transform] hover:bg-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 active:scale-[0.98] sm:min-h-[3.5rem] sm:px-8 sm:py-4 sm:text-lg"
            {...playfulHoverTap(reducedMotion)}
          >
            Locations
          </MotionLink>
          <MotionA
            href={CAREERS_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-rounded inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-none border-0 bg-white/10 px-7 py-3.5 text-base font-bold uppercase tracking-wide text-white shadow-none outline-none ring-0 backdrop-blur-sm transition-[opacity,background-color,transform] hover:bg-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 active:scale-[0.98] sm:min-h-[3.5rem] sm:px-8 sm:py-4 sm:text-lg"
            aria-label="Careers — opens application form in a new tab"
            {...playfulHoverTap(reducedMotion)}
          >
            Careers
            <Briefcase className="h-5 w-5 shrink-0 opacity-90 sm:h-6 sm:w-6" aria-hidden />
          </MotionA>
        </motion.nav>
      </div>
    </section>
  );
};

export default HeroSection;
