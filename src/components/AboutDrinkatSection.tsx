import { motion, useReducedMotion } from "framer-motion";
import { AboutFloatingDecor } from "@/components/AboutFloatingDecor";
import { HomeAboutDivider } from "@/components/HomeAboutDivider";
import WarpedCheckerboard from "@/components/WarpedCheckerboard";
import { heroSlides } from "@/data/heroParagraphs";
import { riseIn, sectionViewportEasy } from "@/lib/motion";

function phoneToTelHref(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("962")) return `tel:+${digits}`;
  if (digits.startsWith("0")) return `tel:+962${digits.slice(1)}`;
  return `tel:+${digits}`;
}

const AboutDrinkatSection = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="about-drinkat"
      aria-labelledby="about-drinkat-heading"
      className="bg-white pt-0 pb-16 md:pb-24 relative scroll-mt-24 md:scroll-mt-28 overflow-hidden dark:bg-background"
    >
      <div className="relative z-20 w-full bg-white dark:bg-background">
        <HomeAboutDivider />
      </div>
      {/* Teal tiles (no invert) — visible on white; invert would paint white tiles on white */}
      <WarpedCheckerboard tileOpacity={0.12} />
      <AboutFloatingDecor reducedMotion={reducedMotion} />
      <div className="container mx-auto px-6 relative z-10 max-w-2xl pt-12 md:pt-16">
        <motion.h2
          id="about-drinkat-heading"
          className="font-script text-4xl md:text-5xl text-foreground text-center mb-12 md:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewportEasy}
          variants={riseIn(reducedMotion, 22)}
        >
          About Drinkat
        </motion.h2>

        {heroSlides.length === 0 ? (
          <motion.p
            className="font-rounded text-center text-muted-foreground"
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewportEasy}
            variants={riseIn(reducedMotion, 18)}
          >
            Add content in <code className="text-foreground/80">src/data/heroParagraphs.ts</code>
          </motion.p>
        ) : (
          <div className="flex flex-col gap-12 md:gap-14">
            {heroSlides.map((slide) => (
              <article key={slide.title} className="text-left">
                <h3 className="font-script text-2xl md:text-3xl text-foreground mb-2 text-balance">
                  {slide.title}
                </h3>
                <p className="font-rounded font-semibold text-foreground/85 text-base md:text-lg mb-4 text-balance">
                  {slide.subtitle}
                </p>
                <div className="space-y-4">
                  {slide.body.split(/\n\n/).map((para, idx) => (
                    <motion.p
                      key={`${slide.title}-p-${idx}`}
                      className="font-rounded text-foreground/90 text-[0.95rem] md:text-base leading-relaxed"
                      initial="hidden"
                      whileInView="visible"
                      viewport={sectionViewportEasy}
                      variants={riseIn(reducedMotion, 14)}
                    >
                      {para}
                    </motion.p>
                  ))}
                </div>
                {slide.contact && (
                  <motion.div
                    className="mt-6 pt-6 border-t border-border/80"
                    initial="hidden"
                    whileInView="visible"
                    viewport={sectionViewportEasy}
                    variants={riseIn(reducedMotion, 14)}
                  >
                    <p className="font-rounded text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground mb-3">
                      Contact
                    </p>
                    <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
                      <a
                        href={phoneToTelHref(slide.contact.phone)}
                        className="font-rounded font-semibold text-primary underline underline-offset-4 hover:opacity-90"
                      >
                        {slide.contact.phone}
                      </a>
                      <a
                        href={`mailto:${slide.contact.email}`}
                        className="font-rounded font-semibold text-primary underline underline-offset-4 hover:opacity-90 break-all sm:break-normal"
                      >
                        {slide.contact.email}
                      </a>
                    </div>
                  </motion.div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutDrinkatSection;
