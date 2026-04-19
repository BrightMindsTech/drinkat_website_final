import { ArrowUpRight } from "lucide-react";
import RetroBorder from "./RetroBorder";
import { SectionBackgroundVideo } from "./SectionBackgroundVideo";
import WarpedCheckerboard from "./WarpedCheckerboard";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "@/components/SocialIcons";
import { motion, useReducedMotion } from "framer-motion";
import { playfulHoverTap, riseIn, sectionStagger, sectionViewport } from "@/lib/motion";

/** Background clip: muted autoplay + loop via `SectionBackgroundVideo` (poster fallback on error). */
const SOCIALS_BG_VIDEO = "/background-vid2.mp4";
const SOCIALS_BG_POSTER = "/featured-item1.jpeg";

const socialPlatforms: {
  label: string;
  handle: string;
  href: string;
  blurb: string;
  cta: string;
  Icon: typeof InstagramIcon;
}[] = [
  {
    label: "Instagram",
    handle: "@drinkatjo",
    href: "https://instagram.com/drinkatjo",
    blurb: "Daily reels, menu drops, and the energy behind the bar.",
    cta: "View profile",
    Icon: InstagramIcon,
  },
  {
    label: "Facebook",
    handle: "JoDrinkat",
    href: "https://www.facebook.com/Jodrinkat/",
    blurb: "Events, updates, and the wider Drinkat community.",
    cta: "Open page",
    Icon: FacebookIcon,
  },
  {
    label: "TikTok",
    handle: "@drinkat.jo",
    href: "https://www.tiktok.com/@drinkat.jo",
    blurb: "Short clips, trends, and playful moments with the crew.",
    cta: "Watch on TikTok",
    Icon: TikTokIcon,
  },
];

const SocialsSection = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="socials"
      className="bg-background py-16 md:py-24 relative scroll-mt-24 md:scroll-mt-28 overflow-hidden"
    >
      <SectionBackgroundVideo src={SOCIALS_BG_VIDEO} poster={SOCIALS_BG_POSTER} />
      {/* Darken busy video so teal UI reads clearly */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/55 via-black/45 to-black/60"
        aria-hidden
      />
      <WarpedCheckerboard className="z-[2]" />
      <div className="container mx-auto px-6 max-w-6xl text-center relative z-10">
        <RetroBorder />

        <motion.div
          className="relative mx-auto mt-8 mb-10 md:mb-12 max-w-3xl rounded-3xl border border-white/35 bg-white/[0.09] px-6 py-8 shadow-[0_12px_48px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:px-10 md:py-10 ring-1 ring-inset ring-white/15 transition-[background-color,box-shadow] hover:bg-white/[0.12]"
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          variants={riseIn(reducedMotion, 20)}
        >
          <h2 className="font-script text-4xl md:text-6xl text-primary mb-4 md:mb-5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] [text-shadow:0_0_24px_rgba(255,255,255,0.35)]">
            Our Socials
          </h2>

          <p className="font-rounded font-bold text-primary uppercase tracking-[0.14em] text-sm sm:text-base leading-snug max-w-xl mx-auto border-t border-white/25 pt-5 drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)] [text-shadow:0_0_18px_rgba(255,255,255,0.25)]">
            Tap through — same Drinkat vibe, no messy widgets
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          variants={sectionStagger(reducedMotion, 0.06)}
        >
          {socialPlatforms.map(({ label, handle, href, blurb, cta, Icon }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label}: ${handle}`}
              variants={riseIn(reducedMotion, 16)}
              {...playfulHoverTap(reducedMotion)}
              className="group relative flex flex-col items-center text-center rounded-3xl border border-white/30 bg-white/[0.07] backdrop-blur-2xl px-6 pt-10 pb-8 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.4)] ring-1 ring-inset ring-white/10 transition-[border-color,box-shadow,background-color] hover:border-primary/45 hover:bg-white/[0.11] hover:shadow-[0_16px_48px_-8px_rgba(0,0,0,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary min-h-[280px]"
            >
              <div
                className="mb-5 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-white/15 text-primary ring-2 ring-white/25 backdrop-blur-sm transition-[transform,background-color] group-hover:bg-white/22"
                aria-hidden
              >
                <Icon className="h-9 w-9 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]" />
              </div>
              <p className="font-script text-2xl md:text-[1.65rem] text-primary mb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] [text-shadow:0_0_20px_rgba(255,255,255,0.3)]">
                {label}
              </p>
              <p className="font-rounded font-bold text-xs uppercase tracking-[0.25em] text-primary mb-4 drop-shadow-[0_1px_5px_rgba(0,0,0,0.85)]">
                {handle}
              </p>
              <p className="font-rounded text-sm leading-relaxed text-primary/95 mb-6 flex-1 max-w-[16rem] mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.75)]">
                {blurb}
              </p>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-rounded font-bold text-xs uppercase tracking-wider text-primary-foreground shadow-sm transition-opacity group-hover:opacity-95">
                {cta}
                <ArrowUpRight className="h-4 w-4 opacity-90" strokeWidth={2.25} aria-hidden />
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="my-8"
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          variants={riseIn(reducedMotion, 12)}
        >
          <RetroBorder />
        </motion.div>
      </div>
    </section>
  );
};

export default SocialsSection;
