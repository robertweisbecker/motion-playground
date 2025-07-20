import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center text-center font-medium tracking-none w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none transition-[color,box-shadow,border-color] overflow-hidden tabular-nums leading-none max-w-full truncate',

  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground [a&]:hover:bg-primary-hover',
        secondary:
          'bg-secondary border-border text-secondary-foreground [a&]:hover:bg-secondary-hover',
        destructive: 'bg-destructive text-white',
        outline:
          'ring ring-current/16 shadow-sm bg-card text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
        subtle: 'text-inherit bg-[currentColor]/12 [a&]:hover:bg-[currentColor]/20 ring-0',
        tag: 'px-3 py-1 text-md rounded-md inset-ring-border inset-ring-1',
        info: [
          'bg-cyan-400/15 text-cyan-700',
          'hover:bg-cyan-400/30',
          'dark:bg-cyan-400/20 dark:text-cyan-300',
          'dark:hover:bg-cyan-400/15',
        ],
        warning: [
          'bg-amber-400/30 text-amber-800',
          '[a&]:hover:bg-amber-400/30',
          'dark:bg-amber-400/20 dark:text-amber-400',
          'dark:[a&]:hover:bg-amber-400/15',
        ],
      },
      shape: {
        default: 'rounded-md',
        pill: 'rounded-full',
      },
      size: {
        default: 'text-sm leading-5 font-medium min-w-4.5 px-1.5 py-0.5 gap-1 rounded-md',
        dot: 'size-2 p-0 border-0 my-auto overflow-hidden [&_span]:invisible rounded-full',
      },
      color: {
        neutral: 'text-secondary-foreground bg-secondary',
        info: ['text-blue'],
        error: 'text-destructive',
        warning: [],
      },
      disabled: {
        true: 'cursor-not-allowed bg-gray-200 text-gray-400',
      },
    },
    compoundVariants: [
      {
        variant: 'secondary',
        disabled: false,
        className: 'hover:bg-secondary-hover',
      },
    ],
    defaultVariants: {
      variant: 'secondary',
      shape: 'default',
      size: 'default',
      disabled: false,
    },
  },
);

function Badge({
  className,
  variant,
  color,
  disabled,
  size,
  children,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      data-slot="badge"
      className={cn(
        badgeVariants({
          variant,
          color,
          size,
          disabled,
        }),
        className,
      )}
      {...props}
    >
      {/* <span className="contents"> */}
      {children}
      {/* </span> */}
    </Comp>
  );
}

export { Badge, badgeVariants };
