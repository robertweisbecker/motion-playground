import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '../ui/button';
import { motion } from 'framer-motion';

const ANIMATIONS = {
  whileTap: { scale: 0.98 },
  initial: { scale: 1 },
  animate: { scale: 1 },
  transition: {
    type: 'spring',
    stiffness: 600,
    damping: 30,
    duration: 50,
  },
} as const;

export function GradientButton({
  //   size = 'lg',
  //   shape = 'pill',
  //   iconOnly,
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof motion.button>, 'children'> & {
  children?: React.ReactNode;
}) {
  return (
    <motion.button
      variants={ANIMATIONS}
      whileTap={ANIMATIONS.whileTap}
      initial={ANIMATIONS.initial}
      animate={ANIMATIONS.animate}
      transition={ANIMATIONS.transition}
      {...props}
      className={cn(
        className,
        'z-1 h-11 rounded-full text-md font-medium',
        'relative after:absolute after:inset-0',
        'after:bg-filter-[url(#noiseFilter)] after:pointer-none after:z-1 after:opacity-10',
        'bg-[image:linear-gradient(182.51deg,_rgba(255,_255,_255,_0.02)_27.09%,_rgba(90,_90,_90,_0.02)_58.59%,_rgba(0,_0,_0,_0.02)_92.75%)]',
        'dark:shadow-[0_30.0444px_16.2444px_rgba(0,0,0,.12),0px_15.6px_8.2875px_rgba(0,0,0,.07),0_6.35556px_4.15556px_rgba(0,_0,_0,_0.04))]',
        'bg-[color:var(--popover)] shadow-lg outline-1 -outline-offset-1 outline-outline',
        'overflow-hidden backdrop-blur-md transition-colors duration-100 hover:bg-accent/30',
        'before:absolute before:inset-0 before:rounded-[inherit] before:[background-image:var(--gradientBorder-gradient)] before:p-[var(--gradientBorder-size,_1px)] before:[mask:linear-gradient(black,_black)_content-box_exclude,_linear-gradient(black,_black)]',
      )}
      style={
        {
          '--gradientBorder-size': '0.5px',
          '--gradientBorder-gradient':
            'linear-gradient(175deg, rgba(255, 255, 255, 0.2464) 10.85%, rgba(20, 20, 20, 0.56) 24.36%, rgba(50, 50, 50, 0.56) 73.67%, rgba(255, 255, 255, 0.56) 90.68%)',
        } as React.CSSProperties
      }
    >
      {children}
      <NoiseFilter />
    </motion.button>
  );
}

function NoiseFilter() {
  return (
    <div className="size-0 overflow-hidden">
      <svg xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="6.29"
            numOctaves="2"
            stitchTiles="stitch"
          ></feTurbulence>
          <feColorMatrix type="saturate" values="0"></feColorMatrix>
        </filter>
        <defs>
          <linearGradient
            id="graphEmptyGradient"
            x1="9"
            y1="0"
            x2="9"
            y2="117"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0"></stop>
            <stop offset="0.170717" stopColor="white" stopOpacity="0.33"></stop>
            <stop offset="1" stopColor="white"></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient
            id="graphDefault"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B3AEF5"></stop>
            <stop offset="43%" stopColor="#D7CBE7"></stop>
            <stop offset="65%" stopColor="#E5C8C8"></stop>
            <stop offset="100%" stopColor="#ECBDAA"></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="sparkDefault" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop stopColor="#B3AEF5"></stop>
            <stop offset="43%" stopColor="#D7CBE7"></stop>
            <stop offset="65%" stopColor="#E5C8C8"></stop>
            <stop offset="100%" stopColor="#ECBDAA"></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient
            id="sparkAreaDefault"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop stopColor="rgba(230, 197, 195, 0.2)"></stop>
            <stop offset="100%" stopColor="rgba(230, 197, 195, 0)"></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="sparkIdea" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop stopColor="#1964BB"></stop>
            <stop offset="1" stopColor="#55BBF7"></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="sparkPositive" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop stopColor="#4EBE96"></stop>
            <stop offset="0.352563" stopColor="#44B48C"></stop>
            <stop offset="0.598296" stopColor="#3DC1B9"></stop>
            <stop offset="1" stopColor="#3EC6D9"></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient
            id="sparkPositiveArea"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop stopColor="#4EBE96" stopOpacity="0.23"></stop>
            <stop offset="1" stopColor="#4EBE96" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="sparkNegative" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop stopColor="#D84F68"></stop>
            <stop offset="1" stopColor="#9F2A4D"></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient
            id="sparkNegativeArea"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop stopColor="#FF5C5C" stopOpacity="0.23"></stop>
            <stop offset="1" stopColor="#FF5C5C" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
