import type { ComponentType, CSSProperties } from "react";
import { Coffee, CupSoda, Sandwich, Wine } from "lucide-react";
import { cn } from "@/lib/utils";

/** Simple stroke icon — french fries in a carton (no Lucide “fries” glyph). */
function FriesIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M7 20h10l1.2-9H5.8L7 20z" />
      <path d="M9 11v9M12 10v10M15 11v9" />
      <path d="M8 11l1.5-5M12 9l0-4M16 11l-1.5-5" />
    </svg>
  );
}

type FloatItem = {
  Icon: ComponentType<{ className?: string }>;
  className: string;
  style?: CSSProperties;
  anim: "about-float-a" | "about-float-b" | "about-float-c";
  delay: string;
};

const ITEMS: FloatItem[] = [
  { Icon: CupSoda, className: "left-[4%] top-[6%] w-12 h-12 md:w-14 md:h-14", anim: "about-float-a", delay: "0s" },
  { Icon: Sandwich, className: "right-[6%] top-[10%] w-11 h-11 md:w-[3.25rem] md:h-[3.25rem]", anim: "about-float-b", delay: "0.4s" },
  { Icon: Coffee, className: "left-[8%] bottom-[18%] w-10 h-10 md:w-12 md:h-12", anim: "about-float-c", delay: "0.8s" },
  { Icon: Wine, className: "right-[10%] bottom-[22%] w-10 h-10 md:w-12 md:h-12", anim: "about-float-a", delay: "1.2s" },
  { Icon: FriesIcon, className: "left-[14%] top-[42%] w-11 h-11 md:w-[3.25rem] md:h-[3.25rem]", anim: "about-float-b", delay: "0.2s" },
  { Icon: CupSoda, className: "right-[18%] top-[38%] w-9 h-9 md:w-11 md:h-11", anim: "about-float-c", delay: "1s" },
  { Icon: Sandwich, className: "left-[2%] top-[55%] w-9 h-9 md:w-10 md:h-10", anim: "about-float-a", delay: "0.6s" },
  { Icon: FriesIcon, className: "right-[4%] bottom-[8%] w-12 h-12 md:w-14 md:h-14", anim: "about-float-b", delay: "1.4s" },
  { Icon: Coffee, className: "left-[42%] top-[4%] w-8 h-8 md:w-10 md:h-10 opacity-50", anim: "about-float-c", delay: "0.3s" },
  { Icon: Wine, className: "right-[38%] bottom-[6%] w-8 h-8 md:w-10 md:h-10 opacity-50", anim: "about-float-a", delay: "0.9s" },
];

type AboutFloatingDecorProps = {
  reducedMotion: boolean;
};

export function AboutFloatingDecor({ reducedMotion }: AboutFloatingDecorProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
      aria-hidden
    >
      {ITEMS.map((item, i) => {
        const { Icon, className, style, anim, delay } = item;
        return (
          <div
            key={`${anim}-${i}`}
            className={cn(
              "absolute text-primary/25 md:text-primary/30",
              !reducedMotion && anim === "about-float-a" && "animate-about-float-a",
              !reducedMotion && anim === "about-float-b" && "animate-about-float-b",
              !reducedMotion && anim === "about-float-c" && "animate-about-float-c",
              reducedMotion && "opacity-40",
              className,
            )}
            style={{
              ...style,
              animationDelay: reducedMotion ? undefined : delay,
            }}
          >
            <Icon className="h-full w-full drop-shadow-sm" />
          </div>
        );
      })}
    </div>
  );
}
