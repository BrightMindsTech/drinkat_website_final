import drinkatLogo from "@/assets/drinkat-logo.png";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "@/components/SocialIcons";
import { NavExploreSheet, handleHomeHashClick } from "@/components/NavExploreSheet";
import { TALABAT_RESTAURANT_URL } from "@/components/menu/TalabatMenuPromo";
import { CONTACT_PHONE_HREF } from "@/lib/contact";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { playfulHoverTap, riseIn, sectionStagger } from "@/lib/motion";

const MotionLink = motion(Link);

const socialBarItems: {
  label: string;
  href: string;
  Icon: typeof InstagramIcon;
}[] = [
  { label: "Drinkat on Instagram", href: "https://instagram.com/drinkatjo", Icon: InstagramIcon },
  { label: "Drinkat on Facebook", href: "https://www.facebook.com/Jodrinkat/", Icon: FacebookIcon },
  { label: "Drinkat on TikTok", href: "https://www.tiktok.com/@drinkat.jo", Icon: TikTokIcon },
];

const iconBtnClass =
  "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-background/90 text-primary shadow-sm backdrop-blur-sm transition-colors hover:bg-primary/10 hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

const RetroNav = () => {
  const reducedMotion = useReducedMotion();
  const location = useLocation();
  const showSheetInNav = location.pathname !== "/";

  return (
    <motion.nav
      className="sticky top-0 z-50 bg-transparent px-3 py-3 sm:px-6 sm:py-4"
      initial="hidden"
      animate="visible"
      variants={sectionStagger(reducedMotion, 0.05)}
    >
      <div className="container mx-auto flex min-w-0 max-w-full items-center justify-between gap-2 sm:gap-3">
        <MotionLink
          to="/#home"
          className="flex min-w-0 shrink items-center"
          variants={riseIn(reducedMotion, 18)}
          {...playfulHoverTap(reducedMotion)}
          onClick={(e) => handleHomeHashClick(e, "/#home", location.pathname, location.hash)}
        >
          <img
            src={drinkatLogo}
            alt="Drinkat logo"
            className="h-8 w-auto max-h-9 object-contain object-left sm:h-9 sm:max-h-10 md:h-12 md:max-h-14"
            decoding="async"
          />
        </MotionLink>

        <motion.div
          className="flex min-w-0 shrink-0 items-center gap-1 sm:gap-1.5 md:gap-2"
          variants={riseIn(reducedMotion, 18)}
        >
          {socialBarItems.map(({ label, href, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={iconBtnClass}
            >
              <Icon className="h-4 w-4 sm:h-[1.125rem] sm:w-[1.125rem]" />
            </a>
          ))}
          <a
            href={CONTACT_PHONE_HREF}
            className={iconBtnClass}
            aria-label="Call Drinkat"
          >
            <Phone className="h-4 w-4 sm:h-[1.125rem] sm:w-[1.125rem]" aria-hidden />
          </a>
          <a
            href={TALABAT_RESTAURANT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconBtnClass} w-auto gap-1 px-2 sm:px-2.5`}
            aria-label="Order on Talabat"
          >
            <span className="font-rounded max-w-[3.25rem] truncate text-[10px] font-bold uppercase leading-tight tracking-tight sm:max-w-none sm:text-xs">
              Talabat
            </span>
            <ExternalLink className="h-3 w-3 shrink-0 opacity-80 sm:h-3.5 sm:w-3.5" aria-hidden />
          </a>
          {showSheetInNav && <NavExploreSheet triggerVariant="nav" />}
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default RetroNav;
