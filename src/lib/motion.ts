import type { Variants } from 'framer-motion'

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: {
      duration: 1,
      delay,
      ease: 'easeOut',
    },
  }),
}

export const scaleUp: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}
