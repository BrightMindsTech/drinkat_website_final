import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import palmTree from "@/assets/palm-tree.png";
import WarpedCheckerboard from "./WarpedCheckerboard";
import {
  playfulHoverTap,
  riseIn,
  sectionViewportEasy,
} from "@/lib/motion";
import { allCategories } from "./menu/menuData";
import { CategoryGrid } from "./menu/CategoryGrid";
import { TalabatMoreOnBanner } from "./menu/TalabatMenuPromo";

const MenuSection = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="menu"
      className="bg-primary py-16 md:py-24 relative overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 right-0 z-20 h-5 w-full"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(255,255,255,0.95) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(255,255,255,0.95) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.95) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.95) 75%)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
          boxShadow: "0 2px 8px rgba(255,255,255,0.3)",
        }}
      />
      <div className="absolute top-0 left-0 -translate-x-1/3 sm:-translate-x-1/4 md:-translate-x-1/6 pointer-events-none z-[1]">
        <img
          src={palmTree}
          alt=""
          className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-auto opacity-50 md:opacity-60 animate-sway-wind drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] [filter:brightness(0)_invert(1)]"
        />
      </div>
      <div className="absolute top-0 right-0 translate-x-1/3 sm:translate-x-1/4 md:translate-x-1/6 pointer-events-none z-[1] -scale-x-100">
        <img
          src={palmTree}
          alt=""
          className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-auto opacity-50 md:opacity-60 animate-sway-wind-slow drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] [filter:brightness(0)_invert(1)]"
        />
      </div>
      <WarpedCheckerboard invert />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewportEasy}
          variants={riseIn(reducedMotion, 20)}
        >
          <motion.h2
            className="font-script text-4xl md:text-6xl !text-primary-foreground mb-3"
            {...playfulHoverTap(reducedMotion)}
          >
            Menu Drinkat
          </motion.h2>
        </motion.div>

        <motion.h3
          className="font-rounded font-bold text-primary-foreground/90 text-sm uppercase tracking-widest text-center mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewportEasy}
          variants={riseIn(reducedMotion, 16)}
        >
          Browse by category
        </motion.h3>

        <motion.div
          className="rounded-3xl bg-white/95 shadow-lg px-4 py-8 md:px-8 md:py-10 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewportEasy}
          variants={riseIn(reducedMotion, 12)}
        >
          <TalabatMoreOnBanner />
          <CategoryGrid categories={allCategories} embedded />
        </motion.div>

        <motion.p
          className="text-center mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewportEasy}
          variants={riseIn(reducedMotion, 12)}
        >
          <Link
            to="/menu"
            className="font-rounded font-semibold text-primary-foreground/90 text-sm uppercase tracking-widest underline underline-offset-4 hover:text-primary-foreground transition-colors"
          >
            View full menu page
          </Link>
        </motion.p>
      </div>
    </section>
  );
};

export default MenuSection;
