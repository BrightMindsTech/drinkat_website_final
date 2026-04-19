import RetroBorder from "./RetroBorder";
import WarpedCheckerboard from "./WarpedCheckerboard";
import drinkatLogo from "@/assets/drinkat-logo.png";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "@/components/SocialIcons";
import { TALABAT_RESTAURANT_URL } from "@/components/menu/TalabatMenuPromo";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_HREF } from "@/lib/contact";
import { SITE_URL } from "@/lib/site";
import { ExternalLink, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

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
  "font-rounded text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-primary/50 mb-2 sm:mb-4";

const RetroFooter = () => {
  return (
    <footer className="bg-background py-8 md:py-12 relative">
      <WarpedCheckerboard />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <RetroBorder />

        <div className="my-6 md:my-10 flex flex-col gap-6 md:gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          {/* Brand: horizontal on small screens to save vertical space */}
          <div className="flex w-full max-w-none flex-row items-start gap-3 sm:gap-4 text-left lg:max-w-md lg:flex-col lg:gap-0">
            <img
              src={drinkatLogo}
              alt="Drinkat logo"
              className="h-11 w-auto shrink-0 object-contain object-left sm:h-14 lg:h-16"
            />
            <div className="min-w-0 flex-1 space-y-1.5 sm:space-y-2">
              <p className="font-rounded text-primary/70 text-[11px] sm:text-sm tracking-wider uppercase">
                Drink Now since 2019
              </p>
              <p className="font-arabic text-primary/80 text-lg sm:text-xl leading-snug">درينك ناو</p>
              <p className="font-rounded text-primary/60 text-[11px] sm:text-sm leading-snug sm:leading-relaxed">
                Coffee, juices, and smash burgers — three branches across Amman &amp; Zarqa.
              </p>
              <a
                href={SITE_URL}
                className="font-rounded inline-flex items-center gap-1.5 pt-0.5 text-xs font-semibold text-primary underline underline-offset-4 hover:opacity-90 sm:text-sm"
              >
                drinkat.jo
                <ExternalLink className="h-3 w-3 shrink-0 opacity-70 sm:h-3.5 sm:w-3.5" aria-hidden />
              </a>
            </div>
          </div>

          {/* Locations full width on narrow screens; Contact + Order beside each other below; 3 columns from sm */}
          <div className="grid w-full min-w-0 grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-8 lg:max-w-none lg:flex-1 lg:gap-x-10 text-left">
            <div className="col-span-2 min-w-0 sm:col-span-1">
              <h2 className={sectionHeadingClass}>
                <span className="inline-flex items-center gap-1.5 sm:gap-2">
                  <MapPin className="h-3 w-3 shrink-0 text-primary/45 sm:h-3.5 sm:w-3.5" aria-hidden />
                  Locations
                </span>
              </h2>
              <p className="font-rounded text-primary/65 text-[11px] leading-snug sm:text-sm sm:leading-relaxed mb-2 sm:mb-4">
                Airport Road Amman, Hashemite University (Zarqa), and Middle East University (Amman).
              </p>
              <Link
                to="/visit"
                className="font-rounded inline-flex items-center gap-1 font-semibold text-primary text-[11px] uppercase tracking-wide underline underline-offset-4 hover:opacity-90 sm:text-sm"
              >
                Hours &amp; directions
              </Link>
            </div>

            <div className="min-w-0">
              <h2 className={sectionHeadingClass}>Contact</h2>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href={CONTACT_PHONE_HREF}
                    className="font-rounded font-semibold text-primary text-[11px] tabular-nums hover:opacity-90 sm:text-sm"
                  >
                    {CONTACT_PHONE_DISPLAY}
                  </a>
                  <p className="font-rounded text-primary/45 text-[10px] mt-0.5 uppercase tracking-wide sm:text-xs sm:mt-1">
                    Call or WhatsApp
                  </p>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-rounded font-semibold text-primary text-[10px] break-all leading-snug hover:opacity-90 sm:text-sm"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </li>
              </ul>
            </div>

            <div className="min-w-0">
              <h2 className={sectionHeadingClass}>Order &amp; follow</h2>
              <a
                href={TALABAT_RESTAURANT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-rounded inline-flex items-center gap-1.5 font-bold text-primary text-[11px] uppercase tracking-wide underline underline-offset-4 hover:opacity-90 sm:text-sm"
              >
                Order on Talabat
                <ExternalLink className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" aria-hidden />
              </a>
              <p className="font-rounded text-primary/45 text-[10px] mt-1 mb-3 uppercase tracking-wide sm:text-xs sm:mt-2 sm:mb-5">
                Delivery across our areas
              </p>
              <div className="flex flex-row flex-wrap gap-2 sm:gap-3">
                {socialLinks.map(({ label, href, Icon, handle }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-primary/25 bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary/40 transition-colors sm:h-11 sm:w-11"
                    aria-label={`${label} (${handle})`}
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <RetroBorder />

        <div className="font-rounded text-primary/40 text-xs mt-8 space-y-2 tracking-wider uppercase text-center">
          <p>© {new Date().getFullYear()} Drinkat — All rights reserved</p>
          <p className="normal-case tracking-normal text-primary/35 max-w-lg mx-auto">
            Made with care in Jordan. Prices, items, and hours may vary by branch — see Visit us for details.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default RetroFooter;
