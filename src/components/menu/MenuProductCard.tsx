import { CupSoda } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { playfulHoverTap } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { MenuItem } from "./menuData";
import { PriceBadges } from "./PriceBadges";
import { TalabatItemLink } from "./TalabatMenuPromo";

type MenuProductCardProps = {
  item: MenuItem;
  className?: string;
};

export function MenuProductCard({ item, className }: MenuProductCardProps) {
  const reducedMotion = useReducedMotion();
  const isArabicHeavy = /[\u0600-\u06FF]/.test(item.name);

  return (
    <div className={cn("flex h-full flex-col", className)}>
      <motion.article
        className="flex min-h-0 flex-1 flex-col"
        {...playfulHoverTap(reducedMotion)}
      >
        <div className="relative aspect-[1/1] overflow-hidden rounded-xl flex items-center justify-center ">
          {item.imageSrc ? (
            <img
              src={item.imageSrc}
              alt={item.name}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          ) : (
            <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
              <CupSoda className="w-14 h-14" strokeWidth={1.25} aria-hidden />
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-3 px-0.5">
          <h2
            className={cn(
              "font-semibold text-primary text-sm leading-snug line-clamp-3 min-h-[2.75rem]",
              isArabicHeavy ? "font-arabic text-right" : "font-rounded",
            )}
          >
            {item.name}
          </h2>
          <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3 font-rounded">
            {item.description}
          </p>
          <div className="mt-auto pt-1">
            <PriceBadges item={item} variant="onCard" />
          </div>
        </div>
      </motion.article>
      <TalabatItemLink className="mt-2 self-start" />
    </div>
  );
}
