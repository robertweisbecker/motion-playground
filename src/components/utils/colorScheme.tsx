import { cn } from '@/lib/utils';

export const colorScheme = {
  orange: {
    solid: {
      initial:
        'bg-orange-500 text-white text-shadow-xs dark:bg-orange-400 dark:text-black dark:text-shadow-none',
      hover:
        'hover:bg-orange-600 hover:text-orange-50 dark:hover:bg-orange-500 dark:hover:text-black',
      active:
        'active:bg-orange-700 active:text-orange-100 dark:active:bg-orange-600 dark:active:text-black',
    },
    subtle: {
      initial: 'bg-orange-50 text-orange-700 dark:bg-orange-800 dark:text-orange-400',
      hover:
        'hover:bg-orange-100 hover:text-orange-800 dark:hover:bg-orange-900 dark:hover:text-orange-500',
      active:
        'active:bg-orange-200 active:text-orange-900 dark:active:bg-orange-950 dark:active:text-orange-600',
    },
    outline: {
      initial: 'ring ring-orange-200 text-orange-700',
      hover: 'hover:bg-orange-50 hover:ring-orange-200',
      active: 'active:bg-orange-100 active:ring-orange-300',
    },
  },
  blueSolid: 'bg-blue-500 text-white text-shadow-xs',
  blueSolidHover: 'bg-blue-500 text-white text-shadow-xs',
  blueSolidActive: 'bg-blue-500 text-white text-shadow-xs',
  blue: {
    solid: {
      initial: 'bg-blue-500 text-white text-shadow-xs',
      hover: 'hover:bg-blue-600 hover:text-blue-50',
      active: 'active:bg-blue-700 active:text-blue-100',
    },
    subtle: {
      initial: 'bg-blue-50 text-blue-700',
      hover: 'hover:bg-blue-100 hover:text-blue-800',
      active: 'active:bg-blue-200 active:text-blue-900',
    },
    outline: {
      initial: 'ring ring-blue-200 text-blue-700',
      hover: 'hover:bg-blue-50 hover:ring-blue-300',
      active: 'active:bg-blue-100 active:ring-blue-400',
    },
  },
  navy: {
    solid: {
      initial: 'bg-navy-500 text-white text-shadow-xs',
      hover: 'hover:bg-navy-600 hover:text-navy-50',
      active: 'active:bg-navy-700 active:text-navy-100',
    },
    subtle: {
      initial: 'bg-navy-50 text-navy-700',
      hover: 'hover:bg-navy-100 hover:text-navy-800',
      active: 'active:bg-navy-200 active:text-navy-900',
    },
    outline: {
      initial: 'ring ring-navy-200 text-navy-700',
      hover: 'hover:bg-navy-50 hover:ring-navy-300',
      active: 'active:bg-navy-100 active:ring-navy-400',
    },
  },
  red: {
    solid: {
      initial: 'bg-red-500 text-white text-shadow-xs',
      hover: 'hover:bg-red-600 hover:text-red-50',
      active: 'active:bg-red-700 active:text-red-100',
    },
    subtle: {
      initial: 'bg-red-50 text-red-700',
      hover: 'hover:bg-red-100 hover:text-red-800',
      active: 'active:bg-red-200 active:text-red-900',
    },
    outline: {
      initial: 'ring ring-red-200 text-red-700',
      hover: 'hover:bg-red-50 hover:ring-red-300',
      active: 'active:bg-red-100 active:ring-red-400',
    },
  },
};
// usage
// <button className={`${colorVariants[color]} ...`}>{children}</button>;
