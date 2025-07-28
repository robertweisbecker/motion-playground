'use client';

import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva, type VariantProps, cx } from 'class-variance-authority';

const toggleVariants = cva(
  [
    'inline-flex items-center justify-center gap-1',
    'select-none transition-all',
    'font-medium whitespace-nowrap',
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 ",
    'aria-invalid:outline-destructive',
    'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-none disabled:text-gray-400',
    'focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-ring',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-card ring ring-border',
          'hover:bg-secondary hover:text-accent-foreground',
          'data-toggled:bg-accent data-toggled:ring-primary data-toggled:text-accent-foreground',
        ],
        ghost: [
          'text-secondary-foreground',
          'data-toggled:bg-accent data-toggled:text-accent-foreground',
          'hover:bg-secondary hover:text-foreground',
        ],
        outline: [
          'border border-input border-dashed bg-transparent text-foreground',
          'hover:bg-current/10 ',
          'data-toggled:bg-current/10 data-toggled:inset-ring-1 data-toggled:border-current data-toggled:border-solid data-toggled:text-foreground',
        ],
        destructive: '',
        unstyled: '',
        elevated: [
          'text-muted-foreground',
          'not-data-toggled:hover:bg-secondary',
          'active:bg-secondary',
          'data-toggled:bg-card data-toggled:shadow-xs data-toggled:text-foreground',
          'data-toggled:ring-[0.5px] data-toggled:ring-border data-toggled:shadow-button-highlight',
        ],
      },
      size: {
        default: 'h-8 px-2 min-w-8 text-sm rounded-sm',
        sm: 'h-8 px-1.5 min-w-8 text-sm rounded-sm',
        lg: 'h-10 px-2.5 min-w-10 text-base rounded-md',
      },
    },
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
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cx(toggleVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
