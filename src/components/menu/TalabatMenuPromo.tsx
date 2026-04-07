import type { MouseEvent, SyntheticEvent } from "react";
import { cn } from "@/lib/utils";

export const TALABAT_RESTAURANT_URL =
  "https://www.talabat.com/jordan/restaurant/769023/drinkat-marj-el-hamam?aid=4962";

export const TALABAT_LOGO_SRC = "https://www.talabat.com/assets/images/remix-logo.svg";

/** Framer Motion parents use pointer capture for tap/hover; stop propagation so `<a href>` works in Safari/WebKit. */
function isolateExternalLink(e: SyntheticEvent) {
  e.stopPropagation();
}

/**
 * When the default navigation is swallowed, open in the same user gesture (required for popup blockers).
 * If `window.open` is blocked, the native `href` still runs.
 */
function openTalabatTab(e: MouseEvent<HTMLAnchorElement>) {
  isolateExternalLink(e);
  const url = e.currentTarget.href;
  const win = window.open(url, "_blank", "noopener,noreferrer");
  if (win) {
    e.preventDefault();
  }
}

type TalabatMoreOnBannerProps = {
  className?: string;
};

/** “More on” + Talabat logo link — use above category/product grids. */
export function TalabatMoreOnBanner({ className }: TalabatMoreOnBannerProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-2 mb-6 md:mb-8",
        className,
      )}
    >
      <span className="font-rounded font-semibold text-primary text-sm md:text-base">
        More on
      </span>
      <a
        href={TALABAT_RESTAURANT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 inline-flex items-center rounded-lg ring-1 ring-primary/15 bg-white px-3 py-2 shadow-sm hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-label="Drinkat on Talabat — opens in a new tab"
        onPointerDown={isolateExternalLink}
        onClick={openTalabatTab}
      >
        <img src={TALABAT_LOGO_SRC} alt="" className="h-7 md:h-8 w-auto" />
      </a>
    </div>
  );
}

type TalabatItemLinkProps = {
  className?: string;
};

/** Compact Talabat logo link for under each menu product card. */
export function TalabatItemLink({ className }: TalabatItemLinkProps) {
  return (
    <a
      href={TALABAT_RESTAURANT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "relative z-10 inline-flex items-center justify-center rounded-lg ring-1 ring-primary/15 bg-background px-2.5 py-1.5 hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        className,
      )}
      aria-label="Order on Talabat"
      onPointerDown={isolateExternalLink}
      onClick={openTalabatTab}
    >
      <img src={TALABAT_LOGO_SRC} alt="" className="h-5 w-auto" />
    </a>
  );
}
