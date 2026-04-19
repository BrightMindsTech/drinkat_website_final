import { FacebookIcon, InstagramIcon, TikTokIcon } from "@/components/SocialIcons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { playfulHoverTap } from "@/lib/motion";

const MotionLink = motion(Link);

const socialNavItems: {
  label: string;
  href: string;
  Icon: typeof InstagramIcon;
}[] = [
  { label: "Drinkat on Instagram", href: "https://instagram.com/drinkatjo", Icon: InstagramIcon },
  { label: "Drinkat on Facebook", href: "https://www.facebook.com/Jodrinkat/", Icon: FacebookIcon },
  { label: "Drinkat on TikTok", href: "https://www.tiktok.com/@drinkat.jo", Icon: TikTokIcon },
];

const exploreLinks: { label: string; to: string; hint: string }[] = [
  { label: "Menu", to: "/menu", hint: "Browse drinks & food by category" },
  { label: "Socials", to: "/socials", hint: "Instagram, Facebook & TikTok" },
  { label: "Visit us", to: "/visit", hint: "Locations & branch info" },
];

function HamburgerIcon({ className }: { className?: string }) {
  return (
    <span className={cn("flex flex-col justify-center gap-[5px]", className)} aria-hidden>
      <span className="h-0.5 w-5 rounded-full bg-current" />
      <span className="h-0.5 w-5 rounded-full bg-current" />
      <span className="h-0.5 w-5 rounded-full bg-current" />
    </span>
  );
}

export type NavExploreSheetProps = {
  /** Visual variant: hero uses a light control on video; nav uses teal/outline. */
  triggerVariant?: "hero" | "nav";
};

export function NavExploreSheet({ triggerVariant = "nav" }: NavExploreSheetProps) {
  const reducedMotion = useReducedMotion();
  const isHero = triggerVariant === "hero";

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className={cn(
            "shrink-0 rounded-full shadow-sm backdrop-blur-sm",
            isHero
              ? "border-white/35 bg-black/30 text-white hover:bg-black/45 hover:text-white"
              : "border-primary/40 bg-background/80 text-primary hover:bg-primary/10",
          )}
          aria-label="Open navigation menu"
        >
          <HamburgerIcon />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex h-full w-[min(100vw,20rem)] flex-col gap-0 sm:max-w-sm"
      >
        <SheetHeader className="text-left">
          <SheetTitle className="font-script text-2xl text-primary">Explore Drinkat</SheetTitle>
          <SheetDescription>Menu, socials, and locations</SheetDescription>
        </SheetHeader>
        <nav className="mt-6 flex flex-col gap-1" aria-label="Site sections">
          {exploreLinks.map(({ label, to, hint }) => (
            <SheetClose asChild key={to}>
              <MotionLink
                to={to}
                className="font-rounded block rounded-xl border border-transparent px-3 py-3 text-left transition-colors hover:bg-primary/10 focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary"
                {...playfulHoverTap(reducedMotion)}
              >
                <span className="block font-bold uppercase tracking-wide text-primary">{label}</span>
                <span className="mt-0.5 block text-xs font-medium text-muted-foreground">{hint}</span>
              </MotionLink>
            </SheetClose>
          ))}
        </nav>
        <div className="mt-auto border-t border-border pt-6">
          <p className="font-rounded mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Follow us
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {socialNavItems.map(({ label, href, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex rounded-full border border-primary/20 p-2 text-primary transition-colors hover:bg-primary/10"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

/** Re-export for hash navigation on home logo links (optional use). */
export function handleHomeHashClick(
  e: MouseEvent<HTMLAnchorElement>,
  to: string,
  pathname: string,
  hash: string,
) {
  if (!to.startsWith("/#")) return;
  const id = decodeURIComponent(to.slice(2));
  if (pathname === "/" && hash === `#${id}`) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }
}
