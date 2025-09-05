'use client';

import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva, type VariantProps, cx } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const toggleVariants = cva(
  [
    'inline-flex items-center justify-center gap-1',
    'select-none transition-all',
    'font-medium whitespace-nowrap',
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 ",
    'aria-invalid:outline-destructive',
    'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-none disabled:text-gray-400',
    'focus-visible:border-ring focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:z-10 focus-visible:outline-ring',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-transparent text-muted-foreground ',
          'hover:bg-muted hover:text-foreground',
          'data-toggled:bg-secondary data-toggled:ring-primary data-toggled:text-foreground',
        ],
        ghost: [
          'text-muted-foreground',
          'data-toggled:bg-accent data-toggled:text-accent-foreground',
          'hover:bg-secondary hover:text-foreground',
        ],
        outline: [
          'border border-border bg-background text-secondary-foreground',
          'hover:bg-muted',
          'data-toggled:bg-accent data-toggled:border-current data-toggled:text-accent-foreground',
        ],
        dashed: [
          'border border-dashed bg-muted text-muted-foreground',
          'hover:border-dotted',
          'data-toggled:bg-card data-toggled:border-solid data-toggled:text-foreground',
        ],
        destructive: '',
        unstyled: '',
        elevated: [
          'text-muted-foreground',
          'not-data-toggled:hover:bg-current/10',
          // 'active:bg-card ',
          'data-toggled:bg-current/12 data-toggled:text-foreground',
          // 'data-toggled:ring-[0.5px] data-toggled:ring-border data-toggled:shadow-button-highlight',
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
}: React.ComponentProps<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>) {
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
