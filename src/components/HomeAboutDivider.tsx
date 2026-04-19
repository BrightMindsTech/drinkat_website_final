import type { CSSProperties } from "react";
import { Coffee, CupSoda, Sandwich } from "lucide-react";

/** Cyan/teal + white checker — bottom edge of the Home↔About divider */
const CHECKER_STRIP_STYLE: CSSProperties = {
  backgroundColor: "hsl(var(--background))",
  backgroundImage: `
    linear-gradient(45deg, hsl(var(--primary)) 25%, transparent 25%),
    linear-gradient(-45deg, hsl(var(--primary)) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, hsl(var(--primary)) 75%),
    linear-gradient(-45deg, transparent 75%, hsl(var(--primary)) 75%)
  `,
  backgroundSize: "20px 20px",
  backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
};

/**
 * Top edge of the About section — white band with light icons + checkered strip.
 */
export function HomeAboutDivider() {
  return (
    <div
      className="relative z-10 m-0 block w-full shrink-0 bg-white dark:bg-background pointer-events-none"
      aria-hidden
    >
      <div className="flex items-center justify-center gap-10 md:gap-14 px-4 pt-0 pb-2 md:pb-2.5">
        <Sandwich className="h-6 w-6 md:h-7 md:w-7 text-primary/25" strokeWidth={1.5} />
        <CupSoda className="h-6 w-6 md:h-7 md:w-7 text-primary/30" strokeWidth={1.5} />
        <Coffee className="h-6 w-6 md:h-7 md:w-7 text-primary/25" strokeWidth={1.5} />
      </div>
      <div className="h-4 md:h-5 w-full" style={CHECKER_STRIP_STYLE} />
    </div>
  );
}
