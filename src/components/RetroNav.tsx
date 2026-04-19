import drinkatLogo from "@/assets/drinkat-logo.png";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "@/components/SocialIcons";
import { ShoppingBag } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { playfulHoverTap, riseIn, sectionStagger } from "@/lib/motion";

const MotionLink = motion(Link);
const MotionA = motion.a;

const socialNavItems: {
  label: string;
  href: string;
  Icon: typeof InstagramIcon;
}[] = [
  { label: "Drinkat on Instagram", href: "https://instagram.com/drinkatjo", Icon: InstagramIcon },
  { label: "Drinkat on Facebook", href: "https://www.facebook.com/Jodrinkat/", Icon: FacebookIcon },
  { label: "Drinkat on TikTok", href: "https://www.tiktok.com/@drinkat.jo", Icon: TikTokIcon },
];

const navItems: { label: string; to: string }[] = [
  { label: "Menu", to: "/menu" },
  { label: "Visit Us", to: "/#visit-us" },
];

function scrollToHashId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
}

/** When already on `/#id`, React Router may not navigate; still scroll to the section. */
function handleHomeHashClick(
  e: MouseEvent<HTMLAnchorElement>,
  to: string,
  pathname: string,
  hash: string,
) {
  if (!to.startsWith("/#")) return;
  const id = decodeURIComponent(to.slice(2));
  if (pathname === "/" && hash === `#${id}`) {
    e.preventDefault();
    scrollToHashId(id);
  }
}

const RetroNav = () => {
  const reducedMotion = useReducedMotion();
  const location = useLocation();

  return (
    <motion.nav
      className="bg-transparent py-3 px-4 sm:py-4 sm:px-6 sticky top-0 z-50"
      initial="hidden"
      animate="visible"
      variants={sectionStagger(reducedMotion, 0.05)}
    >
      <div className="container mx-auto min-w-0 max-w-full">
        {/* Mobile: one row — logo | socials | menu (icon) */}
        <div className="flex md:hidden min-w-0 items-center gap-1.5">
          <MotionLink
            to="/#home"
            className="min-w-0 shrink flex max-w-[38%] items-center sm:max-w-[42%]"
            variants={riseIn(reducedMotion, 18)}
            {...playfulHoverTap(reducedMotion)}
            onClick={(e) => handleHomeHashClick(e, "/#home", location.pathname, location.hash)}
          >
            <img
              src={drinkatLogo}
              alt="Drinkat logo"
              className="h-8 w-auto max-h-9 object-contain object-left sm:h-9 sm:max-h-10"
              decoding="async"
            />
          </MotionLink>
          <motion.div
            className="flex min-w-0 flex-1 items-center justify-center gap-0.5"
            variants={riseIn(reducedMotion, 18)}
          >
            {socialNavItems.map(({ label, href, Icon }) => (
              <MotionA
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-primary shrink-0 rounded-full p-1 hover:bg-primary/10 hover:opacity-90 transition-[opacity,background-color] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                {...playfulHoverTap(reducedMotion)}
              >
                <Icon className="h-[17px] w-[17px] sm:h-[18px] sm:w-[18px]" />
              </MotionA>
            ))}
          </motion.div>
          <MotionLink
            to="/menu"
            aria-label="Menu and order"
            title="Menu and order"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-primary p-2 text-primary-foreground hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            variants={riseIn(reducedMotion, 18)}
            {...playfulHoverTap(reducedMotion)}
          >
            <ShoppingBag className="h-[18px] w-[18px] sm:h-5 sm:w-5" aria-hidden />
          </MotionLink>
        </div>

        {/* md+: single row */}
        <div className="hidden md:flex items-center justify-between gap-4 lg:gap-6 min-w-0">
          <MotionLink
            to="/#home"
            className="shrink-0 flex items-center"
            variants={riseIn(reducedMotion, 18)}
            {...playfulHoverTap(reducedMotion)}
            onClick={(e) => handleHomeHashClick(e, "/#home", location.pathname, location.hash)}
          >
            <img
              src={drinkatLogo}
              alt="Drinkat logo"
              className="h-12 w-auto max-h-14 md:h-14 object-contain object-left"
              decoding="async"
            />
          </MotionLink>
          <motion.ul
            className="flex flex-1 min-w-0 items-center justify-center gap-8"
            variants={riseIn(reducedMotion, 18)}
          >
            {navItems.map((item) => (
              <li key={item.label}>
                <MotionLink
                  to={item.to}
                  className="font-rounded font-semibold text-primary tracking-wide uppercase text-sm hover:opacity-70 transition-opacity"
                  {...playfulHoverTap(reducedMotion)}
                  onClick={(e) => handleHomeHashClick(e, item.to, location.pathname, location.hash)}
                >
                  {item.label}
                </MotionLink>
              </li>
            ))}
          </motion.ul>
          <motion.div
            className="flex min-w-0 shrink-0 items-center justify-end gap-1.5 lg:gap-2"
            variants={riseIn(reducedMotion, 18)}
          >
            {socialNavItems.map(({ label, href, Icon }) => (
              <MotionA
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-primary p-2 rounded-full hover:bg-primary/10 hover:opacity-90 transition-[opacity,background-color] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                {...playfulHoverTap(reducedMotion)}
              >
                <Icon className="w-5 h-5" />
              </MotionA>
            ))}
            <MotionLink
              to="/menu"
              className="font-rounded font-bold text-sm uppercase tracking-wider bg-primary text-primary-foreground px-4 lg:px-6 py-2 md:py-2.5 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap inline-block ml-1 shrink-0"
              {...playfulHoverTap(reducedMotion)}
            >
              order drinkat
            </MotionLink>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default RetroNav;
