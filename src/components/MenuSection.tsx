import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import palmTree from "@/assets/palm-tree.png";
import WarpedCheckerboard from "./WarpedCheckerboard";
import {
  playfulHoverTap,
  riseIn,
  scaleIn,
  sectionStagger,
  sectionViewport,
} from "@/lib/motion";
import { allCategories } from "./menu/menuData";
import { CategoryGrid } from "./menu/CategoryGrid";
import { TalabatMoreOnBanner } from "./menu/TalabatMenuPromo";

const FEATURED_INTERVAL_MS = 2500;

/** Local featured photos from public folder (cycle through 4 images for 7 items) */
const FEATURED_IMAGE_NAMES = [
  "/FeaturedItems/Featured1.jpg",
  "/FeaturedItems/Featured5.jpg",
  "/FeaturedItems/Featured6.jpg",
  "/FeaturedItems/Featured2.jpg",
  "/FeaturedItems/Featured3.jpg",
  "/FeaturedItems/Featured4.jpg",
];

function FeaturedCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const total = FEATURED_IMAGE_NAMES.length;
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="w-full max-w-md mx-auto mb-10 md:mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={sectionStagger(reducedMotion)}
    >
      <motion.p
        className="font-rounded font-semibold text-primary-foreground/80 text-xs uppercase tracking-widest text-center mb-3"
        variants={riseIn(reducedMotion, 14)}
      >
        Featured
      </motion.p>
      <Swiper
        modules={[Autoplay, A11y]}
        onSwiper={setSwiper}
        onSlideChange={(s) => setActiveIndex(s.realIndex)}
        loop={total > 1}
        slidesPerView={1}
        speed={reducedMotion ? 0 : 500}
        allowTouchMove={total > 1}
        autoplay={
          reducedMotion || total <= 1
            ? false
            : {
                delay: FEATURED_INTERVAL_MS,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
        }
        className="overflow-hidden rounded-2xl"
      >
        {FEATURED_IMAGE_NAMES.map((src) => (
          <SwiperSlide key={src}>
            <motion.div
              className="w-full rounded-2xl overflow-hidden bg-primary-foreground/10 aspect-[1/1]"
              variants={scaleIn(reducedMotion)}
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      {total > 1 && (
        <motion.div
          className="flex justify-center gap-2 mt-3"
          variants={riseIn(reducedMotion, 10)}
        >
          {FEATURED_IMAGE_NAMES.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => swiper?.slideToLoop(i)}
              className={`h-1.5 rounded-full transition-all w-6 ${i === activeIndex ? "bg-primary-foreground" : "bg-primary-foreground/40"}`}
              aria-label={`Featured ${i + 1}`}
              {...playfulHoverTap(reducedMotion)}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}

const MenuSection = () => {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      id="menu"
      className="bg-primary py-16 md:py-24 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={sectionStagger(reducedMotion, 0.06)}
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
          variants={riseIn(reducedMotion, 20)}
        >
          <motion.h2
            className="font-script text-4xl md:text-6xl !text-primary-foreground mb-3"
            {...playfulHoverTap(reducedMotion)}
          >
            Menu Drinkat
          </motion.h2>
          {/* <motion.p
            className="font-rounded font-semibold text-primary-foreground/80 uppercase tracking-[0.2em] text-sm"
            variants={riseIn(reducedMotion, 14)}
          >
            Made fresh, served with a smile
          </motion.p> */}
        </motion.div>

        <FeaturedCarousel />

        <motion.h3
          className="font-rounded font-bold text-primary-foreground/90 text-sm uppercase tracking-widest text-center mb-6"
          variants={riseIn(reducedMotion, 16)}
        >
          Browse by category
        </motion.h3>

        <motion.div
          className="rounded-3xl bg-white/95 shadow-lg px-4 py-8 md:px-8 md:py-10 max-w-6xl mx-auto"
          variants={riseIn(reducedMotion, 12)}
        >
          <TalabatMoreOnBanner />
          <CategoryGrid categories={allCategories} embedded />
        </motion.div>

        <motion.p
          className="text-center mt-8"
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
    </motion.section>
  );
};

export default MenuSection;
