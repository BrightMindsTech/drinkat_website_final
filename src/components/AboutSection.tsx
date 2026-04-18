import RetroBorder from "./RetroBorder";
import WarpedCheckerboard from "./WarpedCheckerboard";
import { motion, useReducedMotion } from "framer-motion";
import {
  floatLoop,
  playfulHoverTap,
  riseIn,
  sectionStagger,
  sectionViewport,
} from "@/lib/motion";

const AboutSection = () => {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      id="about"
      className="bg-background py-16 md:py-24 relative scroll-mt-24 md:scroll-mt-28"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={sectionStagger(reducedMotion, 0.08)}
    >
      <WarpedCheckerboard />
      <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
        <RetroBorder />

        <motion.div className="my-8" variants={riseIn(reducedMotion, 14)}>
          <StarOrnament reducedMotion={reducedMotion} />
        </motion.div>

        <motion.h2
          className="font-script text-4xl md:text-6xl text-primary mb-6"
          variants={riseIn(reducedMotion, 20)}
        >
          Our Story
        </motion.h2>

        <motion.p
          className="font-rounded text-primary/80 text-lg md:text-xl leading-relaxed mb-6"
          variants={riseIn(reducedMotion, 18)}
        >
          Since 2019, Drinkat has been fueling Jordan's coffee lovers with bold
          flavors and a warm, welcoming atmosphere. What started as a single
          café has grown into a beloved local brand with three branches across
          the kingdom.
        </motion.p>

        <motion.p
          className="font-rounded text-primary/80 text-lg md:text-xl leading-relaxed mb-10"
          variants={riseIn(reducedMotion, 18)}
        >
          We craft every cup with care, serve our food fresh daily, and treat
          every customer like family. wherever you find us, you'll find great
          coffee and good vibes.
        </motion.p>

        <motion.div
          className="mb-12 mx-auto w-full max-w-md"
          variants={riseIn(reducedMotion, 16)}
        >
          <iframe
            src="https://www.instagram.com/drinkatjo/embed"
            title="Drinkat Instagram recent posts"
            className="h-[520px] w-full bg-white"
            loading="lazy"
            allowTransparency={true}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-8 my-12"
          variants={sectionStagger(reducedMotion, 0.1)}
        >
          <StatBlock
            number="5+"
            label="Years Brewing"
            reducedMotion={reducedMotion}
          />
          <StatBlock
            number="3"
            label="Branches"
            reducedMotion={reducedMotion}
          />
          <StatBlock
            number="1"
            label="Big Family"
            reducedMotion={reducedMotion}
          />
        </motion.div>

        <motion.div className="my-8" variants={riseIn(reducedMotion, 12)}>
          <RetroBorder />
        </motion.div>
      </div>
    </motion.section>
  );
};

const StatBlock = ({
  number,
  label,
  reducedMotion,
}: {
  number: string;
  label: string;
  reducedMotion: boolean;
}) => (
  <motion.div
    variants={riseIn(reducedMotion, 14)}
    {...playfulHoverTap(reducedMotion)}
  >
    <div className="font-script text-3xl md:text-5xl text-primary">
      {number}
    </div>
    <div className="font-rounded font-semibold text-primary/60 text-xs uppercase tracking-widest mt-1">
      {label}
    </div>
  </motion.div>
);

const StarOrnament = ({ reducedMotion }: { reducedMotion: boolean }) => (
  <motion.svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    className="text-primary mx-auto"
    animate={floatLoop(reducedMotion)}
  >
    <polygon
      points="20,2 24,14 38,14 27,22 31,36 20,28 9,36 13,22 2,14 16,14"
      fill="currentColor"
    />
  </motion.svg>
);

export default AboutSection;
