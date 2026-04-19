import type { TargetAndTransition, Transition, Variants } from "framer-motion";

export const sectionViewport = { once: true, amount: 0.2 };

/** Easier scroll trigger than default `amount` — use when nested sections must not stay `opacity: 0` */
export const sectionViewportEasy = { once: true, amount: 0.08 as const };

const springTransition: Transition = {
  type: "spring",
  stiffness: 130,
  damping: 18,
};

export const sectionStagger = (reducedMotion: boolean, delayChildren = 0): Variants => ({
  hidden: reducedMotion ? { opacity: 1 } : { opacity: 0 },
  visible: {
    opacity: 1,
    transition: reducedMotion
      ? { duration: 0 }
      : {
          staggerChildren: 0.12,
          delayChildren,
        },
  },
});

export const riseIn = (reducedMotion: boolean, distance = 26): Variants => ({
  hidden: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: reducedMotion ? { duration: 0 } : springTransition,
  },
});

export const scaleIn = (reducedMotion: boolean): Variants => ({
  hidden: reducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: reducedMotion ? { duration: 0 } : springTransition,
  },
});

export const floatLoop = (reducedMotion: boolean): TargetAndTransition | undefined =>
  reducedMotion
    ? undefined
    : {
        y: [0, -4, 0, 4, 0],
        transition: {
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      };

export const playfulHoverTap = (
  reducedMotion: boolean
): {
  whileHover?: TargetAndTransition;
  whileTap?: TargetAndTransition;
} =>
  reducedMotion
    ? {}
    : {
        whileHover: {
          scale: 1.03,
          y: -3,
          rotate: -0.5,
          transition: { duration: 0.2, ease: "easeOut" },
        },
        whileTap: {
          scale: 0.98,
          transition: { duration: 0.12, ease: "easeOut" },
        },
      };
