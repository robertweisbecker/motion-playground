'use client';

import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const toggleVariants = cva(
  [
    'inline-flex items-center justify-center gap-1',
    'select-none transition-all',
    'font-medium whitespace-nowrap',
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 ",
    'aria-invalid:outline-destructive',
    'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-none disabled:text-muted-foreground',
    'focus-visible:border-ring focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:z-10 focus-visible:outline-ring',
  ],
  {
    variants: {
      variant: {
        default: [
          'text-muted-foreground bg-none',
          'hover:text-accent-foreground hover:bg-accent-hover',
          'data-toggled:bg-accent-active data-toggled:text-foreground',
        ],
        ghost: [
          'text-muted-foreground',
          'hover:bg-accent hover:text-accent-foreground hover:[&_svg]:not-only:fill-current/50',
          'data-toggled:bg-secondary data-toggled:text-secondary-foreground',
        ],
        outline: [
          'border border-border text-muted-foreground',
          'hover:bg-accent hover:text-foreground hover:not-data-toggled:border-input',
          'data-toggled:bg-secondary data-toggled:text-secondary-foreground data-toggled:border-primary data-toggled:rounded-md',
        ],
        dashed: [
          'border border-dashed border-border text-muted-foreground bg-accent/50',
          'hover:bg-accent',
          'data-toggled:bg-card data-toggled:text-card-foreground data-toggled:border-solid data-toggled:border-current',
        ],
        unstyled: '',
        elevated: [
          'text-muted-foreground',
          'not-data-toggled:hover:bg-current/10',
          'border-none',
          'data-toggled:bg-current/12 data-toggled:text-card-foreground',
          'data-toggled:bg-card',
          'data-toggled:shadow-dropdown-item',
        ],
      },
      round: {
        true: 'rounded-full',
      },
      size: {
        default: 'h-8 px-2 min-w-8 text-sm rounded-md',
        sm: 'h-button-sm px-1.5 min-w-button-sm text-sm rounded-sm',
        lg: 'h-button-lg px-2.5 min-w-button-lg text-base rounded-md',
      },
    },
    compoundVariants: [
      {
        round: true,
        size: 'default',
        className: 'rounded-full',
      },
    ],
    defaultVariants: {
      variant: 'ghost',
      size: 'default',
    },
  },
);

function Toggle({
  className,
  variant,
  size = 'default',
  children,
  pressed,
  round,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      pressed={pressed}
      className={cn(toggleVariants({ variant, size, round }), className)}
      {...props}
    >
      {children}
    </TogglePrimitive.Root>
  );
}

export { Toggle, toggleVariants };
