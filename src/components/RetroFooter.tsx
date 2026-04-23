import RetroBorder from "./RetroBorder";
import WarpedCheckerboard from "./WarpedCheckerboard";
import drinkatLogo from "@/assets/drinkat-logo.png";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "@/components/SocialIcons";
import { TALABAT_RESTAURANT_URL } from "@/components/menu/TalabatMenuPromo";
import {
  CAREERS_FORM_URL,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
} from "@/lib/contact";
import { SITE_URL } from "@/lib/site";
import { ExternalLink, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const pageLinks: { label: string; to: string }[] = [
  { label: "Home", to: "/#home" },
  { label: "About", to: "/#about-drinkat" },
  { label: "Menu", to: "/menu" },
  { label: "Socials", to: "/socials" },
  { label: "Visit us", to: "/visit" },
];

const contactLinks: { label: string; href: string; external?: boolean }[] = [
  { label: CONTACT_PHONE_DISPLAY, href: CONTACT_PHONE_HREF },
  { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { label: "Careers", href: CAREERS_FORM_URL, external: true },
  { label: "Order on Talabat", href: TALABAT_RESTAURANT_URL, external: true },
];

const socialLinks: {
  label: string;
  href: string;
  Icon: typeof InstagramIcon;
  handle: string;
}[] = [
  {
    label: "Instagram",
    href: "https://instagram.com/drinkatjo",
    Icon: InstagramIcon,
    handle: "@drinkatjo",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Jodrinkat/",
    Icon: FacebookIcon,
    handle: "JoDrinkat",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@drinkat.jo",
    Icon: TikTokIcon,
    handle: "@drinkat.jo",
  },
];

const sectionHeadingClass =
  "font-rounded text-[10px] sm:text-xs font-medium uppercase tracking-[0.18em] text-primary/75 mb-3";
const sectionLinkClass =
  "font-rounded inline-flex items-center gap-1 text-[11px] sm:text-sm font-medium text-primary/95 hover:opacity-90";

const RetroFooter = () => {
  return (
    <footer className="bg-background py-8 md:py-12 relative">
      <WarpedCheckerboard />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <RetroBorder />

        <div className="my-6 md:my-10 grid grid-cols-3 gap-5 sm:gap-6 md:gap-10 lg:gap-14 text-left">
          <div className="order-2 col-span-3 min-w-0 space-y-3 md:order-1 md:col-span-1 flex flex-col items-start">
            <img
              src={drinkatLogo}
              alt="Drinkat logo"
              className="h-11 w-auto object-contain object-left sm:h-14 lg:h-16"
            />
            <p className="font-rounded text-primary/70 text-[11px] sm:text-sm tracking-wider uppercase">
              Drink Now since 2019
            </p>
            <p className="font-rounded text-primary/65 text-[11px] sm:text-sm leading-snug sm:leading-relaxed max-w-sm">
              Coffee, juices, and smash burgers — three branches across Amman &amp; Zarqa.
            </p>
            <a
              href={SITE_URL}
              className={sectionLinkClass}
            >
              drinkat.jo
              <ExternalLink className="h-3 w-3 shrink-0 opacity-70 sm:h-3.5 sm:w-3.5" aria-hidden />
            </a>
            <div className="flex flex-row flex-wrap gap-2 pt-1 sm:pt-2">
              {socialLinks.map(({ label, href, Icon, handle }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 transition-colors sm:h-10 sm:w-10"
                  aria-label={`${label} (${handle})`}
                >
                  <Icon className="h-4 w-4 sm:h-[1.05rem] sm:w-[1.05rem]" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer pages" className="order-1 min-w-0 md:order-2">
            <h2 className={sectionHeadingClass}>Pages</h2>
            <ul className="space-y-2.5">
              {pageLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className={sectionLinkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="order-1 min-w-0 md:order-3">
            <h2 className={sectionHeadingClass}>Contact</h2>
            <ul className="space-y-2.5">
              {contactLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className={sectionLinkClass}
                  >
                    {item.label}
                    {item.external && <ExternalLink className="h-3 w-3 shrink-0 opacity-70" aria-hidden />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 min-w-0 md:order-4">
            <h2 className={sectionHeadingClass}>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3 w-3 shrink-0 text-primary/50" aria-hidden />
                Locations
              </span>
            </h2>
            <p className="font-rounded text-primary/65 text-[11px] sm:text-sm leading-snug sm:leading-relaxed">
              Airport Road Amman, Hashemite University (Zarqa), and Middle East University (Amman).
            </p>
            <Link to="/visit" className={`${sectionLinkClass} mt-2 underline underline-offset-4`}>
              Hours &amp; directions
            </Link>
          </div>
        </div>

        <RetroBorder />

        <div className="mt-6 border-t border-primary/20 pt-4 text-center">
          <p className="font-rounded text-primary/55 text-[11px] sm:text-xs tracking-wider uppercase">
            © {new Date().getFullYear()} Drinkat — All rights reserved
          </p>
          <p className="font-rounded normal-case tracking-normal text-primary/40 text-[11px] sm:text-xs mt-2 max-w-2xl mx-auto">
            Made with care in Jordan. Prices, items, and hours may vary by branch — see Visit us for details.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default RetroFooter;
